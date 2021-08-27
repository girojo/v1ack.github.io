import{S as e,i as l,s,e as t,t as a,c as r,a as n,g as o,d as c,b as i,f as d,L as f,k as h,n as u,J as m,R as v,h as g,Q as p,j as x,m as k,o as b,p as w,q as E,x as j,u as y,v as $,T as D,w as V,U as L,B as I,r as S}from"../chunks/vendor-7fd04ffb.js";function A(e){let l,s,h;return{c(){l=t("a"),s=a("More"),this.h()},l(e){l=r(e,"A",{href:!0,class:!0});var t=n(l);s=o(t,"More"),t.forEach(c),this.h()},h(){i(l,"href",h="/projects/"+e[0]),i(l,"class","link svelte-76ml65")},m(e,t){d(e,l,t),f(l,s)},p(e,s){1&s&&h!==(h="/projects/"+e[0])&&i(l,"href",h)},d(e){e&&c(l)}}}function F(e){let l,s;return{c(){l=t("a"),s=a("Open"),this.h()},l(e){l=r(e,"A",{rel:!0,href:!0,class:!0});var t=n(l);s=o(t,"Open"),t.forEach(c),this.h()},h(){i(l,"rel","external"),i(l,"href",e[5]),i(l,"class","link svelte-76ml65")},m(e,t){d(e,l,t),f(l,s)},p(e,s){32&s&&i(l,"href",e[5])},d(e){e&&c(l)}}}function G(e){let l,s,x,k,b,w,E,j,y,$,D,V,L,I,S,G,U,z,B,M=e[4]&&A(e),O=e[5]&&F(e);return{c(){l=t("div"),s=t("figure"),x=t("img"),b=h(),w=t("div"),E=t("h3"),j=a(e[1]),y=h(),$=t("div"),D=t("div"),V=t("p"),L=a(e[1]),I=h(),S=t("p"),G=a(e[3]),U=h(),z=t("div"),M&&M.c(),B=h(),O&&O.c(),this.h()},l(t){l=r(t,"DIV",{class:!0});var a=n(l);s=r(a,"FIGURE",{class:!0,style:!0});var i=n(s);x=r(i,"IMG",{alt:!0,class:!0,src:!0}),i.forEach(c),b=u(a),w=r(a,"DIV",{class:!0});var d=n(w);E=r(d,"H3",{class:!0});var f=n(E);j=o(f,e[1]),f.forEach(c),d.forEach(c),y=u(a),$=r(a,"DIV",{class:!0});var h=n($);D=r(h,"DIV",{class:!0});var m=n(D);V=r(m,"P",{class:!0});var v=n(V);L=o(v,e[1]),v.forEach(c),I=u(m),S=r(m,"P",{class:!0});var g=n(S);G=o(g,e[3]),g.forEach(c),U=u(m),z=r(m,"DIV",{class:!0});var p=n(z);M&&M.l(p),B=u(p),O&&O.l(p),p.forEach(c),m.forEach(c),h.forEach(c),a.forEach(c),this.h()},h(){i(x,"alt",""),i(x,"class","object-contain object-center w-full h-full svelte-76ml65"),m(x.src,k=e[2])||i(x,"src",k),i(s,"class"," h-80 overflow-hidden svelte-76ml65"),v(s,"background-color",e[6]),i(E,"class","text-lg bg-blue-500 rounded-lg px-3 py-1 text-white mx-auto svelte-76ml65"),i(w,"class","absolute p-3 bottom-0 svelte-76ml65"),i(V,"class","text-2xl font-medium svelte-76ml65"),i(S,"class","svelte-76ml65"),i(z,"class","flex justify-end mt-1 svelte-76ml65"),i(D,"class","p-4 bg-white rounded-lg svelte-76ml65"),i($,"class","absolute p-2 w-full\n    transform group-hover:-translate-y-full\n    transition-transform duration-500 ease-in-out svelte-76ml65"),i(l,"class","rounded-xl overflow-hidden cursor-pointer group w-72 relative transition-color svelte-76ml65")},m(e,t){d(e,l,t),f(l,s),f(s,x),f(l,b),f(l,w),f(w,E),f(E,j),f(l,y),f(l,$),f($,D),f(D,V),f(V,L),f(D,I),f(D,S),f(S,G),f(D,U),f(D,z),M&&M.m(z,null),f(z,B),O&&O.m(z,null)},p(e,[l]){4&l&&!m(x.src,k=e[2])&&i(x,"src",k),64&l&&v(s,"background-color",e[6]),2&l&&g(j,e[1]),2&l&&g(L,e[1]),8&l&&g(G,e[3]),e[4]?M?M.p(e,l):(M=A(e),M.c(),M.m(z,B)):M&&(M.d(1),M=null),e[5]?O?O.p(e,l):(O=F(e),O.c(),O.m(z,null)):O&&(O.d(1),O=null)},i:p,o:p,d(e){e&&c(l),M&&M.d(),O&&O.d()}}}function U(e,l,s){let{id:t}=l,{name:a}=l,{image:r}=l,{description:n=""}=l,{link:o}=l,{externalLink:c}=l,{color:i="white"}=l;return e.$$set=e=>{"id"in e&&s(0,t=e.id),"name"in e&&s(1,a=e.name),"image"in e&&s(2,r=e.image),"description"in e&&s(3,n=e.description),"link"in e&&s(4,o=e.link),"externalLink"in e&&s(5,c=e.externalLink),"color"in e&&s(6,i=e.color)},[t,a,r,n,o,c,i]}class z extends e{constructor(e){super(),l(this,e,U,G,s,{id:0,name:1,image:2,description:3,link:4,externalLink:5,color:6})}}const B=[{id:"docsView",name:"Docs View",image:"/docsview.svg",link:!0,description:"Tizen app for Samsung Galaxy Watch, Samsung Galaxy Watch Active, Samsung Gear S3 that allows you to open PDFs, markdown and txt",color:"#1caeec"},{id:"svelte-virtual-scroll-list",name:"svelte-virtual-scroll-list",image:"/virtual-scroll-icon.png",externalLink:"/svelte-virtual-scroll-list",description:"Virtualized scrolling for big lists for Svelte",color:"#eee"},{id:"fa-schedule",name:"University schedule",image:"/fa-schedule.png",externalLink:"https://schedule.fa.ru",description:"Calendar service for Financial University schedule",color:"#FEDED9"},{id:"fa-bot",name:"Schedule chat-bot",image:"/fa-bot.png",externalLink:"https://bot.fa.ru",description:"VK bot for Financial University schedule",color:"#d9f7fe"},{id:"watchfaceEditor",name:"watchfaceEditor",image:"/wf-editor.png",description:"Online watchface editor for Amazfit Bip and Amazfit Cor",color:"rgb(78,177,255)",externalLink:"/watchfaceEditor"}];function M(e,l,s){const t=e.slice();return t[0]=l[s],t}function O(e){let l,s;const t=[e[0]];let a={};for(let r=0;r<t.length;r+=1)a=I(a,t[r]);return l=new z({props:a}),{c(){x(l.$$.fragment)},l(e){k(l.$$.fragment,e)},m(e,t){b(l,e,t),s=!0},p(e,s){const a=0&s?w(t,[E(e[0])]):{};l.$set(a)},i(e){s||(j(l.$$.fragment,e),s=!0)},o(e){y(l.$$.fragment,e),s=!1},d(e){$(l,e)}}}function P(e){let l,s,m,v,g,p,x=B,k=[];for(let t=0;t<x.length;t+=1)k[t]=O(M(e,x,t));const b=e=>y(k[e],1,1,(()=>{k[e]=null}));return{c(){l=h(),s=t("h1"),m=a("projects"),v=h(),g=t("div");for(let e=0;e<k.length;e+=1)k[e].c();this.h()},l(e){D('[data-svelte="svelte-1av64bk"]',document.head).forEach(c),l=u(e),s=r(e,"H1",{class:!0});var t=n(s);m=o(t,"projects"),t.forEach(c),v=u(e),g=r(e,"DIV",{class:!0});var a=n(g);for(let l=0;l<k.length;l+=1)k[l].l(a);a.forEach(c),this.h()},h(){document.title="vlack projects",i(s,"class","text-center text-2xl mb-6"),i(g,"class","grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-2 justify-items-center")},m(e,t){d(e,l,t),d(e,s,t),f(s,m),d(e,v,t),d(e,g,t);for(let l=0;l<k.length;l+=1)k[l].m(g,null);p=!0},p(e,[l]){if(0&l){let s;for(x=B,s=0;s<x.length;s+=1){const t=M(e,x,s);k[s]?(k[s].p(t,l),j(k[s],1)):(k[s]=O(t),k[s].c(),j(k[s],1),k[s].m(g,null))}for(S(),s=x.length;s<k.length;s+=1)b(s);V()}},i(e){if(!p){for(let e=0;e<x.length;e+=1)j(k[e]);p=!0}},o(e){k=k.filter(Boolean);for(let l=0;l<k.length;l+=1)y(k[l]);p=!1},d(e){e&&c(l),e&&c(s),e&&c(v),e&&c(g),L(k,e)}}}class C extends e{constructor(e){super(),l(this,e,null,P,s,{})}}export{C as default};
