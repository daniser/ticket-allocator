import{m as b,b9 as p,ba as v,r as h,j as R,k as V,aT as F}from"./app-da4cf41a.js";const k=b()({name:"VForm",props:{...p()},emits:{"update:modelValue":n=>!0,submit:n=>!0},setup(n,i){let{slots:o,emit:f}=i;const r=v(n),s=h();function u(t){t.preventDefault(),r.reset()}function l(t){const a=t,e=r.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),f("submit",a),a.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),a.preventDefault()}return R(()=>{var t;return V("form",{ref:s,class:"v-form",novalidate:!0,onReset:u,onSubmit:l},[(t=o.default)==null?void 0:t.call(o,r)])}),F(r,s)}});export{k as V};
//# sourceMappingURL=VForm-8606ec75.js.map
