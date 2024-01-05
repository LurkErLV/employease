"use strict";(()=>{var e={};e.id=177,e.ids=[177],e.modules={53524:e=>{e.exports=require("@prisma/client")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},63477:e=>{e.exports=require("querystring")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},60147:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>f,originalPathname:()=>w,patchFetch:()=>h,requestAsyncStorage:()=>m,routeModule:()=>d,serverHooks:()=>x,staticGenerationAsyncStorage:()=>v,staticGenerationBailout:()=>y});var a={};t.r(a),t.d(a,{GET:()=>u});var i=t(95419),s=t(69108),n=t(99678),o=t(81355),c=t(83411),l=t(78070),p=t(23106);async function u(){let e=await (0,o.getServerSession)(c.L);if(!e||"Employee"===e.user.role)return l.Z.json({ok:!1,message:"Access restricted!"},{status:403});let r=await p.Z.vacancy.findMany({where:{authorId:parseInt(e.user.id)},select:{id:!0,title:!0,company:!0,location:!0,application:!0}}).finally(()=>{p.Z.$disconnect()});return l.Z.json({ok:!0,vacancies:r},{status:200})}let d=new i.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/profile/vacancies/route",pathname:"/api/profile/vacancies",filename:"route",bundlePath:"app/api/profile/vacancies/route"},resolvedPagePath:"/Users/lurker/Desktop/employease/app/api/profile/vacancies/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:m,staticGenerationAsyncStorage:v,serverHooks:x,headerHooks:f,staticGenerationBailout:y}=d,w="/api/profile/vacancies/route";function h(){return(0,n.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:v})}},83411:(e,r,t)=>{t.d(r,{L:()=>n});var a=t(86485),i=t(23106),s=t(6521);let n={secret:process.env.AUTH_SECRET,session:{strategy:"jwt"},providers:[(0,a.Z)({name:"Credentials",credentials:{email:{label:"Email",type:"text"},password:{label:"Password",type:"password"}},async authorize(e,r){if(!e)return;let{email:t,password:a}=e,n=await i.Z.user.findFirst({where:{email:t},include:{application:!0,vacancies:!0}}).finally(()=>{i.Z.$disconnect()});if(!n)throw Error("User not found!");if(!await (0,s.compare)(a,n.password))throw Error("Incorrect password");return{id:n.id,email:n.email,name:n.name,surname:n.surname,role:n.Role,application:n.application,vacancies:n.vacancies}}})],pages:{signIn:`${process.env.BASE_PATH}/auth/signin`,newUser:process.env.BASE_PATH},callbacks:{jwt:async({token:e})=>e,session:async({session:e,token:r})=>{if(!r.email)return null;let t=await i.Z.user.findFirst({where:{email:r.email},include:{application:!0,vacancies:!0}}).finally(()=>{i.Z.$disconnect()});return t?(e.user={id:t.id,email:t.email,name:t.name,surname:t.surname,role:t.Role,application:t.application,vacancies:t.vacancies},e):null}}}},23106:(e,r,t)=>{t.d(r,{Z:()=>a});let a=new(t(53524)).PrismaClient}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[431,521,123,206],()=>t(60147));module.exports=a})();