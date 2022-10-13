"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[8630],{3905:function(e,t,o){o.d(t,{Zo:function(){return i},kt:function(){return u}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},i=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=p(o),u=n,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return o?r.createElement(h,l(l({ref:t},i),{},{components:o})):r.createElement(h,l({ref:t},i))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<a;p++)l[p]=o[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4031:function(e,t,o){o.r(t),o.d(t,{assets:function(){return i},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=o(3117),n=o(102),a=(o(7294),o(3905)),l=["components"],s={sidebar_position:2},c="C++ Contract Samples",p={unversionedId:"develop/cpp/samples",id:"develop/cpp/samples",title:"C++ Contract Samples",description:"A repository with examples of contracts, as well as information on their compilation, deployment, and more",source:"@site/../../src/develop/cpp/samples.md",sourceDirName:"develop/cpp",slug:"/develop/cpp/samples",permalink:"/docs/develop/cpp/samples",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/cpp/samples.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"C/C++ Compiler",permalink:"/docs/develop/cpp/compiler"},next:{title:"GraphQL API",permalink:"/docs/develop/gql-api"}},i={},m=[{value:"1. Hello, world!: Introduces general concepts of the contract development.",id:"1-hello-world-introduces-general-concepts-of-the-contract-development",level:3},{value:"2. Authorization: Demonstrate a message signature check.",id:"2-authorization-demonstrate-a-message-signature-check",level:3},{value:"3. Giver:  The contract sends the requested amount of money.",id:"3-giver--the-contract-sends-the-requested-amount-of-money",level:3},{value:"4. Wallet: Simple contract to hold and spend EVER.",id:"4-wallet-simple-contract-to-hold-and-spend-ever",level:3},{value:"5. PiggyBank: Contract for savings.",id:"5-piggybank-contract-for-savings",level:3},{value:"6. Kamikaze: The example shows how a contract could be deleted from the network.",id:"6-kamikaze-the-example-shows-how-a-contract-could-be-deleted-from-the-network",level:3}],d={toc:m};function u(e){var t=e.components,o=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"c-contract-samples"},"C++ Contract Samples"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/cpp/README.md"},"A repository with examples of contracts, as well as information on their compilation, deployment, and more")),(0,a.kt)("p",null,"A list of examples of C++ contracts is given below:"),(0,a.kt)("h3",{id:"1-hello-world-introduces-general-concepts-of-the-contract-development"},"1. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/cpp/HelloWorld"},"Hello, world!"),": Introduces general concepts of the contract development."),(0,a.kt)("p",null,"This example is a part of ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/cpp/getting-started"},"C++ Tutorial")," which is a step by step guidance on how to create your first contract."),(0,a.kt)("h3",{id:"2-authorization-demonstrate-a-message-signature-check"},"2. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/cpp/Authorization"},"Authorization"),": Demonstrate a message signature check."),(0,a.kt)("p",null,"This example is a part of ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/cpp/getting-started"},"C++ Tutorial"),". The example extends ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/cpp/HelloWorld"},"Hello, world!")," example by introducing signature cheching to prevent spam attack on a contract and make it run out of money."),(0,a.kt)("h3",{id:"3-giver--the-contract-sends-the-requested-amount-of-money"},"3. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/cpp/Giver"},"Giver"),":  The contract sends the requested amount of money."),(0,a.kt)("p",null,"This example is a part of ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/cpp/getting-started"},"C++ Tutorial"),". It shows how to call a public method with parameters from another contract."),(0,a.kt)("h3",{id:"4-wallet-simple-contract-to-hold-and-spend-ever"},"4. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/cpp/Wallet"},"Wallet"),": Simple contract to hold and spend EVER."),(0,a.kt)("h3",{id:"5-piggybank-contract-for-savings"},"5. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/cpp/Piggybank"},"PiggyBank"),": Contract for savings."),(0,a.kt)("p",null,"The example consist of three contracts which exchange messages between each other. It shows simplest form of an internal call of a public method. It also show how a mechanism of internal authorization might work."),(0,a.kt)("h3",{id:"6-kamikaze-the-example-shows-how-a-contract-could-be-deleted-from-the-network"},"6. ",(0,a.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/cpp/Kamikaze"},"Kamikaze"),": The example shows how a contract could be deleted from the network."))}u.isMDXComponent=!0}}]);