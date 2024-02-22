import{f as Ve,g as ye,h as ke,i as be,j as we,k as Ce,l as Se}from"./filter-CyVNwZCw.js";import{h as xe,i as Fe,b as $,f as Ie}from"./VTextField-DQq65PUk.js";import{p as Ae,I as Pe,g as De,d as Re,r as M,s as I,z as U,f as b,K as _e,w as T,y as J,aB as Me,j as Te,i as o,F as L,D as A,G as Q,b0 as Le,E as Ne,af as Be,b1 as Ee,b2 as X,b3 as Oe}from"./app-DXEdNSO0.js";import{e as Ke,f as Ue,g as Y,b as ze}from"./scopeId-DWbNMQL3.js";import{m as je}from"./VGrid-CiQKRtuC.js";import{a as He}from"./VCheckboxBtn-DKcUMTVE.js";function qe(e,V,t){if(V==null)return e;if(Array.isArray(V))throw new Error("Multiple matches is not implemented");return typeof V=="number"&&~V?o(L,null,[o("span",{class:"v-autocomplete__unmask"},[e.substr(0,V)]),o("span",{class:"v-autocomplete__mask"},[e.substr(V,t)]),o("span",{class:"v-autocomplete__unmask"},[e.substr(V+t)])]):e}const Ge=Ae({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...Ve({filterKeys:["title"]}),...ye(),...Pe(xe({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...je({transition:!1})},"VAutocomplete"),Ze=De()({name:"VAutocomplete",props:Ge(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,V){let{slots:t}=V;const{t:N}=Re(),g=M(),y=I(!1),k=I(!0),P=I(!1),z=M(),j=M(),B=U(e,"menu"),s=b({get:()=>B.value,set:l=>{var a;B.value&&!l&&((a=z.value)!=null&&a.ΨopenChildren)||(B.value=l)}}),i=I(-1),Z=b(()=>{var l;return(l=g.value)==null?void 0:l.color}),H=b(()=>s.value?e.closeText:e.openText),{items:q,transformIn:ee,transformOut:le}=Ke(e),{textColorClasses:te,textColorStyles:ae}=_e(Z),v=U(e,"search",""),n=U(e,"modelValue",[],l=>ee(l===null?[null]:Oe(l)),l=>{const a=le(l);return e.multiple?a:a[0]??null}),ue=b(()=>typeof e.counterValue=="function"?e.counterValue(n.value):typeof e.counterValue=="number"?e.counterValue:n.value.length),x=Fe(),{filteredItems:E,getMatches:ne}=ke(e,q,()=>k.value?"":v.value),m=b(()=>e.hideSelected?E.value.filter(l=>!n.value.some(a=>a.value===l.value)):E.value),oe=b(()=>n.value.map(l=>l.props.value)),D=b(()=>{var a;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&v.value===((a=m.value[0])==null?void 0:a.title))&&m.value.length>0&&!k.value&&!P.value}),O=b(()=>e.hideNoData&&!m.value.length||e.readonly||(x==null?void 0:x.isReadonly.value)),K=M(),{onListScroll:ie,onListKeydown:se}=be(K,g);function re(l){e.openOnClear&&(s.value=!0),v.value=""}function ce(){O.value||(s.value=!0)}function ve(l){O.value||(y.value&&(l.preventDefault(),l.stopPropagation()),s.value=!s.value)}function de(l){var p,u,d;if(e.readonly||x!=null&&x.isReadonly.value)return;const a=g.value.selectionStart,r=n.value.length;if((i.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(s.value=!0),["Escape"].includes(l.key)&&(s.value=!1),D.value&&["Enter","Tab"].includes(l.key)&&w(m.value[0]),l.key==="ArrowDown"&&D.value&&((p=K.value)==null||p.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(l.key)){if(i.value<0){l.key==="Backspace"&&!v.value&&(i.value=r-1);return}const c=i.value,h=n.value[i.value];h&&!h.props.disabled&&w(h),i.value=c>=r-1?r-2:c}if(l.key==="ArrowLeft"){if(i.value<0&&a>0)return;const c=i.value>-1?i.value-1:r-1;n.value[c]?i.value=c:(i.value=-1,g.value.setSelectionRange((u=v.value)==null?void 0:u.length,(d=v.value)==null?void 0:d.length))}if(l.key==="ArrowRight"){if(i.value<0)return;const c=i.value+1;n.value[c]?i.value=c:(i.value=-1,g.value.setSelectionRange(0,0))}}}function fe(l){if(X(g.value,":autofill")||X(g.value,":-webkit-autofill")){const a=q.value.find(r=>r.title===l.target.value);a&&w(a)}}function me(){var l;y.value&&(k.value=!0,(l=g.value)==null||l.focus())}function pe(l){y.value=!0,setTimeout(()=>{P.value=!0})}function he(l){P.value=!1}function ge(l){(l==null||l===""&&!e.multiple)&&(n.value=[])}const F=I(!1);function w(l){if(l.props.disabled)return;const a=n.value.findIndex(p=>e.valueComparator(p.value,l.value)),r=a===-1;if(e.multiple){if(r)n.value=[...n.value,l];else{const p=[...n.value];p.splice(a,1),n.value=p}e.clearOnSelect&&(v.value="")}else n.value=r?[l]:[],F.value=!0,v.value=r?l.title:"",s.value=!1,k.value=!0,J(()=>F.value=!1)}return T(y,(l,a)=>{var r;l!==a&&(l?(F.value=!0,v.value=e.multiple?"":String(((r=n.value.at(-1))==null?void 0:r.props.title)??""),k.value=!0,J(()=>F.value=!1)):(!e.multiple&&v.value==null?n.value=[]:D.value&&!P.value&&!n.value.some(p=>{let{value:u}=p;return u===m.value[0].value})&&w(m.value[0]),s.value=!1,v.value="",i.value=-1))}),T(v,l=>{!y.value||F.value||(l&&(s.value=!0),k.value=!l)}),T(s,()=>{if(!e.hideSelected&&s.value&&n.value.length){const l=m.value.findIndex(a=>n.value.some(r=>a.value===r.value));Me&&window.requestAnimationFrame(()=>{var a;l>=0&&((a=j.value)==null||a.scrollToIndex(l))})}}),T(m,(l,a)=>{y.value&&(!l.length&&e.hideNoData&&(s.value=!1),!a.length&&l.length&&(s.value=!0))}),Te(()=>{const l=!!(e.chips||t.chip),a=!!(!e.hideNoData||m.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),r=n.value.length>0,p=$.filterProps(e);return o($,A({ref:g},p,{modelValue:v.value,"onUpdate:modelValue":[u=>v.value=u,ge],focused:y.value,"onUpdate:focused":u=>y.value=u,validationValue:n.externalValue,counterValue:ue.value,dirty:r,onChange:fe,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":s.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!t.selection,"v-autocomplete--selecting-index":i.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:r?void 0:e.placeholder,"onClick:clear":re,"onMousedown:control":ce,onKeydown:de}),{...t,default:()=>o(L,null,[o(we,A({ref:z,modelValue:s.value,"onUpdate:modelValue":u=>s.value=u,activator:"parent",contentClass:"v-autocomplete__content",disabled:O.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:me},e.menuProps),{default:()=>[a&&o(Ue,A({ref:K,selected:oe.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:u=>u.preventDefault(),onKeydown:se,onFocusin:pe,onFocusout:he,onScrollPassive:ie,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var u,d,c;return[(u=t["prepend-item"])==null?void 0:u.call(t),!m.value.length&&!e.hideNoData&&(((d=t["no-data"])==null?void 0:d.call(t))??o(Y,{title:N(e.noDataText)},null)),o(Ce,{ref:j,renderless:!0,items:m.value},{default:h=>{var W;let{item:f,index:C,itemRef:S}=h;const G=A(f.props,{ref:S,key:C,active:D.value&&C===0?!0:void 0,onClick:()=>w(f)});return((W=t.item)==null?void 0:W.call(t,{item:f,index:C,props:G}))??o(Y,G,{prepend:R=>{let{isSelected:_}=R;return o(L,null,[e.multiple&&!e.hideSelected?o(He,{key:f.value,modelValue:_,ripple:!1,tabindex:"-1"},null):void 0,f.props.prependAvatar&&o(ze,{image:f.props.prependAvatar},null),f.props.prependIcon&&o(Q,{icon:f.props.prependIcon},null)])},title:()=>{var R,_;return k.value?f.title:qe(f.title,(R=ne(f))==null?void 0:R.title,((_=v.value)==null?void 0:_.length)??0)}})}}),(c=t["append-item"])==null?void 0:c.call(t)]}})]}),n.value.map((u,d)=>{function c(S){S.stopPropagation(),S.preventDefault(),w(u)}const h={"onClick:close":c,onMousedown(S){S.preventDefault(),S.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},f=l?!!t.chip:!!t.selection,C=f?Le(l?t.chip({item:u,index:d,props:h}):t.selection({item:u,index:d})):void 0;if(!(f&&!C))return o("div",{key:u.value,class:["v-autocomplete__selection",d===i.value&&["v-autocomplete__selection--selected",te.value]],style:d===i.value?ae.value:{}},[l?t.chip?o(Ne,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:u.title}}},{default:()=>[C]}):o(Se,A({key:"chip",closable:e.closableChips,size:"small",text:u.title,disabled:u.props.disabled},h),null):C??o("span",{class:"v-autocomplete__selection-text"},[u.title,e.multiple&&d<n.value.length-1&&o("span",{class:"v-autocomplete__selection-comma"},[Be(",")])])])})]),"append-inner":function(){var h;for(var u=arguments.length,d=new Array(u),c=0;c<u;c++)d[c]=arguments[c];return o(L,null,[(h=t["append-inner"])==null?void 0:h.call(t,...d),e.menuIcon?o(Q,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:ve,onClick:Ee,"aria-label":N(H.value),title:N(H.value)},null):void 0])}})}),Ie({isFocused:y,isPristine:k,menu:s,search:v,filteredItems:E,select:w},g)}});export{Ze as V};
//# sourceMappingURL=VAutocomplete-DKMvZMyq.js.map
