import useLenisScroll from '@core/scroll/useLenisScroll';
import PropTypes from 'prop-types';

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

SmoothScroll.propTypes = {
    children: PropTypes.node.isRequired,
    lerp: PropTypes.number,
    duration: PropTypes.number,
    smoothWheel: PropTypes.bool,
    wheelMultiplier: PropTypes.number,
    touchMultiplier: PropTypes.number,
};
