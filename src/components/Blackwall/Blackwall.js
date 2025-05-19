import { useRef, useEffect } from "react";
import * as THREE from "three";

import flameShader from "./FlameShader.js";
import blackwallShader from "./BlackwallShader.js";

import "./Blackwall.css";

export default function BlackwallEffect() {
    const containerRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const flameUniforms = {
            u_time: { value: 0.0 },
            u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
            u_flame: { value: null },
        };

        const blackwallUniforms = {
            u_time: { value: 0.0 },
            u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
        };

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        const flameRenderTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);
        const geometry = new THREE.PlaneGeometry(2, 2);

        const flameMaterial = new THREE.ShaderMaterial({
            uniforms: flameUniforms,
            framgmentShader: flameShader,
            transparent: true,
        });
        const flameMesh = new THREE.Mesh(geometry, flameMaterial);
        const flameScene = new THREE.Scene();
        flameScene.add(flameMesh);

        blackwallUniforms.u_flame = flameRenderTarget.texture;

        const blackwallMaterial = new THREE.ShaderMaterial({
            uniforms: blackwallUniforms,
            fragmentShader: blackwallShader,
            transparent: true,
        });
        const blackwallMesh = new THREE.Mesh(geometry, blackwallMaterial);
        scene.add(blackwallMesh);

        let startTime = performance.now();

        function animate() {
            requestAnimationFrame(animate);
            const now = performance.now();
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
            const x = e.clientX / window.innerWidth;
            const y = 1.0 - e.clientY / window.innerHeight;
            flameUniforms.u_mouse.value = new THREE.Vector2(x, y);
            blackwallUniforms.u_mouse.value = new THREE.Vector2(x, y);
        }

        function onResize() {
            renderer.setSize(window.innerWidth, window.innerHeight);
            flameUniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
            blackwallUniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
        }

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", onResize);

            if (container && renderer.domElement) {
                container.removeChild(renderer.domElement);
            }

            // Dispose of WebGL resources
            geometry.dispose();
            flameMaterial.dispose();
            flameRenderTarget.dispose();
            blackwallMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none" />;
}
