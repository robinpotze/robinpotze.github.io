import { useWorkCardTransition } from '@hooks';
import { Html, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { lazy, Suspense, useRef, useEffect } from "react";
import { useCanvas } from '@core/contexts/CanvasContext';
import './WorkScene.css';

const PixelCard = lazy(() => import('@components/interactive/PixelCard/PixelCard.jsx'));

export default function WorkScene({ items = [], progress = 1 }) {
    const { camera } = useThree();
    const { isTransitioning } = useCanvas();
    const eased = Math.min(1, Math.max(0, progress));

    useEffect(() => {
        if (!isTransitioning) {
            camera.position.set(0, 0, 5);
            camera.rotation.set(0, 0, 0);
            camera.fov = 50;
            camera.updateProjectionMatrix();
        }
    }, [isTransitioning, camera]);

    if (!items?.length) return null;

    return (
        <>
            <group scale={4} position={[0, (1 - eased) * 3, 0]}>
                <Rig itemCount={items.length}>
                    <Carousel items={items} progress={eased} />
                </Rig>
            </group>
            <ambientLight intensity={0.4 + eased * 0.6} />
        </>
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

function Carousel({ items, progress }) {
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
                progress={progress}
            />
        );
    });
}

function Card({ item, index, position, rotation, progress }) {
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
                    animate={{ opacity: progress, y: 0 }}
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

WorkScene.propTypes = {
    items: PropTypes.array,
    progress: PropTypes.number
};

Rig.propTypes = {
    children: PropTypes.node,
    itemCount: PropTypes.number
};

Carousel.propTypes = {
    items: PropTypes.array.isRequired,
    progress: PropTypes.number.isRequired
};

Card.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    position: PropTypes.array.isRequired,
    rotation: PropTypes.array.isRequired,
    progress: PropTypes.number.isRequired
};
