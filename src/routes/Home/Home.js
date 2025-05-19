import React, { useState, useEffect } from 'react';

import RAD_GRID_TXT from '../../components/DECO/RAD_GRID/TXT/RAD_GRID_TXT';
import BlackwallEffect from '../../components/Blackwall/Blackwall';

import './Home.css';

export default function Home() {

    const [date, setDate] = useState('');

    useEffect(() => {
        const updateDate = () => {
            const now = new Date();
            const amsTime = new Intl.DateTimeFormat('en-GB', {
                dateStyle: 'short',
                timeStyle: 'medium',
                timeZone: 'Europe/Amsterdam',
            }).format(now);
            const milliseconds = now.getMilliseconds().toString().padEnd(3, '0');
            setDate(`${amsTime}.${milliseconds}`);
        };
        updateDate();
        const interval = setInterval(updateDate, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='hero-section' id='landing-hero'>
            <BlackwallEffect onScrollTrigger={() => {"hero-section"}} />
            <a href='/' className='logo-home-link'><img src="logo64.png" alt='robin potze logo' className='logo-header' id='logo-landing' /></a>
            <p className='tech-small' id='landing-name'>ROBIN POTZE</p>
            <div className='hero-content' id='landing-content'>
                <div className='hero-content-top' id='landing-content-top'>
                    <h1 className='hero-title' id='landing-title'>DESIGNED</h1>
                    <p className='tech-small' id='landing-time'>{date}</p>
                </div>
                <div className='hero-content-bottom' id='landing-content-bottom'>
                    <h1 className='hero-title' id='landing-title'>TO COMPILE</h1>
                </div>
                <div className='hero-subtitle' id='landing-subtitle'>
                    <p className='tech-small' id='landing-subtitle-text'>PRJNo::000 | C://PRJ/PF/CUSTOM | V1</p>
                    <p className='tech-small' id='landing-subtitle-text'>GRONINGEN | NL</p>
                </div>
                <div className='hero-accents-bottom' id='landing-accents-bottom'>
                    <RAD_GRID_TXT />
                </div>
            </div>
            <div className='hero-side' id='landing-side'></div>
        </div>
    );
};