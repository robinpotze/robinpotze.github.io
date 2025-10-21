import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTransition } from '@core/transitions';
import TransitionGLSL from '@shaders/Transition.glsl?raw';
import useViewport from '@hooks/useViewport';

export default function ShaderTransition({ active = false, duration = 800 }) {
    const mountRef = useRef(null);
    const materialRef = useRef(null);
    const animRef = useRef(null);
    const rendererRef = useRef(null);
    const { width, height, devicePixelRatio } = useViewport();
    const { payload } = useTransition();

    // Init WebGL
    useEffect(() => {
        const mount = mountRef.current; if (!mount) return;
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(devicePixelRatio || 1);
        renderer.setSize(width, height);
        renderer.domElement.style.pointerEvents = 'none';
        renderer.domElement.style.position = 'fixed';
        renderer.domElement.style.inset = '0';
        renderer.domElement.style.zIndex = '99999';
        mount.appendChild(renderer.domElement);
        rendererRef.current = renderer;
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const material = new THREE.ShaderMaterial({
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
                uAccentColor: { value: new THREE.Color(0.05, 0.22, 0.38) }
            },
            vertexShader: 'varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position,1.0); }',
            fragmentShader: TransitionGLSL
        });
        materialRef.current = material;
        scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));
        const onResize = () => {
            const r = rendererRef.current; if (!r) return;
            r.setSize(width, height);
            material.uniforms.uResolution.value.set(width, height);
        };
        window.addEventListener('resize', onResize);
        const raf = (time) => {
            material.uniforms.uTime.value = time * 0.001;
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

    // Resize updates
    useEffect(() => {
        const renderer = rendererRef.current; const mat = materialRef.current;
        if (!renderer || !mat) return;
        renderer.setPixelRatio(devicePixelRatio || 1);
        renderer.setSize(width, height);
        mat.uniforms.uResolution.value.set(width, height);
    }, [width, height, devicePixelRatio]);

    // Rect updates
    useEffect(() => {
        const mat = materialRef.current; if (!mat) return;
        if (!payload || !payload.rect) {
            mat.uniforms.uRectCenter.value.set(0.5, 0.5);
            mat.uniforms.uRectSize.value.set(0.0, 0.0);
            return;
        }
        const { rect, viewport } = payload;
        const vw = viewport?.width || width;
        const vh = viewport?.height || height;
        const cx = rect.centerX / vw;
        const cy = 1.0 - rect.centerY / vh;
        const w = rect.width / vw;
        const h = rect.height / vh;
        mat.uniforms.uRectCenter.value.set(cx, cy);
        mat.uniforms.uRectSize.value.set(w, h);
    }, [payload, width, height]);

    // Displacement map loader
    useEffect(() => {
        const mat = materialRef.current; if (!mat) return;
        let dispTex = null;
        const loader = new THREE.TextureLoader();
        const src = payload?.dispSrc || '/img/displace.png';
        try {
            dispTex = loader.load(src, (texture) => {
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                mat.uniforms.uDispMap.value = texture;
                mat.uniforms.uUseDisp.value = 1;
            }, undefined, () => { mat.uniforms.uUseDisp.value = 0; });
        } catch (e) { mat.uniforms.uUseDisp.value = 0; }
        return () => { if (dispTex) { try { dispTex.dispose(); } catch (e) { } } };
    }, [payload]);

    // Thumbnail loader
    useEffect(() => {
        const mat = materialRef.current; if (!mat) return;
        let tex = null;
        if (payload?.thumbSrc) {
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
        return () => { if (tex) { try { tex.dispose(); } catch (e) { } } };
    }, [payload]);

    // Accent color from CSS variable (runs when payload changes or on mount resize)
    useEffect(() => {
        const mat = materialRef.current; if (!mat) return;
        const rootStyles = getComputedStyle(document.documentElement);
        const cssColor = rootStyles.getPropertyValue('--c-BRND').trim() || '#0d365e';
        try {
            const color = new THREE.Color(cssColor);
            mat.uniforms.uAccentColor.value.copy(color);
        } catch { }
    }, [payload]);

    // Progress animation
    useEffect(() => {
        const mat = materialRef.current; if (!mat) return;
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

    return <div ref={mountRef} className='shader-transition' style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 99999 }} />;
}
