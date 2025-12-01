import { Link } from 'react-router-dom';
import { RadialGrid, RedoAnimText, ScrollDown } from '@components';

export default function HomeLayout() {
    return (
        <>
            <div className='home-section'>
                <div className='home-content'>
                    <Link to='/' className='home-logo-link'>
                        <img src="img/logo/logo64.png" alt='robin potze logo' className='home-logo' />
                    </Link>
                    <p className='deco home-name'>ROBIN <br /> POTZE</p>
                    <p className='deco-small home-quote'>
                        | THOSE WHO DOUBT |<br />
                        | CAST THEMSELVES|<br />
                        | INTO A VOID |<br />
                        <RedoAnimText delay={0.5} /><br />
                        | AMBIGUOUS AMBIVALENCE |
                    </p>
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
                    <div className='home-scroll-trigger'>
                        <ScrollDown />
                    </div>
                </div>
            </div>

            <div className='home-transition-section'>
                <div className='transition-content'>
                    <h2 className='deco transition-title'>SELECTED PROJECTS</h2>
                    <p className='deco-small transition-subtitle'>
                        Scroll to explore work
                    </p>
                </div>
            </div>
        </>
    );
}
