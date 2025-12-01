import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import HomeLayout from './HomeLayout';
import HomeCanvas from '@canvas/home/HomeCanvas';
import './Home.css';

export default function Home() {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollTop = container.scrollTop;
            const scrollHeight = container.scrollHeight - container.clientHeight;
            const progress = Math.min(scrollTop / scrollHeight, 1);

            setScrollProgress(progress);

            // Navigate to /work when scroll reaches bottom
            if (progress >= 0.95) {
                navigate('/work');
            }
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [navigate]);

    return (
        <div className='home-page' ref={containerRef}>
            <HomeLayout />

            <div className='home-transition-section'>
                <div className='transition-progress'>
                    <div className='progress-bar' style={{ width: `${scrollProgress * 100}%` }} />
                </div>
            </div>

            <HomeCanvas scrollProgress={scrollProgress} />
        </div>
    );
}

