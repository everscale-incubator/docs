"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[9267],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,v=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(v,o(o({ref:t},p),{},{components:a})):n.createElement(v,o({ref:t},p))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),s=a(7392),i=a(7094),c=a(2466);const p="tabList__CuJ",d="tabItem_LNqP";function u(e){const{lazy:t,block:a,defaultValue:o,values:u,groupId:m,className:v}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=u??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,s.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===o?o:o??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,i.U)(),[w,N]=(0,r.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=m){const e=b[m];null!=e&&e!==w&&k.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,a=x.indexOf(t),n=k[a].value;n!==w&&(T(t),N(n),null!=m&&y(m,String(n)))},C=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]??x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]??x[x.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},v)},k.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:C,onClick:E},o,{className:(0,l.Z)("tabs__item",d,o?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},7360:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),o=a(5162);const s={sidebar_position:2,description:"Get started by creating a new DApp using EverDev"},i="Deploy smart contracts with EverDev",c={unversionedId:"develop/tutorial/everdev-sc",id:"develop/tutorial/everdev-sc",title:"Deploy smart contracts with EverDev",description:"Get started by creating a new DApp using EverDev",source:"@site/../../src/develop/tutorial/everdev-sc.md",sourceDirName:"develop/tutorial",slug:"/develop/tutorial/everdev-sc",permalink:"/docs/PR-308/develop/tutorial/everdev-sc",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tutorial/everdev-sc.md",tags:[],version:"current",lastUpdatedAt:1670335891,formattedLastUpdatedAt:"Dec 6, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Get started by creating a new DApp using EverDev"},sidebar:"tutorialSidebar",previous:{title:"Deploy smart contracts with Locklift",permalink:"/docs/PR-308/develop/tutorial/locklift-sc"},next:{title:"EVER SDK Quick Start",permalink:"/docs/PR-308/develop/tutorial/ever-sdk-start"}},p={},d=[{value:"What you can learn",id:"what-you-can-learn",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Generate a new project",id:"generate-a-new-project",level:2},{value:"Configure Giver",id:"configure-giver",level:3},{value:"Generate a new smart-contract",id:"generate-a-new-smart-contract",level:2},{value:"Compile smart-contract",id:"compile-smart-contract",level:2},{value:"Deploy smart-contract",id:"deploy-smart-contract",level:2},{value:"Generate the key pair for deploy contract",id:"generate-the-key-pair-for-deploy-contract",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Address smart-contract",id:"address-smart-contract",level:2},{value:"Interact with smart-contract",id:"interact-with-smart-contract",level:2},{value:"Full docs",id:"full-docs",level:2}],u={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-smart-contracts-with-everdev"},"Deploy smart contracts with EverDev"),(0,r.kt)("p",null,"This guide is designed for developers interested in smart-contracts programming, irrespective of their prior experience in blockchain development.",(0,r.kt)("br",{parentName:"p"}),"\n","Thanks to our well structured step by step guidance, developers will gradually learn all the information needed to start deploying and interacting with smart-contracts. "),(0,r.kt)("p",null,"In the interest of developers, Everscale network puts at their disposal smart-contracts programming using developer-friendly languages: ",(0,r.kt)("strong",{parentName:"p"},"Solidity")," and ",(0,r.kt)("strong",{parentName:"p"},"C++"),"."),(0,r.kt)("p",null,"It should be noted that for developers experienced with Python or other languages such as C, C++, JavaScript, and C#, starting programming smart-contracts will be of maximum ease due to syntax similarity.",(0,r.kt)("br",{parentName:"p"}),"\n","Familiarity with the mentioned programming languages will help developers make sense of differences in smart-contract languages."),(0,r.kt)("p",null,"Before proceeding with the launch of your Dapp, let us first go through an overview explaining what technical information needed for up-to-date smart-contracts programming we prepared for our developers."),(0,r.kt)("h2",{id:"what-you-can-learn"},"What you can learn"),(0,r.kt)("p",null,"Experienced developers with advanced knowledge of Solidity programming language and solid understanding of Ethereum blockchain design, are advised to consult our ",(0,r.kt)("a",{parentName:"p",href:"../../learn/"},"Learn section")," where all necessary technical information is provided in a comprehensive way. "),(0,r.kt)("p",null,"For those with no prior knowledge of smart contracts, as well as for intermediaries and advanced developers who strive to learn new things in the blockchain industry, we recommend you to consult our ",(0,r.kt)("a",{parentName:"p",href:"/docs/PR-308/develop/debots/getting-started"},"DeBots page"),".",(0,r.kt)("br",{parentName:"p"}),"\n","DeBots, in essence, is an intuitive, no prior knowledge required interface for smart contracts on the Everscale blockchain."),(0,r.kt)("p",null,"Having studied the information provided above, now, let's start our DApp launch."),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org"},"Node.js >= 14.x installed"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"Node Version Manager (NVM)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/coreybutler/nvm-windows"},"NVM-windows")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/#download-and-install"},"Docker >= 19.x installed and running"))),(0,r.kt)("h2",{id:"generate-a-new-project"},"Generate a new project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir my-project && cd $_\nnpm init --force\nnpm install --save everdev\n")),(0,r.kt)("h3",{id:"configure-giver"},"Configure Giver"),(0,r.kt)("p",null,"Giver wallet that will sponsor ",(0,r.kt)("strong",{parentName:"p"},"EVER")," for deploy operation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Configure shared private key:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev signer add giver 172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3\n")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"local",label:"local",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Set Local Blockchain ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/tonos-se"},"SE (Startup Edition)")," as the default network:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Startup ",(0,r.kt)("inlineCode",{parentName:"strong"},"SE")," at this step, you may have to wait until the docker image is downloaded:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev se start\n")),(0,r.kt)("p",null,"A local network explorer is available at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost"},"localhost")," check it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Setup giver:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"address=0:b5e9240fc2d2f1ff8cbb1d1dee7fb7cae155e5f6320e585fcc685698994a19a5\nnpx everdev network giver se $address --signer giver\n"))),(0,r.kt)(o.Z,{value:"devnet",label:"devnet",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Setup endpoint:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev network add devnet https://devnet-sandbox.evercloud.dev\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Setup giver:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"address=0:b5e9240fc2d2f1ff8cbb1d1dee7fb7cae155e5f6320e585fcc685698994a19a5\nnpx everdev network giver devnet $address --signer giver\n")))),(0,r.kt)("h2",{id:"generate-a-new-smart-contract"},"Generate a new smart-contract"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev sol create App\n")),(0,r.kt)("p",null,"You got ",(0,r.kt)("inlineCode",{parentName:"p"},"App.sol"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ton-solidity >= 0.35.0;\npragma AbiHeader expire;\n\n// This is class that describes you smart contract.\ncontract App {\n    // Contract can have an instance variables.\n    // In this example instance variable `timestamp`\n    // is used to store the time of `constructor`\n    // or `touch` function call.\n    uint32 public timestamp;\n\n    // Contract can have a `constructor`. \n    // The function that will be called when contract will be deployed to the blockchain.\n    // In this example constructor adds current time to the instance variable.\n    // All contracts need call `tvm.accept()` for succeeded deploy.\n    constructor() public {\n        // Check that contract's public key is set\n        require(tvm.pubkey() != 0, 101);\n        // Check that message has signature (msg.pubkey() is not zero) and\n        // message is signed with the owner's private key\n        require(msg.pubkey() == tvm.pubkey(), 102);\n        // The current smart contract agrees to buy some gas to finish the\n        // current transaction. This actions required to process external\n        // messages, which bring no value (hence no gas) with themselves.\n        tvm.accept();\n\n        timestamp = now;\n    }\n\n    function renderHelloWorld () public pure returns (string) {\n        return 'helloWorld';\n    }\n\n    // Updates variable `timestamp` with current blockchain time.\n    function touch() external {\n        // Each function that accepts external message must check that\n        // message is correctly signed.\n        require(msg.pubkey() == tvm.pubkey(), 102);\n        // Tells to the TVM that we accept this message.\n        tvm.accept();\n        // Update timestamp\n        timestamp = now;\n    }\n\n    function sendValue(address dest, uint128 amount, bool bounce) public view {\n        require(msg.pubkey() == tvm.pubkey(), 102);\n        tvm.accept();\n        // It allows to make a transfer with arbitrary settings\n        dest.transfer(amount, bounce, 0);\n    }\n}\n")),(0,r.kt)("p",null,"For more about ",(0,r.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.10/structure-of-a-contract.html"},"Solidity")," and specific of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md"},"Everscale Solidity")),(0,r.kt)("h2",{id:"compile-smart-contract"},"Compile smart-contract"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev sol compile App.sol\n")),(0,r.kt)("p",null,"You get:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"App.abi.json")," \u2014 ",(0,r.kt)("strong",{parentName:"li"},"ABI")," ",(0,r.kt)("inlineCode",{parentName:"li"},"*.abi.json")," file \u2014 a file that describes the contract interface, the methods and parameters used to interact with it, for detail see ",(0,r.kt)("a",{parentName:"li",href:"https://docs.ton.dev/86757ecb2/p/40ba94-abi-specification-v2"},"ABI Specification V2"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"App.tvc")," \u2014 ",(0,r.kt)("strong",{parentName:"li"},"TVC")," ",(0,r.kt)("inlineCode",{parentName:"li"},"*.tvc")," file \u2014 the compiled smart contract file. Used only when generating contract address and deploying contract code to the blockchain.")),(0,r.kt)("h2",{id:"deploy-smart-contract"},"Deploy smart-contract"),(0,r.kt)("h3",{id:"generate-the-key-pair-for-deploy-contract"},"Generate the key pair for deploy contract"),(0,r.kt)("p",null,"Key pair file \u2014 used to calculate contract's address. In ",(0,r.kt)("inlineCode",{parentName:"p"},"--sign")," parameter the corresponding seed phrase may be used instead of it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev signer generate coder\nnpx everdev signer default coder\n")),(0,r.kt)("h3",{id:"deploy"},"Deploy"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," ",(0,r.kt)("strong",{parentName:"p"},"EVER")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"1000000000")," ",(0,r.kt)("strong",{parentName:"p"},"nano EVER"))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"local",label:"local",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract deploy --network se --value 1000000000 App\n"))),(0,r.kt)(o.Z,{value:"devnet",label:"devnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract deploy --network devnet --value 1000000000 App\n")))),(0,r.kt)("h2",{id:"address-smart-contract"},"Address smart-contract"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Address of smart-contract is calculated from ",(0,r.kt)("inlineCode",{parentName:"strong"},"TVC")," and signer (",(0,r.kt)("inlineCode",{parentName:"strong"},"coder"),") public:")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"local",label:"local",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract info --network se --signer coder App\n"))),(0,r.kt)(o.Z,{value:"devnet",label:"devnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract info --network devnet --signer coder App\n")))),(0,r.kt)("h2",{id:"interact-with-smart-contract"},"Interact with smart-contract"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Read:")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"local",label:"local",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract run-local --network se App renderHelloWorld\nnpx everdev contract run-local --network se App timestamp\n"))),(0,r.kt)(o.Z,{value:"devnet",label:"devnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract run-local --network devnet App renderHelloWorld\nnpx everdev contract run-local --network devnet App timestamp\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Write:")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"local",label:"local",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract run --network se --signer coder App touch\n"))),(0,r.kt)(o.Z,{value:"devnet",label:"devnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract run --network devnet --signer coder App touch\n")))),(0,r.kt)("p",null,"For more details see: ",(0,r.kt)("a",{parentName:"p",href:"/docs/PR-308/develop/tools/overview"},"Get started with Development Tools"),"."),(0,r.kt)("h2",{id:"full-docs"},"Full docs"),(0,r.kt)("p",null,"See extended quick start guide for Everdev at ",(0,r.kt)("a",{parentName:"p",href:"https://docs.everos.dev/everdev/guides/quick-start"},"https://docs.everos.dev/everdev/guides/quick-start")),(0,r.kt)("p",null,"Full EverDev documenation is available at ",(0,r.kt)("a",{parentName:"p",href:"https://docs.everos.dev/everdev/"},"https://docs.everos.dev/everdev/")))}m.isMDXComponent=!0}}]);