import{p as Z,ay as p,bn as ee,v as te,bo as ae,Q as ne,aB as le,c as y,r as x,s as oe,bp as ue,d as ie,w as m,h as re,C as se,aD as ce,aE as D,bq as de,D as l,br as fe,M as I,am as R,a0 as G,a1 as ve,aP as xe,bs as me,aW as ge,n as S,bt as he,W as we,G as Ve}from"./app-e332e980.js";const ye=Z({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...p(),...ee()},"v-textarea"),Fe=te()({name:"VTextarea",directives:{Intersect:ae},inheritAttrs:!1,props:ye(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,T){let{attrs:C,emit:M,slots:i}=T;const o=ne(e,"modelValue"),{isFocused:f,focus:_,blur:z}=le(e),E=y(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),U=y(()=>{if(C.maxlength)return C.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function O(t,n){var a,u;!e.autofocus||!t||(u=(a=n[0].target)==null?void 0:a.focus)==null||u.call(a)}const B=x(),g=x(),H=oe(""),h=x(),W=y(()=>e.persistentPlaceholder||f.value||e.active);function F(){var t;h.value!==document.activeElement&&((t=h.value)==null||t.focus()),f.value||_()}function $(t){F(),M("click:control",t)}function j(t){M("mousedown:control",t)}function q(t){t.stopPropagation(),F(),S(()=>{o.value="",he(e["onClick:clear"],t)})}function Q(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const u=[n.selectionStart,n.selectionEnd];S(()=>{n.selectionStart=u[0],n.selectionEnd=u[1]})}}const c=x(),w=x(+e.rows),P=y(()=>["plain","underlined"].includes(e.variant));ue(()=>{e.autoGrow||(w.value=+e.rows)});function d(){e.autoGrow&&S(()=>{if(!c.value||!g.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(g.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),u=c.value.scrollHeight,V=parseFloat(t.lineHeight),b=Math.max(parseFloat(e.rows)*V+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),k=parseFloat(e.maxRows)*V+a||1/0,s=Ve(u??0,b,k);w.value=Math.floor((s-a)/V),H.value=we(s)})}ie(d),m(o,d),m(()=>e.rows,d),m(()=>e.maxRows,d),m(()=>e.density,d);let r;return m(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),re(()=>{r==null||r.disconnect()}),se(()=>{const t=!!(i.counter||e.counter||e.counterValue),n=!!(t||i.details),[a,u]=ce(C),[{modelValue:V,...b}]=D.filterProps(e),[k]=de(e);return l(D,I({ref:B,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--plain-underlined":P.value},e.class],style:e.style},a,b,{centerAffix:w.value===1&&!P.value,focused:f.value}),{...i,default:s=>{let{isDisabled:v,isDirty:N,isReadonly:J,isValid:K}=s;return l(fe,I({ref:g,style:{"--v-textarea-control-height":H.value},onClick:$,onMousedown:j,"onClick:clear":q,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},k,{active:W.value||N.value,centerAffix:w.value===1&&!P.value,dirty:N.value||e.dirty,disabled:v.value,focused:f.value,error:K.value===!1}),{...i,default:L=>{let{props:{class:A,...X}}=L;return l(R,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),G(l("textarea",I({ref:h,class:A,value:o.value,onInput:Q,autofocus:e.autofocus,readonly:J.value,disabled:v.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:F,onBlur:z},X,u),null),[[ve("intersect"),{handler:O},null,{once:!0}]]),e.autoGrow&&G(l("textarea",{class:[A,"v-textarea__sizer"],"onUpdate:modelValue":Y=>o.value=Y,ref:c,readonly:!0,"aria-hidden":"true"},null),[[xe,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var v;return l(R,null,[(v=i.details)==null?void 0:v.call(i,s),t&&l(R,null,[l("span",null,null),l(me,{active:e.persistentCounter||f.value,value:E.value,max:U.value},i.counter)])])}:void 0})}),ge({},B,g,h)}});export{Fe as V};
//# sourceMappingURL=VTextarea-502a1f9b.js.map
