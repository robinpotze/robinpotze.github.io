import { Float, MeshTransmissionMaterial, PerspectiveCamera, Text, useGLTF, useVideoTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, ChromaticAberration, EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing";
import './HomeScreen.css';

useGLTF.preload("/assets/3d/Logo.glb")

export default function HomeScreenEffect() {
    return (
        <div className="home-screen-canvas-container">
            <Canvas eventSource={document.getElementById("root")} eventPrefix="client" shadows gl={{ antialias: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={50} />
                <ambientLight intensity={0.5} />
                <BackgroundMesh position={[0, 0, -40]} />
                <LogoText position={[0, 0, -20]} />
                <SubtitleText position={[0, -8, -10]} />
                <Float floatIntensity={2} rotationIntensity={0.5} speed={0.5}>
                    <LogoMesh scale={3} position={[0, 0, -10]} />
                </Float>
                <EffectComposer disableNormalPass>
                    <N8AO aoRadius={1} intensity={1.5} />
                    <Bloom mipmapBlur luminanceThreshold={0.92} intensity={0.2} radius={0.4} levels={8} />
                    <TiltShift2 blur={0.1} />
                    <ChromaticAberration distortion={0.1} />
                </EffectComposer>
                <Rig />
            </Canvas>
        </div>
    );
}

function Rig() {
    useFrame((state, delta) => {
        const targetX = Math.sin(-state.pointer.x) * 5
        const targetY = state.pointer.y * 3.5
        const targetZ = 15 + Math.cos(state.pointer.x) * 10

        const smoothing = 1 - Math.pow(0.001, delta)

        state.camera.position.x += (targetX - state.camera.position.x) * smoothing
        state.camera.position.y += (targetY - state.camera.position.y) * smoothing
        state.camera.position.z += (targetZ - state.camera.position.z) * smoothing

        state.camera.lookAt(0, 0, 0)
    })
}

function BackgroundMesh({ position }) {
    const video = useVideoTexture("/assets/video/blackwall.mp4");
    return (
        <mesh position={position}>
            <planeGeometry args={[160, 90]} />
            <meshStandardMaterial map={video} />
        </mesh>
    )
}

function LogoMesh({ ...props }) {
    const glass = {
        samples: 8,
        resolution: 512,
        transmission: 1,
        roughness: 0.2,
        clearcoat: 0.4,
        clearcoatRoughness: 0,
        thickness: 1,
        ior: 1.2,
        chromaticAberration: 0.1,
        anisotropy: 0.5,
        distortion: 0.1,
        distortionScale: 0,
        temporalDistortion: 0.2,
        attenuationDistance: 0.5,
    }
    const { nodes } = useGLTF("/assets/3d/Logo.glb");
    return (
        <mesh renderOrder={100} receiveShadow castShadow geometry={nodes.Logo.geometry} {...props}>
            <MeshTransmissionMaterial {...glass} toneMapped={false} />
        </mesh>
    );
}

function LogoText(props) {
    return (
        <Text fontSize={12} letterSpacing={-0.025} font="/assets/fonts/Orbitron/static/Orbitron-Bold.ttf" color="#eee" {...props}>
            AMBITION
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
