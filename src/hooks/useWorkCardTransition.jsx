import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransition } from '@core/transitions';
import { buildWorkCardPayload } from '@core/transitions/buildPayload';

// Hook for Work cards: builds payload including thumbnail + displacement map.
// Returns { busy, trigger } and consumer wires trigger to clicks or motion handlers.
export default function useWorkCardTransition({ to, data = {}, duration = 500, delay = 40 } = {}) {
    const navigate = useNavigate();
    const { start } = useTransition();
    const busyRef = useRef(false);

    const trigger = useCallback(async (el) => {
        if (!el || busyRef.current) return;
        busyRef.current = true;
        const payload = buildWorkCardPayload(el, data);
        setTimeout(async () => {
            try { await start({ out: duration, payload }); } catch { }
            navigate(to);
            setTimeout(() => { busyRef.current = false; }, duration + 500);
        }, delay);
    }, [to, data, duration, delay, start, navigate]);

    return { busy: busyRef.current, trigger };
}
