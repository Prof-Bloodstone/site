(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"A2+M":function(e,t,r){const n=r("X8hv");e.exports={MDXRenderer:n}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},QILm:function(e,t,r){var n=r("8OQS");e.exports=function(e,t){if(null==e)return{};var r,i,o=n(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)r=c[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}},RIqP:function(e,t,r){var n=r("Ijbi"),i=r("EbDI"),o=r("ZhPi"),c=r("Bnag");e.exports=function(e){return n(e)||i(e)||o(e)||c()}},SksO:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},X8hv:function(e,t,r){var n=r("sXyB"),i=r("RIqP"),o=r("lSNA"),c=r("QILm");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const u=r("q1tI"),{mdx:s}=r("7ljp"),{useMDXScope:p}=r("BfwJ");e.exports=function(e){let{scope:t,children:r}=e,o=c(e,["scope","children"]);const a=p(t),d=u.useMemo(()=>{if(!r)return null;const e=l({React:u,mdx:s},a),t=Object.keys(e),o=t.map(t=>e[t]);return n(Function,["_fn"].concat(i(t),[""+r])).apply(void 0,[{}].concat(i(o)))},[r,t]);return u.createElement(d,l({},o))}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},aTM4:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return S})),r.d(t,"query",(function(){return I}));var n=r("wTIg"),i=r("q1tI"),o=r.n(i),c=r("Wbzz"),a=r("7ljp"),l=r("A2+M"),u=r("vrFN"),s=r("kNJP"),p=r("qKvR");const d=Object(n.a)("section",{target:"e1f3copk0"})("margin:.5rem 0 0 0;@media (min-width:",s.a.viewportSizes.tablet,"){position:fixed;bottom:0;top:53px;height:calc(100vh - 7rem);width:12rem;background:var(--sidebar-background);border-right:1px solid;border-color:var(--navbg-border);overflow-y:auto;padding-top:.5rem;}@media (min-width:",s.a.viewportSizes.desktop,"){width:18rem;margin:.5rem 0 0 0;}"),b=Object(n.a)("div",{target:"e1f3copk1"})({name:"1l6khdp",styles:"text-transform:uppercase;font-weight:300;font-size:1rem;padding:.5rem 0 .5rem 1.5rem;"}),m=Object(n.a)("span",{target:"e1f3copk2"})('align-items:center;display:flex;position:relative;font-size:.9rem;padding:.5rem 0 .5rem 1.5rem;:before{content:"";left:calc(0.5rem);height:8px;position:absolute;transition:all 250ms cubic-bezier(0.4,0,0.2,1) 0s;width:8px;border-radius:10px;background-color:',({active:e})=>e?"var(--primary)":"none",";}:hover{background-color:rgba(2,136,209,0.2);}"),f=Object(n.a)("ul",{target:"e1f3copk3"})({name:"1rq0t9t",styles:"list-style-type:none;padding:0;margin:0.1rem 0;:first-of-type{margin-top:0;}"}),g=Object(n.a)(c.a,{target:"e1f3copk4"})({name:"1ihlabh",styles:"color:var(--foreground) !important;text-decoration:none;"});function y({section:e,location:t}){return Object(p.b)("li",null,Object(p.b)(g,{to:e.url},Object(p.b)(m,{active:t.pathname.startsWith(e.url)},e.title)))}function w({section:e,location:t}){return Object(p.b)("div",null,Object(p.b)(b,null,e.title),Object(p.b)(f,null,e.children.map((e,r)=>Object(p.b)(y,{section:e,key:r,location:t}))))}function v({sidebar:e,location:t}){return Object(p.b)(d,null,e.map((e,r)=>Object(p.b)(w,{key:r,section:e,location:t})))}var h=r("r+XU");const O=Object(n.a)("div",{target:"e1ggvu750"})({name:"1xvy0rr",styles:"background-color:#9a0007;color:white;padding:1rem;"});const j=Object(n.a)("article",{target:"em2qb6j0"})("display:flex;margin:auto;@media (max-width:",s.a.viewportSizes.tablet,"){flex-direction:column-reverse;}@media (min-width:",s.a.viewportSizes.phone,"){margin-bottom:60px;}"),k=Object(n.a)("div",{target:"em2qb6j1"})("margin:0 1rem;width:auto;@media (min-width:",s.a.viewportSizes.tablet,"){margin-left:15rem;margin-right:1rem;width:calc(100vw - 18rem);}@media (min-width:",s.a.viewportSizes.desktop,"){margin-left:20rem;width:calc(100vw - 22rem);}"),x=Object(n.a)("section",{target:"em2qb6j2"})("max-width:40rem;margin:0 auto;@media (min-width:",s.a.viewportSizes.desktop,"){max-width:60rem;}"),P={Caution:function({children:e}){return Object(p.b)(O,null,Object(p.b)("strong",null,"Caution!")," ",e)},Link:c.a};function S({location:e,data:t}){const r=t.mdx;return Object(p.b)(o.a.Fragment,null,Object(p.b)(u.a,{title:r.frontmatter.title,description:r.excerpt}),Object(p.b)(j,null,Object(p.b)(v,{sidebar:h,location:e}),Object(p.b)(k,null,Object(p.b)(x,null,Object(p.b)("h1",null,r.frontmatter.title),Object(p.b)(a.MDXProvider,{components:P},Object(p.b)(l.MDXRenderer,null,r.body))))))}const I="3116041395"},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},"r+XU":function(e){e.exports=JSON.parse('[{"title":"Velocity User\'s Guide","url":"/wiki/","children":[{"title":"Getting Started","url":"/wiki/users/getting-started/"},{"title":"Built-In Commands","url":"/wiki/users/built-in-commands/"},{"title":"Configuring Velocity","url":"/wiki/users/configuration/"},{"title":"Server Compatibility","url":"/wiki/users/server-compatibility/"},{"title":"Player Information Forwarding","url":"/wiki/users/forwarding/"},{"title":"Frequently Asked Questions","url":"/wiki/users/faq"}]},{"title":"Deployment Guide","url":"/wiki/deployment/","children":[{"title":"Securing Your Servers","url":"/wiki/deployment/security/"},{"title":"Tuning Velocity","url":"/wiki/deployment/tuning/"}]},{"title":"Developer Guide","url":"/wiki/developers/","children":[{"title":"Creating Your First Plugin","url":"/wiki/developers/creating-your-first-plugin/"},{"title":"API Basics","url":"/wiki/developers/api-basics/"},{"title":"The Event API","url":"/wiki/developers/event-api/"},{"title":"The Command API","url":"/wiki/developers/command-api/"},{"title":"Plugin Dependencies","url":"/wiki/developers/dependencies/"},{"title":"Task Scheduling","url":"/wiki/developers/task-scheduling/"},{"title":"Common Pitfalls","url":"/wiki/developers/pitfalls/"}]},{"title":"Technical Wiki","url":"/wiki/technical/","children":[{"title":"Why Not Fork BungeeCord?","url":"/wiki/technical/why-not-fork-bungeecord/"}]}]')},sXyB:function(e,t,r){var n=r("SksO"),i=r("b48C");function o(t,r,c){return i()?e.exports=o=Reflect.construct:e.exports=o=function(e,t,r){var i=[null];i.push.apply(i,t);var o=new(Function.bind.apply(e,i));return r&&n(o,r.prototype),o},o.apply(null,arguments)}e.exports=o}}]);
//# sourceMappingURL=component---src-templates-wiki-js-101e4e8104e754527143.js.map