"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[7148],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return v}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),v=o,f=d["".concat(s,".").concat(v)]||d[v]||u[v]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6499:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:0},s="Overview",c={unversionedId:"develop/client-api/overview",id:"develop/client-api/overview",title:"Overview",description:"Introduction",source:"@site/../../src/develop/client-api/overview.md",sourceDirName:"develop/client-api",slug:"/develop/client-api/overview",permalink:"/docs/PR-289/develop/client-api/overview",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/client-api/overview.md",tags:[],version:"current",lastUpdatedAt:1665926171,formattedLastUpdatedAt:"Oct 16, 2022",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Client API",permalink:"/docs/PR-289/develop/client-api"},next:{title:"Rust API",permalink:"/docs/PR-289/develop/client-api/rust-api"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"APIs and Client Libraries for Everscale Access",id:"apis-and-client-libraries-for-everscale-access",level:2}],d={toc:u};function v(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Before you start developing or integrating anything into Everscale, we would like to tell you about the tools and environment that you will use in your work."),(0,a.kt)("p",null,"First of all, it is worth noting that Everscale is really a decentralized blockchain, not only from a technical point of view, but also from a management side, so the key tools and approaches to development may differ from different teams, technical contributors on the network."),(0,a.kt)("p",null,"At the moment, there are two active companies of technical contributors in Everscale network:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://everx.dev/about"},"EverX")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://broxus.com/"},"Broxus")),(0,a.kt)("p",null,"And it is their solutions and tools that you will use when developing, while you will have every opportunity to write your own solutions as well, if necessary or desired."),(0,a.kt)("h2",{id:"apis-and-client-libraries-for-everscale-access"},"APIs and Client Libraries for Everscale Access"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"../gql-api"},"GraphQL API")," (by EverX) - Mainnet validating node with a GraphQL server that allows you to collect a large amount of data about the network.\n*Suitable for integration by exchanges and other platforms.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/PR-289/develop/ever-sdk-js"},"ever-sdk-js")," (by EverX) - EverX Web3 Javascript library that works on top of GraphQL API - is a binding over ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/ever-sdk"},"core Rust ever-sdk library"),".\nIt allows Everscale developers work with contracts and query data from GraphQL API. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"#todo"},"everscale-inpage-provider")," (by Broxus) - Web 3.0 library for Everscale. Typed wrappers over contracts etc.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/PR-289/develop/client-api/rust-api"},"Rust Core Library")," (by EverX) - provides Everscale developers with services on top of scalable blockchain infrastructure, so that developers can focus on business logic instead of infrastructure maintenance.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/PR-289/develop/client-api/other-lang"},"Other Languages")," (by EverX) - Community bindings over Rust Core Library."))))}v.isMDXComponent=!0}}]);