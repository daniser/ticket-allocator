import{p as he,bw as ge,bx as ye,Z as Ve,by as be,bz as ke,g as we,d as Ce,r as R,s as M,O,f as b,bA as xe,$ as Fe,bB as Se,bC as Ie,bD as Ae,w as G,B as J,j as Pe,aR as W,i as n,ay as L,bE as De,W as T,bF as _e,bG as X,bH as Re,b1 as Me,H as Y,bI as Te,aX as Le,ax as Ee,bJ as Be,aY as Ke,bK as Ue}from"./app-bacc21a9.js";function Ne(l,p,t){if(p==null)return l;if(Array.isArray(p))throw new Error("Multiple matches is not implemented");return typeof p=="number"&&~p?n(L,null,[n("span",{class:"v-autocomplete__unmask"},[l.substr(0,p)]),n("span",{class:"v-autocomplete__mask"},[l.substr(p,t)]),n("span",{class:"v-autocomplete__unmask"},[l.substr(p+t)])]):l}const Oe=he({autoSelectFirst:{type:[Boolean,String]},search:String,...ge({filterKeys:["title"]}),...ye(),...Ve(be({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...ke({transition:!1})},"VAutocomplete"),ze=we()({name:"VAutocomplete",props:Oe(),emits:{"update:focused":l=>!0,"update:search":l=>!0,"update:modelValue":l=>!0,"update:menu":l=>!0},setup(l,p){let{slots:t}=p;const{t:Z}=Ce(),y=R(),V=M(!1),h=M(!0),I=R(!1),H=R(),E=O(l,"menu"),v=b({get:()=>E.value,set:e=>{var u;E.value&&!e&&((u=H.value)!=null&&u.ΨopenChildren)||(E.value=e)}}),o=M(-1),q=b(()=>{var e;return(e=y.value)==null?void 0:e.color}),{items:B,transformIn:Q,transformOut:ee}=xe(l),{textColorClasses:le,textColorStyles:te}=Fe(q),i=O(l,"search",""),m=O(l,"modelValue",[],e=>Q(e===null?[null]:Ue(e)),e=>{const u=ee(e);return l.multiple?u:u[0]??null}),C=Se(),{filteredItems:A,getMatches:ae}=Ie(l,B,()=>h.value?"":i.value),g=b(()=>m.value.map(e=>B.value.find(u=>l.valueComparator(u.value,e.value))||e)),k=b(()=>l.hideSelected?A.value.filter(e=>!g.value.some(u=>u.value===e.value)):A.value),K=b(()=>g.value.map(e=>e.props.value)),z=b(()=>g.value[o.value]),P=b(()=>{var u;return(l.autoSelectFirst===!0||l.autoSelectFirst==="exact"&&i.value===((u=k.value[0])==null?void 0:u.title))&&k.value.length>0&&!h.value&&!I.value}),U=b(()=>l.hideNoData&&!B.value.length||l.readonly||(C==null?void 0:C.isReadonly.value)),N=R(),{onListScroll:ue,onListKeydown:ne}=Ae(N,y);function oe(e){l.openOnClear&&(v.value=!0),i.value=""}function se(){U.value||(v.value=!0)}function ie(e){U.value||(V.value&&(e.preventDefault(),e.stopPropagation()),v.value=!v.value)}function re(e){var F,a,c;if(l.readonly||C!=null&&C.isReadonly.value)return;const u=y.value.selectionStart,r=K.value.length;if((o.value>-1||["Enter","ArrowDown","ArrowUp"].includes(e.key))&&e.preventDefault(),["Enter","ArrowDown"].includes(e.key)&&(v.value=!0),["Escape"].includes(e.key)&&(v.value=!1),["Enter","Escape","Tab"].includes(e.key)&&(P.value&&["Enter","Tab"].includes(e.key)&&x(A.value[0]),h.value=!0),e.key==="ArrowDown"&&P.value&&((F=N.value)==null||F.focus("next")),!!l.multiple){if(["Backspace","Delete"].includes(e.key)){if(o.value<0){e.key==="Backspace"&&!i.value&&(o.value=r-1);return}const s=o.value;z.value&&x(z.value),o.value=s>=r-1?r-2:s}if(e.key==="ArrowLeft"){if(o.value<0&&u>0)return;const s=o.value>-1?o.value-1:r-1;g.value[s]?o.value=s:(o.value=-1,y.value.setSelectionRange((a=i.value)==null?void 0:a.length,(c=i.value)==null?void 0:c.length))}if(e.key==="ArrowRight"){if(o.value<0)return;const s=o.value+1;g.value[s]?o.value=s:(o.value=-1,y.value.setSelectionRange(0,0))}}}function ce(e){i.value=e.target.value}function ve(){var e;V.value&&(h.value=!0,(e=y.value)==null||e.focus())}function de(e){V.value=!0,setTimeout(()=>{I.value=!0})}function fe(e){I.value=!1}function me(e){(e==null||e===""&&!l.multiple)&&(m.value=[])}const S=M(!1);function x(e){if(l.multiple){const u=K.value.findIndex(r=>l.valueComparator(r,e.value));if(u===-1)m.value=[...m.value,e];else{const r=[...m.value];r.splice(u,1),m.value=r}}else m.value=[e],S.value=!0,i.value=e.title,v.value=!1,h.value=!0,J(()=>S.value=!1)}return G(V,(e,u)=>{var r;e!==u&&(e?(S.value=!0,i.value=l.multiple?"":String(((r=g.value.at(-1))==null?void 0:r.props.title)??""),h.value=!0,J(()=>S.value=!1)):(!l.multiple&&!i.value?m.value=[]:P.value&&!I.value&&!g.value.some(F=>{let{value:a}=F;return a===k.value[0].value})&&x(k.value[0]),v.value=!1,i.value="",o.value=-1))}),G(i,e=>{!V.value||S.value||(e&&(v.value=!0),h.value=!e)}),Pe(()=>{const e=!!(l.chips||t.chip),u=!!(!l.hideNoData||k.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),r=m.value.length>0,[F]=W.filterProps(l);return n(W,T({ref:y},F,{modelValue:i.value,"onUpdate:modelValue":me,focused:V.value,"onUpdate:focused":a=>V.value=a,validationValue:m.externalValue,dirty:r,onInput:ce,class:["v-autocomplete",`v-autocomplete--${l.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":v.value,"v-autocomplete--chips":!!l.chips,"v-autocomplete--selection-slot":!!t.selection,"v-autocomplete--selecting-index":o.value>-1},l.class],style:l.style,readonly:l.readonly,placeholder:r?void 0:l.placeholder,"onClick:clear":oe,"onMousedown:control":se,onKeydown:re}),{...t,default:()=>n(L,null,[n(De,T({ref:H,modelValue:v.value,"onUpdate:modelValue":a=>v.value=a,activator:"parent",contentClass:"v-autocomplete__content",disabled:U.value,eager:l.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:l.transition,onAfterLeave:ve},l.menuProps),{default:()=>[u&&n(_e,{ref:N,selected:K.value,selectStrategy:l.multiple?"independent":"single-independent",onMousedown:a=>a.preventDefault(),onKeydown:ne,onFocusin:de,onFocusout:fe,onScrollPassive:ue,tabindex:"-1"},{default:()=>{var a,c,s;return[(a=t["prepend-item"])==null?void 0:a.call(t),!k.value.length&&!l.hideNoData&&(((c=t["no-data"])==null?void 0:c.call(t))??n(X,{title:Z(l.noDataText)},null)),n(Re,{renderless:!0,items:k.value},{default:w=>{var j;let{item:d,index:f,itemRef:pe}=w;const $=T(d.props,{ref:pe,key:f,active:P.value&&f===0?!0:void 0,onClick:()=>x(d)});return((j=t.item)==null?void 0:j.call(t,{item:d,index:f,props:$}))??n(X,$,{prepend:D=>{let{isSelected:_}=D;return n(L,null,[l.multiple&&!l.hideSelected?n(Me,{key:d.value,modelValue:_,ripple:!1,tabindex:"-1"},null):void 0,d.props.prependIcon&&n(Y,{icon:d.props.prependIcon},null)])},title:()=>{var D,_;return h.value?d.title:Ne(d.title,(D=ae(d))==null?void 0:D.title,((_=i.value)==null?void 0:_.length)??0)}})}}),(s=t["append-item"])==null?void 0:s.call(t)]}})]}),g.value.map((a,c)=>{var d;function s(f){f.stopPropagation(),f.preventDefault(),x(a)}const w={"onClick:close":s,onMousedown(f){f.preventDefault(),f.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return n("div",{key:a.value,class:["v-autocomplete__selection",c===o.value&&["v-autocomplete__selection--selected",le.value]],style:c===o.value?te.value:{}},[e?t.chip?n(Le,{key:"chip-defaults",defaults:{VChip:{closable:l.closableChips,size:"small",text:a.title}}},{default:()=>{var f;return[(f=t.chip)==null?void 0:f.call(t,{item:a,index:c,props:w})]}}):n(Te,T({key:"chip",closable:l.closableChips,size:"small",text:a.title},w),null):((d=t.selection)==null?void 0:d.call(t,{item:a,index:c}))??n("span",{class:"v-autocomplete__selection-text"},[a.title,l.multiple&&c<g.value.length-1&&n("span",{class:"v-autocomplete__selection-comma"},[Ee(",")])])])})]),"append-inner":function(){var w;for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return n(L,null,[(w=t["append-inner"])==null?void 0:w.call(t,...c),l.menuIcon?n(Y,{class:"v-autocomplete__menu-icon",icon:l.menuIcon,onMousedown:ie,onClick:Be},null):void 0])}})}),Ke({isFocused:V,isPristine:h,menu:v,search:i,filteredItems:A,select:x},y)}});export{ze as V};
//# sourceMappingURL=VAutocomplete-d2d297f1.js.map
