import { useEffect } from 'react';
import useCssVars from '@hooks/useCssVars';

export default function MouseEffects() {
    const { setVar, setVars } = useCssVars();

    useEffect(() => {
        const handleMove = (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            setVars({
                '--mouse-x': x,
                '--mouse-y': y,
                '--mouse-cx': (x - 0.5) * 2,
                '--mouse-cy': (y - 0.5) * -2
            });
        };

        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, [setVars]);

    return null;
}
