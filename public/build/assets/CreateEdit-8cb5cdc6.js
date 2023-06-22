import{ak as M,aQ as F,f as N,aq as S,i as l,aa as s,ar as a,ay as T,ap as p,aM as A,au as _,av as f,aH as E,as as $,aR as d,V as v,ax as h}from"./app-bbb3fbe7.js";import{a as R,A as V}from"./Default.vue_vue_type_script_setup_true_lang-b2e0c9a9.js";import{V as q}from"./VForm-64566895.js";import{V as D}from"./VContainer-abe3cf2f.js";import{V as u,a as i}from"./VRow-de7d8ef7.js";import{V as w}from"./VAutocomplete-df3502bc.js";const H={class:"font-semibold text-xl text-gray-800 leading-tight"},G=M({__name:"CreateEdit",props:{users:{},operator:{},teams:{},errors:{}},setup(B){var c,g,y,k;const m=B,t=F({user:null,name:((c=m.operator)==null?void 0:c.display_name)??"",ticket_limit:((g=m.operator)==null?void 0:g.ticket_limit)??null,complexity_limit:((y=m.operator)==null?void 0:y.complexity_limit)??null,teams:((k=m.operator)==null?void 0:k.teams.map(e=>e.uuid))??[]}),b=N(()=>{var o,n;const e=(n=(o=m.operator)==null?void 0:o.user)==null?void 0:n.name;if(e)return e;const r=m.users.findIndex(U=>U.id===t.user);return r<0?"":m.users[r].name});function C(){m.operator?t.put(V("ticket-allocator.operators.update",m.operator.uuid)):t.post(V("ticket-allocator.operators.store"))}return(e,r)=>(p(),S(T,null,[l(s(A),{title:e.$t(e.operator?"edit_operator":"new_operator")},null,8,["title"]),l(R,null,{header:a(()=>[_("h2",H,f(e.$t(e.operator?"edit_operator":"new_operator")),1)]),default:a(()=>[_("div",null,[l(q,{onSubmit:E(C,["prevent"])},{default:a(()=>[l(D,null,{default:a(()=>[l(u,null,{default:a(()=>[l(i,{cols:"12",md:"12"},{default:a(()=>{var o;return[e.operator?(p(),$(d,{key:0,"model-value":(o=e.operator.user)==null?void 0:o.name,label:e.$t("user"),readonly:""},null,8,["model-value","label"])):(p(),$(w,{key:1,modelValue:s(t).user,"onUpdate:modelValue":r[0]||(r[0]=n=>s(t).user=n),label:e.$t("user"),items:e.users,"item-title":"name","item-value":"id","error-messages":e.errors.user},null,8,["modelValue","label","items","error-messages"]))]}),_:1})]),_:1}),l(u,null,{default:a(()=>[l(i,{cols:"12",md:"12"},{default:a(()=>[l(d,{modelValue:s(t).name,"onUpdate:modelValue":r[1]||(r[1]=o=>s(t).name=o),maxlength:"255",label:e.$t("display_name"),placeholder:b.value,"persistent-placeholder":!!b.value.length,"error-messages":e.errors.name},null,8,["modelValue","label","placeholder","persistent-placeholder","error-messages"])]),_:1})]),_:1}),l(u,null,{default:a(()=>[l(i,{cols:"12",md:"6"},{default:a(()=>[l(d,{modelValue:s(t).ticket_limit,"onUpdate:modelValue":r[2]||(r[2]=o=>s(t).ticket_limit=o),modelModifiers:{number:!0},type:"number",min:"1",max:"100",label:e.$t("ticket_limit"),placeholder:"∞","persistent-placeholder":"","error-messages":e.errors.ticket_limit},null,8,["modelValue","label","error-messages"])]),_:1}),l(i,{cols:"12",md:"6"},{default:a(()=>[l(d,{modelValue:s(t).complexity_limit,"onUpdate:modelValue":r[3]||(r[3]=o=>s(t).complexity_limit=o),modelModifiers:{number:!0},type:"number",min:"1",max:"1000",label:e.$t("complexity_limit"),placeholder:"∞","persistent-placeholder":"","error-messages":e.errors.complexity_limit},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),l(u,null,{default:a(()=>[l(i,{cols:"12",md:"12"},{default:a(()=>[l(w,{modelValue:s(t).teams,"onUpdate:modelValue":r[4]||(r[4]=o=>s(t).teams=o),multiple:"",clearable:"",chips:"","closable-chips":"",label:e.$t("teams"),items:e.teams,"item-title":"name","item-value":"uuid","error-messages":e.errors.teams},null,8,["modelValue","label","items","error-messages"])]),_:1})]),_:1}),l(u,null,{default:a(()=>[l(i,{cols:"12",md:"12"},{default:a(()=>[l(v,{type:"submit",color:"primary",class:"mr-3",disabled:s(t).processing},{default:a(()=>[h(f(e.$t("save")),1)]),_:1},8,["disabled"]),l(v,{to:s(V)("ticket-allocator.operators.index"),class:"mr-3"},{default:a(()=>[h(f(e.$t("cancel")),1)]),_:1},8,["to"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1})],64))}});export{G as default};
//# sourceMappingURL=CreateEdit-8cb5cdc6.js.map
