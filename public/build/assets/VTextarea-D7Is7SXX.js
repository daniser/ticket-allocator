import{p as ee,J as _,g as te,z as ae,f as V,r as v,s as ne,aZ as le,Z as oe,w as m,a1 as ie,j as ue,C as re,i as l,D as I,F as k,l as T,n as se,aB as ce,y as R,a_ as de,x as fe,a$ as ve}from"./app-B8Nqe2aX.js";import{m as me,c as xe,u as ge,V as D,d as he,e as we,g as Ve,f as ye}from"./VTextField-4iBHysOw.js";import{I as Fe}from"./VGrid-DMtSg0NQ.js";const Ce=ee({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,..._(me(),["centerAffix"]),..._(xe(),["centerAffix"])},"VTextarea"),Re=te()({name:"VTextarea",directives:{Intersect:Fe},inheritAttrs:!1,props:Ce(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,G){let{attrs:y,emit:S,slots:u}=G;const o=ae(e,"modelValue"),{isFocused:f,focus:E,blur:U}=ge(e),O=V(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),$=V(()=>{if(y.maxlength)return y.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function j(t,n){var a,i;!e.autofocus||!t||(i=(a=n[0].target)==null?void 0:a.focus)==null||i.call(a)}const b=v(),x=v(),A=ne(""),g=v(),Z=V(()=>e.persistentPlaceholder||f.value||e.active);function F(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),f.value||E()}function J(t){F(),S("click:control",t)}function q(t){S("mousedown:control",t)}function K(t){t.stopPropagation(),F(),R(()=>{o.value="",de(e["onClick:clear"],t)})}function L(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const i=[n.selectionStart,n.selectionEnd];R(()=>{n.selectionStart=i[0],n.selectionEnd=i[1]})}}const c=v(),B=v(+e.rows),Q=V(()=>["plain","underlined"].includes(e.variant));le(()=>{e.autoGrow||(B.value=+e.rows)});function d(){e.autoGrow&&R(()=>{if(!c.value||!x.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(x.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),i=c.value.scrollHeight,h=parseFloat(t.lineHeight),C=Math.max(parseFloat(e.rows)*h+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),P=parseFloat(e.maxRows)*h+a||1/0,s=ve(i??0,C,P);B.value=Math.floor((s-a)/h),A.value=fe(s)})}oe(d),m(o,d),m(()=>e.rows,d),m(()=>e.maxRows,d),m(()=>e.density,d);let r;return m(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),ie(()=>{r==null||r.disconnect()}),ue(()=>{const t=!!(u.counter||e.counter||e.counterValue),n=!!(t||u.details),[a,i]=re(y),{modelValue:h,...C}=D.filterProps(e),P=he(e);return l(D,I({ref:b,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":Q.value},e.class],style:e.style},a,C,{centerAffix:!1,focused:f.value}),{...u,default:s=>{let{id:w,isDisabled:M,isDirty:z,isReadonly:W,isValid:X}=s;return l(we,I({ref:x,style:{"--v-textarea-control-height":A.value},onClick:J,onMousedown:q,"onClick:clear":K,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},P,{id:w.value,active:Z.value||z.value,centerAffix:!1,dirty:z.value||e.dirty,disabled:M.value,focused:f.value,error:X.value===!1}),{...u,default:Y=>{let{props:{class:H,...N}}=Y;return l(k,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),T(l("textarea",I({ref:g,class:H,value:o.value,onInput:L,autofocus:e.autofocus,readonly:W.value,disabled:M.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:F,onBlur:U},N,i),null),[[se("intersect"),{handler:j},null,{once:!0}]]),e.autoGrow&&T(l("textarea",{class:[H,"v-textarea__sizer"],id:`${N.id}-sizer`,"onUpdate:modelValue":p=>o.value=p,ref:c,readonly:!0,"aria-hidden":"true"},null),[[ce,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var w;return l(k,null,[(w=u.details)==null?void 0:w.call(u,s),t&&l(k,null,[l("span",null,null),l(Ve,{active:e.persistentCounter||f.value,value:O.value,max:$.value,disabled:e.disabled},u.counter)])])}:void 0})}),ye({},b,x,g)}});export{Re as V};
//# sourceMappingURL=VTextarea-D7Is7SXX.js.map
