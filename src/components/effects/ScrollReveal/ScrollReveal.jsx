import { useEffect, useRef, useMemo, isValidElement, Children, cloneElement } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import './ScrollReveal.css';

const ScrollReveal = ({
    children,
    scrollContainerRef,
    enableBlur = true,
    baseOpacity = 0.1,
    blurStrength = 4,
    containerClassName = '',
    textClassName = '',
    stagger = 0.05,
    childDuration = 0.2,
    once = false,
    chromatic = true,
    chromaOffset = 2,
    chromaColors = ['var(--c-BRND)', 'var(--c-LGHT)']
}) => {
    const containerRef = useRef(null);
    const controls = useAnimation();

    // useInView accepts IntersectionObserver options as second arg
    const inView = useInView(containerRef, {
        root: scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : undefined,
        rootMargin: '0px 0px -20% 0px',
        threshold: 0.1
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
            if (once) return;
        } else {
            if (!once) controls.start('hidden');
        }
    }, [inView, controls, once]);

    // variants for the container rotation and stagger
    // container no longer rotates; it only controls stagger for children
    const containerVariants = {
        hidden: {},
        visible: {
            transition: { when: 'beforeChildren', staggerChildren: stagger }
        }
    };

    const chromaFilter = (offset = chromaOffset, colors = chromaColors) => {
        if (!chromatic) return `blur(${blurStrength}px)`;
        return `blur(${blurStrength}px) drop-shadow(${offset}px 0 0 ${colors[0]}) drop-shadow(${-offset}px 0 0 ${colors[1]})`;
    };

    const childVariants = {
        hidden: {
            opacity: baseOpacity,
            y: 8,
            filter: enableBlur ? chromaFilter(chromaOffset, chromaColors) : 'none'
        },
        visible: {
            opacity: 1,
            y: 0,
            // explicitly remove blur and chromatic drop-shadows so chroma only appears in the hidden (blurred) state
            filter: `blur(0px) drop-shadow(0px 0 0 rgba(0,0,0,0)) drop-shadow(0px 0 0 rgba(0,0,0,0))`,
            transition: { duration: childDuration }
        }
    };

    // If children is a string, split into words and animate each word
    const splitText = useMemo(() => {
        if (typeof children !== 'string') return null;
        return children.split(/(\s+)/).map((word, index) => {
            if (word.match(/^\s+$/)) return word;
            return (
                <motion.span className="word" key={index} variants={childVariants}>
                    {word}
                </motion.span>
            );
        });
    }, [children, childVariants]);

    // Recursively wrap nested children so any depth of elements/text will animate
    const wrapNode = (node, keyPath = '0') => {
        // primitives
        if (node == null || typeof node === 'boolean') return null;

        if (typeof node === 'string' || typeof node === 'number') {
            const text = String(node);
            return text.split(/(\s+)/).map((word, wi) => {
                if (word.match(/^\s+$/)) return word;
                return (
                    <motion.span className="word" key={`${keyPath}-w-${wi}`} variants={childVariants}>
                        {word}
                    </motion.span>
                );
            });
        }

        // arrays
        if (Array.isArray(node)) {
            return node.map((n, i) => wrapNode(n, `${keyPath}-${i}`));
        }

        // React element
        if (isValidElement(node)) {
            const childKey = `${keyPath}-${String(node.key ?? 'c')}`;
            // Process this element's children recursively
            const inner = Children.map(node.props.children, (c, i) => wrapNode(c, `${childKey}-${i}`));

            // If it's a DOM element (string), use motion.<tag> directly to avoid extra wrapper nodes
            if (typeof node.type === 'string') {
                const Tag = node.type;
                const MotionTag = motion[Tag] || motion.div;
                const { children: _origChildren, ...restProps } = node.props || {};
                return (
                    <MotionTag {...restProps} key={childKey} variants={childVariants} className={`${restProps.className || ''}`}>
                        {inner}
                    </MotionTag>
                );
            }

            // For custom components, wrap them in a motion.div to ensure animatable container
            const cloned = cloneElement(node, { ...node.props, children: inner });
            return (
                <motion.div className={`reveal-child ${node.props?.className || ''}`} key={childKey} variants={childVariants}>
                    {cloned}
                </motion.div>
            );
        }

        // fallback — render as-is
        return node;
    };

    const wrappedChildren = useMemo(() => {
        if (typeof children === 'string') return null;
        return wrapNode(children, 'root');
    }, [children, childVariants]);

    return (
        <motion.h2
            ref={containerRef}
            className={`scroll-reveal ${containerClassName}`}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            <p className={`scroll-reveal-text ${textClassName}`}>
                {splitText}
                {wrappedChildren}
            </p>
        </motion.h2>
    );
};

export default ScrollReveal;
