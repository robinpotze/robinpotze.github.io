import { NavigationMenu } from '@features';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, ScrollControls } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useWorkStore } from '@/stores/workStore';
import WorkScene from '@canvas/scenes/WorkScene/WorkScene';
import { CAROUSEL_CONFIG, calculateScrollPages } from '@config/carousel.config';
import './Work.css';

export default function Work() {
    const navigate = useNavigate();
    const items = useWorkStore((state) => state.items);
    const pages = calculateScrollPages(items.length);

    const handleCardNavigate = useCallback((pageKey) => {
        navigate(`/work/${pageKey}`);
    }, [navigate]);

    return (
        <>
            <NavigationMenu />
            <div className="work-canvas-container">
                <Canvas
                    shadows
                    gl={{
                        antialias: true,
                        powerPreference: 'high-performance',
                        preserveDrawingBuffer: false
                    }}
                >
                    <color attach="background" args={['#000000']} />
                    
                    <PerspectiveCamera
                        makeDefault
                        position={CAROUSEL_CONFIG.CAMERA.POSITION}
                        fov={CAROUSEL_CONFIG.CAMERA.FOV}
                    />

                    <ScrollControls pages={pages} damping={CAROUSEL_CONFIG.SCROLL_DAMPING}>
                        <WorkScene items={items} progress={1} onCardNavigate={handleCardNavigate} />
                    </ScrollControls>
                </Canvas>
            </div>
        </>
    );
}