import{t as ee,ar as te,aM as ge,aN as xe,au as ae,av as Ve,h as N,l as le,aw as ne,ax as oe,aO as W,m as t,az as U,aB as se,aP as he,aQ as be,at as pe,r as S,b as ke,w as R,aR as Ce,aS as we,aT as ye,ad as A,X as Z,Y as Fe,aU as Pe,aV as _e,aW as Be,n as X,aX as Ie,aY as Se,aZ as Re,a0 as Ne,aG as Ue,a4 as He,u as l,a5 as o,a3 as Ae,aC as v,aD as Te,a9 as j,aa as O,am as De,aH as Me,ag as J,ao as K,aI as ze}from"./app-f10a353b.js";import{a as Ee,P as Y}from"./Default.vue_vue_type_script_setup_true_lang-aa2fc77e.js";import{V as Ge}from"./VForm-af819585.js";import{V as $e,a as F,b as P}from"./VRow-030c1a85.js";import{V as L}from"./VAutocomplete-ca29c5be.js";const Xe=ee()({name:"VCheckbox",inheritAttrs:!1,props:{...te(),...ge(xe(),["inline"])},emits:{"update:focused":e=>!0},setup(e,d){let{attrs:n,slots:V}=d;const{isFocused:u,focus:s,blur:f}=ae(e),h=Ve(),b=N(()=>e.id||`checkbox-${h}`);return le(()=>{const[g,r]=ne(n),[i,T]=oe(e),[p,D]=W.filterProps(e);return t(se,U({class:"v-checkbox"},g,i,{id:b.value,focused:u.value}),{...V,default:k=>{let{id:H,messagesId:M,isDisabled:_,isReadonly:z}=k;return t(W,U(p,{id:H.value,"aria-describedby":M.value,disabled:_.value,readonly:z.value},r,{onFocus:s,onBlur:f}),V)}})}),{}}});const Oe=ee()({name:"VTextarea",directives:{Intersect:he},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,...te(),...be()},emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,d){let{attrs:n,emit:V,slots:u}=d;const s=pe(e,"modelValue"),{isFocused:f,focus:h,blur:b}=ae(e),g=N(()=>typeof e.counterValue=="function"?e.counterValue(s.value):(s.value||"").toString().length),r=N(()=>{if(n.maxlength)return n.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function i(a,m){var c,y;!e.autofocus||!a||(y=(c=m[0].target)==null?void 0:c.focus)==null||y.call(c)}const T=S(),p=S(),D=S(""),k=S(),H=N(()=>f.value||e.persistentPlaceholder),M=N(()=>e.messages.length?e.messages:H.value||e.persistentHint?e.hint:"");function _(){var a;k.value!==document.activeElement&&((a=k.value)==null||a.focus()),f.value||h()}function z(a){_(),V("click:control",a)}function re(a){V("mousedown:control",a)}function ue(a){a.stopPropagation(),_(),X(()=>{s.value="",Ie(e["onClick:clear"],a)})}function ie(a){const m=a.target,c=[m.selectionStart,m.selectionEnd];s.value=m.value,X(()=>{m.selectionStart=c[0],m.selectionEnd=c[1]})}const C=S();function w(){e.autoGrow&&X(()=>{if(!C.value||!p.value)return;const a=getComputedStyle(C.value),m=getComputedStyle(p.value.$el),c=parseFloat(a.getPropertyValue("--v-field-padding-top"))+parseFloat(a.getPropertyValue("--v-input-padding-top"))+parseFloat(a.getPropertyValue("--v-field-padding-bottom")),y=C.value.scrollHeight,E=parseFloat(a.lineHeight),G=Math.max(parseFloat(e.rows)*E+c,parseFloat(m.getPropertyValue("--v-input-control-height"))),$=parseFloat(e.maxRows)*E+c||1/0;D.value=Se(Re(y??0,G,$))})}ke(w),R(s,w),R(()=>e.rows,w),R(()=>e.maxRows,w),R(()=>e.density,w);let x;return R(C,a=>{a?(x=new ResizeObserver(w),x.observe(C.value)):x==null||x.disconnect()}),Ce(()=>{x==null||x.disconnect()}),le(()=>{const a=!!(u.counter||e.counter||e.counterValue),m=!!(a||u.details),[c,y]=ne(n),[{modelValue:E,...G}]=oe(e),[$]=we(e);return t(se,U({ref:T,modelValue:s.value,"onUpdate:modelValue":B=>s.value=B,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},c,G,{focused:f.value,messages:M.value}),{...u,default:B=>{let{isDisabled:I,isDirty:q,isReadonly:ce,isValid:de}=B;return t(ye,U({ref:p,style:{"--v-textarea-control-height":D.value},onClick:z,onMousedown:re,"onClick:clear":ue,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},$,{active:H.value||q.value,dirty:q.value||e.dirty,disabled:I.value,focused:f.value,error:de.value===!1}),{...u,default:me=>{let{props:{class:Q,...fe}}=me;return t(A,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),Z(t("textarea",U({ref:k,class:Q,value:s.value,onInput:ie,autofocus:e.autofocus,readonly:ce.value,disabled:I.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:_,onBlur:b},fe,y),null),[[Fe("intersect"),{handler:i},null,{once:!0}]]),e.autoGrow&&Z(t("textarea",{class:[Q,"v-textarea__sizer"],"onUpdate:modelValue":ve=>s.value=ve,ref:C,readonly:!0,"aria-hidden":"true"},null),[[Pe,s.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:m?B=>{var I;return t(A,null,[(I=u.details)==null?void 0:I.call(u,B),a&&t(A,null,[t("span",null,null),t(_e,{active:e.persistentCounter||f.value,value:g.value,max:r.value},u.counter)])])}:void 0})}),Be({},T,p,k)}}),Ye={class:"font-semibold text-xl text-gray-800 leading-tight"},Je=Ne({__name:"CreateEdit",props:{team:null,operators:null,ticketCategories:null,errors:null},setup(e){var u,s,f,h,b;const d=e,n=Ue({active:!((u=d.team)!=null&&u.deleted_at),name:((s=d.team)==null?void 0:s.name)??"",description:((f=d.team)==null?void 0:f.description)??"",operators:((h=d.team)==null?void 0:h.operators.map(g=>g.uuid))??[],ticket_categories:((b=d.team)==null?void 0:b.ticket_categories.map(g=>g.uuid))??[]});function V(){d.team?n.put(Y("ticket-allocator.teams.update",d.team.uuid)):n.post(Y("ticket-allocator.teams.store"))}return(g,r)=>(Ae(),He(A,null,[t(l(Te),{title:l(v)(e.team?"edit_team":"new_team")},null,8,["title"]),t(Ee,null,{header:o(()=>[j("h2",Ye,O(l(v)(e.team?"edit_team":"new_team")),1)]),default:o(()=>[j("div",null,[t(Ge,{onSubmit:De(V,["prevent"])},{default:o(()=>[t($e,null,{default:o(()=>[t(F,null,{default:o(()=>[t(P,{cols:"12",md:"12"},{default:o(()=>[t(Xe,{modelValue:l(n).active,"onUpdate:modelValue":r[0]||(r[0]=i=>l(n).active=i),label:l(v)("active")},null,8,["modelValue","label"])]),_:1})]),_:1}),t(F,null,{default:o(()=>[t(P,{cols:"12",md:"12"},{default:o(()=>[t(Me,{modelValue:l(n).name,"onUpdate:modelValue":r[1]||(r[1]=i=>l(n).name=i),required:"",maxlength:"255",label:l(v)("name"),"error-messages":e.errors.name},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),t(F,null,{default:o(()=>[t(P,{cols:"12",md:"12"},{default:o(()=>[t(Oe,{modelValue:l(n).description,"onUpdate:modelValue":r[2]||(r[2]=i=>l(n).description=i),label:l(v)("description"),"error-messages":e.errors.description},null,8,["modelValue","label","error-messages"])]),_:1})]),_:1}),t(F,null,{default:o(()=>[t(P,{cols:"12",md:"12"},{default:o(()=>[t(L,{modelValue:l(n).operators,"onUpdate:modelValue":r[3]||(r[3]=i=>l(n).operators=i),multiple:"",clearable:"",chips:"","closable-chips":"",label:l(v)("operators"),items:e.operators,"item-title":"name","item-value":"uuid","error-messages":e.errors.operators},null,8,["modelValue","label","items","error-messages"])]),_:1})]),_:1}),t(F,null,{default:o(()=>[t(P,{cols:"12",md:"12"},{default:o(()=>[t(L,{modelValue:l(n).ticket_categories,"onUpdate:modelValue":r[4]||(r[4]=i=>l(n).ticket_categories=i),multiple:"",clearable:"",chips:"","closable-chips":"",label:l(v)("ticket_categories"),items:e.ticketCategories,"item-title":"name","item-value":"uuid","error-messages":e.errors.ticket_categories},null,8,["modelValue","label","items","error-messages"])]),_:1})]),_:1}),t(F,null,{default:o(()=>[t(P,{cols:"12",md:"12"},{default:o(()=>[t(J,{type:"submit",color:"primary",class:"mr-3",disabled:l(n).processing},{default:o(()=>[K(O(l(v)("save")),1)]),_:1},8,["disabled"]),t(l(ze),{href:l(Y)("ticket-allocator.teams.index"),class:"mr-3"},{default:o(()=>[t(J,null,{default:o(()=>[K(O(l(v)("cancel")),1)]),_:1})]),_:1},8,["href"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])])]),_:1})],64))}});export{Je as default};
//# sourceMappingURL=CreateEdit-0c7dac3f.js.map
