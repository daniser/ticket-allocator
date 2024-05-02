import{f as Ve,g as ke,h as we,i as Se,j as Ce,k as be,l as xe}from"./filter-CdhOGi56.js";import{h as Fe,i as Ie,b as J,f as Ae}from"./VTextField-K_-S2lgg.js";import{p as Pe,I as De,g as Re,d as _e,r as M,s as I,z,f as y,K as Me,w as T,y as Q,aB as Te,j as Le,i as o,F as L,D as x,G as X,b0 as Ee,E as Be,af as Ke,b1 as Ne,b2 as Y,b3 as Oe}from"./app-BuM7pvKH.js";import{e as Ue,f as ze,g as Z,b as je}from"./scopeId-DeIjCqLG.js";import{m as He}from"./VGrid-C3bbXzR6.js";import{a as qe}from"./VCheckboxBtn-Gmx7DoUR.js";function Ge(e,V,u){if(V==null)return e;if(Array.isArray(V))throw new Error("Multiple matches is not implemented");return typeof V=="number"&&~V?o(L,null,[o("span",{class:"v-autocomplete__unmask"},[e.substr(0,V)]),o("span",{class:"v-autocomplete__mask"},[e.substr(V,u)]),o("span",{class:"v-autocomplete__unmask"},[e.substr(V+u)])]):e}const We=Pe({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...Ve({filterKeys:["title"]}),...ke(),...De(Fe({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...He({transition:!1})},"VAutocomplete"),el=Re()({name:"VAutocomplete",props:We(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,V){let{slots:u}=V;const{t:E}=_e(),h=M(),k=I(!1),w=I(!0),A=I(!1),j=M(),H=M(),B=z(e,"menu"),c=y({get:()=>B.value,set:l=>{var t;B.value&&!l&&((t=j.value)!=null&&t.ΨopenChildren)||(B.value=l)}}),r=I(-1),ee=y(()=>{var l;return(l=h.value)==null?void 0:l.color}),q=y(()=>c.value?e.closeText:e.openText),{items:G,transformIn:le,transformOut:te}=Ue(e),{textColorClasses:ae,textColorStyles:ue}=Me(ee),v=z(e,"search",""),n=z(e,"modelValue",[],l=>le(l===null?[null]:Oe(l)),l=>{const t=te(l);return e.multiple?t:t[0]??null}),ne=y(()=>typeof e.counterValue=="function"?e.counterValue(n.value):typeof e.counterValue=="number"?e.counterValue:n.value.length),b=Ie(),{filteredItems:K,getMatches:oe}=we(e,G,()=>w.value?"":v.value),g=y(()=>e.hideSelected?K.value.filter(l=>!n.value.some(t=>t.value===l.value)):K.value),P=y(()=>!!(e.chips||u.chip)),F=y(()=>P.value||!!u.selection),ie=y(()=>n.value.map(l=>l.props.value)),D=y(()=>{var t;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&v.value===((t=g.value[0])==null?void 0:t.title))&&g.value.length>0&&!w.value&&!A.value}),N=y(()=>e.hideNoData&&!g.value.length||e.readonly||(b==null?void 0:b.isReadonly.value)),O=M(),{onListScroll:se,onListKeydown:re}=Se(O,h);function ce(l){e.openOnClear&&(c.value=!0),v.value=""}function ve(){N.value||(c.value=!0)}function de(l){N.value||(k.value&&(l.preventDefault(),l.stopPropagation()),c.value=!c.value)}function fe(l){var a,i,m;if(e.readonly||b!=null&&b.isReadonly.value)return;const t=h.value.selectionStart,s=n.value.length;if((r.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(c.value=!0),["Escape"].includes(l.key)&&(c.value=!1),D.value&&["Enter","Tab"].includes(l.key)&&S(g.value[0]),l.key==="ArrowDown"&&D.value&&((a=O.value)==null||a.focus("next")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&F.value&&n.value.length>0&&!v.value)return S(n.value[0],!1);if(~r.value){const d=r.value;S(n.value[r.value],!1),r.value=d>=s-1?s-2:d}else l.key==="Backspace"&&!v.value&&(r.value=s-1)}if(e.multiple){if(l.key==="ArrowLeft"){if(r.value<0&&t>0)return;const d=r.value>-1?r.value-1:s-1;n.value[d]?r.value=d:(r.value=-1,h.value.setSelectionRange((i=v.value)==null?void 0:i.length,(m=v.value)==null?void 0:m.length))}if(l.key==="ArrowRight"){if(r.value<0)return;const d=r.value+1;n.value[d]?r.value=d:(r.value=-1,h.value.setSelectionRange(0,0))}}}function me(l){if(Y(h.value,":autofill")||Y(h.value,":-webkit-autofill")){const t=G.value.find(s=>s.title===l.target.value);t&&S(t)}}function pe(){var l;k.value&&(w.value=!0,(l=h.value)==null||l.focus())}function he(l){k.value=!0,setTimeout(()=>{A.value=!0})}function ge(l){A.value=!1}function ye(l){(l==null||l===""&&!e.multiple&&!F.value)&&(n.value=[])}const U=I(!1);function S(l){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!l||l.props.disabled))if(e.multiple){const s=n.value.findIndex(i=>e.valueComparator(i.value,l.value)),a=t??!~s;if(~s){const i=a?[...n.value,l]:[...n.value];i.splice(s,1),n.value=i}else a&&(n.value=[...n.value,l]);e.clearOnSelect&&(v.value="")}else{const s=t!==!1;n.value=s?[l]:[],v.value=s&&!F.value?l.title:"",Q(()=>{c.value=!1,w.value=!0})}}return T(k,(l,t)=>{var s;l!==t&&(l?(U.value=!0,v.value=e.multiple||F.value?"":String(((s=n.value.at(-1))==null?void 0:s.props.title)??""),w.value=!0,Q(()=>U.value=!1)):(!e.multiple&&v.value==null?n.value=[]:D.value&&!A.value&&!n.value.some(a=>{let{value:i}=a;return i===g.value[0].value})&&S(g.value[0]),c.value=!1,v.value="",r.value=-1))}),T(v,l=>{!k.value||U.value||(l&&(c.value=!0),w.value=!l)}),T(c,()=>{if(!e.hideSelected&&c.value&&n.value.length){const l=g.value.findIndex(t=>n.value.some(s=>t.value===s.value));Te&&window.requestAnimationFrame(()=>{var t;l>=0&&((t=H.value)==null||t.scrollToIndex(l))})}}),T(()=>e.items,(l,t)=>{c.value||k.value&&!t.length&&l.length&&(c.value=!0)}),Le(()=>{const l=!!(!e.hideNoData||g.value.length||u["prepend-item"]||u["append-item"]||u["no-data"]),t=n.value.length>0,s=J.filterProps(e);return o(J,x({ref:h},s,{modelValue:v.value,"onUpdate:modelValue":[a=>v.value=a,ye],focused:k.value,"onUpdate:focused":a=>k.value=a,validationValue:n.externalValue,counterValue:ne.value,dirty:t,onChange:me,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":c.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!F.value,"v-autocomplete--selecting-index":r.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:t?void 0:e.placeholder,"onClick:clear":ce,"onMousedown:control":ve,onKeydown:fe}),{...u,default:()=>o(L,null,[o(Ce,x({ref:j,modelValue:c.value,"onUpdate:modelValue":a=>c.value=a,activator:"parent",contentClass:"v-autocomplete__content",disabled:N.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:pe},e.menuProps),{default:()=>[l&&o(ze,x({ref:O,selected:ie.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:a=>a.preventDefault(),onKeydown:re,onFocusin:he,onFocusout:ge,onScrollPassive:se,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var a,i,m;return[(a=u["prepend-item"])==null?void 0:a.call(u),!g.value.length&&!e.hideNoData&&(((i=u["no-data"])==null?void 0:i.call(u))??o(Z,{title:E(e.noDataText)},null)),o(be,{ref:H,renderless:!0,items:g.value},{default:d=>{var $;let{item:f,index:C,itemRef:p}=d;const W=x(f.props,{ref:p,key:C,active:D.value&&C===0?!0:void 0,onClick:()=>S(f,null)});return(($=u.item)==null?void 0:$.call(u,{item:f,index:C,props:W}))??o(Z,x(W,{role:"option"}),{prepend:R=>{let{isSelected:_}=R;return o(L,null,[e.multiple&&!e.hideSelected?o(qe,{key:f.value,modelValue:_,ripple:!1,tabindex:"-1"},null):void 0,f.props.prependAvatar&&o(je,{image:f.props.prependAvatar},null),f.props.prependIcon&&o(X,{icon:f.props.prependIcon},null)])},title:()=>{var R,_;return w.value?f.title:Ge(f.title,(R=oe(f))==null?void 0:R.title,((_=v.value)==null?void 0:_.length)??0)}})}}),(m=u["append-item"])==null?void 0:m.call(u)]}})]}),n.value.map((a,i)=>{function m(p){p.stopPropagation(),p.preventDefault(),S(a,!1)}const d={"onClick:close":m,onKeydown(p){p.key!=="Enter"&&p.key!==" "||(p.preventDefault(),p.stopPropagation(),m(p))},onMousedown(p){p.preventDefault(),p.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},f=P.value?!!u.chip:!!u.selection,C=f?Ee(P.value?u.chip({item:a,index:i,props:d}):u.selection({item:a,index:i})):void 0;if(!(f&&!C))return o("div",{key:a.value,class:["v-autocomplete__selection",i===r.value&&["v-autocomplete__selection--selected",ae.value]],style:i===r.value?ue.value:{}},[P.value?u.chip?o(Be,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:a.title}}},{default:()=>[C]}):o(xe,x({key:"chip",closable:e.closableChips,size:"small",text:a.title,disabled:a.props.disabled},d),null):C??o("span",{class:"v-autocomplete__selection-text"},[a.title,e.multiple&&i<n.value.length-1&&o("span",{class:"v-autocomplete__selection-comma"},[Ke(",")])])])})]),"append-inner":function(){var d;for(var a=arguments.length,i=new Array(a),m=0;m<a;m++)i[m]=arguments[m];return o(L,null,[(d=u["append-inner"])==null?void 0:d.call(u,...i),e.menuIcon?o(X,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:de,onClick:Ne,"aria-label":E(q.value),title:E(q.value)},null):void 0])}})}),Ae({isFocused:k,isPristine:w,menu:c,search:v,filteredItems:K,select:S},h)}});export{el as V};
//# sourceMappingURL=VAutocomplete-KJFj9Wy7.js.map
