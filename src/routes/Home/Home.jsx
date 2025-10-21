import { Suspense, lazy, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTransition } from '@core/transitions';
import { RadialGrid, RedoAnimText, ScrollDown } from '@deco';
import { useDateTime } from '@hooks';

const BlackwallEffect = lazy(() => import('@effects/Blackwall/Blackwall'));

import './Home.css';

export default function Home() {
    const navigate = useNavigate();
    const busyRef = useRef(false);
    const { start } = useTransition();

    useEffect(() => {
        async function goToWork() {
            if (busyRef.current) return;
            busyRef.current = true;

            // compute a payload from the hero content so the shader can focus on that rect
            const heroEl = document.getElementById('landing-content');
            const viewport = { width: window.innerWidth, height: window.innerHeight };
            let payload = { viewport };
            if (heroEl) {
                const rect = heroEl.getBoundingClientRect();
                payload.rect = {
                    centerX: rect.left + rect.width / 2,
                    centerY: rect.top + rect.height / 2,
                    width: rect.width,
                    height: rect.height
                };
            }

            // Use hero rect only; no scrolling or spacer injection
            payload.rect = payload.rect ?? {};
            payload.viewport = viewport;
            payload.mode = 'boot';
            if (heroEl) {
                const rect = heroEl.getBoundingClientRect();
                payload.rect.centerX = rect.left + rect.width / 2;
                payload.rect.centerY = rect.top + rect.height / 2;
                payload.rect.width = rect.width;
                payload.rect.height = rect.height;
            } else {
                // fallback center rectangle
                payload.rect.centerX = viewport.width / 2;
                payload.rect.centerY = viewport.height / 2;
                payload.rect.width = Math.min(viewport.width * 0.8, 960);
                payload.rect.height = Math.min(viewport.height * 0.25, 340);
            }

            try {
                // cinematic longer duration; start immediately
                await start({ out: 1600, payload });
            } catch (e) { }

            navigate('/work');
            // AutoTransitionEnd will call end() after navigation; release busy lock shortly after
            setTimeout(() => (busyRef.current = false), 1000);
        }

        function onWheel(e) {
            if (e.deltaY > 20) goToWork();
        }

        let touchStartY = null;
        function onTouchStart(e) {
            touchStartY = e.touches ? e.touches[0].clientY : null;
        }
        function onTouchEnd(e) {
            if (touchStartY == null) return;
            const endY = e.changedTouches ? e.changedTouches[0].clientY : null;
            if (endY != null && touchStartY - endY > 50) goToWork();
            touchStartY = null;
        }

        function onKey(e) {
            if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
                goToWork();
            }
        }

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
                    <p className='tech-info' id='landing-name'>ROBIN <br /> POTZE</p>
                    <p className='tech-info' id='landing-quote'>| THOSE WHO DOUBT |<br />| CAST THEMSELVES|<br />| INTO A VOID |<br /><RedoAnimText delay={0.5} /><br />| AMBIGUOUS AMBIVALENCE |</p>
                    <h1 className='hero-title' id='landing-title'>{useDateTime()}</h1>
                    <div id='landing-subtitle'>
                        <p className='tech-small' id='landing-subtitle-text-upper'>PRJNo::000 | C://PRJ/PF/CUSTOM | V1</p>
                        <p className='tech-small' id='landing-subtitle-text-lower'>GRONINGEN | NL</p>
                    </div>
                    <div className='hero-accents-bottom' id='landing-accents-bottom'>
                        <RadialGrid type='CRCL' />
                        <img className='hero-accent-decal' id='landing-accent-decal' src='img/icon/OFS.svg' alt='Offset cyberpunk dorito decal' />
                    </div>
                </div>
                <div className='hero-side' id='landing-side'>
                    <div className='rotation-wrapper' id='landing-side-rotation-wrapper'>
                        <div className='flavour-text r90' id='landing-side-flavour-text'>
                            <p className='tech-info' id='landing-side-text'>assertThat(AMBIGUOUS.AMBIVALENCE)</p>
                            <p className='tech-info' id='landing-side-text-brand'>willReturn(“ESCAPE WILL MAKE ME GOD”)</p>
                        </div>
                    </div>
                    <div className='icon-text r90' id='landing-side-divider'>
                        <img className='hero-side-decal' src='img/icon/CRS.svg' alt='divider' />
                        <p className='tech-tiny' id='landing-side-deco-text'>SDD.01</p>
                    </div>
                    <img className='hero-side-decal' src='img/icon/MORSE.svg' alt='robin potze in barcode' />
                    <img className='hero-side-decal' src='img/icon/PILL.svg' alt='pill with four arrows point downwards' />
                    <ScrollDown />
                </div>
            </div>
        </div>
    );
};