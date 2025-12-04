import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import HomeLayout from './HomeLayout';
import HomeCanvas from '@canvas/home/HomeCanvas';
import { LaserFlow } from '@canvas/laser/Laser';
import { CurtainTransition } from '@components/effects';
import { LoadingScreen } from '@components';
import './Home.css';

export default function Home() {
    const navigate = useNavigate();
    const location = useLocation();
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Skip loading screen if navigating from another page
    const skipLoading = !!(location.state?.fromNavigation);
    const [isLoading, setIsLoading] = useState(!skipLoading);
    const [showContent, setShowContent] = useState(skipLoading);
    const [curtainOpen, setCurtainOpen] = useState(false);
    const hasNavigated = useRef(false);

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

            setScrollProgress(progress);

            // Trigger curtain at 95% scroll
            if (progress >= 0.95 && !hasNavigated.current) {
                setCurtainOpen(true);
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
            setIsLoading(false);
            setShowContent(true);
        }, 50);
    };

    const laserProgress = showContent ? scrollProgress : 0;
    const horizontalSizing = 0 + (laserProgress * 2);
    const verticalSizing = 0 + (laserProgress * 3);
    const verticalBeamOffset = -0.6 + (laserProgress * 0.1);
    const fogIntensity = 0.2 + (laserProgress * 0.2);
    const wispSpeed = 50.0 - (laserProgress * 40.0);
    const wispIntensity = 5.0 + (laserProgress * 5.0);
    const decay = 1.5 - (laserProgress * 0.5);

    return (
        <>
            {isLoading && (
                <LoadingScreen
                    onComplete={handleLoadingComplete}
                    minDisplayTime={2000}
                    logoSrc="/img/logo/logo.svg"
                />
            )}
            <div className='home-page' ref={containerRef} style={{ opacity: showContent ? 1 : 0, transition: 'opacity 0.6s ease-out', pointerEvents: showContent ? 'auto' : 'none' }}>
                <CurtainTransition
                    isOpen={curtainOpen}
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
                <HomeCanvas scrollProgress={scrollProgress} startAnimations={showContent} />
            </div>
        </>
    );
}

