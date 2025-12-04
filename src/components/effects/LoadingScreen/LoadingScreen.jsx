import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { ANIMATION_TIMING } from '@config/animations';
import './LoadingScreen.css';

export default function LoadingScreen({
    onComplete,
    minDisplayTime = 1500,
    logoSrc = null
}) {
    const [progress, setProgress] = useState(0);
    const [isHidden, setIsHidden] = useState(false);
    const startTimeRef = useRef(Date.now());
    const hasCompletedRef = useRef(false);

    useEffect(() => {
        // Simulate loading progress
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                // Exponential easing for more natural progress
                const increment = (100 - prev) * 0.15;
                return Math.min(100, prev + Math.max(increment, 0.5));
            });
        }, 50);

        return () => clearInterval(progressInterval);
    }, []);

    useEffect(() => {
        if (progress >= 100 && !hasCompletedRef.current) {
            hasCompletedRef.current = true;

            const elapsed = Date.now() - startTimeRef.current;
            const remainingTime = Math.max(0, minDisplayTime - elapsed);

            setTimeout(() => {
                setIsHidden(true);

                // Wait for fade out animation before calling onComplete
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
