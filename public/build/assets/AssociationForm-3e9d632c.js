import{ak as b,f as p,ao as o,aZ as g,as as x,ar as l,ap as k,i as a,ax as c,av as V,a_ as U,V as v,aR as r}from"./app-da2e228d.js";import{V as C,a as M}from"./VRow-59719ec0.js";import{V as T,a as $,b as B}from"./VSpacer-338eab23.js";import{V as E}from"./VAutocomplete-8030bb2d.js";const R=b({__name:"AssociationForm",props:{entries:{},modelValue:{}},emits:["update:modelValue"],setup(y,{emit:h}){const s=y,n=p({get(){return s.modelValue},set(t){h("update:modelValue",t)}}),w=p(()=>[{title:o("value"),key:"value"},{title:o("initial_weight"),key:"initial_weight"},{title:o("weight_increment"),key:"weight_increment"},{title:o("complexity"),key:"complexity"},{title:o("delay_sec"),key:"delay"},{title:o("reservation_sec"),key:"reservation"},{title:o("actions"),key:"actions",sortable:!1}]);function u(t){return s.entries.filter(d=>d.uuid===t||!n.value.map(m=>m.value).includes(d.uuid))}function _(){var t;n.value.push({value:((t=u()[0])==null?void 0:t.uuid)??"",initial_weight:null,weight_increment:null,complexity:null,delay:null,reservation:null})}function f(t){n.value=n.value.filter(d=>d.value!==t)}return(t,d)=>{const m=g("v-data-table");return k(),x(C,null,{default:l(()=>[a(M,{cols:"12",md:"12"},{default:l(()=>[a(m,{headers:w.value,items:n.value,density:"compact"},{top:l(()=>[a(T,{flat:""},{default:l(()=>[a($,null,{default:l(()=>[c(V(t.$t("entries")),1)]),_:1}),a(U,{class:"mx-4",inset:"",vertical:""}),a(B),a(v,{color:"primary",dark:"",disabled:u().length===0,onClick:_},{default:l(()=>[c(V(t.$t("new_entry")),1)]),_:1},8,["disabled"])]),_:1})]),["item.value"]:l(({item:e})=>[a(E,{modelValue:e.raw.value,"onUpdate:modelValue":i=>e.raw.value=i,items:u(e.raw.value),"item-title":"name","item-value":"uuid",variant:"plain",density:"compact","hide-details":"auto"},null,8,["modelValue","onUpdate:modelValue","items"])]),["item.initial_weight"]:l(({item:e})=>[a(r,{modelValue:e.raw.initial_weight,"onUpdate:modelValue":i=>e.raw.initial_weight=i,modelModifiers:{number:!0},type:"number",min:"0",max:"9999999",placeholder:"0",variant:"plain",density:"compact","hide-details":"auto"},null,8,["modelValue","onUpdate:modelValue"])]),["item.weight_increment"]:l(({item:e})=>[a(r,{modelValue:e.raw.weight_increment,"onUpdate:modelValue":i=>e.raw.weight_increment=i,modelModifiers:{number:!0},type:"number",min:"0",max:"99999",placeholder:"0",variant:"plain",density:"compact","hide-details":"auto"},null,8,["modelValue","onUpdate:modelValue"])]),["item.complexity"]:l(({item:e})=>[a(r,{modelValue:e.raw.complexity,"onUpdate:modelValue":i=>e.raw.complexity=i,modelModifiers:{number:!0},type:"number",min:"0",max:"9999",placeholder:"0",variant:"plain",density:"compact","hide-details":"auto"},null,8,["modelValue","onUpdate:modelValue"])]),["item.delay"]:l(({item:e})=>[a(r,{modelValue:e.raw.delay,"onUpdate:modelValue":i=>e.raw.delay=i,modelModifiers:{number:!0},type:"number",min:"0",max:"99999",placeholder:"0",variant:"plain",density:"compact","hide-details":"auto"},null,8,["modelValue","onUpdate:modelValue"])]),["item.reservation"]:l(({item:e})=>[a(r,{modelValue:e.raw.reservation,"onUpdate:modelValue":i=>e.raw.reservation=i,modelModifiers:{number:!0},type:"number",min:"0",max:"99999",placeholder:"0",variant:"plain",density:"compact","hide-details":"auto"},null,8,["modelValue","onUpdate:modelValue"])]),["item.actions"]:l(({item:e})=>[a(v,{icon:"mdi-delete",title:t.$t("remove"),size:"small",variant:"plain",onClick:i=>f(e.raw.value)},null,8,["title","onClick"])]),_:2},1032,["headers","items"])]),_:1})]),_:1})}}});export{R as default};
//# sourceMappingURL=AssociationForm-3e9d632c.js.map
