import{q as b,m as v,bA as p,bB as h,r as y,A as R,B as V,aS as F}from"./app-cce71c2a.js";const S=b()({name:"VForm",props:{...v(),...p()},emits:{"update:modelValue":n=>!0,submit:n=>!0},setup(n,i){let{slots:o,emit:f}=i;const r=h(n),s=y();function l(t){t.preventDefault(),r.reset()}function u(t){const a=t,e=r.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),f("submit",a),a.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),a.preventDefault()}return R(()=>{var t;return V("form",{ref:s,class:["v-form",n.class],style:n.style,novalidate:!0,onReset:l,onSubmit:u},[(t=o.default)==null?void 0:t.call(o,r)])}),F(r,s)}});export{S as V};
//# sourceMappingURL=VForm-fbe7a070.js.map
