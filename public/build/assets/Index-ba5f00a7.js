import{a as _}from"./Default.vue_vue_type_script_setup_true_lang-3a15dc95.js";import{K as y,E as r,a2 as x,P as h,c as e,W as i,Q as t,a3 as k,a0 as v,O as w,ar as C,T as l,S as O,a9 as T,aQ as b}from"./app-c0f266a9.js";import{P as g,f as N}from"./index.m-eb214e7d.js";function V(){async function a(s){return await window.axios.delete(g("ticket-allocator.teams.destroy",s))}return{destroy:a}}const B=l("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Operator teams",-1),R=y({__name:"Index",props:{teams:null},setup(a){const s=a,o=r(()=>v(N)),c=r(()=>o.value.all()),m=[{title:"Name",key:"name"},{title:"Description",key:"description"},{title:"Actions",key:"actions",sortable:!1}],d=V();async function u(n){await d.destroy(n.uuid),o.value.destroy(n.uuid)}return x(()=>{o.value.fresh(s.teams)}),(n,A)=>{const p=b("v-data-table");return w(),h(k,null,[e(i(C),{title:"Operator teams"}),e(_,null,{header:t(()=>[B]),default:t(()=>[l("div",null,[e(p,{headers:m,items:i(c)},{["item.actions"]:t(({item:f})=>[e(O,{size:"small",onClick:E=>u(f.raw)},{default:t(()=>[T("mdi-delete")]),_:2},1032,["onClick"])]),_:2},1032,["items"])])]),_:1})],64)}}});export{R as default};
//# sourceMappingURL=Index-ba5f00a7.js.map
