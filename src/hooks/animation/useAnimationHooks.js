import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const easeCurve = (t) => {
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

// Simple ease out for entry animation
const entryEase = (t) => {
    return 1 - Math.pow(1 - t, 3); // cubic ease out
};

export function useEntryAnimation(ref, routeName, options = {}) {
    const {
        duration = 1.5,
        delay = 0,
        startPosition = [0, -15, -5],
        endPosition = [0, 0, -5],
        startScale = [0.5, 0.5, 0.5],
        endScale = [2.8, 2.8, 2.8],
        scrollEndPosition = null,
        scrollEndScale = null,
        enabled = true,
        scrollProgress = 0
    } = options;

    const finalEndPosition = scrollEndPosition || endPosition;
    const finalEndScale = scrollEndScale || endScale;
    const animationStartTime = useRef(null);
    const hasCompletedEntry = useRef(false);
    const initializedRoute = useRef(routeName);

    useEffect(() => {
        if (initializedRoute.current !== routeName) {
            hasCompletedEntry.current = false;
            animationStartTime.current = null;
            initializedRoute.current = routeName;
        }
    }, [routeName]);

    useFrame(({ clock }) => {
        if (!ref.current || !enabled) return;

        if (!hasCompletedEntry.current) {
            if (animationStartTime.current === null) {
                animationStartTime.current = clock.getElapsedTime();
            }

            const elapsed = clock.getElapsedTime() - animationStartTime.current - delay;

            if (elapsed < 0) return;

            const entryProgress = Math.min(elapsed / duration, 1);
            const eased = entryEase(entryProgress);

            if (entryProgress >= 1) {
                hasCompletedEntry.current = true;
            }

            ref.current.position.x = THREE.MathUtils.lerp(startPosition[0], endPosition[0], eased);
            ref.current.position.y = THREE.MathUtils.lerp(startPosition[1], endPosition[1], eased);
            ref.current.position.z = THREE.MathUtils.lerp(startPosition[2], endPosition[2], eased);

            ref.current.scale.x = THREE.MathUtils.lerp(startScale[0], endScale[0], eased);
            ref.current.scale.y = THREE.MathUtils.lerp(startScale[1], endScale[1], eased);
            ref.current.scale.z = THREE.MathUtils.lerp(startScale[2], endScale[2], eased);
        } else {
            // After entry, apply scroll-based animation
            const scrollEased = easeCurve(scrollProgress);

            ref.current.position.x = THREE.MathUtils.lerp(endPosition[0], finalEndPosition[0], scrollEased);
            ref.current.position.y = THREE.MathUtils.lerp(endPosition[1], finalEndPosition[1], scrollEased);
            ref.current.position.z = THREE.MathUtils.lerp(endPosition[2], finalEndPosition[2], scrollEased);

            ref.current.scale.x = THREE.MathUtils.lerp(endScale[0], finalEndScale[0], scrollEased);
            ref.current.scale.y = THREE.MathUtils.lerp(endScale[1], finalEndScale[1], scrollEased);
            ref.current.scale.z = THREE.MathUtils.lerp(endScale[2], finalEndScale[2], scrollEased);
        }
    });
}

export function useCameraAnimation(cameraRef, routeName, options = {}) {
    const {
        duration = 1.5,
        startPosition = [0, 0, 30],
        endPosition = [0, 0, 20],
        scrollEndPosition = null,
        startFov = 70,
        endFov = 50,
        scrollEndFov = null,
        enabled = true,
        scrollProgress = 0
    } = options;

    const finalEndPosition = scrollEndPosition || endPosition;
    const finalEndFov = scrollEndFov || endFov;

    const animationStartTime = useRef(null);
    const hasCompletedEntry = useRef(false);
    const initializedRoute = useRef(routeName);

    useEffect(() => {
        if (initializedRoute.current !== routeName) {
            hasCompletedEntry.current = false;
            animationStartTime.current = null;
            initializedRoute.current = routeName;
        }
    }, [routeName]);

    useFrame(({ clock, camera }) => {
        if (!enabled) return;

        const targetCamera = cameraRef?.current || camera;
        if (!targetCamera) return;

        if (!hasCompletedEntry.current) {
            if (animationStartTime.current === null) {
                animationStartTime.current = clock.getElapsedTime();
            }

            const elapsed = clock.getElapsedTime() - animationStartTime.current;
            const progress = Math.min(elapsed / duration, 1);
            const eased = entryEase(progress);

            if (progress >= 1) {
                hasCompletedEntry.current = true;
            }

            targetCamera.position.x = THREE.MathUtils.lerp(startPosition[0], endPosition[0], eased);
            targetCamera.position.y = THREE.MathUtils.lerp(startPosition[1], endPosition[1], eased);
            targetCamera.position.z = THREE.MathUtils.lerp(startPosition[2], endPosition[2], eased);

            if (targetCamera.isPerspectiveCamera) {
                targetCamera.fov = THREE.MathUtils.lerp(startFov, endFov, eased);
                targetCamera.updateProjectionMatrix();
            }
        } else {
            // After entry, apply scroll-based animation
            const scrollEased = easeCurve(scrollProgress);

            targetCamera.position.x = THREE.MathUtils.lerp(endPosition[0], finalEndPosition[0], scrollEased);
            targetCamera.position.y = THREE.MathUtils.lerp(endPosition[1], finalEndPosition[1], scrollEased);
            targetCamera.position.z = THREE.MathUtils.lerp(endPosition[2], finalEndPosition[2], scrollEased);

            if (targetCamera.isPerspectiveCamera) {
                targetCamera.fov = THREE.MathUtils.lerp(endFov, finalEndFov, scrollEased);
                targetCamera.updateProjectionMatrix();
            }
        }
    });
}

export function useFadeAnimation(ref, routeName, options = {}) {
    const {
        duration = 1.0,
        delay = 0,
        startValue = 0,
        endValue = 1,
        property = 'intensity',
        enabled = true,
        scrollProgress = 0
    } = options;

    const animationStartTime = useRef(null);
    const hasCompletedEntry = useRef(false);
    const initializedRoute = useRef(routeName);

    useEffect(() => {
        if (initializedRoute.current !== routeName) {
            hasCompletedEntry.current = false;
            animationStartTime.current = null;
            initializedRoute.current = routeName;
        }
    }, [routeName]);

    useFrame(({ clock }) => {
        if (!ref.current || !enabled) return;

        let value = endValue;

        if (!hasCompletedEntry.current) {
            if (animationStartTime.current === null) {
                animationStartTime.current = clock.getElapsedTime();
            }

            const elapsed = clock.getElapsedTime() - animationStartTime.current - delay;

            if (elapsed < 0) return;

            const entryProgress = Math.min(elapsed / duration, 1);
            const eased = entryEase(entryProgress);

            value = THREE.MathUtils.lerp(startValue, endValue, eased);

            if (entryProgress >= 1) {
                hasCompletedEntry.current = true;
            }
        } else {
            value = endValue;
        }

        if (ref.current[property] !== undefined) {
            ref.current[property] = value;
        }
    });
}
