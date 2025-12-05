import { useGLTF, useVideoTexture } from "@react-three/drei";
import React, { Suspense } from 'react';

function BackgroundMeshInner({ ...props }) {
    const video = useVideoTexture("/assets/video/blackwall.mp4", {
        unsuspend: "canplaythrough",
        start: true,
        crossOrigin: "anonymous",
        muted: true,
        loop: true,
        playsInline: true
    });
    
    const { nodes } = useGLTF("/assets/3d/Wall.glb");
    
    return (
        <mesh geometry={nodes.Wall.geometry} {...props}>
            <meshStandardMaterial 
                map={video} 
                map-flipY={false} 
                emissive="#FFF" 
                emissiveMap={video} 
                emissiveIntensity={0.5} 
            />
        </mesh>
    );
}

// Fallback mesh while loading
function FallbackMesh(props) {
    const { nodes } = useGLTF("/assets/3d/Wall.glb");
    return (
        <mesh geometry={nodes.Wall.geometry} {...props}>
            <meshStandardMaterial color="#000000" emissive="#111111" emissiveIntensity={0.5} />
        </mesh>
    );
}

function BackgroundMesh(props) {
    return (
        <Suspense fallback={<FallbackMesh {...props} />}>
            <BackgroundMeshInner {...props} />
        </Suspense>
    );
}

export default React.memo(BackgroundMesh);