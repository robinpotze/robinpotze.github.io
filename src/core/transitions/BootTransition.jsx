import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import BootGLSL from '@shaders/BootTransition.glsl?raw';
import { useTransition } from '@core/transitions';
import useViewport from '@hooks/useViewport';

export default function BootTransition({ grid = 40, coverageThreshold = 0.72 }) {
    const mountRef = useRef(null);
    const materialRef = useRef(null);
    const animRef = useRef(null);
    const rendererRef = useRef(null);
    const outAnimRef = useRef(null);
    const inAnimRef = useRef(null);
    const { active, duration, payload } = useTransition();
    const { width, height, devicePixelRatio } = useViewport();
    const isBoot = payload?.mode === 'boot';

    useEffect(() => {
        if (!isBoot) return;
        const mount = mountRef.current; if (!mount) return;
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(devicePixelRatio || 1);
        renderer.setSize(width, height);
        Object.assign(renderer.domElement.style, { position: 'fixed', inset: '0', pointerEvents: 'none', zIndex: '100000' });
        mount.appendChild(renderer.domElement);
        rendererRef.current = renderer;
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const material = new THREE.ShaderMaterial({
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
                uCoverageThreshold: { value: coverageThreshold }
            },
            vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position,1.0); }`,
            fragmentShader: BootGLSL
        });
        materialRef.current = material;
        scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));
        const raf = (time) => {
            material.uniforms.uTime.value = time * 0.001;
            renderer.render(scene, camera);
            animRef.current = requestAnimationFrame(raf);
        };
        animRef.current = requestAnimationFrame(raf);
        return () => {
            cancelAnimationFrame(animRef.current);
            material.dispose();
            renderer.dispose();
            if (renderer.domElement && mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
            rendererRef.current = null;
        };
    }, [isBoot, width, height, devicePixelRatio, active, grid]);

    // Accent color uniform update (separate effect to satisfy Rules of Hooks)
    useEffect(() => {
        if (!isBoot || !materialRef.current) return;
        const mat = materialRef.current;
        try {
            const cssColor = getComputedStyle(document.documentElement).getPropertyValue('--c-BRND').trim();
            if (cssColor) mat.uniforms.uAccentColor.value.set(cssColor);
        } catch { }
    }, [isBoot, payload]);

    useEffect(() => {
        if (!isBoot || !materialRef.current) return;
        const rect = payload?.rect; const viewport = payload?.viewport;
        if (!rect || !viewport) return;
        const mat = materialRef.current;
        const cx = rect.centerX / viewport.width;
        const cy = 1.0 - rect.centerY / viewport.height;
        const w = rect.width / viewport.width;
        const h = rect.height / viewport.height;
        mat.uniforms.uRectCenter.value.set(cx, cy);
        mat.uniforms.uRectSize.value.set(w, h);
    }, [payload, isBoot]);

    const lastCycleRef = useRef(payload?.cycle || 0);
    const coverageEmittedRef = useRef(false);

    // Animate out phase when active becomes true OR cycle increments (restartBoot)
    useEffect(() => {
        if (!isBoot || !materialRef.current) return;
        const mat = materialRef.current;
        const cycle = payload?.cycle || 0;
        const shouldReplay = active || cycle !== lastCycleRef.current;
        if (shouldReplay) {
            // reset in progress
            mat.uniforms.uInProgress.value = 0;
            const start = performance.now();
            const outDur = duration || 1600;
            const from = 0;
            const step = () => {
                const t = Math.min(1, (performance.now() - start) / outDur);
                mat.uniforms.uOutProgress.value = from + (1 - from) * t;
                // Handshake dispatch once coverage threshold reached (only once per activation)
                if (mat.uniforms.uOutProgress.value >= mat.uniforms.uCoverageThreshold.value && !coverageEmittedRef.current) {
                    coverageEmittedRef.current = true;
                    window.dispatchEvent(new CustomEvent('boot:coverage', { detail: { progress: mat.uniforms.uOutProgress.value } }));
                }
                if (t < 1 && (active || cycle !== lastCycleRef.current)) requestAnimationFrame(step);
            };
            mat.uniforms.uOutProgress.value = 0;
            coverageEmittedRef.current = false;
            requestAnimationFrame(step);
            lastCycleRef.current = cycle;
        }
    }, [active, duration, isBoot, payload?.cycle]);

    // Animate in phase when active goes false (after navigation end())
    useEffect(() => {
        if (!isBoot || !materialRef.current) return;
        const mat = materialRef.current;
        if (!active && mat.uniforms.uOutProgress.value >= 0.999) {
            const start = performance.now();
            const inDur = duration || 1200;
            const step = () => {
                const t = Math.min(1, (performance.now() - start) / inDur);
                mat.uniforms.uInProgress.value = t;
                if (t < 1 && !active) requestAnimationFrame(step);
            };
            mat.uniforms.uInProgress.value = 0;
            requestAnimationFrame(step);
        }
    }, [active, duration, isBoot]);

    if (!isBoot) return null;
    return <div ref={mountRef} className="boot-transition" />;
}