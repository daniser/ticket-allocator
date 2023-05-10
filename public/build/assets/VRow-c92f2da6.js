import{p as u,m as f,k as d,q as g,t as O,A as B,B as R,bE as i,bF as y,c as k,bG as V}from"./app-b5e3e16f.js";const _=u({fluid:{type:Boolean,default:!1},...f(),...d()},"v-container"),W=g()({name:"VContainer",props:_(),setup(e,s){let{slots:t}=s;const{rtlClasses:a}=O();return B(()=>R(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:e.style},t)),{}}}),N=(()=>i.reduce((e,s)=>(e[s]={type:[Boolean,String,Number],default:!1},e),{}))(),j=(()=>i.reduce((e,s)=>{const t="offset"+y(s);return e[t]={type:[String,Number],default:null},e},{}))(),L=(()=>i.reduce((e,s)=>{const t="order"+y(s);return e[t]={type:[String,Number],default:null},e},{}))(),S={col:Object.keys(N),offset:Object.keys(j),order:Object.keys(L)};function I(e,s,t){let a=e;if(!(t==null||t===!1)){if(s){const n=s.replace(e,"");a+=`-${n}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const T=["auto","start","end","center","baseline","stretch"],U=u({cols:{type:[Boolean,String,Number],default:!1},...N,offset:{type:[String,Number],default:null},...j,order:{type:[String,Number],default:null},...L,alignSelf:{type:String,default:null,validator:e=>T.includes(e)},...f(),...d()},"v-col"),Y=g()({name:"VCol",props:U(),setup(e,s){let{slots:t}=s;const a=k(()=>{const n=[];let l;for(l in S)S[l].forEach(o=>{const c=e[o],b=I(l,o,c);b&&n.push(b)});const r=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return V(e.tag,{class:[a.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}}),m=["start","end","center"],P=["space-between","space-around","space-evenly"];function C(e,s){return i.reduce((t,a)=>{const n=e+y(a);return t[n]=s(),t},{})}const F=[...m,"baseline","stretch"],$=e=>F.includes(e),h=C("align",()=>({type:String,default:null,validator:$})),M=[...m,...P],w=e=>M.includes(e),E=C("justify",()=>({type:String,default:null,validator:w})),K=[...m,...P,"stretch"],A=e=>K.includes(e),G=C("alignContent",()=>({type:String,default:null,validator:A})),v={align:Object.keys(h),justify:Object.keys(E),alignContent:Object.keys(G)},x={align:"align",justify:"justify",alignContent:"align-content"};function q(e,s,t){let a=x[e];if(t!=null){if(s){const n=s.replace(e,"");a+=`-${n}`}return a+=`-${t}`,a.toLowerCase()}}const z=u({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:$},...h,justify:{type:String,default:null,validator:w},...E,alignContent:{type:String,default:null,validator:A},...G,...f(),...d()},"v-row"),D=g()({name:"VRow",props:z(),setup(e,s){let{slots:t}=s;const a=k(()=>{const n=[];let l;for(l in v)v[l].forEach(r=>{const o=e[r],c=q(l,r,o);c&&n.push(c)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return V(e.tag,{class:["v-row",a.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}});export{W as V,D as a,Y as b};
//# sourceMappingURL=VRow-c92f2da6.js.map
