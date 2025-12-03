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

    // Animate logo entrance (snappy entry easing) then scroll (full ActiveTheory easing)
    useEntryAnimation(logoRef, 'home', {
        duration: 1.2,
        startPosition: [0, 0, 20],
        endPosition: [0, 0, -5],
        scrollEndPosition: [0, 0, -15], // Move further back on scroll
        startScale: [4, 4, 4],
        endScale: [3, 3, 3],
        scrollEndScale: [2.5, 2.5, 2.5], // Scale down more on scroll
        scrollProgress
    });

    // Animate background (snappy entry easing) then scroll (full ActiveTheory easing)
    useEntryAnimation(backgroundRef, 'home', {
        duration: 1.2,
        startPosition: [0, 0, -15],
        endPosition: [0, 0, -30],
        scrollEndPosition: [0, 0, -10], // Move even further back on scroll
        startScale: [8, 8, 8],
        endScale: [6, 6, 6],
        scrollEndScale: [5, 5, 5], // Scale down on scroll
        scrollProgress
    });

    // Animate subtitle with delay (snappy entry easing) then scroll (full ActiveTheory easing)
    useEntryAnimation(subtitleRef, 'home', {
        duration: 0.9,
        delay: 0.6,
        startPosition: [0, -12, 0],
        endPosition: [0, -9, 0],
        scrollEndPosition: [0, -7, 0], // Move up slightly on scroll
        startScale: [1, 1, 1],
        endScale: [1, 1, 1],
        scrollEndScale: [0.9, 0.9, 0.9], // Scale down slightly on scroll
        scrollProgress
    });

    // Animate camera (snappy entry easing) then scroll (full ActiveTheory easing)
    useCameraAnimation(cameraRef, 'home', {
        duration: 1.5,
        startPosition: [0, 0, 30],
        endPosition: [0, 0, 20],
        scrollEndPosition: [0, 0, 10], // Move closer on scroll
        startFov: 70,
        endFov: 50,
        scrollEndFov: 100, // Increase FOV on scroll
        scrollProgress
    });

    // Fade in ambient light (snappy entry easing) then scroll (full ActiveTheory easing)
    useFadeAnimation(lightRef, 'home', {
        duration: 1.0,
        startValue: 0,
        endValue: 1,
        property: 'intensity',
        scrollProgress
    });

    // Scroll transformations are now handled by animation hooks

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
