"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[6732],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(r),u=n,m=p["".concat(c,".").concat(u)]||p[u]||f[u]||o;return r?a.createElement(m,s(s({ref:t},l),{},{components:r})):a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7237:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const o={title:"1. Reverse DeCert",sidebar_position:1,slug:"/standard/TIP-2.1"},s="ReDeNS \u2014 Reverse DeCert (TIP-2.1)",i={unversionedId:"standard/TIP-2/1",id:"standard/TIP-2/1",title:"1. Reverse DeCert",description:"In TIP-2 it is stated that in order to resolve a Certificate Address from the Contract Address, that contract must have its Certificate Address explicitly stated. There is a need sometimes to resolve some certificate address from the address of a contract.",source:"@site/../../src/standard/TIP-2/1.md",sourceDirName:"standard/TIP-2",slug:"/standard/TIP-2.1",permalink:"/docs/PR-308/standard/TIP-2.1",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/standard/TIP-2/1.md",tags:[],version:"current",lastUpdatedAt:1649905495,formattedLastUpdatedAt:"Apr 14, 2022",sidebarPosition:1,frontMatter:{title:"1. Reverse DeCert",sidebar_position:1,slug:"/standard/TIP-2.1"},sidebar:"tutorialSidebar",previous:{title:"Core description",permalink:"/docs/PR-308/standard/TIP-2"},next:{title:"Core description",permalink:"/docs/PR-308/standard/TIP-3"}},c={},d=[],l={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"redens--reverse-decert-tip-21"},"ReDeNS \u2014 Reverse DeCert (TIP-2.1)"),(0,n.kt)("p",null,"In ",(0,n.kt)("a",{parentName:"p",href:"/docs/PR-308/standard/TIP-2"},"TIP-2")," it is stated that in order to resolve a Certificate Address from the Contract Address, that contract must have its Certificate Address explicitly stated. There is a need sometimes to resolve some certificate address from the address of a contract."),(0,n.kt)("p",null,"Here we present an architecture and implementation of Reverse DeCert and one of its usecases: ReDeNS"),(0,n.kt)("p",null,"Reverse Decentralized Names or ReDeNS for short is a certificate that enables reverse resolving of some contracts addresses from another contract."),(0,n.kt)("p",null,"It uses a contract Placeholder for each type of contract functionality that we want to be able to put into external (or satellite) contract of a main contract."),(0,n.kt)("p",null,"ReDeNs enables any client to calculate the address of a satellite contract using a ReDeNs code as a certificate for each type of satellite contract it desires to resolve. In order to resolve a ReDeNS address the user may calculate an address taking a hash of a main contract and a hash of ReDeNS certificate as initial data and an owner address or PubKey in constructor parameters. After the deploy of initial ReDeNS certificate code developer will use SetCode to change the ReDeNS certificate code to desired type of satellite smart contract (with ABI, Getter or DeBot functionality, respectively and so on)"),(0,n.kt)("p",null,"For example we have identified 3 types of satellite contracts which will be default ReDeNS Certificates of any main contract in Solidity and C++ Compilers and TON OS SDK: ABI, GETTERS and DEBOT."),(0,n.kt)("p",null,"To protect contracts without ReDeNS certificate deployed from squatters we propose to use header with bitmask: one bit for each type of ReDeNS certificates: abi-DeCert, getters-DeCert, debot-DeCert and so on. So far, we decided to have 16-bit bitmask. 3 of them already occupied. { Abi, getters, debot }."),(0,n.kt)("p",null,"The ReDeNS certificate code is as following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/dens/redens"},"How to create DeBot derived from your smart contract"))))}p.isMDXComponent=!0}}]);