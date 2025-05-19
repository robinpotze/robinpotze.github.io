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

float dotGrid(vec2 uv, float gridSize, float dotRadius) {
    vec2 grid = fract(uv * gridSize);
    vec2 centered = grid - 0.5;
    float dist = length(centered);
    return smoothstep(dotRadius, dotRadius - 0.02, dist);
}

float ratio(float height, float width) {
    return height / width;
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;

    vec3 baseColor = vec3(0.0, 0.0, 0.0);
    vec3 glitchColor = vec3(1.0, 0.0, 0.0);
    vec3 floorColor = vec3(0.1, 0.1, 0.1);

    float floorLine = 0.3;

    float mask = circularMask(uv, u_mouse, 0.05);

    vec3 flameColor = texture2D(u_flame, uv).rgb;
    float flameBrightness = dot(flameColor, vec3(0.299, 0.587, 0.114));

    vec2 distortedUV = uv + (flameBrightness - mask - .5) * 0.05;

    float dotMask = dotGrid(distortedUV, 200.0, 0.15);

    float wave = sin(distortedUV.x * 5.0 + u_time * 0.5) * 0.1;
    distortedUV.x += wave;

    float scanline = sin(distortedUV.y * u_resolution.y * -0.5 + u_time * 5.0) * 0.05;
    distortedUV.x += scanline;

    float band = floor(distortedUV.y * 10.0);
    float enableBand = step(.8, fract(u_time * 0.1 + band * 0.3));
    distortedUV.x += sin(u_time * 100.0 + band) * 0.01 * enableBand;

    vec2 noiseUV = distortedUV + noise(distortedUV * 10.0 + u_time) * 0.05;
    float layeredNoise = noise(noiseUV * 5.0) * 0.5 + noise(noiseUV * 20.0) * 0.5;

    float flicker = step(1.0, fract(sin(u_time * 10.0) * 43758.5453123));

    vec2 redUV = distortedUV + vec2(0.005, 0.0);
    vec2 blueUV = distortedUV - vec2(0.005, 0.0);

    vec3 color;

    if (distortedUV.y < floorLine) {
        vec2 reflectedUV = distortedUV;
        reflectedUV.y = floorLine - (distortedUV.y - floorLine);

        float ripple = sin(reflectedUV.x * 20.0 + u_time * 5.0) * 0.02;
        reflectedUV.x += ripple;
        reflectedUV.y += ripple;

        reflectedUV.xy += flameBrightness * 0.01;
        vec3 reflectedFlame = mix(flameColor, baseColor, .1);

        vec3 reflectionColor = mix(reflectedFlame, glitchColor, layeredNoise);
        reflectionColor.r += redUV.x * flicker;
        reflectionColor.g += distortedUV.x * flicker;
        reflectionColor.b += blueUV.x * flicker;

        float reflectionFalloff = smoothstep(0.0, floorLine, distortedUV.y);
        float reflectionStrength = 0.5 * reflectionFalloff;

        color = mix(floorColor, reflectionColor, reflectionStrength);
    } else {
        color = mix(baseColor, glitchColor, layeredNoise);
        color.r += redUV.x * flicker;
        color.g += distortedUV.x * flicker;
        color.b += blueUV.x * flicker;
    }

    color = mix(color, baseColor, mask);

    color = mix(color, flameColor, .1);

    color += flameColor * dotMask;
    color *= dotMask;

    gl_FragColor = vec4(color, 1);
}
`