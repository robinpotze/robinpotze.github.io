import { useWorkCardTransition } from '@hooks';
import { Html, PerspectiveCamera, ScrollControls, useScroll } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { lazy, Suspense, useRef } from "react";
import './WorkCylinder.css';

const PixelCard = lazy(() => import('@components/interactive/PixelCard/PixelCard.jsx'));

export default function WorkCylinder({ items = [] }) {
    return (
        <Canvas className='work-cylinder-canvas'>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
            <ScrollControls pages={items.length / 20} damping={0.1}>
                <Rig itemCount={items.length}>
                    <Carousel items={items} />
                </Rig>
            </ScrollControls>
            <ambientLight intensity={0.8} />
        </Canvas>
    );
}

function Rig({ children, itemCount }) {
    const ref = useRef();
    const scroll = useScroll();

    useFrame(() => {
        const lastCardAngle = (itemCount - 1) * 0.7;
        const targetRotation = -scroll.offset * lastCardAngle;

        ref.current.rotation.y += (targetRotation - ref.current.rotation.y) * 0.1;
    });

    return <group ref={ref}>{children}</group>;
}

function Carousel({ items }) {
    const radius = 3;
    const angleStep = 0.7;
    const verticalStep = -0.2;

    return items.map((item, i) => {
        const angle = i * angleStep;
        const yOffset = i * verticalStep;

        return (
            <Card
                key={item.key}
                item={item}
                index={i}
                position={[Math.sin(angle) * radius, yOffset, Math.cos(angle) * radius]}
                rotation={[0, angle, 0]}
            />
        );
    });
}

function Card({ item, index, position, rotation }) {
    const { data, key: pageKey } = item;
    const { trigger } = useWorkCardTransition({
        to: `/work/${pageKey}`,
        data,
        duration: 400,
        delay: 50
    });

    const banner = data.banner;
    const dispAttr = data?.dispMap ? { 'data-disp': data.dispMap } : {};
    const idLabel = `PRJ_${(data.id || index).toString().padStart(3, '0')}`;

    const handleClick = (e) => {
        e.preventDefault();
        trigger(e.currentTarget);
    };

    return (
        <group position={position} rotation={rotation}>
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
                <motion.article
                    className="work-card"
                    style={{
                        '--i': index,
                        ...(banner ? { backgroundImage: `url(${banner})` } : {})
                    }}
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    onClick={handleClick}
                    {...dispAttr}
                >
                    <Suspense fallback={<div className="pixel-card-fallback" />}>
                        <PixelCard variant="default" className="pixel-card-inner">
                            <div className="work-card-content">
                                <span className='deco-small'>{idLabel}</span>
                                <h3>{data?.title || pageKey}</h3>
                                <p className="synopsis">{data?.synopsis || ''}</p>
                                <span className="deco-small">{data?.year || ''}</span>
                            </div>
                        </PixelCard>
                    </Suspense>
                </motion.article>
            </Html>
        </group>
    );
}

WorkCylinder.propTypes = {
    items: PropTypes.array
};

Rig.propTypes = {
    children: PropTypes.node,
    itemCount: PropTypes.number
};

Carousel.propTypes = {
    items: PropTypes.array.isRequired
};

Card.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    position: PropTypes.array.isRequired,
    rotation: PropTypes.array.isRequired
};