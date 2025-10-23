import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './NavigationMenu.css';

export const NavigationMenu = ({
    position = 'right',
    colors = ['var(--c-LGHT)', 'var(--c-BRND)'],
    items = [
        { label: 'Work', ariaLabel: 'See my work', link: '/work' },
        { label: 'About', ariaLabel: 'Learn about me', link: '/about' },
        { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
    ],
    socialItems = [
        { label: 'Artstation', link: 'https://twitter.com' },
        { label: 'GitHub', link: 'https://github.com' },
        { label: 'LinkedIn', link: 'https://linkedin.com' }
    ],
    className,
    menuButtonColor = 'var(--c-LGHT)',
    openMenuButtonColor = 'var(--c-BRND)',
    accentColor = 'var(--c-BRND)',
    changeMenuColorOnOpen = true,
    isFixed = true,
    onMenuOpen,
    onMenuClose
}) => {
    const [open, setOpen] = useState(false);
    const openRef = useRef(false);
    const panelRef = useRef(null);
    const preLayersRef = useRef(null);
    const plusHRef = useRef(null);
    const plusVRef = useRef(null);
    const iconRef = useRef(null);
    const textInnerRef = useRef(null);
    const textWrapRef = useRef(null);
    const [textLines, setTextLines] = useState(['Menu', 'Close']);

    const toggleBtnRef = useRef(null);
    const busyRef = useRef(false);

    // Motion handles initial placement via `initial` props; keep effect to set initial button color
    useLayoutEffect(() => {
        if (toggleBtnRef.current) toggleBtnRef.current.style.color = menuButtonColor;
    }, [menuButtonColor]);

    // prelayer colors/array used for rendering and timing
    const rawLayers = colors && colors.length ? colors.slice(0, 4) : ['#1e1e22', '#35353c'];
    const arr = (() => {
        const a = [...rawLayers];
        if (a.length >= 3) {
            const mid = Math.floor(a.length / 2);
            a.splice(mid, 1);
        }
        return a;
    })();

    // Motion variants for sequencing
    const offscreen = position === 'left' ? '-100%' : '100%';
    const prelayerVariant = i => ({
        closed: { x: offscreen },
        open: { x: '0%', transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 } }
    });

    const totalPrelayers = arr.length + 2; // extra start + arr + extra end
    const panelDelay = totalPrelayers ? (totalPrelayers - 1) * 0.07 + 0.08 : 0;

    const panelVariant = {
        closed: { x: offscreen, transition: { duration: 0.32, ease: [0.55, 0.06, 0.68, 0.19] } },
        open: { x: '0%', transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: panelDelay } }
    };

    const listVariant = {
        closed: {},
        open: i => ({ transition: { staggerChildren: 0.1, delayChildren: i } })
    };

    const itemVariant = {
        closed: { y: '140%', rotate: 5 },
        open: { y: '0%', rotate: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
    };

    const socialLinkVariant = {
        closed: { y: 25, opacity: 0 },
        open: { y: 0, opacity: 1, transition: { duration: 0.55 } }
    };

    // Lock duration for toggles
    const ANIM_DURATION_MS = 400;

    const animateIcon = useCallback(opening => {
        // handled by Motion animate prop on the icon element
    }, []);

    const animateColor = useCallback(
        opening => {
            const btn = toggleBtnRef.current;
            if (!btn) return;
            if (changeMenuColorOnOpen) {
                const targetColor = opening ? openMenuButtonColor : menuButtonColor;
                setTimeout(() => (btn.style.color = targetColor), 180);
            } else {
                btn.style.color = menuButtonColor;
            }
        },
        [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen]
    );

    const [textShift, setTextShift] = useState(0);
    const animateText = useCallback(opening => {
        const currentLabel = opening ? 'Menu' : 'Close';
        const targetLabel = opening ? 'Close' : 'Menu';
        const cycles = 3;
        const seq = [currentLabel];
        let last = currentLabel;
        for (let i = 0; i < cycles; i++) {
            last = last === 'Menu' ? 'Close' : 'Menu';
            seq.push(last);
        }
        if (last !== targetLabel) seq.push(targetLabel);
        seq.push(targetLabel);
        setTextLines(seq);
        const lineCount = seq.length;
        const finalShift = ((lineCount - 1) / lineCount) * 100;
        setTextShift(finalShift);
    }, []);

    const toggleMenu = useCallback(() => {
        if (busyRef.current) return;
        busyRef.current = true;
        const target = !openRef.current;
        openRef.current = target;
        setOpen(target);
        if (target) onMenuOpen?.(); else onMenuClose?.();
        animateIcon(target);
        animateColor(target);
        animateText(target);
        setTimeout(() => (busyRef.current = false), ANIM_DURATION_MS);
    }, [animateIcon, animateColor, animateText, onMenuOpen, onMenuClose]);

    const wrapperStyle = accentColor ? { ['--sm-accent']: accentColor } : undefined;

    return (
        <div
            className={(className ? className + ' ' : '') + 'staggered-menu-wrapper' + (isFixed ? ' fixed-wrapper' : '')}
            style={wrapperStyle}
            data-position={position}
            data-open={open || undefined}
        >
            <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
                {(() => {
                    const extraStart = rawLayers[0] || '#1e1e22';
                    const extraEnd = rawLayers[rawLayers.length - 1] || '#35353c';
                    return [
                        <motion.div
                            key={`pre-extra-start`}
                            className="sm-prelayer"
                            style={{ background: extraStart }}
                            initial="closed"
                            animate={open ? 'open' : 'closed'}
                            variants={prelayerVariant(0)}
                        />,
                        ...arr.map((c, i) => (
                            <motion.div
                                key={`pre-${i}`}
                                className="sm-prelayer"
                                style={{ background: c }}
                                initial="closed"
                                animate={open ? 'open' : 'closed'}
                                variants={prelayerVariant(i + 1)}
                            />
                        )),
                        <motion.div
                            key={`pre-extra-end`}
                            className="sm-prelayer"
                            style={{ background: extraEnd }}
                            initial="closed"
                            animate={open ? 'open' : 'closed'}
                            variants={prelayerVariant(arr.length + 1)}
                        />
                    ];
                })()}
            </div>
            <header className="staggered-menu-header" aria-label="Main navigation header">
                <button
                    ref={toggleBtnRef}
                    className="sm-toggle"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    aria-controls="staggered-menu-panel"
                    onClick={toggleMenu}
                    type="button"
                >
                    <span ref={textWrapRef} className="sm-toggle-textWrap" aria-hidden="true">
                        <motion.span
                            ref={textInnerRef}
                            className="sm-toggle-textInner"
                            animate={{ y: `-${textShift}%` }}
                            transition={{ duration: 0.5 + (textLines.length * 0.07), ease: [0.22, 1, 0.36, 1] }}
                        >
                            {textLines.map((l, i) => (
                                <span className="sm-toggle-line" key={i}>
                                    {l}
                                </span>
                            ))}
                        </motion.span>
                    </span>
                    <motion.span
                        ref={iconRef}
                        className="sm-icon"
                        aria-hidden="true"
                        animate={{ rotate: open ? 225 : 0 }}
                        transition={{ duration: open ? 0.8 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span ref={plusHRef} className="sm-icon-line" />
                        <span ref={plusVRef} className="sm-icon-line sm-icon-line-v" />
                    </motion.span>
                </button>
            </header>
            <AnimatePresence>
                <motion.aside
                    id="staggered-menu-panel"
                    ref={panelRef}
                    className="staggered-menu-panel"
                    aria-hidden={!open}
                    initial="closed"
                    animate={open ? 'open' : 'closed'}
                    exit="closed"
                    variants={panelVariant}
                >
                    <div className="sm-panel-inner">
                        <motion.ul
                            className="sm-panel-list"
                            role="list"
                            data-numbering={true}
                            variants={listVariant}
                            custom={0.15}
                            initial="closed"
                            animate={open ? 'open' : 'closed'}
                        >
                            {items && items.length ? (
                                items.map((it, idx) => (
                                    <motion.li className="sm-panel-itemWrap" key={it.label + idx} variants={itemVariant}>
                                        <Link className="sm-panel-item" to={it.link} aria-label={it.ariaLabel} data-index={idx + 1}>
                                            <span className="sm-panel-itemLabel">{it.label}</span>
                                        </Link>
                                    </motion.li>
                                ))
                            ) : (
                                <li className="sm-panel-itemWrap" aria-hidden="true">
                                    <span className="sm-panel-item">
                                        <span className="sm-panel-itemLabel">No items</span>
                                    </span>
                                </li>
                            )}
                        </motion.ul>
                        <div className="sm-socials" aria-label="Social links">
                            <motion.h3 className="sm-socials-title" initial={{ opacity: 0 }} animate={{ opacity: open ? 1 : 0 }}>
                                Socials
                            </motion.h3>
                            <motion.ul className="sm-socials-list" role="list">
                                {socialItems.map((s, i) => (
                                    <motion.li key={s.label + i} className="sm-socials-item" variants={socialLinkVariant} initial="closed" animate={open ? 'open' : 'closed'}>
                                        <a href={s.link} target="_blank" rel="noopener noreferrer" className="sm-socials-link">
                                            {s.label}
                                        </a>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                    </div>
                </motion.aside>
            </AnimatePresence>
        </div>
    );
};

export default NavigationMenu;
