import{V as p,a as u}from"./VRow-DD2lIWPW.js";import{V as i}from"./VTextField-CeDlu0Jq.js";import{M as V,f as b,U as f,T as m,R as v,i as a}from"./app-DiUsk6-n.js";import"./VGrid-DntHE9og.js";const M=V({__name:"FixedForm",props:{modelValue:{}},emits:["update:modelValue"],setup(n,{emit:d}){const r=n,s=d,e=b({get(){return r.modelValue},set(t){s("update:modelValue",t)}});return(t,l)=>(v(),f(p,null,{default:m(()=>[a(u,{cols:"2"},{default:m(()=>[a(i,{modelValue:e.value.initial_weight,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value.initial_weight=o),modelModifiers:{number:!0},type:"number",min:"0",max:"9999999",label:t.$t("initial_weight")},null,8,["modelValue","label"])]),_:1}),a(u,{cols:"2"},{default:m(()=>[a(i,{modelValue:e.value.weight_increment,"onUpdate:modelValue":l[1]||(l[1]=o=>e.value.weight_increment=o),modelModifiers:{number:!0},type:"number",min:"0",max:"99999",label:t.$t("weight_increment")},null,8,["modelValue","label"])]),_:1}),a(u,{cols:"2"},{default:m(()=>[a(i,{modelValue:e.value.complexity,"onUpdate:modelValue":l[2]||(l[2]=o=>e.value.complexity=o),modelModifiers:{number:!0},type:"number",min:"0",max:"9999",label:t.$t("complexity")},null,8,["modelValue","label"])]),_:1}),a(u,{cols:"2"},{default:m(()=>[a(i,{modelValue:e.value.delay,"onUpdate:modelValue":l[3]||(l[3]=o=>e.value.delay=o),modelModifiers:{number:!0},type:"number",min:"0",max:"99999",label:t.$t("delay_sec")},null,8,["modelValue","label"])]),_:1}),a(u,{cols:"2"},{default:m(()=>[a(i,{modelValue:e.value.reservation,"onUpdate:modelValue":l[4]||(l[4]=o=>e.value.reservation=o),modelModifiers:{number:!0},type:"number",min:"0",max:"99999",label:t.$t("reservation_sec")},null,8,["modelValue","label"])]),_:1})]),_:1}))}});export{M as default};
//# sourceMappingURL=FixedForm-Bc1IHkrI.js.map
