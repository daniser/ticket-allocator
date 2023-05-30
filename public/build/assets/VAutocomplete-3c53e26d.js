import{p as ve,bv as de,bw as fe,m as me,bx as pe,by as he,t as ge,_ as ye,r as R,s as T,Q as z,c as k,bz as Ve,v as ke,bA as Ce,bB as we,w as $,n as G,x as be,aP as Q,y as n,am as L,bC as Fe,z as E,bD as xe,bE as W,b0 as Ae,M as X,bF as Ie,aW as Pe,al as Se,bG as De,aX as _e,bH as Me}from"./app-899d7b9f.js";function Re(l,h,a){if(h==null)return l;if(Array.isArray(h))throw new Error("Multiple matches is not implemented");return typeof h=="number"&&~h?n(L,null,[n("span",{class:"v-autocomplete__unmask"},[l.substr(0,h)]),n("span",{class:"v-autocomplete__mask"},[l.substr(h,a)]),n("span",{class:"v-autocomplete__unmask"},[l.substr(h+a)])]):l}const Te=ve({autoSelectFirst:{type:[Boolean,String]},search:String,...de({filterKeys:["title"]}),...fe(),...me(pe({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...he({transition:!1})},"VAutocomplete"),Le=ge()({name:"VAutocomplete",props:Te(),emits:{"update:focused":l=>!0,"update:search":l=>!0,"update:modelValue":l=>!0,"update:menu":l=>!0},setup(l,h){let{slots:a}=h;const{t:j}=ye(),C=R(),V=T(!1),g=T(!0),I=R(!1),O=R(),U=z(l,"menu"),d=k({get:()=>U.value,set:e=>{var u;U.value&&!e&&((u=O.value)!=null&&u.ΨopenChildren)||(U.value=e)}}),o=T(-1),q=k(()=>{var e;return(e=C.value)==null?void 0:e.color}),{items:B,transformIn:J,transformOut:Y}=Ve(l),{textColorClasses:Z,textColorStyles:ee}=ke(q),i=z(l,"search",""),p=z(l,"modelValue",[],e=>J(Me(e)),e=>{const u=Y(e);return l.multiple?u:u[0]??null}),b=Ce(),{filteredItems:P,getMatches:le}=we(l,B,k(()=>g.value?void 0:i.value)),y=k(()=>p.value.map(e=>B.value.find(u=>l.valueComparator(u.value,e.value))||e)),w=k(()=>l.hideSelected?P.value.filter(e=>!y.value.some(u=>u.value===e.value)):P.value),N=k(()=>y.value.map(e=>e.props.value)),H=k(()=>y.value[o.value]),S=k(()=>{var u;return(l.autoSelectFirst===!0||l.autoSelectFirst==="exact"&&i.value===((u=w.value[0])==null?void 0:u.title))&&w.value.length>0&&!g.value&&!I.value}),D=R();function ae(e){l.openOnClear&&(d.value=!0),i.value=""}function te(){l.hideNoData&&!B.value.length||l.readonly||b!=null&&b.isReadonly.value||(d.value=!0)}function ue(e){V.value&&(e.preventDefault(),e.stopPropagation()),d.value=!d.value}function ne(e){var x,t,v,f,s;if(l.readonly||b!=null&&b.isReadonly.value)return;const u=C.value.selectionStart,c=N.value.length;if((o.value>-1||["Enter","ArrowDown","ArrowUp"].includes(e.key))&&e.preventDefault(),["Enter","ArrowDown"].includes(e.key)&&(d.value=!0),["Escape"].includes(e.key)&&(d.value=!1),["Enter","Escape","Tab"].includes(e.key)&&(S.value&&["Enter","Tab"].includes(e.key)&&F(P.value[0]),g.value=!0),e.key==="ArrowDown"?((x=D.value)==null||x.focus("next"),S.value&&((t=D.value)==null||t.focus("next"))):e.key==="ArrowUp"&&((v=D.value)==null||v.focus("prev")),!!l.multiple){if(["Backspace","Delete"].includes(e.key)){if(o.value<0){e.key==="Backspace"&&!i.value&&(o.value=c-1);return}const r=o.value;H.value&&F(H.value),o.value=r>=c-1?c-2:r}if(e.key==="ArrowLeft"){if(o.value<0&&u>0)return;const r=o.value>-1?o.value-1:c-1;y.value[r]?o.value=r:(o.value=-1,C.value.setSelectionRange((f=i.value)==null?void 0:f.length,(s=i.value)==null?void 0:s.length))}if(e.key==="ArrowRight"){if(o.value<0)return;const r=o.value+1;y.value[r]?o.value=r:(o.value=-1,C.value.setSelectionRange(0,0))}}}function oe(e){i.value=e.target.value}function se(){var e;V.value&&(g.value=!0,(e=C.value)==null||e.focus())}function ie(e){V.value=!0,setTimeout(()=>{I.value=!0})}function ce(e){I.value=!1}function re(e){(e==null||e===""&&!l.multiple)&&(p.value=[])}const A=T(!1);function F(e){if(l.multiple){const u=N.value.findIndex(c=>l.valueComparator(c,e.value));if(u===-1)p.value=[...p.value,e];else{const c=[...p.value];c.splice(u,1),p.value=c}}else p.value=[e],A.value=!0,i.value=e.title,d.value=!1,g.value=!0,G(()=>A.value=!1)}return $(V,(e,u)=>{var c;e!==u&&(e?(A.value=!0,i.value=l.multiple?"":String(((c=y.value.at(-1))==null?void 0:c.props.title)??""),g.value=!0,G(()=>A.value=!1)):(!l.multiple&&!i.value?p.value=[]:S.value&&!I.value&&!y.value.some(x=>{let{value:t}=x;return t===w.value[0].value})&&F(w.value[0]),d.value=!1,i.value="",o.value=-1))}),$(i,e=>{!V.value||A.value||(e&&(d.value=!0),g.value=!e)}),be(()=>{const e=!!(l.chips||a.chip),u=!!(!l.hideNoData||w.value.length||a.prepend||a.append||a["no-data"]),c=p.value.length>0,[x]=Q.filterProps(l);return n(Q,E({ref:C},x,{modelValue:i.value,"onUpdate:modelValue":re,focused:V.value,"onUpdate:focused":t=>V.value=t,validationValue:p.externalValue,dirty:c,onInput:oe,class:["v-autocomplete",`v-autocomplete--${l.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":d.value,"v-autocomplete--chips":!!l.chips,"v-autocomplete--selection-slot":!!a.selection,"v-autocomplete--selecting-index":o.value>-1},l.class],style:l.style,readonly:l.readonly,placeholder:c?void 0:l.placeholder,"onClick:clear":ae,"onMousedown:control":te,onKeydown:ne}),{...a,default:()=>n(L,null,[n(Fe,E({ref:O,modelValue:d.value,"onUpdate:modelValue":t=>d.value=t,activator:"parent",contentClass:"v-autocomplete__content",eager:l.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:l.transition,onAfterLeave:se},l.menuProps),{default:()=>[u&&n(xe,{ref:D,selected:N.value,selectStrategy:l.multiple?"independent":"single-independent",onMousedown:t=>t.preventDefault(),onFocusin:ie,onFocusout:ce},{default:()=>{var t,v,f;return[!w.value.length&&!l.hideNoData&&(((t=a["no-data"])==null?void 0:t.call(a))??n(W,{title:j(l.noDataText)},null)),(v=a["prepend-item"])==null?void 0:v.call(a),w.value.map((s,r)=>{var K;const m=E(s.props,{key:r,active:S.value&&r===0?!0:void 0,onClick:()=>F(s)});return((K=a.item)==null?void 0:K.call(a,{item:s,index:r,props:m}))??n(W,m,{prepend:_=>{let{isSelected:M}=_;return n(L,null,[l.multiple&&!l.hideSelected?n(Ae,{key:s.value,modelValue:M,ripple:!1,tabindex:"-1"},null):void 0,s.props.prependIcon&&n(X,{icon:s.props.prependIcon},null)])},title:()=>{var _,M;return g.value?s.title:Re(s.title,(_=le(s))==null?void 0:_.title,((M=i.value)==null?void 0:M.length)??0)}})}),(f=a["append-item"])==null?void 0:f.call(a)]}})]}),y.value.map((t,v)=>{var r;function f(m){m.stopPropagation(),m.preventDefault(),F(t)}const s={"onClick:close":f,onMousedown(m){m.preventDefault(),m.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return n("div",{key:t.value,class:["v-autocomplete__selection",v===o.value&&["v-autocomplete__selection--selected",Z.value]],style:v===o.value?ee.value:{}},[e?a.chip?n(Pe,{key:"chip-defaults",defaults:{VChip:{closable:l.closableChips,size:"small",text:t.title}}},{default:()=>{var m;return[(m=a.chip)==null?void 0:m.call(a,{item:t,index:v,props:s})]}}):n(Ie,E({key:"chip",closable:l.closableChips,size:"small",text:t.title},s),null):((r=a.selection)==null?void 0:r.call(a,{item:t,index:v}))??n("span",{class:"v-autocomplete__selection-text"},[t.title,l.multiple&&v<y.value.length-1&&n("span",{class:"v-autocomplete__selection-comma"},[Se(",")])])])})]),"append-inner":function(){var s;for(var t=arguments.length,v=new Array(t),f=0;f<t;f++)v[f]=arguments[f];return n(L,null,[(s=a["append-inner"])==null?void 0:s.call(a,...v),l.menuIcon?n(X,{class:"v-autocomplete__menu-icon",icon:l.menuIcon,onMousedown:ue,onClick:De},null):void 0])}})}),_e({isFocused:V,isPristine:g,menu:d,search:i,filteredItems:P,select:F},C)}});export{Le as V};
//# sourceMappingURL=VAutocomplete-3c53e26d.js.map
