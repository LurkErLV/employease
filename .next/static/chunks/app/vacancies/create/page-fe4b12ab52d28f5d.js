(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[618],{9536:function(e,t,n){Promise.resolve().then(n.bind(n,5358))},5358:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(7437),l=n(4033),r=n(2749),o=n(2265),i=n(4930),s=n.n(i),u=n(9461);let c=s()(()=>Promise.all([n.e(70),n.e(889)]).then(n.t.bind(n,6233,23)),{loadableGenerated:{webpack:()=>[6233]},ssr:!1,loading:()=>(0,a.jsx)("p",{children:"Loading ..."})});function d(){let e=(0,l.useRouter)(),{status:t,data:n}=(0,r.useSession)();(0,o.useEffect)(()=>{if("authenticated"===t){if((null==n?void 0:n.user.role)==="Employee")return(0,u.Z)("error","Permission denied"),e.push("/")}else if("unauthenticated"===t)return(0,u.Z)("error","Permission denied"),e.push("/")},[t]);let[i,s]=(0,o.useState)({title:"",company:"",companyLogo:"",workSchedule:"FULLTIME",minSalary:0,maxSalary:0,location:"",description:""}),d=e=>{let{name:t,value:n}=e.target;"minSalary"===t||"maxSalary"===t?s(e=>({...e,[t]:parseInt(n)})):s(e=>({...e,[t]:n}))};async function p(t){if(t.preventDefault(),!i.title||!i.company||!i.workSchedule||!i.minSalary||!i.maxSalary||!i.location||!i.description)return(0,u.Z)("error","Fill all required inputs");await fetch("https://employease.matrozis.dev/api/vacancy/create",{method:"POST",body:JSON.stringify(i),headers:{"content-type":"application/json"}}).then(e=>e.json()).then(t=>{(0,u.Z)("success","Created new vacancy with ".concat(t.newVacancy.id," Id")),e.refresh(),e.push("/vacancies/"+t.newVacancy.id)}).catch(e=>{(0,u.Z)("error","Something went wrong!")})}return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("main",{className:"w-full mt-[64px] flex flex-col justify-center items-center gap-5 px-3",children:[(0,a.jsx)("h1",{className:"text-black text-4xl font-medium",children:"Create vacancy"}),(0,a.jsxs)("form",{className:"w-1/2 max-md:w-full box-border flex flex-col gap-3",onSubmit:p,children:[(0,a.jsx)("input",{onChange:d,className:"p-2 rounded",name:"title",placeholder:"Position title",type:"text"}),(0,a.jsx)("input",{onChange:d,className:"p-2 rounded",name:"company",placeholder:"Company name",type:"text"}),(0,a.jsx)("input",{onChange:d,className:"p-2 rounded",name:"companyLogo",placeholder:"Company logo image url (PNG format)",type:"text"}),(0,a.jsxs)("select",{onChange:d,value:i.workSchedule,className:"p-2 rounded",name:"workSchedule",children:[(0,a.jsx)("option",{value:"FULLTIME",children:"Full-Time"}),(0,a.jsx)("option",{value:"PARTTIME",children:"Part-Time"}),(0,a.jsx)("option",{value:"INTERNSHIP",children:"Internship"})]}),(0,a.jsx)("input",{onChange:d,className:"p-2 rounded",name:"minSalary",placeholder:"Minimal salary",type:"number"}),(0,a.jsx)("input",{onChange:d,className:"p-2 rounded",name:"maxSalary",placeholder:"Maximal salary",type:"number"}),(0,a.jsx)("input",{onChange:d,className:"p-2 rounded",name:"location",placeholder:"Example: Latvia, Riga",type:"text"}),(0,a.jsx)("div",{className:"w-full h-[550px] overflow-auto border border-black rounded",children:(0,a.jsx)(c,{className:"w-full h-[510px]",value:i.description,onChange:e=>s(t=>({...t,description:e})),theme:"snow"})}),(0,a.jsx)("button",{type:"submit",children:"Submit"})]})]})})}},4930:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let a=n(1024);n(2265);let l=a._(n(4795));function r(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){let n=l.default,a={loading:e=>{let{error:t,isLoading:n,pastDelay:a}=e;return null}};"function"==typeof e&&(a.loader=e),Object.assign(a,t);let o=a.loader;return n({...a,loader:()=>null!=o?o().then(r):Promise.resolve(r(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6005:function(e,t,n){"use strict";function a(e){let{children:t}=e;return t}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NoSSR",{enumerable:!0,get:function(){return a}}),n(6491)},4795:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});let a=n(1024)._(n(2265)),l=n(6005),r=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function n(e){let n=t.loading,r=a.default.createElement(n,{isLoading:!0,pastDelay:!0,error:null}),o=t.ssr?a.default.Fragment:l.NoSSR,i=t.lazy;return a.default.createElement(a.default.Suspense,{fallback:r},a.default.createElement(o,null,a.default.createElement(i,e)))}return t.lazy=a.default.lazy(t.loader),n.displayName="LoadableComponent",n}},9461:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(171);function l(e,t){e&&t&&("success"===e?a.toast.success(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}):"error"===e&&a.toast.error(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))}},4033:function(e,t,n){e.exports=n(5313)}},function(e){e.O(0,[745,971,938,744],function(){return e(e.s=9536)}),_N_E=e.O()}]);