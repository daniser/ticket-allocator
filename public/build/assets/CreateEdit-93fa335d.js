import{aa as C,aQ as b,af as _,ag as $,y as e,u as r,ah as t,ao as w,aM as B,ak as g,al as n,ay as v,aR as f,V as p,an as V}from"./app-8270aed4.js";import{a as F,A as m}from"./Default.vue_vue_type_script_setup_true_lang-8d8f63e1.js";import{V as N}from"./VForm-f9d7ee94.js";import{V as S}from"./VContainer-3890cbf8.js";import{V as y,a as d}from"./VRow-f7bee5c9.js";const T={class:"font-semibold text-xl text-gray-800 leading-tight"},x=C({__name:"CreateEdit",props:{ticketCategory:{},errors:{}},setup(k){var u,c;const l=k,o=b({name:((u=l.ticketCategory)==null?void 0:u.name)??"",short:((c=l.ticketCategory)==null?void 0:c.short)??""});function h(){l.ticketCategory?o.put(m("ticket-allocator.ticket-categories.update",l.ticketCategory.uuid)):o.post(m("ticket-allocator.ticket-categories.store"))}return(a,s)=>(_(),$(w,null,[e(r(B),{title:a.$t(a.ticketCategory?"edit_category":"new_category")},null,8,["title"]),e(F,null,{header:t(()=>[g("h2",T,n(a.$t(a.ticketCategory?"edit_category":"new_category")),1)]),default:t(()=>[g("div",null,[e(N,{onSubmit:v(h,["prevent"])},{default:t(()=>[e(S,null,{default:t(()=>[e(y,null,{default:t(()=>[e(d,{cols:"12",md:"6"},{default:t(()=>[e(f,{modelValue:r(o).name,"onUpdate:modelValue":s[0]||(s[0]=i=>r(o).name=i),required:"",maxlength:"255",label:a.$t("name"),"error-messages":a.errors.name},null,8,["modelValue","label","error-messages"])]),_:1}),e(d,{cols:"12",md:"6"},{default:t(()=>[e(f,{modelValue:r(o).short,"onUpdate:modelValue":s[1]||(s[1]=i=>r(o).short=i),required:"",maxlength:"32",label:a.$t("short_name"),"error-messages":a.errors.short},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),e(y,null,{default:t(()=>[e(d,{cols:"12",md:"12"},{default:t(()=>[e(p,{type:"submit",color:"primary",class:"mr-3",disabled:r(o).processing},{default:t(()=>[V(n(a.$t("save")),1)]),_:1},8,["disabled"]),e(p,{to:r(m)("ticket-allocator.ticket-categories.index"),class:"mr-3"},{default:t(()=>[V(n(a.$t("cancel")),1)]),_:1},8,["to"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1})],64))}});export{x as default};
//# sourceMappingURL=CreateEdit-93fa335d.js.map
