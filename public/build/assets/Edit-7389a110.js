import{a as se}from"./Default.vue_vue_type_script_setup_true_lang-7a530046.js";import{aQ as ie,aR as re,aS as ce,aT as de,aU as ve,aV as fe,aW as me,r as y,ah as Q,aX as pe,aY as he,aZ as ge,a_ as xe,E as x,a1 as A,aN as W,u as Y,a$ as Ve,c as l,a3 as U,b0 as be,ao as N,b1 as ye,b2 as j,b3 as Ce,V as ke,b4 as Fe,a9 as _e,b5 as le,b6 as Z,d as ae,b7 as we,b8 as Ie,b9 as Pe,af as Se,ba as De,ai as Re,a2 as ne,bb as Te,ak as Ae,al as Ne,bc as Be,bd as Ee,F as J,G as $e,be as He,bf as Me,aq as Ue,bg as Oe,aC as ze,bh as Ge,K as Le,P as Ke,W as K,Q as q,a0 as ee,O as Qe,ar as We,T as ue}from"./app-775fcee2.js";import{f as Xe,g as qe}from"./Ticket-6868e21f.js";function Ye(e,r,a){if(r==null)return e;if(Array.isArray(r))throw new Error("Multiple matches is not implemented");return typeof r=="number"&&~r?l(U,null,[l("span",{class:"v-autocomplete__unmask"},[e.substr(0,r)]),l("span",{class:"v-autocomplete__mask"},[e.substr(r,a)]),l("span",{class:"v-autocomplete__unmask"},[e.substr(r+a)])]):e}const te=ie()({name:"VAutocomplete",props:{search:String,...re({filterKeys:["title"]}),...ce(),...de(ve({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...fe({transition:!1})},emits:{"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,r){let{slots:a}=r;const{t:I}=me(),i=y(),u=y(!1),c=y(!0),d=Q(e,"menu"),{items:h,transformIn:C,transformOut:V}=pe(e),v=Q(e,"search",""),f=Q(e,"modelValue",[],t=>C(he(t)),t=>{const o=V(t);return e.multiple?o:o[0]??null}),g=ge(),{filteredItems:B,getMatches:E}=xe(e,h,x(()=>c.value?void 0:v.value)),P=x(()=>f.value.map(t=>h.value.find(o=>e.valueComparator(o.value,t.value))||t)),O=x(()=>e.hideSelected?B.value.filter(t=>!P.value.some(o=>o.value===t.value)):B.value),$=x(()=>P.value.map(t=>t.props.value)),z=y();function X(t){f.value=[],e.openOnClear&&(d.value=!0),v.value=""}function L(){e.hideNoData&&!h.value.length||e.readonly||g!=null&&g.isReadonly.value||(d.value=!0)}function S(t){if(!(e.readonly||g!=null&&g.isReadonly.value)){if(["Enter","ArrowDown"].includes(t.key)&&(d.value=!0),["Escape"].includes(t.key)&&(d.value=!1),["Enter","Escape","Tab"].includes(t.key)&&(c.value=!0),t.key==="ArrowDown"){var o;t.preventDefault(),(o=z.value)==null||o.focus("next")}else if(t.key==="ArrowUp"){var p;t.preventDefault(),(p=z.value)==null||p.focus("prev")}}}function D(t){v.value=t.target.value}function H(){u.value&&(c.value=!0)}function n(t){u.value=!0}function k(t){if(t.relatedTarget==null){var o;(o=i.value)==null||o.focus()}}const m=y(!1);function b(t){if(e.multiple){const o=$.value.findIndex(p=>e.valueComparator(p,t.value));if(o===-1)f.value=[...f.value,t],v.value="";else{const p=[...f.value];p.splice(o,1),f.value=p}}else f.value=[t],m.value=!0,a.selection||(v.value=t.title),d.value=!1,c.value=!0,W(()=>m.value=!1)}return A(u,t=>{if(t){var o;m.value=!0,v.value=e.multiple||a.selection?"":String(((o=P.value.at(-1))==null?void 0:o.props.title)??""),c.value=!0,W(()=>m.value=!1)}else d.value=!1,v.value=""}),A(v,t=>{!u.value||m.value||(t&&(d.value=!0),c.value=!t)}),Y(()=>{const t=!!(e.chips||a.chip),o=!!(!e.hideNoData||O.value.length||a.prepend||a.append||a["no-data"]),[p]=Ve(e);return l(le,N({ref:i},p,{modelValue:v.value,"onUpdate:modelValue":F=>{F==null&&(f.value=[])},validationValue:f.externalValue,dirty:f.value.length>0,onInput:D,class:["v-autocomplete",{"v-autocomplete--active-menu":d.value,"v-autocomplete--chips":!!e.chips,[`v-autocomplete--${e.multiple?"multiple":"single"}`]:!0,"v-autocomplete--selection-slot":!!a.selection}],appendInnerIcon:e.menuIcon,readonly:e.readonly,"onClick:clear":X,"onClick:control":L,"onClick:input":L,onFocus:()=>u.value=!0,onBlur:()=>u.value=!1,onKeydown:S}),{...a,default:()=>{var F,T,G;return l(U,null,[l(be,N({modelValue:d.value,"onUpdate:modelValue":s=>d.value=s,activator:"parent",contentClass:"v-autocomplete__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:H},e.menuProps),{default:()=>[o&&l(ye,{ref:z,selected:$.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:s=>s.preventDefault(),onFocusin:n,onFocusout:k},{default:()=>[!O.value.length&&!e.hideNoData&&(((F=a["no-data"])==null?void 0:F.call(a))??l(j,{title:I(e.noDataText)},null)),(T=a["prepend-item"])==null?void 0:T.call(a),O.value.map((s,R)=>{var M;return((M=a.item)==null?void 0:M.call(a,{item:s,index:R,props:N(s.props,{onClick:()=>b(s)})}))??l(j,N({key:R},s.props,{onClick:()=>b(s)}),{prepend:_=>{let{isSelected:w}=_;return e.multiple&&!e.hideSelected?l(Ce,{modelValue:w,ripple:!1},null):void 0},title:()=>{var _,w;return c.value?s.title:Ye(s.title,(_=E(s))==null?void 0:_.title,((w=v.value)==null?void 0:w.length)??0)}})}),(G=a["append-item"])==null?void 0:G.call(a)]})]}),P.value.map((s,R)=>{function M(w){w.stopPropagation(),w.preventDefault(),b(s)}const _={"onClick:close":M,modelValue:!0,"onUpdate:modelValue":void 0};return l("div",{key:s.value,class:"v-autocomplete__selection"},[t?l(ke,{defaults:{VChip:{closable:e.closableChips,size:"small",text:s.title}}},{default:()=>[a.chip?a.chip({item:s,index:R,props:_}):l(Fe,_,null)]}):a.selection?a.selection({item:s,index:R}):l("span",{class:"v-autocomplete__selection-text"},[s.title,e.multiple&&R<P.value.length-1&&l("span",{class:"v-autocomplete__selection-comma"},[_e(",")])])])})])}})}),Z({isFocused:u,isPristine:c,menu:d,search:v,filteredItems:B,select:b},i)}}),Ze=ae({name:"VForm",props:{...we()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,r){let{slots:a,emit:I}=r;const i=Ie(e),u=y();function c(h){h.preventDefault(),i.reset()}function d(h){const C=h,V=i.validate();C.then=V.then.bind(V),C.catch=V.catch.bind(V),C.finally=V.finally.bind(V),I("submit",C),C.defaultPrevented||V.then(v=>{let{valid:f}=v;if(f){var g;(g=u.value)==null||g.submit()}}),C.preventDefault()}return Y(()=>{var h;return l("form",{ref:u,class:"v-form",novalidate:!0,onReset:c,onSubmit:d},[(h=a.default)==null?void 0:h.call(a,i)])}),Z(i,u)}});const je=ae({name:"VTextarea",directives:{Intersect:Pe},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,...Se(),...De()},emits:{"click:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,r){let{attrs:a,emit:I,slots:i}=r;const u=Q(e,"modelValue"),{isFocused:c,focus:d,blur:h}=Re(e),C=x(()=>typeof e.counterValue=="function"?e.counterValue(u.value):(u.value||"").toString().length),V=x(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function v(n,k){var m,b;!e.autofocus||!n||(m=k[0].target)==null||(b=m.focus)==null||b.call(m)}const f=y(),g=y(),B=y(""),E=y(),P=x(()=>c.value||e.persistentPlaceholder),O=x(()=>e.messages.length?e.messages:P.value||e.persistentHint?e.hint:"");function $(){if(E.value!==document.activeElement){var n;(n=E.value)==null||n.focus()}c.value||d()}function z(n){$(),I("click:control",n)}function X(n){n.stopPropagation(),$(),W(()=>{u.value="",Oe(e["onClick:clear"],n)})}function L(n){u.value=n.target.value}const S=y();function D(){e.autoGrow&&W(()=>{if(!S.value||!g.value)return;const n=getComputedStyle(S.value),k=getComputedStyle(g.value.$el),m=parseFloat(n.getPropertyValue("--v-field-padding-top"))+parseFloat(n.getPropertyValue("--v-input-padding-top"))+parseFloat(n.getPropertyValue("--v-field-padding-bottom")),b=S.value.scrollHeight,t=parseFloat(n.lineHeight),o=Math.max(parseFloat(e.rows)*t+m,parseFloat(k.getPropertyValue("--v-input-control-height"))),p=parseFloat(e.maxRows)*t+m||1/0;B.value=ze(Ge(b??0,o,p))})}ne(D),A(u,D),A(()=>e.rows,D),A(()=>e.maxRows,D),A(()=>e.density,D);let H;return A(S,n=>{if(n)H=new ResizeObserver(D),H.observe(S.value);else{var k;(k=H)==null||k.disconnect()}}),Te(()=>{var n;(n=H)==null||n.disconnect()}),Y(()=>{const n=!!(i.counter||e.counter||e.counterValue),k=!!(n||i.details),[m,b]=Ae(a),[{modelValue:t,...o}]=Ne(e),[p]=Be(e);return l(Ue,N({ref:f,modelValue:u.value,"onUpdate:modelValue":F=>u.value=F,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},m,o,{focused:c.value,messages:O.value}),{...i,default:F=>{let{isDisabled:T,isDirty:G,isReadonly:s,isValid:R}=F;return l(Ee,N({ref:g,style:{"--v-textarea-control-height":B.value},"onClick:control":z,"onClick:clear":X,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},p,{active:P.value||G.value,dirty:G.value||e.dirty,focused:c.value,error:R.value===!1}),{...i,default:M=>{let{props:{class:_,...w}}=M;return l(U,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),J(l("textarea",N({ref:E,class:_,value:u.value,onInput:L,autofocus:e.autofocus,readonly:s.value,disabled:T.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:$,onBlur:h},w,b),null),[[$e("intersect"),{handler:v},null,{once:!0}]]),e.autoGrow&&J(l("textarea",{class:[_,"v-textarea__sizer"],"onUpdate:modelValue":oe=>u.value=oe,ref:S,readonly:!0,"aria-hidden":"true"},null),[[He,u.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:k?F=>{var T;return l(U,null,[(T=i.details)==null?void 0:T.call(i,F),n&&l(U,null,[l("span",null,null),l(Me,{active:e.persistentCounter||c.value,value:C.value,max:V.value},i.counter)])])}:void 0})}),Z({},f,g,E)}}),Je=ue("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Edit team",-1),at=Le({__name:"Edit",props:{team:null,categories:null},setup(e){const r=e,a=x(()=>ee(Xe)),I=x(()=>ee(qe)),i=x(()=>a.value.with("operators").with("categories").find(r.team.uuid)),u=x(()=>I.value.all());return ne(()=>{a.value.fresh(r.team),I.value.fresh(r.categories)}),(c,d)=>(Qe(),Ke(U,null,[l(K(We),{title:"Edit team"}),l(se,null,{header:q(()=>[Je]),default:q(()=>[ue("div",null,[l(Ze,null,{default:q(()=>[l(le,{label:"Name","model-value":K(i).name},null,8,["model-value"]),l(je,{label:"Description","model-value":K(i).description},null,8,["model-value"]),l(te,{multiple:"",clearable:"",chips:"","closable-chips":"",label:"Operators",items:["Fuck","off","bitch","!!!"]}),l(te,{multiple:"",clearable:"",chips:"","closable-chips":"",label:"Ticket categories",items:K(u),"item-title":"name","item-value":"uuid"},null,8,["items"])]),_:1})])]),_:1})],64))}});export{at as default};
//# sourceMappingURL=Edit-7389a110.js.map
