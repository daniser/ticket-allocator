import{ak as T,aQ as F,aq as v,i as a,aa as r,ar as t,ay as _,ap as n,aM as N,au as C,av as p,aH as S,aR as q,az as A,as as E,V as y,ax as h}from"./app-d1c92dde.js";import{a as M,A as c}from"./Default.vue_vue_type_script_setup_true_lang-ae0a47cd.js";import{V as R}from"./VForm-a293e319.js";import{V as j}from"./VContainer-bd3a502a.js";import{V as i,a as u}from"./VRow-6b4e47a3.js";import{V as z}from"./VCheckbox-5038471c.js";import{V as D}from"./VTextarea-5a063a67.js";import{V as f}from"./VAutocomplete-1d682c0d.js";const H={class:"font-semibold text-xl text-gray-800 leading-tight"},P=T({__name:"CreateEdit",props:{team:{},operators:{},ticketCategories:{},matchers:{},errors:{}},setup(w){var V,b,g,k,$;const m=w,l=F({active:!((V=m.team)!=null&&V.deleted_at),name:((b=m.team)==null?void 0:b.name)??"",description:((g=m.team)==null?void 0:g.description)??"",operators:((k=m.team)==null?void 0:k.operators.map(e=>e.uuid))??[],ticket_categories:(($=m.team)==null?void 0:$.ticket_categories.map(e=>e.uuid))??[]}),B=e=>Object.entries(e).map(([o,s])=>({title:s,value:o}));function U(){m.team?l.put(c("ticket-allocator.teams.update",m.team.uuid)):l.post(c("ticket-allocator.teams.store"))}return(e,o)=>(n(),v(_,null,[a(r(N),{title:e.$t(e.team?"edit_team":"new_team")},null,8,["title"]),a(M,null,{header:t(()=>[C("h2",H,p(e.$t(e.team?"edit_team":"new_team")),1)]),default:t(()=>[C("div",null,[a(R,{onSubmit:S(U,["prevent"])},{default:t(()=>[a(j,null,{default:t(()=>[a(i,null,{default:t(()=>[a(u,{cols:"12",md:"12"},{default:t(()=>[a(z,{modelValue:r(l).active,"onUpdate:modelValue":o[0]||(o[0]=s=>r(l).active=s),label:e.$t("active")},null,8,["modelValue","label"])]),_:1})]),_:1}),a(i,null,{default:t(()=>[a(u,{cols:"12",md:"12"},{default:t(()=>[a(q,{modelValue:r(l).name,"onUpdate:modelValue":o[1]||(o[1]=s=>r(l).name=s),required:"",maxlength:"255",label:e.$t("name"),"error-messages":e.errors.name},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),a(i,null,{default:t(()=>[a(u,{cols:"12",md:"12"},{default:t(()=>[a(D,{modelValue:r(l).description,"onUpdate:modelValue":o[2]||(o[2]=s=>r(l).description=s),label:e.$t("description"),"error-messages":e.errors.description},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),a(i,null,{default:t(()=>[a(u,{cols:"12",md:"12"},{default:t(()=>[a(f,{modelValue:r(l).operators,"onUpdate:modelValue":o[3]||(o[3]=s=>r(l).operators=s),multiple:"",clearable:"",chips:"","closable-chips":"",label:e.$t("operators"),items:e.operators,"item-title":"name","item-value":"uuid","error-messages":e.errors.operators},null,8,["modelValue","label","items","error-messages"])]),_:1})]),_:1}),a(i,null,{default:t(()=>[a(u,{cols:"12",md:"12"},{default:t(()=>[a(f,{modelValue:r(l).ticket_categories,"onUpdate:modelValue":o[4]||(o[4]=s=>r(l).ticket_categories=s),multiple:"",clearable:"",chips:"","closable-chips":"",label:e.$t("ticket_categories"),items:e.ticketCategories,"item-title":"name","item-value":"uuid","error-messages":e.errors.ticket_categories},null,8,["modelValue","label","items","error-messages"])]),_:1})]),_:1}),(n(!0),v(_,null,A(e.matchers,(s,d)=>(n(),E(i,{key:d},{default:t(()=>[a(u,{cols:"12",md:"12"},{default:t(()=>[a(f,{multiple:"",clearable:"",chips:"","closable-chips":"",label:e.$t(d),items:B(s),"error-messages":e.errors[d]},null,8,["label","items","error-messages"])]),_:2},1024)]),_:2},1024))),128)),a(i,null,{default:t(()=>[a(u,{cols:"12",md:"12"},{default:t(()=>[a(y,{type:"submit",color:"primary",class:"mr-3",disabled:r(l).processing},{default:t(()=>[h(p(e.$t("save")),1)]),_:1},8,["disabled"]),a(y,{to:r(c)("ticket-allocator.teams.index"),class:"mr-3"},{default:t(()=>[h(p(e.$t("cancel")),1)]),_:1},8,["to"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1})],64))}});export{P as default};
//# sourceMappingURL=CreateEdit-339d19d5.js.map
