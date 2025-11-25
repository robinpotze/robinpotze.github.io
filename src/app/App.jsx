import { Outlet } from 'react-router-dom';
import AppProvider from './store';

export default function App() {
    return (
        <AppProvider>
            <main>
                <Outlet />
            </main>
        </AppProvider>
    );
}
