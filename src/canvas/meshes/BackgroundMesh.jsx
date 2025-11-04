import { useVideoTexture, useGLTF } from "@react-three/drei";

export default function BackgroundMesh({ ...props }) {
    const video = useVideoTexture("/assets/video/blackwall.mp4");
    const { nodes } = useGLTF("/assets/3d/Wall.glb");
    return (
        <mesh geometry={nodes.Wall.geometry} {...props}>
            <meshStandardMaterial map={video} map-flipY={false} emissive="#FFF" emissiveMap={video} emissiveIntensity={0.5} />
        </mesh>
    )
}