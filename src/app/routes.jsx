import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('@routes/Home/Home.jsx'));
const Work = lazy(() => import('@routes/Work/Work.jsx'));
const Info = lazy(() => import('@routes/Info/Info.jsx'));
const Contact = lazy(() => import('@routes/Contact/Contact.jsx'));
const Entry = lazy(() => import('@routes/Entry/Entry.jsx'));

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: '/', element: <Suspense fallback={<div />}><Home /></Suspense> },
            { path: '/work', element: <Suspense fallback={<div />}><Work /></Suspense> },
            { path: '/work/:title', element: <Suspense fallback={<Work />}><Entry /></Suspense> },
            { path: '/info', element: <Suspense fallback={<div />}><Info /></Suspense> },
            { path: '/contact', element: <Suspense fallback={<div />}><Contact /></Suspense> },
        ],
    },
]);
