var $t=Object.defineProperty;var he=(t,e)=>{for(var n in e)$t(t,n,{get:e[n],enumerable:!0})};import cn from"@thednp/dommatrix";var at={};he(at,{angleBetween:()=>tt,arcLength:()=>rt,arcPoint:()=>se,getArcBBox:()=>ot,getArcLength:()=>Ce,getArcProps:()=>Re,getPointAtArcLength:()=>nt});var et={};he(et,{getLineBBox:()=>ze,getLineLength:()=>ae,getPointAtLineLength:()=>Ae});var jt=(t,e,n)=>{let[o,r]=t,[s,a]=e;return[o+(s-o)*n,r+(a-r)*n]},E=jt;var Bt=(t,e)=>Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])),oe=Bt;var ae=(t,e,n,o)=>oe([t,e],[n,o]),Ae=(t,e,n,o,r)=>{let s={x:t,y:e};if(typeof r=="number"){let a=oe([t,e],[n,o]);if(r<=0)s={x:t,y:e};else if(r>=a)s={x:n,y:o};else{let[i,m]=E([t,e],[n,o],r/a);s={x:i,y:m}}}return s},ze=(t,e,n,o)=>{let{min:r,max:s}=Math;return[r(t,n),r(e,o),s(t,n),s(e,o)]};var rt=(t,e,n)=>{let o=n/2,r=Math.sin(o),s=Math.cos(o),a=t**2*r**2,i=e**2*s**2,m=Math.sqrt(a+i)*n;return Math.abs(m)},se=(t,e,n,o,r,s)=>{let{sin:a,cos:i}=Math,m=i(r),u=a(r),c=n*i(s),l=o*a(s);return[t+m*c-u*l,e+u*c+m*l]},tt=(t,e)=>{let{x:n,y:o}=t,{x:r,y:s}=e,a=n*r+o*s,i=Math.sqrt((n**2+o**2)*(r**2+s**2));return(n*s-o*r<0?-1:1)*Math.acos(a/i)},Re=(t,e,n,o,r,s,a,i,m)=>{let{abs:u,sin:c,cos:l,sqrt:f,PI:g}=Math,p=u(n),h=u(o),S=(r%360+360)%360*(g/180);if(t===i&&e===m)return{rx:p,ry:h,startAngle:0,endAngle:0,center:{x:i,y:m}};if(p===0||h===0)return{rx:p,ry:h,startAngle:0,endAngle:0,center:{x:(i+t)/2,y:(m+e)/2}};let A=(t-i)/2,y=(e-m)/2,b={x:l(S)*A+c(S)*y,y:-c(S)*A+l(S)*y},d=b.x**2/p**2+b.y**2/h**2;d>1&&(p*=f(d),h*=f(d));let C=p**2*h**2-p**2*b.y**2-h**2*b.x**2,R=p**2*b.y**2+h**2*b.x**2,k=C/R;k=k<0?0:k;let w=(s!==a?1:-1)*f(k),v={x:w*(p*b.y/h),y:w*(-(h*b.x)/p)},$={x:l(S)*v.x-c(S)*v.y+(t+i)/2,y:c(S)*v.x+l(S)*v.y+(e+m)/2},re={x:(b.x-v.x)/p,y:(b.y-v.y)/h},Q=tt({x:1,y:0},re),x={x:(-b.x-v.x)/p,y:(-b.y-v.y)/h},q=tt(re,x);!a&&q>0?q-=2*g:a&&q<0&&(q+=2*g),q%=2*g;let j=Q+q;return{center:$,startAngle:Q,endAngle:j,rx:p,ry:h}},Ce=(t,e,n,o,r,s,a,i,m)=>{let{rx:u,ry:c,startAngle:l,endAngle:f}=Re(t,e,n,o,r,s,a,i,m);return rt(u,c,f-l)},nt=(t,e,n,o,r,s,a,i,m,u)=>{let c={x:t,y:e},{center:l,rx:f,ry:g,startAngle:p,endAngle:h}=Re(t,e,n,o,r,s,a,i,m);if(typeof u=="number"){let P=rt(f,g,h-p);if(u<=0)c={x:t,y:e};else if(u>=P)c={x:i,y:m};else{if(t===i&&e===m)return{x:i,y:m};if(f===0||g===0)return Ae(t,e,i,m,u);let{PI:S,cos:A,sin:y}=Math,b=h-p,C=(r%360+360)%360*(S/180),R=p+b*(u/P),k=f*A(R),w=g*y(R);c={x:A(C)*k-y(C)*w+l.x,y:y(C)*k+A(C)*w+l.y}}}return c},ot=(t,e,n,o,r,s,a,i,m)=>{let{center:u,rx:c,ry:l,startAngle:f,endAngle:g}=Re(t,e,n,o,r,s,a,i,m),p=g-f,{min:h,max:P,tan:S,atan2:A,PI:y}=Math,{x:b,y:d}=u,C=r*y/180,R=S(C),k=A(-l*R,c),w=k,v=k+y,$=A(l,c*R),re=$+y,Q=[i],x=[m],q=h(t,i),j=P(t,i),O=h(e,m),F=P(e,m),ge=g-p*1e-5,ne=se(b,d,c,l,C,ge),N=g-p*.99999,D=se(b,d,c,l,C,N);if(ne[0]>j||D[0]>j){let z=se(b,d,c,l,C,w);Q.push(z[0]),x.push(z[1])}if(ne[0]<q||D[0]<q){let z=se(b,d,c,l,C,v);Q.push(z[0]),x.push(z[1])}if(ne[1]<O||D[1]<O){let z=se(b,d,c,l,C,re);Q.push(z[0]),x.push(z[1])}if(ne[1]>F||D[1]>F){let z=se(b,d,c,l,C,$);Q.push(z[0]),x.push(z[1])}return q=h.apply([],Q),O=h.apply([],x),j=P.apply([],Q),F=P.apply([],x),[q,O,j,F]};var mt={};he(mt,{CBEZIER_MINMAX_EPSILON:()=>Mt,Cvalues:()=>xt,Tvalues:()=>st,bezierLength:()=>Tt,calculateBezier:()=>Ct,computeBezier:()=>At,deriveBezier:()=>St,getBezierLength:()=>me,minmaxC:()=>Ve,minmaxQ:()=>Te});var st=[-.06405689286260563,.06405689286260563,-.1911188674736163,.1911188674736163,-.3150426796961634,.3150426796961634,-.4337935076260451,.4337935076260451,-.5454214713888396,.5454214713888396,-.6480936519369755,.6480936519369755,-.7401241915785544,.7401241915785544,-.820001985973903,.820001985973903,-.8864155270044011,.8864155270044011,-.9382745520027328,.9382745520027328,-.9747285559713095,.9747285559713095,-.9951872199970213,.9951872199970213],xt=[.12793819534675216,.12793819534675216,.1258374563468283,.1258374563468283,.12167047292780339,.12167047292780339,.1155056680537256,.1155056680537256,.10744427011596563,.10744427011596563,.09761865210411388,.09761865210411388,.08619016153195327,.08619016153195327,.0733464814110803,.0733464814110803,.05929858491543678,.05929858491543678,.04427743881741981,.04427743881741981,.028531388628933663,.028531388628933663,.0123412297999872,.0123412297999872],St=t=>{let e=[];for(let n=t,o=n.length,r=o-1;o>1;o-=1,r-=1){let s=[];for(let a=0;a<r;a+=1)s.push({x:r*(n[a+1].x-n[a].x),y:r*(n[a+1].y-n[a].y),t:0});e.push(s),n=s}return e},At=(t,e)=>{if(e===0)return t[0].t=0,t[0];let n=t.length-1;if(e===1)return t[n].t=1,t[n];let o=1-e,r=t;if(n===0)return t[0].t=e,t[0];if(n===1)return{x:o*r[0].x+e*r[1].x,y:o*r[0].y+e*r[1].y,t:e};let s=o*o,a=e*e,i=0,m=0,u=0,c=0;return n===2?(r=[r[0],r[1],r[2],{x:0,y:0}],i=s,m=o*e*2,u=a):n===3&&(i=s*o,m=s*e*3,u=o*a*3,c=e*a),{x:i*r[0].x+m*r[1].x+u*r[2].x+c*r[3].x,y:i*r[0].y+m*r[1].y+u*r[2].y+c*r[3].y,t:e}},Ct=(t,e)=>{let n=t(e),o=n.x*n.x+n.y*n.y;return Math.sqrt(o)},Tt=t=>{let n=st.length,o=0;for(let r=0,s;r<n;r++)s=.5*st[r]+.5,o+=xt[r]*Ct(t,s);return .5*o},me=t=>{let e=[];for(let o=0,r=t.length,s=2;o<r;o+=s)e.push({x:t[o],y:t[o+1]});let n=St(e);return Tt(o=>At(n[0],o))},Mt=1e-8,Te=([t,e,n])=>{let o=Math.min(t,n),r=Math.max(t,n);if(e>=t?n>=e:n<=e)return[o,r];let s=(t*n-e*e)/(t-2*e+n);return s<o?[s,r]:[o,s]},Ve=([t,e,n,o])=>{let r=t-3*e+3*n-o;if(Math.abs(r)<Mt)return t===o&&t===e?[t,o]:Te([t,-.5*t+1.5*e,t-3*e+3*n]);let s=-t*n+t*o-e*n-e*o+e*e+n*n;if(s<=0)return[Math.min(t,o),Math.max(t,o)];let a=Math.sqrt(s),i=Math.min(t,o),m=Math.max(t,o),u=t-2*e+n;for(let c=(u+a)/r,l=1;l<=2;c=(u-a)/r,l++){if(c>0&&c<1){let f=t*(1-c)*(1-c)*(1-c)+e*3*(1-c)*(1-c)*c+n*3*(1-c)*c*c+o*c*c*c;f<i&&(i=f),f>m&&(m=f)}}return[i,m]};var ut={};he(ut,{getCubicBBox:()=>ke,getCubicLength:()=>be,getPointAtCubicLength:()=>it,getPointAtCubicSegmentLength:()=>Lt});var Lt=([t,e,n,o,r,s,a,i],m)=>{let u=1-m;return{x:u**3*t+3*u**2*m*n+3*u*m**2*r+m**3*a,y:u**3*e+3*u**2*m*o+3*u*m**2*s+m**3*i}},be=(t,e,n,o,r,s,a,i)=>me([t,e,n,o,r,s,a,i]),it=(t,e,n,o,r,s,a,i,m)=>{let u=typeof m=="number",c={x:t,y:e};if(u){let l=me([t,e,n,o,r,s,a,i]);m<=0||(m>=l?c={x:a,y:i}:c=Lt([t,e,n,o,r,s,a,i],m/l))}return c},ke=(t,e,n,o,r,s,a,i)=>{let m=Ve([t,n,r,a]),u=Ve([e,o,s,i]);return[m[0],u[0],m[1],u[1]]};var lt={};he(lt,{getPointAtQuadLength:()=>ct,getPointAtQuadSegmentLength:()=>vt,getQuadBBox:()=>Qe,getQuadLength:()=>ye});var vt=([t,e,n,o,r,s],a)=>{let i=1-a;return{x:i**2*t+2*i*a*n+a**2*r,y:i**2*e+2*i*a*o+a**2*s}},ye=(t,e,n,o,r,s)=>me([t,e,n,o,r,s]),ct=(t,e,n,o,r,s,a)=>{let i=typeof a=="number",m={x:t,y:e};if(i){let u=me([t,e,n,o,r,s]);a<=0||(a>=u?m={x:r,y:s}:m=vt([t,e,n,o,r,s],a/u))}return m},Qe=(t,e,n,o,r,s)=>{let a=Te([t,n,r]),i=Te([e,o,s]);return[a[0],i[0],a[1],i[1]]};var pt={};he(pt,{polygonArea:()=>Ht,polygonLength:()=>Zt});var Ht=t=>{let e=t.length,n=-1,o,r=t[e-1],s=0;for(;++n<e;)o=r,r=t[n],s+=o[1]*r[0]-o[0]*r[1];return s/2},Zt=t=>t.reduce((e,n,o)=>o?e+oe(t[o-1],n):0,0);var Gt=(t,e,n)=>{let{sin:o,cos:r}=Math,s=t*r(n)-e*o(n),a=t*o(n)+e*r(n);return{x:s,y:a}},ie=Gt;var _t=(t,e)=>{let n=e>=1?10**e:1;return e>0?Math.round(t*n)/n:Math.round(t)},M=_t;var Ut={origin:[0,0,0],round:4},I=Ut;var Ft={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},Z=Ft;var Kt=t=>{let e=t.pathValue[t.segmentStart],n=e.toLowerCase(),{data:o}=t;for(;o.length>=Z[n]&&(n==="m"&&o.length>2?(t.segments.push([e].concat(o.splice(0,2))),n="l",e=e==="m"?"l":"L"):t.segments.push([e].concat(o.splice(0,Z[n]))),!!Z[n]););},Me=Kt;var Jt="SVGPathCommander Error",V=Jt;var Wt=t=>{let{index:e,pathValue:n}=t,o=n.charCodeAt(e);if(o===48){t.param=0,t.index+=1;return}if(o===49){t.param=1,t.index+=1;return}t.err=`${V}: invalid Arc flag "${n[e]}", expecting 0 or 1 at index ${e}`},qe=Wt;var Xt=t=>t>=48&&t<=57,B=Xt;var Yt="Invalid path value",H=Yt;var er=t=>{let{max:e,pathValue:n,index:o}=t,r=o,s=!1,a=!1,i=!1,m=!1,u;if(r>=e){t.err=`${V}: ${H} at index ${r}, "pathValue" is missing param`;return}if(u=n.charCodeAt(r),(u===43||u===45)&&(r+=1,u=n.charCodeAt(r)),!B(u)&&u!==46){t.err=`${V}: ${H} at index ${r}, "${n[r]}" is not a number`;return}if(u!==46){if(s=u===48,r+=1,u=n.charCodeAt(r),s&&r<e&&u&&B(u)){t.err=`${V}: ${H} at index ${o}, "${n[o]}" illegal number`;return}for(;r<e&&B(n.charCodeAt(r));)r+=1,a=!0;u=n.charCodeAt(r)}if(u===46){for(m=!0,r+=1;B(n.charCodeAt(r));)r+=1,i=!0;u=n.charCodeAt(r)}if(u===101||u===69){if(m&&!a&&!i){t.err=`${V}: ${H} at index ${r}, "${n[r]}" invalid float exponent`;return}if(r+=1,u=n.charCodeAt(r),(u===43||u===45)&&(r+=1),r<e&&B(n.charCodeAt(r)))for(;r<e&&B(n.charCodeAt(r));)r+=1;else{t.err=`${V}: ${H} at index ${r}, "${n[r]}" invalid integer exponent`;return}}t.index=r,t.param=+t.pathValue.slice(o,r)},De=er;var tr=t=>[5760,6158,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279,10,13,8232,8233,32,9,11,12,160].includes(t),Ee=tr;var rr=t=>{let{pathValue:e,max:n}=t;for(;t.index<n&&Ee(e.charCodeAt(t.index));)t.index+=1},G=rr;var nr=t=>{switch(t|32){case 109:case 122:case 108:case 104:case 118:case 99:case 115:case 113:case 116:case 97:return!0;default:return!1}},Oe=nr;var or=t=>B(t)||t===43||t===45||t===46,Ie=or;var ar=t=>(t|32)===97,$e=ar;var sr=t=>{switch(t|32){case 109:case 77:return!0;default:return!1}},je=sr;var mr=t=>{let{max:e,pathValue:n,index:o,segments:r}=t,s=n.charCodeAt(o),a=Z[n[o].toLowerCase()];if(t.segmentStart=o,!Oe(s)){t.err=`${V}: ${H} "${n[o]}" is not a path command at index ${o}`;return}let i=r[r.length-1];if(!je(s)&&i?.[0]?.toLocaleLowerCase()==="z"){t.err=`${V}: ${H} "${n[o]}" is not a MoveTo path command at index ${o}`;return}if(t.index+=1,G(t),t.data=[],!a){Me(t);return}for(;;){for(let m=a;m>0;m-=1){if($e(s)&&(m===3||m===4)?qe(t):De(t),t.err.length)return;t.data.push(t.param),G(t),t.index<e&&n.charCodeAt(t.index)===44&&(t.index+=1,G(t))}if(t.index>=t.max||!Ie(n.charCodeAt(t.index)))break}Me(t)},Pe=mr;var K=class{constructor(e){this.segments=[],this.pathValue=e,this.max=e.length,this.index=0,this.param=0,this.segmentStart=0,this.data=[],this.err=""}};var ir=t=>{if(typeof t!="string")return t.slice(0);let e=new K(t);for(G(e);e.index<e.max&&!e.err.length;)Pe(e);if(!e.err.length)e.segments.length&&(e.segments[0][0]="M");else throw TypeError(e.err);return e.segments},L=ir;var ur=(t,e,n,o)=>{let[r]=t,s=r.toUpperCase(),a=s===r;if(e===0||a)return t;if(s==="A")return[s,t[1],t[2],t[3],t[4],t[5],t[6]+n,t[7]+o];if(s==="V")return[s,t[1]+o];if(s==="H")return[s,t[1]+n];if(s==="L")return[s,t[1]+n,t[2]+o];{let i=[],m=t.length;for(let u=1;u<m;u+=1)i.push(t[u]+(u%2?n:o));return[s].concat(i)}},_=ur;var cr=(t,e)=>{let n=t.length,o,r="M",s="M",a=!1,i=0,m=0,u=0,c=0,l=0;for(let f=0;f<n;f+=1){o=t[f],[r]=o,l=o.length,s=r.toUpperCase(),a=s!==r;let g=e(o,f,i,m);if(g===!1)break;s==="Z"?(i=u,m=c):s==="H"?i=o[1]+(a?i:0):s==="V"?m=o[1]+(a?m:0):(i=o[l-2]+(a?i:0),m=o[l-1]+(a?m:0),s==="M"&&(u=i,c=m)),g&&(t[f]=g,g[0]==="C"&&(n=t.length))}return t},T=cr;var lr=t=>{let e=L(t);return T(e,_)},ue=lr;var pr=(t,e,n,o)=>{let[r]=t,s=r.toLowerCase(),a=r===s;if(e===0||a)return t;if(s==="a")return[s,t[1],t[2],t[3],t[4],t[5],t[6]-n,t[7]-o];if(s==="v")return[s,t[1]-o];if(s==="h")return[s,t[1]-n];if(s==="l")return[s,t[1]-n,t[2]-o];{let i=[],m=t.length;for(let u=1;u<m;u+=1)i.push(t[u]-(u%2?n:o));return[s].concat(i)}},de=pr;var fr=t=>{let e=L(t);return T(e,de)},ft=fr;var Nt=(t,e,n,o,r,s,a,i,m,u)=>{let c=t,l=e,f=n,g=o,p=i,h=m,P=Math.PI*120/180,S=Math.PI/180*(+r||0),A=[],y,b,d,C,R;if(u)[b,d,C,R]=u;else{y=ie(c,l,-S),c=y.x,l=y.y,y=ie(p,h,-S),p=y.x,h=y.y;let N=(c-p)/2,D=(l-h)/2,z=N*N/(f*f)+D*D/(g*g);z>1&&(z=Math.sqrt(z),f*=z,g*=z);let Xe=f*f,Ye=g*g,dt=(s===a?-1:1)*Math.sqrt(Math.abs((Xe*Ye-Xe*D*D-Ye*N*N)/(Xe*D*D+Ye*N*N)));C=dt*f*D/g+(c+p)/2,R=dt*-g*N/f+(l+h)/2,b=Math.asin(((l-R)/g*10**9>>0)/10**9),d=Math.asin(((h-R)/g*10**9>>0)/10**9),b=c<C?Math.PI-b:b,d=p<C?Math.PI-d:d,b<0&&(b=Math.PI*2+b),d<0&&(d=Math.PI*2+d),a&&b>d&&(b-=Math.PI*2),!a&&d>b&&(d-=Math.PI*2)}let k=d-b;if(Math.abs(k)>P){let N=d,D=p,z=h;d=b+P*(a&&d>b?1:-1),p=C+f*Math.cos(d),h=R+g*Math.sin(d),A=Nt(p,h,f,g,r,0,a,D,z,[d,N,C,R])}k=d-b;let w=Math.cos(b),v=Math.sin(b),$=Math.cos(d),re=Math.sin(d),Q=Math.tan(k/4),x=4/3*f*Q,q=4/3*g*Q,j=[c,l],O=[c+x*v,l-q*w],F=[p+x*re,h-q*$],ge=[p,h];if(O[0]=2*j[0]-O[0],O[1]=2*j[1]-O[1],u)return[O[0],O[1],F[0],F[1],ge[0],ge[1]].concat(A);A=[O[0],O[1],F[0],F[1],ge[0],ge[1]].concat(A);let ne=[];for(let N=0,D=A.length;N<D;N+=1)ne[N]=N%2?ie(A[N-1],A[N],S).y:ie(A[N],A[N+1],S).x;return ne},xe=Nt;var gr=(t,e,n,o,r,s)=>{let a=.3333333333333333,i=2/3;return[a*t+i*n,a*e+i*o,a*r+i*n,a*s+i*o,r,s]},Be=gr;var hr=(t,e,n,o)=>{let r=E([t,e],[n,o],.3333333333333333),s=E([t,e],[n,o],2/3);return[r[0],r[1],s[0],s[1],n,o]},Le=hr;var br=(t,e)=>{let[n]=t,o=t.slice(1).map(Number),[r,s]=o,{x1:a,y1:i,x:m,y:u}=e;return"TQ".includes(n)||(e.qx=null,e.qy=null),n==="M"?(e.x=r,e.y=s,t):n==="A"?["C"].concat(xe(a,i,o[0],o[1],o[2],o[3],o[4],o[5],o[6])):n==="Q"?(e.qx=r,e.qy=s,["C"].concat(Be(a,i,o[0],o[1],o[2],o[3]))):n==="L"?["C"].concat(Le(a,i,r,s)):n==="Z"?["C"].concat(Le(a,i,m,u)):t},He=br;var yr=(t,e)=>{let[n]=t,o=n.toUpperCase(),r=n!==o,{x1:s,y1:a,x2:i,y2:m,x:u,y:c}=e,l=t.slice(1),f=l.map((g,p)=>g+(r?p%2?c:u:0));"TQ".includes(o)||(e.qx=null,e.qy=null);if(o==="A")return f=l.slice(0,-2).concat(l[5]+(r?u:0),l[6]+(r?c:0)),["A"].concat(f);if(o==="H")return["L",t[1]+(r?u:0),a];if(o==="V")return["L",s,t[1]+(r?c:0)];if(o==="L")return["L",t[1]+(r?u:0),t[2]+(r?c:0)];if(o==="M")return["M",t[1]+(r?u:0),t[2]+(r?c:0)];if(o==="C")return["C"].concat(f);if(o==="S"){let g=s*2-i,p=a*2-m;return e.x1=g,e.y1=p,["C",g,p].concat(f)}else if(o==="T"){let g=s*2-(e.qx?e.qx:0),p=a*2-(e.qy?e.qy:0);return e.qx=g,e.qy=p,["Q",g,p].concat(f)}else if(o==="Q"){let[g,p]=f;return e.qx=g,e.qy=p,["Q"].concat(f)}else if(o==="Z")return["Z"];return t},X=yr;var Pr={x1:0,y1:0,x2:0,y2:0,x:0,y:0,qx:null,qy:null},U=Pr;var dr=t=>{let e={...U},n=L(t);return T(n,(o,r,s,a)=>{e.x=s,e.y=a;let i=X(o,e),m=He(i,e);m[0]==="C"&&m.length>7&&(n.splice(r+1,0,["C"].concat(m.slice(7))),m=m.slice(0,7));let c=m.length;return e.x1=+m[c-2],e.y1=+m[c-1],e.x2=+m[c-4]||e.x1,e.y2=+m[c-3]||e.y1,m})},ce=dr;var xr=(t,e)=>{let n=t.length,{round:o}=I,r=t[0],s="";o=e==="off"||typeof e=="number"&&e>=0?e:typeof o=="number"&&o>=0?o:"off";for(let a=0;a<n;a+=1){r=t[a];let[i]=r,m=r.slice(1);if(s+=i,o==="off")s+=m.join(" ");else{let u=0,c=m.length;for(;u<c;)s+=M(m[u],o),u!==c-1&&(s+=" "),u+=1}}return s},ve=xr;var Sr=t=>{if(!t)return{x:0,y:0,width:0,height:0,x2:0,y2:0,cx:0,cy:0,cz:0};let e=L(t),n="M",o=0,r=0,{max:s,min:a}=Math,i=1/0,m=1/0,u=-1/0,c=-1/0,l=0,f=0,g=0,p=0,h=0,P=0,S=0,A=0,y=0,b=0;T(e,(R,k,w,v)=>{[n]=R;let $=n.toUpperCase(),Q=$!==n?_(R,k,w,v):R.slice(0),x=$==="V"?["L",w,Q[1]]:$==="H"?["L",Q[1],v]:Q;[n]=x,"TQ".includes($)||(y=0,b=0);if(n==="M")[,o,r]=x,l=o,f=r,g=o,p=r;else if(n==="L")[l,f,g,p]=ze(w,v,x[1],x[2]);else if(n==="A")[l,f,g,p]=ot(w,v,x[1],x[2],x[3],x[4],x[5],x[6],x[7]);else if(n==="S"){let q=h*2-S,j=P*2-A;[l,f,g,p]=ke(w,v,q,j,x[1],x[2],x[3],x[4])}else n==="C"?[l,f,g,p]=ke(w,v,x[1],x[2],x[3],x[4],x[5],x[6]):n==="T"?(y=h*2-y,b=P*2-b,[l,f,g,p]=Qe(w,v,y,b,x[1],x[2])):n==="Q"?(y=x[1],b=x[2],[l,f,g,p]=Qe(w,v,x[1],x[2],x[3],x[4])):n==="Z"&&([l,f,g,p]=ze(w,v,o,r));i=a(l,i),m=a(f,m),u=s(g,u),c=s(p,c),[h,P]=n==="Z"?[o,r]:x.slice(-2),[S,A]=n==="C"?[x[3],x[4]]:n==="S"?[x[1],x[2]]:[h,P]});let d=u-i,C=c-m;return{width:d,height:C,x:i,y:m,x2:u,y2:c,cx:i+d/2,cy:m+C/2,cz:Math.max(d,C)+Math.min(d,C)/2}},gt=Sr;var Ar=t=>{let e=L(t),n=0,o=0,r=0,s=0,a=0,i=0,m="M",u=0,c=0,l=0;return T(e,(f,g,p,h)=>{[m]=f;let P=m.toUpperCase(),A=P!==m?_(f,g,p,h):f.slice(0),y=P==="V"?["L",p,A[1]]:P==="H"?["L",A[1],h]:A;[m]=y,"TQ".includes(P)||(a=0,i=0);if(m==="M")[,u,c]=y;else if(m==="L")l+=ae(p,h,y[1],y[2]);else if(m==="A")l+=Ce(p,h,y[1],y[2],y[3],y[4],y[5],y[6],y[7]);else if(m==="S"){let b=n*2-r,d=o*2-s;l+=be(p,h,b,d,y[1],y[2],y[3],y[4])}else m==="C"?l+=be(p,h,y[1],y[2],y[3],y[4],y[5],y[6]):m==="T"?(a=n*2-a,i=o*2-i,l+=ye(p,h,a,i,y[1],y[2])):m==="Q"?(a=y[1],i=y[2],l+=ye(p,h,y[1],y[2],y[3],y[4])):m==="Z"&&(l+=ae(p,h,u,c));[n,o]=m==="Z"?[u,c]:y.slice(-2),[r,s]=m==="C"?[y[3],y[4]]:m==="S"?[y[1],y[2]]:[n,o]}),l},J=Ar;var le=1e-5;var Cr=t=>{let e=L(t),n={...U};return T(e,(o,r,s,a)=>{n.x=s,n.y=a;let i=X(o,n),m=i.length;return n.x1=+i[m-2],n.y1=+i[m-1],n.x2=+i[m-4]||n.x1,n.y2=+i[m-3]||n.y1,i})},W=Cr;var Tr=(t,e)=>{let n=W(t),o=!1,r=[],s="M",a=0,i=0,[m,u]=n[0].slice(1),c=typeof e=="number",l={x:m,y:u},f=0,g=l,p=0;return!c||e<le?l:(T(n,(h,P,S,A)=>{[s]=h,o=s==="M",r=o?r:[S,A].concat(h.slice(1));if(o?([,m,u]=h,l={x:m,y:u},f=0):s==="L"?(l=Ae(r[0],r[1],r[2],r[3],e-p),f=ae(r[0],r[1],r[2],r[3])):s==="A"?(l=nt(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],e-p),f=Ce(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8])):s==="C"?(l=it(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],e-p),f=be(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7])):s==="Q"?(l=ct(r[0],r[1],r[2],r[3],r[4],r[5],e-p),f=ye(r[0],r[1],r[2],r[3],r[4],r[5])):s==="Z"&&(r=[S,A,m,u],l={x:m,y:u},f=ae(r[0],r[1],r[2],r[3])),[a,i]=r.slice(-2),p<e)g=l;else return!1;p+=f}),e>p-le?{x:a,y:i}:g)},pe=Tr;var Mr=(t,e)=>{let n=L(t),o=n.slice(0),r=J(o),s=o.length-1,a=0,i=0,m=n[0];if(s<=0||!e||!Number.isFinite(e))return{segment:m,index:0,length:i,lengthAtSegment:a};if(e>=r)return o=n.slice(0,-1),a=J(o),i=r-a,m=n[s],{segment:m,index:s,length:i,lengthAtSegment:a};let u=[];for(;s>0;)m=o[s],o=o.slice(0,-1),a=J(o),i=r-a,r=a,u.push({segment:m,index:s,length:i,lengthAtSegment:a}),s-=1;return u.find(({lengthAtSegment:c})=>c<=e)},Se=Mr;var Lr=(t,e)=>{let n=L(t),o=W(n),r=J(o),s=b=>{let d=b.x-e.x,C=b.y-e.y;return d*d+C*C},a=8,i,m={x:0,y:0},u=0,c=0,l=1/0;for(let b=0;b<=r;b+=a)i=pe(o,b),u=s(i),u<l&&(m=i,c=b,l=u);a/=2;let f,g,p=0,h=0,P=0,S=0;for(;a>1e-6&&(p=c-a,f=pe(o,p),P=s(f),h=c+a,g=pe(o,h),S=s(g),p>=0&&P<l?(m=f,c=p,l=P):h<=r&&S<l?(m=g,c=h,l=S):a/=2,!(a<1e-5)););let A=Se(n,c),y=Math.sqrt(l);return{closest:m,distance:y,segment:A}},Y=Lr;var vr=(t,e)=>Y(t,e).closest,wt=vr;var Nr=(t,e,n,o,r,s,a,i)=>3*((i-e)*(n+r)-(a-t)*(o+s)+o*(t-r)-n*(e-s)+i*(r+t/3)-a*(s+e/3))/20,wr=t=>{let e=0,n=0,o=0;return ce(t).map(r=>{switch(r[0]){case"M":return[,e,n]=r,0;default:return o=Nr(e,n,r[1],r[2],r[3],r[4],r[5],r[6]),[e,n]=r.slice(-2),o}}).reduce((r,s)=>r+s,0)},Ze=wr;var zr=t=>Ze(ce(t))>=0,zt=zr;var Rr=(t,e)=>Se(t,e).segment,Rt=Rr;var Vr=(t,e)=>Y(t,e).segment,Vt=Vr;var kr=t=>Array.isArray(t)&&t.every(e=>{let n=e[0].toLowerCase();return Z[n]===e.length-1&&"achlmqstvz".includes(n)&&e.slice(1).every(Number.isFinite)})&&t.length>0,ee=kr;var Qr=t=>ee(t)&&t.every(([e])=>e===e.toUpperCase()),Ge=Qr;var qr=t=>Ge(t)&&t.every(([e])=>"ACLMQZ".includes(e)),_e=qr;var Dr=t=>_e(t)&&t.every(([e])=>"MC".includes(e)),kt=Dr;var Er=(t,e)=>{let{distance:n}=Y(t,e);return Math.abs(n)<le},Qt=Er;var Or=t=>ee(t)&&t.slice(1).every(([e])=>e===e.toLowerCase()),qt=Or;var Ir=t=>{if(typeof t!="string"||!t.length)return!1;let e=new K(t);for(G(e);e.index<e.max&&!e.err.length;)Pe(e);return!e.err.length&&"mM".includes(e.segments[0][0])},Ue=Ir;var $r={line:["x1","y1","x2","y2"],circle:["cx","cy","r"],ellipse:["cx","cy","rx","ry"],rect:["width","height","x","y","rx","ry"],polygon:["points"],polyline:["points"],glyph:["d"]},te=$r;var jr=t=>t!=null&&typeof t=="object"&&t.nodeType===1,Fe=jr;var Br=t=>{let{x1:e,y1:n,x2:o,y2:r}=t;return[e,n,o,r]=[e,n,o,r].map(s=>+s),[["M",e,n],["L",o,r]]},Hr=t=>{let e=[],n=(t.points||"").trim().split(/[\s|,]/).map(r=>+r),o=0;for(;o<n.length;)e.push([o?"L":"M",n[o],n[o+1]]),o+=2;return t.type==="polygon"?[...e,["z"]]:e},Zr=t=>{let{cx:e,cy:n,r:o}=t;return[e,n,o]=[e,n,o].map(r=>+r),[["M",e-o,n],["a",o,o,0,1,0,2*o,0],["a",o,o,0,1,0,-2*o,0]]},Gr=t=>{let{cx:e,cy:n}=t,o=t.rx||0,r=t.ry||o;return[e,n,o,r]=[e,n,o,r].map(s=>+s),[["M",e-o,n],["a",o,r,0,1,0,2*o,0],["a",o,r,0,1,0,-2*o,0]]},_r=t=>{let e=+t.x||0,n=+t.y||0,o=+t.width,r=+t.height,s=+(t.rx||0),a=+(t.ry||s);if(s||a){s*2>o&&(s-=(s*2-o)/2);return a*2>r&&(a-=(a*2-r)/2),[["M",e+s,n],["h",o-s*2],["s",s,0,s,a],["v",r-a*2],["s",0,a,-s,a],["h",-o+s*2],["s",-s,0,-s,-a],["v",-r+a*2],["s",0,-a,s,-a]]}return[["M",e,n],["h",o],["v",r],["H",e],["Z"]]},Ur=t=>{let e=Object.keys(te),n=Fe(t),o=n?t.tagName:null;if(o&&[...e,"path"].every(m=>o!==m))throw TypeError(`${V}: "${o}" is not SVGElement`);let r=n?o:t.type,s=te[r],a={type:r};n?s.forEach(m=>{a[m]=t.getAttribute(m)}):Object.assign(a,t);let i=[];return r==="circle"?i=Zr(a):r==="ellipse"?i=Gr(a):["polyline","polygon"].includes(r)?i=Hr(a):r==="rect"?i=_r(a):r==="line"?i=Br(a):["glyph","path"].includes(r)&&(i=L(n?t.getAttribute("d")||"":t.d||"")),ee(i)&&i.length?i:!1},Ke=Ur;var Fr=(t,e,n)=>{let o=n||document,r=Object.keys(te),s=Fe(t),a=s?t.tagName:null;if(a==="path")throw TypeError(`${V}: "${a}" is already SVGPathElement`);if(a&&r.every(p=>a!==p))throw TypeError(`${V}: "${a}" is not SVGElement`);let i=o.createElementNS("http://www.w3.org/2000/svg","path"),m=s?a:t.type,u=te[m],c={type:m},l=I.round,f=Ke(t),g=f&&f.length?ve(f,l):"";return s?(u.forEach(p=>{c[p]=t.getAttribute(p)}),Object.values(t.attributes).forEach(({name:p,value:h})=>{u.includes(p)||i.setAttribute(p,h)})):(Object.assign(c,t),Object.keys(c).forEach(p=>{!u.includes(p)&&p!=="type"&&i.setAttribute(p.replace(/[A-Z]/g,h=>`-${h.toLowerCase()}`),c[p])})),Ue(g)?(i.setAttribute("d",g),e&&s&&(t.before(i,t),t.remove()),i):!1},Dt=Fr;var Kr=(t,e,n,o)=>{let[r]=t,{round:s}=I,a=typeof s=="number"?s:4,i=e.slice(1),{x1:m,y1:u,x2:c,y2:l,x:f,y:g}=n,[p,h]=i.slice(-2),P=t;if("TQ".includes(r)||(n.qx=null,n.qy=null),r==="L"){if(M(f,a)===M(p,a))return["V",h];if(M(g,a)===M(h,a))return["H",p]}else if(r==="C"){let[S,A]=i;if(n.x1=S,n.y1=A,"CS".includes(o)&&(M(S,a)===M(m*2-c,a)&&M(A,a)===M(u*2-l,a)||M(m,a)===M(c*2-f,a)&&M(u,a)===M(l*2-g,a)))return["S",i[2],i[3],i[4],i[5]]}else if(r==="Q"){let[S,A]=i;if(n.qx=S,n.qy=A,"QT".includes(o)&&M(S,a)===M(m*2-c,a)&&M(A,a)===M(u*2-l,a))return["T",i[2],i[3]]}return P},Je=Kr;var Jr=(t,e)=>{let n=t.slice(1).map(o=>M(o,e));return[t[0]].concat(n)},fe=Jr;var Wr=(t,e)=>{let n=ue(t),o=typeof e=="number"&&e>=0?e:2,r={...U},s=[],a="M",i="Z";return T(n,(m,u,c,l)=>{r.x=c,r.y=l;let f=X(m,r),g=m;if([a]=m,s[u]=a,u){i=s[u-1];let h=Je(m,f,r,i),P=fe(h,o),S=P.join(""),A=de(h,u,c,l),y=fe(A,o),b=y.join("");g=S.length<b.length?P:y}let p=f.length;return r.x1=+f[p-2],r.y1=+f[p-1],r.x2=+f[p-4]||r.x1,r.y2=+f[p-3]||r.y1,g})},ht=Wr;var Xr=t=>{let e=ue(t),n=W(e),o=e.length,r=e[o-1][0]==="Z",s=T(e,(a,i)=>{let m=n[i],u=i&&e[i-1],c=u&&u[0],l=e[i+1],f=l&&l[0],[g]=a,[p,h]=n[i?i-1:o-1].slice(-2),P=a;switch(g){case"M":P=r?["Z"]:[g,p,h];break;case"A":P=[g,a[1],a[2],a[3],a[4],a[5]===1?0:1,p,h];break;case"C":l&&f==="S"?P=["S",a[1],a[2],p,h]:P=[g,a[3],a[4],a[1],a[2],p,h];break;case"S":c&&"CS".includes(c)&&(!l||f!=="S")?P=["C",m[3],m[4],m[1],m[2],p,h]:P=[g,m[1],m[2],p,h];break;case"Q":l&&f==="T"?P=["T",p,h]:P=[g,a[1],a[2],p,h];break;case"T":c&&"QT".includes(c)&&(!l||f!=="T")?P=["Q",m[1],m[2],p,h]:P=[g,p,h];break;case"Z":P=["M",p,h];break;case"H":P=[g,p];break;case"V":P=[g,h];break;default:P=[g].concat(a.slice(1,-2),p,h)}return P});return r?s.reverse():[s[0]].concat(s.slice(1).reverse())},Ne=Xr;var Yr=t=>{let e=[],n,o=-1,r=0,s=0,a=0,i=0,m={...U};return t.forEach(u=>{let[c]=u,l=c.toUpperCase(),f=c.toLowerCase(),g=c===f,p=u.slice(1);l==="M"?(o+=1,[r,s]=p,r+=g?m.x:0,s+=g?m.y:0,a=r,i=s,n=[g?[l,a,i]:u]):(l==="Z"?(r=a,s=i):l==="H"?([,r]=u,r+=g?m.x:0):l==="V"?([,s]=u,s+=g?m.y:0):([r,s]=u.slice(-2),r+=g?m.x:0,s+=g?m.y:0),n.push(u)),m.x=r,m.y=s,e[o]=n}),e},bt=Yr;import en from"@thednp/dommatrix";var tn=t=>{let e=new en,{origin:n}=t,[o,r]=n,{translate:s}=t,{rotate:a}=t,{skew:i}=t,{scale:m}=t;return Array.isArray(s)&&s.length>=2&&s.every(u=>!Number.isNaN(+u))&&s.some(u=>u!==0)?e=e.translate(...s):typeof s=="number"&&!Number.isNaN(s)&&(e=e.translate(s)),(a||i||m)&&(e=e.translate(o,r),Array.isArray(a)&&a.length>=2&&a.every(u=>!Number.isNaN(+u))&&a.some(u=>u!==0)?e=e.rotate(...a):typeof a=="number"&&!Number.isNaN(a)&&(e=e.rotate(a)),Array.isArray(i)&&i.length===2&&i.every(u=>!Number.isNaN(+u))&&i.some(u=>u!==0)?(e=i[0]?e.skewX(i[0]):e,e=i[1]?e.skewY(i[1]):e):typeof i=="number"&&!Number.isNaN(i)&&(e=e.skewX(i)),Array.isArray(m)&&m.length>=2&&m.every(u=>!Number.isNaN(+u))&&m.some(u=>u!==1)?e=e.scale(...m):typeof m=="number"&&!Number.isNaN(m)&&(e=e.scale(m)),e=e.translate(-o,-r)),e},We=tn;import rn from"@thednp/dommatrix";var nn=(t,e)=>{let n=rn.Translate(e[0],e[1],e[2]);return[,,,n.m44]=e,n=t.multiply(n),[n.m41,n.m42,n.m43,n.m44]},on=(t,e,n)=>{let[o,r,s]=n,[a,i,m]=nn(t,[e[0],e[1],0,1]),u=a-o,c=i-r,l=m-s;return[u*(Math.abs(s)/Math.abs(l)||1)+o,c*(Math.abs(s)/Math.abs(l)||1)+r]},we=on;var an=(t,e)=>{let n=0,o=0,r=0,s=0,a=0,i=0,m="M",u=L(t),c=e&&Object.keys(e);if(!e||c&&!c.length)return u.slice(0);e.origin||Object.assign(e,{origin:I.origin});let l=e.origin,f=We(e);return f.isIdentity?u.slice(0):T(u,(g,p,h,P)=>{[m]=g;let S=m.toUpperCase(),y=S!==m?_(g,p,h,P):g.slice(0),b=S==="A"?["C"].concat(xe(h,P,y[1],y[2],y[3],y[4],y[5],y[6],y[7])):S==="V"?["L",h,y[1]]:S==="H"?["L",y[1],P]:y;m=b[0];let d=m==="C"&&b.length>7,C=d?b.slice(0,7):b.slice(0);if(d&&(u.splice(p+1,0,["C"].concat(b.slice(7))),b=C),m==="L"){[r,s]=we(f,[b[1],b[2]],l);n!==r&&o!==s?b=["L",r,s]:o===s?b=["H",r]:n===r&&(b=["V",s])}else for(a=1,i=b.length;a<i;a+=2)[r,s]=we(f,[+b[a],+b[a+1]],l),b[a]=r,b[a+1]=s;return n=r,o=s,b})},yt=an;var sn=t=>{let e=t.slice(1).map((n,o,r)=>o?r[o-1].slice(-2).concat(n.slice(1)):t[0].slice(1).concat(n.slice(1))).map(n=>n.map((o,r)=>n[n.length-r-2*(1-r%2)])).reverse();return[["M"].concat(e[0].slice(0,2))].concat(e.map(n=>["C"].concat(n.slice(2))))},Et=sn;var mn=(t,e)=>{let{round:n}=I;n=e==="off"||typeof e=="number"&&e>=0?e:typeof n=="number"&&n>=0?n:"off";return n==="off"?t.slice(0):T(t,o=>fe(o,n))},Ot=mn;var un=(t,e=.5)=>{let n=e,o=t.slice(0,2),r=t.slice(2,4),s=t.slice(4,6),a=t.slice(6,8),i=E(o,r,n),m=E(r,s,n),u=E(s,a,n),c=E(i,m,n),l=E(m,u,n),f=E(c,l,n);return[["C",i[0],i[1],c[0],c[1],f[0],f[1]],["C",l[0],l[1],u[0],u[1],a[0],a[1]]]},It=un;var Pt=class{constructor(e,n){let o=n||{},r=typeof e>"u";if(r||!e.length)throw TypeError(`${V}: "pathValue" is ${r?"undefined":"empty"}`);this.segments=L(e);let{round:s,origin:a}=o,i;Number.isInteger(s)||s==="off"?i=s:i=I.round;let m=I.origin;if(Array.isArray(a)&&a.length>=2){let[u,c,l]=a.map(Number);m=[Number.isNaN(u)?0:u,Number.isNaN(c)?0:c,Number.isNaN(l)?0:l]}return this.round=i,this.origin=m,this}get bbox(){return gt(this.segments)}get length(){return J(this.segments)}getBBox(){return this.bbox}getTotalLength(){return this.length}getPointAtLength(e){return pe(this.segments,e)}toAbsolute(){let{segments:e}=this;return this.segments=ue(e),this}toRelative(){let{segments:e}=this;return this.segments=ft(e),this}toCurve(){let{segments:e}=this;return this.segments=ce(e),this}reverse(e){let{segments:n}=this,o=bt(n),r=o.length>1?o:!1,s=r?r.map((i,m)=>e?m?Ne(i):i.slice(0):Ne(i)):n.slice(0),a=[];return r?a=s.flat(1):a=e?n:Ne(n),this.segments=a.slice(0),this}normalize(){let{segments:e}=this;return this.segments=W(e),this}optimize(){let{segments:e}=this,n=this.round==="off"?2:this.round;return this.segments=ht(e,n),this}transform(e){if(!e||typeof e!="object"||typeof e=="object"&&!["translate","rotate","skew","scale"].some(m=>m in e))return this;let{segments:n,origin:[o,r,s]}=this,a={};for(let[m,u]of Object.entries(e)){m==="skew"&&Array.isArray(u)||(m==="rotate"||m==="translate"||m==="origin"||m==="scale")&&Array.isArray(u)?a[m]=u.map(Number):m!=="origin"&&typeof Number(u)=="number"&&(a[m]=Number(u))}let{origin:i}=a;if(Array.isArray(i)&&i.length>=2){let[m,u,c]=i.map(Number);a.origin=[Number.isNaN(m)?o:m,Number.isNaN(u)?r:u,c||s]}else a.origin=[o,r,s];return this.segments=yt(n,a),this}flipX(){let{cx:e,cy:n}=this.bbox;return this.transform({rotate:[0,180,0],origin:[e,n,0]}),this}flipY(){let{cx:e,cy:n}=this.bbox;return this.transform({rotate:[180,0,0],origin:[e,n,0]}),this}toString(){return ve(this.segments,this.round)}dispose(){Object.keys(this).forEach(e=>delete this[e])}static get CSSMatrix(){return cn}static get arcTools(){return at}static get bezierTools(){return mt}static get cubicTools(){return ut}static get lineTools(){return et}static get polygonTools(){return pt}static get quadTools(){return lt}static get pathToAbsolute(){return ue}static get pathToRelative(){return ft}static get pathToCurve(){return ce}static get pathToString(){return ve}static get distanceSquareRoot(){return oe}static get midPoint(){return E}static get rotateVector(){return ie}static get roundTo(){return M}static get parsePathString(){return L}static get finalizeSegment(){return Me}static get invalidPathValue(){return H}static get isArcCommand(){return $e}static get isDigit(){return B}static get isDigitStart(){return Ie}static get isMoveCommand(){return je}static get isPathCommand(){return Oe}static get isSpace(){return Ee}static get paramsCount(){return Z}static get paramsParser(){return U}static get pathParser(){return K}static get scanFlag(){return qe}static get scanParam(){return De}static get scanSegment(){return Pe}static get skipSpaces(){return G}static get distanceEpsilon(){return le}static get getClosestPoint(){return wt}static get getDrawDirection(){return zt}static get getPathArea(){return Ze}static get getPathBBox(){return gt}static get getPointAtLength(){return pe}static get getPropertiesAtLength(){return Se}static get getPropertiesAtPoint(){return Y}static get getSegmentAtLength(){return Rt}static get getSegmentOfPoint(){return Vt}static get getTotalLength(){return J}static get isAbsoluteArray(){return Ge}static get isCurveArray(){return kt}static get isNormalizedArray(){return _e}static get isPathArray(){return ee}static get isPointInStroke(){return Qt}static get isRelativeArray(){return qt}static get isValidPath(){return Ue}static get shapeParams(){return te}static get shapeToPath(){return Dt}static get shapeToPathArray(){return Ke}static get absolutizeSegment(){return _}static get arcToCubic(){return xe}static get getSVGMatrix(){return We}static get iterate(){return T}static get lineToCubic(){return Le}static get normalizePath(){return W}static get normalizeSegment(){return X}static get optimizePath(){return ht}static get projection2d(){return we}static get quadToCubic(){return Be}static get relativizeSegment(){return de}static get reverseCurve(){return Et}static get reversePath(){return Ne}static get roundPath(){return Ot}static get roundSegment(){return fe}static get segmentToCubic(){return He}static get shortenSegment(){return Je}static get splitCubic(){return It}static get splitPath(){return bt}static get transformPath(){return yt}},li=Pt;export{cn as CSSMatrix,_ as absolutizeSegment,xe as arcToCubic,at as arcTools,mt as bezierTools,ut as cubicTools,li as default,le as distanceEpsilon,oe as distanceSquareRoot,Me as finalizeSegment,wt as getClosestPoint,zt as getDrawDirection,Ze as getPathArea,gt as getPathBBox,pe as getPointAtLength,Se as getPropertiesAtLength,Y as getPropertiesAtPoint,We as getSVGMatrix,Rt as getSegmentAtLength,Vt as getSegmentOfPoint,J as getTotalLength,H as invalidPathValue,Ge as isAbsoluteArray,$e as isArcCommand,kt as isCurveArray,B as isDigit,Ie as isDigitStart,je as isMoveCommand,_e as isNormalizedArray,ee as isPathArray,Oe as isPathCommand,Qt as isPointInStroke,qt as isRelativeArray,Ee as isSpace,Ue as isValidPath,T as iterate,Le as lineToCubic,et as lineTools,E as midPoint,W as normalizePath,X as normalizeSegment,ht as optimizePath,Z as paramsCount,U as paramsParser,L as parsePathString,K as pathParser,ue as pathToAbsolute,ce as pathToCurve,ft as pathToRelative,ve as pathToString,pt as polygonTools,we as projection2d,Be as quadToCubic,lt as quadTools,de as relativizeSegment,Et as reverseCurve,Ne as reversePath,ie as rotateVector,Ot as roundPath,fe as roundSegment,M as roundTo,qe as scanFlag,De as scanParam,Pe as scanSegment,He as segmentToCubic,te as shapeParams,Dt as shapeToPath,Ke as shapeToPathArray,Je as shortenSegment,G as skipSpaces,It as splitCubic,bt as splitPath,yt as transformPath};
//# sourceMappingURL=svg-path-commander.mjs.map