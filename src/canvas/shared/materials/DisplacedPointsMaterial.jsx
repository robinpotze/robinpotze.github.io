import { shaderMaterial } from "@react-three/drei"
import { extend } from "@react-three/fiber"
import pointsVertexShader from '../shaders/points/PointsVert.glsl?raw'
import pointsFragmentShader from '../shaders/points/PointsFrag.glsl?raw'
import * as THREE from 'three'

export const DisplacedPointsMaterial = shaderMaterial(
    {
        uScrollProgress: 0,
        uTime: 0,
        uColorTop: new THREE.Color(0xffffff),
        uColorBottom: new THREE.Color(0xffffff),
        uOpacity: 1.0,
    },
    pointsVertexShader,
    pointsFragmentShader
)

DisplacedPointsMaterial.transparent = true
DisplacedPointsMaterial.depthWrite = false

extend({ DisplacedPointsMaterial })
