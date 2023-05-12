import{a8 as f,c as b,aV as o,aW as g,ab as x,ae as k,ad as t,B as a,aj as c,ah as p,aX as U,J as V,aM as u}from"./app-8838dd11.js";import{V as C,a as M}from"./VRow-89526d39.js";import{V as T,a as B,b as $}from"./VToolbar-c50fb4e6.js";import{V as E}from"./VAutocomplete-77964a29.js";const S=f({__name:"AssociationForm",props:{entries:{},modelValue:{}},emits:["update:modelValue"],setup(y,{emit:v}){const s=y,n=b({get(){return s.modelValue},set(l){v("update:modelValue",l)}}),h=[{title:o("value"),key:"value"},{title:o("initial_weight"),key:"initial_weight"},{title:o("weight_increment"),key:"weight_increment"},{title:o("complexity"),key:"complexity"},{title:o("delay"),key:"delay"},{title:o("actions"),key:"actions",sortable:!1}];function m(l){return s.entries.filter(d=>d.uuid===l||!n.value.map(r=>r.value).includes(d.uuid))}function w(){var l;n.value.push({value:((l=m()[0])==null?void 0:l.uuid)??"",initial_weight:null,weight_increment:null,complexity:null,delay:null})}function _(l){n.value=n.value.filter(d=>d.value!==l)}return(l,d)=>{const r=g("v-data-table");return x(),k(C,null,{default:t(()=>[a(M,{cols:"12",md:"12"},{default:t(()=>[a(r,{headers:h,items:n.value,density:"compact"},{top:t(()=>[a(T,{flat:""},{default:t(()=>[a(B,null,{default:t(()=>[c(p(l.$t("entries")),1)]),_:1}),a(U,{class:"mx-4",inset:"",vertical:""}),a($),a(V,{color:"primary",dark:"",disabled:m().length===0,onClick:w},{default:t(()=>[c(p(l.$t("new_entry")),1)]),_:1},8,["disabled"])]),_:1})]),["item.value"]:t(({item:e})=>[a(E,{modelValue:e.raw.value,"onUpdate:modelValue":i=>e.raw.value=i,items:m(e.raw.value),"item-title":"name","item-value":"uuid",variant:"plain",density:"compact","hide-details":"auto"},null,8,["modelValue","onUpdate:modelValue","items"])]),["item.initial_weight"]:t(({item:e})=>[a(u,{modelValue:e.raw.initial_weight,"onUpdate:modelValue":i=>e.raw.initial_weight=i,modelModifiers:{number:!0},type:"number",min:"0",max:"9999999",placeholder:"0",variant:"plain",density:"compact","hide-details":"auto"},null,8,["modelValue","onUpdate:modelValue"])]),["item.weight_increment"]:t(({item:e})=>[a(u,{modelValue:e.raw.weight_increment,"onUpdate:modelValue":i=>e.raw.weight_increment=i,modelModifiers:{number:!0},type:"number",min:"0",max:"99999",placeholder:"0",variant:"plain",density:"compact","hide-details":"auto"},null,8,["modelValue","onUpdate:modelValue"])]),["item.complexity"]:t(({item:e})=>[a(u,{modelValue:e.raw.complexity,"onUpdate:modelValue":i=>e.raw.complexity=i,modelModifiers:{number:!0},type:"number",min:"0",max:"9999",placeholder:"0",variant:"plain",density:"compact","hide-details":"auto"},null,8,["modelValue","onUpdate:modelValue"])]),["item.delay"]:t(({item:e})=>[a(u,{modelValue:e.raw.delay,"onUpdate:modelValue":i=>e.raw.delay=i,modelModifiers:{number:!0},type:"number",min:"0",max:"99999",placeholder:"0",variant:"plain",density:"compact","hide-details":"auto"},null,8,["modelValue","onUpdate:modelValue"])]),["item.actions"]:t(({item:e})=>[a(V,{icon:"mdi-delete",title:l.$t("remove"),size:"small",variant:"plain",onClick:i=>_(e.raw.value)},null,8,["title","onClick"])]),_:2},1032,["items"])]),_:1})]),_:1})}}});export{S as default};
//# sourceMappingURL=AssociationForm-cf4f21e3.js.map
