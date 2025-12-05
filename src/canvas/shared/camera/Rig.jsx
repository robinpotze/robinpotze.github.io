import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Rig({ intensity = 0.5 }) {
    const basePosition = useRef({ x: 0, y: 0, z: 20 })

    useFrame((state, delta) => {
        basePosition.current = {
            x: state.camera.position.x,
            y: state.camera.position.y,
            z: state.camera.position.z
        }

        const offsetX = Math.sin(-state.pointer.x) * 5 * intensity
        const offsetY = state.pointer.y * 5 * intensity
        const offsetZ = Math.cos(state.pointer.x) * 5 * intensity

        const smoothing = 1 - Math.pow(0.001, delta)

        const currentOffsetX = state.camera.position.x - basePosition.current.x
        const currentOffsetY = state.camera.position.y - basePosition.current.y
        const currentOffsetZ = state.camera.position.z - basePosition.current.z

        const newOffsetX = currentOffsetX + (offsetX - currentOffsetX) * smoothing * 0.5
        const newOffsetY = currentOffsetY + (offsetY - currentOffsetY) * smoothing * 0.5
        const newOffsetZ = currentOffsetZ + (offsetZ - currentOffsetZ) * smoothing * 0.5

        state.camera.position.x = basePosition.current.x + newOffsetX
        state.camera.position.y = basePosition.current.y + newOffsetY
        state.camera.position.z = basePosition.current.z + newOffsetZ

        state.camera.lookAt(0, 0, 0)
    })
}