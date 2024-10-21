import{g as x,bf as st,bU as ut,m as D,bO as ct,p as B,aF as ye,aQ as Se,j as F,i as c,f as y,aK as ae,P as xe,Q as w,aU as ne,b5 as be,s as M,r as O,w as J,a0 as ot,bV as dt,y as vt,a1 as he,l as Z,n as De,F as de,D as ee,x as ve,v as Ne,Y as ft,Z as gt,aD as R,aE as Ce,N as ke,b9 as mt,a as E,b as le,aM as Ie,c as ie,aO as we,aP as ze,O as Ve,bp as yt,G as fe,E as te,aW as Fe,q as re,h as se,by as V,b2 as Re,z as oe,B as St,bW as bt,bi as K,aG as pe,aL as ht,aN as Ct,aV as kt,aR as Ee,bX as It,M as Ge,b6 as wt,bj as z,J as Ue,R as Vt,bF as Pt,bY as _t}from"./app-K_bGvi7W.js";import{m as At,I as Bt,M as H,a as Lt}from"./VGrid-DW4vTJSP.js";function Ot(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return x()({name:t??st(ut(e.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...D()},setup(a,i){let{slots:n}=i;return()=>{var r;return ct(a.tag,{class:[e,a.class],style:a.style},(r=n.default)==null?void 0:r.call(n))}}})}function Tt(e){return{aspectStyles:y(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const We=B({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...D(),...ye()},"VResponsive"),Oe=x()({name:"VResponsive",props:We(),setup(e,l){let{slots:t}=l;const{aspectStyles:a}=Tt(e),{dimensionStyles:i}=Se(e);return F(()=>{var n;return c("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[c("div",{class:"v-responsive__sizer",style:a.value},null),(n=t.additional)==null?void 0:n.call(t),t.default&&c("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}}),jt=B({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...We(),...D(),...ae(),...At()},"VImg"),Mt=x()({name:"VImg",directives:{intersect:Bt},props:jt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:t,slots:a}=l;const{backgroundColorClasses:i,backgroundColorStyles:n}=xe(w(e,"color")),{roundedClasses:r}=ne(e),u=be("VImg"),m=M(""),d=O(),v=M(e.eager?"loading":"idle"),S=M(),k=M(),f=y(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),s=y(()=>f.value.aspect||S.value/k.value||0);J(()=>e.src,()=>{o(v.value!=="idle")}),J(s,(g,h)=>{!g&&h&&d.value&&T(d.value)}),ot(()=>o());function o(g){if(!(e.eager&&g)&&!(dt&&!g&&!e.eager)){if(v.value="loading",f.value.lazySrc){const h=new Image;h.src=f.value.lazySrc,T(h,null)}f.value.src&&vt(()=>{var h;t("loadstart",((h=d.value)==null?void 0:h.currentSrc)||f.value.src),setTimeout(()=>{var A;if(!u.isUnmounted)if((A=d.value)!=null&&A.complete){if(d.value.naturalWidth||I(),v.value==="error")return;s.value||T(d.value,null),v.value==="loading"&&b()}else s.value||T(d.value),P()})})}}function b(){var g;u.isUnmounted||(P(),T(d.value),v.value="loaded",t("load",((g=d.value)==null?void 0:g.currentSrc)||f.value.src))}function I(){var g;u.isUnmounted||(v.value="error",t("error",((g=d.value)==null?void 0:g.currentSrc)||f.value.src))}function P(){const g=d.value;g&&(m.value=g.currentSrc||g.src)}let L=-1;he(()=>{clearTimeout(L)});function T(g){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const A=()=>{if(clearTimeout(L),u.isUnmounted)return;const{naturalHeight:Q,naturalWidth:X}=g;Q||X?(S.value=X,k.value=Q):!g.complete&&v.value==="loading"&&h!=null?L=window.setTimeout(A,h):(g.currentSrc.endsWith(".svg")||g.currentSrc.startsWith("data:image/svg+xml"))&&(S.value=1,k.value=1)};A()}const _=y(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),N=()=>{var A;if(!f.value.src||v.value==="idle")return null;const g=c("img",{class:["v-img__img",_.value],style:{objectPosition:e.position},src:f.value.src,srcset:f.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:d,onLoad:b,onError:I},null),h=(A=a.sources)==null?void 0:A.call(a);return c(H,{transition:e.transition,appear:!0},{default:()=>[Z(h?c("picture",{class:"v-img__picture"},[h,g]):g,[[Ne,v.value==="loaded"]])]})},G=()=>c(H,{transition:e.transition},{default:()=>[f.value.lazySrc&&v.value!=="loaded"&&c("img",{class:["v-img__img","v-img__img--preload",_.value],style:{objectPosition:e.position},src:f.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),U=()=>a.placeholder?c(H,{transition:e.transition,appear:!0},{default:()=>[(v.value==="loading"||v.value==="error"&&!a.error)&&c("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,W=()=>a.error?c(H,{transition:e.transition,appear:!0},{default:()=>[v.value==="error"&&c("div",{class:"v-img__error"},[a.error()])]}):null,$=()=>e.gradient?c("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,p=M(!1);{const g=J(s,h=>{h&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{p.value=!0})}),g())})}return F(()=>{const g=Oe.filterProps(e);return Z(c(Oe,ee({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!p.value},i.value,r.value,e.class],style:[{width:ve(e.width==="auto"?S.value:e.width)},n.value,e.style]},g,{aspectRatio:s.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>c(de,null,[c(N,null,null),c(G,null,null),c($,null,null),c(U,null,null),c(W,null,null)]),default:a.default}),[[De("intersect"),{handler:o,options:e.options},null,{once:!0}]])}),{currentSrc:m,image:d,state:v,naturalWidth:S,naturalHeight:k}}});function xt(){const e=M(!1);return ft(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:y(()=>e.value?void 0:{transition:"none !important"}),isBooted:gt(e)}}const Dt=B({start:Boolean,end:Boolean,icon:R,image:String,text:String,...Ce(),...D(),...ke(),...ae(),...mt(),...E(),...le(),...Ie({variant:"flat"})},"VAvatar"),Te=x()({name:"VAvatar",props:Dt(),setup(e,l){let{slots:t}=l;const{themeClasses:a}=ie(e),{borderClasses:i}=we(e),{colorClasses:n,colorStyles:r,variantClasses:u}=ze(e),{densityClasses:m}=Ve(e),{roundedClasses:d}=ne(e),{sizeClasses:v,sizeStyles:S}=yt(e);return F(()=>c(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,i.value,n.value,m.value,d.value,v.value,u.value,e.class],style:[r.value,S.value,e.style]},{default:()=>[t.default?c(te,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?c(Mt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?c(fe,{key:"icon",icon:e.icon},null):e.text,Fe(!1,"v-avatar")]})),{}}}),ge=Symbol.for("vuetify:list");function $e(){const e=re(ge,{hasPrepend:M(!1),updateHasPrepend:()=>null}),l={hasPrepend:M(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return se(ge,l),e}function He(){return re(ge,null)}const Pe=e=>{const l={activate:t=>{let{id:a,value:i,activated:n}=t;return a=V(a),e&&!i&&n.size===1&&n.has(a)||(i?n.add(a):n.delete(a)),n},in:(t,a,i)=>{let n=new Set;if(t!=null)for(const r of Re(t))n=l.activate({id:r,value:!0,activated:new Set(n),children:a,parents:i});return n},out:t=>Array.from(t)};return l},Ke=e=>{const l=Pe(e);return{activate:a=>{let{activated:i,id:n,...r}=a;n=V(n);const u=i.has(n)?new Set([n]):new Set;return l.activate({...r,id:n,activated:u})},in:(a,i,n)=>{let r=new Set;if(a!=null){const u=Re(a);u.length&&(r=l.in(u.slice(0,1),i,n))}return r},out:(a,i,n)=>l.out(a,i,n)}},Nt=e=>{const l=Pe(e);return{activate:a=>{let{id:i,activated:n,children:r,...u}=a;return i=V(i),r.has(i)?n:l.activate({id:i,activated:n,children:r,...u})},in:l.in,out:l.out}},zt=e=>{const l=Ke(e);return{activate:a=>{let{id:i,activated:n,children:r,...u}=a;return i=V(i),r.has(i)?n:l.activate({id:i,activated:n,children:r,...u})},in:l.in,out:l.out}},Ft={open:e=>{let{id:l,value:t,opened:a,parents:i}=e;if(t){const n=new Set;n.add(l);let r=i.get(l);for(;r!=null;)n.add(r),r=i.get(r);return n}else return a.delete(l),a},select:()=>null},qe={open:e=>{let{id:l,value:t,opened:a,parents:i}=e;if(t){let n=i.get(l);for(a.add(l);n!=null&&n!==l;)a.add(n),n=i.get(n);return a}else a.delete(l);return a},select:()=>null},Rt={open:qe.open,select:e=>{let{id:l,value:t,opened:a,parents:i}=e;if(!t)return a;const n=[];let r=i.get(l);for(;r!=null;)n.push(r),r=i.get(r);return new Set(n)}},_e=e=>{const l={select:t=>{let{id:a,value:i,selected:n}=t;if(a=V(a),e&&!i){const r=Array.from(n.entries()).reduce((u,m)=>{let[d,v]=m;return v==="on"&&u.push(d),u},[]);if(r.length===1&&r[0]===a)return n}return n.set(a,i?"on":"off"),n},in:(t,a,i)=>{let n=new Map;for(const r of t||[])n=l.select({id:r,value:!0,selected:new Map(n),children:a,parents:i});return n},out:t=>{const a=[];for(const[i,n]of t.entries())n==="on"&&a.push(i);return a}};return l},Qe=e=>{const l=_e(e);return{select:a=>{let{selected:i,id:n,...r}=a;n=V(n);const u=i.has(n)?new Map([[n,i.get(n)]]):new Map;return l.select({...r,id:n,selected:u})},in:(a,i,n)=>{let r=new Map;return a!=null&&a.length&&(r=l.in(a.slice(0,1),i,n)),r},out:(a,i,n)=>l.out(a,i,n)}},pt=e=>{const l=_e(e);return{select:a=>{let{id:i,selected:n,children:r,...u}=a;return i=V(i),r.has(i)?n:l.select({id:i,selected:n,children:r,...u})},in:l.in,out:l.out}},Et=e=>{const l=Qe(e);return{select:a=>{let{id:i,selected:n,children:r,...u}=a;return i=V(i),r.has(i)?n:l.select({id:i,selected:n,children:r,...u})},in:l.in,out:l.out}},Gt=e=>{const l={select:t=>{let{id:a,value:i,selected:n,children:r,parents:u}=t;a=V(a);const m=new Map(n),d=[a];for(;d.length;){const S=d.shift();n.set(V(S),i?"on":"off"),r.has(S)&&d.push(...r.get(S))}let v=V(u.get(a));for(;v;){const S=r.get(v),k=S.every(s=>n.get(V(s))==="on"),f=S.every(s=>!n.has(V(s))||n.get(V(s))==="off");n.set(v,k?"on":f?"off":"indeterminate"),v=V(u.get(v))}return e&&!i&&Array.from(n.entries()).reduce((k,f)=>{let[s,o]=f;return o==="on"&&k.push(s),k},[]).length===0?m:n},in:(t,a,i)=>{let n=new Map;for(const r of t||[])n=l.select({id:r,value:!0,selected:new Map(n),children:a,parents:i});return n},out:(t,a)=>{const i=[];for(const[n,r]of t.entries())r==="on"&&!a.has(n)&&i.push(n);return i}};return l},q=Symbol.for("vuetify:nested"),Xe={id:M(),root:{register:()=>null,unregister:()=>null,parents:O(new Map),children:O(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:O(!1),selectable:O(!1),opened:O(new Set),activated:O(new Set),selected:O(new Map),selectedValues:O([]),getPath:()=>[]}},Ut=B({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),Wt=e=>{let l=!1;const t=O(new Map),a=O(new Map),i=oe(e,"opened",e.opened,s=>new Set(s),s=>[...s.values()]),n=y(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return Nt(e.mandatory);case"single-leaf":return zt(e.mandatory);case"independent":return Pe(e.mandatory);case"single-independent":default:return Ke(e.mandatory)}}),r=y(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return Et(e.mandatory);case"leaf":return pt(e.mandatory);case"independent":return _e(e.mandatory);case"single-independent":return Qe(e.mandatory);case"classic":default:return Gt(e.mandatory)}}),u=y(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Rt;case"single":return Ft;case"multiple":default:return qe}}),m=oe(e,"activated",e.activated,s=>n.value.in(s,t.value,a.value),s=>n.value.out(s,t.value,a.value)),d=oe(e,"selected",e.selected,s=>r.value.in(s,t.value,a.value),s=>r.value.out(s,t.value,a.value));he(()=>{l=!0});function v(s){const o=[];let b=s;for(;b!=null;)o.unshift(b),b=a.value.get(b);return o}const S=be("nested"),k=new Set,f={id:M(),root:{opened:i,activatable:w(e,"activatable"),selectable:w(e,"selectable"),activated:m,selected:d,selectedValues:y(()=>{const s=[];for(const[o,b]of d.value.entries())b==="on"&&s.push(o);return s}),register:(s,o,b)=>{if(k.has(s)){v(s).map(String).join(" -> "),v(o).concat(s).map(String).join(" -> ");return}else k.add(s);o&&s!==o&&a.value.set(s,o),b&&t.value.set(s,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],s])},unregister:s=>{if(l)return;k.delete(s),t.value.delete(s);const o=a.value.get(s);if(o){const b=t.value.get(o)??[];t.value.set(o,b.filter(I=>I!==s))}a.value.delete(s)},open:(s,o,b)=>{S.emit("click:open",{id:s,value:o,path:v(s),event:b});const I=u.value.open({id:s,value:o,opened:new Set(i.value),children:t.value,parents:a.value,event:b});I&&(i.value=I)},openOnSelect:(s,o,b)=>{const I=u.value.select({id:s,value:o,selected:new Map(d.value),opened:new Set(i.value),children:t.value,parents:a.value,event:b});I&&(i.value=I)},select:(s,o,b)=>{S.emit("click:select",{id:s,value:o,path:v(s),event:b});const I=r.value.select({id:s,value:o,selected:new Map(d.value),children:t.value,parents:a.value,event:b});I&&(d.value=I),f.root.openOnSelect(s,o,b)},activate:(s,o,b)=>{if(!e.activatable)return f.root.select(s,!0,b);S.emit("click:activate",{id:s,value:o,path:v(s),event:b});const I=n.value.activate({id:s,value:o,activated:new Set(m.value),children:t.value,parents:a.value,event:b});I&&(m.value=I)},children:t,parents:a,getPath:v}};return se(q,f),f.root},Ye=(e,l)=>{const t=re(q,Xe),a=Symbol(St()),i=y(()=>e.value!==void 0?e.value:a),n={...t,id:i,open:(r,u)=>t.root.open(i.value,r,u),openOnSelect:(r,u)=>t.root.openOnSelect(i.value,r,u),isOpen:y(()=>t.root.opened.value.has(i.value)),parent:y(()=>t.root.parents.value.get(i.value)),activate:(r,u)=>t.root.activate(i.value,r,u),isActivated:y(()=>t.root.activated.value.has(V(i.value))),select:(r,u)=>t.root.select(i.value,r,u),isSelected:y(()=>t.root.selected.value.get(V(i.value))==="on"),isIndeterminate:y(()=>t.root.selected.value.get(i.value)==="indeterminate"),isLeaf:y(()=>!t.root.children.value.get(i.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(i.value,t.id.value,l),he(()=>{!t.isGroupActivator&&t.root.unregister(i.value)}),l&&se(q,n),n},$t=()=>{const e=re(q,Xe);se(q,{...e,isGroupActivator:!0})},Ht=bt({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return $t(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),Kt=B({activeColor:String,baseColor:String,color:String,collapseIcon:{type:R,default:"$collapse"},expandIcon:{type:R,default:"$expand"},prependIcon:R,appendIcon:R,fluid:Boolean,subgroup:Boolean,title:String,value:null,...D(),...E()},"VListGroup"),je=x()({name:"VListGroup",props:Kt(),setup(e,l){let{slots:t}=l;const{isOpen:a,open:i,id:n}=Ye(w(e,"value"),!0),r=y(()=>`v-list-group--id-${String(n.value)}`),u=He(),{isBooted:m}=xt();function d(f){f.stopPropagation(),i(!a.value,f)}const v=y(()=>({onClick:d,class:"v-list-group__header",id:r.value})),S=y(()=>a.value?e.collapseIcon:e.expandIcon),k=y(()=>({VListItem:{active:a.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&S.value,appendIcon:e.appendIcon||!e.subgroup&&S.value,title:e.title,value:e.value}}));return F(()=>c(e.tag,{class:["v-list-group",{"v-list-group--prepend":u==null?void 0:u.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value},e.class],style:e.style},{default:()=>[t.activator&&c(te,{defaults:k.value},{default:()=>[c(Ht,null,{default:()=>[t.activator({props:v.value,isOpen:a.value})]})]}),c(H,{transition:{component:Lt},disabled:!m.value},{default:()=>{var f;return[Z(c("div",{class:"v-list-group__items",role:"group","aria-labelledby":r.value},[(f=t.default)==null?void 0:f.call(t)]),[[Ne,a.value]])]}})]})),{isOpen:a}}}),qt=B({opacity:[Number,String],...D(),...E()},"VListItemSubtitle"),Qt=x()({name:"VListItemSubtitle",props:qt(),setup(e,l){let{slots:t}=l;return F(()=>c(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Xt=Ot("v-list-item-title"),Yt=B({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:R,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:R,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:K(),onClickOnce:K(),...Ce(),...D(),...ke(),...ye(),...pe(),...ae(),...ht(),...E(),...le(),...Ie({variant:"text"})},"VListItem"),Me=x()({name:"VListItem",directives:{Ripple:Ct},props:Yt(),emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:a,emit:i}=l;const n=kt(e,t),r=y(()=>e.value===void 0?n.href.value:e.value),{activate:u,isActivated:m,select:d,isOpen:v,isSelected:S,isIndeterminate:k,isGroupActivator:f,root:s,parent:o,openOnSelect:b,id:I}=Ye(r,!1),P=He(),L=y(()=>{var C;return e.active!==!1&&(e.active||((C=n.isActive)==null?void 0:C.value)||(s.activatable.value?m.value:S.value))}),T=y(()=>e.link!==!1&&n.isLink.value),_=y(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||!!P&&(s.selectable.value||s.activatable.value||e.value!=null))),N=y(()=>e.rounded||e.nav),G=y(()=>e.color??e.activeColor),U=y(()=>({color:L.value?G.value??e.baseColor:e.baseColor,variant:e.variant}));J(()=>{var C;return(C=n.isActive)==null?void 0:C.value},C=>{C&&o.value!=null&&s.open(o.value,!0),C&&b(C)},{immediate:!0});const{themeClasses:W}=ie(e),{borderClasses:$}=we(e),{colorClasses:p,colorStyles:g,variantClasses:h}=ze(U),{densityClasses:A}=Ve(e),{dimensionStyles:Q}=Se(e),{elevationClasses:X}=Ee(e),{roundedClasses:tt}=ne(N),at=y(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),ue=y(()=>({isActive:L.value,select:d,isOpen:v.value,isSelected:S.value,isIndeterminate:k.value}));function nt(C){var Y;i("click",C),_.value&&((Y=n.navigate)==null||Y.call(n,C),!f&&(s.activatable.value?u(!m.value,C):(s.selectable.value||e.value!=null)&&d(!S.value,C)))}function lt(C){(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),C.target.dispatchEvent(new MouseEvent("click",C)))}return F(()=>{const C=T.value?"a":e.tag,Y=a.title||e.title!=null,it=a.subtitle||e.subtitle!=null,Ae=!!(e.appendAvatar||e.appendIcon),rt=!!(Ae||a.append),Be=!!(e.prependAvatar||e.prependIcon),ce=!!(Be||a.prepend);return P==null||P.updateHasPrepend(ce),e.activeColor&&It("active-color",["color","base-color"]),Z(c(C,ee({class:["v-list-item",{"v-list-item--active":L.value,"v-list-item--disabled":e.disabled,"v-list-item--link":_.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!ce&&(P==null?void 0:P.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&L.value},W.value,$.value,p.value,A.value,X.value,at.value,tt.value,h.value,e.class],style:[g.value,Q.value,e.style],tabindex:_.value?P?-2:0:void 0,"aria-selected":s.activatable.value?m.value:S.value,onClick:nt,onKeydown:_.value&&!T.value&&lt},n.linkProps),{default:()=>{var Le;return[Fe(_.value||L.value,"v-list-item"),ce&&c("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?c(te,{key:"prepend-defaults",disabled:!Be,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var j;return[(j=a.prepend)==null?void 0:j.call(a,ue.value)]}}):c(de,null,[e.prependAvatar&&c(Te,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&c(fe,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),c("div",{class:"v-list-item__spacer"},null)]),c("div",{class:"v-list-item__content","data-no-activator":""},[Y&&c(Xt,{key:"title"},{default:()=>{var j;return[((j=a.title)==null?void 0:j.call(a,{title:e.title}))??e.title]}}),it&&c(Qt,{key:"subtitle"},{default:()=>{var j;return[((j=a.subtitle)==null?void 0:j.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),(Le=a.default)==null?void 0:Le.call(a,ue.value)]),rt&&c("div",{key:"append",class:"v-list-item__append"},[a.append?c(te,{key:"append-defaults",disabled:!Ae,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var j;return[(j=a.append)==null?void 0:j.call(a,ue.value)]}}):c(de,null,[e.appendIcon&&c(fe,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&c(Te,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),c("div",{class:"v-list-item__spacer"},null)])]}}),[[De("ripple"),_.value&&e.ripple]])}),{activate:u,isActivated:m,isGroupActivator:f,isSelected:S,list:P,select:d,root:s,id:I}}}),Jt=B({color:String,inset:Boolean,sticky:Boolean,title:String,...D(),...E()},"VListSubheader"),Zt=x()({name:"VListSubheader",props:Jt(),setup(e,l){let{slots:t}=l;const{textColorClasses:a,textColorStyles:i}=Ge(w(e,"color"));return F(()=>{const n=!!(t.default||e.title);return c(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value,e.class],style:[{textColorStyles:i},e.style]},{default:()=>{var r;return[n&&c("div",{class:"v-list-subheader__text"},[((r=t.default)==null?void 0:r.call(t))??e.title])]}})}),{}}}),ea=B({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...D(),...le()},"VDivider"),ta=x()({name:"VDivider",props:ea(),setup(e,l){let{attrs:t,slots:a}=l;const{themeClasses:i}=ie(e),{textColorClasses:n,textColorStyles:r}=Ge(w(e,"color")),u=y(()=>{const m={};return e.length&&(m[e.vertical?"height":"width"]=ve(e.length)),e.thickness&&(m[e.vertical?"borderRightWidth":"borderTopWidth"]=ve(e.thickness)),m});return F(()=>{const m=c("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},i.value,n.value,e.class],style:[u.value,r.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null);return a.default?c("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[m,c("div",{class:"v-divider__content"},[a.default()]),m]):m}),{}}}),aa=B({items:Array,returnObject:Boolean},"VListChildren"),Je=x()({name:"VListChildren",props:aa(),setup(e,l){let{slots:t}=l;return $e(),()=>{var a,i;return((a=t.default)==null?void 0:a.call(t))??((i=e.items)==null?void 0:i.map(n=>{var k,f;let{children:r,props:u,type:m,raw:d}=n;if(m==="divider")return((k=t.divider)==null?void 0:k.call(t,{props:u}))??c(ta,u,null);if(m==="subheader")return((f=t.subheader)==null?void 0:f.call(t,{props:u}))??c(Zt,u,null);const v={subtitle:t.subtitle?s=>{var o;return(o=t.subtitle)==null?void 0:o.call(t,{...s,item:d})}:void 0,prepend:t.prepend?s=>{var o;return(o=t.prepend)==null?void 0:o.call(t,{...s,item:d})}:void 0,append:t.append?s=>{var o;return(o=t.append)==null?void 0:o.call(t,{...s,item:d})}:void 0,title:t.title?s=>{var o;return(o=t.title)==null?void 0:o.call(t,{...s,item:d})}:void 0},S=je.filterProps(u);return r?c(je,ee({value:u==null?void 0:u.value},S),{activator:s=>{let{props:o}=s;const b={...u,...o,value:e.returnObject?d:u.value};return t.header?t.header({props:b}):c(Me,b,v)},default:()=>c(Je,{items:r,returnObject:e.returnObject},t)}):t.item?t.item({props:u}):c(Me,ee(u,{value:e.returnObject?d:u.value}),v)}))}}}),na=B({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:wt}},"list-items");function me(e,l){const t=z(l,e.itemTitle,l),a=z(l,e.itemValue,t),i=z(l,e.itemChildren),n=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?Ue(l,["children"]):l:void 0:z(l,e.itemProps),r={title:t,value:a,...n};return{title:String(r.title??""),value:r.value,props:r,children:Array.isArray(i)?Ze(e,i):void 0,raw:l}}function Ze(e,l){const t=[];for(const a of l)t.push(me(e,a));return t}function oa(e){const l=y(()=>Ze(e,e.items)),t=y(()=>l.value.some(n=>n.value===null));function a(n){return t.value||(n=n.filter(r=>r!==null)),n.map(r=>e.returnObject&&typeof r=="string"?me(e,r):l.value.find(u=>e.valueComparator(r,u.value))||me(e,r))}function i(n){return e.returnObject?n.map(r=>{let{raw:u}=r;return u}):n.map(r=>{let{value:u}=r;return u})}return{items:l,transformIn:a,transformOut:i}}function la(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function ia(e,l){const t=z(l,e.itemType,"item"),a=la(l)?l:z(l,e.itemTitle),i=z(l,e.itemValue,void 0),n=z(l,e.itemChildren),r=e.itemProps===!0?Ue(l,["children"]):z(l,e.itemProps),u={title:a,value:i,...r};return{type:t,title:u.title,value:u.value,props:u,children:t==="item"&&n?et(e,n):void 0,raw:l}}function et(e,l){const t=[];for(const a of l)t.push(ia(e,a));return t}function ra(e){return{items:y(()=>et(e,e.items))}}const sa=B({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":K(),"onClick:select":K(),"onUpdate:opened":K(),...Ut({selectStrategy:"single-leaf",openStrategy:"list"}),...Ce(),...D(),...ke(),...ye(),...pe(),itemType:{type:String,default:"type"},...na(),...ae(),...E(),...le(),...Ie({variant:"text"})},"VList"),da=x()({name:"VList",props:sa(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:a}=ra(e),{themeClasses:i}=ie(e),{backgroundColorClasses:n,backgroundColorStyles:r}=xe(w(e,"bgColor")),{borderClasses:u}=we(e),{densityClasses:m}=Ve(e),{dimensionStyles:d}=Se(e),{elevationClasses:v}=Ee(e),{roundedClasses:S}=ne(e),{children:k,open:f,parents:s,select:o,getPath:b}=Wt(e),I=y(()=>e.lines?`v-list--${e.lines}-line`:void 0),P=w(e,"activeColor"),L=w(e,"baseColor"),T=w(e,"color");$e(),Vt({VListGroup:{activeColor:P,baseColor:L,color:T,expandIcon:w(e,"expandIcon"),collapseIcon:w(e,"collapseIcon")},VListItem:{activeClass:w(e,"activeClass"),activeColor:P,baseColor:L,color:T,density:w(e,"density"),disabled:w(e,"disabled"),lines:w(e,"lines"),nav:w(e,"nav"),slim:w(e,"slim"),variant:w(e,"variant")}});const _=M(!1),N=O();function G(h){_.value=!0}function U(h){_.value=!1}function W(h){var A;!_.value&&!(h.relatedTarget&&((A=N.value)!=null&&A.contains(h.relatedTarget)))&&g()}function $(h){const A=h.target;if(!(!N.value||["INPUT","TEXTAREA"].includes(A.tagName))){if(h.key==="ArrowDown")g("next");else if(h.key==="ArrowUp")g("prev");else if(h.key==="Home")g("first");else if(h.key==="End")g("last");else return;h.preventDefault()}}function p(h){_.value=!0}function g(h){if(N.value)return Pt(N.value,h)}return F(()=>c(e.tag,{ref:N,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},i.value,n.value,u.value,m.value,v.value,I.value,S.value,e.class],style:[r.value,d.value,e.style],tabindex:e.disabled||_.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:G,onFocusout:U,onFocus:W,onKeydown:$,onMousedown:p},{default:()=>[c(Je,{items:a.value,returnObject:e.returnObject},t)]})),{open:f,select:o,focus:g,children:k,parents:s,getPath:b}}}),va=B({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function fa(e,l){let t=()=>{};function a(r){t==null||t();const u=Number(r?e.openDelay:e.closeDelay);return new Promise(m=>{t=_t(u,()=>{l==null||l(r),m(r)})})}function i(){return a(!0)}function n(){return a(!1)}return{clearDelay:t,runOpenDelay:i,runCloseDelay:n}}function ga(){const l=be("useScopeId").vnode.scopeId;return{scopeId:l?{[l]:""}:void 0}}export{ta as V,ga as a,Te as b,Ot as c,Mt as d,oa as e,da as f,Me as g,fa as h,na as i,va as m,xt as u};
//# sourceMappingURL=scopeId-Bz0ghrbO.js.map
