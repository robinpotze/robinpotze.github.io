uniform vec3 uColorTop;
uniform vec3 uColorBottom;
uniform float uOpacity;

varying float vDisplacement;
varying vec3 vPosition;

void main() {
    // Create circular points
    vec2 center = gl_PointCoord - 0.5;
    float dist = length(center);
    
    if (dist > 0.5) {
        discard;
    }
    
    // Fade edges
    float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
    
    // Gradient based on Y position
    float gradientFactor = (vPosition.y + 10.0) / 20.0;
    gradientFactor = clamp(gradientFactor, 0.0, 1.0);
    vec3 baseColor = mix(uColorBottom, uColorTop, gradientFactor);
    
    // Brighten displaced points
    float brightness = 1.0 + vDisplacement * 0.3;
    vec3 color = baseColor * brightness;
    
    gl_FragColor = vec4(color, alpha * uOpacity);
}
