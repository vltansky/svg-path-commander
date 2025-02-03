var SVGPathCommander=function(me){"use strict";var Vt=Object.defineProperty,Rt=(t,e,r)=>e in t?Vt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,I=(t,e,r)=>Rt(t,typeof e!="symbol"?e+"":e,r);const _t={a:1,b:0,c:0,d:1,e:0,f:0,m11:1,m12:0,m13:0,m14:0,m21:0,m22:1,m23:0,m24:0,m31:0,m32:0,m33:1,m34:0,m41:0,m42:0,m43:0,m44:1,is2D:!0,isIdentity:!0},Fe=t=>(t instanceof Float64Array||t instanceof Float32Array||Array.isArray(t)&&t.every(e=>typeof e=="number"))&&[6,16].some(e=>t.length===e),Ue=t=>t instanceof DOMMatrix||t instanceof P||typeof t=="object"&&Object.keys(_t).every(e=>t&&e in t),te=t=>{const e=new P,r=Array.from(t);if(!Fe(r))throw TypeError(`CSSMatrix: "${r.join(",")}" must be an array with 6/16 numbers.`);if(r.length===16){const[s,n,o,i,l,c,a,m,h,f,y,u,g,p,b,M]=r;e.m11=s,e.a=s,e.m21=l,e.c=l,e.m31=h,e.m41=g,e.e=g,e.m12=n,e.b=n,e.m22=c,e.d=c,e.m32=f,e.m42=p,e.f=p,e.m13=o,e.m23=a,e.m33=y,e.m43=b,e.m14=i,e.m24=m,e.m34=u,e.m44=M}else if(r.length===6){const[s,n,o,i,l,c]=r;e.m11=s,e.a=s,e.m12=n,e.b=n,e.m21=o,e.c=o,e.m22=i,e.d=i,e.m41=l,e.e=l,e.m42=c,e.f=c}return e},Ge=t=>{if(Ue(t))return te([t.m11,t.m12,t.m13,t.m14,t.m21,t.m22,t.m23,t.m24,t.m31,t.m32,t.m33,t.m34,t.m41,t.m42,t.m43,t.m44]);throw TypeError(`CSSMatrix: "${JSON.stringify(t)}" is not a DOMMatrix / CSSMatrix / JSON compatible object.`)},Je=t=>{if(typeof t!="string")throw TypeError(`CSSMatrix: "${JSON.stringify(t)}" is not a string.`);const e=String(t).replace(/\s/g,"");let r=new P;const s=`CSSMatrix: invalid transform string "${t}"`;return e.split(")").filter(n=>n).forEach(n=>{const[o,i]=n.split("(");if(!i)throw TypeError(s);const l=i.split(",").map(u=>u.includes("rad")?parseFloat(u)*(180/Math.PI):parseFloat(u)),[c,a,m,h]=l,f=[c,a,m],y=[c,a,m,h];if(o==="perspective"&&c&&[a,m].every(u=>u===void 0))r.m34=-1/c;else if(o.includes("matrix")&&[6,16].includes(l.length)&&l.every(u=>!Number.isNaN(+u))){const u=l.map(g=>Math.abs(g)<1e-6?0:g);r=r.multiply(te(u))}else if(o==="translate3d"&&f.every(u=>!Number.isNaN(+u)))r=r.translate(c,a,m);else if(o==="translate"&&c&&m===void 0)r=r.translate(c,a||0,0);else if(o==="rotate3d"&&y.every(u=>!Number.isNaN(+u))&&h)r=r.rotateAxisAngle(c,a,m,h);else if(o==="rotate"&&c&&[a,m].every(u=>u===void 0))r=r.rotate(0,0,c);else if(o==="scale3d"&&f.every(u=>!Number.isNaN(+u))&&f.some(u=>u!==1))r=r.scale(c,a,m);else if(o==="scale"&&!Number.isNaN(c)&&(c!==1||a!==1)&&m===void 0){const u=Number.isNaN(+a)?c:a;r=r.scale(c,u,1)}else if(o==="skew"&&(c||!Number.isNaN(c)&&a)&&m===void 0)r=r.skew(c,a||0);else if(["translate","rotate","scale","skew"].some(u=>o.includes(u))&&/[XYZ]/.test(o)&&c&&[a,m].every(u=>u===void 0))if(o==="skewX"||o==="skewY")r=r[o](c);else{const u=o.replace(/[XYZ]/,""),g=o.replace(u,""),p=["X","Y","Z"].indexOf(g),b=u==="scale"?1:0,M=[p===0?c:b,p===1?c:b,p===2?c:b];r=r[u](...M)}else throw TypeError(s)}),r},we=(t,e)=>e?[t.a,t.b,t.c,t.d,t.e,t.f]:[t.m11,t.m12,t.m13,t.m14,t.m21,t.m22,t.m23,t.m24,t.m31,t.m32,t.m33,t.m34,t.m41,t.m42,t.m43,t.m44],Ke=(t,e,r)=>{const s=new P;return s.m41=t,s.e=t,s.m42=e,s.f=e,s.m43=r,s},We=(t,e,r)=>{const s=new P,n=Math.PI/180,o=t*n,i=e*n,l=r*n,c=Math.cos(o),a=-Math.sin(o),m=Math.cos(i),h=-Math.sin(i),f=Math.cos(l),y=-Math.sin(l),u=m*f,g=-m*y;s.m11=u,s.a=u,s.m12=g,s.b=g,s.m13=h;const p=a*h*f+c*y;s.m21=p,s.c=p;const b=c*f-a*h*y;return s.m22=b,s.d=b,s.m23=-a*m,s.m31=a*y-c*h*f,s.m32=a*f+c*h*y,s.m33=c*m,s},Xe=(t,e,r,s)=>{const n=new P,o=Math.sqrt(t*t+e*e+r*r);if(o===0)return n;const i=t/o,l=e/o,c=r/o,a=s*(Math.PI/360),m=Math.sin(a),h=Math.cos(a),f=m*m,y=i*i,u=l*l,g=c*c,p=1-2*(u+g)*f;n.m11=p,n.a=p;const b=2*(i*l*f+c*m*h);n.m12=b,n.b=b,n.m13=2*(i*c*f-l*m*h);const M=2*(l*i*f-c*m*h);n.m21=M,n.c=M;const d=1-2*(g+y)*f;return n.m22=d,n.d=d,n.m23=2*(l*c*f+i*m*h),n.m31=2*(c*i*f+l*m*h),n.m32=2*(c*l*f-i*m*h),n.m33=1-2*(y+u)*f,n},Ye=(t,e,r)=>{const s=new P;return s.m11=t,s.a=t,s.m22=e,s.d=e,s.m33=r,s},ue=(t,e)=>{const r=new P;if(t){const s=t*Math.PI/180,n=Math.tan(s);r.m21=n,r.c=n}if(e){const s=e*Math.PI/180,n=Math.tan(s);r.m12=n,r.b=n}return r},et=t=>ue(t,0),tt=t=>ue(0,t),D=(t,e)=>{const r=e.m11*t.m11+e.m12*t.m21+e.m13*t.m31+e.m14*t.m41,s=e.m11*t.m12+e.m12*t.m22+e.m13*t.m32+e.m14*t.m42,n=e.m11*t.m13+e.m12*t.m23+e.m13*t.m33+e.m14*t.m43,o=e.m11*t.m14+e.m12*t.m24+e.m13*t.m34+e.m14*t.m44,i=e.m21*t.m11+e.m22*t.m21+e.m23*t.m31+e.m24*t.m41,l=e.m21*t.m12+e.m22*t.m22+e.m23*t.m32+e.m24*t.m42,c=e.m21*t.m13+e.m22*t.m23+e.m23*t.m33+e.m24*t.m43,a=e.m21*t.m14+e.m22*t.m24+e.m23*t.m34+e.m24*t.m44,m=e.m31*t.m11+e.m32*t.m21+e.m33*t.m31+e.m34*t.m41,h=e.m31*t.m12+e.m32*t.m22+e.m33*t.m32+e.m34*t.m42,f=e.m31*t.m13+e.m32*t.m23+e.m33*t.m33+e.m34*t.m43,y=e.m31*t.m14+e.m32*t.m24+e.m33*t.m34+e.m34*t.m44,u=e.m41*t.m11+e.m42*t.m21+e.m43*t.m31+e.m44*t.m41,g=e.m41*t.m12+e.m42*t.m22+e.m43*t.m32+e.m44*t.m42,p=e.m41*t.m13+e.m42*t.m23+e.m43*t.m33+e.m44*t.m43,b=e.m41*t.m14+e.m42*t.m24+e.m43*t.m34+e.m44*t.m44;return te([r,s,n,o,i,l,c,a,m,h,f,y,u,g,p,b])};class P{constructor(e){return this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0,this.m11=1,this.m12=0,this.m13=0,this.m14=0,this.m21=0,this.m22=1,this.m23=0,this.m24=0,this.m31=0,this.m32=0,this.m33=1,this.m34=0,this.m41=0,this.m42=0,this.m43=0,this.m44=1,e?this.setMatrixValue(e):this}get isIdentity(){return this.m11===1&&this.m12===0&&this.m13===0&&this.m14===0&&this.m21===0&&this.m22===1&&this.m23===0&&this.m24===0&&this.m31===0&&this.m32===0&&this.m33===1&&this.m34===0&&this.m41===0&&this.m42===0&&this.m43===0&&this.m44===1}get is2D(){return this.m31===0&&this.m32===0&&this.m33===1&&this.m34===0&&this.m43===0&&this.m44===1}setMatrixValue(e){return typeof e=="string"&&e.length&&e!=="none"?Je(e):Array.isArray(e)||e instanceof Float64Array||e instanceof Float32Array?te(e):typeof e=="object"?Ge(e):this}toFloat32Array(e){return Float32Array.from(we(this,e))}toFloat64Array(e){return Float64Array.from(we(this,e))}toString(){const{is2D:e}=this,r=this.toFloat64Array(e).join(", ");return`${e?"matrix":"matrix3d"}(${r})`}toJSON(){const{is2D:e,isIdentity:r}=this;return{...this,is2D:e,isIdentity:r}}multiply(e){return D(this,e)}translate(e,r,s){const n=e;let o=r,i=s;return typeof o>"u"&&(o=0),typeof i>"u"&&(i=0),D(this,Ke(n,o,i))}scale(e,r,s){const n=e;let o=r,i=s;return typeof o>"u"&&(o=e),typeof i>"u"&&(i=1),D(this,Ye(n,o,i))}rotate(e,r,s){let n=e,o=r||0,i=s||0;return typeof e=="number"&&typeof r>"u"&&typeof s>"u"&&(i=n,n=0,o=0),D(this,We(n,o,i))}rotateAxisAngle(e,r,s,n){if([e,r,s,n].some(o=>Number.isNaN(+o)))throw new TypeError("CSSMatrix: expecting 4 values");return D(this,Xe(e,r,s,n))}skewX(e){return D(this,et(e))}skewY(e){return D(this,tt(e))}skew(e,r){return D(this,ue(e,r))}transformPoint(e){const r=this.m11*e.x+this.m21*e.y+this.m31*e.z+this.m41*e.w,s=this.m12*e.x+this.m22*e.y+this.m32*e.z+this.m42*e.w,n=this.m13*e.x+this.m23*e.y+this.m33*e.z+this.m43*e.w,o=this.m14*e.x+this.m24*e.y+this.m34*e.z+this.m44*e.w;return e instanceof DOMPoint?new DOMPoint(r,s,n,o):{x:r,y:s,z:n,w:o}}}I(P,"Translate",Ke),I(P,"Rotate",We),I(P,"RotateAxisAngle",Xe),I(P,"Scale",Ye),I(P,"SkewX",et),I(P,"SkewY",tt),I(P,"Skew",ue),I(P,"Multiply",D),I(P,"fromArray",te),I(P,"fromMatrix",Ge),I(P,"fromString",Je),I(P,"toArray",we),I(P,"isCompatibleArray",Fe),I(P,"isCompatibleObject",Ue);const U={origin:[0,0,0],round:4},W={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},Le=t=>{let e=t.pathValue[t.segmentStart],r=e.toLowerCase();const{data:s}=t;for(;s.length>=W[r]&&(r==="m"&&s.length>2?(t.segments.push([e].concat(s.splice(0,2))),r="l",e=e==="m"?"l":"L"):t.segments.push([e].concat(s.splice(0,W[r]))),!!W[r]););},O="SVGPathCommander Error",nt=t=>{const{index:e,pathValue:r}=t,s=r.charCodeAt(e);if(s===48){t.param=0,t.index+=1;return}if(s===49){t.param=1,t.index+=1;return}t.err=`${O}: invalid Arc flag "${r[e]}", expecting 0 or 1 at index ${e}`},H=t=>t>=48&&t<=57,F="Invalid path value",rt=t=>{const{max:e,pathValue:r,index:s}=t;let n=s,o=!1,i=!1,l=!1,c=!1,a;if(n>=e){t.err=`${O}: ${F} at index ${n}, "pathValue" is missing param`;return}if(a=r.charCodeAt(n),(a===43||a===45)&&(n+=1,a=r.charCodeAt(n)),!H(a)&&a!==46){t.err=`${O}: ${F} at index ${n}, "${r[n]}" is not a number`;return}if(a!==46){if(o=a===48,n+=1,a=r.charCodeAt(n),o&&n<e&&a&&H(a)){t.err=`${O}: ${F} at index ${s}, "${r[s]}" illegal number`;return}for(;n<e&&H(r.charCodeAt(n));)n+=1,i=!0;a=r.charCodeAt(n)}if(a===46){for(c=!0,n+=1;H(r.charCodeAt(n));)n+=1,l=!0;a=r.charCodeAt(n)}if(a===101||a===69){if(c&&!i&&!l){t.err=`${O}: ${F} at index ${n}, "${r[n]}" invalid float exponent`;return}if(n+=1,a=r.charCodeAt(n),(a===43||a===45)&&(n+=1),n<e&&H(r.charCodeAt(n)))for(;n<e&&H(r.charCodeAt(n));)n+=1;else{t.err=`${O}: ${F} at index ${n}, "${r[n]}" invalid integer exponent`;return}}t.index=n,t.param=+t.pathValue.slice(s,n)},st=t=>[5760,6158,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279,10,13,8232,8233,32,9,11,12,160].includes(t),X=t=>{const{pathValue:e,max:r}=t;for(;t.index<r&&st(e.charCodeAt(t.index));)t.index+=1},ot=t=>{switch(t|32){case 109:case 122:case 108:case 104:case 118:case 99:case 115:case 113:case 116:case 97:return!0;default:return!1}},it=t=>H(t)||t===43||t===45||t===46,ct=t=>(t|32)===97,lt=t=>{switch(t|32){case 109:case 77:return!0;default:return!1}},Te=t=>{var c;const{max:e,pathValue:r,index:s,segments:n}=t,o=r.charCodeAt(s),i=W[r[s].toLowerCase()];if(t.segmentStart=s,!ot(o)){t.err=`${O}: ${F} "${r[s]}" is not a path command at index ${s}`;return}const l=n[n.length-1];if(!lt(o)&&((c=l==null?void 0:l[0])==null?void 0:c.toLocaleLowerCase())==="z"){t.err=`${O}: ${F} "${r[s]}" is not a MoveTo path command at index ${s}`;return}if(t.index+=1,X(t),t.data=[],!i){Le(t);return}for(;;){for(let a=i;a>0;a-=1){if(ct(o)&&(a===3||a===4)?nt(t):rt(t),t.err.length)return;t.data.push(t.param),X(t),t.index<e&&r.charCodeAt(t.index)===44&&(t.index+=1,X(t))}if(t.index>=t.max||!it(r.charCodeAt(t.index)))break}Le(t)};class ve{constructor(e){this.segments=[],this.pathValue=e,this.max=e.length,this.index=0,this.param=0,this.segmentStart=0,this.data=[],this.err=""}}const V=t=>{if(typeof t!="string")return t.slice(0);const e=new ve(t);for(X(e);e.index<e.max&&!e.err.length;)Te(e);if(!e.err.length)e.segments.length&&(e.segments[0][0]="M");else throw TypeError(e.err);return e.segments},ne=(t,e,r,s)=>{const[n]=t,o=n.toUpperCase();if(e===0||o===n)return t;if(o==="A")return[o,t[1],t[2],t[3],t[4],t[5],t[6]+r,t[7]+s];if(o==="V")return[o,t[1]+s];if(o==="H")return[o,t[1]+r];if(o==="L")return[o,t[1]+r,t[2]+s];{const l=[],c=t.length;for(let a=1;a<c;a+=1)l.push(t[a]+(a%2?r:s));return[o].concat(l)}},R=(t,e)=>{let r=t.length,s,n="M",o="M",i=!1,l=0,c=0,a=0,m=0,h=0;for(let f=0;f<r;f+=1){s=t[f],[n]=s,h=s.length,o=n.toUpperCase(),i=o!==n;const y=e(s,f,l,c);if(y===!1)break;o==="Z"?(l=a,c=m):o==="H"?l=s[1]+(i?l:0):o==="V"?c=s[1]+(i?c:0):(l=s[h-2]+(i?l:0),c=s[h-1]+(i?c:0),o==="M"&&(a=l,m=c)),y&&(t[f]=y,y[0]==="C"&&(r=t.length))}return t},he=t=>{const e=V(t);return R(e,ne)},je=(t,e,r,s)=>{const[n]=t,o=n.toLowerCase();if(e===0||n===o)return t;if(o==="a")return[o,t[1],t[2],t[3],t[4],t[5],t[6]-r,t[7]-s];if(o==="v")return[o,t[1]-s];if(o==="h")return[o,t[1]-r];if(o==="l")return[o,t[1]-r,t[2]-s];{const l=[],c=t.length;for(let a=1;a<c;a+=1)l.push(t[a]-(a%2?r:s));return[o].concat(l)}},at=t=>{const e=V(t);return R(e,je)},re=(t,e,r)=>{const{sin:s,cos:n}=Math,o=t*n(r)-e*s(r),i=t*s(r)+e*n(r);return{x:o,y:i}},fe=(t,e,r,s,n,o,i,l,c,a)=>{let m=t,h=e,f=r,y=s,u=l,g=c;const p=Math.PI*120/180,b=Math.PI/180*(+n||0);let M=[],d,x,A,S,j;if(a)[x,A,S,j]=a;else{d=re(m,h,-b),m=d.x,h=d.y,d=re(u,g,-b),u=d.x,g=d.y;const w=(m-u)/2,k=(h-g)/2;let v=w*w/(f*f)+k*k/(y*y);v>1&&(v=Math.sqrt(v),f*=v,y*=v);const Be=f*f,He=y*y,Ot=(o===i?-1:1)*Math.sqrt(Math.abs((Be*He-Be*k*k-He*w*w)/(Be*k*k+He*w*w)));S=Ot*f*k/y+(m+u)/2,j=Ot*-y*w/f+(h+g)/2,x=Math.asin(((h-j)/y*10**9>>0)/10**9),A=Math.asin(((g-j)/y*10**9>>0)/10**9),x=m<S?Math.PI-x:x,A=u<S?Math.PI-A:A,x<0&&(x=Math.PI*2+x),A<0&&(A=Math.PI*2+A),i&&x>A&&(x-=Math.PI*2),!i&&A>x&&(A-=Math.PI*2)}let $=A-x;if(Math.abs($)>p){const w=A,k=u,v=g;A=x+p*(i&&A>x?1:-1),u=S+f*Math.cos(A),g=j+y*Math.sin(A),M=fe(u,g,f,y,n,0,i,k,v,[A,w,S,j])}$=A-x;const T=Math.cos(x),N=Math.sin(x),_=Math.cos(A),J=Math.sin(A),z=Math.tan($/4),C=4/3*f*z,q=4/3*y*z,Q=[m,h],E=[m+C*N,h-q*T],B=[u+C*J,g-q*_],ee=[u,g];if(E[0]=2*Q[0]-E[0],E[1]=2*Q[1]-E[1],a)return[E[0],E[1],B[0],B[1],ee[0],ee[1]].concat(M);M=[E[0],E[1],B[0],B[1],ee[0],ee[1]].concat(M);const K=[];for(let w=0,k=M.length;w<k;w+=1)K[w]=w%2?re(M[w-1],M[w],b).y:re(M[w],M[w+1],b).x;return K},mt=(t,e,r,s,n,o)=>{const i=.3333333333333333,l=2/3;return[i*t+l*r,i*e+l*s,i*n+l*r,i*o+l*s,n,o]},Z=(t,e,r)=>{const[s,n]=t,[o,i]=e;return[s+(o-s)*r,n+(i-n)*r]},$e=(t,e,r,s)=>{const n=Z([t,e],[r,s],.3333333333333333),o=Z([t,e],[r,s],2/3);return[n[0],n[1],o[0],o[1],r,s]},ut=(t,e)=>{const[r]=t,s=t.slice(1).map(Number),[n,o]=s,{x1:i,y1:l,x:c,y:a}=e;return"TQ".includes(r)||(e.qx=null,e.qy=null),r==="M"?(e.x=n,e.y=o,t):r==="A"?["C"].concat(fe(i,l,s[0],s[1],s[2],s[3],s[4],s[5],s[6])):r==="Q"?(e.qx=n,e.qy=o,["C"].concat(mt(i,l,s[0],s[1],s[2],s[3]))):r==="L"?["C"].concat($e(i,l,n,o)):r==="Z"?["C"].concat($e(i,l,c,a)):t},ye=(t,e)=>{const[r]=t,s=r.toUpperCase(),n=r!==s,{x1:o,y1:i,x2:l,y2:c,x:a,y:m}=e,h=t.slice(1);let f=h.map((y,u)=>y+(n?u%2?m:a:0));if("TQ".includes(s)||(e.qx=null,e.qy=null),s==="A")return f=h.slice(0,-2).concat(h[5]+(n?a:0),h[6]+(n?m:0)),["A"].concat(f);if(s==="H")return["L",t[1]+(n?a:0),i];if(s==="V")return["L",o,t[1]+(n?m:0)];if(s==="L")return["L",t[1]+(n?a:0),t[2]+(n?m:0)];if(s==="M")return["M",t[1]+(n?a:0),t[2]+(n?m:0)];if(s==="C")return["C"].concat(f);if(s==="S"){const y=o*2-l,u=i*2-c;return e.x1=y,e.y1=u,["C",y,u].concat(f)}else if(s==="T"){const y=o*2-(e.qx?e.qx:0),u=i*2-(e.qy?e.qy:0);return e.qx=y,e.qy=u,["Q",y,u].concat(f)}else if(s==="Q"){const[y,u]=f;return e.qx=y,e.qy=u,["Q"].concat(f)}else if(s==="Z")return["Z"];return t},se={x1:0,y1:0,x2:0,y2:0,x:0,y:0,qx:null,qy:null},ge=t=>{const e={...se},r=V(t);return R(r,(s,n,o,i)=>{e.x=o,e.y=i;const l=ye(s,e);let c=ut(l,e);c[0]==="C"&&c.length>7&&(r.splice(n+1,0,["C"].concat(c.slice(7))),c=c.slice(0,7));const m=c.length;return e.x1=+c[m-2],e.y1=+c[m-1],e.x2=+c[m-4]||e.x1,e.y2=+c[m-3]||e.y1,c})},L=(t,e)=>{const r=e>=1?10**e:1;return e>0?Math.round(t*r)/r:Math.round(t)},ze=(t,e)=>{const r=t.length;let{round:s}=U,n=t[0],o="";s=e==="off"||typeof e=="number"&&e>=0?e:typeof s=="number"&&s>=0?s:"off";for(let i=0;i<r;i+=1){n=t[i];const[l]=n,c=n.slice(1);if(o+=l,s==="off")o+=c.join(" ");else{let a=0;const m=c.length;for(;a<m;)o+=L(c[a],s),a!==m-1&&(o+=" "),a+=1}}return o},de=(t,e)=>Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])),oe=(t,e,r,s)=>de([t,e],[r,s]),qe=(t,e,r,s,n)=>{let o={x:t,y:e};if(typeof n=="number"){const i=de([t,e],[r,s]);if(n<=0)o={x:t,y:e};else if(n>=i)o={x:r,y:s};else{const[l,c]=Z([t,e],[r,s],n/i);o={x:l,y:c}}}return o},ke=(t,e,r,s)=>{const{min:n,max:o}=Math;return[n(t,r),n(e,s),o(t,r),o(e,s)]},Qt=Object.freeze(Object.defineProperty({__proto__:null,getLineBBox:ke,getLineLength:oe,getPointAtLineLength:qe},Symbol.toStringTag,{value:"Module"})),Ie=(t,e,r)=>{const s=r/2,n=Math.sin(s),o=Math.cos(s),i=t**2*n**2,l=e**2*o**2,c=Math.sqrt(i+l)*r;return Math.abs(c)},G=(t,e,r,s,n,o)=>{const{sin:i,cos:l}=Math,c=l(n),a=i(n),m=r*l(o),h=s*i(o);return[t+c*m-a*h,e+a*m+c*h]},Ee=(t,e)=>{const{x:r,y:s}=t,{x:n,y:o}=e,i=r*n+s*o,l=Math.sqrt((r**2+s**2)*(n**2+o**2));return(r*o-s*n<0?-1:1)*Math.acos(i/l)},xe=(t,e,r,s,n,o,i,l,c)=>{const{abs:a,sin:m,cos:h,sqrt:f,PI:y}=Math;let u=a(r),g=a(s);const b=(n%360+360)%360*(y/180);if(t===l&&e===c)return{rx:u,ry:g,startAngle:0,endAngle:0,center:{x:l,y:c}};if(u===0||g===0)return{rx:u,ry:g,startAngle:0,endAngle:0,center:{x:(l+t)/2,y:(c+e)/2}};const M=(t-l)/2,d=(e-c)/2,x={x:h(b)*M+m(b)*d,y:-m(b)*M+h(b)*d},A=x.x**2/u**2+x.y**2/g**2;A>1&&(u*=f(A),g*=f(A));const S=u**2*g**2-u**2*x.y**2-g**2*x.x**2,j=u**2*x.y**2+g**2*x.x**2;let $=S/j;$=$<0?0:$;const T=(o!==i?1:-1)*f($),N={x:T*(u*x.y/g),y:T*(-(g*x.x)/u)},_={x:h(b)*N.x-m(b)*N.y+(t+l)/2,y:m(b)*N.x+h(b)*N.y+(e+c)/2},J={x:(x.x-N.x)/u,y:(x.y-N.y)/g},z=Ee({x:1,y:0},J),C={x:(-x.x-N.x)/u,y:(-x.y-N.y)/g};let q=Ee(J,C);!i&&q>0?q-=2*y:i&&q<0&&(q+=2*y),q%=2*y;const Q=z+q;return{center:_,startAngle:z,endAngle:Q,rx:u,ry:g}},Oe=(t,e,r,s,n,o,i,l,c)=>{const{rx:a,ry:m,startAngle:h,endAngle:f}=xe(t,e,r,s,n,o,i,l,c);return Ie(a,m,f-h)},ht=(t,e,r,s,n,o,i,l,c,a)=>{let m={x:t,y:e};const{center:h,rx:f,ry:y,startAngle:u,endAngle:g}=xe(t,e,r,s,n,o,i,l,c);if(typeof a=="number"){const p=Ie(f,y,g-u);if(a<=0)m={x:t,y:e};else if(a>=p)m={x:l,y:c};else{if(t===l&&e===c)return{x:l,y:c};if(f===0||y===0)return qe(t,e,l,c,a);const{PI:b,cos:M,sin:d}=Math,x=g-u,S=(n%360+360)%360*(b/180),j=u+x*(a/p),$=f*M(j),T=y*d(j);m={x:M(S)*$-d(S)*T+h.x,y:d(S)*$+M(S)*T+h.y}}}return m},ft=(t,e,r,s,n,o,i,l,c)=>{const{center:a,rx:m,ry:h,startAngle:f,endAngle:y}=xe(t,e,r,s,n,o,i,l,c),u=y-f,{min:g,max:p,tan:b,atan2:M,PI:d}=Math,{x,y:A}=a,S=n*d/180,j=b(S),$=M(-h*j,m),T=$,N=$+d,_=M(h,m*j),J=_+d,z=[l],C=[c];let q=g(t,l),Q=p(t,l),E=g(e,c),B=p(e,c);const ee=y-u*1e-5,K=G(x,A,m,h,S,ee),w=y-u*.99999,k=G(x,A,m,h,S,w);if(K[0]>Q||k[0]>Q){const v=G(x,A,m,h,S,T);z.push(v[0]),C.push(v[1])}if(K[0]<q||k[0]<q){const v=G(x,A,m,h,S,N);z.push(v[0]),C.push(v[1])}if(K[1]<E||k[1]<E){const v=G(x,A,m,h,S,J);z.push(v[0]),C.push(v[1])}if(K[1]>B||k[1]>B){const v=G(x,A,m,h,S,_);z.push(v[0]),C.push(v[1])}return q=g.apply([],z),E=g.apply([],C),Q=p.apply([],z),B=p.apply([],C),[q,E,Q,B]},Zt=Object.freeze(Object.defineProperty({__proto__:null,angleBetween:Ee,arcLength:Ie,arcPoint:G,getArcBBox:ft,getArcLength:Oe,getArcProps:xe,getPointAtArcLength:ht},Symbol.toStringTag,{value:"Module"})),Ve=[-.06405689286260563,.06405689286260563,-.1911188674736163,.1911188674736163,-.3150426796961634,.3150426796961634,-.4337935076260451,.4337935076260451,-.5454214713888396,.5454214713888396,-.6480936519369755,.6480936519369755,-.7401241915785544,.7401241915785544,-.820001985973903,.820001985973903,-.8864155270044011,.8864155270044011,-.9382745520027328,.9382745520027328,-.9747285559713095,.9747285559713095,-.9951872199970213,.9951872199970213],yt=[.12793819534675216,.12793819534675216,.1258374563468283,.1258374563468283,.12167047292780339,.12167047292780339,.1155056680537256,.1155056680537256,.10744427011596563,.10744427011596563,.09761865210411388,.09761865210411388,.08619016153195327,.08619016153195327,.0733464814110803,.0733464814110803,.05929858491543678,.05929858491543678,.04427743881741981,.04427743881741981,.028531388628933663,.028531388628933663,.0123412297999872,.0123412297999872],gt=t=>{const e=[];for(let r=t,s=r.length,n=s-1;s>1;s-=1,n-=1){const o=[];for(let i=0;i<n;i+=1)o.push({x:n*(r[i+1].x-r[i].x),y:n*(r[i+1].y-r[i].y),t:0});e.push(o),r=o}return e},dt=(t,e)=>{if(e===0)return t[0].t=0,t[0];const r=t.length-1;if(e===1)return t[r].t=1,t[r];const s=1-e;let n=t;if(r===0)return t[0].t=e,t[0];if(r===1)return{x:s*n[0].x+e*n[1].x,y:s*n[0].y+e*n[1].y,t:e};const o=s*s,i=e*e;let l=0,c=0,a=0,m=0;return r===2?(n=[n[0],n[1],n[2],{x:0,y:0}],l=o,c=s*e*2,a=i):r===3&&(l=o*s,c=o*e*3,a=s*i*3,m=e*i),{x:l*n[0].x+c*n[1].x+a*n[2].x+m*n[3].x,y:l*n[0].y+c*n[1].y+a*n[2].y+m*n[3].y,t:e}},xt=(t,e)=>{const r=t(e),s=r.x*r.x+r.y*r.y;return Math.sqrt(s)},pt=t=>{const r=Ve.length;let s=0;for(let n=0,o;n<r;n++)o=.5*Ve[n]+.5,s+=yt[n]*xt(t,o);return .5*s},ie=t=>{const e=[];for(let s=0,n=t.length,o=2;s<n;s+=o)e.push({x:t[s],y:t[s+1]});const r=gt(e);return pt(s=>dt(r[0],s))},bt=1e-8,pe=([t,e,r])=>{const s=Math.min(t,r),n=Math.max(t,r);if(e>=t?r>=e:r<=e)return[s,n];const o=(t*r-e*e)/(t-2*e+r);return o<s?[o,n]:[s,o]},Re=([t,e,r,s])=>{const n=t-3*e+3*r-s;if(Math.abs(n)<bt)return t===s&&t===e?[t,s]:pe([t,-.5*t+1.5*e,t-3*e+3*r]);const o=-t*r+t*s-e*r-e*s+e*e+r*r;if(o<=0)return[Math.min(t,s),Math.max(t,s)];const i=Math.sqrt(o);let l=Math.min(t,s),c=Math.max(t,s);const a=t-2*e+r;for(let m=(a+i)/n,h=1;h<=2;m=(a-i)/n,h++)if(m>0&&m<1){const f=t*(1-m)*(1-m)*(1-m)+e*3*(1-m)*(1-m)*m+r*3*(1-m)*m*m+s*m*m*m;f<l&&(l=f),f>c&&(c=f)}return[l,c]},Dt=Object.freeze(Object.defineProperty({__proto__:null,CBEZIER_MINMAX_EPSILON:bt,Cvalues:yt,Tvalues:Ve,bezierLength:pt,calculateBezier:xt,computeBezier:dt,deriveBezier:gt,getBezierLength:ie,minmaxC:Re,minmaxQ:pe},Symbol.toStringTag,{value:"Module"})),Mt=([t,e,r,s,n,o,i,l],c)=>{const a=1-c;return{x:a**3*t+3*a**2*c*r+3*a*c**2*n+c**3*i,y:a**3*e+3*a**2*c*s+3*a*c**2*o+c**3*l}},be=(t,e,r,s,n,o,i,l)=>ie([t,e,r,s,n,o,i,l]),At=(t,e,r,s,n,o,i,l,c)=>{const a=typeof c=="number";let m={x:t,y:e};if(a){const h=ie([t,e,r,s,n,o,i,l]);c<=0||(c>=h?m={x:i,y:l}:m=Mt([t,e,r,s,n,o,i,l],c/h))}return m},_e=(t,e,r,s,n,o,i,l)=>{const c=Re([t,r,n,i]),a=Re([e,s,o,l]);return[c[0],a[0],c[1],a[1]]},Bt=Object.freeze(Object.defineProperty({__proto__:null,getCubicBBox:_e,getCubicLength:be,getPointAtCubicLength:At,getPointAtCubicSegmentLength:Mt},Symbol.toStringTag,{value:"Module"})),Ct=([t,e,r,s,n,o],i)=>{const l=1-i;return{x:l**2*t+2*l*i*r+i**2*n,y:l**2*e+2*l*i*s+i**2*o}},Me=(t,e,r,s,n,o)=>ie([t,e,r,s,n,o]),St=(t,e,r,s,n,o,i)=>{const l=typeof i=="number";let c={x:t,y:e};if(l){const a=ie([t,e,r,s,n,o]);i<=0||(i>=a?c={x:n,y:o}:c=Ct([t,e,r,s,n,o],i/a))}return c},Qe=(t,e,r,s,n,o)=>{const i=pe([t,r,n]),l=pe([e,s,o]);return[i[0],l[0],i[1],l[1]]},Ht=Object.freeze(Object.defineProperty({__proto__:null,getPointAtQuadLength:St,getPointAtQuadSegmentLength:Ct,getQuadBBox:Qe,getQuadLength:Me},Symbol.toStringTag,{value:"Module"})),Ft=Object.freeze(Object.defineProperty({__proto__:null,polygonArea:t=>{const e=t.length;let r=-1,s,n=t[e-1],o=0;for(;++r<e;)s=n,n=t[r],o+=s[1]*n[0]-s[0]*n[1];return o/2},polygonLength:t=>t.reduce((e,r,s)=>s?e+de(t[s-1],r):0,0)},Symbol.toStringTag,{value:"Module"})),Ae=1e-5,ce=t=>{const e=V(t),r={...se};return R(e,(s,n,o,i)=>{r.x=o,r.y=i;const l=ye(s,r),c=l.length;return r.x1=+l[c-2],r.y1=+l[c-1],r.x2=+l[c-4]||r.x1,r.y2=+l[c-3]||r.y1,l})},le=(t,e)=>{const r=ce(t);let s=!1,n=[],o="M",i=0,l=0,[c,a]=r[0].slice(1);const m=typeof e=="number";let h={x:c,y:a},f=0,y=h,u=0;return!m||e<Ae?h:(R(r,(g,p,b,M)=>{if([o]=g,s=o==="M",n=s?n:[b,M].concat(g.slice(1)),s?([,c,a]=g,h={x:c,y:a},f=0):o==="L"?(h=qe(n[0],n[1],n[2],n[3],e-u),f=oe(n[0],n[1],n[2],n[3])):o==="A"?(h=ht(n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8],e-u),f=Oe(n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],n[8])):o==="C"?(h=At(n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7],e-u),f=be(n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7])):o==="Q"?(h=St(n[0],n[1],n[2],n[3],n[4],n[5],e-u),f=Me(n[0],n[1],n[2],n[3],n[4],n[5])):o==="Z"&&(n=[b,M,c,a],h={x:c,y:a},f=oe(n[0],n[1],n[2],n[3])),[i,l]=n.slice(-2),u<e)y=h;else return!1;u+=f}),e>u-Ae?{x:i,y:l}:y)},Y=t=>{const e=V(t);let r=0,s=0,n=0,o=0,i=0,l=0,c="M",a=0,m=0,h=0;return R(e,(f,y,u,g)=>{[c]=f;const p=c.toUpperCase(),M=p!==c?ne(f,y,u,g):f.slice(0),d=p==="V"?["L",u,M[1]]:p==="H"?["L",M[1],g]:M;if([c]=d,"TQ".includes(p)||(i=0,l=0),c==="M")[,a,m]=d;else if(c==="L")h+=oe(u,g,d[1],d[2]);else if(c==="A")h+=Oe(u,g,d[1],d[2],d[3],d[4],d[5],d[6],d[7]);else if(c==="S"){const x=r*2-n,A=s*2-o;h+=be(u,g,x,A,d[1],d[2],d[3],d[4])}else c==="C"?h+=be(u,g,d[1],d[2],d[3],d[4],d[5],d[6]):c==="T"?(i=r*2-i,l=s*2-l,h+=Me(u,g,i,l,d[1],d[2])):c==="Q"?(i=d[1],l=d[2],h+=Me(u,g,d[1],d[2],d[3],d[4])):c==="Z"&&(h+=oe(u,g,a,m));[r,s]=c==="Z"?[a,m]:d.slice(-2),[n,o]=c==="C"?[d[3],d[4]]:c==="S"?[d[1],d[2]]:[r,s]}),h},Ze=(t,e)=>{const r=V(t);let s=r.slice(0),n=Y(s),o=s.length-1,i=0,l=0,c=r[0];if(o<=0||!e||!Number.isFinite(e))return{segment:c,index:0,length:l,lengthAtSegment:i};if(e>=n)return s=r.slice(0,-1),i=Y(s),l=n-i,c=r[o],{segment:c,index:o,length:l,lengthAtSegment:i};const a=[];for(;o>0;)c=s[o],s=s.slice(0,-1),i=Y(s),l=n-i,n=i,a.push({segment:c,index:o,length:l,lengthAtSegment:i}),o-=1;return a.find(({lengthAtSegment:m})=>m<=e)},Ce=(t,e)=>{const r=V(t),s=ce(r),n=Y(s),o=x=>{const A=x.x-e.x,S=x.y-e.y;return A*A+S*S};let i=8,l,c={x:0,y:0},a=0,m=0,h=1/0;for(let x=0;x<=n;x+=i)l=le(s,x),a=o(l),a<h&&(c=l,m=x,h=a);i/=2;let f,y,u=0,g=0,p=0,b=0;for(;i>1e-6&&(u=m-i,f=le(s,u),p=o(f),g=m+i,y=le(s,g),b=o(y),u>=0&&p<h?(c=f,m=u,h=p):g<=n&&b<h?(c=y,m=g,h=b):i/=2,!(i<1e-5)););const M=Ze(r,m),d=Math.sqrt(h);return{closest:c,distance:d,segment:M}},Ut=(t,e)=>Ce(t,e).closest,Gt=(t,e,r,s,n,o,i,l)=>3*((l-e)*(r+n)-(i-t)*(s+o)+s*(t-n)-r*(e-o)+l*(n+t/3)-i*(o+e/3))/20,Pt=t=>{let e=0,r=0,s=0;return ge(t).map(n=>{switch(n[0]){case"M":return[,e,r]=n,0;default:return s=Gt(e,r,n[1],n[2],n[3],n[4],n[5],n[6]),[e,r]=n.slice(-2),s}}).reduce((n,o)=>n+o,0)},Jt=t=>Pt(ge(t))>=0,Nt=t=>{if(!t)return{x:0,y:0,width:0,height:0,x2:0,y2:0,cx:0,cy:0,cz:0};const e=V(t);let r="M",s=0,n=0;const{max:o,min:i}=Math;let l=1/0,c=1/0,a=-1/0,m=-1/0,h=0,f=0,y=0,u=0,g=0,p=0,b=0,M=0,d=0,x=0;R(e,(j,$,T,N)=>{[r]=j;const _=r.toUpperCase(),z=_!==r?ne(j,$,T,N):j.slice(0),C=_==="V"?["L",T,z[1]]:_==="H"?["L",z[1],N]:z;if([r]=C,"TQ".includes(_)||(d=0,x=0),r==="M")[,s,n]=C,h=s,f=n,y=s,u=n;else if(r==="L")[h,f,y,u]=ke(T,N,C[1],C[2]);else if(r==="A")[h,f,y,u]=ft(T,N,C[1],C[2],C[3],C[4],C[5],C[6],C[7]);else if(r==="S"){const q=g*2-b,Q=p*2-M;[h,f,y,u]=_e(T,N,q,Q,C[1],C[2],C[3],C[4])}else r==="C"?[h,f,y,u]=_e(T,N,C[1],C[2],C[3],C[4],C[5],C[6]):r==="T"?(d=g*2-d,x=p*2-x,[h,f,y,u]=Qe(T,N,d,x,C[1],C[2])):r==="Q"?(d=C[1],x=C[2],[h,f,y,u]=Qe(T,N,C[1],C[2],C[3],C[4])):r==="Z"&&([h,f,y,u]=ke(T,N,s,n));l=i(h,l),c=i(f,c),a=o(y,a),m=o(u,m),[g,p]=r==="Z"?[s,n]:C.slice(-2),[b,M]=r==="C"?[C[3],C[4]]:r==="S"?[C[1],C[2]]:[g,p]});const A=a-l,S=m-c;return{width:A,height:S,x:l,y:c,x2:a,y2:m,cx:l+A/2,cy:c+S/2,cz:Math.max(A,S)+Math.min(A,S)/2}},Kt=(t,e)=>Ze(t,e).segment,Wt=(t,e)=>Ce(t,e).segment,Se=t=>Array.isArray(t)&&t.every(e=>{const r=e[0].toLowerCase();return W[r]===e.length-1&&"achlmqstvz".includes(r)&&e.slice(1).every(Number.isFinite)})&&t.length>0,wt=t=>Se(t)&&t.every(([e])=>e===e.toUpperCase()),Lt=t=>wt(t)&&t.every(([e])=>"ACLMQZ".includes(e)),Xt=t=>Lt(t)&&t.every(([e])=>"MC".includes(e)),Yt=(t,e)=>{const{distance:r}=Ce(t,e);return Math.abs(r)<Ae},en=t=>Se(t)&&t.slice(1).every(([e])=>e===e.toLowerCase()),Tt=t=>{if(typeof t!="string"||!t.length)return!1;const e=new ve(t);for(X(e);e.index<e.max&&!e.err.length;)Te(e);return!e.err.length&&"mM".includes(e.segments[0][0])},ae={line:["x1","y1","x2","y2"],circle:["cx","cy","r"],ellipse:["cx","cy","rx","ry"],rect:["width","height","x","y","rx","ry"],polygon:["points"],polyline:["points"],glyph:["d"]},vt=t=>t!=null&&typeof t=="object"&&t.nodeType===1,tn=t=>{let{x1:e,y1:r,x2:s,y2:n}=t;return[e,r,s,n]=[e,r,s,n].map(o=>+o),[["M",e,r],["L",s,n]]},nn=t=>{const e=[],r=(t.points||"").trim().split(/[\s|,]/).map(n=>+n);let s=0;for(;s<r.length;)e.push([s?"L":"M",r[s],r[s+1]]),s+=2;return t.type==="polygon"?[...e,["z"]]:e},rn=t=>{let{cx:e,cy:r,r:s}=t;return[e,r,s]=[e,r,s].map(n=>+n),[["M",e-s,r],["a",s,s,0,1,0,2*s,0],["a",s,s,0,1,0,-2*s,0]]},sn=t=>{let{cx:e,cy:r}=t,s=t.rx||0,n=t.ry||s;return[e,r,s,n]=[e,r,s,n].map(o=>+o),[["M",e-s,r],["a",s,n,0,1,0,2*s,0],["a",s,n,0,1,0,-2*s,0]]},on=t=>{const e=+t.x||0,r=+t.y||0,s=+t.width,n=+t.height;let o=+(t.rx||0),i=+(t.ry||o);return o||i?(o*2>s&&(o-=(o*2-s)/2),i*2>n&&(i-=(i*2-n)/2),[["M",e+o,r],["h",s-o*2],["s",o,0,o,i],["v",n-i*2],["s",0,i,-o,i],["h",-s+o*2],["s",-o,0,-o,-i],["v",-n+i*2],["s",0,-i,o,-i]]):[["M",e,r],["h",s],["v",n],["H",e],["Z"]]},jt=t=>{const e=Object.keys(ae),r=vt(t),s=r?t.tagName:null;if(s&&[...e,"path"].every(c=>s!==c))throw TypeError(`${O}: "${s}" is not SVGElement`);const n=r?s:t.type,o=ae[n],i={type:n};r?o.forEach(c=>{i[c]=t.getAttribute(c)}):Object.assign(i,t);let l=[];return n==="circle"?l=rn(i):n==="ellipse"?l=sn(i):["polyline","polygon"].includes(n)?l=nn(i):n==="rect"?l=on(i):n==="line"?l=tn(i):["glyph","path"].includes(n)&&(l=V(r?t.getAttribute("d")||"":t.d||"")),Se(l)&&l.length?l:!1},cn=(t,e,r)=>{const s=r||document,n=Object.keys(ae),o=vt(t),i=o?t.tagName:null;if(i==="path")throw TypeError(`${O}: "${i}" is already SVGPathElement`);if(i&&n.every(u=>i!==u))throw TypeError(`${O}: "${i}" is not SVGElement`);const l=s.createElementNS("http://www.w3.org/2000/svg","path"),c=o?i:t.type,a=ae[c],m={type:c},h=U.round,f=jt(t),y=f&&f.length?ze(f,h):"";return o?(a.forEach(u=>{m[u]=t.getAttribute(u)}),Object.values(t.attributes).forEach(({name:u,value:g})=>{a.includes(u)||l.setAttribute(u,g)})):(Object.assign(m,t),Object.keys(m).forEach(u=>{!a.includes(u)&&u!=="type"&&l.setAttribute(u.replace(/[A-Z]/g,g=>`-${g.toLowerCase()}`),m[u])})),Tt(y)?(l.setAttribute("d",y),e&&o&&(t.before(l,t),t.remove()),l):!1},$t=t=>{let e=new P;const{origin:r}=t,[s,n]=r,{translate:o}=t,{rotate:i}=t,{skew:l}=t,{scale:c}=t;return Array.isArray(o)&&o.length>=2&&o.every(a=>!Number.isNaN(+a))&&o.some(a=>a!==0)?e=e.translate(...o):typeof o=="number"&&!Number.isNaN(o)&&(e=e.translate(o)),(i||l||c)&&(e=e.translate(s,n),Array.isArray(i)&&i.length>=2&&i.every(a=>!Number.isNaN(+a))&&i.some(a=>a!==0)?e=e.rotate(...i):typeof i=="number"&&!Number.isNaN(i)&&(e=e.rotate(i)),Array.isArray(l)&&l.length===2&&l.every(a=>!Number.isNaN(+a))&&l.some(a=>a!==0)?(e=l[0]?e.skewX(l[0]):e,e=l[1]?e.skewY(l[1]):e):typeof l=="number"&&!Number.isNaN(l)&&(e=e.skewX(l)),Array.isArray(c)&&c.length>=2&&c.every(a=>!Number.isNaN(+a))&&c.some(a=>a!==1)?e=e.scale(...c):typeof c=="number"&&!Number.isNaN(c)&&(e=e.scale(c)),e=e.translate(-s,-n)),e},zt=(t,e,r,s)=>{const[n]=t,{round:o}=U,i=o,l=e.slice(1),{x1:c,y1:a,x2:m,y2:h,x:f,y}=r,[u,g]=l.slice(-2),p=t;if("TQ".includes(n)||(r.qx=null,r.qy=null),n==="L"){if(L(f,i)===L(u,i))return["V",g];if(L(y,i)===L(g,i))return["H",u]}else if(n==="C"){const[b,M]=l;if(r.x1=b,r.y1=M,"CS".includes(s)&&(L(b,i)===L(c*2-m,i)&&L(M,i)===L(a*2-h,i)||L(c,i)===L(m*2-f,i)&&L(a,i)===L(h*2-y,i)))return["S",l[2],l[3],l[4],l[5]]}else if(n==="Q"){const[b,M]=l;if(r.qx=b,r.qy=M,"QT".includes(s)&&L(b,i)===L(c*2-m,i)&&L(M,i)===L(a*2-h,i))return["T",l[2],l[3]]}return p},Pe=(t,e)=>{const r=t.slice(1).map(s=>L(s,e));return[t[0]].concat(r)},qt=(t,e)=>{const r=he(t),s=typeof e=="number"&&e>=0?e:2,n={...se},o=[];let i="M",l="Z";return R(r,(c,a,m,h)=>{n.x=m,n.y=h;const f=ye(c,n);let y=c;if([i]=c,o[a]=i,a){l=o[a-1];const g=zt(c,f,n,l),p=Pe(g,s),b=p.join(""),M=je(g,a,m,h),d=Pe(M,s),x=d.join("");y=b.length<x.length?p:d}const u=f.length;return n.x1=+f[u-2],n.y1=+f[u-1],n.x2=+f[u-4]||n.x1,n.y2=+f[u-3]||n.y1,y})},ln=(t,e)=>{let r=P.Translate(e[0],e[1],e[2]);return[,,,r.m44]=e,r=t.multiply(r),[r.m41,r.m42,r.m43,r.m44]},De=(t,e,r)=>{const[s,n,o]=r,[i,l,c]=ln(t,[e[0],e[1],0,1]),a=i-s,m=l-n,h=c-o;return[a*(Math.abs(o)/Math.abs(h)||1)+s,m*(Math.abs(o)/Math.abs(h)||1)+n]},an=t=>{const e=t.slice(1).map((r,s,n)=>s?n[s-1].slice(-2).concat(r.slice(1)):t[0].slice(1).concat(r.slice(1))).map(r=>r.map((s,n)=>r[r.length-n-2*(1-n%2)])).reverse();return[["M"].concat(e[0].slice(0,2))].concat(e.map(r=>["C"].concat(r.slice(2))))},Ne=t=>{const e=he(t),r=ce(e),s=e.length,n=e[s-1][0]==="Z",o=R(e,(i,l)=>{const c=r[l],a=l&&e[l-1],m=a&&a[0],h=e[l+1],f=h&&h[0],[y]=i,[u,g]=r[l?l-1:s-1].slice(-2);let p=i;switch(y){case"M":p=n?["Z"]:[y,u,g];break;case"A":p=[y,i[1],i[2],i[3],i[4],i[5]===1?0:1,u,g];break;case"C":h&&f==="S"?p=["S",i[1],i[2],u,g]:p=[y,i[3],i[4],i[1],i[2],u,g];break;case"S":m&&"CS".includes(m)&&(!h||f!=="S")?p=["C",c[3],c[4],c[1],c[2],u,g]:p=[y,c[1],c[2],u,g];break;case"Q":h&&f==="T"?p=["T",u,g]:p=[y,i[1],i[2],u,g];break;case"T":m&&"QT".includes(m)&&(!h||f!=="T")?p=["Q",c[1],c[2],u,g]:p=[y,u,g];break;case"Z":p=["M",u,g];break;case"H":p=[y,u];break;case"V":p=[y,g];break;default:p=[y].concat(i.slice(1,-2),u,g)}return p});return n?o.reverse():[o[0]].concat(o.slice(1).reverse())},mn=(t,e)=>{let{round:r}=U;return r=e==="off"||typeof e=="number"&&e>=0?e:typeof r=="number"&&r>=0?r:"off",r==="off"?t.slice(0):R(t,s=>Pe(s,r))},un=(t,e=.5)=>{const r=e,s=t.slice(0,2),n=t.slice(2,4),o=t.slice(4,6),i=t.slice(6,8),l=Z(s,n,r),c=Z(n,o,r),a=Z(o,i,r),m=Z(l,c,r),h=Z(c,a,r),f=Z(m,h,r);return[["C",l[0],l[1],m[0],m[1],f[0],f[1]],["C",h[0],h[1],a[0],a[1],i[0],i[1]]]},kt=t=>{const e=[];let r,s=-1,n=0,o=0,i=0,l=0;const c={...se};return t.forEach(a=>{const[m]=a,h=m.toUpperCase(),f=m.toLowerCase(),y=m===f,u=a.slice(1);h==="M"?(s+=1,[n,o]=u,n+=y?c.x:0,o+=y?c.y:0,i=n,l=o,r=[y?[h,i,l]:a]):(h==="Z"?(n=i,o=l):h==="H"?([,n]=a,n+=y?c.x:0):h==="V"?([,o]=a,o+=y?c.y:0):([n,o]=a.slice(-2),n+=y?c.x:0,o+=y?c.y:0),r.push(a)),c.x=n,c.y=o,e[s]=r}),e},It=(t,e)=>{let r=0,s=0,n=0,o=0,i=0,l=0,c="M";const a=V(t),m=e&&Object.keys(e);if(!e||m&&!m.length)return a.slice(0);e.origin||Object.assign(e,{origin:U.origin});const h=e.origin,f=$t(e);return f.isIdentity?a.slice(0):R(a,(y,u,g,p)=>{[c]=y;const b=c.toUpperCase(),d=b!==c?ne(y,u,g,p):y.slice(0);let x=b==="A"?["C"].concat(fe(g,p,d[1],d[2],d[3],d[4],d[5],d[6],d[7])):b==="V"?["L",g,d[1]]:b==="H"?["L",d[1],p]:d;c=x[0];const A=c==="C"&&x.length>7,S=A?x.slice(0,7):x.slice(0);if(A&&(a.splice(u+1,0,["C"].concat(x.slice(7))),x=S),c==="L")[n,o]=De(f,[x[1],x[2]],h),r!==n&&s!==o?x=["L",n,o]:s===o?x=["H",n]:r===n&&(x=["V",o]);else for(i=1,l=x.length;i<l;i+=2)[n,o]=De(f,[+x[i],+x[i+1]],h),x[i]=n,x[i+1]=o;return r=n,s=o,x})};class hn{constructor(e,r){const s=r||{},n=typeof e>"u";if(n||!e.length)throw TypeError(`${O}: "pathValue" is ${n?"undefined":"empty"}`);this.segments=V(e);const{round:o,origin:i}=s;let l;Number.isInteger(o)||o==="off"?l=o:l=U.round;let c=U.origin;if(Array.isArray(i)&&i.length>=2){const[a,m,h]=i.map(Number);c=[Number.isNaN(a)?0:a,Number.isNaN(m)?0:m,Number.isNaN(h)?0:h]}return this.round=l,this.origin=c,this}get bbox(){return Nt(this.segments)}get length(){return Y(this.segments)}getBBox(){return this.bbox}getTotalLength(){return this.length}getPointAtLength(e){return le(this.segments,e)}toAbsolute(){const{segments:e}=this;return this.segments=he(e),this}toRelative(){const{segments:e}=this;return this.segments=at(e),this}toCurve(){const{segments:e}=this;return this.segments=ge(e),this}reverse(e){const{segments:r}=this,s=kt(r),n=s.length>1?s:!1,o=n?n.map((l,c)=>e?c?Ne(l):l.slice(0):Ne(l)):r.slice(0);let i=[];return n?i=o.flat(1):i=e?r:Ne(r),this.segments=i.slice(0),this}normalize(){const{segments:e}=this;return this.segments=ce(e),this}optimize(){const{segments:e}=this,r=this.round==="off"?2:this.round;return this.segments=qt(e,r),this}transform(e){if(!e||typeof e!="object"||typeof e=="object"&&!["translate","rotate","skew","scale"].some(c=>c in e))return this;const{segments:r,origin:[s,n,o]}=this,i={};for(const[c,a]of Object.entries(e))c==="skew"&&Array.isArray(a)||(c==="rotate"||c==="translate"||c==="origin"||c==="scale")&&Array.isArray(a)?i[c]=a.map(Number):c!=="origin"&&typeof Number(a)=="number"&&(i[c]=Number(a));const{origin:l}=i;if(Array.isArray(l)&&l.length>=2){const[c,a,m]=l.map(Number);i.origin=[Number.isNaN(c)?s:c,Number.isNaN(a)?n:a,m||o]}else i.origin=[s,n,o];return this.segments=It(r,i),this}flipX(){const{cx:e,cy:r}=this.bbox;return this.transform({rotate:[0,180,0],origin:[e,r,0]}),this}flipY(){const{cx:e,cy:r}=this.bbox;return this.transform({rotate:[180,0,0],origin:[e,r,0]}),this}toString(){return ze(this.segments,this.round)}dispose(){Object.keys(this).forEach(e=>delete this[e])}}const Et={absolutizeSegment:ne,arcToCubic:fe,arcTools:Zt,bezierTools:Dt,CSSMatrix:P,cubicTools:Bt,distanceEpsilon:Ae,distanceSquareRoot:de,finalizeSegment:Le,getClosestPoint:Ut,getDrawDirection:Jt,getPathArea:Pt,getPathBBox:Nt,getPointAtLength:le,getPropertiesAtLength:Ze,getPropertiesAtPoint:Ce,getSegmentAtLength:Kt,getSegmentOfPoint:Wt,getSVGMatrix:$t,getTotalLength:Y,invalidPathValue:F,isAbsoluteArray:wt,isArcCommand:ct,isCurveArray:Xt,isDigit:H,isDigitStart:it,isMoveCommand:lt,isNormalizedArray:Lt,isPathArray:Se,isPathCommand:ot,isPointInStroke:Yt,isRelativeArray:en,isSpace:st,isValidPath:Tt,iterate:R,lineToCubic:$e,lineTools:Qt,midPoint:Z,normalizePath:ce,normalizeSegment:ye,optimizePath:qt,paramsCount:W,paramsParser:se,parsePathString:V,pathParser:ve,pathToAbsolute:he,pathToCurve:ge,pathToRelative:at,pathToString:ze,polygonTools:Ft,projection2d:De,quadToCubic:mt,quadTools:Ht,relativizeSegment:je,reverseCurve:an,reversePath:Ne,rotateVector:re,roundPath:mn,roundSegment:Pe,roundTo:L,scanFlag:nt,scanParam:rt,scanSegment:Te,segmentToCubic:ut,shapeParams:ae,shapeToPath:cn,shapeToPathArray:jt,shortenSegment:zt,skipSpaces:X,splitCubic:un,splitPath:kt,transformPath:It},fn=Object.assign(hn,Et);return me.default=fn,me.index=Et,Object.defineProperties(me,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),me}({});
//# sourceMappingURL=svg-path-commander.js.map
