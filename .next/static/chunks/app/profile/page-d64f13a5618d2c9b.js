(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{4216:function(e,t,n){Promise.resolve().then(n.bind(n,6417))},6417:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var o=n(7437),s=n(4033),r=n(9461);function a(e){let t=(0,s.useRouter)();async function n(){let n=await (await fetch("https://employease.matrozis.dev/api/vacancy/application/delete/"+e.id,{method:"DELETE"})).json();n.ok?((0,r.Z)("success",n.message),t.refresh()):(0,r.Z)("error",n.message)}return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("button",{onClick:n,className:"p-5 border border-gray-600 border-1 rounded hover:bg-red-800 hover:text-white transition",children:"X"})})}},9461:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(171);function s(e,t){e&&t&&("success"===e?o.toast.success(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}):"error"===e&&o.toast.error(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))}},622:function(e,t,n){"use strict";var o=n(2265),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,r={},c=null,u=null;for(o in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,o)&&!l.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:s,type:e,key:c,ref:u,props:r,_owner:i.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},7437:function(e,t,n){"use strict";e.exports=n(622)},4033:function(e,t,n){e.exports=n(5313)},171:function(e,t,n){"use strict";n.r(t),n.d(t,{Bounce:function(){return I},Flip:function(){return N},Icons:function(){return g},Slide:function(){return O},ToastContainer:function(){return R},Zoom:function(){return L},collapseToast:function(){return u},cssTransition:function(){return d},toast:function(){return D},useToast:function(){return E},useToastContainer:function(){return h}});var o=n(2265),s=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,o,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(o=e(t[n]))&&(s&&(s+=" "),s+=o);else for(n in t)t[n]&&(s&&(s+=" "),s+=n)}return s}(e))&&(o&&(o+=" "),o+=t);return o};let r=e=>"number"==typeof e&&!isNaN(e),a=e=>"string"==typeof e,i=e=>"function"==typeof e,l=e=>a(e)||i(e)?e:null,c=e=>(0,o.isValidElement)(e)||a(e)||i(e)||r(e);function u(e,t,n){void 0===n&&(n=300);let{scrollHeight:o,style:s}=e;requestAnimationFrame(()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${n}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(t,n)})})}function d(e){let{enter:t,exit:n,appendPosition:s=!1,collapse:r=!0,collapseDuration:a=300}=e;return function(e){let{children:i,position:l,preventExitTransition:c,done:d,nodeRef:f,isIn:p}=e,m=s?`${t}--${l}`:t,g=s?`${n}--${l}`:n,h=(0,o.useRef)(0);return(0,o.useLayoutEffect)(()=>{let e=f.current,t=m.split(" "),n=o=>{o.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===h.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)},[]),(0,o.useEffect)(()=>{let e=f.current,t=()=>{e.removeEventListener("animationend",t),r?u(e,d,a):d()};p||(c?t():(h.current=1,e.className+=` ${g}`,e.addEventListener("animationend",t)))},[p]),o.createElement(o.Fragment,null,i)}}function f(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}let p={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){let n=this.list.get(e).filter(e=>e!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){let t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{let n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},m=e=>{let{theme:t,type:n,...s}=e;return o.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${n})`,...s})},g={info:function(e){return o.createElement(m,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(m,{...e},o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(m,{...e},o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(m,{...e},o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function h(e){let[,t]=(0,o.useReducer)(e=>e+1,0),[n,s]=(0,o.useState)([]),u=(0,o.useRef)(null),d=(0,o.useRef)(new Map).current,m=e=>-1!==n.indexOf(e),h=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:e=>d.get(e)}).current;function y(e){let{containerId:t}=e,{limit:n}=h.props;!n||t&&h.containerId!==t||(h.count-=h.queue.length,h.queue=[])}function v(e){s(t=>null==e?[]:t.filter(t=>t!==e))}function E(){let{toastContent:e,toastProps:t,staleId:n}=h.queue.shift();_(e,t,n)}function T(e,n){var s,m;let{delay:y,staleId:T,...C}=n;if(!c(e)||!u.current||h.props.enableMultiContainer&&C.containerId!==h.props.containerId||d.has(C.toastId)&&null==C.updateId)return;let{toastId:b,updateId:I,data:O}=C,{props:L}=h,N=()=>v(b),R=null==I;R&&h.count++;let w={...L,style:L.toastStyle,key:h.toastKey++,...Object.fromEntries(Object.entries(C).filter(e=>{let[t,n]=e;return null!=n})),toastId:b,updateId:I,data:O,closeToast:N,isIn:!1,className:l(C.className||L.toastClassName),bodyClassName:l(C.bodyClassName||L.bodyClassName),progressClassName:l(C.progressClassName||L.progressClassName),autoClose:!C.isLoading&&(s=C.autoClose,m=L.autoClose,!1===s||r(s)&&s>0?s:m),deleteToast(){let e=f(d.get(b),"removed");d.delete(b),p.emit(4,e);let n=h.queue.length;if(h.count=null==b?h.count-h.displayedToast:h.count-1,h.count<0&&(h.count=0),n>0){let e=null==b?h.props.limit:1;if(1===n||1===e)h.displayedToast++,E();else{let t=e>n?n:e;h.displayedToast=t;for(let e=0;e<t;e++)E()}}else t()}};w.iconOut=function(e){let{theme:t,type:n,isLoading:s,icon:l}=e,c=null,u={theme:t,type:n};return!1===l||(i(l)?c=l(u):(0,o.isValidElement)(l)?c=(0,o.cloneElement)(l,u):a(l)||r(l)?c=l:s?c=g.spinner():n in g&&(c=g[n](u))),c}(w),i(C.onOpen)&&(w.onOpen=C.onOpen),i(C.onClose)&&(w.onClose=C.onClose),w.closeButton=L.closeButton,!1===C.closeButton||c(C.closeButton)?w.closeButton=C.closeButton:!0===C.closeButton&&(w.closeButton=!c(L.closeButton)||L.closeButton);let k=e;(0,o.isValidElement)(e)&&!a(e.type)?k=(0,o.cloneElement)(e,{closeToast:N,toastProps:w,data:O}):i(e)&&(k=e({closeToast:N,toastProps:w,data:O})),L.limit&&L.limit>0&&h.count>L.limit&&R?h.queue.push({toastContent:k,toastProps:w,staleId:T}):r(y)?setTimeout(()=>{_(k,w,T)},y):_(k,w,T)}function _(e,t,n){let{toastId:o}=t;n&&d.delete(n);let r={content:e,props:t};d.set(o,r),s(e=>[...e,o].filter(e=>e!==n)),p.emit(4,f(r,null==r.props.updateId?"added":"updated"))}return(0,o.useEffect)(()=>(h.containerId=e.containerId,p.cancelEmit(3).on(0,T).on(1,e=>u.current&&v(e)).on(5,y).emit(2,h),()=>{d.clear(),p.emit(3,h)}),[]),(0,o.useEffect)(()=>{h.props=e,h.isToastActive=m,h.displayedToast=n.length}),{getToastToRender:function(t){let n=new Map,o=Array.from(d.values());return e.newestOnTop&&o.reverse(),o.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))},containerRef:u,isToastActive:m}}function y(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function v(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function E(e){let[t,n]=(0,o.useState)(!1),[s,r]=(0,o.useState)(!1),a=(0,o.useRef)(null),l=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,c=(0,o.useRef)(e),{autoClose:u,pauseOnHover:d,closeToast:f,onClick:p,closeOnClick:m}=e;function g(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",C),document.addEventListener("touchmove",_),document.addEventListener("touchend",C);let n=a.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=n.getBoundingClientRect(),n.style.transition="",l.x=y(t.nativeEvent),l.y=v(t.nativeEvent),"x"===e.draggableDirection?(l.start=l.x,l.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function h(t){if(l.boundingRect){let{top:n,bottom:o,left:s,right:r}=l.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&l.x>=s&&l.x<=r&&l.y>=n&&l.y<=o?T():E()}}function E(){n(!0)}function T(){n(!1)}function _(n){let o=a.current;l.canDrag&&o&&(l.didMove=!0,t&&T(),l.x=y(n),l.y=v(n),l.delta="x"===e.draggableDirection?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),o.style.transform=`translate${e.draggableDirection}(${l.delta}px)`,o.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function C(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",C);let t=a.current;if(l.canDrag&&l.didMove&&t){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return r(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,o.useEffect)(()=>{c.current=e}),(0,o.useEffect)(()=>(a.current&&a.current.addEventListener("d",E,{once:!0}),i(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),()=>{let e=c.current;i(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}),[]),(0,o.useEffect)(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||T(),window.addEventListener("focus",E),window.addEventListener("blur",T)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",T))}),[e.pauseOnFocusLoss]);let b={onMouseDown:g,onTouchStart:g,onMouseUp:h,onTouchEnd:h};return u&&d&&(b.onMouseEnter=T,b.onMouseLeave=E),m&&(b.onClick=e=>{p&&p(e),l.canCloseOnClick&&f()}),{playToast:E,pauseToast:T,isRunning:t,preventExitTransition:s,toastRef:a,eventHandlers:b}}function T(e){let{closeToast:t,theme:n,ariaLabel:s="close"}=e;return o.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":s},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function _(e){let{delay:t,isRunning:n,closeToast:r,type:a="default",hide:l,className:c,style:u,controlledProgress:d,progress:f,rtl:p,isIn:m,theme:g}=e,h=l||d&&0===f,y={...u,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:h?0:1};d&&(y.transform=`scaleX(${f})`);let v=s("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":p}),E=i(c)?c({rtl:p,type:a,defaultClassName:v}):s(v,c);return o.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:E,style:y,[d&&f>=1?"onTransitionEnd":"onAnimationEnd"]:d&&f<1?null:()=>{m&&r()}})}let C=e=>{let{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:a}=E(e),{closeButton:l,children:c,autoClose:u,onClick:d,type:f,hideProgressBar:p,closeToast:m,transition:g,position:h,className:y,style:v,bodyClassName:C,bodyStyle:b,progressClassName:I,progressStyle:O,updateId:L,role:N,progress:R,rtl:w,toastId:k,deleteToast:x,isIn:P,isLoading:M,iconOut:B,closeOnClick:$,theme:D}=e,A=s("Toastify__toast",`Toastify__toast-theme--${D}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":w},{"Toastify__toast--close-on-click":$}),z=i(y)?y({rtl:w,position:h,type:f,defaultClassName:A}):s(A,y),S=!!R||!u,F={closeToast:m,type:f,theme:D},H=null;return!1===l||(H=i(l)?l(F):(0,o.isValidElement)(l)?(0,o.cloneElement)(l,F):T(F)),o.createElement(g,{isIn:P,done:x,position:h,preventExitTransition:n,nodeRef:r},o.createElement("div",{id:k,onClick:d,className:z,...a,style:v,ref:r},o.createElement("div",{...P&&{role:N},className:i(C)?C({type:f}):s("Toastify__toast-body",C),style:b},null!=B&&o.createElement("div",{className:s("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},B),o.createElement("div",null,c)),H,o.createElement(_,{...L&&!S?{key:`pb-${L}`}:{},rtl:w,theme:D,delay:u,isRunning:t,isIn:P,closeToast:m,hide:p,type:f,style:O,className:I,controlledProgress:S,progress:R||0})))},b=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},I=d(b("bounce",!0)),O=d(b("slide",!0)),L=d(b("zoom")),N=d(b("flip")),R=(0,o.forwardRef)((e,t)=>{let{getToastToRender:n,containerRef:r,isToastActive:a}=h(e),{className:c,style:u,rtl:d,containerId:f}=e;return(0,o.useEffect)(()=>{t&&(t.current=r.current)},[]),o.createElement("div",{ref:r,className:"Toastify",id:f},n((e,t)=>{let n=t.length?{...u}:{...u,pointerEvents:"none"};return o.createElement("div",{className:function(e){let t=s("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":d});return i(c)?c({position:e,rtl:d,defaultClassName:t}):s(t,l(c))}(e),style:n,key:`container-${e}`},t.map((e,n)=>{let{content:s,props:r}=e;return o.createElement(C,{...r,isIn:a(r.toastId),style:{...r.style,"--nth":n+1,"--len":t.length},key:`toast-${r.key}`},s)}))}))});R.displayName="ToastContainer",R.defaultProps={position:"top-right",transition:I,autoClose:5e3,closeButton:T,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let w,k=new Map,x=[],P=1;function M(e,t){return k.size>0?p.emit(0,e,t):x.push({content:e,options:t}),t.toastId}function B(e,t){return{...t,type:t&&t.type||e,toastId:t&&(a(t.toastId)||r(t.toastId))?t.toastId:""+P++}}function $(e){return(t,n)=>M(t,B(e,n))}function D(e,t){return M(e,B("default",t))}D.loading=(e,t)=>M(e,B("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),D.promise=function(e,t,n){let o,{pending:s,error:r,success:l}=t;s&&(o=a(s)?D.loading(s,n):D.loading(s.render,{...n,...s}));let c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(e,t,s)=>{if(null==t)return void D.dismiss(o);let r={type:e,...c,...n,data:s},i=a(t)?{render:t}:t;return o?D.update(o,{...r,...i}):D(i.render,{...r,...i}),s},d=i(e)?e():e;return d.then(e=>u("success",l,e)).catch(e=>u("error",r,e)),d},D.success=$("success"),D.info=$("info"),D.error=$("error"),D.warning=$("warning"),D.warn=D.warning,D.dark=(e,t)=>M(e,B("default",{theme:"dark",...t})),D.dismiss=e=>{k.size>0?p.emit(1,e):x=x.filter(t=>null!=e&&t.options.toastId!==e)},D.clearWaitingQueue=function(e){return void 0===e&&(e={}),p.emit(5,e)},D.isActive=e=>{let t=!1;return k.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},D.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{let n=function(e,t){let{containerId:n}=t,o=k.get(n||w);return o&&o.getToast(e)}(e,t);if(n){let{props:o,content:s}=n,r={delay:100,...o,...t,toastId:t.toastId||e,updateId:""+P++};r.toastId!==e&&(r.staleId=e);let a=r.render||s;delete r.render,M(a,r)}},0)},D.done=e=>{D.update(e,{progress:1})},D.onChange=e=>(p.on(4,e),()=>{p.off(4,e)}),D.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},D.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},p.on(2,e=>{w=e.containerId||e,k.set(w,e),x.forEach(e=>{p.emit(0,e.content,e.options)}),x=[]}).on(3,e=>{k.delete(e.containerId||e),0===k.size&&p.off(0).off(1).off(5)})}},function(e){e.O(0,[971,938,744],function(){return e(e.s=4216)}),_N_E=e.O()}]);