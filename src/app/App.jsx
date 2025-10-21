import { Outlet } from 'react-router-dom';
import AppProvider from './store';
import { TransitionProvider, useTransition, ShaderTransition, BootTransition, AutoTransitionEnd } from '@core/transitions';

function ActiveTransition() {
    const { active, duration, payload } = useTransition();
    const isBoot = payload?.mode === 'boot';
    if (isBoot) {
        return <BootTransition grid={42} />;
    }
    return <ShaderTransition active={active} duration={duration} />;
}

export default function App() {
    return (
        <AppProvider>
            <TransitionProvider>
                <ActiveTransition />
                <AutoTransitionEnd />
                <main>
                    <Outlet />
                </main>
            </TransitionProvider>
        </AppProvider>
    );
}
