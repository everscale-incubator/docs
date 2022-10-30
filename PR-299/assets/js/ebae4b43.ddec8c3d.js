"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[7529],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5026:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],s={title:"Upgrade contracts",description:"How to upgrade contracts",sidebar_position:9},l="How to upgrade contracts",c={unversionedId:"develop/smart-contracts/how-to-upgrade-contracts",id:"develop/smart-contracts/how-to-upgrade-contracts",title:"Upgrade contracts",description:"How to upgrade contracts",source:"@site/../../src/develop/smart-contracts/35-how-to-upgrade-contracts.md",sourceDirName:"develop/smart-contracts",slug:"/develop/smart-contracts/how-to-upgrade-contracts",permalink:"/docs/PR-299/develop/smart-contracts/how-to-upgrade-contracts",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/smart-contracts/35-how-to-upgrade-contracts.md",tags:[],version:"current",lastUpdatedAt:1666367166,formattedLastUpdatedAt:"Oct 21, 2022",sidebarPosition:9,frontMatter:{title:"Upgrade contracts",description:"How to upgrade contracts",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Replay attacks",permalink:"/docs/PR-299/develop/smart-contracts/replay-attacks-protection"},next:{title:"Distributed programming",permalink:"/docs/PR-299/develop/smart-contracts/distributed-programming"}},d={},p=[],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-upgrade-contracts"},"How to upgrade contracts"),(0,r.kt)("p",null,"There are two complications with upgrading contracts."),(0,r.kt)("p",null,"The first complication with upgrading:"),(0,r.kt)("p",null,"We have ",(0,r.kt)("inlineCode",{parentName:"p"},"tvm.setCode()")," and we can change the contract code at any time. But the problem is in contract storage. We have all the variables in one ",(0,r.kt)("inlineCode",{parentName:"p"},"BoC"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Solidity")," simply uses the mapping to these cells, which is created at compiling time. If your state variables do not change, then you can simply do ",(0,r.kt)("inlineCode",{parentName:"p"},"tvm.setCode()")," and complete the transaction as in this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/12_BadContract.sol"},"example"),"."),(0,r.kt)("p",null,"But we want to be able to change the storage structure."),(0,r.kt)("p",null,"Let\u2019s say that prior to the upgrade we had the following state variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"TvmCell proxyCode;\nmapping (address => uint128) balances;\nuint32 version;\naddress root;\nuint256[] lastHashes;\n")),(0,r.kt)("p",null,"The Solidity compiler somehow distributes them into cells (you can see how storage is arranged in the chapter on ",(0,r.kt)("inlineCode",{parentName:"p"},"BoC"),"). For example, like this (this is just an example, in reality it is more complicated)."),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/png/LSuz3i8m343XtQVmxAa2YO4kbRfm3RSn9CB4LHmQk3q_0YJM9ttI6xnogMroy7FA2nU-e4SErb8-uP7L1Nnc5Tnr7ROKQWGW91f5bGYBMGMY_JU0iX_OetZ_ojUKwtQ3gnHFbe53AEB-LlqVcrWvpn_rgqknstsq83t083ayFny0",alt:null}),(0,r.kt)("p",null,"And after tvm.setCode we will have more variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"TvmCell proxyCode;\nmapping (address => uint128) balances;\nmapping (address => uint128) approvedAddresses;\nuint32 version;\naddress root;\nuint256[] lastHashes;\n")),(0,r.kt)("p",null,"And the compiler will map them to contract storage in a different way, for example, like this:"),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/png/LSyn3i8m343HtQVmdAc0n42NeYvSmwqDYGX958SMRazB0PNrsT-IeT52kOoTWbvTI9JfXcg9u-Z21S_aLK1xyeBxgiBHSR401erfnNjZCCTOm9Z35y2JdaYjQ3tptOMos-8WMLqCGCnPLDzL_PTrv2dqd-gdBAbOtCouKaefnq4OZikvfLejJEF7iuqiDJGIUFhk1G00",alt:null}),(0,r.kt)("p",null,"Solidity expects a different mapping of state variables to storage, but we have the old storage mapping. Unfortunately, there is currently no way to automatically migrate from the old representation to the new one. After changing the code, you need to do tvm.resetStorage() and manually migrate the old data to the new storage. Below I will describe an example of how to do this in practice."),(0,r.kt)("p",null,"We have contract A version 1 and we want to be able to upgrade it to version 2 in the future."),(0,r.kt)("p",null,"In the version 1 contract, we implement the codeUpgrade function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function codeUpgrade(TvmCell _code, uint32 _newVersion) override public onlyRoot {\n    // If a new version\n    if (version != _newVersion) {\n        TvmBuilder data;\n    \n        // We pack old the data from the old version into TvmCell\n        data.store(_newVersion);\n    \n        TvmBuilder prevStateData;\n        prevStateData.store(proxyCode);\n        prevStateData.store(balances);\n        prevStateData.store(lastHashes);\n    \n        data.storeRef(stateData);\n    \n        // Import the new code.\n        // For the following transactions\n        tvm.setcode(_code);\n        // Establish the new code with the CURRENT code\n        // Already in the framework of the current code (shock)\n        tvm.setCurrentCode(_code);\n    \n        // Transfer to the onCodeUpgrade function the new code \n        // With all the data we want to keep from the old contract\n        onCodeUpgrade(data.toCell());\n    }\n}\n")),(0,r.kt)("p",null,"In the new version 2 contract, we implement the onCodeUpgrade function (this utility function can only be called after onCodeUpgrade)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function onCodeUpgrade(TvmCell _data) private {\n\n    // We erase contract storage to 0, because we have changed\n    // the storage strcuture. This call will not affect  \n    // _pubkey, _constructorFlag or _replayTs variables.\n    tvm.resetStorage(); \n\n    //We decode TvmCell and rewrite it in the new storage structure\n    TvmSlice s = _data.toSlice();\n    version = s.decode(uint32);\n\n    TvmSlice params = s.loadRefAsSlice();\n    (proxyCode, balances, lastHashes) = params.decodeFunctionParams(prevVersionParams);\n}\n\nfunction prevVersionParams(\n    TvmCell _proxyCode,\n    mapping (address => uint128) _balances,\n  uint256[] _lastHashes\n) public {}\n")),(0,r.kt)("p",null,"By doing that we have essentially upgraded the contract."),(0,r.kt)("p",null,"But then we run into complication number 2:"),(0,r.kt)("p",null,"As you already understand from the chapter on distributed programming, in many use cases in ES it is very important to have a computed contract address. The address is hash(code + static variables), ",(0,r.kt)("inlineCode",{parentName:"p"},"tvm.setCode()")," does not change the contract address, the contract address is calculated at the time of deployment."),(0,r.kt)("p",null,"What should we do if we have a Root contract that first deployed the ",(0,r.kt)("inlineCode",{parentName:"p"},"v1")," contract, and then we told it to deploy the updated contracts, and the old ones were updated? Contract addresses ",(0,r.kt)("inlineCode",{parentName:"p"},"v1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"v2")," will be calculated differently."),(0,r.kt)("p",null,"To do this, we use a Proxy contract. The whole point of this contract is to be the starting point of the address. With it, we untie the contract address from the real code, and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Proxy.sol")," code to calculate the address."),(0,r.kt)("p",null,"In the constructor of this contract, we pass the Real code, and the data of the constructor, and it will immediately upgrade to the new code and call ",(0,r.kt)("inlineCode",{parentName:"p"},"onCodeUpgrade()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ton-solidity >= 0.52.0;\n\ncontract Proxy {\n    address static root; // Root contract\n    TvmCell static initialData;\n\n    modifier onlyRoot {\n        require(msg.sender == root, 100);\n        _;\n    }\n\n    constructor(TvmCell _code, TvmCell _params) public onlyRoot {\n        TvmBuilder builder;\n\n        builder.store(uint32(0));    // Upgraded from version 0\n        builder.store(root);         // Root address. Address depends on this data\n\n        builder.store(initialData);  // Static data. Address depends on this data\n        builder.store(_params);      // Dynamic params. Address does not depend on these params.\n\n        //Set code for next transactions.\n        tvm.setcode(_code);\n        //Set new code right now for current transaction\n        tvm.setCurrentCode(_code);\n\n        // call onCodeUpgrade from new code\n        onCodeUpgrade(builder.toCell());\n    }\n\n    function onCodeUpgrade(TvmCell _data) private {}\n}\n")),(0,r.kt)("p",null,"We always deploy ",(0,r.kt)("inlineCode",{parentName:"p"},"Proxy.sol")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"Root.sol"),", and immediately call for the migration to a new version of the code. And if the code changes, then we will still deploy ",(0,r.kt)("inlineCode",{parentName:"p"},"Proxy.sol")," just with a different version, and the addresses will be considered the same for ",(0,r.kt)("inlineCode",{parentName:"p"},"v1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"v2")," (because they are calculated from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Proxy.sol")," code)"),(0,r.kt)("p",null,"You can find a fully-functional example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mnill/everscale-contract-upgrade-example"},"here"),"."))}m.isMDXComponent=!0}}]);