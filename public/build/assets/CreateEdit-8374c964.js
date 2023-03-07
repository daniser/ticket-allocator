import{m as Z,ao as ee,aL as ve,ar as te,as as xe,d as S,j as ae,at as le,au as ne,aM as ge,k as t,aN as Ve,ax as U,az as oe,aO as he,aP as be,aq as ke,r as I,b as pe,w as R,aQ as Ce,aR as ye,aS as we,a9 as H,U as q,W as Fe,aT as _e,aU as Pe,aV as Be,n as L,aW as Ie,aX as Re,aY as Se,_ as Ue,aF as Ne,a2 as Ae,u as l,a3 as o,a1 as He,aA as f,aB as Te,a5 as Q,a6 as j,aj as Me,aG as ze,ac as Y,al as J,aH as De}from"./app-beff4871.js";import{a as Ge,P as O}from"./Default.vue_vue_type_script_setup_true_lang-2ab56a3e.js";import{V as $e}from"./VForm-efb4e9fa.js";import{V as Ee,a as w,b as F}from"./VRow-33bfb2c4.js";import{V as K}from"./VAutocomplete-836bc057.js";const je=Z()({name:"VCheckbox",inheritAttrs:!1,props:{...ee(),...ve()},emits:{"update:focused":e=>!0},setup(e,c){let{attrs:n,slots:g}=c;const{isFocused:r,focus:s,blur:d}=te(e),V=xe(),h=S(()=>e.id||`checkbox-${V}`);return ae(()=>{const[v,u]=le(n),[i,T]=ne(e),[b,M]=ge(e);return t(oe,U({class:"v-checkbox"},v,i,{id:h.value,focused:r.value}),{...g,default:k=>{let{id:N,messagesId:z,isDisabled:_,isReadonly:D}=k;return t(Ve,U(b,{id:N.value,"aria-describedby":z.value,disabled:_.value,readonly:D.value},u,{onFocus:s,onBlur:d}),g)}})}),{}}});const Oe=Z()({name:"VTextarea",directives:{Intersect:he},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,...ee(),...be()},emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,c){let{attrs:n,emit:g,slots:r}=c;const s=ke(e,"modelValue"),{isFocused:d,focus:V,blur:h}=te(e),v=S(()=>typeof e.counterValue=="function"?e.counterValue(s.value):(s.value||"").toString().length),u=S(()=>{if(n.maxlength)return n.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function i(a,P){var m,y;!e.autofocus||!a||(y=(m=P[0].target)==null?void 0:m.focus)==null||y.call(m)}const T=I(),b=I(),M=I(""),k=I(),N=S(()=>d.value||e.persistentPlaceholder),z=S(()=>e.messages.length?e.messages:N.value||e.persistentHint?e.hint:"");function _(){var a;k.value!==document.activeElement&&((a=k.value)==null||a.focus()),d.value||V()}function D(a){_(),g("click:control",a)}function se(a){g("mousedown:control",a)}function ue(a){a.stopPropagation(),_(),L(()=>{s.value="",Ie(e["onClick:clear"],a)})}function re(a){s.value=a.target.value}const p=I();function C(){e.autoGrow&&L(()=>{if(!p.value||!b.value)return;const a=getComputedStyle(p.value),P=getComputedStyle(b.value.$el),m=parseFloat(a.getPropertyValue("--v-field-padding-top"))+parseFloat(a.getPropertyValue("--v-input-padding-top"))+parseFloat(a.getPropertyValue("--v-field-padding-bottom")),y=p.value.scrollHeight,G=parseFloat(a.lineHeight),$=Math.max(parseFloat(e.rows)*G+m,parseFloat(P.getPropertyValue("--v-input-control-height"))),E=parseFloat(e.maxRows)*G+m||1/0;M.value=Re(Se(y??0,$,E))})}pe(C),R(s,C),R(()=>e.rows,C),R(()=>e.maxRows,C),R(()=>e.density,C);let x;return R(p,a=>{a?(x=new ResizeObserver(C),x.observe(p.value)):x==null||x.disconnect()}),Ce(()=>{x==null||x.disconnect()}),ae(()=>{const a=!!(r.counter||e.counter||e.counterValue),P=!!(a||r.details),[m,y]=le(n),[{modelValue:G,...$}]=ne(e),[E]=ye(e);return t(oe,U({ref:T,modelValue:s.value,"onUpdate:modelValue":B=>s.value=B,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},m,$,{focused:d.value,messages:z.value}),{...r,default:B=>{let{isDisabled:A,isDirty:W,isReadonly:ie,isValid:ce}=B;return t(we,U({ref:b,style:{"--v-textarea-control-height":M.value},onClick:D,onMousedown:se,"onClick:clear":ue,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},E,{active:N.value||W.value,dirty:W.value||e.dirty,focused:d.value,error:ce.value===!1}),{...r,default:de=>{let{props:{class:X,...me}}=de;return t(H,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),q(t("textarea",U({ref:k,class:X,value:s.value,onInput:re,autofocus:e.autofocus,readonly:ie.value,disabled:A.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:_,onBlur:h},me,y),null),[[Fe("intersect"),{handler:i},null,{once:!0}]]),e.autoGrow&&q(t("textarea",{class:[X,"v-textarea__sizer"],"onUpdate:modelValue":fe=>s.value=fe,ref:p,readonly:!0,"aria-hidden":"true"},null),[[_e,s.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:P?B=>{var A;return t(H,null,[(A=r.details)==null?void 0:A.call(r,B),a&&t(H,null,[t("span",null,null),t(Pe,{active:e.persistentCounter||d.value,value:v.value,max:u.value},r.counter)])])}:void 0})}),Be({},T,b,k)}}),We={class:"font-semibold text-xl text-gray-800 leading-tight"},Je=Ue({__name:"CreateEdit",props:{team:null,operators:null,ticketCategories:null,errors:null},setup(e){var r,s,d,V,h;const c=e,n=Ne({active:!((r=c.team)!=null&&r.deleted_at),name:((s=c.team)==null?void 0:s.name)??"",description:((d=c.team)==null?void 0:d.description)??"",operators:((V=c.team)==null?void 0:V.operators.map(v=>v.uuid))??[],ticket_categories:((h=c.team)==null?void 0:h.ticket_categories.map(v=>v.uuid))??[]});function g(){c.team?n.put(O("ticket-allocator.teams.update",c.team.uuid)):n.post(O("ticket-allocator.teams.store"))}return(v,u)=>(He(),Ae(H,null,[t(l(Te),{title:l(f)(e.team?"edit_team":"new_team")},null,8,["title"]),t(Ge,null,{header:o(()=>[Q("h2",We,j(l(f)(e.team?"edit_team":"new_team")),1)]),default:o(()=>[Q("div",null,[t($e,{onSubmit:Me(g,["prevent"])},{default:o(()=>[t(Ee,null,{default:o(()=>[t(w,null,{default:o(()=>[t(F,{cols:"12",md:"12"},{default:o(()=>[t(je,{modelValue:l(n).active,"onUpdate:modelValue":u[0]||(u[0]=i=>l(n).active=i),label:l(f)("active")},null,8,["modelValue","label"])]),_:1})]),_:1}),t(w,null,{default:o(()=>[t(F,{cols:"12",md:"12"},{default:o(()=>[t(ze,{modelValue:l(n).name,"onUpdate:modelValue":u[1]||(u[1]=i=>l(n).name=i),label:l(f)("name"),"error-messages":e.errors.name},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),t(w,null,{default:o(()=>[t(F,{cols:"12",md:"12"},{default:o(()=>[t(Oe,{modelValue:l(n).description,"onUpdate:modelValue":u[2]||(u[2]=i=>l(n).description=i),label:l(f)("description"),"error-messages":e.errors.description},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),t(w,null,{default:o(()=>[t(F,{cols:"12",md:"12"},{default:o(()=>[t(K,{modelValue:l(n).operators,"onUpdate:modelValue":u[3]||(u[3]=i=>l(n).operators=i),multiple:"",clearable:"",chips:"","closable-chips":"",label:l(f)("operators"),items:e.operators,"item-title":"name","item-value":"uuid","error-messages":e.errors.operators},null,8,["modelValue","label","items","error-messages"])]),_:1})]),_:1}),t(w,null,{default:o(()=>[t(F,{cols:"12",md:"12"},{default:o(()=>[t(K,{modelValue:l(n).ticket_categories,"onUpdate:modelValue":u[4]||(u[4]=i=>l(n).ticket_categories=i),multiple:"",clearable:"",chips:"","closable-chips":"",label:l(f)("ticket_categories"),items:e.ticketCategories,"item-title":"name","item-value":"uuid","error-messages":e.errors.ticket_categories},null,8,["modelValue","label","items","error-messages"])]),_:1})]),_:1}),t(w,null,{default:o(()=>[t(F,{cols:"12",md:"12"},{default:o(()=>[t(Y,{type:"submit",color:"primary",class:"mr-3",disabled:l(n).processing},{default:o(()=>[J(j(l(f)("save")),1)]),_:1},8,["disabled"]),t(l(De),{href:l(O)("ticket-allocator.teams.index"),class:"mr-3"},{default:o(()=>[t(Y,null,{default:o(()=>[J(j(l(f)("cancel")),1)]),_:1})]),_:1},8,["href"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1})],64))}});export{Je as default};
//# sourceMappingURL=CreateEdit-8374c964.js.map
