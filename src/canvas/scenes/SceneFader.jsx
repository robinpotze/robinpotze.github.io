import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";

export default function SceneFader({ children, isActive, level }) {
    const groupRef = useRef();
    const initial = typeof level === 'number' ? level : isActive ? 1 : 0;
    const targetOpacity = useRef(initial);
    const currentOpacity = useRef(initial);
    const materialsCache = useRef(new Map());

    useEffect(() => {
        const target = typeof level === 'number' ? level : (isActive ? 1 : 0);
        targetOpacity.current = target;
        if (target <= 0 && groupRef.current) {
            groupRef.current.visible = false;
        }
    }, [isActive, level]);

    useFrame(() => {
        if (!groupRef.current) return;

        currentOpacity.current += (targetOpacity.current - currentOpacity.current) * 0.15;

        const isVisible = currentOpacity.current > 0.01;
        groupRef.current.visible = isVisible;

        if (isVisible) {
            groupRef.current.traverse((child) => {
                if (child.material) {
                    const materials = Array.isArray(child.material) ? child.material : [child.material];
                    materials.forEach((mat) => {
                        if (mat.opacity !== undefined) {
                            if (!materialsCache.current.has(mat.uuid)) {
                                materialsCache.current.set(mat.uuid, mat.opacity);
                            }
                            mat.opacity = currentOpacity.current;
                            mat.transparent = true;
                            mat.needsUpdate = true;
                        }
                    });
                }
            });
        }
    });

    useEffect(() => () => materialsCache.current.clear(), []);

    return <group ref={groupRef}>{children}</group>;
}
