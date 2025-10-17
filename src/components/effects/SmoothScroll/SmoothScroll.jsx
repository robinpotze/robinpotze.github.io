import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }) {
    useEffect(() => {
        const lenis = new Lenis({ lerp: 1, smoothWheel: true });
        let mounted = true;

        function raf(time) {
            if (!mounted) return;
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        return () => { mounted = false; };
    }, []);

    return <>{children}</>;
}
