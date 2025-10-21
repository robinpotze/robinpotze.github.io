precision highp float;
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
