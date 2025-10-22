import useLenisScroll from '@core/scroll/useLenisScroll';

export default function SmoothScroll({
    children,
    lerp = 0.1,
    duration = 1.2,
    smoothWheel = true,
    wheelMultiplier = 1,
    touchMultiplier = 2,
}) {
    useLenisScroll({
        lerp,
        duration,
        smoothWheel,
        wheelMultiplier,
        touchMultiplier,
    });

    return <>{children}</>;
}
