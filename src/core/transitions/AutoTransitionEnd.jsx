import { useEffect } from 'react';
import { useTransition } from './TransitionProvider';

// This component detects navigation by listening to history changes (pushState/replaceState/popstate)
// and calls transition.end() so the ShaderTransition can animate back in. It does not depend on
// react-router hooks, so it can be rendered outside the Router context.
export default function AutoTransitionEnd() {
    const { end } = useTransition();

    useEffect(() => {
        // helper to dispatch a custom event when pushState/replaceState are called
        const wrapHistoryMethod = (method) => {
            const original = window.history[method];
            return function () {
                const result = original.apply(this, arguments);
                const evt = new Event('locationchange');
                window.dispatchEvent(evt);
                return result;
            };
        };

        // patch methods
        const origPush = window.history.pushState;
        const origReplace = window.history.replaceState;
        window.history.pushState = wrapHistoryMethod('pushState');
        window.history.replaceState = wrapHistoryMethod('replaceState');

        const onNav = () => {
            end(600);
        };

        window.addEventListener('popstate', onNav);
        window.addEventListener('locationchange', onNav);

        return () => {
            // restore originals
            window.history.pushState = origPush;
            window.history.replaceState = origReplace;
            window.removeEventListener('popstate', onNav);
            window.removeEventListener('locationchange', onNav);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
}
