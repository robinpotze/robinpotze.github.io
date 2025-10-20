import { useEffect, useState } from 'react';

// Returns current viewport width, height and devicePixelRatio and keeps them updated
export default function useViewport() {
    const getViewport = () => ({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
        devicePixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1
    });

    const [viewport, setViewport] = useState(getViewport);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        let rafId = 0;
        const onResize = () => {
            // throttle with rAF to avoid layout thrashing
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                rafId = 0;
                setViewport(getViewport());
            });
        };

        window.addEventListener('resize', onResize);
        // also watch for devicePixelRatio changes via media query if available
        let dprMql = null;
        try {
            dprMql = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
            if (dprMql && dprMql.addEventListener) dprMql.addEventListener('change', onResize);
        } catch (e) {
            // ignore
        }

        return () => {
            window.removeEventListener('resize', onResize);
            if (dprMql && dprMql.removeEventListener) dprMql.removeEventListener('change', onResize);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return viewport;
}
