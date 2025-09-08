
import ScrollDown from '@interaction/ScrollDown/ScrollDown';
import TopNav from '@navigation/TopNav/TopNav';

import { useEffect, useState } from 'react';
import './Work.css';

export default function Work() {
    const [lineWidth, setLineWidth] = useState(1000)

    useEffect(() => {
        const line = document.getElementById("header-line");
        return () => {
            setLineWidth(line.getBoundingClientRect().width)
        }
    })

    const entry = {
        id: 1,
        title: "LSD JAM",
        client: "TRIPADVISORS",
        year: 2024,
        banner: "/img/work/lsdjam/Corridor.png",
        skills: ["Adobe Illustrator", "Figma", "Unity", "Blender"]
    };

    return (
        <div className='work-page' id={entry.title.replace(/\s+/g, '-') + '-page'}>
            <TopNav />
            <img className='hero-banner' id={entry.title.replace(/\s+/g, '-') + '-hero-banner'} src={entry.banner} alt={entry.title.replace(/\s+/g, '-') + 'hero banner'} />
            <div className='hero-section' id='work-hero-section'>
                <div className='hero-side' id='work-hero-side'>
                    <div className="icon-array-vertical" id='work-hero-icons'>
                        <img className='hero-side-decal' src="/img/software/Illustrator.svg" alt='Adobe Illustrator Logo' />
                        <img className='hero-side-decal' src="/img/software/Unity.svg" alt='Unity Logo' />
                    </div>
                    <div className='text-array' id='work-hero-side-skills'>
                        {entry.skills.map((skill) => (
                            <p className='tech-small tr90' key={skill} id={`hero-side-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}>{skill.toLowerCase().replace(/\s+/g, '_') + "_/"}</p>
                        ))}
                    </div>
                    <img className='hero-side-decal' src='/img/icon/CRS.svg' alt='A Cross Divider' />
                    <div className='hero-side-text' id='work-project-code'>
                        <h3 className='tr90' id='work-hero-project-id'>{"PRJ_" + entry.id.toString().padStart(3, "0") + ":::"}</h3>
                        <h3 className='tr90' id='work-hero-project-client'>{entry.client}</h3>
                    </div>
                    <h3 className='tr90' id='work-hero-side-deco-text'>{entry.year}</h3>
                    <ScrollDown />
                </div>
                <div className='hero-content' id='work-hero-content'>
                    <div className='hero-title-wrapper' id='work-hero-title-wrapper'>
                        <img className='hero-title-decal' id='work-hero-decal' src='/img/icon/PLS.svg' alt='Plus Sign' />
                        <h1 id='work-hero-title'>{entry.title.replace(/\s+/g, '_')}</h1>
                        <img className='hero-title-decal' id='work-hero-decal' src='/img/icon/PLS.svg' alt='Plus Sign' />
                    </div>
                </div>
            </div>
            <div className='work-section' id='work-section-1'>
                <h3>Synopsis</h3>
                <svg width="100%" height="2" viewBox="0 0 100% 20" id='header-line'>
                    <path d={`M0 1 H${lineWidth}`} stroke="var(--c-LGHT)" strokeWidth="1" strokeDasharray="32 128 128 32 128 32 128 128" fill="none" />
                </svg>
            </div>
        </div >
    );
}