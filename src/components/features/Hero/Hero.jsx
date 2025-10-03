import PropTypes from 'prop-types';

import ScrollDown from '@deco/ScrollDown/ScrollDown';

import "./Hero.css"

export default function Hero({ content }) {
    return (
        <div className='hero-section' id='work-hero-section'>
            <img className='hero-banner' id={content.title.replace(/\s+/g, '-') + '-hero-banner'} src={content.banner} alt={content.title.replace(/\s+/g, '-') + 'hero banner'} />
            <div className='hero-side' id='work-hero-side'>
                <div className="icon-array-vertical" id='work-hero-icons'>
                    {content.software.map((software) => (
                        <img className='hero-side-decal' key={software} src={`/img/software/${software}.svg`} alt={`${software}-logo`} />
                    ))}
                </div>
                <div className='text-array' id='work-hero-side-skills'>
                    {content.skills.map((skill) => (
                        <p className='tech-info tr90' key={skill} id={`hero-side-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}>{skill.toLowerCase().replace(/\s+/g, '_') + "_/"}</p>
                    ))}
                </div>
                <img className='hero-side-decal' src='/img/icon/CRS.svg' alt='A Cross Divider' />
                <div className='hero-side-text' id='work-project-code'>
                    <p className='tech-small tr90' id='work-hero-project-id'>{"PRJ_" + content.id.toString().padStart(3, "0") + ":::"}</p>
                    <p className='tech-small tr90' id='work-hero-project-client'>{content.client}</p>
                </div>
                <p className='tech-small tr90' id='work-hero-side-deco-text'>{content.year}</p>
                <ScrollDown />
            </div>
            <div className='hero-content' id='work-hero-content'>
                <div className='hero-title-wrapper' id='work-hero-title-wrapper'>
                    <img className='hero-title-decal' id='work-hero-decal' src='/img/icon/PLS.svg' alt='Plus Sign' />
                    <h2 id='work-hero-title'>{content.title.replace(/\s+/g, '_')}</h2>
                    <img className='hero-title-decal' id='work-hero-decal' src='/img/icon/PLS.svg' alt='Plus Sign' />
                </div>
            </div>
        </div>
    );
}

Hero.propTypes = {
    content: PropTypes.object.isRequired,
}