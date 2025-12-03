import { useRigRotation } from '@hooks';
import PropTypes from 'prop-types';
import { useRef } from "react";
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { CAROUSEL_CONFIG, calculateCardPosition, calculateCardRotation } from '@config/carousel.config';
import WorkCard3D from './WorkCard3D';
import WorkCardContent from './WorkCardContent';
import './WorkScene.css';

export default function WorkScene({ items = [], progress = 1, onCardNavigate, onScrollChange }) {
    const eased = Math.min(1, Math.max(0, progress));
    const scroll = useScroll();

    // Report scroll position back to parent
    useFrame(() => {
        if (onScrollChange && scroll) {
            onScrollChange(scroll.offset);
        }
    });

    if (!items?.length) return null;

    return (
        <>
            <group
                scale={CAROUSEL_CONFIG.SCALE_FACTOR}
                position={[0, (1 - eased) * 1, 0]}
            >
                <Rig itemCount={items.length}>
                    <Carousel items={items} progress={eased} onCardNavigate={onCardNavigate} />
                </Rig>
            </group>
            <ambientLight intensity={0.4 + eased * 0.6} />
        </>
    );
}

function Rig({ children, itemCount }) {
    const ref = useRef();
    useRigRotation(ref, itemCount);

    return <group ref={ref}>{children}</group>;
}

function Carousel({ items, progress, onCardNavigate }) {
    return items.map((item, i) => (
        <Card
            key={item.key}
            item={item}
            index={i}
            position={calculateCardPosition(i)}
            rotation={calculateCardRotation(i)}
            progress={progress}
            onNavigate={onCardNavigate}
        />
    ));
}

function Card({ item, index, position, rotation, progress, onNavigate }) {
    return (
        <WorkCard3D
            index={index}
            position={position}
            rotation={rotation}
        >
            <WorkCardContent
                item={item}
                index={index}
                progress={progress}
                onNavigate={onNavigate}
            />
        </WorkCard3D>
    );
}

WorkScene.propTypes = {
    items: PropTypes.array,
    progress: PropTypes.number,
    onCardNavigate: PropTypes.func
};

Rig.propTypes = {
    children: PropTypes.node,
    itemCount: PropTypes.number
};

Carousel.propTypes = {
    items: PropTypes.array.isRequired,
    progress: PropTypes.number.isRequired,
    onCardNavigate: PropTypes.func
};

Card.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    position: PropTypes.array.isRequired,
    rotation: PropTypes.array.isRequired,
    progress: PropTypes.number.isRequired,
    onNavigate: PropTypes.func
};
