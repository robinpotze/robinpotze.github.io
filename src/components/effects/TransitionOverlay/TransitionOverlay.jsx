import { useEffect, useRef, useState } from 'react';
import './TransitionOverlay.css';

export default function TransitionOverlay({ 
    scrollProgress = 0,
    onTransitionComplete,
    entryAnimation = false
}) {
    const overlayRef = useRef(null);
    const layerRefs = useRef([]);
    const [isEntryComplete, setIsEntryComplete] = useState(!entryAnimation);
    const prevScrollRef = useRef(0);
    const hasTriggeredComplete = useRef(false);

    // Entry animation on mount (Work page only)
    useEffect(() => {
        if (!entryAnimation) return;

        const duration = 400;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Animate from 1 (full) to 0 (closed)
            const scale = 1 - progress;
            
            if (overlayRef.current) overlayRef.current.style.opacity = '1';
            
            layerRefs.current.forEach(layer => {
                if (layer) layer.style.transform = `scaleX(${scale})`;
            });

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setIsEntryComplete(true);
                if (overlayRef.current) overlayRef.current.style.opacity = '0';
            }
        };

        requestAnimationFrame(animate);
    }, [entryAnimation]);

    // Scroll-based animation (Home page)
    useEffect(() => {
        if (!isEntryComplete || entryAnimation) return;
        if (!overlayRef.current) return;

        const threshold = 0.85;
        
        // Hide below threshold
        if (scrollProgress < threshold) {
            overlayRef.current.style.opacity = '0';
            layerRefs.current.forEach(layer => {
                if (layer) layer.style.transform = 'scaleX(0)';
            });
            hasTriggeredComplete.current = false;
            return;
        }

        // Show and animate above threshold
        overlayRef.current.style.opacity = '1';
        
        // Map 0.85-1.0 to 0-1 scale
        const normalizedProgress = (scrollProgress - threshold) / (1 - threshold);
        const clampedProgress = Math.max(0, Math.min(1, normalizedProgress));
        
        // Apply to all layers (no stagger)
        layerRefs.current.forEach((layer) => {
            if (!layer) return;
            layer.style.transform = `scaleX(${clampedProgress})`;
        });

        // Trigger completion once
        if (clampedProgress >= 0.95 && !hasTriggeredComplete.current) {
            hasTriggeredComplete.current = true;
            if (onTransitionComplete) {
                onTransitionComplete();
            }
        }
    }, [scrollProgress, isEntryComplete, entryAnimation, onTransitionComplete]);

    return (
        <div ref={overlayRef} className="transition-overlay" style={{ opacity: 0 }}>
            {[
                { color: 'var(--c-LGHT)', zIndex: 1 },
                { color: '#000000', zIndex: 2 },
                { color: 'var(--c-BRND)', zIndex: 3 }
            ].map((layer, index) => (
                <div key={index} className="transition-layer-container">
                    <div
                        ref={el => layerRefs.current[index * 2] = el}
                        className="transition-panel transition-panel-left"
                        style={{ background: layer.color, zIndex: layer.zIndex }}
                    />
                    <div
                        ref={el => layerRefs.current[index * 2 + 1] = el}
                        className="transition-panel transition-panel-right"
                        style={{ background: layer.color, zIndex: layer.zIndex }}
                    />
                </div>
            ))}
        </div>
    );
}
