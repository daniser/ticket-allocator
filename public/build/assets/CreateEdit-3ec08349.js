import{an as U,aV as F,f as M,at as N,i as l,ad as s,au as a,X as S,as as p,aR as T,ax as k,ay as f,aK as A,av as _,aW as d,V as $,aA as v}from"./app-4fd643e0.js";import{_ as E}from"./Default.vue_vue_type_script_setup_true_lang-4855ce09.js";import{V as R}from"./VForm-e5f4dab7.js";import{V as D}from"./VContainer-fbe62fc1.js";import{V as u,a as i}from"./VRow-308fa30b.js";import{V as h}from"./VAutocomplete-6f488fb7.js";import"./_plugin-vue_export-helper-c27b6911.js";const I={class:"font-semibold text-xl text-gray-800 leading-tight"},G=U({__name:"CreateEdit",props:{users:{},operator:{},teams:{},errors:{}},setup(w){var b,c,g,y;const m=w,t=F({user:null,name:((b=m.operator)==null?void 0:b.display_name)??"",ticket_limit:((c=m.operator)==null?void 0:c.ticket_limit)??null,complexity_limit:((g=m.operator)==null?void 0:g.complexity_limit)??null,teams:((y=m.operator)==null?void 0:y.teams.map(e=>e.uuid))??[]}),V=M(()=>{var o,n;const e=(n=(o=m.operator)==null?void 0:o.user)==null?void 0:n.name;if(e)return e;const r=m.users.findIndex(C=>C.id===t.user);return r<0?"":m.users[r].name});function B(){m.operator?t.put(route("ticket-allocator.operators.update",m.operator.uuid)):t.post(route("ticket-allocator.operators.store"))}return(e,r)=>(p(),N(S,null,[l(s(T),{title:e.$t(e.operator?"edit_operator":"new_operator")},null,8,["title"]),l(E,null,{header:a(()=>[k("h2",I,f(e.$t(e.operator?"edit_operator":"new_operator")),1)]),default:a(()=>[k("div",null,[l(R,{onSubmit:A(B,["prevent"])},{default:a(()=>[l(D,null,{default:a(()=>[l(u,null,{default:a(()=>[l(i,{cols:"12",md:"12"},{default:a(()=>{var o;return[e.operator?(p(),_(d,{key:0,"model-value":(o=e.operator.user)==null?void 0:o.name,label:e.$t("user"),readonly:""},null,8,["model-value","label"])):(p(),_(h,{key:1,modelValue:s(t).user,"onUpdate:modelValue":r[0]||(r[0]=n=>s(t).user=n),label:e.$t("user"),items:e.users,"item-title":"name","item-value":"id","error-messages":e.errors.user},null,8,["modelValue","label","items","error-messages"]))]}),_:1})]),_:1}),l(u,null,{default:a(()=>[l(i,{cols:"12",md:"12"},{default:a(()=>[l(d,{modelValue:s(t).name,"onUpdate:modelValue":r[1]||(r[1]=o=>s(t).name=o),maxlength:"255",label:e.$t("display_name"),placeholder:V.value,"persistent-placeholder":!!V.value.length,"error-messages":e.errors.name},null,8,["modelValue","label","placeholder","persistent-placeholder","error-messages"])]),_:1})]),_:1}),l(u,null,{default:a(()=>[l(i,{cols:"12",md:"6"},{default:a(()=>[l(d,{modelValue:s(t).ticket_limit,"onUpdate:modelValue":r[2]||(r[2]=o=>s(t).ticket_limit=o),modelModifiers:{number:!0},type:"number",min:"1",max:"100",label:e.$t("ticket_limit"),placeholder:"∞","persistent-placeholder":"","error-messages":e.errors.ticket_limit},null,8,["modelValue","label","error-messages"])]),_:1}),l(i,{cols:"12",md:"6"},{default:a(()=>[l(d,{modelValue:s(t).complexity_limit,"onUpdate:modelValue":r[3]||(r[3]=o=>s(t).complexity_limit=o),modelModifiers:{number:!0},type:"number",min:"1",max:"1000",label:e.$t("complexity_limit"),placeholder:"∞","persistent-placeholder":"","error-messages":e.errors.complexity_limit},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),l(u,null,{default:a(()=>[l(i,{cols:"12",md:"12"},{default:a(()=>[l(h,{modelValue:s(t).teams,"onUpdate:modelValue":r[4]||(r[4]=o=>s(t).teams=o),multiple:"",clearable:"",chips:"","closable-chips":"",label:e.$t("teams"),items:e.teams,"item-title":"name","item-value":"uuid","error-messages":e.errors.teams},null,8,["modelValue","label","items","error-messages"])]),_:1})]),_:1}),l(u,null,{default:a(()=>[l(i,{cols:"12",md:"12"},{default:a(()=>[l($,{type:"submit",color:"primary",class:"mr-3",disabled:s(t).processing},{default:a(()=>[v(f(e.$t("save")),1)]),_:1},8,["disabled"]),l($,{to:e.route("ticket-allocator.operators.index"),class:"mr-3"},{default:a(()=>[v(f(e.$t("cancel")),1)]),_:1},8,["to"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1})],64))}});export{G as default};
//# sourceMappingURL=CreateEdit-3ec08349.js.map
