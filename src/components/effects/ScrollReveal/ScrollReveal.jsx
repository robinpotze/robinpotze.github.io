import { useInView } from 'framer-motion';
import { useMemo, useRef } from 'react';

import './ScrollReveal.css';

const ScrollReveal = ({ children }) => {
    const ref = useRef(null);

    const observerOptions = useMemo(() => ({
        rootMargin: '0px 0px -20% 0px',
        threshold: 0.1,
        root: typeof globalThis !== 'undefined' && globalThis.lenis ? null : undefined
    }), []);

    const inView = useInView(ref, observerOptions);

    return (
        <div
            ref={ref}
            className={`scroll-reveal ${inView ? 'visible' : ''}`}
        >
            <p className="scroll-reveal-text">
                {children}
            </p>
        </div>
    );
};

export default ScrollReveal;
