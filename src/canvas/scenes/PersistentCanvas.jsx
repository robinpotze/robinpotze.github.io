import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, ScrollControls } from "@react-three/drei";
import { useCanvas } from "@core/contexts/CanvasContext";
import { useApp } from "@app/store";
import HomeScene from "./HomeScene";
import WorkScene from "./WorkScene";
import TransitionCamera from "./TransitionCamera";
import SceneFader from "./SceneFader";
import "./PersistentCanvas.css";

export default function PersistentCanvas() {
    const { currentScene, transitionProgress } = useCanvas();
    const { workItems } = useApp();
    const homeLevel = 1 - transitionProgress;
    const workLevel = transitionProgress;

    return (
        <div className="persistent-canvas-container">
            <Canvas eventSource={document.getElementById("root")} eventPrefix="client" shadows gl={{ antialias: true }}>
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
