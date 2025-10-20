import { useCallback } from 'react';

// Small helper hook to set CSS variables on :root. Returns a setter function.
export default function useCssVars() {
    const setVar = useCallback((name, value) => {
        if (typeof document === 'undefined') return;
        try {
            document.documentElement.style.setProperty(name, typeof value === 'number' ? String(value) : value);
        } catch (e) {
            // ignore
        }
    }, []);

    const setVars = useCallback((obj) => {
        if (typeof document === 'undefined') return;
        try {
            Object.keys(obj).forEach((k) => {
                document.documentElement.style.setProperty(k, obj[k]);
            });
        } catch (e) {
            // ignore
        }
    }, []);

    return { setVar, setVars };
}
