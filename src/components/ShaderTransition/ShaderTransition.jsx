import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTransition } from '../Transition/TransitionProvider';

export default function ShaderTransition({ active = false, duration = 800 }) {
    const mountRef = useRef(null);
    const materialRef = useRef(null);
    const startTimeRef = useRef(null);
    const animRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio || 1);
        renderer.setSize(window.innerWidth, window.innerHeight);
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
            fragmentShader: `
                varying vec2 vUv;
                uniform float uTime;
                uniform float uProgress;
                uniform vec2 uResolution;
                uniform vec2 uRectCenter;
                uniform vec2 uRectSize;
                uniform sampler2D uThumb;
                uniform float uUseThumb;
                uniform sampler2D uDispMap;
                uniform float uUseDisp;
                uniform float uStrength;

                // Simplex / FBM noise helpers
                float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453123); }
                float noise(vec2 p){
                    vec2 i = floor(p);
                    vec2 f = fract(p);
                    float a = hash(i);
                    float b = hash(i + vec2(1.0, 0.0));
                    float c = hash(i + vec2(0.0, 1.0));
                    float d = hash(i + vec2(1.0, 1.0));
                    vec2 u = f * f * (3.0 - 2.0 * f);
                    return mix(a, b, u.x) + (c - a)*u.y*(1.0 - u.x) + (d - b)*u.x*u.y;
                }

                float fbm(vec2 p) {
                    float v = 0.0;
                    float amp = 0.5;
                    for (int i = 0; i < 5; i++) {
                        v += amp * noise(p);
                        p *= 2.0;
                        amp *= 0.5;
                    }
                    return v;
                }

                void main() {
                    vec2 uv = vUv;

                        // animated noise value
                        float n = fbm(uv * 6.0 + uTime * 0.4);

                        // displacement source: either external displacement map or procedural noise
                        float dispSrc = n;
                        if (uUseDisp > 0.5) {
                            // sample displacement map (assume single-channel in red)
                            dispSrc = texture2D(uDispMap, uv).r;
                        }

                        // displacement by selected source, scaled by progress
                        float disp = (dispSrc - 0.5) * uStrength * uProgress;
                        vec2 displaced = uv + vec2(disp * 0.6, disp * -0.6);

                    // dissolve threshold using another noise sample
                    float dissolveNoise = fbm(displaced * 12.0 + uTime * 1.3);
                    // bias noise influence so at low uProgress there's effectively no alpha
                    float noiseInfluence = mix(0.05, 0.45, uProgress);

                    // compute distance of current fragment to the rect center (in UV space)
                    vec2 rectCenterUV = uRectCenter;
                    vec2 rectHalf = uRectSize * 0.5;
                    // distance normalized to rect size (0 at center, >1 outside)
                    vec2 d = (uv - rectCenterUV) / max(rectHalf, vec2(0.001));
                    float distToRect = length(d);

                    // falloff based on distance so effect is stronger near the rect
                    float falloff = smoothstep(1.6, 0.0, distToRect);

                    float threshold = clamp(uProgress * falloff + (dissolveNoise - 0.5) * noiseInfluence, 0.0, 1.0);

                        // compose color: darkblue background and subtle cyan tint
                        vec3 base = vec3(0.02, 0.06, 0.12);
                        vec3 tint = vec3(0.05, 0.22, 0.38);
                        vec3 col = mix(base, tint, clamp(n * 1.2, 0.0, 1.0));

                        // sample thumbnail texture if available
                        vec4 thumbCol = vec4(0.0);
                        if (uUseThumb > 0.5) {
                            // when sampling the thumbnail, map vUv directly
                            thumbCol = texture2D(uThumb, vUv);
                        }

                        // alpha tracks threshold directly: 0 when uProgress==0, ~1 when uProgress==1
                        float alpha = smoothstep(0.0, 1.0, threshold);

                        // blend thumbnail into final color when present (use alpha to blend)
                        vec3 finalCol = mix(col, thumbCol.rgb, thumbCol.a * mix(0.0, 1.0, uProgress));

                        gl_FragColor = vec4(finalCol, alpha);
                }
            `
        });

        materialRef.current = material;

        const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
        scene.add(quad);

        const onResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            material.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
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
        };
    }, []);

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
