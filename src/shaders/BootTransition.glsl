precision highp float;
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
}