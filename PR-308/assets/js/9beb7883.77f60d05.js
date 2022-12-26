"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[8350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(n),p=r,f=h["".concat(c,".").concat(p)]||h[p]||u[p]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="End-to-end Decentralization",s={unversionedId:"learn/decentralization/end-to-end-decentralization",id:"learn/decentralization/end-to-end-decentralization",title:"End-to-end Decentralization",description:"Ever OS is built around the concept of end-to-end Decentralization or E2ED for short.",source:"@site/../../src/learn/decentralization/end-to-end-decentralization.md",sourceDirName:"learn/decentralization",slug:"/learn/decentralization/end-to-end-decentralization",permalink:"/docs/PR-308/learn/decentralization/end-to-end-decentralization",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/learn/decentralization/end-to-end-decentralization.md",tags:[],version:"current",lastUpdatedAt:1649881204,formattedLastUpdatedAt:"Apr 13, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Decentralization",permalink:"/docs/PR-308/learn/decentralization"},next:{title:"DePool Specifications",permalink:"/docs/PR-308/learn/decentralization/depool-specifications"}},c={},l=[{value:"Background",id:"background",level:2},{value:"Web3",id:"web3",level:2},{value:"IPFS",id:"ipfs",level:2},{value:"User interaction (DeBot)",id:"user-interaction-debot",level:2},{value:"References",id:"references",level:2}],d={toc:l};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"end-to-end-decentralization"},"End-to-end Decentralization"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ever OS is built around the concept of end-to-end Decentralization or E2ED for short.")),(0,r.kt)("p",null,"Blockchain is a verifiable computation network. Results of execution of smart contracts, or programs that blockchain processes, are verifiable by many blockchain nodes, thus ensuring blockchain decentralization. Yet this may not be enough to ensure end-to-end decentralization. If, on the way to deliver the results of smart contract execution some centralized services are present, the integrity of the interaction with smart contracts execution results might be compromised. If the end user is not able to verify the correctness of its interaction with smart contract execution through whatever channel of interaction with blockchain is chosen, then the decentralization properties of a blockchain will be greatly diminished."),(0,r.kt)("p",null,"Here we introduce a system and method for end-to-end Decentralization of a blockchain."),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"Decentralization is an important property of public blockchain technology ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,r.kt)("p",null,"Despite its claims of decentralization, blockchain keeps on fighting to achieve it through improvements and optimizations mainly related to consensus mechanisms and data exchange protocols. Proof-of-Work and Proof-of-Stake consensus protocols (and their derivatives) have issues related to centralization at both mining/staking and at the front-end levels. Considerable amounts of centralization exist in development ecosystems of some blockchains as well."),(0,r.kt)("p",null,"Decentralization claims can only be made when the whole system is decentralized, and therefore, should be judged by its weakest (or rather most centralized) link."),(0,r.kt)("p",null,"In the current invention we present an end-to-end Decentralization framework (E2ED)."),(0,r.kt)("p",null,"In today's blockchains that support smart contracts (or in other words the ability to perform and validate arbitrary computations), user interaction with results of such computations is performed using some front end library (such as Web3 in Ethereum blockchain). The Web3 library takes care of performing blockchain related tasks with blockchain data presented to a user. The IPFS is used to store data in a decentralized manner. Yet as shown below neither is enough to preserve full decentralization of end user interactions with a blockchain system to ensure censorship resistance and security."),(0,r.kt)("h2",{id:"web3"},"Web3"),(0,r.kt)("p",null,"Web3.0 js is a collection of libraries which allow you to interact with a local or remote Ethereum node, using a HTTP or IPC connection",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"."),(0,r.kt)("p",null,"Web3.0 is a collection of JavaScript libraries that allow users to interact with a local or remote Ethereum node using an HTTP or IPC connection. In other words, it\u2019s a kind of SDK which gives users the ability to work with blockchain in the browser. That\u2019s why it actually has a Web in the name and not something else."),(0,r.kt)("p",null,"Web3.0 is numbered 3.0 quite obviously because 2.0 and 1.0 versions of Web already exist, referring to the World Wide Web's evolution where the 2.0 version unlike the 1.0 version, for instance, allows for display of user-generated content, dynamically making websites more sophisticated."),(0,r.kt)("p",null,"Web 3.0 on the other hand is seen as part of the World Wide Web\u2019s evolution due to the fact that it can be considered as a first attempt to access decentralized (blockchain) applications on the web."),(0,r.kt)("p",null,"The purpose of Web3 is to give the ability to create decentralized apps on the web connecting sites to the world of blockchain, in particular Ethereum blockchain."),(0,r.kt)("p",null,"The main problem with this approach is that a user does not really interact with the blockchain when using Web3 based applications, because most of the time the user interacts with many elements of information outside of the blockchain, presented to them by the application user interface."),(0,r.kt)("p",null,"This presents quite a significant problem as all such information and user interface elements are not decentralized, which means they are not immutable, not censorship resistant, and not fault tolerant."),(0,r.kt)("p",null,"Moreover, blockchain related elements that are supposedly temper proofed lose their properties once they are part of this centralized model."),(0,r.kt)("h2",{id:"ipfs"},"IPFS"),(0,r.kt)("p",null,"Enters IPFS. The InterPlanetary File System (IPFS) is a protocol and peer-to-peer network for storing and sharing data in a distributed file system. IPFS uses content-addressing to uniquely identify each file in a global namespace connecting all computing devices",(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"."),(0,r.kt)("p",null,"An IPFS developer or user can store the content somewhere that\u2019s always online and accessible and make sure that when the user comes online they know where to find the content."),(0,r.kt)("p",null,"This way we theoretically could use IPFS to store all user interfaces somewhere, save a hash and an address of said content on the blockchain and therefore prove to the user that whatever is displayed in their browser is true and correct by way of verifying it using Web3 library."),(0,r.kt)("p",null,"Yet even an IPFS and Web3 combination does not guarantee end-to-end decentralization as described below in more detail."),(0,r.kt)("h2",{id:"user-interaction-debot"},"User interaction (DeBot)"),(0,r.kt)("p",null,"A system is needed to create a comprehensive user experience without relying on trusted infrastructure. To achieve this, we introduced technology for writing the user interface inside the smart contract itself. ",(0,r.kt)("strong",{parentName:"p"},"Decentralized Bot (DeBot)")," is a technology enabling end-to-end Decentralization at a user interaction level. Using E2ED, any front-end application (be it in a web browser or a purposely built software) can draw an entire user experience without relying on a server."),(0,r.kt)("p",null,"Comparing Web 2.0, Web 3.0 and E2ED based systems (which for the purpose of the diagram below we named Web3.11 as a reminiscent to the famous Windows 3.11), E2ED is not a contradiction to Web3.0 but rather a continuation that closes some centralization loopholes to achieve end-to-end decentralization."),(0,r.kt)("p",null,"Web3.0 itself is not a monolithic system. It has many components such as an IPFS database for storage and others for address discovery and storage query on top. The Web3.0 approach is fragmented. A smart contract is executed in one place and the data it manipulates is stored in another. The data meets the business logic only on an end user device, therefore, the computation performed on such data can not be verified by a blockchain. For that reason we have verifiable business logic (smart contract) operating with the data it can not verify. The only limited verification available is the hash of data stored somewhere else. The interaction with said data is static. If a man-in-the-middle attack is performed on the user device level, the security of Web3 can be compromised."),(0,r.kt)("p",null,"In practice today what happens in almost 100% of cases is shown in the middle column of the diagram below. A user interface is provided by a web server. An application is running on the server and displayed in the user browser (or on a mobile device). The user performs many usual operations with the website content on the server and only when needed to interact with the blockchain does the Web3.0.js get called, which then interacts with the blockchain calling it from the end user device and signed with the user private key."),(0,r.kt)("p",null,"Even if Web3.0 is really advanced and stores the application data (say a website), in the IPFS database the Web3.0.js will be called to perform operations with a blockchain and again not the library nor the smart contract it interacts with, and will not be able to verify what has actually happened to the data that was stored and received from the IPFS on the user device."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Comparing Web 2.0, Web 3.0 and E2ED based systems",src:n(7369).Z,width:"1001",height:"733"})),(0,r.kt)("p",null,"In E2ED the smart contract contains the actual user interface in a form of DeBot. The DeBot system described herein is just one way of performing user interface functions by a smart contract. The whole graphical user interface could be drawn if needed."),(0,r.kt)("p",null,"In DeBot the sequence of user actions is performed by calling DeBot smart contract functions using the local virtual machine of any particular blockchain. The result of those actions could at any time be transmitted to the remote smart contract together with the sequence of user performed actions and the whole interface interaction could be verified remotely by the blockchain, including the resulting transaction."),(0,r.kt)("p",null,"In terms of addressing the user, it just needs to know the address of a smart contract DeBot, which is a blockchain address that in turn can be abstracted further using a blockchain based DNS service."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/@VitalikButerin/the-meaning-of-decentralization-a0c92b76a274"},"The Meaning of Decentralization"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},(0,r.kt)("a",{parentName:"li",href:"https://web3js.readthedocs.io/"},"web3.js - Ethereum JavaScript API"),(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/InterPlanetary_File_System"},"InterPlanetary File System"),(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},7369:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/comparing-web-systems-ee4629c98afa64786ebd729522e06108.png"}}]);