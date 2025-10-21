import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransition } from '@core/transitions';
import { buildRectPayload } from '@core/transitions/buildPayload';

/**
 * Hook for link/button navigation accompanied by an outgoing shader transition.
 * Returns { busy, onClick, startManual }.
 */
export default function useTransitionLink({
    to,
    delay = 50,
    duration = 700,
    payloadExtras = {},
    disableAuto = false,
} = {}) {
    const navigate = useNavigate();
    const { start } = useTransition();
    const busyRef = useRef(false);

    const startManual = useCallback(
        async (element, opts = {}) => {
            if (!element || busyRef.current) return;
            busyRef.current = true;
            const outDuration = opts.duration || duration;
            const payload = {
                ...buildRectPayload(element, undefined, payloadExtras),
                ...(opts.payloadExtras || {}),
            };
            try {
                await start({ out: outDuration, payload });
            } catch {
                // swallow transition errors to avoid blocking navigation
            }
            navigate(typeof opts.to === 'string' ? opts.to : to);
            setTimeout(() => {
                busyRef.current = false;
            }, outDuration + 400);
        },
        [to, duration, payloadExtras, start, navigate]
    );

    const onClick = useCallback(
        (e) => {
            if (disableAuto) return;
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return; // allow new-tab etc.
            e.preventDefault();
            const element = e.currentTarget;
            setTimeout(() => startManual(element), delay);
        },
        [disableAuto, delay, startManual]
    );

    return { busy: busyRef.current, onClick, startManual };
}
