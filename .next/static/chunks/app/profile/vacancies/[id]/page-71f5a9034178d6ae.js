(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{3575:function(e,t,n){Promise.resolve().then(n.bind(n,603))},603:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(7437);function o(e){let{status:t,id:n}=e;async function o(e,t){await fetch("http://192.168.1.163:3000/api/vacancy/application/changeStatus/".concat(t,"?status=").concat(e),{method:"POST"})}return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("select",{onChange:e=>o(e.target.value,n),defaultValue:t,children:[(0,r.jsx)("option",{value:"Waiting",children:"Waiting"}),(0,r.jsx)("option",{value:"Approved",children:"Approved"}),(0,r.jsx)("option",{value:"Rejected",children:"Rejected"})]})})}},622:function(e,t,n){"use strict";var r=n(2265),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,a={},s=null,l=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,r)&&!u.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:l,props:a,_owner:i.current}}t.Fragment=a,t.jsx=s,t.jsxs=s},7437:function(e,t,n){"use strict";e.exports=n(622)}},function(e){e.O(0,[971,938,744],function(){return e(e.s=3575)}),_N_E=e.O()}]);