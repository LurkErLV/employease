"use strict";(()=>{var e={};e.id=198,e.ids=[198],e.modules={53524:e=>{e.exports=require("@prisma/client")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},32632:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>v,originalPathname:()=>m,patchFetch:()=>h,requestAsyncStorage:()=>p,routeModule:()=>c,serverHooks:()=>y,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>g});var r={};a.r(r),a.d(r,{GET:()=>u});var i=a(95419),n=a(69108),s=a(99678),o=a(23106),d=a(78070);async function u(e,{params:t}){let a=await o.Z.vacancy.findFirst({where:{id:parseInt(t.id)}}).finally(()=>{o.Z.$disconnect()});return a?d.Z.json({vacancy:a},{status:200}):d.Z.json({},{status:400})}let c=new i.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/vacancy/getById/[id]/route",pathname:"/api/vacancy/getById/[id]",filename:"route",bundlePath:"app/api/vacancy/getById/[id]/route"},resolvedPagePath:"/Users/lurker/Desktop/employease/app/api/vacancy/getById/[id]/route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:p,staticGenerationAsyncStorage:l,serverHooks:y,headerHooks:v,staticGenerationBailout:g}=c,m="/api/vacancy/getById/[id]/route";function h(){return(0,s.patchFetch)({serverHooks:y,staticGenerationAsyncStorage:l})}},23106:(e,t,a)=>{a.d(t,{Z:()=>r});let r=new(a(53524)).PrismaClient}};var t=require("../../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[431,206],()=>a(32632));module.exports=r})();