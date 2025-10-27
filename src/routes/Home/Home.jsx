import { Suspense, lazy, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTransition } from '@core/transitions';
import { RadialGrid, RedoAnimText, ScrollDown } from '@components';
import { useDateTime } from '@hooks';
import './Home.css';

const BlackwallEffect = lazy(() => import('@components/effects/Blackwall/Blackwall.jsx'));

export default function Home() {
    const navigate = useNavigate();
    const busyRef = useRef(false);
    const { start } = useTransition();

    useEffect(() => {
        const buildBootPayload = () => {
            const heroEl = document.getElementById('landing-content');
            const viewport = { width: window.innerWidth, height: window.innerHeight };
            const rectData = () => {
                if (!heroEl) {
                    return {
                        centerX: viewport.width / 2,
                        centerY: viewport.height / 2,
                        width: Math.min(viewport.width * 0.8, 960),
                        height: Math.min(viewport.height * 0.25, 340),
                    };
                }
                const r = heroEl.getBoundingClientRect();
                return {
                    centerX: r.left + r.width / 2,
                    centerY: r.top + r.height / 2,
                    width: r.width,
                    height: r.height,
                };
            };
            return { mode: 'boot', viewport, rect: rectData() };
        };

        async function navigateToWork() {
            if (busyRef.current) return;
            busyRef.current = true;
            const payload = buildBootPayload();
            try { await start({ out: 1600, payload }); } catch { }
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
    }, [navigate, start]);


    return (
        <div className='landing-page'>
            <div className='hero-section' id='landing-hero'>
                <Suspense fallback={<div className="fixed inset-0 -z-10 pointer-events-none" />}>
                    <BlackwallEffect onScrollTrigger={() => { "hero-section" }} />
                </Suspense>
                <div className='hero-content' id='landing-content'>
                    <Link to='/' className='logo-home-link' id='landing-home-link'><img src="img/logo/logo64.png" alt='robin potze logo' className='logo-header' id='landing-logo' /></Link>
                    <p className='deco' id='landing-name'>ROBIN <br /> POTZE</p>
                    <p className='deco-small' id='landing-quote'>| THOSE WHO DOUBT |<br />| CAST THEMSELVES|<br />| INTO A VOID |<br /><RedoAnimText delay={0.5} /><br />| AMBIGUOUS AMBIVALENCE |</p>
                    <h1 className='hero-title' id='landing-title'>{useDateTime()}</h1>
                    <div id='landing-subtitle'>
                        <p className='deco' id='landing-subtitle-text-upper'>PRJNo::000 | C://PRJ/PF/CUSTOM | V1</p>
                        <p className='deco' id='landing-subtitle-text-lower'>GRONINGEN | NL</p>
                    </div>
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