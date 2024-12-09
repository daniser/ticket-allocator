import{f as be,g as ke,h as we,i as Ce,j as xe,k as Se,l as Ae}from"./filter-aqmoXICC.js";import{e as Fe,V as G,f as Ie}from"./VTextField-I3tdDHM-.js";import{p as Pe,A as De,a_ as Re,g as _e,d as Me,r as R,s as A,E as j,f as g,a$ as Te,C as Ee,w as _,z as J,ap as Le,j as Ne,i as o,F as M,D as x,b0 as Oe,b1 as Q,ax as Be,Y as X,b2 as Ke,aq as Ue,a0 as ze,b3 as je,b4 as qe,b5 as Z,b6 as He}from"./app-Dxhld-21.js";import{a as $e}from"./VInput-DAmHD-kU.js";import{V as We}from"./VCheckboxBtn-BxJ9IWPC.js";function Ye(l,V,u){if(V==null)return l;if(Array.isArray(V))throw new Error("Multiple matches is not implemented");return typeof V=="number"&&~V?o(M,null,[o("span",{class:"v-autocomplete__unmask"},[l.substr(0,V)]),o("span",{class:"v-autocomplete__mask"},[l.substr(V,u)]),o("span",{class:"v-autocomplete__unmask"},[l.substr(V+u)])]):l}const Ge=Pe({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...be({filterKeys:["title"]}),...ke(),...De(Fe({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Re({transition:!1})},"VAutocomplete"),ll=_e()({name:"VAutocomplete",props:Ge(),emits:{"update:focused":l=>!0,"update:search":l=>!0,"update:modelValue":l=>!0,"update:menu":l=>!0},setup(l,V){let{slots:u}=V;const{t:T}=Me(),h=R(),y=A(!1),k=A(!0),E=A(!1),q=R(),L=R(),N=j(l,"menu"),c=g({get:()=>N.value,set:e=>{var t;N.value&&!e&&((t=q.value)!=null&&t.ΨopenChildren.size)||(N.value=e)}}),r=A(-1),ee=g(()=>{var e;return(e=h.value)==null?void 0:e.color}),H=g(()=>c.value?l.closeText:l.openText),{items:$,transformIn:le,transformOut:te}=Te(l),{textColorClasses:ae,textColorStyles:ue}=Ee(ee),v=j(l,"search",""),n=j(l,"modelValue",[],e=>le(e===null?[null]:He(e)),e=>{const t=te(e);return l.multiple?t:t[0]??null}),ne=g(()=>typeof l.counterValue=="function"?l.counterValue(n.value):typeof l.counterValue=="number"?l.counterValue:n.value.length),F=$e(l),{filteredItems:O,getMatches:oe}=we(l,$,()=>k.value?"":v.value),b=g(()=>l.hideSelected?O.value.filter(e=>!n.value.some(t=>t.value===e.value)):O.value),I=g(()=>!!(l.chips||u.chip)),S=g(()=>I.value||!!u.selection),ie=g(()=>n.value.map(e=>e.props.value)),B=g(()=>{var t;return(l.autoSelectFirst===!0||l.autoSelectFirst==="exact"&&v.value===((t=b.value[0])==null?void 0:t.title))&&b.value.length>0&&!k.value&&!E.value}),K=g(()=>l.hideNoData&&!b.value.length||F.isReadonly.value||F.isDisabled.value),U=R(),se=Ce(U,h);function re(e){l.openOnClear&&(c.value=!0),v.value=""}function ce(){K.value||(c.value=!0)}function ve(e){K.value||(y.value&&(e.preventDefault(),e.stopPropagation()),c.value=!c.value)}function de(e){var t;qe(e)&&((t=h.value)==null||t.focus())}function fe(e){var a,i,m;if(F.isReadonly.value)return;const t=h.value.selectionStart,s=n.value.length;if((r.value>-1||["Enter","ArrowDown","ArrowUp"].includes(e.key))&&e.preventDefault(),["Enter","ArrowDown"].includes(e.key)&&(c.value=!0),["Escape"].includes(e.key)&&(c.value=!1),B.value&&["Enter","Tab"].includes(e.key)&&!n.value.some(d=>{let{value:f}=d;return f===b.value[0].value})&&w(b.value[0]),e.key==="ArrowDown"&&B.value&&((a=U.value)==null||a.focus("next")),["Backspace","Delete"].includes(e.key)){if(!l.multiple&&S.value&&n.value.length>0&&!v.value)return w(n.value[0],!1);if(~r.value){const d=r.value;w(n.value[r.value],!1),r.value=d>=s-1?s-2:d}else e.key==="Backspace"&&!v.value&&(r.value=s-1)}if(l.multiple){if(e.key==="ArrowLeft"){if(r.value<0&&t>0)return;const d=r.value>-1?r.value-1:s-1;n.value[d]?r.value=d:(r.value=-1,h.value.setSelectionRange((i=v.value)==null?void 0:i.length,(m=v.value)==null?void 0:m.length))}if(e.key==="ArrowRight"){if(r.value<0)return;const d=r.value+1;n.value[d]?r.value=d:(r.value=-1,h.value.setSelectionRange(0,0))}}}function me(e){if(Z(h.value,":autofill")||Z(h.value,":-webkit-autofill")){const t=$.value.find(s=>s.title===e.target.value);t&&w(t)}}function pe(){var e;l.eager&&((e=L.value)==null||e.calculateVisibleItems())}function he(){var e;y.value&&(k.value=!0,(e=h.value)==null||e.focus())}function ge(e){y.value=!0,setTimeout(()=>{E.value=!0})}function Ve(e){E.value=!1}function ye(e){(e==null||e===""&&!l.multiple&&!S.value)&&(n.value=[])}const z=A(!1);function w(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!e||e.props.disabled))if(l.multiple){const s=n.value.findIndex(i=>l.valueComparator(i.value,e.value)),a=t??!~s;if(~s){const i=a?[...n.value,e]:[...n.value];i.splice(s,1),n.value=i}else a&&(n.value=[...n.value,e]);l.clearOnSelect&&(v.value="")}else{const s=t!==!1;n.value=s?[e]:[],v.value=s&&!S.value?e.title:"",J(()=>{c.value=!1,k.value=!0})}}return _(y,(e,t)=>{var s;e!==t&&(e?(z.value=!0,v.value=l.multiple||S.value?"":String(((s=n.value.at(-1))==null?void 0:s.props.title)??""),k.value=!0,J(()=>z.value=!1)):(!l.multiple&&v.value==null&&(n.value=[]),c.value=!1,n.value.some(a=>{let{title:i}=a;return i===v.value})||(v.value=""),r.value=-1))}),_(v,e=>{!y.value||z.value||(e&&(c.value=!0),k.value=!e)}),_(c,()=>{if(!l.hideSelected&&c.value&&n.value.length){const e=b.value.findIndex(t=>n.value.some(s=>t.value===s.value));Le&&window.requestAnimationFrame(()=>{var t;e>=0&&((t=L.value)==null||t.scrollToIndex(e))})}}),_(()=>l.items,(e,t)=>{c.value||y.value&&!t.length&&e.length&&(c.value=!0)}),Ne(()=>{const e=!!(!l.hideNoData||b.value.length||u["prepend-item"]||u["append-item"]||u["no-data"]),t=n.value.length>0,s=G.filterProps(l);return o(G,x({ref:h},s,{modelValue:v.value,"onUpdate:modelValue":[a=>v.value=a,ye],focused:y.value,"onUpdate:focused":a=>y.value=a,validationValue:n.externalValue,counterValue:ne.value,dirty:t,onChange:me,class:["v-autocomplete",`v-autocomplete--${l.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":c.value,"v-autocomplete--chips":!!l.chips,"v-autocomplete--selection-slot":!!S.value,"v-autocomplete--selecting-index":r.value>-1},l.class],style:l.style,readonly:F.isReadonly.value,placeholder:t?void 0:l.placeholder,"onClick:clear":re,"onMousedown:control":ce,onKeydown:fe}),{...u,default:()=>o(M,null,[o(xe,x({ref:q,modelValue:c.value,"onUpdate:modelValue":a=>c.value=a,activator:"parent",contentClass:"v-autocomplete__content",disabled:K.value,eager:l.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:l.transition,onAfterEnter:pe,onAfterLeave:he},l.menuProps),{default:()=>[e&&o(Oe,x({ref:U,selected:ie.value,selectStrategy:l.multiple?"independent":"single-independent",onMousedown:a=>a.preventDefault(),onKeydown:de,onFocusin:ge,onFocusout:Ve,tabindex:"-1","aria-live":"polite",color:l.itemColor??l.color},se,l.listProps),{default:()=>{var a,i,m;return[(a=u["prepend-item"])==null?void 0:a.call(u),!b.value.length&&!l.hideNoData&&(((i=u["no-data"])==null?void 0:i.call(u))??o(Q,{title:T(l.noDataText)},null)),o(Se,{ref:L,renderless:!0,items:b.value},{default:d=>{var Y;let{item:f,index:C,itemRef:p}=d;const W=x(f.props,{ref:p,key:C,active:B.value&&C===0?!0:void 0,onClick:()=>w(f,null)});return((Y=u.item)==null?void 0:Y.call(u,{item:f,index:C,props:W}))??o(Q,x(W,{role:"option"}),{prepend:P=>{let{isSelected:D}=P;return o(M,null,[l.multiple&&!l.hideSelected?o(We,{key:f.value,modelValue:D,ripple:!1,tabindex:"-1"},null):void 0,f.props.prependAvatar&&o(Be,{image:f.props.prependAvatar},null),f.props.prependIcon&&o(X,{icon:f.props.prependIcon},null)])},title:()=>{var P,D;return k.value?f.title:Ye(f.title,(P=oe(f))==null?void 0:P.title,((D=v.value)==null?void 0:D.length)??0)}})}}),(m=u["append-item"])==null?void 0:m.call(u)]}})]}),n.value.map((a,i)=>{function m(p){p.stopPropagation(),p.preventDefault(),w(a,!1)}const d={"onClick:close":m,onKeydown(p){p.key!=="Enter"&&p.key!==" "||(p.preventDefault(),p.stopPropagation(),m(p))},onMousedown(p){p.preventDefault(),p.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},f=I.value?!!u.chip:!!u.selection,C=f?Ke(I.value?u.chip({item:a,index:i,props:d}):u.selection({item:a,index:i})):void 0;if(!(f&&!C))return o("div",{key:a.value,class:["v-autocomplete__selection",i===r.value&&["v-autocomplete__selection--selected",ae.value]],style:i===r.value?ue.value:{}},[I.value?u.chip?o(Ue,{key:"chip-defaults",defaults:{VChip:{closable:l.closableChips,size:"small",text:a.title}}},{default:()=>[C]}):o(Ae,x({key:"chip",closable:l.closableChips,size:"small",text:a.title,disabled:a.props.disabled},d),null):C??o("span",{class:"v-autocomplete__selection-text"},[a.title,l.multiple&&i<n.value.length-1&&o("span",{class:"v-autocomplete__selection-comma"},[ze(",")])])])})]),"append-inner":function(){var d;for(var a=arguments.length,i=new Array(a),m=0;m<a;m++)i[m]=arguments[m];return o(M,null,[(d=u["append-inner"])==null?void 0:d.call(u,...i),l.menuIcon?o(X,{class:"v-autocomplete__menu-icon",icon:l.menuIcon,onMousedown:ve,onClick:je,"aria-label":T(H.value),title:T(H.value),tabindex:"-1"},null):void 0])}})}),Ie({isFocused:y,isPristine:k,menu:c,search:v,filteredItems:O,select:w},h)}});export{ll as V};
//# sourceMappingURL=VAutocomplete-DkomMcBE.js.map
