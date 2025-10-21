import React, { createContext, useCallback, useState } from 'react';

/**
 * Transition context shape.
 * active: transition currently animating (generic shader or boot) out phase.
 * duration: current active phase duration in ms.
 * payload: metadata the shaders use (rect, viewport, mode, etc.).
 */
const TransitionContext = createContext(null);

export function useTransition() {
    const ctx = React.useContext(TransitionContext);
    if (!ctx) throw new Error('useTransition must be used within TransitionProvider');
    return ctx;
}

// Small timeout promise utility.
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function TransitionProvider({ children }) {
    const [active, setActive] = useState(false);
    const [duration, setDuration] = useState(800);
    const [payload, setPayload] = useState(null);

    /**
     * Start a standard (non-boot) transition.
     * Accepts either a number (duration) or an options object: { out, payload }.
     * Returns a promise resolving after the out duration elapses.
     */
    const start = useCallback((options = {}) => {
        const outDuration = typeof options === 'number' ? options : options.out ?? 600;
        setDuration(outDuration);
        setPayload(typeof options === 'object' ? options.payload ?? null : null);
        setActive(true);
        return sleep(outDuration);
    }, []);

    /**
     * Begin the inward (hide) phase of a transition. Clears payload slightly after animation end.
     */
    const end = useCallback((inDuration = 600) => {
        setDuration(inDuration);
        setActive(false);
        // Allow shader a couple frames to read payload during in-phase.
        setTimeout(() => setPayload(null), inDuration + 20);
    }, []);

    /**
     * Wait for the custom boot coverage event fired by BootTransition when coverage threshold reached.
     * Always attaches a one-off listener even if event may already have fired on a previous cycle.
     */
    const waitForBootCoverage = useCallback(() => {
        return new Promise((resolve) => {
            const handler = (e) => {
                window.removeEventListener('boot:coverage', handler);
                resolve(e.detail);
            };
            window.addEventListener('boot:coverage', handler);
        });
    }, []);

    /**
     * Start a boot transition. Returns { outPromise, coveragePromise } so callers can await the moment
     * content is fully covered (coveragePromise) versus the complete out duration.
     */
    const startBoot = useCallback(
        (options = {}) => {
            const outDuration = options.out ?? duration;
            const newPayload = { ...(options.payload || {}), mode: 'boot' };
            setDuration(outDuration);
            setPayload(newPayload);
            setActive(true);
            return {
                outPromise: sleep(outDuration),
                coveragePromise: waitForBootCoverage(),
            };
        },
        [duration, waitForBootCoverage]
    );

    /**
     * Replay the boot transition out phase (used for restart animations) preserving existing payload
     * when possible and incrementing a cycle counter consumed by BootTransition.
     */
    const restartBoot = useCallback(
        (options = {}) => {
            setActive(true);
            const outDuration = options.out ?? duration;
            setDuration(outDuration);
            setPayload((prev) => {
                if (prev?.mode === 'boot') return { ...prev, cycle: (prev.cycle || 0) + 1 };
                return {
                    mode: 'boot',
                    rect: prev?.rect || null,
                    viewport: prev?.viewport || { width: window.innerWidth, height: window.innerHeight },
                    cycle: 1,
                };
            });
            return sleep(outDuration);
        },
        [duration]
    );

    const value = {
        active,
        duration,
        payload,
        start,
        end,
        restartBoot,
        startBoot,
        waitForBootCoverage,
    };

    return <TransitionContext.Provider value={value}>{children}</TransitionContext.Provider>;
}
