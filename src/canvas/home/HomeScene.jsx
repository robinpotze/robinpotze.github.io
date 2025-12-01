import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Float, Text } from '@react-three/drei';
import { Bloom, ChromaticAberration, EffectComposer, N8AO, TiltShift2 } from '@react-three/postprocessing';
import BackgroundMesh from '@canvas/shared/meshes/BackgroundMesh';
import LogoMesh from '@canvas/shared/meshes/LogoMesh';
import Rig from '@canvas/shared/camera/Rig';
import { useEntryAnimation, useCameraAnimation, useFadeAnimation } from '@hooks/animation/useAnimationHooks';
import * as THREE from 'three';

export default function HomeScene({ scrollProgress = 0 }) {
    const logoRef = useRef();
    const backgroundRef = useRef();
    const subtitleRef = useRef();
    const lightRef = useRef();
    const cameraRef = useRef();

    // Animate logo entrance
    useEntryAnimation(logoRef, 'home', {
        duration: 1.5,
        startPosition: [0, -15, -5],
        endPosition: [0, 0, -5],
        startScale: [0.5, 0.5, 0.5],
        endScale: [2.8, 2.8, 2.8]
    });

    // Animate background
    useEntryAnimation(backgroundRef, 'home', {
        duration: 1.5,
        startPosition: [0, 0, -30],
        endPosition: [0, 0, -30],
        startScale: [8, 8, 8],
        endScale: [6, 6, 6]
    });

    // Animate subtitle with delay
    useEntryAnimation(subtitleRef, 'home', {
        duration: 0.9,
        delay: 0.6,
        startPosition: [0, -12, 0],
        endPosition: [0, -9, 0],
        startScale: [1, 1, 1],
        endScale: [1, 1, 1]
    });

    // Animate camera
    useCameraAnimation(cameraRef, 'home', {
        duration: 1.5,
        startPosition: [0, 0, 30],
        endPosition: [0, 0, 20],
        startFov: 70,
        endFov: 50
    });

    // Fade in ambient light
    useFadeAnimation(lightRef, 'home', {
        duration: 1.0,
        startValue: 0,
        endValue: 1,
        property: 'intensity'
    });

    // Apply scroll-based transformations
    useFrame(() => {
        if (scrollProgress > 0) {
            if (logoRef.current) {
                const targetY = THREE.MathUtils.lerp(0, 15, scrollProgress);
                const targetScale = THREE.MathUtils.lerp(2.8, 1.5, scrollProgress);
                logoRef.current.position.y += (targetY - logoRef.current.position.y) * 0.1;
                logoRef.current.scale.setScalar(logoRef.current.scale.x + (targetScale - logoRef.current.scale.x) * 0.1);
            }

            if (cameraRef.current) {
                const targetZ = THREE.MathUtils.lerp(20, 10, scrollProgress);
                const targetFov = THREE.MathUtils.lerp(50, 60, scrollProgress);
                cameraRef.current.position.z += (targetZ - cameraRef.current.position.z) * 0.1;
                cameraRef.current.fov += (targetFov - cameraRef.current.fov) * 0.1;
                cameraRef.current.updateProjectionMatrix();
            }

            if (backgroundRef.current) {
                const targetScale = THREE.MathUtils.lerp(6, 3, scrollProgress);
                backgroundRef.current.scale.setScalar(backgroundRef.current.scale.x + (targetScale - backgroundRef.current.scale.x) * 0.1);
            }

            if (subtitleRef.current) {
                const targetY = THREE.MathUtils.lerp(-9, -12, scrollProgress);
                subtitleRef.current.position.y += (targetY - subtitleRef.current.position.y) * 0.1;
            }

            if (lightRef.current) {
                const targetIntensity = THREE.MathUtils.lerp(1, 0.3, scrollProgress);
                lightRef.current.intensity += (targetIntensity - lightRef.current.intensity) * 0.1;
            }
        }
    });

    return (
        <>
            <color attach="background" args={['#000000']} />
            <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 30]} fov={70} />
            <ambientLight ref={lightRef} intensity={0} />

            <group ref={backgroundRef} position={[0, 0, -30]} scale={8}>
                <BackgroundMesh />
            </group>

            <group ref={subtitleRef} position={[0, -12, 0]}>
                <Text fontSize={0.6} font="/assets/fonts/Kode_Mono/static/KodeMono-Regular.ttf" color="#eee">
                    PRJNo::000 | C://PRJ/PF/CUSTOM | V1 |GRONINGEN | NL
                </Text>
            </group>

            <Float floatIntensity={2} rotationIntensity={0.5} speed={0.5}>
                <group ref={logoRef} position={[0, -15, -5]} scale={0.5}>
                    <LogoMesh />
                </group>
            </Float>

            <EffectComposer>
                <N8AO aoRadius={1} intensity={1.5} />
                <Bloom mipmapBlur luminanceThreshold={0.92} intensity={0.55} radius={0.4} levels={8} />
                <TiltShift2 blur={0.05} />
                <ChromaticAberration distortion={0.02} />
            </EffectComposer>

            <Rig />
        </>
    );
}
