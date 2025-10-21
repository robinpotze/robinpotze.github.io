import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransition } from '@core/transitions';
import { buildRectPayload } from '@core/transitions/buildPayload';

// Generic hook to attach transition behavior to any clickable element (e.g. links, buttons)
// Returns { busy, onClick, startManual } so consumer can wire into motion/tap or other handlers.
export default function useTransitionLink({ to, delay = 50, duration = 700, payloadExtras = {}, disableAuto = false } = {}) {
    const navigate = useNavigate();
    const { start } = useTransition();
    const busyRef = useRef(false);

    const startManual = useCallback(async (el, opts = {}) => {
        if (!el || busyRef.current) return;
        busyRef.current = true;
        const payload = { ...buildRectPayload(el, undefined, payloadExtras), ...opts.payloadExtras };
        try { await start({ out: opts.duration || duration, payload }); } catch { }
        navigate(typeof opts.to === 'string' ? opts.to : to);
        setTimeout(() => { busyRef.current = false; }, (opts.duration || duration) + 400);
    }, [to, duration, payloadExtras, start, navigate]);

    const onClick = useCallback((e) => {
        if (disableAuto) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        const el = e.currentTarget;
        setTimeout(() => startManual(el), delay);
    }, [disableAuto, delay, startManual]);

    return { busy: busyRef.current, onClick, startManual };
}
