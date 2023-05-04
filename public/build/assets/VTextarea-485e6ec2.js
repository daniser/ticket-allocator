import{q,au as K,F as ae,bf as ne,ax as J,ay as le,c as C,A as L,az as Q,aA as w,aU as O,B as a,K as k,bg as oe,bh as ue,O as se,r as V,d as ie,w as y,bi as re,bj as ce,bk as de,ak as U,_ as j,$ as fe,bl as ve,bm as xe,aS as me,n as E,bn as ge,T as he,E as be}from"./app-cce71c2a.js";const ye=q()({name:"VCheckbox",inheritAttrs:!1,props:{...K(),...ae(ne(),["inline"])},emits:{"update:focused":e=>!0},setup(e,F){let{attrs:x,slots:m}=F;const{isFocused:u,focus:n,blur:r}=J(e),P=le(),I=C(()=>e.id||`checkbox-${P}`);return L(()=>{const[R,S]=Q(x),[B,A]=w.filterProps(e),[c,_]=O.filterProps(e);return a(w,k({class:["v-checkbox",e.class]},R,B,{id:I.value,focused:u.value,style:e.style}),{...m,default:d=>{let{id:M,messagesId:g,isDisabled:N,isReadonly:z}=d;return a(O,k(c,{id:M.value,"aria-describedby":g.value,disabled:N.value,readonly:z.value},S,{onFocus:n,onBlur:r}),m)}})}),{}}});const ke=q()({name:"VTextarea",directives:{Intersect:oe},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...K(),...ue()},emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,F){let{attrs:x,emit:m,slots:u}=F;const n=se(e,"modelValue"),{isFocused:r,focus:P,blur:I}=J(e),R=C(()=>typeof e.counterValue=="function"?e.counterValue(n.value):(n.value||"").toString().length),S=C(()=>{if(x.maxlength)return x.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function B(t,o){var l,s;!e.autofocus||!t||(s=(l=o[0].target)==null?void 0:l.focus)==null||s.call(l)}const A=V(),c=V(),_=V(""),d=V(),M=C(()=>e.persistentPlaceholder||r.value||e.active);function g(){var t;d.value!==document.activeElement&&((t=d.value)==null||t.focus()),r.value||P()}function N(t){g(),m("click:control",t)}function z(t){m("mousedown:control",t)}function W(t){t.stopPropagation(),g(),E(()=>{n.value="",ge(e["onClick:clear"],t)})}function X(t){var l;const o=t.target;if(n.value=o.value,(l=e.modelModifiers)!=null&&l.trim){const s=[o.selectionStart,o.selectionEnd];E(()=>{o.selectionStart=s[0],o.selectionEnd=s[1]})}}const f=V();function v(){e.autoGrow&&E(()=>{if(!f.value||!c.value)return;const t=getComputedStyle(f.value),o=getComputedStyle(c.value.$el),l=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),s=f.value.scrollHeight,H=parseFloat(t.lineHeight),T=Math.max(parseFloat(e.rows)*H+l,parseFloat(o.getPropertyValue("--v-input-control-height"))),D=parseFloat(e.maxRows)*H+l||1/0;_.value=he(be(s??0,T,D))})}ie(v),y(n,v),y(()=>e.rows,v),y(()=>e.maxRows,v),y(()=>e.density,v);let i;return y(f,t=>{t?(i=new ResizeObserver(v),i.observe(f.value)):i==null||i.disconnect()}),re(()=>{i==null||i.disconnect()}),L(()=>{const t=!!(u.counter||e.counter||e.counterValue),o=!!(t||u.details),[l,s]=Q(x),[{modelValue:H,...T}]=w.filterProps(e),[D]=ce(e);return a(w,k({ref:A,modelValue:n.value,"onUpdate:modelValue":h=>n.value=h,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)},e.class],style:e.style},l,T,{focused:r.value}),{...u,default:h=>{let{isDisabled:b,isDirty:G,isReadonly:Y,isValid:Z}=h;return a(de,k({ref:c,style:{"--v-textarea-control-height":_.value},onClick:N,onMousedown:z,"onClick:clear":W,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},D,{active:M.value||G.value,dirty:G.value||e.dirty,disabled:b.value,focused:r.value,error:Z.value===!1}),{...u,default:p=>{let{props:{class:$,...ee}}=p;return a(U,null,[e.prefix&&a("span",{class:"v-text-field__prefix"},[e.prefix]),j(a("textarea",k({ref:d,class:$,value:n.value,onInput:X,autofocus:e.autofocus,readonly:Y.value,disabled:b.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:g,onBlur:I},ee,s),null),[[fe("intersect"),{handler:B},null,{once:!0}]]),e.autoGrow&&j(a("textarea",{class:[$,"v-textarea__sizer"],"onUpdate:modelValue":te=>n.value=te,ref:f,readonly:!0,"aria-hidden":"true"},null),[[ve,n.value]]),e.suffix&&a("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:o?h=>{var b;return a(U,null,[(b=u.details)==null?void 0:b.call(u,h),t&&a(U,null,[a("span",null,null),a(xe,{active:e.persistentCounter||r.value,value:R.value,max:S.value},u.counter)])])}:void 0})}),me({},A,c,d)}});export{ye as V,ke as a};
//# sourceMappingURL=VTextarea-485e6ec2.js.map
