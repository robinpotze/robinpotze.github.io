import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Simple hook to track route transitions
 * Animations are handled by useAnimationHooks in Canvas components
 */
export function useSimpleRouteTransition(routeName) {
    const location = useLocation();
    const previousPath = useRef(location.pathname);
    const isTransitioning = useRef(false);

    useEffect(() => {
        const currentPath = location.pathname;

        if (previousPath.current !== currentPath && previousPath.current !== null) {
            // Route is changing
            isTransitioning.current = true;

            // Reset after transition duration
            const timeout = setTimeout(() => {
                isTransitioning.current = false;
            }, 1500); // Match max animation duration

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
