(()=>{var e={};e.id=931,e.ids=[931],e.modules={53524:e=>{"use strict";e.exports=require("@prisma/client")},47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},63477:e=>{"use strict";e.exports=require("querystring")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},67704:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>p,routeModule:()=>d,tree:()=>c});var s=r(50482),i=r(69108),n=r(62563),a=r.n(n),o=r(68300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,34574)),"/Users/lurker/Desktop/employease/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,80577)),"/Users/lurker/Desktop/employease/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"]}],p=["/Users/lurker/Desktop/employease/app/page.tsx"],u="/page",x={require:r,loadChunk:()=>Promise.resolve()},d=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},13648:(e,t,r)=>{Promise.resolve().then(r.bind(r,78623)),Promise.resolve().then(r.bind(r,62020))},34574:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var s=r(25036),i=r(81355),n=r(83411),a=r(86843);let o=(0,a.createProxy)(String.raw`/Users/lurker/Desktop/employease/app/components/client/VacancyCard.tsx`),{__esModule:l,$$typeof:c}=o,p=o.default,u=(0,a.createProxy)(String.raw`/Users/lurker/Desktop/employease/app/components/client/VacancyFilter.tsx`),{__esModule:x,$$typeof:d}=u,m=u.default;async function g({filter:e}){let t;process.env.BASE_PATH;let r=await fetch("https://employease.matrozis.dev/api/vacancy/getAll"),i=(await r.json()).allVacancies;return t=e?s.jsx(s.Fragment,{children:s.jsx(m,{vacancies:i})}):s.jsx(s.Fragment,{children:i&&i.map(e=>s.jsx(p,{item:e},e.id))}),s.jsx(s.Fragment,{children:s.jsx("div",{className:"w-full flex justify-center flex-wrap gap-3 ",children:t})})}async function f(){let e=await (0,i.getServerSession)(n.L);return s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center mx-5",children:[(0,s.jsxs)("p",{className:"my-5",children:["Signed in as ",e?e.user.email:"Guest"]}),s.jsx("div",{className:"w-full max-w-[1140px] flex gap-6 flex-wrap justify-center items-center",children:s.jsx(g,{filter:!1})})]})})}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[431,521,123,30,900,919],()=>r(67704));module.exports=s})();