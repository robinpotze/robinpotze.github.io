import { Float, PerspectiveCamera, Text } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Bloom, ChromaticAberration, EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing"
import BackgroundMesh from '@canvas/meshes/BackgroundMesh'
import LogoMesh from '@canvas/meshes/LogoMesh'
import Rig from '@canvas/camera/Rig'
import './HomeScreen.css'

export default function HomeScreenEffect() {
    return (
        <div className="home-screen-canvas-container">
            <Canvas eventSource={document.getElementById("root")} eventPrefix="client" shadows gl={{ antialias: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={50} />
                <ambientLight intensity={0.5} />
                <BackgroundMesh position={[0, 0, -30]} scale={6} />
                {/* <LogoText position={[0, 0, -20]} /> */}
                <SubtitleText position={[0, -9, 0]} />
                <Float floatIntensity={2} rotationIntensity={0.5} speed={0.5}>
                    <LogoMesh scale={2} />
                </Float>
                <EffectComposer>
                    <N8AO aoRadius={1} intensity={1.5} />
                    <Bloom mipmapBlur luminanceThreshold={0.92} intensity={0.2} radius={0.4} levels={8} />
                    <TiltShift2 blur={0.05} />
                    <ChromaticAberration distortion={0.02} />
                </EffectComposer>
                <Rig />
            </Canvas>
        </div>
    );
}

function LogoText(props) {
    return (
        <Text fontSize={10} letterSpacing={-0.025} lineHeight={1} font="/assets/fonts/Orbitron/static/Orbitron-Bold.ttf" color="#eee" textAlign="center" {...props}>
            ROBIN{'\n'}POTZE
        </Text>
    );
}

function SubtitleText(props) {
    return (
        <Text fontSize={0.6} font="/assets/fonts/Kode_Mono/static/KodeMono-Regular.ttf" color="#eee" {...props}>
            PRJNo::000 | C://PRJ/PF/CUSTOM | V1 |GRONINGEN | NL
        </Text>
    );
}
