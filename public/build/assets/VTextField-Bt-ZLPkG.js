import{p as j,m as Z,g as U,f as b,j as z,i as l,l as ee,v as ae,an as X,bi as Y,ar as fe,au as ve,b as me,c as he,aC as ge,aF as ye,u as be,aJ as xe,r as O,H as Ce,I as Ve,B as _e,w as Pe,x as we,aH as Ie,aj as Fe,F as L,C as W,b4 as Re,bH as Se,D as Be,aK as ke,n as pe,bI as De,y as ne,aN as Te}from"./app-Ch62ayHM.js";import{m as Ae,d as Oe,M as $e,c as Me,I as Ee}from"./VGrid-DZi2vrC2.js";import{d as Le,e as We,u as ie,f as Ne,m as je,V as le}from"./VInput-mc00EMnO.js";class N{constructor(i){let{x:a,y:o,width:t,height:n}=i;this.x=a,this.y=o,this.width=t,this.height=n}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function lt(e,i){return{x:{before:Math.max(0,i.left-e.left),after:Math.max(0,e.right-i.right)},y:{before:Math.max(0,i.top-e.top),after:Math.max(0,e.bottom-i.bottom)}}}function at(e){return Array.isArray(e)?new N({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function Ue(e){const i=e.getBoundingClientRect(),a=getComputedStyle(e),o=a.transform;if(o){let t,n,r,u,c;if(o.startsWith("matrix3d("))t=o.slice(9,-1).split(/, /),n=+t[0],r=+t[5],u=+t[12],c=+t[13];else if(o.startsWith("matrix("))t=o.slice(7,-1).split(/, /),n=+t[0],r=+t[3],u=+t[4],c=+t[5];else return new N(i);const d=a.transformOrigin,m=i.x-u-(1-n)*parseFloat(d),h=i.y-c-(1-r)*parseFloat(d.slice(d.indexOf(" ")+1)),F=n?i.width/n:e.offsetWidth+1,w=r?i.height/r:e.offsetHeight+1;return new N({x:m,y:h,width:F,height:w})}else return new N(i)}function ze(e,i,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};let o;try{o=e.animate(i,a)}catch{return{finished:Promise.resolve()}}return typeof o.finished>"u"&&(o.finished=new Promise(t=>{o.onfinish=()=>{t(o)}})),o}const He="cubic-bezier(0.4, 0, 0.2, 1)",it="cubic-bezier(0.0, 0, 0.2, 1)",ot="cubic-bezier(0.4, 0, 1, 1)",G=Symbol("Forwarded refs");function Q(e,i){let a=e;for(;a;){const o=Reflect.getOwnPropertyDescriptor(a,i);if(o)return o;a=Object.getPrototypeOf(a)}}function Ke(e){for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];return e[G]=a,new Proxy(e,{get(t,n){if(Reflect.has(t,n))return Reflect.get(t,n);if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const r of a)if(r.value&&Reflect.has(r.value,n)){const u=Reflect.get(r.value,n);return typeof u=="function"?u.bind(r.value):u}}},has(t,n){if(Reflect.has(t,n))return!0;if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const r of a)if(r.value&&Reflect.has(r.value,n))return!0;return!1},set(t,n,r){if(Reflect.has(t,n))return Reflect.set(t,n,r);if(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))return!1;for(const u of a)if(u.value&&Reflect.has(u.value,n))return Reflect.set(u.value,n,r);return!1},getOwnPropertyDescriptor(t,n){var u;const r=Reflect.getOwnPropertyDescriptor(t,n);if(r)return r;if(!(typeof n=="symbol"||n.startsWith("$")||n.startsWith("__"))){for(const c of a){if(!c.value)continue;const d=Q(c.value,n)??("_"in c.value?Q((u=c.value._)==null?void 0:u.setupState,n):void 0);if(d)return d}for(const c of a){const d=c.value&&c.value[G];if(!d)continue;const m=d.slice();for(;m.length;){const h=m.shift(),F=Q(h.value,n);if(F)return F;const w=h.value&&h.value[G];w&&m.push(...w)}}}}})}const qe=j({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Z(),...Ae({transition:{component:Oe}})},"VCounter"),Je=U()({name:"VCounter",functional:!0,props:qe(),setup(e,i){let{slots:a}=i;const o=b(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return z(()=>l($e,{transition:e.transition},{default:()=>[ee(l("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[a.default?a.default({counter:o.value,max:e.max,value:e.value}):o.value]),[[ae,e.active]])]})),{}}}),Xe=j({floating:Boolean,...Z()},"VFieldLabel"),E=U()({name:"VFieldLabel",props:Xe(),setup(e,i){let{slots:a}=i;return z(()=>l(Le,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},a)),{}}}),Ye=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],oe=j({appendInnerIcon:X,bgColor:String,clearable:Boolean,clearIcon:{type:X,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:X,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Ye.includes(e)},"onClick:clear":Y(),"onClick:appendInner":Y(),"onClick:prependInner":Y(),...Z(),...fe(),...ve(),...me()},"VField"),re=U()({name:"VField",inheritAttrs:!1,props:{id:String,...We(),...oe()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{attrs:a,emit:o,slots:t}=i;const{themeClasses:n}=he(e),{loaderClasses:r}=ge(e),{focusClasses:u,isFocused:c,focus:d,blur:m}=ie(e),{InputIcon:h}=Ne(e),{roundedClasses:F}=ye(e),{rtlClasses:w}=be(),S=b(()=>e.dirty||e.active),V=b(()=>!e.singleLine&&!!(e.label||t.label)),H=xe(),g=b(()=>e.id||`input-${H}`),K=b(()=>`${g.value}-messages`),$=O(),T=O(),M=O(),s=b(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:x,backgroundColorStyles:C}=Ce(Ve(e,"bgColor")),{textColorClasses:_,textColorStyles:q}=_e(b(()=>e.error||e.disabled?void 0:S.value&&c.value?e.color:e.baseColor));Pe(S,f=>{if(V.value){const v=$.value.$el,P=T.value.$el;requestAnimationFrame(()=>{const I=Ue(v),y=P.getBoundingClientRect(),A=y.x-I.x,k=y.y-I.y-(I.height/2-y.height/2),p=y.width/.75,D=Math.abs(p-I.width)>1?{maxWidth:we(p)}:void 0,se=getComputedStyle(v),te=getComputedStyle(P),ue=parseFloat(se.transitionDuration)*1e3||150,ce=parseFloat(te.getPropertyValue("--v-field-label-scale")),de=te.getPropertyValue("color");v.style.visibility="visible",P.style.visibility="hidden",ze(v,{transform:`translate(${A}px, ${k}px) scale(${ce})`,color:de,...D},{duration:ue,easing:He,direction:f?"normal":"reverse"}).finished.then(()=>{v.style.removeProperty("visibility"),P.style.removeProperty("visibility")})})}},{flush:"post"});const B=b(()=>({isActive:S,isFocused:c,controlRef:M,blur:m,focus:d}));function J(f){f.target!==document.activeElement&&f.preventDefault()}function R(f){var v;f.key!=="Enter"&&f.key!==" "||(f.preventDefault(),f.stopPropagation(),(v=e["onClick:clear"])==null||v.call(e,new MouseEvent("click")))}return z(()=>{var A,k,p;const f=e.variant==="outlined",v=!!(t["prepend-inner"]||e.prependInnerIcon),P=!!(e.clearable||t.clear),I=!!(t["append-inner"]||e.appendInnerIcon||P),y=()=>t.label?t.label({...B.value,label:e.label,props:{for:g.value}}):e.label;return l("div",W({class:["v-field",{"v-field--active":S.value,"v-field--appended":I,"v-field--center-affix":e.centerAffix??!s.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":v,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!y(),[`v-field--variant-${e.variant}`]:!0},n.value,x.value,u.value,r.value,F.value,w.value,e.class],style:[C.value,e.style],onClick:J},a),[l("div",{class:"v-field__overlay"},null),l(Ie,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),v&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(h,{key:"prepend-icon",name:"prependInner"},null),(A=t["prepend-inner"])==null?void 0:A.call(t,B.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&V.value&&l(E,{key:"floating-label",ref:T,class:[_.value],floating:!0,for:g.value,style:q.value},{default:()=>[y()]}),l(E,{ref:$,for:g.value},{default:()=>[y()]}),(k=t.default)==null?void 0:k.call(t,{...B.value,props:{id:g.value,class:"v-field__input","aria-describedby":K.value},focus:d,blur:m})]),P&&l(Me,{key:"clear"},{default:()=>[ee(l("div",{class:"v-field__clearable",onMousedown:D=>{D.preventDefault(),D.stopPropagation()}},[l(Fe,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[t.clear?t.clear({...B.value,props:{onKeydown:R,onFocus:d,onBlur:m,onClick:e["onClick:clear"]}}):l(h,{name:"clear",onKeydown:R,onFocus:d,onBlur:m},null)]})]),[[ae,e.dirty]])]}),I&&l("div",{key:"append",class:"v-field__append-inner"},[(p=t["append-inner"])==null?void 0:p.call(t,B.value),e.appendInnerIcon&&l(h,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",_.value],style:q.value},[f&&l(L,null,[l("div",{class:"v-field__outline__start"},null),V.value&&l("div",{class:"v-field__outline__notch"},[l(E,{ref:T,floating:!0,for:g.value},{default:()=>[y()]})]),l("div",{class:"v-field__outline__end"},null)]),s.value&&V.value&&l(E,{ref:T,floating:!0,for:g.value},{default:()=>[y()]})])])}),{controlRef:M}}});function Ge(e){const i=Object.keys(re.props).filter(a=>!Re(a)&&a!=="class"&&a!=="style");return Se(e,i)}const Qe=["color","file","time","date","datetime-local","week","month"],Ze=j({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...je(),...oe()},"VTextField"),rt=U()({name:"VTextField",directives:{Intersect:Ee},inheritAttrs:!1,props:Ze(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{attrs:a,emit:o,slots:t}=i;const n=Be(e,"modelValue"),{isFocused:r,focus:u,blur:c}=ie(e),d=b(()=>typeof e.counterValue=="function"?e.counterValue(n.value):typeof e.counterValue=="number"?e.counterValue:(n.value??"").toString().length),m=b(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),h=b(()=>["plain","underlined"].includes(e.variant));function F(s,x){var C,_;!e.autofocus||!s||(_=(C=x[0].target)==null?void 0:C.focus)==null||_.call(C)}const w=O(),S=O(),V=O(),H=b(()=>Qe.includes(e.type)||e.persistentPlaceholder||r.value||e.active);function g(){var s;V.value!==document.activeElement&&((s=V.value)==null||s.focus()),r.value||u()}function K(s){o("mousedown:control",s),s.target!==V.value&&(g(),s.preventDefault())}function $(s){g(),o("click:control",s)}function T(s){s.stopPropagation(),g(),ne(()=>{n.value=null,Te(e["onClick:clear"],s)})}function M(s){var C;const x=s.target;if(n.value=x.value,(C=e.modelModifiers)!=null&&C.trim&&["text","search","password","tel","url"].includes(e.type)){const _=[x.selectionStart,x.selectionEnd];ne(()=>{x.selectionStart=_[0],x.selectionEnd=_[1]})}}return z(()=>{const s=!!(t.counter||e.counter!==!1&&e.counter!=null),x=!!(s||t.details),[C,_]=ke(a),{modelValue:q,...B}=le.filterProps(e),J=Ge(e);return l(le,W({ref:w,modelValue:n.value,"onUpdate:modelValue":R=>n.value=R,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":h.value},e.class],style:e.style},C,B,{centerAffix:!h.value,focused:r.value}),{...t,default:R=>{let{id:f,isDisabled:v,isDirty:P,isReadonly:I,isValid:y}=R;return l(re,W({ref:S,onMousedown:K,onClick:$,"onClick:clear":T,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},J,{id:f.value,active:H.value||P.value,dirty:P.value||e.dirty,disabled:v.value,focused:r.value,error:y.value===!1}),{...t,default:A=>{let{props:{class:k,...p}}=A;const D=ee(l("input",W({ref:V,value:n.value,onInput:M,autofocus:e.autofocus,readonly:I.value,disabled:v.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:g,onBlur:c},p,_),null),[[pe("intersect"),{handler:F},null,{once:!0}]]);return l(L,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[l("span",{class:"v-text-field__prefix__text"},[e.prefix])]),t.default?l("div",{class:k,"data-no-activator":""},[t.default(),D]):De(D,{class:k}),e.suffix&&l("span",{class:"v-text-field__suffix"},[l("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:x?R=>{var f;return l(L,null,[(f=t.details)==null?void 0:f.call(t,R),s&&l(L,null,[l("span",null,null),l(Je,{active:e.persistentCounter||r.value,value:d.value,max:m.value,disabled:e.disabled},t.counter)])])}:void 0})}),Ke({},w,S,V)}});export{N as B,rt as V,ze as a,Ge as b,re as c,Je as d,Ze as e,Ke as f,it as g,ot as h,at as i,lt as j,oe as m,Ue as n,He as s};
//# sourceMappingURL=VTextField-Bt-ZLPkG.js.map
