import{ak as N,aQ as S,aq as v,i as a,aa as o,ar as t,ay as C,ap as n,aM as q,au as h,av as p,aH as A,aR as E,az as M,as as R,V as y,ax as U}from"./app-960e20cd.js";import{_ as j,A as c}from"./Default.vue_vue_type_script_setup_true_lang-a35df365.js";import{V as z}from"./VForm-d4d63727.js";import{V as D}from"./VContainer-8372c7b9.js";import{V as i,a as d}from"./VRow-def39893.js";import{V as H}from"./VCheckbox-4f26b6d1.js";import{V as L}from"./VTextarea-71edccd9.js";import{V}from"./VAutocomplete-981fc1bc.js";import"./_plugin-vue_export-helper-c27b6911.js";const O={class:"font-semibold text-xl text-gray-800 leading-tight"},Y=N({__name:"CreateEdit",props:{team:{},operators:{},ticketCategories:{},matchers:{},errors:{}},setup(w){var f,g,b,k,_,$;const m=w,l=S({active:!((f=m.team)!=null&&f.deleted_at),name:((g=m.team)==null?void 0:g.name)??"",description:((b=m.team)==null?void 0:b.description)??"",operators:((k=m.team)==null?void 0:k.operators.map(e=>e.uuid))??[],ticket_categories:((_=m.team)==null?void 0:_.ticket_categories.map(e=>e.uuid))??[],matching:(($=m.team)==null?void 0:$.matching)??{}}),B=e=>Object.entries(e).map(([r,s])=>({title:s,value:r}));function T(){m.team?l.put(c("ticket-allocator.teams.update",m.team.uuid)):l.post(c("ticket-allocator.teams.store"))}return(e,r)=>(n(),v(C,null,[a(o(q),{title:e.$t(e.team?"edit_team":"new_team")},null,8,["title"]),a(j,null,{header:t(()=>[h("h2",O,p(e.$t(e.team?"edit_team":"new_team")),1)]),default:t(()=>[h("div",null,[a(z,{onSubmit:A(T,["prevent"])},{default:t(()=>[a(D,null,{default:t(()=>[a(i,null,{default:t(()=>[a(d,{cols:"12",md:"12"},{default:t(()=>[a(H,{modelValue:o(l).active,"onUpdate:modelValue":r[0]||(r[0]=s=>o(l).active=s),label:e.$t("active")},null,8,["modelValue","label"])]),_:1})]),_:1}),a(i,null,{default:t(()=>[a(d,{cols:"12",md:"12"},{default:t(()=>[a(E,{modelValue:o(l).name,"onUpdate:modelValue":r[1]||(r[1]=s=>o(l).name=s),required:"",maxlength:"255",label:e.$t("name"),"error-messages":e.errors.name},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),a(i,null,{default:t(()=>[a(d,{cols:"12",md:"12"},{default:t(()=>[a(L,{modelValue:o(l).description,"onUpdate:modelValue":r[2]||(r[2]=s=>o(l).description=s),label:e.$t("description"),"error-messages":e.errors.description},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),a(i,null,{default:t(()=>[a(d,{cols:"12",md:"12"},{default:t(()=>[a(V,{modelValue:o(l).operators,"onUpdate:modelValue":r[3]||(r[3]=s=>o(l).operators=s),multiple:"",clearable:"",chips:"","closable-chips":"",label:e.$t("operators"),items:e.operators,"item-title":"name","item-value":"uuid","error-messages":e.errors.operators},null,8,["modelValue","label","items","error-messages"])]),_:1})]),_:1}),a(i,null,{default:t(()=>[a(d,{cols:"12",md:"12"},{default:t(()=>[a(V,{modelValue:o(l).ticket_categories,"onUpdate:modelValue":r[4]||(r[4]=s=>o(l).ticket_categories=s),multiple:"",clearable:"",chips:"","closable-chips":"",label:e.$t("ticket_categories"),items:e.ticketCategories,"item-title":"name","item-value":"uuid","error-messages":e.errors.ticket_categories},null,8,["modelValue","label","items","error-messages"])]),_:1})]),_:1}),(n(!0),v(C,null,M(e.matchers,(s,u)=>(n(),R(i,{key:u},{default:t(()=>[a(d,{cols:"12",md:"12"},{default:t(()=>[a(V,{modelValue:o(l).matching[u],"onUpdate:modelValue":F=>o(l).matching[u]=F,multiple:"",clearable:"",chips:"","closable-chips":"",label:e.$t(u),items:B(s),"error-messages":e.errors[u]},null,8,["modelValue","onUpdate:modelValue","label","items","error-messages"])]),_:2},1024)]),_:2},1024))),128)),a(i,null,{default:t(()=>[a(d,{cols:"12",md:"12"},{default:t(()=>[a(y,{type:"submit",color:"primary",class:"mr-3",disabled:o(l).processing},{default:t(()=>[U(p(e.$t("save")),1)]),_:1},8,["disabled"]),a(y,{to:o(c)("ticket-allocator.teams.index"),class:"mr-3"},{default:t(()=>[U(p(e.$t("cancel")),1)]),_:1},8,["to"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1})],64))}});export{Y as default};
//# sourceMappingURL=CreateEdit-069ef741.js.map
