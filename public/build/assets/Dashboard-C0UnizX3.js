import{s as ue,_ as Qe}from"./Default.vue_vue_type_script_setup_true_lang-CGGcRZ0Z.js";import{T as Re}from"./TransitionGroup-xDI51NFL.js";import{k as Me,p as Z,m as Ee,a as Pe,b as et,g as K,c as tt,u as ot,d as nt,e as at,r as A,f as c,s as ye,w as Ae,h as st,i as r,V as W,j as q,l as We,n as lt,o as it,q as Oe,t as ut,v as rt,x as pe,y as ct,z as De,A as dt,B as vt,F as X,C as F,D as Le,E as ft,G as mt,H as ht,I as Y,J as yt,K as pt,L as ae,M as gt,N as kt,Q as Se,O as ee,P as w,R as I,S as h,T as P,U as Ue,W as G,X as i,Y as v,Z as B,_ as x,$ as ne,a0 as de,a1 as re,a2 as He,a3 as bt,a4 as N,a5 as te,a6 as Xe,a7 as _t,a8 as wt,a9 as Vt,aa as me,ab as $t,ac as Ct,ad as xt,ae as Tt}from"./app-Ch62ayHM.js";import{u as z,i as St,M as It,a as Bt,b as Ye,c as je,d as Rt,e as Mt,T as Ne,f as Et,C as Pt,O as L,g as U,h as At,j as Wt,k as Ot,V as Dt}from"./OperatorRepository-BWJIp6Nj.js";import{m as Lt,u as Ut,a as Ht,V as Ie,b as Xt}from"./filter-C--5_4hj.js";import{V as Yt,a as jt}from"./VCard-c2FezV9N.js";import{f as Nt,a as Gt,s as zt}from"./VTextField-Bt-ZLPkG.js";import{u as Ft,a as Zt}from"./scopeId-BonRG5r5.js";import{M as Kt}from"./VGrid-DZi2vrC2.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as qt}from"./VContainer-DRceIZXb.js";import{V as Be,a as he}from"./VRow-ChLXKHQo.js";import{V as Jt}from"./VAutocomplete-BZ992K0i.js";import{V as Qt}from"./VTable-BffRu20T.js";import"./VInput-mc00EMnO.js";import"./VSelectionControl-1FZ9ANXw.js";import"./VCheckboxBtn-BzPHDLTV.js";const eo=e=>{const{touchstartX:t,touchendX:o,touchstartY:n,touchendY:a}=e,s=.5,l=16;e.offsetX=o-t,e.offsetY=a-n,Math.abs(e.offsetY)<s*Math.abs(e.offsetX)&&(e.left&&o<t-l&&e.left(e),e.right&&o>t+l&&e.right(e)),Math.abs(e.offsetX)<s*Math.abs(e.offsetY)&&(e.up&&a<n-l&&e.up(e),e.down&&a>n+l&&e.down(e))};function to(e,t){var n;const o=e.changedTouches[0];t.touchstartX=o.clientX,t.touchstartY=o.clientY,(n=t.start)==null||n.call(t,{originalEvent:e,...t})}function oo(e,t){var n;const o=e.changedTouches[0];t.touchendX=o.clientX,t.touchendY=o.clientY,(n=t.end)==null||n.call(t,{originalEvent:e,...t}),eo(t)}function no(e,t){var n;const o=e.changedTouches[0];t.touchmoveX=o.clientX,t.touchmoveY=o.clientY,(n=t.move)==null||n.call(t,{originalEvent:e,...t})}function ao(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:o=>to(o,t),touchend:o=>oo(o,t),touchmove:o=>no(o,t)}}function so(e,t){var f;const o=t.value,n=o!=null&&o.parent?e.parentElement:e,a=(o==null?void 0:o.options)??{passive:!0},s=(f=t.instance)==null?void 0:f.$.uid;if(!n||!s)return;const l=ao(t.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[s]=l,Me(l).forEach(y=>{n.addEventListener(y,l[y],a)})}function lo(e,t){var s,l;const o=(s=t.value)!=null&&s.parent?e.parentElement:e,n=(l=t.instance)==null?void 0:l.$.uid;if(!(o!=null&&o._touchHandlers)||!n)return;const a=o._touchHandlers[n];Me(a).forEach(f=>{o.removeEventListener(f,a[f])}),delete o._touchHandlers[n]}const Ge={mounted:so,unmounted:lo},ze=Symbol.for("vuetify:v-window"),Fe=Symbol.for("vuetify:v-window-group"),Ze=Z({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...Ee(),...Pe(),...et()},"VWindow"),ge=K()({name:"VWindow",directives:{Touch:Ge},props:Ze(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:o}=t;const{themeClasses:n}=tt(e),{isRtl:a}=ot(),{t:s}=nt(),l=at(e,Fe),f=A(),y=c(()=>a.value?!e.reverse:e.reverse),d=ye(!1),k=c(()=>{const m=e.direction==="vertical"?"y":"x",$=(y.value?!d.value:d.value)?"-reverse":"";return`v-window-${m}${$}-transition`}),C=ye(0),p=A(void 0),V=c(()=>l.items.value.findIndex(m=>l.selected.value.includes(m.id)));Ae(V,(m,g)=>{const $=l.items.value.length,S=$-1;$<=2?d.value=m<g:m===S&&g===0?d.value=!0:m===0&&g===S?d.value=!1:d.value=m<g}),st(ze,{transition:k,isReversed:d,transitionCount:C,transitionHeight:p,rootRef:f});const b=c(()=>e.continuous||V.value!==0),T=c(()=>e.continuous||V.value!==l.items.value.length-1);function O(){b.value&&l.prev()}function H(){T.value&&l.next()}const M=c(()=>{const m=[],g={icon:a.value?e.nextIcon:e.prevIcon,class:`v-window__${y.value?"right":"left"}`,onClick:l.prev,"aria-label":s("$vuetify.carousel.prev")};m.push(b.value?o.prev?o.prev({props:g}):r(W,g,null):r("div",null,null));const $={icon:a.value?e.prevIcon:e.nextIcon,class:`v-window__${y.value?"left":"right"}`,onClick:l.next,"aria-label":s("$vuetify.carousel.next")};return m.push(T.value?o.next?o.next({props:$}):r(W,$,null):r("div",null,null)),m}),_=c(()=>e.touch===!1?e.touch:{...{left:()=>{y.value?O():H()},right:()=>{y.value?H():O()},start:g=>{let{originalEvent:$}=g;$.stopPropagation()}},...e.touch===!0?{}:e.touch});return q(()=>We(r(e.tag,{ref:f,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var m,g;return[r("div",{class:"v-window__container",style:{height:p.value}},[(m=o.default)==null?void 0:m.call(o,{group:l}),e.showArrows!==!1&&r("div",{class:"v-window__controls"},[M.value])]),(g=o.additional)==null?void 0:g.call(o,{group:l})]}}),[[lt("touch"),_.value]])),{group:l}}}),Ke=Z({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...Ee(),...it(),...Lt()},"VWindowItem"),oe=K()({name:"VWindowItem",directives:{Touch:Ge},props:Ke(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:o}=t;const n=Oe(ze),a=ut(e,Fe),{isBooted:s}=Ft();if(!n||!a)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const l=ye(!1),f=c(()=>s.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function y(){!l.value||!n||(l.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function d(){var b;l.value||!n||(l.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=pe((b=n.rootRef.value)==null?void 0:b.clientHeight)),n.transitionCount.value+=1)}function k(){y()}function C(b){l.value&&ct(()=>{!f.value||!l.value||!n||(n.transitionHeight.value=pe(b.clientHeight))})}const p=c(()=>{const b=n.isReversed.value?e.reverseTransition:e.transition;return f.value?{name:typeof b!="string"?n.transition.value:b,onBeforeEnter:d,onAfterEnter:y,onEnterCancelled:k,onBeforeLeave:d,onAfterLeave:y,onLeaveCancelled:k,onEnter:C}:!1}),{hasContent:V}=Ut(e,a.isSelected);return q(()=>r(Kt,{transition:p.value,disabled:!s.value},{default:()=>{var b;return[We(r("div",{class:["v-window-item",a.selectedClass.value,e.class],style:e.style},[V.value&&((b=o.default)==null?void 0:b.call(o))]),[[rt,a.isSelected.value]])]}})),{groupItem:a}}}),ke=Symbol.for("vuetify:v-tabs"),io=Z({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...De(dt({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),ce=K()({name:"VTab",props:io(),setup(e,t){let{slots:o,attrs:n}=t;const{textColorClasses:a,textColorStyles:s}=vt(e,"sliderColor"),l=A(),f=A(),y=c(()=>e.direction==="horizontal"),d=c(()=>{var C,p;return((p=(C=l.value)==null?void 0:C.group)==null?void 0:p.isSelected.value)??!1});function k(C){var V,b;let{value:p}=C;if(p){const T=(b=(V=l.value)==null?void 0:V.$el.parentElement)==null?void 0:b.querySelector(".v-tab--selected .v-tab__slider"),O=f.value;if(!T||!O)return;const H=getComputedStyle(T).color,M=T.getBoundingClientRect(),_=O.getBoundingClientRect(),m=y.value?"x":"y",g=y.value?"X":"Y",$=y.value?"right":"bottom",S=y.value?"width":"height",j=M[m],J=_[m],D=j>J?M[$]-_[$]:M[m]-_[m],ve=Math.sign(D)>0?y.value?"right":"bottom":Math.sign(D)<0?y.value?"left":"top":"center",fe=(Math.abs(D)+(Math.sign(D)<0?M[S]:_[S]))/Math.max(M[S],_[S])||0,Q=M[S]/_[S]||0,le=1.5;Gt(O,{backgroundColor:[H,"currentcolor"],transform:[`translate${g}(${D}px) scale${g}(${Q})`,`translate${g}(${D/le}px) scale${g}(${(fe-1)/le+1})`,"none"],transformOrigin:Array(3).fill(ve)},{duration:225,easing:zt})}}return q(()=>{const C=W.filterProps(e);return r(W,F({symbol:ke,ref:l,class:["v-tab",e.class],style:e.style,tabindex:d.value?0:-1,role:"tab","aria-selected":String(d.value),active:!1},C,n,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":k}),{...o,default:()=>{var p;return r(X,null,[((p=o.default)==null?void 0:p.call(o))??e.text,!e.hideSlider&&r("div",{ref:f,class:["v-tab__slider",a.value],style:s.value},null)])}})}),Nt({},l)}}),uo=Z({...De(Ze(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),ro=K()({name:"VTabsWindow",props:uo(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:o}=t;const n=Oe(ke,null),a=Le(e,"modelValue"),s=c({get(){var l;return a.value!=null||!n?a.value:(l=n.items.value.find(f=>n.selected.value.includes(f.id)))==null?void 0:l.value},set(l){a.value=l}});return q(()=>{const l=ge.filterProps(e);return r(ge,F({_as:"VTabsWindow"},l,{modelValue:s.value,"onUpdate:modelValue":f=>s.value=f,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),o)}),{}}}),co=Z({...Ke()},"VTabsWindowItem"),vo=K()({name:"VTabsWindowItem",props:co(),setup(e,t){let{slots:o}=t;return q(()=>{const n=oe.filterProps(e);return r(oe,F({_as:"VTabsWindowItem"},n,{class:["v-tabs-window-item",e.class],style:e.style}),o)}),{}}});function fo(e){return e?e.map(t=>pt(t)?t:{text:t,value:t}):[]}const mo=Z({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Ht({mandatory:"force",selectedClass:"v-tab-item--selected"}),...ft(),...Pe()},"VTabs"),ho=K()({name:"VTabs",props:mo(),emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:o,slots:n}=t;const a=Le(e,"modelValue"),s=c(()=>fo(e.items)),{densityClasses:l}=mt(e),{backgroundColorClasses:f,backgroundColorStyles:y}=ht(Y(e,"bgColor")),{scopeId:d}=Zt();return yt({VTab:{color:Y(e,"color"),direction:Y(e,"direction"),stacked:Y(e,"stacked"),fixed:Y(e,"fixedTabs"),sliderColor:Y(e,"sliderColor"),hideSlider:Y(e,"hideSlider")}}),q(()=>{const k=Ie.filterProps(e),C=!!(n.window||e.items.length>0);return r(X,null,[r(Ie,F(k,{modelValue:a.value,"onUpdate:modelValue":p=>a.value=p,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},l.value,f.value,e.class],style:[{"--v-tabs-height":pe(e.height)},y.value,e.style],role:"tablist",symbol:ke},d,o),{default:()=>{var p;return[((p=n.default)==null?void 0:p.call(n))??s.value.map(V=>{var b;return((b=n.tab)==null?void 0:b.call(n,{item:V}))??r(ce,F(V,{key:V.text,value:V.value}),{default:n[`tab.${V.value}`]?()=>{var T;return(T=n[`tab.${V.value}`])==null?void 0:T.call(n,{item:V})}:void 0})})]}}),C&&r(ro,F({modelValue:a.value,"onUpdate:modelValue":p=>a.value=p,key:"tabs-window"},d),{default:()=>{var p;return[s.value.map(V=>{var b;return((b=n.item)==null?void 0:b.call(n,{item:V}))??r(vo,{value:V.value},{default:()=>{var T;return(T=n[`item.${V.value}`])==null?void 0:T.call(n,{item:V})}})}),(p=n.window)==null?void 0:p.call(n)]}})])}),{}}});function yo(e,t){const o=A();return z(e,"dragstart",n=>{if(o.value=n.target,typeof t=="string"){const a=t;t=(s,l)=>{l==null||l.setData("text/plain",s.dataset[a]??"")}}t==null||t(o.value,n.dataTransfer)}),z(e,"dragend",()=>{o.value=null}),{element:o}}function qe(e,t,o=!0){const n=A(!1);let a=0;return St&&(z(e,"dragenter",s=>{s.preventDefault(),a++,n.value=!0}),z(e,"dragover",s=>{s.preventDefault()}),z(e,"dragleave",s=>{s.preventDefault(),a--,a===0&&(n.value=!1)}),z(e,"drop",s=>{var l;if(s.preventDefault(),a=0,n.value=!1,t)if(o){const f=Array.from(((l=s.dataTransfer)==null?void 0:l.files)??[]);t(f.length===0?null:f)}else t(s.dataTransfer)})),{isOverDropZone:n}}const po={class:"d-inline-block"},go={class:"text-white overflow-hidden"},ko={class:"title inline-block relative"},bo=["innerHTML"],_o={key:1},wo=["innerHTML"],Vo={key:0},$o={key:1},Co={key:2},xo={key:3},To={class:"table-fixed"},So={class:"w-1/3"},Io={class:"text-center"},Bo=["title"],Ro={class:"text-center"},Mo=["title"],Eo={class:"text-center"},Po=["title"],Ao={class:"text-center"},Wo=["title"],Oo={class:"text-center"},Do=["title"],Lo={class:"text-right"},Uo={class:"text-right"},Ho={class:"text-right"},Xo={class:"text-right"},Yo={class:"text-right"},jo={class:"text-right"},No={class:"text-right"},Go={class:"text-right"},zo={class:"text-right"},Fo={class:"text-right"},Zo=ae({__name:"Ticket",props:{ticket:{}},setup(e){gt(u=>({ce5ffc88:Ve.value.delay,"4e99eebb":Ve.value.duration}));const t=e,{t:o}=kt(),n=c(()=>Se().props.factors),a=A(null),s=new It({linkify:!0}).use(Bt),l=Ye(),f=je(),y=c(()=>Se().props.options),d=c(()=>ee(t.ticket.created_at)),k=c(()=>ee.duration(t.ticket.delay,"s")),C=c(()=>d.value.add(k.value)),p=c(()=>t.ticket.bound_at?ee(t.ticket.bound_at):null),V=c(()=>t.ticket.reservation?ee.duration(t.ticket.reservation,"s"):null),b=c(()=>p.value&&V.value?p.value.add(V.value):null),T=c(()=>t.ticket.accepted_at?ee(t.ticket.accepted_at):null),O=c(()=>`${d.value.format("lll")} (${d.value.fromNow()})`),H=c(()=>`${C.value.format("lll")} (${o("time_left",{time:C.value.fromNow(!0)})})`),M=c(()=>p.value?`${p.value.format("lll")} (${p.value.fromNow()})`:null),_=c(()=>b.value?`${b.value.format("lll")} (${o("time_left",{time:b.value.fromNow(!0)})})`:null),m=c(()=>T.value?`${T.value.format("lll")} (${T.value.fromNow()})`:null),g=c(()=>`${j(t.ticket.weight)} (${o("increment_per_second",{units:t.ticket.weight_increment.toString()})})`),$=c(()=>y.value[`${f.value}_threshold`]),S=c(()=>t.ticket[f.value]),j=u=>u<1e5?u:u.toExponential(1),J=()=>{var u,R;return((u=t.ticket.meta)==null?void 0:u.category_name)??((R=t.ticket.category)==null?void 0:R.name)??""},D=()=>{var u,R;return((u=t.ticket.meta)==null?void 0:u.category_short)??((R=t.ticket.category)==null?void 0:R.short)??""},ve=()=>{var u;return l.altInfo?((u=t.ticket.meta)==null?void 0:u.title)??D():D()},we=c(()=>{var u;return((u=t.ticket.meta)==null?void 0:u.card_title)??"Title"}),fe=c(()=>{var u;return((u=t.ticket.meta)==null?void 0:u.card_subtitle)??J()}),Q=c(()=>{var u;return((u=t.ticket.meta)==null?void 0:u.card_content)??[]}),le=c(()=>S.value>$.value),Ve=c(()=>({delay:-S.value+"s",duration:$.value+"s"}));return(u,R)=>(w(),I("div",po,[r(W,{size:"small",class:de(["ticket justify-start px-2",{overflow:le.value}]),ripple:!1,flat:"",width:"100"},{default:h(()=>{var $e,Ce;return[($e=u.ticket.meta)!=null&&$e.icon?(w(),P(Ue,{key:0,icon:((Ce=u.ticket.meta)==null?void 0:Ce.icon)??"",color:"white"},null,8,["icon"])):G("",!0),i("span",go,[i("span",ko,v(ve()),1)]),r(Xt,{"open-on-click":"",activator:"parent","location-strategy":"connected",location:"bottom center",origin:"auto"},{default:h(()=>{var xe;return[r(Yt,{width:"500","prepend-icon":((xe=u.ticket.meta)==null?void 0:xe.icon)??"",title:we.value,subtitle:fe.value},{default:h(()=>[r(ho,{modelValue:a.value,"onUpdate:modelValue":R[0]||(R[0]=E=>a.value=E)},{default:h(()=>[r(ce,{value:"properties"},{default:h(()=>[B(v(u.$t("properties")),1)]),_:1}),r(ce,{value:"metrics"},{default:h(()=>[B(v(u.$t("metrics")),1)]),_:1}),r(ce,{value:"details"},{default:h(()=>[B(v(u.$t("details")),1)]),_:1})]),_:1},8,["modelValue"]),r(jt,null,{default:h(()=>[r(ge,{modelValue:a.value,"onUpdate:modelValue":R[1]||(R[1]=E=>a.value=E)},{default:h(()=>[r(oe,{value:"properties",class:"prose"},{default:h(()=>[typeof Q.value=="string"?(w(),I("div",{key:0,innerHTML:x(s).render(Q.value)},null,8,bo)):(w(),I("table",_o,[i("tbody",null,[(w(!0),I(X,null,ne(Q.value,([E,ie])=>(w(),I("tr",{key:E},[i("th",null,v(E),1),i("td",{innerHTML:x(s).renderInline(ie)},null,8,wo)]))),128))])]))]),_:1}),r(oe,{value:"metrics",class:"prose"},{default:h(()=>[i("table",null,[i("tbody",null,[i("tr",null,[i("th",null,v(u.$t("issued_on")),1),i("td",null,v(O.value),1)]),C.value.isAfter(u.$dayjs())?(w(),I("tr",Vo,[i("th",null,v(u.$t("delayed_until")),1),i("td",null,v(H.value),1)])):G("",!0),p.value?(w(),I("tr",$o,[i("th",null,v(u.$t("bound_at")),1),i("td",null,v(M.value),1)])):G("",!0),b.value&&b.value.isAfter(u.$dayjs())?(w(),I("tr",Co,[i("th",null,v(u.$t("reserved_until")),1),i("td",null,v(_.value),1)])):G("",!0),T.value?(w(),I("tr",xo,[i("th",null,v(u.$t("accepted_at")),1),i("td",null,v(m.value),1)])):G("",!0),i("tr",null,[i("th",null,v(u.$t("current_weight")),1),i("td",null,v(g.value),1)]),i("tr",null,[i("th",null,v(u.$t("complexity")),1),i("td",null,v(u.ticket.complexity+" "+x(o)("units")),1)])])])]),_:1}),r(oe,{value:"details",class:"prose"},{default:h(()=>[i("table",To,[i("thead",null,[i("tr",null,[i("th",So,v(u.$t("factor")),1),i("th",Io,[i("em",{class:"metric",title:u.$t("initial_weight")},R[2]||(R[2]=[B("W"),i("sub",null,"0",-1)]),8,Bo)]),i("th",Ro,[i("em",{class:"metric",title:u.$t("weight_increment")},R[3]||(R[3]=[B("W"),i("sub",null,"i",-1)]),8,Mo)]),i("th",Eo,[i("em",{class:"metric",title:u.$t("complexity")},"C",8,Po)]),i("th",Ao,[i("em",{class:"metric",title:u.$t("delay_sec")},"D",8,Wo)]),i("th",Oo,[i("em",{class:"metric",title:u.$t("reservation_sec")},"R",8,Do)])])]),i("tbody",null,[(w(!0),I(X,null,ne(u.ticket.metrics??{},(E,ie)=>{var Te;return w(),I("tr",{key:ie},[i("th",null,v(((Te=n.value[ie])==null?void 0:Te.name)??u.$t("unknown")),1),i("td",Lo,v(E.initial_weight??0),1),i("td",Uo,v(E.weight_increment??0),1),i("td",Ho,v(E.complexity??0),1),i("td",Xo,v(E.delay??0),1),i("td",Yo,v(E.reservation??0),1)])}),128))]),i("tfoot",null,[i("tr",null,[i("th",null,v(u.$t("total")),1),i("td",jo,v(u.ticket.initial_weight),1),i("td",No,v(u.ticket.weight_increment),1),i("td",Go,v(u.ticket.complexity),1),i("td",zo,v(u.ticket.delay),1),i("td",Fo,v(u.ticket.reservation),1)])])])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["prepend-icon","title","subtitle"])]}),_:1})]}),_:1},8,["class"])]))}}),Ko=se(Zo,[["__scopeId","data-v-e57ba096"]]),qo=ae({__name:"TicketPool",props:{tickets:{}},setup(e){const t=A(null);yo(t,"uuid");const{lock:o,unlock:n,element:a,triggerElement:s}=Rt(t),{x:l}=Mt({type:"movement"});c(()=>re(Ne)),Ae([a,l],([y,d])=>{!y||!s.value||s.value.dataset.uuid});const f=A(!1);return He(()=>{setTimeout(()=>f.value=!0,500)}),(y,d)=>(w(),P(x(Re),{ref_key:"ticketPool",ref:t,name:"ticket-pool",class:"@container tickets leading-8 !pt-[1px] !pb-[3px]",css:f.value,onMouseup:x(n)},{default:h(()=>[(w(!0),I(X,null,ne(y.tickets,k=>(w(),P(Ko,{key:k.uuid,"data-uuid":k.uuid,ticket:k,draggable:"true",class:"mr-1",onMousedown:bt(x(o),["ctrl"])},null,8,["data-uuid","ticket","onMousedown"]))),128))]),_:1},8,["css","onMouseup"]))}}),Jo=se(qo,[["__scopeId","data-v-ba6baa0a"]]);function be(){async function e(a,s){return await window.axios.patch(ue("ticket-allocator.operators.ready",a),{ready:s})}async function t(a,s){return await window.axios.patch(ue("ticket-allocator.tickets.weight",a),{weight_points:s})}async function o(a,s){return await window.axios.patch(ue("ticket-allocator.tickets.handler",a),{operator_uuid:s??null})}async function n(a){return await window.axios.delete(ue("ticket-allocator.tickets.close",a))}return{ready:e,weight:t,handler:o,close:n}}const Qo=ae({__name:"TicketRow",props:{tickets:{},pool:{type:Boolean}},setup(e){const t=e;let o=A(!1);const n=c(()=>t.pool?"th":"td"),a=c(()=>t.tickets.reduce((d,{complexity:k})=>d+k,0)),s=c(()=>o.value?"mdi-chevron-down":"mdi-chevron-up"),l=be(),f=A(null),{isOverDropZone:y}=qe(f,async d=>{var p;const k=d==null?void 0:d.getData("text/plain");if(!k)throw new Error("Ticket UUID undefined.");const C=(p=f.value)==null?void 0:p.dataset.uuid;return await l.handler(k,C)},!1);return(d,k)=>(w(),I("tr",{ref_key:"ticketRow",ref:f,class:de(["ticket-row",{dragover:x(y)}])},[(w(),P(te(n.value),{class:"status py-1"},{default:h(()=>[N(d.$slots,"status",{},void 0,!0)]),_:3})),(w(),P(te(n.value),{class:"name !pt-[6px] font-weight-bold"},{default:h(()=>[N(d.$slots,"name",{},void 0,!0)]),_:3})),(w(),P(te(n.value),{class:"load !pt-[6px] text-center"},{default:h(()=>[N(d.$slots,"load",{},()=>[B(v(d.tickets.length),1)],!0),k[2]||(k[2]=B("/")),N(d.$slots,"load-max",{},()=>[k[1]||(k[1]=B("∞"))],!0)]),_:3})),(w(),P(te(n.value),{class:"complexity !pt-[6px] text-center"},{default:h(()=>[N(d.$slots,"complexity",{},()=>[B(v(a.value),1)],!0),k[4]||(k[4]=B("/")),N(d.$slots,"complexity-max",{},()=>[k[3]||(k[3]=B("∞"))],!0)]),_:3})),r(Jo,{tag:n.value,tickets:d.tickets,class:de({collapsed:x(o)})},null,8,["tag","tickets","class"]),(w(),P(te(n.value),{class:"more !pt-[2px] text-center"},{default:h(()=>[r(W,{size:"x-small",variant:"tonal",icon:s.value,onClick:k[0]||(k[0]=C=>Xe(o)?o.value=!x(o):o=!x(o))},null,8,["icon"])]),_:1}))],2))}}),Je=se(Qo,[["__scopeId","data-v-62b3ff4d"]]),en=ae({__name:"OperatorRow",props:{operator:{}},setup(e){const t=e,o=c(()=>{var s,l;return{online:t.operator.online,ready:t.operator.ready,busy:!!((s=t.operator.tickets)!=null&&s.length),full:t.operator.ticket_limit!==null&&((l=t.operator.tickets)==null?void 0:l.length)>=t.operator.ticket_limit}}),n=be(),a=async()=>await n.ready(t.operator.uuid,!t.operator.ready);return(s,l)=>(w(),P(Je,{tickets:s.operator.tickets,"data-uuid":s.operator.uuid,class:de(["operator",o.value])},{status:h(()=>[r(Ue,{icon:"mdi-account",onClick:a})]),"load-max":h(()=>[B(v(s.operator.ticket_limit??"∞"),1)]),"complexity-max":h(()=>[B(v(s.operator.complexity_limit??"∞"),1)]),name:h(()=>[B(v(s.operator.name),1)]),_:1},8,["tickets","data-uuid","class"]))}}),tn=se(en,[["__scopeId","data-v-a776c74a"]]);function on(e,t){return e.reduce((o,n)=>(typeof n[t]=="number"&&(o+=n[t]),o),0)}function _e(e,t){return e.map(o=>_t(o,t)).filter(o=>o)}function nn(e,t){const o=_e(e,t).filter(n=>typeof n=="number");return o.length===0?0:Math.max(...o)}function an(e,t){const o=_e(e,t).filter(n=>typeof n=="number");return o.length===0?0:Math.min(...o)}function sn(e){return e.map(t=>t[t.$getLocalKey()])}function ln(e,t){const o={},n=Array.isArray(t)?t:[t];return e.forEach(a=>{const s=n.length===1?a[n[0]]:`[${n.map(l=>a[l]).toString()}]`;o[s]=(o[s]||[]).concat(a)}),o}function un(e,t,o){const n=[],a=[];return typeof t=="function"&&a.push(t)&&n.push("asc"),Array.isArray(t)&&t.forEach(s=>a.push(s[0])&&n.push(s[1])),a.length===0&&a.push(t),wt(e,a,n,o)}function rn(e){return{sum:t=>on(e,t),min:t=>an(e,t),max:t=>nn(e,t),pluck:t=>_e(e,t),groupBy:t=>ln(e,t),sortBy:(t,o="SORT_REGULAR")=>un(e,t,o),keys:()=>sn(e)}}const cn={class:"font-semibold text-xl text-gray-800 leading-tight"},dn={class:"align-top"},vn=ae({__name:"Dashboard",props:{operators:{},tickets:{},ticketCategories:{},factors:{},matchers:{}},setup(e){const t=e,o=Ye(),n=je(),a=c(()=>re(Wt)),s=c(()=>re(Ne)),l=c(()=>re(Ot)),f=Et(At),y=Vt({}),d=_=>Object.entries(y).reduce((m,g)=>{const[$,S]=g,j=_==null?void 0:_[$],J=j===void 0||!S.length||S.includes(j.toString());return m&&J},!0),k=c(()=>rn(a.value.with("tickets",_=>{_.with("category").where("meta",d).orderBy(n.value,"desc")}).whereHas("tickets").orWhere(_=>!o.hideEmpty&&_.online).get()).sortBy([["online","desc"],["ready","desc"],["free_slots","desc"],["ticket_count","asc"],["name","asc"]])),C=c(()=>s.value.unbound().with("category").where("meta",d).orderBy(n.value,"desc").get()),p=be(),V=A(null),{isOverDropZone:b}=qe(V,async _=>{const m=_==null?void 0:_.getData("text/plain");if(!m)throw new Error("Ticket UUID undefined.");return await p.close(m)},!1);He(()=>{f.listen(Pt.PropsInvalidated,()=>me.reload()).listen(L.Enrolled,a.value.enroll).listen(L.Resigned,a.value.resign).listen(L.NameChanged,a.value.changeName).listen(L.Online,a.value.setOnline).listen(L.Offline,a.value.setOffline).listen(L.Ready,a.value.setReady).listen(L.NotReady,a.value.setNotReady).listen(L.TicketLimitAdjusted,a.value.adjustTicketLimit).listen(L.ComplexityLimitAdjusted,a.value.adjustComplexityLimit).listen(U.Created,s.value.create).listen(U.Closed,s.value.close).listen(U.Bound,s.value.bind).listen(U.Accepted,s.value.accept).listen(U.Unbound,s.value.unbind).listen(U.CategoryChanged,s.value.changeCategory).listen(U.MetaValueSet,s.value.setMetaValue).listen(U.MetaValuesMerged,s.value.mergeMetaValues).listen(U.MetricsAdjusted,s.value.adjustMetrics)});function T(){a.value.fresh(t.operators),s.value.fresh(t.tickets),l.value.fresh(t.ticketCategories)}const O=me.on("navigate",T),H=me.on("success",T);$t(()=>{O(),H()});const M=_=>Object.entries(_).map(([m,g])=>({title:m,value:g}));return(_,m)=>(w(),I(X,null,[r(x(Ct),{title:_.$t("dashboard")},null,8,["title"]),r(Qe,null,{header:h(()=>[i("h2",cn,v(_.$t("dashboard")),1)]),default:h(()=>[i("div",null,[r(qt,{fluid:""},{default:h(()=>[r(Be,null,{default:h(()=>[r(he,null,{default:h(()=>[r(xt,{modelValue:x(o).all,"onUpdate:modelValue":m[0]||(m[0]=g=>x(o).all=g),variant:"plain",multiple:""},{default:h(()=>[r(W,{value:"hide-empty",icon:x(o).hideEmpty?"mdi-eye-off-outline":"mdi-eye-outline"},null,8,["icon"]),r(W,{value:"alt-info",icon:x(o).altInfo?"mdi-magnify-plus-outline":"mdi-magnify"},null,8,["icon"]),r(W,{value:"unlocked",icon:x(o).unlocked?"mdi-lock-open-variant":"mdi-lock",color:"red",variant:x(o).unlocked?"text":"plain"},null,8,["icon","variant"])]),_:1},8,["modelValue"]),x(o).unlocked?(w(),P(Tt,{key:0,variant:"plain"},{default:h(()=>[r(W,{ref_key:"closeTicket",ref:V,icon:x(b)?"mdi-delete-empty":"mdi-delete"},null,8,["icon"]),r(W,{icon:"mdi-refresh"})]),_:1})):G("",!0)]),_:1}),r(he,{cols:"2"},{default:h(()=>[r(Dt,{modelValue:x(n),"onUpdate:modelValue":m[1]||(m[1]=g=>Xe(n)?n.value=g:null),"false-value":"weight","true-value":"duration","prepend-icon":"mdi-weight","append-icon":"mdi-clock",class:"d-flex justify-end"},null,8,["modelValue"])]),_:1})]),_:1}),r(Be,null,{default:h(()=>[(w(!0),I(X,null,ne(_.matchers,(g,$)=>(w(),P(he,{key:$,cols:"2"},{default:h(()=>[r(Jt,{modelValue:y[$],"onUpdate:modelValue":S=>y[$]=S,multiple:"",clearable:"",chips:"","closable-chips":"",label:_.$t($),items:M(g)},null,8,["modelValue","onUpdate:modelValue","label","items"])]),_:2},1024))),128))]),_:1})]),_:1}),r(Qt,{"fixed-header":"",height:"600px",density:"compact",class:"ticket-monitor"},{default:h(()=>[i("thead",dn,[r(Je,{pool:"",tickets:C.value},{name:h(()=>[B(v(_.$t("ticket_pool")),1)]),_:1},8,["tickets"])]),r(x(Re),{tag:"tbody",class:"align-top",name:"operator-pool"},{default:h(()=>[(w(!0),I(X,null,ne(k.value,g=>(w(),P(tn,{key:g.uuid,operator:g},null,8,["operator"]))),128))]),_:1})]),_:1})])]),_:1})],64))}}),Bn=se(vn,[["__scopeId","data-v-10353e41"]]);export{Bn as default};
//# sourceMappingURL=Dashboard-C0UnizX3.js.map
