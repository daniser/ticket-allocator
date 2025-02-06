import{g as l,n as s,K,h as c,f as n,p as y,l as f,au as z,F as A,av as P,$ as S,ap as V,L as x,aw as m,ax as J,a as Q,ay as $,az as q,G as U,aA as W,aB as X,aC as Y,aD as Z,aE as ee,aF as ae,aG as te,d as h,i as ne,j as de,aH as ie,aI as le,aJ as se,B as ce,aK as re,m as ue,aL as oe,aM as ve,aN as me,aO as ye,aP as ge,aQ as ke,aR as be,aS as Ce}from"./app-Dwjgz7ko.js";const Ve=l()({name:"VCardActions",props:s(),setup(e,d){let{slots:t}=d;return K({VBtn:{slim:!0,variant:"text"}}),c(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),fe=y({opacity:[Number,String],...s(),...f()},"VCardSubtitle"),Ie=l()({name:"VCardSubtitle",props:fe(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),pe=z("v-card-title"),Ae=y({appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:[String,Number],title:[String,Number],...s(),...x()},"VCardItem"),Pe=l()({name:"VCardItem",props:Ae(),setup(e,d){let{slots:t}=d;return c(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),g=!!(a||t.prepend),r=!!(e.appendAvatar||e.appendIcon),k=!!(r||t.append),b=!!(e.title!=null||t.title),C=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[g&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(V,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(A,null,[e.prependAvatar&&n(P,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(S,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[b&&n(pe,{key:"title"},{default:()=>{var i;return[((i=t.title)==null?void 0:i.call(t))??e.title]}}),C&&n(Ie,{key:"subtitle"},{default:()=>{var i;return[((i=t.subtitle)==null?void 0:i.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),k&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(V,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(A,null,[e.appendIcon&&n(S,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(P,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Se=y({opacity:[Number,String],...s(),...f()},"VCardText"),he=l()({name:"VCardText",props:Se(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),xe=y({appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Ce(),...s(),...x(),...be(),...ke(),...ge(),...ye(),...me(),...ve(),...oe(),...f(),...ue(),...re({variant:"elevated"})},"VCard"),Be=l()({name:"VCard",directives:{Ripple:J},props:xe(),setup(e,d){let{attrs:t,slots:a}=d;const{themeClasses:g}=Q(e),{borderClasses:r}=$(e),{colorClasses:k,colorStyles:b,variantClasses:C}=q(e),{densityClasses:u}=U(e),{dimensionStyles:i}=W(e),{elevationClasses:T}=X(e),{loaderClasses:B}=Y(e),{locationStyles:L}=Z(e),{positionClasses:D}=ee(e),{roundedClasses:N}=ae(e),o=te(e,t),_=h(()=>e.link!==!1&&o.isLink.value),v=h(()=>!e.disabled&&e.link!==!1&&(e.link||o.isClickable.value));return c(()=>{const R=_.value?"a":e.tag,F=!!(a.title||e.title!=null),E=!!(a.subtitle||e.subtitle!=null),M=F||E,O=!!(a.append||e.appendAvatar||e.appendIcon),j=!!(a.prepend||e.prependAvatar||e.prependIcon),w=!!(a.image||e.image),G=M||j||O,H=!!(a.text||e.text!=null);return ne(n(R,ce({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":v.value},g.value,r.value,k.value,u.value,T.value,B.value,D.value,N.value,C.value,e.class],style:[b.value,i.value,L.value,e.style],onClick:v.value&&o.navigate,tabindex:e.disabled?-1:void 0},o.linkProps),{default:()=>{var I;return[w&&n("div",{key:"image",class:"v-card__image"},[a.image?n(V,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(le,{key:"image-img",cover:!0,src:e.image},null)]),n(se,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),G&&n(Pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),H&&n(he,{key:"text"},{default:()=>{var p;return[((p=a.text)==null?void 0:p.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&n(Ve,null,{default:a.actions}),ie(v.value,"v-card")]}}),[[de("ripple"),v.value&&e.ripple]])}),{}}});export{Be as V,he as a,pe as b,Ve as c};
//# sourceMappingURL=VCard-DMhTEms0.js.map
