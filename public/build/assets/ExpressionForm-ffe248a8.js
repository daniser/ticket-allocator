import{ak as p,f as V,aq as g,i as e,ar as a,ay as f,ap as v,aS as n,aD as x}from"./app-103df115.js";import{V as t,a as i}from"./VRow-f0f1275c.js";import{V as b}from"./VTextarea-98fa5d8e.js";const _=p({__name:"ExpressionForm",props:{modelValue:{type:Object,required:!0},errors:{type:Object,required:!0}},emits:["update:modelValue"],setup(u,{emit:m}){const d=u,s=V({get(){return d.modelValue},set(l){m("update:modelValue",l)}});return(l,r)=>(v(),g(f,null,[e(t,null,{default:a(()=>[e(i,{cols:"12",md:"12"},{default:a(()=>[e(b,{modelValue:s.value.variables,"onUpdate:modelValue":r[0]||(r[0]=o=>s.value.variables=o),label:l.$t("variables"),"error-messages":l.errors.variables},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),e(t,null,{default:a(()=>[e(i,{cols:"12",md:"12"},{default:a(()=>[e(n,{modelValue:s.value.expressions.initial_weight,"onUpdate:modelValue":r[1]||(r[1]=o=>s.value.expressions.initial_weight=o),label:l.$t("initial_weight_expression"),"error-messages":l.errors.initial_weight_expression},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),e(t,null,{default:a(()=>[e(i,{cols:"12",md:"12"},{default:a(()=>[e(n,{modelValue:s.value.expressions.weight_increment,"onUpdate:modelValue":r[2]||(r[2]=o=>s.value.expressions.weight_increment=o),label:l.$t("weight_increment_expression"),"error-messages":l.errors.weight_increment_expression},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),e(t,null,{default:a(()=>[e(i,{cols:"12",md:"12"},{default:a(()=>[e(n,{modelValue:s.value.expressions.complexity,"onUpdate:modelValue":r[3]||(r[3]=o=>s.value.expressions.complexity=o),label:l.$t("complexity_expression"),"error-messages":l.errors.complexity_expression},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),e(t,null,{default:a(()=>[e(i,{cols:"12",md:"12"},{default:a(()=>[e(n,{modelValue:s.value.expressions.delay,"onUpdate:modelValue":r[4]||(r[4]=o=>s.value.expressions.delay=o),label:l.$t("delay_expression"),"error-messages":l.errors.delay_expression},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),e(t,null,{default:a(()=>[e(i,{cols:"12",md:"12"},{default:a(()=>[e(n,{modelValue:s.value.expressions.reservation,"onUpdate:modelValue":r[5]||(r[5]=o=>s.value.expressions.reservation=o),label:l.$t("reservation_expression"),"error-messages":l.errors.reservation_expression},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1})],64))}}),U=x(_,[["__file","C:/PhpstormProjects/ticket-allocator/resources/js/pages/Factor/Partials/ExpressionForm.vue"]]);export{U as default};
//# sourceMappingURL=ExpressionForm-ffe248a8.js.map
