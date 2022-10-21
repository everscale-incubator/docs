"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[3134],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),l=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},u=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=l(r),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(h,c(c({ref:e},u),{},{components:r})):n.createElement(h,c({ref:e},u))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2741:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),c=["components"],i={discription:"Introduction to smart contracts."},s="Introduction",l={unversionedId:"develop/smart-contracts/introduction",id:"develop/smart-contracts/introduction",title:"Introduction",description:"Smart contracts - are a kind of algorithm, or program that runs on Everscale or other blockchains, like Ethereum, which was the first to come up with the idea of smart contracts.",source:"@site/../../src/develop/smart-contracts/01-introduction.md",sourceDirName:"develop/smart-contracts",slug:"/develop/smart-contracts/introduction",permalink:"/docs/PR-296/develop/smart-contracts/introduction",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/smart-contracts/01-introduction.md",tags:[],version:"current",lastUpdatedAt:1666367166,formattedLastUpdatedAt:"Oct 21, 2022",sidebarPosition:1,frontMatter:{discription:"Introduction to smart contracts."},sidebar:"tutorialSidebar",previous:{title:"Smart Contracts",permalink:"/docs/PR-296/develop/smart-contracts"},next:{title:"Blockchain",permalink:"/docs/PR-296/develop/smart-contracts/blockchain"}},u={},d=[{value:"Smart contracts use cases.",id:"smart-contracts-use-cases",level:2},{value:"How smart contracts actually work.",id:"how-smart-contracts-actually-work",level:2}],p={toc:d};function m(t){var e=t.components,r=(0,o.Z)(t,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Smart contracts - are a kind of algorithm, or program that runs on Everscale or other blockchains, like Ethereum, which was the first to come up with the idea of smart contracts.\nThey work in accordance to a prescribed set of rules that are programmed by developers. When all conditions prescribed in the contract are met, the contract is executed."),(0,a.kt)("p",null,"For instance, let's examine the case of digital asset swaps. These kinds of transactions are by default anonymous and do not require an intermediary so as to complete them. For this to happen, we require smart contracts, which include all necessary information: currency A and B, amount, sender address, receiver address, and so on. In this case, only when all conditions set in the respective contract are met, is the transaction completed."),(0,a.kt)("h2",{id:"smart-contracts-use-cases"},"Smart contracts use cases."),(0,a.kt)("p",null,"Smart contracts are the building blocks necessary to ensure the functioning of decentralized projects (DeFi, DApps, etc.), due to the fact that they eliminate the need for intermediaries. They are used to ensure that the stipulated set of conditions is followed in the correct algorithmic sequence."),(0,a.kt)("p",null,"The algorithm itself is written inside the blockchain, so the rules for transactions are mandatory for all participants and manipulations are not possible."),(0,a.kt)("h2",{id:"how-smart-contracts-actually-work"},"How smart contracts actually work."),(0,a.kt)("p",null,"Smart contracts are programmed in  blockchains (in our case Everscale) and, respectively, work within the network. They perform the same functions as traditional contracts written on paper. The difference is that they are not written on paper, but with the use of mathematical algorithms and programming languages. This makes them secure, efficient, cheaper, and much faster, considering the fact that the intermediary is no longer needed."),(0,a.kt)("p",null,"As in a paper contract, the conditions that were set in the contract are subject to mandatory implementation. Therefore, only in this case will the transaction mentioned above (digital asset swap) be completed and participants in this transaction will receive what they were supposed to. It should be noted that after the correct execution of the transaction, the respective smart contract becomes part of the registry, getting into the blockchain. To add, it can be viewed by anyone with access to the internet."),(0,a.kt)("p",null,"The basic principle of a smart contract is the complete execution of conditions set in the contract."),(0,a.kt)("p",null,"In order to start developing your own dApps please consult ",(0,a.kt)("a",{parentName:"p",href:"../../develop/tutorial/everdev-sc"},(0,a.kt)("strong",{parentName:"a"},"Getting started"))," page which provides a complete step-by-step guide."))}m.isMDXComponent=!0}}]);