(()=>{var e={};e.id=271,e.ids=[271],e.modules={53524:e=>{"use strict";e.exports=require("@prisma/client")},47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},63477:e=>{"use strict";e.exports=require("querystring")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},97618:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>m,tree:()=>c});var r=s(50482),i=s(69108),n=s(62563),a=s.n(n),o=s(68300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["auth",{children:["signup",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,66640)),"/Users/lurker/Desktop/employease/app/auth/signup/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,80577)),"/Users/lurker/Desktop/employease/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,69361,23)),"next/dist/client/components/not-found-error"]}],u=["/Users/lurker/Desktop/employease/app/auth/signup/page.tsx"],d="/auth/signup/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/auth/signup/page",pathname:"/auth/signup",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},90663:(e,t,s)=>{Promise.resolve().then(s.bind(s,9389))},52749:(e,t,s)=>{Promise.resolve().then(s.bind(s,56897)),Promise.resolve().then(s.bind(s,72401)),Promise.resolve().then(s.bind(s,1208))},19996:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,26840,23)),Promise.resolve().then(s.t.bind(s,38771,23)),Promise.resolve().then(s.t.bind(s,13225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,43982,23))},9389:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var r=s(95344),i=s(3729),n=s(47674),a=s(20783),o=s.n(a),l=s(22254),c=s(1421);function u(){let e=(0,l.useRouter)(),{status:t}=(0,n.useSession)();(0,i.useEffect)(()=>{"authenticated"===t&&e.push("/")},[t]);let[s,a]=(0,i.useState)(""),[u,d]=(0,i.useState)(""),p=async e=>{if(e.preventDefault(),!s||!u)return;let t=await (await fetch("https://employease.matrozis.dev/api/auth/register",{method:"POST",body:JSON.stringify({email:s,password:u})})).json();if(!t.ok)return(0,c.Z)("error",t.message);{let e=await (0,n.signIn)("credentials",{email:s,password:u,redirect:!0,callbackUrl:"/"});if(e&&e.error)return(0,c.Z)("error",e.error)}};return r.jsx(r.Fragment,{children:r.jsx("div",{className:"relative flex flex-col justify-center min-h-screen overflow-hidden",children:(0,r.jsxs)("div",{className:"w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl",children:[r.jsx("h1",{className:"text-3xl font-semibold text-center text-blue-600 underline",children:"Sign up"}),(0,r.jsxs)("form",{onSubmit:e=>p(e),className:"mt-6",children:[(0,r.jsxs)("div",{className:"mb-2",children:[r.jsx("label",{htmlFor:"email",className:"block text-sm font-semibold text-gray-800",children:"Email"}),r.jsx("input",{type:"email",value:s,onChange:e=>a(e.target.value),className:"block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"})]}),(0,r.jsxs)("div",{className:"mb-2",children:[r.jsx("label",{htmlFor:"password",className:"block text-sm font-semibold text-gray-800",children:"Password"}),r.jsx("input",{type:"password",value:u,onChange:e=>d(e.target.value),className:"block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"})]}),r.jsx("div",{className:"mt-6",children:r.jsx("button",{type:"submit",className:"w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-opacity-40 hover:text-blue-600 focus:outline-none focus:bg-blue-600",children:"Sign up"})})]}),(0,r.jsxs)("p",{className:"mt-8 text-xs font-light text-center text-gray-700",children:[" ","Already have account?"," ",r.jsx(o(),{href:"/auth/signin",className:"font-medium text-blue-600 hover:underline",children:"Sign in"})]})]})})})}},56897:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(95344),i=s(3729),n=s(20783),a=s.n(n),o=s(47674);function l(e){switch(e.type){case"signin":return r.jsx("button",{onClick:()=>(0,o.signIn)(),className:"text-white bg-blue-600 px-2 py-1.5 rounded transition hover:bg-opacity-40 hover:text-blue-600",children:"Sign in"});case"signout":return r.jsx("button",{onClick:()=>(0,o.signOut)(),className:"text-white bg-blue-600 px-2 py-1.5 rounded transition hover:bg-opacity-40 hover:text-blue-600",children:"Sign Out"});case"signup":return r.jsx(a(),{href:"/auth/signup",className:"text-white bg-blue-600 px-2 py-1.5 rounded transition hover:bg-opacity-40 hover:text-blue-600",children:"Register"})}}function c(e){let[t,s]=(0,i.useState)(!0),[n,o]=(0,i.useState)(!1),c=e.session;return(0,i.useEffect)(()=>{window.addEventListener("scroll",()=>{s(window.scrollY<=20)})},[]),r.jsx(r.Fragment,{children:r.jsx("nav",{className:`fixed z-10 w-full h-[64px] flex justify-center items-center transition duration-500 ${t?"bg-black bg-opacity-80":"bg-[#1A1532]"}`,children:(0,r.jsxs)("div",{className:"relative max-md:flex-col max-md:my-5 w-full max-w-[1140px] mx-5 flex justify-between items-center transition",children:[(0,r.jsxs)("div",{className:"max-md:flex max-md:justify-between max-md:w-full",children:[r.jsx(a(),{onClick:()=>o(!1),className:"text-2xl font-medium",href:"/",children:"EmployEase"}),r.jsx("button",{className:"hidden max-md:block z-20",onClick:()=>o(!n),children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M4 18L20 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),r.jsx("path",{d:"M4 12L20 12",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),r.jsx("path",{d:"M4 6L20 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round"})]})})]}),(0,r.jsxs)("div",{className:`${t?"max-md:bg-black max-md:bg-opacity-80":"max-md:bg-[#1A1532]"} ${n?"max-md:translate-x-0":"max-md:translate-x-[-100%]"} max-md:w-[100vw] max-md:duration-500 max-md:top-7 max-md:py-5 max-md:absolute max-md:flex-col max-md:my-5 flex items-center gap-5 transition`,children:[r.jsx(a(),{onClick:()=>o(!1),className:"hover:opacity-60 transition",href:"/",children:"Home"}),r.jsx(a(),{onClick:()=>o(!1),className:"hover:opacity-60 transition",href:"/vacancies",children:"Vacancies"}),c&&r.jsx(a(),{onClick:()=>o(!1),className:"hover:opacity-60 transition",href:"/profile",children:"Profile"}),c?.user.role==="Employer"||c?.user.role==="Admin"?(0,r.jsxs)(r.Fragment,{children:[r.jsx(a(),{onClick:()=>o(!1),className:"hover:opacity-60 transition",href:"/vacancies/create",children:"Create vacancy"}),r.jsx(a(),{onClick:()=>o(!1),className:"hover:opacity-60 transition",href:"/profile/vacancies",children:"My vacancies"})]}):r.jsx(r.Fragment,{}),r.jsx(function(){return c?r.jsx(l,{type:"signout"}):(0,r.jsxs)(r.Fragment,{children:[r.jsx(l,{type:"signin"}),r.jsx(l,{type:"signup"})]})},{})]})]})})})}},72401:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(95344),i=s(47674);function n({children:e}){return r.jsx(i.SessionProvider,{children:e})}},22254:(e,t,s)=>{e.exports=s(14767)},1421:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var r=s(1208);function i(e,t){e&&t&&("success"===e?r.toast.success(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}):"error"===e&&r.toast.error(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))}},66640:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>a});let r=(0,s(86843).createProxy)(String.raw`/Users/lurker/Desktop/employease/app/auth/signup/page.tsx`),{__esModule:i,$$typeof:n}=r,a=r.default},80577:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>v});var r=s(25036),i=s(8592),n=s.n(i);s(67272),s(76132),s(97001),s(40002);var a=s(23222),o=s(86843);let l=(0,o.createProxy)(String.raw`/Users/lurker/Desktop/employease/app/components/client/Navbar.tsx`),{__esModule:c,$$typeof:u}=l,d=l.default,p=(0,o.createProxy)(String.raw`/Users/lurker/Desktop/employease/app/components/client/NextAuthProvider.tsx`),{__esModule:m,$$typeof:x}=p,h=p.default;var g=s(81355),f=s(83411);async function v({children:e}){let t=await (0,g.getServerSession)(f.L);return r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{className:n().className,children:[r.jsx(a.Ix,{}),r.jsx("div",{className:"min-h-[100vh] flex flex-col justify-between",children:(0,r.jsxs)(h,{children:[r.jsx(d,{session:t}),r.jsx("div",{className:"pt-[64px]",children:e}),r.jsx("footer",{children:"test footer"})]})})]})})}},83411:(e,t,s)=>{"use strict";s.d(t,{L:()=>a});var r=s(86485),i=s(23106),n=s(6521);let a={secret:process.env.AUTH_SECRET,session:{strategy:"jwt"},providers:[(0,r.Z)({name:"Credentials",credentials:{email:{label:"Email",type:"text"},password:{label:"Password",type:"password"}},async authorize(e,t){if(!e)return;let{email:s,password:r}=e,a=await i.Z.user.findFirst({where:{email:s},include:{application:!0,vacancies:!0}}).finally(()=>{i.Z.$disconnect()});if(!a)throw Error("User not found!");if(!await (0,n.compare)(r,a.password))throw Error("Incorrect password");return{id:a.id,email:a.email,name:a.name,surname:a.surname,role:a.Role,application:a.application,vacancies:a.vacancies}}})],pages:{signIn:`${process.env.BASE_PATH}/auth/signin`,newUser:process.env.BASE_PATH},callbacks:{jwt:async({token:e})=>e,session:async({session:e,token:t})=>{if(!t.email)return null;let s=await i.Z.user.findFirst({where:{email:t.email},include:{application:!0,vacancies:!0}}).finally(()=>{i.Z.$disconnect()});return s?(e.user={id:s.id,email:s.email,name:s.name,surname:s.surname,role:s.Role,application:s.application,vacancies:s.vacancies},e):null}}}},23106:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});let r=new(s(53524)).PrismaClient},67272:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[431,521,123,30],()=>s(97618));module.exports=r})();