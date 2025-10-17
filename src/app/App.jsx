import { Outlet } from 'react-router-dom';
import AppProvider from './store';
import { TransitionProvider, useTransition, ShaderTransition, AutoTransitionEnd } from '@core/transitions';
import { SmoothScroll } from '@effects/';

function ShaderTransitionWrapper() {
    const { active, duration } = useTransition();
    return <ShaderTransition active={active} duration={duration} />;
}

export default function App() {
    return (
        <AppProvider>
            <TransitionProvider>
                <SmoothScroll>
                    <ShaderTransitionWrapper />
                    <AutoTransitionEnd />
                    <main>
                        <Outlet />
                    </main>
                </SmoothScroll>
            </TransitionProvider>
        </AppProvider>
    );
}
