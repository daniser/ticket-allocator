import{_ as k,A as i}from"./Default.vue_vue_type_script_setup_true_lang-a35df365.js";import{ak as f,f as g,ao as s,aZ as n,aq as v,i as t,aa as o,ar as a,ay as h,ap as V,aM as b,au as c,av as l,ax as d,a_ as y,V as m}from"./app-960e20cd.js";import{V as $,a as x,b as C}from"./VSpacer-9189d504.js";import"./_plugin-vue_export-helper-c27b6911.js";const w={class:"font-semibold text-xl text-gray-800 leading-tight"},Z=f({__name:"Index",props:{ticketCategories:{}},setup(B){const _=g(()=>[{title:s("name"),key:"name"},{title:s("short_name"),key:"short"},{title:s("actions"),key:"actions",sortable:!1}]);return(e,T)=>{const p=n("v-btn-ex"),u=n("v-data-table");return V(),v(h,null,[t(o(b),{title:e.$t("ticket_categories")},null,8,["title"]),t(k,null,{header:a(()=>[c("h2",w,l(e.$t("ticket_categories")),1)]),default:a(()=>[c("div",null,[t(u,{headers:_.value,items:e.ticketCategories},{top:a(()=>[t($,{flat:""},{default:a(()=>[t(x,null,{default:a(()=>[d(l(e.$t("ticket_categories")),1)]),_:1}),t(y,{class:"mx-4",inset:"",vertical:""}),t(C),t(m,{to:o(i)("ticket-allocator.ticket-categories.create"),color:"primary",dark:""},{default:a(()=>[d(l(e.$t("new_category")),1)]),_:1},8,["to"])]),_:1})]),["item.actions"]:a(({item:r})=>[t(m,{to:o(i)("ticket-allocator.ticket-categories.edit",r.raw.uuid),icon:"mdi-pencil",title:e.$t("edit"),size:"small",variant:"plain"},null,8,["to","title"]),t(p,{to:o(i)("ticket-allocator.ticket-categories.destroy",r.raw.uuid),method:"delete",icon:"mdi-delete",title:e.$t("remove"),size:"small",variant:"plain"},null,8,["to","title"])]),_:2},1032,["headers","items"])])]),_:1})],64)}}});export{Z as default};
//# sourceMappingURL=Index-1ecc8a02.js.map
