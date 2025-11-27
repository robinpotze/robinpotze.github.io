import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useWorkCardTransition({ to, delay = 40 } = {}) {
    const busyRef = useRef(false);
    const navigate = useNavigate();

    const trigger = useCallback(() => {
        if (busyRef.current) return;
        busyRef.current = true;
        setTimeout(() => {
            navigate(to);
            busyRef.current = false;
        }, delay);
    }, [to, delay, navigate]);

    return { busy: busyRef.current, trigger };
}
