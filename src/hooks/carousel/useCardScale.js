/**
 * Hook for card scale based on rotation distance from center
 */
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { calculateCardCenteredness, calculateCardScale } from '@utils/carousel.math';

export function useCardScale(groupRef, index) {
    const rigRef = useRef();

    useFrame(() => {
        if (!groupRef.current) return;

        // Get the rotation group (Rig) on first frame
        if (!rigRef.current) {
            rigRef.current = groupRef.current.parent;
        }

        if (!rigRef.current) return;

        const centeredness = calculateCardCenteredness(
            rigRef.current.rotation.y,
            index
        );

        const scale = calculateCardScale(centeredness);
        groupRef.current.scale.setScalar(scale);
    });
}
