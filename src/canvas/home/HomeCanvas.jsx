import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber';
import HomeScene from './HomeScene';

export default function HomeCanvas({ scrollProgress, startAnimations }) {
    return (
        <div className="home-canvas-container">
            <Canvas
                shadows
                gl={{
                    antialias: true,
                    powerPreference: 'high-performance',
                    preserveDrawingBuffer: false
                }}
            >
                <HomeScene scrollProgress={scrollProgress} startAnimations={startAnimations} />
            </Canvas>
        </div>
    );
}
