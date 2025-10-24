const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-B3MbQ4r_.js","assets/three-Bi5B5t1l.js","assets/router_motion-Bmyc_1Q_.js","assets/react-gH-7aFTg.js","assets/TopNav-ChLtcpbA.js","assets/TopNav-COwSQML_.css","assets/Home-CjsWNQSh.css","assets/Work-slKlcO3f.js","assets/index-64hQ5Xn8.js","assets/index-BqF2rCIh.css","assets/Work-ra8WPt_B.css","assets/Info-eH5USjoj.js","assets/Contact-CRTF3wpz.js","assets/Entry-ErlSNlir.js","assets/Entry-CXIPLmfc.css"])))=>i.map(i=>d[i]);
import{r as n,j as l,R as _,O as H,c as q,a as W}from"./router_motion-Bmyc_1Q_.js";import{W as K,S as X,O as Y,M as $,P as J,a as I,C as E,V as b,T as F,L as P,R as Q,_ as x,b as Z}from"./three-Bi5B5t1l.js";import"./react-gH-7aFTg.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const p of e.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function s(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function u(r){if(r.ep)return;r.ep=!0;const e=s(r);fetch(r.href,e)}})();const ee=n.createContext(null);function re({children:t}){const[o,s]=n.useState("dark"),u={theme:o,setTheme:s};return l.jsx(ee.Provider,{value:u,children:t})}const te=`precision highp float;\r
varying vec2 vUv;\r
uniform float uTime;\r
uniform float uProgress;\r
uniform vec2 uResolution;\r
uniform vec2 uRectCenter;\r
uniform vec2 uRectSize;\r
uniform sampler2D uDispMap;\r
uniform float uUseDisp;\r
uniform float uStrength;\r
uniform float uGrid;\r
uniform sampler2D uThumb;\r
uniform float uUseThumb;\r
uniform vec3 uAccentColor;\r
\r
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}\r
float noise(vec2 p){\r
    vec2 i=floor(p);vec2 f=fract(p);\r
    float a=hash(i);float b=hash(i+vec2(1.,0.));\r
    float c=hash(i+vec2(0.,1.));float d=hash(i+vec2(1.,1.));\r
    vec2 u=f*f*(3.-2.*f);\r
    return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;\r
}\r
float fbm(vec2 p){float v=0.;float amp=.5;for(int i=0;i<5;i++){v+=amp*noise(p);p*=2.;amp*=.5;}return v;}\r
\r
void main(){\r
    vec2 uv=vUv;\r
    float n=fbm(uv*6.+uTime*.4);\r
    float dispSrc=n;\r
    if(uUseDisp>.5){dispSrc=texture2D(uDispMap,uv).r;}\r
    float disp=(dispSrc-.5)*uStrength*uProgress;\r
    vec2 displaced=uv+vec2(disp*.6,disp*-.6);\r
    float dissolveNoise=fbm(displaced*12.+uTime*1.3);\r
    float noiseInfluence=mix(.05,.45,uProgress);\r
    float grid=max(1.,uGrid);\r
    vec2 tileUV=uv*vec2(grid*(uResolution.x/uResolution.y),grid);\r
    vec2 tileId=floor(tileUV);\r
    float tileSeed=hash(tileId);\r
    float phaseDis=smoothstep(.05,.65,uProgress);\r
    float phaseFade=smoothstep(.65,.95,uProgress);\r
    float revealThresh=smoothstep(tileSeed-.15,tileSeed+.15,uProgress);\r
    float localP=smoothstep(revealThresh-.25,revealThresh+.75,uProgress)*(phaseDis+phaseFade);\r
    float angle=tileSeed*6.2831853;\r
    vec2 dir=vec2(cos(angle),sin(angle));\r
    float scatterBase=pow(uProgress,1.1)*(.4+fbm(tileId*.6+uTime*.25));\r
    float scatter=scatterBase*(.35+.65*phaseDis);\r
    vec2 scatterOffset=dir*scatter*.12;\r
    vec2 rectHalf=uRectSize*.5;\r
    vec2 d=(uv-uRectCenter)/max(rectHalf,vec2(.001));\r
    float distToRect=length(d);\r
    float falloff=smoothstep(1.6,0.,distToRect);\r
    float threshold=clamp(uProgress*falloff+(dissolveNoise-.5)*noiseInfluence,0.,1.);\r
    vec3 base=vec3(.02,.06,.12);\r
    vec3 tint=uAccentColor;// dynamic accent color from CSS\r
    vec3 col=mix(base,tint,clamp(n*1.2,0.,1.));\r
    vec3 revealColor=mix(vec3(.10,.28,.48),vec3(.55,.9,1.),phaseDis+.6*phaseFade);\r
    if(uUseThumb>.5){\r
        // map current uv into rect space to sample thumbnail proportionally where available\r
        vec2 rectMin=uRectCenter-uRectSize*.5;\r
        vec2 rectUV=(uv-rectMin)/uRectSize;// 0..1 inside the rect\r
        if(rectUV.x>=0.&&rectUV.x<=1.&&rectUV.y>=0.&&rectUV.y<=1.){\r
            vec3 tCol=texture2D(uThumb,rectUV).rgb;\r
            // mild contrast boost\r
            tCol=mix(tCol*.9,tCol*1.1,phaseDis);\r
            revealColor=tCol;\r
        }\r
    }\r
    float revealLum=mix(0.,1.,smoothstep(0.,1.,localP))*step(.5,revealThresh);\r
    vec2 cell=fract(uv*vec2(grid*(uResolution.x/uResolution.y),grid));\r
    float edge=max(abs(cell.x-.5),abs(cell.y-.5));\r
    float tileMask=smoothstep(.46,.50,edge);\r
    float tileEdge=smoothstep(.42,.46,edge)-smoothstep(.50,.54,edge);\r
    float baseAlpha=smoothstep(0.,1.,threshold);\r
    float alpha=(baseAlpha*tileMask+tileEdge*.85*revealLum)*(phaseDis+phaseFade);\r
    vec3 glow=revealColor*(.5*revealLum+.5*pow(revealLum,1.6));\r
    vec3 finalCol=mix(col,col+glow,revealLum);\r
    finalCol+=tileEdge*.08*revealColor*revealLum;\r
    float fadeOut=smoothstep(.92,1.,uProgress);\r
    finalCol=mix(finalCol,vec3(0.),fadeOut*.85);\r
    alpha=mix(alpha,alpha*(1.-fadeOut)+fadeOut,1.);\r
    gl_FragColor=vec4(finalCol,clamp(alpha,0.,1.));\r
}\r
`;function ne(){const t=()=>({width:typeof window<"u"?window.innerWidth:0,height:typeof window<"u"?window.innerHeight:0,devicePixelRatio:typeof window<"u"&&window.devicePixelRatio||1}),[o,s]=n.useState(t);return n.useEffect(()=>{if(typeof window>"u")return;let u=0;const r=()=>{u||(u=requestAnimationFrame(()=>{u=0,s(t())}))};window.addEventListener("resize",r);let e=null;try{e=window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),e&&e.addEventListener&&e.addEventListener("change",r)}catch{}return()=>{window.removeEventListener("resize",r),e&&e.removeEventListener&&e.removeEventListener("change",r),u&&cancelAnimationFrame(u)}},[]),o}function k({createMaterial:t,zIndex:o=1e5,transparent:s=!0}){const u=n.useRef(null),r=n.useRef(null),e=n.useRef({}),p=n.useRef(null),d=n.useRef(0),h=n.useRef([]),f=n.useRef(0),{width:i,height:g,devicePixelRatio:v}=ne();n.useEffect(()=>{const c=u.current;if(!c||typeof t!="function")return;const a=new K({alpha:s,antialias:!0});a.setPixelRatio(v||1),a.setSize(i,g),Object.assign(a.domElement.style,{position:"fixed",inset:"0",pointerEvents:"none",zIndex:String(o)}),c.appendChild(a.domElement),p.current=a;const y=new X,S=new Y(-1,1,1,-1,0,1),w=t({width:i,height:g});r.current=w,e.current=w.uniforms||{},y.add(new $(new J(2,2),w));const D=R=>{const G=f.current?R-f.current:16.7;if(f.current=R,w.uniforms?.uTime&&(w.uniforms.uTime.value=R*.001),h.current.length)for(const N of h.current)try{N.fn(R,G)}catch{}a.render(y,S),d.current=requestAnimationFrame(D)};return d.current=requestAnimationFrame(D),()=>{cancelAnimationFrame(d.current);try{w.dispose()}catch{}try{a.dispose()}catch{}a.domElement&&c.contains(a.domElement)&&c.removeChild(a.domElement),r.current=null,p.current=null}},[t,i,g,v,s,o]),n.useEffect(()=>{const c=p.current,a=r.current;!c||!a||(c.setPixelRatio(v||1),c.setSize(i,g),a.uniforms?.uResolution&&a.uniforms.uResolution.value.set(i,g))},[i,g,v]);function m(c){if(typeof c!="function")return()=>{};const a=Math.random().toString(36).slice(2);return h.current.push({id:a,fn:c}),()=>{h.current=h.current.filter(y=>y.id!==a)}}return{mountRef:u,materialRef:r,uniforms:e,addFrameCallback:m}}function oe(t,o){if(!t||!o||!o.width||!o.height)return{cx:.5,cy:.5,w:0,h:0};const s=t.centerX/o.width,u=1-t.centerY/o.height,r=t.width/o.width,e=t.height/o.height;return{cx:s,cy:u,w:r,h:e}}function L(t,o){if(!t||!t.uRectCenter||!t.uRectSize)return;const{cx:s,cy:u,w:r,h:e}=o||{cx:.5,cy:.5,w:0,h:0};t.uRectCenter.value.set(s,u),t.uRectSize.value.set(r,e)}function M(t,o){if(!o){L(t,null);return}const s=oe(o.rect,o.viewport);L(t,s)}function se({active:t=!1,duration:o=800}){const{payload:s}=C(),{mountRef:u,materialRef:r,uniforms:e,addFrameCallback:p}=k({createMaterial:({width:d,height:h})=>new I({transparent:!0,uniforms:{uTime:{value:0},uProgress:{value:0},uResolution:{value:new b(d,h)},uRectCenter:{value:new b(.5,.5)},uRectSize:{value:new b(0,0)},uGrid:{value:36},uDispMap:{value:null},uUseDisp:{value:0},uStrength:{value:.25},uThumb:{value:null},uUseThumb:{value:0},uAccentColor:{value:new E(.05,.22,.38)}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position,1.0); }",fragmentShader:te}),zIndex:99999});return n.useEffect(()=>{r.current&&M(e.current,s)},[s,r,e]),n.useEffect(()=>{if(!r.current)return;let d=null;const h=s?.dispSrc||"/img/displace.png",f=new F;try{d=f.load(h,i=>{i.minFilter=P,i.magFilter=P,i.wrapS=i.wrapT=Q,e.current?.uDispMap&&(e.current.uDispMap.value=i),e.current?.uUseDisp&&(e.current.uUseDisp.value=1)},void 0,()=>{e.current?.uUseDisp&&(e.current.uUseDisp.value=0)})}catch{e.current?.uUseDisp&&(e.current.uUseDisp.value=0)}return()=>{if(d)try{d.dispose()}catch{}}},[s,r,e]),n.useEffect(()=>{if(!r.current)return;let d=null;if(s?.thumbSrc)d=new F().load(s.thumbSrc,f=>{f.minFilter=P,f.magFilter=P,f.generateMipmaps=!1,e.current?.uThumb&&(e.current.uThumb.value=f),e.current?.uUseThumb&&(e.current.uUseThumb.value=1)});else if(e.current?.uUseThumb&&(e.current.uUseThumb.value=0),e.current?.uThumb?.value){try{e.current.uThumb.value.dispose()}catch{}e.current.uThumb.value=null}return()=>{if(d)try{d.dispose()}catch{}}},[s,r,e]),n.useEffect(()=>{if(!r.current)return;const d=getComputedStyle(document.documentElement).getPropertyValue("--c-BRND").trim()||"#0d365e";try{const h=new E(d);e.current?.uAccentColor&&e.current.uAccentColor.value.copy(h)}catch{}},[s,r,e]),n.useEffect(()=>{if(!r.current)return;const d=performance.now(),h=e.current?.uProgress?e.current.uProgress.value:0,f=t?1:0,i=p(g=>{const v=Math.min(1,(g-d)/o);e.current?.uProgress&&(e.current.uProgress.value=h+(f-h)*v),v>=1&&i()});return()=>i()},[t,o,r,e,p]),l.jsx("div",{ref:u,className:"shader-transition"})}const ie=`precision highp float;\r
varying vec2 vUv;\r
uniform float uTime;\r
uniform float uOutProgress;\r
uniform float uInProgress;\r
uniform vec2 uResolution;\r
uniform vec2 uRectCenter;\r
uniform vec2 uRectSize;\r
uniform float uGrid;\r
uniform vec3 uAccentColor;\r
uniform float uCoverageThreshold;\r
\r
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}\r
\r
void main(){\r
    vec2 uv=vUv;\r
    float grid=max(1.,uGrid);\r
    vec2 tileUV=uv*vec2(grid*(uResolution.x/uResolution.y),grid);\r
    vec2 tileId=floor(tileUV);\r
    float seed=hash(tileId);\r
    \r
    // Tile geometry helpers\r
    vec2 cell=fract(tileUV);\r
    float edge=max(abs(cell.x-.5),abs(cell.y-.5));\r
    float lineMask=smoothstep(.48,.50,edge)-smoothstep(.50,.52,edge);// thin line\r
    float fillMask=smoothstep(.46,.50,edge);// interior\r
    \r
    // OUT PHASE (Home overlay)\r
    float outGridAppear=smoothstep(0.,.12,uOutProgress);// lines fade in\r
    float outFillAppear=smoothstep(.12,.55,uOutProgress)*smoothstep(seed-.10,seed+.10,uOutProgress);// colored fill per seed order\r
    float toBlack=smoothstep(.55,1.,uOutProgress)*smoothstep(seed-.5,seed+.05,uOutProgress);// turn each tile black\r
    \r
    // IN PHASE (Work overlay)\r
    float inBrighten=smoothstep(0.,.35,uInProgress)*smoothstep(seed-.10,seed+.10,uInProgress);// brighten tiles again\r
    float inDissolve=smoothstep(.35,.75,uInProgress)*(1.-smoothstep(seed-.10,seed+.10,uInProgress));// dissolve away\r
    float inFadeLines=smoothstep(.75,1.,uInProgress);// fade residual lines\r
    \r
    // Colors\r
    vec3 lineColor=mix(vec3(0.),vec3(.15,.18,.22),outGridAppear*(1.-inFadeLines));\r
    vec3 activeFillColor=uAccentColor;// dynamic brand accent\r
    vec3 brightenFillColor=mix(uAccentColor,vec3(1.),.65);// lighten accent for in phase\r
    \r
    // Compose OUT tile color (before black)\r
    vec3 outFill=mix(vec3(0.),activeFillColor,outFillAppear);\r
    // Transition fill to black\r
    outFill=mix(outFill,vec3(0.),toBlack);\r
    \r
    // Compose IN tile color starting from black\r
    vec3 inFill=mix(vec3(0.),brightenFillColor,inBrighten);\r
    // Dissolve reduces brightness\r
    inFill=mix(inFill,vec3(0.),inDissolve);\r
    \r
    // Blend phases: out phase dominates while uOutProgress>0 and before uInProgress starts.\r
    float phaseSelector=step(.001,uOutProgress)*(1.-step(.001,uInProgress));\r
    vec3 fillColor=mix(inFill,outFill,phaseSelector);\r
    \r
    // Final fill with mask\r
    vec3 col=fillColor*fillMask+lineColor*lineMask;\r
    \r
    // Alpha logic:\r
    // During out phase: alpha follows grid appear & blackening (remain opaque).\r
    float outAlpha=outGridAppear+outFillAppear+toBlack;// approximate presence\r
    outAlpha=clamp(outAlpha,0.,1.);\r
    // During in phase: start opaque black, then fade as lines dissolve\r
    float inAlpha=1.-inFadeLines;// goes to 0 at end\r
    float alpha=mix(inAlpha,outAlpha,phaseSelector);\r
    \r
    gl_FragColor=vec4(col,alpha);\r
}`;function ue({grid:t=40,coverageThreshold:o=.72}){const{active:s,duration:u,payload:r}=C(),e=r?.mode==="boot",p=n.useRef(!1),d=n.useRef(r?.cycle||0),{mountRef:h,materialRef:f,uniforms:i,addFrameCallback:g}=k({createMaterial:({width:v,height:m})=>new I({transparent:!0,uniforms:{uTime:{value:0},uOutProgress:{value:0},uInProgress:{value:0},uResolution:{value:new b(v,m)},uRectCenter:{value:new b(.5,.5)},uRectSize:{value:new b(.2,.2)},uGrid:{value:t},uAccentColor:{value:new E(.08,.32,.55)},uCoverageThreshold:{value:o}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position,1.0); }",fragmentShader:ie})});return n.useEffect(()=>{if(!(!e||!f.current))try{const v=getComputedStyle(document.documentElement).getPropertyValue("--c-BRND").trim();v&&i.current?.uAccentColor&&i.current.uAccentColor.value.set(v)}catch{}},[e,r,f,i]),n.useEffect(()=>{!e||!f.current||M(i.current,r)},[r,e,f,i]),n.useEffect(()=>{if(!e||!f.current)return;const v=r?.cycle||0;if(!(s||v!==d.current)||!i.current)return;i.current.uInProgress.value=0,i.current.uOutProgress.value=0,p.current=!1,d.current=v;const c=performance.now(),a=u||1600,y=g(S=>{const w=Math.min(1,(S-c)/a);i.current&&(i.current.uOutProgress.value=w,w>=i.current.uCoverageThreshold.value&&!p.current&&(p.current=!0,window.dispatchEvent(new CustomEvent("boot:coverage",{detail:{progress:w}}))),(w>=1||!s&&v===d.current)&&y())});return()=>y()},[s,u,e,r?.cycle,f,i,g]),n.useEffect(()=>{if(!e||!f.current||!i.current||s||i.current.uOutProgress.value<.999)return;i.current.uInProgress.value=0;const v=performance.now(),m=u||1200,c=g(a=>{const y=Math.min(1,(a-v)/m);i.current&&(i.current.uInProgress.value=y,(y>=1||s)&&c())});return()=>c()},[s,u,e,f,i,g]),e?l.jsx("div",{ref:h,className:"boot-transition"}):null}const V=n.createContext(null);function C(){const t=_.useContext(V);if(!t)throw new Error("useTransition must be used within TransitionProvider");return t}function T(t){return new Promise(o=>setTimeout(o,t))}function ae({children:t}){const[o,s]=n.useState(!1),[u,r]=n.useState(800),[e,p]=n.useState(null),d=n.useCallback((m={})=>{const c=typeof m=="number"?m:m.out??600;return r(c),p(typeof m=="object"?m.payload??null:null),s(!0),T(c)},[]),h=n.useCallback((m=600)=>{r(m),s(!1),setTimeout(()=>p(null),m+20)},[]),f=n.useCallback(()=>new Promise(m=>{const c=a=>{window.removeEventListener("boot:coverage",c),m(a.detail)};window.addEventListener("boot:coverage",c)}),[]),i=n.useCallback((m={})=>{const c=m.out??u,a={...m.payload||{},mode:"boot"};return r(c),p(a),s(!0),{outPromise:T(c),coveragePromise:f()}},[u,f]),g=n.useCallback((m={})=>{s(!0);const c=m.out??u;return r(c),p(a=>a?.mode==="boot"?{...a,cycle:(a.cycle||0)+1}:{mode:"boot",rect:a?.rect||null,viewport:a?.viewport||{width:window.innerWidth,height:window.innerHeight},cycle:1}),T(c)},[u]),v={active:o,duration:u,payload:e,start:d,end:h,restartBoot:g,startBoot:i,waitForBootCoverage:f};return l.jsx(V.Provider,{value:v,children:t})}let U=!1,z=null,B=null;const A=new Set;function le(){const t=new Event("locationchange");window.dispatchEvent(t);for(const o of Array.from(A))try{o()}catch{}}function O(t){return function(){const o=(t==="pushState"?z:B).apply(this,arguments);return le(),o}}function ce(){typeof window>"u"||U||(z=window.history.pushState,B=window.history.replaceState,window.history.pushState=O("pushState"),window.history.replaceState=O("replaceState"),U=!0)}function fe(t){return A.add(t),()=>A.delete(t)}function de(){const{end:t}=C();return n.useEffect(()=>{ce();const o=()=>t(600),s=fe(o);return window.addEventListener("popstate",o),()=>{s(),window.removeEventListener("popstate",o)}},[t]),null}function me(){const{active:t,duration:o,payload:s}=C();return s?.mode==="boot"?l.jsx(ue,{grid:42}):l.jsx(se,{active:t,duration:o})}function pe(){return l.jsx(re,{children:l.jsxs(ae,{children:[l.jsx(me,{}),l.jsx(de,{}),l.jsx("main",{children:l.jsx(H,{})})]})})}const ve=n.lazy(()=>x(()=>import("./Home-B3MbQ4r_.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),j=n.lazy(()=>x(()=>import("./Work-slKlcO3f.js"),__vite__mapDeps([7,1,2,3,8,4,5,9,10]))),he=n.lazy(()=>x(()=>import("./Info-eH5USjoj.js"),__vite__mapDeps([11,2,3]))),ge=n.lazy(()=>x(()=>import("./Contact-CRTF3wpz.js"),__vite__mapDeps([12,2,3]))),we=n.lazy(()=>x(()=>import("./Entry-ErlSNlir.js"),__vite__mapDeps([13,2,3,4,5,8,9,1,14]))),ye=q([{element:l.jsx(pe,{}),children:[{path:"/",element:l.jsx(n.Suspense,{fallback:l.jsx("div",{}),children:l.jsx(ve,{})})},{path:"/work",element:l.jsx(n.Suspense,{fallback:l.jsx("div",{}),children:l.jsx(j,{})})},{path:"/work/:title",element:l.jsx(n.Suspense,{fallback:l.jsx(j,{}),children:l.jsx(we,{})})},{path:"/info",element:l.jsx(n.Suspense,{fallback:l.jsx("div",{}),children:l.jsx(he,{})})},{path:"/contact",element:l.jsx(n.Suspense,{fallback:l.jsx("div",{}),children:l.jsx(ge,{})})}]}]);Z.createRoot(document.getElementById("root")).render(l.jsx(_.StrictMode,{children:l.jsx(W,{router:ye})}));export{C as u};
