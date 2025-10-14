import React, { createContext, useCallback, useState } from 'react';

const TransitionContext = createContext({
    active: false,
    duration: 800,
    payload: null,
    start: async (opts = {}) => { },
    end: (inn = 600) => { }
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
        // set active to false so ShaderTransition animates progress back to 0
        setActive(false);
        // clear payload after ending
        setTimeout(() => setPayload(null), inn + 20);
    }, []);

    return (
        <TransitionContext.Provider value={{ active, duration, payload, start, end }}>
            {children}
        </TransitionContext.Provider>
    );
}
