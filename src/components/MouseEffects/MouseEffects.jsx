import { useEffect } from 'react';

export default function MouseEffects() {
    useEffect(() => {
        const handleMove = (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            document.documentElement.style.setProperty('--mouse-x', x);
            document.documentElement.style.setProperty('--mouse-y', y);
            // also set centered values for cards
            document.documentElement.style.setProperty('--mouse-cx', (x - 0.5) * 2);
            document.documentElement.style.setProperty('--mouse-cy', (y - 0.5) * 2);
        };

        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    return null;
}
