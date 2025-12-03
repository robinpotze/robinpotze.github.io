import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useRef, useState } from 'react';
import { NavigationMenu } from '@components/layout/NavigationMenu/NavigationMenu';
import { useWorkStore } from '@/stores/workStore';
import WorkCanvas from '@canvas/work/WorkCanvas';
import TransitionOverlay from '@components/effects/TransitionOverlay/TransitionOverlay';
import { LaserFlow } from '@canvas/laser/Laser';
import './Work.css';

export default function Work() {
    const navigate = useNavigate();
    const items = useWorkStore((state) => state.items);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [canvasScrollOffset, setCanvasScrollOffset] = useState(0);

    const handleCardNavigate = useCallback((pageKey) => {
        navigate(`/work/${pageKey}`);
    }, [navigate]);

    const handleCanvasScrollChange = useCallback((offset) => {
        setCanvasScrollOffset(offset);
    }, []);

    // Track upward scroll for transition back to home (only when at top)
    useEffect(() => {
        let scrollAmount = 0;
        const maxScroll = 600;

        const handleWheel = (e) => {
            // Only track if canvas is at the top (offset near 0)
            if (canvasScrollOffset > 0.01) {
                setScrollProgress(0);
                scrollAmount = 0;
                return;
            }

            if (e.deltaY < 0) {
                // Scrolling up
                scrollAmount += Math.abs(e.deltaY);
            } else {
                // Scrolling down - reset
                scrollAmount = Math.max(0, scrollAmount - Math.abs(e.deltaY));
            }

            // Map 0-600px of upward scroll to 0.85-1.0 progress
            const progress = 0.85 + (Math.min(scrollAmount, maxScroll) / maxScroll) * 0.15;
            setScrollProgress(progress);
        };

        window.addEventListener('wheel', handleWheel, { passive: true });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [canvasScrollOffset]);

    const handleTransitionComplete = () => {
        navigate('/');
    };

    return (
        <div className='work-page-container'>
            <TransitionOverlay 
                scrollProgress={0}
                onTransitionComplete={null}
                entryAnimation={true}
            />
            {scrollProgress >= 0.85 && (
                <TransitionOverlay 
                    scrollProgress={scrollProgress}
                    onTransitionComplete={handleTransitionComplete}
                    entryAnimation={false}
                />
            )}
            <NavigationMenu />
            <WorkCanvas 
                items={items} 
                onCardNavigate={handleCardNavigate}
                onScrollChange={handleCanvasScrollChange}
            />
        </div>
    );
}