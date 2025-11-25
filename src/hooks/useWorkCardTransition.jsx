import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Hook for Work cards: simplified navigation without transitions
// Returns { busy, trigger } and consumer wires trigger to clicks or motion handlers.
export default function useWorkCardTransition({ to, data = {}, duration = 500, delay = 40 } = {}) {
    const navigate = useNavigate();
    const busyRef = useRef(false);

    const trigger = useCallback(async (el) => {
        if (busyRef.current) return;
        busyRef.current = true;
        setTimeout(() => {
            navigate(to);
            setTimeout(() => { busyRef.current = false; }, 500);
        }, delay);
    }, [to, delay, navigate]);

    return { busy: busyRef.current, trigger };
}
