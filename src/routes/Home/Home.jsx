import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import HomeLayout from './HomeLayout';
import HomeCanvas from '@canvas/home/HomeCanvas';
import { LaserFlow } from '@canvas/laser/Laser';
import TransitionOverlay from '@components/effects/TransitionOverlay/TransitionOverlay';
import './Home.css';

export default function Home() {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const hasNavigated = useRef(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (containerRef.current) {
            containerRef.current.scrollTop = 0;
        }
        hasNavigated.current = false;
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollTop = Math.max(0, container.scrollTop);
            const scrollHeight = Math.max(1, container.scrollHeight - container.clientHeight);
            const progress = Math.max(0, Math.min(1, scrollTop / scrollHeight));

            setScrollProgress(progress);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    const handleTransitionComplete = () => {
        if (hasNavigated.current) return;
        hasNavigated.current = true;
        
        setTimeout(() => {
            navigate('/work');
        }, 200);
    };

    const horizontalSizing = 0 + (scrollProgress * 2);
    const verticalSizing = 0 + (scrollProgress * 3);
    const verticalBeamOffset = -0.6 + (scrollProgress * 0.1);
    const fogIntensity = 0.2 + (scrollProgress * 0.2);
    const wispSpeed = 50.0 - (scrollProgress * 40.0);
    const wispIntensity = 5.0 + (scrollProgress * 5.0);
    const decay = 1.5 - (scrollProgress * 0.5);

    return (
        <div className='home-page' ref={containerRef}>
            <TransitionOverlay 
                scrollProgress={scrollProgress}
                onTransitionComplete={handleTransitionComplete}
                entryAnimation={false}
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
            <HomeCanvas scrollProgress={scrollProgress} />
        </div>
    );
}

