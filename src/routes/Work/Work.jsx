import { useEffect, useState } from 'react';

import TopNav from '@navigation/TopNav/TopNav';
import Hero from '@components/hero/hero';

import DashLine from '../../components/decoration/dashLine/DashLine';
import GradualBlur from '@effects/GradualBlur/GradualBlur';

import './Work.css';

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
            <section className='work-section'>
                <div className='work-header'>
                    <div className='work-synopsis'>
                        <h2>Synopsis</h2>
                        <DashLine direction="Horizontal" />
                        <div className='work-synopsis-subtitle'>
                            <img src='/img/icon/CRS.svg' />
                            <p className='tech-small'>{entry.description}</p>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                </div>
                <div className='work-full'>
                    <img src='/img/work/lsdjam/hibernation.png' className='img-full-width' alt='A retro-futurist room with a VR setup in the middle.' />
                </div>
                <div className='work-full-thin'>
                    <img src='/img/work/lsdjam/SpaceShip.png' />
                </div>
                <div className='work-header'>
                    <div className='work-header-chapter'>
                        <h3>THE COMMAND ROOM</h3>
                        <img src='/img/icon/PLS.svg' />
                        <p className='tech-small'>LVL::001 - HIBERNATION</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                </div>
                <div className='work-double'>
                    <img src='/img/work/lsdjam/CasetteWire.png' alt='The wireframe of the CassetteRoom scene' />
                    <DashLine direction="Vertical" />
                    <img src='/img/work/lsdjam/CassetteRoom.png' alt='A retro-futurist room with a VR setup in the middle.' />
                </div>
            </section>

            <GradualBlur
                target="page"
                position="bottom"
                height="6rem"
                strength={2}
                divCount={5}
                curve="bezier"
                exponential={true}
                opacity={1}
            />
        </div >
    );
}