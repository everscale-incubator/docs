"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[3677],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(k,r(r({ref:t},p),{},{components:n})):o.createElement(k,r({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1179:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var o=n(3117),l=n(102),a=(n(7294),n(3905)),r=["components"],i={sidebar_position:0},s="Getting started",c={unversionedId:"develop/smart-contract/solidity-developing/getting-started",id:"develop/smart-contract/solidity-developing/getting-started",title:"Getting started",description:"Referenced repository//docs.ton.dev/86757ecb2/p/950f8a-write-smart-contract-in-solidity",source:"@site/../../src/develop/smart-contract/solidity-developing/getting-started.md",sourceDirName:"develop/smart-contract/solidity-developing",slug:"/develop/smart-contract/solidity-developing/getting-started",permalink:"/docs/develop/smart-contract/solidity-developing/getting-started",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/smart-contract/solidity-developing/getting-started.md",tags:[],version:"current",lastUpdatedAt:1664480702,formattedLastUpdatedAt:"Sep 29, 2022",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Developing with Solidity",permalink:"/docs/develop/solidity-developing"},next:{title:"TON Solidity Compiler",permalink:"/docs/develop/smart-contract/solidity-developing/compiler"}},p={},d=[{value:"You will need:",id:"you-will-need",level:2},{value:"Recommended setup",id:"recommended-setup",level:2},{value:"Install the Compiler",id:"install-the-compiler",level:2},{value:"Compile",id:"compile",level:2},{value:"Compile",id:"compile-1",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Further Steps",id:"further-steps",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,l.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting started"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Referenced repository: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ton.dev/86757ecb2/p/950f8a-write-smart-contract-in-solidity"},"https://docs.ton.dev/86757ecb2/p/950f8a-write-smart-contract-in-solidity"))),(0,a.kt)("h2",{id:"you-will-need"},"You will need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A PC or laptop with a basic set of developer tools"),(0,a.kt)("li",{parentName:"ul"},"(Recommended: Ubuntu 18.04) Linux"),(0,a.kt)("li",{parentName:"ul"},"Windows"),(0,a.kt)("li",{parentName:"ul"},"MacOS"),(0,a.kt)("li",{parentName:"ul"},"A Solidity to TVM assembly compiler"),(0,a.kt)("li",{parentName:"ul"},"(Recommended) build from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TON-Solidity-Compiler"},"sources")),(0,a.kt)("li",{parentName:"ul"},"download as a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TON-Solidity-Compiler/releases/download/0.25/solc0.25.tar.gz"},"binary")),(0,a.kt)("li",{parentName:"ul"},"run in a docker ",(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/tonlabs/compilers"},"container")),(0,a.kt)("li",{parentName:"ul"},"Contract code in Solidity"),(0,a.kt)("li",{parentName:"ul"},"Use Wallet.sol below"),(0,a.kt)("li",{parentName:"ul"},"Use your own code"),(0,a.kt)("li",{parentName:"ul"},"Take one of the samples from the samples ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/samples/tree/master/solidity"},"repository")),(0,a.kt)("li",{parentName:"ul"},"Utilities to link and deploy contract to the blockchain"),(0,a.kt)("li",{parentName:"ul"},"build from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TVM-linker"},"sources")),(0,a.kt)("li",{parentName:"ul"},"download as a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TON-Solidity-Compiler/releases"},"binary")),(0,a.kt)("li",{parentName:"ul"},"run in a docker ",(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/tonlabs/compilers"},"container"))),(0,a.kt)("h2",{id:"recommended-setup"},"Recommended setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OS: Ubuntu 18.04 is the easiest to run."),(0,a.kt)("li",{parentName:"ul"},"tip: running Ubuntu in VM works fine. Check out this ",(0,a.kt)("a",{parentName:"li",href:"https://docs.ton.dev/86757ecb2/v/0/p/69f25e-get-ubuntu-vm/b/744d13"},"install guide.")),(0,a.kt)("li",{parentName:"ul"},"Build Solidity compiler from the source (4-6 minutes)"),(0,a.kt)("li",{parentName:"ul"},"checkout from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TON-Solidity-Compiler/"},"github")," (a few seconds);"),(0,a.kt)("li",{parentName:"ul"},"install dependencies as per ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/README.md"},"README")," (1-2 minutes)"),(0,a.kt)("li",{parentName:"ul"},"build the compiler from source per ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/README.md"},"README")," (~3-5 minutes)"),(0,a.kt)("li",{parentName:"ul"},"Contract source code:"),(0,a.kt)("li",{parentName:"ul"},"Use Wallet.sol below"),(0,a.kt)("li",{parentName:"ul"},"Command line tools, either of:"),(0,a.kt)("li",{parentName:"ul"},"download as a part of a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TON-Solidity-Compiler/releases/download/0.25/tools0.25.tar.gz"},"binary")," package"),(0,a.kt)("li",{parentName:"ul"},"build ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TVM-linker/tree/master/tvm_linker"},"tvm_linker")," and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/tonos-cli"},"tonos-cli")," from sources")),(0,a.kt)("h2",{id:"install-the-compiler"},"Install the Compiler"),(0,a.kt)("p",null,"Install EverX Solidity Compiler from the open source ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler"},"repository"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"git clone git@github.com:tonlabs/TON-Solidity-Compiler.git\n cd compiler \n sh ./scripts/install_deps.sh\n mkdir build\n cd build\n cmake .. -DUSE_CVC4=OFF -DUSE_Z3=OFF -DTESTS=OFF -DCMAKE_BUILD_TYPE=Debug\n make -j8\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Get the contract source code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"pragma solidity >= 0.6.0;\n\n/// @title Simple wallet\n/// @author EverX\ncontract Wallet {\n    // Modifier that allows function to accept external call only if it was signed\n    // with contract owner's public key.\n    modifier checkOwnerAndAccept {\n        // Check that inbound message was signed with owner's public key.\n        // Runtime function that obtains sender's public key.\n        require(msg.pubkey() == tvm.pubkey(), 100);\n\n        // Runtime function that allows contract to process inbound messages spending\n        // its own resources (it's necessary if contract should process all inbound messages,\n        // not only those that carry value with them).\n        tvm.accept();\n        _;\n    }\n\n    /*\n     * Public functions\n     */\n\n    /// @dev Contract constructor.\n    constructor() public checkOwnerAndAccept { }\n\n    /// @dev Allows to transfer grams to the destination account.\n    /// @param dest Transfer target address.\n    /// @param value Nanograms value to transfer.\n    /// @param bounce Flag that enables bounce message in case of target contract error.\n    function sendTransaction(address payable dest, uint128 value, bool bounce) public view checkOwnerAndAccept {\n         // Runtime function that allows to make a transfer with arbitrary settings.\n        dest.transfer(value, bounce, 3);\n    }\n    \n    // Function to receive plain transfers.\n    receive() external payable {\n    }\n}\n")),(0,a.kt)("h2",{id:"compile"},"Compile"),(0,a.kt)("p",null,"Compile the contract code to TVM assembler with the Solidity Compiler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<PATH_TO>/TON-Solidity-Compiler/compiler/build/solc/solc Wallet.sol\n")),(0,a.kt)("p",null,"The compiler produces Wallet.code and Wallet.abi.json to be used in the following steps."),(0,a.kt)("p",null,"Assemble and link with a standard library into TVM bytecode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<PATH_TO>/tvm_linker compile Wallet.code --lib <path-to>/TON-Solidity-Compiler/lib/stdlib_sol.tvm\n")),(0,a.kt)("p",null,"Binary code of your contract is recorded into",(0,a.kt)("inlineCode",{parentName:"p"},"<WalletAddress>.tvc"),"file, where",(0,a.kt)("inlineCode",{parentName:"p"},"<WalletAddress>"),"is a temporary address of the contract."),(0,a.kt)("h2",{id:"compile-1"},"Compile"),(0,a.kt)("p",null,"Compile the contract code to TVM assembler with the Solidity Compiler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<PATH_TO>/TON-Solidity-Compiler/compiler/build/solc/solc Wallet.sol\n")),(0,a.kt)("p",null,"The compiler produces Wallet.code and Wallet.abi.json to be used in the following steps."),(0,a.kt)("p",null,"Assemble and link with a standard library into TVM bytecode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<PATH_TO>/tvm_linker compile Wallet.code --lib <path-to>/TON-Solidity-Compiler/lib/stdlib_sol.tvm\n")),(0,a.kt)("p",null,"Binary code of your contract is recorded into ",(0,a.kt)("inlineCode",{parentName:"p"},"WalletAddress.tvc")," file, where ",(0,a.kt)("inlineCode",{parentName:"p"},"WalletAddress")," is a temporary address of the contract. "),(0,a.kt)("h2",{id:"deploy"},"Deploy"),(0,a.kt)("p",null,"Let's deploy the contract to TON Labs development blockchain at",(0,a.kt)("inlineCode",{parentName:"p"},"net.ton.dev"),"."),(0,a.kt)("p",null,"1) Make sure tonos-cli is in $PATH:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export PATH=$PATH:<PATH_TO>/tonos-cli\n\ntonos-cli config --url net.ton.dev\n")),(0,a.kt)("p",null,"2) Generate address, keys and seed phrase for your contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"tonos-cli genaddr <WalletAddress>.tvc Wallet.abi.json --genkey Wallet.keys.json\n")),(0,a.kt)("p",null,"Address of your contract in the blockchain is located after ",(0,a.kt)("inlineCode",{parentName:"p"},"Raw address:")),(0,a.kt)("p",null,'IMPORTANT: Save this value - you will need it to deploy your contract and to work with it. We will refer to it as "',(0,a.kt)("inlineCode",{parentName:"p"},"YourAddress"),'" below. Seed phrase is also printed to stdout. Key pair will be generated and saved to the file Wallet.keys.json.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that you will need to send some coins to the address before the actual deployment. TON deploy is fee-based, so your new contract will be charged for this.")),(0,a.kt)("p",null,"3) Get some ","[test]"," coins to your account. Options are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ask a friend to sponsor your contract deployment;"),(0,a.kt)("li",{parentName:"ul"},"transfer some currency from your wallet account;"),(0,a.kt)("li",{parentName:"ul"},"ask in developer chats.")),(0,a.kt)("p",null,"4) Check the state of the pre-deployed contract. It should be ",(0,a.kt)("inlineCode",{parentName:"p"},"Uninit"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"tonos-cli account <YourAddress>\n")),(0,a.kt)("p",null,"5) Deploy your contract to the selected network (TON Labs devnet in the example) with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"tonos-cli deploy --abi Wallet.abi.json --sign Wallet.keys.json <contract>.tvc {<constructor_arguments>}\n")),(0,a.kt)("p",null,"If either of ",(0,a.kt)("inlineCode",{parentName:"p"},"--abi"),"\xa0or\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"--sign"),"\xa0options is omitted in parameters, it must be specified in the config file. See below."),(0,a.kt)("p",null,"6) Check the contract state again. This time, it is should be active."),(0,a.kt)("p",null,"7) Call the function of your contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'tonos-cli call \'<YourAddress>\' sendTransaction \'{"dest":"DestAddress", "value":1000000000, "bounce":true}\' --abi Wallet.abi.json --sign Wallet.keys.json\n')),(0,a.kt)("h2",{id:"further-steps"},"Further Steps"),(0,a.kt)("p",null,"Now your contract is up and running! You can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check out ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md"},"Solidity API for Everscale")),(0,a.kt)("li",{parentName:"ul"},"Check out more ",(0,a.kt)("a",{parentName:"li",href:"/docs/develop/smart-contract/solidity-developing/samples"},"contract samples")),(0,a.kt)("li",{parentName:"ul"},"Explore in depth some aspects of smart-contract development for Everscale"),(0,a.kt)("li",{parentName:"ul"},"Build CLI utilities from source in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/tonos-cli"},"GitHub")," to make sure you have the latest version")))}m.isMDXComponent=!0}}]);