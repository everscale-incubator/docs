"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[2047],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,v=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return n?o.createElement(v,a(a({ref:t},d),{},{components:n})):o.createElement(v,a({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const l={sidebar_position:4},a="TONOS-CLI",i={unversionedId:"develop/tools/everdev/command-line-interface/tonos-cli",id:"develop/tools/everdev/command-line-interface/tonos-cli",title:"TONOS-CLI",description:"Note: tonos-cli is in the process of being rebranded to everos-cli",source:"@site/../../src/develop/tools/everdev/command-line-interface/tonos-cli.md",sourceDirName:"develop/tools/everdev/command-line-interface",slug:"/develop/tools/everdev/command-line-interface/tonos-cli",permalink:"/docs/PR-308/develop/tools/everdev/command-line-interface/tonos-cli",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tools/everdev/command-line-interface/tonos-cli.md",tags:[],version:"current",lastUpdatedAt:1660241980,formattedLastUpdatedAt:"Aug 11, 2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"SDK",permalink:"/docs/PR-308/develop/tools/everdev/command-line-interface/sdk"},next:{title:"TestSuite4",permalink:"/docs/PR-308/develop/tools/everdev/command-line-interface/testsuite4"}},s={},c=[{value:"Install",id:"install",level:2},{value:"Version",id:"version",level:2},{value:"Set",id:"set",level:2},{value:"Update",id:"update",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tonos-cli"},"TONOS-CLI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"tonos-cli")," is in the process of being rebranded to ",(0,r.kt)("inlineCode",{parentName:"p"},"everos-cli")),(0,r.kt)("p",null,"EverDev installs tonos-cli globally, so after the installation is complete, you can access the functionality via command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tonos-cli <command> <args>\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/PR-308/develop/tools/tonos-cli"},"See the tonos-cli usage documentation")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/tonos-cli#how-to-use"},"repository"),". "),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"This command installs the latest tonos-cli"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"everdev tonos-cli install\n")),(0,r.kt)("p",null,"The installer requires NPM to be installed, so it can install packages globally without using sudo.\nIn case of error, manually set environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH=$PATH:$HOME/.everdev/solidity")),(0,r.kt)("h2",{id:"version"},"Version"),(0,r.kt)("p",null,"This command shows the used tonos-cli version and list of available for download versions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"everdev tonos-cli version\n\nVersion    Available\n---------  ------------------------------------------------------\n0.8.1      0.6.0, 0.6.1, 0.6.2, 0.7.1, 0.6.3, 0.7.0, 0.8.0, 0.8.1\n")),(0,r.kt)("h2",{id:"set"},"Set"),(0,r.kt)("p",null,"This command specifies tonos-cli version to use and downloads it if needed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"everdev tonos-cli set --version 0.8.0\n")),(0,r.kt)("h2",{id:"update"},"Update"),(0,r.kt)("p",null,"This command updates tonos-cli version to the latest"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"everdev tonos-cli update\n")))}p.isMDXComponent=!0}}]);