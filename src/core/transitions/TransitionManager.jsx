import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCanvas } from '@core/contexts/CanvasContext';

const easeSegment = (t, power = 2) => 1 - Math.pow(1 - t, power);

const ACTIVE_THEORY_EASE = (t, direction = 1) => {
    const curve = (value) => {
        if (value <= 0.45) {
            return Math.pow(value / 0.45, 1.4) * 0.6;
        }
        if (value <= 0.65) {
            const local = (value - 0.45) / 0.2;
            return 0.6 + easeSegment(local, 2.3) * 0.08;
        }
        if (value <= 0.85) {
            const local = (value - 0.65) / 0.2;
            return 0.68 + easeSegment(local, 1.1) * 0.22;
        }
        const local = (value - 0.85) / 0.15;
        return 0.9 + local * 0.1;
    };

    if (direction >= 0) return curve(t);
    const inverted = 1 - t;
    return 1 - curve(inverted);
};

export function useTransition() {
    const navigate = useNavigate();
    const location = useLocation();
    const { transitionToScene, setTransitionProgress, transitionProgress } = useCanvas();
    const busyRef = useRef(false);
    const rafRef = useRef(null);
    const progressRef = useRef(transitionProgress);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        progressRef.current = transitionProgress;
    }, [transitionProgress]);

    useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

    const animateProgress = useCallback((target, duration = 1400, direction = 1) => {
        const start = performance.now();
        const from = progressRef.current;
        const delta = target - from;

        if (Math.abs(delta) < 0.0001 || duration <= 0) {
            setTransitionProgress(target);
            progressRef.current = target;
            return Promise.resolve();
        }

        return new Promise((resolve) => {
            const step = (now) => {
                const t = Math.min(1, (now - start) / duration);
                const eased = ACTIVE_THEORY_EASE(t, direction);
                const value = from + delta * eased;
                setTransitionProgress(value);

                if (t < 1) {
                    rafRef.current = requestAnimationFrame(step);
                } else {
                    progressRef.current = target;
                    resolve();
                }
            };

            rafRef.current = requestAnimationFrame(step);
        });
    }, [setTransitionProgress]);

    const execute = useCallback(async (to, scene, options = {}) => {
        const { animate = true, duration = 1400, replace = false } = options;
        if (busyRef.current || location.pathname === to) return;

        busyRef.current = true;
        setIsTransitioning(true);
        document.body.setAttribute('data-phase', 'transitioning');

        try {
            const target = scene === 'work' ? 1 : 0;
            const from = progressRef.current;
            const delta = target - from;
            const direction = delta >= 0 ? 1 : -1;
            const preRatio = 0.7;
            const postRatio = 0.3;
            const midPoint = from + delta * 0.82;

            if (animate) {
                await animateProgress(midPoint, duration * preRatio, direction);
            } else {
                setTransitionProgress(target);
                progressRef.current = target;
            }

            await transitionToScene(scene);
            navigate(to, { replace });

            if (animate) {
                await animateProgress(target, duration * postRatio, direction);
            }
        } finally {
            document.body.setAttribute('data-phase', 'ready');
            busyRef.current = false;
            setIsTransitioning(false);
        }
    }, [animateProgress, location.pathname, navigate, setTransitionProgress, transitionToScene]);

    const transitionToHome = useCallback((opts) => execute('/', 'home', opts), [execute]);
    const transitionToWork = useCallback((opts) => execute('/work', 'work', opts), [execute]);

    return {
        transitionTo: execute,
        transitionToHome,
        transitionToWork,
        isTransitioning
    };
}
