import{F as Q,S as T,i as W,s as O,e as w,c as m,a as h,d as g,b as s,g as P,G as Z,H as $,I as tt,q as V,J as rt,o as q,K as et,k as j,t as D,m as E,h as U,L as ot,M as S,N as n,p as at,O as it,P as nt,Q as ct,n as lt,E as st}from"../chunks/index-22506258.js";import{f as J}from"../chunks/index-b1a267ff.js";const dt=()=>{const o=Q("__svelte__");return{page:{subscribe:o.page.subscribe},navigating:{subscribe:o.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:o.navigating.subscribe}},session:o.session,updated:o.updated}},gt={subscribe(o){return dt().page.subscribe(o)}};function K(o){let e,a,c,b;const u=o[3].default,r=nt(u,o,o[2],null);return{c(){e=w("div"),r&&r.c(),this.h()},l(t){e=m(t,"DIV",{class:!0});var i=h(e);r&&r.l(i),i.forEach(g),this.h()},h(){s(e,"class","absolute w-full top-0 bg-white p-6 rounded-2xl mb-6")},m(t,i){P(t,e,i),r&&r.m(e,null),b=!0},p(t,i){r&&r.p&&(!b||i&4)&&Z(r,u,t,t[2],b?tt(u,t[2],i,null):$(t[2]),null)},i(t){b||(V(r,t),rt(()=>{c&&c.end(1),a=ct(e,J,{x:1e3,duration:500,delay:500}),a.start()}),b=!0)},o(t){q(r,t),a&&a.invalidate(),c=et(e,J,{x:-1e3,duration:500}),b=!1},d(t){t&&g(e),r&&r.d(t),t&&c&&c.end()}}}function bt(o){let e,a,c,b,u,r,t,i,I,M,x,C,N,v,f,Y,A,y,F=o[0],z,d=K(o);return{c(){e=w("main"),a=w("div"),c=w("img"),u=j(),r=w("div"),t=w("div"),i=w("a"),I=D("projects"),M=j(),x=w("h1"),C=D("vlack"),N=j(),v=w("div"),f=w("a"),Y=D("about me"),A=j(),y=w("div"),d.c(),this.h()},l(l){e=m(l,"MAIN",{class:!0});var p=h(e);a=m(p,"DIV",{class:!0});var _=h(a);c=m(_,"IMG",{class:!0,src:!0}),u=E(_),r=m(_,"DIV",{class:!0});var k=h(r);t=m(k,"DIV",{class:!0});var H=h(t);i=m(H,"A",{class:!0,href:!0});var R=h(i);I=U(R,"projects"),R.forEach(g),H.forEach(g),M=E(k),x=m(k,"H1",{class:!0});var X=h(x);C=U(X,"vlack"),X.forEach(g),N=E(k),v=m(k,"DIV",{class:!0});var L=h(v);f=m(L,"A",{class:!0,href:!0});var B=h(f);Y=U(B,"about me"),B.forEach(g),L.forEach(g),k.forEach(g),_.forEach(g),A=E(p),y=m(p,"DIV",{class:!0});var G=h(y);d.l(G),G.forEach(g),p.forEach(g),this.h()},h(){s(c,"class","w-32 h-32 rounded-full ring-blue-300 ring-4 mx-auto bg-white"),ot(c.src,b="/vlack_logo.png")||s(c,"src",b),s(i,"class","header-link"),s(i,"href","/"),S(i,"active",o[1].url.pathname==="/"),s(t,"class","flex-grow flex justify-end w-60"),s(x,"class","text-3xl mx-4 my-2"),s(f,"class","header-link"),s(f,"href","/about"),S(f,"active",o[1].url.pathname==="/about"),s(v,"class","flex-grow flex w-60"),s(r,"class","flex justify-center items-center"),s(a,"class","bg-white p-6 rounded-b-2xl mb-6 "),s(y,"class","relative"),s(e,"class","max-w-screen-xl mx-auto")},m(l,p){P(l,e,p),n(e,a),n(a,c),n(a,u),n(a,r),n(r,t),n(t,i),n(i,I),n(r,M),n(r,x),n(x,C),n(r,N),n(r,v),n(v,f),n(f,Y),n(e,A),n(e,y),d.m(y,null),z=!0},p(l,[p]){p&2&&S(i,"active",l[1].url.pathname==="/"),p&2&&S(f,"active",l[1].url.pathname==="/about"),p&1&&O(F,F=l[0])?(lt(),q(d,1,1,st),at(),d=K(l),d.c(),V(d,1),d.m(y,null)):d.p(l,p)},i(l){z||(V(d),z=!0)},o(l){q(d),z=!1},d(l){l&&g(e),d.d(l)}}}const ut=async({url:o})=>({props:{key:o.pathname}});function pt(o,e,a){let c;it(o,gt,t=>a(1,c=t));let{$$slots:b={},$$scope:u}=e,{key:r}=e;return o.$$set=t=>{"key"in t&&a(0,r=t.key),"$$scope"in t&&a(2,u=t.$$scope)},[r,c,u,b]}class ht extends T{constructor(e){super(),W(this,e,pt,bt,O,{key:0})}}export{ht as default,ut as load};
