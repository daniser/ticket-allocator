import{bf as Ft}from"./app-Dxhld-21.js";function Pt(w,S){for(var _=0;_<S.length;_++){const h=S[_];if(typeof h!="string"&&!Array.isArray(h)){for(const d in h)if(d!=="default"&&!(d in w)){const T=Object.getOwnPropertyDescriptor(h,d);T&&Object.defineProperty(w,d,T.get?T:{enumerable:!0,get:()=>h[d]})}}}return Object.freeze(Object.defineProperty(w,Symbol.toStringTag,{value:"Module"}))}var B={exports:{}},ft;function It(){return ft||(ft=1,function(w){(function(){function S(t,n,e){return t.call.apply(t.bind,arguments)}function _(t,n,e){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var o=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(o,i),t.apply(n,o)}}return function(){return t.apply(n,arguments)}}function h(t,n,e){return h=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?S:_,h.apply(null,arguments)}var d=Date.now||function(){return+new Date};function T(t,n){this.a=t,this.o=n||t,this.c=this.o.document}var ut=!!window.FontFace;function W(t,n,e,i){if(n=t.c.createElement(n),e)for(var o in e)e.hasOwnProperty(o)&&(o=="style"?n.style.cssText=e[o]:n.setAttribute(o,e[o]));return i&&n.appendChild(t.c.createTextNode(i)),n}function D(t,n,e){t=t.c.getElementsByTagName(n)[0],t||(t=document.documentElement),t.insertBefore(e,t.lastChild)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function y(t,n,e){n=n||[],e=e||[];for(var i=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var s=!1,r=0;r<i.length;r+=1)if(n[o]===i[r]){s=!0;break}s||i.push(n[o])}for(n=[],o=0;o<i.length;o+=1){for(s=!1,r=0;r<e.length;r+=1)if(i[o]===e[r]){s=!0;break}s||n.push(i[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function q(t,n){for(var e=t.className.split(/\s+/),i=0,o=e.length;i<o;i++)if(e[i]==n)return!0;return!1}function ht(t){return t.o.location.hostname||t.a.location.hostname}function L(t,n,e){function i(){a&&o&&s&&(a(r),a=null)}n=W(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,s=!0,r=null,a=e||null;ut?(n.onload=function(){o=!0,i()},n.onerror=function(){o=!0,r=Error("Stylesheet failed to load"),i()}):setTimeout(function(){o=!0,i()},0),D(t,"head",n)}function F(t,n,e,i){var o=t.c.getElementsByTagName("head")[0];if(o){var s=W(t,"script",{src:n}),r=!1;return s.onload=s.onreadystatechange=function(){r||this.readyState&&this.readyState!="loaded"&&this.readyState!="complete"||(r=!0,e&&e(null),s.onload=s.onreadystatechange=null,s.parentNode.tagName=="HEAD"&&o.removeChild(s))},o.appendChild(s),setTimeout(function(){r||(r=!0,e&&e(Error("Script load timeout")))},i||5e3),s}return null}function $(){this.a=0,this.c=null}function z(t){return t.a++,function(){t.a--,M(t)}}function H(t,n){t.c=n,M(t)}function M(t){t.a==0&&t.c&&(t.c(),t.c=null)}function G(t){this.a=t||"-"}G.prototype.c=function(t){for(var n=[],e=0;e<arguments.length;e++)n.push(arguments[e].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)};function g(t,n){this.c=t,this.f=4,this.a="n";var e=(n||"n4").match(/^([nio])([1-9])$/i);e&&(this.a=e[1],this.f=parseInt(e[2],10))}function lt(t){return K(t)+" "+(t.f+"00")+" 300px "+R(t.c)}function R(t){var n=[];t=t.split(/,\s*/);for(var e=0;e<t.length;e++){var i=t[e].replace(/['"]/g,"");i.indexOf(" ")!=-1||/^\d/.test(i)?n.push("'"+i+"'"):n.push(i)}return n.join(",")}function p(t){return t.a+t.f}function K(t){var n="normal";return t.a==="o"?n="oblique":t.a==="i"&&(n="italic"),n}function pt(t){var n=4,e="n",i=null;return t&&((i=t.match(/(normal|oblique|italic)/i))&&i[1]&&(e=i[1].substr(0,1).toLowerCase()),(i=t.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?n=7:/[1-9]00/.test(i[1])&&(n=parseInt(i[1].substr(0,1),10)))),e+n}function gt(t,n){this.c=t,this.f=t.o.document.documentElement,this.h=n,this.a=new G("-"),this.j=n.events!==!1,this.g=n.classes!==!1}function vt(t){t.g&&y(t.f,[t.a.c("wf","loading")]),x(t,"loading")}function U(t){if(t.g){var n=q(t.f,t.a.c("wf","active")),e=[],i=[t.a.c("wf","loading")];n||e.push(t.a.c("wf","inactive")),y(t.f,e,i)}x(t,"inactive")}function x(t,n,e){t.j&&t.h[n]&&(e?t.h[n](e.c,p(e)):t.h[n]())}function dt(){this.c={}}function mt(t,n,e){var i=[],o;for(o in n)if(n.hasOwnProperty(o)){var s=t.c[o];s&&i.push(s(n[o],e))}return i}function E(t,n){this.c=t,this.f=n,this.a=W(this.c,"span",{"aria-hidden":"true"},this.f)}function A(t){D(t.c,"body",t.a)}function C(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+R(t.c)+";"+("font-style:"+K(t)+";font-weight:"+(t.f+"00")+";")}function V(t,n,e,i,o,s){this.g=t,this.j=n,this.a=i,this.c=e,this.f=o||3e3,this.h=s||void 0}V.prototype.start=function(){var t=this.c.o.document,n=this,e=d(),i=new Promise(function(r,a){function f(){d()-e>=n.f?a():t.fonts.load(lt(n.a),n.h).then(function(c){1<=c.length?r():setTimeout(f,25)},function(){a()})}f()}),o=null,s=new Promise(function(r,a){o=setTimeout(a,n.f)});Promise.race([s,i]).then(function(){o&&(clearTimeout(o),o=null),n.g(n.a)},function(){n.j(n.a)})};function X(t,n,e,i,o,s,r){this.v=t,this.B=n,this.c=e,this.a=i,this.s=r||"BESbswy",this.f={},this.w=o||3e3,this.u=s||null,this.m=this.j=this.h=this.g=null,this.g=new E(this.c,this.s),this.h=new E(this.c,this.s),this.j=new E(this.c,this.s),this.m=new E(this.c,this.s),t=new g(this.a.c+",serif",p(this.a)),t=C(t),this.g.a.style.cssText=t,t=new g(this.a.c+",sans-serif",p(this.a)),t=C(t),this.h.a.style.cssText=t,t=new g("serif",p(this.a)),t=C(t),this.j.a.style.cssText=t,t=new g("sans-serif",p(this.a)),t=C(t),this.m.a.style.cssText=t,A(this.g),A(this.h),A(this.j),A(this.m)}var N={D:"serif",C:"sans-serif"},P=null;function J(){if(P===null){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);P=!!t&&(536>parseInt(t[1],10)||parseInt(t[1],10)===536&&11>=parseInt(t[2],10))}return P}X.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=d(),Y(this)};function Q(t,n,e){for(var i in N)if(N.hasOwnProperty(i)&&n===t.f[N[i]]&&e===t.f[N[i]])return!0;return!1}function Y(t){var n=t.g.a.offsetWidth,e=t.h.a.offsetWidth,i;(i=n===t.f.serif&&e===t.f["sans-serif"])||(i=J()&&Q(t,n,e)),i?d()-t.A>=t.w?J()&&Q(t,n,e)&&(t.u===null||t.u.hasOwnProperty(t.a.c))?I(t,t.v):I(t,t.B):wt(t):I(t,t.v)}function wt(t){setTimeout(h(function(){Y(this)},t),50)}function I(t,n){setTimeout(h(function(){b(this.g.a),b(this.h.a),b(this.j.a),b(this.m.a),n(this.a)},t),0)}function k(t,n,e){this.c=t,this.a=n,this.f=0,this.m=this.j=!1,this.s=e}var O=null;k.prototype.g=function(t){var n=this.a;n.g&&y(n.f,[n.a.c("wf",t.c,p(t).toString(),"active")],[n.a.c("wf",t.c,p(t).toString(),"loading"),n.a.c("wf",t.c,p(t).toString(),"inactive")]),x(n,"fontactive",t),this.m=!0,Z(this)},k.prototype.h=function(t){var n=this.a;if(n.g){var e=q(n.f,n.a.c("wf",t.c,p(t).toString(),"active")),i=[],o=[n.a.c("wf",t.c,p(t).toString(),"loading")];e||i.push(n.a.c("wf",t.c,p(t).toString(),"inactive")),y(n.f,i,o)}x(n,"fontinactive",t),Z(this)};function Z(t){--t.f==0&&t.j&&(t.m?(t=t.a,t.g&&y(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),x(t,"active")):U(t.a))}function tt(t){this.j=t,this.a=new dt,this.h=0,this.f=this.g=!0}tt.prototype.load=function(t){this.c=new T(this.j,t.context||this.j),this.g=t.events!==!1,this.f=t.classes!==!1,xt(this,new gt(this.c,t),t)};function yt(t,n,e,i,o){var s=--t.h==0;(t.f||t.g)&&setTimeout(function(){var r=o||null,a=i||null||{};if(e.length===0&&s)U(n.a);else{n.f+=e.length,s&&(n.j=s);var f,c=[];for(f=0;f<e.length;f++){var u=e[f],l=a[u.c],v=n.a,j=u;if(v.g&&y(v.f,[v.a.c("wf",j.c,p(j).toString(),"loading")]),x(v,"fontloading",j),v=null,O===null)if(window.FontFace){var j=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),Wt=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);O=j?42<parseInt(j[1],10):!Wt}else O=!1;O?v=new V(h(n.g,n),h(n.h,n),n.c,u,n.s,l):v=new X(h(n.g,n),h(n.h,n),n.c,u,n.s,r,l),c.push(v)}for(f=0;f<c.length;f++)c[f].start()}},0)}function xt(t,n,e){var o=[],i=e.timeout;vt(n);var o=mt(t.a,e,t.c),s=new k(t.c,n,i);for(t.h=o.length,n=0,e=o.length;n<e;n++)o[n].load(function(r,a,f){yt(t,s,r,a,f)})}function nt(t,n){this.c=t,this.a=n}nt.prototype.load=function(t){function n(){if(s["__mti_fntLst"+i]){var r=s["__mti_fntLst"+i](),a=[],f;if(r)for(var c=0;c<r.length;c++){var u=r[c].fontfamily;r[c].fontStyle!=null&&r[c].fontWeight!=null?(f=r[c].fontStyle+r[c].fontWeight,a.push(new g(u,f))):a.push(new g(u))}t(a)}else setTimeout(function(){n()},50)}var e=this,i=e.a.projectId,o=e.a.version;if(i){var s=e.c.o;F(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+i+".js"+(o?"?v="+o:""),function(r){r?t([]):(s["__MonotypeConfiguration__"+i]=function(){return e.a},n())}).id="__MonotypeAPIScript__"+i}else t([])};function it(t,n){this.c=t,this.a=n}it.prototype.load=function(t){var n,e,i=this.a.urls||[],o=this.a.families||[],s=this.a.testStrings||{},r=new $;for(n=0,e=i.length;n<e;n++)L(this.c,i[n],z(r));var a=[];for(n=0,e=o.length;n<e;n++)if(i=o[n].split(":"),i[1])for(var f=i[1].split(","),c=0;c<f.length;c+=1)a.push(new g(i[0],f[c]));else a.push(new g(i[0]));H(r,function(){t(a,s)})};function jt(t,n){t?this.c=t:this.c=_t,this.a=[],this.f=[],this.g=n||""}var _t="https://fonts.googleapis.com/css";function Tt(t,n){for(var e=n.length,i=0;i<e;i++){var o=n[i].split(":");o.length==3&&t.f.push(o.pop());var s="";o.length==2&&o[1]!=""&&(s=":"),t.a.push(o.join(s))}}function St(t){if(t.a.length==0)throw Error("No fonts to load!");if(t.c.indexOf("kit=")!=-1)return t.c;for(var n=t.a.length,e=[],i=0;i<n;i++)e.push(t.a[i].replace(/ /g,"+"));return n=t.c+"?family="+e.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}function bt(t){this.f=t,this.a=[],this.c={}}var et={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Et={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},At={i:"i",italic:"i",n:"n",normal:"n"},Ct=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function Nt(t){for(var n=t.f.length,e=0;e<n;e++){var i=t.f[e].split(":"),o=i[0].replace(/\+/g," "),s=["n4"];if(2<=i.length){var r,a=i[1];if(r=[],a)for(var a=a.split(","),f=a.length,c=0;c<f;c++){var u;if(u=a[c],u.match(/^[\w-]+$/)){var l=Ct.exec(u.toLowerCase());if(l==null)u="";else{if(u=l[2],u=u==null||u==""?"n":At[u],l=l[1],l==null||l=="")l="4";else var v=Et[l],l=v||(isNaN(l)?"4":l.substr(0,1));u=[u,l].join("")}}else u="";u&&r.push(u)}0<r.length&&(s=r),i.length==3&&(i=i[2],r=[],i=i?i.split(","):r,0<i.length&&(i=et[i[0]])&&(t.c[o]=i))}for(t.c[o]||(i=et[o])&&(t.c[o]=i),i=0;i<s.length;i+=1)t.a.push(new g(o,s[i]))}}function ot(t,n){this.c=t,this.a=n}var Ot={Arimo:!0,Cousine:!0,Tinos:!0};ot.prototype.load=function(t){var n=new $,e=this.c,i=new jt(this.a.api,this.a.text),o=this.a.families;Tt(i,o);var s=new bt(o);Nt(s),L(e,St(i),z(n)),H(n,function(){t(s.a,s.c,Ot)})};function st(t,n){this.c=t,this.a=n}st.prototype.load=function(t){var n=this.a.id,e=this.c.o;n?F(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",function(i){if(i)t([]);else if(e.Typekit&&e.Typekit.config&&e.Typekit.config.fn){i=e.Typekit.config.fn;for(var o=[],s=0;s<i.length;s+=2)for(var r=i[s],a=i[s+1],f=0;f<a.length;f++)o.push(new g(r,a[f]));try{e.Typekit.load({events:!1,classes:!1,async:!0})}catch{}t(o)}},2e3):t([])};function rt(t,n){this.c=t,this.f=n,this.a=[]}rt.prototype.load=function(t){var n=this.f.id,e=this.c.o,i=this;n?(e.__webfontfontdeckmodule__||(e.__webfontfontdeckmodule__={}),e.__webfontfontdeckmodule__[n]=function(o,s){for(var r=0,a=s.fonts.length;r<a;++r){var f=s.fonts[r];i.a.push(new g(f.name,pt("font-weight:"+f.weight+";font-style:"+f.style)))}t(i.a)},F(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ht(this.c)+"/"+n+".js",function(o){o&&t([])})):t([])};var m=new tt(window);m.a.c.custom=function(t,n){return new it(n,t)},m.a.c.fontdeck=function(t,n){return new rt(n,t)},m.a.c.monotype=function(t,n){return new nt(n,t)},m.a.c.typekit=function(t,n){return new st(n,t)},m.a.c.google=function(t,n){return new ot(n,t)};var at={load:h(m.load,m)};w.exports?w.exports=at:(window.WebFont=at,window.WebFontConfig&&m.load(window.WebFontConfig))})()}(B)),B.exports}var ct=It();const kt=Ft(ct),Dt=Pt({__proto__:null,default:kt},[ct]);export{Dt as w};
//# sourceMappingURL=webfontloader-5EtCHzBS.js.map
