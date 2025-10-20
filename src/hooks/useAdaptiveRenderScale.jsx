import { useEffect, useRef } from 'react';

// Hook: useAdaptiveRenderScale
// - Samples frame times and adjusts an internal scale value (0..1) to keep average FPS near target.
// - Returns: getScale() and setScale(value) functions and a start/stop API for the sampling loop.

export default function useAdaptiveRenderScale({
    initialScale = 1,
    enabled = true,
    minScale = 0.25,
    maxScale = 1.0,
    adaptIntervalMs = 1000,
    fpsSampleSize = 30,
    targetFps = 30,
    adaptThreshold = 0.85,
    adaptStep = 0.85,
} = {}) {
    const scaleRef = useRef(initialScale);
    const frameTimesRef = useRef([]);
    const lastAdaptRef = useRef(performance.now());
    const enabledRef = useRef(enabled);

    function getScale() {
        return scaleRef.current;
    }

    function setScale(value) {
        scaleRef.current = Math.max(minScale, Math.min(maxScale, value));
    }

    function stop() {
        enabledRef.current = false;
    }

    function start() {
        enabledRef.current = true;
    }

    // sampler: call once per frame with delta time in ms
    function sampleFrame(dt) {
        if (!enabledRef.current) return null;
        const arr = frameTimesRef.current;
        arr.push(dt);
        if (arr.length > fpsSampleSize) arr.shift();
        const now = performance.now();
        if (now - lastAdaptRef.current < adaptIntervalMs) return null;

        if (arr.length >= Math.max(4, Math.floor(fpsSampleSize / 3))) {
            const avgDt = arr.reduce((a, b) => a + b, 0) / arr.length;
            const avgFps = 1000 / avgDt;
            if (avgFps < adaptThreshold * targetFps) {
                setScale(scaleRef.current * adaptStep);
                frameTimesRef.current.length = 0;
                lastAdaptRef.current = now;
                return scaleRef.current;
            }
            if (avgFps > targetFps * 1.05) {
                setScale(scaleRef.current / adaptStep);
                frameTimesRef.current.length = 0;
                lastAdaptRef.current = now;
                return scaleRef.current;
            }
        }
        return null;
    }

    useEffect(() => {
        enabledRef.current = enabled;
    }, [enabled]);

    return {
        getScale,
        setScale,
        sampleFrame,
        start,
        stop,
    };
}
