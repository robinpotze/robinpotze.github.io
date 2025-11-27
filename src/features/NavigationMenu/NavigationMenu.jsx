import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTransition } from '@core/transitions/TransitionManager';
import './NavigationMenu.css';

const MENU_ITEMS = [
    { label: 'Work', link: '/work' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' }
];
const SOCIALS = [
    { label: 'Artstation', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
];

const BG_COLORS = ['var(--c-LGHT)', 'var(--c-BRND)'];
const BTN_COLOR = 'var(--c-LGHT)';
const BTN_COLOR_OPEN = 'var(--c-BRND)';

export const NavigationMenu = () => {
    const [open, setOpen] = useState(false);
    const [label, setLabel] = useState('Menu');
    const buttonRef = useRef(null);
    const busy = useRef(false);
    const { transitionToHome, transitionToWork, isTransitioning } = useTransition();

    const glitchR = useAnimation();
    const glitchB = useAnimation();
    const mainText = useAnimation();

    useLayoutEffect(() => {
        if (buttonRef.current) buttonRef.current.style.color = BTN_COLOR;
    }, []);

    const runGlitch = useCallback(async (newLabel) => {
        await Promise.all([
            mainText.start({
                opacity: [1, 0.3, 0.8, 0.2, 0],
                x: [0, -2, 1, -3, 0],
                transition: { duration: 0.2 }
            }),
            glitchR.start({
                opacity: [0, 0.8, 0.4, 0.9, 0.6],
                x: [0, 3, -2, 4, 2],
                y: [0, -1, 1, -2, 0],
                transition: { duration: 0.2 }
            }),
            glitchB.start({
                opacity: [0, 0.7, 0.5, 0.8, 0.5],
                x: [0, -3, 2, -4, -2],
                y: [0, 1, -1, 2, 1],
                transition: { duration: 0.2 }
            })
        ]);

        setLabel(newLabel);

        await Promise.all([
            mainText.start({
                opacity: [0, 0.2, 0.7, 0.4, 1],
                x: [0, 2, -1, 3, 0],
                transition: { duration: 0.2 }
            }),
            glitchR.start({
                opacity: [0.6, 0.9, 0.3, 0.7, 0],
                x: [2, -3, 4, -2, 0],
                y: [0, 1, -2, 1, 0],
                transition: { duration: 0.2 }
            }),
            glitchB.start({
                opacity: [0.5, 0.8, 0.4, 0.6, 0],
                x: [-2, 3, -4, 2, 0],
                y: [1, -1, 2, -1, 0],
                transition: { duration: 0.2 }
            })
        ]);
    }, [glitchR, glitchB, mainText]);

    const toggle = useCallback(() => {
        if (busy.current) return;
        busy.current = true;

        const willOpen = !open;
        setOpen(willOpen);
        runGlitch(willOpen ? 'Close' : 'Menu');

        setTimeout(() => {
            if (buttonRef.current) {
                buttonRef.current.style.color = willOpen ? BTN_COLOR_OPEN : BTN_COLOR;
            }
        }, 180);

        setTimeout(() => { busy.current = false; }, 500);
    }, [open, runGlitch]);

    const ease = [0.22, 1, 0.36, 1];

    return (
        <div
            className="staggered-menu-wrapper fixed-wrapper"
            data-open={open || undefined}
        >
            <div className="sm-prelayers" aria-hidden="true">
                {BG_COLORS.map((color, i) => (
                    <motion.div
                        key={i}
                        className="sm-prelayer"
                        style={{ background: color }}
                        initial={{ x: '100%' }}
                        animate={{ x: open ? '0%' : '100%' }}
                        transition={{ duration: 0.2, ease, delay: i * 0.07 }}
                    />
                ))}
            </div>

            <header className="staggered-menu-header">
                <button
                    ref={buttonRef}
                    className="sm-toggle"
                    onClick={toggle}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                >
                    <span className="sm-toggle-textWrap">
                        <span className="sm-glitch-stack">
                            <motion.span
                                className="sm-glitch-layer main"
                                animate={mainText}
                            >
                                {label}
                            </motion.span>
                            <motion.span
                                className="sm-glitch-layer red"
                                animate={glitchR}
                                aria-hidden="true"
                            >
                                {label}
                            </motion.span>
                            <motion.span
                                className="sm-glitch-layer blue"
                                animate={glitchB}
                                aria-hidden="true"
                            >
                                {label}
                            </motion.span>
                        </span>
                    </span>

                    <motion.span
                        className="sm-icon"
                        aria-hidden="true"
                        animate={{ rotate: open ? 90 : 0 }}
                        transition={{ duration: open ? 0.6 : 0.35, ease }}
                    >
                        <motion.img
                            src="/img/icon/PLS.svg"
                            alt=""
                            className="sm-icon-img"
                            animate={{ opacity: open ? 0 : 1, scale: open ? 0.6 : 1 }}
                            transition={{ duration: 0.28 }}
                        />
                        <motion.img
                            src="/img/icon/CRS.svg"
                            alt=""
                            className="sm-icon-img"
                            animate={{ opacity: open ? 1 : 0, scale: open ? 1 : 0.6 }}
                            transition={{ duration: 0.32 }}
                        />
                    </motion.span>
                </button>
            </header>

            <AnimatePresence>
                <motion.aside
                    className="staggered-menu-panel"
                    aria-hidden={!open}
                    initial={{ x: '100%' }}
                    animate={{ x: open ? '0%' : '100%' }}
                    transition={{
                        duration: open ? 0.3 : 0.2,
                        ease: open ? ease : [0.55, 0.06, 0.68, 0.19],
                        delay: open ? 0.22 : 0
                    }}
                >
                    <div className="sm-panel-inner">
                        <motion.div className='sm-panel-logo' initial={{ opacity: 0 }} animate={{ opacity: open ? 1 : 0 }} >
                            <a
                                href="/"
                                className="sm-panel-logo-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (isTransitioning) return;
                                    setOpen(false);
                                    transitionToHome();
                                }}
                            >
                                <img src="/img/logo/logo.svg" alt="Logo" />
                            </a>
                        </motion.div>
                        <motion.ul
                            className="sm-panel-list"
                            data-numbering={true}
                            initial="closed"
                            animate={open ? 'open' : 'closed'}
                            variants={{
                                open: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
                            }}
                        >
                            {MENU_ITEMS.map((item, i) => (
                                <div className="sm-panel-item-bg" key={i}>
                                    <motion.li
                                        key={i}
                                        variants={{
                                            closed: { y: '140%', rotate: 5 },
                                            open: { y: '0%', rotate: 0, transition: { duration: 0.9, ease } }
                                        }}
                                    >
                                        <Link
                                            to={item.link}
                                            className="sm-panel-item"
                                            data-index={i + 1}
                                            onClick={(e) => {
                                                if (item.link !== '/work' || isTransitioning) return;
                                                e.preventDefault();
                                                setOpen(false);
                                                transitionToWork();
                                            }}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.li>
                                </div>
                            ))}
                        </motion.ul>

                        <div className="sm-socials">
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: open ? 1 : 0 }}
                            >
                                Socials
                            </motion.h3>
                            <ul>
                                {SOCIALS.map((social, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ y: 25, opacity: 0 }}
                                        animate={open ? { y: 0, opacity: 1 } : { y: 25, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <a href={social.link} target="_blank" rel="noopener noreferrer">
                                            {social.label}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.aside>
            </AnimatePresence>
        </div>
    );
};

export default NavigationMenu;