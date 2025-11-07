import { shaderMaterial } from "@react-three/drei"
import { extend, useFrame } from "@react-three/fiber"
import { useRef } from 'react'
import * as THREE from 'three'
import flameFragmentShader from '@shaders/Flame.glsl?raw'

// Vertex shader - simple passthrough
const flameVertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`

const FlameMaterial = shaderMaterial(
    {
        u_time: 0,
        u_resolution: new THREE.Vector2(1024, 1024),
        u_mouse: new THREE.Vector2(0, 0)
    },
    flameVertexShader,
    flameFragmentShader
)

extend({ FlameMaterial })

export default function FlameMesh(props) {
    const materialRef = useRef()

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.u_time = state.clock.elapsedTime
            materialRef.current.u_resolution.set(
                state.viewport.width * 100,
                state.viewport.height * 100
            )
        }
    })

    return (
        <mesh {...props}>
            <planeGeometry args={[20, 20]} />
            <flameMaterial ref={materialRef} transparent depthWrite={false} />
        </mesh>
    )
}
