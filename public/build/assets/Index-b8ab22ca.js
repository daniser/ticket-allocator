import{p as F,aV as I,aW as z,g as N,O as R,aX as O,r as k,F as j,w as $,B as q,f as S,W as C,j as L,aw as x,i as a,aY as U,aZ as W,J as Z,ak as J,ao as y,a_ as E,aq as M,ab as c,ar as l,ay as X,ap as P,aN as Y,au as V,av as u,ax as _,a$ as G,V as w,b0 as H,as as K,b1 as Q,b2 as ee,aA as B,aD as ae}from"./app-103df115.js";import{D as te,A as m}from"./Default-fc668c30.js";import{V as le,a as oe,b as T}from"./VSpacer-98448151.js";import{V as re,b as se,a as ie,c as ne}from"./VCard-ad87edbf.js";import{V as ce}from"./VContainer-57f7fd48.js";import{V as ue,a as de}from"./VRow-f0f1275c.js";const fe=F({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...I({origin:"center center",scrollStrategy:"block",transition:{component:z},zIndex:2400})},"VDialog"),me=N()({name:"VDialog",props:fe(),emits:{"update:modelValue":r=>!0},setup(r,h){let{slots:n}=h;const o=R(r,"modelValue"),{scopeId:g}=O(),t=k();function d(s){var f,v;const e=s.relatedTarget,i=s.target;if(e!==i&&((f=t.value)!=null&&f.contentEl)&&((v=t.value)!=null&&v.globalTop)&&![document,t.value.contentEl].includes(i)&&!t.value.contentEl.contains(i)){const b=Z(t.value.contentEl);if(!b.length)return;const D=b[0],A=b[b.length-1];e===D?A.focus():D.focus()}}j&&$(()=>o.value&&r.retainFocus,s=>{s?document.addEventListener("focusin",d):document.removeEventListener("focusin",d)},{immediate:!0}),$(o,async s=>{var e,i;await q(),s?(e=t.value.contentEl)==null||e.focus({preventScroll:!0}):(i=t.value.activatorEl)==null||i.focus({preventScroll:!0})});const p=S(()=>C({"aria-haspopup":"dialog","aria-expanded":String(o.value)},r.activatorProps));return L(()=>{const[s]=x.filterProps(r);return a(x,C({ref:t,class:["v-dialog",{"v-dialog--fullscreen":r.fullscreen,"v-dialog--scrollable":r.scrollable},r.class],style:r.style},s,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,"aria-modal":"true",activatorProps:p.value,role:"dialog"},g),{activator:n.activator,default:function(){for(var e=arguments.length,i=new Array(e),f=0;f<e;f++)i[f]=arguments[f];return a(U,{root:"VDialog"},{default:()=>{var v;return[(v=n.default)==null?void 0:v.call(n,...i)]}})}})}),W({},t)}}),pe={class:"font-semibold text-xl text-gray-800 leading-tight"},ve={class:"text-h5"},ye=J({__name:"Index",props:{factors:{type:Array,required:!0},factorDictionary:{type:Array,required:!0}},setup(r){const h=S(()=>[{title:y("active"),key:"active",sortable:!1},{title:y("type"),key:"type.name",sortable:!1},{title:y("name"),key:"name",sortable:!1},{title:y("description"),key:"description",sortable:!1},{title:y("actions"),key:"actions",sortable:!1}]),n=k(),o=k();function g(){n.value=null}return(t,d)=>{const p=E("v-btn-ex"),s=E("v-data-table");return P(),M(X,null,[a(c(Y),{title:t.$t("factors")},null,8,["title"]),a(te,null,{header:l(()=>[V("h2",pe,u(t.$t("factors")),1)]),default:l(()=>[V("div",null,[a(s,{headers:h.value,items:t.factors},{top:l(()=>[a(le,{flat:""},{default:l(()=>[a(oe,null,{default:l(()=>[_(u(t.$t("factors")),1)]),_:1}),a(G,{class:"mx-4",inset:"",vertical:""}),a(T),a(me,{modelValue:n.value,"onUpdate:modelValue":d[1]||(d[1]=e=>n.value=e),"max-width":"500px"},{activator:l(({props:e})=>[a(w,C({color:"primary",dark:""},e),{default:l(()=>[_(u(t.$t("new_factor")),1)]),_:2},1040)]),default:l(()=>[a(re,null,{default:l(()=>[a(se,null,{default:l(()=>[V("span",ve,u(t.$t("choose_factor_type")),1)]),_:1}),a(ie,null,{default:l(()=>[a(ce,null,{default:l(()=>[a(ue,null,{default:l(()=>[a(de,{cols:"12",md:"12"},{default:l(()=>[a(H,{modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=e=>o.value=e),label:t.$t("factor_type"),items:t.factorDictionary,"item-title":"name","item-value":"alias"},null,8,["modelValue","label","items"])]),_:1})]),_:1})]),_:1})]),_:1}),a(ne,null,{default:l(()=>[a(T),a(w,{color:"primary",dark:"",onClick:g},{default:l(()=>[_(u(t.$t("cancel")),1)]),_:1}),(P(),K(w,{key:o.value,to:c(m)("ticket-allocator.factors.create",{type:o.value}),disabled:!o.value,color:"primary",dark:"",onClick:g},{default:l(()=>[_(u(t.$t("create")),1)]),_:1},8,["to","disabled"]))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),["item.active"]:l(({item:e})=>[a(c(Q),{as:"span",href:c(m)("ticket-allocator.factors.update",e.raw.uuid),method:"patch",data:{active:!!e.raw.deleted_at}},{default:l(()=>[a(ee,{"model-value":!e.raw.deleted_at},null,8,["model-value"])]),_:2},1032,["href","data"])]),["item.type.name"]:l(({item:e})=>[V("span",{class:B({italic:e.raw.type.excluded})},u(e.raw.type.name),3)]),["item.name"]:l(({item:e})=>[V("span",{class:B({italic:e.raw.type.excluded&&!e.raw.display_name})},u(e.raw.name),3)]),["item.actions"]:l(({item:e})=>[a(w,{to:c(m)("ticket-allocator.factors.edit",e.raw.uuid),icon:"mdi-pencil",title:t.$t("edit"),size:"small",variant:"plain"},null,8,["to","title"]),a(p,{to:c(m)("ticket-allocator.factors.raise-priority",e.raw.uuid),method:"put",icon:"mdi-arrow-up-thick",title:t.$t("raise_priority"),size:"small",variant:"plain"},null,8,["to","title"]),a(p,{to:c(m)("ticket-allocator.factors.lower-priority",e.raw.uuid),method:"put",icon:"mdi-arrow-down-thick",title:t.$t("lower_priority"),size:"small",variant:"plain"},null,8,["to","title"]),a(p,{to:c(m)("ticket-allocator.factors.destroy",e.raw.uuid),method:"delete",icon:"mdi-delete",title:t.$t("remove"),size:"small",variant:"plain"},null,8,["to","title"])]),_:2},1032,["headers","items"])])]),_:1})],64)}}}),ke=ae(ye,[["__file","C:/PhpstormProjects/ticket-allocator/resources/js/pages/Factor/Index.vue"]]);export{ke as default};
//# sourceMappingURL=Index-b8ab22ca.js.map
