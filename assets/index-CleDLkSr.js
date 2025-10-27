const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Home-C0wWCvqA.js","./three-iG4XuGaA.js","./router_motion-CiPdkZaX.js","./react-gH-7aFTg.js","./TopNav-B-hkUxdn.js","./TopNav-COwSQML_.css","./Home-CjsWNQSh.css","./Work-DtMU6m3Z.js","./index-Dm7LAOgs.js","./index-BqF2rCIh.css","./Work-ra8WPt_B.css","./Info-CmBMlWn4.js","./Contact-wtw5UFVp.js","./Entry-cnaTpIhO.js","./Entry-CXIPLmfc.css"])))=>i.map(i=>d[i]);
import{r,j as l,R as _,O as H,c as q,a as W}from"./router_motion-CiPdkZaX.js";import{W as K,S as X,O as Y,M as $,P as J,a as I,C as E,V as b,T as F,L as P,R as Q,_ as x,b as Z}from"./three-iG4XuGaA.js";import"./react-gH-7aFTg.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const p of e.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function u(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const ee=r.createContext(null);function te({children:n}){const[o,s]=r.useState("dark"),u={theme:o,setTheme:s};return l.jsx(ee.Provider,{value:u,children:n})}const ne=`precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform float uProgress;
uniform vec2 uResolution;
uniform vec2 uRectCenter;
uniform vec2 uRectSize;
uniform sampler2D uDispMap;
uniform float uUseDisp;
uniform float uStrength;
uniform float uGrid;
uniform sampler2D uThumb;
uniform float uUseThumb;
uniform vec3 uAccentColor;

float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
float noise(vec2 p){
    vec2 i=floor(p);vec2 f=fract(p);
    float a=hash(i);float b=hash(i+vec2(1.,0.));
    float c=hash(i+vec2(0.,1.));float d=hash(i+vec2(1.,1.));
    vec2 u=f*f*(3.-2.*f);
    return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;
}
float fbm(vec2 p){float v=0.;float amp=.5;for(int i=0;i<5;i++){v+=amp*noise(p);p*=2.;amp*=.5;}return v;}

