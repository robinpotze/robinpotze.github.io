import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function usePageTransition({ onStart, onComplete }) {
    const router = useRouter();
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const start = () => {
            setIsTransitioning(true);
            onStart?.();
        };
        const done = () => {
            setIsTransitioning(false);
            onComplete?.();
        };

        router.events.on('routeChangeStart', start);
        router.events.on('routeChangeComplete', done);
        router.events.on('routeChangeError', done);

        return () => {
            router.events.off('routeChangeStart', start);
            router.events.off('routeChangeComplete', done);
            router.events.off('routeChangeError', done);
        };
    }, [router, onStart, onComplete]);

    return isTransitioning;
}
