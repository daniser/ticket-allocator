import{g as L,bi as et,bR as tt,m as M,bK as nt,p as A,aM as oe,aX as ce,j as x,i as o,f as g,ba as de,s as _,r as O,w as q,a6 as at,bS as lt,y as it,a7 as ve,l as X,n as Le,N as ne,M as ae,x as le,v as pe,a3 as st,a4 as rt,I as R,T as fe,aR as me,be as ut,a as W,b as Y,aT as ge,c as Q,aW as Oe,U as ye,a$ as Se,bo as ot,E as ie,b1 as Te,q as J,h as Z,by as F,H as Ve,K as ct,bT as dt,X as I,aI as se,bk as we,aL as Me,aN as xe,aS as vt,aU as ft,b0 as mt,aV as Re,aY as ze,bU as gt,S as Fe,bb as yt,bl as T,Q as je,W as St,Y as ht,bD as bt}from"./app-5SwHAk2W.js";import{m as Ct,I as kt,M as U,b as It}from"./VGrid-5GAULJbo.js";function Ne(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return L()({name:t??et(tt(e.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...M()},setup(n,s){let{slots:a}=s;return()=>{var i;return nt(n.tag,{class:[e,n.class],style:n.style},(i=a.default)==null?void 0:i.call(a))}}})}function Vt(e){return{aspectStyles:g(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const De=A({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...M(),...oe()},"VResponsive"),Pe=L()({name:"VResponsive",props:De(),setup(e,l){let{slots:t}=l;const{aspectStyles:n}=Vt(e),{dimensionStyles:s}=ce(e);return x(()=>{var a;return o("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[o("div",{class:"v-responsive__sizer",style:n.value},null),(a=t.additional)==null?void 0:a.call(t),t.default&&o("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}}),wt=A({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...De(),...M(),...Ct()},"VImg"),Pt=L()({name:"VImg",directives:{intersect:kt},props:wt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:t,slots:n}=l;const s=de("VImg"),a=_(""),i=O(),r=_(e.eager?"loading":"idle"),b=_(),S=_(),f=g(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),u=g(()=>f.value.aspect||b.value/S.value||0);q(()=>e.src,()=>{c(r.value!=="idle")}),q(u,(m,y)=>{!m&&y&&i.value&&k(i.value)}),at(()=>c());function c(m){if(!(e.eager&&m)&&!(lt&&!m&&!e.eager)){if(r.value="loading",f.value.lazySrc){const y=new Image;y.src=f.value.lazySrc,k(y,null)}f.value.src&&it(()=>{var y;t("loadstart",((y=i.value)==null?void 0:y.currentSrc)||f.value.src),setTimeout(()=>{var V;if(!s.isUnmounted)if((V=i.value)!=null&&V.complete){if(i.value.naturalWidth||d(),r.value==="error")return;u.value||k(i.value,null),r.value==="loading"&&v()}else u.value||k(i.value),h()})})}}function v(){var m;s.isUnmounted||(h(),k(i.value),r.value="loaded",t("load",((m=i.value)==null?void 0:m.currentSrc)||f.value.src))}function d(){var m;s.isUnmounted||(r.value="error",t("error",((m=i.value)==null?void 0:m.currentSrc)||f.value.src))}function h(){const m=i.value;m&&(a.value=m.currentSrc||m.src)}let w=-1;ve(()=>{clearTimeout(w)});function k(m){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const V=()=>{if(clearTimeout(w),s.isUnmounted)return;const{naturalHeight:$,naturalWidth:H}=m;$||H?(b.value=H,S.value=$):!m.complete&&r.value==="loading"&&y!=null?w=window.setTimeout(V,y):(m.currentSrc.endsWith(".svg")||m.currentSrc.startsWith("data:image/svg+xml"))&&(b.value=1,S.value=1)};V()}const B=g(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),p=()=>{var V;if(!f.value.src||r.value==="idle")return null;const m=o("img",{class:["v-img__img",B.value],style:{objectPosition:e.position},src:f.value.src,srcset:f.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:i,onLoad:v,onError:d},null),y=(V=n.sources)==null?void 0:V.call(n);return o(U,{transition:e.transition,appear:!0},{default:()=>[X(y?o("picture",{class:"v-img__picture"},[y,m]):m,[[pe,r.value==="loaded"]])]})},j=()=>o(U,{transition:e.transition},{default:()=>[f.value.lazySrc&&r.value!=="loaded"&&o("img",{class:["v-img__img","v-img__img--preload",B.value],style:{objectPosition:e.position},src:f.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),N=()=>n.placeholder?o(U,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!n.error)&&o("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,D=()=>n.error?o(U,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&o("div",{class:"v-img__error"},[n.error()])]}):null,G=()=>e.gradient?o("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,z=_(!1);{const m=q(u,y=>{y&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{z.value=!0})}),m())})}return x(()=>{const m=Pe.filterProps(e);return X(o(Pe,ae({class:["v-img",{"v-img--booting":!z.value},e.class],style:[{width:le(e.width==="auto"?b.value:e.width)},e.style]},m,{aspectRatio:u.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>o(ne,null,[o(p,null,null),o(j,null,null),o(G,null,null),o(N,null,null),o(D,null,null)]),default:n.default}),[[Le("intersect"),{handler:c,options:e.options},null,{once:!0}]])}),{currentSrc:a,image:i,state:r,naturalWidth:b,naturalHeight:S}}});function _t(){const e=_(!1);return st(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:g(()=>e.value?void 0:{transition:"none !important"}),isBooted:rt(e)}}const At=A({start:Boolean,end:Boolean,icon:R,image:String,text:String,...M(),...fe(),...me(),...ut(),...W(),...Y(),...ge({variant:"flat"})},"VAvatar"),_e=L()({name:"VAvatar",props:At(),setup(e,l){let{slots:t}=l;const{themeClasses:n}=Q(e),{colorClasses:s,colorStyles:a,variantClasses:i}=Oe(e),{densityClasses:r}=ye(e),{roundedClasses:b}=Se(e),{sizeClasses:S,sizeStyles:f}=ot(e);return x(()=>o(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,s.value,r.value,b.value,S.value,i.value,e.class],style:[a.value,f.value,e.style]},{default:()=>{var u;return[e.image?o(Pt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?o(ie,{key:"icon",icon:e.icon},null):((u=t.default)==null?void 0:u.call(t))??e.text,Te(!1,"v-avatar")]}})),{}}}),re=Symbol.for("vuetify:list");function Ge(){const e=J(re,{hasPrepend:_(!1),updateHasPrepend:()=>null}),l={hasPrepend:_(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return Z(re,l),e}function Ue(){return J(re,null)}const Bt={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){const a=new Set;a.add(l);let i=s.get(l);for(;i!=null;)a.add(i),i=s.get(i);return a}else return n.delete(l),n},select:()=>null},Ee={open:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(t){let a=s.get(l);for(n.add(l);a!=null&&a!==l;)n.add(a),a=s.get(a);return n}else n.delete(l);return n},select:()=>null},Lt={open:Ee.open,select:e=>{let{id:l,value:t,opened:n,parents:s}=e;if(!t)return n;const a=[];let i=s.get(l);for(;i!=null;)a.push(i),i=s.get(i);return new Set(a)}},he=e=>{const l={select:t=>{let{id:n,value:s,selected:a}=t;if(n=F(n),e&&!s){const i=Array.from(a.entries()).reduce((r,b)=>{let[S,f]=b;return f==="on"?[...r,S]:r},[]);if(i.length===1&&i[0]===n)return a}return a.set(n,s?"on":"off"),a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:t=>{const n=[];for(const[s,a]of t.entries())a==="on"&&n.push(s);return n}};return l},We=e=>{const l=he(e);return{select:n=>{let{selected:s,id:a,...i}=n;a=F(a);const r=s.has(a)?new Map([[a,s.get(a)]]):new Map;return l.select({...i,id:a,selected:r})},in:(n,s,a)=>{let i=new Map;return n!=null&&n.length&&(i=l.in(n.slice(0,1),s,a)),i},out:(n,s,a)=>l.out(n,s,a)}},pt=e=>{const l=he(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=F(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},Ot=e=>{const l=We(e);return{select:n=>{let{id:s,selected:a,children:i,...r}=n;return s=F(s),i.has(s)?a:l.select({id:s,selected:a,children:i,...r})},in:l.in,out:l.out}},Tt=e=>{const l={select:t=>{let{id:n,value:s,selected:a,children:i,parents:r}=t;n=F(n);const b=new Map(a),S=[n];for(;S.length;){const u=S.shift();a.set(u,s?"on":"off"),i.has(u)&&S.push(...i.get(u))}let f=r.get(n);for(;f;){const u=i.get(f),c=u.every(d=>a.get(d)==="on"),v=u.every(d=>!a.has(d)||a.get(d)==="off");a.set(f,c?"on":v?"off":"indeterminate"),f=r.get(f)}return e&&!s&&Array.from(a.entries()).reduce((c,v)=>{let[d,h]=v;return h==="on"?[...c,d]:c},[]).length===0?b:a},in:(t,n,s)=>{let a=new Map;for(const i of t||[])a=l.select({id:i,value:!0,selected:new Map(a),children:n,parents:s});return a},out:(t,n)=>{const s=[];for(const[a,i]of t.entries())i==="on"&&!n.has(a)&&s.push(a);return s}};return l},E=Symbol.for("vuetify:nested"),$e={id:_(),root:{register:()=>null,unregister:()=>null,parents:O(new Map),children:O(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:O(new Set),selected:O(new Map),selectedValues:O([])}},Mt=A({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),xt=e=>{let l=!1;const t=O(new Map),n=O(new Map),s=Ve(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),a=g(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Ot(e.mandatory);case"leaf":return pt(e.mandatory);case"independent":return he(e.mandatory);case"single-independent":return We(e.mandatory);case"classic":default:return Tt(e.mandatory)}}),i=g(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Lt;case"single":return Bt;case"multiple":default:return Ee}}),r=Ve(e,"selected",e.selected,u=>a.value.in(u,t.value,n.value),u=>a.value.out(u,t.value,n.value));ve(()=>{l=!0});function b(u){const c=[];let v=u;for(;v!=null;)c.unshift(v),v=n.value.get(v);return c}const S=de("nested"),f={id:_(),root:{opened:s,selected:r,selectedValues:g(()=>{const u=[];for(const[c,v]of r.value.entries())v==="on"&&u.push(c);return u}),register:(u,c,v)=>{c&&u!==c&&n.value.set(u,c),v&&t.value.set(u,[]),c!=null&&t.value.set(c,[...t.value.get(c)||[],u])},unregister:u=>{if(l)return;t.value.delete(u);const c=n.value.get(u);if(c){const v=t.value.get(c)??[];t.value.set(c,v.filter(d=>d!==u))}n.value.delete(u),s.value.delete(u)},open:(u,c,v)=>{S.emit("click:open",{id:u,value:c,path:b(u),event:v});const d=i.value.open({id:u,value:c,opened:new Set(s.value),children:t.value,parents:n.value,event:v});d&&(s.value=d)},openOnSelect:(u,c,v)=>{const d=i.value.select({id:u,value:c,selected:new Map(r.value),opened:new Set(s.value),children:t.value,parents:n.value,event:v});d&&(s.value=d)},select:(u,c,v)=>{S.emit("click:select",{id:u,value:c,path:b(u),event:v});const d=a.value.select({id:u,value:c,selected:new Map(r.value),children:t.value,parents:n.value,event:v});d&&(r.value=d),f.root.openOnSelect(u,c,v)},children:t,parents:n}};return Z(E,f),f.root},He=(e,l)=>{const t=J(E,$e),n=Symbol(ct()),s=g(()=>e.value!==void 0?e.value:n),a={...t,id:s,open:(i,r)=>t.root.open(s.value,i,r),openOnSelect:(i,r)=>t.root.openOnSelect(s.value,i,r),isOpen:g(()=>t.root.opened.value.has(s.value)),parent:g(()=>t.root.parents.value.get(s.value)),select:(i,r)=>t.root.select(s.value,i,r),isSelected:g(()=>t.root.selected.value.get(F(s.value))==="on"),isIndeterminate:g(()=>t.root.selected.value.get(s.value)==="indeterminate"),isLeaf:g(()=>!t.root.children.value.get(s.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(s.value,t.id.value,l),ve(()=>{!t.isGroupActivator&&t.root.unregister(s.value)}),l&&Z(E,a),a},Rt=()=>{const e=J(E,$e);Z(E,{...e,isGroupActivator:!0})},zt=dt({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return Rt(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),Ft=A({activeColor:String,baseColor:String,color:String,collapseIcon:{type:R,default:"$collapse"},expandIcon:{type:R,default:"$expand"},prependIcon:R,appendIcon:R,fluid:Boolean,subgroup:Boolean,title:String,value:null,...M(),...W()},"VListGroup"),Ae=L()({name:"VListGroup",props:Ft(),setup(e,l){let{slots:t}=l;const{isOpen:n,open:s,id:a}=He(I(e,"value"),!0),i=g(()=>`v-list-group--id-${String(a.value)}`),r=Ue(),{isBooted:b}=_t();function S(v){s(!n.value,v)}const f=g(()=>({onClick:S,class:"v-list-group__header",id:i.value})),u=g(()=>n.value?e.collapseIcon:e.expandIcon),c=g(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&u.value,appendIcon:e.appendIcon||!e.subgroup&&u.value,title:e.title,value:e.value}}));return x(()=>o(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&o(se,{defaults:c.value},{default:()=>[o(zt,null,{default:()=>[t.activator({props:f.value,isOpen:n.value})]})]}),o(U,{transition:{component:It},disabled:!b.value},{default:()=>{var v;return[X(o("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(v=t.default)==null?void 0:v.call(t)]),[[pe,n.value]])]}})]})),{}}}),jt=Ne("v-list-item-subtitle"),Nt=Ne("v-list-item-title"),Dt=A({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:R,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:R,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:we(),onClickOnce:we(),...Me(),...M(),...fe(),...oe(),...xe(),...me(),...vt(),...W(),...Y(),...ge({variant:"text"})},"VListItem"),Be=L()({name:"VListItem",directives:{Ripple:ft},props:Dt(),emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:n,emit:s}=l;const a=mt(e,t),i=g(()=>e.value===void 0?a.href.value:e.value),{select:r,isSelected:b,isIndeterminate:S,isGroupActivator:f,root:u,parent:c,openOnSelect:v}=He(i,!1),d=Ue(),h=g(()=>{var C;return e.active!==!1&&(e.active||((C=a.isActive)==null?void 0:C.value)||b.value)}),w=g(()=>e.link!==!1&&a.isLink.value),k=g(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!d)),B=g(()=>e.rounded||e.nav),p=g(()=>e.color??e.activeColor),j=g(()=>({color:h.value?p.value??e.baseColor:e.baseColor,variant:e.variant}));q(()=>{var C;return(C=a.isActive)==null?void 0:C.value},C=>{C&&c.value!=null&&u.open(c.value,!0),C&&v(C)},{immediate:!0});const{themeClasses:N}=Q(e),{borderClasses:D}=Re(e),{colorClasses:G,colorStyles:z,variantClasses:m}=Oe(j),{densityClasses:y}=ye(e),{dimensionStyles:V}=ce(e),{elevationClasses:$}=ze(e),{roundedClasses:H}=Se(B),Ye=g(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),ee=g(()=>({isActive:h.value,select:r,isSelected:b.value,isIndeterminate:S.value}));function be(C){var K;s("click",C),!(f||!k.value)&&((K=a.navigate)==null||K.call(a,C),e.value!=null&&r(!b.value,C))}function Qe(C){(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),be(C))}return x(()=>{const C=w.value?"a":e.tag,K=n.title||e.title!=null,Je=n.subtitle||e.subtitle!=null,Ce=!!(e.appendAvatar||e.appendIcon),Ze=!!(Ce||n.append),ke=!!(e.prependAvatar||e.prependIcon),te=!!(ke||n.prepend);return d==null||d.updateHasPrepend(te),e.activeColor&&gt("active-color",["color","base-color"]),X(o(C,{class:["v-list-item",{"v-list-item--active":h.value,"v-list-item--disabled":e.disabled,"v-list-item--link":k.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!te&&(d==null?void 0:d.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&h.value},N.value,D.value,G.value,y.value,$.value,Ye.value,H.value,m.value,e.class],style:[z.value,V.value,e.style],href:a.href.value,tabindex:k.value?d?-2:0:void 0,onClick:be,onKeydown:k.value&&!w.value&&Qe},{default:()=>{var Ie;return[Te(k.value||h.value,"v-list-item"),te&&o("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?o(se,{key:"prepend-defaults",disabled:!ke,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var P;return[(P=n.prepend)==null?void 0:P.call(n,ee.value)]}}):o(ne,null,[e.prependAvatar&&o(_e,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&o(ie,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),o("div",{class:"v-list-item__spacer"},null)]),o("div",{class:"v-list-item__content","data-no-activator":""},[K&&o(Nt,{key:"title"},{default:()=>{var P;return[((P=n.title)==null?void 0:P.call(n,{title:e.title}))??e.title]}}),Je&&o(jt,{key:"subtitle"},{default:()=>{var P;return[((P=n.subtitle)==null?void 0:P.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(Ie=n.default)==null?void 0:Ie.call(n,ee.value)]),Ze&&o("div",{key:"append",class:"v-list-item__append"},[n.append?o(se,{key:"append-defaults",disabled:!Ce,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var P;return[(P=n.append)==null?void 0:P.call(n,ee.value)]}}):o(ne,null,[e.appendIcon&&o(ie,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&o(_e,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),o("div",{class:"v-list-item__spacer"},null)])]}}),[[Le("ripple"),k.value&&e.ripple]])}),{}}}),Gt=A({color:String,inset:Boolean,sticky:Boolean,title:String,...M(),...W()},"VListSubheader"),Ut=L()({name:"VListSubheader",props:Gt(),setup(e,l){let{slots:t}=l;const{textColorClasses:n,textColorStyles:s}=Fe(I(e,"color"));return x(()=>{const a=!!(t.default||e.title);return o(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:s},e.style]},{default:()=>{var i;return[a&&o("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),Et=A({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...M(),...Y()},"VDivider"),Wt=L()({name:"VDivider",props:Et(),setup(e,l){let{attrs:t}=l;const{themeClasses:n}=Q(e),{textColorClasses:s,textColorStyles:a}=Fe(I(e,"color")),i=g(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=le(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=le(e.thickness)),r});return x(()=>o("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,s.value,e.class],style:[i.value,a.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),$t=A({items:Array,returnObject:Boolean},"VListChildren"),Ke=L()({name:"VListChildren",props:$t(),setup(e,l){let{slots:t}=l;return Ge(),()=>{var n,s;return((n=t.default)==null?void 0:n.call(t))??((s=e.items)==null?void 0:s.map(a=>{var c,v;let{children:i,props:r,type:b,raw:S}=a;if(b==="divider")return((c=t.divider)==null?void 0:c.call(t,{props:r}))??o(Wt,r,null);if(b==="subheader")return((v=t.subheader)==null?void 0:v.call(t,{props:r}))??o(Ut,r,null);const f={subtitle:t.subtitle?d=>{var h;return(h=t.subtitle)==null?void 0:h.call(t,{...d,item:S})}:void 0,prepend:t.prepend?d=>{var h;return(h=t.prepend)==null?void 0:h.call(t,{...d,item:S})}:void 0,append:t.append?d=>{var h;return(h=t.append)==null?void 0:h.call(t,{...d,item:S})}:void 0,title:t.title?d=>{var h;return(h=t.title)==null?void 0:h.call(t,{...d,item:S})}:void 0},u=Ae.filterProps(r);return i?o(Ae,ae({value:r==null?void 0:r.value},u),{activator:d=>{let{props:h}=d;const w={...r,...h,value:e.returnObject?S:r.value};return t.header?t.header({props:w}):o(Be,w,f)},default:()=>o(Ke,{items:i},t)}):t.item?t.item({props:r}):o(Be,ae(r,{value:e.returnObject?S:r.value}),f)}))}}}),Ht=A({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:yt}},"list-items");function ue(e,l){const t=T(l,e.itemTitle,l),n=T(l,e.itemValue,t),s=T(l,e.itemChildren),a=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?je(l,["children"]):l:void 0:T(l,e.itemProps),i={title:t,value:n,...a};return{title:String(i.title??""),value:i.value,props:i,children:Array.isArray(s)?qe(e,s):void 0,raw:l}}function qe(e,l){const t=[];for(const n of l)t.push(ue(e,n));return t}function Zt(e){const l=g(()=>qe(e,e.items)),t=g(()=>l.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(i=>i!==null)),a.map(i=>e.returnObject&&typeof i=="string"?ue(e,i):l.value.find(r=>e.valueComparator(i,r.value))||ue(e,i))}function s(a){return e.returnObject?a.map(i=>{let{raw:r}=i;return r}):a.map(i=>{let{value:r}=i;return r})}return{items:l,transformIn:n,transformOut:s}}function Kt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function qt(e,l){const t=T(l,e.itemType,"item"),n=Kt(l)?l:T(l,e.itemTitle),s=T(l,e.itemValue,void 0),a=T(l,e.itemChildren),i=e.itemProps===!0?je(l,["children"]):T(l,e.itemProps),r={title:n,value:s,...i};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&a?Xe(e,a):void 0,raw:l}}function Xe(e,l){const t=[];for(const n of l)t.push(qt(e,n));return t}function Xt(e){return{items:g(()=>Xe(e,e.items))}}const Yt=A({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...Mt({selectStrategy:"single-leaf",openStrategy:"list"}),...Me(),...M(),...fe(),...oe(),...xe(),itemType:{type:String,default:"type"},...Ht(),...me(),...W(),...Y(),...ge({variant:"text"})},"VList"),en=L()({name:"VList",props:Yt(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:n}=Xt(e),{themeClasses:s}=Q(e),{backgroundColorClasses:a,backgroundColorStyles:i}=St(I(e,"bgColor")),{borderClasses:r}=Re(e),{densityClasses:b}=ye(e),{dimensionStyles:S}=ce(e),{elevationClasses:f}=ze(e),{roundedClasses:u}=Se(e),{open:c,select:v}=xt(e),d=g(()=>e.lines?`v-list--${e.lines}-line`:void 0),h=I(e,"activeColor"),w=I(e,"baseColor"),k=I(e,"color");Ge(),ht({VListGroup:{activeColor:h,baseColor:w,color:k},VListItem:{activeClass:I(e,"activeClass"),activeColor:h,baseColor:w,color:k,density:I(e,"density"),disabled:I(e,"disabled"),lines:I(e,"lines"),nav:I(e,"nav"),slim:I(e,"slim"),variant:I(e,"variant")}});const B=_(!1),p=O();function j(y){B.value=!0}function N(y){B.value=!1}function D(y){var V;!B.value&&!(y.relatedTarget&&((V=p.value)!=null&&V.contains(y.relatedTarget)))&&m()}function G(y){if(p.value){if(y.key==="ArrowDown")m("next");else if(y.key==="ArrowUp")m("prev");else if(y.key==="Home")m("first");else if(y.key==="End")m("last");else return;y.preventDefault()}}function z(y){B.value=!0}function m(y){if(p.value)return bt(p.value,y)}return x(()=>o(e.tag,{ref:p,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},s.value,a.value,r.value,b.value,f.value,d.value,u.value,e.class],style:[i.value,S.value,e.style],tabindex:e.disabled||B.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:j,onFocusout:N,onFocus:D,onKeydown:G,onMousedown:z},{default:()=>[o(Ke,{items:n.value,returnObject:e.returnObject},t)]})),{open:c,select:v,focus:m}}});function tn(){const l=de("useScopeId").vnode.scopeId;return{scopeId:l?{[l]:""}:void 0}}export{Wt as V,tn as a,_e as b,Ne as c,Pt as d,Zt as e,en as f,Be as g,Ht as m,_t as u};
//# sourceMappingURL=scopeId-q9kH4Qrg.js.map
