var Te=Object.defineProperty;var Le=(e,n,t)=>n in e?Te(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var f=(e,n,t)=>Le(e,typeof n!="symbol"?n+"":n,t);import{V as Re}from"./VGrid-Bl4yvoMa.js";import{p as je,g as Be,D as me,aD as Ie,r as E,aj as We,f as H,aK as Ue,j as qe,aL as He,i as P,C as he,F as ze,ak as Ke,W as Je,aI as Xe,aV as Ye,aW as Ge,aX as Qe,aY as Ze,$ as et,a3 as ke,y as ne,aZ as Se,w as X,a7 as Ce,a_ as xe,s as tt,ag as nt,aN as rt,aa as it,a$ as Me,b0 as ot,b1 as at,b2 as J}from"./app-B1f1bFw0.js";import{m as st,u as ut,b as ye}from"./VTextField-DPaiEmWA.js";import{a as lt,b as ve}from"./VCheckboxBtn-X5lKH70F.js";const ct=je({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...st(),...lt()},"VSwitch"),Gt=Be()({name:"VSwitch",inheritAttrs:!1,props:ct(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,n){let{attrs:t,slots:i}=n;const r=me(e,"indeterminate"),o=me(e,"modelValue"),{loaderClasses:a}=Ie(e),{isFocused:d,focus:u,blur:l}=ut(e),c=E(),s=We&&window.matchMedia("(forced-colors: active)").matches,h=H(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),y=Ue(),b=H(()=>e.id||`switch-${y}`);function k(){r.value&&(r.value=!1)}function v(w){var C,M;w.stopPropagation(),w.preventDefault(),(M=(C=c.value)==null?void 0:C.input)==null||M.click()}return qe(()=>{const[w,C]=He(t),M=ye.filterProps(e),A=ve.filterProps(e);return P(ye,he({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":r.value},a.value,e.class]},w,M,{modelValue:o.value,"onUpdate:modelValue":p=>o.value=p,id:b.value,focused:d.value,style:e.style}),{...i,default:p=>{let{id:F,messagesId:ie,isDisabled:q,isReadonly:oe,isValid:m}=p;const g={model:o,isValid:m};return P(ve,he({ref:c},A,{modelValue:o.value,"onUpdate:modelValue":[S=>o.value=S,k],id:F.value,"aria-describedby":ie.value,type:"checkbox","aria-checked":r.value?"mixed":void 0,disabled:q.value,readonly:oe.value,onFocus:u,onBlur:l},C),{...i,default:S=>{let{backgroundColorClasses:ae,backgroundColorStyles:L}=S;return P("div",{class:["v-switch__track",s?void 0:ae.value],style:L.value,onClick:v},[i["track-true"]&&P("div",{key:"prepend",class:"v-switch__track-true"},[i["track-true"](g)]),i["track-false"]&&P("div",{key:"append",class:"v-switch__track-false"},[i["track-false"](g)])])},input:S=>{let{inputNode:ae,icon:L,backgroundColorClasses:Ne,backgroundColorStyles:De}=S;return P(ze,null,[ae,P("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":L||e.loading},e.inset||s?void 0:Ne.value],style:e.inset?void 0:De.value},[i.thumb?P(Ke,{defaults:{VIcon:{icon:L,size:"x-small"}}},{default:()=>[i.thumb({...g,icon:L})]}):P(Re,null,{default:()=>[e.loading?P(Xe,{name:"v-switch",active:!0,color:m.value===!1?void 0:h.value},{default:se=>i.loader?i.loader(se):P(Ye,{active:se.isActive,color:se.color,indeterminate:!0,size:"16",width:"2"},null)}):L&&P(Je,{key:String(L),icon:L,size:"x-small"},null)]})])])}})}})}),{}}});function Y(e){return Qe()?(Ze(e),!0):!1}function ce(e){let n=0,t,i;const r=()=>{n-=1,i&&n<=0&&(i.stop(),t=void 0,i=void 0)};return(...o)=>(n+=1,i||(i=Ge(!0),t=i.run(()=>e(...o))),Y(r),t)}function D(e){return typeof e=="function"?e():et(e)}const re=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const dt=Object.prototype.toString,ft=e=>dt.call(e)==="[object Object]",ge=()=>+Date.now(),pt=()=>{};function mt(e,n){function t(...i){return new Promise((r,o)=>{Promise.resolve(e(()=>n.apply(this,i),{fn:n,thisArg:this,args:i})).then(r).catch(o)})}return t}const Ae=e=>e();function ht(e=Ae){const n=E(!0);function t(){n.value=!1}function i(){n.value=!0}const r=(...o)=>{n.value&&e(...o)};return{isActive:Se(n),pause:t,resume:i,eventFilter:r}}function we(e,n=!1,t="Timeout"){return new Promise((i,r)=>{setTimeout(n?()=>r(t):i,e)})}function yt(e){return xe()}function vt(e,n,t={}){const{eventFilter:i=Ae,...r}=t;return X(e,mt(i,n),r)}function gt(e,n,t={}){const{eventFilter:i,...r}=t,{eventFilter:o,pause:a,resume:d,isActive:u}=ht(i);return{stop:vt(e,n,{...r,eventFilter:o}),pause:a,resume:d,isActive:u}}function wt(e,n=!0,t){yt()?ke(e,t):n?e():ne(e)}function ue(e,n=!1){function t(s,{flush:h="sync",deep:y=!1,timeout:b,throwOnTimeout:k}={}){let v=null;const C=[new Promise(M=>{v=X(e,A=>{s(A)!==n&&(v?v():ne(()=>v==null?void 0:v()),M(A))},{flush:h,deep:y,immediate:!0})})];return b!=null&&C.push(we(b,k).then(()=>D(e)).finally(()=>v==null?void 0:v())),Promise.race(C)}function i(s,h){if(!Ce(s))return t(A=>A===s,h);const{flush:y="sync",deep:b=!1,timeout:k,throwOnTimeout:v}=h??{};let w=null;const M=[new Promise(A=>{w=X([e,s],([p,F])=>{n!==(p===F)&&(w?w():ne(()=>w==null?void 0:w()),A(p))},{flush:y,deep:b,immediate:!0})})];return k!=null&&M.push(we(k,v).then(()=>D(e)).finally(()=>(w==null||w(),D(e)))),Promise.race(M)}function r(s){return t(h=>!!h,s)}function o(s){return i(null,s)}function a(s){return i(void 0,s)}function d(s){return t(Number.isNaN,s)}function u(s,h){return t(y=>{const b=Array.from(y);return b.includes(s)||b.includes(D(s))},h)}function l(s){return c(1,s)}function c(s=1,h){let y=-1;return t(()=>(y+=1,y>=s),h)}return Array.isArray(D(e))?{toMatch:t,toContains:u,changed:l,changedTimes:c,get not(){return ue(e,!n)}}:{toMatch:t,toBe:i,toBeTruthy:r,toBeNull:o,toBeNaN:d,toBeUndefined:a,changed:l,changedTimes:c,get not(){return ue(e,!n)}}}function _e(e){return ue(e)}function _t(e,n=1e3,t={}){const{immediate:i=!0,immediateCallback:r=!1}=t;let o=null;const a=E(!1);function d(){o&&(clearInterval(o),o=null)}function u(){a.value=!1,d()}function l(){const c=D(n);c<=0||(a.value=!0,r&&e(),d(),o=setInterval(e,c))}if(i&&re&&l(),Ce(n)||typeof n=="function"){const c=X(n,()=>{a.value&&re&&l()});Y(c)}return Y(u),{isActive:a,pause:u,resume:l}}const z=re?window:void 0,bt=re?window.document:void 0;function le(e){var n;const t=D(e);return(n=t==null?void 0:t.$el)!=null?n:t}function R(...e){let n,t,i,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,i,r]=e,n=z):[n,t,i,r]=e,!n)return pt;Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]);const o=[],a=()=>{o.forEach(c=>c()),o.length=0},d=(c,s,h,y)=>(c.addEventListener(s,h,y),()=>c.removeEventListener(s,h,y)),u=X(()=>[le(n),D(r)],([c,s])=>{if(a(),!c)return;const h=ft(s)?{...s}:s;o.push(...t.flatMap(y=>i.map(b=>d(c,y,b,h))))},{immediate:!0,flush:"post"}),l=()=>{u(),a()};return Y(l),l}function kt(){const e=E(!1),n=xe();return n&&ke(()=>{e.value=!0},n),e}function St(e){const n=kt();return H(()=>(n.value,!!e()))}function Ct(e,n={}){const{immediate:t=!0,fpsLimit:i=void 0,window:r=z}=n,o=E(!1),a=i?1e3/i:null;let d=0,u=null;function l(h){if(!o.value||!r)return;d||(d=h);const y=h-d;if(a&&y<a){u=r.requestAnimationFrame(l);return}d=h,e({delta:y,timestamp:h}),u=r.requestAnimationFrame(l)}function c(){!o.value&&r&&(o.value=!0,d=0,u=r.requestAnimationFrame(l))}function s(){o.value=!1,u!=null&&r&&(r.cancelAnimationFrame(u),u=null)}return t&&c(),Y(s),{isActive:Se(o),pause:s,resume:c}}const Q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Z="__vueuse_ssr_handlers__",xt=Mt();function Mt(){return Z in Q||(Q[Z]=Q[Z]||{}),Q[Z]}function At(e,n){return xt[e]||n}function Pt(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Et={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},be="vueuse-storage";function Vt(e,n,t,i={}){var r;const{flush:o="pre",deep:a=!0,listenToStorageChanges:d=!0,writeDefaults:u=!0,mergeDefaults:l=!1,shallow:c,window:s=z,eventFilter:h,onError:y=m=>{console.error(m)},initOnMounted:b}=i,k=(c?tt:E)(typeof n=="function"?n():n);if(!t)try{t=At("getDefaultStorage",()=>{var m;return(m=z)==null?void 0:m.localStorage})()}catch(m){y(m)}if(!t)return k;const v=D(n),w=Pt(v),C=(r=i.serializer)!=null?r:Et[w],{pause:M,resume:A}=gt(k,()=>F(k.value),{flush:o,deep:a,eventFilter:h});s&&d&&wt(()=>{t instanceof Storage?R(s,"storage",q):R(s,be,oe),b&&q()}),b||q();function p(m,g){if(s){const S={key:e,oldValue:m,newValue:g,storageArea:t};s.dispatchEvent(t instanceof Storage?new StorageEvent("storage",S):new CustomEvent(be,{detail:S}))}}function F(m){try{const g=t.getItem(e);if(m==null)p(g,null),t.removeItem(e);else{const S=C.write(m);g!==S&&(t.setItem(e,S),p(g,S))}}catch(g){y(g)}}function ie(m){const g=m?m.newValue:t.getItem(e);if(g==null)return u&&v!=null&&t.setItem(e,C.write(v)),v;if(!m&&l){const S=C.read(g);return typeof l=="function"?l(S,v):w==="object"&&!Array.isArray(S)?{...v,...S}:S}else return typeof g!="string"?g:C.read(g)}function q(m){if(!(m&&m.storageArea!==t)){if(m&&m.key==null){k.value=v;return}if(!(m&&m.key!==e)){M();try{(m==null?void 0:m.newValue)!==C.write(k.value)&&(k.value=ie(m))}catch(g){y(g)}finally{m?ne(A):A()}}}}function oe(m){q(m.detail)}return k}function Pe(e,n,t={}){const{window:i=z}=t;return Vt(e,n,i==null?void 0:i.localStorage,t)}const Ot={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function Qt(e={}){const{type:n="page",touch:t=!0,resetOnTouchEnds:i=!1,initialValue:r={x:0,y:0},window:o=z,target:a=o,scroll:d=!0,eventFilter:u}=e;let l=null;const c=E(r.x),s=E(r.y),h=E(null),y=typeof n=="function"?n:Ot[n],b=p=>{const F=y(p);l=p,F&&([c.value,s.value]=F,h.value="mouse")},k=p=>{if(p.touches.length>0){const F=y(p.touches[0]);F&&([c.value,s.value]=F,h.value="touch")}},v=()=>{if(!l||!o)return;const p=y(l);l instanceof MouseEvent&&p&&(c.value=p[0]+o.scrollX,s.value=p[1]+o.scrollY)},w=()=>{c.value=r.x,s.value=r.y},C=u?p=>u(()=>b(p),{}):p=>b(p),M=u?p=>u(()=>k(p),{}):p=>k(p),A=u?()=>u(()=>v(),{}):()=>v();if(a){const p={passive:!0};R(a,["mousemove","dragover"],C,p),t&&n!=="movement"&&(R(a,["touchstart","touchmove"],M,p),i&&R(a,"touchend",w,p)),d&&n==="page"&&R(o,"scroll",A,{passive:!0})}return{x:c,y:s,sourceType:h}}function Zt(e,n={}){const{document:t=bt}=n,i=St(()=>t&&"pointerLockElement"in t),r=E(),o=E();let a;i.value&&(R(t,"pointerlockchange",()=>{var l;const c=(l=t.pointerLockElement)!=null?l:r.value;a&&c===a&&(r.value=t.pointerLockElement,r.value||(a=o.value=null))}),R(t,"pointerlockerror",()=>{var l;const c=(l=t.pointerLockElement)!=null?l:r.value;if(a&&c===a){const s=t.pointerLockElement?"release":"acquire";throw new Error(`Failed to ${s} pointer lock.`)}}));async function d(l){var c;if(!i.value)throw new Error("Pointer Lock API is not supported by your browser.");if(o.value=l instanceof Event?l.currentTarget:null,a=l instanceof Event?(c=le(e))!=null?c:o.value:le(l),!a)throw new Error("Target element undefined.");return a.requestPointerLock(),await _e(r).toBe(a)}async function u(){return r.value?(t.exitPointerLock(),await _e(r).toBeNull(),!0):!1}return{isSupported:i,element:r,triggerElement:o,lock:d,unlock:u}}function $t(e={}){const{controls:n=!1,offset:t=0,immediate:i=!0,interval:r="requestAnimationFrame",callback:o}=e,a=E(ge()+t),d=()=>a.value=ge()+t,u=o?()=>{d(),o(a.value)}:d,l=r==="requestAnimationFrame"?Ct(u,{immediate:i}):_t(u,r,{immediate:i});return n?{timestamp:a,...l}:a}function en(e){const n=window.Echo.channel(e);return nt(()=>{n.listenToAll((t,i)=>{console.log(t,i)})}),rt(()=>{window.Echo.leaveChannel(e)}),n}const tn=ce(()=>{const e=Pe("ticket-allocator.options",[]),n=H(()=>e.value.includes("hide-empty")),t=H(()=>e.value.includes("alt-info")),i=H(()=>e.value.includes("unlocked"));return it({all:e,hideEmpty:n,altInfo:t,unlocked:i})}),nn=ce(()=>Pe("ticket-allocator.display-mode","weight")),Ft=ce(()=>$t({interval:1e3}));class Nt extends ot{increment(n){return this.incrementOrDecrement(n,!0)}decrement(n){return this.incrementOrDecrement(n,!1)}incrementOrDecrement(n,t){const i=this.get(!1);if(i.length===0)return[];const r=i.map(o=>{const a=o.$getAttributes();for(const u in n)Object.prototype.hasOwnProperty.call(a,u)&&typeof a[u]=="number"&&(t?a[u]+=n[u]:a[u]-=n[u]);const d=this.hydrate(a,{action:"update",operation:"set"});return o.$self().updating(o,n)===!1?o:(d.$self().updated(d),d)});return this.commit("update",this.compile(r)),r}}class Dt extends Me{query(){return new Nt(this.database,this.getModel(),this.queryCache,this.hydratedDataCache,this.pinia)}}function O(e){return(n,t)=>{const i=n.$self();i.setRegistry(t,()=>i.attr(e))}}function I(e,n={}){return(t,i)=>{const r=t.$self();r.setRegistry(i,()=>{const o=r.string(e);return n.notNullable&&o.notNullable(),o})}}function W(e,n={}){return(t,i)=>{const r=t.$self();r.setRegistry(i,()=>{const o=r.number(e);return n.notNullable&&o.notNullable(),o})}}function Ee(e,n={}){return(t,i)=>{const r=t.$self();r.setRegistry(i,()=>{const o=r.boolean(e);return n.notNullable&&o.notNullable(),o})}}function j(e){return(n,t)=>{const i=n.$self();i.setRegistry(t,()=>i.uid(e))}}function Ve(e,n,t){return(i,r)=>{const o=i.$self();o.setRegistry(r,()=>o.belongsTo(e(),n,t))}}function de(e,n,t,i,r,o){return(a,d)=>{const u=a.$self();u.setRegistry(d,()=>u.belongsToMany(e(),n(),t,i,r,o))}}function Oe(e,n,t){return(i,r)=>{const o=i.$self();o.setRegistry(r,()=>o.hasMany(e(),n,t))}}function Tt(e){return(n,t)=>{n.$self().setFieldDeleteMode(t,e)}}function fe(e){return(n,t)=>{n.$self().setCast(t,e())}}class pe extends at{constructor(n){super(n)}get(n){return n===null?null:new Date(n)}set(n){return n===null?null:(typeof n=="string"?new Date(Date.parse(n)):n).toISOString()}}var Lt=Object.defineProperty,$e=(e,n,t,i)=>{for(var r=void 0,o=e.length-1,a;o>=0;o--)(a=e[o])&&(r=a(n,t,r)||r);return r&&Lt(n,t,r),r};class K extends J{}f(K,"entity","teamOperator"),f(K,"primaryKey",["team_uuid","operator_uuid"]);$e([j()],K.prototype,"team_uuid");$e([j()],K.prototype,"operator_uuid");var Rt=Object.defineProperty,T=(e,n,t,i)=>{for(var r=void 0,o=e.length-1,a;o>=0;o--)(a=e[o])&&(r=a(n,t,r)||r);return r&&Rt(n,t,r),r},ee;let $=(ee=class extends J{get ticket_count(){return this.tickets.length}get free_slots(){return this.ticket_limit!==null?Math.max(0,this.ticket_limit-this.ticket_count):null}get total_complexity(){return this.tickets.reduce((n,{complexity:t})=>n+t,0)}get free_complexity(){return this.complexity_limit!==null?Math.max(0,this.complexity_limit-this.total_complexity):null}},f(ee,"entity","operators"),f(ee,"primaryKey","uuid"),ee);T([j()],$.prototype,"uuid");T([O()],$.prototype,"user_id");T([I("")],$.prototype,"name");T([Ee(!1)],$.prototype,"online");T([Ee(!1)],$.prototype,"ready");T([W(null)],$.prototype,"ticket_limit");T([W(null)],$.prototype,"complexity_limit");T([de(()=>V,()=>K,"operator_uuid","team_uuid")],$.prototype,"teams");T([Oe(()=>_,"handler_uuid"),Tt("set null")],$.prototype,"tickets");var jt=Object.defineProperty,B=(e,n,t,i)=>{for(var r=void 0,o=e.length-1,a;o>=0;o--)(a=e[o])&&(r=a(n,t,r)||r);return r&&jt(n,t,r),r};class V extends J{}f(V,"entity","operatorTeams"),f(V,"primaryKey","uuid");B([j()],V.prototype,"uuid");B([I("")],V.prototype,"name");B([I("")],V.prototype,"description");B([O()],V.prototype,"matching");B([O()],V.prototype,"created_at");B([O()],V.prototype,"updated_at");B([O()],V.prototype,"deleted_at");B([de(()=>$,()=>K,"team_uuid","operator_uuid")],V.prototype,"operators");var Bt=Object.defineProperty,Fe=(e,n,t,i)=>{for(var r=void 0,o=e.length-1,a;o>=0;o--)(a=e[o])&&(r=a(n,t,r)||r);return r&&Bt(n,t,r),r};class G extends J{}f(G,"entity","teamCategory"),f(G,"primaryKey",["team_uuid","category_uuid"]);Fe([j()],G.prototype,"team_uuid");Fe([j()],G.prototype,"category_uuid");var It=Object.defineProperty,U=(e,n,t,i)=>{for(var r=void 0,o=e.length-1,a;o>=0;o--)(a=e[o])&&(r=a(n,t,r)||r);return r&&It(n,t,r),r};class N extends J{}f(N,"entity","ticketCategories"),f(N,"primaryKey","uuid");U([j()],N.prototype,"uuid");U([I("")],N.prototype,"name");U([I("")],N.prototype,"short");U([O()],N.prototype,"created_at");U([O()],N.prototype,"updated_at");U([de(()=>V,()=>G,"category_uuid","team_uuid")],N.prototype,"teams");U([Oe(()=>_,"category_uuid")],N.prototype,"tickets");var Wt=Object.defineProperty,x=(e,n,t,i)=>{for(var r=void 0,o=e.length-1,a;o>=0;o--)(a=e[o])&&(r=a(n,t,r)||r);return r&&Wt(n,t,r),r},te;let _=(te=class extends J{get duration(){return Math.round((Ft().value-this.created_at.getTime())/1e3)}get weight(){return this.initial_weight+this.weight_increment*this.duration}},f(te,"entity","tickets"),f(te,"primaryKey","uuid"),te);x([j()],_.prototype,"uuid");x([I("")],_.prototype,"category_uuid");x([I(null)],_.prototype,"handler_uuid");x([O()],_.prototype,"meta");x([O()],_.prototype,"metrics");x([W(0)],_.prototype,"initial_weight");x([W(0)],_.prototype,"weight_increment");x([W(0)],_.prototype,"complexity");x([W(0)],_.prototype,"delay");x([W(0)],_.prototype,"reservation");x([fe(()=>pe),O()],_.prototype,"created_at");x([fe(()=>pe),O(null)],_.prototype,"bound_at");x([fe(()=>pe),O(null)],_.prototype,"accepted_at");x([Ve(()=>N,"category_uuid")],_.prototype,"category");x([Ve(()=>$,"handler_uuid")],_.prototype,"handler");class an extends Dt{constructor(){super(...arguments);f(this,"use",_);f(this,"create",t=>{this.save({uuid:t.uuid,category_uuid:t.categoryUuid,handler_uuid:t.operatorUuid,meta:t.meta,created_at:new Date().toISOString(),bound_at:t.operatorUuid?new Date().toISOString():null})});f(this,"close",({uuid:t})=>{this.destroy(t)});f(this,"bind",({uuid:t,operatorUuid:i,meta:r})=>{var a;r={...((a=this.find(t))==null?void 0:a.meta)??{},...r},this.where("uuid",t).update({handler_uuid:i,meta:r,bound_at:new Date().toISOString(),accepted_at:null})});f(this,"accept",({uuid:t})=>{this.where("uuid",t).update({accepted_at:new Date().toISOString()})});f(this,"unbind",({uuid:t})=>{this.where("uuid",t).update({handler_uuid:null,bound_at:null,accepted_at:null})});f(this,"changeCategory",({uuid:t,categoryUuid:i,meta:r})=>{var a;r={...((a=this.find(t))==null?void 0:a.meta)??{},...r},this.where("uuid",t).update({category_uuid:i,meta:r})});f(this,"setMetaValue",({uuid:t,key:i,value:r})=>{var a;const o=((a=this.find(t))==null?void 0:a.meta)??{};o[i]=r,this.where("uuid",t).update({meta:o})});f(this,"mergeMetaValues",({uuid:t,meta:i})=>{var o;i={...((o=this.find(t))==null?void 0:o.meta)??{},...i},this.where("uuid",t).update({meta:i})});f(this,"adjustMetrics",({uuid:t,factorUuid:i,adjustments:r})=>{var a,d,u,l,c,s;const o=((a=this.find(t))==null?void 0:a.metrics)??{};o[i]=r,this.where("uuid",t).update({metrics:o,initial_weight:Math.max(0,(((d=this.find(t))==null?void 0:d.initial_weight)??0)+r.initial_weight),weight_increment:Math.max(0,(((u=this.find(t))==null?void 0:u.weight_increment)??0)+r.weight_increment),complexity:Math.max(0,(((l=this.find(t))==null?void 0:l.complexity)??0)+r.complexity),delay:Math.max(0,(((c=this.find(t))==null?void 0:c.delay)??0)+r.delay),reservation:Math.max(0,(((s=this.find(t))==null?void 0:s.reservation)??0)+r.reservation)})})}unbound(){return this.where("handler_uuid",null)}bound(t){return this.where("handler_uuid",t)}}const sn="ticket-allocator";var Ut=(e=>(e.PropsInvalidated=".props-invalidated",e))(Ut||{}),qt=(e=>(e.Commented=".operator.commented",e.ComplexityLimitAdjusted=".operator.complexity-limit-adjusted",e.Enrolled=".operator.enrolled",e.JoinedTeam=".operator.joined-team",e.LeftTeam=".operator.left-team",e.SetTeams=".operator.set-teams",e.NameChanged=".operator.name-changed",e.NotReady=".operator.not-ready",e.Offline=".operator.offline",e.Online=".operator.online",e.Ready=".operator.ready",e.Resigned=".operator.resigned",e.TicketLimitAdjusted=".operator.ticket-limit-adjusted",e))(qt||{}),Ht=(e=>(e.Bound=".ticket.bound",e.Accepted=".ticket.accepted",e.CategoryChanged=".ticket.category-changed",e.MetaValueSet=".ticket.meta-value-set",e.MetaValuesMerged=".ticket.meta-values-merged",e.MetricsAdjusted=".ticket.metrics-adjusted",e.Closed=".ticket.closed",e.Created=".ticket.created",e.Unbound=".ticket.unbound",e))(Ht||{});class un extends Me{constructor(){super(...arguments);f(this,"use",$);f(this,"enroll",t=>{this.save({uuid:t.uuid,user_id:t.userId,name:t.name,online:t.online,ready:t.ready,ticket_limit:t.ticketLimit,complexity_limit:t.complexityLimit})});f(this,"resign",({uuid:t})=>{this.destroy(t)});f(this,"changeName",({uuid:t,name:i})=>{this.where("uuid",t).update({name:i})});f(this,"setOnline",({uuid:t})=>{this.where("uuid",t).update({online:!0})});f(this,"setOffline",({uuid:t})=>{this.where("uuid",t).update({online:!1})});f(this,"setReady",({uuid:t})=>{this.where("uuid",t).update({ready:!0})});f(this,"setNotReady",({uuid:t})=>{this.where("uuid",t).update({ready:!1})});f(this,"adjustTicketLimit",({uuid:t,ticketLimit:i})=>{this.where("uuid",t).update({ticket_limit:i})});f(this,"adjustComplexityLimit",({uuid:t,complexityLimit:i})=>{this.where("uuid",t).update({complexity_limit:i})})}}export{Ut as C,qt as O,an as T,Gt as V,tn as a,nn as b,Zt as c,Qt as d,en as e,Ht as f,sn as g,un as h,re as i,N as j,R as u};
//# sourceMappingURL=OperatorRepository-B1-_S-xd.js.map
