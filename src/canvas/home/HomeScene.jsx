import { useRef, useState, useEffect } from 'react';
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
    const [entryComplete, setEntryComplete] = useState(false);

    // Delay Float activation to allow entry animation to complete cleanly
    useEffect(() => {
        const timer = setTimeout(() => {
            setEntryComplete(true);
        }, 800); // Slightly longer than the 0.6s entry duration
        return () => clearTimeout(timer);
    }, []);

    useEntryAnimation(logoRef, 'home', {
        duration:0.6,
        startPosition: [0, 0, 20],
        endPosition: [0, 0, -5],
        scrollEndPosition: [0, 0, -15],
        startScale: [4, 4, 4],
        endScale: [2.5, 2.5, 2.5],
        scrollEndScale: [2, 2, 2],
        scrollProgress
    });

    useEntryAnimation(backgroundRef, 'home', {
        duration: 0.6,
        startPosition: [0, 0, -15],
        endPosition: [0, 0, -30],
        scrollEndPosition: [0, 0, -10],
        startScale: [8, 8, 8],
        endScale: [6, 6, 6],
        scrollEndScale: [5, 5, 5],
        scrollProgress
    });

    useEntryAnimation(subtitleRef, 'home', {
        duration: 0.6,
        delay: 0.6,
        startPosition: [0, -10, 20],
        endPosition: [0, -9, -5],
        scrollEndPosition: [0, -7, -5],
        startScale: [1, 1, 1],
        endScale: [1, 1, 1],
        scrollEndScale: [0.9, 0.9, 0.9],
        scrollProgress
    });

    useCameraAnimation(cameraRef, 'home', {
        duration: 1.5,
        startPosition: [0, 0, 30],
        endPosition: [0, 0, 20],
        scrollEndPosition: [0, 0, 10],
        startFov: 70,
        endFov: 50,
        scrollEndFov: 100,
        scrollProgress
    });

    useFadeAnimation(lightRef, 'home', {
        duration: 1.0,
        startValue: 0,
        endValue: 1,
        property: 'intensity',
        scrollProgress
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

            <Float 
                floatIntensity={entryComplete ? 2 : 0} 
                rotationIntensity={entryComplete ? 0.5 : 0} 
                speed={0.5}
            >
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
