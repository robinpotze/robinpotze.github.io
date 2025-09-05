import { motion } from "motion/react";

const ScrollDown = (props) => {
    const lineVariants = {
        initial: { opacity: 0.2 },
        animate: {
            opacity: [0.2, 1, 0.2],
            transition: {
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
            }
        }
    };

    const containerVariants = {
        animate: {
            transition: {
                staggerChildren: 0.3, // pulse flows downward
                repeat: Infinity,
            }
        }
    };

    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="64"
            fill="none"
            viewBox="0 0 16 36"
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
            {/* Pulsing lines */}
            <motion.path
                d="M5 .5h6"
                stroke="var(--c-BRND)"
                strokeWidth={1.5}
                variants={lineVariants}
            />
            <motion.path
                d="M3.5 8.5h9"
                stroke="var(--c-BRND)"
                strokeWidth={1.5}
                variants={lineVariants}
            />
            <motion.path
                d="M2 16.5h12"
                stroke="var(--c-BRND)"
                strokeWidth={1.5}
                variants={lineVariants}
            />

            {/* Arrow synced with last pulse */}
            <motion.path
                d="M8 36 0 25h16z"
                fill="var(--c-BRND)"
                initial={{ y: 0 }}
                animate={{ y: [0, 2, 0] }}
                transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: 0.9, // syncs with last line pulse
                }}
            />
        </motion.svg>
    );
};

export default ScrollDown;
