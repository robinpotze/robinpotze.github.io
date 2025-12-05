import { ANIMATION_TIMING } from '@config/animations';
import { useProgress } from '@react-three/drei';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({
    onComplete,
    minDisplayTime = 1500,
    logoSrc = null
}) {
    const { progress: threeProgress } = useProgress();
    const [progress, setProgress] = useState(0);
    const [isHidden, setIsHidden] = useState(false);
    const startTimeRef = useRef(Date.now());
    const hasCompletedRef = useRef(false);

    useEffect(() => {
        setProgress(threeProgress);
    }, [threeProgress]);

    useEffect(() => {
        if (progress >= 100 && !hasCompletedRef.current) {
            hasCompletedRef.current = true;

            const elapsed = Date.now() - startTimeRef.current;
            const remainingTime = Math.max(0, minDisplayTime - elapsed);

            setTimeout(() => {
                setIsHidden(true);
                setTimeout(() => {
                    if (onComplete) {
                        onComplete();
                    }
                }, ANIMATION_TIMING.LOADING_FADE_OUT);
            }, remainingTime);
        }
    }, [progress, minDisplayTime, onComplete]);

    return (
        <div className={`loading-screen ${isHidden ? 'hidden' : 'visible'}`}>
            {logoSrc && (
                <img
                    src={logoSrc}
                    alt="Loading"
                    className="loading-logo"
                />
            )}
            <div className="loading-bar-container">
                <div
                    className="loading-bar"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <div className="loading-text deco-small">
                LOADING // {Math.floor(progress)}%
            </div>
        </div>
    );
}

LoadingScreen.propTypes = {
    onComplete: PropTypes.func,
    minDisplayTime: PropTypes.number,
    logoSrc: PropTypes.string
};
