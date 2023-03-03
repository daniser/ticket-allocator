import{m as B,aZ as ee,a_ as ae,a$ as le,b0 as te,b1 as ne,b2 as ue,r as V,aq as L,d as w,b3 as oe,b4 as se,b5 as ie,w as O,n as K,j as H,b6 as re,k as u,a9 as j,b7 as ce,ax as D,b8 as ve,b9 as $,aN as de,V as fe,ba as me,al as pe,aH as he,aV as q,bb as Ve,bc as be,bd as ye}from"./app-03c727dd.js";function ke(e,i,l){if(i==null)return e;if(Array.isArray(i))throw new Error("Multiple matches is not implemented");return typeof i=="number"&&~i?u(j,null,[u("span",{class:"v-autocomplete__unmask"},[e.substr(0,i)]),u("span",{class:"v-autocomplete__mask"},[e.substr(i,l)]),u("span",{class:"v-autocomplete__unmask"},[e.substr(i+l)])]):e}const Ce=B()({name:"VAutocomplete",props:{search:String,...ee({filterKeys:["title"]}),...ae(),...le(te({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...ne({transition:!1})},emits:{"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,i){let{slots:l}=i;const{t:x}=ue(),h=V(),r=V(!1),d=V(!0),F=V(),f=L(e,"menu"),n=w({get:()=>f.value,set:a=>{var t;f.value&&!a&&((t=F.value)!=null&&t.ΨopenChildren)||(f.value=a)}}),{items:c,transformIn:R,transformOut:S}=oe(e),s=L(e,"search",""),m=L(e,"modelValue",[],a=>R(Ve(a)),a=>{const t=S(a);return e.multiple?t:t[0]??null}),b=se(),{filteredItems:T,getMatches:z}=ie(e,c,w(()=>d.value?void 0:s.value)),k=w(()=>m.value.map(a=>c.value.find(t=>e.valueComparator(t.value,a.value))||a)),M=w(()=>e.hideSelected?T.value.filter(a=>!k.value.some(t=>t.value===a.value)):T.value),N=w(()=>k.value.map(a=>a.props.value)),E=V();function Z(a){e.openOnClear&&(n.value=!0),s.value=""}function G(){e.hideNoData&&!c.value.length||e.readonly||b!=null&&b.isReadonly.value||(n.value=!0)}function J(a){var t,p;e.readonly||b!=null&&b.isReadonly.value||(["Enter","ArrowDown","ArrowUp"].includes(a.key)&&a.preventDefault(),["Enter","ArrowDown"].includes(a.key)&&(n.value=!0),["Escape"].includes(a.key)&&(n.value=!1),["Enter","Escape","Tab"].includes(a.key)&&(d.value=!0),a.key==="ArrowDown"?(t=E.value)==null||t.focus("next"):a.key==="ArrowUp"&&((p=E.value)==null||p.focus("prev")))}function Q(a){s.value=a.target.value}function W(){r.value&&(d.value=!0)}function X(a){r.value=!0}function Y(a){var t;a.relatedTarget==null&&((t=h.value)==null||t.focus())}const g=V(!1);function _(a){if(e.multiple){const t=N.value.findIndex(p=>e.valueComparator(p,a.value));if(t===-1)m.value=[...m.value,a],s.value="";else{const p=[...m.value];p.splice(t,1),m.value=p}}else m.value=[a],g.value=!0,l.selection||(s.value=a.title),n.value=!1,d.value=!0,K(()=>g.value=!1)}return O(r,a=>{var t;a?(g.value=!0,s.value=e.multiple||l.selection?"":String(((t=k.value.at(-1))==null?void 0:t.props.title)??""),d.value=!0,K(()=>g.value=!1)):(n.value=!1,s.value="")}),O(s,a=>{!r.value||g.value||(a&&(n.value=!0),d.value=!a)}),H(()=>{const a=!!(e.chips||l.chip),t=!!(!e.hideNoData||M.value.length||l.prepend||l.append||l["no-data"]),[p]=re(e);return u(he,D({ref:h},p,{modelValue:s.value,"onUpdate:modelValue":o=>{o==null&&(m.value=[])},validationValue:m.externalValue,dirty:m.value.length>0,onInput:Q,class:["v-autocomplete",{"v-autocomplete--active-menu":n.value,"v-autocomplete--chips":!!e.chips,[`v-autocomplete--${e.multiple?"multiple":"single"}`]:!0,"v-autocomplete--selection-slot":!!l.selection}],appendInnerIcon:e.menuIcon,readonly:e.readonly,"onClick:clear":Z,"onMousedown:control":G,onFocus:()=>r.value=!0,onBlur:()=>r.value=!1,onKeydown:J}),{...l,default:()=>u(j,null,[u(ce,D({ref:F,modelValue:n.value,"onUpdate:modelValue":o=>n.value=o,activator:"parent",contentClass:"v-autocomplete__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:W},e.menuProps),{default:()=>[t&&u(ve,{ref:E,selected:N.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:o=>o.preventDefault(),onFocusin:X,onFocusout:Y},{default:()=>{var o,y,P;return[!M.value.length&&!e.hideNoData&&(((o=l["no-data"])==null?void 0:o.call(l))??u($,{title:x(e.noDataText)},null)),(y=l["prepend-item"])==null?void 0:y.call(l),M.value.map((v,C)=>{var U;return((U=l.item)==null?void 0:U.call(l,{item:v,index:C,props:D(v.props,{onClick:()=>_(v)})}))??u($,D({key:C},v.props,{onClick:()=>_(v)}),{prepend:I=>{let{isSelected:A}=I;return e.multiple&&!e.hideSelected?u(de,{modelValue:A,ripple:!1},null):void 0},title:()=>{var I,A;return d.value?v.title:ke(v.title,(I=z(v))==null?void 0:I.title,((A=s.value)==null?void 0:A.length)??0)}})}),(P=l["append-item"])==null?void 0:P.call(l)]}})]}),k.value.map((o,y)=>{function P(C){C.stopPropagation(),C.preventDefault(),_(o)}const v={"onClick:close":P,modelValue:!0,"onUpdate:modelValue":void 0};return u("div",{key:o.value,class:"v-autocomplete__selection"},[a?u(fe,{defaults:{VChip:{closable:e.closableChips,size:"small",text:o.title}}},{default:()=>[l.chip?l.chip({item:o,index:y,props:v}):u(me,v,null)]}):l.selection?l.selection({item:o,index:y}):u("span",{class:"v-autocomplete__selection-text"},[o.title,e.multiple&&y<k.value.length-1&&u("span",{class:"v-autocomplete__selection-comma"},[pe(",")])])])})])})}),q({isFocused:r,isPristine:d,menu:n,search:s,filteredItems:T,select:_},h)}}),we=B()({name:"VForm",props:{...be()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,i){let{slots:l,emit:x}=i;const h=ye(e),r=V();function d(f){f.preventDefault(),h.reset()}function F(f){const n=f,c=h.validate();n.then=c.then.bind(c),n.catch=c.catch.bind(c),n.finally=c.finally.bind(c),x("submit",n),n.defaultPrevented||c.then(R=>{var s;let{valid:S}=R;S&&((s=r.value)==null||s.submit())}),n.preventDefault()}return H(()=>{var f;return u("form",{ref:r,class:"v-form",novalidate:!0,onReset:d,onSubmit:F},[(f=l.default)==null?void 0:f.call(l,h)])}),q(h,r)}});export{we as V,Ce as a};
//# sourceMappingURL=VForm-44275cef.js.map
