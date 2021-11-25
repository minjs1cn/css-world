var R=Object.defineProperty;var h=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var b=(e,r,t)=>r in e?R(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,A=(e,r)=>{for(var t in r||(r={}))N.call(r,t)&&b(e,t,r[t]);if(h)for(var t of h(r))V.call(r,t)&&b(e,t,r[t]);return e};import{o as d,c as m,r as l,d as v,p as w,i as I,a as D,b as L,n as x,u as a,e as E,f as u,g,w as _,h as C,j as F,t as T,k as B,F as k,l as S}from"./vendor.ae8ef8f2.js";const q=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}};q();var z=(e,r)=>{for(const[t,n]of r)e[t]=n;return e};const K={},W={class:"cc-row"};function G(e,r){return d(),m("div",W,[l(e.$slots,"default")])}var H=z(K,[["render",G]]);const P="ConfigProvider",J=v({props:{initvalue:{default:()=>({prefix:"cc"})}},setup(e){return w(P,A({},e.initvalue)),(t,n)=>l(t.$slots,"default")}});function j(){const e=I(P);return e||{prefix:"cc"}}const M=v({props:{span:{type:Number,default:24,validator:e=>e>=0&&e<=24},xs:{type:Number,validator:e=>e>=0&&e<=24},sm:{type:Number,validator:e=>e>=0&&e<=24},md:{type:Number,validator:e=>e>=0&&e<=24},lg:{type:Number,validator:e=>e>=0&&e<=24},xl:{type:Number,validator:e=>e>=0&&e<=24},xxl:{type:Number,validator:e=>e>=0&&e<=24}},setup(e){const r=e,{prefix:t}=j(),n=D(()=>{const{span:o,xs:i,sm:s,md:p,lg:f,xl:y,xxl:$}=r;return L(`${t}-col`,{[`${t}-col-${o}`]:o,[`${t}-col-xs-${i}`]:i,[`${t}-col-sm-${s}`]:s,[`${t}-col-md-${p}`]:p,[`${t}-col-lg-${f}`]:f,[`${t}-col-xl-${y}`]:y,[`${t}-col-xxl-${$}`]:$})});return(o,i)=>(d(),m("div",{class:x(a(n))},[l(o.$slots,"default")],2))}});const Q=v({props:{border:{type:Boolean,default:!1}},setup(e){const r=e,{prefix:t}=j(),n=D(()=>L(`${t}-card`,{[`${t}-card-border`]:r.border}));return(o,i)=>(d(),m("div",{class:x(a(n))},[E("div",{class:x(a(t)+"-card-content")},[l(o.$slots,"default")],2),E("div",{class:x(a(t)+"-card-footer")},[l(o.$slots,"footer")],2)],2))}}),U="modulepreload",O={},X="/css-world/",c=function(r,t){return!t||t.length===0?r():Promise.all(t.map(n=>{if(n=`${X}${n}`,n in O)return;O[n]=!0;const o=n.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":U,o||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),o)return new Promise((p,f)=>{s.addEventListener("load",p),s.addEventListener("error",f)})})).then(()=>r())},Y=[{title:"\u5E7D\u7075\u6309\u94AE",component:u(()=>c(()=>import("./index.2df3d112.js"),["assets/index.2df3d112.js","assets/index.73717aa0.css","assets/vendor.ae8ef8f2.js"])),git:"/ghost-button/index.vue"},{title:"\u6CE2\u6D6A",component:u(()=>c(()=>import("./index.5f362360.js"),["assets/index.5f362360.js","assets/index.5deecc00.css","assets/vendor.ae8ef8f2.js"])),git:"/water-wave/index.vue"},{title:"\u5F62\u72B6-\u592A\u6781",component:u(()=>c(()=>import("./index.8490d4a0.js"),["assets/index.8490d4a0.js","assets/index.741d7af6.css","assets/vendor.ae8ef8f2.js"])),git:"/shape-taiji/index.vue"},{title:"\u6309\u94AE\u6C34\u6CE2\u7EB9",component:u(()=>c(()=>import("./index.b8d57930.js"),["assets/index.b8d57930.js","assets/index.7c40a1e2.css","assets/vendor.ae8ef8f2.js"])),git:"/download-button-water/index.vue"},{title:"\u4E0B\u8F7D\u6309\u94AE",component:u(()=>c(()=>import("./index.70b1755f.js"),["assets/index.70b1755f.js","assets/index.a8f3c9f2.css","assets/vendor.ae8ef8f2.js"])),git:"/download-button/index.vue"},{title:"\u52FE\u9009",component:u(()=>c(()=>import("./index.daad9a1b.js"),["assets/index.daad9a1b.js","assets/index.5ea7698c.css","assets/vendor.ae8ef8f2.js"])),git:"/tick/index.vue"},{title:"3D\u6309\u94AE",component:u(()=>c(()=>import("./index.6a645789.js"),["assets/index.6a645789.js","assets/index.1c4550d6.css","assets/vendor.ae8ef8f2.js"])),git:"/3d-button/index.vue"},{title:"\u8F6E\u64AD\u56FE",component:u(()=>c(()=>import("./index.f9ed4974.js"),["assets/index.f9ed4974.js","assets/index.c4ba8016.css","assets/vendor.ae8ef8f2.js"])),git:"/swiper/index.vue"},{title:"\u7C98\u6EDE\u6548\u679C",component:u(()=>c(()=>import("./index.e3c4ceb4.js"),["assets/index.e3c4ceb4.js","assets/index.9204e062.css","assets/vendor.ae8ef8f2.js"])),git:"/viscous-effect/index.vue"},{title:"\u7C92\u5B50",component:u(()=>c(()=>import("./index.ae5d6a1c.js"),["assets/index.ae5d6a1c.js","assets/index.41a1258f.css","assets/vendor.ae8ef8f2.js"])),git:"/particle-effect/index.vue"},{title:"3D\u5361\u724C\u7FFB\u8F6C",component:u(()=>c(()=>import("./index.1b5b2d52.js"),["assets/index.1b5b2d52.js","assets/index.6fc6cbd7.css","assets/vendor.ae8ef8f2.js"])),git:"/3d-turn-card/index.vue"},{title:"3D\u76D2\u5B50",component:u(()=>c(()=>import("./index.4dcd93bf.js"),["assets/index.4dcd93bf.js","assets/index.0b7e38bb.css","assets/vendor.ae8ef8f2.js"])),git:"/3d-box/index.vue"},{title:"3D\u7A7F\u68AD\u6548\u679C",component:u(()=>c(()=>import("./index.57000ade.js"),["assets/index.57000ade.js","assets/index.201ae2ae.css","assets/vendor.ae8ef8f2.js"])),git:"/3d-transfer/index.vue"},{title:"\u5B57\u4F53\u7279\u5F81",component:u(()=>c(()=>import("./index.57e0e954.js"),["assets/index.57e0e954.js","assets/index.60a192f6.css","assets/vendor.ae8ef8f2.js"])),git:"/font-variation-settings/index.vue"}];const Z=["href"],ee=v({setup(e){return(r,t)=>(d(),g(a(J),null,{default:_(()=>[C(a(H),null,{default:_(()=>[(d(!0),m(k,null,F(a(Y),(n,o)=>(d(),g(a(M),{class:"my-col",span:24,md:12,xl:6,key:o},{default:_(()=>[C(a(Q),{border:""},{footer:_(()=>[E("a",{href:"//github.com/minjs1cn/css-world/src/demos"+n.git,target:"_blank",class:"my-open"},T(n.title),9,Z)]),default:_(()=>[(d(),g(B(n.component)))]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}))}});S(ee).mount("#app");export{z as _};