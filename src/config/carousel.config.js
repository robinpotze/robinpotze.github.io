export const CAROUSEL_CONFIG = {
    RADIUS: 3,
    ANGLE_STEP: 0.7,
    VERTICAL_STEP: -0.2,
    SCALE_FACTOR: 1.5,

    LERP_SPEED: 0.15,
    SCROLL_DAMPING: 0.25,

    SCALE_RANGE: 0.3,

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

    CAMERA: {
        POSITION: [0, 0, 8],
        FOV: 50,
    }
};

export function calculateScrollPages(itemCount) {
    if (itemCount === 0) return 1;
    return (itemCount * CAROUSEL_CONFIG.ANGLE_STEP) / (Math.PI * 2);
}

export function calculateCardPosition(index) {
    const angle = index * CAROUSEL_CONFIG.ANGLE_STEP;
    const yOffset = index * CAROUSEL_CONFIG.VERTICAL_STEP;

    return [
        Math.sin(angle) * CAROUSEL_CONFIG.RADIUS,
        yOffset,
        Math.cos(angle) * CAROUSEL_CONFIG.RADIUS
    ];
}

export function calculateCardRotation(index) {
    return [0, index * CAROUSEL_CONFIG.ANGLE_STEP, 0];
}

/**
 * Calculate how "centered" a card is based on rotation
 * @param {number} rigRotation - Current rotation of the carousel rig (radians)
 * @param {number} cardIndex - Index of the card
 * @returns {number} Normalized difference (0 = centered, 1 = fully rotated away)
 */
export function calculateCardCenteredness(rigRotation, cardIndex) {
    const currentRotation = Math.abs(rigRotation);
    const cardAngle = cardIndex * CAROUSEL_CONFIG.ANGLE_STEP;
    const diff = Math.abs(currentRotation - cardAngle);

    return Math.min(diff / Math.PI, 1);
}

/**
 * Calculate card scale based on centeredness
 * @param {number} normalizedDiff - 0 to 1, where 0 is centered
 * @returns {number} Scale value
 */
export function calculateCardScale(normalizedDiff) {
    return 1 - (normalizedDiff * CAROUSEL_CONFIG.SCALE_RANGE);
}

/**
 * Calculate floating offset for a card
 * @param {number} time - Elapsed time
 * @param {number} index - Card index for unique phase
 * @param {number} speedMultiplier - Random speed multiplier
 * @returns {{ x: number, y: number, z: number }} Position offset
 */
export function calculateFloatOffset(time, index, speedMultiplier) {
    const { FLOAT } = CAROUSEL_CONFIG;
    const t = time * speedMultiplier;
    const seed = index * FLOAT.PHASE_SEED;

    return {
        x: Math.sin(t * FLOAT.X_FREQUENCY + seed) * FLOAT.X_AMPLITUDE,
        y: Math.cos(t * FLOAT.Y_FREQUENCY + seed * 1.3) * FLOAT.Y_AMPLITUDE,
        z: Math.sin(t * FLOAT.Z_FREQUENCY + seed * 0.7) * FLOAT.Z_AMPLITUDE,
    };
}

/**
 * Apply position offset to base position
 * @param {number[]} basePosition - [x, y, z]
 * @param {{ x: number, y: number, z: number }} offset
 * @returns {number[]} New position
 */
export function applyPositionOffset(basePosition, offset) {
    return [
        basePosition[0] + offset.x,
        basePosition[1] + offset.y,
        basePosition[2] + offset.z,
    ];
}

/**
 * Calculate target rotation for rig based on scroll
 * @param {number} scrollOffset - 0 to 1
 * @param {number} itemCount - Number of items in carousel
 * @returns {number} Target rotation in radians
 */
export function calculateRigRotation(scrollOffset, itemCount) {
    const totalRotation = (itemCount - 1) * CAROUSEL_CONFIG.ANGLE_STEP;
    return -scrollOffset * totalRotation;
}

/**
 * Calculate camera Y position based on scroll
 * @param {number} scrollOffset - 0 to 1
 * @param {number} itemCount - Number of items in carousel
 * @returns {number} Y position
 */
export function calculateCameraY(scrollOffset, itemCount) {
    return scrollOffset * (itemCount - 1) * CAROUSEL_CONFIG.VERTICAL_STEP;
}
