import{s as B,t as N,af as U,ak as q,aR as E,f as F,aq as S,i as e,ab as r,ar as o,ay as M,ap as h,aN as O,au as p,av as f,aI as R,aS as w,l as A,aT as P,as as x,aU as I,at as L,V as $,ax as D,aD as Z}from"./app-103df115.js";import{D as z,A as c}from"./Default-fc668c30.js";import{V as G}from"./VForm-ea0eab68.js";import{V as H}from"./VContainer-57f7fd48.js";import{V as i,a as d}from"./VRow-f0f1275c.js";import{V as J}from"./VCheckbox-2df62ef4.js";import{V as K}from"./VTextarea-98fa5d8e.js";function Q(u){const l=B(null),t=N("resolveComponent");return U(async()=>{u&&t&&(l.value=await t(u))}),l}const W={class:"font-semibold text-xl text-gray-800 leading-tight"},X=q({__name:"CreateEdit",props:{factor:{type:Object,required:!1},factorType:{type:Object,required:!1},entries:{type:Array,required:!0},errors:{type:Object,required:!0}},setup(u){var V,b,v,g,C,T,k,_;const l=u,t=E({active:!((V=l.factor)!=null&&V.deleted_at),type:((b=l.factor)==null?void 0:b.type.alias)??((v=l.factorType)==null?void 0:v.alias)??"",name:((g=l.factor)==null?void 0:g.display_name)??"",description:((C=l.factor)==null?void 0:C.description)??"",config:((T=l.factor)==null?void 0:T.config)??[]}),m=F(()=>{var a,s;return((a=l.factor)==null?void 0:a.type.name)??((s=l.factorType)==null?void 0:s.name)??""}),y=Q(((k=l.factor)==null?void 0:k.type.component)??((_=l.factorType)==null?void 0:_.component)??null);function j(){l.factor?t.put(c("ticket-allocator.factors.update",l.factor.uuid)):t.post(c("ticket-allocator.factors.store"))}return(a,s)=>(h(),S(M,null,[e(r(O),{title:a.$t(a.factor?"edit_factor":"new_factor")},null,8,["title"]),e(z,null,{header:o(()=>[p("h2",W,f(a.$t(a.factor?"edit_factor":"new_factor")),1)]),default:o(()=>[p("div",null,[e(G,{onSubmit:R(j,["prevent"])},{default:o(()=>[e(H,null,{default:o(()=>[e(i,null,{default:o(()=>[e(d,{cols:"12",md:"12"},{default:o(()=>[e(J,{modelValue:r(t).active,"onUpdate:modelValue":s[0]||(s[0]=n=>r(t).active=n),label:a.$t("active")},null,8,["modelValue","label"])]),_:1})]),_:1}),e(i,null,{default:o(()=>[e(d,{cols:"12",md:"12"},{default:o(()=>[e(w,{"model-value":m.value,label:a.$t("factor_type"),"error-messages":a.errors.type,readonly:""},null,8,["model-value","label","error-messages"]),A(p("input",{"onUpdate:modelValue":s[1]||(s[1]=n=>r(t).type=n),type:"hidden"},null,512),[[P,r(t).type]])]),_:1})]),_:1}),e(i,null,{default:o(()=>[e(d,{cols:"12",md:"12"},{default:o(()=>[e(w,{modelValue:r(t).name,"onUpdate:modelValue":s[2]||(s[2]=n=>r(t).name=n),maxlength:"255",label:a.$t("name"),placeholder:m.value,"persistent-placeholder":!!m.value.length,"error-messages":a.errors.name},null,8,["modelValue","label","placeholder","persistent-placeholder","error-messages"])]),_:1})]),_:1}),e(i,null,{default:o(()=>[e(d,{cols:"12",md:"12"},{default:o(()=>[e(K,{modelValue:r(t).description,"onUpdate:modelValue":s[3]||(s[3]=n=>r(t).description=n),label:a.$t("description"),"error-messages":a.errors.description},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),r(y)?(h(),x(I(r(y)),{key:0,modelValue:r(t).config,"onUpdate:modelValue":s[4]||(s[4]=n=>r(t).config=n),entries:a.entries},null,8,["modelValue","entries"])):L("",!0),e(i,null,{default:o(()=>[e(d,{cols:"12",md:"12"},{default:o(()=>[e($,{type:"submit",color:"primary",class:"mr-3",disabled:r(t).processing},{default:o(()=>[D(f(a.$t("save")),1)]),_:1},8,["disabled"]),e($,{to:r(c)("ticket-allocator.factors.index"),class:"mr-3"},{default:o(()=>[D(f(a.$t("cancel")),1)]),_:1},8,["to"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1})],64))}}),se=Z(X,[["__file","C:/PhpstormProjects/ticket-allocator/resources/js/pages/Factor/CreateEdit.vue"]]);export{se as default};
//# sourceMappingURL=CreateEdit-2afd877b.js.map
