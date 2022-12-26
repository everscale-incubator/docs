"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[7410],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const l={sidebar_position:2},i="Locklift",a={unversionedId:"gs/setting-up/locklift",id:"gs/setting-up/locklift",title:"Locklift",description:"Locklift is a development environment aiming to help you with Everscale contracts development. With Locklift, you get:",source:"@site/../../src/gs/setting-up/locklift.md",sourceDirName:"gs/setting-up",slug:"/gs/setting-up/locklift",permalink:"/docs/PR-308/gs/setting-up/locklift",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/gs/setting-up/locklift.md",tags:[],version:"current",lastUpdatedAt:1666367166,formattedLastUpdatedAt:"Oct 21, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"EverDev",permalink:"/docs/PR-308/gs/setting-up/everdev"},next:{title:"First Touch",permalink:"/docs/PR-308/gs/first-touch"}},s={},c=[{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"locklift"},"Locklift"),(0,o.kt)("p",null,"Locklift is a development environment aiming to help you with Everscale contracts development. With Locklift, you get:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Network management for working with any networks (main, test, local, ...)"),(0,o.kt)("li",{parentName:"ul"},"Automated contract testing with Mocha"),(0,o.kt)("li",{parentName:"ul"},"Handy wrapper around Everscale smart contract"),(0,o.kt)("li",{parentName:"ul"},"Custom givers support"),(0,o.kt)("li",{parentName:"ul"},"Keys management"),(0,o.kt)("li",{parentName:"ul"},"External script runner that executes scripts within specified environment")),(0,o.kt)("p",null,"Please follow ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/broxus/locklift"},"this link")," to start working with Locklift."),(0,o.kt)("p",null,"This guide will help you figure out how to set up the Locklift environment."),(0,o.kt)("p",null,"Before all else, please ensure the following are installed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Node JS \u2013 version 14 or later")),(0,o.kt)("p",null,"Let\u2019s start with create an empty directory for your first project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir myfirstconract && cd myfirstconract && npm init\n")),(0,o.kt)("p",null,"Great! Now you can install Locklift.\nUse ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install --save-dev locklift")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev locklift\n\nadded 168 packages, and audited 169 packages in 13s\n\n22 packages are looking for funding\n  run `npm fund` for details\n\nfound 0 vulnerabilities\n")),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx locklift \u2013version")," to make sure that Locklift is successfully installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx locklift --version\n2.3.0\n")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"This completes the environment setup."),(0,o.kt)("p",null,"If you want to continue learning about Locklift and create your first smart contract, please visit the ",(0,o.kt)("a",{parentName:"p",href:"/docs/PR-308/gs/firts-touch/locklift-sc"},"Deploy smart contract with Locklift page"),"."))}u.isMDXComponent=!0}}]);