(()=>{var e={};e.id=988,e.ids=[988],e.modules={53524:e=>{"use strict";e.exports=require("@prisma/client")},47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},63477:e=>{"use strict";e.exports=require("querystring")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},63725:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>x,tree:()=>c});var r=t(50482),i=t(69108),a=t(62563),n=t.n(a),l=t(68300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(s,o);let c=["",{children:["profile",{children:["vacancies",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,87053)),"/Users/lurker/Desktop/employease/app/profile/vacancies/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,80577)),"/Users/lurker/Desktop/employease/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/lurker/Desktop/employease/app/profile/vacancies/page.tsx"],p="/profile/vacancies/page",u={require:t,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/profile/vacancies/page",pathname:"/profile/vacancies",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},52749:(e,s,t)=>{Promise.resolve().then(t.bind(t,56897)),Promise.resolve().then(t.bind(t,72401)),Promise.resolve().then(t.bind(t,1208))},19996:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,26840,23)),Promise.resolve().then(t.t.bind(t,38771,23)),Promise.resolve().then(t.t.bind(t,13225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,43982,23))},44055:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,61476,23))},56897:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c});var r=t(95344),i=t(3729),a=t(20783),n=t.n(a),l=t(47674);function o(e){switch(e.type){case"signin":return r.jsx("button",{onClick:()=>(0,l.signIn)(),className:"text-white bg-blue-600 px-2 py-1.5 rounded transition hover:bg-opacity-40 hover:text-blue-600",children:"Sign in"});case"signout":return r.jsx("button",{onClick:()=>(0,l.signOut)(),className:"text-white bg-blue-600 px-2 py-1.5 rounded transition hover:bg-opacity-40 hover:text-blue-600",children:"Sign Out"});case"signup":return r.jsx(n(),{href:"/auth/signup",className:"text-white bg-blue-600 px-2 py-1.5 rounded transition hover:bg-opacity-40 hover:text-blue-600",children:"Register"})}}function c(e){let[s,t]=(0,i.useState)(!0),[a,l]=(0,i.useState)(!1),c=e.session;return(0,i.useEffect)(()=>{window.addEventListener("scroll",()=>{t(window.scrollY<=20)})},[]),r.jsx(r.Fragment,{children:r.jsx("nav",{className:`fixed z-10 w-full h-[64px] flex justify-center items-center transition duration-500 ${s?"bg-black bg-opacity-80":"bg-[#1A1532]"}`,children:(0,r.jsxs)("div",{className:"relative max-md:flex-col max-md:my-5 w-full max-w-[1140px] mx-5 flex justify-between items-center transition",children:[(0,r.jsxs)("div",{className:"max-md:flex max-md:justify-between max-md:w-full",children:[r.jsx(n(),{onClick:()=>l(!1),className:"text-2xl font-medium",href:"/",children:"EmployEase"}),r.jsx("button",{className:"hidden max-md:block z-20",onClick:()=>l(!a),children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M4 18L20 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),r.jsx("path",{d:"M4 12L20 12",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),r.jsx("path",{d:"M4 6L20 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round"})]})})]}),(0,r.jsxs)("div",{className:`${s?"max-md:bg-black max-md:bg-opacity-80":"max-md:bg-[#1A1532]"} ${a?"max-md:translate-x-0":"max-md:translate-x-[-100%]"} max-md:w-[100vw] max-md:duration-500 max-md:top-7 max-md:py-5 max-md:absolute max-md:flex-col max-md:my-5 flex items-center gap-5 transition`,children:[r.jsx(n(),{onClick:()=>l(!1),className:"hover:opacity-60 transition",href:"/",children:"Home"}),r.jsx(n(),{onClick:()=>l(!1),className:"hover:opacity-60 transition",href:"/vacancies",children:"Vacancies"}),c&&r.jsx(n(),{onClick:()=>l(!1),className:"hover:opacity-60 transition",href:"/profile",children:"Profile"}),c?.user.role==="Employer"||c?.user.role==="Admin"?(0,r.jsxs)(r.Fragment,{children:[r.jsx(n(),{onClick:()=>l(!1),className:"hover:opacity-60 transition",href:"/vacancies/create",children:"Create vacancy"}),r.jsx(n(),{onClick:()=>l(!1),className:"hover:opacity-60 transition",href:"/profile/vacancies",children:"My vacancies"})]}):r.jsx(r.Fragment,{}),r.jsx(function(){return c?r.jsx(o,{type:"signout"}):(0,r.jsxs)(r.Fragment,{children:[r.jsx(o,{type:"signin"}),r.jsx(o,{type:"signup"})]})},{})]})]})})})}},72401:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});var r=t(95344),i=t(47674);function a({children:e}){return r.jsx(i.SessionProvider,{children:e})}},80577:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>g});var r=t(25036),i=t(8592),a=t.n(i);t(67272),t(76132),t(97001),t(40002);var n=t(23222),l=t(86843);let o=(0,l.createProxy)(String.raw`/Users/lurker/Desktop/employease/app/components/client/Navbar.tsx`),{__esModule:c,$$typeof:d}=o,p=o.default,u=(0,l.createProxy)(String.raw`/Users/lurker/Desktop/employease/app/components/client/NextAuthProvider.tsx`),{__esModule:x,$$typeof:m}=u,h=u.default;var v=t(81355),f=t(83411);async function g({children:e}){let s=await (0,v.getServerSession)(f.L);return r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{className:a().className,children:[r.jsx(n.Ix,{}),r.jsx("div",{className:"min-h-[100vh] flex flex-col justify-between",children:(0,r.jsxs)(h,{children:[r.jsx(p,{session:s}),r.jsx("div",{className:"pt-[64px]",children:e}),r.jsx("footer",{children:"test footer"})]})})]})})}},87053:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>d});var r=t(25036),i=t(81355),a=t(83411),n=t(44551),l=t(32455),o=t(40646),c=t.n(o);async function d(){let e=await (0,i.getServerSession)(a.L);if(!e||"Employee"===e.user.role)return(0,n.redirect)("/");let s=await (await fetch("https://employease.matrozis.dev/api/profile/vacancies",{method:"GET",headers:(0,l.headers)()})).json();return console.log(s),r.jsx(r.Fragment,{children:r.jsx("section",{className:"pt-16 bg-blueGray-50",children:r.jsx("div",{className:"w-full lg:w-4/12 px-4 mx-auto",children:r.jsx("div",{className:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16",children:(0,r.jsxs)("div",{className:"p-6",children:[r.jsx("h1",{className:"text-center text-2xl max-sm:text-xl font-semibold mb-5",children:"Published vacancies"}),r.jsx("div",{className:"flex flex-col gap-2",children:s.vacancies.map((e,s)=>r.jsx(c(),{href:"/profile/vacancies/"+e.id,className:"flex flex-col w-full gap-2 text-black hover:opacity-50",children:(0,r.jsxs)("div",{className:"flex justify-between items-center gap-2 border border-gray-700 p-1 rounded",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsxs)("h2",{children:[e.title," at ",e.company]}),r.jsx("p",{children:e.location})]}),(0,r.jsxs)("p",{children:["Applications: ",e.application.length]})]})},s))})]})})})})})}},48026:(e,s,t)=>{let{createProxy:r}=t(86843);e.exports=r("/Users/lurker/Desktop/employease/node_modules/next/dist/client/link.js")},40646:(e,s,t)=>{e.exports=t(48026)},83411:(e,s,t)=>{"use strict";t.d(s,{L:()=>n});var r=t(86485),i=t(23106),a=t(6521);let n={secret:process.env.AUTH_SECRET,session:{strategy:"jwt"},providers:[(0,r.Z)({name:"Credentials",credentials:{email:{label:"Email",type:"text"},password:{label:"Password",type:"password"}},async authorize(e,s){if(!e)return;let{email:t,password:r}=e,n=await i.Z.user.findFirst({where:{email:t},include:{application:!0,vacancies:!0}}).finally(()=>{i.Z.$disconnect()});if(!n)throw Error("User not found!");if(!await (0,a.compare)(r,n.password))throw Error("Incorrect password");return{id:n.id,email:n.email,name:n.name,surname:n.surname,role:n.Role,application:n.application,vacancies:n.vacancies}}})],pages:{signIn:`${process.env.BASE_PATH}/auth/signin`,newUser:process.env.BASE_PATH},callbacks:{jwt:async({token:e})=>e,session:async({session:e,token:s})=>{if(!s.email)return null;let t=await i.Z.user.findFirst({where:{email:s.email},include:{application:!0,vacancies:!0}}).finally(()=>{i.Z.$disconnect()});return t?(e.user={id:t.id,email:t.email,name:t.name,surname:t.surname,role:t.Role,application:t.application,vacancies:t.vacancies},e):null}}}},23106:(e,s,t)=>{"use strict";t.d(s,{Z:()=>r});let r=new(t(53524)).PrismaClient},67272:()=>{}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[431,521,123,30,551],()=>t(63725));module.exports=r})();