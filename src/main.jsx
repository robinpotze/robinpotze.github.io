import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './routes/Home/Home';
import Contact from './routes/Contact/Contact';
import Work from './routes/Work/Work';
import Info from './routes/Info/Info';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/WORK/:PRJNo",
    element: <Work />,
  },
  {
    path: "/INFO",
    element: <Info />,
  },
  {
    path: "/CNTCT",
    element: <Contact />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
