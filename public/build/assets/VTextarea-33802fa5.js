import{t as j,aV as O,aa as le,bd as oe,aX as X,aY as ue,c as C,l as Y,aZ as J,a_ as Z,bb as E,m as a,ae as y,b1 as q,be as ie,bf as se,ah as re,r as V,d as ce,w as k,bg as de,bh as fe,bi as ve,aJ as D,X as $,Y as xe,bj as me,bk as ge,bl as he,n as T,bm as be,ak as Ve,a9 as ke}from"./app-7388c6a9.js";const ye=j()({name:"VCheckbox",inheritAttrs:!1,props:{...O(),...le(oe(),["inline"])},emits:{"update:focused":e=>!0},setup(e,w){let{attrs:x,slots:m}=w;const{isFocused:u,focus:n,blur:s}=X(e),F=ue(),P=C(()=>e.id||`checkbox-${F}`);return Y(()=>{const[I,R]=J(x),[S,B]=Z(e),[c,_]=E.filterProps(e);return a(q,y({class:"v-checkbox"},I,S,{id:P.value,focused:u.value}),{...m,default:d=>{let{id:H,messagesId:A,isDisabled:g,isReadonly:M}=d;return a(E,y(c,{id:H.value,"aria-describedby":A.value,disabled:g.value,readonly:M.value},R,{onFocus:n,onBlur:s}),m)}})}),{}}});const we=j()({name:"VTextarea",directives:{Intersect:ie},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...O(),...se()},emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,w){let{attrs:x,emit:m,slots:u}=w;const n=re(e,"modelValue"),{isFocused:s,focus:F,blur:P}=X(e),I=C(()=>typeof e.counterValue=="function"?e.counterValue(n.value):(n.value||"").toString().length),R=C(()=>{if(x.maxlength)return x.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function S(t,o){var l,i;!e.autofocus||!t||(i=(l=o[0].target)==null?void 0:l.focus)==null||i.call(l)}const B=V(),c=V(),_=V(""),d=V(),H=C(()=>s.value||e.persistentPlaceholder),A=C(()=>e.messages.length?e.messages:s.value||e.persistentHint?e.hint:"");function g(){var t;d.value!==document.activeElement&&((t=d.value)==null||t.focus()),s.value||F()}function M(t){g(),m("click:control",t)}function K(t){m("mousedown:control",t)}function L(t){t.stopPropagation(),g(),T(()=>{n.value="",be(e["onClick:clear"],t)})}function Q(t){var l;const o=t.target;if(n.value=o.value,(l=e.modelModifiers)!=null&&l.trim){const i=[o.selectionStart,o.selectionEnd];T(()=>{o.selectionStart=i[0],o.selectionEnd=i[1]})}}const f=V();function v(){e.autoGrow&&T(()=>{if(!f.value||!c.value)return;const t=getComputedStyle(f.value),o=getComputedStyle(c.value.$el),l=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),i=f.value.scrollHeight,N=parseFloat(t.lineHeight),p=Math.max(parseFloat(e.rows)*N+l,parseFloat(o.getPropertyValue("--v-input-control-height"))),z=parseFloat(e.maxRows)*N+l||1/0;_.value=Ve(ke(i??0,p,z))})}ce(v),k(n,v),k(()=>e.rows,v),k(()=>e.maxRows,v),k(()=>e.density,v);let r;return k(f,t=>{t?(r=new ResizeObserver(v),r.observe(f.value)):r==null||r.disconnect()}),de(()=>{r==null||r.disconnect()}),Y(()=>{const t=!!(u.counter||e.counter||e.counterValue),o=!!(t||u.details),[l,i]=J(x),[{modelValue:N,...p}]=Z(e),[z]=fe(e);return a(q,y({ref:B,modelValue:n.value,"onUpdate:modelValue":h=>n.value=h,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},l,p,{focused:s.value,messages:A.value}),{...u,default:h=>{let{isDisabled:b,isDirty:G,isReadonly:W,isValid:ee}=h;return a(ve,y({ref:c,style:{"--v-textarea-control-height":_.value},onClick:M,onMousedown:K,"onClick:clear":L,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},z,{active:H.value||G.value,dirty:G.value||e.dirty,disabled:b.value,focused:s.value,error:ee.value===!1}),{...u,default:te=>{let{props:{class:U,...ae}}=te;return a(D,null,[e.prefix&&a("span",{class:"v-text-field__prefix"},[e.prefix]),$(a("textarea",y({ref:d,class:U,value:n.value,onInput:Q,autofocus:e.autofocus,readonly:W.value,disabled:b.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:g,onBlur:P},ae,i),null),[[xe("intersect"),{handler:S},null,{once:!0}]]),e.autoGrow&&$(a("textarea",{class:[U,"v-textarea__sizer"],"onUpdate:modelValue":ne=>n.value=ne,ref:f,readonly:!0,"aria-hidden":"true"},null),[[me,n.value]]),e.suffix&&a("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:o?h=>{var b;return a(D,null,[(b=u.details)==null?void 0:b.call(u,h),t&&a(D,null,[a("span",null,null),a(ge,{active:e.persistentCounter||s.value,value:I.value,max:R.value},u.counter)])])}:void 0})}),he({},B,c,d)}});export{ye as V,we as a};
//# sourceMappingURL=VTextarea-33802fa5.js.map
