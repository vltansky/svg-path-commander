'use strict';var jr=require('@thednp/dommatrix');function _interopDefault(e){return e&&e.__esModule?e:{default:e}}var jr__default=/*#__PURE__*/_interopDefault(jr);var At=Object.defineProperty;var ie=(e,t)=>{for(var n in t)At(e,n,{get:t[n],enumerable:true});};var it={};ie(it,{angleBetween:()=>De,arcLength:()=>Ee,arcPoint:()=>Y,getArcBBox:()=>$e,getArcLength:()=>ge,getArcProps:()=>Le,getPointAtArcLength:()=>Ie});var mt={};ie(mt,{getLineBBox:()=>Me,getLineLength:()=>X,getPointAtLineLength:()=>he});var Ct=(e,t,n)=>{let[o,r]=e,[a,s]=t;return [o+(a-o)*n,r+(s-r)*n]},I=Ct;var Tt=(e,t)=>Math.sqrt((e[0]-t[0])*(e[0]-t[0])+(e[1]-t[1])*(e[1]-t[1])),ue=Tt;var X=(e,t,n,o)=>ue([e,t],[n,o]),he=(e,t,n,o,r)=>{let a={x:e,y:t};if(typeof r=="number"){let s=ue([e,t],[n,o]);if(r<=0)a={x:e,y:t};else if(r>=s)a={x:n,y:o};else {let[i,m]=I([e,t],[n,o],r/s);a={x:i,y:m};}}return a},Me=(e,t,n,o)=>{let{min:r,max:a}=Math;return [r(e,n),r(t,o),a(e,n),a(t,o)]};var Ee=(e,t,n)=>{let o=n/2,r=Math.sin(o),a=Math.cos(o),s=e**2*r**2,i=t**2*a**2,m=Math.sqrt(s+i)*n;return Math.abs(m)},Y=(e,t,n,o,r,a)=>{let{sin:s,cos:i}=Math,m=i(r),u=s(r),l=n*i(a),c=o*s(a);return [e+m*l-u*c,t+u*l+m*c]},De=(e,t)=>{let{x:n,y:o}=e,{x:r,y:a}=t,s=n*r+o*a,i=Math.sqrt((n**2+o**2)*(r**2+a**2));return (n*a-o*r<0?-1:1)*Math.acos(s/i)},Le=(e,t,n,o,r,a,s,i,m)=>{let{abs:u,sin:l,cos:c,sqrt:f,PI:b}=Math,p=u(n),h=u(o),S=(r%360+360)%360*(b/180);if(e===i&&t===m)return {rx:p,ry:h,startAngle:0,endAngle:0,center:{x:i,y:m}};if(p===0||h===0)return {rx:p,ry:h,startAngle:0,endAngle:0,center:{x:(i+e)/2,y:(m+t)/2}};let A=(e-i)/2,d=(t-m)/2,g={x:c(S)*A+l(S)*d,y:-l(S)*A+c(S)*d},x=g.x**2/p**2+g.y**2/h**2;x>1&&(p*=f(x),h*=f(x));let C=p**2*h**2-p**2*g.y**2-h**2*g.x**2,V=p**2*g.y**2+h**2*g.x**2,Q=C/V;Q=Q<0?0:Q;let w=(a!==s?1:-1)*f(Q),M={x:w*(p*g.y/h),y:w*(-(h*g.x)/p)},$={x:c(S)*M.x-l(S)*M.y+(e+i)/2,y:l(S)*M.x+c(S)*M.y+(t+m)/2},J={x:(g.x-M.x)/p,y:(g.y-M.y)/h},k=De({x:1,y:0},J),P={x:(-g.x-M.x)/p,y:(-g.y-M.y)/h},z=De(J,P);!s&&z>0?z-=2*b:s&&z<0&&(z+=2*b),z%=2*b;let B=k+z;return {center:$,startAngle:k,endAngle:B,rx:p,ry:h}},ge=(e,t,n,o,r,a,s,i,m)=>{let{rx:u,ry:l,startAngle:c,endAngle:f}=Le(e,t,n,o,r,a,s,i,m);return Ee(u,l,f-c)},Ie=(e,t,n,o,r,a,s,i,m,u)=>{let l={x:e,y:t},{center:c,rx:f,ry:b,startAngle:p,endAngle:h}=Le(e,t,n,o,r,a,s,i,m);if(typeof u=="number"){let y=Ee(f,b,h-p);if(u<=0)l={x:e,y:t};else if(u>=y)l={x:i,y:m};else {if(e===i&&t===m)return {x:i,y:m};if(f===0||b===0)return he(e,t,i,m,u);let{PI:S,cos:A,sin:d}=Math,g=h-p,C=(r%360+360)%360*(S/180),V=p+g*(u/y),Q=f*A(V),w=b*d(V);l={x:A(C)*Q-d(C)*w+c.x,y:d(C)*Q+A(C)*w+c.y};}}return l},$e=(e,t,n,o,r,a,s,i,m)=>{let{center:u,rx:l,ry:c,startAngle:f,endAngle:b}=Le(e,t,n,o,r,a,s,i,m),p=b-f,{min:h,max:y,tan:S,atan2:A,PI:d}=Math,{x:g,y:x}=u,C=r*d/180,V=S(C),Q=A(-c*V,l),w=Q,M=Q+d,$=A(c,l*V),J=$+d,k=[i],P=[m],z=h(e,i),B=y(e,i),E=h(t,m),Z=y(t,m),me=b-p*1e-5,W=Y(g,x,l,c,C,me),N=b-p*.99999,q=Y(g,x,l,c,C,N);if(W[0]>B||q[0]>B){let R=Y(g,x,l,c,C,w);k.push(R[0]),P.push(R[1]);}if(W[0]<z||q[0]<z){let R=Y(g,x,l,c,C,M);k.push(R[0]),P.push(R[1]);}if(W[1]<E||q[1]<E){let R=Y(g,x,l,c,C,J);k.push(R[0]),P.push(R[1]);}if(W[1]>Z||q[1]>Z){let R=Y(g,x,l,c,C,$);k.push(R[0]),P.push(R[1]);}return z=h.apply([],k),E=h.apply([],P),B=y.apply([],k),Z=y.apply([],P),[z,E,B,Z]};var ht={};ie(ht,{CBEZIER_MINMAX_EPSILON:()=>bt,Cvalues:()=>ut,Tvalues:()=>Be,bezierLength:()=>ft,calculateBezier:()=>ct,computeBezier:()=>pt,deriveBezier:()=>lt,getBezierLength:()=>ee,minmaxC:()=>ve,minmaxQ:()=>de});var Be=[-0.06405689286260563,.06405689286260563,-0.1911188674736163,.1911188674736163,-0.3150426796961634,.3150426796961634,-0.4337935076260451,.4337935076260451,-0.5454214713888396,.5454214713888396,-0.6480936519369755,.6480936519369755,-0.7401241915785544,.7401241915785544,-0.820001985973903,.820001985973903,-0.8864155270044011,.8864155270044011,-0.9382745520027328,.9382745520027328,-0.9747285559713095,.9747285559713095,-0.9951872199970213,.9951872199970213],ut=[.12793819534675216,.12793819534675216,.1258374563468283,.1258374563468283,.12167047292780339,.12167047292780339,.1155056680537256,.1155056680537256,.10744427011596563,.10744427011596563,.09761865210411388,.09761865210411388,.08619016153195327,.08619016153195327,.0733464814110803,.0733464814110803,.05929858491543678,.05929858491543678,.04427743881741981,.04427743881741981,.028531388628933663,.028531388628933663,.0123412297999872,.0123412297999872],lt=e=>{let t=[];for(let n=e,o=n.length,r=o-1;o>1;o-=1,r-=1){let a=[];for(let s=0;s<r;s+=1)a.push({x:r*(n[s+1].x-n[s].x),y:r*(n[s+1].y-n[s].y),t:0});t.push(a),n=a;}return t},pt=(e,t)=>{if(t===0)return e[0].t=0,e[0];let n=e.length-1;if(t===1)return e[n].t=1,e[n];let o=1-t,r=e;if(n===0)return e[0].t=t,e[0];if(n===1)return {x:o*r[0].x+t*r[1].x,y:o*r[0].y+t*r[1].y,t};let a=o*o,s=t*t,i=0,m=0,u=0,l=0;return n===2?(r=[r[0],r[1],r[2],{x:0,y:0}],i=a,m=o*t*2,u=s):n===3&&(i=a*o,m=a*t*3,u=o*s*3,l=t*s),{x:i*r[0].x+m*r[1].x+u*r[2].x+l*r[3].x,y:i*r[0].y+m*r[1].y+u*r[2].y+l*r[3].y,t}},ct=(e,t)=>{let n=e(t),o=n.x*n.x+n.y*n.y;return Math.sqrt(o)},ft=e=>{let n=Be.length,o=0;for(let r=0,a;r<n;r++)a=.5*Be[r]+.5,o+=ut[r]*ct(e,a);return .5*o},ee=e=>{let t=[];for(let o=0,r=e.length,a=2;o<r;o+=a)t.push({x:e[o],y:e[o+1]});let n=lt(t);return ft(o=>pt(n[0],o))},bt=1e-8,de=([e,t,n])=>{let o=Math.min(e,n),r=Math.max(e,n);if(t>=e?n>=t:n<=t)return [o,r];let a=(e*n-t*t)/(e-2*t+n);return a<o?[a,r]:[o,a]},ve=([e,t,n,o])=>{let r=e-3*t+3*n-o;if(Math.abs(r)<bt)return e===o&&e===t?[e,o]:de([e,-0.5*e+1.5*t,e-3*t+3*n]);let a=-e*n+e*o-t*n-t*o+t*t+n*n;if(a<=0)return [Math.min(e,o),Math.max(e,o)];let s=Math.sqrt(a),i=Math.min(e,o),m=Math.max(e,o),u=e-2*t+n;for(let l=(u+s)/r,c=1;c<=2;l=(u-s)/r,c++){if(l>0&&l<1){let f=e*(1-l)*(1-l)*(1-l)+t*3*(1-l)*(1-l)*l+n*3*(1-l)*l*l+o*l*l*l;f<i&&(i=f),f>m&&(m=f);}}return [i,m]};var dt={};ie(dt,{getCubicBBox:()=>Ne,getCubicLength:()=>le,getPointAtCubicLength:()=>je,getPointAtCubicSegmentLength:()=>gt});var gt=([e,t,n,o,r,a,s,i],m)=>{let u=1-m;return {x:u**3*e+3*u**2*m*n+3*u*m**2*r+m**3*s,y:u**3*t+3*u**2*m*o+3*u*m**2*a+m**3*i}},le=(e,t,n,o,r,a,s,i)=>ee([e,t,n,o,r,a,s,i]),je=(e,t,n,o,r,a,s,i,m)=>{let u=typeof m=="number",l={x:e,y:t};if(u){let c=ee([e,t,n,o,r,a,s,i]);m<=0||(m>=c?l={x:s,y:i}:l=gt([e,t,n,o,r,a,s,i],m/c));}return l},Ne=(e,t,n,o,r,a,s,i)=>{let m=ve([e,n,r,s]),u=ve([t,o,a,i]);return [m[0],u[0],m[1],u[1]]};var xt={};ie(xt,{getPointAtQuadLength:()=>Oe,getPointAtQuadSegmentLength:()=>yt,getQuadBBox:()=>we,getQuadLength:()=>pe});var yt=([e,t,n,o,r,a],s)=>{let i=1-s;return {x:i**2*e+2*i*s*n+s**2*r,y:i**2*t+2*i*s*o+s**2*a}},pe=(e,t,n,o,r,a)=>ee([e,t,n,o,r,a]),Oe=(e,t,n,o,r,a,s)=>{let i=typeof s=="number",m={x:e,y:t};if(i){let u=ee([e,t,n,o,r,a]);s<=0||(s>=u?m={x:r,y:a}:m=yt([e,t,n,o,r,a],s/u));}return m},we=(e,t,n,o,r,a)=>{let s=de([e,n,r]),i=de([t,o,a]);return [s[0],i[0],s[1],i[1]]};var Pt={};ie(Pt,{polygonArea:()=>Mt,polygonLength:()=>Lt});var Mt=e=>{let t=e.length,n=-1,o,r=e[t-1],a=0;for(;++n<t;)o=r,r=e[n],a+=o[1]*r[0]-o[0]*r[1];return a/2},Lt=e=>e.reduce((t,n,o)=>o?t+ue(e[o-1],n):0,0);var vt={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},G=vt;var Nt=e=>{let t=e.pathValue[e.segmentStart],n=t.toLowerCase(),{data:o}=e;for(;o.length>=G[n]&&(n==="m"&&o.length>2?(e.segments.push([t].concat(o.splice(0,2))),n="l",t=t==="m"?"l":"L"):e.segments.push([t].concat(o.splice(0,G[n]))),!!G[n]););},Re=Nt;var wt="SVGPathCommander Error",D=wt;var Rt=e=>{let{index:t,pathValue:n}=e,o=n.charCodeAt(t);if(o===48){e.param=0,e.index+=1;return}if(o===49){e.param=1,e.index+=1;return}e.err=`${D}: invalid Arc flag "${n[t]}", expecting 0 or 1 at index ${t}`;},He=Rt;var Vt=e=>e>=48&&e<=57,j=Vt;var Qt="Invalid path value",O=Qt;var kt=e=>{let{max:t,pathValue:n,index:o}=e,r=o,a=false,s=false,i=false,m=false,u;if(r>=t){e.err=`${D}: ${O} at index ${r}, "pathValue" is missing param`;return}if(u=n.charCodeAt(r),(u===43||u===45)&&(r+=1,u=n.charCodeAt(r)),!j(u)&&u!==46){e.err=`${D}: ${O} at index ${r}, "${n[r]}" is not a number`;return}if(u!==46){if(a=u===48,r+=1,u=n.charCodeAt(r),a&&r<t&&u&&j(u)){e.err=`${D}: ${O} at index ${o}, "${n[o]}" illegal number`;return}for(;r<t&&j(n.charCodeAt(r));)r+=1,s=true;u=n.charCodeAt(r);}if(u===46){for(m=true,r+=1;j(n.charCodeAt(r));)r+=1,i=true;u=n.charCodeAt(r);}if(u===101||u===69){if(m&&!s&&!i){e.err=`${D}: ${O} at index ${r}, "${n[r]}" invalid float exponent`;return}if(r+=1,u=n.charCodeAt(r),(u===43||u===45)&&(r+=1),r<t&&j(n.charCodeAt(r)))for(;r<t&&j(n.charCodeAt(r));)r+=1;else {e.err=`${D}: ${O} at index ${r}, "${n[r]}" invalid integer exponent`;return}}e.index=r,e.param=+e.pathValue.slice(o,r);},Ze=kt;var zt=e=>[5760,6158,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279,10,13,8232,8233,32,9,11,12,160].includes(e),Ge=zt;var qt=e=>{let{pathValue:t,max:n}=e;for(;e.index<n&&Ge(t.charCodeAt(e.index));)e.index+=1;},_=qt;var Dt=e=>{switch(e|32){case 109:case 122:case 108:case 104:case 118:case 99:case 115:case 113:case 116:case 97:return  true;default:return  false}},_e=Dt;var Et=e=>j(e)||e===43||e===45||e===46,Ue=Et;var It=e=>(e|32)===97,Ke=It;var $t=e=>{switch(e|32){case 109:case 77:return  true;default:return  false}},Fe=$t;var Bt=e=>{let{max:t,pathValue:n,index:o,segments:r}=e,a=n.charCodeAt(o),s=G[n[o].toLowerCase()];if(e.segmentStart=o,!_e(a)){e.err=`${D}: ${O} "${n[o]}" is not a path command at index ${o}`;return}let i=r[r.length-1];if(!Fe(a)&&i?.[0]?.toLocaleLowerCase()==="z"){e.err=`${D}: ${O} "${n[o]}" is not a MoveTo path command at index ${o}`;return}if(e.index+=1,_(e),e.data=[],!s){Re(e);return}for(;;){for(let m=s;m>0;m-=1){if(Ke(a)&&(m===3||m===4)?He(e):Ze(e),e.err.length)return;e.data.push(e.param),_(e),e.index<t&&n.charCodeAt(e.index)===44&&(e.index+=1,_(e));}if(e.index>=e.max||!Ue(n.charCodeAt(e.index)))break}Re(e);},ye=Bt;var F=class{constructor(t){this.segments=[],this.pathValue=t,this.max=t.length,this.index=0,this.param=0,this.segmentStart=0,this.data=[],this.err="";}};var jt=e=>{if(typeof e!="string")return e.slice(0);let t=new F(e);for(_(t);t.index<t.max&&!t.err.length;)ye(t);if(!t.err.length)t.segments.length&&(t.segments[0][0]="M");else throw TypeError(t.err);return t.segments},v=jt;var Ot=(e,t,n,o)=>{let[r]=e,a=r.toUpperCase(),s=a===r;if(t===0||s)return e;if(a==="A")return [a,e[1],e[2],e[3],e[4],e[5],e[6]+n,e[7]+o];if(a==="V")return [a,e[1]+o];if(a==="H")return [a,e[1]+n];if(a==="L")return [a,e[1]+n,e[2]+o];{let i=[],m=e.length;for(let u=1;u<m;u+=1)i.push(e[u]+(u%2?n:o));return [a].concat(i)}},U=Ot;var Ht=(e,t)=>{let n=e.length,o,r="M",a="M",s=false,i=0,m=0,u=0,l=0,c=0;for(let f=0;f<n;f+=1){o=e[f],[r]=o,c=o.length,a=r.toUpperCase(),s=a!==r;let b=t(o,f,i,m);if(b===false)break;a==="Z"?(i=u,m=l):a==="H"?i=o[1]+(s?i:0):a==="V"?m=o[1]+(s?m:0):(i=o[c-2]+(s?i:0),m=o[c-1]+(s?m:0),a==="M"&&(u=i,l=m)),b&&(e[f]=b,b[0]==="C"&&(n=e.length));}return e},T=Ht;var Zt=e=>{let t=v(e);return T(t,U)},xe=Zt;var Gt=(e,t,n,o)=>{let[r]=e,a=r.toLowerCase(),s=r===a;if(t===0||s)return e;if(a==="a")return [a,e[1],e[2],e[3],e[4],e[5],e[6]-n,e[7]-o];if(a==="v")return [a,e[1]-o];if(a==="h")return [a,e[1]-n];if(a==="l")return [a,e[1]-n,e[2]-o];{let i=[],m=e.length;for(let u=1;u<m;u+=1)i.push(e[u]-(u%2?n:o));return [a].concat(i)}},Pe=Gt;var _t=e=>{let t=v(e);return T(t,Pe)},Ut=_t;var Kt=(e,t,n)=>{let{sin:o,cos:r}=Math,a=e*r(n)-t*o(n),s=e*o(n)+t*r(n);return {x:a,y:s}},ce=Kt;var St=(e,t,n,o,r,a,s,i,m,u)=>{let l=e,c=t,f=n,b=o,p=i,h=m,y=Math.PI*120/180,S=Math.PI/180*(+r||0),A=[],d,g,x,C,V;if(u)[g,x,C,V]=u;else {d=ce(l,c,-S),l=d.x,c=d.y,d=ce(p,h,-S),p=d.x,h=d.y;let N=(l-p)/2,q=(c-h)/2,R=N*N/(f*f)+q*q/(b*b);R>1&&(R=Math.sqrt(R),f*=R,b*=R);let ze=f*f,qe=b*b,st=(a===s?-1:1)*Math.sqrt(Math.abs((ze*qe-ze*q*q-qe*N*N)/(ze*q*q+qe*N*N)));C=st*f*q/b+(l+p)/2,V=st*-b*N/f+(c+h)/2,g=Math.asin(((c-V)/b*10**9>>0)/10**9),x=Math.asin(((h-V)/b*10**9>>0)/10**9),g=l<C?Math.PI-g:g,x=p<C?Math.PI-x:x,g<0&&(g=Math.PI*2+g),x<0&&(x=Math.PI*2+x),s&&g>x&&(g-=Math.PI*2),!s&&x>g&&(x-=Math.PI*2);}let Q=x-g;if(Math.abs(Q)>y){let N=x,q=p,R=h;x=g+y*(s&&x>g?1:-1),p=C+f*Math.cos(x),h=V+b*Math.sin(x),A=St(p,h,f,b,r,0,s,q,R,[x,N,C,V]);}Q=x-g;let w=Math.cos(g),M=Math.sin(g),$=Math.cos(x),J=Math.sin(x),k=Math.tan(Q/4),P=4/3*f*k,z=4/3*b*k,B=[l,c],E=[l+P*M,c-z*w],Z=[p+P*J,h-z*$],me=[p,h];if(E[0]=2*B[0]-E[0],E[1]=2*B[1]-E[1],u)return [E[0],E[1],Z[0],Z[1],me[0],me[1]].concat(A);A=[E[0],E[1],Z[0],Z[1],me[0],me[1]].concat(A);let W=[];for(let N=0,q=A.length;N<q;N+=1)W[N]=N%2?ce(A[N-1],A[N],S).y:ce(A[N],A[N+1],S).x;return W},Se=St;var Ft=(e,t,n,o,r,a)=>{let s=.3333333333333333,i=2/3;return [s*e+i*n,s*t+i*o,s*r+i*n,s*a+i*o,r,a]},Je=Ft;var Jt=(e,t,n,o)=>{let r=I([e,t],[n,o],.3333333333333333),a=I([e,t],[n,o],2/3);return [r[0],r[1],a[0],a[1],n,o]},Ve=Jt;var Wt=(e,t)=>{let[n]=e,o=e.slice(1).map(Number),[r,a]=o,{x1:s,y1:i,x:m,y:u}=t;return "TQ".includes(n)||(t.qx=null,t.qy=null),n==="M"?(t.x=r,t.y=a,e):n==="A"?["C"].concat(Se(s,i,o[0],o[1],o[2],o[3],o[4],o[5],o[6])):n==="Q"?(t.qx=r,t.qy=a,["C"].concat(Je(s,i,o[0],o[1],o[2],o[3]))):n==="L"?["C"].concat(Ve(s,i,r,a)):n==="Z"?["C"].concat(Ve(s,i,m,u)):e},We=Wt;var Xt=(e,t)=>{let[n]=e,o=n.toUpperCase(),r=n!==o,{x1:a,y1:s,x2:i,y2:m,x:u,y:l}=t,c=e.slice(1),f=c.map((b,p)=>b+(r?p%2?l:u:0));"TQ".includes(o)||(t.qx=null,t.qy=null);if(o==="A")return f=c.slice(0,-2).concat(c[5]+(r?u:0),c[6]+(r?l:0)),["A"].concat(f);if(o==="H")return ["L",e[1]+(r?u:0),s];if(o==="V")return ["L",a,e[1]+(r?l:0)];if(o==="L")return ["L",e[1]+(r?u:0),e[2]+(r?l:0)];if(o==="M")return ["M",e[1]+(r?u:0),e[2]+(r?l:0)];if(o==="C")return ["C"].concat(f);if(o==="S"){let b=a*2-i,p=s*2-m;return t.x1=b,t.y1=p,["C",b,p].concat(f)}else if(o==="T"){let b=a*2-(t.qx?t.qx:0),p=s*2-(t.qy?t.qy:0);return t.qx=b,t.qy=p,["Q",b,p].concat(f)}else if(o==="Q"){let[b,p]=f;return t.qx=b,t.qy=p,["Q"].concat(f)}else if(o==="Z")return ["Z"];return e},te=Xt;var Yt={x1:0,y1:0,x2:0,y2:0,x:0,y:0,qx:null,qy:null},K=Yt;var er=e=>{let t={...K},n=v(e);return T(n,(o,r,a,s)=>{t.x=a,t.y=s;let i=te(o,t),m=We(i,t);m[0]==="C"&&m.length>7&&(n.splice(r+1,0,["C"].concat(m.slice(7))),m=m.slice(0,7));let l=m.length;return t.x1=+m[l-2],t.y1=+m[l-1],t.x2=+m[l-4]||t.x1,t.y2=+m[l-3]||t.y1,m})},Ae=er;var tr={origin:[0,0,0],round:4},H=tr;var rr=(e,t)=>{let n=t>=1?10**t:1;return t>0?Math.round(e*n)/n:Math.round(e)},L=rr;var nr=(e,t)=>{let n=e.length,{round:o}=H,r=e[0],a="";o=t==="off"||typeof t=="number"&&t>=0?t:typeof o=="number"&&o>=0?o:"off";for(let s=0;s<n;s+=1){r=e[s];let[i]=r,m=r.slice(1);if(a+=i,o==="off")a+=m.join(" ");else {let u=0,l=m.length;for(;u<l;)a+=L(m[u],o),u!==l-1&&(a+=" "),u+=1;}}return a},Xe=nr;var fe=1e-5;var or=e=>{let t=v(e),n={...K};return T(t,(o,r,a,s)=>{n.x=a,n.y=s;let i=te(o,n),m=i.length;return n.x1=+i[m-2],n.y1=+i[m-1],n.x2=+i[m-4]||n.x1,n.y2=+i[m-3]||n.y1,i})},re=or;var ar=(e,t)=>{let n=re(e),o=false,r=[],a="M",s=0,i=0,[m,u]=n[0].slice(1),l=typeof t=="number",c={x:m,y:u},f=0,b=c,p=0;return !l||t<fe?c:(T(n,(h,y,S,A)=>{[a]=h,o=a==="M",r=o?r:[S,A].concat(h.slice(1));if(o?([,m,u]=h,c={x:m,y:u},f=0):a==="L"?(c=he(r[0],r[1],r[2],r[3],t-p),f=X(r[0],r[1],r[2],r[3])):a==="A"?(c=Ie(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],t-p),f=ge(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8])):a==="C"?(c=je(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],t-p),f=le(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7])):a==="Q"?(c=Oe(r[0],r[1],r[2],r[3],r[4],r[5],t-p),f=pe(r[0],r[1],r[2],r[3],r[4],r[5])):a==="Z"&&(r=[S,A,m,u],c={x:m,y:u},f=X(r[0],r[1],r[2],r[3])),[s,i]=r.slice(-2),p<t)b=c;else return  false;p+=f;}),t>p-fe?{x:s,y:i}:b)},Ce=ar;var sr=e=>{let t=v(e),n=0,o=0,r=0,a=0,s=0,i=0,m="M",u=0,l=0,c=0;return T(t,(f,b,p,h)=>{[m]=f;let y=m.toUpperCase(),A=y!==m?U(f,b,p,h):f.slice(0),d=y==="V"?["L",p,A[1]]:y==="H"?["L",A[1],h]:A;[m]=d,"TQ".includes(y)||(s=0,i=0);if(m==="M")[,u,l]=d;else if(m==="L")c+=X(p,h,d[1],d[2]);else if(m==="A")c+=ge(p,h,d[1],d[2],d[3],d[4],d[5],d[6],d[7]);else if(m==="S"){let g=n*2-r,x=o*2-a;c+=le(p,h,g,x,d[1],d[2],d[3],d[4]);}else m==="C"?c+=le(p,h,d[1],d[2],d[3],d[4],d[5],d[6]):m==="T"?(s=n*2-s,i=o*2-i,c+=pe(p,h,s,i,d[1],d[2])):m==="Q"?(s=d[1],i=d[2],c+=pe(p,h,d[1],d[2],d[3],d[4])):m==="Z"&&(c+=X(p,h,u,l));[n,o]=m==="Z"?[u,l]:d.slice(-2),[r,a]=m==="C"?[d[3],d[4]]:m==="S"?[d[1],d[2]]:[n,o];}),c},ne=sr;var mr=(e,t)=>{let n=v(e),o=n.slice(0),r=ne(o),a=o.length-1,s=0,i=0,m=n[0];if(a<=0||!t||!Number.isFinite(t))return {segment:m,index:0,length:i,lengthAtSegment:s};if(t>=r)return o=n.slice(0,-1),s=ne(o),i=r-s,m=n[a],{segment:m,index:a,length:i,lengthAtSegment:s};let u=[];for(;a>0;)m=o[a],o=o.slice(0,-1),s=ne(o),i=r-s,r=s,u.push({segment:m,index:a,length:i,lengthAtSegment:s}),a-=1;return u.find(({lengthAtSegment:l})=>l<=t)},Te=mr;var ir=(e,t)=>{let n=v(e),o=re(n),r=ne(o),a=g=>{let x=g.x-t.x,C=g.y-t.y;return x*x+C*C},s=8,i,m={x:0,y:0},u=0,l=0,c=1/0;for(let g=0;g<=r;g+=s)i=Ce(o,g),u=a(i),u<c&&(m=i,l=g,c=u);s/=2;let f,b,p=0,h=0,y=0,S=0;for(;s>1e-6&&(p=l-s,f=Ce(o,p),y=a(f),h=l+s,b=Ce(o,h),S=a(b),p>=0&&y<c?(m=f,l=p,c=y):h<=r&&S<c?(m=b,l=h,c=S):s/=2,!(s<1e-5)););let A=Te(n,l),d=Math.sqrt(c);return {closest:m,distance:d,segment:A}},oe=ir;var ur=(e,t)=>oe(e,t).closest,lr=ur;var pr=(e,t,n,o,r,a,s,i)=>3*((i-t)*(n+r)-(s-e)*(o+a)+o*(e-r)-n*(t-a)+i*(r+e/3)-s*(a+t/3))/20,cr=e=>{let t=0,n=0,o=0;return Ae(e).map(r=>{switch(r[0]){case "M":return [,t,n]=r,0;default:return o=pr(t,n,r[1],r[2],r[3],r[4],r[5],r[6]),[t,n]=r.slice(-2),o}}).reduce((r,a)=>r+a,0)},Ye=cr;var fr=e=>Ye(Ae(e))>=0,br=fr;var hr=e=>{if(!e)return {x:0,y:0,width:0,height:0,x2:0,y2:0,cx:0,cy:0,cz:0};let t=v(e),n="M",o=0,r=0,{max:a,min:s}=Math,i=1/0,m=1/0,u=-1/0,l=-1/0,c=0,f=0,b=0,p=0,h=0,y=0,S=0,A=0,d=0,g=0;T(t,(V,Q,w,M)=>{[n]=V;let $=n.toUpperCase(),k=$!==n?U(V,Q,w,M):V.slice(0),P=$==="V"?["L",w,k[1]]:$==="H"?["L",k[1],M]:k;[n]=P,"TQ".includes($)||(d=0,g=0);if(n==="M")[,o,r]=P,c=o,f=r,b=o,p=r;else if(n==="L")[c,f,b,p]=Me(w,M,P[1],P[2]);else if(n==="A")[c,f,b,p]=$e(w,M,P[1],P[2],P[3],P[4],P[5],P[6],P[7]);else if(n==="S"){let z=h*2-S,B=y*2-A;[c,f,b,p]=Ne(w,M,z,B,P[1],P[2],P[3],P[4]);}else n==="C"?[c,f,b,p]=Ne(w,M,P[1],P[2],P[3],P[4],P[5],P[6]):n==="T"?(d=h*2-d,g=y*2-g,[c,f,b,p]=we(w,M,d,g,P[1],P[2])):n==="Q"?(d=P[1],g=P[2],[c,f,b,p]=we(w,M,P[1],P[2],P[3],P[4])):n==="Z"&&([c,f,b,p]=Me(w,M,o,r));i=s(c,i),m=s(f,m),u=a(b,u),l=a(p,l),[h,y]=n==="Z"?[o,r]:P.slice(-2),[S,A]=n==="C"?[P[3],P[4]]:n==="S"?[P[1],P[2]]:[h,y];});let x=u-i,C=l-m;return {width:x,height:C,x:i,y:m,x2:u,y2:l,cx:i+x/2,cy:m+C/2,cz:Math.max(x,C)+Math.min(x,C)/2}},gr=hr;var dr=(e,t)=>Te(e,t).segment,yr=dr;var xr=(e,t)=>oe(e,t).segment,Pr=xr;var Sr=e=>Array.isArray(e)&&e.every(t=>{let n=t[0].toLowerCase();return G[n]===t.length-1&&"achlmqstvz".includes(n)&&t.slice(1).every(Number.isFinite)})&&e.length>0,ae=Sr;var Ar=e=>ae(e)&&e.every(([t])=>t===t.toUpperCase()),et=Ar;var Cr=e=>et(e)&&e.every(([t])=>"ACLMQZ".includes(t)),tt=Cr;var Tr=e=>tt(e)&&e.every(([t])=>"MC".includes(t)),Mr=Tr;var Lr=(e,t)=>{let{distance:n}=oe(e,t);return Math.abs(n)<fe},vr=Lr;var Nr=e=>ae(e)&&e.slice(1).every(([t])=>t===t.toLowerCase()),wr=Nr;var Rr=e=>{if(typeof e!="string"||!e.length)return  false;let t=new F(e);for(_(t);t.index<t.max&&!t.err.length;)ye(t);return !t.err.length&&"mM".includes(t.segments[0][0])},rt=Rr;var Vr={line:["x1","y1","x2","y2"],circle:["cx","cy","r"],ellipse:["cx","cy","rx","ry"],rect:["width","height","x","y","rx","ry"],polygon:["points"],polyline:["points"],glyph:["d"]},se=Vr;var Qr=e=>e!=null&&typeof e=="object"&&e.nodeType===1,Qe=Qr;var kr=e=>{let{x1:t,y1:n,x2:o,y2:r}=e;return [t,n,o,r]=[t,n,o,r].map(a=>+a),[["M",t,n],["L",o,r]]},zr=e=>{let t=[],n=(e.points||"").trim().split(/[\s|,]/).map(r=>+r),o=0;for(;o<n.length;)t.push([o?"L":"M",n[o],n[o+1]]),o+=2;return e.type==="polygon"?[...t,["z"]]:t},qr=e=>{let{cx:t,cy:n,r:o}=e;return [t,n,o]=[t,n,o].map(r=>+r),[["M",t-o,n],["a",o,o,0,1,0,2*o,0],["a",o,o,0,1,0,-2*o,0]]},Dr=e=>{let{cx:t,cy:n}=e,o=e.rx||0,r=e.ry||o;return [t,n,o,r]=[t,n,o,r].map(a=>+a),[["M",t-o,n],["a",o,r,0,1,0,2*o,0],["a",o,r,0,1,0,-2*o,0]]},Er=e=>{let t=+e.x||0,n=+e.y||0,o=+e.width,r=+e.height,a=+(e.rx||0),s=+(e.ry||a);if(a||s){a*2>o&&(a-=(a*2-o)/2);return s*2>r&&(s-=(s*2-r)/2),[["M",t+a,n],["h",o-a*2],["s",a,0,a,s],["v",r-s*2],["s",0,s,-a,s],["h",-o+a*2],["s",-a,0,-a,-s],["v",-r+s*2],["s",0,-s,a,-s]]}return [["M",t,n],["h",o],["v",r],["H",t],["Z"]]},Ir=e=>{let t=Object.keys(se),n=Qe(e),o=n?e.tagName:null;if(o&&[...t,"path"].every(m=>o!==m))throw TypeError(`${D}: "${o}" is not SVGElement`);let r=n?o:e.type,a=se[r],s={type:r};n?a.forEach(m=>{s[m]=e.getAttribute(m);}):Object.assign(s,e);let i=[];return r==="circle"?i=qr(s):r==="ellipse"?i=Dr(s):["polyline","polygon"].includes(r)?i=zr(s):r==="rect"?i=Er(s):r==="line"?i=kr(s):["glyph","path"].includes(r)&&(i=v(n?e.getAttribute("d")||"":e.d||"")),ae(i)&&i.length?i:false},nt=Ir;var $r=(e,t,n)=>{let o=n||document,r=Object.keys(se),a=Qe(e),s=a?e.tagName:null;if(s==="path")throw TypeError(`${D}: "${s}" is already SVGPathElement`);if(s&&r.every(p=>s!==p))throw TypeError(`${D}: "${s}" is not SVGElement`);let i=o.createElementNS("http://www.w3.org/2000/svg","path"),m=a?s:e.type,u=se[m],l={type:m},c=H.round,f=nt(e),b=f&&f.length?Xe(f,c):"";return a?(u.forEach(p=>{l[p]=e.getAttribute(p);}),Object.values(e.attributes).forEach(({name:p,value:h})=>{u.includes(p)||i.setAttribute(p,h);})):(Object.assign(l,e),Object.keys(l).forEach(p=>{!u.includes(p)&&p!=="type"&&i.setAttribute(p.replace(/[A-Z]/g,h=>`-${h.toLowerCase()}`),l[p]);})),rt(b)?(i.setAttribute("d",b),t&&a&&(e.before(i,e),e.remove()),i):false},Br=$r;var Or=e=>{let t=new jr__default.default,{origin:n}=e,[o,r]=n,{translate:a}=e,{rotate:s}=e,{skew:i}=e,{scale:m}=e;return Array.isArray(a)&&a.length>=2&&a.every(u=>!Number.isNaN(+u))&&a.some(u=>u!==0)?t=t.translate(...a):typeof a=="number"&&!Number.isNaN(a)&&(t=t.translate(a)),(s||i||m)&&(t=t.translate(o,r),Array.isArray(s)&&s.length>=2&&s.every(u=>!Number.isNaN(+u))&&s.some(u=>u!==0)?t=t.rotate(...s):typeof s=="number"&&!Number.isNaN(s)&&(t=t.rotate(s)),Array.isArray(i)&&i.length===2&&i.every(u=>!Number.isNaN(+u))&&i.some(u=>u!==0)?(t=i[0]?t.skewX(i[0]):t,t=i[1]?t.skewY(i[1]):t):typeof i=="number"&&!Number.isNaN(i)&&(t=t.skewX(i)),Array.isArray(m)&&m.length>=2&&m.every(u=>!Number.isNaN(+u))&&m.some(u=>u!==1)?t=t.scale(...m):typeof m=="number"&&!Number.isNaN(m)&&(t=t.scale(m)),t=t.translate(-o,-r)),t},ot=Or;var Hr=(e,t,n,o)=>{let[r]=e,{round:a}=H,s=a,i=t.slice(1),{x1:m,y1:u,x2:l,y2:c,x:f,y:b}=n,[p,h]=i.slice(-2),y=e;if("TQ".includes(r)||(n.qx=null,n.qy=null),r==="L"){if(L(f,s)===L(p,s))return ["V",h];if(L(b,s)===L(h,s))return ["H",p]}else if(r==="C"){let[S,A]=i;if(n.x1=S,n.y1=A,"CS".includes(o)&&(L(S,s)===L(m*2-l,s)&&L(A,s)===L(u*2-c,s)||L(m,s)===L(l*2-f,s)&&L(u,s)===L(c*2-b,s)))return ["S",i[2],i[3],i[4],i[5]]}else if(r==="Q"){let[S,A]=i;if(n.qx=S,n.qy=A,"QT".includes(o)&&L(S,s)===L(m*2-l,s)&&L(A,s)===L(u*2-c,s))return ["T",i[2],i[3]]}return y},at=Hr;var Zr=(e,t)=>{let n=e.slice(1).map(o=>L(o,t));return [e[0]].concat(n)},be=Zr;var Gr=(e,t)=>{let n=xe(e),o=typeof t=="number"&&t>=0?t:2,r={...K},a=[],s="M",i="Z";return T(n,(m,u,l,c)=>{r.x=l,r.y=c;let f=te(m,r),b=m;if([s]=m,a[u]=s,u){i=a[u-1];let h=at(m,f,r,i),y=be(h,o),S=y.join(""),A=Pe(h,u,l,c),d=be(A,o),g=d.join("");b=S.length<g.length?y:d;}let p=f.length;return r.x1=+f[p-2],r.y1=+f[p-1],r.x2=+f[p-4]||r.x1,r.y2=+f[p-3]||r.y1,b})},_r=Gr;var Kr=(e,t)=>{let n=jr__default.default.Translate(t[0],t[1],t[2]);return [,,,n.m44]=t,n=e.multiply(n),[n.m41,n.m42,n.m43,n.m44]},Fr=(e,t,n)=>{let[o,r,a]=n,[s,i,m]=Kr(e,[t[0],t[1],0,1]),u=s-o,l=i-r,c=m-a;return [u*(Math.abs(a)/Math.abs(c)||1)+o,l*(Math.abs(a)/Math.abs(c)||1)+r]},ke=Fr;var Jr=e=>{let t=e.slice(1).map((n,o,r)=>o?r[o-1].slice(-2).concat(n.slice(1)):e[0].slice(1).concat(n.slice(1))).map(n=>n.map((o,r)=>n[n.length-r-2*(1-r%2)])).reverse();return [["M"].concat(t[0].slice(0,2))].concat(t.map(n=>["C"].concat(n.slice(2))))},Wr=Jr;var Xr=e=>{let t=xe(e),n=re(t),o=t.length,r=t[o-1][0]==="Z",a=T(t,(s,i)=>{let m=n[i],u=i&&t[i-1],l=u&&u[0],c=t[i+1],f=c&&c[0],[b]=s,[p,h]=n[i?i-1:o-1].slice(-2),y=s;switch(b){case "M":y=r?["Z"]:[b,p,h];break;case "A":y=[b,s[1],s[2],s[3],s[4],s[5]===1?0:1,p,h];break;case "C":c&&f==="S"?y=["S",s[1],s[2],p,h]:y=[b,s[3],s[4],s[1],s[2],p,h];break;case "S":l&&"CS".includes(l)&&(!c||f!=="S")?y=["C",m[3],m[4],m[1],m[2],p,h]:y=[b,m[1],m[2],p,h];break;case "Q":c&&f==="T"?y=["T",p,h]:y=[b,s[1],s[2],p,h];break;case "T":l&&"QT".includes(l)&&(!c||f!=="T")?y=["Q",m[1],m[2],p,h]:y=[b,p,h];break;case "Z":y=["M",p,h];break;case "H":y=[b,p];break;case "V":y=[b,h];break;default:y=[b].concat(s.slice(1,-2),p,h);}return y});return r?a.reverse():[a[0]].concat(a.slice(1).reverse())},Yr=Xr;var en=(e,t)=>{let{round:n}=H;n=t==="off"||typeof t=="number"&&t>=0?t:typeof n=="number"&&n>=0?n:"off";return n==="off"?e.slice(0):T(e,o=>be(o,n))},tn=en;var rn=(e,t=.5)=>{let n=t,o=e.slice(0,2),r=e.slice(2,4),a=e.slice(4,6),s=e.slice(6,8),i=I(o,r,n),m=I(r,a,n),u=I(a,s,n),l=I(i,m,n),c=I(m,u,n),f=I(l,c,n);return [["C",i[0],i[1],l[0],l[1],f[0],f[1]],["C",c[0],c[1],u[0],u[1],s[0],s[1]]]},nn=rn;var on=e=>{let t=[],n,o=-1,r=0,a=0,s=0,i=0,m={...K};return e.forEach(u=>{let[l]=u,c=l.toUpperCase(),f=l.toLowerCase(),b=l===f,p=u.slice(1);c==="M"?(o+=1,[r,a]=p,r+=b?m.x:0,a+=b?m.y:0,s=r,i=a,n=[b?[c,s,i]:u]):(c==="Z"?(r=s,a=i):c==="H"?([,r]=u,r+=b?m.x:0):c==="V"?([,a]=u,a+=b?m.y:0):([r,a]=u.slice(-2),r+=b?m.x:0,a+=b?m.y:0),n.push(u)),m.x=r,m.y=a,t[o]=n;}),t},an=on;var sn=(e,t)=>{let n=0,o=0,r=0,a=0,s=0,i=0,m="M",u=v(e),l=t&&Object.keys(t);if(!t||l&&!l.length)return u.slice(0);t.origin||Object.assign(t,{origin:H.origin});let c=t.origin,f=ot(t);return f.isIdentity?u.slice(0):T(u,(b,p,h,y)=>{[m]=b;let S=m.toUpperCase(),d=S!==m?U(b,p,h,y):b.slice(0),g=S==="A"?["C"].concat(Se(h,y,d[1],d[2],d[3],d[4],d[5],d[6],d[7])):S==="V"?["L",h,d[1]]:S==="H"?["L",d[1],y]:d;m=g[0];let x=m==="C"&&g.length>7,C=x?g.slice(0,7):g.slice(0);if(x&&(u.splice(p+1,0,["C"].concat(g.slice(7))),g=C),m==="L"){[r,a]=ke(f,[g[1],g[2]],c);n!==r&&o!==a?g=["L",r,a]:o===a?g=["H",r]:n===r&&(g=["V",a]);}else for(s=1,i=g.length;s<i;s+=2)[r,a]=ke(f,[+g[s],+g[s+1]],c),g[s]=r,g[s+1]=a;return n=r,o=a,g})},mn=sn;
Object.defineProperty(exports,"CSSMatrix",{enumerable:true,get:function(){return jr__default.default}});exports.absolutizeSegment=U;exports.arcToCubic=Se;exports.arcTools=it;exports.bezierTools=ht;exports.cubicTools=dt;exports.distanceEpsilon=fe;exports.distanceSquareRoot=ue;exports.finalizeSegment=Re;exports.getClosestPoint=lr;exports.getDrawDirection=br;exports.getPathArea=Ye;exports.getPathBBox=gr;exports.getPointAtLength=Ce;exports.getPropertiesAtLength=Te;exports.getPropertiesAtPoint=oe;exports.getSVGMatrix=ot;exports.getSegmentAtLength=yr;exports.getSegmentOfPoint=Pr;exports.getTotalLength=ne;exports.invalidPathValue=O;exports.isAbsoluteArray=et;exports.isArcCommand=Ke;exports.isCurveArray=Mr;exports.isDigit=j;exports.isDigitStart=Ue;exports.isMoveCommand=Fe;exports.isNormalizedArray=tt;exports.isPathArray=ae;exports.isPathCommand=_e;exports.isPointInStroke=vr;exports.isRelativeArray=wr;exports.isSpace=Ge;exports.isValidPath=rt;exports.iterate=T;exports.lineToCubic=Ve;exports.lineTools=mt;exports.midPoint=I;exports.normalizePath=re;exports.normalizeSegment=te;exports.optimizePath=_r;exports.paramsCount=G;exports.paramsParser=K;exports.parsePathString=v;exports.pathParser=F;exports.pathToAbsolute=xe;exports.pathToCurve=Ae;exports.pathToRelative=Ut;exports.pathToString=Xe;exports.polygonTools=Pt;exports.projection2d=ke;exports.quadToCubic=Je;exports.quadTools=xt;exports.relativizeSegment=Pe;exports.reverseCurve=Wr;exports.reversePath=Yr;exports.rotateVector=ce;exports.roundPath=tn;exports.roundSegment=be;exports.roundTo=L;exports.scanFlag=He;exports.scanParam=Ze;exports.scanSegment=ye;exports.segmentToCubic=We;exports.shapeParams=se;exports.shapeToPath=Br;exports.shapeToPathArray=nt;exports.shortenSegment=at;exports.skipSpaces=_;exports.splitCubic=nn;exports.splitPath=an;exports.transformPath=mn;//# sourceMappingURL=util.cjs.map
//# sourceMappingURL=util.cjs.map