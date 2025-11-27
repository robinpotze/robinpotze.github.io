import { useEffect, useMemo } from 'react';
import { useApp } from '@app/store';
import { sortItems } from '@utils/workUtils';
import { pages as autogenPages } from '@routes/Entry/pages/autogen';

export default function WorkItemsBootstrap() {
    const { setWorkItems } = useApp();
    const items = useMemo(() => sortItems(autogenPages), []);

    useEffect(() => {
        setWorkItems(items);
    }, [items, setWorkItems]);

    return null;
}
