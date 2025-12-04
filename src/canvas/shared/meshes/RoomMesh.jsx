import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import '@canvas/shared/materials/DisplacedPointsMaterial'

useGLTF.preload("/assets/3d/Room.glb")

export default function RoomMesh({ scrollProgress = 0, ...props }) {
    const groupRef = useRef()
    const { scene, nodes } = useGLTF("/assets/3d/Room.glb")

    // Collect all geometries and sample points across faces
    const meshData = useMemo(() => {
        const meshes = []

        scene.traverse((child) => {
            if (child.isMesh && child.geometry) {
                const sourceGeometry = child.geometry
                const pointsPerFace = 8 // Number of points to sample per triangle

                // Get position data
                const positions = sourceGeometry.attributes.position
                const hasIndex = sourceGeometry.index !== null
                const faceCount = hasIndex
                    ? sourceGeometry.index.count / 3
                    : positions.count / 3

                const totalPoints = Math.floor(faceCount * pointsPerFace)
                const sampledPositions = new Float32Array(totalPoints * 3)
                const randoms = new Float32Array(totalPoints)

                let pointIndex = 0

                // Sample points across each triangle face
                for (let i = 0; i < faceCount; i++) {
                    // Get triangle vertices
                    let i0, i1, i2
                    if (hasIndex) {
                        i0 = sourceGeometry.index.array[i * 3]
                        i1 = sourceGeometry.index.array[i * 3 + 1]
                        i2 = sourceGeometry.index.array[i * 3 + 2]
                    } else {
                        i0 = i * 3
                        i1 = i * 3 + 1
                        i2 = i * 3 + 2
                    }

                    const v0 = new THREE.Vector3(
                        positions.array[i0 * 3],
                        positions.array[i0 * 3 + 1],
                        positions.array[i0 * 3 + 2]
                    )
                    const v1 = new THREE.Vector3(
                        positions.array[i1 * 3],
                        positions.array[i1 * 3 + 1],
                        positions.array[i1 * 3 + 2]
                    )
                    const v2 = new THREE.Vector3(
                        positions.array[i2 * 3],
                        positions.array[i2 * 3 + 1],
                        positions.array[i2 * 3 + 2]
                    )

                    // Sample points across the triangle using barycentric coordinates
                    for (let j = 0; j < pointsPerFace; j++) {
                        const r1 = Math.random()
                        const r2 = Math.random()

                        // Generate random barycentric coordinates
                        const sqrtR1 = Math.sqrt(r1)
                        const a = 1 - sqrtR1
                        const b = sqrtR1 * (1 - r2)
                        const c = sqrtR1 * r2

                        // Interpolate position
                        const point = new THREE.Vector3()
                        point.addScaledVector(v0, a)
                        point.addScaledVector(v1, b)
                        point.addScaledVector(v2, c)

                        sampledPositions[pointIndex * 3] = point.x
                        sampledPositions[pointIndex * 3 + 1] = point.y
                        sampledPositions[pointIndex * 3 + 2] = point.z
                        randoms[pointIndex] = Math.random()
                        pointIndex++
                    }
                }

                meshes.push({
                    positions: sampledPositions,
                    randoms,
                    count: totalPoints,
                    position: child.position.clone(),
                    rotation: child.rotation.clone(),
                    scale: child.scale.clone()
                })
            }
        })

        return meshes
    }, [scene])

    useFrame((state, delta) => {
        if (groupRef.current) {
            const targetRotationY = state.pointer.x * Math.PI * 0.1
            const targetRotationX = -state.pointer.y * Math.PI * 0.1

            const smoothing = 1 - Math.pow(0.001, delta)

            groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * smoothing
            groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * smoothing

            groupRef.current.children.forEach(points => {
                if (points.material) {
                    points.material.uTime = state.clock.elapsedTime
                    points.material.uScrollProgress = scrollProgress
                }
            })
        }
    })

    if (!meshData.length) return null

    return (
        <group ref={groupRef} scale={5} {...props}>
            {meshData.map((mesh, index) => (
                <points
                    key={index}
                    position={mesh.position}
                    rotation={mesh.rotation}
                    scale={mesh.scale}
                    renderOrder={100}
                >
                    <bufferGeometry attach="geometry">
                        <bufferAttribute
                            attach="attributes-position"
                            array={mesh.positions}
                            count={mesh.count}
                            itemSize={3}
                        />
                        <bufferAttribute
                            attach="attributes-aRandom"
                            array={mesh.randoms}
                            count={mesh.count}
                            itemSize={1}
                        />
                    </bufferGeometry>
                    <displacedPointsMaterial
                        uColorTop={new THREE.Color(0xffffff)}
                        uColorBottom={new THREE.Color(0x4466aa)}
                        uOpacity={0.6}
                        transparent
                        depthWrite={false}
                    />
                </points>
            ))}
        </group>
    )
}