varying vec2 vUv;
uniform float uTime;
uniform float uProgress;
uniform vec2 uResolution;
uniform vec2 uRectCenter;
uniform vec2 uRectSize;
uniform sampler2D uThumb;
uniform float uUseThumb;
uniform sampler2D uDispMap;
uniform float uUseDisp;
uniform float uStrength;

// Simplex / FBM noise helpers
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
float noise(vec2 p){
    vec2 i=floor(p);
    vec2 f=fract(p);
    float a=hash(i);
    float b=hash(i+vec2(1.,0.));
    float c=hash(i+vec2(0.,1.));
    float d=hash(i+vec2(1.,1.));
    vec2 u=f*f*(3.-2.*f);
    return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;
}

float fbm(vec2 p){
    float v=0.;
    float amp=.5;
    for(int i=0;i<5;i++){
        v+=amp*noise(p);
        p*=2.;
        amp*=.5;
    }
    return v;
}

void main(){
    vec2 uv=vUv;
    
    // animated noise value
    float n=fbm(uv*6.+uTime*.4);
    
    // displacement source: either external displacement map or procedural noise
    float dispSrc=n;
    if(uUseDisp>.5){
        // sample displacement map (assume single-channel in red)
        dispSrc=texture2D(uDispMap,uv).r;
    }
    
    // displacement by selected source, scaled by progress
    float disp=(dispSrc-.5)*uStrength*uProgress;
    vec2 displaced=uv+vec2(disp*.6,disp*-.6);
    
    // dissolve threshold using another noise sample
    float dissolveNoise=fbm(displaced*12.+uTime*1.3);
    // bias noise influence so at low uProgress there's effectively no alpha
    float noiseInfluence=mix(.05,.45,uProgress);
    
    // compute distance of current fragment to the rect center (in UV space)
    vec2 rectCenterUV=uRectCenter;
    vec2 rectHalf=uRectSize*.5;
    // distance normalized to rect size (0 at center, >1 outside)
    vec2 d=(uv-rectCenterUV)/max(rectHalf,vec2(.001));
    float distToRect=length(d);
    
    // falloff based on distance so effect is stronger near the rect
    float falloff=smoothstep(1.6,0.,distToRect);
    
    float threshold=clamp(uProgress*falloff+(dissolveNoise-.5)*noiseInfluence,0.,1.);
    
    // compose color: darkblue background and subtle cyan tint
    vec3 base=vec3(.02,.06,.12);
    vec3 tint=vec3(.05,.22,.38);
    vec3 col=mix(base,tint,clamp(n*1.2,0.,1.));
    
    // sample thumbnail texture if available
    vec4 thumbCol=vec4(0.);
    if(uUseThumb>.5){
        // when sampling the thumbnail, map vUv directly
        thumbCol=texture2D(uThumb,vUv);
    }
    
    // alpha tracks threshold directly: 0 when uProgress==0, ~1 when uProgress==1
    float alpha=smoothstep(0.,1.,threshold);
    
    // blend thumbnail into final color when present (use alpha to blend)
    vec3 finalCol=mix(col,thumbCol.rgb,thumbCol.a*mix(0.,1.,uProgress));
    
    gl_FragColor=vec4(finalCol,alpha);
}