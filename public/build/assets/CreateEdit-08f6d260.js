import{an as N,aV as S,at as y,i as a,ad as o,au as l,X as $,as as n,aR as E,ax as k,ay as p,aK as M,aW as U,aB as R,av as j,V as B,aA as C}from"./app-4fd643e0.js";import{_ as q}from"./Default.vue_vue_type_script_setup_true_lang-4855ce09.js";import{V as D}from"./VForm-e5f4dab7.js";import{V as K}from"./VContainer-fbe62fc1.js";import{V as d,a as i}from"./VRow-308fa30b.js";import{V as L}from"./VCheckbox-eca117e2.js";import{V as O}from"./VTextarea-eb64611c.js";import{V as A}from"./VAutocomplete-6f488fb7.js";import"./_plugin-vue_export-helper-c27b6911.js";const W={class:"font-semibold text-xl text-gray-800 leading-tight"},Y=N({__name:"CreateEdit",props:{team:{},operators:{},matchers:{},errors:{}},setup(T){var f,V,g,b,c,h,v;const m=T,t=S({active:!((f=m.team)!=null&&f.deleted_at),name:((V=m.team)==null?void 0:V.name)??"",description:((g=m.team)==null?void 0:g.description)??"",weight:((b=m.team)==null?void 0:b.weight)??100,operators:((c=m.team)==null?void 0:c.operators.map(e=>e.uuid))??[],matching:Array.isArray((h=m.team)==null?void 0:h.matching)?{}:((v=m.team)==null?void 0:v.matching)??{}}),_=e=>Object.entries(e).map(([s,r])=>({title:s,value:r}));function F(){m.team?t.put(route("ticket-allocator.teams.update",m.team.uuid)):t.post(route("ticket-allocator.teams.store"))}return(e,s)=>(n(),y($,null,[a(o(E),{title:e.$t(e.team?"edit_team":"new_team")},null,8,["title"]),a(q,null,{header:l(()=>[k("h2",W,p(e.$t(e.team?"edit_team":"new_team")),1)]),default:l(()=>[k("div",null,[a(D,{onSubmit:M(F,["prevent"])},{default:l(()=>[a(K,null,{default:l(()=>[a(d,null,{default:l(()=>[a(i,{cols:"12",md:"12"},{default:l(()=>[a(L,{modelValue:o(t).active,"onUpdate:modelValue":s[0]||(s[0]=r=>o(t).active=r),label:e.$t("active")},null,8,["modelValue","label"])]),_:1})]),_:1}),a(d,null,{default:l(()=>[a(i,{cols:"12",md:"6"},{default:l(()=>[a(U,{modelValue:o(t).name,"onUpdate:modelValue":s[1]||(s[1]=r=>o(t).name=r),required:"",maxlength:"255",label:e.$t("name"),"error-messages":e.errors.name},null,8,["modelValue","label","error-messages"])]),_:1}),a(i,{cols:"12",md:"6"},{default:l(()=>[a(U,{modelValue:o(t).weight,"onUpdate:modelValue":s[2]||(s[2]=r=>o(t).weight=r),modelModifiers:{number:!0},type:"number",min:"0",max:"1000",label:e.$t("weight"),placeholder:"100","error-messages":e.errors.weight},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),a(d,null,{default:l(()=>[a(i,{cols:"12",md:"12"},{default:l(()=>[a(O,{modelValue:o(t).description,"onUpdate:modelValue":s[3]||(s[3]=r=>o(t).description=r),label:e.$t("description"),"error-messages":e.errors.description},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),a(d,null,{default:l(()=>[a(i,{cols:"12",md:"12"},{default:l(()=>[a(A,{modelValue:o(t).operators,"onUpdate:modelValue":s[4]||(s[4]=r=>o(t).operators=r),multiple:"",clearable:"",chips:"","closable-chips":"",label:e.$t("operators"),items:e.operators,"item-title":"name","item-value":"uuid","error-messages":e.errors.operators},null,8,["modelValue","label","items","error-messages"])]),_:1})]),_:1}),(n(!0),y($,null,R(e.matchers,(r,u)=>(n(),j(d,{key:u},{default:l(()=>[a(i,{cols:"12",md:"12"},{default:l(()=>[a(A,{multiple:"",clearable:"",chips:"","closable-chips":"",label:e.$t(u),items:_(r),"error-messages":e.errors[u],"model-value":o(t).matching[u],"onUpdate:modelValue":w=>o(t).matching[u]=w.length?w:void 0},null,8,["label","items","error-messages","model-value","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024))),128)),a(d,null,{default:l(()=>[a(i,{cols:"12",md:"12"},{default:l(()=>[a(B,{type:"submit",color:"primary",class:"mr-3",disabled:o(t).processing},{default:l(()=>[C(p(e.$t("save")),1)]),_:1},8,["disabled"]),a(B,{to:e.route("ticket-allocator.teams.index"),class:"mr-3"},{default:l(()=>[C(p(e.$t("cancel")),1)]),_:1},8,["to"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1})],64))}});export{Y as default};
//# sourceMappingURL=CreateEdit-08f6d260.js.map
