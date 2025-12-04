import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function useSimpleRouteTransition(routeName) {
    const location = useLocation();
    const previousPath = useRef(location.pathname);
    const isTransitioning = useRef(false);

    useEffect(() => {
        const currentPath = location.pathname;

        if (previousPath.current !== currentPath && previousPath.current !== null) {
            isTransitioning.current = true;

            const timeout = setTimeout(() => {
                isTransitioning.current = false;
            }, 1500);

            return () => clearTimeout(timeout);
        }

        previousPath.current = currentPath;
    }, [location.pathname]);

    return {
        routeName,
        isTransitioning: isTransitioning.current,
        previousPath: previousPath.current
    };
}
