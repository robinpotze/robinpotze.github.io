import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import HomeLayout from './HomeLayout';
import HomeCanvas from '@canvas/home/HomeCanvas';
import { LaserFlow } from '@canvas/laser/Laser';
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

            if (progress >= 0.95) {
                navigate('/work');
            }
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [navigate]);

    const horizontalSizing = 0.3 + (scrollProgress * 1.2); // 0.3 → 1.5
    const verticalSizing = 1.5 - (scrollProgress * 1.0);   // 1.5 → 0.5

    return (
        <div className='home-page' ref={containerRef}>
            <LaserFlow
                horizontalSizing={horizontalSizing}
                verticalSizing={verticalSizing}
                horizontalBeamOffset={0.0}
                verticalBeamOffset={-0.5}
                color="#00CCFF"
                fogIntensity={0.8}
                wispIntensity={4.0}
                flowSpeed={0.5}
            />
            <HomeLayout />
            <HomeCanvas scrollProgress={scrollProgress} />
        </div>
    );
}

