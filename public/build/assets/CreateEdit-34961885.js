import{a8 as N,aK as F,c as M,ab as p,ac as S,B as l,u as r,ad as a,ak as T,aG as A,ag as _,ah as f,au as E,ae as h,aN as n,J as $,aj as v,aQ as j}from"./app-d538a539.js";import{a as D,A as V}from"./Default.vue_vue_type_script_setup_true_lang-b24858e9.js";import{V as G}from"./VForm-cfac3d57.js";import{V as I,a as u,b as i}from"./VRow-3dcf3712.js";import{V as B}from"./VAutocomplete-4b9b487e.js";const J={class:"font-semibold text-xl text-gray-800 leading-tight"},z=N({__name:"CreateEdit",props:{users:{},operator:{},teams:{},errors:{}},setup(w){var c,g,y,k;const m=w,t=F({user:null,name:((c=m.operator)==null?void 0:c.display_name)??"",ticket_limit:((g=m.operator)==null?void 0:g.ticket_limit)??null,complexity_limit:((y=m.operator)==null?void 0:y.complexity_limit)??null,teams:((k=m.operator)==null?void 0:k.teams.map(e=>e.uuid))??[]}),b=M(()=>{var s,d;const e=(d=(s=m.operator)==null?void 0:s.user)==null?void 0:d.name;if(e)return e;const o=m.users.findIndex(U=>U.id===t.user);return o<0?"":m.users[o].name});function C(){m.operator?t.put(V("ticket-allocator.operators.update",m.operator.uuid)):t.post(V("ticket-allocator.operators.store"))}return(e,o)=>(p(),S(T,null,[l(r(A),{title:e.$t(e.operator?"edit_operator":"new_operator")},null,8,["title"]),l(D,null,{header:a(()=>[_("h2",J,f(e.$t(e.operator?"edit_operator":"new_operator")),1)]),default:a(()=>[_("div",null,[l(G,{onSubmit:E(C,["prevent"])},{default:a(()=>[l(I,null,{default:a(()=>[l(u,null,{default:a(()=>[l(i,{cols:"12",md:"12"},{default:a(()=>{var s;return[e.operator?(p(),h(n,{key:0,"model-value":(s=e.operator.user)==null?void 0:s.name,label:e.$t("user"),readonly:""},null,8,["model-value","label"])):(p(),h(B,{key:1,modelValue:r(t).user,"onUpdate:modelValue":o[0]||(o[0]=d=>r(t).user=d),label:e.$t("user"),items:e.users,"item-title":"name","item-value":"id","error-messages":e.errors.user},null,8,["modelValue","label","items","error-messages"]))]}),_:1})]),_:1}),l(u,null,{default:a(()=>[l(i,{cols:"12",md:"12"},{default:a(()=>[l(n,{modelValue:r(t).name,"onUpdate:modelValue":o[1]||(o[1]=s=>r(t).name=s),maxlength:"255",label:e.$t("display_name"),placeholder:b.value,"persistent-placeholder":!!b.value.length,"error-messages":e.errors.name},null,8,["modelValue","label","placeholder","persistent-placeholder","error-messages"])]),_:1})]),_:1}),l(u,null,{default:a(()=>[l(i,{cols:"12",md:"6"},{default:a(()=>[l(n,{modelValue:r(t).ticket_limit,"onUpdate:modelValue":o[2]||(o[2]=s=>r(t).ticket_limit=s),modelModifiers:{number:!0},type:"number",min:"1",max:"100",label:e.$t("ticket_limit"),placeholder:"∞","persistent-placeholder":"","error-messages":e.errors.ticket_limit},null,8,["modelValue","label","error-messages"])]),_:1}),l(i,{cols:"12",md:"6"},{default:a(()=>[l(n,{modelValue:r(t).complexity_limit,"onUpdate:modelValue":o[3]||(o[3]=s=>r(t).complexity_limit=s),modelModifiers:{number:!0},type:"number",min:"1",max:"1000",label:e.$t("complexity_limit"),placeholder:"∞","persistent-placeholder":"","error-messages":e.errors.complexity_limit},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),l(u,null,{default:a(()=>[l(i,{cols:"12",md:"12"},{default:a(()=>[l(B,{modelValue:r(t).teams,"onUpdate:modelValue":o[4]||(o[4]=s=>r(t).teams=s),multiple:"",clearable:"",chips:"","closable-chips":"",label:e.$t("teams"),items:e.teams,"item-title":"name","item-value":"uuid","error-messages":e.errors.teams},null,8,["modelValue","label","items","error-messages"])]),_:1})]),_:1}),l(u,null,{default:a(()=>[l(i,{cols:"12",md:"12"},{default:a(()=>[l($,{type:"submit",color:"primary",class:"mr-3",disabled:r(t).processing},{default:a(()=>[v(f(e.$t("save")),1)]),_:1},8,["disabled"]),l(r(j),{href:r(V)("ticket-allocator.operators.index"),class:"mr-3"},{default:a(()=>[l($,null,{default:a(()=>[v(f(e.$t("cancel")),1)]),_:1})]),_:1},8,["href"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1})],64))}});export{z as default};
//# sourceMappingURL=CreateEdit-34961885.js.map
