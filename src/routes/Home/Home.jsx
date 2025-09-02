import dateTime from '@hooks/dateTime';

import BlackwallEffect from '@components/Blackwall/Blackwall';
import RAD_GRID from '@components/DECO/RAD_GRID/RAD_GRID';

import './Home.css';

export default function Home() {

    return (
        <div className='hero-section' id='landing-hero'>
            <BlackwallEffect onScrollTrigger={() => { "hero-section" }} />
            <div className='hero-content' id='landing-content'>
                <a href='/' className='logo-home-link'><img src="img/logo/logo64.png" alt='robin potze logo' className='logo-header' id='logo-landing' /></a>
                <p className='tech-small' id='landing-name'>ROBIN <br /> POTZE</p>
                <h1 className='hero-title' id='landing-title'>ROBIN POTZE</h1>
                <p className='tech-small' id='landing-time'>{dateTime()}</p>
                <div className='hero-subtitle' id='landing-subtitle'>
                    <p className='tech-small' id='landing-subtitle-text'>PRJNo::000 | C://PRJ/PF/CUSTOM | V1</p>
                    <p className='tech-small' id='landing-subtitle-text'>GRONINGEN | NL</p>
                </div>
                <div className='hero-accents-bottom' id='landing-accents-bottom'>
                    <RAD_GRID type='CRCL' />
                </div>
            </div>
            <div className='hero-side' id='landing-side'>
                <div className='rotation-wrapper'>
                    <div className='flavour-text r90' id='landing-side-flavour-text'>
                        <p className='tech-small' id='landing-side-text'>assertThat(AMBIGUOUS.AMBIVALENCE)</p>
                        <p className='tech-small' id='landing-side-text-red'>willReturn(“ESCAPE WILL MAKE ME GOD”)</p>
                    </div>
                </div>
                <div className='divider-icon-text r90' id='landing-side-divider'>
                    <img className='side-decal' src='img/icon/CRS.svg' alt='divider' />
                    <p className='tech-small' id='landing-side-deco-text'>SDD.01</p>
                </div>
                <img className='side-decal' src='img/icon/MORSE.svg' alt='robin potze in barcode' />
                <img className='side-decal' src='img/icon/PILL.svg' alt='pill with four arrows point downwards' />
                <img className='side-decal' src='img/icon/SCRL.svg' alt='Downward arrow' />
            </div>
        </div>
    );
};