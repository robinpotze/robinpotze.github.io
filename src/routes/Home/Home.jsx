import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState, useReducer } from 'react';
import { ANIMATION_TIMING, SCROLL_THRESHOLDS } from '@/constants/animations';
import HomeLayout from './HomeLayout';
import HomeCanvas from '@canvas/home/HomeCanvas';
import { LaserFlow } from '@canvas/laser/Laser';
import { CurtainTransition, LoadingScreen, ErrorBoundary } from '@components';
import './Home.css';

// State machine for page lifecycle
const initialState = (skipLoading) => ({
    isLoading: !skipLoading,
    showContent: skipLoading,
    curtainOpen: false,
    scrollProgress: 0,
});

function homeReducer(state, action) {
    switch (action.type) {
        case 'LOADING_COMPLETE':
            return { ...state, isLoading: false, showContent: true };
        case 'SET_SCROLL':
            return { ...state, scrollProgress: action.payload };
        case 'OPEN_CURTAIN':
            return { ...state, curtainOpen: true };
        case 'CLOSE_CURTAIN':
            return { ...state, curtainOpen: false };
        default:
            return state;
    }
}

export default function Home() {
    const navigate = useNavigate();
    const location = useLocation();
    const containerRef = useRef(null);
    const hasNavigated = useRef(false);

    const skipLoading = !!(location.state?.fromNavigation);
    const [state, dispatch] = useReducer(homeReducer, skipLoading, initialState);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (containerRef.current) {
            containerRef.current.scrollTop = 0;
        }
        hasNavigated.current = false;

        // Clear navigation state after reading it
        if (location.state?.fromNavigation) {
            window.history.replaceState({}, document.title);
        }
    }, [location.state?.fromNavigation]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollTop = Math.max(0, container.scrollTop);
            const scrollHeight = Math.max(1, container.scrollHeight - container.clientHeight);
            const progress = Math.max(0, Math.min(1, scrollTop / scrollHeight));

            dispatch({ type: 'SET_SCROLL', payload: progress });

            // Trigger curtain at threshold
            if (progress >= SCROLL_THRESHOLDS.HOME_TRANSITION && !hasNavigated.current) {
                dispatch({ type: 'OPEN_CURTAIN' });
            }
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    const handleCoverComplete = () => {
        if (hasNavigated.current) return;
        hasNavigated.current = true;

        // Navigate with state to skip loading on return
        navigate('/work', { state: { fromNavigation: true } });
    };

    const handleLoadingComplete = () => {
        setTimeout(() => {
            dispatch({ type: 'LOADING_COMPLETE' });
        }, ANIMATION_TIMING.LOADING_COMPLETE_DELAY);
    };

    const laserProgress = state.showContent ? state.scrollProgress : 0;
    const horizontalSizing = 0 + (laserProgress * 2);
    const verticalSizing = 0 + (laserProgress * 3);
    const verticalBeamOffset = -0.6 + (laserProgress * 0.1);
    const fogIntensity = 0.2 + (laserProgress * 0.2);
    const wispSpeed = 50.0 - (laserProgress * 40.0);
    const wispIntensity = 5.0 + (laserProgress * 5.0);
    const decay = 1.5 - (laserProgress * 0.5);

    return (
        <>
            {state.isLoading && (
                <LoadingScreen
                    onComplete={handleLoadingComplete}
                    minDisplayTime={ANIMATION_TIMING.LOADING_MIN_DISPLAY}
                    logoSrc="/img/logo/logo.svg"
                />
            )}
            <div className='home-page' ref={containerRef} style={{ opacity: state.showContent ? 1 : 0, transition: 'opacity 0.6s ease-out', pointerEvents: state.showContent ? 'auto' : 'none' }}>
                <CurtainTransition
                    isOpen={state.curtainOpen}
                    direction="up"
                    onCoverComplete={handleCoverComplete}
                />
                <LaserFlow
                    horizontalSizing={horizontalSizing}
                    verticalSizing={verticalSizing}
                    horizontalBeamOffset={0.0}
                    verticalBeamOffset={verticalBeamOffset}
                    color="#29D8FF"
                    fogIntensity={fogIntensity}
                    wispSpeed={wispSpeed}
                    wispIntensity={wispIntensity}
                    decay={decay}
                />
                <HomeLayout />
                <ErrorBoundary>
                    <HomeCanvas scrollProgress={state.scrollProgress} startAnimations={state.showContent} />
                </ErrorBoundary>
            </div>
        </>
    );
}

