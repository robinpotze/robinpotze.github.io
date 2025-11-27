import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import AppProvider from './store';
import WorkItemsBootstrap from './WorkItemsBootstrap';
import { CanvasProvider } from '@core/contexts/CanvasContext';
import PersistentCanvas from '@canvas/scenes/PersistentCanvas';
import { TransitionLoader } from '@components/effects';

export default function App() {
    useEffect(() => {
        document.body.setAttribute('data-phase', 'ready');
    }, []);

    return (
        <AppProvider>
            <WorkItemsBootstrap />
            <CanvasProvider>
                <PersistentCanvas />
                <TransitionLoader />
                <main>
                    <Outlet />
                </main>
            </CanvasProvider>
        </AppProvider>
    );
}
