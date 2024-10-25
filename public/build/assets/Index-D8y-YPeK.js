import{p as z,g as A,E as F,K as I,r as $,ao as L,w as D,z as R,j as N,D as w,i as e,ap as O,aq as U,O as W,Q as j,f as q,ar as K,U as M,a1 as c,ah as Q,W as l,ai as X,F as Z,T as P,_ as h,$ as u,a0 as E,as as G,V as C,X as H,a8 as v,at as J,a3 as T}from"./app-MMbirL_Y.js";import{V as Y,a as ee,b as te,c as B}from"./VSpacer-Bak1-Ymd.js";import{c as ae,d as le,b as x,e as oe}from"./filter-wVzIJ9cp.js";import{f as re}from"./VTextField-yQXd7Xfr.js";import{V as ne,b as se,a as ie,c as ce}from"./VCard-Qe57ET_A.js";import{V as ue}from"./VContainer-DI1Oyank.js";import{V as de,a as fe}from"./VRow-D89EXIox.js";import{V as me}from"./VCheckboxBtn-hlFgBONt.js";import"./VTable-DmWYlUvF.js";/* empty css              */import"./VInput-DDyAvved.js";import"./VSelectionControl-BqekPyFq.js";const pe=z({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...ae({origin:"center center",scrollStrategy:"block",transition:{component:le},zIndex:2400})},"VDialog"),ve=A()({name:"VDialog",props:pe(),emits:{"update:modelValue":o=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(o,d){let{emit:k,slots:i}=d;const n=F(o,"modelValue"),{scopeId:_}=I(),t=$();function f(r){var p,g;const m=r.relatedTarget,y=r.target;if(m!==y&&((p=t.value)!=null&&p.contentEl)&&((g=t.value)!=null&&g.globalTop)&&![document,t.value.contentEl].includes(y)&&!t.value.contentEl.contains(y)){const s=U(t.value.contentEl);if(!s.length)return;const b=s[0],S=s[s.length-1];m===b?S.focus():b.focus()}}L&&D(()=>n.value&&o.retainFocus,r=>{r?document.addEventListener("focusin",f):document.removeEventListener("focusin",f)},{immediate:!0});function V(){var r;k("afterEnter"),(r=t.value)!=null&&r.contentEl&&!t.value.contentEl.contains(document.activeElement)&&t.value.contentEl.focus({preventScroll:!0})}function a(){k("afterLeave")}return D(n,async r=>{var m;r||(await R(),(m=t.value.activatorEl)==null||m.focus({preventScroll:!0}))}),N(()=>{const r=x.filterProps(o),m=w({"aria-haspopup":"dialog"},o.activatorProps),y=w({tabindex:-1},o.contentProps);return e(x,w({ref:t,class:["v-dialog",{"v-dialog--fullscreen":o.fullscreen,"v-dialog--scrollable":o.scrollable},o.class],style:o.style},r,{modelValue:n.value,"onUpdate:modelValue":p=>n.value=p,"aria-modal":"true",activatorProps:m,contentProps:y,role:"dialog",onAfterEnter:V,onAfterLeave:a},_),{activator:i.activator,default:function(){for(var p=arguments.length,g=new Array(p),s=0;s<p;s++)g[s]=arguments[s];return e(O,{root:"VDialog"},{default:()=>{var b;return[(b=i.default)==null?void 0:b.call(i,...g)]}})}})}),re({},t)}}),Ve={class:"font-semibold text-xl text-gray-800 leading-tight"},ye={class:"text-h5"},Be=W({__name:"Index",props:{factors:{},factorDictionary:{}},setup(o){const{t:d}=j(),k=q(()=>[{title:d("active"),key:"active",sortable:!1},{title:d("type"),key:"type.name",sortable:!1},{title:d("name"),key:"name",sortable:!1},{title:d("description"),key:"description",sortable:!1},{title:d("actions"),key:"actions",sortable:!1}]),i=$(),n=$();function _(){i.value=null}return(t,f)=>{const V=K("v-btn-ex");return P(),M(Z,null,[e(c(Q),{title:t.$t("factors")},null,8,["title"]),e(X,null,{header:l(()=>[h("h2",Ve,u(t.$t("factors")),1)]),default:l(()=>[h("div",null,[e(Y,{headers:k.value,items:t.factors},{top:l(()=>[e(ee,{flat:""},{default:l(()=>[e(te,null,{default:l(()=>[E(u(t.$t("factors")),1)]),_:1}),e(G,{class:"mx-4",inset:"",vertical:""}),e(B),e(ve,{modelValue:i.value,"onUpdate:modelValue":f[1]||(f[1]=a=>i.value=a),"max-width":"500px"},{activator:l(({props:a})=>[e(C,w({color:"primary",dark:""},a),{default:l(()=>[E(u(t.$t("new_factor")),1)]),_:2},1040)]),default:l(()=>[e(ne,null,{default:l(()=>[e(se,null,{default:l(()=>[h("span",ye,u(t.$t("choose_factor_type")),1)]),_:1}),e(ie,null,{default:l(()=>[e(ue,null,{default:l(()=>[e(de,null,{default:l(()=>[e(fe,{cols:"12",md:"12"},{default:l(()=>[e(oe,{modelValue:n.value,"onUpdate:modelValue":f[0]||(f[0]=a=>n.value=a),label:t.$t("factor_type"),items:t.factorDictionary,"item-title":"name","item-value":"alias"},null,8,["modelValue","label","items"])]),_:1})]),_:1})]),_:1})]),_:1}),e(ce,null,{default:l(()=>[e(B),e(C,{color:"primary",dark:"",onClick:_},{default:l(()=>[E(u(t.$t("cancel")),1)]),_:1}),(P(),H(C,{key:n.value,to:c(v)("ticket-allocator.factors.create",{type:n.value}),disabled:!n.value,color:"primary",dark:"",onClick:_},{default:l(()=>[E(u(t.$t("create")),1)]),_:1},8,["to","disabled"]))]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.active":l(({item:a})=>[e(c(J),{as:"span",href:c(v)("ticket-allocator.factors.update",a.uuid),method:"patch",data:{active:!!a.deleted_at}},{default:l(()=>[e(me,{"model-value":!a.deleted_at},null,8,["model-value"])]),_:2},1032,["href","data"])]),"item.type.name":l(({item:a})=>[h("span",{class:T({italic:a.type.excluded})},u(a.type.name),3)]),"item.name":l(({item:a})=>[h("span",{class:T({italic:a.type.excluded&&!a.display_name})},u(a.name),3)]),"item.actions":l(({item:a})=>[e(C,{to:c(v)("ticket-allocator.factors.edit",a.uuid),icon:"mdi-pencil",title:t.$t("edit"),size:"small",variant:"plain"},null,8,["to","title"]),e(V,{to:c(v)("ticket-allocator.factors.raise-priority",a.uuid),method:"put",icon:"mdi-arrow-up-thick",title:t.$t("raise_priority"),size:"small",variant:"plain"},null,8,["to","title"]),e(V,{to:c(v)("ticket-allocator.factors.lower-priority",a.uuid),method:"put",icon:"mdi-arrow-down-thick",title:t.$t("lower_priority"),size:"small",variant:"plain"},null,8,["to","title"]),e(V,{to:c(v)("ticket-allocator.factors.destroy",a.uuid),method:"delete",icon:"mdi-delete",title:t.$t("remove"),size:"small",variant:"plain"},null,8,["to","title"])]),_:2},1032,["headers","items"])])]),_:1})],64)}}});export{Be as default};
//# sourceMappingURL=Index-D8y-YPeK.js.map
