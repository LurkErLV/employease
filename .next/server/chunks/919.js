exports.id=919,exports.ids=[919],exports.modules={52749:(e,t,a)=>{Promise.resolve().then(a.bind(a,56897)),Promise.resolve().then(a.bind(a,72401)),Promise.resolve().then(a.bind(a,1208))},19996:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,2583,23)),Promise.resolve().then(a.t.bind(a,26840,23)),Promise.resolve().then(a.t.bind(a,38771,23)),Promise.resolve().then(a.t.bind(a,13225,23)),Promise.resolve().then(a.t.bind(a,9295,23)),Promise.resolve().then(a.t.bind(a,43982,23))},56897:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var s=a(95344),n=a(3729),i=a(20783),r=a.n(i),l=a(47674);function o(e){switch(e.type){case"signin":return s.jsx("button",{onClick:()=>(0,l.signIn)(),className:"text-white bg-blue-600 px-2 py-1.5 rounded transition hover:bg-opacity-40 hover:text-blue-600",children:"Sign in"});case"signout":return s.jsx("button",{onClick:()=>(0,l.signOut)(),className:"text-white bg-blue-600 px-2 py-1.5 rounded transition hover:bg-opacity-40 hover:text-blue-600",children:"Sign Out"});case"signup":return s.jsx(r(),{href:"/auth/signup",className:"text-white bg-blue-600 px-2 py-1.5 rounded transition hover:bg-opacity-40 hover:text-blue-600",children:"Register"})}}function c(e){let[t,a]=(0,n.useState)(!0),[i,l]=(0,n.useState)(!1),c=e.session;return(0,n.useEffect)(()=>{window.addEventListener("scroll",()=>{a(window.scrollY<=20)})},[]),s.jsx(s.Fragment,{children:s.jsx("nav",{className:`fixed z-10 w-full h-[64px] flex justify-center items-center transition duration-500 ${t?"bg-black bg-opacity-80":"bg-[#1A1532]"}`,children:(0,s.jsxs)("div",{className:"relative max-md:flex-col max-md:my-5 w-full max-w-[1140px] mx-5 flex justify-between items-center transition",children:[(0,s.jsxs)("div",{className:"max-md:flex max-md:justify-between max-md:w-full",children:[s.jsx(r(),{onClick:()=>l(!1),className:"text-2xl font-medium",href:"/",children:"EmployEase"}),s.jsx("button",{className:"hidden max-md:block z-20",onClick:()=>l(!i),children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",children:[s.jsx("path",{d:"M4 18L20 18",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),s.jsx("path",{d:"M4 12L20 12",stroke:"white",strokeWidth:"2",strokeLinecap:"round"}),s.jsx("path",{d:"M4 6L20 6",stroke:"white",strokeWidth:"2",strokeLinecap:"round"})]})})]}),(0,s.jsxs)("div",{className:`${t?"max-md:bg-black max-md:bg-opacity-80":"max-md:bg-[#1A1532]"} ${i?"max-md:translate-x-0":"max-md:translate-x-[-100%]"} max-md:w-[100vw] max-md:duration-500 max-md:top-7 max-md:py-5 max-md:absolute max-md:flex-col max-md:my-5 flex items-center gap-5 transition`,children:[s.jsx(r(),{onClick:()=>l(!1),className:"hover:opacity-60 transition",href:"/",children:"Home"}),s.jsx(r(),{onClick:()=>l(!1),className:"hover:opacity-60 transition",href:"/vacancies",children:"Vacancies"}),c&&s.jsx(r(),{onClick:()=>l(!1),className:"hover:opacity-60 transition",href:"/profile",children:"Profile"}),c?.user.role==="Employer"||c?.user.role==="Admin"?(0,s.jsxs)(s.Fragment,{children:[s.jsx(r(),{onClick:()=>l(!1),className:"hover:opacity-60 transition",href:"/vacancies/create",children:"Create vacancy"}),s.jsx(r(),{onClick:()=>l(!1),className:"hover:opacity-60 transition",href:"/profile/vacancies",children:"My vacancies"})]}):s.jsx(s.Fragment,{}),s.jsx(function(){return c?s.jsx(o,{type:"signout"}):(0,s.jsxs)(s.Fragment,{children:[s.jsx(o,{type:"signin"}),s.jsx(o,{type:"signup"})]})},{})]})]})})})}},72401:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var s=a(95344),n=a(47674);function i({children:e}){return s.jsx(n.SessionProvider,{children:e})}},78623:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var s=a(95344),n=a(41223),i=a.n(n),r=a(20783),l=a.n(r);function o(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0})}function c(e){let t="employer"===e.type?"/employer/vacancies/"+e.item.id:"/vacancies/"+e.item.id;return s.jsx(s.Fragment,{children:(0,s.jsxs)(l(),{href:t,className:"max-w-[372px] min-w-[300px] w-full border-2 border-[#E4E5E8] rounded-md bg-white flex flex-col p-6 hover:scale-110 transition",children:[s.jsx("h1",{className:"text-gray-900 text-lg font-medium mb-1.5",children:e.item.title}),(0,s.jsxs)("div",{className:"flex gap-2 mb-5 max-sm:flex-col",children:[s.jsx("p",{className:"text-[#0BA02C] text-xs font-bold uppercase bg-[#E7F6EA] px-[8px] py-[4px] w-fit",children:function(e){switch(e){case"FULLTIME":return"Full-Time";case"PARTTIME":return"Part-Time";case"INTERNSHIP":return"Internship";default:return"Error"}}(e.item.workSchedule)}),(0,s.jsxs)("p",{className:"text-gray-500 text-sm",children:["Salary: ",o(e.item.minSalary)," -"," ",o(e.item.maxSalary)]})]}),(0,s.jsxs)("div",{className:"flex gap-3",children:[s.jsx("div",{className:"w-12 h-12 rounded bg-[#EDEFF5] flex justify-center items-center",children:s.jsx(i(),{src:e.item.companyLogo.startsWith("http")||e.item.companyLogo.startsWith("https")?e.item.companyLogo:"https://placehold.co/48",alt:"",width:24,height:24})}),(0,s.jsxs)("div",{className:"h-full flex flex-col justify-between",children:[s.jsx("h2",{className:"text-gray-900 text-base font-medium",children:e.item.company}),(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[s.jsx("path",{d:"M9 9.5625C10.2426 9.5625 11.25 8.55514 11.25 7.3125C11.25 6.06986 10.2426 5.0625 9 5.0625C7.75736 5.0625 6.75 6.06986 6.75 7.3125C6.75 8.55514 7.75736 9.5625 9 9.5625Z",stroke:"#767F8C",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M14.625 7.3125C14.625 12.375 9 16.3125 9 16.3125C9 16.3125 3.375 12.375 3.375 7.3125C3.375 5.82066 3.96763 4.38992 5.02252 3.33502C6.07742 2.28013 7.50816 1.6875 9 1.6875C10.4918 1.6875 11.9226 2.28013 12.9775 3.33502C14.0324 4.38992 14.625 5.82066 14.625 7.3125V7.3125Z",stroke:"#767F8C",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),s.jsx("p",{className:"text-gray-500 text-sm",children:e.item.location})]})]})]})]})})}},62020:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var s=a(95344),n=a(78623),i=a(3729);function r(e){let t=e.vacancies,[a,r]=(0,i.useState)({title:"",minSalary:0,maxSalary:0,company:"",location:"",workSchedule:""}),l=e=>{let{name:t,value:a}=e.target;r(e=>({...e,[t]:a}))},[o,c]=(0,i.useState)(!1),d=t.filter(e=>{let t=!a.title||e.title.toLowerCase().includes(a.title.toLowerCase()),s=!a.minSalary||e.maxSalary>=a.minSalary,n=!a.maxSalary||e.minSalary<=a.maxSalary,i=!a.company||e.company.toLowerCase().includes(a.company.toLowerCase()),r=!a.location||e.location.toLowerCase().includes(a.location.toLowerCase()),l=!a.workSchedule||e.workSchedule.toLowerCase()===a.workSchedule.toLowerCase();return t&&s&&n&&i&&r&&l});return(0,s.jsxs)(s.Fragment,{children:[s.jsx("input",{value:a.title,onChange:l,name:"title",placeholder:"Position search",className:"w-full h-10 rounded mt-5 px-3",type:"text"}),s.jsx("button",{className:"text-white py-3 px-5 bg-blue-800 rounded",onClick:()=>c(!0),children:"Filter"}),s.jsx("div",{className:"w-full flex justify-center flex-wrap gap-3 ",children:d&&d.map(e=>s.jsx(n.default,{item:e},e.id))}),s.jsx("div",{className:`fixed h-[100vh] w-[100vw] bg-black bg-opacity-40 z-30 overflow-y-hidden ${o?"":"hidden"}`,children:(0,s.jsxs)("div",{className:"fixed max-w-[350px] min-w-[300px] w-full min-h-[calc(100vh-64px)] top-[64px] left-0 bg-black/80 p-3",children:[s.jsx("button",{className:"text-white py-3 px-5 bg-blue-800 rounded",onClick:()=>c(!1),children:"Close"}),(0,s.jsxs)("div",{className:"flex flex-col gap-3 mt-5 w-10/12 mx-auto",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[s.jsx("p",{className:"text-white text-md font-medium",children:"Min. Salary"}),s.jsx("input",{value:a.minSalary,onChange:l,name:"minSalary",min:"0",type:"number",className:"rounded p-1"})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[s.jsx("p",{className:"text-white text-md font-medium",children:"Max. Salary"}),s.jsx("input",{value:a.maxSalary,name:"maxSalary",onChange:l,min:"0",type:"number",className:"rounded p-1"})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[s.jsx("p",{className:"text-white text-md font-medium",children:"Company"}),s.jsx("input",{value:a.company,name:"company",onChange:l,type:"text",className:"rounded p-1"})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[s.jsx("p",{className:"text-white text-md font-medium",children:"Location"}),s.jsx("input",{value:a.location,name:"location",onChange:l,type:"text",className:"rounded p-1"})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[s.jsx("p",{className:"text-white text-md font-medium",children:"Work schedule"}),(0,s.jsxs)("select",{className:"rounded p-1",name:"workSchedule",onChange:l,children:[s.jsx("option",{value:"",children:"None"}),s.jsx("option",{value:"FULLTIME",children:"Full-Time"}),s.jsx("option",{value:"PARTTIME",children:"Part-Time"}),s.jsx("option",{value:"INTERNSHIP",children:"Internship"})]})]})]})]})})]})}},37412:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{unstable_getImgProps:function(){return o},default:function(){return c}});let s=a(39694),n=a(83855),i=a(70837),r=a(31900),l=s._(a(74931)),o=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!0,unoptimized:!1}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}},c=r.Image},41223:(e,t,a)=>{e.exports=a(37412)},80577:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var s=a(25036),n=a(8592),i=a.n(n);a(67272),a(76132),a(97001),a(40002);var r=a(23222),l=a(86843);let o=(0,l.createProxy)(String.raw`/Users/lurker/Desktop/employease/app/components/client/Navbar.tsx`),{__esModule:c,$$typeof:d}=o,m=o.default,x=(0,l.createProxy)(String.raw`/Users/lurker/Desktop/employease/app/components/client/NextAuthProvider.tsx`),{__esModule:u,$$typeof:h}=x,p=x.default;var f=a(81355),y=a(83411);async function v({children:e}){let t=await (0,f.getServerSession)(y.L);return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:i().className,children:[s.jsx(r.Ix,{}),s.jsx("div",{className:"min-h-[100vh] flex flex-col justify-between",children:(0,s.jsxs)(p,{children:[s.jsx(m,{session:t}),s.jsx("div",{className:"pt-[64px]",children:e}),s.jsx("footer",{children:"test footer"})]})})]})})}},83411:(e,t,a)=>{"use strict";a.d(t,{L:()=>r});var s=a(86485),n=a(23106),i=a(6521);let r={secret:process.env.AUTH_SECRET,session:{strategy:"jwt"},providers:[(0,s.Z)({name:"Credentials",credentials:{email:{label:"Email",type:"text"},password:{label:"Password",type:"password"}},async authorize(e,t){if(!e)return;let{email:a,password:s}=e,r=await n.Z.user.findFirst({where:{email:a},include:{application:!0,vacancies:!0}}).finally(()=>{n.Z.$disconnect()});if(!r)throw Error("User not found!");if(!await (0,i.compare)(s,r.password))throw Error("Incorrect password");return{id:r.id,email:r.email,name:r.name,surname:r.surname,role:r.Role,application:r.application,vacancies:r.vacancies}}})],pages:{signIn:`${process.env.BASE_PATH}/auth/signin`,newUser:process.env.BASE_PATH},callbacks:{jwt:async({token:e})=>e,session:async({session:e,token:t})=>{if(!t.email)return null;let a=await n.Z.user.findFirst({where:{email:t.email},include:{application:!0,vacancies:!0}}).finally(()=>{n.Z.$disconnect()});return a?(e.user={id:a.id,email:a.email,name:a.name,surname:a.surname,role:a.Role,application:a.application,vacancies:a.vacancies},e):null}}}},23106:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});let s=new(a(53524)).PrismaClient},67272:()=>{}};