void main(){
    vec2 uv=vUv;
    float n=fbm(uv*6.+uTime*.4);
    float dispSrc=n;
    if(uUseDisp>.5){dispSrc=texture2D(uDispMap,uv).r;}
    float disp=(dispSrc-.5)*uStrength*uProgress;
    vec2 displaced=uv+vec2(disp*.6,disp*-.6);
    float dissolveNoise=fbm(displaced*12.+uTime*1.3);
    float noiseInfluence=mix(.05,.45,uProgress);
    float grid=max(1.,uGrid);
    vec2 tileUV=uv*vec2(grid*(uResolution.x/uResolution.y),grid);
    vec2 tileId=floor(tileUV);
    float tileSeed=hash(tileId);
    float phaseDis=smoothstep(.05,.65,uProgress);
    float phaseFade=smoothstep(.65,.95,uProgress);
    float revealThresh=smoothstep(tileSeed-.15,tileSeed+.15,uProgress);
    float localP=smoothstep(revealThresh-.25,revealThresh+.75,uProgress)*(phaseDis+phaseFade);
    float angle=tileSeed*6.2831853;
    vec2 dir=vec2(cos(angle),sin(angle));
    float scatterBase=pow(uProgress,1.1)*(.4+fbm(tileId*.6+uTime*.25));
    float scatter=scatterBase*(.35+.65*phaseDis);
    vec2 scatterOffset=dir*scatter*.12;
    vec2 rectHalf=uRectSize*.5;
    vec2 d=(uv-uRectCenter)/max(rectHalf,vec2(.001));
    float distToRect=length(d);
    float falloff=smoothstep(1.6,0.,distToRect);
    float threshold=clamp(uProgress*falloff+(dissolveNoise-.5)*noiseInfluence,0.,1.);
    vec3 base=vec3(.02,.06,.12);
    vec3 tint=uAccentColor;// dynamic accent color from CSS
    vec3 col=mix(base,tint,clamp(n*1.2,0.,1.));
    vec3 revealColor=mix(vec3(.10,.28,.48),vec3(.55,.9,1.),phaseDis+.6*phaseFade);
    if(uUseThumb>.5){
        // map current uv into rect space to sample thumbnail proportionally where available
        vec2 rectMin=uRectCenter-uRectSize*.5;
        vec2 rectUV=(uv-rectMin)/uRectSize;// 0..1 inside the rect
        if(rectUV.x>=0.&&rectUV.x<=1.&&rectUV.y>=0.&&rectUV.y<=1.){
            vec3 tCol=texture2D(uThumb,rectUV).rgb;
            // mild contrast boost
            tCol=mix(tCol*.9,tCol*1.1,phaseDis);
            revealColor=tCol;
        }
    }
    float revealLum=mix(0.,1.,smoothstep(0.,1.,localP))*step(.5,revealThresh);
    vec2 cell=fract(uv*vec2(grid*(uResolution.x/uResolution.y),grid));
    float edge=max(abs(cell.x-.5),abs(cell.y-.5));
    float tileMask=smoothstep(.46,.50,edge);
    float tileEdge=smoothstep(.42,.46,edge)-smoothstep(.50,.54,edge);
    float baseAlpha=smoothstep(0.,1.,threshold);
    float alpha=(baseAlpha*tileMask+tileEdge*.85*revealLum)*(phaseDis+phaseFade);
    vec3 glow=revealColor*(.5*revealLum+.5*pow(revealLum,1.6));
    vec3 finalCol=mix(col,col+glow,revealLum);
    finalCol+=tileEdge*.08*revealColor*revealLum;
    float fadeOut=smoothstep(.92,1.,uProgress);
    finalCol=mix(finalCol,vec3(0.),fadeOut*.85);
    alpha=mix(alpha,alpha*(1.-fadeOut)+fadeOut,1.);
    gl_FragColor=vec4(finalCol,clamp(alpha,0.,1.));
}
`;function re(){const n=()=>({width:typeof window<"u"?window.innerWidth:0,height:typeof window<"u"?window.innerHeight:0,devicePixelRatio:typeof window<"u"&&window.devicePixelRatio||1}),[o,s]=r.useState(n);return r.useEffect(()=>{if(typeof window>"u")return;let u=0;const t=()=>{u||(u=requestAnimationFrame(()=>{u=0,s(n())}))};window.addEventListener("resize",t);let e=null;try{e=window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),e&&e.addEventListener&&e.addEventListener("change",t)}catch{}return()=>{window.removeEventListener("resize",t),e&&e.removeEventListener&&e.removeEventListener("change",t),u&&cancelAnimationFrame(u)}},[]),o}function k({createMaterial:n,zIndex:o=1e5,transparent:s=!0}){const u=r.useRef(null),t=r.useRef(null),e=r.useRef({}),p=r.useRef(null),d=r.useRef(0),h=r.useRef([]),f=r.useRef(0),{width:i,height:g,devicePixelRatio:v}=re();r.useEffect(()=>{const c=u.current;if(!c||typeof n!="function")return;const a=new K({alpha:s,antialias:!0});a.setPixelRatio(v||1),a.setSize(i,g),Object.assign(a.domElement.style,{position:"fixed",inset:"0",pointerEvents:"none",zIndex:String(o)}),c.appendChild(a.domElement),p.current=a;const y=new X,S=new Y(-1,1,1,-1,0,1),w=n({width:i,height:g});t.current=w,e.current=w.uniforms||{},y.add(new $(new J(2,2),w));const D=R=>{const G=f.current?R-f.current:16.7;if(f.current=R,w.uniforms?.uTime&&(w.uniforms.uTime.value=R*.001),h.current.length)for(const N of h.current)try{N.fn(R,G)}catch{}a.render(y,S),d.current=requestAnimationFrame(D)};return d.current=requestAnimationFrame(D),()=>{cancelAnimationFrame(d.current);try{w.dispose()}catch{}try{a.dispose()}catch{}a.domElement&&c.contains(a.domElement)&&c.removeChild(a.domElement),t.current=null,p.current=null}},[n,i,g,v,s,o]),r.useEffect(()=>{const c=p.current,a=t.current;!c||!a||(c.setPixelRatio(v||1),c.setSize(i,g),a.uniforms?.uResolution&&a.uniforms.uResolution.value.set(i,g))},[i,g,v]);function m(c){if(typeof c!="function")return()=>{};const a=Math.random().toString(36).slice(2);return h.current.push({id:a,fn:c}),()=>{h.current=h.current.filter(y=>y.id!==a)}}return{mountRef:u,materialRef:t,uniforms:e,addFrameCallback:m}}function oe(n,o){if(!n||!o||!o.width||!o.height)return{cx:.5,cy:.5,w:0,h:0};const s=n.centerX/o.width,u=1-n.centerY/o.height,t=n.width/o.width,e=n.height/o.height;return{cx:s,cy:u,w:t,h:e}}function L(n,o){if(!n||!n.uRectCenter||!n.uRectSize)return;const{cx:s,cy:u,w:t,h:e}=o||{cx:.5,cy:.5,w:0,h:0};n.uRectCenter.value.set(s,u),n.uRectSize.value.set(t,e)}function M(n,o){if(!o){L(n,null);return}const s=oe(o.rect,o.viewport);L(n,s)}function se({active:n=!1,duration:o=800}){const{payload:s}=C(),{mountRef:u,materialRef:t,uniforms:e,addFrameCallback:p}=k({createMaterial:({width:d,height:h})=>new I({transparent:!0,uniforms:{uTime:{value:0},uProgress:{value:0},uResolution:{value:new b(d,h)},uRectCenter:{value:new b(.5,.5)},uRectSize:{value:new b(0,0)},uGrid:{value:36},uDispMap:{value:null},uUseDisp:{value:0},uStrength:{value:.25},uThumb:{value:null},uUseThumb:{value:0},uAccentColor:{value:new E(.05,.22,.38)}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position,1.0); }",fragmentShader:ne}),zIndex:99999});return r.useEffect(()=>{t.current&&M(e.current,s)},[s,t,e]),r.useEffect(()=>{if(!t.current)return;let d=null;const h=s?.dispSrc||"/img/displace.png",f=new F;try{d=f.load(h,i=>{i.minFilter=P,i.magFilter=P,i.wrapS=i.wrapT=Q,e.current?.uDispMap&&(e.current.uDispMap.value=i),e.current?.uUseDisp&&(e.current.uUseDisp.value=1)},void 0,()=>{e.current?.uUseDisp&&(e.current.uUseDisp.value=0)})}catch{e.current?.uUseDisp&&(e.current.uUseDisp.value=0)}return()=>{if(d)try{d.dispose()}catch{}}},[s,t,e]),r.useEffect(()=>{if(!t.current)return;let d=null;if(s?.thumbSrc)d=new F().load(s.thumbSrc,f=>{f.minFilter=P,f.magFilter=P,f.generateMipmaps=!1,e.current?.uThumb&&(e.current.uThumb.value=f),e.current?.uUseThumb&&(e.current.uUseThumb.value=1)});else if(e.current?.uUseThumb&&(e.current.uUseThumb.value=0),e.current?.uThumb?.value){try{e.current.uThumb.value.dispose()}catch{}e.current.uThumb.value=null}return()=>{if(d)try{d.dispose()}catch{}}},[s,t,e]),r.useEffect(()=>{if(!t.current)return;const d=getComputedStyle(document.documentElement).getPropertyValue("--c-BRND").trim()||"#0d365e";try{const h=new E(d);e.current?.uAccentColor&&e.current.uAccentColor.value.copy(h)}catch{}},[s,t,e]),r.useEffect(()=>{if(!t.current)return;const d=performance.now(),h=e.current?.uProgress?e.current.uProgress.value:0,f=n?1:0,i=p(g=>{const v=Math.min(1,(g-d)/o);e.current?.uProgress&&(e.current.uProgress.value=h+(f-h)*v),v>=1&&i()});return()=>i()},[n,o,t,e,p]),l.jsx("div",{ref:u,className:"shader-transition"})}const ie=`precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform float uOutProgress;
uniform float uInProgress;
uniform vec2 uResolution;
uniform vec2 uRectCenter;
uniform vec2 uRectSize;
uniform float uGrid;
uniform vec3 uAccentColor;
uniform float uCoverageThreshold;

