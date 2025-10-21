import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }) {
    useEffect(() => {
        const lenis = new Lenis({ lerp: 1, smoothWheel: true });
        // expose instance so pages can programmatically scroll while Lenis is active
        try { window.lenis = lenis; } catch (e) { /* ignore in non-browser env */ }
        let mounted = true;

        function raf(time) {
            if (!mounted) return;
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        return () => { mounted = false; try { window.lenis = null; } catch (e) { } };
    }, []);

    return <>{children}</>;
}
