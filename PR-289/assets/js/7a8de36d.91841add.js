"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[7248],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1,description:"Get started by creating a new DApp"},s="Deploy smart contracts",c={unversionedId:"develop/tutor/getting-started",id:"develop/tutor/getting-started",title:"Deploy smart contracts",description:"Get started by creating a new DApp",source:"@site/../../src/develop/tutor/getting-started.md",sourceDirName:"develop/tutor",slug:"/develop/tutor/getting-started",permalink:"/docs/PR-289/develop/tutor/getting-started",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tutor/getting-started.md",tags:[],version:"current",lastUpdatedAt:1665926171,formattedLastUpdatedAt:"Oct 16, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Get started by creating a new DApp"},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/docs/PR-289/develop/tutorial"},next:{title:"Javascript SDK",permalink:"/docs/PR-289/develop/ever-sdk-js"}},p={},d=[{value:"What you can learn",id:"what-you-can-learn",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Generate a new project",id:"generate-a-new-project",level:2},{value:"Setup local environment",id:"setup-local-environment",level:2},{value:"Configure Giver",id:"configure-giver",level:3},{value:"Generate the key pair for contract ownership",id:"generate-the-key-pair-for-contract-ownership",level:3},{value:"Generate a new smart-contract",id:"generate-a-new-smart-contract",level:2},{value:"Compile smart-contract",id:"compile-smart-contract",level:2},{value:"Deploy smart-contract",id:"deploy-smart-contract",level:2},{value:"Address smart-contract",id:"address-smart-contract",level:2},{value:"Interact with smart-contract",id:"interact-with-smart-contract",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-smart-contracts"},"Deploy smart contracts"),(0,o.kt)("p",null,"This guide is designed for developers interested in smart-contracts programming, irrespective of their prior experience in blockchain development.",(0,o.kt)("br",{parentName:"p"}),"\n","Thanks to our well structured step by step guidance, developers will gradually learn all the information needed to start deploying and interacting with smart-contracts. "),(0,o.kt)("p",null,"In the interest of developers, Everscale network puts at their disposal smart-contracts programming using developer-friendly languages: ",(0,o.kt)("strong",{parentName:"p"},"Solidity")," and ",(0,o.kt)("strong",{parentName:"p"},"C++"),"."),(0,o.kt)("p",null,"It should be noted that for developers experienced with Python or other languages such as C, C++, JavaScript, and C#, starting programming smart-contracts will be of maximum ease due to syntax similarity.",(0,o.kt)("br",{parentName:"p"}),"\n","Familiarity with the mentioned programming languages will help developers make sense of differences in smart-contract languages."),(0,o.kt)("p",null,"Before proceeding with the launch of your Dapp, let us first go through an overview explaining what technical information needed for up-to-date smart-contracts programming we prepared for our developers."),(0,o.kt)("h2",{id:"what-you-can-learn"},"What you can learn"),(0,o.kt)("p",null,"Experienced developers with advanced knowledge of Solidity programming language and solid understanding of Ethereum blockchain design, are advised to consult our ",(0,o.kt)("a",{parentName:"p",href:"../../concept/"},"Concept section")," where all necessary technical information is provided in a comprehensive way. "),(0,o.kt)("p",null,"For those with no prior knowledge of smart contracts, as well as for intermediaries and advanced developers who strive to learn new things in the blockchain industry, we recommend you to consult our ",(0,o.kt)("a",{parentName:"p",href:"/docs/PR-289/develop/debots/getting-started"},"DeBots page"),".",(0,o.kt)("br",{parentName:"p"}),"\n","DeBots, in essence, is an intuitive, no prior knowledge required interface for smart contracts on the Everscale blockchain."),(0,o.kt)("p",null,"Having studied the information provided above, now, let's start our DApp launch."),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org"},"Node.js >= 14.x installed"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"Node Version Manager (NVM)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/coreybutler/nvm-windows"},"NVM-windows")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/#download-and-install"},"Docker >= 19.x installed and running"))),(0,o.kt)("h2",{id:"generate-a-new-project"},"Generate a new project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir my-project && cd $_\nnpm init --force\nnpm install --save everdev\n")),(0,o.kt)("h2",{id:"setup-local-environment"},"Setup local environment"),(0,o.kt)("p",null,"Set Local Blockchain ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/tonos-se"},"SE (Startup Edition)")," as the default network:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Startup ",(0,o.kt)("inlineCode",{parentName:"strong"},"SE")," at this step, you may have to wait until the docker image is downloaded:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev se start\n")),(0,o.kt)("p",null,"A local network explorer is available at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost"},"localhost")," check it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Setting ",(0,o.kt)("inlineCode",{parentName:"strong"},"SE")," as default network:")," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev network default se\n")),(0,o.kt)("h3",{id:"configure-giver"},"Configure Giver"),(0,o.kt)("p",null,"Configure Giver wallet that will sponsor ",(0,o.kt)("strong",{parentName:"p"},"EVER")," for deploy operation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev signer add giver 172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3\nnpx everdev network giver se 0:b5e9240fc2d2f1ff8cbb1d1dee7fb7cae155e5f6320e585fcc685698994a19a5 --signer giver\nnpx everdev network giver dev 0:b5e9240fc2d2f1ff8cbb1d1dee7fb7cae155e5f6320e585fcc685698994a19a5 --signer giver\n")),(0,o.kt)("h3",{id:"generate-the-key-pair-for-contract-ownership"},"Generate the key pair for contract ownership"),(0,o.kt)("p",null,"Key pair file \u2014 used in contracts with implemented authorization. It is the file containing private and public keys authorized to access the contract. In ",(0,o.kt)("inlineCode",{parentName:"p"},"--sign")," parameter the corresponding seed phrase may be used instead of it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev signer generate coder\nnpx everdev signer default coder\nnpx everdev signer list \n")),(0,o.kt)("h2",{id:"generate-a-new-smart-contract"},"Generate a new smart-contract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev sol create App\n")),(0,o.kt)("p",null,"You got ",(0,o.kt)("inlineCode",{parentName:"p"},"App.sol"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ton-solidity >= 0.35.0;\npragma AbiHeader expire;\n\n// This is class that describes you smart contract.\ncontract App {\n    // Contract can have an instance variables.\n    // In this example instance variable `timestamp`\n    // is used to store the time of `constructor`\n    // or `touch` function call.\n    uint32 public timestamp;\n\n    // Contract can have a `constructor`. \n    // The function that will be called when contract will be deployed to the blockchain.\n    // In this example constructor adds current time to the instance variable.\n    // All contracts need call `tvm.accept()` for succeeded deploy.\n    constructor() public {\n        // Check that contract's public key is set\n        require(tvm.pubkey() != 0, 101);\n        // Check that message has signature (msg.pubkey() is not zero) and\n        // message is signed with the owner's private key\n        require(msg.pubkey() == tvm.pubkey(), 102);\n        // The current smart contract agrees to buy some gas to finish the\n        // current transaction. This actions required to process external\n        // messages, which bring no value (hence no gas) with themselves.\n        tvm.accept();\n\n        timestamp = now;\n    }\n\n    function renderHelloWorld () public pure returns (string) {\n        return 'helloWorld';\n    }\n\n    // Updates variable `timestamp` with current blockchain time.\n    function touch() external {\n        // Each function that accepts external message must check that\n        // message is correctly signed.\n        require(msg.pubkey() == tvm.pubkey(), 102);\n        // Tells to the TVM that we accept this message.\n        tvm.accept();\n        // Update timestamp\n        timestamp = now;\n    }\n\n    function sendValue(address dest, uint128 amount, bool bounce) public view {\n        require(msg.pubkey() == tvm.pubkey(), 102);\n        tvm.accept();\n        // It allows to make a transfer with arbitrary settings\n        dest.transfer(amount, bounce, 0);\n    }\n}\n")),(0,o.kt)("p",null,"For more about ",(0,o.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.10/structure-of-a-contract.html"},"Solidity")," and specific of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md"},"Everscale Solidity")),(0,o.kt)("h2",{id:"compile-smart-contract"},"Compile smart-contract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev sol compile App.sol\n")),(0,o.kt)("p",null,"You are got:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"App.abi.json")," \u2014 ",(0,o.kt)("strong",{parentName:"li"},"ABI")," ",(0,o.kt)("inlineCode",{parentName:"li"},"*.abi.json")," file \u2014 a file that describes the contract interface, the methods and parameters used to interact with it, for detail see ",(0,o.kt)("a",{parentName:"li",href:"https://docs.ton.dev/86757ecb2/p/40ba94-abi-specification-v2"},"ABI Specification V2"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"App.tvc")," \u2014 ",(0,o.kt)("strong",{parentName:"li"},"TVC")," ",(0,o.kt)("inlineCode",{parentName:"li"},"*.tvc")," file \u2014 the compiled smart contract file. Used only when generating contract address and deploying contract code to the blockchain.")),(0,o.kt)("h2",{id:"deploy-smart-contract"},"Deploy smart-contract"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," ",(0,o.kt)("strong",{parentName:"p"},"EVER")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"1000000000")," ",(0,o.kt)("strong",{parentName:"p"},"nano EVER"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Local network:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract deploy --network se --value 1000000000 App\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Developer network:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract deploy --network dev --value 1000000000 App\n")),(0,o.kt)("h2",{id:"address-smart-contract"},"Address smart-contract"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Address of smart-contract is calculated from ",(0,o.kt)("inlineCode",{parentName:"strong"},"TVC")," and signer (",(0,o.kt)("inlineCode",{parentName:"strong"},"coder"),") public:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract info --network se --signer coder App\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Getting only address:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"appAddress=$(npx everdev contract info --network se --signer coder App | grep Address | cut -d ' ' -f 4)\necho $appAddress\n")),(0,o.kt)("h2",{id:"interact-with-smart-contract"},"Interact with smart-contract"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Read:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract run-local --network se App renderHelloWorld\nnpx everdev contract run-local --network se App timestamp\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Write:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract run --network se --signer coder App touch\n")),(0,o.kt)("p",null,"For more details see: ",(0,o.kt)("a",{parentName:"p",href:"/docs/PR-289/develop/tools/overview"},"Get started with Development Tools"),"."))}m.isMDXComponent=!0}}]);