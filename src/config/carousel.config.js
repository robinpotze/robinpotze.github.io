export const CAROUSEL_CONFIG = {
    // Layout
    RADIUS: 3,
    ANGLE_STEP: 0.7,
    VERTICAL_STEP: -0.2,
    SCALE_FACTOR: 1.5,

    // Animation
    LERP_SPEED: 0.15,
    SCROLL_DAMPING: 0.25,

    // Card Effects
    SCALE_RANGE: 0.3, // How much cards scale down when rotated away

    // Floating Animation
    FLOAT: {
        X_FREQUENCY: 0.3,
        X_AMPLITUDE: 0.03,
        Y_FREQUENCY: 0.4,
        Y_AMPLITUDE: 0.04,
        Z_FREQUENCY: 0.35,
        Z_AMPLITUDE: 0.02,
        SPEED_MIN: 0.5,
        SPEED_MAX: 1.0,
        PHASE_SEED: 13.7,
    },

    // Camera
    CAMERA: {
        POSITION: [0, 0, 8],
        FOV: 50,
    }
};

/**
 * Calculate total scroll pages needed for given item count
 */
export function calculateScrollPages(itemCount) {
    if (itemCount === 0) return 1;
    return (itemCount * CAROUSEL_CONFIG.ANGLE_STEP) / (Math.PI * 2);
}

/**
 * Calculate card position in 3D space
 */
export function calculateCardPosition(index) {
    const angle = index * CAROUSEL_CONFIG.ANGLE_STEP;
    const yOffset = index * CAROUSEL_CONFIG.VERTICAL_STEP;

    return [
        Math.sin(angle) * CAROUSEL_CONFIG.RADIUS,
        yOffset,
        Math.cos(angle) * CAROUSEL_CONFIG.RADIUS
    ];
}

/**
 * Calculate card rotation
 */
export function calculateCardRotation(index) {
    return [0, index * CAROUSEL_CONFIG.ANGLE_STEP, 0];
}
