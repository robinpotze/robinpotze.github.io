/**
 * WorkCard3D - 3D wrapper for work card with R3F logic
 */

import { useRef } from 'react';
import { Html } from '@react-three/drei';
import { useCardScale, useCardFloat } from '@hooks';
import PropTypes from 'prop-types';

export default function WorkCard3D({
    children,
    index,
    position,
    rotation
}) {
    const groupRef = useRef();

    // Apply 3D transformations
    useCardScale(groupRef, index);
    useCardFloat(groupRef, position, index);

    return (
        <group ref={groupRef} position={position} rotation={rotation}>
            <Html
                transform
                distanceFactor={1}
                position={[0, 0, 0]}
                style={{
                    width: '800px',
                    height: '450px',
                    pointerEvents: 'auto'
                }}
            >
                {children}
            </Html>
        </group>
    );
}

WorkCard3D.propTypes = {
    children: PropTypes.node.isRequired,
    index: PropTypes.number.isRequired,
    position: PropTypes.array.isRequired,
    rotation: PropTypes.array.isRequired
};
