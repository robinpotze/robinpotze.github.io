export default `
precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform sampler2D u_flame;

float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
        mix(random(i + vec2(0.0, 0.0)), random(i + vec2(1.0, 0.0)), u.x),
        mix(random(i + vec2(0.0, 1.0)), random(i + vec2(1.0, 1.0)), u.x),
        u.y
    );
}

float circularMask(vec2 uv, vec2 center, float radius) {
    float dist = length(uv - center);
    return smoothstep(radius, radius - 0.1, dist);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec3 flameColor = texture2D(u_flame, uv).rgb;
    
    float flameBrightness = dot(flameColor, vec3(0.299, 0.587, 0.114));

    vec2 distortedUV = uv + (flameBrightness - 0.5) * 0.05;

    vec3 baseColor = vec3(0.0, 0.0, 0.0); // Background color
    vec3 glitchColor = vec3(1.0, 0.0, 0.0); // Glitch effect color
    vec3 floorColor = vec3(0.1, 0.1, 0.1); // Floor base color (dark gray)

    float floorLine = 0.3; // Position of the floor (0.0 = bottom, 1.0 = top)

    // Horizontal wave effect
    float wave = sin(distortedUV.x * 5.0 + u_time * 0.5) * 0.1;
    distortedUV.x += wave;

    float scanline = sin(distortedUV.y * u_resolution.y * 0.5 + u_time * 50.0) * 0.05;
    distortedUV.x += scanline;

    float band = floor(distortedUV.y * 20.0);
    float enableBand = step(0.8, fract(u_time * 0.1 + band * 0.9));
    distortedUV.x += sin(u_time * 10.0 + band) * 0.02 * enableBand;

    vec2 redUV = distortedUV + vec2(0.005, 0.0);
    vec2 blueUV = distortedUV - vec2(0.005, 0.0);

    vec2 noiseUV = distortedUV + noise(distortedUV * 10.0 + u_time) * 0.05;
    float layeredNoise = noise(noiseUV * 5.0) * 0.5 + noise(noiseUV * 20.0) * 0.5;

    float flicker = step(1.0, fract(sin(u_time * 10.0) * 43758.5453123));

    float mask = circularMask(distortedUV, u_mouse, 0.15);

    vec3 color;

    if (distortedUV.y < floorLine) {
        // Reflective floor effect
        vec2 reflectedUV = distortedUV;
        reflectedUV.y = floorLine - (distortedUV.y - floorLine); // Mirror the UV coordinates below the floor line

        // Add ripple distortion to the reflection
        float ripple = sin(reflectedUV.x * 20.0 + u_time * 5.0) * 0.02;
        reflectedUV.x += ripple;
        reflectedUV.y += ripple;

        // Sample the "reflected" glitch effect
        vec3 reflectionColor = mix(baseColor, glitchColor, layeredNoise);
        reflectionColor.r += redUV.x * flicker;
        reflectionColor.g += distortedUV.x * flicker;
        reflectionColor.b += blueUV.x * flicker;

        // Reflection falloff based on distance from the bottom
        float reflectionFalloff = smoothstep(0.0, floorLine, distortedUV.y); // Gradually reduce reflection closer to the bottom

        // Blend the reflection with the floor color
        float reflectionStrength = 0.5 * reflectionFalloff; // Adjust reflection intensity with falloff
        color = mix(floorColor, reflectionColor, reflectionStrength);
    } else {
        // Above the floor (background + glitch effects)
        color = mix(baseColor, glitchColor, layeredNoise);
        color.r += redUV.x * flicker;
        color.g += distortedUV.x * flicker;
        color.b += blueUV.x * flicker;
    }

    color = mix(color, baseColor, mask);

    color = mix(color, flameColor, .1);

    gl_FragColor = vec4(color, 1.0);
}
`