import dateTime from '@hooks/dateTime';

import BlackwallEffect from '@components/blackwall/Blackwall';
import RadialGrid from '@deco/radialGrid/RadialGrid';
import RedoAnimText from '@deco/randomText/RedoAnimText';
import ScrollDown from '@interaction/ScrollDown/ScrollDown';

import './Home.css';

export default function Home() {

    return (
        <div className='landing-page'>
            <div className='hero-section' id='landing-hero'>
                <BlackwallEffect onScrollTrigger={() => { "hero-section" }} />
                <div className='hero-content' id='landing-content'>
                    <a href='/' className='logo-home-link' id='landing-home-link'><img src="img/logo/logo64.png" alt='robin potze logo' className='logo-header' id='landing-logo' /></a>
                    <p className='tech-info' id='landing-name'>ROBIN <br /> POTZE</p>
                    <p className='tech-info' id='landing-quote'>| THOSE WHO DOUBT |<br />| CAST THEMSELVES|<br />| INTO A VOID |<br /><RedoAnimText delay={0.5} /><br />| AMBIGUOUS AMBIVALENCE |</p>
                    <h1 className='hero-title' id='landing-title'>{dateTime()}</h1>
                    <div id='landing-subtitle'>
                        <h3 className='hero-subtitle' id='landing-subtitle-text-upper'>PRJNo::000 | C://PRJ/PF/CUSTOM | V1</h3>
                        <h3 className='hero-subtitle' id='landing-subtitle-text-lower'>GRONINGEN | NL</h3>
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