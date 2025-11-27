import { createContext, useContext, useState, useCallback } from 'react';

const CanvasContext = createContext(null);

const SCENES = {
    home: { position: [0, 0, 20], rotation: [0, 0, 0], fov: 50 },
    work: { position: [0, 0, 5], rotation: [0, 0, 0], fov: 50 }
};

export function CanvasProvider({ children }) {
    const [currentScene, setCurrentScene] = useState('home');
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [cameraTarget, setCameraTarget] = useState(SCENES.home);
    const [sceneProgress, setSceneProgress] = useState({ home: 0, work: 0 });
    const [transitionProgress, setTransitionProgressState] = useState(0);

    const updateSceneProgress = useCallback((sceneName, value) => {
        if (!sceneName) return;
        setSceneProgress((prev) => {
            const clamped = Math.min(1, Math.max(0, value));
            const next = { ...prev, [sceneName]: clamped };
            return prev?.[sceneName] === clamped ? prev : next;
        });
    }, []);

    const setTransitionProgress = useCallback((value) => {
        const clamped = Math.min(1, Math.max(0, value));
        setTransitionProgressState((prev) => (Math.abs(prev - clamped) < 0.0001 ? prev : clamped));
        setSceneProgress((prev) => {
            const next = { ...prev, home: clamped, work: clamped };
            return (prev.home === next.home && prev.work === next.work) ? prev : next;
        });
    }, []);

    const transitionToScene = useCallback(async (sceneName) => {
        if (currentScene === sceneName) return;

        setIsTransitioning(true);
        if (SCENES[sceneName]) setCameraTarget({ ...SCENES[sceneName] });

        await new Promise(resolve => setTimeout(resolve, 300));
        setCurrentScene(sceneName);
        await new Promise(resolve => setTimeout(resolve, 150));

        setIsTransitioning(false);
    }, [currentScene]);

    return (
        <CanvasContext.Provider value={{
            currentScene,
            isTransitioning,
            cameraTarget,
            transitionToScene,
            sceneConfigs: SCENES,
            sceneProgress,
            updateSceneProgress,
            transitionProgress,
            setTransitionProgress
        }}>
            {children}
        </CanvasContext.Provider>
    );
}

export function useCanvas() {
    const ctx = useContext(CanvasContext);
    if (!ctx) throw new Error('useCanvas must be used within CanvasProvider');
    return ctx;
}
