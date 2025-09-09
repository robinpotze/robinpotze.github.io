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
                            <p className='tech-info tr90' key={skill} id={`hero-side-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}>{skill.toLowerCase().replace(/\s+/g, '_') + "_/"}</p>
                        ))}
                    </div>
                    <img className='hero-side-decal' src='/img/icon/CRS.svg' alt='A Cross Divider' />
                    <div className='hero-side-text' id='work-project-code'>
                        <p className='tech-small tr90' id='work-hero-project-id'>{"PRJ_" + entry.id.toString().padStart(3, "0") + ":::"}</p>
                        <p className='tech-small tr90' id='work-hero-project-client'>{entry.client}</p>
                    </div>
                    <p className='tech-small tr90' id='work-hero-side-deco-text'>{entry.year}</p>
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
            <div className='work-section' id='work-section-one'>
                <div className='text-top-margin' id='work-desc-header'>
                    <div className='header-line' id='work-desc-header-synopsis'>
                        <h2>Synopsis</h2>
                        <svg width="100%" height="2" viewBox="0 0 100% 20" id='header-line'>
                            <path d={`M0 1 H${lineWidth}`} stroke="var(--c-LGHT)" strokeWidth="1" strokeDasharray="32 128 128 32 128 32 128 128" fill="none" />
                        </svg>
                        <div className='header-line-subtitle' id='work-desc-header-subtitle'>
                            <img src='/img/icon/CRS.svg' />
                            <p className='tech-small'>Where games meet drugs</p>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                </div>
            </div>
        </div >
    );
}