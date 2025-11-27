import { useFrame, useThree } from "@react-three/fiber";
import { useCanvas } from "@core/contexts/CanvasContext";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function TransitionCamera() {
    const { cameraTarget, isTransitioning } = useCanvas();
    const { camera } = useThree();
    const targetPos = useRef(new THREE.Vector3());
    const targetRot = useRef(new THREE.Euler());
    const targetFov = useRef(50);

    useEffect(() => {
        targetPos.current.set(...cameraTarget.position);
        targetRot.current.set(...cameraTarget.rotation);
        targetFov.current = cameraTarget.fov;
    }, [cameraTarget]);

    useFrame(() => {
        if (!isTransitioning) return;

        const lerp = 0.08;
        const threshold = 0.001;

        if (camera.position.distanceTo(targetPos.current) > threshold) {
            camera.position.lerp(targetPos.current, lerp);
        }

        const rotDiff = [
            Math.abs(targetRot.current.x - camera.rotation.x),
            Math.abs(targetRot.current.y - camera.rotation.y),
            Math.abs(targetRot.current.z - camera.rotation.z)
        ];

        if (rotDiff.some(d => d > threshold)) {
            camera.rotation.x += (targetRot.current.x - camera.rotation.x) * lerp;
            camera.rotation.y += (targetRot.current.y - camera.rotation.y) * lerp;
            camera.rotation.z += (targetRot.current.z - camera.rotation.z) * lerp;
        }

        const fovDiff = Math.abs(camera.fov - targetFov.current);
        if (fovDiff > 0.01) {
            camera.fov += (targetFov.current - camera.fov) * lerp;
            camera.updateProjectionMatrix();
        }
    });

    return null;
}
