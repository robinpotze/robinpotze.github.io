// Animation timing and easing configuration
export const ANIMATION_CONFIG = {
    // Entry animations
    ENTRY: {
        LOGO: {
            DURATION: 1.5,
            START_POSITION: [0, -15, -5],
            END_POSITION: [0, 0, -5],
            START_SCALE: [0.5, 0.5, 0.5],
            END_SCALE: [2.8, 2.8, 2.8]
        },
        BACKGROUND: {
            DURATION: 1.5,
            START_POSITION: [0, 0, -30],
            END_POSITION: [0, 0, -30],
            START_SCALE: [8, 8, 8],
            END_SCALE: [6, 6, 6]
        },
        SUBTITLE: {
            DURATION: 0.9,
            DELAY: 0.6,
            START_POSITION: [0, -12, 0],
            END_POSITION: [0, -9, 0]
        },
        CAMERA: {
            DURATION: 1.5,
            START_POSITION: [0, 0, 30],
            END_POSITION: [0, 0, 20],
            START_FOV: 70,
            END_FOV: 50
        },
        LIGHT: {
            DURATION: 1.0,
            START_INTENSITY: 0,
            END_INTENSITY: 1
        }
    },

    // Scroll animations
    SCROLL: {
        LERP_FACTOR: 0.1,
        LOGO: {
            END_Y: 15,
            END_SCALE: 1.5
        },
        CAMERA: {
            END_Z: 10,
            END_FOV: 60
        },
        BACKGROUND: {
            END_SCALE: 3
        },
        SUBTITLE: {
            END_Y: -12
        },
        LIGHT: {
            END_INTENSITY: 0.3
        }
    },

    // Post-processing effects
    EFFECTS: {
        BLOOM: {
            LUMINANCE_THRESHOLD: 0.92,
            INTENSITY: 0.55,
            RADIUS: 0.4,
            LEVELS: 8
        },
        N8AO: {
            AO_RADIUS: 1,
            INTENSITY: 1.5
        },
        TILT_SHIFT: {
            BLUR: 0.05
        },
        CHROMATIC_ABERRATION: {
            DISTORTION: 0.02
        }
    },

    // Float animation
    FLOAT: {
        INTENSITY: 2,
        ROTATION_INTENSITY: 0.5,
        SPEED: 0.5
    },

    // General timing
    TIMING: {
        DEFAULT_DURATION: 0.3,
        SLOW_DURATION: 0.6,
        FAST_DURATION: 0.15
    },

    // Easing functions (for CSS/Framer Motion)
    EASING: {
        DEFAULT: [0.43, 0.13, 0.23, 0.96],
        EASE_IN: [0.42, 0, 1, 1],
        EASE_OUT: [0, 0, 0.58, 1],
        EASE_IN_OUT: [0.42, 0, 0.58, 1]
    }
};
