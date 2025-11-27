import { useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { RadialGrid, RedoAnimText, ScrollDown } from '@components';
import { useCanvas } from '@core/contexts/CanvasContext';
import { useTransition } from '@core/transitions/TransitionManager';
import './Home.css';

export default function Home() {
    const { transitionToScene, setTransitionProgress } = useCanvas();
    const { transitionToWork, isTransitioning } = useTransition();
    const busyRef = useRef(false);
    const progressRef = useRef(0);

    useEffect(() => {
        transitionToScene('home');
        setTransitionProgress(0);
    }, [setTransitionProgress, transitionToScene]);

    const triggerTransition = useCallback(async () => {
        if (busyRef.current || isTransitioning) return;
        busyRef.current = true;
        await transitionToWork({ animate: false });
        busyRef.current = false;
    }, [isTransitioning, transitionToWork]);

    const setProgress = useCallback((value) => {
        const clamped = Math.min(1, Math.max(0, value));
        if (Math.abs(clamped - progressRef.current) < 0.001) return;
        progressRef.current = clamped;
        setTransitionProgress(clamped);
        if (clamped >= 1) {
            triggerTransition();
        }
    }, [setTransitionProgress, triggerTransition]);

    const applyDelta = useCallback((delta) => {
        if (busyRef.current || isTransitioning || delta === 0) return;
        const normalized = delta / 1200;
        setProgress(progressRef.current + normalized);
    }, [isTransitioning, setProgress]);

    useEffect(() => {
        let touchY = null;

        const onWheel = (e) => {
            if (e.ctrlKey) return;
            applyDelta(e.deltaY);
        };

        const onTouchStart = (e) => {
            touchY = e.touches?.[0]?.clientY ?? null;
        };

        const onTouchMove = (e) => {
            if (touchY == null) return;
            const current = e.touches?.[0]?.clientY;
            if (current == null) return;
            applyDelta(touchY - current);
            touchY = current;
        };

        const onTouchEnd = () => {
            touchY = null;
        };

        const onKey = (e) => {
            if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
                e.preventDefault();
                applyDelta(150);
            } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
                e.preventDefault();
                applyDelta(-150);
            } else if (e.key === 'Enter') {
                triggerTransition();
            }
        };

        window.addEventListener('wheel', onWheel, { passive: true });
        window.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchmove', onTouchMove, { passive: true });
        window.addEventListener('touchend', onTouchEnd, { passive: true });
        window.addEventListener('keydown', onKey);

        return () => {
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
            window.removeEventListener('keydown', onKey);
        };
    }, [applyDelta, triggerTransition]);

    return (
        <div className='home-page'>
            <div className='home-section'>
                <div className='home-content'>
                    <Link to='/' className='home-logo-link'><img src="img/logo/logo64.png" alt='robin potze logo' className='home-logo' /></Link>
                    <p className='deco home-name'>ROBIN <br /> POTZE</p>
                    <p className='deco-small home-quote'>| THOSE WHO DOUBT |<br />| CAST THEMSELVES|<br />| INTO A VOID |<br /><RedoAnimText delay={0.5} /><br />| AMBIGUOUS AMBIVALENCE |</p>
                    <div className='home-accents-bottom'>
                        <RadialGrid type='CRCL' />
                        <img className='home-accent-decal' src='img/decal/OFS.svg' alt='Offset cyberpunk dorito decal' />
                    </div>
                </div>
                <div className='home-side'>
                    <div className='home-side-rotation-wrapper'>
                        <div className='home-side-flavour-text r90'>
                            <p className='deco-small home-side-text'>assertThat(AMBIGUOUS.AMBIVALENCE)</p>
                            <p className='deco-small home-side-text-brand'>willReturn("ESCAPE WILL MAKE ME GOD")</p>
                        </div>
                    </div>
                    <div className='home-side-divider r90'>
                        <img className='home-side-decal' src='img/icon/CRS.svg' alt='divider' />
                        <p className='deco-tiny home-side-deco-text'>SDD.01</p>
                    </div>
                    <img className='home-side-decal' src='img/decal/MORSE.svg' alt='robin potze in barcode' />
                    <img className='home-side-decal' src='img/decal/PILL.svg' alt='pill with four arrows point downwards' />
                    <div className='home-scroll-trigger' onClick={() => setProgress(1)} role='presentation'>
                        <ScrollDown />
                    </div>
                </div>
            </div>
        </div>
    );
};