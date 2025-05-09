import { useRef, useEffect } from "react";
import * as THREE from "three";

import fragmentShader from "./Blackwall.glsl";

export default function BlackwallEffect({ onScrollTrigger }) {
    const containerRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        const uniforms = {
            u_time: { value: 0.0 },
            u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
        };

        const geometry = new THREE.PlaneGeometry(2, 2);
        const material = new THREE.ShaderMaterial({
            uniforms,
            transparent: true,
            fragmentShader: fragmentShader,
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        function animate() {
            requestAnimationFrame(animate);
            uniforms.u_time.value += 0.01;
            renderer.render(scene, camera);
        }

        animate();

        function onMouseMove(e) {
            uniforms.u_mouse.value.x = e.clientX / window.innerWidth;
            uniforms.u_mouse.value.y = 1.0 - e.clientY / window.innerHeight;
        }

        function onResize() {
            renderer.setSize(window.innerWidth, window.innerHeight);
            uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
        }

        function onScroll() {
            const scrollY = window.scrollY / window.innerHeight;
            uniforms.u_mouse.value.y = 1.0 - scrollY; // subtle vertical influence
            if (onScrollTrigger && scrollY > 0.9) onScrollTrigger();
        }

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("resize", onResize);
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", onResize);
            window.removeEventListener("scroll", onScroll);
            if (container && renderer.domElement) {
                container.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, [onScrollTrigger]);

    return <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none" />;
}
