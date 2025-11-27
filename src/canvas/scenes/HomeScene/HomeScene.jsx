import { Float, Text } from "@react-three/drei";
import { Bloom, ChromaticAberration, EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing";
import BackgroundMesh from '@canvas/meshes/BackgroundMesh';
import LogoMesh from '@canvas/meshes/LogoMesh';
import Rig from '@canvas/camera/Rig';
import { useCanvas } from '@core/contexts/CanvasContext';
import { useMemo } from 'react';

export default function HomeScene() {
    const { sceneProgress } = useCanvas();
    const progress = sceneProgress.home ?? 0;
    const eased = useMemo(() => Math.min(1, Math.max(0, progress)), [progress]);
    const logoScale = useMemo(() => 2 + eased * 0.8, [eased]);
    const logoY = useMemo(() => eased * 10, [eased]);
    const bloomIntensity = useMemo(() => 0.2 + eased * 0.35, [eased]);

    return (
        <>
            <BackgroundMesh position={[0, 0, -30]} scale={6 - eased} />
            <SubtitleText position={[0, -9, 0]} />
            <Float floatIntensity={1 + eased} rotationIntensity={0.5} speed={0.5}>
                <group position={[0, logoY, -5]} scale={logoScale}>
                    <LogoMesh />
                </group>
            </Float>
            <EffectComposer>
                <N8AO aoRadius={1} intensity={1.5} />
                <Bloom mipmapBlur luminanceThreshold={0.92} intensity={bloomIntensity} radius={0.4} levels={8} />
                <TiltShift2 blur={0.05} />
                <ChromaticAberration distortion={0.02} />
            </EffectComposer>
            <Rig />
        </>
    );
}

function SubtitleText(props) {
    return (
        <Text fontSize={0.6} font="/assets/fonts/Kode_Mono/static/KodeMono-Regular.ttf" color="#eee" {...props}>
            PRJNo::000 | C://PRJ/PF/CUSTOM | V1 |GRONINGEN | NL
        </Text>
    );
}
