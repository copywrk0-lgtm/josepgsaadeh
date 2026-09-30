var hm=0,$h=1,fm=2;var Jh=1,dm=2,Ki=3,Di=0,In=1,Yn=2,_r=0,us=1,jh=2,Qh=3,ef=4,pm=5,Fr=100,mm=101,gm=102,_m=103,xm=104,ym=200,vm=201,Mm=202,Sm=203,ic=204,rc=205,bm=206,Tm=207,Em=208,wm=209,Am=210,Rm=211,Cm=212,Pm=213,Im=214,Sc=0,bc=1,Tc=2,hs=3,Ec=4,wc=5,Ac=6,Rc=7,tf=0,Lm=1,Dm=2,xr=0,Nm=1,Um=2,Om=3,Fm=4,Bm=5,km=6,zm=7,Bh="attached",Vm="detached",nf=300,ys=301,vs=302,Cc=303,Pc=304,Ha=306,Br=1e3,Hi=1001,uo=1002,un=1003,Ic=1004;var Ms=1005;var Cn=1006,Ao=1007;var Oi=1008;var Fi=1009,rf=1010,sf=1011,Ro=1012,Lc=1013,Hr=1014,xi=1015,Co=1016,Dc=1017,Nc=1018,Po=1020,of=35902,af=35899,lf=1021,cf=1022,ri=1023,ho=1026,Io=1027,Uc=1028,Oc=1029,uf=1030,Fc=1031;var Bc=1033,Ga=33776,Wa=33777,Xa=33778,qa=33779,kc=35840,zc=35841,Vc=35842,Hc=35843,Gc=36196,Wc=37492,Xc=37496,qc=37808,Yc=37809,Zc=37810,Kc=37811,$c=37812,Jc=37813,jc=37814,Qc=37815,eu=37816,tu=37817,nu=37818,iu=37819,ru=37820,su=37821,ou=36492,au=36494,lu=36495,cu=36283,uu=36284,hu=36285,fu=36286;var fs=2300,ds=2301,nc=2302,kh=2400,zh=2401,Vh=2402,Hm=2500;var hf=0,Ya=1,Lo=2,Gm=3200,Wm=3201;var ff=0,Xm=1,yr="",zt="srgb",hn="srgb-linear",ma="linear",Mt="srgb";var cs=7680;var Hh=519,qm=512,Ym=513,Zm=514,df=515,Km=516,$m=517,Jm=518,jm=519,sc=35044;var pf="300 es",Ii=2e3,ga=2001;var fr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ap=1234567,lo=Math.PI/180,ps=180/Math.PI;function Li(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function ct(s,e,t){return Math.max(e,Math.min(t,s))}function mf(s,e){return(s%e+e)%e}function U0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function O0(s,e,t){return s!==e?(t-s)/(e-s):0}function pa(s,e,t){return(1-t)*s+t*e}function F0(s,e,t,n){return pa(s,e,1-Math.exp(-t*n))}function B0(s,e=1){return e-Math.abs(mf(s,e*2)-e)}function k0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function z0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function V0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function H0(s,e){return s+Math.random()*(e-s)}function G0(s){return s*(.5-Math.random())}function W0(s){s!==void 0&&(Ap=s);let e=Ap+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function X0(s){return s*lo}function q0(s){return s*ps}function Y0(s){return(s&s-1)===0&&s!==0}function Z0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function K0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $0(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Pi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function vt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Gr={DEG2RAD:lo,RAD2DEG:ps,generateUUID:Li,clamp:ct,euclideanModulo:mf,mapLinear:U0,inverseLerp:O0,lerp:pa,damp:F0,pingpong:B0,smoothstep:k0,smootherstep:z0,randInt:V0,randFloat:H0,randFloatSpread:G0,seededRandom:W0,degToRad:X0,radToDeg:q0,isPowerOfTwo:Y0,ceilPowerOfTwo:Z0,floorPowerOfTwo:K0,setQuaternionFromProperEuler:$0,normalize:vt,denormalize:Pi},rt=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_i=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a,p=l*f+c*d+u*g+h*_,S=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let w=Math.sqrt(b),R=Math.atan2(w,p*S);m=Math.sin(m*R)/w,a=Math.sin(a*R)/w}let v=a*S;if(l=l*m+f*v,c=c*m+d*v,u=u*m+g*v,h=h*m+_*v,m===1-a){let w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uh.copy(this).projectOnVector(e),this.sub(uh)}reflect(e){return this.sub(uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uh=new B,Rp=new _i,Je=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],b=i[4],v=i[7],w=i[2],R=i[5],A=i[8];return r[0]=o*_+a*S+l*w,r[3]=o*m+a*b+l*R,r[6]=o*p+a*v+l*A,r[1]=c*_+u*S+h*w,r[4]=c*m+u*b+h*R,r[7]=c*p+u*v+h*A,r[2]=f*_+d*S+g*w,r[5]=f*m+d*b+g*R,r[8]=f*p+d*v+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hh.makeScale(e,t)),this}rotate(e){return this.premultiply(hh.makeRotation(-e)),this}translate(e,t){return this.premultiply(hh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},hh=new Je;function gf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function fo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qm(){let s=fo("canvas");return s.style.display="block",s}var Cp={};function po(s){s in Cp||(Cp[s]=!0,console.warn(s))}function eg(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Pp=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ip=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function J0(){let s={enabled:!0,workingColorSpace:hn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Mt&&(i.r=hr(i.r),i.g=hr(i.g),i.b=hr(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(i.r=co(i.r),i.g=co(i.g),i.b=co(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yr?ma:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return po("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return po("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[hn]:{primaries:e,whitePoint:n,transfer:ma,toXYZ:Pp,fromXYZ:Ip,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:Pp,fromXYZ:Ip,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),s}var ht=J0();function hr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function co(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Zs,oc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zs===void 0&&(Zs=fo("canvas")),Zs.width=e.width,Zs.height=e.height;let i=Zs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Zs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=hr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hr(t[n]/255)*255):t[n]=hr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},j0=0,mo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=Li(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(fh(i[o].image)):r.push(fh(i[o]))}else r=fh(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function fh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?oc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Q0=0,dh=new B,Qt=class s extends fr{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Hi,i=Hi,r=Cn,o=Oi,a=ri,l=Fi,c=s.DEFAULT_ANISOTROPY,u=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Li(),this.name="",this.source=new mo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dh).x}get height(){return this.source.getSize(dh).y}get depth(){return this.source.getSize(dh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Br:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case uo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Br:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case uo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=nf;Qt.DEFAULT_ANISOTROPY=1;var gt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,v=(d+1)/2,w=(p+1)/2,R=(u+f)/4,A=(h+_)/4,E=(g+m)/4;return b>v&&b>w?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=R/n,r=A/n):v>w?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=R/i,r=E/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=A/r,i=E/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ac=class extends fr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new Qt(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new mo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wi=class extends ac{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_a=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var lc=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ai):Ai.fromBufferAttribute(r,o),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cl.copy(n.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),Pl.subVectors(this.max,oa),Ks.subVectors(e.a,oa),$s.subVectors(e.b,oa),Js.subVectors(e.c,oa),Ir.subVectors($s,Ks),Lr.subVectors(Js,$s),ss.subVectors(Ks,Js);let t=[0,-Ir.z,Ir.y,0,-Lr.z,Lr.y,0,-ss.z,ss.y,Ir.z,0,-Ir.x,Lr.z,0,-Lr.x,ss.z,0,-ss.x,-Ir.y,Ir.x,0,-Lr.y,Lr.x,0,-ss.y,ss.x,0];return!ph(t,Ks,$s,Js,Pl)||(t=[1,0,0,0,1,0,0,0,1],!ph(t,Ks,$s,Js,Pl))?!1:(Il.crossVectors(Ir,Lr),t=[Il.x,Il.y,Il.z],ph(t,Ks,$s,Js,Pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},rr=[new B,new B,new B,new B,new B,new B,new B,new B],Ai=new B,Cl=new Pn,Ks=new B,$s=new B,Js=new B,Ir=new B,Lr=new B,ss=new B,oa=new B,Pl=new B,Il=new B,os=new B;function ph(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){os.fromArray(s,r);let a=i.x*Math.abs(os.x)+i.y*Math.abs(os.y)+i.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),u=n.dot(os);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var ex=new Pn,aa=new B,mh=new B,Hn=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ex.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);let t=aa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(aa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(mh)),this.expandByPoint(aa.copy(e.center).sub(mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},sr=new B,gh=new B,Ll=new B,Dr=new B,_h=new B,Dl=new B,xh=new B,kr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){gh.copy(e).add(t).multiplyScalar(.5),Ll.copy(t).sub(e).normalize(),Dr.copy(this.origin).sub(gh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ll),a=Dr.dot(this.direction),l=-Dr.dot(Ll),c=Dr.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(gh).addScaledVector(Ll,f),d}intersectSphere(e,t){sr.subVectors(e.center,this.origin);let n=sr.dot(this.direction),i=sr.dot(sr)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,n,i,r){_h.subVectors(t,e),Dl.subVectors(n,e),xh.crossVectors(_h,Dl);let o=this.direction.dot(xh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dr.subVectors(this.origin,e);let l=a*this.direction.dot(Dl.crossVectors(Dr,Dl));if(l<0)return null;let c=a*this.direction.dot(_h.cross(Dr));if(c<0||l+c>o)return null;let u=-a*Dr.dot(xh);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$e=class s{constructor(e,t,n,i,r,o,a,l,c,u,h,f,d,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,n,i,r,o,a,l,c,u,h,f,d,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/js.setFromMatrixColumn(e,0).length(),r=1/js.setFromMatrixColumn(e,1).length(),o=1/js.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tx,e,nx)}lookAt(e,t,n){let i=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Nr.crossVectors(n,ni),Nr.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Nr.crossVectors(n,ni)),Nr.normalize(),Nl.crossVectors(ni,Nr),i[0]=Nr.x,i[4]=Nl.x,i[8]=ni.x,i[1]=Nr.y,i[5]=Nl.y,i[9]=ni.y,i[2]=Nr.z,i[6]=Nl.z,i[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],b=n[7],v=n[11],w=n[15],R=i[0],A=i[4],E=i[8],x=i[12],y=i[1],I=i[5],N=i[9],V=i[13],H=i[2],X=i[6],W=i[10],G=i[14],z=i[3],ee=i[7],L=i[11],ae=i[15];return r[0]=o*R+a*y+l*H+c*z,r[4]=o*A+a*I+l*X+c*ee,r[8]=o*E+a*N+l*W+c*L,r[12]=o*x+a*V+l*G+c*ae,r[1]=u*R+h*y+f*H+d*z,r[5]=u*A+h*I+f*X+d*ee,r[9]=u*E+h*N+f*W+d*L,r[13]=u*x+h*V+f*G+d*ae,r[2]=g*R+_*y+m*H+p*z,r[6]=g*A+_*I+m*X+p*ee,r[10]=g*E+_*N+m*W+p*L,r[14]=g*x+_*V+m*G+p*ae,r[3]=S*R+b*y+v*H+w*z,r[7]=S*A+b*I+v*X+w*ee,r[11]=S*E+b*N+v*W+w*L,r[15]=S*x+b*V+v*G+w*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+_*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,b=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,v=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,w=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,R=t*S+n*b+i*v+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/R;return e[0]=S*A,e[1]=(_*f*r-h*m*r-_*i*d+n*m*d+h*i*p-n*f*p)*A,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*A,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*A,e[4]=b*A,e[5]=(u*m*r-g*f*r+g*i*d-t*m*d-u*i*p+t*f*p)*A,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*A,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*d+t*l*d)*A,e[8]=v*A,e[9]=(g*h*r-u*_*r-g*n*d+t*_*d+u*n*p-t*h*p)*A,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*A,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*A,e[12]=w*A,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*A,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*A,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*A,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,S=l*c,b=l*u,v=l*h,w=n.x,R=n.y,A=n.z;return i[0]=(1-(_+p))*w,i[1]=(d+v)*w,i[2]=(g-b)*w,i[3]=0,i[4]=(d-v)*R,i[5]=(1-(f+p))*R,i[6]=(m+S)*R,i[7]=0,i[8]=(g+b)*A,i[9]=(m-S)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=js.set(i[0],i[1],i[2]).length(),o=js.set(i[4],i[5],i[6]).length(),a=js.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ri.copy(this);let c=1/r,u=1/o,h=1/a;return Ri.elements[0]*=c,Ri.elements[1]*=c,Ri.elements[2]*=c,Ri.elements[4]*=u,Ri.elements[5]*=u,Ri.elements[6]*=u,Ri.elements[8]*=h,Ri.elements[9]*=h,Ri.elements[10]*=h,t.setFromRotationMatrix(Ri),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Ii,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Ii)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ga)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Ii,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Ii)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===ga)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},js=new B,Ri=new $e,tx=new B(0,0,0),nx=new B(1,1,1),Nr=new B,Nl=new B,ni=new B,Lp=new $e,Dp=new _i,Ni=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dp.setFromEuler(this),this.setFromQuaternion(Dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ni.DEFAULT_ORDER="XYZ";var go=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ix=0,Np=new B,Qs=new _i,or=new $e,Ul=new B,la=new B,rx=new B,sx=new _i,Up=new B(1,0,0),Op=new B(0,1,0),Fp=new B(0,0,1),Bp={type:"added"},ox={type:"removed"},eo={type:"childadded",child:null},yh={type:"childremoved",child:null},Ut=class s extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new B,t=new Ni,n=new _i,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new Je}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(Up,e)}rotateY(e){return this.rotateOnAxis(Op,e)}rotateZ(e){return this.rotateOnAxis(Fp,e)}translateOnAxis(e,t){return Np.copy(e).applyQuaternion(this.quaternion),this.position.add(Np.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Up,e)}translateY(e){return this.translateOnAxis(Op,e)}translateZ(e){return this.translateOnAxis(Fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ul.copy(e):Ul.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(la,Ul,this.up):or.lookAt(Ul,la,this.up),this.quaternion.setFromRotationMatrix(or),i&&(or.extractRotation(i.matrixWorld),Qs.setFromRotationMatrix(or),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bp),eo.child=e,this.dispatchEvent(eo),eo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ox),yh.child=e,this.dispatchEvent(yh),yh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bp),eo.child=e,this.dispatchEvent(eo),eo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,rx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,sx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ut.DEFAULT_UP=new B(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ci=new B,ar=new B,vh=new B,lr=new B,to=new B,no=new B,kp=new B,Mh=new B,Sh=new B,bh=new B,Th=new gt,Eh=new gt,wh=new gt,ur=class s{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ci.subVectors(e,t),i.cross(Ci);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ci.subVectors(i,t),ar.subVectors(n,t),vh.subVectors(e,t);let o=Ci.dot(Ci),a=Ci.dot(ar),l=Ci.dot(vh),c=ar.dot(ar),u=ar.dot(vh),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,lr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,lr.x),l.addScaledVector(o,lr.y),l.addScaledVector(a,lr.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Th.setScalar(0),Eh.setScalar(0),wh.setScalar(0),Th.fromBufferAttribute(e,t),Eh.fromBufferAttribute(e,n),wh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Th,r.x),o.addScaledVector(Eh,r.y),o.addScaledVector(wh,r.z),o}static isFrontFacing(e,t,n,i){return Ci.subVectors(n,t),ar.subVectors(e,t),Ci.cross(ar).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),Ci.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;to.subVectors(i,n),no.subVectors(r,n),Mh.subVectors(e,n);let l=to.dot(Mh),c=no.dot(Mh);if(l<=0&&c<=0)return t.copy(n);Sh.subVectors(e,i);let u=to.dot(Sh),h=no.dot(Sh);if(u>=0&&h<=u)return t.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(to,o);bh.subVectors(e,r);let d=to.dot(bh),g=no.dot(bh);if(g>=0&&d<=g)return t.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(no,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return kp.subVectors(r,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(kp,a);let p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(to,o).addScaledVector(no,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},Ol={h:0,s:0,l:0};function Ah(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=mf(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ah(o,r,e+1/3),this.g=Ah(o,r,e),this.b=Ah(o,r,e-1/3)}return ht.colorSpaceToWorking(this,i),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let n=tg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return ht.workingToColorSpace(gn.copy(this),e),Math.round(ct(gn.r*255,0,255))*65536+Math.round(ct(gn.g*255,0,255))*256+Math.round(ct(gn.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(gn.copy(this),t);let n=gn.r,i=gn.g,r=gn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=zt){ht.workingToColorSpace(gn.copy(this),e);let t=gn.r,n=gn.g,i=gn.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+t,Ur.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ur),e.getHSL(Ol);let n=pa(Ur.h,Ol.h,t),i=pa(Ur.s,Ol.s,t),r=pa(Ur.l,Ol.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new qe;qe.NAMES=tg;var ax=0,Gn=class extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=us,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=rc,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ic&&(n.blendSrc=this.blendSrc),this.blendDst!==rc&&(n.blendDst=this.blendDst),this.blendEquation!==Fr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Wn=class extends Gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Zt=new B,Fl=new rt,lx=0,Kt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sc,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fl.fromBufferAttribute(this,t),Fl.applyMatrix3(e),this.setXY(t,Fl.x,Fl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sc&&(e.usage=this.usage),e}};var xa=class extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ya=class extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var cn=class extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}},cx=0,gi=new $e,Rh=new Ut,io=new B,ii=new Pn,ca=new Pn,on=new B,_n=class s extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gf(e)?ya:xa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,n){return gi.makeTranslation(e,t,n),this.applyMatrix4(gi),this}scale(e,t,n){return gi.makeScale(e,t,n),this.applyMatrix4(gi),this}lookAt(e){return Rh.lookAt(e),Rh.updateMatrix(),this.applyMatrix4(Rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new cn(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];ii.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ca.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(ii.min,ca.min),ii.expandByPoint(on),on.addVectors(ii.max,ca.max),ii.expandByPoint(on)):(ii.expandByPoint(ca.min),ii.expandByPoint(ca.max))}ii.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)on.fromBufferAttribute(a,c),l&&(io.fromBufferAttribute(e,c),on.add(io)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<n.count;E++)a[E]=new B,l[E]=new B;let c=new B,u=new B,h=new B,f=new rt,d=new rt,g=new rt,_=new B,m=new B;function p(E,x,y){c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,E),d.fromBufferAttribute(r,x),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),d.sub(f),g.sub(f);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(I),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),a[E].add(_),a[x].add(_),a[y].add(_),l[E].add(m),l[x].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let E=0,x=S.length;E<x;++E){let y=S[E],I=y.start,N=y.count;for(let V=I,H=I+N;V<H;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let b=new B,v=new B,w=new B,R=new B;function A(E){w.fromBufferAttribute(i,E),R.copy(w);let x=a[E];b.copy(x),b.sub(w.multiplyScalar(w.dot(x))).normalize(),v.crossVectors(R,x);let I=v.dot(l[E])<0?-1:1;o.setXYZW(E,b.x,b.y,b.z,I)}for(let E=0,x=S.length;E<x;++E){let y=S[E],I=y.start,N=y.count;for(let V=I,H=I+N;V<H;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Kt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zp=new $e,as=new kr,Bl=new Hn,Vp=new B,kl=new B,zl=new B,Vl=new B,Ch=new B,Hl=new B,Hp=new B,Gl=new B,en=class extends Ut{constructor(e=new _n,t=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Hl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Ch.fromBufferAttribute(h,e),o?Hl.addScaledVector(Ch,u):Hl.addScaledVector(Ch.sub(t),u))}t.add(Hl)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(Bl.containsPoint(as.origin)===!1&&(as.intersectSphere(Bl,Vp)===null||as.origin.distanceToSquared(Vp)>(e.far-e.near)**2))&&(zp.copy(r).invert(),as.copy(e.ray).applyMatrix4(zp),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,w=b;v<w;v+=3){let R=a.getX(v),A=a.getX(v+1),E=a.getX(v+2);i=Wl(this,p,e,n,c,u,h,R,A,E),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let S=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);i=Wl(this,o,e,n,c,u,h,S,b,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,w=b;v<w;v+=3){let R=v,A=v+1,E=v+2;i=Wl(this,p,e,n,c,u,h,R,A,E),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let S=m,b=m+1,v=m+2;i=Wl(this,o,e,n,c,u,h,S,b,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function ux(s,e,t,n,i,r,o,a){let l;if(e.side===In?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Di,a),l===null)return null;Gl.copy(a),Gl.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Gl);return c<t.near||c>t.far?null:{distance:c,point:Gl.clone(),object:s}}function Wl(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,kl),s.getVertexPosition(l,zl),s.getVertexPosition(c,Vl);let u=ux(s,e,t,n,kl,zl,Vl,Hp);if(u){let h=new B;ur.getBarycoord(Hp,kl,zl,Vl,h),i&&(u.uv=ur.getInterpolatedAttribute(i,a,l,c,h,new rt)),r&&(u.uv1=ur.getInterpolatedAttribute(r,a,l,c,h,new rt)),o&&(u.normal=ur.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new B,materialIndex:0};ur.getNormal(kl,zl,Vl,f.normal),u.face=f,u.barycoord=h}return u}var _o=class s extends _n{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(u,3)),this.setAttribute("uv",new cn(h,2));function g(_,m,p,S,b,v,w,R,A,E,x){let y=v/A,I=w/E,N=v/2,V=w/2,H=R/2,X=A+1,W=E+1,G=0,z=0,ee=new B;for(let L=0;L<W;L++){let ae=L*I-V;for(let Pe=0;Pe<X;Pe++){let Ze=Pe*y-N;ee[_]=Ze*S,ee[m]=ae*b,ee[p]=H,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[p]=R>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(Pe/A),h.push(1-L/E),G+=1}}for(let L=0;L<E;L++)for(let ae=0;ae<A;ae++){let Pe=f+ae+X*L,Ze=f+ae+X*(L+1),He=f+(ae+1)+X*(L+1),ke=f+(ae+1)+X*L;l.push(Pe,Ze,ke),l.push(Ze,He,ke),z+=6}a.addGroup(d,z,x),d+=z,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ss(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function xn(s){let e={};for(let t=0;t<s.length;t++){let n=Ss(s[t]);for(let i in n)e[i]=n[i]}return e}function hx(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function _f(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var ng={clone:Ss,merge:xn},fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ui=class extends Gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fx,this.fragmentShader=dx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=hx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},va=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Or=new B,Gp=new rt,Wp=new rt,qt=class extends va{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Or.x,Or.y).multiplyScalar(-e/Or.z),Or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Or.x,Or.y).multiplyScalar(-e/Or.z)}getViewSize(e,t){return this.getViewBounds(e,Gp,Wp),t.subVectors(Wp,Gp)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(lo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ro=-90,so=1,cc=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new qt(ro,so,e,t);i.layers=this.layers,this.add(i);let r=new qt(ro,so,e,t);r.layers=this.layers,this.add(r);let o=new qt(ro,so,e,t);o.layers=this.layers,this.add(o);let a=new qt(ro,so,e,t);a.layers=this.layers,this.add(a);let l=new qt(ro,so,e,t);l.layers=this.layers,this.add(l);let c=new qt(ro,so,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ma=class extends Qt{constructor(e=[],t=ys,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},uc=class extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ma(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new _o(5,5,5),r=new Ui({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:_r});r.uniforms.tEquirect.value=t;let o=new en(i,r),a=t.minFilter;return t.minFilter===Oi&&(t.minFilter=Cn),new cc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Vn=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},px={type:"move"},xo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(px)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Vn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var yo=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},vo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sc,this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Li()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Rn=new B,Mo=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Xp=new B,qp=new gt,Yp=new gt,mx=new B,Zp=new $e,Xl=new B,Ph=new Hn,Kp=new $e,Ih=new kr,Sa=class extends en{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bh,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xl),this.boundingBox.expandByPoint(Xl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xl),this.boundingSphere.expandByPoint(Xl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ph.copy(this.boundingSphere),Ph.applyMatrix4(i),e.ray.intersectsSphere(Ph)!==!1&&(Kp.copy(i).invert(),Ih.copy(e.ray).applyMatrix4(Kp),!(this.boundingBox!==null&&Ih.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ih)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Bh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;qp.fromBufferAttribute(i.attributes.skinIndex,e),Yp.fromBufferAttribute(i.attributes.skinWeight,e),Xp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Yp.getComponent(r);if(o!==0){let a=qp.getComponent(r);Zp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(mx.copy(Xp).applyMatrix4(Zp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},So=class extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},ba=class extends Qt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=un,u=un,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$p=new $e,gx=new $e,Ta=class s{constructor(e=[],t=[]){this.uuid=Li(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:gx;$p.multiplyMatrices(a,t[r]),$p.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ba(t,e,e,ri,xi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new So),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},zr=class extends Kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},oo=new $e,Jp=new $e,ql=[],jp=new Pn,_x=new $e,ua=new en,ha=new Hn,Ea=class extends en{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,_x)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,oo),jp.copy(e.boundingBox).applyMatrix4(oo),this.boundingBox.union(jp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,oo),ha.copy(e.boundingSphere).applyMatrix4(oo),this.boundingSphere.union(ha)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ua.geometry=this.geometry,ua.material=this.material,ua.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(n),e.ray.intersectsSphere(ha)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,oo),Jp.multiplyMatrices(n,oo),ua.matrixWorld=Jp,ua.raycast(e,ql);for(let o=0,a=ql.length;o<a;o++){let l=ql[o];l.instanceId=r,l.object=this,t.push(l)}ql.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ba(new Float32Array(i*this.count),i,this.count,Uc,xi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Lh=new B,xx=new B,yx=new Je,Vi=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Lh.subVectors(n,t).cross(xx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Lh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||yx.getNormalMatrix(e),i=this.coplanarPoint(Lh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ls=new Hn,vx=new rt(.5,.5),Yl=new B,bo=class{constructor(e=new Vi,t=new Vi,n=new Vi,i=new Vi,r=new Vi,o=new Vi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ii,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],S=r[12],b=r[13],v=r[14],w=r[15];if(i[0].setComponents(c-o,d-u,p-g,w-S).normalize(),i[1].setComponents(c+o,d+u,p+g,w+S).normalize(),i[2].setComponents(c+a,d+h,p+_,w+b).normalize(),i[3].setComponents(c-a,d-h,p-_,w-b).normalize(),n)i[4].setComponents(l,f,m,v).normalize(),i[5].setComponents(c-l,d-f,p-m,w-v).normalize();else if(i[4].setComponents(c-l,d-f,p-m,w-v).normalize(),t===Ii)i[5].setComponents(c+l,d+f,p+m,w+v).normalize();else if(t===ga)i[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);let t=vx.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Yl.x=i.normal.x>0?e.max.x:e.min.x,Yl.y=i.normal.y>0?e.max.y:e.min.y,Yl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Vr=class extends Gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},hc=new B,fc=new B,Qp=new $e,fa=new kr,Zl=new Hn,Dh=new B,em=new B,ms=class extends Ut{constructor(e=new _n,t=new Vr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)hc.fromBufferAttribute(t,i-1),fc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=hc.distanceTo(fc);e.setAttribute("lineDistance",new cn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zl.copy(n.boundingSphere),Zl.applyMatrix4(i),Zl.radius+=r,e.ray.intersectsSphere(Zl)===!1)return;Qp.copy(i).invert(),fa.copy(e.ray).applyMatrix4(Qp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){let p=u.getX(_),S=u.getX(_+1),b=Kl(this,e,fa,l,p,S,_);b&&t.push(b)}if(this.isLineLoop){let _=u.getX(g-1),m=u.getX(d),p=Kl(this,e,fa,l,_,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){let p=Kl(this,e,fa,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=Kl(this,e,fa,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Kl(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(hc.fromBufferAttribute(a,i),fc.fromBufferAttribute(a,r),t.distanceSqToSegment(hc,fc,Dh,em)>n)return;Dh.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Dh);if(!(c<e.near||c>e.far))return{distance:c,point:em.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var tm=new B,nm=new B,gs=class extends ms{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)tm.fromBufferAttribute(t,i),nm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+tm.distanceTo(nm);e.setAttribute("lineDistance",new cn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},wa=class extends ms{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},To=class extends Gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},im=new $e,Gh=new kr,$l=new Hn,Jl=new B,Aa=class extends Ut{constructor(e=new _n,t=new To){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$l.copy(n.boundingSphere),$l.applyMatrix4(i),$l.radius+=r,e.ray.intersectsSphere($l)===!1)return;im.copy(i).invert(),Gh.copy(e.ray).applyMatrix4(im);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){let m=c.getX(g);Jl.fromBufferAttribute(h,m),rm(Jl,m,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Jl.fromBufferAttribute(h,g),rm(Jl,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function rm(s,e,t,n,i,r,o){let a=Gh.distanceSqToPoint(s);if(a<t){let l=new B;Gh.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ra=class extends Qt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ca=class extends Qt{constructor(e,t,n=Hr,i,r,o,a=un,l=un,c,u=ho,h=1){if(u!==ho&&u!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Pa=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var jl=new B,Ql=new B,Nh=new B,ec=new ur,Ia=class extends _n{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(lo*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:_,b:m,c:p}=ec;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),ec.getNormal(Nh),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let S=0;S<3;S++){let b=(S+1)%3,v=h[S],w=h[b],R=ec[u[S]],A=ec[u[b]],E=`${v}_${w}`,x=`${w}_${v}`;x in f&&f[x]?(Nh.dot(f[x].normal)<=r&&(d.push(R.x,R.y,R.z),d.push(A.x,A.y,A.z)),f[x]=null):E in f||(f[E]={index0:c[S],index1:c[b],normal:Nh.clone()})}}for(let g in f)if(f[g]){let{index0:_,index1:m}=f[g];jl.fromBufferAttribute(a,_),Ql.fromBufferAttribute(a,m),d.push(jl.x,jl.y,jl.z),d.push(Ql.x,Ql.y,Ql.z)}this.setAttribute("position",new cn(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var La=class s extends _n{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let S=p*f-o;for(let b=0;b<c;b++){let v=b*h-r;g.push(v,-S,0),_.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let b=S+c*p,v=S+c*(p+1),w=S+1+c*(p+1),R=S+1+c*p;d.push(b,v,R),d.push(v,w,R)}this.setIndex(d),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(_,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var _s=class extends Gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ff,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xn=class extends _s{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var dc=class extends Gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pc=class extends Gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function tc(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Mx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Sx(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function sm(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function ig(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var dr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},mc=class extends dr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kh,endingEnd:kh}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case zh:r=e,a=2*t-n;break;case Vh:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zh:o=e,l=2*n-t;break;case Vh:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,S=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,b=(-1-d)*m+(1.5+d)*_+.5*g,v=d*m-d*_;for(let w=0;w!==a;++w)r[w]=p*o[u+w]+S*o[c+w]+b*o[l+w]+v*o[h+w];return r}},gc=class extends dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},_c=class extends dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},qn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=tc(t,this.TimeBufferType),this.values=tc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:tc(e.times,Array),values:tc(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fs:t=this.InterpolantFactoryMethodDiscrete;break;case ds:t=this.InterpolantFactoryMethodLinear;break;case nc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fs;case this.InterpolantFactoryMethodLinear:return ds;case this.InterpolantFactoryMethodSmooth:return nc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Mx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===nc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=ds;var pr=class extends qn{constructor(e,t,n){super(e,t,n)}};pr.prototype.ValueTypeName="bool";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=fs;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Da=class extends qn{constructor(e,t,n,i){super(e,t,n,i)}};Da.prototype.ValueTypeName="color";var Xi=class extends qn{constructor(e,t,n,i){super(e,t,n,i)}};Xi.prototype.ValueTypeName="number";var xc=class extends dr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)_i.slerpFlat(r,0,o,c-a,o,c,l);return r}},qi=class extends qn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new xc(this.times,this.values,this.getValueSize(),e)}};qi.prototype.ValueTypeName="quaternion";qi.prototype.InterpolantFactoryMethodSmooth=void 0;var mr=class extends qn{constructor(e,t,n){super(e,t,n)}};mr.prototype.ValueTypeName="string";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=fs;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends qn{constructor(e,t,n,i){super(e,t,n,i)}};Yi.prototype.ValueTypeName="vector";var Na=class{constructor(e="",t=-1,n=[],i=Hm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Li(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Tx(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(qn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=Sx(l);l=sm(l,1,u),c=sm(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Xi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,d,g,_){if(d.length!==0){let m=[],p=[];ig(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(let _ in d){let m=[],p=[];for(let S=0;S!==f[g].morphTargets.length;++S){let b=f[g];m.push(b.time),p.push(b.morphTarget===_?1:0)}i.push(new Xi(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{let d=".bones["+t[h].name+"]";n(Yi,d+".position",f,"pos",i),n(qi,d+".quaternion",f,"rot",i),n(Yi,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function bx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xi;case"vector":case"vector2":case"vector3":case"vector4":return Yi;case"color":return Da;case"quaternion":return qi;case"bool":case"boolean":return pr;case"string":return mr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Tx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=bx(s.type);if(s.times===void 0){let t=[],n=[];ig(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Gi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},yc=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},rg=new yc,Zi=class{constructor(e){this.manager=e!==void 0?e:rg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Zi.DEFAULT_MATERIAL_NAME="__DEFAULT";var cr={},Wh=class extends Error{constructor(e,t){super(e),this.response=t}},Eo=class extends Zi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Gi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(cr[e]!==void 0){cr[e].push({onLoad:t,onProgress:n,onError:i});return}cr[e]=[],cr[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=cr[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,_=0,m=new ReadableStream({start(p){S();function S(){h.read().then(({done:b,value:v})=>{if(b)p.close();else{_+=v.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let R=0,A=u.length;R<A;R++){let E=u[R];E.onProgress&&E.onProgress(w)}p.enqueue(v),S()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Wh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Gi.add(`file:${e}`,c);let u=cr[e];delete cr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=cr[e];if(u===void 0)throw this.manager.itemError(e),c;delete cr[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ao=new WeakMap,vc=class extends Zi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Gi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=ao.get(o);h===void 0&&(h=[],ao.set(o,h)),h.push({onLoad:t,onError:i})}return o}let a=fo("img");function l(){u(),t&&t(this);let h=ao.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}ao.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),Gi.remove(`image:${e}`);let f=ao.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(h)}ao.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Gi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Ua=class extends Zi{constructor(e){super(e)}load(e,t,n,i){let r=new Qt,o=new vc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},wo=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Uh=new $e,om=new B,am=new B,Oa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=Fi,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bo,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;om.setFromMatrixPosition(e.matrixWorld),t.position.copy(om),am.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(am),t.updateMatrixWorld(),Uh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xh=class extends Oa{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ps*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Fa=class extends wo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Xh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},lm=new $e,da=new B,Oh=new B,qh=class extends Oa{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),da.setFromMatrixPosition(e.matrixWorld),n.position.copy(da),Oh.copy(n.position),Oh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Oh),n.updateMatrixWorld(),i.makeTranslation(-da.x,-da.y,-da.z),lm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lm,n.coordinateSystem,n.reversedDepth)}},Ba=class extends wo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},xs=class extends va{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yh=class extends Oa{constructor(){super(new xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ka=class extends wo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Yh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var gr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Fh=new WeakMap,za=class extends Zi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Gi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Fh.has(o)===!0)i&&i(Fh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Gi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Fh.set(l,c),Gi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Gi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Mc=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var xf="\\[\\]\\.:\\/",Ex=new RegExp("["+xf+"]","g"),yf="[^"+xf+"]",wx="[^"+xf.replace("\\.","")+"]",Ax=/((?:WC+[\/:])*)/.source.replace("WC",yf),Rx=/(WCOD+)?/.source.replace("WCOD",wx),Cx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yf),Px=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yf),Ix=new RegExp("^"+Ax+Rx+Cx+Px+"$"),Lx=["material","materials","bones","map"],Zh=class{constructor(e,t,n){let i=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ex,"")}static parseTrackName(e){let t=Ix.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Lx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Zh;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var EE=new Float32Array(1);var cm=new $e,Va=class{constructor(e,t,n=0,i=1/0){this.ray=new kr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new go,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cm),this}intersectObject(e,t=!0,n=[]){return Kh(e,this,n,t),n.sort(um),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Kh(e[i],this,n,t);return n.sort(um),n}};function um(s,e){return s.distance-e.distance}function Kh(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Kh(r[o],e,t,!0)}}function vf(s,e,t,n){let i=Dx(n);switch(t){case lf:return s*e;case Uc:return s*e/i.components*i.byteLength;case Oc:return s*e/i.components*i.byteLength;case uf:return s*e*2/i.components*i.byteLength;case Fc:return s*e*2/i.components*i.byteLength;case cf:return s*e*3/i.components*i.byteLength;case ri:return s*e*4/i.components*i.byteLength;case Bc:return s*e*4/i.components*i.byteLength;case Ga:case Wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xa:case qa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zc:case Hc:return Math.max(s,16)*Math.max(e,8)/4;case kc:case Vc:return Math.max(s,8)*Math.max(e,8)/2;case Gc:case Wc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case $c:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Jc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case jc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case eu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case tu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case nu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case iu:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ru:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case su:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ou:case au:case lu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case cu:case uu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case hu:case fu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dx(s){switch(s){case Fi:case rf:return{byteLength:1,components:1};case Ro:case sf:case Co:return{byteLength:2,components:1};case Dc:case Nc:return{byteLength:2,components:4};case Hr:case Lc:case xi:return{byteLength:4,components:1};case of:case af:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Rg(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ux(s){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let _=h[d];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Ox=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$x=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ry=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ay=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ly=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fy="gl_FragColor = linearToOutputTexel( gl_FragColor );",dy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,py=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,my=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_y=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,My=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,by=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ty=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ey=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ay=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ry=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Py=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ly=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ny=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Uy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Oy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,By=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ky=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ky=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$y=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ev=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ov=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,av=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_v=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Av=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Uv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ov=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$v=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:Ox,alphahash_pars_fragment:Fx,alphamap_fragment:Bx,alphamap_pars_fragment:kx,alphatest_fragment:zx,alphatest_pars_fragment:Vx,aomap_fragment:Hx,aomap_pars_fragment:Gx,batching_pars_vertex:Wx,batching_vertex:Xx,begin_vertex:qx,beginnormal_vertex:Yx,bsdfs:Zx,iridescence_fragment:Kx,bumpmap_pars_fragment:$x,clipping_planes_fragment:Jx,clipping_planes_pars_fragment:jx,clipping_planes_pars_vertex:Qx,clipping_planes_vertex:ey,color_fragment:ty,color_pars_fragment:ny,color_pars_vertex:iy,color_vertex:ry,common:sy,cube_uv_reflection_fragment:oy,defaultnormal_vertex:ay,displacementmap_pars_vertex:ly,displacementmap_vertex:cy,emissivemap_fragment:uy,emissivemap_pars_fragment:hy,colorspace_fragment:fy,colorspace_pars_fragment:dy,envmap_fragment:py,envmap_common_pars_fragment:my,envmap_pars_fragment:gy,envmap_pars_vertex:_y,envmap_physical_pars_fragment:Ry,envmap_vertex:xy,fog_vertex:yy,fog_pars_vertex:vy,fog_fragment:My,fog_pars_fragment:Sy,gradientmap_pars_fragment:by,lightmap_pars_fragment:Ty,lights_lambert_fragment:Ey,lights_lambert_pars_fragment:wy,lights_pars_begin:Ay,lights_toon_fragment:Cy,lights_toon_pars_fragment:Py,lights_phong_fragment:Iy,lights_phong_pars_fragment:Ly,lights_physical_fragment:Dy,lights_physical_pars_fragment:Ny,lights_fragment_begin:Uy,lights_fragment_maps:Oy,lights_fragment_end:Fy,logdepthbuf_fragment:By,logdepthbuf_pars_fragment:ky,logdepthbuf_pars_vertex:zy,logdepthbuf_vertex:Vy,map_fragment:Hy,map_pars_fragment:Gy,map_particle_fragment:Wy,map_particle_pars_fragment:Xy,metalnessmap_fragment:qy,metalnessmap_pars_fragment:Yy,morphinstance_vertex:Zy,morphcolor_vertex:Ky,morphnormal_vertex:$y,morphtarget_pars_vertex:Jy,morphtarget_vertex:jy,normal_fragment_begin:Qy,normal_fragment_maps:ev,normal_pars_fragment:tv,normal_pars_vertex:nv,normal_vertex:iv,normalmap_pars_fragment:rv,clearcoat_normal_fragment_begin:sv,clearcoat_normal_fragment_maps:ov,clearcoat_pars_fragment:av,iridescence_pars_fragment:lv,opaque_fragment:cv,packing:uv,premultiplied_alpha_fragment:hv,project_vertex:fv,dithering_fragment:dv,dithering_pars_fragment:pv,roughnessmap_fragment:mv,roughnessmap_pars_fragment:gv,shadowmap_pars_fragment:_v,shadowmap_pars_vertex:xv,shadowmap_vertex:yv,shadowmask_pars_fragment:vv,skinbase_vertex:Mv,skinning_pars_vertex:Sv,skinning_vertex:bv,skinnormal_vertex:Tv,specularmap_fragment:Ev,specularmap_pars_fragment:wv,tonemapping_fragment:Av,tonemapping_pars_fragment:Rv,transmission_fragment:Cv,transmission_pars_fragment:Pv,uv_pars_fragment:Iv,uv_pars_vertex:Lv,uv_vertex:Dv,worldpos_vertex:Nv,background_vert:Uv,background_frag:Ov,backgroundCube_vert:Fv,backgroundCube_frag:Bv,cube_vert:kv,cube_frag:zv,depth_vert:Vv,depth_frag:Hv,distanceRGBA_vert:Gv,distanceRGBA_frag:Wv,equirect_vert:Xv,equirect_frag:qv,linedashed_vert:Yv,linedashed_frag:Zv,meshbasic_vert:Kv,meshbasic_frag:$v,meshlambert_vert:Jv,meshlambert_frag:jv,meshmatcap_vert:Qv,meshmatcap_frag:eM,meshnormal_vert:tM,meshnormal_frag:nM,meshphong_vert:iM,meshphong_frag:rM,meshphysical_vert:sM,meshphysical_frag:oM,meshtoon_vert:aM,meshtoon_frag:lM,points_vert:cM,points_frag:uM,shadow_vert:hM,shadow_frag:fM,sprite_vert:dM,sprite_frag:pM},xe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},$i={basic:{uniforms:xn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:xn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new qe(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:xn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:xn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:xn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new qe(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:xn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:xn([xe.points,xe.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:xn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:xn([xe.common,xe.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:xn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:xn([xe.sprite,xe.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:xn([xe.common,xe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:xn([xe.lights,xe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};$i.physical={uniforms:xn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var du={r:0,b:0,g:0},bs=new Ni,mM=new $e;function gM(s,e,t,n,i,r,o){let a=new qe(0),l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function _(b){let v=!1,w=g(b);w===null?p(a,l):w&&w.isColor&&(p(w,1),v=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,v){let w=g(v);w&&(w.isCubeTexture||w.mapping===Ha)?(u===void 0&&(u=new en(new _o(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Ss($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),bs.copy(v.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mM.makeRotationFromEuler(bs)),u.material.toneMapped=ht.getTransfer(w.colorSpace)!==Mt,(h!==w||f!==w.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=s.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new en(new La(2,2),new Ui({name:"BackgroundMaterial",uniforms:Ss($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ht.getTransfer(w.colorSpace)!==Mt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,d=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,v){b.getRGB(du,_f(s)),n.buffers.color.setClear(du.r,du.g,du.b,v,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:m,dispose:S}}function _M(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(y,I,N,V,H){let X=!1,W=h(V,N,I);r!==W&&(r=W,c(r.object)),X=d(y,V,N,H),X&&g(y,V,N,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(y,I,N,V),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function h(y,I,N){let V=N.wireframe===!0,H=n[y.id];H===void 0&&(H={},n[y.id]=H);let X=H[I.id];X===void 0&&(X={},H[I.id]=X);let W=X[V];return W===void 0&&(W=f(l()),X[V]=W),W}function f(y){let I=[],N=[],V=[];for(let H=0;H<t;H++)I[H]=0,N[H]=0,V[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:V,object:y,attributes:{},index:null}}function d(y,I,N,V){let H=r.attributes,X=I.attributes,W=0,G=N.getAttributes();for(let z in G)if(G[z].location>=0){let L=H[z],ae=X[z];if(ae===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),L===void 0||L.attribute!==ae||ae&&L.data!==ae.data)return!0;W++}return r.attributesNum!==W||r.index!==V}function g(y,I,N,V){let H={},X=I.attributes,W=0,G=N.getAttributes();for(let z in G)if(G[z].location>=0){let L=X[z];L===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(L=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(L=y.instanceColor));let ae={};ae.attribute=L,L&&L.data&&(ae.data=L.data),H[z]=ae,W++}r.attributes=H,r.attributesNum=W,r.index=V}function _(){let y=r.newAttributes;for(let I=0,N=y.length;I<N;I++)y[I]=0}function m(y){p(y,0)}function p(y,I){let N=r.newAttributes,V=r.enabledAttributes,H=r.attributeDivisors;N[y]=1,V[y]===0&&(s.enableVertexAttribArray(y),V[y]=1),H[y]!==I&&(s.vertexAttribDivisor(y,I),H[y]=I)}function S(){let y=r.newAttributes,I=r.enabledAttributes;for(let N=0,V=I.length;N<V;N++)I[N]!==y[N]&&(s.disableVertexAttribArray(N),I[N]=0)}function b(y,I,N,V,H,X,W){W===!0?s.vertexAttribIPointer(y,I,N,H,X):s.vertexAttribPointer(y,I,N,V,H,X)}function v(y,I,N,V){_();let H=V.attributes,X=N.getAttributes(),W=I.defaultAttributeValues;for(let G in X){let z=X[G];if(z.location>=0){let ee=H[G];if(ee===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor)),ee!==void 0){let L=ee.normalized,ae=ee.itemSize,Pe=e.get(ee);if(Pe===void 0)continue;let Ze=Pe.buffer,He=Pe.type,ke=Pe.bytesPerElement,K=He===s.INT||He===s.UNSIGNED_INT||ee.gpuType===Lc;if(ee.isInterleavedBufferAttribute){let J=ee.data,fe=J.stride,Ee=ee.offset;if(J.isInstancedInterleavedBuffer){for(let be=0;be<z.locationSize;be++)p(z.location+be,J.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let be=0;be<z.locationSize;be++)m(z.location+be);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let be=0;be<z.locationSize;be++)b(z.location+be,ae/z.locationSize,He,L,fe*ke,(Ee+ae/z.locationSize*be)*ke,K)}else{if(ee.isInstancedBufferAttribute){for(let J=0;J<z.locationSize;J++)p(z.location+J,ee.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let J=0;J<z.locationSize;J++)m(z.location+J);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let J=0;J<z.locationSize;J++)b(z.location+J,ae/z.locationSize,He,L,ae*ke,ae/z.locationSize*J*ke,K)}}else if(W!==void 0){let L=W[G];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(z.location,L);break;case 3:s.vertexAttrib3fv(z.location,L);break;case 4:s.vertexAttrib4fv(z.location,L);break;default:s.vertexAttrib1fv(z.location,L)}}}}S()}function w(){E();for(let y in n){let I=n[y];for(let N in I){let V=I[N];for(let H in V)u(V[H].object),delete V[H];delete I[N]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;let I=n[y.id];for(let N in I){let V=I[N];for(let H in V)u(V[H].object),delete V[H];delete I[N]}delete n[y.id]}function A(y){for(let I in n){let N=n[I];if(N[y.id]===void 0)continue;let V=N[y.id];for(let H in V)u(V[H].object),delete V[H];delete N[y.id]}}function E(){x(),o=!0,r!==i&&(r=i,c(r.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:x,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function xM(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function yM(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==ri&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let E=A===Co&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Fi&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==xi&&!E)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:w,maxSamples:R}}function vM(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Vi,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{let S=r?0:n,b=S*4,v=p.clippingState||null;l.value=v,v=u(g,f,b,d);for(let w=0;w!==b;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=d;b!==_;++b,v+=4)o.copy(h[b]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function MM(s){let e=new WeakMap;function t(o,a){return a===Cc?o.mapping=ys:a===Pc&&(o.mapping=vs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Cc||a===Pc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new uc(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var No=4,sg=[.125,.215,.35,.446,.526,.582],ws=20,Mf=new xs,og=new qe,Sf=null,bf=0,Tf=0,Ef=!1,Es=(1+Math.sqrt(5))/2,Do=1/Es,ag=[new B(-Es,Do,0),new B(Es,Do,0),new B(-Do,0,Es),new B(Do,0,Es),new B(0,Es,-Do),new B(0,Es,Do),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],SM=new B,gu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=SM}=r;Sf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Tf=this._renderer.getActiveMipmapLevel(),Ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ug(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sf,bf,Tf),this._renderer.xr.enabled=Ef,e.scissorTest=!1,pu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Tf=this._renderer.getActiveMipmapLevel(),Ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Co,format:ri,colorSpace:hn,depthBuffer:!1},i=lg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lg(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bM(r)),this._blurMaterial=TM(r,e,t)}return i}_compileMaterial(e){let t=new en(this._lodPlanes[0],e);this._renderer.compile(t,Mf)}_sceneToCubeUV(e,t,n,i,r){let l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(og),h.toneMapping=xr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));let _=new Wn({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),m=new en(new _o,_),p=!1,S=e.background;S?S.isColor&&(_.color.copy(S),e.background=null,p=!0):(_.color.copy(og),p=!0);for(let b=0;b<6;b++){let v=b%3;v===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):v===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));let w=this._cubeSize;pu(i,v*w,b>2?w:0,w,w),h.setRenderTarget(i),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ys||e.mapping===vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ug()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cg());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new en(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;pu(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Mf)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ag[(i-r-1)%ag.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new en(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ws-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ws;m>ws&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ws}`);let p=[],S=0;for(let A=0;A<ws;++A){let E=A/_,x=Math.exp(-E*E/2);p.push(x),A===0?S+=x:A<m&&(S+=2*x)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;let v=this._sizeLods[i],w=3*v*(i>b-No?i-b+No:0),R=4*(this._cubeSize-v);pu(t,w,R,3*v,2*v),l.setRenderTarget(t),l.render(h,Mf)}};function bM(s){let e=[],t=[],n=[],i=s,r=s-No+1+sg.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-No?l=sg[o-s+No-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),b=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let R=0;R<d;R++){let A=R%3*2/3-1,E=R>2?0:-1,x=[A,E,0,A+2/3,E,0,A+2/3,E+1,0,A,E,0,A+2/3,E+1,0,A,E+1,0];S.set(x,_*g*R),b.set(f,m*g*R);let y=[R,R,R,R,R,R];v.set(y,p*g*R)}let w=new _n;w.setAttribute("position",new Kt(S,_)),w.setAttribute("uv",new Kt(b,m)),w.setAttribute("faceIndex",new Kt(v,p)),e.push(w),i>No&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lg(s,e,t){let n=new Wi(s,e,t);return n.texture.mapping=Ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pu(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function TM(s,e,t){let n=new Float32Array(ws),i=new B(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function cg(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function ug(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Uf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function EM(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Cc||l===Pc,u=l===ys||l===vs;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new gu(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new gu(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function wM(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&po("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function AM(s,e,t,n){let i={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,g=h.attributes.position,_=0;if(d!==null){let S=d.array;_=d.version;for(let b=0,v=S.length;b<v;b+=3){let w=S[b+0],R=S[b+1],A=S[b+2];f.push(w,R,R,A,A,w)}}else if(g!==void 0){let S=g.array;_=g.version;for(let b=0,v=S.length/3-1;b<v;b+=3){let w=b+0,R=b+1,A=b+2;f.push(w,R,R,A,A,w)}}else return;let m=new(gf(f)?ya:xa)(f,1);m.version=_;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function RM(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*_[S];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function CM(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function PM(s,e,t){let n=new WeakMap,i=new gt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let x=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],b=0;d===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let v=a.attributes.position.count*b,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let R=new Float32Array(v*w*4*h),A=new _a(R,v,w,h);A.type=xi,A.needsUpdate=!0;let E=b*4;for(let y=0;y<h;y++){let I=m[y],N=p[y],V=S[y],H=v*w*4*y;for(let X=0;X<I.count;X++){let W=X*E;d===!0&&(i.fromBufferAttribute(I,X),R[H+W+0]=i.x,R[H+W+1]=i.y,R[H+W+2]=i.z,R[H+W+3]=0),g===!0&&(i.fromBufferAttribute(N,X),R[H+W+4]=i.x,R[H+W+5]=i.y,R[H+W+6]=i.z,R[H+W+7]=0),_===!0&&(i.fromBufferAttribute(V,X),R[H+W+8]=i.x,R[H+W+9]=i.y,R[H+W+10]=i.z,R[H+W+11]=V.itemSize===4?i.w:1)}}f={count:h,texture:A,size:new rt(v,w)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function IM(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Cg=new Qt,hg=new Ca(1,1),Pg=new _a,Ig=new lc,Lg=new Ma,fg=[],dg=[],pg=new Float32Array(16),mg=new Float32Array(9),gg=new Float32Array(4);function Oo(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=fg[i];if(r===void 0&&(r=new Float32Array(i),fg[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function tn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function nn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function xu(s,e){let t=dg[e];t===void 0&&(t=new Int32Array(e),dg[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function LM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function DM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2fv(this.addr,e),nn(t,e)}}function NM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;s.uniform3fv(this.addr,e),nn(t,e)}}function UM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4fv(this.addr,e),nn(t,e)}}function OM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;gg.set(n),s.uniformMatrix2fv(this.addr,!1,gg),nn(t,n)}}function FM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;mg.set(n),s.uniformMatrix3fv(this.addr,!1,mg),nn(t,n)}}function BM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;pg.set(n),s.uniformMatrix4fv(this.addr,!1,pg),nn(t,n)}}function kM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function zM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2iv(this.addr,e),nn(t,e)}}function VM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3iv(this.addr,e),nn(t,e)}}function HM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4iv(this.addr,e),nn(t,e)}}function GM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function WM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2uiv(this.addr,e),nn(t,e)}}function XM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3uiv(this.addr,e),nn(t,e)}}function qM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4uiv(this.addr,e),nn(t,e)}}function YM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(hg.compareFunction=df,r=hg):r=Cg,t.setTexture2D(e||r,i)}function ZM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ig,i)}function KM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Lg,i)}function $M(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Pg,i)}function JM(s){switch(s){case 5126:return LM;case 35664:return DM;case 35665:return NM;case 35666:return UM;case 35674:return OM;case 35675:return FM;case 35676:return BM;case 5124:case 35670:return kM;case 35667:case 35671:return zM;case 35668:case 35672:return VM;case 35669:case 35673:return HM;case 5125:return GM;case 36294:return WM;case 36295:return XM;case 36296:return qM;case 35678:case 36198:case 36298:case 36306:case 35682:return YM;case 35679:case 36299:case 36307:return ZM;case 35680:case 36300:case 36308:case 36293:return KM;case 36289:case 36303:case 36311:case 36292:return $M}}function jM(s,e){s.uniform1fv(this.addr,e)}function QM(s,e){let t=Oo(e,this.size,2);s.uniform2fv(this.addr,t)}function eS(s,e){let t=Oo(e,this.size,3);s.uniform3fv(this.addr,t)}function tS(s,e){let t=Oo(e,this.size,4);s.uniform4fv(this.addr,t)}function nS(s,e){let t=Oo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function iS(s,e){let t=Oo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function rS(s,e){let t=Oo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function sS(s,e){s.uniform1iv(this.addr,e)}function oS(s,e){s.uniform2iv(this.addr,e)}function aS(s,e){s.uniform3iv(this.addr,e)}function lS(s,e){s.uniform4iv(this.addr,e)}function cS(s,e){s.uniform1uiv(this.addr,e)}function uS(s,e){s.uniform2uiv(this.addr,e)}function hS(s,e){s.uniform3uiv(this.addr,e)}function fS(s,e){s.uniform4uiv(this.addr,e)}function dS(s,e,t){let n=this.cache,i=e.length,r=xu(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Cg,r[o])}function pS(s,e,t){let n=this.cache,i=e.length,r=xu(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ig,r[o])}function mS(s,e,t){let n=this.cache,i=e.length,r=xu(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Lg,r[o])}function gS(s,e,t){let n=this.cache,i=e.length,r=xu(t,i);tn(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Pg,r[o])}function _S(s){switch(s){case 5126:return jM;case 35664:return QM;case 35665:return eS;case 35666:return tS;case 35674:return nS;case 35675:return iS;case 35676:return rS;case 5124:case 35670:return sS;case 35667:case 35671:return oS;case 35668:case 35672:return aS;case 35669:case 35673:return lS;case 5125:return cS;case 36294:return uS;case 36295:return hS;case 36296:return fS;case 35678:case 36198:case 36298:case 36306:case 35682:return dS;case 35679:case 36299:case 36307:return pS;case 35680:case 36300:case 36308:case 36293:return mS;case 36289:case 36303:case 36311:case 36292:return gS}}var Af=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=JM(t.type)}},Rf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_S(t.type)}},Cf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},wf=/(\w+)(\])?(\[|\.)?/g;function _g(s,e){s.seq.push(e),s.map[e.id]=e}function xS(s,e,t){let n=s.name,i=n.length;for(wf.lastIndex=0;;){let r=wf.exec(n),o=wf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){_g(t,c===void 0?new Af(a,s,e):new Rf(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Cf(a),_g(t,h)),t=h}}}var Uo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);xS(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function xg(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var yS=37297,vS=0;function MS(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var yg=new Je;function SS(s){ht._getMatrix(yg,ht.workingColorSpace,s);let e=`mat3( ${yg.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(s)){case ma:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function vg(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+MS(s.getShaderSource(e),a)}else return r}function bS(s,e){let t=SS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function TS(s,e){let t;switch(e){case Nm:t="Linear";break;case Um:t="Reinhard";break;case Om:t="Cineon";break;case Fm:t="ACESFilmic";break;case km:t="AgX";break;case zm:t="Neutral";break;case Bm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var mu=new B;function ES(){ht.getLuminanceCoefficients(mu);let s=mu.x.toFixed(4),e=mu.y.toFixed(4),t=mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Za).join(`
`)}function AS(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function RS(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Za(s){return s!==""}function Mg(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var CS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pf(s){return s.replace(CS,IS)}var PS=new Map;function IS(s,e){let t=nt[e];if(t===void 0){let n=PS.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pf(t)}var LS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bg(s){return s.replace(LS,DS)}function DS(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Tg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function NS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Jh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===dm?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function US(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ys:case vs:e="ENVMAP_TYPE_CUBE";break;case Ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function FS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case tf:e="ENVMAP_BLENDING_MULTIPLY";break;case Lm:e="ENVMAP_BLENDING_MIX";break;case Dm:e="ENVMAP_BLENDING_ADD";break}return e}function BS(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function kS(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=NS(t),c=US(t),u=OS(t),h=FS(t),f=BS(t),d=wS(t),g=AS(r),_=i.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Za).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Za).join(`
`),p.length>0&&(p+=`
`)):(m=[Tg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Za).join(`
`),p=[Tg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xr?"#define TONE_MAPPING":"",t.toneMapping!==xr?nt.tonemapping_pars_fragment:"",t.toneMapping!==xr?TS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,bS("linearToOutputTexel",t.outputColorSpace),ES(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Za).join(`
`)),o=Pf(o),o=Mg(o,t),o=Sg(o,t),a=Pf(a),a=Mg(a,t),a=Sg(a,t),o=bg(o),a=bg(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===pf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=S+m+o,v=S+p+a,w=xg(i,i.VERTEX_SHADER,b),R=xg(i,i.FRAGMENT_SHADER,v);i.attachShader(_,w),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(I){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(_)||"",V=i.getShaderInfoLog(w)||"",H=i.getShaderInfoLog(R)||"",X=N.trim(),W=V.trim(),G=H.trim(),z=!0,ee=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,w,R);else{let L=vg(i,w,"vertex"),ae=vg(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+L+`
`+ae)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||G==="")&&(ee=!1);ee&&(I.diagnostics={runnable:z,programLog:X,vertexShader:{log:W,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(w),i.deleteShader(R),E=new Uo(i,_),x=RS(i,_)}let E;this.getUniforms=function(){return E===void 0&&A(this),E};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,yS)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=R,this}var zS=0,If=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Lf(e),t.set(e,n)),n}},Lf=class{constructor(e){this.id=zS++,this.code=e,this.usedTimes=0}};function VS(s,e,t,n,i,r,o){let a=new go,l=new If,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,y,I,N,V){let H=N.fog,X=V.geometry,W=x.isMeshStandardMaterial?N.environment:null,G=(x.isMeshStandardMaterial?t:e).get(x.envMap||W),z=G&&G.mapping===Ha?G.image.height:null,ee=g[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let L=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ae=L!==void 0?L.length:0,Pe=0;X.morphAttributes.position!==void 0&&(Pe=1),X.morphAttributes.normal!==void 0&&(Pe=2),X.morphAttributes.color!==void 0&&(Pe=3);let Ze,He,ke,K;if(ee){let ye=$i[ee];Ze=ye.vertexShader,He=ye.fragmentShader}else Ze=x.vertexShader,He=x.fragmentShader,l.update(x),ke=l.getVertexShaderID(x),K=l.getFragmentShaderID(x);let J=s.getRenderTarget(),fe=s.state.buffers.depth.getReversed(),Ee=V.isInstancedMesh===!0,be=V.isBatchedMesh===!0,Fe=!!x.map,ft=!!x.matcap,C=!!G,le=!!x.aoMap,ge=!!x.lightMap,de=!!x.bumpMap,U=!!x.normalMap,je=!!x.displacementMap,ve=!!x.emissiveMap,Ge=!!x.metalnessMap,Qe=!!x.roughnessMap,_t=x.anisotropy>0,P=x.clearcoat>0,M=x.dispersion>0,k=x.iridescence>0,$=x.sheen>0,j=x.transmission>0,Z=_t&&!!x.anisotropyMap,Me=P&&!!x.clearcoatMap,se=P&&!!x.clearcoatNormalMap,Re=P&&!!x.clearcoatRoughnessMap,pe=k&&!!x.iridescenceMap,re=k&&!!x.iridescenceThicknessMap,he=$&&!!x.sheenColorMap,Ue=$&&!!x.sheenRoughnessMap,Ce=!!x.specularMap,ue=!!x.specularColorMap,We=!!x.specularIntensityMap,D=j&&!!x.transmissionMap,ie=j&&!!x.thicknessMap,oe=!!x.gradientMap,_e=!!x.alphaMap,ne=x.alphaTest>0,Q=!!x.alphaHash,Te=!!x.extensions,Be=xr;x.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Be=s.toneMapping);let pt={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:Ze,fragmentShader:He,defines:x.defines,customVertexShaderID:ke,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:be,batchingColor:be&&V._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&V.instanceColor!==null,instancingMorph:Ee&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?s.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:hn,alphaToCoverage:!!x.alphaToCoverage,map:Fe,matcap:ft,envMap:C,envMapMode:C&&G.mapping,envMapCubeUVHeight:z,aoMap:le,lightMap:ge,bumpMap:de,normalMap:U,displacementMap:f&&je,emissiveMap:ve,normalMapObjectSpace:U&&x.normalMapType===Xm,normalMapTangentSpace:U&&x.normalMapType===ff,metalnessMap:Ge,roughnessMap:Qe,anisotropy:_t,anisotropyMap:Z,clearcoat:P,clearcoatMap:Me,clearcoatNormalMap:se,clearcoatRoughnessMap:Re,dispersion:M,iridescence:k,iridescenceMap:pe,iridescenceThicknessMap:re,sheen:$,sheenColorMap:he,sheenRoughnessMap:Ue,specularMap:Ce,specularColorMap:ue,specularIntensityMap:We,transmission:j,transmissionMap:D,thicknessMap:ie,gradientMap:oe,opaque:x.transparent===!1&&x.blending===us&&x.alphaToCoverage===!1,alphaMap:_e,alphaTest:ne,alphaHash:Q,combine:x.combine,mapUv:Fe&&_(x.map.channel),aoMapUv:le&&_(x.aoMap.channel),lightMapUv:ge&&_(x.lightMap.channel),bumpMapUv:de&&_(x.bumpMap.channel),normalMapUv:U&&_(x.normalMap.channel),displacementMapUv:je&&_(x.displacementMap.channel),emissiveMapUv:ve&&_(x.emissiveMap.channel),metalnessMapUv:Ge&&_(x.metalnessMap.channel),roughnessMapUv:Qe&&_(x.roughnessMap.channel),anisotropyMapUv:Z&&_(x.anisotropyMap.channel),clearcoatMapUv:Me&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&_(x.sheenRoughnessMap.channel),specularMapUv:Ce&&_(x.specularMap.channel),specularColorMapUv:ue&&_(x.specularColorMap.channel),specularIntensityMapUv:We&&_(x.specularIntensityMap.channel),transmissionMapUv:D&&_(x.transmissionMap.channel),thicknessMapUv:ie&&_(x.thicknessMap.channel),alphaMapUv:_e&&_(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(U||_t),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&(Fe||_e),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:fe,skinning:V.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Pe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Be,decodeVideoTexture:Fe&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===Mt,decodeVideoTextureEmissive:ve&&x.emissiveMap.isVideoTexture===!0&&ht.getTransfer(x.emissiveMap.colorSpace)===Mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Yn,flipSided:x.side===In,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Te&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&x.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function p(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)y.push(I),y.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(S(y,x),b(y,x),y.push(s.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function S(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function b(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){let y=g[x.type],I;if(y){let N=$i[y];I=ng.clone(N.uniforms)}else I=x.uniforms;return I}function w(x,y){let I;for(let N=0,V=u.length;N<V;N++){let H=u[N];if(H.cacheKey===y){I=H,++I.usedTimes;break}}return I===void 0&&(I=new kS(s,y,x,r),u.push(I)),I}function R(x){if(--x.usedTimes===0){let y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function A(x){l.remove(x)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:E}}function HS(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function GS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Eg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function wg(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){let p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,_,m){let p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||GS),n.length>1&&n.sort(f||Eg),i.length>1&&i.sort(f||Eg)}function u(){for(let h=e,f=s.length;h<f;h++){let d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function WS(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new wg,s.set(n,[o])):i>=r.length?(o=new wg,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function XS(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new qe};break;case"SpotLight":t={position:new B,direction:new B,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function qS(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var YS=0;function ZS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function KS(s){let e=new XS,t=qS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let i=new B,r=new $e,o=new $e;function a(c){let u=0,h=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,b=0,v=0,w=0,R=0,A=0;c.sort(ZS);for(let x=0,y=c.length;x<y;x++){let I=c[x],N=I.color,V=I.intensity,H=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=N.r*V,h+=N.g*V,f+=N.b*V;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],V);A++}else if(I.isDirectionalLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let G=I.shadow,z=t.get(I);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=I.shadow.matrix,S++}n.directional[d]=W,d++}else if(I.isSpotLight){let W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(N).multiplyScalar(V),W.distance=H,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[_]=W;let G=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,G.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[_]=G.matrix,I.castShadow){let z=t.get(I);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=X,v++}_++}else if(I.isRectAreaLight){let W=e.get(I);W.color.copy(N).multiplyScalar(V),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=W,m++}else if(I.isPointLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let G=I.shadow,z=t.get(I);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,z.shadowCameraNear=G.camera.near,z.shadowCameraFar=G.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=I.shadow.matrix,b++}n.point[g]=W,g++}else if(I.isHemisphereLight){let W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(V),W.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[p]=W,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let E=n.hash;(E.directionalLength!==d||E.pointLength!==g||E.spotLength!==_||E.rectAreaLength!==m||E.hemiLength!==p||E.numDirectionalShadows!==S||E.numPointShadows!==b||E.numSpotShadows!==v||E.numSpotMaps!==w||E.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+w-R,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,E.directionalLength=d,E.pointLength=g,E.spotLength=_,E.rectAreaLength=m,E.hemiLength=p,E.numDirectionalShadows=S,E.numPointShadows=b,E.numSpotShadows=v,E.numSpotMaps=w,E.numLightProbes=A,n.version=YS++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0,m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let b=c[p];if(b.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(b.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(b.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Ag(s){let e=new KS(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function $S(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Ag(s),e.set(i,[a])):r>=o.length?(a=new Ag(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var JS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function QS(s,e,t){let n=new bo,i=new rt,r=new rt,o=new gt,a=new dc({depthPacking:Wm}),l=new pc,c={},u=t.maxTextureSize,h={[Di]:In,[In]:Di,[Yn]:Yn},f=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:JS,fragmentShader:jS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new _n;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new en(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jh;let p=this.type;this.render=function(R,A,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let x=s.getRenderTarget(),y=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),N=s.state;N.setBlending(_r),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let V=p!==Ki&&this.type===Ki,H=p===Ki&&this.type!==Ki;for(let X=0,W=R.length;X<W;X++){let G=R[X],z=G.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let ee=z.getFrameExtents();if(i.multiply(ee),r.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ee.x),i.x=r.x*ee.x,z.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ee.y),i.y=r.y*ee.y,z.mapSize.y=r.y)),z.map===null||V===!0||H===!0){let ae=this.type!==Ki?{minFilter:un,magFilter:un}:{};z.map!==null&&z.map.dispose(),z.map=new Wi(i.x,i.y,ae),z.map.texture.name=G.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();let L=z.getViewportCount();for(let ae=0;ae<L;ae++){let Pe=z.getViewport(ae);o.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),N.viewport(o),z.updateMatrices(G,ae),n=z.getFrustum(),v(A,E,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===Ki&&S(z,E),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(x,y,I)};function S(R,A){let E=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Wi(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(A,null,E,f,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(A,null,E,d,_,null)}function b(R,A,E,x){let y=null,I=E.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)y=I;else if(y=E.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=y.uuid,V=A.uuid,H=c[N];H===void 0&&(H={},c[N]=H);let X=H[V];X===void 0&&(X=y.clone(),H[V]=X,A.addEventListener("dispose",w)),y=X}if(y.visible=A.visible,y.wireframe=A.wireframe,x===Ki?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,E.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let N=s.properties.get(y);N.light=E}return y}function v(R,A,E,x,y){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Ki)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,R.matrixWorld);let V=e.update(R),H=R.material;if(Array.isArray(H)){let X=V.groups;for(let W=0,G=X.length;W<G;W++){let z=X[W],ee=H[z.materialIndex];if(ee&&ee.visible){let L=b(R,ee,x,y);R.onBeforeShadow(s,R,A,E,V,L,z),s.renderBufferDirect(E,null,V,L,R,z),R.onAfterShadow(s,R,A,E,V,L,z)}}}else if(H.visible){let X=b(R,H,x,y);R.onBeforeShadow(s,R,A,E,V,X,null),s.renderBufferDirect(E,null,V,X,R,null),R.onAfterShadow(s,R,A,E,V,X,null)}}let N=R.children;for(let V=0,H=N.length;V<H;V++)v(N[V],A,E,x,y)}function w(R){R.target.removeEventListener("dispose",w);for(let E in c){let x=c[E],y=R.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}var eb={[Sc]:bc,[Tc]:Ac,[Ec]:Rc,[hs]:wc,[bc]:Sc,[Ac]:Tc,[Rc]:Ec,[wc]:hs};function tb(s,e){function t(){let D=!1,ie=new gt,oe=null,_e=new gt(0,0,0,0);return{setMask:function(ne){oe!==ne&&!D&&(s.colorMask(ne,ne,ne,ne),oe=ne)},setLocked:function(ne){D=ne},setClear:function(ne,Q,Te,Be,pt){pt===!0&&(ne*=Be,Q*=Be,Te*=Be),ie.set(ne,Q,Te,Be),_e.equals(ie)===!1&&(s.clearColor(ne,Q,Te,Be),_e.copy(ie))},reset:function(){D=!1,oe=null,_e.set(-1,0,0,0)}}}function n(){let D=!1,ie=!1,oe=null,_e=null,ne=null;return{setReversed:function(Q){if(ie!==Q){let Te=e.get("EXT_clip_control");Q?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ie=Q;let Be=ne;ne=null,this.setClear(Be)}},getReversed:function(){return ie},setTest:function(Q){Q?J(s.DEPTH_TEST):fe(s.DEPTH_TEST)},setMask:function(Q){oe!==Q&&!D&&(s.depthMask(Q),oe=Q)},setFunc:function(Q){if(ie&&(Q=eb[Q]),_e!==Q){switch(Q){case Sc:s.depthFunc(s.NEVER);break;case bc:s.depthFunc(s.ALWAYS);break;case Tc:s.depthFunc(s.LESS);break;case hs:s.depthFunc(s.LEQUAL);break;case Ec:s.depthFunc(s.EQUAL);break;case wc:s.depthFunc(s.GEQUAL);break;case Ac:s.depthFunc(s.GREATER);break;case Rc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_e=Q}},setLocked:function(Q){D=Q},setClear:function(Q){ne!==Q&&(ie&&(Q=1-Q),s.clearDepth(Q),ne=Q)},reset:function(){D=!1,oe=null,_e=null,ne=null,ie=!1}}}function i(){let D=!1,ie=null,oe=null,_e=null,ne=null,Q=null,Te=null,Be=null,pt=null;return{setTest:function(ye){D||(ye?J(s.STENCIL_TEST):fe(s.STENCIL_TEST))},setMask:function(ye){ie!==ye&&!D&&(s.stencilMask(ye),ie=ye)},setFunc:function(ye,Ie,Ke){(oe!==ye||_e!==Ie||ne!==Ke)&&(s.stencilFunc(ye,Ie,Ke),oe=ye,_e=Ie,ne=Ke)},setOp:function(ye,Ie,Ke){(Q!==ye||Te!==Ie||Be!==Ke)&&(s.stencilOp(ye,Ie,Ke),Q=ye,Te=Ie,Be=Ke)},setLocked:function(ye){D=ye},setClear:function(ye){pt!==ye&&(s.clearStencil(ye),pt=ye)},reset:function(){D=!1,ie=null,oe=null,_e=null,ne=null,Q=null,Te=null,Be=null,pt=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,b=null,v=null,w=null,R=null,A=new qe(0,0,0),E=0,x=!1,y=null,I=null,N=null,V=null,H=null,X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,G=0,z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),W=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),W=G>=2);let ee=null,L={},ae=s.getParameter(s.SCISSOR_BOX),Pe=s.getParameter(s.VIEWPORT),Ze=new gt().fromArray(ae),He=new gt().fromArray(Pe);function ke(D,ie,oe,_e){let ne=new Uint8Array(4),Q=s.createTexture();s.bindTexture(D,Q),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Te=0;Te<oe;Te++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ie,0,s.RGBA,1,1,_e,0,s.RGBA,s.UNSIGNED_BYTE,ne):s.texImage2D(ie+Te,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ne);return Q}let K={};K[s.TEXTURE_2D]=ke(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=ke(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=ke(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=ke(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(s.DEPTH_TEST),o.setFunc(hs),de(!1),U($h),J(s.CULL_FACE),le(_r);function J(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function fe(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function Ee(D,ie){return h[D]!==ie?(s.bindFramebuffer(D,ie),h[D]=ie,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ie),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ie),!0):!1}function be(D,ie){let oe=d,_e=!1;if(D){oe=f.get(ie),oe===void 0&&(oe=[],f.set(ie,oe));let ne=D.textures;if(oe.length!==ne.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let Q=0,Te=ne.length;Q<Te;Q++)oe[Q]=s.COLOR_ATTACHMENT0+Q;oe.length=ne.length,_e=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,_e=!0);_e&&s.drawBuffers(oe)}function Fe(D){return g!==D?(s.useProgram(D),g=D,!0):!1}let ft={[Fr]:s.FUNC_ADD,[mm]:s.FUNC_SUBTRACT,[gm]:s.FUNC_REVERSE_SUBTRACT};ft[_m]=s.MIN,ft[xm]=s.MAX;let C={[ym]:s.ZERO,[vm]:s.ONE,[Mm]:s.SRC_COLOR,[ic]:s.SRC_ALPHA,[Am]:s.SRC_ALPHA_SATURATE,[Em]:s.DST_COLOR,[bm]:s.DST_ALPHA,[Sm]:s.ONE_MINUS_SRC_COLOR,[rc]:s.ONE_MINUS_SRC_ALPHA,[wm]:s.ONE_MINUS_DST_COLOR,[Tm]:s.ONE_MINUS_DST_ALPHA,[Rm]:s.CONSTANT_COLOR,[Cm]:s.ONE_MINUS_CONSTANT_COLOR,[Pm]:s.CONSTANT_ALPHA,[Im]:s.ONE_MINUS_CONSTANT_ALPHA};function le(D,ie,oe,_e,ne,Q,Te,Be,pt,ye){if(D===_r){_===!0&&(fe(s.BLEND),_=!1);return}if(_===!1&&(J(s.BLEND),_=!0),D!==pm){if(D!==m||ye!==x){if((p!==Fr||v!==Fr)&&(s.blendEquation(s.FUNC_ADD),p=Fr,v=Fr),ye)switch(D){case us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jh:s.blendFunc(s.ONE,s.ONE);break;case Qh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ef:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Qh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ef:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,b=null,w=null,R=null,A.set(0,0,0),E=0,m=D,x=ye}return}ne=ne||ie,Q=Q||oe,Te=Te||_e,(ie!==p||ne!==v)&&(s.blendEquationSeparate(ft[ie],ft[ne]),p=ie,v=ne),(oe!==S||_e!==b||Q!==w||Te!==R)&&(s.blendFuncSeparate(C[oe],C[_e],C[Q],C[Te]),S=oe,b=_e,w=Q,R=Te),(Be.equals(A)===!1||pt!==E)&&(s.blendColor(Be.r,Be.g,Be.b,pt),A.copy(Be),E=pt),m=D,x=!1}function ge(D,ie){D.side===Yn?fe(s.CULL_FACE):J(s.CULL_FACE);let oe=D.side===In;ie&&(oe=!oe),de(oe),D.blending===us&&D.transparent===!1?le(_r):le(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let _e=D.stencilWrite;a.setTest(_e),_e&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ve(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function de(D){y!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),y=D)}function U(D){D!==hm?(J(s.CULL_FACE),D!==I&&(D===$h?s.cullFace(s.BACK):D===fm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):fe(s.CULL_FACE),I=D}function je(D){D!==N&&(W&&s.lineWidth(D),N=D)}function ve(D,ie,oe){D?(J(s.POLYGON_OFFSET_FILL),(V!==ie||H!==oe)&&(s.polygonOffset(ie,oe),V=ie,H=oe)):fe(s.POLYGON_OFFSET_FILL)}function Ge(D){D?J(s.SCISSOR_TEST):fe(s.SCISSOR_TEST)}function Qe(D){D===void 0&&(D=s.TEXTURE0+X-1),ee!==D&&(s.activeTexture(D),ee=D)}function _t(D,ie,oe){oe===void 0&&(ee===null?oe=s.TEXTURE0+X-1:oe=ee);let _e=L[oe];_e===void 0&&(_e={type:void 0,texture:void 0},L[oe]=_e),(_e.type!==D||_e.texture!==ie)&&(ee!==oe&&(s.activeTexture(oe),ee=oe),s.bindTexture(D,ie||K[D]),_e.type=D,_e.texture=ie)}function P(){let D=L[ee];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(D){Ze.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Ze.copy(D))}function Ue(D){He.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),He.copy(D))}function Ce(D,ie){let oe=c.get(ie);oe===void 0&&(oe=new WeakMap,c.set(ie,oe));let _e=oe.get(D);_e===void 0&&(_e=s.getUniformBlockIndex(ie,D.name),oe.set(D,_e))}function ue(D,ie){let _e=c.get(ie).get(D);l.get(ie)!==_e&&(s.uniformBlockBinding(ie,_e,D.__bindingPointIndex),l.set(ie,_e))}function We(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ee=null,L={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,b=null,v=null,w=null,R=null,A=new qe(0,0,0),E=0,x=!1,y=null,I=null,N=null,V=null,H=null,Ze.set(0,0,s.canvas.width,s.canvas.height),He.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:fe,bindFramebuffer:Ee,drawBuffers:be,useProgram:Fe,setBlending:le,setMaterial:ge,setFlipSided:de,setCullFace:U,setLineWidth:je,setPolygonOffset:ve,setScissorTest:Ge,activeTexture:Qe,bindTexture:_t,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:k,texImage2D:pe,texImage3D:re,updateUBOMapping:Ce,uniformBlockBinding:ue,texStorage2D:se,texStorage3D:Re,texSubImage2D:$,texSubImage3D:j,compressedTexSubImage2D:Z,compressedTexSubImage3D:Me,scissor:he,viewport:Ue,reset:We}}function nb(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,M){return d?new OffscreenCanvas(P,M):fo("canvas")}function _(P,M,k){let $=1,j=_t(P);if((j.width>k||j.height>k)&&($=k/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Z=Math.floor($*j.width),Me=Math.floor($*j.height);h===void 0&&(h=g(Z,Me));let se=M?g(Z,Me):h;return se.width=Z,se.height=Me,se.getContext("2d").drawImage(P,0,0,Z,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Z+"x"+Me+")."),se}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(P,M,k,$,j=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=M;if(M===s.RED&&(k===s.FLOAT&&(Z=s.R32F),k===s.HALF_FLOAT&&(Z=s.R16F),k===s.UNSIGNED_BYTE&&(Z=s.R8)),M===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.R8UI),k===s.UNSIGNED_SHORT&&(Z=s.R16UI),k===s.UNSIGNED_INT&&(Z=s.R32UI),k===s.BYTE&&(Z=s.R8I),k===s.SHORT&&(Z=s.R16I),k===s.INT&&(Z=s.R32I)),M===s.RG&&(k===s.FLOAT&&(Z=s.RG32F),k===s.HALF_FLOAT&&(Z=s.RG16F),k===s.UNSIGNED_BYTE&&(Z=s.RG8)),M===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RG8UI),k===s.UNSIGNED_SHORT&&(Z=s.RG16UI),k===s.UNSIGNED_INT&&(Z=s.RG32UI),k===s.BYTE&&(Z=s.RG8I),k===s.SHORT&&(Z=s.RG16I),k===s.INT&&(Z=s.RG32I)),M===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),k===s.UNSIGNED_INT&&(Z=s.RGB32UI),k===s.BYTE&&(Z=s.RGB8I),k===s.SHORT&&(Z=s.RGB16I),k===s.INT&&(Z=s.RGB32I)),M===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),k===s.UNSIGNED_INT&&(Z=s.RGBA32UI),k===s.BYTE&&(Z=s.RGBA8I),k===s.SHORT&&(Z=s.RGBA16I),k===s.INT&&(Z=s.RGBA32I)),M===s.RGB&&(k===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),M===s.RGBA){let Me=j?ma:ht.getTransfer($);k===s.FLOAT&&(Z=s.RGBA32F),k===s.HALF_FLOAT&&(Z=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Z=Me===Mt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function v(P,M){let k;return P?M===null||M===Hr||M===Po?k=s.DEPTH24_STENCIL8:M===xi?k=s.DEPTH32F_STENCIL8:M===Ro&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Hr||M===Po?k=s.DEPTH_COMPONENT24:M===xi?k=s.DEPTH_COMPONENT32F:M===Ro&&(k=s.DEPTH_COMPONENT16),k}function w(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==un&&P.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function R(P){let M=P.target;M.removeEventListener("dispose",R),E(M),M.isVideoTexture&&u.delete(M)}function A(P){let M=P.target;M.removeEventListener("dispose",A),y(M)}function E(P){let M=n.get(P);if(M.__webglInit===void 0)return;let k=P.source,$=f.get(k);if($){let j=$[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&x(P),Object.keys($).length===0&&f.delete(k)}n.remove(P)}function x(P){let M=n.get(P);s.deleteTexture(M.__webglTexture);let k=P.source,$=f.get(k);delete $[M.__cacheKey],o.memory.textures--}function y(P){let M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let j=0;j<M.__webglFramebuffer[$].length;j++)s.deleteFramebuffer(M.__webglFramebuffer[$][j]);else s.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)s.deleteFramebuffer(M.__webglFramebuffer[$]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let k=P.textures;for(let $=0,j=k.length;$<j;$++){let Z=n.get(k[$]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(k[$])}n.remove(P)}let I=0;function N(){I=0}function V(){let P=I;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),I+=1,P}function H(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function X(P,M){let k=n.get(P);if(P.isVideoTexture&&Ge(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){let $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,P,M);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+M)}function W(P,M){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){K(k,P,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+M)}function G(P,M){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){K(k,P,M);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+M)}function z(P,M){let k=n.get(P);if(P.version>0&&k.__version!==P.version){J(k,P,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+M)}let ee={[Br]:s.REPEAT,[Hi]:s.CLAMP_TO_EDGE,[uo]:s.MIRRORED_REPEAT},L={[un]:s.NEAREST,[Ic]:s.NEAREST_MIPMAP_NEAREST,[Ms]:s.NEAREST_MIPMAP_LINEAR,[Cn]:s.LINEAR,[Ao]:s.LINEAR_MIPMAP_NEAREST,[Oi]:s.LINEAR_MIPMAP_LINEAR},ae={[qm]:s.NEVER,[jm]:s.ALWAYS,[Ym]:s.LESS,[df]:s.LEQUAL,[Zm]:s.EQUAL,[Jm]:s.GEQUAL,[Km]:s.GREATER,[$m]:s.NOTEQUAL};function Pe(P,M){if(M.type===xi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Cn||M.magFilter===Ao||M.magFilter===Ms||M.magFilter===Oi||M.minFilter===Cn||M.minFilter===Ao||M.minFilter===Ms||M.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ee[M.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ee[M.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ee[M.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,L[M.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,L[M.minFilter]),M.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===un||M.minFilter!==Ms&&M.minFilter!==Oi||M.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ze(P,M){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",R));let $=M.source,j=f.get($);j===void 0&&(j={},f.set($,j));let Z=H(M);if(Z!==P.__cacheKey){j[Z]===void 0&&(j[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),j[Z].usedTimes++;let Me=j[P.__cacheKey];Me!==void 0&&(j[P.__cacheKey].usedTimes--,Me.usedTimes===0&&x(M)),P.__cacheKey=Z,P.__webglTexture=j[Z].texture}return k}function He(P,M,k){return Math.floor(Math.floor(P/k)/M)}function ke(P,M,k,$){let Z=P.updateRanges;if(Z.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,k,$,M.data);else{Z.sort((re,he)=>re.start-he.start);let Me=0;for(let re=1;re<Z.length;re++){let he=Z[Me],Ue=Z[re],Ce=he.start+he.count,ue=He(Ue.start,M.width,4),We=He(he.start,M.width,4);Ue.start<=Ce+1&&ue===We&&He(Ue.start+Ue.count-1,M.width,4)===ue?he.count=Math.max(he.count,Ue.start+Ue.count-he.start):(++Me,Z[Me]=Ue)}Z.length=Me+1;let se=s.getParameter(s.UNPACK_ROW_LENGTH),Re=s.getParameter(s.UNPACK_SKIP_PIXELS),pe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let re=0,he=Z.length;re<he;re++){let Ue=Z[re],Ce=Math.floor(Ue.start/4),ue=Math.ceil(Ue.count/4),We=Ce%M.width,D=Math.floor(Ce/M.width),ie=ue,oe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,We),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),t.texSubImage2D(s.TEXTURE_2D,0,We,D,ie,oe,k,$,M.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,se),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Re),s.pixelStorei(s.UNPACK_SKIP_ROWS,pe)}}function K(P,M,k){let $=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=s.TEXTURE_3D);let j=Ze(P,M),Z=M.source;t.bindTexture($,P.__webglTexture,s.TEXTURE0+k);let Me=n.get(Z);if(Z.version!==Me.__version||j===!0){t.activeTexture(s.TEXTURE0+k);let se=ht.getPrimaries(ht.workingColorSpace),Re=M.colorSpace===yr?null:ht.getPrimaries(M.colorSpace),pe=M.colorSpace===yr||se===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let re=_(M.image,!1,i.maxTextureSize);re=Qe(M,re);let he=r.convert(M.format,M.colorSpace),Ue=r.convert(M.type),Ce=b(M.internalFormat,he,Ue,M.colorSpace,M.isVideoTexture);Pe($,M);let ue,We=M.mipmaps,D=M.isVideoTexture!==!0,ie=Me.__version===void 0||j===!0,oe=Z.dataReady,_e=w(M,re);if(M.isDepthTexture)Ce=v(M.format===Io,M.type),ie&&(D?t.texStorage2D(s.TEXTURE_2D,1,Ce,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,Ce,re.width,re.height,0,he,Ue,null));else if(M.isDataTexture)if(We.length>0){D&&ie&&t.texStorage2D(s.TEXTURE_2D,_e,Ce,We[0].width,We[0].height);for(let ne=0,Q=We.length;ne<Q;ne++)ue=We[ne],D?oe&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ue.width,ue.height,he,Ue,ue.data):t.texImage2D(s.TEXTURE_2D,ne,Ce,ue.width,ue.height,0,he,Ue,ue.data);M.generateMipmaps=!1}else D?(ie&&t.texStorage2D(s.TEXTURE_2D,_e,Ce,re.width,re.height),oe&&ke(M,re,he,Ue)):t.texImage2D(s.TEXTURE_2D,0,Ce,re.width,re.height,0,he,Ue,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){D&&ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Ce,We[0].width,We[0].height,re.depth);for(let ne=0,Q=We.length;ne<Q;ne++)if(ue=We[ne],M.format!==ri)if(he!==null)if(D){if(oe)if(M.layerUpdates.size>0){let Te=vf(ue.width,ue.height,M.format,M.type);for(let Be of M.layerUpdates){let pt=ue.data.subarray(Be*Te/ue.data.BYTES_PER_ELEMENT,(Be+1)*Te/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,Be,ue.width,ue.height,1,he,pt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,re.depth,he,ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,Ce,ue.width,ue.height,re.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?oe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,re.depth,he,Ue,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,Ce,ue.width,ue.height,re.depth,0,he,Ue,ue.data)}else{D&&ie&&t.texStorage2D(s.TEXTURE_2D,_e,Ce,We[0].width,We[0].height);for(let ne=0,Q=We.length;ne<Q;ne++)ue=We[ne],M.format!==ri?he!==null?D?oe&&t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,ue.width,ue.height,he,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,Ce,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?oe&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ue.width,ue.height,he,Ue,ue.data):t.texImage2D(s.TEXTURE_2D,ne,Ce,ue.width,ue.height,0,he,Ue,ue.data)}else if(M.isDataArrayTexture)if(D){if(ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Ce,re.width,re.height,re.depth),oe)if(M.layerUpdates.size>0){let ne=vf(re.width,re.height,M.format,M.type);for(let Q of M.layerUpdates){let Te=re.data.subarray(Q*ne/re.data.BYTES_PER_ELEMENT,(Q+1)*ne/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,he,Ue,Te)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,he,Ue,re.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,re.width,re.height,re.depth,0,he,Ue,re.data);else if(M.isData3DTexture)D?(ie&&t.texStorage3D(s.TEXTURE_3D,_e,Ce,re.width,re.height,re.depth),oe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,he,Ue,re.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,re.width,re.height,re.depth,0,he,Ue,re.data);else if(M.isFramebufferTexture){if(ie)if(D)t.texStorage2D(s.TEXTURE_2D,_e,Ce,re.width,re.height);else{let ne=re.width,Q=re.height;for(let Te=0;Te<_e;Te++)t.texImage2D(s.TEXTURE_2D,Te,Ce,ne,Q,0,he,Ue,null),ne>>=1,Q>>=1}}else if(We.length>0){if(D&&ie){let ne=_t(We[0]);t.texStorage2D(s.TEXTURE_2D,_e,Ce,ne.width,ne.height)}for(let ne=0,Q=We.length;ne<Q;ne++)ue=We[ne],D?oe&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,he,Ue,ue):t.texImage2D(s.TEXTURE_2D,ne,Ce,he,Ue,ue);M.generateMipmaps=!1}else if(D){if(ie){let ne=_t(re);t.texStorage2D(s.TEXTURE_2D,_e,Ce,ne.width,ne.height)}oe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he,Ue,re)}else t.texImage2D(s.TEXTURE_2D,0,Ce,he,Ue,re);m(M)&&p($),Me.__version=Z.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function J(P,M,k){if(M.image.length!==6)return;let $=Ze(P,M),j=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+k);let Z=n.get(j);if(j.version!==Z.__version||$===!0){t.activeTexture(s.TEXTURE0+k);let Me=ht.getPrimaries(ht.workingColorSpace),se=M.colorSpace===yr?null:ht.getPrimaries(M.colorSpace),Re=M.colorSpace===yr||Me===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let pe=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,he=[];for(let Q=0;Q<6;Q++)!pe&&!re?he[Q]=_(M.image[Q],!0,i.maxCubemapSize):he[Q]=re?M.image[Q].image:M.image[Q],he[Q]=Qe(M,he[Q]);let Ue=he[0],Ce=r.convert(M.format,M.colorSpace),ue=r.convert(M.type),We=b(M.internalFormat,Ce,ue,M.colorSpace),D=M.isVideoTexture!==!0,ie=Z.__version===void 0||$===!0,oe=j.dataReady,_e=w(M,Ue);Pe(s.TEXTURE_CUBE_MAP,M);let ne;if(pe){D&&ie&&t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,We,Ue.width,Ue.height);for(let Q=0;Q<6;Q++){ne=he[Q].mipmaps;for(let Te=0;Te<ne.length;Te++){let Be=ne[Te];M.format!==ri?Ce!==null?D?oe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,Be.width,Be.height,Ce,Be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,We,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,0,0,Be.width,Be.height,Ce,ue,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te,We,Be.width,Be.height,0,Ce,ue,Be.data)}}}else{if(ne=M.mipmaps,D&&ie){ne.length>0&&_e++;let Q=_t(he[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,We,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){D?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,he[Q].width,he[Q].height,Ce,ue,he[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,We,he[Q].width,he[Q].height,0,Ce,ue,he[Q].data);for(let Te=0;Te<ne.length;Te++){let pt=ne[Te].image[Q].image;D?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,pt.width,pt.height,Ce,ue,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,We,pt.width,pt.height,0,Ce,ue,pt.data)}}else{D?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ce,ue,he[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,We,Ce,ue,he[Q]);for(let Te=0;Te<ne.length;Te++){let Be=ne[Te];D?oe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,0,0,Ce,ue,Be.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Te+1,We,Ce,ue,Be.image[Q])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),Z.__version=j.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function fe(P,M,k,$,j,Z){let Me=r.convert(k.format,k.colorSpace),se=r.convert(k.type),Re=b(k.internalFormat,Me,se,k.colorSpace),pe=n.get(M),re=n.get(k);if(re.__renderTarget=M,!pe.__hasExternalTextures){let he=Math.max(1,M.width>>Z),Ue=Math.max(1,M.height>>Z);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,Z,Re,he,Ue,M.depth,0,Me,se,null):t.texImage2D(j,Z,Re,he,Ue,0,Me,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),ve(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,j,re.__webglTexture,0,je(M)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,j,re.__webglTexture,Z),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ee(P,M,k){if(s.bindRenderbuffer(s.RENDERBUFFER,P),M.depthBuffer){let $=M.depthTexture,j=$&&$.isDepthTexture?$.type:null,Z=v(M.stencilBuffer,j),Me=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=je(M);ve(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,Z,M.width,M.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,Z,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Z,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,P)}else{let $=M.textures;for(let j=0;j<$.length;j++){let Z=$[j],Me=r.convert(Z.format,Z.colorSpace),se=r.convert(Z.type),Re=b(Z.internalFormat,Me,se,Z.colorSpace),pe=je(M);k&&ve(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,Re,M.width,M.height):ve(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,Re,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Re,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);let j=$.__webglTexture,Z=je(M);if(M.depthTexture.format===ho)ve(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(M.depthTexture.format===Io)ve(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Fe(P){let M=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){let $=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=$}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");let $=P.texture.mipmaps;$&&$.length>0?be(M.__webglFramebuffer[0],P):be(M.__webglFramebuffer,P)}else if(k){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=s.createRenderbuffer(),Ee(M.__webglDepthbuffer[$],P,!1);else{let j=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,Z)}}else{let $=P.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Ee(M.__webglDepthbuffer,P,!1);else{let j=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,Z)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(P,M,k){let $=n.get(P);M!==void 0&&fe($.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Fe(P)}function C(P){let M=P.texture,k=n.get(P),$=n.get(M);P.addEventListener("dispose",A);let j=P.textures,Z=P.isWebGLCubeRenderTarget===!0,Me=j.length>1;if(Me||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=M.version,o.memory.textures++),Z){k.__webglFramebuffer=[];for(let se=0;se<6;se++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[se]=[];for(let Re=0;Re<M.mipmaps.length;Re++)k.__webglFramebuffer[se][Re]=s.createFramebuffer()}else k.__webglFramebuffer[se]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let se=0;se<M.mipmaps.length;se++)k.__webglFramebuffer[se]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Me)for(let se=0,Re=j.length;se<Re;se++){let pe=n.get(j[se]);pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&ve(P)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){let Re=j[se];k.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[se]);let pe=r.convert(Re.format,Re.colorSpace),re=r.convert(Re.type),he=b(Re.internalFormat,pe,re,Re.colorSpace,P.isXRRenderTarget===!0),Ue=je(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,he,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,k.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Ee(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Pe(s.TEXTURE_CUBE_MAP,M);for(let se=0;se<6;se++)if(M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)fe(k.__webglFramebuffer[se][Re],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re);else fe(k.__webglFramebuffer[se],P,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(M)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let se=0,Re=j.length;se<Re;se++){let pe=j[se],re=n.get(pe),he=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,re.__webglTexture),Pe(he,pe),fe(k.__webglFramebuffer,P,pe,s.COLOR_ATTACHMENT0+se,he,0),m(pe)&&p(he)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(se=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,$.__webglTexture),Pe(se,M),M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)fe(k.__webglFramebuffer[Re],P,M,s.COLOR_ATTACHMENT0,se,Re);else fe(k.__webglFramebuffer,P,M,s.COLOR_ATTACHMENT0,se,0);m(M)&&p(se),t.unbindTexture()}P.depthBuffer&&Fe(P)}function le(P){let M=P.textures;for(let k=0,$=M.length;k<$;k++){let j=M[k];if(m(j)){let Z=S(P),Me=n.get(j).__webglTexture;t.bindTexture(Z,Me),p(Z),t.unbindTexture()}}}let ge=[],de=[];function U(P){if(P.samples>0){if(ve(P)===!1){let M=P.textures,k=P.width,$=P.height,j=s.COLOR_BUFFER_BIT,Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=n.get(P),se=M.length>1;if(se)for(let pe=0;pe<M.length;pe++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let Re=P.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let pe=0;pe<M.length;pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[pe]);let re=n.get(M[pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,re,0)}s.blitFramebuffer(0,0,k,$,0,0,k,$,j,s.NEAREST),l===!0&&(ge.length=0,de.length=0,ge.push(s.COLOR_ATTACHMENT0+pe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ge.push(Z),de.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,de)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let pe=0;pe<M.length;pe++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,Me.__webglColorRenderbuffer[pe]);let re=n.get(M[pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,re,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let M=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function je(P){return Math.min(i.maxSamples,P.samples)}function ve(P){let M=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ge(P){let M=o.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function Qe(P,M){let k=P.colorSpace,$=P.format,j=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==hn&&k!==yr&&(ht.getTransfer(k)===Mt?($!==ri||j!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function _t(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=G,this.setTextureCube=z,this.rebindTextures=ft,this.setupRenderTarget=C,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ve}function ib(s,e){function t(n,i=yr){let r,o=ht.getTransfer(i);if(n===Fi)return s.UNSIGNED_BYTE;if(n===Dc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Nc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===of)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===af)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===rf)return s.BYTE;if(n===sf)return s.SHORT;if(n===Ro)return s.UNSIGNED_SHORT;if(n===Lc)return s.INT;if(n===Hr)return s.UNSIGNED_INT;if(n===xi)return s.FLOAT;if(n===Co)return s.HALF_FLOAT;if(n===lf)return s.ALPHA;if(n===cf)return s.RGB;if(n===ri)return s.RGBA;if(n===ho)return s.DEPTH_COMPONENT;if(n===Io)return s.DEPTH_STENCIL;if(n===Uc)return s.RED;if(n===Oc)return s.RED_INTEGER;if(n===uf)return s.RG;if(n===Fc)return s.RG_INTEGER;if(n===Bc)return s.RGBA_INTEGER;if(n===Ga||n===Wa||n===Xa||n===qa)if(o===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kc||n===zc||n===Vc||n===Hc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===kc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gc||n===Wc||n===Xc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gc||n===Wc)return o===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qc||n===Yc||n===Zc||n===Kc||n===$c||n===Jc||n===jc||n===Qc||n===eu||n===tu||n===nu||n===iu||n===ru||n===su)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$c)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===iu)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ru)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===su)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ou||n===au||n===lu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ou)return o===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===au)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cu||n===uu||n===hu||n===fu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===cu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Po?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var rb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Df=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Pa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ui({vertexShader:rb,fragmentShader:sb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new La(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nf=class extends fr{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null,_=typeof XRWebGLBinding<"u",m=new Df,p={},S=t.getContextAttributes(),b=null,v=null,w=[],R=[],A=new rt,E=null,x=new qt;x.viewport=new gt;let y=new qt;y.viewport=new gt;let I=[x,y],N=new Mc,V=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=w[K];return J===void 0&&(J=new xo,w[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=w[K];return J===void 0&&(J=new xo,w[K]=J),J.getGripSpace()},this.getHand=function(K){let J=w[K];return J===void 0&&(J=new xo,w[K]=J),J.getHandSpace()};function X(K){let J=R.indexOf(K.inputSource);if(J===-1)return;let fe=w[J];fe!==void 0&&(fe.update(K.inputSource,K.frame,c||o),fe.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",G);for(let K=0;K<w.length;K++){let J=R[K];J!==null&&(R[K]=null,w[K].disconnect(J))}V=null,H=null,m.reset();for(let K in p)delete p[K];e.setRenderTarget(b),d=null,f=null,h=null,i=null,v=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",W),i.addEventListener("inputsourceschange",G),S.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ee=null,be=null;S.depth&&(be=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=S.stencil?Io:ho,Ee=S.stencil?Po:Hr);let Fe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Fe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Wi(f.textureWidth,f.textureHeight,{format:ri,type:Fi,depthTexture:new Ca(f.textureWidth,f.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let fe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Wi(d.framebufferWidth,d.framebufferHeight,{format:ri,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ke.setContext(i),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(K){for(let J=0;J<K.removed.length;J++){let fe=K.removed[J],Ee=R.indexOf(fe);Ee>=0&&(R[Ee]=null,w[Ee].disconnect(fe))}for(let J=0;J<K.added.length;J++){let fe=K.added[J],Ee=R.indexOf(fe);if(Ee===-1){for(let Fe=0;Fe<w.length;Fe++)if(Fe>=R.length){R.push(fe),Ee=Fe;break}else if(R[Fe]===null){R[Fe]=fe,Ee=Fe;break}if(Ee===-1)break}let be=w[Ee];be&&be.connect(fe)}}let z=new B,ee=new B;function L(K,J,fe){z.setFromMatrixPosition(J.matrixWorld),ee.setFromMatrixPosition(fe.matrixWorld);let Ee=z.distanceTo(ee),be=J.projectionMatrix.elements,Fe=fe.projectionMatrix.elements,ft=be[14]/(be[10]-1),C=be[14]/(be[10]+1),le=(be[9]+1)/be[5],ge=(be[9]-1)/be[5],de=(be[8]-1)/be[0],U=(Fe[8]+1)/Fe[0],je=ft*de,ve=ft*U,Ge=Ee/(-de+U),Qe=Ge*-de;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Qe),K.translateZ(Ge),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),be[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let _t=ft+Ge,P=C+Ge,M=je-Qe,k=ve+(Ee-Qe),$=le*C/P*_t,j=ge*C/P*_t;K.projectionMatrix.makePerspective(M,k,$,j,_t,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let J=K.near,fe=K.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),N.near=y.near=x.near=J,N.far=y.far=x.far=fe,(V!==N.near||H!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),V=N.near,H=N.far),N.layers.mask=K.layers.mask|6,x.layers.mask=N.layers.mask&3,y.layers.mask=N.layers.mask&5;let Ee=K.parent,be=N.cameras;ae(N,Ee);for(let Fe=0;Fe<be.length;Fe++)ae(be[Fe],Ee);be.length===2?L(N,x,y):N.projectionMatrix.copy(x.projectionMatrix),Pe(K,N,Ee)};function Pe(K,J,fe){fe===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(fe.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ps*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(K){return p[K]};let Ze=null;function He(K,J){if(u=J.getViewerPose(c||o),g=J,u!==null){let fe=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Ee=!1;fe.length!==N.cameras.length&&(N.cameras.length=0,Ee=!0);for(let C=0;C<fe.length;C++){let le=fe[C],ge=null;if(d!==null)ge=d.getViewport(le);else{let U=h.getViewSubImage(f,le);ge=U.viewport,C===0&&(e.setRenderTargetTextures(v,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(v))}let de=I[C];de===void 0&&(de=new qt,de.layers.enable(C),de.viewport=new gt,I[C]=de),de.matrix.fromArray(le.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(le.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(ge.x,ge.y,ge.width,ge.height),C===0&&(N.matrix.copy(de.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ee===!0&&N.cameras.push(de)}let be=i.enabledFeatures;if(be&&be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let C=h.getDepthInformation(fe[0]);C&&C.isValid&&C.texture&&m.init(C,i.renderState)}if(be&&be.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let C=0;C<fe.length;C++){let le=fe[C].camera;if(le){let ge=p[le];ge||(ge=new Pa,p[le]=ge);let de=h.getCameraImage(le);ge.sourceTexture=de}}}}for(let fe=0;fe<w.length;fe++){let Ee=R[fe],be=w[fe];Ee!==null&&be!==void 0&&be.update(Ee,J,c||o)}Ze&&Ze(K,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let ke=new Rg;ke.setAnimationLoop(He),this.setAnimationLoop=function(K){Ze=K},this.dispose=function(){}}},Ts=new Ni,ob=new $e;function ab(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,_f(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===In&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===In&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),b=S.envMap,v=S.envMapRotation;b&&(m.envMap.value=b,Ts.copy(v),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),m.envMapRotation.value.setFromMatrix4(ob.makeRotationFromEuler(Ts)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===In&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lb(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){let v=b.program;n.uniformBlockBinding(S,v)}function c(S,b){let v=i[S.id];v===void 0&&(g(S),v=u(S),i[S.id]=v,S.addEventListener("dispose",m));let w=b.program;n.updateUBOMapping(S,w);let R=e.render.frame;r[S.id]!==R&&(f(S),r[S.id]=R)}function u(S){let b=h();S.__bindingPointIndex=b;let v=s.createBuffer(),w=S.__size,R=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,w,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,v),v}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let b=i[S.id],v=S.uniforms,w=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let R=0,A=v.length;R<A;R++){let E=Array.isArray(v[R])?v[R]:[v[R]];for(let x=0,y=E.length;x<y;x++){let I=E[x];if(d(I,R,x,w)===!0){let N=I.__offset,V=Array.isArray(I.value)?I.value:[I.value],H=0;for(let X=0;X<V.length;X++){let W=V[X],G=_(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,N+H,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,H),H+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(S,b,v,w){let R=S.value,A=b+"_"+v;if(w[A]===void 0)return typeof R=="number"||typeof R=="boolean"?w[A]=R:w[A]=R.clone(),!0;{let E=w[A];if(typeof R=="number"||typeof R=="boolean"){if(E!==R)return w[A]=R,!0}else if(E.equals(R)===!1)return E.copy(R),!0}return!1}function g(S){let b=S.uniforms,v=0,w=16;for(let A=0,E=b.length;A<E;A++){let x=Array.isArray(b[A])?b[A]:[b[A]];for(let y=0,I=x.length;y<I;y++){let N=x[y],V=Array.isArray(N.value)?N.value:[N.value];for(let H=0,X=V.length;H<X;H++){let W=V[H],G=_(W),z=v%w,ee=z%G.boundary,L=z+ee;v+=ee,L!==0&&w-L<G.storage&&(v+=w-L),N.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=G.storage}}}let R=v%w;return R>0&&(v+=w-R),S.__size=v,S.__cache={},this}function _(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){let b=S.target;b.removeEventListener("dispose",m);let v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(let S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var _u=class{constructor(e={}){let{canvas:t=Qm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,S=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,w=!1;this._outputColorSpace=zt;let R=0,A=0,E=null,x=-1,y=null,I=new gt,N=new gt,V=null,H=new qe(0),X=0,W=t.width,G=t.height,z=1,ee=null,L=null,ae=new gt(0,0,W,G),Pe=new gt(0,0,W,G),Ze=!1,He=new bo,ke=!1,K=!1,J=new $e,fe=new B,Ee=new gt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function ft(){return E===null?z:1}let C=n;function le(T,O){return t.getContext(T,O)}try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ne,!1),C===null){let O="webgl2";if(C=le(O,T),C===null)throw le(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ge,de,U,je,ve,Ge,Qe,_t,P,M,k,$,j,Z,Me,se,Re,pe,re,he,Ue,Ce,ue,We;function D(){ge=new wM(C),ge.init(),Ce=new ib(C,ge),de=new yM(C,ge,e,Ce),U=new tb(C,ge),de.reversedDepthBuffer&&f&&U.buffers.depth.setReversed(!0),je=new CM(C),ve=new HS,Ge=new nb(C,ge,U,ve,de,Ce,je),Qe=new MM(v),_t=new EM(v),P=new Ux(C),ue=new _M(C,P),M=new AM(C,P,je,ue),k=new IM(C,M,P,je),re=new PM(C,de,Ge),se=new vM(ve),$=new VS(v,Qe,_t,ge,de,ue,se),j=new ab(v,ve),Z=new WS,Me=new $S(ge),pe=new gM(v,Qe,_t,U,k,d,l),Re=new QS(v,k,de),We=new lb(C,je,de,U),he=new xM(C,ge,je),Ue=new RM(C,ge,je),je.programs=$.programs,v.capabilities=de,v.extensions=ge,v.properties=ve,v.renderLists=Z,v.shadowMap=Re,v.state=U,v.info=je}D();let ie=new Nf(v,C);this.xr=ie,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let T=ge.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ge.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(W,G,!1))},this.getSize=function(T){return T.set(W,G)},this.setSize=function(T,O,q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,G=O,t.width=Math.floor(T*z),t.height=Math.floor(O*z),q===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(W*z,G*z).floor()},this.setDrawingBufferSize=function(T,O,q){W=T,G=O,z=q,t.width=Math.floor(T*q),t.height=Math.floor(O*q),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(ae)},this.setViewport=function(T,O,q,Y){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,O,q,Y),U.viewport(I.copy(ae).multiplyScalar(z).round())},this.getScissor=function(T){return T.copy(Pe)},this.setScissor=function(T,O,q,Y){T.isVector4?Pe.set(T.x,T.y,T.z,T.w):Pe.set(T,O,q,Y),U.scissor(N.copy(Pe).multiplyScalar(z).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(T){U.setScissorTest(Ze=T)},this.setOpaqueSort=function(T){ee=T},this.setTransparentSort=function(T){L=T},this.getClearColor=function(T){return T.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,q=!0){let Y=0;if(T){let F=!1;if(E!==null){let te=E.texture.format;F=te===Bc||te===Fc||te===Oc}if(F){let te=E.texture.type,ce=te===Fi||te===Hr||te===Ro||te===Po||te===Dc||te===Nc,we=pe.getClearColor(),Se=pe.getClearAlpha(),Oe=we.r,De=we.g,Le=we.b;ce?(g[0]=Oe,g[1]=De,g[2]=Le,g[3]=Se,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Oe,_[1]=De,_[2]=Le,_[3]=Se,C.clearBufferiv(C.COLOR,0,_))}else Y|=C.COLOR_BUFFER_BIT}O&&(Y|=C.DEPTH_BUFFER_BIT),q&&(Y|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),pe.dispose(),Z.dispose(),Me.dispose(),ve.dispose(),Qe.dispose(),_t.dispose(),k.dispose(),ue.dispose(),We.dispose(),$.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Ke),ie.removeEventListener("sessionend",me),ze.stop()};function oe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let T=je.autoReset,O=Re.enabled,q=Re.autoUpdate,Y=Re.needsUpdate,F=Re.type;D(),je.autoReset=T,Re.enabled=O,Re.autoUpdate=q,Re.needsUpdate=Y,Re.type=F}function ne(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Q(T){let O=T.target;O.removeEventListener("dispose",Q),Te(O)}function Te(T){Be(T),ve.remove(T)}function Be(T){let O=ve.get(T).programs;O!==void 0&&(O.forEach(function(q){$.releaseProgram(q)}),T.isShaderMaterial&&$.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,q,Y,F,te){O===null&&(O=be);let ce=F.isMesh&&F.matrixWorld.determinant()<0,we=yt(T,O,q,Y,F);U.setMaterial(Y,ce);let Se=q.index,Oe=1;if(Y.wireframe===!0){if(Se=M.getWireframeAttribute(q),Se===void 0)return;Oe=2}let De=q.drawRange,Le=q.attributes.position,et=De.start*Oe,lt=(De.start+De.count)*Oe;te!==null&&(et=Math.max(et,te.start*Oe),lt=Math.min(lt,(te.start+te.count)*Oe)),Se!==null?(et=Math.max(et,0),lt=Math.min(lt,Se.count)):Le!=null&&(et=Math.max(et,0),lt=Math.min(lt,Le.count));let kt=lt-et;if(kt<0||kt===1/0)return;ue.setup(F,Y,we,q,Se);let Pt,Tt=he;if(Se!==null&&(Pt=P.get(Se),Tt=Ue,Tt.setIndex(Pt)),F.isMesh)Y.wireframe===!0?(U.setLineWidth(Y.wireframeLinewidth*ft()),Tt.setMode(C.LINES)):Tt.setMode(C.TRIANGLES);else if(F.isLine){let Ve=Y.linewidth;Ve===void 0&&(Ve=1),U.setLineWidth(Ve*ft()),F.isLineSegments?Tt.setMode(C.LINES):F.isLineLoop?Tt.setMode(C.LINE_LOOP):Tt.setMode(C.LINE_STRIP)}else F.isPoints?Tt.setMode(C.POINTS):F.isSprite&&Tt.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)po("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))Tt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Ve=F._multiDrawStarts,Dt=F._multiDrawCounts,mt=F._multiDrawCount,ei=Se?P.get(Se).bytesPerElement:1,Ys=ve.get(Y).currentProgram.getUniforms();for(let ti=0;ti<mt;ti++)Ys.setValue(C,"_gl_DrawID",ti),Tt.render(Ve[ti]/ei,Dt[ti])}else if(F.isInstancedMesh)Tt.renderInstances(et,kt,F.count);else if(q.isInstancedBufferGeometry){let Ve=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Dt=Math.min(q.instanceCount,Ve);Tt.renderInstances(et,kt,Dt)}else Tt.render(et,kt)};function pt(T,O,q){T.transparent===!0&&T.side===Yn&&T.forceSinglePass===!1?(T.side=In,T.needsUpdate=!0,Xt(T,O,q),T.side=Di,T.needsUpdate=!0,Xt(T,O,q),T.side=Yn):Xt(T,O,q)}this.compile=function(T,O,q=null){q===null&&(q=T),p=Me.get(q),p.init(O),b.push(p),q.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),T!==q&&T.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let Y=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let te=F.material;if(te)if(Array.isArray(te))for(let ce=0;ce<te.length;ce++){let we=te[ce];pt(we,q,F),Y.add(we)}else pt(te,q,F),Y.add(te)}),p=b.pop(),Y},this.compileAsync=function(T,O,q=null){let Y=this.compile(T,O,q);return new Promise(F=>{function te(){if(Y.forEach(function(ce){ve.get(ce).currentProgram.isReady()&&Y.delete(ce)}),Y.size===0){F(T);return}setTimeout(te,10)}ge.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let ye=null;function Ie(T){ye&&ye(T)}function Ke(){ze.stop()}function me(){ze.start()}let ze=new Rg;ze.setAnimationLoop(Ie),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(T){ye=T,ie.setAnimationLoop(T),T===null?ze.stop():ze.start()},ie.addEventListener("sessionstart",Ke),ie.addEventListener("sessionend",me),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(O),O=ie.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,E),p=Me.get(T,b.length),p.init(O),b.push(p),J.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),He.setFromProjectionMatrix(J,Ii,O.reversedDepth),K=this.localClippingEnabled,ke=se.init(this.clippingPlanes,K),m=Z.get(T,S.length),m.init(),S.push(m),ie.enabled===!0&&ie.isPresenting===!0){let te=v.xr.getDepthSensingMesh();te!==null&&Ne(te,O,-1/0,v.sortObjects)}Ne(T,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ee,L),Fe=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Fe&&pe.addToRenderList(m,T),this.info.render.frame++,ke===!0&&se.beginShadows();let q=p.state.shadowsArray;Re.render(q,T,O),ke===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,F=m.transmissive;if(p.setupLights(),O.isArrayCamera){let te=O.cameras;if(F.length>0)for(let ce=0,we=te.length;ce<we;ce++){let Se=te[ce];Wt(Y,F,T,Se)}Fe&&pe.render(T);for(let ce=0,we=te.length;ce<we;ce++){let Se=te[ce];Ye(m,T,Se,Se.viewport)}}else F.length>0&&Wt(Y,F,T,O),Fe&&pe.render(T),Ye(m,T,O);E!==null&&A===0&&(Ge.updateMultisampleRenderTarget(E),Ge.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(v,T,O),ue.resetDefaultState(),x=-1,y=null,b.pop(),b.length>0?(p=b[b.length-1],ke===!0&&se.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Ne(T,O,q,Y){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||He.intersectsSprite(T)){Y&&Ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(J);let ce=k.update(T),we=T.material;we.visible&&m.push(T,ce,we,q,Ee.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||He.intersectsObject(T))){let ce=k.update(T),we=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ee.copy(T.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ee.copy(ce.boundingSphere.center)),Ee.applyMatrix4(T.matrixWorld).applyMatrix4(J)),Array.isArray(we)){let Se=ce.groups;for(let Oe=0,De=Se.length;Oe<De;Oe++){let Le=Se[Oe],et=we[Le.materialIndex];et&&et.visible&&m.push(T,ce,et,q,Ee.z,Le)}}else we.visible&&m.push(T,ce,we,q,Ee.z,null)}}let te=T.children;for(let ce=0,we=te.length;ce<we;ce++)Ne(te[ce],O,q,Y)}function Ye(T,O,q,Y){let F=T.opaque,te=T.transmissive,ce=T.transparent;p.setupLightsView(q),ke===!0&&se.setGlobalState(v.clippingPlanes,q),Y&&U.viewport(I.copy(Y)),F.length>0&&tt(F,O,q),te.length>0&&tt(te,O,q),ce.length>0&&tt(ce,O,q),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function Wt(T,O,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Wi(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?Co:Fi,minFilter:Oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));let te=p.state.transmissionRenderTarget[Y.id],ce=Y.viewport||I;te.setSize(ce.z*v.transmissionResolutionScale,ce.w*v.transmissionResolutionScale);let we=v.getRenderTarget(),Se=v.getActiveCubeFace(),Oe=v.getActiveMipmapLevel();v.setRenderTarget(te),v.getClearColor(H),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Fe&&pe.render(q);let De=v.toneMapping;v.toneMapping=xr;let Le=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),ke===!0&&se.setGlobalState(v.clippingPlanes,Y),tt(T,q,Y),Ge.updateMultisampleRenderTarget(te),Ge.updateRenderTargetMipmap(te),ge.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let lt=0,kt=O.length;lt<kt;lt++){let Pt=O[lt],Tt=Pt.object,Ve=Pt.geometry,Dt=Pt.material,mt=Pt.group;if(Dt.side===Yn&&Tt.layers.test(Y.layers)){let ei=Dt.side;Dt.side=In,Dt.needsUpdate=!0,It(Tt,q,Y,Ve,Dt,mt),Dt.side=ei,Dt.needsUpdate=!0,et=!0}}et===!0&&(Ge.updateMultisampleRenderTarget(te),Ge.updateRenderTargetMipmap(te))}v.setRenderTarget(we,Se,Oe),v.setClearColor(H,X),Le!==void 0&&(Y.viewport=Le),v.toneMapping=De}function tt(T,O,q){let Y=O.isScene===!0?O.overrideMaterial:null;for(let F=0,te=T.length;F<te;F++){let ce=T[F],we=ce.object,Se=ce.geometry,Oe=ce.group,De=ce.material;De.allowOverride===!0&&Y!==null&&(De=Y),we.layers.test(q.layers)&&It(we,O,q,Se,De,Oe)}}function It(T,O,q,Y,F,te){T.onBeforeRender(v,O,q,Y,F,te),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(v,O,q,Y,T,te),F.transparent===!0&&F.side===Yn&&F.forceSinglePass===!1?(F.side=In,F.needsUpdate=!0,v.renderBufferDirect(q,O,Y,F,T,te),F.side=Di,F.needsUpdate=!0,v.renderBufferDirect(q,O,Y,F,T,te),F.side=Yn):v.renderBufferDirect(q,O,Y,F,T,te),T.onAfterRender(v,O,q,Y,F,te)}function Xt(T,O,q){O.isScene!==!0&&(O=be);let Y=ve.get(T),F=p.state.lights,te=p.state.shadowsArray,ce=F.state.version,we=$.getParameters(T,F.state,te,O,q),Se=$.getProgramCacheKey(we),Oe=Y.programs;Y.environment=T.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(T.isMeshStandardMaterial?_t:Qe).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",Q),Oe=new Map,Y.programs=Oe);let De=Oe.get(Se);if(De!==void 0){if(Y.currentProgram===De&&Y.lightsStateVersion===ce)return bt(T,we),De}else we.uniforms=$.getUniforms(T),T.onBeforeCompile(we,v),De=$.acquireProgram(we,Se),Oe.set(Se,De),Y.uniforms=we.uniforms;let Le=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=se.uniform),bt(T,we),Y.needsLights=Ct(T),Y.lightsStateVersion=ce,Y.needsLights&&(Le.ambientLightColor.value=F.state.ambient,Le.lightProbe.value=F.state.probe,Le.directionalLights.value=F.state.directional,Le.directionalLightShadows.value=F.state.directionalShadow,Le.spotLights.value=F.state.spot,Le.spotLightShadows.value=F.state.spotShadow,Le.rectAreaLights.value=F.state.rectArea,Le.ltc_1.value=F.state.rectAreaLTC1,Le.ltc_2.value=F.state.rectAreaLTC2,Le.pointLights.value=F.state.point,Le.pointLightShadows.value=F.state.pointShadow,Le.hemisphereLights.value=F.state.hemi,Le.directionalShadowMap.value=F.state.directionalShadowMap,Le.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Le.spotShadowMap.value=F.state.spotShadowMap,Le.spotLightMatrix.value=F.state.spotLightMatrix,Le.spotLightMap.value=F.state.spotLightMap,Le.pointShadowMap.value=F.state.pointShadowMap,Le.pointShadowMatrix.value=F.state.pointShadowMatrix),Y.currentProgram=De,Y.uniformsList=null,De}function Rt(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=Uo.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function bt(T,O){let q=ve.get(T);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function yt(T,O,q,Y,F){O.isScene!==!0&&(O=be),Ge.resetTextureUnits();let te=O.fog,ce=Y.isMeshStandardMaterial?O.environment:null,we=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:hn,Se=(Y.isMeshStandardMaterial?_t:Qe).get(Y.envMap||ce),Oe=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,De=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Le=!!q.morphAttributes.position,et=!!q.morphAttributes.normal,lt=!!q.morphAttributes.color,kt=xr;Y.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(kt=v.toneMapping);let Pt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Tt=Pt!==void 0?Pt.length:0,Ve=ve.get(Y),Dt=p.state.lights;if(ke===!0&&(K===!0||T!==y)){let An=T===y&&Y.id===x;se.setState(Y,T,An)}let mt=!1;Y.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Dt.state.version||Ve.outputColorSpace!==we||F.isBatchedMesh&&Ve.batching===!1||!F.isBatchedMesh&&Ve.batching===!0||F.isBatchedMesh&&Ve.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ve.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ve.instancing===!1||!F.isInstancedMesh&&Ve.instancing===!0||F.isSkinnedMesh&&Ve.skinning===!1||!F.isSkinnedMesh&&Ve.skinning===!0||F.isInstancedMesh&&Ve.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ve.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ve.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ve.instancingMorph===!1&&F.morphTexture!==null||Ve.envMap!==Se||Y.fog===!0&&Ve.fog!==te||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==se.numPlanes||Ve.numIntersection!==se.numIntersection)||Ve.vertexAlphas!==Oe||Ve.vertexTangents!==De||Ve.morphTargets!==Le||Ve.morphNormals!==et||Ve.morphColors!==lt||Ve.toneMapping!==kt||Ve.morphTargetsCount!==Tt)&&(mt=!0):(mt=!0,Ve.__version=Y.version);let ei=Ve.currentProgram;mt===!0&&(ei=Xt(Y,O,F));let Ys=!1,ti=!1,sa=!1,Nt=ei.getUniforms(),pi=Ve.uniforms;if(U.useProgram(ei.program)&&(Ys=!0,ti=!0,sa=!0),Y.id!==x&&(x=Y.id,ti=!0),Ys||y!==T){U.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Nt.setValue(C,"projectionMatrix",T.projectionMatrix),Nt.setValue(C,"viewMatrix",T.matrixWorldInverse);let zn=Nt.map.cameraPosition;zn!==void 0&&zn.setValue(C,fe.setFromMatrixPosition(T.matrixWorld)),de.logarithmicDepthBuffer&&Nt.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Nt.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,ti=!0,sa=!0)}if(F.isSkinnedMesh){Nt.setOptional(C,F,"bindMatrix"),Nt.setOptional(C,F,"bindMatrixInverse");let An=F.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Nt.setValue(C,"boneTexture",An.boneTexture,Ge))}F.isBatchedMesh&&(Nt.setOptional(C,F,"batchingTexture"),Nt.setValue(C,"batchingTexture",F._matricesTexture,Ge),Nt.setOptional(C,F,"batchingIdTexture"),Nt.setValue(C,"batchingIdTexture",F._indirectTexture,Ge),Nt.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&Nt.setValue(C,"batchingColorTexture",F._colorsTexture,Ge));let mi=q.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&re.update(F,q,ei),(ti||Ve.receiveShadow!==F.receiveShadow)&&(Ve.receiveShadow=F.receiveShadow,Nt.setValue(C,"receiveShadow",F.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(pi.envMap.value=Se,pi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(pi.envMapIntensity.value=O.environmentIntensity),ti&&(Nt.setValue(C,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&Qn(pi,sa),te&&Y.fog===!0&&j.refreshFogUniforms(pi,te),j.refreshMaterialUniforms(pi,Y,z,G,p.state.transmissionRenderTarget[T.id]),Uo.upload(C,Rt(Ve),pi,Ge)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Uo.upload(C,Rt(Ve),pi,Ge),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Nt.setValue(C,"center",F.center),Nt.setValue(C,"modelViewMatrix",F.modelViewMatrix),Nt.setValue(C,"normalMatrix",F.normalMatrix),Nt.setValue(C,"modelMatrix",F.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let An=Y.uniformsGroups;for(let zn=0,ch=An.length;zn<ch;zn++){let rs=An[zn];We.update(rs,ei),We.bind(rs,ei)}}return ei}function Qn(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Ct(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,O,q){let Y=ve.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),ve.get(T.texture).__webglTexture=O,ve.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){let q=ve.get(T);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0};let wn=C.createFramebuffer();this.setRenderTarget=function(T,O=0,q=0){E=T,R=O,A=q;let Y=!0,F=null,te=!1,ce=!1;if(T){let Se=ve.get(T);if(Se.__useDefaultFramebuffer!==void 0)U.bindFramebuffer(C.FRAMEBUFFER,null),Y=!1;else if(Se.__webglFramebuffer===void 0)Ge.setupRenderTarget(T);else if(Se.__hasExternalTextures)Ge.rebindTextures(T,ve.get(T.texture).__webglTexture,ve.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Le=T.depthTexture;if(Se.__boundDepthTexture!==Le){if(Le!==null&&ve.has(Le)&&(T.width!==Le.image.width||T.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(T)}}let Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ce=!0);let De=ve.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[O])?F=De[O][q]:F=De[O],te=!0):T.samples>0&&Ge.useMultisampledRTT(T)===!1?F=ve.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?F=De[q]:F=De,I.copy(T.viewport),N.copy(T.scissor),V=T.scissorTest}else I.copy(ae).multiplyScalar(z).floor(),N.copy(Pe).multiplyScalar(z).floor(),V=Ze;if(q!==0&&(F=wn),U.bindFramebuffer(C.FRAMEBUFFER,F)&&Y&&U.drawBuffers(T,F),U.viewport(I),U.scissor(N),U.setScissorTest(V),te){let Se=ve.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,Se.__webglTexture,q)}else if(ce){let Se=O;for(let Oe=0;Oe<T.textures.length;Oe++){let De=ve.get(T.textures[Oe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Oe,De.__webglTexture,q,Se)}}else if(T!==null&&q!==0){let Se=ve.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Se.__webglTexture,q)}x=-1},this.readRenderTargetPixels=function(T,O,q,Y,F,te,ce,we=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ve.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ce!==void 0&&(Se=Se[ce]),Se){U.bindFramebuffer(C.FRAMEBUFFER,Se);try{let Oe=T.textures[we],De=Oe.format,Le=Oe.type;if(!de.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-Y&&q>=0&&q<=T.height-F&&(T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+we),C.readPixels(O,q,Y,F,Ce.convert(De),Ce.convert(Le),te))}finally{let Oe=E!==null?ve.get(E).__webglFramebuffer:null;U.bindFramebuffer(C.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(T,O,q,Y,F,te,ce,we=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=ve.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ce!==void 0&&(Se=Se[ce]),Se)if(O>=0&&O<=T.width-Y&&q>=0&&q<=T.height-F){U.bindFramebuffer(C.FRAMEBUFFER,Se);let Oe=T.textures[we],De=Oe.format,Le=Oe.type;if(!de.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let et=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,et),C.bufferData(C.PIXEL_PACK_BUFFER,te.byteLength,C.STREAM_READ),T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+we),C.readPixels(O,q,Y,F,Ce.convert(De),Ce.convert(Le),0);let lt=E!==null?ve.get(E).__webglFramebuffer:null;U.bindFramebuffer(C.FRAMEBUFFER,lt);let kt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await eg(C,kt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,et),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,te),C.deleteBuffer(et),C.deleteSync(kt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,q=0){let Y=Math.pow(2,-q),F=Math.floor(T.image.width*Y),te=Math.floor(T.image.height*Y),ce=O!==null?O.x:0,we=O!==null?O.y:0;Ge.setTexture2D(T,0),C.copyTexSubImage2D(C.TEXTURE_2D,q,0,0,ce,we,F,te),U.unbindTexture()};let di=C.createFramebuffer(),jt=C.createFramebuffer();this.copyTextureToTexture=function(T,O,q=null,Y=null,F=0,te=null){te===null&&(F!==0?(po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=F,F=0):te=0);let ce,we,Se,Oe,De,Le,et,lt,kt,Pt=T.isCompressedTexture?T.mipmaps[te]:T.image;if(q!==null)ce=q.max.x-q.min.x,we=q.max.y-q.min.y,Se=q.isBox3?q.max.z-q.min.z:1,Oe=q.min.x,De=q.min.y,Le=q.isBox3?q.min.z:0;else{let mi=Math.pow(2,-F);ce=Math.floor(Pt.width*mi),we=Math.floor(Pt.height*mi),T.isDataArrayTexture?Se=Pt.depth:T.isData3DTexture?Se=Math.floor(Pt.depth*mi):Se=1,Oe=0,De=0,Le=0}Y!==null?(et=Y.x,lt=Y.y,kt=Y.z):(et=0,lt=0,kt=0);let Tt=Ce.convert(O.format),Ve=Ce.convert(O.type),Dt;O.isData3DTexture?(Ge.setTexture3D(O,0),Dt=C.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ge.setTexture2DArray(O,0),Dt=C.TEXTURE_2D_ARRAY):(Ge.setTexture2D(O,0),Dt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);let mt=C.getParameter(C.UNPACK_ROW_LENGTH),ei=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ys=C.getParameter(C.UNPACK_SKIP_PIXELS),ti=C.getParameter(C.UNPACK_SKIP_ROWS),sa=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Pt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Pt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Oe),C.pixelStorei(C.UNPACK_SKIP_ROWS,De),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Le);let Nt=T.isDataArrayTexture||T.isData3DTexture,pi=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){let mi=ve.get(T),An=ve.get(O),zn=ve.get(mi.__renderTarget),ch=ve.get(An.__renderTarget);U.bindFramebuffer(C.READ_FRAMEBUFFER,zn.__webglFramebuffer),U.bindFramebuffer(C.DRAW_FRAMEBUFFER,ch.__webglFramebuffer);for(let rs=0;rs<Se;rs++)Nt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ve.get(T).__webglTexture,F,Le+rs),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ve.get(O).__webglTexture,te,kt+rs)),C.blitFramebuffer(Oe,De,ce,we,et,lt,ce,we,C.DEPTH_BUFFER_BIT,C.NEAREST);U.bindFramebuffer(C.READ_FRAMEBUFFER,null),U.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(F!==0||T.isRenderTargetTexture||ve.has(T)){let mi=ve.get(T),An=ve.get(O);U.bindFramebuffer(C.READ_FRAMEBUFFER,di),U.bindFramebuffer(C.DRAW_FRAMEBUFFER,jt);for(let zn=0;zn<Se;zn++)Nt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,mi.__webglTexture,F,Le+zn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,mi.__webglTexture,F),pi?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,An.__webglTexture,te,kt+zn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,An.__webglTexture,te),F!==0?C.blitFramebuffer(Oe,De,ce,we,et,lt,ce,we,C.COLOR_BUFFER_BIT,C.NEAREST):pi?C.copyTexSubImage3D(Dt,te,et,lt,kt+zn,Oe,De,ce,we):C.copyTexSubImage2D(Dt,te,et,lt,Oe,De,ce,we);U.bindFramebuffer(C.READ_FRAMEBUFFER,null),U.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else pi?T.isDataTexture||T.isData3DTexture?C.texSubImage3D(Dt,te,et,lt,kt,ce,we,Se,Tt,Ve,Pt.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(Dt,te,et,lt,kt,ce,we,Se,Tt,Pt.data):C.texSubImage3D(Dt,te,et,lt,kt,ce,we,Se,Tt,Ve,Pt):T.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,te,et,lt,ce,we,Tt,Ve,Pt.data):T.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,te,et,lt,Pt.width,Pt.height,Tt,Pt.data):C.texSubImage2D(C.TEXTURE_2D,te,et,lt,ce,we,Tt,Ve,Pt);C.pixelStorei(C.UNPACK_ROW_LENGTH,mt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ei),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ys),C.pixelStorei(C.UNPACK_SKIP_ROWS,ti),C.pixelStorei(C.UNPACK_SKIP_IMAGES,sa),te===0&&O.generateMipmaps&&C.generateMipmap(Dt),U.unbindTexture()},this.initRenderTarget=function(T){ve.get(T).__webglFramebuffer===void 0&&Ge.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ge.setTextureCube(T,0):T.isData3DTexture?Ge.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ge.setTexture2DArray(T,0):Ge.setTexture2D(T,0),U.unbindTexture()},this.resetState=function(){R=0,A=0,E=null,U.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};function Of(s,e){if(e===hf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Lo||e===Ya){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Lo)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var yu=class extends Zi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Gf(t)}),this.register(function(t){return new Wf(t)}),this.register(function(t){return new Qf(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new qf(t)}),this.register(function(t){return new Yf(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new Kf(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new $f(t)}),this.register(function(t){return new Xf(t)}),this.register(function(t){return new jf(t)}),this.register(function(t){return new Jf(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new id(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=gr.extractUrlBase(e);o=gr.resolveURL(c,this.path)}else o=gr.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Eo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Fg){try{o[ut.KHR_BINARY_GLTF]=new rd(e)}catch(h){i&&i(h);return}r=JSON.parse(o[ut.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new hd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ut.KHR_MATERIALS_UNLIT:o[h]=new Vf;break;case ut.KHR_DRACO_MESH_COMPRESSION:o[h]=new sd(r,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:o[h]=new od;break;case ut.KHR_MESH_QUANTIZATION:o[h]=new ad;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function ub(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},zf=class{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new qe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],hn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ka(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ba(u),c.distance=h;break;case"spot":c=new Fa(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ji(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Vf=class{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return Wn}extendParams(e,t,n){let i=[];e.color=new qe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],hn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,zt))}return Promise.all(i)}},Hf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Gf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new rt(a,a)}return Promise.all(r)}},Wf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Xf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},qf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],hn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,zt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Yf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Zf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new qe().setRGB(a[0],a[1],a[2],hn),Promise.all(r)}},Kf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},$f=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new qe().setRGB(a[0],a[1],a[2],hn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,zt)),Promise.all(r)}},Jf=class{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},jf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Qf=class{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},ed=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},td=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},nd=class{constructor(e){this.name=ut.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}},id=class{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==yi.TRIANGLES&&c.mode!==yi.TRIANGLE_STRIP&&c.mode!==yi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let g of h){let _=new $e,m=new B,p=new _i,S=new B(1,1,1),b=new Ea(g.geometry,g.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&S.fromBufferAttribute(l.SCALE,v),b.setMatrixAt(v,_.compose(m,p,S));for(let v in l)if(v==="_COLOR_0"){let w=l[v];b.instanceColor=new zr(w.array,w.itemSize,w.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);Ut.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),d.push(b)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},Fg="glTF",Ka=12,Dg={JSON:1313821514,BIN:5130562},rd=class{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ka),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Fg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ka,r=new DataView(e,Ka),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Dg.JSON){let c=new Uint8Array(e,Ka+o,a);this.content=n.decode(c)}else if(l===Dg.BIN){let c=Ka+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},sd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=cd[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=cd[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=Fo[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(let g in d.attributes){let _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,hn,f)})})}},od=class{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ad=class{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}},vu=class extends dr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,S=1-m,b=p-f+h;for(let v=0;v!==a;v++){let w=o[_+v+a],R=o[_+v+l]*u,A=o[g+v+a],E=o[g+v]*u;r[v]=S*w+b*R+m*A+p*E}return r}},hb=new _i,ld=class extends vu{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return hb.fromArray(r).normalize().toArray(r),r}},yi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ng={9728:un,9729:Cn,9984:Ic,9985:Ao,9986:Ms,9987:Oi},Ug={33071:Hi,33648:uo,10497:Br},Ff={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Wr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fb={CUBICSPLINE:void 0,LINEAR:ds,STEP:fs},Bf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function db(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new _s({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Di})),s.DefaultMaterial}function As(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ji(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function pb(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function mb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gb(s){let e,t=s.extensions&&s.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+kf(t.attributes):e=s.indices+":"+kf(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+kf(s.targets[n]);return e}function kf(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ud(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _b(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var xb=new $e,hd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ub,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Ua(this.options.manager):this.textureLoader=new za(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Eo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return As(r,a,i),Ji(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(gr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Ff[i.type],a=Fo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Kt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Ff[i.type],c=Fo[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,m;if(d&&d!==h){let p=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,b=t.cache.get(S);b||(_=new c(a,p*d,i.count*d/u),b=new vo(_,d/u),t.cache.add(S,b)),m=new Mo(b,l,f%d/u,g)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),m=new Kt(_,l,g);if(i.sparse!==void 0){let p=Ff.SCALAR,S=Fo[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,w=new S(o[1],b,i.sparse.count*p),R=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new Kt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,E=w.length;A<E;A++){let x=w[A];if(m.setX(x,R[A*l]),l>=2&&m.setY(x,R[A*l+1]),l>=3&&m.setZ(x,R[A*l+2]),l>=4&&m.setW(x,R[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Ng[f.magFilter]||Cn,u.minFilter=Ng[f.minFilter]||Oi,u.wrapS=Ug[f.wrapS]||Br,u.wrapT=Ug[f.wrapT]||Br,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==un&&u.minFilter!==Cn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Qt(_);m.needsUpdate=!0,f(m)}),t.load(gr.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Ji(h,o),h.userData.mimeType=o.mimeType||_b(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ut.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new To,Gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Vr,Gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return _s}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ut.KHR_MATERIALS_UNLIT]){let h=i[ut.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new qe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],hn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,zt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Yn);let u=r.alphaMode||Bf.OPAQUE;if(u===Bf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Bf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Wn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new rt(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Wn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Wn){let h=r.emissiveFactor;a.emissive=new qe().setRGB(h[0],h[1],h[2],hn)}return r.emissiveTexture!==void 0&&o!==Wn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,zt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Ji(h,r),t.associations.set(h,{materials:e}),r.extensions&&As(i,h,r),h})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Og(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=gb(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Og(new _n,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?db(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){let _=u[d],m=o[d],p,S=c[d];if(m.mode===yi.TRIANGLES||m.mode===yi.TRIANGLE_STRIP||m.mode===yi.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Sa(_,S):new en(_,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===yi.TRIANGLE_STRIP?p.geometry=Of(p.geometry,Ya):m.mode===yi.TRIANGLE_FAN&&(p.geometry=Of(p.geometry,Lo));else if(m.mode===yi.LINES)p=new gs(_,S);else if(m.mode===yi.LINE_STRIP)p=new ms(_,S);else if(m.mode===yi.LINE_LOOP)p=new wa(_,S);else if(m.mode===yi.POINTS)p=new Aa(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&mb(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ji(p,r),m.extensions&&As(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&As(i,h[0],r),h[0];let f=new Vn;r.extensions&&As(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(Gr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new xs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ji(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new $e;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ta(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){let d=i.channels[h],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let b=0,v=f.length;b<v;b++){let w=f[b],R=d[b],A=g[b],E=_[b],x=m[b];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let y=n._createAnimationTracks(w,R,A,E,x);if(y)for(let I=0;I<y.length;I++)p.push(y[I])}let S=new Na(r,void 0,p);return Ji(S,i),S})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,xb)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new So:c.length>1?u=new Vn:c.length===1?u=c[0]:u=new Ut,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ji(u,r),r.extensions&&As(n,u,r),r.matrix!==void 0){let h=new $e;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Vn;n.name&&(r.name=i.createUniqueName(n.name)),Ji(r,n),n.extensions&&As(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,d]of i.associations)(f instanceof Gn||f instanceof Qt)&&h.set(f,d);return u.traverse(f=>{let d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];Wr[r.path]===Wr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Wr[r.path]){case Wr.weights:c=Xi;break;case Wr.rotation:c=qi;break;case Wr.translation:case Wr.scale:c=Yi;break;default:switch(n.itemSize){case 1:c=Xi;break;case 2:case 3:default:c=Yi;break}break}let u=i.interpolation!==void 0?fb[i.interpolation]:ds,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){let g=new c(l[f]+"."+Wr[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ud(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof qi?ld:vu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function yb(s,e,t){let n=e.attributes,i=new Pn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){let u=ud(Fo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new B,l=new B;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let _=ud(Fo[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Hn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Og(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=cd[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ht.workingColorSpace!==hn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),Ji(s,e),yb(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?pb(s,e.targets,t):s})}function vr(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function qg(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},tl={duration:.5,overwrite:!1,delay:0},Cd,fn,Lt,Mi=1e8,At=1/Mi,yd=Math.PI*2,vb=yd/4,Mb=0,Yg=Math.sqrt,Sb=Math.cos,bb=Math.sin,rn=function(e){return typeof e=="string"},Vt=function(e){return typeof e=="function"},Sr=function(e){return typeof e=="number"},Pu=function(e){return typeof e>"u"},er=function(e){return typeof e=="object"},$n=function(e){return e!==!1},Pd=function(){return typeof window<"u"},Mu=function(e){return Vt(e)||rn(e)},Zg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},vn=Array.isArray,Tb=/random\([^)]+\)/g,Eb=/,\s*/g,Bg=/(?:-?\.?\d|\.)+/gi,Id=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Is=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,fd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ld=/[+-]=-?[.\d]+/,wb=/[^,'"\[\]\s]+/gi,Ab=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ft,ji,vd,Dd,oi={},Eu={},Kg,$g=function(e){return(Eu=ko(e,oi))&&Mn},Iu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},nl=function(e,t){return!t&&console.warn(e)},Jg=function(e,t){return e&&(oi[e]=t)&&Eu&&(Eu[e]=t)||oi},il=function(){return 0},Rb={suppressEvents:!0,isStart:!0,kill:!1},Su={suppressEvents:!0,kill:!1},Cb={suppressEvents:!0},Nd={},qr=[],Md={},jg,Zn={},dd={},kg=30,bu=[],Ud="",Od=function(e){var t=e[0],n,i;if(er(t)||Vt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=bu.length;i--&&!bu[i].targetTest(t););n=bu[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new zd(e[i],n)))||e.splice(i,1);return e},Yr=function(e){return e._gsap||Od(Si(e))[0]._gsap},Fd=function(e,t,n){return(n=e[t])&&Vt(n)?e[t]():Pu(n)&&e.getAttribute&&e.getAttribute(t)||n},Ln=function(e,t){return(e=e.split(",")).forEach(t)||e},Ht=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},Ls=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Pb=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},wu=function(){var e=qr.length,t=qr.slice(0),n,i;for(Md={},qr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Bd=function(e){return!!(e._initted||e._startAt||e.add)},Qg=function(e,t,n,i){qr.length&&!fn&&wu(),e.render(t,n,i||!!(fn&&t<0&&Bd(e))),qr.length&&!fn&&wu()},e_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(wb).length<2?t:rn(e)?e.trim():e},t_=function(e){return e},ai=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ib=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ko=function(e,t){for(var n in t)e[n]=t[n];return e},zg=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=er(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Au=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ja=function(e){var t=e.parent||Ft,n=e.keyframes?Ib(vn(e.keyframes)):ai;if($n(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Lb=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},n_=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Lu=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Zr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Rs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Db=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Sd=function(e,t,n,i){return e._startAt&&(fn?e._startAt.revert(Su):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Nb=function s(e){return!e||e._ts&&s(e.parent)},Vg=function(e){return e._repeat?zo(e._tTime,e=e.duration()+e._rDelay)*e:0},zo=function(e,t){var n=Math.floor(e=Ot(e/t));return e&&n===e?n-1:n},Ru=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Du=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||At)||0))},Nu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ot(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Du(e),n._dirty||Rs(n,e)),e},i_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ru(e.rawTime(),t),(!t._dur||ol(0,t.totalDuration(),n)-t._tTime>At)&&t.render(n,!0)),Rs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-At}},Qi=function(e,t,n,i){return t.parent&&Zr(t),t._start=Ot((Sr(n)?n:n||e!==Ft?vi(e,n,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),n_(e,t,"_first","_last",e._sort?"_start":0),bd(t)||(e._recent=t),i||i_(e,t),e._ts<0&&Nu(e,e._tTime),e},r_=function(e,t){return(oi.ScrollTrigger||Iu("scrollTrigger",t))&&oi.ScrollTrigger.create(t,e)},s_=function(e,t,n,i,r){if(Gd(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!fn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&jg!==Kn.frame)return qr.push(e),e._lazy=[r,i],1},Ub=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},bd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Ob=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&Ub(e)&&!(!e._initted&&bd(e))||(e._ts<0||e._dp._ts<0)&&!bd(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=ol(0,e._tDur,t),u=zo(l,a),e._yoyo&&u&1&&(o=1-o),u!==zo(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||fn||i||e._zTime===At||!t&&e._zTime){if(!e._initted&&s_(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?At:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Sd(e,t,n,!0),e._onUpdate&&!n&&si(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Zr(e,1),!n&&!fn&&(si(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Fb=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Vo=function(e,t,n,i){var r=e._repeat,o=Ot(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Ot(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Nu(e,e._tTime=e._tDur*a),e.parent&&Du(e),n||Rs(e.parent,e),e},Hg=function(e){return e instanceof yn?Rs(e):Vo(e,e._dur)},Bb={_start:0,endTime:il,totalDuration:il},vi=function s(e,t,n){var i=e.labels,r=e._recent||Bb,o=e.duration()>=Mi?r.endTime(!1):e._dur,a,l,c;return rn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(vn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Qa=function(e,t,n){var i=Sr(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=$n(l.vars.inherit)&&l.parent;o.immediateRender=$n(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new Yt(t[0],o,t[r+1])},Kr=function(e,t){return e||e===0?t(e):t},ol=function(e,t,n){return n<e?e:n>t?t:n},dn=function(e,t){return!rn(e)||!(t=Ab.exec(e))?"":t[1]},kb=function(e,t,n){return Kr(n,function(i){return ol(e,t,i)})},Td=[].slice,o_=function(e,t){return e&&er(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&er(e[0]))&&!e.nodeType&&e!==ji},zb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return rn(i)&&!t||o_(i,1)?(r=n).push.apply(r,Si(i)):n.push(i)})||n},Si=function(e,t,n){return Lt&&!t&&Lt.selector?Lt.selector(e):rn(e)&&!n&&(vd||!Ho())?Td.call((t||Dd).querySelectorAll(e),0):vn(e)?zb(e,n):o_(e)?Td.call(e,0):e?[e]:[]},Ed=function(e){return e=Si(e)[0]||nl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Si(t,n.querySelectorAll?n:n===e?nl("Invalid scope")||Dd.createElement("div"):e)}},a_=function(e){return e.sort(function(){return .5-Math.random()})},l_=function(e){if(Vt(e))return e;var t=er(e)?e:{each:e},n=Cs(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return rn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=o[_],p,S,b,v,w,R,A,E,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,Mi])[1],!x){for(A=-Mi;A<(A=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=o[_]=[],p=l?Math.min(x,_)*u-.5:i%x,S=x===Mi?0:l?_*h/x-.5:i/x|0,A=0,E=Mi,R=0;R<_;R++)b=R%x-p,v=S-(R/x|0),m[R]=w=c?Math.abs(c==="y"?v:b):Yg(b*b+v*v),w>A&&(A=w),w<E&&(E=w);i==="random"&&a_(m),m.max=A-E,m.min=E,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=dn(t.amount||t.each)||0,n=n&&_<0?Qb(n):n}return _=(m[f]-m.min)/m.max||0,Ot(m.b+(n?n(_):_)*m.v)+m.u}},wd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ot(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Sr(n)?0:dn(n))}},c_=function(e,t){var n=vn(e),i,r;return!n&&er(e)&&(i=n=e.radius||Mi,e.values?(e=Si(e.values),(r=!Sr(e[0]))&&(i*=i)):e=wd(e.increment)),Kr(t,n?Vt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Mi,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,r||u===o||Sr(o)?u:u+dn(o)}:wd(e))},u_=function(e,t,n,i){return Kr(vn(e)?!t:n===!0?!!(n=0):!i,function(){return vn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Vb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},Hb=function(e,t){return function(n){return e(parseFloat(n))+(t||dn(n))}},Gb=function(e,t,n){return f_(e,t,0,1,n)},h_=function(e,t,n){return Kr(n,function(i){return e[~~t(i)]})},Wb=function s(e,t,n){var i=t-e;return vn(e)?h_(e,s(0,e.length),t):Kr(n,function(r){return(i+(r-e)%i)%i+e})},Xb=function s(e,t,n){var i=t-e,r=i*2;return vn(e)?h_(e,s(0,e.length-1),t):Kr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Go=function(e){return e.replace(Tb,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Eb);return u_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},f_=function(e,t,n,i,r){var o=t-e,a=i-n;return Kr(r,function(l){return n+((l-e)/o*a||0)})},qb=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=rn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(vn(e)&&!vn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=ko(vn(e)?[]:{},e));if(!u){for(l in t)Vd.call(a,e,l,"get",t[l]);r=function(g){return qd(g,a)||(o?e.p:e)}}}return Kr(n,r)},Gg=function(e,t,n){var i=e.labels,r=Mi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},si=function(e,t,n){var i=e.vars,r=i[t],o=Lt,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&qr.length&&wu(),a&&(Lt=a),u=l?r.apply(c,l):r.call(c),Lt=o,u},$a=function(e){return Zr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!fn),e.progress()<1&&si(e,"onInterrupt"),e},Bo,d_=[],p_=function(e){if(e)if(e=!e.name&&e.default||e,Pd()||e.headless){var t=e.name,n=Vt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:il,render:qd,add:Vd,kill:cT,modifier:lT,rawVars:0},o={targetTest:0,get:0,getSetter:Uu,aliases:{},register:0};if(Ho(),e!==i){if(Zn[t])return;ai(i,ai(Au(e,r),o)),ko(i.prototype,ko(r,Au(e,o))),Zn[i.prop=t]=i,e.targetTest&&(bu.push(i),Nd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Jg(t,i),e.register&&e.register(Mn,i,Dn)}else d_.push(e)},wt=255,Ja={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},pd=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*wt+.5|0},m_=function(e,t,n){var i=e?Sr(e)?[e>>16,e>>8&wt,e&wt]:0:Ja.black,r,o,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ja[e])i=Ja[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&wt,i&wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&wt,e&wt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Bg),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=pd(l+1/3,r,o),i[1]=pd(l,r,o),i[2]=pd(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Id),n&&i.length<4&&(i[3]=1),i}else i=e.match(Bg)||Ja.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/wt,o=i[1]/wt,a=i[2]/wt,h=Math.max(r,o,a),f=Math.min(r,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(o-a)/d+(o<a?6:0):h===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},g_=function(e){var t=[],n=[],i=-1;return e.split(Mr).forEach(function(r){var o=r.match(Is)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Wg=function(e,t,n){var i="",r=(e+i).match(Mr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=m_(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=g_(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Mr,"1").split(Is),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Mr),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},Mr=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ja)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),Yb=/hsl[a]?\(/,kd=function(e){var t=e.join(" "),n;if(Mr.lastIndex=0,Mr.test(t))return n=Yb.test(t),e[1]=Wg(e[1],n),e[0]=Wg(e[0],n,g_(e[1])),!0},rl,Kn=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,h,f,d,g=function _(m){var p=s()-i,S=m===!0,b,v,w,R;if((p>e||p<0)&&(n+=p-t),i+=p,w=i-n,b=w-o,(b>0||S)&&(R=++h.frame,f=w-h.time*1e3,h.time=w=w/1e3,o+=b+(b>=r?4:r-b),v=1),S||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](w,f,R,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Kg&&(!vd&&Pd()&&(ji=vd=window,Dd=ji.document||{},oi.gsap=Mn,(ji.gsapVersions||(ji.gsapVersions=[])).push(Mn.version),$g(Eu||ji.GreenSockGlobals||!ji.gsap&&ji||{}),d_.forEach(p_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},rl=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),rl=0,c=il},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),o=h.time*1e3+r},add:function(m,p,S){var b=p?function(v,w,R,A){m(v,w,R,A),h.remove(b)}:m;return h.remove(m),a[S?"unshift":"push"](b),Ho(),b},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),Ho=function(){return!rl&&Kn.wake()},dt={},Zb=/^[\d.\-M][\d.\-,\s]/,Kb=/["']/g,$b=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Kb,"").trim():+c,i=l.substr(a+1).trim();return t},Jb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},jb=function(e){var t=(e+"").split("("),n=dt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[$b(t[1])]:Jb(e).split(",").map(e_)):dt._CE&&Zb.test(e)?dt._CE("",e):n},Qb=function(e){return function(t){return 1-e(1-t)}},Cs=function(e,t){return e&&(Vt(e)?e:dt[e]||jb(e))||t},Ds=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Ln(e,function(a){dt[a]=oi[a]=r,dt[o=a.toLowerCase()]=n;for(var l in r)dt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=dt[a+"."+l]=r[l]}),r},__=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},md=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/yd*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*bb((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:__(a);return r=yd/r,l.config=function(c,u){return s(e,c,u)},l},gd=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:__(n);return i.config=function(r){return s(e,r)},i};Ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Ds(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});dt.Linear.easeNone=dt.none=dt.Linear.easeIn;Ds("Elastic",md("in"),md("out"),md());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Ds("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Ds("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ds("Circ",function(s){return-(Yg(1-s*s)-1)});Ds("Sine",function(s){return s===1?1:-Sb(s*vb)+1});Ds("Back",gd("in"),gd("out"),gd());dt.SteppedEase=dt.steps=oi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-At;return function(a){return((i*ol(0,o,a)|0)+r)*n}}};tl.ease=dt["quad.out"];Ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Ud+=s+","+s+"Params,"});var zd=function(e,t){this.id=Mb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Fd,this.set=t?t.getSetter:Uu},sl=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Vo(this,+t.duration,1,1),this.data=t.data,Lt&&(this._ctx=Lt,Lt.data.push(this)),rl||Kn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Vo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ho(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Nu(this,n),!r._dp||r.parent||i_(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Qi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===At||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Qg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Vg(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Vg(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?zo(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-At?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Ru(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-At?0:this._rts,this.totalTime(ol(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Du(this),Db(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ho(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==At&&(this._tTime-=At)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ot(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Qi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+($n(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ru(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Cb);var i=fn;return fn=n,Bd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),fn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Hg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Hg(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(vi(this,n),$n(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,$n(i)),this._dur||(this._zTime=-At),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-At:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-At,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-At)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=Vt(n)?n:t_,l=function(){var u=i.then;i.then=null,r&&r(),Vt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){$a(this)},s})();ai(sl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-At,_prom:0,_ps:!1,_rts:1});var yn=(function(s){qg(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=$n(n.sortChildren),Ft&&Qi(n.parent||Ft,vr(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&r_(vr(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return Qa(0,arguments,this),this},t.from=function(i,r,o){return Qa(1,arguments,this),this},t.fromTo=function(i,r,o,a){return Qa(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,ja(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Yt(i,r,vi(this,o),1),this},t.call=function(i,r,o){return Qi(this,Yt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Yt(i,o,vi(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,ja(o).immediateRender=$n(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,h){return a.startAt=o,ja(a).immediateRender=$n(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ot(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,S,b,v,w,R,A;if(this!==Ft&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,b=this._ts,p=!b,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=Ot(u%m),u===l?(_=this._repeat,f=c):(w=Ot(u/m),_=~~w,_&&_===w&&(f=c,_--),f>c&&(f=c)),w=zo(this._tTime,m),!a&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),R&&_&1&&(f=c-f,A=1),_!==w&&!this._lock){var E=R&&w&1,x=E===(R&&_&1);if(_<w&&(E=!E),a=E?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Ot(_*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&si(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,w=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=E?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Fb(this,Ot(a),Ot(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!r&&!w&&(si(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=-At);break}}d=g}else{d=this._last;for(var y=i<0?i:f;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,r,o||fn&&Bd(d)),f!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=y?-At:At);break}}d=g}}if(S&&!r&&(this.pause(),S.render(f>=a?0:-At)._zTime=f>=a?1:-1,this._ts))return this._start=v,Du(this),this.render(i,r,o);this._onUpdate&&!r&&si(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Zr(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(si(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(Sr(r)||(r=vi(this,r,i)),!(i instanceof sl)){if(vn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(rn(i))return this.addLabel(i,r);if(Vt(i))i=Yt.delayedCall(0,i);else return this}return this!==i?Qi(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Mi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Yt?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return rn(i)?this.removeLabel(i):Vt(i)?this.killTweensOf(i):(i.parent===this&&Lu(this,i),i===this._recent&&(this._recent=this._last),Rs(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(Kn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=vi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=Yt.delayedCall(0,r||il,o);return a.data="isPause",this._hasPause=1,Qi(this,a,vi(this,i))},t.removePause=function(i){var r=this._first;for(i=vi(this,i);r;)r._start===i&&r.data==="isPause"&&Zr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Xr!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=Si(i),l=this._first,c=Sr(r),u;l;)l instanceof Yt?Pb(l._targets,a)&&(c?(!Xr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=vi(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Yt.to(o,ai({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||At,onStart:function(){if(o.pause(),!d){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Vo(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,ai({startAt:{time:vi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Gg(this,vi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Gg(this,vi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+At)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ot(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Rs(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Rs(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=Mi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Qi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Ot(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Vo(o,o===Ft&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ft._ts&&(Qg(Ft,Ru(i,Ft)),jg=Kn.frame),Kn.frame>=kg){kg+=Jn.autoSleep||120;var r=Ft._first;if((!r||!r._ts)&&Jn.autoSleep&&Kn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Kn.sleep()}}},e})(sl);ai(yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var eT=function(e,t,n,i,r,o,a){var l=new Dn(this._pt,e,t,0,1,Xd,null,r),c=0,u=0,h,f,d,g,_,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Go(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),f=n.match(fd)||[];h=fd.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Ls(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=fd.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Ld.test(i)||p)&&(l.e=0),this._pt=l,l},Vd=function(e,t,n,i,r,o,a,l,c,u){Vt(i)&&(i=i(r||0,e,o));var h=e[t],f=n!=="get"?n:Vt(h)?c?e[t.indexOf("set")||!Vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Vt(h)?c?sT:v_:Wd,g;if(rn(i)&&(~i.indexOf("random(")&&(i=Go(i)),i.charAt(1)==="="&&(g=Ls(f,i)+(dn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Ad)return!isNaN(f*i)&&i!==""?(g=new Dn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?aT:M_,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Iu(t,i),eT.call(this,e,t,f,i,d,l||Jn.stringFilter,c))},tT=function(e,t,n,i,r){if(Vt(e)&&(e=el(e,r,t,n,i)),!er(e)||e.style&&e.nodeType||vn(e)||Zg(e))return rn(e)?el(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=el(e[a],r,t,n,i);return o},Hd=function(e,t,n,i,r,o){var a,l,c,u;if(Zn[e]&&(a=new Zn[e]).init(r,a.rawVars?t[e]:tT(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Dn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Bo))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Xr,Ad,Gd=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,b=e._overwrite==="auto"&&!Cd,v=e.timeline,w=i.easeReverse||h,R,A,E,x,y,I,N,V,H,X,W,G,z;if(v&&(!f||!r)&&(r="none"),e._ease=Cs(r,tl.ease),e._rEase=w&&(Cs(w)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||f&&!i.stagger){if(V=m[0]?Yr(m[0]).harness:0,G=V&&i[V.prop],R=Au(i,Nd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Su:Rb),_._lazy=0),o){if(Zr(e._startAt=Yt.set(m,ai({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&$n(l),startAt:null,delay:0,onUpdate:c&&function(){return si(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fn||!a&&!d)&&e._startAt.revert(Su),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),E=ai({overwrite:!1,data:"isFromStart",lazy:a&&!_&&$n(l),immediateRender:a,stagger:0,parent:p},R),G&&(E[V.prop]=G),Zr(e._startAt=Yt.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fn?e._startAt.revert(Su):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,At,At);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&$n(l)||l&&!g,A=0;A<m.length;A++){if(y=m[A],N=y._gsap||Od(m)[A]._gsap,e._ptLookup[A]=X={},Md[N.id]&&qr.length&&wu(),W=S===m?A:S.indexOf(y),V&&(H=new V).init(y,G||R,e,W,S)!==!1&&(e._pt=x=new Dn(e._pt,y,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(ee){X[ee]=x}),H.priority&&(I=1)),!V||G)for(E in R)Zn[E]&&(H=Hd(E,R,e,W,y,S))?H.priority&&(I=1):X[E]=x=Vd.call(e,y,E,"get",R[E],W,S,0,i.stringFilter);e._op&&e._op[A]&&e.kill(y,e._op[A]),b&&e._pt&&(Xr=e,Ft.killTweensOf(y,X,e.globalTime(t)),z=!e.parent,Xr=0),e._pt&&l&&(Md[N.id]=1)}I&&Yd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!z,f&&t<=0&&v.render(Mi,!0,!0)},nT=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ad=1,e.vars[t]="+=0",Gd(e,a),Ad=0,l?nl(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Ht(n)+dn(h.e)),h.b&&(h.b=u.s+dn(h.b))},iT=function(e,t){var n=e[0]?Yr(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=ko({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},rT=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(vn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},el=function(e,t,n,i,r){return Vt(e)?e.call(t,n,i,r):rn(e)&&~e.indexOf("random(")?Go(e):e},x_=Ud+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",y_={};Ln(x_+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return y_[s]=1});var Yt=(function(s){qg(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:ja(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||Ft,S=(vn(n)||Zg(n)?Sr(n[0]):"length"in i)?[n]:Si(n),b,v,w,R,A,E,x,y;if(a._targets=S.length?Od(S):nl("GSAP target "+n+" not found. https://gsap.com",!Jn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Mu(c)||Mu(u)){i=a.vars;var I=i.easeReverse||i.yoyoEase;if(b=a.timeline=new yn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:S}),b.kill(),b.parent=b._dp=vr(a),b._start=0,f||Mu(c)||Mu(u)){if(R=S.length,x=f&&l_(f),er(f))for(A in f)~x_.indexOf(A)&&(y||(y={}),y[A]=f[A]);for(v=0;v<R;v++)w=Au(i,y_),w.stagger=0,I&&(w.easeReverse=I),y&&ko(w,y),E=S[v],w.duration=+el(c,vr(a),v,E,S),w.delay=(+el(u,vr(a),v,E,S)||0)-a._delay,!f&&R===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),b.to(E,w,x?x(v,E,S):0),b._ease=dt.none;b.duration()?c=u=0:a.timeline=0}else if(g){ja(ai(b.vars.defaults,{ease:"none"})),b._ease=Cs(g.ease||i.ease||"none");var N=0,V,H,X;if(vn(g))g.forEach(function(W){return b.to(S,W,">")}),b.duration();else{w={};for(A in g)A==="ease"||A==="easeEach"||rT(A,g[A],w,g.easeEach);for(A in w)for(V=w[A].sort(function(W,G){return W.t-G.t}),N=0,v=0;v<V.length;v++)H=V[v],X={ease:H.e,duration:(H.t-(v?V[v-1].t:0))/100*c},X[A]=H.v,b.to(S,X,N),N+=X.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return d===!0&&!Cd&&(Xr=vr(a),Ft.killTweensOf(S),Xr=0),Qi(p,vr(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===Ot(p._time)&&$n(h)&&Nb(vr(a))&&p.data!=="nested")&&(a._tTime=-At,a.render(Math.max(0,-u)||0)),m&&r_(vr(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-At&&!u?l:i<At?0:i,f,d,g,_,m,p,S,b;if(!c)Ob(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,o);if(f=Ot(h%_),h===l?(g=this._repeat,f=c):(m=Ot(h/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(f=c-f),m=zo(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ot(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(s_(this,u?i:f,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var v=f<a;if(v!==this._inv){var w=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=w?(v?-1:1)/w:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(f/c);if(this._from&&(this.ratio=S=1-S),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!r&&!m&&(si(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;b&&b.render(i<0?i:b._dur*b._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Sd(this,i,r,o),si(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&si(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Sd(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Zr(this,1),!r&&!(u&&!a)&&(h||a||p)&&(si(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){rl||Kn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Gd(this,c),u=this._ease(c/this._dur),nT(this,i,r,o,a,u,c,l)?this.resetTo(i,r,o,a,1):(Nu(this,0),this.parent||n_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?$a(this):this.scrollTrigger&&this.scrollTrigger.kill(!!fn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Xr&&Xr.vars.overwrite!==!0)._first||$a(this),this.parent&&o!==this.timeline.totalDuration()&&Vo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Si(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!r||r==="all")&&Lb(a,l))return r==="all"&&(this._pt=0),$a(this);for(h=this._op=this._op||[],r!=="all"&&(rn(r)&&(_={},Ln(r,function(S){return _[S]=1}),r=_),r=iT(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],r==="all"?(h[p]=r,g=f,d={}):(d=h[p]=h[p]||{},g=r);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Lu(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&$a(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Qa(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return Qa(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Ft.killTweensOf(i,r,o)},e})(sl);ai(Yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ln("staggerTo,staggerFrom,staggerFromTo",function(s){Yt[s]=function(){var e=new yn,t=Td.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Wd=function(e,t,n){return e[t]=n},v_=function(e,t,n){return e[t](n)},sT=function(e,t,n,i){return e[t](i.fp,n)},oT=function(e,t,n){return e.setAttribute(t,n)},Uu=function(e,t){return Vt(e[t])?v_:Pu(e[t])&&e.setAttribute?oT:Wd},M_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},aT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Xd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},qd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},lT=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},cT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Lu(this,t,"_pt"):t.dep||(n=1),t=i;return!n},uT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Yd=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},Dn=(function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||M_,this.d=l||this,this.set=c||Wd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=uT,this.m=n,this.mt=r,this.tween=i},s})();Ln(Ud+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Nd[s]=1});oi.TweenMax=oi.TweenLite=Yt;oi.TimelineLite=oi.TimelineMax=yn;Ft=new yn({sortChildren:!1,defaults:tl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jn.stringFilter=kd;var Ps=[],Tu={},hT=[],Xg=0,fT=0,_d=function(e){return(Tu[e]||hT).map(function(t){return t()})},Rd=function(){var e=Date.now(),t=[];e-Xg>2&&(_d("matchMediaInit"),Ps.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=ji.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),_d("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Xg=e,_d("matchMedia"))},S_=(function(){function s(t,n){this.selector=n&&Ed(n),this.data=[],this._r=[],this.isReverted=!1,this.id=fT++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Vt(n)&&(r=i,i=n,n=Vt);var o=this,a=function(){var c=Lt,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=Ed(r)),Lt=o,h=i.apply(o,arguments),Vt(h)&&o._r.push(h),Lt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Vt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Lt;Lt=null,n(this),Lt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Yt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof yn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Yt)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ps.length;o--;)Ps[o].id===this.id&&Ps.splice(o,1)},e.revert=function(n){this.kill(n||{})},s})(),dT=(function(){function s(t){this.contexts=[],this.scope=t,Lt&&Lt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){er(n)||(n={matches:n});var o=new S_(0,r||this.scope),a=o.conditions={},l,c,u;Lt&&!o.selector&&(o.selector=Lt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=ji.matchMedia(n[c]),l&&(Ps.indexOf(o)<0&&Ps.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Rd):l.addEventListener("change",Rd)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Cu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return p_(i)})},timeline:function(e){return new yn(e)},getTweensOf:function(e,t){return Ft.getTweensOf(e,t)},getProperty:function(e,t,n,i){rn(e)&&(e=Si(e)[0]);var r=Yr(e||{}).get,o=n?t_:e_;return n==="native"&&(n=""),e&&(t?o((Zn[t]&&Zn[t].get||r)(e,t,n,i)):function(a,l,c){return o((Zn[a]&&Zn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Si(e),e.length>1){var i=e.map(function(u){return Mn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=Zn[t],a=Yr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Bo._pt=0,h.init(e,n?u+n:u,Bo,0,[e]),h.render(1,h),Bo._pt&&qd(1,Bo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=Mn.to(e,ai((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return Ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Cs(e.ease,tl.ease)),zg(tl,e||{})},config:function(e){return zg(Jn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Zn[a]&&!oi[a]&&nl(t+" effect requires "+a+" plugin.")}),dd[t]=function(a,l,c){return n(Si(a),ai(l||{},r),c)},o&&(yn.prototype[t]=function(a,l,c){return this.add(dd[t](a,er(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){dt[e]=Cs(t)},parseEase:function(e,t){return arguments.length?Cs(e,t):dt},getById:function(e){return Ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new yn(e),i,r;for(n.smoothChildTiming=$n(e.smoothChildTiming),Ft.remove(n),n._dp=0,n._time=n._tTime=Ft._time,i=Ft._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Yt&&i.vars.onComplete===i._targets[0]))&&Qi(n,i,i._start-i._delay),i=r;return Qi(Ft,n,0),n},context:function(e,t){return e?new S_(e,t):Lt},matchMedia:function(e){return new dT(e)},matchMediaRefresh:function(){return Ps.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Rd()},addEventListener:function(e,t){var n=Tu[e]||(Tu[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Tu[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Wb,wrapYoyo:Xb,distribute:l_,random:u_,snap:c_,normalize:Gb,getUnit:dn,clamp:kb,splitColor:m_,toArray:Si,selector:Ed,mapRange:f_,pipe:Vb,unitize:Hb,interpolate:qb,shuffle:a_},install:$g,effects:dd,ticker:Kn,updateRoot:yn.updateRoot,plugins:Zn,globalTimeline:Ft,core:{PropTween:Dn,globals:Jg,Tween:Yt,Timeline:yn,Animation:sl,getCache:Yr,_removeLinkedListItem:Lu,reverting:function(){return fn},context:function(e){return e&&Lt&&(Lt.data.push(e),e._ctx=Lt),Lt},suppressOverwrites:function(e){return Cd=e}}};Ln("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Cu[s]=Yt[s]});Kn.add(yn.updateRoot);Bo=Cu.to({},{duration:0});var pT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},mT=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=pT(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},xd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(rn(r)&&(l={},Ln(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}mT(a,r)}}}},Mn=Cu.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)fn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},xd("roundProps",wd),xd("modifiers"),xd("snap",c_))||Cu;Yt.version=yn.version=Mn.version="3.15.0";Kg=1;Pd()&&Ho();var gT=dt.Power0,_T=dt.Power1,xT=dt.Power2,yT=dt.Power3,vT=dt.Power4,MT=dt.Linear,ST=dt.Quad,bT=dt.Cubic,TT=dt.Quart,ET=dt.Quint,wT=dt.Strong,AT=dt.Elastic,RT=dt.Back,CT=dt.SteppedEase,PT=dt.Bounce,IT=dt.Sine,LT=dt.Expo,DT=dt.Circ;var b_,$r,Xo,Qd,Fs,NT,T_,ep,UT=function(){return typeof window<"u"},Tr={},Os=180/Math.PI,qo=Math.PI/180,Wo=Math.atan2,E_=1e8,tp=/([A-Z])/g,OT=/(left|right|width|margin|padding|x)/i,FT=/[\s,\(]\S/,tr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Kd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},BT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},zT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},VT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},D_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},N_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},HT=function(e,t,n){return e.style[t]=n},GT=function(e,t,n){return e.style.setProperty(t,n)},WT=function(e,t,n){return e._gsap[t]=n},XT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},qT=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},YT=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Bt="transform",jn=Bt+"Origin",ZT=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in Tr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=tr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=br(i,a)}):this.tfm[e]=o.x?o[e]:br(i,e),e===jn&&(this.tfm.zOrigin=o.zOrigin);else return tr.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Bt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(jn,t,"")),e=Bt}(r||t)&&this.props.push(e,t,r[e])},U_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},KT=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(tp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=ep(),(!r||!r.isStart)&&!n[Bt]&&(U_(n),i.zOrigin&&n[jn]&&(n[jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},O_=function(e,t){var n={target:e,props:[],revert:KT,save:ZT};return e._gsap||Mn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},F_,$d=function(e,t){var n=$r.createElementNS?$r.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):$r.createElement(e);return n&&n.style?n:$r.createElement(e)},li=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(tp,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Yo(t)||t,1)||""},w_="O,Moz,ms,Ms,Webkit".split(","),Yo=function(e,t,n){var i=t||Fs,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(w_[o]+e in r););return o<0?null:(o===3?"ms":o>=0?w_[o]:"")+e},Jd=function(){UT()&&window.document&&(b_=window,$r=b_.document,Xo=$r.documentElement,Fs=$d("div")||{style:{}},NT=$d("div"),Bt=Yo(Bt),jn=Bt+"Origin",Fs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",F_=!!Yo("perspective"),ep=Mn.core.reverting,Qd=1)},A_=function(e){var t=e.ownerSVGElement,n=$d("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Xo.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Xo.removeChild(n),r},R_=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},B_=function(e){var t,n;try{t=e.getBBox()}catch{t=A_(e),n=1}return t&&(t.width||t.height)||n||(t=A_(e)),t&&!t.width&&!t.x&&!t.y?{x:+R_(e,["x","cx","x1"])||0,y:+R_(e,["y","cy","y1"])||0,width:0,height:0}:t},k_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&B_(e))},jr=function(e,t){if(t){var n=e.style,i;t in Tr&&t!==jn&&(t=Bt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(tp,"-$1").toLowerCase())):n.removeAttribute(t)}},Jr=function(e,t,n,i,r,o){var a=new Dn(e._pt,t,n,0,1,o?N_:D_);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},C_={deg:1,rad:1,turn:1},$T={grid:1,flex:1},Qr=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Fs.style,l=OT.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!r||C_[i]||C_[o])return r;if(o!=="px"&&!f&&(r=s(e,t,n,"px")),p=e.getCTM&&k_(e),(d||o==="%")&&(Tr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Ht(d?r/g*h:r/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===$r||!_.appendChild)&&(_=$r.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Kn.time&&!m.uncache)return Ht(r/m.width*h);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,g=e[u],S?e.style[t]=S:jr(e,t)}else(d||o==="%")&&!$T[li(_,"display")]&&(a.position=li(e,"position")),_===e&&(a.position="static"),_.appendChild(Fs),g=Fs[u],_.removeChild(Fs),a.position="absolute";return l&&d&&(m=Yr(_),m.time=Kn.time,m.width=_[u]),Ht(f?g*r/h:g&&r?h/g*r:0)},br=function(e,t,n,i){var r;return Qd||Jd(),t in tr&&t!=="transform"&&(t=tr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Tr[t]&&t!=="transform"?(r=cl(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Fu(li(e,jn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ou[t]&&Ou[t](e,t,n)||li(e,t)||Fd(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Qr(e,t,r,n)+n:r},JT=function(e,t,n,i){if(!n||n==="none"){var r=Yo(t,e,1),o=r&&li(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=li(e,"borderTopColor"))}var a=new Dn(this._pt,e.style,t,0,1,Xd),l=0,c=0,u,h,f,d,g,_,m,p,S,b,v,w;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=li(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=li(e,t)||i,_?e.style[t]=_:jr(e,t)),u=[n,i],kd(u),n=u[0],i=u[1],f=n.match(Is)||[],w=i.match(Is)||[],w.length){for(;h=Is.exec(i);)m=h[0],S=i.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=Ls(d,m)+v),p=parseFloat(m),b=m.substr((p+"").length),l=Is.lastIndex-b.length,b||(b=b||Jn.units[t]||v,l===i.length&&(i+=b,a.e+=b)),v!==b&&(d=Qr(e,t,_,b)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?N_:D_;return Ld.test(i)&&(a.e=0),this._pt=a,a},P_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},jT=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=P_[n]||n,t[1]=P_[i]||i,t.join(" ")},QT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Tr[a]&&(l=1,a=a==="transformOrigin"?jn:Bt),jr(n,a);l&&(jr(n,Bt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",cl(n,1),o.uncache=1,U_(i)))}},Ou={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new Dn(e._pt,t,n,0,0,QT);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},ll=[1,0,0,1,0,0],z_={},V_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},I_=function(e){var t=li(e,Bt);return V_(t)?ll:t.substr(7).match(Id).map(Ht)},np=function(e,t){var n=e._gsap||Yr(e),i=e.style,r=I_(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ll:r):(r===ll&&!e.offsetParent&&e!==Xo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Xo.appendChild(e)),r=I_(e),l?i.display=l:jr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Xo.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},jd=function(e,t,n,i,r,o){var a=e._gsap,l=r||np(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],b=t.split(" "),v=parseFloat(b[0])||0,w=parseFloat(b[1])||0,R,A,E,x;n?l!==ll&&(A=d*m-g*_)&&(E=v*(m/A)+w*(-_/A)+(_*S-m*p)/A,x=v*(-g/A)+w*(d/A)-(d*S-g*p)/A,v=E,w=x):(R=B_(e),v=R.x+(~b[0].indexOf("%")?v/100*R.width:v),w=R.y+(~(b[1]||b[0]).indexOf("%")?w/100*R.height:w)),i||i!==!1&&a.smooth?(p=v-c,S=w-u,a.xOffset=h+(p*d+S*_)-p,a.yOffset=f+(p*g+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[jn]="0px 0px",o&&(Jr(o,a,"xOrigin",c,v),Jr(o,a,"yOrigin",u,w),Jr(o,a,"xOffset",h,a.xOffset),Jr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+w)},cl=function(e,t){var n=e._gsap||new zd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=li(e,jn)||"0",u,h,f,d,g,_,m,p,S,b,v,w,R,A,E,x,y,I,N,V,H,X,W,G,z,ee,L,ae,Pe,Ze,He,ke;return u=h=f=_=m=p=S=b=v=0,d=g=1,n.svg=!!(e.getCTM&&k_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Bt]!=="none"?l[Bt]:"")),i.scale=i.rotate=i.translate="none"),A=np(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),jd(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,A)),w=n.xOrigin||0,R=n.yOrigin||0,A!==ll&&(I=A[0],N=A[1],V=A[2],H=A[3],u=X=A[4],h=W=A[5],A.length===6?(d=Math.sqrt(I*I+N*N),g=Math.sqrt(H*H+V*V),_=I||N?Wo(N,I)*Os:0,S=V||H?Wo(V,H)*Os+_:0,S&&(g*=Math.abs(Math.cos(S*qo))),n.svg&&(u-=w-(w*I+R*V),h-=R-(w*N+R*H))):(ke=A[6],Ze=A[7],L=A[8],ae=A[9],Pe=A[10],He=A[11],u=A[12],h=A[13],f=A[14],E=Wo(ke,Pe),m=E*Os,E&&(x=Math.cos(-E),y=Math.sin(-E),G=X*x+L*y,z=W*x+ae*y,ee=ke*x+Pe*y,L=X*-y+L*x,ae=W*-y+ae*x,Pe=ke*-y+Pe*x,He=Ze*-y+He*x,X=G,W=z,ke=ee),E=Wo(-V,Pe),p=E*Os,E&&(x=Math.cos(-E),y=Math.sin(-E),G=I*x-L*y,z=N*x-ae*y,ee=V*x-Pe*y,He=H*y+He*x,I=G,N=z,V=ee),E=Wo(N,I),_=E*Os,E&&(x=Math.cos(E),y=Math.sin(E),G=I*x+N*y,z=X*x+W*y,N=N*x-I*y,W=W*x-X*y,I=G,X=z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Ht(Math.sqrt(I*I+N*N+V*V)),g=Ht(Math.sqrt(W*W+ke*ke)),E=Wo(X,W),S=Math.abs(E)>2e-4?E*Os:0,v=He?1/(He<0?-He:He):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!V_(li(e,Bt)),G&&e.setAttribute("transform",G))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Ht(d),n.scaleY=Ht(g),n.rotation=Ht(_)+a,n.rotationX=Ht(m)+a,n.rotationY=Ht(p)+a,n.skewX=S+a,n.skewY=b+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[jn]=Fu(c)),n.xOffset=n.yOffset=0,n.force3D=Jn.force3D,n.renderTransform=n.svg?tE:F_?H_:eE,n.uncache=0,n},Fu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Zd=function(e,t,n){var i=dn(t);return Ht(parseFloat(t)+parseFloat(Qr(e,"x",n+"px",i)))+i},eE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,H_(e,t)},Ns="0deg",al="0px",Us=") ",H_=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,b=n.zOrigin,v="",w=p==="auto"&&e&&e!==1||p===!0;if(b&&(h!==Ns||u!==Ns)){var R=parseFloat(u)*qo,A=Math.sin(R),E=Math.cos(R),x;R=parseFloat(h)*qo,x=Math.cos(R),o=Zd(S,o,A*x*-b),a=Zd(S,a,-Math.sin(R)*-b),l=Zd(S,l,E*x*-b+b)}m!==al&&(v+="perspective("+m+Us),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(w||o!==al||a!==al||l!==al)&&(v+=l!==al||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Us),c!==Ns&&(v+="rotate("+c+Us),u!==Ns&&(v+="rotateY("+u+Us),h!==Ns&&(v+="rotateX("+h+Us),(f!==Ns||d!==Ns)&&(v+="skew("+f+", "+d+Us),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Us),S.style[Bt]=v||"translate(0, 0)"},tE=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,b=parseFloat(o),v=parseFloat(a),w,R,A,E,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=qo,c*=qo,w=Math.cos(l)*h,R=Math.sin(l)*h,A=Math.sin(l-c)*-f,E=Math.cos(l-c)*f,c&&(u*=qo,x=Math.tan(c-u),x=Math.sqrt(1+x*x),A*=x,E*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),w*=x,R*=x)),w=Ht(w),R=Ht(R),A=Ht(A),E=Ht(E)):(w=h,E=f,R=A=0),(b&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(b=Qr(d,"x",o,"px"),v=Qr(d,"y",a,"px")),(g||_||m||p)&&(b=Ht(b+g-(g*w+_*A)+m),v=Ht(v+_-(g*R+_*E)+p)),(i||r)&&(x=d.getBBox(),b=Ht(b+i/100*x.width),v=Ht(v+r/100*x.height)),x="matrix("+w+","+R+","+A+","+E+","+b+","+v+")",d.setAttribute("transform",x),S&&(d.style[Bt]=x)},nE=function(e,t,n,i,r){var o=360,a=rn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Os:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*E_)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*E_)%o-~~(c/o)*o)),e._pt=f=new Dn(e._pt,t,n,i,c,BT),f.e=u,f.u="deg",e._props.push(n),f},L_=function(e,t){for(var n in t)e[n]=t[n];return e},iE=function(e,t,n){var i=L_({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Bt]=t,a=cl(n,1),jr(n,Bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Bt],o[Bt]=t,a=cl(n,1),o[Bt]=c);for(l in Tr)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(d=dn(c),g=dn(u),h=d!==g?Qr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Dn(e._pt,a,l,h,f-h,Kd),e._pt.u=g||0,e._props.push(l));L_(a,i)};Ln("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Ou[e>1?"border"+s:s]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return br(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var ip={name:"css",register:Jd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,S,b,v,w,R,A,E,x;Qd||Jd(),this.styles=this.styles||O_(e),E=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Zn[_]&&Hd(_,t,n,i,e,r)))){if(d=typeof u,g=Ou[_],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Go(u)),g)g(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Mr.lastIndex=0,Mr.test(c)||(m=dn(c),p=dn(u),p?m!==p&&(c=Qr(e,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,r,0,0,_),o.push(_),E.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],rn(c)&&~c.indexOf("random(")&&(c=Go(c)),dn(c+"")||c==="auto"||(c+=Jn.units[_]||dn(br(e,_))||""),(c+"").charAt(1)==="="&&(c=br(e,_))):c=br(e,_),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),_ in tr&&(_==="autoAlpha"&&(f===1&&br(e,"visibility")==="hidden"&&h&&(f=0),E.push("visibility",0,a.visibility),Jr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=tr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in Tr,b){if(this.styles.save(_),x=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=li(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=u,u=li(e,"perspective"),y?e.style.perspective=y:jr(e,"perspective")}h=parseFloat(u)}if(v||(w=e._gsap,w.renderTransform&&!t.parseTransform||cl(e,t.parseTransform),R=t.smoothOrigin!==!1&&w.smooth,v=this._pt=new Dn(this._pt,a,Bt,0,1,w.renderTransform,w,0,-1),v.dep=1),_==="scale")this._pt=new Dn(this._pt,w,"scaleY",w.scaleY,(S?Ls(w.scaleY,S+h):h)-w.scaleY||0,Kd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){E.push(jn,0,a[jn]),u=jT(u),w.svg?jd(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&Jr(this,w,"zOrigin",w.zOrigin,p),Jr(this,a,_,Fu(c),Fu(u)));continue}else if(_==="svgOrigin"){jd(e,u,1,R,0,this);continue}else if(_ in z_){nE(this,w,_,f,S?Ls(f,S+u):u);continue}else if(_==="smoothOrigin"){Jr(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){iE(this,u,e);continue}}else _ in a||(_=Yo(_)||_);if(b||(h||h===0)&&(f||f===0)&&!FT.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),p=dn(u)||(_ in Jn.units?Jn.units[_]:m),m!==p&&(f=Qr(e,_,c,p)),this._pt=new Dn(this._pt,b?w:a,_,f,(S?Ls(f,S+h):h)-f,!b&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?VT:Kd),this._pt.u=p||0,b&&x!==u?(this._pt.b=c,this._pt.e=x,this._pt.r=zT):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=kT);else if(_ in a)JT.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,i,r);else if(_!=="parseTransform"){Iu(_,u);continue}b||(_ in a?E.push(_,0,a[_]):typeof e[_]=="function"?E.push(_,2,e[_]()):E.push(_,1,c||e[_])),o.push(_)}}A&&Yd(this)},render:function(e,t){if(t.tween._time||!ep())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:br,aliases:tr,getSetter:function(e,t,n){var i=tr[t];return i&&i.indexOf(",")<0&&(t=i),t in Tr&&t!==jn&&(e._gsap.x||br(e,"x"))?n&&T_===n?t==="scale"?XT:WT:(T_=n||{})&&(t==="scale"?qT:YT):e.style&&!Pu(e.style[t])?HT:~t.indexOf("-")?GT:Uu(e,t)},core:{_removeProperty:jr,_getMatrix:np}};Mn.utils.checkPrefix=Yo;Mn.core.getStyleSaver=O_;(function(s,e,t,n){var i=Ln(s+","+e+","+t,function(r){Tr[r]=1});Ln(e,function(r){Jn.units[r]="deg",z_[r]=1}),tr[i[13]]=s+","+e,Ln(n,function(r){var o=r.split(":");tr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Jn.units[s]="px"});Mn.registerPlugin(ip);var Bi=Mn.registerPlugin(ip)||Mn,O1=Bi.core.Tween;function G_(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function rE(s,e,t){return e&&G_(s.prototype,e),t&&G_(s,t),s}var pn,zu,sE,ci,es,ts,Ko,X_,Bs,$o,q_,Er,ki,Y_,Z_=function(){return pn||typeof window<"u"&&(pn=window.gsap)&&pn.registerPlugin&&pn},K_=1,Zo=[],st=[],zi=[],hl=Date.now,rp=function(e,t){return t},oE=function(){var e=$o.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,st),i.push.apply(i,zi),st=n,zi=i,rp=function(o,a){return t[o](a)}},Ar=function(e,t){return~zi.indexOf(e)&&zi[zi.indexOf(e)+1][t]},fl=function(e){return!!~q_.indexOf(e)},Un=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},Nn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Bu="scrollLeft",ku="scrollTop",sp=function(){return Er&&Er.isPressed||st.cache++},Vu=function(e,t){var n=function i(r){if(r||r===0){K_&&(ci.history.scrollRestoration="manual");var o=Er&&Er.isPressed;r=i.v=Math.round(r)||(Er&&Er.iOS?1:0),e(r),i.cacheID=st.cache,o&&rp("ss",r)}else(t||st.cache!==i.cacheID||rp("ref"))&&(i.cacheID=st.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Sn={s:Bu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Vu(function(s){return arguments.length?ci.scrollTo(s,$t.sc()):ci.pageXOffset||es[Bu]||ts[Bu]||Ko[Bu]||0})},$t={s:ku,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Sn,sc:Vu(function(s){return arguments.length?ci.scrollTo(Sn.sc(),s):ci.pageYOffset||es[ku]||ts[ku]||Ko[ku]||0})},On=function(e,t){return(t&&t._ctx&&t._ctx.selector||pn.utils.toArray)(e)[0]||(typeof e=="string"&&pn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},aE=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},wr=function(e,t){var n=t.s,i=t.sc;fl(e)&&(e=es.scrollingElement||ts);var r=st.indexOf(e),o=i===$t.sc?1:2;!~r&&(r=st.push(e)-1),st[r+o]||Un(e,"scroll",sp);var a=st[r+o],l=a||(st[r+o]=Vu(Ar(e,n),!0)||(fl(e)?i:Vu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=pn.getProperty(e,"scrollBehavior")==="smooth"),l},Hu=function(e,t,n){var i=e,r=e,o=hl(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=hl();_||m-o>l?(r=i,i=g,a=o,o=m):n?i+=g:i=r+(g-r)/(m-a)*(o-a)},h=function(){r=i=n?0:i,a=o=0},f=function(g){var _=a,m=r,p=hl();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},ul=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},W_=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},$_=function(){$o=pn.core.globals().ScrollTrigger,$o&&$o.core&&oE()},J_=function(e){return pn=e||Z_(),!zu&&pn&&typeof document<"u"&&document.body&&(ci=window,es=document,ts=es.documentElement,Ko=es.body,q_=[ci,es,ts,Ko],sE=pn.utils.clamp,Y_=pn.core.context||function(){},Bs="onpointerenter"in Ko?"pointer":"mouse",X_=Gt.isTouch=ci.matchMedia&&ci.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ci||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ki=Gt.eventTypes=("ontouchstart"in ts?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ts?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return K_=0},500),zu=1),$o||$_(),zu};Sn.op=$t;st.cache=0;var Gt=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){zu||J_(pn)||console.warn("Please gsap.registerPlugin(Observer)"),$o||$_();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,b=n.onPress,v=n.onRelease,w=n.onRight,R=n.onLeft,A=n.onUp,E=n.onDown,x=n.onChangeX,y=n.onChangeY,I=n.onChange,N=n.onToggleX,V=n.onToggleY,H=n.onHover,X=n.onHoverEnd,W=n.onMove,G=n.ignoreCheck,z=n.isNormalizer,ee=n.onGestureStart,L=n.onGestureEnd,ae=n.onWheel,Pe=n.onEnable,Ze=n.onDisable,He=n.onClick,ke=n.scrollSpeed,K=n.capture,J=n.allowClicks,fe=n.lockAxis,Ee=n.onLockAxis;this.target=a=On(a)||ts,this.vars=n,d&&(d=pn.utils.toArray(d)),i=i||1e-9,r=r||0,g=g||1,ke=ke||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ci.getComputedStyle(Ko).lineHeight)||22);var be,Fe,ft,C,le,ge,de,U=this,je=0,ve=0,Ge=n.passive||!u&&n.passive!==!1,Qe=wr(a,Sn),_t=wr(a,$t),P=Qe(),M=_t(),k=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ki[0]==="pointerdown",$=fl(a),j=a.ownerDocument||es,Z=[0,0,0],Me=[0,0,0],se=0,Re=function(){return se=hl()},pe=function(Ie,Ke){return(U.event=Ie)&&d&&aE(Ie.target,d)||Ke&&k&&Ie.pointerType!=="touch"||G&&G(Ie,Ke)},re=function(){U._vx.reset(),U._vy.reset(),Fe.pause(),h&&h(U)},he=function(){var Ie=U.deltaX=W_(Z),Ke=U.deltaY=W_(Me),me=Math.abs(Ie)>=i,ze=Math.abs(Ke)>=i;I&&(me||ze)&&I(U,Ie,Ke,Z,Me),me&&(w&&U.deltaX>0&&w(U),R&&U.deltaX<0&&R(U),x&&x(U),N&&U.deltaX<0!=je<0&&N(U),je=U.deltaX,Z[0]=Z[1]=Z[2]=0),ze&&(E&&U.deltaY>0&&E(U),A&&U.deltaY<0&&A(U),y&&y(U),V&&U.deltaY<0!=ve<0&&V(U),ve=U.deltaY,Me[0]=Me[1]=Me[2]=0),(C||ft)&&(W&&W(U),ft&&(m&&ft===1&&m(U),S&&S(U),ft=0),C=!1),ge&&!(ge=!1)&&Ee&&Ee(U),le&&(ae(U),le=!1),be=0},Ue=function(Ie,Ke,me){Z[me]+=Ie,Me[me]+=Ke,U._vx.update(Ie),U._vy.update(Ke),c?be||(be=requestAnimationFrame(he)):he()},Ce=function(Ie,Ke){fe&&!de&&(U.axis=de=Math.abs(Ie)>Math.abs(Ke)?"x":"y",ge=!0),de!=="y"&&(Z[2]+=Ie,U._vx.update(Ie,!0)),de!=="x"&&(Me[2]+=Ke,U._vy.update(Ke,!0)),c?be||(be=requestAnimationFrame(he)):he()},ue=function(Ie){if(!pe(Ie,1)){Ie=ul(Ie,u);var Ke=Ie.clientX,me=Ie.clientY,ze=Ke-U.x,Ne=me-U.y,Ye=U.isDragging;U.x=Ke,U.y=me,(Ye||(ze||Ne)&&(Math.abs(U.startX-Ke)>=r||Math.abs(U.startY-me)>=r))&&(ft||(ft=Ye?2:1),Ye||(U.isDragging=!0),Ce(ze,Ne))}},We=U.onPress=function(ye){pe(ye,1)||ye&&ye.button||(U.axis=de=null,Fe.pause(),U.isPressed=!0,ye=ul(ye),je=ve=0,U.startX=U.x=ye.clientX,U.startY=U.y=ye.clientY,U._vx.reset(),U._vy.reset(),Un(z?a:j,ki[1],ue,Ge,!0),U.deltaX=U.deltaY=0,b&&b(U))},D=U.onRelease=function(ye){if(!pe(ye,1)){Nn(z?a:j,ki[1],ue,!0);var Ie=!isNaN(U.y-U.startY),Ke=U.isDragging,me=Ke&&(Math.abs(U.x-U.startX)>3||Math.abs(U.y-U.startY)>3),ze=ul(ye);!me&&Ie&&(U._vx.reset(),U._vy.reset(),u&&J&&pn.delayedCall(.08,function(){if(hl()-se>300&&!ye.defaultPrevented){if(ye.target.click)ye.target.click();else if(j.createEvent){var Ne=j.createEvent("MouseEvents");Ne.initMouseEvent("click",!0,!0,ci,1,ze.screenX,ze.screenY,ze.clientX,ze.clientY,!1,!1,!1,!1,0,null),ye.target.dispatchEvent(Ne)}}})),U.isDragging=U.isGesturing=U.isPressed=!1,h&&Ke&&!z&&Fe.restart(!0),ft&&he(),p&&Ke&&p(U),v&&v(U,me)}},ie=function(Ie){return Ie.touches&&Ie.touches.length>1&&(U.isGesturing=!0)&&ee(Ie,U.isDragging)},oe=function(){return(U.isGesturing=!1)||L(U)},_e=function(Ie){if(!pe(Ie)){var Ke=Qe(),me=_t();Ue((Ke-P)*ke,(me-M)*ke,1),P=Ke,M=me,h&&Fe.restart(!0)}},ne=function(Ie){if(!pe(Ie)){Ie=ul(Ie,u),ae&&(le=!0);var Ke=(Ie.deltaMode===1?l:Ie.deltaMode===2?ci.innerHeight:1)*g;Ue(Ie.deltaX*Ke,Ie.deltaY*Ke,0),h&&!z&&Fe.restart(!0)}},Q=function(Ie){if(!pe(Ie)){var Ke=Ie.clientX,me=Ie.clientY,ze=Ke-U.x,Ne=me-U.y;U.x=Ke,U.y=me,C=!0,h&&Fe.restart(!0),(ze||Ne)&&Ce(ze,Ne)}},Te=function(Ie){U.event=Ie,H(U)},Be=function(Ie){U.event=Ie,X(U)},pt=function(Ie){return pe(Ie)||ul(Ie,u)&&He(U)};Fe=U._dc=pn.delayedCall(f||.25,re).pause(),U.deltaX=U.deltaY=0,U._vx=Hu(0,50,!0),U._vy=Hu(0,50,!0),U.scrollX=Qe,U.scrollY=_t,U.isDragging=U.isGesturing=U.isPressed=!1,Y_(this),U.enable=function(ye){return U.isEnabled||(Un($?j:a,"scroll",sp),o.indexOf("scroll")>=0&&Un($?j:a,"scroll",_e,Ge,K),o.indexOf("wheel")>=0&&Un(a,"wheel",ne,Ge,K),(o.indexOf("touch")>=0&&X_||o.indexOf("pointer")>=0)&&(Un(a,ki[0],We,Ge,K),Un(j,ki[2],D),Un(j,ki[3],D),J&&Un(a,"click",Re,!0,!0),He&&Un(a,"click",pt),ee&&Un(j,"gesturestart",ie),L&&Un(j,"gestureend",oe),H&&Un(a,Bs+"enter",Te),X&&Un(a,Bs+"leave",Be),W&&Un(a,Bs+"move",Q)),U.isEnabled=!0,U.isDragging=U.isGesturing=U.isPressed=C=ft=!1,U._vx.reset(),U._vy.reset(),P=Qe(),M=_t(),ye&&ye.type&&We(ye),Pe&&Pe(U)),U},U.disable=function(){U.isEnabled&&(Zo.filter(function(ye){return ye!==U&&fl(ye.target)}).length||Nn($?j:a,"scroll",sp),U.isPressed&&(U._vx.reset(),U._vy.reset(),Nn(z?a:j,ki[1],ue,!0)),Nn($?j:a,"scroll",_e,K),Nn(a,"wheel",ne,K),Nn(a,ki[0],We,K),Nn(j,ki[2],D),Nn(j,ki[3],D),Nn(a,"click",Re,!0),Nn(a,"click",pt),Nn(j,"gesturestart",ie),Nn(j,"gestureend",oe),Nn(a,Bs+"enter",Te),Nn(a,Bs+"leave",Be),Nn(a,Bs+"move",Q),U.isEnabled=U.isPressed=U.isDragging=!1,Ze&&Ze(U))},U.kill=U.revert=function(){U.disable();var ye=Zo.indexOf(U);ye>=0&&Zo.splice(ye,1),Er===U&&(Er=0)},Zo.push(U),z&&fl(a)&&(Er=U),U.enable(_)},rE(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Gt.version="3.15.0";Gt.create=function(s){return new Gt(s)};Gt.register=J_;Gt.getAll=function(){return Zo.slice()};Gt.getById=function(s){return Zo.filter(function(e){return e.vars.id===s})[0]};Z_()&&pn.registerPlugin(Gt);var Ae,ea,at,St,fi,xt,yp,rh,wl,yl,pl,Gu,bn,ah,fp,Bn,j_,Q_,ta,m0,op,g0,Fn,dp,_0,x0,ns,pp,vp,na,Mp,vl,mp,ap,Wu=1,Tn=Date.now,lp=Tn(),Ei=0,ml=0,e0=function(e,t,n){var i=hi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},t0=function(e,t){return t&&(!hi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},lE=function s(){return ml&&requestAnimationFrame(s)},n0=function(){return ah=1},i0=function(){return ah=0},nr=function(e){return e},gl=function(e){return Math.round(e*1e5)/1e5||0},y0=function(){return typeof window<"u"},v0=function(){return Ae||y0()&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae},Ws=function(e){return!!~yp.indexOf(e)},M0=function(e){return(e==="Height"?Mp:at["inner"+e])||fi["client"+e]||xt["client"+e]},S0=function(e){return Ar(e,"getBoundingClientRect")||(Ws(e)?function(){return ih.width=at.innerWidth,ih.height=Mp,ih}:function(){return Rr(e)})},cE=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=Ar(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?M0(r):e["client"+r])||0}},uE=function(e,t){return!t||~zi.indexOf(e)?S0(e):function(){return ih}},ir=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Ar(e,n))?o()-S0(e)()[r]:Ws(e)?(fi[n]||xt[n])-M0(i):e[n]-e["offset"+i])},Xu=function(e,t){for(var n=0;n<ta.length;n+=3)(!t||~t.indexOf(ta[n+1]))&&e(ta[n],ta[n+1],ta[n+2])},hi=function(e){return typeof e=="string"},En=function(e){return typeof e=="function"},_l=function(e){return typeof e=="number"},ks=function(e){return typeof e=="object"},dl=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Jo=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},jo=Math.abs,b0="left",T0="top",Sp="right",bp="bottom",Vs="width",Hs="height",Ml="Right",Sl="Left",bl="Top",Tl="Bottom",Jt="padding",bi="margin",ra="Width",Tp="Height",sn="px",Ti=function(e){return at.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},hE=function(e){var t=Ti(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},r0=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Rr=function(e,t){var n=t&&Ti(e)[fp]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ae.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},sh=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},E0=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},fE=function(e){return function(t){return Ae.utils.snap(E0(e),t)}},Ep=function(e){var t=Ae.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},dE=function(e){return function(t,n){return Ep(E0(e))(t,n.direction)}},qu=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},ln=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},an=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Yu=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},s0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Zu={toggleActions:"play",anticipatePin:0},oh={top:0,left:0,center:.5,bottom:1,right:1},Qu=function(e,t){if(hi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in oh?oh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ku=function(e,t,n,i,r,o,a,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,d=r.fontWeight,g=St.createElement("div"),_=Ws(n)||Ar(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?xt:n.tagName==="IFRAME"?n.contentDocument.body:n,S=e.indexOf("start")!==-1,b=S?c:u,v="border-color:"+b+";font-size:"+h+";color:"+b+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(i===$t?Sp:bp)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],eh(g,0,i,S),g},eh=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+ra]=1,r["border"+a+ra]=0,r[n.p]=t+"px",Ae.set(e,r)},ot=[],gp={},Al,o0=function(){return Tn()-Ei>34&&(Al||(Al=requestAnimationFrame(Cr)))},Qo=function(){(!Fn||!Fn.isPressed||Fn.startX>xt.clientWidth)&&(st.cache++,Fn?Al||(Al=requestAnimationFrame(Cr)):Cr(),Ei||qs("scrollStart"),Ei=Tn())},cp=function(){x0=at.innerWidth,_0=at.innerHeight},xl=function(e){st.cache++,(e===!0||!bn&&!g0&&!St.fullscreenElement&&!St.webkitFullscreenElement&&(!dp||x0!==at.innerWidth||Math.abs(at.innerHeight-_0)>at.innerHeight*.25))&&rh.restart(!0)},Xs={},pE=[],w0=function s(){return an(it,"scrollEnd",s)||zs(!0)},qs=function(e){return Xs[e]&&Xs[e].map(function(t){return t()})||pE},ui=[],A0=function(e){for(var t=0;t<ui.length;t+=5)(!e||ui[t+4]&&ui[t+4].query===e)&&(ui[t].style.cssText=ui[t+1],ui[t].getBBox&&ui[t].setAttribute("transform",ui[t+2]||""),ui[t+3].uncache=1)},R0=function(){return st.forEach(function(e){return En(e)&&++e.cacheID&&(e.rec=e())})},wp=function(e,t){var n;for(Bn=0;Bn<ot.length;Bn++)n=ot[Bn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));vl=!0,t&&A0(t),t||qs("revert")},C0=function(e,t){st.cache++,(t||!kn)&&st.forEach(function(n){return En(n)&&n.cacheID++&&(n.rec=0)}),hi(e)&&(at.history.scrollRestoration=vp=e)},kn,Gs=0,a0,mE=function(){if(a0!==Gs){var e=a0=Gs;requestAnimationFrame(function(){return e===Gs&&zs(!0)})}},P0=function(){xt.appendChild(na),Mp=!Fn&&na.offsetHeight||at.innerHeight,xt.removeChild(na)},l0=function(e){return wl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},zs=function(e,t){if(fi=St.documentElement,xt=St.body,yp=[at,St,fi,xt],Ei&&!e&&!vl){ln(it,"scrollEnd",w0);return}P0(),kn=it.isRefreshing=!0,vl||R0();var n=qs("refreshInit");m0&&it.sort(),t||wp(),st.forEach(function(i){En(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ot.slice(0).forEach(function(i){return i.refresh()}),vl=!1,ot.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),mp=1,l0(!0),ot.forEach(function(i){var r=ir(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),l0(!1),mp=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),st.forEach(function(i){En(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),C0(vp,1),rh.pause(),Gs++,kn=2,Cr(2),ot.forEach(function(i){return En(i.vars.onRefresh)&&i.vars.onRefresh(i)}),kn=it.isRefreshing=!1,qs("refresh")},_p=0,th=1,El,Cr=function(e){if(e===2||!kn&&!vl){it.isUpdating=!0,El&&El.update(0);var t=ot.length,n=Tn(),i=n-lp>=50,r=t&&ot[0].scroll();if(th=_p>r?-1:1,kn||(_p=r),i&&(Ei&&!ah&&n-Ei>200&&(Ei=0,qs("scrollEnd")),pl=lp,lp=n),th<0){for(Bn=t;Bn-- >0;)ot[Bn]&&ot[Bn].update(0,i);th=1}else for(Bn=0;Bn<t;Bn++)ot[Bn]&&ot[Bn].update(0,i);it.isUpdating=!1}Al=0},xp=[b0,T0,bp,Sp,bi+Tl,bi+Ml,bi+bl,bi+Sl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],nh=xp.concat([Vs,Hs,"boxSizing","max"+ra,"max"+Tp,"position",bi,Jt,Jt+bl,Jt+Ml,Jt+Tl,Jt+Sl]),gE=function(e,t,n){ia(n);var i=e._gsap;if(i.spacerIsNative)ia(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},up=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=xp.length,o=t.style,a=e.style,l;r--;)l=xp[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[bp]=a[Sp]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Vs]=sh(e,Sn)+sn,o[Hs]=sh(e,$t)+sn,o[Jt]=a[bi]=a[T0]=a[b0]="0",ia(i),a[Vs]=a["max"+ra]=n[Vs],a[Hs]=a["max"+Tp]=n[Hs],a[Jt]=n[Jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},_E=/([A-Z])/g,ia=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||Ae.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(_E,"-$1").toLowerCase())}},$u=function(e){for(var t=nh.length,n=e.style,i=[],r=0;r<t;r++)i.push(nh[r],n[nh[r]]);return i.t=e,i},xE=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},ih={left:0,top:0},c0=function(e,t,n,i,r,o,a,l,c,u,h,f,d,g){En(e)&&(e=e(l)),hi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Qu("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,S;if(d&&d.seek(0),isNaN(e)||(e=+e),_l(e))d&&(e=Ae.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&eh(a,n,i,!0);else{En(t)&&(t=t(l));var b=(e||"0").split(" "),v,w,R,A;S=On(t,l)||xt,v=Rr(S)||{},(!v||!v.left&&!v.top)&&Ti(S).display==="none"&&(A=S.style.display,S.style.display="block",v=Rr(S),A?S.style.display=A:S.style.removeProperty("display")),w=Qu(b[0],v[i.d]),R=Qu(b[1]||"0",n),e=v[i.p]-c[i.p]-u+w+r-R,a&&eh(a,R,i,n-R<20||a._isStart&&R>20),n-=n-R}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var E=e+n,x=o._isStart;m="scroll"+i.d2,eh(o,E,i,x&&E>20||!x&&(h?Math.max(xt[m],fi[m]):o.parentNode[m])<=E+1),h&&(c=Rr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+sn))}return d&&S&&(m=Rr(S),d.seek(f),p=Rr(S),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},yE=/(webkit|moz|length|cssText|inset)/i,u0=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===xt){e._stOrig=r.cssText,a=Ti(e);for(o in a)!+o&&!yE.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;Ae.core.getCache(e).uncache=1,t.appendChild(e)}},I0=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},Ju=function(e,t,n){var i={};i[t.p]="+="+n,Ae.set(e,i)},h0=function(e,t){var n=wr(e,t),i="_scroll"+t.p2,r=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=I0(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){st.cache++,o.tween&&Cr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ae.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},ln(e,"wheel",n.wheelHandler),it.isTouch&&ln(e,"touchmove",n.wheelHandler),r},it=(function(){function s(t,n){ea||s.register(Ae)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),pp(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ml){this.update=this.refresh=this.kill=nr;return}n=r0(hi(n)||_l(n)||n.nodeType?{trigger:n}:n,Zu);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,d=r.pin,g=r.pinSpacing,_=r.invalidateOnRefresh,m=r.anticipatePin,p=r.onScrubComplete,S=r.onSnapComplete,b=r.once,v=r.snap,w=r.pinReparent,R=r.pinSpacer,A=r.containerAnimation,E=r.fastScrollEnd,x=r.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Sn:$t,I=!h&&h!==0,N=On(n.scroller||at),V=Ae.core.getCache(N),H=Ws(N),X=("pinType"in n?n.pinType:Ar(N,"pinType")||H&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],G=I&&n.toggleActions.split(" "),z="markers"in n?n.markers:Zu.markers,ee=H?0:parseFloat(Ti(N)["border"+y.p2+ra])||0,L=this,ae=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Pe=cE(N,H,y),Ze=uE(N,H),He=0,ke=0,K=0,J=wr(N,y),fe,Ee,be,Fe,ft,C,le,ge,de,U,je,ve,Ge,Qe,_t,P,M,k,$,j,Z,Me,se,Re,pe,re,he,Ue,Ce,ue,We,D,ie,oe,_e,ne,Q,Te,Be;if(L._startClamp=L._endClamp=!1,L._dir=y,m*=45,L.scroller=N,L.scroll=A?A.time.bind(A):J,Fe=J(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(m0=1,n.refreshPriority===-9999&&(El=L)),V.tweenScroll=V.tweenScroll||{top:h0(N,$t),left:h0(N,Sn)},L.tweenTo=fe=V.tweenScroll[y.p],L.scrubDuration=function(me){ie=_l(me)&&me,ie?D?D.duration(me):D=Ae.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ie,paused:!0,onComplete:function(){return p&&p(L)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),ue=0,l||(l=i.vars.id)),v&&((!ks(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in xt.style&&Ae.set(H?[xt,fi]:N,{scrollBehavior:"auto"}),st.forEach(function(me){return En(me)&&me.target===(H?St.scrollingElement||fi:N)&&(me.smooth=!1)}),be=En(v.snapTo)?v.snapTo:v.snapTo==="labels"?fE(i):v.snapTo==="labelsDirectional"?dE(i):v.directional!==!1?function(me,ze){return Ep(v.snapTo)(me,Tn()-ke<500?0:ze.direction)}:Ae.utils.snap(v.snapTo),oe=v.duration||{min:.1,max:2},oe=ks(oe)?yl(oe.min,oe.max):yl(oe,oe),_e=Ae.delayedCall(v.delay||ie/2||.1,function(){var me=J(),ze=Tn()-ke<500,Ne=fe.tween;if((ze||Math.abs(L.getVelocity())<10)&&!Ne&&!ah&&He!==me){var Ye=(me-C)/Qe,Wt=i&&!I?i.totalProgress():Ye,tt=ze?0:(Wt-We)/(Tn()-pl)*1e3||0,It=Ae.utils.clamp(-Ye,1-Ye,jo(tt/2)*tt/.185),Xt=Ye+(v.inertia===!1?0:It),Rt,bt,yt=v,Qn=yt.onStart,Ct=yt.onInterrupt,wn=yt.onComplete;if(Rt=be(Xt,L),_l(Rt)||(Rt=Xt),bt=Math.max(0,Math.round(C+Rt*Qe)),me<=le&&me>=C&&bt!==me){if(Ne&&!Ne._initted&&Ne.data<=jo(bt-me))return;v.inertia===!1&&(It=Rt-Ye),fe(bt,{duration:oe(jo(Math.max(jo(Xt-Wt),jo(Rt-Wt))*.185/tt/.05||0)),ease:v.ease||"power3",data:jo(bt-me),onInterrupt:function(){return _e.restart(!0)&&Ct&&Jo(L,Ct)},onComplete:function(){L.update(),He=J(),i&&!I&&(D?D.resetTo("totalProgress",Rt,i._tTime/i._tDur):i.progress(Rt)),ue=We=i&&!I?i.totalProgress():L.progress,S&&S(L),wn&&Jo(L,wn)}},me,It*Qe,bt-me-It*Qe),Qn&&Jo(L,Qn,fe.tween)}}else L.isActive&&He!==me&&_e.restart(!0)}).pause()),l&&(gp[l]=L),f=L.trigger=On(f||d!==!0&&d),Be=f&&f._gsap&&f._gsap.stRevert,Be&&(Be=Be(L)),d=d===!0?f:On(d),hi(a)&&(a={targets:f,className:a}),d&&(g===!1||g===bi||(g=!g&&d.parentNode&&d.parentNode.style&&Ti(d.parentNode).display==="flex"?!1:Jt),L.pin=d,Ee=Ae.core.getCache(d),Ee.spacer?_t=Ee.pinState:(R&&(R=On(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Ee.spacerIsNative=!!R,R&&(Ee.spacerState=$u(R))),Ee.spacer=k=R||St.createElement("div"),k.classList.add("pin-spacer"),l&&k.classList.add("pin-spacer-"+l),Ee.pinState=_t=$u(d)),n.force3D!==!1&&Ae.set(d,{force3D:!0}),L.spacer=k=Ee.spacer,Ce=Ti(d),Re=Ce[g+y.os2],j=Ae.getProperty(d),Z=Ae.quickSetter(d,y.a,sn),up(d,k,Ce),M=$u(d)),z){ve=ks(z)?r0(z,s0):s0,U=Ku("scroller-start",l,N,y,ve,0),je=Ku("scroller-end",l,N,y,ve,0,U),$=U["offset"+y.op.d2];var pt=On(Ar(N,"content")||N);ge=this.markerStart=Ku("start",l,pt,y,ve,$,0,A),de=this.markerEnd=Ku("end",l,pt,y,ve,$,0,A),A&&(Te=Ae.quickSetter([ge,de],y.a,sn)),!X&&!(zi.length&&Ar(N,"fixedMarkers")===!0)&&(hE(H?xt:N),Ae.set([U,je],{force3D:!0}),re=Ae.quickSetter(U,y.a,sn),Ue=Ae.quickSetter(je,y.a,sn))}if(A){var ye=A.vars.onUpdate,Ie=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){L.update(0,0,1),ye&&ye.apply(A,Ie||[])})}if(L.previous=function(){return ot[ot.indexOf(L)-1]},L.next=function(){return ot[ot.indexOf(L)+1]},L.revert=function(me,ze){if(!ze)return L.kill(!0);var Ne=me!==!1||!L.enabled,Ye=bn;Ne!==L.isReverted&&(Ne&&(ne=Math.max(J(),L.scroll.rec||0),K=L.progress,Q=i&&i.progress()),ge&&[ge,de,U,je].forEach(function(Wt){return Wt.style.display=Ne?"none":"block"}),Ne&&(bn=L,L.update(Ne)),d&&(!w||!L.isActive)&&(Ne?gE(d,k,_t):up(d,k,Ti(d),pe)),Ne||L.update(Ne),bn=Ye,L.isReverted=Ne)},L.refresh=function(me,ze,Ne,Ye){if(!((bn||!L.enabled)&&!ze)){if(d&&me&&Ei){ln(s,"scrollEnd",w0);return}!kn&&ae&&ae(L),bn=L,fe.tween&&!Ne&&(fe.tween.kill(),fe.tween=0),D&&D.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(lt){return lt.vars.immediateRender&&lt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Wt=Pe(),tt=Ze(),It=A?A.duration():ir(N,y),Xt=Qe<=.01||!Qe,Rt=0,bt=Ye||0,yt=ks(Ne)?Ne.end:n.end,Qn=n.endTrigger||f,Ct=ks(Ne)?Ne.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),wn=L.pinnedContainer=n.pinnedContainer&&On(n.pinnedContainer,L),di=f&&Math.max(0,ot.indexOf(L))||0,jt=di,T,O,q,Y,F,te,ce,we,Se,Oe,De,Le,et;for(z&&ks(Ne)&&(Le=Ae.getProperty(U,y.p),et=Ae.getProperty(je,y.p));jt-- >0;)te=ot[jt],te.end||te.refresh(0,1)||(bn=L),ce=te.pin,ce&&(ce===f||ce===d||ce===wn)&&!te.isReverted&&(Oe||(Oe=[]),Oe.unshift(te),te.revert(!0,!0)),te!==ot[jt]&&(di--,jt--);for(En(Ct)&&(Ct=Ct(L)),Ct=e0(Ct,"start",L),C=c0(Ct,f,Wt,y,J(),ge,U,L,tt,ee,X,It,A,L._startClamp&&"_startClamp")||(d?-.001:0),En(yt)&&(yt=yt(L)),hi(yt)&&!yt.indexOf("+=")&&(~yt.indexOf(" ")?yt=(hi(Ct)?Ct.split(" ")[0]:"")+yt:(Rt=Qu(yt.substr(2),Wt),yt=hi(Ct)?Ct:(A?Ae.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,C):C)+Rt,Qn=f)),yt=e0(yt,"end",L),le=Math.max(C,c0(yt||(Qn?"100% 0":It),Qn,Wt,y,J()+Rt,de,je,L,tt,ee,X,It,A,L._endClamp&&"_endClamp"))||-.001,Rt=0,jt=di;jt--;)te=ot[jt]||{},ce=te.pin,ce&&te.start-te._pinPush<=C&&!A&&te.end>0&&(T=te.end-(L._startClamp?Math.max(0,te.start):te.start),(ce===f&&te.start-te._pinPush<C||ce===wn)&&isNaN(Ct)&&(Rt+=T*(1-te.progress)),ce===d&&(bt+=T));if(C+=Rt,le+=Rt,L._startClamp&&(L._startClamp+=Rt),L._endClamp&&!kn&&(L._endClamp=le||-.001,le=Math.min(le,ir(N,y))),Qe=le-C||(C-=.01)&&.001,Xt&&(K=Ae.utils.clamp(0,1,Ae.utils.normalize(C,le,ne))),L._pinPush=bt,ge&&Rt&&(T={},T[y.a]="+="+Rt,wn&&(T[y.p]="-="+J()),Ae.set([ge,de],T)),d&&!(mp&&L.end>=ir(N,y)))T=Ti(d),Y=y===$t,q=J(),Me=parseFloat(j(y.a))+bt,!It&&le>1&&(De=(H?St.scrollingElement||fi:N).style,De={style:De,value:De["overflow"+y.a.toUpperCase()]},H&&Ti(xt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(De.style["overflow"+y.a.toUpperCase()]="scroll")),up(d,k,T),M=$u(d),O=Rr(d,!0),we=X&&wr(N,Y?Sn:$t)(),g?(pe=[g+y.os2,Qe+bt+sn],pe.t=k,jt=g===Jt?sh(d,y)+Qe+bt:0,jt&&(pe.push(y.d,jt+sn),k.style.flexBasis!=="auto"&&(k.style.flexBasis=jt+sn)),ia(pe),wn&&ot.forEach(function(lt){lt.pin===wn&&lt.vars.pinSpacing!==!1&&(lt._subPinOffset=!0)}),X&&J(ne)):(jt=sh(d,y),jt&&k.style.flexBasis!=="auto"&&(k.style.flexBasis=jt+sn)),X&&(F={top:O.top+(Y?q-C:we)+sn,left:O.left+(Y?we:q-C)+sn,boxSizing:"border-box",position:"fixed"},F[Vs]=F["max"+ra]=Math.ceil(O.width)+sn,F[Hs]=F["max"+Tp]=Math.ceil(O.height)+sn,F[bi]=F[bi+bl]=F[bi+Ml]=F[bi+Tl]=F[bi+Sl]="0",F[Jt]=T[Jt],F[Jt+bl]=T[Jt+bl],F[Jt+Ml]=T[Jt+Ml],F[Jt+Tl]=T[Jt+Tl],F[Jt+Sl]=T[Jt+Sl],P=xE(_t,F,w),kn&&J(0)),i?(Se=i._initted,op(1),i.render(i.duration(),!0,!0),se=j(y.a)-Me+Qe+bt,he=Math.abs(Qe-se)>1,X&&he&&P.splice(P.length-2,2),i.render(0,!0,!0),Se||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),op(0)):se=Qe,De&&(De.value?De.style["overflow"+y.a.toUpperCase()]=De.value:De.style.removeProperty("overflow-"+y.a));else if(f&&J()&&!A)for(O=f.parentNode;O&&O!==xt;)O._pinOffset&&(C-=O._pinOffset,le-=O._pinOffset),O=O.parentNode;Oe&&Oe.forEach(function(lt){return lt.revert(!1,!0)}),L.start=C,L.end=le,Fe=ft=kn?ne:J(),!A&&!kn&&(Fe<ne&&J(ne),L.scroll.rec=0),L.revert(!1,!0),ke=Tn(),_e&&(He=-1,_e.restart(!0)),bn=0,i&&I&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(Xt||K!==L.progress||A||_||i&&!i._initted)&&(i&&!I&&(i._initted||K||i.vars.immediateRender!==!1)&&i.totalProgress(A&&C<-.001&&!K?Ae.utils.normalize(C,le,0):K,!0),L.progress=Xt||(Fe-C)/Qe===K?0:K),d&&g&&(k._pinOffset=Math.round(L.progress*se)),D&&D.invalidate(),isNaN(Le)||(Le-=Ae.getProperty(U,y.p),et-=Ae.getProperty(je,y.p),Ju(U,y,Le),Ju(ge,y,Le-(Ye||0)),Ju(je,y,et),Ju(de,y,et-(Ye||0))),Xt&&!kn&&L.update(),u&&!kn&&!Ge&&(Ge=!0,u(L),Ge=!1)}},L.getVelocity=function(){return(J()-ft)/(Tn()-pl)*1e3||0},L.endAnimation=function(){dl(L.callbackAnimation),i&&(D?D.progress(1):i.paused()?I||dl(i,L.direction<0,1):dl(i,i.reversed()))},L.labelToScroll=function(me){return i&&i.labels&&(C||L.refresh()||C)+i.labels[me]/i.duration()*Qe||0},L.getTrailing=function(me){var ze=ot.indexOf(L),Ne=L.direction>0?ot.slice(0,ze).reverse():ot.slice(ze+1);return(hi(me)?Ne.filter(function(Ye){return Ye.vars.preventOverlaps===me}):Ne).filter(function(Ye){return L.direction>0?Ye.end<=C:Ye.start>=le})},L.update=function(me,ze,Ne){if(!(A&&!Ne&&!me)){var Ye=kn===!0?ne:L.scroll(),Wt=me?0:(Ye-C)/Qe,tt=Wt<0?0:Wt>1?1:Wt||0,It=L.progress,Xt,Rt,bt,yt,Qn,Ct,wn,di;if(ze&&(ft=Fe,Fe=A?J():Ye,v&&(We=ue,ue=i&&!I?i.totalProgress():tt)),m&&d&&!bn&&!Wu&&Ei&&(!tt&&C<Ye+(Ye-ft)/(Tn()-pl)*m?tt=1e-4:tt===1&&le>Ye+(Ye-ft)/(Tn()-pl)*m&&(tt=.9999)),tt!==It&&L.enabled){if(Xt=L.isActive=!!tt&&tt<1,Rt=!!It&&It<1,Ct=Xt!==Rt,Qn=Ct||!!tt!=!!It,L.direction=tt>It?1:-1,L.progress=tt,Qn&&!bn&&(bt=tt&&!It?0:tt===1?1:It===1?2:3,I&&(yt=!Ct&&G[bt+1]!=="none"&&G[bt+1]||G[bt],di=i&&(yt==="complete"||yt==="reset"||yt in i))),x&&(Ct||di)&&(di||h||!i)&&(En(x)?x(L):L.getTrailing(x).forEach(function(q){return q.endAnimation()})),I||(D&&!bn&&!Wu?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",tt,i._tTime/i._tDur):(D.vars.totalProgress=tt,D.invalidate().restart())):i&&i.totalProgress(tt,!!(bn&&(ke||me)))),d){if(me&&g&&(k.style[g+y.os2]=Re),!X)Z(gl(Me+se*tt));else if(Qn){if(wn=!me&&tt>It&&le+1>Ye&&Ye+1>=ir(N,y),w)if(!me&&(Xt||wn)){var jt=Rr(d,!0),T=Ye-C;u0(d,xt,jt.top+(y===$t?T:0)+sn,jt.left+(y===$t?0:T)+sn)}else u0(d,k);ia(Xt||wn?P:M),he&&tt<1&&Xt||Z(Me+(tt===1&&!wn?se:0))}}v&&!fe.tween&&!bn&&!Wu&&_e.restart(!0),a&&(Ct||b&&tt&&(tt<1||!ap))&&wl(a.targets).forEach(function(q){return q.classList[Xt||b?"add":"remove"](a.className)}),o&&!I&&!me&&o(L),Qn&&!bn?(I&&(di&&(yt==="complete"?i.pause().totalProgress(1):yt==="reset"?i.restart(!0).pause():yt==="restart"?i.restart(!0):i[yt]()),o&&o(L)),(Ct||!ap)&&(c&&Ct&&Jo(L,c),W[bt]&&Jo(L,W[bt]),b&&(tt===1?L.kill(!1,1):W[bt]=0),Ct||(bt=tt===1?1:3,W[bt]&&Jo(L,W[bt]))),E&&!Xt&&Math.abs(L.getVelocity())>(_l(E)?E:2500)&&(dl(L.callbackAnimation),D?D.progress(1):dl(i,yt==="reverse"?1:!tt,1))):I&&o&&!bn&&o(L)}if(Ue){var O=A?Ye/A.duration()*(A._caScrollDist||0):Ye;re(O+(U._isFlipped?1:0)),Ue(O)}Te&&Te(-Ye/A.duration()*(A._caScrollDist||0))}},L.enable=function(me,ze){L.enabled||(L.enabled=!0,ln(N,"resize",xl),H||ln(N,"scroll",Qo),ae&&ln(s,"refreshInit",ae),me!==!1&&(L.progress=K=0,Fe=ft=He=J()),ze!==!1&&L.refresh())},L.getTween=function(me){return me&&fe?fe.tween:D},L.setPositions=function(me,ze,Ne,Ye){if(A){var Wt=A.scrollTrigger,tt=A.duration(),It=Wt.end-Wt.start;me=Wt.start+It*me/tt,ze=Wt.start+It*ze/tt}L.refresh(!1,!1,{start:t0(me,Ne&&!!L._startClamp),end:t0(ze,Ne&&!!L._endClamp)},Ye),L.update()},L.adjustPinSpacing=function(me){if(pe&&me){var ze=pe.indexOf(y.d)+1;pe[ze]=parseFloat(pe[ze])+me+sn,pe[1]=parseFloat(pe[1])+me+sn,ia(pe)}},L.disable=function(me,ze){if(me!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,ze||D&&D.pause(),ne=0,Ee&&(Ee.uncache=1),ae&&an(s,"refreshInit",ae),_e&&(_e.pause(),fe.tween&&fe.tween.kill()&&(fe.tween=0)),!H)){for(var Ne=ot.length;Ne--;)if(ot[Ne].scroller===N&&ot[Ne]!==L)return;an(N,"resize",xl),H||an(N,"scroll",Qo)}},L.kill=function(me,ze){L.disable(me,ze),D&&!ze&&D.kill(),l&&delete gp[l];var Ne=ot.indexOf(L);Ne>=0&&ot.splice(Ne,1),Ne===Bn&&th>0&&Bn--,Ne=0,ot.forEach(function(Ye){return Ye.scroller===L.scroller&&(Ne=1)}),Ne||kn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,me&&i.revert({kill:!1}),ze||i.kill()),ge&&[ge,de,U,je].forEach(function(Ye){return Ye.parentNode&&Ye.parentNode.removeChild(Ye)}),El===L&&(El=0),d&&(Ee&&(Ee.uncache=1),Ne=0,ot.forEach(function(Ye){return Ye.pin===d&&Ne++}),Ne||(Ee.spacer=0)),n.onKill&&n.onKill(L)},ot.push(L),L.enable(!1,!1),Be&&Be(L),i&&i.add&&!Qe){var Ke=L.update;L.update=function(){L.update=Ke,st.cache++,C||le||L.refresh()},Ae.delayedCall(.01,L.update),Qe=.01,C=le=0}else L.refresh();d&&mE()},s.register=function(n){return ea||(Ae=n||v0(),y0()&&window.document&&s.enable(),ea=ml),ea},s.defaults=function(n){if(n)for(var i in n)Zu[i]=n[i];return Zu},s.disable=function(n,i){ml=0,ot.forEach(function(o){return o[i?"kill":"disable"](n)}),an(at,"wheel",Qo),an(St,"scroll",Qo),clearInterval(Gu),an(St,"touchcancel",nr),an(xt,"touchstart",nr),qu(an,St,"pointerdown,touchstart,mousedown",n0),qu(an,St,"pointerup,touchend,mouseup",i0),rh.kill(),Xu(an);for(var r=0;r<st.length;r+=3)Yu(an,st[r],st[r+1]),Yu(an,st[r],st[r+2])},s.enable=function(){if(at=window,St=document,fi=St.documentElement,xt=St.body,Ae){if(wl=Ae.utils.toArray,yl=Ae.utils.clamp,pp=Ae.core.context||nr,op=Ae.core.suppressOverwrites||nr,vp=at.history.scrollRestoration||"auto",_p=at.pageYOffset||0,Ae.core.globals("ScrollTrigger",s),xt){ml=1,na=document.createElement("div"),na.style.height="100vh",na.style.position="absolute",P0(),lE(),Gt.register(Ae),s.isTouch=Gt.isTouch,ns=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),dp=Gt.isTouch===1,ln(at,"wheel",Qo),yp=[at,St,fi,xt],Ae.matchMedia?(s.matchMedia=function(u){var h=Ae.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Ae.addEventListener("matchMediaInit",function(){R0(),wp()}),Ae.addEventListener("matchMediaRevert",function(){return A0()}),Ae.addEventListener("matchMedia",function(){zs(0,1),qs("matchMedia")}),Ae.matchMedia().add("(orientation: portrait)",function(){return cp(),cp})):console.warn("Requires GSAP 3.11.0 or later"),cp(),ln(St,"scroll",Qo);var n=xt.hasAttribute("style"),i=xt.style,r=i.borderTopStyle,o=Ae.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Rr(xt),$t.m=Math.round(a.top+$t.sc())||0,Sn.m=Math.round(a.left+Sn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(xt.setAttribute("style",""),xt.removeAttribute("style")),Gu=setInterval(o0,250),Ae.delayedCall(.5,function(){return Wu=0}),ln(St,"touchcancel",nr),ln(xt,"touchstart",nr),qu(ln,St,"pointerdown,touchstart,mousedown",n0),qu(ln,St,"pointerup,touchend,mouseup",i0),fp=Ae.utils.checkPrefix("transform"),nh.push(fp),ea=Tn(),rh=Ae.delayedCall(.2,zs).pause(),ta=[St,"visibilitychange",function(){var u=at.innerWidth,h=at.innerHeight;St.hidden?(j_=u,Q_=h):(j_!==u||Q_!==h)&&xl()},St,"DOMContentLoaded",zs,at,"load",zs,at,"resize",xl],Xu(ln),ot.forEach(function(u){return u.enable(0,1)}),l=0;l<st.length;l+=3)Yu(an,st[l],st[l+1]),Yu(an,st[l],st[l+2])}else if(St){var c=function u(){s.enable(),St.removeEventListener("DOMContentLoaded",u)};St.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(ap=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Gu)||(Gu=i)&&setInterval(o0,i),"ignoreMobileResize"in n&&(dp=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Xu(an)||Xu(ln,n.autoRefreshEvents||"none"),g0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=On(n),o=st.indexOf(r),a=Ws(r);~o&&st.splice(o,a?6:2),i&&(a?zi.unshift(at,i,xt,i,fi,i):zi.unshift(r,i))},s.clearMatchMedia=function(n){ot.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(hi(n)?On(n):n).getBoundingClientRect(),a=o[r?Vs:Hs]*i||0;return r?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},s.positionInViewport=function(n,i,r){hi(n)&&(n=On(n));var o=n.getBoundingClientRect(),a=o[r?Vs:Hs],l=i==null?a/2:i in oh?oh[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/at.innerWidth:(o.top+l)/at.innerHeight},s.killAll=function(n){if(ot.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Xs.killAll||[];Xs={},i.forEach(function(r){return r()})}},s})();it.version="3.15.0";it.saveStyles=function(s){return s?wl(s).forEach(function(e){if(e&&e.style){var t=ui.indexOf(e);t>=0&&ui.splice(t,5),ui.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ae.core.getCache(e),pp())}}):ui};it.revert=function(s,e){return wp(!s,e)};it.create=function(s,e){return new it(s,e)};it.refresh=function(s){return s?xl(!0):(ea||it.register())&&zs(!0)};it.update=function(s){return++st.cache&&Cr(s===!0?2:0)};it.clearScrollMemory=C0;it.maxScroll=function(s,e){return ir(s,e?Sn:$t)};it.getScrollFunc=function(s,e){return wr(On(s),e?Sn:$t)};it.getById=function(s){return gp[s]};it.getAll=function(){return ot.filter(function(s){return s.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!Ei};it.snapDirectional=Ep;it.addEventListener=function(s,e){var t=Xs[s]||(Xs[s]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(s,e){var t=Xs[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};it.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ae.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),r<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&En(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return En(r)&&(r=r(),ln(it,"refresh",function(){return r=e.batchMax()})),wl(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(it.create(c))}),t};var f0=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},hp=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",e===fi&&s(xt,t)},ju={auto:1,scroll:1},vE=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||Ae.core.getCache(r),a=Tn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==xt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(ju[(l=Ti(r)).overflowY]||ju[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Ws(r)&&(ju[(l=Ti(r)).overflowY]||ju[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},L0=function(e,t,n,i){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&vE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&ln(St,Gt.eventTypes[0],p0,!1,!0)},onDisable:function(){return an(St,Gt.eventTypes[0],p0,!0)}})},ME=/(input|label|select|textarea)/i,d0,p0=function(e){var t=ME.test(e.target.tagName);(t||d0)&&(e._gsapAllow=!0,d0=t)},SE=function(e){ks(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=On(e.target)||fi,u=Ae.core.globals().ScrollSmoother,h=u&&u.get(),f=ns&&(e.content&&On(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=wr(c,$t),g=wr(c,Sn),_=1,m=(Gt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,p=0,S=En(i)?function(){return i(a)}:function(){return i||2.8},b,v,w=L0(c,e.type,!0,r),R=function(){return v=!1},A=nr,E=nr,x=function(){l=ir(c,$t),E=yl(ns?1:0,l),n&&(A=yl(0,ir(c,Sn))),b=Gs},y=function(){f._gsap.y=gl(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},I=function(){if(v){requestAnimationFrame(R);var z=gl(a.deltaY/2),ee=E(d.v-z);if(f&&ee!==d.v+d.offset){d.offset=ee-d.v;var L=gl((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",d.cacheID=st.cache,Cr()}return!0}d.offset&&y(),v=!0},N,V,H,X,W=function(){x(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return f&&Ae.set(f,{y:"+=0"}),e.ignoreCheck=function(G){return ns&&G.type==="touchmove"&&I(G)||_>1.05&&G.type!=="touchstart"||a.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){v=!1;var G=_;_=gl((at.visualViewport&&at.visualViewport.scale||1)/m),N.pause(),G!==_&&hp(c,_>1.01?!0:n?!1:"x"),V=g(),H=d(),x(),b=Gs},e.onRelease=e.onGestureStart=function(G,z){if(d.offset&&y(),!z)X.restart(!0);else{st.cache++;var ee=S(),L,ae;n&&(L=g(),ae=L+ee*.05*-G.velocityX/.227,ee*=f0(g,L,ae,ir(c,Sn)),N.vars.scrollX=A(ae)),L=d(),ae=L+ee*.05*-G.velocityY/.227,ee*=f0(d,L,ae,ir(c,$t)),N.vars.scrollY=E(ae),N.invalidate().duration(ee).play(.01),(ns&&N.vars.scrollY>=l||L>=l-1)&&Ae.to({},{onUpdate:W,duration:ee})}o&&o(G)},e.onWheel=function(){N._ts&&N.pause(),Tn()-p>1e3&&(b=0,p=Tn())},e.onChange=function(G,z,ee,L,ae){if(Gs!==b&&x(),z&&n&&g(A(L[2]===z?V+(G.startX-G.x):g()+z-L[1])),ee){d.offset&&y();var Pe=ae[2]===ee,Ze=Pe?H+G.startY-G.y:d()+ee-ae[1],He=E(Ze);Pe&&Ze!==He&&(H+=He-Ze),d(He)}(ee||z)&&Cr()},e.onEnable=function(){hp(c,n?!1:"x"),it.addEventListener("refresh",W),ln(at,"resize",W),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),w.enable()},e.onDisable=function(){hp(c,!0),an(at,"resize",W),it.removeEventListener("refresh",W),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new Gt(e),a.iOS=ns,ns&&!d()&&d(1),ns&&Ae.ticker.add(nr),X=a._dc,N=Ae.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:I0(d,d(),function(){return N.pause()})},onUpdate:Cr,onComplete:X.vars.onComplete}),a};it.sort=function(s){if(En(s))return ot.sort(s);var e=at.pageYOffset||0;return it.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),ot.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};it.observe=function(s){return new Gt(s)};it.normalizeScroll=function(s){if(typeof s>"u")return Fn;if(s===!0&&Fn)return Fn.enable();if(s===!1){Fn&&Fn.kill(),Fn=s;return}var e=s instanceof Gt?s:SE(s);return Fn&&Fn.target===e.target&&Fn.kill(),Ws(e.target)&&(Fn=e),e};it.core={_getVelocityProp:Hu,_inputObserver:L0,_scrollers:st,_proxies:zi,bridge:{ss:function(){Ei||qs("scrollStart"),Ei=Tn()},ref:function(){return bn}}};v0()&&Ae.registerPlugin(it);var Pr=[{slug:"river-light",title:"River light",category:"Couple story",cover:3,photos:[0,2,3,4,8,11],description:"A boat, an open sky, and an afternoon with nowhere else to be. A collection of quiet glances and easy laughter on the water.",note:"The water gives these photographs their rhythm. Reflections, open space, and the warmth of red against the landscape carry the story."},{slug:"a-quiet-afternoon",title:"A quiet afternoon",category:"Couple story",cover:6,photos:[1,5,6,7,12,13],description:"A book shared in the grass. The light settling over the hills. Small moments that feel entirely their own.",note:"Gentle colours leave room for expression. Close portraits sit beside wider frames, letting the landscape become part of the memory."},{slug:"together-in-emerald",title:"Together in emerald",category:"Celebration",cover:19,photos:[17,18,19,20,21,22],description:"Rich emerald, bright courtyards, and a little movement between the still frames. A celebration of being together.",note:"The repeating arches frame the couple, while the jewel tones bring the collection together. A balance of composed portraits and spontaneous moments."},{slug:"before-the-vows",title:"Before the vows",category:"Wedding portrait",cover:25,photos:[23,24,25],description:"The final quiet moments before a new chapter. Window light, embroidered details, and a portrait worth keeping.",note:"A small portrait collection centred on light and detail. Soft curtains and deep reds give each frame its own sense of anticipation."},{slug:"under-the-trees",title:"Under the trees",category:"Couple story",cover:30,photos:[26,27,28,29,30],description:"A walk beneath the trees. Pale flowers, deep green, and a story told at an unhurried pace.",note:"The canopy becomes a natural backdrop. Wider compositions hold the setting, while the closer frames stay with the people."}],Rl=[{title:"A day to remember",aspect:"854 / 480",duration:"04:35",caption:"Wedding film \xB7 4 minutes 35 seconds"},{title:"The moments between",aspect:"960 / 540",duration:"01:44",caption:"Wedding highlights \xB7 1 minute 44 seconds"},{title:"A promise, in motion",aspect:"1 / 1",duration:"00:50",caption:"Wedding highlights \xB7 50 seconds"},{title:"Under the trees",aspect:"4 / 5",duration:"00:05",caption:"Motion portrait \xB7 5 seconds"}];var lh=s=>`/assets/photo-${String(s).padStart(2,"0")}.jpg`;var bE=(s,e=0,t=1)=>Math.min(t,Math.max(e,s));function D0(s,e,t,n=0){return bE((n-s)/Math.max(1,e-t+n))}function N0(s,e,t=8){let n=-(e+.5)/t*Math.PI*4.4;return n+Math.round((s-n)/(Math.PI*2))*Math.PI*2}Bi.registerPlugin(it);var wi=matchMedia("(prefers-reduced-motion: reduce)").matches,Xe=s=>document.querySelector(s),TE=!!Xe("#camera-canvas"),is=[];if(TE){let A=function(E,x=innerWidth/2,y=innerHeight/2){if(R(),wi){location.assign(`/stories/${E.slug}/`);return}let I=document.createElement("img");I.className="story-transition",I.src=lh(E.cover),I.alt="",Object.assign(I.style,{position:"fixed",left:`${x-80}px`,top:`${y-100}px`,width:"160px",height:"200px",objectFit:"cover",zIndex:"100",pointerEvents:"none"}),document.body.append(I),Bi.to(I,{left:0,top:0,width:innerWidth,height:innerHeight,duration:.55,ease:"power3.inOut",onComplete:()=>location.assign(`/stories/${E.slug}/`)})},s=Xe("#case-rows"),e=Xe("#ribbon-fallback");Pr.forEach((E,x)=>s.insertAdjacentHTML("beforeend",`<a class="case-row" data-story="${x}" href="/stories/${E.slug}/"><small>${String(x+1).padStart(2,"0")}.</small><span>${E.title}</span><span>${E.category}</span></a>`));let t=[0,1,2,3,4,0,1,2];t.forEach((E,x)=>e.insertAdjacentHTML("beforeend",`<a href="/stories/${Pr[E].slug}/" data-story="${E}" style="--i:${x}" aria-label="Open ${Pr[E].title}"><img src="${lh(Pr[E].cover)}" alt="${Pr[E].title}" loading="lazy"></a>`)),Rl.forEach((E,x)=>Xe("#video-panels").insertAdjacentHTML("beforeend",`<button class="video-panel" data-film="${x}" style="--film-aspect:${E.aspect}" aria-label="Play ${E.title}"><video src="/assets/preview-${x}.mp4" poster="/assets/film-${x}.jpg" muted loop playsinline preload="none" aria-hidden="true"></video><div class="film-meta"><span>FILM ${String(x+1).padStart(2,"0")}</span><span>${E.duration}</span></div><h3>${E.title}</h3><span class="play-label">SELECT TO PLAY</span></button>`));let n=new IntersectionObserver(E=>E.forEach(x=>{let y=x.target;y.dataset.visible=x.isIntersecting?"1":"0",x.isIntersecting&&!wi&&!Xe("#film-dialog").open?y.play().catch(()=>{}):y.pause()}),{threshold:.15});document.querySelectorAll(".video-panel video").forEach(E=>n.observe(E)),is.push(()=>n.disconnect());let i=Xe("#film-dialog"),r=Xe("#full-film"),o=Xe("#film-play"),a=null,l=null,c="closed",u=()=>document.querySelectorAll(".video-panel video").forEach(E=>{E.dataset.visible==="1"&&!wi&&!document.hidden&&E.play().catch(()=>{})}),h=()=>{c==="playing"&&(r.controls=!0,o.hidden=!0,r.play().catch(()=>{c==="playing"&&(o.hidden=!1)}))};o.addEventListener("click",h),document.querySelectorAll(".video-panel").forEach(E=>E.addEventListener("click",()=>{if(c!=="closed")return;a=E,c="opening";let x=Number(E.dataset.film);document.querySelectorAll(".video-panel video").forEach(V=>V.pause()),Xe("#film-dialog-title").textContent=Rl[x].title,Xe("#film-caption").textContent=Rl[x].caption,r.src=`/assets/film-${x}.mp4`,r.poster=`/assets/film-${x}.jpg`,r.style.aspectRatio=Rl[x].aspect,r.muted=!1,r.loop=!1,r.controls=!1,o.hidden=!0,i.showModal(),document.body.classList.add("modal-open");let y=()=>{c="playing",h()};if(wi){y();return}let I=E.querySelector("video").getBoundingClientRect(),N=r.getBoundingClientRect();l=Bi.timeline({onComplete:y}).fromTo(r,{x:I.left-N.left,y:I.top-N.top,scaleX:I.width/N.width,scaleY:I.height/N.height,rotationY:-17,transformOrigin:"top left"},{x:0,y:0,scaleX:1,scaleY:1,rotationY:0,duration:.75,ease:"power3.inOut",clearProps:"transform,transformOrigin"},0).fromTo(".player-top, #film-caption",{opacity:0},{opacity:1,duration:.25},.5)}));let f=()=>{if(c==="closed"||c==="closing")return;c="closing",l?.kill(),r.pause(),r.controls=!1,o.hidden=!0;let E=()=>i.close();if(wi||!a){E();return}let x=a.querySelector("video").getBoundingClientRect(),y=r.getBoundingClientRect();l=Bi.timeline({onComplete:E}).to(".player-top, #film-caption",{opacity:0,duration:.15},0).to(r,{x:x.left-y.left,y:x.top-y.top,scaleX:x.width/y.width,scaleY:x.height/y.height,rotationY:-17,transformOrigin:"top left",duration:.55,ease:"power3.inOut"},0)};Xe("#film-close").addEventListener("click",f),i.addEventListener("cancel",E=>{E.preventDefault(),f()}),i.addEventListener("click",E=>{if(E.target===i){let x=i.getBoundingClientRect();(E.clientX<x.left||E.clientX>x.right||E.clientY<x.top||E.clientY>x.bottom)&&f()}}),i.addEventListener("close",()=>{l?.kill(),c="closed",r.pause(),r.removeAttribute("src"),r.load(),Bi.set(r,{clearProps:"transform,transformOrigin"}),Bi.set(".player-top, #film-caption",{clearProps:"opacity"}),document.body.classList.remove("modal-open"),u(),a?.focus()}),document.addEventListener("visibilitychange",()=>{document.hidden?document.querySelectorAll("video").forEach(E=>E.pause()):i.open||u()});let d=Xe("#enquiry-dialog");Xe("#enquiry-open").addEventListener("click",()=>{d.showModal(),document.body.classList.add("modal-open")}),Xe("#enquiry-close").addEventListener("click",()=>d.close()),d.addEventListener("close",()=>document.body.classList.remove("modal-open")),Xe("#enquiry-form").addEventListener("submit",E=>{E.preventDefault();let x=new FormData(E.target),y=`Hello Joseph,

My name is ${x.get("name")}. I'm enquiring about ${x.get("service").toLowerCase()} photography.
${x.get("date")?"Date: "+x.get("date")+`
`:""}${x.get("location")?"Location: "+x.get("location")+`
`:""}
${x.get("message")}

You can reach me at ${x.get("email")}.`;Xe("#enquiry-message").value=y,Xe("#email-enquiry").href=`mailto:josephsaadeh.photo@gmail.com?subject=${encodeURIComponent(x.get("service")+" photography enquiry")}&body=${encodeURIComponent(y)}`,E.target.hidden=!0,Xe("#enquiry-result").hidden=!1,Xe("#email-enquiry").focus()}),Xe("#edit-enquiry").addEventListener("click",()=>{Xe("#enquiry-form").hidden=!1,Xe("#enquiry-result").hidden=!0,Xe("#enquiry-form input").focus()}),Xe("#copy-enquiry").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(Xe("#enquiry-message").value),Xe("#copy-status").textContent="Message copied."}catch{Xe("#enquiry-message").select(),Xe("#copy-status").textContent="Select and copy the message above."}}),wi||Bi.timeline({scrollTrigger:{trigger:".camera-section",start:"top top",end:"bottom bottom",scrub:1}}).to(".hero-heading",{y:-75,opacity:0,duration:.35},0).fromTo(".intro-copy",{y:35,opacity:0},{y:0,opacity:1,duration:.3},.3).to(".camera-stage",{xPercent:9,yPercent:innerWidth<700?40:0,scale:innerWidth<700?.72:.85,duration:.6},.1).to(".camera-note",{opacity:0,duration:.25},.45).to(".hero-actions",{opacity:0,pointerEvents:"none",duration:.2},.1),wi||Bi.from(".collection-image img",{scale:1.08,ease:"none",scrollTrigger:{trigger:".collection-editorial",start:"top bottom",end:"bottom top",scrub:1}});let g=0,_=()=>{},m=(E,x="pointer")=>{g=E;let y=Pr[E];Xe("#ribbon-label").href=`/stories/${y.slug}/`,Xe("#ribbon-label").innerHTML=`${String(E+1).padStart(2,"0")} / ${y.title}<span>OPEN STORY</span>`,document.querySelectorAll(".case-row,.ribbon-fallback a").forEach(I=>I.classList.toggle("active",Number(I.dataset.story)===E)),_(E,x)};m(0),document.querySelectorAll(".case-row,.ribbon-fallback a").forEach(E=>{E.addEventListener("pointerenter",()=>m(Number(E.dataset.story),"case")),E.addEventListener("focus",()=>m(Number(E.dataset.story),"case"))});let p=[["about","01 / THE PHOTOGRAPHER"],["work","02 / SELECTED STORIES"],["films","03 / IN MOTION"],["collections","04 / THROUGH THE LENS"],["contact","05 / YOUR NEXT CHAPTER"]],S=()=>{let E=document.documentElement.scrollHeight-innerHeight;Xe("#timeline-progress").style.left=`${E?scrollY/E*100:0}%`;for(let[x,y]of p)document.getElementById(x).getBoundingClientRect().top<innerHeight*.45&&(Xe("#chapter").textContent=y)};window.addEventListener("scroll",S,{passive:!0}),S(),wi||document.querySelectorAll(".still-object").forEach((E,x)=>Bi.fromTo(E,{y:[75,30,55,110][x],rotation:[-5,3,-3,5][x]},{y:[-30,-12,-22,-48][x],rotation:0,ease:"none",scrollTrigger:{trigger:".contact-section",start:"top bottom",end:"bottom bottom",scrub:1}}));let b=E=>{try{let x=E.getContext("webgl2",{alpha:!0,antialias:!0,powerPreference:"low-power"});if(!x)return null;let y=new _u({canvas:E,context:x,alpha:!0,antialias:!0});return y.setPixelRatio(Math.min(devicePixelRatio,1.75)),y.outputColorSpace=zt,y}catch{return null}},v=b(Xe("#camera-canvas"));if(v){let E=new yo,x=new qt(34,1,.01,100),y=new Vn;E.add(y),x.position.set(3.2,2.2,10),x.lookAt(0,0,0);let I=!0,N=0,V=0,H=()=>{let G=Xe(".camera-stage").getBoundingClientRect();v.setSize(G.width,G.height,!1),x.aspect=G.width/G.height,x.updateProjectionMatrix()};H();let X=new ResizeObserver(H);X.observe(Xe(".camera-stage")),is.push(()=>X.disconnect()),new yu().load("/assets/camera.glb",G=>{let z=G.scene;for(let ae of["hotshoeattachment_GRP","FILMnotANIM_GRP"]){let Pe=z.getObjectByName(ae);Pe&&Pe.removeFromParent()}z.updateMatrixWorld(!0);let ee=new Pn().setFromObject(z),L=ee.getSize(new B);z.position.sub(ee.getCenter(new B)),y.scale.setScalar(5.1/Math.max(L.x,L.y,L.z)),y.add(z),z.traverse(ae=>{if(!ae.isMesh)return;ae.material=new Wn({color:1052688,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});let Pe=new gs(new Ia(ae.geometry,23),new Vr({color:11973287,transparent:!0,opacity:.9}));ae.add(Pe)}),y.rotation.y=-.35,Xe(".camera-stage").classList.add("loaded")},void 0,()=>v.dispose()),wi||window.addEventListener("pointermove",G=>{N=(G.clientX/innerWidth-.5)*.12,V=(G.clientY/innerHeight-.5)*.08},{passive:!0});let W=new IntersectionObserver(G=>{I=G[0].isIntersecting},{rootMargin:"50px"});W.observe(Xe(".camera-section")),is.push(()=>W.disconnect()),v.setAnimationLoop(()=>{if(!I||document.hidden)return;let G=Xe(".camera-section").getBoundingClientRect(),z=Gr.clamp(-G.top/(G.height-innerHeight),0,1);y.rotation.y=Gr.lerp(y.rotation.y,-.35+(wi?0:z*Math.PI*1.5)+N,.06),y.rotation.x=Gr.lerp(y.rotation.x,V,.05),v.render(E,x)}),is.push(()=>{v.setAnimationLoop(null),E.traverse(G=>{G.geometry&&G.geometry.dispose(),G.material&&(Array.isArray(G.material)?G.material:[G.material]).forEach(ee=>ee.dispose())}),v.dispose()})}let w=b(Xe("#ribbon-canvas"));if(w){let E=new yo,x=new qt(39,1,.1,100);x.position.set(0,0,10.8),x.lookAt(0,0,0);let y=new Vn;E.add(y);let I,N,V=!1,H=-1,X=null,W=0,G=()=>{let C=Xe(".ribbon-stage").getBoundingClientRect();w.setSize(C.width,C.height,!1),x.aspect=C.width/C.height,x.position.z=innerWidth<700?11:10.8,x.updateProjectionMatrix()};G();let z=new ResizeObserver(G);z.observe(Xe(".ribbon-stage")),is.push(()=>z.disconnect());let ee=document.createElement("canvas");ee.width=4096,ee.height=384;let L=ee.getContext("2d"),ae=await Promise.all(t.map(C=>new Promise(le=>{let ge=new Image;ge.onload=()=>le(ge),ge.onerror=()=>le(null),ge.src=lh(Pr[C].cover)}))),Pe=()=>{L.clearRect(0,0,4096,384),L.fillStyle="#ae9064",L.fillRect(0,0,4096,384),ae.forEach((C,le)=>{let ge=le*512;if(C){let de=Math.max(500/C.width,280/C.height),U=500/de,je=280/de;L.drawImage(C,(C.width-U)/2,(C.height-je)/2,U,je,ge+6,52,500,280)}L.fillStyle="#1b1109",L.font="15px monospace",L.fillText(`${String(le+1).padStart(2,"0")}  J. SAADEH  35mm`,ge+28,374),t[le]===g&&(L.strokeStyle="#ffe0a4",L.lineWidth=8,L.strokeRect(ge+7,53,498,278));for(let de=0;de<12;de++)L.clearRect(ge+de*42+8,7,23,29),L.clearRect(ge+de*42+8,341,23,24)}),N&&(N.needsUpdate=!0)};Pe(),N=new Ra(ee),N.colorSpace=zt,N.anisotropy=Math.min(4,w.capabilities.getMaxAnisotropy());let Ze=320,He=[],ke=[],K=[];for(let C=0;C<=Ze;C++){let le=C/Ze,ge=le*Math.PI*4.4;for(let de=0;de<2;de++)He.push(1.8*Math.sin(ge),(le-.5)*7.5+(de-.5)*1.15,1.8*Math.cos(ge)),ke.push(le,de)}for(let C=0;C<Ze;C++){let le=C*2;K.push(le,le+1,le+2,le+1,le+3,le+2)}let J=new _n;J.setAttribute("position",new cn(He,3)),J.setAttribute("uv",new cn(ke,2)),J.setIndex(K),J.computeVertexNormals(),I=new en(J,new Wn({map:N,side:Yn,transparent:!0,alphaTest:.1})),y.add(I),y.rotation.z=-.035,Xe(".ribbon-stage").classList.add("loaded"),_=(C,le)=>{Pe(),le==="case"&&(X=t.flatMap((de,U)=>de===C?[N0(y.rotation.y,U)]:[]).sort((de,U)=>Math.abs(de-y.rotation.y)-Math.abs(U-y.rotation.y))[0],W=fe())};let fe=()=>{let C=innerWidth<700,le=Xe(C?".ribbon-scroll":".filmstrip-layout").getBoundingClientRect();return D0(le.top,le.height,innerHeight,C?90:0)},Ee=new Va,be=new rt,Fe=C=>{let le=Xe("#ribbon-canvas").getBoundingClientRect();be.set((C.clientX-le.left)/le.width*2-1,-(C.clientY-le.top)/le.height*2+1),Ee.setFromCamera(be,x);let ge=Ee.intersectObject(I)[0];return ge?.uv?Math.min(7,Math.floor(ge.uv.x*8)):-1};Xe("#ribbon-canvas").addEventListener("pointermove",C=>{let le=Fe(C);le!==H&&(H=le,Pe(),le>=0&&m(t[le]),Xe("#ribbon-canvas").style.cursor=le<0?"default":"pointer")}),Xe("#ribbon-canvas").addEventListener("pointerleave",()=>{H=-1,Pe()}),Xe("#ribbon-canvas").addEventListener("click",C=>{let le=Fe(C);le>=0&&A(Pr[t[le]],C.clientX,C.clientY)});let ft=new IntersectionObserver(C=>{V=C[0].isIntersecting},{rootMargin:"100px"});ft.observe(Xe(".ribbon-stage")),is.push(()=>ft.disconnect()),w.setAnimationLoop(()=>{if(!V||document.hidden)return;let C=fe();X!==null&&Math.abs(C-W)>.015&&(X=null);let le=X??(wi?-.65:C*Math.PI*1.8-.65);y.rotation.y=wi?le:Gr.lerp(y.rotation.y,le,.08),w.render(E,x)}),is.push(()=>{w.setAnimationLoop(null),J.dispose(),I.material.dispose(),N.dispose(),w.dispose()})}let R=()=>{try{sessionStorage.setItem("joseph-work-scroll",String(scrollY))}catch{}};if(document.querySelectorAll('a[href^="/stories/"]').forEach(E=>E.addEventListener("click",R)),window.addEventListener("pagehide",E=>{E.persisted||is.forEach(x=>x())}),window.addEventListener("pageshow",()=>document.querySelectorAll(".story-transition").forEach(E=>E.remove())),location.hash==="#work")try{let E=Number(sessionStorage.getItem("joseph-work-scroll"));E>0&&requestAnimationFrame(()=>{window.scrollTo({top:E,behavior:"instant"}),it.update()})}catch{}it.refresh()}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
