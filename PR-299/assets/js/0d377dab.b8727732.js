"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[3227],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return v}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),v=o,f=d["".concat(p,".").concat(v)]||d[v]||u[v]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5511:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),l=["components"],i={sidebar_position:1},p="Connect to GraphQL API",c={unversionedId:"develop/client-api/gql-api/gql-connect",id:"develop/client-api/gql-api/gql-connect",title:"Connect to GraphQL API",description:"Find the best GraphQL API solution for you",source:"@site/../../src/develop/client-api/gql-api/gql-connect.md",sourceDirName:"develop/client-api/gql-api",slug:"/develop/client-api/gql-api/gql-connect",permalink:"/docs/PR-299/develop/client-api/gql-api/gql-connect",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/client-api/gql-api/gql-connect.md",tags:[],version:"current",lastUpdatedAt:1660241980,formattedLastUpdatedAt:"Aug 11, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"About GraphQL API",permalink:"/docs/PR-299/develop/client-api/gql-api/"},next:{title:"GraphQL Samples",permalink:"/docs/PR-299/develop/client-api/gql-api/gql-samples"}},s={},u=[{value:"Evercloud",id:"evercloud",level:2},{value:"Community Dapp Server",id:"community-dapp-server",level:2},{value:"Local Blockchain for testing",id:"local-blockchain-for-testing",level:2}],d={toc:u};function v(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connect-to-graphql-api"},"Connect to GraphQL API"),(0,a.kt)("p",null,"Find the best GraphQL API solution for you"),(0,a.kt)("h2",{id:"evercloud"},"Evercloud"),(0,a.kt)("p",null,"If you don't want to manage your own nodes, Evernode Cloud Platform - or Evercloud - provides you with Everscale Cloud Infrastructure. "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.everos.dev/evernode-platform/products/evercloud"},"https://docs.everos.dev/evernode-platform/products/evercloud")),(0,a.kt)("h2",{id:"community-dapp-server"},"Community Dapp Server"),(0,a.kt)("p",null,"If you want to run Evernode Platform on your server, Dapp Server is a free community version for that."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.everos.dev/evernode-platform/products/dapp-server-ds"},"https://docs.everos.dev/evernode-platform/products/dapp-server-ds")," "),(0,a.kt)("h2",{id:"local-blockchain-for-testing"},"Local Blockchain for testing"),(0,a.kt)("p",null,"Test your basic Dapp functionality locally. Simple emulator is a light-weight Evernode instance with GraphQL API that suits good for DApp and contract testing in 90% cases."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.everos.dev/evernode-platform/products/simple-emulator-se"},"https://docs.everos.dev/evernode-platform/products/simple-emulator-se")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Get quick help in our telegram channel:")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://t.me/ever_sdk"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/chat-on%20telegram-9cf.svg",alt:"Channel on Telegram"}))))}v.isMDXComponent=!0}}]);