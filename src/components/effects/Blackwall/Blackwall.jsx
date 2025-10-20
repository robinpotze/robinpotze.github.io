import { useEffect, useRef } from "react";
import * as THREE from "three";
import BlackwallGLSL from "@shaders/Blackwall.glsl?raw";
import FlameGLSL from "@shaders/Flame.glsl?raw";
import useAdaptiveRenderScale from "@hooks/useAdaptiveRenderScale";
import "./Blackwall.css";


export default function BlackwallEffect({
    renderScale = 1,
    resizeDebounceMs = 100,
    // Adaptive scaling props forwarded to the hook
    adaptivityEnabled = true,
    minRenderScale = 0.25,
    maxRenderScale = 1.0,
    adaptIntervalMs = 1000,
    fpsSampleSize = 30,
    adaptThreshold = 0.85, // fraction of target FPS below which we downscale
    adaptStep = 0.85, // multiply renderScale by this when downscaling
} = {}) {
    const containerRef = useRef();
    // adaptive rendering scale hook must be called at top-level (Rules of Hooks)
    const adaptive = useAdaptiveRenderScale({
        initialScale: renderScale,
        enabled: adaptivityEnabled,
        minScale: minRenderScale,
        maxScale: maxRenderScale,
        adaptIntervalMs,
        fpsSampleSize,
        targetFps: 30,
        adaptThreshold,
        adaptStep,
    });
    const currentScaleRef = useRef(adaptive.getScale());

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        // use an opaque canvas so reduced internal resolution doesn't show page background
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setClearColor(0x000000, 1);
        // renderScale controls the resolution of the internal render buffer (0..1).
        // Lower values save GPU memory but reduce detail. Default kept at 0.6.
        renderer.setPixelRatio(window.devicePixelRatio || 1);
        // use updateStyle=false so we can control the CSS size independently
        const initialBufferW = Math.max(1, Math.floor(window.innerWidth * renderScale));
        const initialBufferH = Math.max(1, Math.floor(window.innerHeight * renderScale));
        renderer.setSize(initialBufferW, initialBufferH, false);
        // apply CSS class that ensures the canvas fills the viewport
        renderer.domElement.classList.add("blackwall-canvas");
        container.appendChild(renderer.domElement);

        // create flame render target using device pixels (buffer * pixelRatio)
        const dpr = renderer.getPixelRatio() || window.devicePixelRatio || 1;
        const flameRenderTarget = new THREE.WebGLRenderTarget(Math.max(1, Math.floor(initialBufferW * dpr)), Math.max(1, Math.floor(initialBufferH * dpr)));
        const geometry = new THREE.PlaneGeometry(2, 2);

        const flameUniforms = {
            u_time: { value: 0.0 },
            u_resolution: { value: new THREE.Vector2(Math.max(1, Math.floor(initialBufferW * dpr)), Math.max(1, Math.floor(initialBufferH * dpr))) },
            u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
        };

        const flameMaterial = new THREE.ShaderMaterial({
            uniforms: flameUniforms,
            fragmentShader: FlameGLSL,
            transparent: true,
        });
        const flameMesh = new THREE.Mesh(geometry, flameMaterial);
        const flameScene = new THREE.Scene();
        flameScene.add(flameMesh);

        const blackwallUniforms = {
            u_time: { value: 0.0 },
            u_resolution: { value: new THREE.Vector2(Math.max(1, Math.floor(initialBufferW * dpr)), Math.max(1, Math.floor(initialBufferH * dpr))) },
            u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
            u_flame: { value: flameRenderTarget.texture },
        };

        const blackwallMaterial = new THREE.ShaderMaterial({
            uniforms: blackwallUniforms,
            fragmentShader: BlackwallGLSL,
            transparent: true,
        });
        const blackwallMesh = new THREE.Mesh(geometry, blackwallMaterial);
        scene.add(blackwallMesh);

        let startTime = performance.now();

        let lastFrame = 0;
        const targetFPS = 30;

        // read the current scale from the ref
        let currentScale = currentScaleRef.current;

        function tryApplyScale(scale) {
            // clamp
            const newScale = Math.max(minRenderScale, Math.min(maxRenderScale, scale));
            if (Math.abs(newScale - currentScale) < 0.001) return false;
            currentScaleRef.current = newScale;
            currentScale = newScale;
            adaptive.setScale(newScale);
            // update renderer buffer size immediately (internal resolution)
            const cssW = window.innerWidth;
            const cssH = window.innerHeight;
            // ensure the canvas has the expected class
            if (!renderer.domElement.classList.contains("blackwall-canvas")) {
                renderer.domElement.classList.add("blackwall-canvas");
            }

            const bufferWidth = Math.max(1, Math.floor(cssW * currentScale));
            const bufferHeight = Math.max(1, Math.floor(cssH * currentScale));
            renderer.setPixelRatio(window.devicePixelRatio || 1);
            // pass internal buffer size (will be multiplied by pixelRatio internally)
            // use updateStyle=false so the canvas CSS size we set remains the full viewport
            renderer.setSize(bufferWidth, bufferHeight, false);
            // apply render target resize immediately for scale changes so uniforms match the buffer
            if (resizeTimer) {
                clearTimeout(resizeTimer);
                resizeTimer = null;
            }
            applyRenderTargetResize(bufferWidth, bufferHeight);
            return true;
        }

        function animate() {
            requestAnimationFrame(animate);
            const now = performance.now();
            const dt = now - lastFrame;
            if (dt < 1000 / targetFPS) return;
            lastFrame = now;
            const elapsed = (now - startTime) * 0.001;

            // track frame times for FPS sampling via hook
            const newScale = adaptive.sampleFrame(dt);
            if (newScale != null) {
                // apply the scale change immediately
                tryApplyScale(newScale);
            }

            flameUniforms.u_time.value = elapsed;
            blackwallUniforms.u_time.value = elapsed;

            renderer.setRenderTarget(flameRenderTarget);
            renderer.render(flameScene, camera);
            renderer.setRenderTarget(null);

            renderer.render(scene, camera);

            // adaptive adjustments are handled by the hook's sampler
        }

        // apply initial scale
        tryApplyScale(currentScaleRef.current);

        animate();

        function onMouseMove(e) {
            const aspect = window.innerWidth / window.innerHeight;
            const x = e.clientX / window.innerWidth;
            const y = 1.0 - e.clientY / window.innerHeight;
            const ascpectMouseX = (x - 0.5) * aspect + 0.5;

            flameUniforms.u_mouse.value.set(ascpectMouseX, y);
            blackwallUniforms.u_mouse.value.set(ascpectMouseX, y);
        }

        let resizeTimer = null;
        function applyRenderTargetResize(w, h) {
            // w/h are buffer sizes in CSS pixels; convert to device pixels for render targets
            const dpr = renderer.getPixelRatio() || window.devicePixelRatio || 1;
            const rtW = Math.max(1, Math.floor(w * dpr));
            const rtH = Math.max(1, Math.floor(h * dpr));
            if (flameRenderTarget && flameRenderTarget.setSize) {
                flameRenderTarget.setSize(rtW, rtH);
            }
            flameUniforms.u_resolution.value.set(rtW, rtH);
            blackwallUniforms.u_resolution.value.set(rtW, rtH);
        }

        function onResize() {
            const cssW = window.innerWidth;
            const cssH = window.innerHeight;
            // ensure the canvas CSS class is present
            if (!renderer.domElement.classList.contains("blackwall-canvas")) {
                renderer.domElement.classList.add("blackwall-canvas");
            }

            const w = Math.max(1, Math.floor(cssW * currentScaleRef.current));
            const h = Math.max(1, Math.floor(cssH * currentScaleRef.current));
            renderer.setPixelRatio(window.devicePixelRatio || 1);
            // update the renderer internal buffer size immediately
            // use updateStyle=false so the canvas CSS size remains the full viewport
            renderer.setSize(w, h, false);

            // debounce the expensive renderTarget resize and uniform updates
            if (resizeDebounceMs <= 0) {
                applyRenderTargetResize(w, h);
            } else {
                if (resizeTimer) clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    applyRenderTargetResize(w, h);
                    resizeTimer = null;
                }, resizeDebounceMs);
            }
        }

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", onResize);

            if (container && renderer.domElement) {
                container.removeChild(renderer.domElement);
            }

            geometry.dispose();
            flameMaterial.dispose();
            flameRenderTarget.dispose();
            blackwallMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none" />;
}
