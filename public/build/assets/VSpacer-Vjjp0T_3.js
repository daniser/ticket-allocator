import{bl as kt,g as R,p as _,h as E,f as s,l as ve,n as ge,H as Le,I as D,ay as wt,aB as pt,aF as Vt,a as Re,u as Oe,s as Ne,d as p,K as ae,aI as It,ap as oe,z as A,bm as Tt,m as Ee,aM as He,aQ as Me,aS as Ge,E as W,e as K,o as U,r as G,b6 as le,bn as je,w as me,bo as We,aX as ie,a_ as de,b as J,bp as Z,bq as Dt,br as re,bs as _t,bt as ee,V as j,B as F,aK as Bt,bu as Ct,L as Ft,aw as L,bv as pe,y as Ve,bw as At,aW as $t,bx as Lt,by as Rt,aC as Ot,aJ as Nt,F as q,aP as Et,bz as be,$ as Ie,a1 as Te,a7 as De,a0 as Ht,bA as ce,bB as te,bC as Mt,at as Gt,au as jt}from"./app-Dwjgz7ko.js";import{e as ze,j as Wt,f as zt,l as qt}from"./filter-njj4Uamm.js";import{V as he}from"./VCheckboxBtn-DJ6UKOWh.js";import{V as _e,m as Kt}from"./VTable-Cu7UKa6H.js";/* empty css              */function Be(e,l,t){return Object.keys(e).filter(a=>kt(a)&&a.endsWith(l)).reduce((a,n)=>(a[n.slice(0,-l.length)]=r=>e[n](r,t(r)),a),{})}const Ut=_({text:String,...ge(),...ve()},"VToolbarTitle"),Qt=R()({name:"VToolbarTitle",props:Ut(),setup(e,l){let{slots:t}=l;return E(()=>{const a=!!(t.default||t.text||e.text);return s(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var n;return[a&&s("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(n=t.default)==null?void 0:n.call(t)])]}})}),{}}}),Xt=[null,"prominent","default","comfortable","compact"],Jt=_({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Xt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ge(),...ge(),...Me(),...He(),...ve({tag:"header"}),...Ee()},"VToolbar"),ja=R()({name:"VToolbar",props:Jt(),setup(e,l){var S;let{slots:t}=l;const{backgroundColorClasses:a,backgroundColorStyles:n}=Le(D(e,"color")),{borderClasses:r}=wt(e),{elevationClasses:o}=pt(e),{roundedClasses:u}=Vt(e),{themeClasses:c}=Re(e),{rtlClasses:f}=Oe(),g=Ne(!!(e.extended||(S=t.extension)!=null&&S.call(t))),h=p(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),v=p(()=>g.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ae({VBtn:{variant:"text"}}),E(()=>{var x;const b=!!(e.title||t.title),P=!!(t.image||e.image),m=(x=t.extension)==null?void 0:x.call(t);return g.value=!!(e.extended||m),s(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},a.value,r.value,o.value,u.value,c.value,f.value,e.class],style:[n.value,e.style]},{default:()=>[P&&s("div",{key:"image",class:"v-toolbar__image"},[t.image?s(oe,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):s(It,{key:"image-img",cover:!0,src:e.image},null)]),s(oe,{defaults:{VTabs:{height:A(h.value)}}},{default:()=>{var i,T,B;return[s("div",{class:"v-toolbar__content",style:{height:A(h.value)}},[t.prepend&&s("div",{class:"v-toolbar__prepend"},[(i=t.prepend)==null?void 0:i.call(t)]),b&&s(Qt,{key:"title",text:e.title},{text:t.title}),(T=t.default)==null?void 0:T.call(t),t.append&&s("div",{class:"v-toolbar__append"},[(B=t.append)==null?void 0:B.call(t)])])]}}),s(oe,{defaults:{VTabs:{height:A(v.value)}}},{default:()=>[s(Tt,null,{default:()=>[g.value&&s("div",{class:"v-toolbar__extension",style:{height:A(v.value)}},[m])]})]})]})}),{contentHeight:h,extensionHeight:v}}}),Yt=_({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),qe=Symbol.for("vuetify:datatable:expanded");function Zt(e){const l=D(e,"expandOnClick"),t=W(e,"expanded",e.expanded,u=>new Set(u),u=>[...u.values()]);function a(u,c){const f=new Set(t.value);c?f.add(u.value):f.delete(u.value),t.value=f}function n(u){return t.value.has(u.value)}function r(u){a(u,!n(u))}const o={expand:a,expanded:t,expandOnClick:l,isExpanded:n,toggleExpand:r};return K(qe,o),o}function Ke(){const e=U(qe);if(!e)throw new Error("foo");return e}const ea=_({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),Ue=Symbol.for("vuetify:data-table-group");function ta(e){return{groupBy:W(e,"groupBy")}}function aa(e){const{disableSort:l,groupBy:t,sortBy:a}=e,n=G(new Set),r=p(()=>t.value.map(g=>({...g,order:g.order??!1})).concat(l!=null&&l.value?[]:a.value));function o(g){return n.value.has(g.id)}function u(g){const h=new Set(n.value);o(g)?h.delete(g.id):h.add(g.id),n.value=h}function c(g){function h(v){const S=[];for(const b of v.items)"type"in b&&b.type==="group"?S.push(...h(b)):S.push(b);return[...new Set(S)]}return h({items:g})}const f={sortByWithGroups:r,toggleGroup:u,opened:n,groupBy:t,extractRows:c,isGroupOpen:o};return K(Ue,f),f}function Qe(){const e=U(Ue);if(!e)throw new Error("Missing group!");return e}function la(e,l){if(!e.length)return[];const t=new Map;for(const a of e){const n=le(a.raw,l);t.has(n)||t.set(n,[]),t.get(n).push(a)}return t}function Xe(e,l){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=la(e,l[0]),r=[],o=l.slice(1);return n.forEach((u,c)=>{const f=l[0],g=`${a}_${f}_${c}`;r.push({depth:t,id:g,key:f,value:c,items:o.length?Xe(u,o,t+1,g):u,type:"group"})}),r}function Je(e,l){const t=[];for(const a of e)"type"in a&&a.type==="group"?(a.value!=null&&t.push(a),(l.has(a.id)||a.value==null)&&t.push(...Je(a.items,l))):t.push(a);return t}function na(e,l,t){return{flatItems:p(()=>{if(!l.value.length)return e.value;const n=Xe(e.value,l.value.map(r=>r.key));return Je(n,t.value)})}}function ra(e){let{page:l,itemsPerPage:t,sortBy:a,groupBy:n,search:r}=e;const o=je("VDataTable"),u=p(()=>({page:l.value,itemsPerPage:t.value,sortBy:a.value,groupBy:n.value,search:r.value}));let c=null;me(u,()=>{We(c,u.value)||(c&&c.search!==u.value.search&&(l.value=1),o.emit("update:options",u.value),c=u.value)},{deep:!0,immediate:!0})}const sa=_({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Ye=Symbol.for("vuetify:data-table-pagination");function ua(e){const l=W(e,"page",void 0,a=>+(a??1)),t=W(e,"itemsPerPage",void 0,a=>+(a??10));return{page:l,itemsPerPage:t}}function oa(e){const{page:l,itemsPerPage:t,itemsLength:a}=e,n=p(()=>t.value===-1?0:t.value*(l.value-1)),r=p(()=>t.value===-1?a.value:Math.min(a.value,n.value+t.value)),o=p(()=>t.value===-1||a.value===0?1:Math.ceil(a.value/t.value));me([l,o],()=>{l.value>o.value&&(l.value=o.value)});function u(v){t.value=v,l.value=1}function c(){l.value=ie(l.value+1,1,o.value)}function f(){l.value=ie(l.value-1,1,o.value)}function g(v){l.value=ie(v,1,o.value)}const h={page:l,itemsPerPage:t,startIndex:n,stopIndex:r,pageCount:o,itemsLength:a,nextPage:c,prevPage:f,setPage:g,setItemsPerPage:u};return K(Ye,h),h}function ia(){const e=U(Ye);if(!e)throw new Error("Missing pagination!");return e}function da(e){const l=je("usePaginatedItems"),{items:t,startIndex:a,stopIndex:n,itemsPerPage:r}=e,o=p(()=>r.value<=0?t.value:t.value.slice(a.value,n.value));return me(o,u=>{l.emit("update:currentItems",u)},{immediate:!0}),{paginatedItems:o}}const ca={showSelectAll:!1,allSelected:()=>[],select:e=>{var a;let{items:l,value:t}=e;return new Set(t?[(a=l[0])==null?void 0:a.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},Ze={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:t,selected:a}=e;for(const n of l)t?a.add(n.value):a.delete(n.value);return a},selectAll:e=>{let{value:l,currentPage:t,selected:a}=e;return Ze.select({items:t,value:l,selected:a})}},et={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:t,selected:a}=e;for(const n of l)t?a.add(n.value):a.delete(n.value);return a},selectAll:e=>{let{value:l,allItems:t,selected:a}=e;return et.select({items:t,value:l,selected:a})}},fa=_({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:We}},"DataTable-select"),tt=Symbol.for("vuetify:data-table-selection");function va(e,l){let{allItems:t,currentPage:a}=l;const n=W(e,"modelValue",e.modelValue,x=>new Set(de(x).map(i=>{var T;return((T=t.value.find(B=>e.valueComparator(i,B.value)))==null?void 0:T.value)??i})),x=>[...x.values()]),r=p(()=>t.value.filter(x=>x.selectable)),o=p(()=>a.value.filter(x=>x.selectable)),u=p(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return ca;case"all":return et;case"page":default:return Ze}});function c(x){return de(x).every(i=>n.value.has(i.value))}function f(x){return de(x).some(i=>n.value.has(i.value))}function g(x,i){const T=u.value.select({items:x,value:i,selected:new Set(n.value)});n.value=T}function h(x){g([x],!c([x]))}function v(x){const i=u.value.selectAll({value:x,allItems:r.value,currentPage:o.value,selected:new Set(n.value)});n.value=i}const S=p(()=>n.value.size>0),b=p(()=>{const x=u.value.allSelected({allItems:r.value,currentPage:o.value});return!!x.length&&c(x)}),P=p(()=>u.value.showSelectAll),m={toggleSelect:h,select:g,selectAll:v,isSelected:c,isSomeSelected:f,someSelected:S,allSelected:b,showSelectAll:P};return K(tt,m),m}function se(){const e=U(tt);if(!e)throw new Error("Missing selection!");return e}const ga=_({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),at=Symbol.for("vuetify:data-table-sort");function ma(e){const l=W(e,"sortBy"),t=D(e,"mustSort"),a=D(e,"multiSort");return{sortBy:l,mustSort:t,multiSort:a}}function ba(e){const{sortBy:l,mustSort:t,multiSort:a,page:n}=e,r=c=>{if(c.key==null)return;let f=l.value.map(h=>({...h}))??[];const g=f.find(h=>h.key===c.key);g?g.order==="desc"?t.value?g.order="asc":f=f.filter(h=>h.key!==c.key):g.order="desc":a.value?f=[...f,{key:c.key,order:"asc"}]:f=[{key:c.key,order:"asc"}],l.value=f,n&&(n.value=1)};function o(c){return!!l.value.find(f=>f.key===c.key)}const u={sortBy:l,toggleSort:r,isSorted:o};return K(at,u),u}function lt(){const e=U(at);if(!e)throw new Error("Missing sort!");return e}function ha(e,l,t,a){const n=J();return{sortedItems:p(()=>{var o,u;return t.value.length?ya(l.value,t.value,n.current.value,{transform:a==null?void 0:a.transform,sortFunctions:{...e.customKeySort,...(o=a==null?void 0:a.sortFunctions)==null?void 0:o.value},sortRawFunctions:(u=a==null?void 0:a.sortRawFunctions)==null?void 0:u.value}):l.value})}}function ya(e,l,t,a){const n=new Intl.Collator(t,{sensitivity:"accent",usage:"sort"});return e.map(o=>[o,a!=null&&a.transform?a.transform(o):o]).sort((o,u)=>{var c,f;for(let g=0;g<l.length;g++){let h=!1;const v=l[g].key,S=l[g].order??"asc";if(S===!1)continue;let b=le(o[1],v),P=le(u[1],v),m=o[0].raw,x=u[0].raw;if(S==="desc"&&([b,P]=[P,b],[m,x]=[x,m]),(c=a==null?void 0:a.sortRawFunctions)!=null&&c[v]){const i=a.sortRawFunctions[v](m,x);if(i==null)continue;if(h=!0,i)return i}if((f=a==null?void 0:a.sortFunctions)!=null&&f[v]){const i=a.sortFunctions[v](b,P);if(i==null)continue;if(h=!0,i)return i}if(!h){if(b instanceof Date&&P instanceof Date)return b.getTime()-P.getTime();if([b,P]=[b,P].map(i=>i!=null?i.toString().toLocaleLowerCase():i),b!==P)return Z(b)&&Z(P)?0:Z(b)?-1:Z(P)?1:!isNaN(b)&&!isNaN(P)?Number(b)-Number(P):n.compare(b,P)}}return 0}).map(o=>{let[u]=o;return u})}function xa(){const e=G([]);Dt(()=>e.value=[]);function l(t,a){e.value[a]=t}return{refs:e,updateRef:l}}const Sa=_({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:L,default:"$first"},prevIcon:{type:L,default:"$prev"},nextIcon:{type:L,default:"$next"},lastIcon:{type:L,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...Ge(),...ge(),...Ft(),...Me(),...He(),...Ct(),...ve({tag:"nav"}),...Ee(),...Bt({variant:"text"})},"VPagination"),Ce=R()({name:"VPagination",props:Sa(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,l){let{slots:t,emit:a}=l;const n=W(e,"modelValue"),{t:r,n:o}=J(),{isRtl:u}=Oe(),{themeClasses:c}=Re(e),{width:f}=re(),g=Ne(-1);ae(void 0,{scoped:!0});const{resizeRef:h}=_t(y=>{if(!y.length)return;const{target:d,contentRect:k}=y[0],w=d.querySelector(".v-pagination__list > *");if(!w)return;const I=k.width,C=w.offsetWidth+parseFloat(getComputedStyle(w).marginRight)*2;g.value=P(I,C)}),v=p(()=>parseInt(e.length,10)),S=p(()=>parseInt(e.start,10)),b=p(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):g.value>=0?g.value:P(f.value,58));function P(y,d){const k=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((y-d*k)/d).toFixed(2)))}const m=p(()=>{if(v.value<=0||isNaN(v.value)||v.value>Number.MAX_SAFE_INTEGER)return[];if(b.value<=0)return[];if(b.value===1)return[n.value];if(v.value<=b.value)return ee(v.value,S.value);const y=b.value%2===0,d=y?b.value/2:Math.floor(b.value/2),k=y?d:d+1,w=v.value-d;if(k-n.value>=0)return[...ee(Math.max(1,b.value-1),S.value),e.ellipsis,v.value];if(n.value-w>=(y?1:0)){const I=b.value-1,C=v.value-I+S.value;return[S.value,e.ellipsis,...ee(I,C)]}else{const I=Math.max(1,b.value-2),C=I===1?n.value:n.value-Math.ceil(I/2)+S.value;return[S.value,e.ellipsis,...ee(I,C),e.ellipsis,v.value]}});function x(y,d,k){y.preventDefault(),n.value=d,k&&a(k,d)}const{refs:i,updateRef:T}=xa();ae({VPaginationBtn:{color:D(e,"color"),border:D(e,"border"),density:D(e,"density"),size:D(e,"size"),variant:D(e,"variant"),rounded:D(e,"rounded"),elevation:D(e,"elevation")}});const B=p(()=>m.value.map((y,d)=>{const k=w=>T(w,d);if(typeof y=="string")return{isActive:!1,key:`ellipsis-${d}`,page:y,props:{ref:k,ellipsis:!0,icon:!0,disabled:!0}};{const w=y===n.value;return{isActive:w,key:y,page:o(y),props:{ref:k,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:w?e.activeColor:e.color,"aria-current":w,"aria-label":r(w?e.currentPageAriaLabel:e.pageAriaLabel,y),onClick:I=>x(I,y)}}}})),V=p(()=>{const y=!!e.disabled||n.value<=S.value,d=!!e.disabled||n.value>=S.value+v.value-1;return{first:e.showFirstLastPage?{icon:u.value?e.lastIcon:e.firstIcon,onClick:k=>x(k,S.value,"first"),disabled:y,"aria-label":r(e.firstAriaLabel),"aria-disabled":y}:void 0,prev:{icon:u.value?e.nextIcon:e.prevIcon,onClick:k=>x(k,n.value-1,"prev"),disabled:y,"aria-label":r(e.previousAriaLabel),"aria-disabled":y},next:{icon:u.value?e.prevIcon:e.nextIcon,onClick:k=>x(k,n.value+1,"next"),disabled:d,"aria-label":r(e.nextAriaLabel),"aria-disabled":d},last:e.showFirstLastPage?{icon:u.value?e.firstIcon:e.lastIcon,onClick:k=>x(k,S.value+v.value-1,"last"),disabled:d,"aria-label":r(e.lastAriaLabel),"aria-disabled":d}:void 0}});function O(){var d;const y=n.value-S.value;(d=i.value[y])==null||d.$el.focus()}function H(y){y.key===pe.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,Ve(O)):y.key===pe.right&&!e.disabled&&n.value<S.value+v.value-1&&(n.value=n.value+1,Ve(O))}return E(()=>s(e.tag,{ref:h,class:["v-pagination",c.value,e.class],style:e.style,role:"navigation","aria-label":r(e.ariaLabel),onKeydown:H,"data-test":"v-pagination-root"},{default:()=>[s("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&s("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[t.first?t.first(V.value.first):s(j,F({_as:"VPaginationBtn"},V.value.first),null)]),s("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[t.prev?t.prev(V.value.prev):s(j,F({_as:"VPaginationBtn"},V.value.prev),null)]),B.value.map((y,d)=>s("li",{key:y.key,class:["v-pagination__item",{"v-pagination__item--is-active":y.isActive}],"data-test":"v-pagination-item"},[t.item?t.item(y):s(j,F({_as:"VPaginationBtn"},y.props),{default:()=>[y.page]})])),s("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[t.next?t.next(V.value.next):s(j,F({_as:"VPaginationBtn"},V.value.next),null)]),e.showFirstLastPage&&s("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[t.last?t.last(V.value.last):s(j,F({_as:"VPaginationBtn"},V.value.last),null)])])]})),{}}}),nt=_({prevIcon:{type:L,default:"$prev"},nextIcon:{type:L,default:"$next"},firstIcon:{type:L,default:"$first"},lastIcon:{type:L,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),Fe=R()({name:"VDataTableFooter",props:nt(),setup(e,l){let{slots:t}=l;const{t:a}=J(),{page:n,pageCount:r,startIndex:o,stopIndex:u,itemsLength:c,itemsPerPage:f,setItemsPerPage:g}=ia(),h=p(()=>e.itemsPerPageOptions.map(v=>typeof v=="number"?{value:v,title:v===-1?a("$vuetify.dataFooter.itemsPerPageAll"):String(v)}:{...v,title:isNaN(Number(v.title))?a(v.title):v.title}));return E(()=>{var S;const v=Ce.filterProps(e);return s("div",{class:"v-data-table-footer"},[(S=t.prepend)==null?void 0:S.call(t),s("div",{class:"v-data-table-footer__items-per-page"},[s("span",null,[a(e.itemsPerPageText)]),s(ze,{items:h.value,modelValue:f.value,"onUpdate:modelValue":b=>g(Number(b)),density:"compact",variant:"outlined","hide-details":!0},null)]),s("div",{class:"v-data-table-footer__info"},[s("div",null,[a(e.pageText,c.value?o.value+1:0,u.value,c.value)])]),s("div",{class:"v-data-table-footer__pagination"},[s(Ce,F({modelValue:n.value,"onUpdate:modelValue":b=>n.value=b,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},v),null)])])}),{}}}),ne=At({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String],maxWidth:[Number,String],nowrap:Boolean},(e,l)=>{let{slots:t}=l;const a=e.tag??"td";return s(a,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding,"v-data-table-column--nowrap":e.nowrap},`v-data-table-column--align-${e.align}`],style:{height:A(e.height),width:A(e.width),maxWidth:A(e.maxWidth),left:A(e.fixedOffset||null)}},{default:()=>{var n;return[(n=t.default)==null?void 0:n.call(t)]}})}),Pa=_({headers:Array},"DataTable-header"),rt=Symbol.for("vuetify:data-table-headers"),st={title:"",sortable:!1},ka={...st,width:48};function wa(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(t=>({element:t,priority:0}));return{enqueue:(t,a)=>{let n=!1;for(let r=0;r<l.length;r++)if(l[r].priority>a){l.splice(r,0,{element:t,priority:a}),n=!0;break}n||l.push({element:t,priority:a})},size:()=>l.length,count:()=>{let t=0;if(!l.length)return 0;const a=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===a&&(t+=1);return t},dequeue:()=>l.shift()}}function fe(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const t of e.children)fe(t,l);return l}function ut(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const t of e)t.key&&l.add(t.key),t.children&&ut(t.children,l);return l}function pa(e){if(e.key){if(e.key==="data-table-group")return st;if(["data-table-expand","data-table-select"].includes(e.key))return ka}}function ye(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(t=>ye(t,l+1))):l}function Va(e){let l=!1;function t(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(r)if(o&&(r.fixed=!0),r.fixed)if(r.children)for(let u=r.children.length-1;u>=0;u--)t(r.children[u],!0);else l?isNaN(+r.width)&&Rt(`Multiple fixed columns should have a static width (key: ${r.key})`):r.lastFixed=!0,l=!0;else if(r.children)for(let u=r.children.length-1;u>=0;u--)t(r.children[u]);else l=!1}for(let r=e.length-1;r>=0;r--)t(e[r]);function a(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!r)return o;if(r.children){r.fixedOffset=o;for(const u of r.children)o=a(u,o)}else r.fixed&&(r.fixedOffset=o,o+=parseFloat(r.width||"0")||0);return o}let n=0;for(const r of e)n=a(r,n)}function Ia(e,l){const t=[];let a=0;const n=wa(e);for(;n.size()>0;){let o=n.count();const u=[];let c=1;for(;o>0;){const{element:f,priority:g}=n.dequeue(),h=l-a-ye(f);if(u.push({...f,rowspan:h??1,colspan:f.children?fe(f).length:1}),f.children)for(const v of f.children){const S=g%1+c/Math.pow(10,a+2);n.enqueue(v,a+h+S)}c+=1,o-=1}a+=1,t.push(u)}return{columns:e.map(o=>fe(o)).flat(),headers:t}}function ot(e){const l=[];for(const t of e){const a={...pa(t),...t},n=a.key??(typeof a.value=="string"?a.value:null),r=a.value??n??null,o={...a,key:n,value:r,sortable:a.sortable??(a.key!=null||!!a.sort),children:a.children?ot(a.children):void 0};l.push(o)}return l}function Ta(e,l){const t=G([]),a=G([]),n=G({}),r=G({}),o=G({});$t(()=>{var P,m,x;const f=(e.headers||Object.keys(e.items[0]??{}).map(i=>({key:i,title:Lt(i)}))).slice(),g=ut(f);(P=l==null?void 0:l.groupBy)!=null&&P.value.length&&!g.has("data-table-group")&&f.unshift({key:"data-table-group",title:"Group"}),(m=l==null?void 0:l.showSelect)!=null&&m.value&&!g.has("data-table-select")&&f.unshift({key:"data-table-select"}),(x=l==null?void 0:l.showExpand)!=null&&x.value&&!g.has("data-table-expand")&&f.push({key:"data-table-expand"});const h=ot(f);Va(h);const v=Math.max(...h.map(i=>ye(i)))+1,S=Ia(h,v);t.value=S.headers,a.value=S.columns;const b=S.headers.flat(1);for(const i of b)i.key&&(i.sortable&&(i.sort&&(n.value[i.key]=i.sort),i.sortRaw&&(r.value[i.key]=i.sortRaw)),i.filter&&(o.value[i.key]=i.filter))});const u={headers:t,columns:a,sortFunctions:n,sortRawFunctions:r,filterFunctions:o};return K(rt,u),u}function ue(){const e=U(rt);if(!e)throw new Error("Missing headers!");return e}const it=_({color:String,disableSort:Boolean,fixedHeader:Boolean,multiSort:Boolean,sortAscIcon:{type:L,default:"$sortAsc"},sortDescIcon:{type:L,default:"$sortDesc"},headerProps:{type:Object},sticky:Boolean,...be(),...Et()},"VDataTableHeaders"),Ae=R()({name:"VDataTableHeaders",props:it(),setup(e,l){let{slots:t}=l;const{t:a}=J(),{toggleSort:n,sortBy:r,isSorted:o}=lt(),{someSelected:u,allSelected:c,selectAll:f,showSelectAll:g}=se(),{columns:h,headers:v}=ue(),{loaderClasses:S}=Ot(e);function b(y,d){if(!(!(e.sticky||e.fixedHeader)&&!y.fixed))return{position:"sticky",left:y.fixed?A(y.fixedOffset):void 0,top:e.sticky||e.fixedHeader?`calc(var(--v-table-header-height) * ${d})`:void 0}}function P(y){const d=r.value.find(k=>k.key===y.key);return d?d.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:m,backgroundColorStyles:x}=Le(e,"color"),{displayClasses:i,mobile:T}=re(e),B=p(()=>({headers:v.value,columns:h.value,toggleSort:n,isSorted:o,sortBy:r.value,someSelected:u.value,allSelected:c.value,selectAll:f,getSortIcon:P})),V=p(()=>["v-data-table__th",{"v-data-table__th--sticky":e.sticky||e.fixedHeader},i.value,S.value]),O=y=>{let{column:d,x:k,y:w}=y;const I=d.key==="data-table-select"||d.key==="data-table-expand",C=F(e.headerProps??{},d.headerProps??{});return s(ne,F({tag:"th",align:d.align,class:[{"v-data-table__th--sortable":d.sortable&&!e.disableSort,"v-data-table__th--sorted":o(d),"v-data-table__th--fixed":d.fixed},...V.value],style:{width:A(d.width),minWidth:A(d.minWidth),maxWidth:A(d.maxWidth),...b(d,w)},colspan:d.colspan,rowspan:d.rowspan,onClick:d.sortable?()=>n(d):void 0,fixed:d.fixed,nowrap:d.nowrap,lastFixed:d.lastFixed,noPadding:I},C),{default:()=>{var z;const M=`header.${d.key}`,Y={column:d,selectAll:f,isSorted:o,toggleSort:n,sortBy:r.value,someSelected:u.value,allSelected:c.value,getSortIcon:P};return t[M]?t[M](Y):d.key==="data-table-select"?((z=t["header.data-table-select"])==null?void 0:z.call(t,Y))??(g.value&&s(he,{modelValue:c.value,indeterminate:u.value&&!c.value,"onUpdate:modelValue":f},null)):s("div",{class:"v-data-table-header__content"},[s("span",null,[d.title]),d.sortable&&!e.disableSort&&s(Ie,{key:"icon",class:"v-data-table-header__sort-icon",icon:P(d)},null),e.multiSort&&o(d)&&s("div",{key:"badge",class:["v-data-table-header__sort-badge",...m.value],style:x.value},[r.value.findIndex(Q=>Q.key===d.key)+1])])}})},H=()=>{const y=F(e.headerProps??{}??{}),d=p(()=>h.value.filter(w=>(w==null?void 0:w.sortable)&&!e.disableSort)),k=p(()=>{if(h.value.find(I=>I.key==="data-table-select")!=null)return c.value?"$checkboxOn":u.value?"$checkboxIndeterminate":"$checkboxOff"});return s(ne,F({tag:"th",class:[...V.value],colspan:v.value.length+1},y),{default:()=>[s("div",{class:"v-data-table-header__content"},[s(ze,{chips:!0,class:"v-data-table__td-sort-select",clearable:!0,density:"default",items:d.value,label:a("$vuetify.dataTable.sortBy"),multiple:e.multiSort,variant:"underlined","onClick:clear":()=>r.value=[],appendIcon:k.value,"onClick:append":()=>f(!c.value)},{...t,chip:w=>{var I;return s(Wt,{onClick:(I=w.item.raw)!=null&&I.sortable?()=>n(w.item.raw):void 0,onMousedown:C=>{C.preventDefault(),C.stopPropagation()}},{default:()=>[w.item.title,s(Ie,{class:["v-data-table__td-sort-icon",o(w.item.raw)&&"v-data-table__td-sort-icon-active"],icon:P(w.item.raw),size:"small"},null)]})}})])]})};E(()=>T.value?s("tr",null,[s(H,null,null)]):s(q,null,[t.headers?t.headers(B.value):v.value.map((y,d)=>s("tr",null,[y.map((k,w)=>s(O,{column:k,x:w,y:d},null))])),e.loading&&s("tr",{class:"v-data-table-progress"},[s("th",{colspan:h.value.length},[s(Nt,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:t.loader})])])]))}}),Da=_({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),_a=R()({name:"VDataTableGroupHeaderRow",props:Da(),setup(e,l){let{slots:t}=l;const{isGroupOpen:a,toggleGroup:n,extractRows:r}=Qe(),{isSelected:o,isSomeSelected:u,select:c}=se(),{columns:f}=ue(),g=p(()=>r([e.item]));return()=>s("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[f.value.map(h=>{var v,S;if(h.key==="data-table-group"){const b=a(e.item)?"$expand":"$next",P=()=>n(e.item);return((v=t["data-table-group"])==null?void 0:v.call(t,{item:e.item,count:g.value.length,props:{icon:b,onClick:P}}))??s(ne,{class:"v-data-table-group-header-row__column"},{default:()=>[s(j,{size:"small",variant:"text",icon:b,onClick:P},null),s("span",null,[e.item.value]),s("span",null,[Te("("),g.value.length,Te(")")])]})}if(h.key==="data-table-select"){const b=o(g.value),P=u(g.value)&&!b,m=x=>c(g.value,x);return((S=t["data-table-select"])==null?void 0:S.call(t,{props:{modelValue:b,indeterminate:P,"onUpdate:modelValue":m}}))??s("td",null,[s(he,{modelValue:b,indeterminate:P,"onUpdate:modelValue":m},null)])}return s("td",null,null)})])}}),Ba=_({index:Number,item:Object,cellProps:[Object,Function],onClick:ce(),onContextmenu:ce(),onDblclick:ce(),...be()},"VDataTableRow"),Ca=R()({name:"VDataTableRow",props:Ba(),setup(e,l){let{slots:t}=l;const{displayClasses:a,mobile:n}=re(e,"v-data-table__tr"),{isSelected:r,toggleSelect:o,someSelected:u,allSelected:c,selectAll:f}=se(),{isExpanded:g,toggleExpand:h}=Ke(),{toggleSort:v,sortBy:S,isSorted:b}=lt(),{columns:P}=ue();E(()=>s("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)},a.value],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&P.value.map((m,x)=>{const i=e.item,T=`item.${m.key}`,B=`header.${m.key}`,V={index:e.index,item:i.raw,internalItem:i,value:le(i.columns,m.key),column:m,isSelected:r,toggleSelect:o,isExpanded:g,toggleExpand:h},O={column:m,selectAll:f,isSorted:b,toggleSort:v,sortBy:S.value,someSelected:u.value,allSelected:c.value,getSortIcon:()=>""},H=typeof e.cellProps=="function"?e.cellProps({index:V.index,item:V.item,internalItem:V.internalItem,value:V.value,column:m}):e.cellProps,y=typeof m.cellProps=="function"?m.cellProps({index:V.index,item:V.item,internalItem:V.internalItem,value:V.value}):m.cellProps;return s(ne,F({align:m.align,class:{"v-data-table__td--expanded-row":m.key==="data-table-expand","v-data-table__td--select-row":m.key==="data-table-select"},fixed:m.fixed,fixedOffset:m.fixedOffset,lastFixed:m.lastFixed,maxWidth:n.value?void 0:m.maxWidth,noPadding:m.key==="data-table-select"||m.key==="data-table-expand",nowrap:m.nowrap,width:n.value?void 0:m.width},H,y),{default:()=>{var k,w,I,C,M;if(t[T]&&!n.value)return(k=t[T])==null?void 0:k.call(t,V);if(m.key==="data-table-select")return((w=t["item.data-table-select"])==null?void 0:w.call(t,V))??s(he,{disabled:!i.selectable,modelValue:r([i]),onClick:De(()=>o(i),["stop"])},null);if(m.key==="data-table-expand")return((I=t["item.data-table-expand"])==null?void 0:I.call(t,V))??s(j,{icon:g(i)?"$collapse":"$expand",size:"small",variant:"text",onClick:De(()=>h(i),["stop"])},null);const d=Ht(V.value);return n.value?s(q,null,[s("div",{class:"v-data-table__td-title"},[((C=t[B])==null?void 0:C.call(t,O))??m.title]),s("div",{class:"v-data-table__td-value"},[((M=t[T])==null?void 0:M.call(t,V))??d])]):d}})})]))}}),dt=_({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function],...be()},"VDataTableRows"),$e=R()({name:"VDataTableRows",inheritAttrs:!1,props:dt(),setup(e,l){let{attrs:t,slots:a}=l;const{columns:n}=ue(),{expandOnClick:r,toggleExpand:o,isExpanded:u}=Ke(),{isSelected:c,toggleSelect:f}=se(),{toggleGroup:g,isGroupOpen:h}=Qe(),{t:v}=J(),{mobile:S}=re(e);return E(()=>{var b,P;return e.loading&&(!e.items.length||a.loading)?s("tr",{class:"v-data-table-rows-loading",key:"loading"},[s("td",{colspan:n.value.length},[((b=a.loading)==null?void 0:b.call(a))??v(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?s("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[s("td",{colspan:n.value.length},[((P=a["no-data"])==null?void 0:P.call(a))??v(e.noDataText)])]):s(q,null,[e.items.map((m,x)=>{var B;if(m.type==="group"){const V={index:x,item:m,columns:n.value,isExpanded:u,toggleExpand:o,isSelected:c,toggleSelect:f,toggleGroup:g,isGroupOpen:h};return a["group-header"]?a["group-header"](V):s(_a,F({key:`group-header_${m.id}`,item:m},Be(t,":group-header",()=>V)),a)}const i={index:x,item:m.raw,internalItem:m,columns:n.value,isExpanded:u,toggleExpand:o,isSelected:c,toggleSelect:f},T={...i,props:F({key:`item_${m.key??m.index}`,onClick:r.value?()=>{o(m)}:void 0,index:x,item:m,cellProps:e.cellProps,mobile:S.value},Be(t,":row",()=>i),typeof e.rowProps=="function"?e.rowProps({item:i.item,index:i.index,internalItem:i.internalItem}):e.rowProps)};return s(q,{key:T.props.key},[a.item?a.item(T):s(Ca,T.props,a),u(m)&&((B=a["expanded-row"])==null?void 0:B.call(a,i))])})])}),{}}}),Fa=_({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function Aa(e,l,t,a){const n=e.returnObject?l:te(l,e.itemValue),r=te(l,e.itemSelectable,!0),o=a.reduce((u,c)=>(c.key!=null&&(u[c.key]=te(l,c.value)),u),{});return{type:"item",key:e.returnObject?te(l,e.itemValue):n,index:t,value:n,selectable:r,columns:o,raw:l}}function $a(e,l,t){return l.map((a,n)=>Aa(e,a,n,t))}function La(e,l){return{items:p(()=>$a(e,e.items,l.value))}}const Ra=_({...dt(),hideDefaultBody:Boolean,hideDefaultFooter:Boolean,hideDefaultHeader:Boolean,width:[String,Number],search:String,...Yt(),...ea(),...Pa(),...Fa(),...fa(),...ga(),...it(),...Kt()},"DataTable"),Oa=_({...sa(),...Ra(),...qt(),...nt()},"VDataTable"),Wa=R()({name:"VDataTable",props:Oa(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,l){let{attrs:t,slots:a}=l;const{groupBy:n}=ta(e),{sortBy:r,multiSort:o,mustSort:u}=ma(e),{page:c,itemsPerPage:f}=ua(e),{disableSort:g}=Mt(e),{columns:h,headers:v,sortFunctions:S,sortRawFunctions:b,filterFunctions:P}=Ta(e,{groupBy:n,showSelect:D(e,"showSelect"),showExpand:D(e,"showExpand")}),{items:m}=La(e,h),x=D(e,"search"),{filteredItems:i}=zt(e,m,x,{transform:N=>N.columns,customKeyFilter:P}),{toggleSort:T}=ba({sortBy:r,multiSort:o,mustSort:u,page:c}),{sortByWithGroups:B,opened:V,extractRows:O,isGroupOpen:H,toggleGroup:y}=aa({groupBy:n,sortBy:r,disableSort:g}),{sortedItems:d}=ha(e,i,B,{transform:N=>({...N.raw,...N.columns}),sortFunctions:S,sortRawFunctions:b}),{flatItems:k}=na(d,n,V),w=p(()=>k.value.length),{startIndex:I,stopIndex:C,pageCount:M,setItemsPerPage:Y}=oa({page:c,itemsPerPage:f,itemsLength:w}),{paginatedItems:z}=da({items:k,startIndex:I,stopIndex:C,itemsPerPage:f}),Q=p(()=>O(z.value)),{isSelected:ct,select:ft,selectAll:vt,toggleSelect:gt,someSelected:mt,allSelected:bt}=va(e,{allItems:m,currentPage:Q}),{isExpanded:ht,toggleExpand:yt}=Zt(e);ra({page:c,itemsPerPage:f,sortBy:r,groupBy:n,search:x}),ae({VDataTableRows:{hideNoData:D(e,"hideNoData"),noDataText:D(e,"noDataText"),loading:D(e,"loading"),loadingText:D(e,"loadingText")}});const $=p(()=>({page:c.value,itemsPerPage:f.value,sortBy:r.value,pageCount:M.value,toggleSort:T,setItemsPerPage:Y,someSelected:mt.value,allSelected:bt.value,isSelected:ct,select:ft,selectAll:vt,toggleSelect:gt,isExpanded:ht,toggleExpand:yt,isGroupOpen:H,toggleGroup:y,items:Q.value.map(N=>N.raw),internalItems:Q.value,groupedItems:z.value,columns:h.value,headers:v.value}));return E(()=>{const N=Fe.filterProps(e),xt=Ae.filterProps(e),St=$e.filterProps(e),Pt=_e.filterProps(e);return s(_e,F({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},Pt,{fixedHeader:e.fixedHeader||e.sticky}),{top:()=>{var X;return(X=a.top)==null?void 0:X.call(a,$.value)},default:()=>{var X,xe,Se,Pe,ke,we;return a.default?a.default($.value):s(q,null,[(X=a.colgroup)==null?void 0:X.call(a,$.value),!e.hideDefaultHeader&&s("thead",{key:"thead"},[s(Ae,xt,a)]),(xe=a.thead)==null?void 0:xe.call(a,$.value),!e.hideDefaultBody&&s("tbody",null,[(Se=a["body.prepend"])==null?void 0:Se.call(a,$.value),a.body?a.body($.value):s($e,F(t,St,{items:z.value}),a),(Pe=a["body.append"])==null?void 0:Pe.call(a,$.value)]),(ke=a.tbody)==null?void 0:ke.call(a,$.value),(we=a.tfoot)==null?void 0:we.call(a,$.value)])},bottom:()=>a.bottom?a.bottom($.value):!e.hideDefaultFooter&&s(q,null,[s(Gt,null,null),s(Fe,N,{prepend:a["footer.prepend"]})])})}),{}}}),za=jt("v-spacer","div","VSpacer");export{Wa as V,ja as a,Qt as b,za as c};
//# sourceMappingURL=VSpacer-Vjjp0T_3.js.map
