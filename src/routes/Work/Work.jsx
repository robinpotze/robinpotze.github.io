import { NavigationMenu } from '@features';
import { useEffect } from 'react';
import { useCanvas } from '@core/contexts/CanvasContext';
import './Work.css';

export default function Work() {
    const { transitionToScene, setTransitionProgress } = useCanvas();

    useEffect(() => {
        transitionToScene('work');
        setTransitionProgress(1);
    }, [setTransitionProgress, transitionToScene]);

    return <NavigationMenu />;
}