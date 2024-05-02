import{b4 as pt,p as D,m as fe,a as ve,g as L,j as R,i as s,aG as Ae,aI as $e,aM as Le,b as Oe,O as Re,P as _,aQ as kt,aT as wt,aW as Vt,c as Ne,u as Ee,s as Me,f as w,Q as te,E as ue,x as A,z as j,h as U,q as Q,r as H,b5 as He,b6 as Ge,w as je,b7 as We,aZ as ze,a$ as oe,b3 as ie,d as X,b8 as Z,b9 as It,aF as q,M as Tt,ba as _t,aO as Dt,bb as le,bc as Ct,bd as Y,V as G,D as F,be as pe,y as ke,bf as Ft,bg as Bt,bh as At,bi as ge,aJ as $t,A as Lt,L as Ot,F as K,G as we,af as Ve,bj as de,ap as Ie,ae as Rt,bk as ee}from"./app-BuM7pvKH.js";import{a as Nt}from"./VGrid-C3bbXzR6.js";import{d as Et,V as Mt,c as Ht}from"./scopeId-DeIjCqLG.js";import{e as qe,l as Gt,f as jt,h as Wt}from"./filter-CdhOGi56.js";import{a as me}from"./VCheckboxBtn-Gmx7DoUR.js";import{m as zt,V as Te}from"./VTable-tKJsyNOO.js";function _e(e,l,t){return Object.keys(e).filter(a=>pt(a)&&a.endsWith(l)).reduce((a,n)=>(a[n.slice(0,-l.length)]=r=>e[n](r,t(r)),a),{})}const qt=D({text:String,...fe(),...ve()},"VToolbarTitle"),Kt=L()({name:"VToolbarTitle",props:qt(),setup(e,l){let{slots:t}=l;return R(()=>{const a=!!(t.default||t.text||e.text);return s(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var n;return[a&&s("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(n=t.default)==null?void 0:n.call(t)])]}})}),{}}}),Ut=[null,"prominent","default","comfortable","compact"],Qt=D({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Ut.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ae(),...fe(),...$e(),...Le(),...ve({tag:"header"}),...Oe()},"VToolbar"),Ga=L()({name:"VToolbar",props:Qt(),setup(e,l){var x;let{slots:t}=l;const{backgroundColorClasses:a,backgroundColorStyles:n}=Re(_(e,"color")),{borderClasses:r}=kt(e),{elevationClasses:o}=wt(e),{roundedClasses:u}=Vt(e),{themeClasses:f}=Ne(e),{rtlClasses:d}=Ee(),m=Me(!!(e.extended||(x=t.extension)!=null&&x.call(t))),y=w(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),v=w(()=>m.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return te({VBtn:{variant:"text"}}),R(()=>{var P;const h=!!(e.title||t.title),S=!!(t.image||e.image),i=(P=t.extension)==null?void 0:P.call(t);return m.value=!!(e.extended||i),s(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},a.value,r.value,o.value,u.value,f.value,d.value,e.class],style:[n.value,e.style]},{default:()=>[S&&s("div",{key:"image",class:"v-toolbar__image"},[t.image?s(ue,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):s(Et,{key:"image-img",cover:!0,src:e.image},null)]),s(ue,{defaults:{VTabs:{height:A(y.value)}}},{default:()=>{var g,T,B;return[s("div",{class:"v-toolbar__content",style:{height:A(y.value)}},[t.prepend&&s("div",{class:"v-toolbar__prepend"},[(g=t.prepend)==null?void 0:g.call(t)]),h&&s(Kt,{key:"title",text:e.title},{text:t.title}),(T=t.default)==null?void 0:T.call(t),t.append&&s("div",{class:"v-toolbar__append"},[(B=t.append)==null?void 0:B.call(t)])])]}}),s(ue,{defaults:{VTabs:{height:A(v.value)}}},{default:()=>[s(Nt,null,{default:()=>[m.value&&s("div",{class:"v-toolbar__extension",style:{height:A(v.value)}},[i])]})]})]})}),{contentHeight:y,extensionHeight:v}}}),Jt=D({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),Ke=Symbol.for("vuetify:datatable:expanded");function Xt(e){const l=_(e,"expandOnClick"),t=j(e,"expanded",e.expanded,u=>new Set(u),u=>[...u.values()]);function a(u,f){const d=new Set(t.value);f?d.add(u.value):d.delete(u.value),t.value=d}function n(u){return t.value.has(u.value)}function r(u){a(u,!n(u))}const o={expand:a,expanded:t,expandOnClick:l,isExpanded:n,toggleExpand:r};return U(Ke,o),o}function Ue(){const e=Q(Ke);if(!e)throw new Error("foo");return e}const Zt=D({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),Qe=Symbol.for("vuetify:data-table-group");function Yt(e){return{groupBy:j(e,"groupBy")}}function ea(e){const{groupBy:l,sortBy:t}=e,a=H(new Set),n=w(()=>l.value.map(d=>({...d,order:d.order??!1})).concat(t.value));function r(d){return a.value.has(d.id)}function o(d){const m=new Set(a.value);r(d)?m.delete(d.id):m.add(d.id),a.value=m}function u(d){function m(y){const v=[];for(const x of y.items)"type"in x&&x.type==="group"?v.push(...m(x)):v.push(x);return v}return m({type:"group",items:d,id:"dummy",key:"dummy",value:"dummy",depth:0})}const f={sortByWithGroups:n,toggleGroup:o,opened:a,groupBy:l,extractRows:u,isGroupOpen:r};return U(Qe,f),f}function Je(){const e=Q(Qe);if(!e)throw new Error("Missing group!");return e}function ta(e,l){if(!e.length)return[];const t=new Map;for(const a of e){const n=He(a.raw,l);t.has(n)||t.set(n,[]),t.get(n).push(a)}return t}function Xe(e,l){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=ta(e,l[0]),r=[],o=l.slice(1);return n.forEach((u,f)=>{const d=l[0],m=`${a}_${d}_${f}`;r.push({depth:t,id:m,key:d,value:f,items:o.length?Xe(u,o,t+1,m):u,type:"group"})}),r}function Ze(e,l){const t=[];for(const a of e)"type"in a&&a.type==="group"?(a.value!=null&&t.push(a),(l.has(a.id)||a.value==null)&&t.push(...Ze(a.items,l))):t.push(a);return t}function aa(e,l,t){return{flatItems:w(()=>{if(!l.value.length)return e.value;const n=Xe(e.value,l.value.map(r=>r.key));return Ze(n,t.value)})}}function la(e){let{page:l,itemsPerPage:t,sortBy:a,groupBy:n,search:r}=e;const o=Ge("VDataTable"),u=w(()=>({page:l.value,itemsPerPage:t.value,sortBy:a.value,groupBy:n.value,search:r.value}));let f=null;je(u,()=>{We(f,u.value)||(f&&f.search!==u.value.search&&(l.value=1),o.emit("update:options",u.value),f=u.value)},{deep:!0,immediate:!0})}const na=D({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Ye=Symbol.for("vuetify:data-table-pagination");function ra(e){const l=j(e,"page",void 0,a=>+(a??1)),t=j(e,"itemsPerPage",void 0,a=>+(a??10));return{page:l,itemsPerPage:t}}function sa(e){const{page:l,itemsPerPage:t,itemsLength:a}=e,n=w(()=>t.value===-1?0:t.value*(l.value-1)),r=w(()=>t.value===-1?a.value:Math.min(a.value,n.value+t.value)),o=w(()=>t.value===-1||a.value===0?1:Math.ceil(a.value/t.value));ze(()=>{l.value>o.value&&(l.value=o.value)});function u(v){t.value=v,l.value=1}function f(){l.value=oe(l.value+1,1,o.value)}function d(){l.value=oe(l.value-1,1,o.value)}function m(v){l.value=oe(v,1,o.value)}const y={page:l,itemsPerPage:t,startIndex:n,stopIndex:r,pageCount:o,itemsLength:a,nextPage:f,prevPage:d,setPage:m,setItemsPerPage:u};return U(Ye,y),y}function ua(){const e=Q(Ye);if(!e)throw new Error("Missing pagination!");return e}function oa(e){const l=Ge("usePaginatedItems"),{items:t,startIndex:a,stopIndex:n,itemsPerPage:r}=e,o=w(()=>r.value<=0?t.value:t.value.slice(a.value,n.value));return je(o,u=>{l.emit("update:currentItems",u)}),{paginatedItems:o}}const ia={showSelectAll:!1,allSelected:()=>[],select:e=>{var a;let{items:l,value:t}=e;return new Set(t?[(a=l[0])==null?void 0:a.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},et={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:t,selected:a}=e;for(const n of l)t?a.add(n.value):a.delete(n.value);return a},selectAll:e=>{let{value:l,currentPage:t,selected:a}=e;return et.select({items:t,value:l,selected:a})}},tt={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:t,selected:a}=e;for(const n of l)t?a.add(n.value):a.delete(n.value);return a},selectAll:e=>{let{value:l,allItems:t,selected:a}=e;return tt.select({items:t,value:l,selected:a})}},da=D({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:We}},"DataTable-select"),at=Symbol.for("vuetify:data-table-selection");function ca(e,l){let{allItems:t,currentPage:a}=l;const n=j(e,"modelValue",e.modelValue,i=>new Set(ie(i).map(P=>{var g;return((g=t.value.find(T=>e.valueComparator(P,T.value)))==null?void 0:g.value)??P})),i=>[...i.values()]),r=w(()=>t.value.filter(i=>i.selectable)),o=w(()=>a.value.filter(i=>i.selectable)),u=w(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return ia;case"all":return tt;case"page":default:return et}});function f(i){return ie(i).every(P=>n.value.has(P.value))}function d(i){return ie(i).some(P=>n.value.has(P.value))}function m(i,P){const g=u.value.select({items:i,value:P,selected:new Set(n.value)});n.value=g}function y(i){m([i],!f([i]))}function v(i){const P=u.value.selectAll({value:i,allItems:r.value,currentPage:o.value,selected:new Set(n.value)});n.value=P}const x=w(()=>n.value.size>0),h=w(()=>{const i=u.value.allSelected({allItems:r.value,currentPage:o.value});return!!i.length&&f(i)}),S={toggleSelect:y,select:m,selectAll:v,isSelected:f,isSomeSelected:d,someSelected:x,allSelected:h,showSelectAll:u.value.showSelectAll};return U(at,S),S}function ne(){const e=Q(at);if(!e)throw new Error("Missing selection!");return e}const fa=D({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),lt=Symbol.for("vuetify:data-table-sort");function va(e){const l=j(e,"sortBy"),t=_(e,"mustSort"),a=_(e,"multiSort");return{sortBy:l,mustSort:t,multiSort:a}}function ga(e){const{sortBy:l,mustSort:t,multiSort:a,page:n}=e,r=f=>{if(f.key==null)return;let d=l.value.map(y=>({...y}))??[];const m=d.find(y=>y.key===f.key);m?m.order==="desc"?t.value?m.order="asc":d=d.filter(y=>y.key!==f.key):m.order="desc":a.value?d=[...d,{key:f.key,order:"asc"}]:d=[{key:f.key,order:"asc"}],l.value=d,n&&(n.value=1)};function o(f){return!!l.value.find(d=>d.key===f.key)}const u={sortBy:l,toggleSort:r,isSorted:o};return U(lt,u),u}function nt(){const e=Q(lt);if(!e)throw new Error("Missing sort!");return e}function ma(e,l,t,a){const n=X();return{sortedItems:w(()=>{var o,u;return t.value.length?ba(l.value,t.value,n.current.value,{transform:a==null?void 0:a.transform,sortFunctions:{...e.customKeySort,...(o=a==null?void 0:a.sortFunctions)==null?void 0:o.value},sortRawFunctions:(u=a==null?void 0:a.sortRawFunctions)==null?void 0:u.value}):l.value})}}function ba(e,l,t,a){const n=new Intl.Collator(t,{sensitivity:"accent",usage:"sort"});return e.map(o=>[o,a!=null&&a.transform?a.transform(o):o]).sort((o,u)=>{var f,d;for(let m=0;m<l.length;m++){let y=!1;const v=l[m].key,x=l[m].order??"asc";if(x===!1)continue;let h=o[1][v],S=u[1][v],i=o[0].raw,P=u[0].raw;if(x==="desc"&&([h,S]=[S,h],[i,P]=[P,i]),(f=a==null?void 0:a.sortRawFunctions)!=null&&f[v]){const g=a.sortRawFunctions[v](i,P);if(g==null)continue;if(y=!0,g)return g}if((d=a==null?void 0:a.sortFunctions)!=null&&d[v]){const g=a.sortFunctions[v](h,S);if(g==null)continue;if(y=!0,g)return g}if(!y){if(h instanceof Date&&S instanceof Date)return h.getTime()-S.getTime();if([h,S]=[h,S].map(g=>g!=null?g.toString().toLocaleLowerCase():g),h!==S)return Z(h)&&Z(S)?0:Z(h)?-1:Z(S)?1:!isNaN(h)&&!isNaN(S)?Number(h)-Number(S):n.compare(h,S)}}return 0}).map(o=>{let[u]=o;return u})}function ha(){const e=H([]);It(()=>e.value=[]);function l(t,a){e.value[a]=t}return{refs:e,updateRef:l}}const ya=D({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:q,default:"$first"},prevIcon:{type:q,default:"$prev"},nextIcon:{type:q,default:"$next"},lastIcon:{type:q,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...Ae(),...fe(),...Tt(),...$e(),...Le(),..._t(),...ve({tag:"nav"}),...Oe(),...Dt({variant:"text"})},"VPagination"),De=L()({name:"VPagination",props:ya(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,l){let{slots:t,emit:a}=l;const n=j(e,"modelValue"),{t:r,n:o}=X(),{isRtl:u}=Ee(),{themeClasses:f}=Ne(e),{width:d}=le(),m=Me(-1);te(void 0,{scoped:!0});const{resizeRef:y}=Ct(b=>{if(!b.length)return;const{target:c,contentRect:k}=b[0],p=c.querySelector(".v-pagination__list > *");if(!p)return;const I=k.width,C=p.offsetWidth+parseFloat(getComputedStyle(p).marginRight)*2;m.value=S(I,C)}),v=w(()=>parseInt(e.length,10)),x=w(()=>parseInt(e.start,10)),h=w(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):m.value>=0?m.value:S(d.value,58));function S(b,c){const k=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((b-c*k)/c).toFixed(2)))}const i=w(()=>{if(v.value<=0||isNaN(v.value)||v.value>Number.MAX_SAFE_INTEGER)return[];if(h.value<=0)return[];if(h.value===1)return[n.value];if(v.value<=h.value)return Y(v.value,x.value);const b=h.value%2===0,c=b?h.value/2:Math.floor(h.value/2),k=b?c:c+1,p=v.value-c;if(k-n.value>=0)return[...Y(Math.max(1,h.value-1),x.value),e.ellipsis,v.value];if(n.value-p>=(b?1:0)){const I=h.value-1,C=v.value-I+x.value;return[x.value,e.ellipsis,...Y(I,C)]}else{const I=Math.max(1,h.value-3),C=I===1?n.value:n.value-Math.ceil(I/2)+x.value;return[x.value,e.ellipsis,...Y(I,C),e.ellipsis,v.value]}});function P(b,c,k){b.preventDefault(),n.value=c,k&&a(k,c)}const{refs:g,updateRef:T}=ha();te({VPaginationBtn:{color:_(e,"color"),border:_(e,"border"),density:_(e,"density"),size:_(e,"size"),variant:_(e,"variant"),rounded:_(e,"rounded"),elevation:_(e,"elevation")}});const B=w(()=>i.value.map((b,c)=>{const k=p=>T(p,c);if(typeof b=="string")return{isActive:!1,key:`ellipsis-${c}`,page:b,props:{ref:k,ellipsis:!0,icon:!0,disabled:!0}};{const p=b===n.value;return{isActive:p,key:b,page:o(b),props:{ref:k,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:p?e.activeColor:e.color,"aria-current":p,"aria-label":r(p?e.currentPageAriaLabel:e.pageAriaLabel,b),onClick:I=>P(I,b)}}}})),V=w(()=>{const b=!!e.disabled||n.value<=x.value,c=!!e.disabled||n.value>=x.value+v.value-1;return{first:e.showFirstLastPage?{icon:u.value?e.lastIcon:e.firstIcon,onClick:k=>P(k,x.value,"first"),disabled:b,"aria-label":r(e.firstAriaLabel),"aria-disabled":b}:void 0,prev:{icon:u.value?e.nextIcon:e.prevIcon,onClick:k=>P(k,n.value-1,"prev"),disabled:b,"aria-label":r(e.previousAriaLabel),"aria-disabled":b},next:{icon:u.value?e.prevIcon:e.nextIcon,onClick:k=>P(k,n.value+1,"next"),disabled:c,"aria-label":r(e.nextAriaLabel),"aria-disabled":c},last:e.showFirstLastPage?{icon:u.value?e.firstIcon:e.lastIcon,onClick:k=>P(k,x.value+v.value-1,"last"),disabled:c,"aria-label":r(e.lastAriaLabel),"aria-disabled":c}:void 0}});function O(){var c;const b=n.value-x.value;(c=g.value[b])==null||c.$el.focus()}function N(b){b.key===pe.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,ke(O)):b.key===pe.right&&!e.disabled&&n.value<x.value+v.value-1&&(n.value=n.value+1,ke(O))}return R(()=>s(e.tag,{ref:y,class:["v-pagination",f.value,e.class],style:e.style,role:"navigation","aria-label":r(e.ariaLabel),onKeydown:N,"data-test":"v-pagination-root"},{default:()=>[s("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&s("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[t.first?t.first(V.value.first):s(G,F({_as:"VPaginationBtn"},V.value.first),null)]),s("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[t.prev?t.prev(V.value.prev):s(G,F({_as:"VPaginationBtn"},V.value.prev),null)]),B.value.map((b,c)=>s("li",{key:b.key,class:["v-pagination__item",{"v-pagination__item--is-active":b.isActive}],"data-test":"v-pagination-item"},[t.item?t.item(b):s(G,F({_as:"VPaginationBtn"},b.props),{default:()=>[b.page]})])),s("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[t.next?t.next(V.value.next):s(G,F({_as:"VPaginationBtn"},V.value.next),null)]),e.showFirstLastPage&&s("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[t.last?t.last(V.value.last):s(G,F({_as:"VPaginationBtn"},V.value.last),null)])])]})),{}}}),rt=D({prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),Ce=L()({name:"VDataTableFooter",props:rt(),setup(e,l){let{slots:t}=l;const{t:a}=X(),{page:n,pageCount:r,startIndex:o,stopIndex:u,itemsLength:f,itemsPerPage:d,setItemsPerPage:m}=ua(),y=w(()=>e.itemsPerPageOptions.map(v=>typeof v=="number"?{value:v,title:v===-1?a("$vuetify.dataFooter.itemsPerPageAll"):String(v)}:{...v,title:isNaN(Number(v.title))?a(v.title):v.title}));return R(()=>{var x;const v=De.filterProps(e);return s("div",{class:"v-data-table-footer"},[(x=t.prepend)==null?void 0:x.call(t),s("div",{class:"v-data-table-footer__items-per-page"},[s("span",null,[a(e.itemsPerPageText)]),s(qe,{items:y.value,modelValue:d.value,"onUpdate:modelValue":h=>m(Number(h)),density:"compact",variant:"outlined","hide-details":!0},null)]),s("div",{class:"v-data-table-footer__info"},[s("div",null,[a(e.pageText,f.value?o.value+1:0,u.value,f.value)])]),s("div",{class:"v-data-table-footer__pagination"},[s(De,F({modelValue:n.value,"onUpdate:modelValue":h=>n.value=h,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},v),null)])])}),{}}}),ae=Ft({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String],maxWidth:[Number,String],nowrap:Boolean},(e,l)=>{let{slots:t}=l;const a=e.tag??"td";return s(a,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding,"v-data-table-column--nowrap":e.nowrap},`v-data-table-column--align-${e.align}`],style:{height:A(e.height),width:A(e.width),maxWidth:A(e.maxWidth),left:A(e.fixedOffset||null)}},{default:()=>{var n;return[(n=t.default)==null?void 0:n.call(t)]}})}),xa=D({headers:Array},"DataTable-header"),st=Symbol.for("vuetify:data-table-headers"),ut={title:"",sortable:!1},Sa={...ut,width:48};function Pa(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(t=>({element:t,priority:0}));return{enqueue:(t,a)=>{let n=!1;for(let r=0;r<l.length;r++)if(l[r].priority>a){l.splice(r,0,{element:t,priority:a}),n=!0;break}n||l.push({element:t,priority:a})},size:()=>l.length,count:()=>{let t=0;if(!l.length)return 0;const a=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===a&&(t+=1);return t},dequeue:()=>l.shift()}}function ce(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const t of e.children)ce(t,l);return l}function ot(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const t of e)t.key&&l.add(t.key),t.children&&ot(t.children,l);return l}function pa(e){if(e.key){if(e.key==="data-table-group")return ut;if(["data-table-expand","data-table-select"].includes(e.key))return Sa}}function be(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(t=>be(t,l+1))):l}function ka(e){let l=!1;function t(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(r)if(o&&(r.fixed=!0),r.fixed)if(r.children)for(let u=r.children.length-1;u>=0;u--)t(r.children[u],!0);else l?isNaN(+r.width)&&At(`Multiple fixed columns should have a static width (key: ${r.key})`):r.lastFixed=!0,l=!0;else if(r.children)for(let u=r.children.length-1;u>=0;u--)t(r.children[u]);else l=!1}for(let r=e.length-1;r>=0;r--)t(e[r]);function a(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!r)return o;if(r.children){r.fixedOffset=o;for(const u of r.children)o=a(u,o)}else r.fixed&&(r.fixedOffset=o,o+=parseFloat(r.width||"0")||0);return o}let n=0;for(const r of e)n=a(r,n)}function wa(e,l){const t=[];let a=0;const n=Pa(e);for(;n.size()>0;){let o=n.count();const u=[];let f=1;for(;o>0;){const{element:d,priority:m}=n.dequeue(),y=l-a-be(d);if(u.push({...d,rowspan:y??1,colspan:d.children?ce(d).length:1}),d.children)for(const v of d.children){const x=m%1+f/Math.pow(10,a+2);n.enqueue(v,a+y+x)}f+=1,o-=1}a+=1,t.push(u)}return{columns:e.map(o=>ce(o)).flat(),headers:t}}function it(e){const l=[];for(const t of e){const a={...pa(t),...t},n=a.key??(typeof a.value=="string"?a.value:null),r=a.value??n??null,o={...a,key:n,value:r,sortable:a.sortable??(a.key!=null||!!a.sort),children:a.children?it(a.children):void 0};l.push(o)}return l}function Va(e,l){const t=H([]),a=H([]),n=H({}),r=H({}),o=H({});ze(()=>{var S,i,P;const d=(e.headers||Object.keys(e.items[0]??{}).map(g=>({key:g,title:Bt(g)}))).slice(),m=ot(d);(S=l==null?void 0:l.groupBy)!=null&&S.value.length&&!m.has("data-table-group")&&d.unshift({key:"data-table-group",title:"Group"}),(i=l==null?void 0:l.showSelect)!=null&&i.value&&!m.has("data-table-select")&&d.unshift({key:"data-table-select"}),(P=l==null?void 0:l.showExpand)!=null&&P.value&&!m.has("data-table-expand")&&d.push({key:"data-table-expand"});const y=it(d);ka(y);const v=Math.max(...y.map(g=>be(g)))+1,x=wa(y,v);t.value=x.headers,a.value=x.columns;const h=x.headers.flat(1);for(const g of h)g.key&&(g.sortable&&(g.sort&&(n.value[g.key]=g.sort),g.sortRaw&&(r.value[g.key]=g.sortRaw)),g.filter&&(o.value[g.key]=g.filter))});const u={headers:t,columns:a,sortFunctions:n,sortRawFunctions:r,filterFunctions:o};return U(st,u),u}function re(){const e=Q(st);if(!e)throw new Error("Missing headers!");return e}const dt=D({color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:q,default:"$sortAsc"},sortDescIcon:{type:q,default:"$sortDesc"},headerProps:{type:Object},...ge(),...$t()},"VDataTableHeaders"),Fe=L()({name:"VDataTableHeaders",props:dt(),setup(e,l){let{slots:t}=l;const{t:a}=X(),{toggleSort:n,sortBy:r,isSorted:o}=nt(),{someSelected:u,allSelected:f,selectAll:d,showSelectAll:m}=ne(),{columns:y,headers:v}=re(),{loaderClasses:x}=Lt(e);function h(b,c){if(!(!e.sticky&&!b.fixed))return{position:"sticky",left:b.fixed?A(b.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${c})`:void 0}}function S(b){const c=r.value.find(k=>k.key===b.key);return c?c.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:i,backgroundColorStyles:P}=Re(e,"color"),{displayClasses:g,mobile:T}=le(e),B=w(()=>({headers:v.value,columns:y.value,toggleSort:n,isSorted:o,sortBy:r.value,someSelected:u.value,allSelected:f.value,selectAll:d,getSortIcon:S})),V=w(()=>["v-data-table__th",{"v-data-table__th--sticky":e.sticky},g.value,x.value]),O=b=>{let{column:c,x:k,y:p}=b;const I=c.key==="data-table-select"||c.key==="data-table-expand",C=F(e.headerProps??{},c.headerProps??{});return s(ae,F({tag:"th",align:c.align,class:[{"v-data-table__th--sortable":c.sortable,"v-data-table__th--sorted":o(c),"v-data-table__th--fixed":c.fixed},...V.value],style:{width:A(c.width),minWidth:A(c.minWidth),maxWidth:A(c.maxWidth),...h(c,p)},colspan:c.colspan,rowspan:c.rowspan,onClick:c.sortable?()=>n(c):void 0,fixed:c.fixed,nowrap:c.nowrap,lastFixed:c.lastFixed,noPadding:I},C),{default:()=>{var z;const E=`header.${c.key}`,W={column:c,selectAll:d,isSorted:o,toggleSort:n,sortBy:r.value,someSelected:u.value,allSelected:f.value,getSortIcon:S};return t[E]?t[E](W):c.key==="data-table-select"?((z=t["header.data-table-select"])==null?void 0:z.call(t,W))??(m&&s(me,{modelValue:f.value,indeterminate:u.value&&!f.value,"onUpdate:modelValue":d},null)):s("div",{class:"v-data-table-header__content"},[s("span",null,[c.title]),c.sortable&&s(we,{key:"icon",class:"v-data-table-header__sort-icon",icon:S(c)},null),e.multiSort&&o(c)&&s("div",{key:"badge",class:["v-data-table-header__sort-badge",...i.value],style:P.value},[r.value.findIndex(se=>se.key===c.key)+1])])}})},N=()=>{const b=F(e.headerProps??{}??{}),c=w(()=>y.value.filter(p=>p==null?void 0:p.sortable)),k=w(()=>{if(y.value.find(I=>I.key==="data-table-select")!=null)return f.value?"$checkboxOn":u.value?"$checkboxIndeterminate":"$checkboxOff"});return s(ae,F({tag:"th",class:[...V.value],colspan:v.value.length+1},b),{default:()=>[s("div",{class:"v-data-table-header__content"},[s(qe,{chips:!0,class:"v-data-table__td-sort-select",clearable:!0,density:"default",items:c.value,label:a("$vuetify.dataTable.sortBy"),multiple:e.multiSort,variant:"underlined","onClick:clear":()=>r.value=[],appendIcon:k.value,"onClick:append":()=>d(!f.value)},{...t,chip:p=>{var I;return s(Gt,{onClick:(I=p.item.raw)!=null&&I.sortable?()=>n(p.item.raw):void 0,onMousedown:C=>{C.preventDefault(),C.stopPropagation()}},{default:()=>[p.item.title,s(we,{class:["v-data-table__td-sort-icon",o(p.item.raw)&&"v-data-table__td-sort-icon-active"],icon:S(p.item.raw),size:"small"},null)]})}})])]})};R(()=>T.value?s("tr",null,[s(N,null,null)]):s(K,null,[t.headers?t.headers(B.value):v.value.map((b,c)=>s("tr",null,[b.map((k,p)=>s(O,{column:k,x:p,y:c},null))])),e.loading&&s("tr",{class:"v-data-table-progress"},[s("th",{colspan:y.value.length},[s(Ot,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:t.loader})])])]))}}),Ia=D({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),Ta=L()({name:"VDataTableGroupHeaderRow",props:Ia(),setup(e,l){let{slots:t}=l;const{isGroupOpen:a,toggleGroup:n,extractRows:r}=Je(),{isSelected:o,isSomeSelected:u,select:f}=ne(),{columns:d}=re(),m=w(()=>r([e.item]));return()=>s("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[d.value.map(y=>{var v,x;if(y.key==="data-table-group"){const h=a(e.item)?"$expand":"$next",S=()=>n(e.item);return((v=t["data-table-group"])==null?void 0:v.call(t,{item:e.item,count:m.value.length,props:{icon:h,onClick:S}}))??s(ae,{class:"v-data-table-group-header-row__column"},{default:()=>[s(G,{size:"small",variant:"text",icon:h,onClick:S},null),s("span",null,[e.item.value]),s("span",null,[Ve("("),m.value.length,Ve(")")])]})}if(y.key==="data-table-select"){const h=o(m.value),S=u(m.value)&&!h,i=P=>f(m.value,P);return((x=t["data-table-select"])==null?void 0:x.call(t,{props:{modelValue:h,indeterminate:S,"onUpdate:modelValue":i}}))??s("td",null,[s(me,{modelValue:h,indeterminate:S,"onUpdate:modelValue":i},null)])}return s("td",null,null)})])}}),_a=D({index:Number,item:Object,cellProps:[Object,Function],onClick:de(),onContextmenu:de(),onDblclick:de(),...ge()},"VDataTableRow"),Da=L()({name:"VDataTableRow",props:_a(),setup(e,l){let{slots:t}=l;const{displayClasses:a,mobile:n}=le(e,"v-data-table__tr"),{isSelected:r,toggleSelect:o,someSelected:u,allSelected:f,selectAll:d}=ne(),{isExpanded:m,toggleExpand:y}=Ue(),{toggleSort:v,sortBy:x,isSorted:h}=nt(),{columns:S}=re();R(()=>s("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)},a.value],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&S.value.map((i,P)=>{const g=e.item,T=`item.${i.key}`,B=`header.${i.key}`,V={index:e.index,item:g.raw,internalItem:g,value:He(g.columns,i.key),column:i,isSelected:r,toggleSelect:o,isExpanded:m,toggleExpand:y},O={column:i,selectAll:d,isSorted:h,toggleSort:v,sortBy:x.value,someSelected:u.value,allSelected:f.value,getSortIcon:()=>""},N=typeof e.cellProps=="function"?e.cellProps({index:V.index,item:V.item,internalItem:V.internalItem,value:V.value,column:i}):e.cellProps,b=typeof i.cellProps=="function"?i.cellProps({index:V.index,item:V.item,internalItem:V.internalItem,value:V.value}):i.cellProps;return s(ae,F({align:i.align,class:{"v-data-table__td--expanded-row":i.key==="data-table-expand","v-data-table__td--select-row":i.key==="data-table-select"},fixed:i.fixed,fixedOffset:i.fixedOffset,lastFixed:i.lastFixed,maxWidth:n.value?void 0:i.maxWidth,noPadding:i.key==="data-table-select"||i.key==="data-table-expand",nowrap:i.nowrap,width:n.value?void 0:i.width},N,b),{default:()=>{var k,p,I,C,E;if(t[T]&&!n.value)return(k=t[T])==null?void 0:k.call(t,V);if(i.key==="data-table-select")return((p=t["item.data-table-select"])==null?void 0:p.call(t,V))??s(me,{disabled:!g.selectable,modelValue:r([g]),onClick:Ie(()=>o(g),["stop"])},null);if(i.key==="data-table-expand")return((I=t["item.data-table-expand"])==null?void 0:I.call(t,V))??s(G,{icon:m(g)?"$collapse":"$expand",size:"small",variant:"text",onClick:Ie(()=>y(g),["stop"])},null);const c=Rt(V.value);return n.value?s(K,null,[s("div",{class:"v-data-table__td-title"},[((C=t[B])==null?void 0:C.call(t,O))??i.title]),s("div",{class:"v-data-table__td-value"},[((E=t[T])==null?void 0:E.call(t,V))??c])]):c}})})]))}}),ct=D({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function],...ge()},"VDataTableRows"),Be=L()({name:"VDataTableRows",inheritAttrs:!1,props:ct(),setup(e,l){let{attrs:t,slots:a}=l;const{columns:n}=re(),{expandOnClick:r,toggleExpand:o,isExpanded:u}=Ue(),{isSelected:f,toggleSelect:d}=ne(),{toggleGroup:m,isGroupOpen:y}=Je(),{t:v}=X(),{mobile:x}=le(e);return R(()=>{var h,S;return e.loading&&(!e.items.length||a.loading)?s("tr",{class:"v-data-table-rows-loading",key:"loading"},[s("td",{colspan:n.value.length},[((h=a.loading)==null?void 0:h.call(a))??v(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?s("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[s("td",{colspan:n.value.length},[((S=a["no-data"])==null?void 0:S.call(a))??v(e.noDataText)])]):s(K,null,[e.items.map((i,P)=>{var B;if(i.type==="group"){const V={index:P,item:i,columns:n.value,isExpanded:u,toggleExpand:o,isSelected:f,toggleSelect:d,toggleGroup:m,isGroupOpen:y};return a["group-header"]?a["group-header"](V):s(Ta,F({key:`group-header_${i.id}`,item:i},_e(t,":group-header",()=>V)),a)}const g={index:P,item:i.raw,internalItem:i,columns:n.value,isExpanded:u,toggleExpand:o,isSelected:f,toggleSelect:d},T={...g,props:F({key:`item_${i.key??i.index}`,onClick:r.value?()=>{o(i)}:void 0,index:P,item:i,cellProps:e.cellProps,mobile:x.value},_e(t,":row",()=>g),typeof e.rowProps=="function"?e.rowProps({item:g.item,index:g.index,internalItem:g.internalItem}):e.rowProps)};return s(K,{key:T.props.key},[a.item?a.item(T):s(Da,T.props,a),u(i)&&((B=a["expanded-row"])==null?void 0:B.call(a,g))])})])}),{}}}),Ca=D({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function Fa(e,l,t,a){const n=e.returnObject?l:ee(l,e.itemValue),r=ee(l,e.itemSelectable,!0),o=a.reduce((u,f)=>(f.key!=null&&(u[f.key]=ee(l,f.value)),u),{});return{type:"item",key:e.returnObject?ee(l,e.itemValue):n,index:t,value:n,selectable:r,columns:o,raw:l}}function Ba(e,l,t){return l.map((a,n)=>Fa(e,a,n,t))}function Aa(e,l){return{items:w(()=>Ba(e,e.items,l.value))}}const $a=D({...ct(),width:[String,Number],search:String,...Jt(),...Zt(),...xa(),...Ca(),...da(),...fa(),...dt(),...zt()},"DataTable"),La=D({...na(),...$a(),...jt(),...rt()},"VDataTable"),ja=L()({name:"VDataTable",props:La(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,l){let{attrs:t,slots:a}=l;const{groupBy:n}=Yt(e),{sortBy:r,multiSort:o,mustSort:u}=va(e),{page:f,itemsPerPage:d}=ra(e),{columns:m,headers:y,sortFunctions:v,sortRawFunctions:x,filterFunctions:h}=Va(e,{groupBy:n,showSelect:_(e,"showSelect"),showExpand:_(e,"showExpand")}),{items:S}=Aa(e,m),i=_(e,"search"),{filteredItems:P}=Wt(e,S,i,{transform:M=>M.columns,customKeyFilter:h}),{toggleSort:g}=ga({sortBy:r,multiSort:o,mustSort:u,page:f}),{sortByWithGroups:T,opened:B,extractRows:V,isGroupOpen:O,toggleGroup:N}=ea({groupBy:n,sortBy:r}),{sortedItems:b}=ma(e,P,T,{transform:M=>M.columns,sortFunctions:v,sortRawFunctions:x}),{flatItems:c}=aa(b,n,B),k=w(()=>c.value.length),{startIndex:p,stopIndex:I,pageCount:C,setItemsPerPage:E}=sa({page:f,itemsPerPage:d,itemsLength:k}),{paginatedItems:W}=oa({items:c,startIndex:p,stopIndex:I,itemsPerPage:d}),z=w(()=>V(W.value)),{isSelected:se,select:ft,selectAll:vt,toggleSelect:gt,someSelected:mt,allSelected:bt}=ca(e,{allItems:S,currentPage:z}),{isExpanded:ht,toggleExpand:yt}=Xt(e);la({page:f,itemsPerPage:d,sortBy:r,groupBy:n,search:i}),te({VDataTableRows:{hideNoData:_(e,"hideNoData"),noDataText:_(e,"noDataText"),loading:_(e,"loading"),loadingText:_(e,"loadingText")}});const $=w(()=>({page:f.value,itemsPerPage:d.value,sortBy:r.value,pageCount:C.value,toggleSort:g,setItemsPerPage:E,someSelected:mt.value,allSelected:bt.value,isSelected:se,select:ft,selectAll:vt,toggleSelect:gt,isExpanded:ht,toggleExpand:yt,isGroupOpen:O,toggleGroup:N,items:z.value.map(M=>M.raw),internalItems:z.value,groupedItems:W.value,columns:m.value,headers:y.value}));return R(()=>{const M=Ce.filterProps(e),xt=Fe.filterProps(e),St=Be.filterProps(e),Pt=Te.filterProps(e);return s(Te,F({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},Pt),{top:()=>{var J;return(J=a.top)==null?void 0:J.call(a,$.value)},default:()=>{var J,he,ye,xe,Se,Pe;return a.default?a.default($.value):s(K,null,[(J=a.colgroup)==null?void 0:J.call(a,$.value),s("thead",null,[s(Fe,xt,a)]),(he=a.thead)==null?void 0:he.call(a,$.value),s("tbody",null,[(ye=a["body.prepend"])==null?void 0:ye.call(a,$.value),a.body?a.body($.value):s(Be,F(t,St,{items:W.value}),a),(xe=a["body.append"])==null?void 0:xe.call(a,$.value)]),(Se=a.tbody)==null?void 0:Se.call(a,$.value),(Pe=a.tfoot)==null?void 0:Pe.call(a,$.value)])},bottom:()=>a.bottom?a.bottom($.value):s(K,null,[s(Mt,null,null),s(Ce,M,{prepend:a["footer.prepend"]})])})}),{}}}),Wa=Ht("v-spacer","div","VSpacer");export{ja as V,Ga as a,Kt as b,Wa as c};
//# sourceMappingURL=VSpacer-cSE-vFFt.js.map
