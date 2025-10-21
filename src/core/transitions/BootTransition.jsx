import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import BootGLSL from '@shaders/BootTransition.glsl?raw';
import { useTransition } from '@core/transitions';
import useFullscreenShader from './useFullscreenShader';
import { applyPayloadRect } from './rectUniforms';

export default function BootTransition({ grid = 40, coverageThreshold = 0.72 }) {
    const { active, duration, payload } = useTransition();
    const isBoot = payload?.mode === 'boot';
    const coverageEmittedRef = useRef(false);
    const lastCycleRef = useRef(payload?.cycle || 0);

    const { mountRef, materialRef, uniforms, addFrameCallback } = useFullscreenShader({
        createMaterial: ({ width, height }) =>
            new THREE.ShaderMaterial({
                transparent: true,
                uniforms: {
                    uTime: { value: 0 },
                    uOutProgress: { value: 0 },
                    uInProgress: { value: 0 },
                    uResolution: { value: new THREE.Vector2(width, height) },
                    uRectCenter: { value: new THREE.Vector2(0.5, 0.5) },
                    uRectSize: { value: new THREE.Vector2(0.2, 0.2) },
                    uGrid: { value: grid },
                    uAccentColor: { value: new THREE.Color(0.08, 0.32, 0.55) },
                    uCoverageThreshold: { value: coverageThreshold },
                },
                vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position,1.0); }',
                fragmentShader: BootGLSL,
            }),
    });

    // Accent color sync
    useEffect(() => {
        if (!isBoot || !materialRef.current) return;
        try {
            const cssColor = getComputedStyle(document.documentElement).getPropertyValue('--c-BRND').trim();
            if (cssColor && uniforms.current?.uAccentColor) uniforms.current.uAccentColor.value.set(cssColor);
        } catch { /* ignore */ }
    }, [isBoot, payload, materialRef, uniforms]);

    // Rect uniform updates using utility
    useEffect(() => {
        if (!isBoot || !materialRef.current) return;
        applyPayloadRect(uniforms.current, payload);
    }, [payload, isBoot, materialRef, uniforms]);

    // Out phase progress via frame subscriber
    useEffect(() => {
        if (!isBoot || !materialRef.current) return;
        const cycle = payload?.cycle || 0;
        const shouldReplay = active || cycle !== lastCycleRef.current;
        if (!shouldReplay) return;
        if (!uniforms.current) return;
        uniforms.current.uInProgress.value = 0;
        uniforms.current.uOutProgress.value = 0;
        coverageEmittedRef.current = false;
        lastCycleRef.current = cycle;
        const startTime = performance.now();
        const outDur = duration || 1600;
        const unsubscribe = addFrameCallback((time) => {
            const t = Math.min(1, (time - startTime) / outDur);
            if (!uniforms.current) return;
            uniforms.current.uOutProgress.value = t;
            if (t >= uniforms.current.uCoverageThreshold.value && !coverageEmittedRef.current) {
                coverageEmittedRef.current = true;
                window.dispatchEvent(new CustomEvent('boot:coverage', { detail: { progress: t } }));
            }
            if (t >= 1 || (!active && cycle === lastCycleRef.current)) {
                unsubscribe();
            }
        });
        return () => unsubscribe();
    }, [active, duration, isBoot, payload?.cycle, materialRef, uniforms, addFrameCallback]);

    // In phase (deactivation) via subscriber
    useEffect(() => {
        if (!isBoot || !materialRef.current) return;
        if (!uniforms.current) return;
        if (active || uniforms.current.uOutProgress.value < 0.999) return;
        uniforms.current.uInProgress.value = 0;
        const startTime = performance.now();
        const inDur = duration || 1200;
        const unsubscribe = addFrameCallback((time) => {
            const t = Math.min(1, (time - startTime) / inDur);
            if (!uniforms.current) return;
            uniforms.current.uInProgress.value = t;
            if (t >= 1 || active) unsubscribe();
        });
        return () => unsubscribe();
    }, [active, duration, isBoot, materialRef, uniforms, addFrameCallback]);

    if (!isBoot) return null;
    return <div ref={mountRef} className="boot-transition" />;
}