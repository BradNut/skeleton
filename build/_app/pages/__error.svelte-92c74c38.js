import{S as s,i as r,s as a,e as t,t as e,k as o,c as n,a as u,g as c,d as f,n as E,f as h,D as i,h as p,E as H}from"../chunks/vendor-55eff8e9.js";function d(s){let r,a,d,l,m,v,N,P,g=s[1].message+"";return{c(){r=t("h1"),a=e("SOMETHING HAPPENED!"),d=o(),l=t("h3"),m=e(s[0]),v=o(),N=t("h3"),P=e(g)},l(t){r=n(t,"H1",{});var e=u(r);a=c(e,"SOMETHING HAPPENED!"),e.forEach(f),d=E(t),l=n(t,"H3",{});var o=u(l);m=c(o,s[0]),o.forEach(f),v=E(t),N=n(t,"H3",{});var h=u(N);P=c(h,g),h.forEach(f)},m(s,t){h(s,r,t),i(r,a),h(s,d,t),h(s,l,t),i(l,m),h(s,v,t),h(s,N,t),i(N,P)},p(s,[r]){1&r&&p(m,s[0]),2&r&&g!==(g=s[1].message+"")&&p(P,g)},i:H,o:H,d(s){s&&f(r),s&&f(d),s&&f(l),s&&f(v),s&&f(N)}}}function l({error:s,status:r}){return{props:{error:s,status:r}}}function m(s,r,a){let{status:t}=r,{error:e}=r;return s.$$set=s=>{"status"in s&&a(0,t=s.status),"error"in s&&a(1,e=s.error)},[t,e]}export default class extends s{constructor(s){super(),r(this,s,m,d,a,{status:0,error:1})}}export{l as load};