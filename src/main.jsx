import React, { Suspense, lazy, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Lenis from '@studio-freight/lenis';
import TransitionProvider, { useTransition } from './components/Transition/TransitionProvider.jsx';
import ShaderTransition from './components/ShaderTransition/ShaderTransition.jsx';
import AutoTransitionEnd from './components/Transition/AutoTransitionEnd.jsx';

import AppProvider from '@app/store';

const Home = lazy(() => import('@routes/Home/Home.jsx'));
const Work = lazy(() => import('@routes/Work/Work.jsx'));
const Info = lazy(() => import('@routes/Info/Info.jsx'));
const Contact = lazy(() => import('@routes/Contact/Contact.jsx'));
const Entry = lazy(() => import('@routes/Entry/Entry.jsx'));

import './index.css';

export default function Layout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    let mounted = true;
    function raf(time) {
      if (!mounted) return;
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      mounted = false;
    };
  }, []);

  return <main>{children}</main>;
}

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
      <TransitionProvider>
        <ShaderTransitionWrapper />
        <AutoTransitionEnd />
        <RouterProvider router={router} />
      </TransitionProvider>
    </AppProvider>
  </React.StrictMode>
);

function ShaderTransitionWrapper() {
  const { active, duration } = useTransition();
  return <ShaderTransition active={active} duration={duration} />;
}
