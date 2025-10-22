import{r as u,S as N,O as J,W as K,c as Q,P as Z,d as X,V as E,M as j,j as $}from"./index-Is_D4heu.js";/* empty css                  */function ee({initialScale:x=1,enabled:h=!0,minScale:F=.25,maxScale:U=1,adaptIntervalMs:V=1e3,fpsSampleSize:y=30,targetFps:R=30,adaptThreshold:P=.85,adaptStep:b=.85}={}){const l=u.useRef(x),d=u.useRef([]),s=u.useRef(performance.now()),c=u.useRef(h);function C(){return l.current}function p(i){l.current=Math.max(F,Math.min(U,i))}function e(){c.current=!1}function w(){c.current=!0}function g(i){if(!c.current)return null;const a=d.current;a.push(i),a.length>y&&a.shift();const m=performance.now();if(m-s.current<V)return null;if(a.length>=Math.max(4,Math.floor(y/3))){const _=1e3/(a.reduce((T,S)=>T+S,0)/a.length);if(_<P*R)return p(l.current*b),d.current.length=0,s.current=m,l.current;if(_>R*1.05)return p(l.current/b),d.current.length=0,s.current=m,l.current}return null}return u.useEffect(()=>{c.current=h},[h]),{getScale:C,setScale:p,sampleFrame:g,start:w,stop:e}}const ne=`precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform sampler2D u_flame;

vec2 getAspectUV(vec2 fragCoord,vec2 resolution){
    vec2 uv=fragCoord/resolution;
    uv.x=(uv.x-.5)*(resolution.x/resolution.y)+.5;
    return uv;
}

float random(vec2 st){
    return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
}

float noise(vec2 st){
    vec2 i=floor(st);
    vec2 f=fract(st);
    vec2 u=f*f*(3.-2.*f);
    return mix(
        mix(random(i+vec2(0.,0.)),random(i+vec2(1.,0.)),u.x),
        mix(random(i+vec2(0.,1.)),random(i+vec2(1.,1.)),u.x),
        u.y
    );
}

float circularMask(vec2 uv,vec2 center,float radius){
    float dist=length(uv-center);
    return smoothstep(radius,radius-.1,dist);
}

float dotGrid(vec2 uv,float gridSize,float dotRadius){
    vec2 grid=fract(uv*gridSize);
    vec2 centered=grid-.5;
    float dist=length(centered);
    return smoothstep(dotRadius,dotRadius-.02,dist);
}

void main(){
    vec2 uv=getAspectUV(gl_FragCoord.xy,u_resolution);
    
    vec3 baseColor=vec3(0.,0.,0.);
    vec3 glitchColor=vec3(1.,0.,0.);
    vec3 floorColor=vec3(0.,0.,0.);
    
    float floorLine=.3;
    float floorSpecular=.5;
    
    float mouseMask=circularMask(uv,u_mouse,.08);
    
    vec3 flameColor=texture2D(u_flame,uv).rgb;
    float flameBrightness=dot(flameColor,vec3(.299,.587,.114));
    
    vec2 distortedUV=uv+(flameBrightness-mouseMask-.5)*.05;
    
    float dotMask=dotGrid(distortedUV,100.,.35);
    
    float wave=sin(distortedUV.x*5.+u_time*.5)*.1;
    distortedUV.x+=wave;
    
    float scanline=sin(distortedUV.y*u_resolution.y*-.5+u_time*5.)*.05;
    distortedUV.x+=scanline;
    
    float band=floor(distortedUV.y*10.);
    float enableBand=step(.8,fract(u_time*.1+band*.3));
    distortedUV.x+=sin(u_time*100.+band)*.01*enableBand;
    
    vec2 noiseUV=distortedUV+noise(distortedUV*10.+u_time)*.05;
    float layeredNoise=noise(noiseUV*5.)*.5+noise(noiseUV*20.)*.5;
    
    float flicker=step(1.,fract(sin(u_time*10.)*43758.5453123));
    
    vec2 redUV=distortedUV+vec2(.005,0.);
    vec2 blueUV=distortedUV-vec2(.005,0.);
    
    vec3 color;
    
    if(distortedUV.y<floorLine){
        vec2 reflectedUV=distortedUV;
        reflectedUV.y=floorLine-(distortedUV.y-floorLine);
        
        float ripple=sin(reflectedUV.x*20.+u_time*5.)*.02;
        reflectedUV.x+=ripple;
        reflectedUV.y+=ripple;
        
        vec3 reflectionColor=mix(baseColor,glitchColor,layeredNoise);
        reflectionColor.r+=redUV.x*flicker;
        reflectionColor.g+=distortedUV.x*flicker;
        reflectionColor.b+=blueUV.x*flicker;
        
        float reflectionFalloff=smoothstep(0.,floorLine,distortedUV.y);
        float reflectionStrength=floorSpecular*reflectionFalloff;
        
        color=mix(floorColor,reflectionColor,reflectionStrength);
        
        vec2 reflectedFlameUV=distortedUV;
        reflectedFlameUV.y=floorLine+(floorLine-distortedUV.y);
        
        vec3 reflectedFlameColor=texture2D(u_flame,reflectedFlameUV).rgb;
        
        color+=reflectedFlameColor;
    }else{
        color=mix(baseColor,glitchColor,layeredNoise);
        color+=flameColor;
        
        color.r+=redUV.x*flicker;
        color.g+=distortedUV.x*flicker;
        color.b+=blueUV.x*flicker;
    }
    
    color=mix(color,baseColor,mouseMask);
    // color = mix(color, flameColor, .1);
    
    // color += flameColor * dotMask;
    color*=dotMask;
    
    color*=1.;
    
    gl_FragColor=vec4(color,1);
}`,oe=`precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

vec2 getAspectUV(vec2 fragCoord,vec2 resolution){
    vec2 uv = fragCoord/resolution;
    uv.x = (uv.x-.5)*(resolution.x/resolution.y)+.5;
    return uv;
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
    vec2 uv = getAspectUV(gl_FragCoord.xy, u_resolution)*2.-1.;
    vec3 org = vec3(0.,-2.,4.);
    vec3 dir = normalize(vec3(uv.x*1.6,-uv.y,-1.5));

    vec4 p = raymarch(org, dir);
    float glow = p.w;

    vec4 col = mix(vec4(1.,1.,1.,1.), vec4(.0314,.8863,1.,1.), p.y*.02+.4);
    gl_FragColor = mix(vec4(0.), col, pow(glow*2., 4.));
}
 `;function ae({renderScale:x=1,resizeDebounceMs:h=100,adaptivityEnabled:F=!0,minRenderScale:U=.25,maxRenderScale:V=1,adaptIntervalMs:y=1e3,fpsSampleSize:R=30,adaptThreshold:P=.85,adaptStep:b=.85}={}){const l=u.useRef(),d=ee({initialScale:x,enabled:F,minScale:U,maxScale:V,adaptIntervalMs:y,fpsSampleSize:R,targetFps:30,adaptThreshold:P,adaptStep:b}),s=u.useRef(d.getScale());return u.useEffect(()=>{const c=l.current;if(!c)return;const C=new N,p=new J(-1,1,1,-1,0,1),e=new K({antialias:!0,alpha:!1});e.setClearColor(0,1),e.setPixelRatio(window.devicePixelRatio||1);const w=Math.max(1,Math.floor(window.innerWidth*x)),g=Math.max(1,Math.floor(window.innerHeight*x));e.setSize(w,g,!1),e.domElement.classList.add("blackwall-canvas"),c.appendChild(e.domElement);const i=e.getPixelRatio()||window.devicePixelRatio||1,a=new Q(Math.max(1,Math.floor(w*i)),Math.max(1,Math.floor(g*i))),m=new Z(2,2),M={u_time:{value:0},u_resolution:{value:new E(Math.max(1,Math.floor(w*i)),Math.max(1,Math.floor(g*i)))},u_mouse:{value:new E(.5,.5)}},_=new X({uniforms:M,fragmentShader:oe,transparent:!0}),T=new j(m,_),S=new N;S.add(T);const k={u_time:{value:0},u_resolution:{value:new E(Math.max(1,Math.floor(w*i)),Math.max(1,Math.floor(g*i)))},u_mouse:{value:new E(.5,.5)},u_flame:{value:a.texture}},H=new X({uniforms:k,fragmentShader:ne,transparent:!0}),O=new j(m,H);C.add(O);let q=performance.now(),W=0;const Y=30;let L=s.current;function A(r){const o=Math.max(U,Math.min(V,r));if(Math.abs(o-L)<.001)return!1;s.current=o,L=o,d.setScale(o);const t=window.innerWidth,n=window.innerHeight;e.domElement.classList.contains("blackwall-canvas")||e.domElement.classList.add("blackwall-canvas");const f=Math.max(1,Math.floor(t*L)),D=Math.max(1,Math.floor(n*L));return e.setPixelRatio(window.devicePixelRatio||1),e.setSize(f,D,!1),v&&(clearTimeout(v),v=null),z(f,D),!0}function B(){requestAnimationFrame(B);const r=performance.now(),o=r-W;if(o<1e3/Y)return;W=r;const t=(r-q)*.001,n=d.sampleFrame(o);n!=null&&A(n),M.u_time.value=t,k.u_time.value=t,e.setRenderTarget(a),e.render(S,p),e.setRenderTarget(null),e.render(C,p)}A(s.current),B();function G(r){const o=window.innerWidth/window.innerHeight,t=r.clientX/window.innerWidth,n=1-r.clientY/window.innerHeight,f=(t-.5)*o+.5;M.u_mouse.value.set(f,n),k.u_mouse.value.set(f,n)}let v=null;function z(r,o){const t=e.getPixelRatio()||window.devicePixelRatio||1,n=Math.max(1,Math.floor(r*t)),f=Math.max(1,Math.floor(o*t));a?.setSize?.(n,f),M.u_resolution.value.set(n,f),k.u_resolution.value.set(n,f)}function I(){const r=window.innerWidth,o=window.innerHeight;e.domElement.classList.contains("blackwall-canvas")||e.domElement.classList.add("blackwall-canvas");const t=Math.max(1,Math.floor(r*s.current)),n=Math.max(1,Math.floor(o*s.current));e.setPixelRatio(window.devicePixelRatio||1),e.setSize(t,n,!1),h<=0?z(t,n):(v&&clearTimeout(v),v=setTimeout(()=>{z(t,n),v=null},h))}return window.addEventListener("mousemove",G),window.addEventListener("resize",I),()=>{window.removeEventListener("mousemove",G),window.removeEventListener("resize",I),c&&e.domElement&&c.removeChild(e.domElement),m.dispose(),_.dispose(),a.dispose(),H.dispose(),e.dispose()}},[]),$.jsx("div",{ref:l,className:"fixed inset-0 -z-10 pointer-events-none"})}export{ae as default};
