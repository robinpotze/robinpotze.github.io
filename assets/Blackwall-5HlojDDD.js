import{r as u,j as J}from"./router_motion-Bmyc_1Q_.js";import{S as N,O as K,W as Q,c as Z,P as $,a as X,V as E,M as j}from"./three-Bi5B5t1l.js";import"./TopNav-ChLtcpbA.js";import"./react-gH-7aFTg.js";import"./index-D8hEsrLB.js";function ee({initialScale:x=1,enabled:p=!0,minScale:F=.25,maxScale:U=1,adaptIntervalMs:V=1e3,fpsSampleSize:y=30,targetFps:R=30,adaptThreshold:P=.85,adaptStep:b=.85}={}){const l=u.useRef(x),d=u.useRef([]),s=u.useRef(performance.now()),c=u.useRef(p);function C(){return l.current}function h(i){l.current=Math.max(F,Math.min(U,i))}function e(){c.current=!1}function w(){c.current=!0}function g(i){if(!c.current)return null;const a=d.current;a.push(i),a.length>y&&a.shift();const m=performance.now();if(m-s.current<V)return null;if(a.length>=Math.max(4,Math.floor(y/3))){const _=1e3/(a.reduce((T,S)=>T+S,0)/a.length);if(_<P*R)return h(l.current*b),d.current.length=0,s.current=m,l.current;if(_>R*1.05)return h(l.current/b),d.current.length=0,s.current=m,l.current}return null}return u.useEffect(()=>{c.current=p},[p]),{getScale:C,setScale:h,sampleFrame:g,start:w,stop:e}}const re=`precision mediump float;\r
\r
uniform vec2 u_resolution;\r
uniform float u_time;\r
uniform vec2 u_mouse;\r
uniform sampler2D u_flame;\r
\r
vec2 getAspectUV(vec2 fragCoord,vec2 resolution){\r
    vec2 uv=fragCoord/resolution;\r
    uv.x=(uv.x-.5)*(resolution.x/resolution.y)+.5;\r
    return uv;\r
}\r
\r
float random(vec2 st){\r
    return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);\r
}\r
\r
float noise(vec2 st){\r
    vec2 i=floor(st);\r
    vec2 f=fract(st);\r
    vec2 u=f*f*(3.-2.*f);\r
    return mix(\r
        mix(random(i+vec2(0.,0.)),random(i+vec2(1.,0.)),u.x),\r
        mix(random(i+vec2(0.,1.)),random(i+vec2(1.,1.)),u.x),\r
        u.y\r
    );\r
}\r
\r
float circularMask(vec2 uv,vec2 center,float radius){\r
    float dist=length(uv-center);\r
    return smoothstep(radius,radius-.1,dist);\r
}\r
\r
float dotGrid(vec2 uv,float gridSize,float dotRadius){\r
    vec2 grid=fract(uv*gridSize);\r
    vec2 centered=grid-.5;\r
    float dist=length(centered);\r
    return smoothstep(dotRadius,dotRadius-.02,dist);\r
}\r
\r
void main(){\r
    vec2 uv=getAspectUV(gl_FragCoord.xy,u_resolution);\r
    \r
    vec3 baseColor=vec3(0.,0.,0.);\r
    vec3 glitchColor=vec3(1.,0.,0.);\r
    vec3 floorColor=vec3(0.,0.,0.);\r
    \r
    float floorLine=.3;\r
    float floorSpecular=.5;\r
    \r
    float mouseMask=circularMask(uv,u_mouse,.08);\r
    \r
    vec3 flameColor=texture2D(u_flame,uv).rgb;\r
    float flameBrightness=dot(flameColor,vec3(.299,.587,.114));\r
    \r
    vec2 distortedUV=uv+(flameBrightness-mouseMask-.5)*.05;\r
    \r
    float dotMask=dotGrid(distortedUV,100.,.35);\r
    \r
    float wave=sin(distortedUV.x*5.+u_time*.5)*.1;\r
    distortedUV.x+=wave;\r
    \r
    float scanline=sin(distortedUV.y*u_resolution.y*-.5+u_time*5.)*.05;\r
    distortedUV.x+=scanline;\r
    \r
    float band=floor(distortedUV.y*10.);\r
    float enableBand=step(.8,fract(u_time*.1+band*.3));\r
    distortedUV.x+=sin(u_time*100.+band)*.01*enableBand;\r
    \r
    vec2 noiseUV=distortedUV+noise(distortedUV*10.+u_time)*.05;\r
    float layeredNoise=noise(noiseUV*5.)*.5+noise(noiseUV*20.)*.5;\r
    \r
    float flicker=step(1.,fract(sin(u_time*10.)*43758.5453123));\r
    \r
    vec2 redUV=distortedUV+vec2(.005,0.);\r
    vec2 blueUV=distortedUV-vec2(.005,0.);\r
    \r
    vec3 color;\r
    \r
    if(distortedUV.y<floorLine){\r
        vec2 reflectedUV=distortedUV;\r
        reflectedUV.y=floorLine-(distortedUV.y-floorLine);\r
        \r
        float ripple=sin(reflectedUV.x*20.+u_time*5.)*.02;\r
        reflectedUV.x+=ripple;\r
        reflectedUV.y+=ripple;\r
        \r
        vec3 reflectionColor=mix(baseColor,glitchColor,layeredNoise);\r
        reflectionColor.r+=redUV.x*flicker;\r
        reflectionColor.g+=distortedUV.x*flicker;\r
        reflectionColor.b+=blueUV.x*flicker;\r
        \r
        float reflectionFalloff=smoothstep(0.,floorLine,distortedUV.y);\r
        float reflectionStrength=floorSpecular*reflectionFalloff;\r
        \r
        color=mix(floorColor,reflectionColor,reflectionStrength);\r
        \r
        vec2 reflectedFlameUV=distortedUV;\r
        reflectedFlameUV.y=floorLine+(floorLine-distortedUV.y);\r
        \r
        vec3 reflectedFlameColor=texture2D(u_flame,reflectedFlameUV).rgb;\r
        \r
        color+=reflectedFlameColor;\r
    }else{\r
        color=mix(baseColor,glitchColor,layeredNoise);\r
        color+=flameColor;\r
        \r
        color.r+=redUV.x*flicker;\r
        color.g+=distortedUV.x*flicker;\r
        color.b+=blueUV.x*flicker;\r
    }\r
    \r
    color=mix(color,baseColor,mouseMask);\r
    // color = mix(color, flameColor, .1);\r
    \r
    // color += flameColor * dotMask;\r
    color*=dotMask;\r
    \r
    color*=1.;\r
    \r
    gl_FragColor=vec4(color,1);\r
}`,ne=`precision mediump float;\r
\r
uniform vec2 u_resolution;\r
uniform float u_time;\r
uniform vec2 u_mouse;\r
\r
vec2 getAspectUV(vec2 fragCoord,vec2 resolution){\r
    vec2 uv = fragCoord/resolution;\r
    uv.x = (uv.x-.5)*(resolution.x/resolution.y)+.5;\r
    return uv;\r
}\r
\r
/* original noise kept intact */\r
float noise(vec3 p)\r
{\r
    vec3 i=floor(p);\r
    vec4 a=dot(i,vec3(2.,57.,21.))+vec4(0.,57.,21.,78.);\r
    vec3 f=cos((p-i)*acos(-1.))*(-.5)+.5;\r
    a=mix(sin(cos(a)*a),sin(cos(1.+a)*(1.+a)),f.x);\r
    a.xy=mix(a.xz,a.yw,f.y);\r
    return mix(a.x,a.y,f.z);\r
}\r
\r
float sphere(vec3 position,vec4 spread){\r
    return length(spread.xyz-position)-spread.w;\r
}\r
\r
float flame(vec3 position){\r
    float d = sphere(position*vec3(.5,.5,1.), vec4(0.,-1.,0.,1.));\r
    return d + (noise(position+vec3(0.,u_time*2.,0.)) + noise(position*3.)*.5) * .25 * (position.y);\r
}\r
\r
float scene_from_flame(vec3 p, float f){       // helper using precomputed flame\r
    return min(100.-length(p), abs(f));\r
}\r
\r
vec4 raymarch(vec3 org, vec3 dir){\r
    const float HIT_EPS = 0.02;   // matches original eps\r
    const float FAR     = 100.0;\r
    const int   MAX_IT  = 32;\r
\r
    float t = 0.0;\r
    float glow = .0;\r
    bool  glowing = false;\r
\r
    for (int i=0; i<MAX_IT; i++){\r
        vec3 p = org + dir * t;\r
\r
        // one flame() eval reused for both scene and glow test\r
        float f = flame(p);\r
        float d = scene_from_flame(p, f) + HIT_EPS;\r
\r
        // preserve original glow behavior: once inside flame, ramp by i/64\r
        if (d > HIT_EPS) {\r
            if (f < 0.0) glowing = true;\r
            if (glowing) glow = float(i) / 64.0;\r
        }\r
\r
        if (d < HIT_EPS || t > FAR) break;  // early exit\r
        t += d;                             // step along the ray\r
    }\r
\r
    return vec4(org + dir * t, glow);\r
}\r
\r
void main(){\r
    vec2 uv = getAspectUV(gl_FragCoord.xy, u_resolution)*2.-1.;\r
    vec3 org = vec3(0.,-2.,4.);\r
    vec3 dir = normalize(vec3(uv.x*1.6,-uv.y,-1.5));\r
\r
    vec4 p = raymarch(org, dir);\r
    float glow = p.w;\r
\r
    vec4 col = mix(vec4(1.,1.,1.,1.), vec4(.0314,.8863,1.,1.), p.y*.02+.4);\r
    gl_FragColor = mix(vec4(0.), col, pow(glow*2., 4.));\r
}\r
 `;function se({renderScale:x=1,resizeDebounceMs:p=100,adaptivityEnabled:F=!0,minRenderScale:U=.25,maxRenderScale:V=1,adaptIntervalMs:y=1e3,fpsSampleSize:R=30,adaptThreshold:P=.85,adaptStep:b=.85}={}){const l=u.useRef(),d=ee({initialScale:x,enabled:F,minScale:U,maxScale:V,adaptIntervalMs:y,fpsSampleSize:R,targetFps:30,adaptThreshold:P,adaptStep:b}),s=u.useRef(d.getScale());return u.useEffect(()=>{const c=l.current;if(!c)return;const C=new N,h=new K(-1,1,1,-1,0,1),e=new Q({antialias:!0,alpha:!1});e.setClearColor(0,1),e.setPixelRatio(window.devicePixelRatio||1);const w=Math.max(1,Math.floor(window.innerWidth*x)),g=Math.max(1,Math.floor(window.innerHeight*x));e.setSize(w,g,!1),e.domElement.classList.add("blackwall-canvas"),c.appendChild(e.domElement);const i=e.getPixelRatio()||window.devicePixelRatio||1,a=new Z(Math.max(1,Math.floor(w*i)),Math.max(1,Math.floor(g*i))),m=new $(2,2),M={u_time:{value:0},u_resolution:{value:new E(Math.max(1,Math.floor(w*i)),Math.max(1,Math.floor(g*i)))},u_mouse:{value:new E(.5,.5)}},_=new X({uniforms:M,fragmentShader:ne,transparent:!0}),T=new j(m,_),S=new N;S.add(T);const k={u_time:{value:0},u_resolution:{value:new E(Math.max(1,Math.floor(w*i)),Math.max(1,Math.floor(g*i)))},u_mouse:{value:new E(.5,.5)},u_flame:{value:a.texture}},H=new X({uniforms:k,fragmentShader:re,transparent:!0}),O=new j(m,H);C.add(O);let q=performance.now(),W=0;const Y=30;let L=s.current;function A(t){const n=Math.max(U,Math.min(V,t));if(Math.abs(n-L)<.001)return!1;s.current=n,L=n,d.setScale(n);const o=window.innerWidth,r=window.innerHeight;e.domElement.classList.contains("blackwall-canvas")||e.domElement.classList.add("blackwall-canvas");const f=Math.max(1,Math.floor(o*L)),D=Math.max(1,Math.floor(r*L));return e.setPixelRatio(window.devicePixelRatio||1),e.setSize(f,D,!1),v&&(clearTimeout(v),v=null),z(f,D),!0}function B(){requestAnimationFrame(B);const t=performance.now(),n=t-W;if(n<1e3/Y)return;W=t;const o=(t-q)*.001,r=d.sampleFrame(n);r!=null&&A(r),M.u_time.value=o,k.u_time.value=o,e.setRenderTarget(a),e.render(S,h),e.setRenderTarget(null),e.render(C,h)}A(s.current),B();function G(t){const n=window.innerWidth/window.innerHeight,o=t.clientX/window.innerWidth,r=1-t.clientY/window.innerHeight,f=(o-.5)*n+.5;M.u_mouse.value.set(f,r),k.u_mouse.value.set(f,r)}let v=null;function z(t,n){const o=e.getPixelRatio()||window.devicePixelRatio||1,r=Math.max(1,Math.floor(t*o)),f=Math.max(1,Math.floor(n*o));a?.setSize?.(r,f),M.u_resolution.value.set(r,f),k.u_resolution.value.set(r,f)}function I(){const t=window.innerWidth,n=window.innerHeight;e.domElement.classList.contains("blackwall-canvas")||e.domElement.classList.add("blackwall-canvas");const o=Math.max(1,Math.floor(t*s.current)),r=Math.max(1,Math.floor(n*s.current));e.setPixelRatio(window.devicePixelRatio||1),e.setSize(o,r,!1),p<=0?z(o,r):(v&&clearTimeout(v),v=setTimeout(()=>{z(o,r),v=null},p))}return window.addEventListener("mousemove",G),window.addEventListener("resize",I),()=>{window.removeEventListener("mousemove",G),window.removeEventListener("resize",I),c&&e.domElement&&c.removeChild(e.domElement),m.dispose(),_.dispose(),a.dispose(),H.dispose(),e.dispose()}},[]),J.jsx("div",{ref:l,className:"fixed inset-0 -z-10 pointer-events-none"})}export{se as default};
