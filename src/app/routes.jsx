import { createHashRouter } from 'react-router-dom';
import App from './App';
import Home from '@routes/Home/Home.jsx';
import Work from '@routes/Work/Work.jsx';
import Info from '@routes/Info/Info.jsx';
import Contact from '@routes/Contact/Contact.jsx';
import Entry from '@routes/Entry/Entry.jsx';

export const router = createHashRouter([
    {
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/work', element: <Work /> },
            { path: '/work/:title', element: <Entry /> },
            { path: '/info', element: <Info /> },
            { path: '/contact', element: <Contact /> },
        ],
    },
]);
