import{p as z,m as Q,aZ as fe,c2 as ve,g as q,f,j as J,i as l,l as ee,x as ae,M as me,av as Y,bA as Z,aA as he,aD as ge,b as be,c as ye,aL as xe,aO as Ce,u as Ve,aT as _e,r as $,I as Pe,J as Ie,C as we,w as Fe,y as Re,aR as Se,bJ as Be,ap as pe,F as N,D as j,bl as ke,c3 as Ae,aV as Te,E as De,aU as Oe,n as Le,c4 as $e,z as ne,aX as Me}from"./app-CDWs3zQZ.js";import{d as We,e as Ee,u as ie,f as Ne,m as je,V as le}from"./VInput-DgbT1HgA.js";class U{constructor(i){let{x:a,y:s,width:t,height:n}=i;this.x=a,this.y=s,this.width=t,this.height=n}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function nt(e,i){return{x:{before:Math.max(0,i.left-e.left),after:Math.max(0,e.right-i.right)},y:{before:Math.max(0,i.top-e.top),after:Math.max(0,e.bottom-i.bottom)}}}function lt(e){return Array.isArray(e)?new U({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function Ue(e){const i=e.getBoundingClientRect(),a=getComputedStyle(e),s=a.transform;if(s){let t,n,r,u,c;if(s.startsWith("matrix3d("))t=s.slice(9,-1).split(/, /),n=+t[0],r=+t[5],u=+t[12],c=+t[13];else if(s.startsWith("matrix("))t=s.slice(7,-1).split(/, /),n=+t[0],r=+t[3],u=+t[4],c=+t[5];else return new U(i);const d=a.transformOrigin,v=i.x-u-(1-n)*parseFloat(d),m=i.y-c-(1-r)*parseFloat(d.slice(d.indexOf(" ")+1)),w=n?i.width/n:e.offsetWidth+1,V=r?i.height/r:e.offsetHeight+1;return new U({x:v,y:m,width:w,height:V})}else return new U(i)}function ze(e,i,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};let s;try{s=e.animate(i,a)}catch{return{finished:Promise.resolve()}}return typeof s.finished>"u"&&(s.finished=new Promise(t=>{s.onfinish=()=>{t(s)}})),s}const qe="cubic-bezier(0.4, 0, 0.2, 1)",at="cubic-bezier(0.0, 0, 0.2, 1)",it="cubic-bezier(0.4, 0, 1, 1)",G=Symbol("Forwarded refs");function K(e,i){let a=e;for(;a;){const s=Reflect.getOwnPropertyDescriptor(a,i);if(s)return s;a=Object.getPrototypeOf(a)}}function Je(e){for(var i=arguments.length,a=new Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];return e[G]=a,new Proxy(e,{get(t,n){if(Reflect.has(t,n))return Reflect.get(t,n);if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const r of a)if(r.value&&Reflect.has(r.value,n)){const u=Reflect.get(r.value,n);return typeof u=="function"?u.bind(r.value):u}}},has(t,n){if(Reflect.has(t,n))return!0;if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const r of a)if(r.value&&Reflect.has(r.value,n))return!0;return!1},set(t,n,r){if(Reflect.has(t,n))return Reflect.set(t,n,r);if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const u of a)if(u.value&&Reflect.has(u.value,n))return Reflect.set(u.value,n,r);return!1},getOwnPropertyDescriptor(t,n){var u;const r=Reflect.getOwnPropertyDescriptor(t,n);if(r)return r;if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const c of a){if(!c.value)continue;const d=K(c.value,n)??("_"in c.value?K((u=c.value._)==null?void 0:u.setupState,n):void 0);if(d)return d}for(const c of a){const d=c.value&&c.value[G];if(!d)continue;const v=d.slice();for(;v.length;){const m=v.shift(),w=K(m.value,n);if(w)return w;const V=m.value&&m.value[G];V&&v.push(...V)}}}}})}const Xe=z({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Q(),...fe({transition:{component:ve}})},"VCounter"),He=q()({name:"VCounter",functional:!0,props:Xe(),setup(e,i){let{slots:a}=i;const s=f(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return J(()=>l(me,{transition:e.transition},{default:()=>[ee(l("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[a.default?a.default({counter:s.value,max:e.max,value:e.value}):s.value]),[[ae,e.active]])]})),{}}}),Ye=z({floating:Boolean,...Q()},"VFieldLabel"),E=q()({name:"VFieldLabel",props:Ye(),setup(e,i){let{slots:a}=i;return J(()=>l(We,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},a)),{}}}),Ze=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],se=z({appendInnerIcon:Y,bgColor:String,clearable:Boolean,clearIcon:{type:Y,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:Y,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Ze.includes(e)},"onClick:clear":Z(),"onClick:appendInner":Z(),"onClick:prependInner":Z(),...Q(),...he(),...ge(),...be()},"VField"),re=q()({name:"VField",inheritAttrs:!1,props:{id:String,...Ee(),...se()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{attrs:a,emit:s,slots:t}=i;const{themeClasses:n}=ye(e),{loaderClasses:r}=xe(e),{focusClasses:u,isFocused:c,focus:d,blur:v}=ie(e),{InputIcon:m}=Ne(e),{roundedClasses:w}=Ce(e),{rtlClasses:V}=Ve(),R=f(()=>e.dirty||e.active),F=f(()=>!!(e.label||t.label)),T=f(()=>!e.singleLine&&F.value),D=_e(),_=f(()=>e.id||`input-${D}`),X=f(()=>`${_.value}-messages`),M=$(),O=$(),o=$(),h=f(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:b,backgroundColorStyles:P}=Pe(Ie(e,"bgColor")),{textColorClasses:H,textColorStyles:W}=we(f(()=>e.error||e.disabled?void 0:R.value&&c.value?e.color:e.baseColor));Fe(R,y=>{if(T.value){const x=M.value.$el,C=O.value.$el;requestAnimationFrame(()=>{const I=Ue(x),g=C.getBoundingClientRect(),L=g.x-I.x,p=g.y-I.y-(I.height/2-g.height/2),k=g.width/.75,A=Math.abs(k-I.width)>1?{maxWidth:Re(k)}:void 0,oe=getComputedStyle(x),te=getComputedStyle(C),ue=parseFloat(oe.transitionDuration)*1e3||150,ce=parseFloat(te.getPropertyValue("--v-field-label-scale")),de=te.getPropertyValue("color");x.style.visibility="visible",C.style.visibility="hidden",ze(x,{transform:`translate(${L}px, ${p}px) scale(${ce})`,color:de,...A},{duration:ue,easing:qe,direction:y?"normal":"reverse"}).finished.then(()=>{x.style.removeProperty("visibility"),C.style.removeProperty("visibility")})})}},{flush:"post"});const S=f(()=>({isActive:R,isFocused:c,controlRef:o,blur:v,focus:d}));function B(y){y.target!==document.activeElement&&y.preventDefault()}return J(()=>{var L,p,k;const y=e.variant==="outlined",x=!!(t["prepend-inner"]||e.prependInnerIcon),C=!!(e.clearable||t.clear)&&!e.disabled,I=!!(t["append-inner"]||e.appendInnerIcon||C),g=()=>t.label?t.label({...S.value,label:e.label,props:{for:_.value}}):e.label;return l("div",j({class:["v-field",{"v-field--active":R.value,"v-field--appended":I,"v-field--center-affix":e.centerAffix??!h.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":x,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!g(),[`v-field--variant-${e.variant}`]:!0},n.value,b.value,u.value,r.value,w.value,V.value,e.class],style:[P.value,e.style],onClick:B},a),[l("div",{class:"v-field__overlay"},null),l(Se,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),x&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(m,{key:"prepend-icon",name:"prependInner"},null),(L=t["prepend-inner"])==null?void 0:L.call(t,S.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&T.value&&l(E,{key:"floating-label",ref:O,class:[H.value],floating:!0,for:_.value,style:W.value},{default:()=>[g()]}),F.value&&l(E,{key:"label",ref:M,for:_.value},{default:()=>[g()]}),(p=t.default)==null?void 0:p.call(t,{...S.value,props:{id:_.value,class:"v-field__input","aria-describedby":X.value},focus:d,blur:v})]),C&&l(Be,{key:"clear"},{default:()=>[ee(l("div",{class:"v-field__clearable",onMousedown:A=>{A.preventDefault(),A.stopPropagation()}},[l(pe,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[t.clear?t.clear({...S.value,props:{onFocus:d,onBlur:v,onClick:e["onClick:clear"]}}):l(m,{name:"clear",onFocus:d,onBlur:v},null)]})]),[[ae,e.dirty]])]}),I&&l("div",{key:"append",class:"v-field__append-inner"},[(k=t["append-inner"])==null?void 0:k.call(t,S.value),e.appendInnerIcon&&l(m,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",H.value],style:W.value},[y&&l(N,null,[l("div",{class:"v-field__outline__start"},null),T.value&&l("div",{class:"v-field__outline__notch"},[l(E,{ref:O,floating:!0,for:_.value},{default:()=>[g()]})]),l("div",{class:"v-field__outline__end"},null)]),h.value&&T.value&&l(E,{ref:O,floating:!0,for:_.value},{default:()=>[g()]})])])}),{controlRef:o}}});function Ge(e){const i=Object.keys(re.props).filter(a=>!ke(a)&&a!=="class"&&a!=="style");return Ae(e,i)}const Ke=["color","file","time","date","datetime-local","week","month"],Qe=z({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...je(),...se()},"VTextField"),st=q()({name:"VTextField",directives:{Intersect:Te},inheritAttrs:!1,props:Qe(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{attrs:a,emit:s,slots:t}=i;const n=De(e,"modelValue"),{isFocused:r,focus:u,blur:c}=ie(e),d=f(()=>typeof e.counterValue=="function"?e.counterValue(n.value):typeof e.counterValue=="number"?e.counterValue:(n.value??"").toString().length),v=f(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),m=f(()=>["plain","underlined"].includes(e.variant));function w(o,h){var b,P;!e.autofocus||!o||(P=(b=h[0].target)==null?void 0:b.focus)==null||P.call(b)}const V=$(),R=$(),F=$(),T=f(()=>Ke.includes(e.type)||e.persistentPlaceholder||r.value||e.active);function D(){var o;F.value!==document.activeElement&&((o=F.value)==null||o.focus()),r.value||u()}function _(o){s("mousedown:control",o),o.target!==F.value&&(D(),o.preventDefault())}function X(o){D(),s("click:control",o)}function M(o){o.stopPropagation(),D(),ne(()=>{n.value=null,Me(e["onClick:clear"],o)})}function O(o){var b;const h=o.target;if(n.value=h.value,(b=e.modelModifiers)!=null&&b.trim&&["text","search","password","tel","url"].includes(e.type)){const P=[h.selectionStart,h.selectionEnd];ne(()=>{h.selectionStart=P[0],h.selectionEnd=P[1]})}}return J(()=>{const o=!!(t.counter||e.counter!==!1&&e.counter!=null),h=!!(o||t.details),[b,P]=Oe(a),{modelValue:H,...W}=le.filterProps(e),S=Ge(e);return l(le,j({ref:V,modelValue:n.value,"onUpdate:modelValue":B=>n.value=B,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":m.value},e.class],style:e.style},b,W,{centerAffix:!m.value,focused:r.value}),{...t,default:B=>{let{id:y,isDisabled:x,isDirty:C,isReadonly:I,isValid:g}=B;return l(re,j({ref:R,onMousedown:_,onClick:X,"onClick:clear":M,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},S,{id:y.value,active:T.value||C.value,dirty:C.value||e.dirty,disabled:x.value,focused:r.value,error:g.value===!1}),{...t,default:L=>{let{props:{class:p,...k}}=L;const A=ee(l("input",j({ref:F,value:n.value,onInput:O,autofocus:e.autofocus,readonly:I.value,disabled:x.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:D,onBlur:c},k,P),null),[[Le("intersect"),{handler:w},null,{once:!0}]]);return l(N,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[l("span",{class:"v-text-field__prefix__text"},[e.prefix])]),t.default?l("div",{class:p,"data-no-activator":""},[t.default(),A]):$e(A,{class:p}),e.suffix&&l("span",{class:"v-text-field__suffix"},[l("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:h?B=>{var y;return l(N,null,[(y=t.details)==null?void 0:y.call(t,B),o&&l(N,null,[l("span",null,null),l(He,{active:e.persistentCounter||r.value,value:d.value,max:v.value,disabled:e.disabled},t.counter)])])}:void 0})}),Je({},V,R,F)}});export{U as B,st as V,ze as a,Ge as b,re as c,He as d,Qe as e,Je as f,at as g,it as h,lt as i,nt as j,se as m,Ue as n,qe as s};
//# sourceMappingURL=VTextField-Dz0gHtDR.js.map
