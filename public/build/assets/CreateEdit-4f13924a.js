import{a8 as $,aK as q,ab as U,ac as B,B as e,u as l,ad as a,ak as M,aG as N,ag as k,ah as d,au as v,aN as n,J as h,aj as w,aQ as x}from"./app-d538a539.js";import{a as F,A as u}from"./Default.vue_vue_type_script_setup_true_lang-b24858e9.js";import{V as S}from"./VForm-cfac3d57.js";import{V as T,a as g,b as m}from"./VRow-3dcf3712.js";const E={class:"font-semibold text-xl text-gray-800 leading-tight"},J=$({__name:"CreateEdit",props:{ticketCategory:{},errors:{}},setup(C){var p,f,y,b,V,c;const s=C,r=q({name:((p=s.ticketCategory)==null?void 0:p.name)??"",short:((f=s.ticketCategory)==null?void 0:f.short)??"",initial_weight:((y=s.ticketCategory)==null?void 0:y.initial_weight)??0,weight_increment:((b=s.ticketCategory)==null?void 0:b.weight_increment)??0,complexity:((V=s.ticketCategory)==null?void 0:V.complexity)??0,delay:((c=s.ticketCategory)==null?void 0:c.delay)??0});function _(){s.ticketCategory?r.put(u("ticket-allocator.ticket-categories.update",s.ticketCategory.uuid)):r.post(u("ticket-allocator.ticket-categories.store"))}return(t,o)=>(U(),B(M,null,[e(l(N),{title:t.$t(t.ticketCategory?"edit_category":"new_category")},null,8,["title"]),e(F,null,{header:a(()=>[k("h2",E,d(t.$t(t.ticketCategory?"edit_category":"new_category")),1)]),default:a(()=>[k("div",null,[e(S,{onSubmit:v(_,["prevent"])},{default:a(()=>[e(T,null,{default:a(()=>[e(g,null,{default:a(()=>[e(m,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(r).name,"onUpdate:modelValue":o[0]||(o[0]=i=>l(r).name=i),required:"",maxlength:"255",label:t.$t("name"),"error-messages":t.errors.name},null,8,["modelValue","label","error-messages"])]),_:1}),e(m,{cols:"12",md:"6"},{default:a(()=>[e(n,{modelValue:l(r).short,"onUpdate:modelValue":o[1]||(o[1]=i=>l(r).short=i),required:"",maxlength:"32",label:t.$t("short_name"),"error-messages":t.errors.short},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(m,{cols:"12",md:"3"},{default:a(()=>[e(n,{modelValue:l(r).initial_weight,"onUpdate:modelValue":o[2]||(o[2]=i=>l(r).initial_weight=i),modelModifiers:{number:!0},type:"number",required:"",min:"0",max:"9999999",label:t.$t("initial_weight"),"error-messages":t.errors.initial_weight},null,8,["modelValue","label","error-messages"])]),_:1}),e(m,{cols:"12",md:"3"},{default:a(()=>[e(n,{modelValue:l(r).weight_increment,"onUpdate:modelValue":o[3]||(o[3]=i=>l(r).weight_increment=i),modelModifiers:{number:!0},type:"number",required:"",min:"0",max:"99999",label:t.$t("weight_increment"),"error-messages":t.errors.weight_increment},null,8,["modelValue","label","error-messages"])]),_:1}),e(m,{cols:"12",md:"3"},{default:a(()=>[e(n,{modelValue:l(r).complexity,"onUpdate:modelValue":o[4]||(o[4]=i=>l(r).complexity=i),modelModifiers:{number:!0},type:"number",required:"",min:"0",max:"9999",label:t.$t("complexity"),"error-messages":t.errors.complexity},null,8,["modelValue","label","error-messages"])]),_:1}),e(m,{cols:"12",md:"3"},{default:a(()=>[e(n,{modelValue:l(r).delay,"onUpdate:modelValue":o[5]||(o[5]=i=>l(r).delay=i),modelModifiers:{number:!0},type:"number",required:"",min:"0",max:"99999",label:t.$t("delay"),"error-messages":t.errors.delay},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(m,{cols:"12",md:"12"},{default:a(()=>[e(h,{type:"submit",color:"primary",class:"mr-3",disabled:l(r).processing},{default:a(()=>[w(d(t.$t("save")),1)]),_:1},8,["disabled"]),e(l(x),{href:l(u)("ticket-allocator.ticket-categories.index"),class:"mr-3"},{default:a(()=>[e(h,null,{default:a(()=>[w(d(t.$t("cancel")),1)]),_:1})]),_:1},8,["href"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1})],64))}});export{J as default};
//# sourceMappingURL=CreateEdit-4f13924a.js.map
