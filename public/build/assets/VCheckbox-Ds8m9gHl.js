import{V as t,m as A}from"./VCheckboxBtn-DK5XR894.js";import{u as B,V as l,m as F}from"./VInput-Du211zoN.js";import{g as I,E as U,aU as R,c as D,e as E,aV as M,d as u,B as r,i as N,C as $}from"./app-DI2Pcpjf.js";const j=N({...F(),...$(A(),["inline"])},"VCheckbox"),G=I()({name:"VCheckbox",inheritAttrs:!1,props:j(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,d){let{attrs:c,slots:a}=d;const s=U(e,"modelValue"),{isFocused:n,focus:i,blur:m}=B(e),V=R(),p=D(()=>e.id||`checkbox-${V}`);return E(()=>{const[b,f]=M(c),v=l.filterProps(e),k=t.filterProps(e);return u(l,r({class:["v-checkbox",e.class]},b,v,{modelValue:s.value,"onUpdate:modelValue":o=>s.value=o,id:p.value,focused:n.value,style:e.style}),{...a,default:o=>{let{id:x,messagesId:h,isDisabled:P,isReadonly:C,isValid:y}=o;return u(t,r(k,{id:x.value,"aria-describedby":h.value,disabled:P.value,readonly:C.value},f,{error:y.value===!1,modelValue:s.value,"onUpdate:modelValue":g=>s.value=g,onFocus:i,onBlur:m}),a)}})}),{}}});export{G as V};
//# sourceMappingURL=VCheckbox-Ds8m9gHl.js.map
