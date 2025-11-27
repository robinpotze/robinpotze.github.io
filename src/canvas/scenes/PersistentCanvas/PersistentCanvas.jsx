import { Canvas, useThree } from "@react-three/fiber";
import { PerspectiveCamera, ScrollControls } from "@react-three/drei";
import { useCanvas } from "@core/contexts/CanvasContext";
import { useApp } from "@app/store";
import HomeScene from "@canvas/scenes/HomeScene/HomeScene";
import WorkScene from "@canvas/scenes/WorkScene/WorkScene";
import TransitionCamera from "@canvas/scenes/TransitionCamera";
import SceneFader from "@canvas/scenes/SceneFader";
import "./PersistentCanvas.css";
import { useEffect } from "react";

export default function PersistentCanvas() {
    const { currentScene, transitionProgress } = useCanvas();
    const { workItems } = useApp();
    const homeLevel = 1 - transitionProgress;
    const workLevel = transitionProgress;

    const isWorkScene = currentScene === 'work';

    return (
        <div className={`persistent-canvas-container${isWorkScene ? ' is-work-scene' : ''}`}>
            <Canvas eventSource={document.getElementById("root")} eventPrefix="client" shadows gl={{ antialias: true }}>
                <RootEventBridge targetId="root" />
                <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={50} />
                <ambientLight intensity={0.5} />
                <TransitionCamera />

                <SceneFader level={homeLevel}>
                    <HomeScene />
                </SceneFader>

                {workItems.length > 0 && (
                    <ScrollControls pages={workItems.length / 20} damping={0.1} enabled={currentScene === 'work'}>
                        <SceneFader level={workLevel}>
                            <WorkScene items={workItems} progress={workLevel} />
                        </SceneFader>
                    </ScrollControls>
                )}
            </Canvas>
        </div>
    );
}

function RootEventBridge({ targetId }) {
    const events = useThree((state) => state.events);
    const connected = useThree((state) => state.events.connected);

    useEffect(() => {
        if (typeof document === 'undefined') return;
        const target = document.getElementById(targetId);
        if (!target || connected === target) return;
        events.connect?.(target);
    }, [events, connected, targetId]);

    return null;
}
