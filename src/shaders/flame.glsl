precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

varying vec2 vUv;

vec2 getAspectUV(vec2 uv,vec2 resolution){
    vec2 aspectUv = uv;
    aspectUv.x = (aspectUv.x-.5)*(resolution.x/resolution.y)+.5;
    return aspectUv;
}

/* original noise kept intact */
float noise(vec3 p)
{
    vec3 i=floor(p);
    vec4 a=dot(i,vec3(2.,57.,21.))+vec4(0.,57.,21.,78.);
    vec3 f=cos((p-i)*acos(-1.))*(-.5)+.5;
    a=mix(sin(cos(a)*a),sin(cos(1.+a)*(1.+a)),f.x);
    a.xy=mix(a.xz,a.yw,f.y);
    return mix(a.x,a.y,f.z);
}

float sphere(vec3 position,vec4 spread){
    return length(spread.xyz-position)-spread.w;
}

float flame(vec3 position){
    float d = sphere(position*vec3(.5,.5,1.), vec4(0.,-1.,0.,1.));
    return d + (noise(position+vec3(0.,u_time*2.,0.)) + noise(position*3.)*.5) * .25 * (position.y);
}

float scene_from_flame(vec3 p, float f){       // helper using precomputed flame
    return min(100.-length(p), abs(f));
}

vec4 raymarch(vec3 org, vec3 dir){
    const float HIT_EPS = 0.02;   // matches original eps
    const float FAR     = 100.0;
    const int   MAX_IT  = 32;

    float t = 0.0;
    float glow = .0;
    bool  glowing = false;

    for (int i=0; i<MAX_IT; i++){
        vec3 p = org + dir * t;

        // one flame() eval reused for both scene and glow test
        float f = flame(p);
        float d = scene_from_flame(p, f) + HIT_EPS;

        // preserve original glow behavior: once inside flame, ramp by i/64
        if (d > HIT_EPS) {
            if (f < 0.0) glowing = true;
            if (glowing) glow = float(i) / 64.0;
        }

        if (d < HIT_EPS || t > FAR) break;  // early exit
        t += d;                             // step along the ray
    }

    return vec4(org + dir * t, glow);
}

void main(){
    vec2 uv = getAspectUV(vUv, u_resolution)*2.-1.;
    vec3 org = vec3(0.,-2.,4.);
    vec3 dir = normalize(vec3(uv.x*1.6,-uv.y,-1.5));

    vec4 p = raymarch(org, dir);
    float glow = p.w;

    vec4 col = mix(vec4(1.,1.,1.,1.), vec4(.0314,.8863,1.,1.), p.y*.02+.4);
    gl_FragColor = mix(vec4(0.,0.,0.,0.), col, pow(glow*2., 4.));
}
 