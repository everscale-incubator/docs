"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[8682],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=o,v=d["".concat(i,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(v,l(l({ref:t},p),{},{components:r})):n.createElement(v,l({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8925:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:3},l="SDK",s={unversionedId:"develop/tools/everdev/command-line-interface/sdk",id:"develop/tools/everdev/command-line-interface/sdk",title:"SDK",description:"See the list of available demo projects",source:"@site/../../src/develop/tools/everdev/command-line-interface/sdk.md",sourceDirName:"develop/tools/everdev/command-line-interface",slug:"/develop/tools/everdev/command-line-interface/sdk",permalink:"/docs/PR-308/develop/tools/everdev/command-line-interface/sdk",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tools/everdev/command-line-interface/sdk.md",tags:[],version:"current",lastUpdatedAt:1660241980,formattedLastUpdatedAt:"Aug 11, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Evernode SE",permalink:"/docs/PR-308/develop/tools/everdev/command-line-interface/evernode-platform-startup-edition-se"},next:{title:"TONOS-CLI",permalink:"/docs/PR-308/develop/tools/everdev/command-line-interface/tonos-cli"}},i={},c=[{value:"See the list of available demo projects",id:"see-the-list-of-available-demo-projects",level:2},{value:"Install demo project",id:"install-demo-project",level:2},{value:"Create an empty project",id:"create-an-empty-project",level:2},{value:"Create contract JS wrapper",id:"create-contract-js-wrapper",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sdk"},"SDK"),(0,o.kt)("h2",{id:"see-the-list-of-available-demo-projects"},"See the list of available demo projects"),(0,o.kt)("p",null,"This command shows the list of available demo projects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"everdev js demo\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ everdev js demo\nDemo          Description\n------------  -------------------------\nhello-wallet  Simple NodeJs Application\n")),(0,o.kt)("h2",{id:"install-demo-project"},"Install demo project"),(0,o.kt)("p",null,"This command installs the specified demo project to the current directory. Proceed the instructions in the terminal to run it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"everdev js demo hello-wallet\n")),(0,o.kt)("h2",{id:"create-an-empty-project"},"Create an empty project"),(0,o.kt)("p",null,"This command creates a Node.js project with SDK latest dependencies and index.js file with main Client object creation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"everdev js create test_project\n")),(0,o.kt)("h2",{id:"create-contract-js-wrapper"},"Create contract JS wrapper"),(0,o.kt)("p",null,"This command takes abi and, optionally, tvc file and generates a JS wrapper with abi and tvc converted into base64 that can be used further in SDK.\ntvc file must have the same name as abi."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"everdev js wrap contractName.abi.json\n")),(0,o.kt)("p",null,'The result name of the wrapper will be "ContractName||"Contract".js".'),(0,o.kt)("p",null,"See other available generation options with help command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"everdev js wrap -h\nEverDev Version: 0.4.0\nUse: everdev js wrap file [options]\nArgs:\n    file  ABI file\nOptions:\n    --help, -h    Show command usage\n    --print, -p   Print code to console\n    --output, -o  Set output file name (default is built from source ABI file name)\n    --export, -e  Export type and options\n                  commonjs          Use CommonJS modules (NodeJs)\n                  commonjs-default  Use CommonJS modules (NodeJS) with default export\n                  es6               Use ES6 modules\n                  es6-default       Use ES6 modules with default export\n")))}d.isMDXComponent=!0}}]);