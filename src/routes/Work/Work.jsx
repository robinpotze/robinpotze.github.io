import { useEffect, useState } from 'react';

import TopNav from '@navigation/TopNav/TopNav';
import Hero from '@components/hero/hero';

import './Work.css';
import DashLine from '../../components/decoration/dashLine/DashLine';

export default function Work() {

    const entry = {
        id: 1,
        title: "LSD JAM",
        description: "Where games meet drugs",
        client: "TRIPADVISORS",
        year: 2024,
        software: ["Illustrator", "Unity", "Blender"],
        skills: ["Adobe Illustrator", "Figma", "Unity", "Blender"],
        banner: "/img/work/lsdjam/Corridor.png"
    };

    return (
        <div className='work-page' id={entry.title.replace(/\s+/g, '-') + '-page'}>
            <TopNav />
            <Hero content={entry} />
            <div className='work-section' id='work-section'>
                <div className='work-header' id='work-header-synopsis'>
                    <div className='work-header-content' id='work-desc-header-synopsis'>
                        <h3>Synopsis</h3>
                        <DashLine colour={"var(--c-LGHT)"} />
                        <div className='header-line-subtitle' id='work-desc-header-subtitle'>
                            <img src='/img/icon/CRS.svg' />
                            <p className='tech-small'>{entry.description}</p>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                </div>
                <div className='work-full-width'>
                    <img src='/img/work/lsdjam/CassetteRoom.png' className='img-full-width' alt='A retro-futurist room with a VR setup in the middle.' />
                </div>
                <div className='work-double'>
                    <img src='/img/work/lsdjam/CasetteWire.png' alt='The wireframe of the CassetteRoom scene' />
                    <p>hi</p>
                    <img src='/img/work/lsdjam/CassetteRoom.png' alt='A retro-futurist room with a VR setup in the middle.' />
                </div>
            </div>
        </div >
    );
}