import useAdaptiveRenderScale from "@hooks/useAdaptiveRenderScale";
import BlackwallGLSL from "@shaders/Blackwall.glsl?raw";
import FlameGLSL from "@shaders/Flame.glsl?raw";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./Blackwall.css";


export default function BlackwallEffect({
    renderScale = 1,
    resizeDebounceMs = 100,
    adaptivityEnabled = true,
    minRenderScale = 0.25,
    maxRenderScale = 1.0,
    adaptIntervalMs = 1000,
    fpsSampleSize = 30,
    adaptThreshold = 0.85,
    adaptStep = 0.85,
} = {}) {
    const containerRef = useRef();
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
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setClearColor(0x000000, 1);
        renderer.setPixelRatio(window.devicePixelRatio || 1);
        const initialBufferW = Math.max(1, Math.floor(window.innerWidth * renderScale));
        const initialBufferH = Math.max(1, Math.floor(window.innerHeight * renderScale));
        renderer.setSize(initialBufferW, initialBufferH, false);
        renderer.domElement.classList.add("blackwall-canvas");
        container.appendChild(renderer.domElement);

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

        let currentScale = currentScaleRef.current;

        function tryApplyScale(scale) {
            // clamp
            const newScale = Math.max(minRenderScale, Math.min(maxRenderScale, scale));
            if (Math.abs(newScale - currentScale) < 0.001) return false;
            currentScaleRef.current = newScale;
            currentScale = newScale;
            adaptive.setScale(newScale);
            const cssW = window.innerWidth;
            const cssH = window.innerHeight;
            if (!renderer.domElement.classList.contains("blackwall-canvas")) {
                renderer.domElement.classList.add("blackwall-canvas");
            }

            const bufferWidth = Math.max(1, Math.floor(cssW * currentScale));
            const bufferHeight = Math.max(1, Math.floor(cssH * currentScale));
            renderer.setPixelRatio(window.devicePixelRatio || 1);
            renderer.setSize(bufferWidth, bufferHeight, false);
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

            const newScale = adaptive.sampleFrame(dt);
            if (newScale != null) {
                tryApplyScale(newScale);
            }

            flameUniforms.u_time.value = elapsed;
            blackwallUniforms.u_time.value = elapsed;

            renderer.setRenderTarget(flameRenderTarget);
            renderer.render(flameScene, camera);
            renderer.setRenderTarget(null);

            renderer.render(scene, camera);
        }

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
            const dpr = renderer.getPixelRatio() || window.devicePixelRatio || 1;
            const rtW = Math.max(1, Math.floor(w * dpr));
            const rtH = Math.max(1, Math.floor(h * dpr));
            flameRenderTarget?.setSize?.(rtW, rtH);
            flameUniforms.u_resolution.value.set(rtW, rtH);
            blackwallUniforms.u_resolution.value.set(rtW, rtH);
        }

        function onResize() {
            const cssW = window.innerWidth;
            const cssH = window.innerHeight;
            if (!renderer.domElement.classList.contains("blackwall-canvas")) {
                renderer.domElement.classList.add("blackwall-canvas");
            }

            const w = Math.max(1, Math.floor(cssW * currentScaleRef.current));
            const h = Math.max(1, Math.floor(cssH * currentScaleRef.current));
            renderer.setPixelRatio(window.devicePixelRatio || 1);
            renderer.setSize(w, h, false);

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
