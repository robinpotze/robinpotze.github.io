import { useEffect } from 'react';
import * as THREE from 'three';
import { useTransition } from '@core/transitions';
import TransitionGLSL from '@shaders/Transition.glsl?raw';
import useFullscreenShader from './useFullscreenShader';
import { applyPayloadRect } from './rectUniforms';

export default function ShaderTransition({ active = false, duration = 800 }) {
    const { payload } = useTransition();

    const { mountRef, materialRef, uniforms, addFrameCallback } = useFullscreenShader({
        createMaterial: ({ width, height }) =>
            new THREE.ShaderMaterial({
                transparent: true,
                uniforms: {
                    uTime: { value: 0 },
                    uProgress: { value: 0 },
                    uResolution: { value: new THREE.Vector2(width, height) },
                    uRectCenter: { value: new THREE.Vector2(0.5, 0.5) },
                    uRectSize: { value: new THREE.Vector2(0.0, 0.0) },
                    uGrid: { value: 36.0 },
                    uDispMap: { value: null },
                    uUseDisp: { value: 0 },
                    uStrength: { value: 0.25 },
                    uThumb: { value: null },
                    uUseThumb: { value: 0 },
                    uAccentColor: { value: new THREE.Color(0.05, 0.22, 0.38) },
                },
                vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position,1.0); }',
                fragmentShader: TransitionGLSL,
            }),
        zIndex: 99999,
    });

    // Rect uniforms via utility
    useEffect(() => {
        if (!materialRef.current) return;
        applyPayloadRect(uniforms.current, payload);
    }, [payload, materialRef, uniforms]);

    // Displacement texture
    useEffect(() => {
        if (!materialRef.current) return;
        let dispTex = null;
        const src = payload?.dispSrc || '/img/displace.png';
        const loader = new THREE.TextureLoader();
        try {
            dispTex = loader.load(
                src,
                (texture) => {
                    texture.minFilter = THREE.LinearFilter;
                    texture.magFilter = THREE.LinearFilter;
                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                    if (uniforms.current?.uDispMap) uniforms.current.uDispMap.value = texture;
                    if (uniforms.current?.uUseDisp) uniforms.current.uUseDisp.value = 1;
                },
                undefined,
                () => {
                    if (uniforms.current?.uUseDisp) uniforms.current.uUseDisp.value = 0;
                }
            );
        } catch {
            if (uniforms.current?.uUseDisp) uniforms.current.uUseDisp.value = 0;
        }
        return () => {
            if (dispTex) {
                try { dispTex.dispose(); } catch { /* ignore */ }
            }
        };
    }, [payload, materialRef, uniforms]);

    // Thumbnail texture
    useEffect(() => {
        if (!materialRef.current) return;
        let tex = null;
        if (payload?.thumbSrc) {
            const loader = new THREE.TextureLoader();
            tex = loader.load(payload.thumbSrc, (texture) => {
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                texture.generateMipmaps = false;
                if (uniforms.current?.uThumb) uniforms.current.uThumb.value = texture;
                if (uniforms.current?.uUseThumb) uniforms.current.uUseThumb.value = 1;
            });
        } else {
            if (uniforms.current?.uUseThumb) uniforms.current.uUseThumb.value = 0;
            if (uniforms.current?.uThumb?.value) {
                try { uniforms.current.uThumb.value.dispose(); } catch { /* ignore */ }
                uniforms.current.uThumb.value = null;
            }
        }
        return () => { if (tex) { try { tex.dispose(); } catch { /* ignore */ } } };
    }, [payload, materialRef, uniforms]);

    // Accent color
    useEffect(() => {
        if (!materialRef.current) return;
        const cssColor = getComputedStyle(document.documentElement).getPropertyValue('--c-BRND').trim() || '#0d365e';
        try {
            const color = new THREE.Color(cssColor);
            if (uniforms.current?.uAccentColor) uniforms.current.uAccentColor.value.copy(color);
        } catch { /* ignore */ }
    }, [payload, materialRef, uniforms]);

    // Progress animation via frame subscriber
    useEffect(() => {
        if (!materialRef.current) return;
        const startTime = performance.now();
        const from = uniforms.current?.uProgress ? uniforms.current.uProgress.value : 0;
        const to = active ? 1 : 0;
        const unsubscribe = addFrameCallback((time) => {
            const t = Math.min(1, (time - startTime) / duration);
            if (uniforms.current?.uProgress) uniforms.current.uProgress.value = from + (to - from) * t;
            if (t >= 1) unsubscribe();
        });
        return () => unsubscribe();
    }, [active, duration, materialRef, uniforms, addFrameCallback]);

    return <div ref={mountRef} className='shader-transition' />;
}
