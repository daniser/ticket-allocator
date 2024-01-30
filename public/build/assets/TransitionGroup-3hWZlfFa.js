import{bW as $,bX as nt,bY as et,bZ as V,b_ as ot,_ as st,b$ as rt,c0 as at,by as it,F as ct,c1 as lt,c2 as M,c3 as P,i as ft}from"./app-668J_JAY.js";const g="transition",y="animation",G={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ut=$({},nt,G),T=(t,n=[])=>{V(t)?t.forEach(o=>o(...n)):t&&t(...n)},x=t=>t?V(t)?t.some(n=>n.length>1):t.length>1:!1;function mt(t){const n={};for(const e in t)e in G||(n[e]=t[e]);if(t.css===!1)return n;const{name:o="v",type:s,duration:l,enterFromClass:c=`${o}-enter-from`,enterActiveClass:i=`${o}-enter-active`,enterToClass:f=`${o}-enter-to`,appearFromClass:d=c,appearActiveClass:r=i,appearToClass:a=f,leaveFromClass:u=`${o}-leave-from`,leaveActiveClass:m=`${o}-leave-active`,leaveToClass:b=`${o}-leave-to`}=t,E=dt(l),Y=E&&E[0],Z=E&&E[1],{onBeforeEnter:L,onEnter:w,onEnterCancelled:D,onLeave:A,onLeaveCancelled:J,onBeforeAppear:K=L,onAppear:Q=w,onAppearCancelled:tt=D}=n,S=(e,p,h)=>{C(e,p?a:f),C(e,p?r:i),h&&h()},N=(e,p)=>{e._isLeaving=!1,C(e,u),C(e,b),C(e,m),p&&p()},R=e=>(p,h)=>{const F=e?Q:w,I=()=>S(p,e,h);T(F,[p,I]),B(()=>{C(p,e?d:c),v(p,e?a:f),x(F)||O(p,s,Y,I)})};return $(n,{onBeforeEnter(e){T(L,[e]),v(e,c),v(e,i)},onBeforeAppear(e){T(K,[e]),v(e,d),v(e,r)},onEnter:R(!1),onAppear:R(!0),onLeave(e,p){e._isLeaving=!0;const h=()=>N(e,p);v(e,u),j(),v(e,m),B(()=>{e._isLeaving&&(C(e,u),v(e,b),x(A)||O(e,s,Z,h))}),T(A,[e,h])},onEnterCancelled(e){S(e,!1),T(D,[e])},onAppearCancelled(e){S(e,!0),T(tt,[e])},onLeaveCancelled(e){N(e),T(J,[e])}})}function dt(t){if(t==null)return null;if(et(t))return[_(t.enter),_(t.leave)];{const n=_(t);return[n,n]}}function _(t){return ot(t)}function v(t,n){n.split(/\s+/).forEach(o=>o&&t.classList.add(o)),(t._vtc||(t._vtc=new Set)).add(n)}function C(t,n){n.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:o}=t;o&&(o.delete(n),o.size||(t._vtc=void 0))}function B(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let pt=0;function O(t,n,o,s){const l=t._endId=++pt,c=()=>{l===t._endId&&s()};if(o)return setTimeout(c,o);const{type:i,timeout:f,propCount:d}=W(t,n);if(!i)return s();const r=i+"end";let a=0;const u=()=>{t.removeEventListener(r,m),c()},m=b=>{b.target===t&&++a>=d&&u()};setTimeout(()=>{a<d&&u()},f+1),t.addEventListener(r,m)}function W(t,n){const o=window.getComputedStyle(t),s=E=>(o[E]||"").split(", "),l=s(`${g}Delay`),c=s(`${g}Duration`),i=k(l,c),f=s(`${y}Delay`),d=s(`${y}Duration`),r=k(f,d);let a=null,u=0,m=0;n===g?i>0&&(a=g,u=i,m=c.length):n===y?r>0&&(a=y,u=r,m=d.length):(u=Math.max(i,r),a=u>0?i>r?g:y:null,m=a?a===g?c.length:d.length:0);const b=a===g&&/\b(transform|all)(,|$)/.test(s(`${g}Property`).toString());return{type:a,timeout:u,propCount:m,hasTransform:b}}function k(t,n){for(;t.length<n.length;)t=t.concat(t);return Math.max(...n.map((o,s)=>H(o)+H(t[s])))}function H(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function j(){return document.body.offsetHeight}const q=new WeakMap,z=new WeakMap,U={name:"TransitionGroup",props:$({},ut,{tag:String,moveClass:String}),setup(t,{slots:n}){const o=st(),s=rt();let l,c;return at(()=>{if(!l.length)return;const i=t.moveClass||`${t.name||"v"}-move`;if(!Tt(l[0].el,o.vnode.el,i))return;l.forEach(gt),l.forEach(Ct);const f=l.filter(ht);j(),f.forEach(d=>{const r=d.el,a=r.style;v(r,i),a.transform=a.webkitTransform=a.transitionDuration="";const u=r._moveCb=m=>{m&&m.target!==r||(!m||/transform$/.test(m.propertyName))&&(r.removeEventListener("transitionend",u),r._moveCb=null,C(r,i))};r.addEventListener("transitionend",u)})}),()=>{const i=it(t),f=mt(i);let d=i.tag||ct;l=c,c=n.default?lt(n.default()):[];for(let r=0;r<c.length;r++){const a=c[r];a.key!=null&&M(a,P(a,f,s,o))}if(l)for(let r=0;r<l.length;r++){const a=l[r];M(a,P(a,f,s,o)),q.set(a,X(a.el))}return ft(d,null,c)}}},vt=t=>delete t.mode;U.props;const Et=U;function gt(t){const n=t.el;n._moveCb&&n._moveCb(),n._enterCb&&n._enterCb()}function X(t){const n=t.getBoundingClientRect();if(!t.parentElement)return n;const o=t.parentElement.getBoundingClientRect();return new DOMRectReadOnly(n.x-o.x,n.y-o.y,n.width-o.width,n.height-o.height)}function Ct(t){z.set(t,X(t.el))}function ht(t){const n=q.get(t),o=z.get(t),s=n.left-o.left,l=n.top-o.top;if(s||l){const c=t.el.style;return c.transform=c.webkitTransform=`translate(${s}px,${l}px)`,c.transitionDuration="0s",t}}function Tt(t,n,o){const s=t.cloneNode();t._vtc&&t._vtc.forEach(i=>{i.split(/\s+/).forEach(f=>f&&s.classList.remove(f))}),o.split(/\s+/).forEach(i=>i&&s.classList.add(i)),s.style.display="none";const l=n.nodeType===1?n:n.parentNode;l.appendChild(s);const{hasTransform:c}=W(s);return l.removeChild(s),c}export{Et as T};
//# sourceMappingURL=TransitionGroup-3hWZlfFa.js.map
