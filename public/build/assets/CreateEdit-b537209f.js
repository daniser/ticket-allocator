import{an as C,aV as b,at as h,i as e,ad as r,au as a,X as _,as as $,aR as w,ax as c,ay as n,aK as B,aW as g,V as f,aA as p}from"./app-4fd643e0.js";import{_ as v}from"./Default.vue_vue_type_script_setup_true_lang-4855ce09.js";import{V as F}from"./VForm-e5f4dab7.js";import{V as N}from"./VContainer-fbe62fc1.js";import{V,a as m}from"./VRow-308fa30b.js";import"./_plugin-vue_export-helper-c27b6911.js";const S={class:"font-semibold text-xl text-gray-800 leading-tight"},A=C({__name:"CreateEdit",props:{ticketCategory:{},errors:{}},setup(y){var d,u;const l=y,o=b({name:((d=l.ticketCategory)==null?void 0:d.name)??"",short:((u=l.ticketCategory)==null?void 0:u.short)??""});function k(){l.ticketCategory?o.put(route("ticket-allocator.ticket-categories.update",l.ticketCategory.uuid)):o.post(route("ticket-allocator.ticket-categories.store"))}return(t,s)=>($(),h(_,null,[e(r(w),{title:t.$t(t.ticketCategory?"edit_category":"new_category")},null,8,["title"]),e(v,null,{header:a(()=>[c("h2",S,n(t.$t(t.ticketCategory?"edit_category":"new_category")),1)]),default:a(()=>[c("div",null,[e(F,{onSubmit:B(k,["prevent"])},{default:a(()=>[e(N,null,{default:a(()=>[e(V,null,{default:a(()=>[e(m,{cols:"12",md:"6"},{default:a(()=>[e(g,{modelValue:r(o).name,"onUpdate:modelValue":s[0]||(s[0]=i=>r(o).name=i),required:"",maxlength:"255",label:t.$t("name"),"error-messages":t.errors.name},null,8,["modelValue","label","error-messages"])]),_:1}),e(m,{cols:"12",md:"6"},{default:a(()=>[e(g,{modelValue:r(o).short,"onUpdate:modelValue":s[1]||(s[1]=i=>r(o).short=i),required:"",maxlength:"32",label:t.$t("short_name"),"error-messages":t.errors.short},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),e(V,null,{default:a(()=>[e(m,{cols:"12",md:"12"},{default:a(()=>[e(f,{type:"submit",color:"primary",class:"mr-3",disabled:r(o).processing},{default:a(()=>[p(n(t.$t("save")),1)]),_:1},8,["disabled"]),e(f,{to:t.route("ticket-allocator.ticket-categories.index"),class:"mr-3"},{default:a(()=>[p(n(t.$t("cancel")),1)]),_:1},8,["to"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1})],64))}});export{A as default};
//# sourceMappingURL=CreateEdit-b537209f.js.map
