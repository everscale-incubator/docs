"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1243],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9916:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],l={title:"Working with Value",description:"Carefully working with value when creating messages",sidebar_position:6},s="Carefully working with `value` when creating messages",c={unversionedId:"develop/smart-contracts/carefully-working-with-value",id:"develop/smart-contracts/carefully-working-with-value",title:"Working with Value",description:"Carefully working with value when creating messages",source:"@site/../../src/develop/smart-contracts/20-carefully-working-with-value.md",sourceDirName:"develop/smart-contracts",slug:"/develop/smart-contracts/carefully-working-with-value",permalink:"/docs/PR-296/develop/smart-contracts/carefully-working-with-value",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/smart-contracts/20-carefully-working-with-value.md",tags:[],version:"current",lastUpdatedAt:1666367166,formattedLastUpdatedAt:"Oct 21, 2022",sidebarPosition:6,frontMatter:{title:"Working with Value",description:"Carefully working with value when creating messages",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Transaction execution",permalink:"/docs/PR-296/develop/smart-contracts/phases-of-transaction-execution"},next:{title:"Gas limits",permalink:"/docs/PR-296/develop/smart-contracts/gas-and-messages-limits"}},u={},d=[],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"carefully-working-with-value-when-creating-messages"},"Carefully working with ",(0,o.kt)("inlineCode",{parentName:"h1"},"value")," when creating messages"),(0,o.kt)("p",null,"In general, whenever you create outgoing messages while processing incoming internal messages, you must be very careful with the value that you attach to messages."),(0,o.kt)("p",null,"The subtlety here is that if you create outgoing messages while processing an incoming message, then value can be deducted from your contract account, even if there is not enough money to pay for this value in the incoming message and you did not call ",(0,o.kt)("inlineCode",{parentName:"p"},"tvm.accept()"),"."),(0,o.kt)("p",null,"Here is an example of a function that can spend money from a contract account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function deployWallet(\n    uint256 _wallet_public_key,\n    uint128 _deploy_evers\n) external {\n    TvmCell stateInit = tvm.buildStateInit({\n        contr: TokenWalletContract,\n        varInit: {\n            root_address: address(this),\n            wallet_code: wallet_code\n        },\n        pubkey: _wallet_public_key,\n        code: wallet_code\n    });\n\n    new TokenWalletContract{\n        stateInit: stateInit,\n        value: _deploy_evers,\n        wid: address(this).wid,\n        flag: 0\n    }();\n}\n")),(0,o.kt)("p",null,"Everything seems to look good; the function should deploy the wallet and send the specified amount of EVER there. But due to the separation of phases (read above about phases), the creation of the message is paid from the money in the incoming message, and the message is put into the register of outgoing messages, where it will wait for the action phase. And in the action phase, it is created, and value is deducted from the contract account instead of the message account. And if we attach 1 ever to the message and request to deploy the wallet with 3 ever, then the remaining 2 ever will be deducted from the contract account."),(0,o.kt)("p",null,"Working with flags and value can be very tricky and you need to play around with them to understand the logic of ",(0,o.kt)("inlineCode",{parentName:"p"},"TVM"),"."),(0,o.kt)("p",null,"Here is another example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function deployWallet(\n    uint256 _wallet_public_key,\n    uint128 _deploy_evers\n) external {\n    require(msg.value - 0.1 ever > _deploy_evers);\n\n    TvmCell stateInit = tvm.buildStateInit({\n        contr: TokenWalletContract,\n        varInit: {\n            root_address: address(this),\n            wallet_code: wallet_code\n        },\n        pubkey: _wallet_public_key,\n        code: wallet_code\n    });\n\n    new TokenWalletContract{\n        stateInit: stateInit,\n        value: _deploy_evers,\n        wid: address(this).wid,\n        flag: 0\n    }();\n\n    msg.sender.transfer({ value: 0, bounce: false, flag: 64 });\n}\n")),(0,o.kt)("p",null,"Here we have the example as above, but now we\u2019ve checked that the ",(0,o.kt)("inlineCode",{parentName:"p"},"msg.value")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"0.1 ever")," greater than the ",(0,o.kt)("inlineCode",{parentName:"p"},"_deploy_evers"),", and we want to return the change back to the sender."),(0,o.kt)("p",null,"But this is also incorrect. For example, we send ",(0,o.kt)("inlineCode",{parentName:"p"},"1 ever")," with the message and request to deploy the wallet with ",(0,o.kt)("inlineCode",{parentName:"p"},"0.5 ever"),"."),(0,o.kt)("p",null,"During the computation phase, ",(0,o.kt)("inlineCode",{parentName:"p"},"TVM")," will queue the wallet creation request with ",(0,o.kt)("inlineCode",{parentName:"p"},"0.5 ever"),", and then the reverse transfer creation intention, with the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"1 ever - gas")," (let\u2019s say the price of gas is ",(0,o.kt)("inlineCode",{parentName:"p"},"0.01 ever"),"), i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"0.99 ever"),"."),(0,o.kt)("p",null,"As a result, we will have two outgoing messages with ",(0,o.kt)("inlineCode",{parentName:"p"},"0.5")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"0.99 ever"),", and only ",(0,o.kt)("inlineCode",{parentName:"p"},"1 ever")," in the incoming message."),(0,o.kt)("p",null,"The correct way to write this function is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"function deployWallet(\n    uint256 _wallet_public_key,\n    uint128 _deploy_evers\n) external {\n    tvm.rawReserve(address(this).balance - msg.value, 2);\n\n    TvmCell stateInit = tvm.buildStateInit({\n        contr: TokenWalletContract,\n        varInit: {\n            root_address: address(this),\n            wallet_code: wallet_code\n        },\n        pubkey: _wallet_public_key,\n        code: wallet_code\n    });\n\n    new TokenWalletContract{\n        stateInit: stateInit,\n        value: _deploy_evers,\n        wid: address(this).wid,\n        flag: 0\n    }();\n\n    msg.sender.transfer({ value: 0, bounce: false, flag: 128 });\n}\n")),(0,o.kt)("p",null,"What we actually have to do first it to call ",(0,o.kt)("inlineCode",{parentName:"p"},"tvm.rawReserve"),", which is like sending a message to yourself, with a ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," equal to the initial balance of the contract."),(0,o.kt)("p",null,"Then we deploy the wallet with ",(0,o.kt)("inlineCode",{parentName:"p"},"_deploy_evers"),", and at the end, all the money that is left on the balance after the first two messages is sent back to the caller."),(0,o.kt)("p",null,"This function is guaranteed not to spend the money on the contract. If, in the action phase it does not have enough money to send a message, it will simply be aborted."),(0,o.kt)("p",null,"The most important thing from the chapter above, when processing internal messages, is this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you apply a ",(0,o.kt)("inlineCode",{parentName:"li"},"value")," that is not ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," to a message, always call ",(0,o.kt)("inlineCode",{parentName:"li"},"tvm.rawReserve")," first."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Flag 64")," can only be used if your transaction is only sending one outgoing message.")))}m.isMDXComponent=!0}}]);