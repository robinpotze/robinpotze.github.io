import { Outlet } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useWorkStore } from '@/stores/workStore';
import { createWorkService } from '@/services/WorkService';
import { pages as autogenPages } from '@routes/Entry/pages/autogen';

export default function App() {
    const loadItems = useWorkStore((state) => state.loadItems);
    const workService = useMemo(() => createWorkService(autogenPages), []);

    useEffect(() => {
        loadItems(workService);
    }, [loadItems, workService]);

    return <Outlet />;
}
