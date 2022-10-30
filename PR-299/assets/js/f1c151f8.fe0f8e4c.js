"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[5919],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return v}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),v=n,h=d["".concat(s,".").concat(v)]||d[v]||u[v]||o;return r?a.createElement(h,l(l({ref:t},c),{},{components:r})):a.createElement(h,l({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6595:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=r(3117),n=r(102),o=(r(7294),r(3905)),l=["components"],i={sidebar_position:0},s="Getting started",p={unversionedId:"develop/tutorial/getting-started",id:"develop/tutorial/getting-started",title:"Getting started",description:"Overview",source:"@site/../../src/develop/tutorial/getting-started.md",sourceDirName:"develop/tutorial",slug:"/develop/tutorial/getting-started",permalink:"/docs/PR-299/develop/tutorial/getting-started",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tutorial/getting-started.md",tags:[],version:"current",lastUpdatedAt:1666367166,formattedLastUpdatedAt:"Oct 21, 2022",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/docs/PR-299/develop/tutorial"},next:{title:"Deploy smart contracts with Locklift",permalink:"/docs/PR-299/develop/tutorial/locklift-sc"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Let&#39;s start",id:"lets-start",level:2},{value:"Ways to dive into development on Everscale for any case you need",id:"ways-to-dive-into-development-on-everscale-for-any-case-you-need",level:2},{value:"Other useful links",id:"other-useful-links",level:2}],d={toc:u};function v(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This page will give you an insight into how to choose development tools and approaches for building decentralised applications with the help of Everscale."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Attention!")," Before you read this article, we recommend that you study the ",(0,o.kt)("a",{parentName:"p",href:"/docs/PR-299/learn/overview"},"Everscale Overview page")," and the block of pages in the ",(0,o.kt)("a",{parentName:"p",href:"../../arch/"},"Architecture section")," if you want to develop complex products on the Everscale blockchain.")),(0,o.kt)("h2",{id:"lets-start"},"Let's start"),(0,o.kt)("p",null,"Before you start developing or integrating anything into Everscale, we would like to tell you about the tools that you will use in your work.  "),(0,o.kt)("p",null,"First of all, it is worth noting that Everscale is really a decentralized blockchain, both from the technical point of view, and the way it is managed. Thus, for the purpose of achieving its outstanding functionality, Everscale is supplied with key tools and development approaches from different leading technological providers."),(0,o.kt)("p",null,"At the moment, there are two active technological providers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://broxus.com"},"Broxus")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://everx.dev/"},"EverX"))),(0,o.kt)("p",null,"It is their solutions and tools that you will use when developing, while you will have every opportunity to write your own solutions as well, if necessary or desired.  "),(0,o.kt)("p",null,"You can learn more in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/PR-299/develop/tools/overview"},"Development tools section"),"."),(0,o.kt)("h2",{id:"ways-to-dive-into-development-on-everscale-for-any-case-you-need"},"Ways to dive into development on Everscale for any case you need"),(0,o.kt)("p",null,"We assume that there are several main cases of developers interacting with Everscale:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Build your dApp - knowledge of network architecture, understanding of smart contracts, standards and node devices will be useful to you.  "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Learn the ",(0,o.kt)("a",{parentName:"li",href:"../../arch/"},"network architecture")),(0,o.kt)("li",{parentName:"ul"},"Learn the ",(0,o.kt)("a",{parentName:"li",href:"../../standard/"},"standards")),(0,o.kt)("li",{parentName:"ul"},"Learn the ",(0,o.kt)("a",{parentName:"li",href:"/docs/PR-299/develop/tools/overview"},"development tools")),(0,o.kt)("li",{parentName:"ul"},"Learn the specifics of writing ",(0,o.kt)("a",{parentName:"li",href:"/docs/PR-299/develop/smart-contracts/introduction"},"smart contracts")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Learn how to ",(0,o.kt)("a",{parentName:"p",href:"/docs/PR-299/develop/tutorial/smart-digital-assets/issue-ft"},"issue tokens"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Explore the development team ",(0,o.kt)("a",{parentName:"p",href:"/docs/PR-299/develop/hackathons-grants"},"incentive programs in Everscale"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Migrate your dApp from another network"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Learn the ",(0,o.kt)("a",{parentName:"li",href:"../../arch/"},"network architecture")),(0,o.kt)("li",{parentName:"ul"},"Learn the ",(0,o.kt)("a",{parentName:"li",href:"/docs/PR-299/develop/from-another-platform/comparison-with-ethereum"},"comparison with Ethereum")),(0,o.kt)("li",{parentName:"ul"},"Learn the ",(0,o.kt)("a",{parentName:"li",href:"/docs/PR-299/develop/tools/overview"},"development tools")),(0,o.kt)("li",{parentName:"ul"},"Learn how to ",(0,o.kt)("a",{parentName:"li",href:"/docs/PR-299/develop/solidity-developing/getting-started"},"write contracts on Solidity")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Integrate Everscale blockchain in your on-chain or off-chain project - you will find it helpful to explore the Everscale Overview page as well as the Architecture page. Afterwards, please follow the Getting Started page in the Integrate section.  "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Learn ",(0,o.kt)("a",{parentName:"li",href:"/docs/PR-299/learn/overview"},"Everscale Overview page")),(0,o.kt)("li",{parentName:"ul"},"Learn ",(0,o.kt)("a",{parentName:"li",href:"/docs/PR-299/develop/integrate/tutorial/getting-started"},"how to integrate")," anyting with Everscale."),(0,o.kt)("li",{parentName:"ul"},"Learn the ",(0,o.kt)("a",{parentName:"li",href:"/docs/PR-299/develop/tools/overview"},"development tools")),(0,o.kt)("li",{parentName:"ul"},"Learn popular integration cases ",(0,o.kt)("a",{parentName:"li",href:"/docs/PR-299/gs/firts-touch/add-everscale-to-your-exchange"},"(exchange integration)"))))),(0,o.kt)("h2",{id:"other-useful-links"},"Other useful links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Join onboarding ",(0,o.kt)("a",{parentName:"li",href:"https://t.me/everdev"},"chat for developers")),(0,o.kt)("li",{parentName:"ul"},"Explore helpful development articles"),(0,o.kt)("li",{parentName:"ul"},"Learn ",(0,o.kt)("a",{parentName:"li",href:"/docs/PR-299/develop/tools/overview"},"developer tools"))))}v.isMDXComponent=!0}}]);