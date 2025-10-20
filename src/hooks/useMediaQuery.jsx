import { useEffect, useState } from 'react';

export default function useMediaQuery(query) {
    const isClient = typeof window !== 'undefined' && !!window.matchMedia;
    const get = () => (isClient ? !!window.matchMedia(query).matches : false);
    const [matches, setMatches] = useState(get);

    useEffect(() => {
        if (!isClient) return;
        const mql = window.matchMedia(query);
        const handler = (e) => setMatches(!!e.matches);
        if (mql.addEventListener) mql.addEventListener('change', handler);
        else mql.addListener(handler);
        setMatches(!!mql.matches);
        return () => {
            if (mql.removeEventListener) mql.removeEventListener('change', handler);
            else mql.removeListener(handler);
        };
    }, [query, isClient]);

    return matches;
}
