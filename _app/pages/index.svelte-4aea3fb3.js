import{S as _,i as v,s as m,v as w}from"../chunks/index-3ccfa173.js";import{c as n}from"../chunks/singletons-d1fb5791.js";import{b as $}from"../chunks/paths-396f020f.js";n.disable_scroll_handling;const b=n.goto;n.invalidate;n.prefetch;n.prefetch_routes;n.before_navigate;n.after_navigate;function x(u){var f=this&&this.__awaiter||function(e,i,a,s){function d(o){return o instanceof a?o:new a(function(c){c(o)})}return new(a||(a=Promise))(function(o,c){function h(t){try{r(s.next(t))}catch(l){c(l)}}function p(t){try{r(s.throw(t))}catch(l){c(l)}}function r(t){t.done?o(t.value):d(t.value).then(h,p)}r((s=s.apply(e,i||[])).next())})};return w(()=>f(void 0,void 0,void 0,function*(){const e=window.location.hash.split("/");let i="edit";e.length>2&&(i=`${e[1]}#${e[2]}`),yield b(`${$}/${i}`,{replaceState:!0})})),[]}class R extends _{constructor(f){super();v(this,f,x,null,m,{})}}export{R as default};
