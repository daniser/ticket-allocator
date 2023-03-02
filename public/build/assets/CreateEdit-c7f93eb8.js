import{_ as B,aR as N,d as S,a2 as E,k as e,u as a,a3 as l,a9 as T,a1 as c,aA as F,a5 as k,a6 as M,aj as A,ai as h,aS as p,ac as v,al as C,aO as D}from"./app-45ad0fab.js";import{a as R,P as f}from"./index.m-0d82df39.js";import{V as j,a as U}from"./VForm-30e43ca3.js";import{V as I,a as n,b as i}from"./VRow-e7ec5928.js";const O={class:"font-semibold text-xl text-gray-800 leading-tight"},z=B({__name:"CreateEdit",props:{users:null,operator:null,teams:null,errors:null},setup(s){var b,x,g,y;const m=s,t=N({user:null,name:((b=m.operator)==null?void 0:b.name)??"",ticket_limit:((x=m.operator)==null?void 0:x.ticket_limit)??null,complexity_limit:((g=m.operator)==null?void 0:g.complexity_limit)??null,teams:((y=m.operator)==null?void 0:y.teams.map(u=>u.uuid))??[]}),V=S(()=>{var o,d;const u=(d=(o=m.operator)==null?void 0:o.user)==null?void 0:d.name;if(u)return u;const r=m.users.findIndex(w=>w.id===t.user);return r<0?"":m.users[r].name});function _(){m.operator?t.put(f("ticket-allocator.operators.update",m.operator.uuid)):t.post(f("ticket-allocator.operators.store"))}return(u,r)=>(c(),E(T,null,[e(a(F),{title:s.operator?"Edit operator":"New operator"},null,8,["title"]),e(R,null,{header:l(()=>[k("h2",O,M(s.operator?"Edit operator":"New operator"),1)]),default:l(()=>[k("div",null,[e(j,{onSubmit:A(_,["prevent"])},{default:l(()=>[e(I,null,{default:l(()=>[e(n,null,{default:l(()=>[e(i,{cols:"12",md:"12"},{default:l(()=>{var o;return[s.operator?(c(),h(p,{key:0,"model-value":(o=s.operator.user)==null?void 0:o.name,label:"User",readonly:""},null,8,["model-value"])):(c(),h(U,{key:1,modelValue:a(t).user,"onUpdate:modelValue":r[0]||(r[0]=d=>a(t).user=d),label:"User",items:s.users,"item-title":"name","item-value":"id","error-messages":s.errors.user},null,8,["modelValue","items","error-messages"]))]}),_:1})]),_:1}),e(n,null,{default:l(()=>[e(i,{cols:"12",md:"12"},{default:l(()=>[e(p,{modelValue:a(t).name,"onUpdate:modelValue":r[1]||(r[1]=o=>a(t).name=o),label:"Display name",placeholder:a(V),"persistent-placeholder":!!a(V).length,"error-messages":s.errors.name},null,8,["modelValue","placeholder","persistent-placeholder","error-messages"])]),_:1})]),_:1}),e(n,null,{default:l(()=>[e(i,{cols:"12",md:"6"},{default:l(()=>[e(p,{modelValue:a(t).ticket_limit,"onUpdate:modelValue":r[2]||(r[2]=o=>a(t).ticket_limit=o),modelModifiers:{number:!0},type:"number",min:"1",max:"100",label:"Ticket limit",placeholder:"∞","persistent-placeholder":"","error-messages":s.errors.ticket_limit},null,8,["modelValue","error-messages"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(p,{modelValue:a(t).complexity_limit,"onUpdate:modelValue":r[3]||(r[3]=o=>a(t).complexity_limit=o),modelModifiers:{number:!0},type:"number",min:"1",max:"1000",label:"Complexity limit",placeholder:"∞","persistent-placeholder":"","error-messages":s.errors.complexity_limit},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(n,null,{default:l(()=>[e(i,{cols:"12",md:"12"},{default:l(()=>[e(U,{modelValue:a(t).teams,"onUpdate:modelValue":r[4]||(r[4]=o=>a(t).teams=o),multiple:"",clearable:"",chips:"","closable-chips":"",label:"Teams",items:s.teams,"item-title":"name","item-value":"uuid","error-messages":s.errors.teams},null,8,["modelValue","items","error-messages"])]),_:1})]),_:1}),e(n,null,{default:l(()=>[e(i,{cols:"12",md:"12"},{default:l(()=>[e(v,{type:"submit",color:"primary",class:"mr-3",disabled:a(t).processing},{default:l(()=>[C("Save")]),_:1},8,["disabled"]),e(a(D),{href:a(f)("ticket-allocator.operators.index"),class:"mr-3"},{default:l(()=>[e(v,null,{default:l(()=>[C("Cancel")]),_:1})]),_:1},8,["href"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1})],64))}});export{z as default};
//# sourceMappingURL=CreateEdit-c7f93eb8.js.map
