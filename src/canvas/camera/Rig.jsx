import { useFrame } from "@react-three/fiber"

export default function Rig() {
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