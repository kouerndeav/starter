import{u as f}from"./asyncData.614c6013.js";import{l as v,_ as g,d,P as l,Q as h,m as _,E as y,H as r}from"./entry.5dc3d16a.js";import{q as C,w as c,h as p,e as w,s as P,j as $,u as N}from"./query.c6a8f1a8.js";import{u as j}from"./preview.2ba8fe3c.js";import{_ as E}from"./nuxt-link.7d0163b6.js";const T=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=C(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${p(a)}.${t.integrity}`}/${w(a)}.json`):c(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await g(()=>import("./client-db.4537158d.js"),["./client-db.4537158d.js","./entry.5dc3d16a.js","./query.c6a8f1a8.js","./preview.2ba8fe3c.js","./index.b0fe9fac.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},D=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=y(),{navigation:a}=e,s=o=>r(E,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),m=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}}),R=D;export{R as default};
