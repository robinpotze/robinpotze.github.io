import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useWorkStore } from '@/stores/workStore';
import { sortItems } from '@utils/workUtils';
import { pages as autogenPages } from '@routes/Entry/pages/autogen';

export default function App() {
    const setItems = useWorkStore((state) => state.setItems);

    useEffect(() => {
        const items = sortItems(autogenPages);
        setItems(items);
    }, [setItems]);

    return <Outlet />;
}
