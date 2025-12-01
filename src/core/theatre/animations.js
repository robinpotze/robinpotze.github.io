// Animation definitions for Theatre.js sequences
// These define the keyframes for route entry/exit animations

export const homeEntryAnimation = {
    duration: 1.5,
    keyframes: {
        Logo: {
            position: [
                { time: 0, value: [0, -15, -5] },    // Start below screen
                { time: 0.8, value: [0, 0.5, -5] },  // Overshoot slightly
                { time: 1.2, value: [0, 0, -5] }     // Settle to final position
            ],
            scale: [
                { time: 0, value: [0.5, 0.5, 0.5] },
                { time: 1.2, value: [2.8, 2.8, 2.8] }
            ]
        },
        Camera: {
            position: [
                { time: 0, value: [0, 0, 30] },      // Start far back
                { time: 1.5, value: [0, 0, 20] }     // Move to final position
            ],
            fov: [
                { time: 0, value: 70 },
                { time: 1.5, value: 50 }
            ]
        },
        Background: {
            scale: [
                { time: 0, value: [8, 8, 8] },
                { time: 1.5, value: [6, 6, 6] }
            ],
            position: [
                { time: 0, value: [0, 0, -30] },
                { time: 1.5, value: [0, 0, -30] }
            ]
        },
        Subtitle: {
            position: [
                { time: 0, value: [0, -12, 0] },     // Below screen
                { time: 0.6, value: [0, -12, 0] },   // Wait for logo
                { time: 1.5, value: [0, -9, 0] }     // Slide up
            ]
        },
        AmbientLight: {
            intensity: [
                { time: 0, value: 0 },
                { time: 1.0, value: 1 }
            ]
        }
    }
};

export const homeExitAnimation = {
    duration: 0.8,
    keyframes: {
        Logo: {
            position: [
                { time: 0, value: [0, 0, -5] },
                { time: 0.8, value: [0, 15, -5] }    // Exit upward
            ],
            scale: [
                { time: 0, value: [2.8, 2.8, 2.8] },
                { time: 0.8, value: [1.5, 1.5, 1.5] }
            ]
        },
        Camera: {
            position: [
                { time: 0, value: [0, 0, 20] },
                { time: 0.8, value: [0, 0, 15] }
            ]
        },
        Background: {
            scale: [
                { time: 0, value: [6, 6, 6] },
                { time: 0.8, value: [4, 4, 4] }
            ]
        },
        AmbientLight: {
            intensity: [
                { time: 0, value: 1 },
                { time: 0.8, value: 0.3 }
            ]
        }
    }
};

export const workEntryAnimation = {
    duration: 1.2,
    keyframes: {
        Camera: {
            position: [
                { time: 0, value: [0, 0, 10] },      // Start closer
                { time: 1.2, value: [0, 0, 5] }      // Pull back to view
            ],
            fov: [
                { time: 0, value: 40 },
                { time: 1.2, value: 50 }
            ]
        },
        WorkScene: {
            position: [
                { time: 0, value: [0, 0, -5] },      // Start pushed back
                { time: 1.2, value: [0, 0, 0] }      // Move forward
            ]
        },
        AmbientLight: {
            intensity: [
                { time: 0, value: 0.3 },
                { time: 1.2, value: 1 }
            ]
        }
    }
};

export const workExitAnimation = {
    duration: 0.8,
    keyframes: {
        Camera: {
            position: [
                { time: 0, value: [0, 0, 5] },
                { time: 0.8, value: [0, 0, 2] }
            ]
        },
        WorkScene: {
            position: [
                { time: 0, value: [0, 0, 0] },
                { time: 0.8, value: [0, 0, -8] }     // Push away
            ]
        },
        AmbientLight: {
            intensity: [
                { time: 0, value: 1 },
                { time: 0.8, value: 0.2 }
            ]
        }
    }
};

// Easing functions matching ActiveTheory's custom curves
export const easings = {
    // Smooth ease out with slight overshoot
    elastic: (t) => {
        const c4 = (2 * Math.PI) / 3;
        return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
    },

    // ActiveTheory's signature ease
    activeTheory: (t) => {
        if (t <= 0.45) {
            return Math.pow(t / 0.45, 1.4) * 0.6;
        }
        if (t <= 0.65) {
            const local = (t - 0.45) / 0.2;
            return 0.6 + Math.pow(local, 2.3) * 0.08;
        }
        if (t <= 0.85) {
            const local = (t - 0.65) / 0.2;
            return 0.68 + Math.pow(local, 1.1) * 0.22;
        }
        const local = (t - 0.85) / 0.15;
        return 0.9 + local * 0.1;
    },

    // Smooth cubic bezier
    cubic: (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
};
