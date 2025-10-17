import { useEffect, useRef } from "react";
import * as THREE from "three";
import BlackwallGLSL from "@shaders/Blackwall.glsl?raw";
import FlameGLSL from "@shaders/Flame.glsl?raw";
import "./Blackwall.css";

export default function BlackwallEffect() {
    const containerRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        const renderScale = 0.6;

        renderer.setSize(window.innerWidth * renderScale, window.innerHeight * renderScale);
        renderer.domElement.style.width = "100vw";
        renderer.domElement.style.height = "100vh";
        container.appendChild(renderer.domElement);

        const flameRenderTarget = new THREE.WebGLRenderTarget(window.innerWidth * renderScale, window.innerHeight * renderScale);
        const geometry = new THREE.PlaneGeometry(2, 2);

        const flameUniforms = {
            u_time: { value: 0.0 },
            u_resolution: { value: new THREE.Vector2(window.innerWidth * renderScale, window.innerHeight * renderScale) },
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
            u_resolution: { value: new THREE.Vector2(window.innerWidth * renderScale, window.innerHeight * renderScale) },
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
        function animate() {
            requestAnimationFrame(animate);
            const now = performance.now();
            if (now - lastFrame < 1000 / targetFPS) return;
            lastFrame = now;
            const elapsed = (now - startTime) * 0.001;

            flameUniforms.u_time.value = elapsed;
            blackwallUniforms.u_time.value = elapsed;

            renderer.setRenderTarget(flameRenderTarget);
            renderer.render(flameScene, camera);
            renderer.setRenderTarget(null);

            renderer.render(scene, camera);
        }

        animate();

        function onMouseMove(e) {
            const aspect = window.innerWidth / window.innerHeight;
            const x = e.clientX / window.innerWidth;
            const y = 1.0 - e.clientY / window.innerHeight;
            const ascpectMouseX = (x - 0.5) * aspect + 0.5;

            flameUniforms.u_mouse.value.set(ascpectMouseX, y);
            blackwallUniforms.u_mouse.value.set(ascpectMouseX, y);
        }

        function onResize() {
            renderer.setSize(window.innerWidth * renderScale, window.innerHeight * renderScale);
            flameUniforms.u_resolution.value.set(window.innerWidth * renderScale, window.innerHeight * renderScale);
            blackwallUniforms.u_resolution.value.set(window.innerWidth * renderScale, window.innerHeight * renderScale);
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
