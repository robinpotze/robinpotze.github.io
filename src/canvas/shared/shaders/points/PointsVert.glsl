uniform float uScrollProgress;
uniform float uTime;
attribute float aRandom;

varying float vDisplacement;
varying vec3 vPosition;

void main() {
    vec3 pos = position;
    
    // Calculate displacement based on scroll progress and random value
    // Only 2% of points (aRandom > 0.98) will displace
    float threshold = 0.98;
    float displacement = 0.0;
    
    if (aRandom > threshold) {
        // Map scroll progress to displacement (reduced to 2% of original: 5.0 * 0.02 = 0.1)
        displacement = uScrollProgress * (aRandom - threshold) * 0.1;
        pos.y += displacement;
    }
    
    vDisplacement = displacement;
    vPosition = pos;
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Much smaller point size for point-cloud effect
    gl_PointSize = 0.15 * (1.0 + displacement * 0.2) * (300.0 / -mvPosition.z);
}
