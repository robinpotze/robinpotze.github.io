import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { NavigationMenu } from '@components/layout/NavigationMenu/NavigationMenu';
import { useWorkStore } from '@/stores/workStore';
import WorkCanvas from '@canvas/work/WorkCanvas';
import './Work.css';

export default function Work() {
    const navigate = useNavigate();
    const items = useWorkStore((state) => state.items);

    const handleCardNavigate = useCallback((pageKey) => {
        navigate(`/work/${pageKey}`);
    }, [navigate]);

    return (
        <>
            <NavigationMenu />
            <WorkCanvas items={items} onCardNavigate={handleCardNavigate} />
        </>
    );
}