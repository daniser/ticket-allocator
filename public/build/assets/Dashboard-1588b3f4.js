var Fe=Object.defineProperty;var ze=(e,a,t)=>a in e?Fe(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;var d=(e,a,t)=>(ze(e,typeof a!="symbol"?a+"":a,t),t);import{r as I,d as S,p as Ze,u as T,c as o,a as oe,I as q,m as be,V as ae,b as he,R as Je,e as Ke,f as Qe,g as He,h as Xe,i as Ye,j as et,k as tt,l as nt,n as at,o as z,q as lt,s as it,t as st,v as ot,w as rt,x as ut,y as ct,z as Ce,A as dt,B as mt,C as ft,D as vt,E as p,F as ht,G as pt,H as yt,L as xe,J as gt,K as O,M as _t,N as kt,O as x,P as j,Q as h,S as Ie,T as b,U as B,W as c,X as wt,Y as G,Z as V,_ as Ve,$ as bt,a0 as le,a1 as Ct,a2 as Se,a3 as ie,a4 as $e,a5 as Ae,a6 as F,a7 as xt,a8 as R,a9 as C,aa as se,ab as It,ac as Vt,ad as re,ae as De,af as St,ag as $t,ah as pe,ai as At,aj as Dt,ak as Pt,al as Rt,am as Lt,an as Bt,ao as ye,ap as jt,aq as Nt,ar as Et,as as Tt,at as Ot,au as Mt,av as Wt,aw as Ut,ax as qt}from"./app-775fcee2.js";import{_ as M,a as Gt}from"./Default.vue_vue_type_script_setup_true_lang-7a530046.js";import{u as L,i as Ft,a as Pe,T as zt,b as Zt,c as Jt,O as Kt,d as Qt,e as Ht,r as ge}from"./Ticket-6868e21f.js";import{P as U}from"./index.m-3c027150.js";function Xt(e,a){const t=I();return L(e,"dragstart",n=>{if(t.value=n.target,typeof a=="string"){const l=a;a=(i,s)=>{s==null||s.setData("text/plain",i.dataset[l]??"")}}a==null||a(t.value,n.dataTransfer)}),L(e,"dragend",()=>{t.value=null}),{element:t}}function Re(e,a,t=!0){const n=I(!1);let l=0;return Ft&&(L(e,"dragenter",i=>{i.preventDefault(),l++,n.value=!0}),L(e,"dragover",i=>{i.preventDefault()}),L(e,"dragleave",i=>{i.preventDefault(),l--,l===0&&(n.value=!1)}),L(e,"drop",i=>{var s;if(i.preventDefault(),l=0,n.value=!1,a)if(t){const u=Array.from(((s=i.dataTransfer)==null?void 0:s.files)??[]);a(u.length===0?null:u)}else a(i.dataTransfer)})),{isOverDropZone:n}}const Yt=S({name:"VCardActions",setup(e,a){let{slots:t}=a;return Ze({VBtn:{variant:"text"}}),T(()=>{var n;return o("div",{class:"v-card-actions"},[(n=t.default)==null?void 0:n.call(t)])}),{}}}),en=oe("v-card-subtitle"),tn=oe("v-card-title"),nn=S({name:"VCardItem",props:{appendAvatar:String,appendIcon:q,prependAvatar:String,prependIcon:q,subtitle:String,title:String,...be()},setup(e,a){let{slots:t}=a;return T(()=>{var n,l,i,s,u;const r=!!(e.prependAvatar||e.prependIcon||t.prepend),m=!!(e.appendAvatar||e.appendIcon||t.append),f=!!(e.title||t.title),v=!!(e.subtitle||t.subtitle);return o("div",{class:"v-card-item"},[r&&o(ae,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>[o("div",{class:"v-card-item__prepend"},[((n=t.prepend)==null?void 0:n.call(t))??o(he,null,null)])]}),o("div",{class:"v-card-item__content"},[f&&o(tn,{key:"title"},{default:()=>[((l=t.title)==null?void 0:l.call(t))??e.title]}),v&&o(en,{key:"subtitle"},{default:()=>[((i=t.subtitle)==null?void 0:i.call(t))??e.subtitle]}),(s=t.default)==null?void 0:s.call(t)]),m&&o(ae,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>[o("div",{class:"v-card-item__append"},[((u=t.append)==null?void 0:u.call(t))??o(he,null,null)])]})])}),{}}}),an=oe("v-card-text"),ln=S({name:"VCard",directives:{Ripple:Je},props:{appendAvatar:String,appendIcon:q,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:q,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...Ke(),...Qe(),...be(),...He(),...Xe(),...Ye(),...et(),...tt(),...nt(),...at(),...z(),...lt({variant:"elevated"})},setup(e,a){let{attrs:t,slots:n}=a;const{themeClasses:l}=it(e),{borderClasses:i}=st(e),{colorClasses:s,colorStyles:u,variantClasses:r}=ot(e),{densityClasses:m}=rt(e),{dimensionStyles:f}=ut(e),{elevationClasses:v}=ct(e),{loaderClasses:_}=Ce(e),{locationStyles:y}=dt(e),{positionClasses:k}=mt(e),{roundedClasses:Z}=ft(e),$=vt(e,t),ve=p(()=>e.link!==!1&&$.isLink.value),A=p(()=>!e.disabled&&e.link!==!1&&(e.link||$.isClickable.value));return T(()=>{var J,N,W;const D=ve.value?"a":e.tag,P=!!(n.title||e.title),K=!!(n.subtitle||e.subtitle),Q=P||K,H=!!(n.append||e.appendAvatar||e.appendIcon),X=!!(n.prepend||e.prependAvatar||e.prependIcon),E=!!(n.image||e.image),Y=Q||X||H,ee=!!(n.text||e.text);return ht(o(D,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":A.value},l.value,i.value,s.value,m.value,v.value,_.value,k.value,Z.value,r.value],style:[u.value,f.value,y.value],href:$.href.value,onClick:A.value&&$.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[E&&o(ae,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[o("div",{class:"v-card__image"},[((J=n.image)==null?void 0:J.call(n))??o(yt,null,null)])]}),o(xe,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:n.loader}),Y&&o(nn,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:n.item,prepend:n.prepend,title:n.title,subtitle:n.subtitle,append:n.append}),ee&&o(an,{key:"text"},{default:()=>[((N=n.text)==null?void 0:N.call(n))??e.text]}),(W=n.default)==null?void 0:W.call(n),n.actions&&o(Yt,null,{default:n.actions}),gt(A.value,"v-card")]}),[[pt("ripple"),A.value&&e.ripple]])}),{}}}),sn={class:"d-inline-block"},on={class:"text-white"},rn=O({__name:"Ticket",props:{ticket:null},setup(e){const a=e;_t(r=>({"40c64b4e":c(u).delay,"3c5563e9":c(u).duration}));const t=Pe(),n=p(()=>{var r;return(r=kt().props)==null?void 0:r[`${t.value}Threshold`]}),l=p(()=>a.ticket[t.value]),i=p(()=>l.value<1e5?l.value:l.value.toExponential(1)),s=p(()=>l.value>n.value),u=p(()=>({delay:-l.value+"s",duration:n.value+"s"}));return(r,m)=>(x(),j("div",sn,[o(V,{size:"small",class:G(["ticket",{overflow:c(s)}]),flat:"",width:"100"},{default:h(()=>[o(Ie,{color:"white",icon:"mdi-airplane",start:""}),b("span",on,B(c(i)),1),o(wt,{"open-on-click":"",activator:"parent","location-strategy":"connected",location:"bottom center",origin:"auto"},{default:h(()=>[o(ln,{width:"400",title:"aaa",subtitle:"bbb",text:"zzz"})]),_:1})]),_:1},8,["class"])]))}});const un=M(rn,[["__scopeId","data-v-66a96eb0"]]);class cn extends bt{increment(a){return this.incrementOrDecrement(a,!0)}decrement(a){return this.incrementOrDecrement(a,!1)}incrementOrDecrement(a,t){const n=this.get(!1);if(n.length===0)return[];const l=n.map(i=>{const s=i.$getAttributes();for(const r in a)Object.prototype.hasOwnProperty.call(s,r)&&typeof s[r]=="number"&&(t?s[r]+=a[r]:s[r]-=a[r]);const u=this.hydrate(s,{action:"update",operation:"set"});return i.$self().updating(i,a)===!1?i:(u.$self().updated(u),u)});return this.commit("update",this.compile(l)),l}}class dn extends Ve{query(){return new cn(this.database,this.getModel(),this.queryCache,this.hydratedDataCache,this.pinia)}}class Le extends dn{constructor(){super(...arguments);d(this,"use",zt);d(this,"create",({uuid:t,categoryUuid:n})=>{this.save({uuid:t,category_uuid:n,created_at:new Date().toISOString()})});d(this,"close",({uuid:t})=>{this.destroy(t)});d(this,"bind",({uuid:t,operatorUuid:n})=>{this.where("uuid",t).update({handler_uuid:n})});d(this,"unbind",({uuid:t})=>{this.where("uuid",t).update({handler_uuid:null})});d(this,"changeCategory",({uuid:t,categoryUuid:n})=>{this.where("uuid",t).update({category_uuid:n})});d(this,"incrementInitialWeight",({uuid:t,weightPoints:n})=>{this.query().where("uuid",t).increment({initial_weight:n})});d(this,"decrementInitialWeight",({uuid:t,weightPoints:n})=>{this.query().where("uuid",t).decrement({initial_weight:n})});d(this,"incrementWeightIncrement",({uuid:t,weightPoints:n})=>{this.query().where("uuid",t).increment({weight_increment:n})});d(this,"decrementWeightIncrement",({uuid:t,weightPoints:n})=>{this.query().where("uuid",t).decrement({weight_increment:n})});d(this,"incrementComplexity",({uuid:t,complexityPoints:n})=>{this.query().where("uuid",t).increment({complexity:n})});d(this,"decrementComplexity",({uuid:t,complexityPoints:n})=>{this.query().where("uuid",t).decrement({complexity:n})});d(this,"incrementDelay",({uuid:t,delaySeconds:n})=>{this.query().where("uuid",t).increment({delay:n})});d(this,"decrementDelay",({uuid:t,delaySeconds:n})=>{this.query().where("uuid",t).decrement({delay:n})})}unbound(){return this.where("handler_uuid",null)}bound(t){return this.where("handler_uuid",t)}}const mn=O({__name:"TicketPool",props:{tickets:null},setup(e){const a=I(null);Xt(a,"uuid");const{lock:t,unlock:n,element:l,triggerElement:i}=Zt(a),{x:s}=Jt({type:"movement"}),u=p(()=>le(Le));Ct([l,s],([m,f])=>{if(!m||!i.value)return;const v=i.value.dataset.uuid;f<0?u.value.incrementInitialWeight({uuid:v,weightPoints:-f*10}):f>0&&u.value.decrementInitialWeight({uuid:v,weightPoints:f*10})});const r=I(!1);return Se(()=>{setTimeout(()=>r.value=!0,500)}),(m,f)=>(x(),j("div",{ref_key:"ticketPool",ref:a,onMouseup:f[0]||(f[0]=(...v)=>c(n)&&c(n)(...v))},[o(Ae,{name:"ticket-pool",css:r.value},{default:h(()=>[(x(!0),j(ie,null,$e(e.tickets,v=>(x(),F(un,{key:v.uuid,"data-uuid":v.uuid,ticket:v,draggable:"true",class:"mr-1 mb-1",onMousedown:xt(c(t),["ctrl"])},null,8,["data-uuid","ticket","onMousedown"]))),128))]),_:1},8,["css"])],544))}});const fn=M(mn,[["__scopeId","data-v-17e8baeb"]]);function ue(){async function e(l,i){return await window.axios.patch(U("ticket-allocator.api.ready",l),{ready:i})}async function a(l,i){return await window.axios.patch(U("ticket-allocator.api.weight",l),{weight_points:i})}async function t(l,i){return await window.axios.patch(U("ticket-allocator.api.handler",l),{operator_uuid:i??null})}async function n(l){return await window.axios.delete(U("ticket-allocator.api.close",l))}return{ready:e,weight:a,handler:t,close:n}}const vn={class:"status"},hn={class:"name font-weight-bold"},pn={class:"load text-center"},yn={class:"complexity text-center"},gn={class:"more text-center"},_n=O({__name:"TicketRow",props:{tickets:null},setup(e){const a=e;let t=I(!1);const n=p(()=>a.tickets.reduce((r,{complexity:m})=>r+m,0)),l=p(()=>t.value?"mdi-chevron-down":"mdi-chevron-up"),i=ue(),s=I(null),{isOverDropZone:u}=Re(s,async r=>{var v;const m=r==null?void 0:r.getData("text/plain");if(!m)throw new Error("Ticket UUID undefined.");const f=(v=s.value)==null?void 0:v.dataset.uuid;return await i.handler(m,f)},!1);return(r,m)=>(x(),j("tr",{ref_key:"ticketRow",ref:s,class:G(["ticket-row",{dragover:c(u)}])},[b("td",vn,[R(r.$slots,"status",{},void 0,!0)]),b("td",hn,[R(r.$slots,"name",{},void 0,!0)]),b("td",pn,[R(r.$slots,"load",{},()=>[C(B(e.tickets.length),1)],!0),C("/"),R(r.$slots,"load-max",{},()=>[C("∞")],!0)]),b("td",yn,[R(r.$slots,"complexity",{},()=>[C(B(c(n)),1)],!0),C("/"),R(r.$slots,"complexity-max",{},()=>[C("∞")],!0)]),b("td",{class:G(["tickets pt-1",{collapsed:c(t)}])},[o(fn,{tickets:e.tickets},null,8,["tickets"])],2),b("td",gn,[o(V,{size:"x-small",variant:"tonal",icon:c(l),onClick:m[0]||(m[0]=f=>se(t)?t.value=!c(t):t=!c(t))},null,8,["icon"])])],2))}});const Be=M(_n,[["__scopeId","data-v-f80d4517"]]),kn=O({__name:"OperatorRow",props:{operator:null},setup(e){const a=e,t=p(()=>{var i,s;return{online:a.operator.online,ready:a.operator.ready,busy:!!((i=a.operator.tickets)!=null&&i.length),full:a.operator.ticket_limit!==null&&((s=a.operator.tickets)==null?void 0:s.length)>=a.operator.ticket_limit}}),n=ue(),l=async()=>await n.ready(a.operator.uuid,!a.operator.ready);return(i,s)=>(x(),F(Be,{tickets:e.operator.tickets,"data-uuid":e.operator.uuid,class:G(["operator",c(t)])},{status:h(()=>[o(Ie,{icon:"mdi-account",onClick:l})]),"load-max":h(()=>[C(B(e.operator.ticket_limit??"∞"),1)]),"complexity-max":h(()=>[C(B(e.operator.complexity_limit??"∞"),1)]),name:h(()=>[C(B(e.operator.name),1)]),_:1},8,["tickets","data-uuid","class"]))}});const wn=M(kn,[["__scopeId","data-v-95e8bd34"]]),bn="ticket-allocator";var w=(e=>(e.Commented=".operator.commented",e.ComplexityLimitAdjusted=".operator.complexity-limit-adjusted",e.Enrolled=".operator.enrolled",e.JoinedTeam=".operator.joined-team",e.LeftTeam=".operator.left-team",e.NameChanged=".operator.name-changed",e.NotReady=".operator.not-ready",e.Offline=".operator.offline",e.Online=".operator.online",e.Ready=".operator.ready",e.Resigned=".operator.resigned",e.TicketCategoryAttached=".operator.ticket-category-attached",e.TicketCategoryDetached=".operator.ticket-category-detached",e.TicketLimitAdjusted=".operator.ticket-limit-adjusted",e))(w||{}),g=(e=>(e.Bound=".ticket.bound",e.CategoryChanged=".ticket.category-changed",e.Closed=".ticket.closed",e.ComplexityDecremented=".ticket.complexity-decremented",e.ComplexityIncremented=".ticket.complexity-incremented",e.Created=".ticket.created",e.DelayDecremented=".ticket.delay-decremented",e.DelayIncremented=".ticket.delay-incremented",e.InitialWeightDecremented=".ticket.initial-weight-decremented",e.InitialWeightIncremented=".ticket.initial-weight-incremented",e.Tagged=".ticket.tagged",e.Unbound=".ticket.unbound",e.WeightIncrementDecremented=".ticket.weight-increment-decremented",e.WeightIncrementIncremented=".ticket.weight-increment-incremented",e))(g||{});function Cn(e,a){return e.reduce((t,n)=>(typeof n[a]=="number"&&(t+=n[a]),t),0)}function ce(e,a){return e.map(t=>It(t,a)).filter(t=>t)}function xn(e,a){const t=ce(e,a).filter(n=>typeof n=="number");return t.length===0?0:Math.max(...t)}function In(e,a){const t=ce(e,a).filter(n=>typeof n=="number");return t.length===0?0:Math.min(...t)}function Vn(e){return e.map(a=>a[a.$getLocalKey()])}function Sn(e,a){const t={},n=Array.isArray(a)?a:[a];return e.forEach(l=>{const i=n.length===1?l[n[0]]:`[${n.map(s=>l[s]).toString()}]`;t[i]=(t[i]||[]).concat(l)}),t}function $n(e,a,t){const n=[],l=[];return typeof a=="function"&&l.push(a)&&n.push("asc"),Array.isArray(a)&&a.forEach(i=>l.push(i[0])&&n.push(i[1])),l.length===0&&l.push(a),Vt(e,l,n,t)}function An(e){return{sum:a=>Cn(e,a),min:a=>In(e,a),max:a=>xn(e,a),pluck:a=>ce(e,a),groupBy:a=>Sn(e,a),sortBy:(a,t="SORT_REGULAR")=>$n(e,a,t),keys:()=>Vn(e)}}class Dn extends Ve{constructor(){super(...arguments);d(this,"use",Kt);d(this,"enroll",({uuid:t})=>{this.save({uuid:t})});d(this,"resign",({uuid:t})=>{this.destroy(t)});d(this,"changeName",({uuid:t,name:n})=>{this.where("uuid",t).update({name:n})});d(this,"setOnline",({uuid:t})=>{this.where("uuid",t).update({online:!0})});d(this,"setOffline",({uuid:t})=>{this.where("uuid",t).update({online:!1})});d(this,"setReady",({uuid:t})=>{this.where("uuid",t).update({ready:!0})});d(this,"setNotReady",({uuid:t})=>{this.where("uuid",t).update({ready:!1})});d(this,"adjustTicketLimit",({uuid:t,ticketLimit:n})=>{this.where("uuid",t).update({ticket_limit:n})});d(this,"adjustComplexityLimit",({uuid:t,complexityLimit:n})=>{this.where("uuid",t).update({complexity_limit:n})})}}const Pn=S({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...z()},setup(e,a){let{slots:t}=a;return T(()=>o(e.tag,{class:["v-container",{"v-container--fluid":e.fluid}]},t)),{}}}),de=["sm","md","lg","xl","xxl"],je=(()=>de.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}))(),Ne=(()=>de.reduce((e,a)=>(e["offset"+re(a)]={type:[String,Number],default:null},e),{}))(),Ee=(()=>de.reduce((e,a)=>(e["order"+re(a)]={type:[String,Number],default:null},e),{}))(),_e={col:Object.keys(je),offset:Object.keys(Ne),order:Object.keys(Ee)};function Rn(e,a,t){let n=e;if(!(t==null||t===!1)){if(a){const l=a.replace(e,"");n+=`-${l}`}return e==="col"&&(n="v-"+n),e==="col"&&(t===""||t===!0)||(n+=`-${t}`),n.toLowerCase()}}const Ln=["auto","start","end","center","baseline","stretch"],ne=S({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...je,offset:{type:[String,Number],default:null},...Ne,order:{type:[String,Number],default:null},...Ee,alignSelf:{type:String,default:null,validator:e=>Ln.includes(e)},...z()},setup(e,a){let{slots:t}=a;const n=p(()=>{const l=[];let i;for(i in _e)_e[i].forEach(u=>{const r=e[u],m=Rn(i,u,r);m&&l.push(m)});const s=l.some(u=>u.startsWith("v-col-"));return l.push({"v-col":!s||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),l});return()=>{var l;return De(e.tag,{class:n.value},(l=t.default)==null?void 0:l.call(t))}}}),Bn=["sm","md","lg","xl","xxl"],me=["start","end","center"],Te=["space-between","space-around","space-evenly"];function fe(e,a){return Bn.reduce((t,n)=>(t[e+re(n)]=a(),t),{})}const jn=[...me,"baseline","stretch"],Oe=e=>jn.includes(e),Me=fe("align",()=>({type:String,default:null,validator:Oe})),Nn=[...me,...Te],We=e=>Nn.includes(e),Ue=fe("justify",()=>({type:String,default:null,validator:We})),En=[...me,...Te,"stretch"],qe=e=>En.includes(e),Ge=fe("alignContent",()=>({type:String,default:null,validator:qe})),ke={align:Object.keys(Me),justify:Object.keys(Ue),alignContent:Object.keys(Ge)},Tn={align:"align",justify:"justify",alignContent:"align-content"};function On(e,a,t){let n=Tn[e];if(t!=null){if(a){const l=a.replace(e,"");n+=`-${l}`}return n+=`-${t}`,n.toLowerCase()}}const Mn=S({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Oe},...Me,justify:{type:String,default:null,validator:We},...Ue,alignContent:{type:String,default:null,validator:qe},...Ge,...z()},setup(e,a){let{slots:t}=a;const n=p(()=>{const l=[];let i;for(i in ke)ke[i].forEach(s=>{const u=e[s],r=On(i,s,u);r&&l.push(r)});return l.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),l});return()=>{var l;return De(e.tag,{class:["v-row",n.value]},(l=t.default)==null?void 0:l.call(t))}}});const we=S({name:"VSwitch",inheritAttrs:!1,props:{indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...St(),...$t()},emits:{"update:focused":e=>!0,"update:modelValue":()=>!0,"update:indeterminate":e=>!0},setup(e,a){let{attrs:t,slots:n}=a;const l=pe(e,"indeterminate"),i=pe(e,"modelValue"),{loaderClasses:s}=Ce(e),{isFocused:u,focus:r,blur:m}=At(e),f=p(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),v=Dt(),_=p(()=>e.id||`switch-${v}`);function y(){l.value&&(l.value=!1)}return T(()=>{const[k,Z]=Pt(t),[$,ve]=Rt(e),[A,J]=Lt(e),N=I();function W(){var D,P;(D=N.value)==null||(P=D.input)==null||P.click()}return o(Nt,ye({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":l.value},s.value]},k,$,{id:_.value,focused:u.value}),{...n,default:D=>{let{id:P,messagesId:K,isDisabled:Q,isReadonly:H,isValid:X}=D;return o(Bt,ye({ref:N},A,{modelValue:i.value,"onUpdate:modelValue":[E=>i.value=E,y],id:P.value,"aria-describedby":K.value,type:"checkbox","aria-checked":l.value?"mixed":void 0,disabled:Q.value,readonly:H.value,onFocus:r,onBlur:m},Z),{...n,default:()=>o("div",{class:"v-switch__track",onClick:W},null),input:E=>{let{textColorClasses:Y,textColorStyles:ee}=E;return o("div",{class:["v-switch__thumb",Y.value],style:ee.value},[e.loading&&o(xe,{name:"v-switch",active:!0,color:X.value===!1?void 0:f.value},{default:te=>n.loader?n.loader(te):o(jt,{active:te.isActive,color:te.color,indeterminate:!0,size:"16",width:"2"},null)})])}})}})}),{}}}),Wn=e=>(Ut("data-v-a3fe2ad0"),e=e(),qt(),e),Un=Wn(()=>b("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Dashboard",-1)),qn={class:"align-text-top"},Gn=O({__name:"Dashboard",props:{operators:null,tickets:null},setup(e){const a=e,t=Qt(),n=Pe(),l=Ht(),i=p(()=>le(Dn)),s=p(()=>le(Le)),u=ge(p(()=>An(i.value.with("tickets",_=>{_.orderBy(n.value,"desc")}).get()).sortBy([["online","desc"],["ready","desc"],["free_slots","desc"],["ticket_count","asc"],["name","asc"]])),750),r=ge(p(()=>s.value.unbound().orderBy(n.value,"desc").get()),750),m=ue(),f=I(null),{isOverDropZone:v}=Re(f,async _=>{const y=_==null?void 0:_.getData("text/plain");if(!y)throw new Error("Ticket UUID undefined.");return await m.close(y)},!1);return Se(()=>{i.value.fresh(a.operators),s.value.fresh(a.tickets),window.ticketAllocatorChannel=window.Echo.channel(bn),window.ticketAllocatorChannel.listenToAll((_,y)=>{console.log(_,y)}),window.ticketAllocatorChannel.listen(w.Enrolled,i.value.enroll).listen(w.Resigned,i.value.resign).listen(w.NameChanged,i.value.changeName).listen(w.Online,i.value.setOnline).listen(w.Offline,i.value.setOffline).listen(w.Ready,i.value.setReady).listen(w.NotReady,i.value.setNotReady).listen(w.TicketLimitAdjusted,i.value.adjustTicketLimit).listen(w.ComplexityLimitAdjusted,i.value.adjustComplexityLimit).listen(g.Created,s.value.create).listen(g.Closed,s.value.close).listen(g.Bound,s.value.bind).listen(g.Unbound,s.value.unbind).listen(g.CategoryChanged,s.value.changeCategory).listen(g.InitialWeightIncremented,s.value.incrementInitialWeight).listen(g.InitialWeightDecremented,s.value.decrementInitialWeight).listen(g.WeightIncrementIncremented,s.value.incrementWeightIncrement).listen(g.WeightIncrementDecremented,s.value.decrementWeightIncrement).listen(g.ComplexityIncremented,s.value.incrementComplexity).listen(g.ComplexityDecremented,s.value.decrementComplexity).listen(g.DelayIncremented,s.value.incrementDelay).listen(g.DelayDecremented,s.value.decrementDelay)}),(_,y)=>(x(),j(ie,null,[o(c(Et),{title:"Dashboard"}),o(Gt,null,{header:h(()=>[Un]),default:h(()=>[b("div",null,[o(Pn,{fluid:""},{default:h(()=>[o(Mn,null,{default:h(()=>[o(ne,null,{default:h(()=>[o(Tt,{modelValue:c(t).all,"onUpdate:modelValue":y[0]||(y[0]=k=>c(t).all=k),variant:"plain",multiple:""},{default:h(()=>[o(V,{value:"hide-empty",icon:c(t).hideEmpty?"mdi-eye-off-outline":"mdi-eye-outline"},null,8,["icon"]),o(V,{value:"alt-info",icon:c(t).altInfo?"mdi-magnify-plus-outline":"mdi-magnify"},null,8,["icon"]),o(V,{value:"unlocked",icon:c(t).unlocked?"mdi-lock-open-variant":"mdi-lock",color:"red",variant:c(t).unlocked?"text":"plain"},null,8,["icon","variant"])]),_:1},8,["modelValue"]),c(t).unlocked?(x(),F(Ot,{key:0,variant:"plain"},{default:h(()=>[o(V,{ref_key:"closeTicket",ref:f,icon:c(v)?"mdi-delete-empty":"mdi-delete"},null,8,["icon"]),o(V,{icon:"mdi-refresh"})]),_:1})):Mt("",!0)]),_:1}),o(ne,{cols:"2"},{default:h(()=>[o(we,{modelValue:c(l),"onUpdate:modelValue":y[1]||(y[1]=k=>se(l)?l.value=k:null),"false-value":"asc","true-value":"desc","prepend-icon":"mdi-sort-ascending","append-icon":"mdi-sort-descending",class:"d-flex justify-end"},null,8,["modelValue"])]),_:1}),o(ne,{cols:"2"},{default:h(()=>[o(we,{modelValue:c(n),"onUpdate:modelValue":y[2]||(y[2]=k=>se(n)?n.value=k:null),"false-value":"weight","true-value":"duration","prepend-icon":"mdi-weight","append-icon":"mdi-clock",class:"d-flex justify-end"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o(Wt,{class:"ticket-monitor"},{default:h(()=>[b("tbody",qn,[o(Be,{tickets:c(r)},{name:h(()=>[C("Очередь заявок")]),_:1},8,["tickets"]),o(Ae,{name:"operator-pool"},{default:h(()=>[(x(!0),j(ie,null,$e(c(u),k=>(x(),F(wn,{key:k.uuid,operator:k},null,8,["operator"]))),128))]),_:1})])]),_:1})])]),_:1})],64))}});const Qn=M(Gn,[["__scopeId","data-v-a3fe2ad0"]]);export{Qn as default};
//# sourceMappingURL=Dashboard-1588b3f4.js.map
