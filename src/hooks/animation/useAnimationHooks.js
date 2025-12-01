import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Custom easing function matching ActiveTheory's style
const activeTheoryEase = (t) => {
    if (t <= 0.45) {
        return Math.pow(t / 0.45, 1.4) * 0.6;
    }
    if (t <= 0.65) {
        const local = (t - 0.45) / 0.2;
        return 0.6 + Math.pow(local, 2.3) * 0.08;
    }
    if (t <= 0.85) {
        const local = (t - 0.65) / 0.2;
        return 0.68 + Math.pow(local, 1.1) * 0.22;
    }
    const local = (t - 0.85) / 0.15;
    return 0.9 + local * 0.1;
};

// Hook for animating objects on route entry
export function useEntryAnimation(ref, routeName, options = {}) {
    const {
        duration = 1.5,
        delay = 0,
        startPosition = [0, -15, -5],
        endPosition = [0, 0, -5],
        startScale = [0.5, 0.5, 0.5],
        endScale = [2.8, 2.8, 2.8],
        enabled = true
    } = options;

    const animationStartTime = useRef(null);
    const hasAnimated = useRef(false);
    const initializedRoute = useRef(routeName);

    // Reset when component mounts or route actually changes
    useEffect(() => {
        if (initializedRoute.current !== routeName) {
            hasAnimated.current = false;
            animationStartTime.current = null;
            initializedRoute.current = routeName;
        }
    }, [routeName]);

    useFrame(({ clock }) => {
        if (!ref.current || !enabled || hasAnimated.current) return;

        if (animationStartTime.current === null) {
            animationStartTime.current = clock.getElapsedTime();
        }

        const elapsed = clock.getElapsedTime() - animationStartTime.current - delay;

        if (elapsed < 0) return; // Still in delay period

        const progress = Math.min(elapsed / duration, 1);
        const eased = activeTheoryEase(progress);

        // Animate position
        ref.current.position.x = THREE.MathUtils.lerp(startPosition[0], endPosition[0], eased);
        ref.current.position.y = THREE.MathUtils.lerp(startPosition[1], endPosition[1], eased);
        ref.current.position.z = THREE.MathUtils.lerp(startPosition[2], endPosition[2], eased);

        // Animate scale
        ref.current.scale.x = THREE.MathUtils.lerp(startScale[0], endScale[0], eased);
        ref.current.scale.y = THREE.MathUtils.lerp(startScale[1], endScale[1], eased);
        ref.current.scale.z = THREE.MathUtils.lerp(startScale[2], endScale[2], eased);

        if (progress >= 1) {
            hasAnimated.current = true;
        }
    });
}

// Hook for camera animations
export function useCameraAnimation(cameraRef, routeName, options = {}) {
    const {
        duration = 1.5,
        startPosition = [0, 0, 30],
        endPosition = [0, 0, 20],
        startFov = 70,
        endFov = 50,
        enabled = true
    } = options;

    const animationStartTime = useRef(null);
    const hasAnimated = useRef(false);
    const initializedRoute = useRef(routeName);

    useEffect(() => {
        if (initializedRoute.current !== routeName) {
            hasAnimated.current = false;
            animationStartTime.current = null;
            initializedRoute.current = routeName;
        }
    }, [routeName]);

    useFrame(({ clock, camera }) => {
        if (!enabled || hasAnimated.current) return;

        const targetCamera = cameraRef?.current || camera;
        if (!targetCamera) return;

        if (animationStartTime.current === null) {
            animationStartTime.current = clock.getElapsedTime();
        }

        const elapsed = clock.getElapsedTime() - animationStartTime.current;
        const progress = Math.min(elapsed / duration, 1);
        const eased = activeTheoryEase(progress);

        // Animate camera position
        targetCamera.position.x = THREE.MathUtils.lerp(startPosition[0], endPosition[0], eased);
        targetCamera.position.y = THREE.MathUtils.lerp(startPosition[1], endPosition[1], eased);
        targetCamera.position.z = THREE.MathUtils.lerp(startPosition[2], endPosition[2], eased);

        // Animate FOV if perspective camera
        if (targetCamera.isPerspectiveCamera) {
            targetCamera.fov = THREE.MathUtils.lerp(startFov, endFov, eased);
            targetCamera.updateProjectionMatrix();
        }

        if (progress >= 1) {
            hasAnimated.current = true;
        }
    });
}

// Hook for fade animations (lights, opacity, etc.)
export function useFadeAnimation(ref, routeName, options = {}) {
    const {
        duration = 1.0,
        delay = 0,
        startValue = 0,
        endValue = 1,
        property = 'intensity',
        enabled = true
    } = options;

    const animationStartTime = useRef(null);
    const hasAnimated = useRef(false);
    const initializedRoute = useRef(routeName);

    useEffect(() => {
        if (initializedRoute.current !== routeName) {
            hasAnimated.current = false;
            animationStartTime.current = null;
            initializedRoute.current = routeName;
        }
    }, [routeName]);

    useFrame(({ clock }) => {
        if (!ref.current || !enabled || hasAnimated.current) return;

        if (animationStartTime.current === null) {
            animationStartTime.current = clock.getElapsedTime();
        }

        const elapsed = clock.getElapsedTime() - animationStartTime.current - delay;

        if (elapsed < 0) return;

        const progress = Math.min(elapsed / duration, 1);
        const eased = activeTheoryEase(progress);

        const value = THREE.MathUtils.lerp(startValue, endValue, eased);

        if (ref.current[property] !== undefined) {
            ref.current[property] = value;
        }

        if (progress >= 1) {
            hasAnimated.current = true;
        }
    });
}
