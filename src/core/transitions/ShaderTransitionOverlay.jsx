import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial, OrthographicCamera } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import * as THREE from 'three';
import transitionFragmentShader from '@canvas/shaders/Transition.glsl?raw';
import transitionVertexShader from '@canvas/shaders/Transition.vert?raw';

// Create shader material
const TransitionMaterial = shaderMaterial(
    {
        tFrom: null,
        tTo: null,
        uProgress: 0,
        uIntensity: 0.05,
        uResolution: new THREE.Vector2(1920, 1080),
        uTransitionType: 2 // 0=crossfade, 1=wipe, 2=displacement, 3=radial, 4=pixelate, 5=slide
    },
    transitionVertexShader,
    transitionFragmentShader
);

extend({ TransitionMaterial });

function TransitionPlane({ show, onComplete, transitionType = 2 }) {
    const materialRef = useRef();
    const { size } = useThree();
    const [fromTexture] = useState(() => new THREE.Texture());
    const [toTexture] = useState(() => new THREE.Texture());
    const progressRef = useRef(0);
    const startTimeRef = useRef(null);
    const duration = 0.8; // 800ms transition

    useEffect(() => {
        if (materialRef.current) {
            materialRef.current.uResolution = new THREE.Vector2(size.width, size.height);
        }
    }, [size]);

    useEffect(() => {
        if (show) {
            progressRef.current = 0;
            startTimeRef.current = null;
        }
    }, [show]);

    useFrame(({ clock }) => {
        if (!show || !materialRef.current) return;

        if (startTimeRef.current === null) {
            startTimeRef.current = clock.getElapsedTime();
        }

        const elapsed = clock.getElapsedTime() - startTimeRef.current;
        progressRef.current = Math.min(elapsed / duration, 1);

        materialRef.current.uProgress = progressRef.current;

        if (progressRef.current >= 1 && onComplete) {
            onComplete();
        }
    });

    return (
        <mesh>
            <planeGeometry args={[2, 2]} />
            <transitionMaterial
                ref={materialRef}
                tFrom={fromTexture}
                tTo={toTexture}
                uProgress={0}
                uIntensity={0.05}
                uTransitionType={transitionType}
            />
        </mesh>
    );
}

export function ShaderTransitionOverlay({ transitionType = 2, enabled = false }) {
    const location = useLocation();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const previousPathRef = useRef(location.pathname);

    useEffect(() => {
        if (!enabled) return;

        const currentPath = location.pathname;
        const prevPath = previousPathRef.current;

        // Skip if same path or first mount
        if (prevPath === currentPath || prevPath === null) {
            previousPathRef.current = currentPath;
            return;
        }

        // Start transition
        setIsTransitioning(true);
        previousPathRef.current = currentPath;
    }, [location.pathname, enabled]);

    const handleTransitionComplete = () => {
        setIsTransitioning(false);
    };

    if (!enabled || !isTransitioning) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 9999
        }}>
            <Canvas
                orthographic
                camera={{ position: [0, 0, 1], zoom: 1 }}
                gl={{
                    antialias: false,
                    powerPreference: 'high-performance',
                    alpha: true
                }}
            >
                <OrthographicCamera makeDefault position={[0, 0, 1]} />
                <TransitionPlane
                    show={isTransitioning}
                    onComplete={handleTransitionComplete}
                    transitionType={transitionType}
                />
            </Canvas>
        </div>
    );
}

// Export transition types for easy configuration
export const TRANSITION_TYPES = {
    CROSSFADE: 0,
    WIPE: 1,
    DISPLACEMENT: 2,
    RADIAL: 3,
    PIXELATE: 4,
    SLIDE: 5
};
