import { ScrollReveal } from '@effects';
import { DashLine } from '@deco';

export const Data = {
    id: 1,
    title: "LD58",
    synopsis: "They said I'd never amount to anything, but thanks to the power of day drinking, I've achieved god-tier cap collection and total emotional detachment.",
    description: "Crash on the couch, crack cold ones, and turn cap-popping into peak performance. Collect, sort, and frame every shiny trophy in this chill, juicy parody about achieving God-Tier Cap Collection & Total Emotional Detachment one satisfying pop at a time.",
    client: "LUDUM DRUNKS",
    year: 2024,
    software: ["Illustrator", "Unity", "Blender"],
    skills: ["Adobe Illustrator", "Figma", "Unity", "Blender", "Unreal Engine"],
    banner: "/img/work/lsdjam/Corridor.png"
}


export default function DayDrinkingDay() {
    return (
        <div>
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
                <ScrollReveal>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos
                </ScrollReveal>
            </div>
            <div className='work-double'>
                <img src='/img/work/lsdjam/CasetteWire.png' alt='The wireframe of the CassetteRoom scene' />
                <DashLine direction="Vertical" />
                <img src='/img/work/lsdjam/CassetteRoom.png' alt='A retro-futurist room with a VR setup in the middle.' />
            </div>
        </div>
    );
}