float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}

void main(){
    vec2 uv=vUv;
    float grid=max(1.,uGrid);
    vec2 tileUV=uv*vec2(grid*(uResolution.x/uResolution.y),grid);
    vec2 tileId=floor(tileUV);
    float seed=hash(tileId);
    
    // Tile geometry helpers
    vec2 cell=fract(tileUV);
    float edge=max(abs(cell.x-.5),abs(cell.y-.5));
    float lineMask=smoothstep(.48,.50,edge)-smoothstep(.50,.52,edge);// thin line
    float fillMask=smoothstep(.46,.50,edge);// interior
    
    // OUT PHASE (Home overlay)
    float outGridAppear=smoothstep(0.,.12,uOutProgress);// lines fade in
    float outFillAppear=smoothstep(.12,.55,uOutProgress)*smoothstep(seed-.10,seed+.10,uOutProgress);// colored fill per seed order
    float toBlack=smoothstep(.55,1.,uOutProgress)*smoothstep(seed-.5,seed+.05,uOutProgress);// turn each tile black
    
    // IN PHASE (Work overlay)
    float inBrighten=smoothstep(0.,.35,uInProgress)*smoothstep(seed-.10,seed+.10,uInProgress);// brighten tiles again
    float inDissolve=smoothstep(.35,.75,uInProgress)*(1.-smoothstep(seed-.10,seed+.10,uInProgress));// dissolve away
    float inFadeLines=smoothstep(.75,1.,uInProgress);// fade residual lines
    
    // Colors
    vec3 lineColor=mix(vec3(0.),vec3(.15,.18,.22),outGridAppear*(1.-inFadeLines));
    vec3 activeFillColor=uAccentColor;// dynamic brand accent
    vec3 brightenFillColor=mix(uAccentColor,vec3(1.),.65);// lighten accent for in phase
    
    // Compose OUT tile color (before black)
    vec3 outFill=mix(vec3(0.),activeFillColor,outFillAppear);
    // Transition fill to black
    outFill=mix(outFill,vec3(0.),toBlack);
    
    // Compose IN tile color starting from black
    vec3 inFill=mix(vec3(0.),brightenFillColor,inBrighten);
    // Dissolve reduces brightness
    inFill=mix(inFill,vec3(0.),inDissolve);
    
    // Blend phases: out phase dominates while uOutProgress>0 and before uInProgress starts.
    float phaseSelector=step(.001,uOutProgress)*(1.-step(.001,uInProgress));
    vec3 fillColor=mix(inFill,outFill,phaseSelector);
    
    // Final fill with mask
    vec3 col=fillColor*fillMask+lineColor*lineMask;
    
    // Alpha logic:
    // During out phase: alpha follows grid appear & blackening (remain opaque).
    float outAlpha=outGridAppear+outFillAppear+toBlack;// approximate presence
    outAlpha=clamp(outAlpha,0.,1.);
    // During in phase: start opaque black, then fade as lines dissolve
    float inAlpha=1.-inFadeLines;// goes to 0 at end
    float alpha=mix(inAlpha,outAlpha,phaseSelector);
    
    gl_FragColor=vec4(col,alpha);
}`;function ue({grid:n=40,coverageThreshold:o=.72}){const{active:s,duration:u,payload:t}=C(),e=t?.mode==="boot",p=r.useRef(!1),d=r.useRef(t?.cycle||0),{mountRef:h,materialRef:f,uniforms:i,addFrameCallback:g}=k({createMaterial:({width:v,height:m})=>new I({transparent:!0,uniforms:{uTime:{value:0},uOutProgress:{value:0},uInProgress:{value:0},uResolution:{value:new b(v,m)},uRectCenter:{value:new b(.5,.5)},uRectSize:{value:new b(.2,.2)},uGrid:{value:n},uAccentColor:{value:new E(.08,.32,.55)},uCoverageThreshold:{value:o}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position,1.0); }",fragmentShader:ie})});return r.useEffect(()=>{if(!(!e||!f.current))try{const v=getComputedStyle(document.documentElement).getPropertyValue("--c-BRND").trim();v&&i.current?.uAccentColor&&i.current.uAccentColor.value.set(v)}catch{}},[e,t,f,i]),r.useEffect(()=>{!e||!f.current||M(i.current,t)},[t,e,f,i]),r.useEffect(()=>{if(!e||!f.current)return;const v=t?.cycle||0;if(!(s||v!==d.current)||!i.current)return;i.current.uInProgress.value=0,i.current.uOutProgress.value=0,p.current=!1,d.current=v;const c=performance.now(),a=u||1600,y=g(S=>{const w=Math.min(1,(S-c)/a);i.current&&(i.current.uOutProgress.value=w,w>=i.current.uCoverageThreshold.value&&!p.current&&(p.current=!0,window.dispatchEvent(new CustomEvent("boot:coverage",{detail:{progress:w}}))),(w>=1||!s&&v===d.current)&&y())});return()=>y()},[s,u,e,t?.cycle,f,i,g]),r.useEffect(()=>{if(!e||!f.current||!i.current||s||i.current.uOutProgress.value<.999)return;i.current.uInProgress.value=0;const v=performance.now(),m=u||1200,c=g(a=>{const y=Math.min(1,(a-v)/m);i.current&&(i.current.uInProgress.value=y,(y>=1||s)&&c())});return()=>c()},[s,u,e,f,i,g]),e?l.jsx("div",{ref:h,className:"boot-transition"}):null}const V=r.createContext(null);function C(){const n=_.useContext(V);if(!n)throw new Error("useTransition must be used within TransitionProvider");return n}function T(n){return new Promise(o=>setTimeout(o,n))}function ae({children:n}){const[o,s]=r.useState(!1),[u,t]=r.useState(800),[e,p]=r.useState(null),d=r.useCallback((m={})=>{const c=typeof m=="number"?m:m.out??600;return t(c),p(typeof m=="object"?m.payload??null:null),s(!0),T(c)},[]),h=r.useCallback((m=600)=>{t(m),s(!1),setTimeout(()=>p(null),m+20)},[]),f=r.useCallback(()=>new Promise(m=>{const c=a=>{window.removeEventListener("boot:coverage",c),m(a.detail)};window.addEventListener("boot:coverage",c)}),[]),i=r.useCallback((m={})=>{const c=m.out??u,a={...m.payload||{},mode:"boot"};return t(c),p(a),s(!0),{outPromise:T(c),coveragePromise:f()}},[u,f]),g=r.useCallback((m={})=>{s(!0);const c=m.out??u;return t(c),p(a=>a?.mode==="boot"?{...a,cycle:(a.cycle||0)+1}:{mode:"boot",rect:a?.rect||null,viewport:a?.viewport||{width:window.innerWidth,height:window.innerHeight},cycle:1}),T(c)},[u]),v={active:o,duration:u,payload:e,start:d,end:h,restartBoot:g,startBoot:i,waitForBootCoverage:f};return l.jsx(V.Provider,{value:v,children:n})}let U=!1,z=null,B=null;const A=new Set;function le(){const n=new Event("locationchange");window.dispatchEvent(n);for(const o of Array.from(A))try{o()}catch{}}function O(n){return function(){const o=(n==="pushState"?z:B).apply(this,arguments);return le(),o}}function ce(){typeof window>"u"||U||(z=window.history.pushState,B=window.history.replaceState,window.history.pushState=O("pushState"),window.history.replaceState=O("replaceState"),U=!0)}function fe(n){return A.add(n),()=>A.delete(n)}function de(){const{end:n}=C();return r.useEffect(()=>{ce();const o=()=>n(600),s=fe(o);return window.addEventListener("popstate",o),()=>{s(),window.removeEventListener("popstate",o)}},[n]),null}function me(){const{active:n,duration:o,payload:s}=C();return s?.mode==="boot"?l.jsx(ue,{grid:42}):l.jsx(se,{active:n,duration:o})}function pe(){return l.jsx(te,{children:l.jsxs(ae,{children:[l.jsx(me,{}),l.jsx(de,{}),l.jsx("main",{children:l.jsx(H,{})})]})})}const ve=r.lazy(()=>x(()=>import("./Home-C0wWCvqA.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)),j=r.lazy(()=>x(()=>import("./Work-DtMU6m3Z.js"),__vite__mapDeps([7,1,2,3,8,4,5,9,10]),import.meta.url)),he=r.lazy(()=>x(()=>import("./Info-CmBMlWn4.js"),__vite__mapDeps([11,2,3]),import.meta.url)),ge=r.lazy(()=>x(()=>import("./Contact-wtw5UFVp.js"),__vite__mapDeps([12,2,3]),import.meta.url)),we=r.lazy(()=>x(()=>import("./Entry-cnaTpIhO.js"),__vite__mapDeps([13,2,3,4,5,8,9,1,14]),import.meta.url)),ye=q([{element:l.jsx(pe,{}),children:[{path:"/",element:l.jsx(r.Suspense,{fallback:l.jsx("div",{}),children:l.jsx(ve,{})})},{path:"/work",element:l.jsx(r.Suspense,{fallback:l.jsx("div",{}),children:l.jsx(j,{})})},{path:"/work/:title",element:l.jsx(r.Suspense,{fallback:l.jsx(j,{}),children:l.jsx(we,{})})},{path:"/info",element:l.jsx(r.Suspense,{fallback:l.jsx("div",{}),children:l.jsx(he,{})})},{path:"/contact",element:l.jsx(r.Suspense,{fallback:l.jsx("div",{}),children:l.jsx(ge,{})})}]}]);Z.createRoot(document.getElementById("root")).render(l.jsx(_.StrictMode,{children:l.jsx(W,{router:ye})}));export{C as u};
