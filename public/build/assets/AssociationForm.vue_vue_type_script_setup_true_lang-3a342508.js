import{a8 as f,c as b,aT as n,ae as g,ad as i,u as x,aX as k,ab as U,B as l,aj as c,ah as p,aU as T,J as V,aL as u}from"./app-06ab010d.js";import{a as C,b as B,V as M}from"./VToolbar-14e77ee9.js";import{V as $}from"./VAutocomplete-8c964aec.js";const F=f({__name:"AssociationForm",props:{entries:null,modelValue:null},emits:["update:modelValue"],setup(y,{emit:v}){const s=y,o=b({get(){return s.modelValue},set(a){v("update:modelValue",a)}}),h=[{title:n("value"),key:"value"},{title:n("initial_weight"),key:"initial_weight"},{title:n("weight_increment"),key:"weight_increment"},{title:n("complexity"),key:"complexity"},{title:n("delay"),key:"delay"},{title:n("actions"),key:"actions",sortable:!1}];function m(a){return s.entries.filter(d=>d.uuid===a||!o.value.map(r=>r.value).includes(d.uuid))}function w(){var a;o.value.push({value:((a=m()[0])==null?void 0:a.uuid)??"",initial_weight:null,weight_increment:null,complexity:null,delay:null})}function _(a){o.value=o.value.filter(d=>d.value!==a)}return(a,d)=>{const r=k("v-data-table");return U(),g(r,{headers:h,items:x(o),density:"compact"},{top:i(()=>[l(M,{flat:""},{default:i(()=>[l(C,null,{default:i(()=>[c(p(a.$t("entries")),1)]),_:1}),l(T,{class:"mx-4",inset:"",vertical:""}),l(B),l(V,{color:"primary",dark:"",disabled:m().length===0,onClick:w},{default:i(()=>[c(p(a.$t("new_entry")),1)]),_:1},8,["disabled"])]),_:1})]),["item.value"]:i(({item:e})=>[l($,{modelValue:e.raw.value,"onUpdate:modelValue":t=>e.raw.value=t,items:m(e.raw.value),"item-title":"name","item-value":"uuid",variant:"plain",density:"compact","hide-details":"auto"},null,8,["modelValue","onUpdate:modelValue","items"])]),["item.initial_weight"]:i(({item:e})=>[l(u,{modelValue:e.raw.initial_weight,"onUpdate:modelValue":t=>e.raw.initial_weight=t,modelModifiers:{number:!0},type:"number",min:"0",max:"9999999",placeholder:"0",variant:"plain",density:"compact","hide-details":"auto"},null,8,["modelValue","onUpdate:modelValue"])]),["item.weight_increment"]:i(({item:e})=>[l(u,{modelValue:e.raw.weight_increment,"onUpdate:modelValue":t=>e.raw.weight_increment=t,modelModifiers:{number:!0},type:"number",min:"0",max:"99999",placeholder:"0",variant:"plain",density:"compact","hide-details":"auto"},null,8,["modelValue","onUpdate:modelValue"])]),["item.complexity"]:i(({item:e})=>[l(u,{modelValue:e.raw.complexity,"onUpdate:modelValue":t=>e.raw.complexity=t,modelModifiers:{number:!0},type:"number",min:"0",max:"9999",placeholder:"0",variant:"plain",density:"compact","hide-details":"auto"},null,8,["modelValue","onUpdate:modelValue"])]),["item.delay"]:i(({item:e})=>[l(u,{modelValue:e.raw.delay,"onUpdate:modelValue":t=>e.raw.delay=t,modelModifiers:{number:!0},type:"number",min:"0",max:"99999",placeholder:"0",variant:"plain",density:"compact","hide-details":"auto"},null,8,["modelValue","onUpdate:modelValue"])]),["item.actions"]:i(({item:e})=>[l(V,{icon:"mdi-delete",title:a.$t("remove"),size:"small",variant:"plain",onClick:t=>_(e.raw.value)},null,8,["title","onClick"])]),_:2},1032,["items"])}}});export{F as _};
//# sourceMappingURL=AssociationForm.vue_vue_type_script_setup_true_lang-3a342508.js.map
