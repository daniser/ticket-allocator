import{_,s as m}from"./Default.vue_vue_type_script_setup_true_lang-DX_wpGQn.js";import{M as f,O as k,f as y,an as V,S as v,i as t,$ as l,ae as h,T as e,F as $,R as b,Y as c,Z as i,_ as r,V as d}from"./app-DiUsk6-n.js";import{V as x}from"./VDataTable-DSw3z_Gn.js";import{V as T,a as g,b as B}from"./VSpacer-CCmpLSlw.js";import{V as C}from"./scopeId-C1l3h53M.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./filter-Bk2gQU97.js";import"./VTextField-CeDlu0Jq.js";import"./VGrid-DntHE9og.js";import"./VCheckboxBtn-D8UOSSiR.js";import"./VTable-D6-YhI8J.js";const D={class:"font-semibold text-xl text-gray-800 leading-tight"},q=f({__name:"Index",props:{operators:{}},setup(N){const{t:s}=k(),u=y(()=>[{title:s("name"),key:"name"},{title:s("tickets"),key:"ticket_limit"},{title:s("complexity"),key:"complexity_limit"},{title:s("actions"),key:"actions",sortable:!1}]);return(a,S)=>{const n=V("v-btn-ex");return b(),v($,null,[t(l(h),{title:a.$t("operators")},null,8,["title"]),t(_,null,{header:e(()=>[c("h2",D,i(a.$t("operators")),1)]),default:e(()=>[c("div",null,[t(x,{headers:u.value,items:a.operators},{top:e(()=>[t(T,{flat:""},{default:e(()=>[t(g,null,{default:e(()=>[r(i(a.$t("operators")),1)]),_:1}),t(C,{class:"mx-4",inset:"",vertical:""}),t(B),t(n,{to:l(m)("ticket-allocator.operators.discover"),method:"put",color:"primary",dark:""},{default:e(()=>[r(i(a.$t("discover")),1)]),_:1},8,["to"]),t(d,{to:l(m)("ticket-allocator.operators.create"),color:"primary",dark:""},{default:e(()=>[r(i(a.$t("new_operator")),1)]),_:1},8,["to"])]),_:1})]),"item.name":e(({item:o})=>{var p;return[r(i(o.name??((p=o.user)==null?void 0:p.name)??""),1)]}),"item.ticket_limit":e(({item:o})=>[r(i(o.ticket_limit??"∞"),1)]),"item.complexity_limit":e(({item:o})=>[r(i(o.complexity_limit??"∞"),1)]),"item.actions":e(({item:o})=>[t(d,{to:l(m)("ticket-allocator.operators.edit",o.uuid),icon:"mdi-pencil",title:a.$t("edit"),size:"small",variant:"plain"},null,8,["to","title"]),t(n,{to:l(m)("ticket-allocator.operators.destroy",o.uuid),method:"delete",icon:"mdi-delete",title:a.$t("remove"),size:"small",variant:"plain"},null,8,["to","title"])]),_:2},1032,["headers","items"])])]),_:1})],64)}}});export{q as default};
//# sourceMappingURL=Index-F41rSes5.js.map
