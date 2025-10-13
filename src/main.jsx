import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppProvider from '@app/store';

const Home = lazy(() => import('@routes/Home/Home.jsx'));
const Work = lazy(() => import('@routes/Work/Work.jsx'));
const Info = lazy(() => import('@routes/Info/Info.jsx'));
const Contact = lazy(() => import('@routes/Contact/Contact.jsx'));
const Entry = lazy(() => import('@routes/Entry/Entry.jsx'));

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/work",
    element: (
      <Suspense fallback={<div />}>
        <Work />
      </Suspense>
    ),
  },
  {
    path: "/work/:title",
    element: (
      <Suspense fallback={<Work />}>
        <Entry />
      </Suspense>
    ),
  },
  {
    path: "/info",
    element: (
      <Suspense fallback={<div />}>
        <Info />
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<div />}>
        <Contact />
      </Suspense>
    ),
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
