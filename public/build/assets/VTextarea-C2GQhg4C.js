import{g as p,p as ee,aV as te,E as ae,d as y,r as v,s as ne,aW as le,a6 as oe,w as m,an as ue,h as ie,aU as re,f as l,F as R,B as b,i as _,j as se,al as ce,y as S,z as de,aX as fe,aY as ve}from"./app-Dwjgz7ko.js";import{b as me,c as xe,d as ge,f as he,m as we}from"./VTextField-DtrLVSoF.js";import{u as Ve,V as E,m as ye}from"./VInput-A73kTohK.js";const Fe=ee({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ye(),...we()},"VTextarea"),Ie=p()({name:"VTextarea",directives:{Intersect:te},inheritAttrs:!1,props:Fe(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,G){let{attrs:F,emit:B,slots:i}=G;const o=ae(e,"modelValue"),{isFocused:f,focus:U,blur:D}=Ve(e),O=y(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),j=y(()=>{if(F.maxlength)return F.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function $(t,n){var a,u;!e.autofocus||!t||(u=(a=n[0].target)==null?void 0:a.focus)==null||u.call(a)}const M=v(),x=v(),z=ne(""),g=v(),W=y(()=>e.persistentPlaceholder||f.value||e.active);function C(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),f.value||U()}function X(t){C(),B("click:control",t)}function Y(t){B("mousedown:control",t)}function q(t){t.stopPropagation(),C(),S(()=>{o.value="",ve(e["onClick:clear"],t)})}function J(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const u=[n.selectionStart,n.selectionEnd];S(()=>{n.selectionStart=u[0],n.selectionEnd=u[1]})}}const c=v(),h=v(+e.rows),P=y(()=>["plain","underlined"].includes(e.variant));le(()=>{e.autoGrow||(h.value=+e.rows)});function d(){e.autoGrow&&S(()=>{if(!c.value||!x.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(x.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),u=c.value.scrollHeight,w=parseFloat(t.lineHeight),k=Math.max(parseFloat(e.rows)*w+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),I=parseFloat(e.maxRows)*w+a||1/0,s=fe(u??0,k,I);h.value=Math.floor((s-a)/w),z.value=de(s)})}oe(d),m(o,d),m(()=>e.rows,d),m(()=>e.maxRows,d),m(()=>e.density,d);let r;return m(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),ue(()=>{r==null||r.disconnect()}),ie(()=>{const t=!!(i.counter||e.counter||e.counterValue),n=!!(t||i.details),[a,u]=re(F),{modelValue:w,...k}=E.filterProps(e),I=me(e);return l(E,b({ref:M,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":P.value},e.class],style:e.style},a,k,{centerAffix:h.value===1&&!P.value,focused:f.value}),{...i,default:s=>{let{id:V,isDisabled:H,isDirty:N,isReadonly:K,isValid:L}=s;return l(ge,b({ref:x,style:{"--v-textarea-control-height":z.value},onClick:X,onMousedown:Y,"onClick:clear":q,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},I,{id:V.value,active:W.value||N.value,centerAffix:h.value===1&&!P.value,dirty:N.value||e.dirty,disabled:H.value,focused:f.value,error:L.value===!1}),{...i,default:Q=>{let{props:{class:A,...T}}=Q;return l(R,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),_(l("textarea",b({ref:g,class:A,value:o.value,onInput:J,autofocus:e.autofocus,readonly:K.value,disabled:H.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:C,onBlur:D},T,u),null),[[se("intersect"),{handler:$},null,{once:!0}]]),e.autoGrow&&_(l("textarea",{class:[A,"v-textarea__sizer"],id:`${T.id}-sizer`,"onUpdate:modelValue":Z=>o.value=Z,ref:c,readonly:!0,"aria-hidden":"true"},null),[[ce,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var V;return l(R,null,[(V=i.details)==null?void 0:V.call(i,s),t&&l(R,null,[l("span",null,null),l(xe,{active:e.persistentCounter||f.value,value:O.value,max:j.value,disabled:e.disabled},i.counter)])])}:void 0})}),he({},M,x,g)}});export{Ie as V};
//# sourceMappingURL=VTextarea-C2GQhg4C.js.map
