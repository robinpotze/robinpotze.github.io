precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

float noise(vec3 p)
{
	vec3 i = floor(p);
	vec4 a = dot(i, vec3(2., 57., 21.)) + vec4(0., 57., 21., 78.);
	vec3 f = cos((p-i) * acos(-1.)) * (-.5) + .5;
	a = mix(sin(cos(a) * a), sin(cos(1. + a) * (1. + a)), f.x);
	a.xy = mix(a.xz, a.yw, f.y);
	return mix(a.x, a.y, f.z);
}

float sphere(vec3 p, vec4 spr)
{
	return length(spr.xyz-p) - spr.w;
}

float flame(vec3 p)
{
	vec2 mouse = (u_mouse) * vec2(u_resolution.x/u_resolution.y, 1.);

	vec2 mouseScene = vec2(mouse.x, mouse.y);

	float mouseDist = length(p.xy - mouseScene);

	float d = sphere(p*vec3(0.5,.5,1.), vec4(.0,-1.,.0,1.));

	float repel = smoothstep(.3, 0., mouseDist) * 1.;

	return d + repel + (noise(p + vec3(.0,u_time * 2.,.0)) + noise(p * 3.) * .5) * .25 * (p.y) ;
}

float scene(vec3 p)
{
	return min(100.-length(p) , abs(flame(p)) );
}

vec4 raymarch(vec3 org, vec3 dir)
{
	float d = 0.0, glow = 0.0, eps = 0.02;
	vec3  p = org;
	bool glowing = false;
	
	for(int i=0; i<64; i++)
	{
		d = scene(p) + eps;
		p += d * dir;
		if( d>eps )
		{
			if(flame(p) < .0)
				glowing=true;
			if(glowing)
       			glow = float(i) / 64.;
		}
	}
	return vec4(p,glow);
}

void main() {
    vec2 fragCoord = gl_FragCoord.xy;

    vec2 v = -1.0 + 2.0 * fragCoord.xy / u_resolution.xy;
    v.x *= u_resolution.x / u_resolution.y;

    vec3 org = vec3(0., -2., 4.);
    vec3 dir = normalize(vec3(v.x * 1.6, -v.y, -1.5));

    vec4 p = raymarch(org, dir);
    float glow = p.w;

    vec4 col = mix(vec4(1., .5, .1, 1.), vec4(1., 0, 0, 1.), p.y * .02 + .4);

    gl_FragColor = mix(vec4(0.), col, pow(glow * 2., 4.));
}