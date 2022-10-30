"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[7507],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||l[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6629:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return l}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],c={title:"Core description",sidebar_position:0,slug:"/standard/TIP-6"},s="Standard Interface Detection",d={unversionedId:"standard/TIP-6/core-description",id:"standard/TIP-6/core-description",title:"Core description",description:"Abstract",source:"@site/../../src/standard/TIP-6/core-description.md",sourceDirName:"standard/TIP-6",slug:"/standard/TIP-6",permalink:"/docs/PR-299/standard/TIP-6",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/standard/TIP-6/core-description.md",tags:[],version:"current",lastUpdatedAt:1649905495,formattedLastUpdatedAt:"Apr 14, 2022",sidebarPosition:0,frontMatter:{title:"Core description",sidebar_position:0,slug:"/standard/TIP-6"},sidebar:"tutorialSidebar",previous:{title:"1. NFT payment link",permalink:"/docs/PR-299/standard/TIP-5.2"},next:{title:"1. Interface Detection",permalink:"/docs/PR-299/standard/TIP-6.1"}},u={},l=[{value:"Abstract",id:"abstract",level:2}],p={toc:l};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"standard-interface-detection"},"Standard Interface Detection"),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,"Smart contracts in Everscale can implement a wide variety of functionality - wallets, tokens, exchanges and so on.\nWe need a standard way to determine the type of smart contract without relying on knowledge of its internal structure."))}f.isMDXComponent=!0}}]);