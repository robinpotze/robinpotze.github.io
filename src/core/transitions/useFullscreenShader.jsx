import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import useViewport from '@hooks/useViewport';

/**
 * Generic full-screen shader host.
 * Provides a fixed full viewport quad with a custom material factory.
 * Returns { mountRef, materialRef, uniforms }.
 * Consumers can set up additional effects to drive uniforms.
 */
export default function useFullscreenShader({ createMaterial, zIndex = 100000, transparent = true }) {
    const mountRef = useRef(null);
    const materialRef = useRef(null);
    const uniformsRef = useRef({});
    const rendererRef = useRef(null);
    const rafRef = useRef(0);
    const frameSubsRef = useRef([]); // { id, fn }
    const lastTimeRef = useRef(0);
    const { width, height, devicePixelRatio } = useViewport();

    // Initialize renderer + scene + material
    useEffect(() => {
        const mount = mountRef.current;
        if (!mount || typeof createMaterial !== 'function') {
            return;
        }
        const renderer = new THREE.WebGLRenderer({ alpha: transparent, antialias: true });
        renderer.setPixelRatio(devicePixelRatio || 1);
        renderer.setSize(width, height);
        Object.assign(renderer.domElement.style, {
            position: 'fixed',
            inset: '0',
            pointerEvents: 'none',
            zIndex: String(zIndex),
        });
        mount.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const material = createMaterial({ width, height });
        materialRef.current = material;
        uniformsRef.current = material.uniforms || {};
        scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

        const loop = (time) => {
            const delta = lastTimeRef.current ? time - lastTimeRef.current : 16.7;
            lastTimeRef.current = time;
            // Update common time uniform.
            if (material.uniforms?.uTime) {
                material.uniforms.uTime.value = time * 0.001;
            }
            // Run subscribers.
            if (frameSubsRef.current.length) {
                for (const sub of frameSubsRef.current) {
                    try { sub.fn(time, delta); } catch { /* ignore */ }
                }
            }
            renderer.render(scene, camera);
            rafRef.current = requestAnimationFrame(loop);
        };
        rafRef.current = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(rafRef.current);
            try { material.dispose(); } catch { /* ignore */ }
            try { renderer.dispose(); } catch { /* ignore */ }
            if (renderer.domElement && mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
            materialRef.current = null;
            rendererRef.current = null;
        };
    }, [createMaterial, width, height, devicePixelRatio, transparent, zIndex]);

    // Resize handler
    useEffect(() => {
        const renderer = rendererRef.current;
        const material = materialRef.current;
        if (!renderer || !material) return;
        renderer.setPixelRatio(devicePixelRatio || 1);
        renderer.setSize(width, height);
        if (material.uniforms?.uResolution) {
            material.uniforms.uResolution.value.set(width, height);
        }
    }, [width, height, devicePixelRatio]);

    function addFrameCallback(fn) {
        if (typeof fn !== 'function') return () => { };
        const id = Math.random().toString(36).slice(2);
        frameSubsRef.current.push({ id, fn });
        return () => {
            frameSubsRef.current = frameSubsRef.current.filter((s) => s.id !== id);
        };
    }

    return { mountRef, materialRef, uniforms: uniformsRef, addFrameCallback };
}