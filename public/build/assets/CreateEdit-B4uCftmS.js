import{s as N,q as D,al as F,O as M,am as E,f as R,U as S,i as e,a1 as r,ah as Z,W as o,ai as j,F as q,T as h,_ as p,$ as f,a7 as O,l as W,an as X,X as z,aa as A,Z as G,V as k,a0 as w,a8 as c}from"./app-Dxhld-21.js";import{V as H}from"./VForm-DQqIO_2j.js";import{V as I}from"./VContainer-3NdT2qpe.js";import{V as i,a as m}from"./VRow-DXEokUGU.js";import{V as J}from"./VCheckbox-CSOYnYkF.js";import{V as B}from"./VTextField-I3tdDHM-.js";import{V as K}from"./VTextarea-_wyeY6e4.js";import"./VInput-DAmHD-kU.js";/* empty css              */import"./VCheckboxBtn-BxJ9IWPC.js";import"./VSelectionControl-CUYN6GZp.js";function L(d){const l=N(null),t=D("resolveComponent");return F(async()=>{d&&t&&(l.value=await t(d))}),l}const P={class:"font-semibold text-xl text-gray-800 leading-tight"},ie=M({__name:"CreateEdit",props:{factor:{},factorType:{},entries:{},errors:{}},setup(d){var y,g,v,b,C,T,$,_;const l=d,t=E({active:!((y=l.factor)!=null&&y.deleted_at),type:((g=l.factor)==null?void 0:g.type.alias)??((v=l.factorType)==null?void 0:v.alias)??"",name:((b=l.factor)==null?void 0:b.display_name)??"",description:((C=l.factor)==null?void 0:C.description)??"",config:((T=l.factor)==null?void 0:T.config)??[]}),u=R(()=>{var a,s;return((a=l.factor)==null?void 0:a.type.name)??((s=l.factorType)==null?void 0:s.name)??""}),V=L((($=l.factor)==null?void 0:$.type.component)??((_=l.factorType)==null?void 0:_.component)??null);function U(){l.factor?t.put(c("ticket-allocator.factors.update",l.factor.uuid)):t.post(c("ticket-allocator.factors.store"))}return(a,s)=>(h(),S(q,null,[e(r(Z),{title:a.$t(a.factor?"edit_factor":"new_factor")},null,8,["title"]),e(j,null,{header:o(()=>[p("h2",P,f(a.$t(a.factor?"edit_factor":"new_factor")),1)]),default:o(()=>[p("div",null,[e(H,{onSubmit:O(U,["prevent"])},{default:o(()=>[e(I,null,{default:o(()=>[e(i,null,{default:o(()=>[e(m,{cols:"12",md:"12"},{default:o(()=>[e(J,{modelValue:r(t).active,"onUpdate:modelValue":s[0]||(s[0]=n=>r(t).active=n),label:a.$t("active")},null,8,["modelValue","label"])]),_:1})]),_:1}),e(i,null,{default:o(()=>[e(m,{cols:"12",md:"12"},{default:o(()=>[e(B,{"model-value":u.value,label:a.$t("factor_type"),"error-messages":a.errors.type,readonly:""},null,8,["model-value","label","error-messages"]),W(p("input",{"onUpdate:modelValue":s[1]||(s[1]=n=>r(t).type=n),type:"hidden"},null,512),[[X,r(t).type]])]),_:1})]),_:1}),e(i,null,{default:o(()=>[e(m,{cols:"12",md:"12"},{default:o(()=>[e(B,{modelValue:r(t).name,"onUpdate:modelValue":s[2]||(s[2]=n=>r(t).name=n),maxlength:"255",label:a.$t("name"),placeholder:u.value,"persistent-placeholder":!!u.value.length,"error-messages":a.errors.name},null,8,["modelValue","label","placeholder","persistent-placeholder","error-messages"])]),_:1})]),_:1}),e(i,null,{default:o(()=>[e(m,{cols:"12",md:"12"},{default:o(()=>[e(K,{modelValue:r(t).description,"onUpdate:modelValue":s[3]||(s[3]=n=>r(t).description=n),label:a.$t("description"),"error-messages":a.errors.description},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),r(V)?(h(),z(A(r(V)),{key:0,modelValue:r(t).config,"onUpdate:modelValue":s[4]||(s[4]=n=>r(t).config=n),entries:a.entries},null,8,["modelValue","entries"])):G("",!0),e(i,null,{default:o(()=>[e(m,{cols:"12",md:"12"},{default:o(()=>[e(k,{type:"submit",color:"primary",class:"mr-3",disabled:r(t).processing},{default:o(()=>[w(f(a.$t("save")),1)]),_:1},8,["disabled"]),e(k,{to:r(c)("ticket-allocator.factors.index"),class:"mr-3"},{default:o(()=>[w(f(a.$t("cancel")),1)]),_:1},8,["to"])]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})],64))}});export{ie as default};
//# sourceMappingURL=CreateEdit-B4uCftmS.js.map
