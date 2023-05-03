import{a as h,P as i}from"./Default.vue_vue_type_script_setup_true_lang-1a9329dd.js";import{ax as _,b3 as n,aB as v,q as a,u as e,aC as t,aJ as b,aA as k,a$ as w,aF as d,aG as c,aI as f,b6 as y,b7 as o,ae as s,b9 as V,b8 as $}from"./app-8eb21eae.js";import{V as B,a as g,b as C}from"./VToolbar-b9502f6e.js";const T={class:"font-semibold text-xl text-gray-800 leading-tight"},F=_({__name:"Index",props:{factors:null},setup(u){const p=[{title:n("active"),key:"active",sortable:!1},{title:n("name"),key:"name",sortable:!1},{title:n("description"),key:"description",sortable:!1},{title:n("actions"),key:"actions",sortable:!1}];return(l,z)=>{const m=$("v-data-table");return k(),v(b,null,[a(e(w),{title:l.$t("factors")},null,8,["title"]),a(h,null,{header:t(()=>[d("h2",T,c(l.$t("factors")),1)]),default:t(()=>[d("div",null,[a(m,{headers:p,items:u.factors},{top:t(()=>[a(B,{flat:""},{default:t(()=>[a(g,null,{default:t(()=>[f(c(l.$t("factors")),1)]),_:1}),a(y,{class:"mx-4",inset:"",vertical:""}),a(C),a(e(o),{href:e(i)("ticket-allocator.factors.create")},{default:t(()=>[a(s,{color:"primary",dark:""},{default:t(()=>[f(c(l.$t("new_factor")),1)]),_:1})]),_:1},8,["href"])]),_:1})]),["item.active"]:t(({item:r})=>[a(e(o),{as:"span",href:e(i)("ticket-allocator.factors.update",r.raw.uuid),method:"patch",data:{active:!!r.raw.deleted_at}},{default:t(()=>[a(V,{"model-value":!r.raw.deleted_at},null,8,["model-value"])]),_:2},1032,["href","data"])]),["item.actions"]:t(({item:r})=>[a(e(o),{href:e(i)("ticket-allocator.factors.edit",r.raw.uuid)},{default:t(()=>[a(s,{icon:"mdi-pencil",title:l.$t("edit"),size:"small",variant:"plain"},null,8,["title"])]),_:2},1032,["href"]),a(e(o),{as:"span",href:e(i)("ticket-allocator.factors.raise-priority",r.raw.uuid),method:"put"},{default:t(()=>[a(s,{icon:"mdi-arrow-up-thick",title:l.$t("raise_priority"),size:"small",variant:"plain"},null,8,["title"])]),_:2},1032,["href"]),a(e(o),{as:"span",href:e(i)("ticket-allocator.factors.lower-priority",r.raw.uuid),method:"put"},{default:t(()=>[a(s,{icon:"mdi-arrow-down-thick",title:l.$t("lower_priority"),size:"small",variant:"plain"},null,8,["title"])]),_:2},1032,["href"]),a(e(o),{as:"span",href:e(i)("ticket-allocator.factors.destroy",r.raw.uuid),method:"delete"},{default:t(()=>[a(s,{icon:"mdi-delete",title:l.$t("remove"),size:"small",variant:"plain"},null,8,["title"])]),_:2},1032,["href"])]),_:2},1032,["items"])])]),_:1})],64)}}});export{F as default};
//# sourceMappingURL=Index-4629f33b.js.map
