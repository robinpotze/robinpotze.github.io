import React, { createContext, useCallback, useState } from 'react';

const TransitionContext = createContext({
    active: false,
    duration: 800,
    payload: null,
    start: async (opts = {}) => { },
    end: (inn = 600) => { },
    restartBoot: (opts = {}) => { },
    startBoot: async (opts = {}) => ({ outPromise: Promise.resolve(), coveragePromise: Promise.resolve() }),
    waitForBootCoverage: async () => { }
});

export function useTransition() {
    const ctx = React.useContext(TransitionContext);
    if (!ctx) throw new Error('useTransition must be used within TransitionProvider');
    return ctx;
}

export default function TransitionProvider({ children }) {
    const [active, setActive] = useState(false);
    const [duration, setDuration] = useState(800);
    const [payload, setPayload] = useState(null);

    const start = useCallback((opts = {}) => {
        const out = typeof opts === 'number' ? opts : opts.out ?? 600;
        setDuration(out);
        setPayload(opts.payload ?? null);
        setActive(true);
        return new Promise((resolve) => {
            setTimeout(resolve, out);
        });
    }, []);

    const end = useCallback((inn = 600) => {
        setDuration(inn);
        setActive(false);
        setTimeout(() => setPayload(null), inn + 20);
    }, []);

    // Replay boot out phase without discarding existing boot payload (if any).
    // If no boot payload currently, optionally synthesize one.
    const restartBoot = useCallback((opts = {}) => {
        setActive(true);
        const out = opts.out ?? duration;
        setDuration(out);
        setPayload((prev) => {
            if (prev?.mode === 'boot') return { ...prev, cycle: (prev.cycle || 0) + 1 };
            return { mode: 'boot', rect: prev?.rect || null, viewport: prev?.viewport || { width: window.innerWidth, height: window.innerHeight }, cycle: 1 };
        });
        return new Promise((resolve) => setTimeout(resolve, out));
    }, [duration]);

    // Promise that resolves once the boot coverage event fires (after start/resume)
    const waitForBootCoverage = useCallback(() => {
        // If already active and coverage maybe emitted, we still attach once.
        return new Promise((resolve) => {
            const handler = (e) => {
                window.removeEventListener('boot:coverage', handler);
                resolve(e.detail);
            };
            window.addEventListener('boot:coverage', handler);
        });
    }, []);

    // Start a boot transition and return both the out completion and coverage promises.
    const startBoot = useCallback((opts = {}) => {
        const out = opts.out ?? duration;
        // Provide/augment payload
        const newPayload = { ...(opts.payload || {}), mode: 'boot' };
        setDuration(out);
        setPayload(newPayload);
        setActive(true);
        const outPromise = new Promise((resolve) => setTimeout(resolve, out));
        const coveragePromise = waitForBootCoverage();
        return { outPromise, coveragePromise };
    }, [duration, waitForBootCoverage]);

    return (
        <TransitionContext.Provider value={{ active, duration, payload, start, end, restartBoot, startBoot, waitForBootCoverage }}>
            {children}
        </TransitionContext.Provider>
    );
}
