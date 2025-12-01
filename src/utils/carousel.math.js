/**
 * Carousel Math Utilities
 * Pure functions for carousel calculations
 */

import { CAROUSEL_CONFIG } from '@config/carousel.config';

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
