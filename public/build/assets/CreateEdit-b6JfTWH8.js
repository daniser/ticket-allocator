import{O as F,am as T,f as M,U as N,i as l,a1 as s,ah as E,W as a,ai as S,F as A,T as p,_,$ as f,a7 as D,X as $,V as h,a0 as v,a8 as V}from"./app-MMbirL_Y.js";import{V as I}from"./VForm-vNG34xIa.js";import{V as O}from"./VContainer-DI1Oyank.js";import{V as u,a as i}from"./VRow-D89EXIox.js";import{V as n}from"./VTextField-yQXd7Xfr.js";import{V as U}from"./VAutocomplete-DSEvSyNk.js";import"./VInput-DDyAvved.js";/* empty css              */import"./filter-wVzIJ9cp.js";import"./VCheckboxBtn-hlFgBONt.js";import"./VSelectionControl-BqekPyFq.js";const R={class:"font-semibold text-xl text-gray-800 leading-tight"},P=F({__name:"CreateEdit",props:{users:{},operator:{},teams:{},errors:{}},setup(w){var b,g,y,k;const m=w,t=T({user:null,name:((b=m.operator)==null?void 0:b.display_name)??"",ticket_limit:((g=m.operator)==null?void 0:g.ticket_limit)??null,complexity_limit:((y=m.operator)==null?void 0:y.complexity_limit)??null,teams:((k=m.operator)==null?void 0:k.teams.map(e=>e.uuid))??[]}),c=M(()=>{var o,d;const e=(d=(o=m.operator)==null?void 0:o.user)==null?void 0:d.name;if(e)return e;const r=m.users.findIndex(C=>C.id===t.user);return r<0?"":m.users[r].name});function B(){m.operator?t.put(V("ticket-allocator.operators.update",m.operator.uuid)):t.post(V("ticket-allocator.operators.store"))}return(e,r)=>(p(),N(A,null,[l(s(E),{title:e.$t(e.operator?"edit_operator":"new_operator")},null,8,["title"]),l(S,null,{header:a(()=>[_("h2",R,f(e.$t(e.operator?"edit_operator":"new_operator")),1)]),default:a(()=>[_("div",null,[l(I,{onSubmit:D(B,["prevent"])},{default:a(()=>[l(O,null,{default:a(()=>[l(u,null,{default:a(()=>[l(i,{cols:"12",md:"12"},{default:a(()=>{var o;return[e.operator?(p(),$(n,{key:0,"model-value":(o=e.operator.user)==null?void 0:o.name,label:e.$t("user"),readonly:""},null,8,["model-value","label"])):(p(),$(U,{key:1,modelValue:s(t).user,"onUpdate:modelValue":r[0]||(r[0]=d=>s(t).user=d),label:e.$t("user"),items:e.users,"item-title":"name","item-value":"id","error-messages":e.errors.user},null,8,["modelValue","label","items","error-messages"]))]}),_:1})]),_:1}),l(u,null,{default:a(()=>[l(i,{cols:"12",md:"12"},{default:a(()=>[l(n,{modelValue:s(t).name,"onUpdate:modelValue":r[1]||(r[1]=o=>s(t).name=o),maxlength:"255",label:e.$t("display_name"),placeholder:c.value,"persistent-placeholder":!!c.value.length,"error-messages":e.errors.name},null,8,["modelValue","label","placeholder","persistent-placeholder","error-messages"])]),_:1})]),_:1}),l(u,null,{default:a(()=>[l(i,{cols:"12",md:"6"},{default:a(()=>[l(n,{modelValue:s(t).ticket_limit,"onUpdate:modelValue":r[2]||(r[2]=o=>s(t).ticket_limit=o),modelModifiers:{number:!0},type:"number",min:"1",max:"100",label:e.$t("ticket_limit"),placeholder:"∞","persistent-placeholder":"","error-messages":e.errors.ticket_limit},null,8,["modelValue","label","error-messages"])]),_:1}),l(i,{cols:"12",md:"6"},{default:a(()=>[l(n,{modelValue:s(t).complexity_limit,"onUpdate:modelValue":r[3]||(r[3]=o=>s(t).complexity_limit=o),modelModifiers:{number:!0},type:"number",min:"1",max:"1000",label:e.$t("complexity_limit"),placeholder:"∞","persistent-placeholder":"","error-messages":e.errors.complexity_limit},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),l(u,null,{default:a(()=>[l(i,{cols:"12",md:"12"},{default:a(()=>[l(U,{modelValue:s(t).teams,"onUpdate:modelValue":r[4]||(r[4]=o=>s(t).teams=o),multiple:"",clearable:"",chips:"","closable-chips":"",label:e.$t("teams"),items:e.teams,"item-title":"name","item-value":"uuid","error-messages":e.errors.teams},null,8,["modelValue","label","items","error-messages"])]),_:1})]),_:1}),l(u,null,{default:a(()=>[l(i,{cols:"12",md:"12"},{default:a(()=>[l(h,{type:"submit",color:"primary",class:"mr-3",disabled:s(t).processing},{default:a(()=>[v(f(e.$t("save")),1)]),_:1},8,["disabled"]),l(h,{to:s(V)("ticket-allocator.operators.index"),class:"mr-3"},{default:a(()=>[v(f(e.$t("cancel")),1)]),_:1},8,["to"])]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})],64))}});export{P as default};
//# sourceMappingURL=CreateEdit-b6JfTWH8.js.map
