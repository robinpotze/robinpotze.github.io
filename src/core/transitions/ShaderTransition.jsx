import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTransition } from '@core/transitions';
import TransitionGLSL from "@shaders/Transition.glsl?raw";
import useViewport from '@hooks/useViewport';

export default function ShaderTransition({ active = false, duration = 800 }) {
    const mountRef = useRef(null);
    const materialRef = useRef(null);
    const startTimeRef = useRef(null);
    const animRef = useRef(null);
    const rendererRef = useRef(null);
    const { width, height, devicePixelRatio } = useViewport();

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(devicePixelRatio || 1);
        renderer.setSize(width, height);
        rendererRef.current = renderer;
        renderer.domElement.style.pointerEvents = 'none';
        renderer.domElement.style.position = 'fixed';
        renderer.domElement.style.inset = '0';
        renderer.domElement.style.zIndex = '99999';
        mount.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const material = new THREE.ShaderMaterial({
            transparent: true,
            uniforms: {
                uTime: { value: 0 },
                uProgress: { value: 0 },
                uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                uRectCenter: { value: new THREE.Vector2(0.5, 0.5) },
                uRectSize: { value: new THREE.Vector2(0.0, 0.0) },
                uThumb: { value: null },
                uUseThumb: { value: 0 },
                uDispMap: { value: null },
                uUseDisp: { value: 0 },
                uStrength: { value: 0.25 }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4(position, 1.0);
                }
            `,
            fragmentShader: TransitionGLSL
        });

        materialRef.current = material;

        const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
        scene.add(quad);

        // viewport-driven resize is handled by separate effect; keep a no-op here for safety
        const onResize = () => {
            const r = rendererRef.current;
            if (!r) return;
            r.setSize(width, height);
            material.uniforms.uResolution.value.set(width, height);
        };
        window.addEventListener('resize', onResize);

        let t = 0;
        const raf = (time) => {
            t = time * 0.001;
            material.uniforms.uTime.value = t;
            renderer.render(scene, camera);
            animRef.current = requestAnimationFrame(raf);
        };
        animRef.current = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', onResize);
            mount.removeChild(renderer.domElement);
            material.dispose();
            renderer.dispose();
            rendererRef.current = null;
        };
    }, []);

    // update renderer size when viewport changes
    useEffect(() => {
        const renderer = rendererRef.current;
        if (!renderer || !materialRef.current) return;
        renderer.setPixelRatio(devicePixelRatio || 1);
        renderer.setSize(width, height);
        materialRef.current.uniforms.uResolution.value.set(width, height);
    }, [width, height, devicePixelRatio]);

    // update rect uniforms when payload is set in TransitionProvider
    const { payload } = useTransition();

    useEffect(() => {
        if (!materialRef.current) return;
        const mat = materialRef.current;
        if (!payload || !payload.rect || !payload.viewport) {
            // reset to default
            mat.uniforms.uRectCenter.value.set(0.5, 0.5);
            mat.uniforms.uRectSize.value.set(0.0, 0.0);
            return;
        }

        const { rect, viewport } = payload;
        // convert center to UV [0..1]
        const cx = rect.centerX / viewport.width;
        const cy = 1.0 - rect.centerY / viewport.height; // invert Y for WebGL coord
        const w = rect.width / viewport.width;
        const h = rect.height / viewport.height;

        mat.uniforms.uRectCenter.value.set(cx, cy);
        mat.uniforms.uRectSize.value.set(w, h);
    }, [payload]);

    // load thumbnail texture when available
    useEffect(() => {
        if (!materialRef.current) return;
        const mat = materialRef.current;
        let tex = null;
        if (payload && payload.thumbSrc) {
            const loader = new THREE.TextureLoader();
            tex = loader.load(payload.thumbSrc, (texture) => {
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                texture.generateMipmaps = false;
                mat.uniforms.uThumb.value = texture;
                mat.uniforms.uUseThumb.value = 1;
            });
        } else {
            mat.uniforms.uUseThumb.value = 0;
            if (mat.uniforms.uThumb.value) {
                try { mat.uniforms.uThumb.value.dispose(); } catch (e) { }
                mat.uniforms.uThumb.value = null;
            }
        }

        return () => {
            if (tex) {
                try { tex.dispose(); } catch (e) { }
            }
        };
    }, [payload]);

    // load displacement map if provided in payload.dispSrc or fallback to /img/displace.png
    useEffect(() => {
        if (!materialRef.current) return;
        const mat = materialRef.current;
        let dispTex = null;
        const loader = new THREE.TextureLoader();
        const src = payload?.dispSrc || '/img/displace.png';
        // try loading; if not found, we silently keep procedural noise
        try {
            dispTex = loader.load(src, (texture) => {
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                mat.uniforms.uDispMap.value = texture;
                mat.uniforms.uUseDisp.value = 1;
            }, undefined, () => {
                // on error, disable
                mat.uniforms.uUseDisp.value = 0;
            });
        } catch (e) {
            mat.uniforms.uUseDisp.value = 0;
        }

        return () => {
            if (dispTex) {
                try { dispTex.dispose(); } catch (e) { }
            }
        };
    }, [payload]);

    useEffect(() => {
        if (!materialRef.current) return;
        const mat = materialRef.current;
        const start = performance.now();
        const from = mat.uniforms.uProgress.value;
        const to = active ? 1 : 0;

        const step = () => {
            const now = performance.now();
            const t = Math.min(1, (now - start) / duration);
            mat.uniforms.uProgress.value = from + (to - from) * t;
            if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [active, duration]);

    return <div ref={mountRef} className="shader-transition" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 99999 }} />;
}
