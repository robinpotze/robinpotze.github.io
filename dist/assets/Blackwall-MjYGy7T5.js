import{r as V,S as y,O as L,W as R,c as H,P as z,V as a,d as C,M as b,j as W}from"./index-CT0CjOgM.js";const T=`precision mediump float;\r
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
}`,A=`precision mediump float;\r
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
 `;function P(){const d=V.useRef();return V.useEffect(()=>{const o=d.current;if(!o)return;const f=new y,u=new L(-1,1,1,-1,0,1),r=new R({antialias:!0,alpha:!0}),e=.6;r.setSize(window.innerWidth*e,window.innerHeight*e),r.domElement.style.width="100vw",r.domElement.style.height="100vh",o.appendChild(r.domElement);const s=new H(window.innerWidth*e,window.innerHeight*e),c=new z(2,2),t={u_time:{value:0},u_resolution:{value:new a(window.innerWidth*e,window.innerHeight*e)},u_mouse:{value:new a(.5,.5)}},m=new C({uniforms:t,fragmentShader:A,transparent:!0}),k=new b(c,m),v=new y;v.add(k);const i={u_time:{value:0},u_resolution:{value:new a(window.innerWidth*e,window.innerHeight*e)},u_mouse:{value:new a(.5,.5)},u_flame:{value:s.texture}},w=new C({uniforms:i,fragmentShader:T,transparent:!0}),S=new b(c,w);f.add(S);let M=performance.now(),g=0;const E=30;function p(){requestAnimationFrame(p);const n=performance.now();if(n-g<1e3/E)return;g=n;const l=(n-M)*.001;t.u_time.value=l,i.u_time.value=l,r.setRenderTarget(s),r.render(v,u),r.setRenderTarget(null),r.render(f,u)}p();function h(n){const l=window.innerWidth/window.innerHeight,F=n.clientX/window.innerWidth,_=1-n.clientY/window.innerHeight,U=(F-.5)*l+.5;t.u_mouse.value.set(U,_),i.u_mouse.value.set(U,_)}function x(){r.setSize(window.innerWidth*e,window.innerHeight*e),t.u_resolution.value.set(window.innerWidth*e,window.innerHeight*e),i.u_resolution.value.set(window.innerWidth*e,window.innerHeight*e)}return window.addEventListener("mousemove",h),window.addEventListener("resize",x),()=>{window.removeEventListener("mousemove",h),window.removeEventListener("resize",x),o&&r.domElement&&o.removeChild(r.domElement),c.dispose(),m.dispose(),s.dispose(),w.dispose(),r.dispose()}},[]),W.jsx("div",{ref:d,className:"fixed inset-0 -z-10 pointer-events-none"})}export{P as default};
