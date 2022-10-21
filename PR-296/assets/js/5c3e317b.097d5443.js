"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[2337],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,v=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9842:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1,description:"Everscale tool manager and user-friendly CLI interface"},s="EverDev",c={unversionedId:"gs/setting-up/everdev",id:"gs/setting-up/everdev",title:"EverDev",description:"Everscale tool manager and user-friendly CLI interface",source:"@site/../../src/gs/setting-up/everdev.md",sourceDirName:"gs/setting-up",slug:"/gs/setting-up/everdev",permalink:"/docs/PR-296/gs/setting-up/everdev",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/gs/setting-up/everdev.md",tags:[],version:"current",lastUpdatedAt:1666367166,formattedLastUpdatedAt:"Oct 21, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Everscale tool manager and user-friendly CLI interface"},sidebar:"tutorialSidebar",previous:{title:"Setting up environment",permalink:"/docs/PR-296/gs/setting-up"},next:{title:"Locklift",permalink:"/docs/PR-296/gs/setting-up/locklift"}},u={},p=[{value:"Conclusion",id:"conclusion",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"everdev"},"EverDev"),(0,a.kt)("p",null,"Everdev is a Node.js package with a CLI interface that allows devs to perform from one interface the following use cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Manage all core Ever OS Developer Tools"),(0,a.kt)("li",{parentName:"ul"},"Configure networks (including Local Blockchain, Developer Network, Everscale (main) network): add, configure giver;"),(0,a.kt)("li",{parentName:"ul"},"Manage keys: add, remove"),(0,a.kt)("li",{parentName:"ul"},"Work with Everscale blockchain from CLI")),(0,a.kt)("p",null,"Please follow ",(0,a.kt)("a",{parentName:"p",href:"https://docs.everos.dev/everdev/"},"this link")," to start working with Everdev."),(0,a.kt)("p",null,"This guide will help you figure out how to set up the EverDev environment."),(0,a.kt)("p",null,"Before all else, please ensure the following are installed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node JS \u2013 version 14 or later")),(0,a.kt)("p",null,"Let\u2019s start with create an empty directory for your first project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir my-project && cd $_\nnpm init --force\n")),(0,a.kt)("p",null,"Now you can install EverDev.\nUse ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install --save-dev everdev")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev everdev\n\nadded 104 packages, and audited 105 packages in 14s\n\n6 packages are looking for funding\n  run `npm fund` for details\n\nfound 0 vulnerabilities\n")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"This completes the environment setup."),(0,a.kt)("p",null,"If you want to continue learning about Locklift and create your first smart contract, please visit the ",(0,a.kt)("a",{parentName:"p",href:"/docs/PR-296/gs/firts-touch/everdev-sc"},"Deploy smart contracts with EverDev page"),"."))}f.isMDXComponent=!0}}]);