import { WorkCylinder } from '@components';
import { NavigationMenu } from '@features';
import { useMemo } from 'react';
import { sortItems } from '../../utils/workUtils';
import { pages as autogenPages } from '../Entry/pages/autogen';
import './Work.css';

export default function Work() {
    const items = useMemo(() => sortItems(autogenPages), []);

    return (
        <div className='work-overview' id='work-overview'>
            <NavigationMenu />
            <WorkCylinder items={items} />
        </div>
    );
}