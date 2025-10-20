import { useEffect } from 'react';
import { useTransition } from './TransitionProvider';
import { start as startHistoryAdapter, subscribe as subscribeHistory, stop as stopHistoryAdapter } from '@core/historyAdapter';

// Centralized history adapter is used to detect navigations (pushState/replaceState/popstate)
// and notify subscribers. This component simply subscribes and calls transition.end().
export default function AutoTransitionEnd() {
    const { end } = useTransition();

    useEffect(() => {
        // ensure adapter is started
        startHistoryAdapter();

        const onNav = () => end(600);
        const unsubscribe = subscribeHistory(onNav);

        // also listen to popstate as a fallback
        window.addEventListener('popstate', onNav);

        return () => {
            unsubscribe();
            window.removeEventListener('popstate', onNav);
            // don't stop the adapter globally to avoid removing patches used by other code
            // stopHistoryAdapter();
        };
    }, [end]);

    return null;
}
