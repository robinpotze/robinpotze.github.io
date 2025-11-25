import { Suspense, lazy, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RadialGrid, RedoAnimText, ScrollDown } from '@components';
import { useDateTime } from '@hooks';
import './Home.css';

const HomeScreenEffect = lazy(() => import('./HomeScreen/HomeScreen.jsx'));

export default function Home() {
    const navigate = useNavigate();
    const busyRef = useRef(false);

    useEffect(() => {
        function navigateToWork() {
            if (busyRef.current) return;
            busyRef.current = true;
            navigate('/work');
            setTimeout(() => { busyRef.current = false; }, 1000);
        }

        const onWheel = (e) => { if (e.deltaY > 20) navigateToWork(); };
        let touchStartY = null;
        const onTouchStart = (e) => { touchStartY = e.touches ? e.touches[0].clientY : null; };
        const onTouchEnd = (e) => {
            if (touchStartY == null) return;
            const endY = e.changedTouches ? e.changedTouches[0].clientY : null;
            if (endY != null && touchStartY - endY > 50) navigateToWork();
            touchStartY = null;
        };
        const onKey = (e) => {
            if (['ArrowDown', 'PageDown', ' '].includes(e.key)) navigateToWork();
        };

        window.addEventListener('wheel', onWheel, { passive: true });
        window.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchend', onTouchEnd, { passive: true });
        window.addEventListener('keydown', onKey);

        return () => {
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchend', onTouchEnd);
            window.removeEventListener('keydown', onKey);
        };
    }, [navigate]);


    return (
        <div className='landing-page'>
            <div className='hero-section' id='landing-hero'>
                <Suspense fallback={<div className="fixed inset-0 -z-10 pointer-events-none" />}>
                    <HomeScreenEffect onScrollTrigger={() => { "hero-section" }} />
                </Suspense>
                <div className='hero-content' id='landing-content'>
                    <Link to='/' className='logo-home-link' id='landing-home-link'><img src="img/logo/logo64.png" alt='robin potze logo' className='logo-header' id='landing-logo' /></Link>
                    <p className='deco' id='landing-name'>ROBIN <br /> POTZE</p>
                    <p className='deco-small' id='landing-quote'>| THOSE WHO DOUBT |<br />| CAST THEMSELVES|<br />| INTO A VOID |<br /><RedoAnimText delay={0.5} /><br />| AMBIGUOUS AMBIVALENCE |</p>
                    <div className='hero-accents-bottom' id='landing-accents-bottom'>
                        <RadialGrid type='CRCL' />
                        <img className='hero-accent-decal' id='landing-accent-decal' src='img/decal/OFS.svg' alt='Offset cyberpunk dorito decal' />
                    </div>
                </div>
                <div className='hero-side' id='landing-side'>
                    <div className='rotation-wrapper' id='landing-side-rotation-wrapper'>
                        <div className='flavour-text r90' id='landing-side-flavour-text'>
                            <p className='deco-small' id='landing-side-text'>assertThat(AMBIGUOUS.AMBIVALENCE)</p>
                            <p className='deco-small' id='landing-side-text-brand'>willReturn(“ESCAPE WILL MAKE ME GOD”)</p>
                        </div>
                    </div>
                    <div className='icon-text r90' id='landing-side-divider'>
                        <img className='hero-side-decal' src='img/icon/CRS.svg' alt='divider' />
                        <p className='deco-tiny' id='landing-side-deco-text'>SDD.01</p>
                    </div>
                    <img className='hero-side-decal' src='img/decal/MORSE.svg' alt='robin potze in barcode' />
                    <img className='hero-side-decal' src='img/decal/PILL.svg' alt='pill with four arrows point downwards' />
                    <ScrollDown />
                </div>
            </div>
        </div>
    );
};