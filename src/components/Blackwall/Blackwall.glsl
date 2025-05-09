precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(random(i + vec2(0.0, 0.0)), random(i + vec2(1.0, 0.0)), u.x), mix(random(i + vec2(0.0, 1.0)), random(i + vec2(1.0, 1.0)), u.x), u.y);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;

  // Center the UV coordinates
  uv -= 0.5;
  uv.x *= u_resolution.x / u_resolution.y;
  uv += 0.5;

  // Grid effect
  float spacing = 30.0 / u_resolution.y;
  vec2 grid = fract(uv / spacing);

  float dist = length(grid - 0.5);
  float radius = 0.1 + 0.03 * sin(u_time * 2.0 + uv.y * 20.0 + uv.x * 10.0);

  float circle = smoothstep(radius, radius - 0.02, dist);

  // Interaction effect
  float interaction = smoothstep(0.25, 0.0, distance(uv, u_mouse));
  circle *= 1.0 - interaction * 0.8;

  // Glitch effects
  float glitchX = step(0.99, random(vec2(u_time * 10.0, uv.y))) * 0.05 * sin(u_time * 40.0);
  float glitchY = step(0.995, random(vec2(u_time * 20.0, uv.x))) * 0.1 * cos(u_time * 60.0);
  uv += vec2(glitchX, glitchY);

  // Pixel jitter
  float jitter = noise(uv * 100.0 + u_time * 5.0);
  uv += jitter * 0.002;

  // Color
  vec3 color = vec3(0.0);
  color += vec3(1.0, 0.0, 0.0) * step(0.98, random(vec2(uv.y, u_time))) * 0.2; // red flickers
  color += vec3(1.0, 0.0, 0.0) * circle; // red grid

  gl_FragColor = vec4(color, 1.0);
}