"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[9193],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},18:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],l={title:"v2.3",slug:"/arch/abi/2.3"},s="Everscale Smart Contracts ABI 2.3 Specification",c={unversionedId:"arch/abi/2.3",id:"arch/abi/2.3",title:"v2.3",description:"ABI 2.3 introduces the new method to calculate external inbound message body signature. It is aimed to fix the below described problem in ABI v2.2.",source:"@site/../../src/arch/abi/2.3.md",sourceDirName:"arch/abi",slug:"/arch/abi/2.3",permalink:"/docs/PR-292/arch/abi/2.3",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/abi/2.3.md",tags:[],version:"current",lastUpdatedAt:1662187035,formattedLastUpdatedAt:"Sep 3, 2022",frontMatter:{title:"v2.3",slug:"/arch/abi/2.3"},sidebar:"tutorialSidebar",previous:{title:"v2.2",permalink:"/docs/PR-292/arch/abi/2.2"},next:{title:"Build",permalink:"/docs/PR-292/develop"}},d={},u=[{value:"Problem",id:"problem",level:2},{value:"Modified Signing Algorithm",id:"modified-signing-algorithm",level:2}],p={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"everscale-smart-contracts-abi-23-specification"},"Everscale Smart Contracts ABI 2.3 Specification"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ABI 2.3")," introduces the new method to calculate external inbound message body signature. It is aimed to fix the below described problem in ",(0,i.kt)("a",{parentName:"p",href:"/docs/PR-292/arch/abi/2.2"},"ABI v2.2"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Big thanks to Everscale community member ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mnill"},"https://github.com/mnill")," Ilia Kirichek who found these problems."),(0,i.kt)("h2",{id:"problem"},"Problem"),(0,i.kt)("p",null,"External messages may have a signature. Signatures are dependent only on message body (without signature flag and signature itself). Signatures aren\u2019t dependent on ",(0,i.kt)("inlineCode",{parentName:"p"},"dest")," address, and it may cause a problem. Let's consider the following situation:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"User has 2 contracts that contain the same public key and public function with same signature"),(0,i.kt)("li",{parentName:"ol"},"User sends message to the first contract"),(0,i.kt)("li",{parentName:"ol"},"Then hacker can create a message and send it to the second contract, and it may be successful.")),(0,i.kt)("p",null,"To solve the problem signature must be dependent on the destination address."),(0,i.kt)("h2",{id:"modified-signing-algorithm"},"Modified Signing Algorithm"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"ABI serialization generates bag of cells containing header parameters, function ID and function parameters.\n591 free bits are reserved in the root cell for destination address (the maximum size of internal address)."),(0,i.kt)("li",{parentName:"ol"},"The root cell data is prepended with actual destination address data without padding to maximum size."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"Representation hash")," of the bag is signed using the ",(0,i.kt)("em",{parentName:"li"},"Ed25519")," algorithm."),(0,i.kt)("li",{parentName:"ol"},"Address data is removed from the root cell and replaced with bit ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," followed by 512 bits of the signature.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This functionality is supported staring with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/Changelog_TON.md#0640-2022-08-18"},"0.64.0")," version of the Solidity compiler.")))}m.isMDXComponent=!0}}]);