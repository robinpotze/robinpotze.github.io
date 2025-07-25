precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

vec2 getAspectUV(vec2 fragCoord,vec2 resolution){
	vec2 uv=fragCoord/resolution;
	uv.x=(uv.x-.5)*(resolution.x/resolution.y)+.5;
	return uv;
}

float noise(vec3 p)
{
	vec3 i=floor(p);
	vec4 a=dot(i,vec3(2.,57.,21.))+vec4(0.,57.,21.,78.);
	vec3 f=cos((p-i)*acos(-1.))*(-.5)+.5;
	a=mix(sin(cos(a)*a),sin(cos(1.+a)*(1.+a)),f.x);
	a.xy=mix(a.xz,a.yw,f.y);
	return mix(a.x,a.y,f.z);
}

float sphere(vec3 position,vec4 spread)
{
	return length(spread.xyz-position)-spread.w;
}

float flame(vec3 position)
{
	float d=sphere(position*vec3(.5,.5,1.),vec4(0.,-1.,0.,1.));
	return d+(noise(position+vec3(0.,u_time*2.,0.))+noise(position*3.)*.5)*.25*(position.y);
}

float scene(vec3 p)
{
	return min(100.-length(p),abs(flame(p)));
}

vec4 raymarch(vec3 org,vec3 dir)
{
	float d=0.,glow=0.,eps=.02;
	vec3 p=org;
	bool glowing=false;
	
	for(int i=0;i<32;i++)
	{
		d=scene(p)+eps;
		p+=d*dir;
		if(d>eps)
		{
			if(flame(p)<.0)
			glowing=true;
			if(glowing)
			glow=float(i)/64.;
		}
	}
	return vec4(p,glow);
}

void main(){
	vec2 uv=getAspectUV(gl_FragCoord.xy,u_resolution)*2.-1.;
	
	vec3 org=vec3(0.,-2.,4.);
	vec3 dir=normalize(vec3(uv.x*1.6,-uv.y,-1.5));
	
	vec4 p=raymarch(org,dir);
	float glow=p.w;
	
	vec4 col=mix(vec4(1.,1.,1.,1.),vec4(.0314,.8863,1.,1.),p.y*.02+.4);
	
	gl_FragColor=mix(vec4(0.),col,pow(glow*2.,4.));
}