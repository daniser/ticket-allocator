import{r as U,t as D,af as M,ak as S,aQ as F,f as E,aq as R,i as e,aa as r,ar as o,ay as j,ap as _,aM as q,au as f,av as p,aH as A,aR as w,l as H,aS as Q,as as Z,aT as x,at as z,V as h,ax as B}from"./app-bf799132.js";import{a as G,A as c}from"./Default.vue_vue_type_script_setup_true_lang-bf2d1fe7.js";import{V as I}from"./VForm-dd572223.js";import{V as J}from"./VContainer-dfb30a44.js";import{V as i,a as d}from"./VRow-ee3a3b40.js";import{V as K}from"./VCheckbox-ddd21a0a.js";import{V as L}from"./VTextarea-ae08ca3a.js";function O(m){const l=U(null),t=D("resolveComponent");return M(async()=>{m&&t&&(l.value=await t(m))}),l}const P={class:"font-semibold text-xl text-gray-800 leading-tight"},le=S({__name:"CreateEdit",props:{factor:{},factorType:{},entries:{},errors:{}},setup(m){var y,v,g,b,C,T,k,$;const l=m,t=F({active:!((y=l.factor)!=null&&y.deleted_at),type:((v=l.factor)==null?void 0:v.type.alias)??((g=l.factorType)==null?void 0:g.alias)??"",name:((b=l.factor)==null?void 0:b.display_name)??"",description:((C=l.factor)==null?void 0:C.description)??"",config:((T=l.factor)==null?void 0:T.config)??[]}),u=E(()=>{var a,s;return((a=l.factor)==null?void 0:a.type.name)??((s=l.factorType)==null?void 0:s.name)??""}),V=O(((k=l.factor)==null?void 0:k.type.component)??(($=l.factorType)==null?void 0:$.component)??null);function N(){l.factor?t.put(c("ticket-allocator.factors.update",l.factor.uuid)):t.post(c("ticket-allocator.factors.store"))}return(a,s)=>(_(),R(j,null,[e(r(q),{title:a.$t(a.factor?"edit_factor":"new_factor")},null,8,["title"]),e(G,null,{header:o(()=>[f("h2",P,p(a.$t(a.factor?"edit_factor":"new_factor")),1)]),default:o(()=>[f("div",null,[e(I,{onSubmit:A(N,["prevent"])},{default:o(()=>[e(J,null,{default:o(()=>[e(i,null,{default:o(()=>[e(d,{cols:"12",md:"12"},{default:o(()=>[e(K,{modelValue:r(t).active,"onUpdate:modelValue":s[0]||(s[0]=n=>r(t).active=n),label:a.$t("active")},null,8,["modelValue","label"])]),_:1})]),_:1}),e(i,null,{default:o(()=>[e(d,{cols:"12",md:"12"},{default:o(()=>[e(w,{"model-value":u.value,label:a.$t("factor_type"),"error-messages":a.errors.type,readonly:""},null,8,["model-value","label","error-messages"]),H(f("input",{"onUpdate:modelValue":s[1]||(s[1]=n=>r(t).type=n),type:"hidden"},null,512),[[Q,r(t).type]])]),_:1})]),_:1}),e(i,null,{default:o(()=>[e(d,{cols:"12",md:"12"},{default:o(()=>[e(w,{modelValue:r(t).name,"onUpdate:modelValue":s[2]||(s[2]=n=>r(t).name=n),maxlength:"255",label:a.$t("name"),placeholder:u.value,"persistent-placeholder":!!u.value.length,"error-messages":a.errors.name},null,8,["modelValue","label","placeholder","persistent-placeholder","error-messages"])]),_:1})]),_:1}),e(i,null,{default:o(()=>[e(d,{cols:"12",md:"12"},{default:o(()=>[e(L,{modelValue:r(t).description,"onUpdate:modelValue":s[3]||(s[3]=n=>r(t).description=n),label:a.$t("description"),"error-messages":a.errors.description},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),r(V)?(_(),Z(x(r(V)),{key:0,modelValue:r(t).config,"onUpdate:modelValue":s[4]||(s[4]=n=>r(t).config=n),entries:a.entries},null,8,["modelValue","entries"])):z("",!0),e(i,null,{default:o(()=>[e(d,{cols:"12",md:"12"},{default:o(()=>[e(h,{type:"submit",color:"primary",class:"mr-3",disabled:r(t).processing},{default:o(()=>[B(p(a.$t("save")),1)]),_:1},8,["disabled"]),e(h,{to:r(c)("ticket-allocator.factors.index"),class:"mr-3"},{default:o(()=>[B(p(a.$t("cancel")),1)]),_:1},8,["to"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1})],64))}});export{le as default};
//# sourceMappingURL=CreateEdit-05d91b30.js.map
