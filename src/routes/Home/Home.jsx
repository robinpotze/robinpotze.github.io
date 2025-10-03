import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';

const BlackwallEffect = lazy(() => import('@components/Blackwall/Blackwall'));
import { RadialGrid, RedoAnimText, ScrollDown } from '@deco';
import { useDateTime } from '@hooks';

import './Home.css';

export default function Home() {

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