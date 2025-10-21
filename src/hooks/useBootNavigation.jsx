import { useCallback, useRef } from 'react';
import { useTransition } from '@core/transitions';
import { useNavigate } from 'react-router-dom';

export default function useBootNavigation({
    to,
    out = 1600,
    inn = 1000,
    payload = {},
    awaitOut = false,
    autoEnd = true,
    navigateFn
} = {}) {
    const { startBoot, end } = useTransition();
    const navigate = useNavigate();
    const busyRef = useRef(false);

    const startBootNav = useCallback(async (override = {}) => {
        if (busyRef.current) return;
        busyRef.current = true;
        const target = override.to || to;
        const useOut = override.out ?? out;
        const useInn = override.inn ?? inn;
        const usePayload = { ...payload, ...(override.payload || {}) };

        const { coveragePromise, outPromise } = startBoot({ out: useOut, payload: usePayload });

        await coveragePromise;

        const navFn = navigateFn || navigate;
        if (typeof navFn === 'function' && target) navFn(target);

        if (autoEnd) end(useInn);

        if (awaitOut) await outPromise;

        setTimeout(() => { busyRef.current = false; }, useInn + 50);
    }, [to, out, inn, payload, awaitOut, autoEnd, navigateFn, startBoot, end, navigate]);

    return { startBootNav, busy: busyRef.current };
}
