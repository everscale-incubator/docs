"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1288],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},428:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},l="EVM \u2192 Everscale transactions of liquid tokens without the credit processor",c={unversionedId:"develop/integrate/build-cross-chain/getting-started/evm-everscale",id:"develop/integrate/build-cross-chain/getting-started/evm-everscale",title:"EVM \u2192 Everscale transactions of liquid tokens without the credit processor",description:"The simplest integration option are EVM \u2192 Everscale transactions of liquid tokens when the user",source:"@site/../../src/develop/integrate/build-cross-chain/getting-started/evm-everscale.md",sourceDirName:"develop/integrate/build-cross-chain/getting-started",slug:"/develop/integrate/build-cross-chain/getting-started/evm-everscale",permalink:"/docs/PR-292/develop/integrate/build-cross-chain/getting-started/evm-everscale",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/integrate/build-cross-chain/getting-started/evm-everscale.md",tags:[],version:"current",lastUpdatedAt:1657883070,formattedLastUpdatedAt:"Jul 15, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Transaction types and their mechanics",permalink:"/docs/PR-292/develop/integrate/build-cross-chain/getting-started/transactions-mechanism"},next:{title:"Everscale \u2192 EVM Transactions",permalink:"/docs/PR-292/develop/integrate/build-cross-chain/getting-started/everscale-evm"}},d={},p=[],h={toc:p};function u(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"evm--everscale-transactions-of-liquid-tokens-without-the-credit-processor"},"EVM \u2192 Everscale transactions of liquid tokens without the credit processor"),(0,i.kt)("p",null,"The simplest integration option are EVM \u2192 Everscale transactions of liquid tokens when the user\nalready has an Everscale wallet with some amount of EVERs on the balance, and, therefore, can\ncomplete the transaction."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The transaction pipeline is as follows:")),(0,i.kt)("p",null,"In order to get tokens in Everscale, they, firstly, have to be transferred to the bridge storage (",(0,i.kt)("inlineCode",{parentName:"p"},"Vault.sol"),")\nin the EVM network."),(0,i.kt)("p",null,"Each token has its own Vault. The list of currently available tokens can be viewed via following ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/broxus/bridge-assets/master/main.json"},"this link"),"."),(0,i.kt)("p",null,"They can also be taken from the network.",(0,i.kt)("br",{parentName:"p"}),"\n","To proceed, select the desired token, and choose the Vault for the desired network (chain id), then choose ",(0,i.kt)("inlineCode",{parentName:"p"},"depositType")," - default."),(0,i.kt)("p",null,"It is downloaded from ",(0,i.kt)("inlineCode",{parentName:"p"},"Vault.sol availableDepositLimit"),".",(0,i.kt)("br",{parentName:"p"}),"\n","That's how many tokens the Vault can accept (the limits were described above).",(0,i.kt)("br",{parentName:"p"}),"\n","Also, it should be checked that ",(0,i.kt)("inlineCode",{parentName:"p"},"depositFee = 0")," and the Vault is not turned off."),(0,i.kt)("p",null,"Next, it's needed to call ",(0,i.kt)("inlineCode",{parentName:"p"},"Vault.deposit(int128 recieverWorkchainId, uint256 recieverAddress, uint256 amount)"),"."),(0,i.kt)("p",null,"Thanks to the previously installed ",(0,i.kt)("inlineCode",{parentName:"p"},"Approve"),", it will transfer the required amount from the user's account to its own, and create the Event ",(0,i.kt)("inlineCode",{parentName:"p"},"emit Deposit(amount, recieverWorkchainId, recieverAddress);")),(0,i.kt)("p",null,"The address should be taken from the ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/broxus/bridge-assets/master/main%20.json"},"following file"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ethereumConfiguration"),". This is the address of the sample contact. ",(0,i.kt)("inlineCode",{parentName:"p"},"EthereumEventConfiguration.sol"),", with which we will continue to work."),(0,i.kt)("p",null,"It is needed to wait for N confirmations in EVM (how long to wait can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"EthereumEventConfiguration.sol")," ",(0,i.kt)("inlineCode",{parentName:"p"},"_networkConfiguratin.eventBlocksToConfirm"),"), Afterwards, it is needed to create an Event of this transfer in Everscale."),(0,i.kt)("p",null,"The Event is the sample of ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenTransferEthereumEvent.sol"),", which is created using the contract ",(0,i.kt)("inlineCode",{parentName:"p"},"EthereumEventConfiguration.sol"),(0,i.kt)("br",{parentName:"p"}),"\n","It is the contract that deploys Events and contains the Event settings. It is different for each Vault.",(0,i.kt)("br",{parentName:"p"}),"\n","The required address is taken from the ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/broxus/bridge-assets/master/main.json"},"following file"),"."),(0,i.kt)("p",null,"It can also be taken from the network."),(0,i.kt)("p",null,"For the contract ",(0,i.kt)("inlineCode",{parentName:"p"},"EthereumEventConfiguration.sol")," we call ",(0,i.kt)("inlineCode",{parentName:"p"},"deployEvent(EthereumEventVoteData eventVoteData) method"),". "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"EthereumEventVoteData")," - the structure which describes the emit Deposit event that is received when\nreplenishing the Vault."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"struct EthereumEventVoteData {\n        uint eventTransaction; \n        uint32 eventIndex;  \n        TvmCell eventData; \n        uint32 eventBlockNumber;\n        uint eventBlock; \n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"deployEvent")," will create a contract ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenTransferEthereumEvent.sol"),", which in turn will start loading into the constructor, calling the Staking contract. It will approach the current Round.\nThe work of relayers is divided into rounds. With each new round, relayers can be added or subtracted, and then referring to the current Round, it will load the public keys of the relayers.",(0,i.kt)("br",{parentName:"p"}),"\n","The relayers will check that the deposit was really made. Then, they will sign it.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"TokenTransferEthereumEvent.sol")),(0,i.kt)("p",null,"The relayers sign the translation with external messages. That is, they do not pay for adding their signatures, the contract pays for everything. Thus, there are no extra transaction costs for the relayers."),(0,i.kt)("p",null,"At the same time, due to the uniquely generated address, it is impossible to create a second copy of the\ncontract for the same transaction. That's an Everscale feature."),(0,i.kt)("p",null,"When there are 2/3 + 1 signatures, the Event will call ",(0,i.kt)("inlineCode",{parentName:"p"},"onEventConfirmed"),", firstly in ",(0,i.kt)("inlineCode",{parentName:"p"},"EthereumEventConfiguration")," that is in ",(0,i.kt)("inlineCode",{parentName:"p"},"ProxyTokenTransfer"),", which will actually issue the necessary tokens."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What you need to pay attention to:")),(0,i.kt)("p",null,"When initiating transactions, the user's wallet address is specified (",(0,i.kt)("inlineCode",{parentName:"p"},"SetCodeMultisig"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BridgeMultisig"),", etc.), and not the TIP 3 wallet address. The TIP 3 wallet address will be generated automatically, and the remaining EVERs will be transferred to the address that trigerred the ",(0,i.kt)("inlineCode",{parentName:"p"},"deployEvent")," (This may not be the address to which the tokens are to be transferred)."),(0,i.kt)("p",null,"Do not forget that decimals are different for different tokens, and one token may have different prices on different networks. "),(0,i.kt)("p",null,"This is important when showing how many converted tokens the user will receive. It is also necessary to check the input after the point, we have min(",(0,i.kt)("inlineCode",{parentName:"p"},"tip3_decimals, evm_decimals"),")."),(0,i.kt)("p",null,"The number of tokens that can be deposited on the Vault is not equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"Limit - Balance"),", because some tokens may still be blocked in Strategies. The View method is to be used ",(0,i.kt)("inlineCode",{parentName:"p"},"availableDepositLimit"),"."),(0,i.kt)("p",null,"After the user called the ",(0,i.kt)("inlineCode",{parentName:"p"},"Valut.deposit()")," method, it is advisable to remember the TX hash so that if the user refreshes the page, to be able to return to the incomplete transaction."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"deployEvent")," it is necessary to transfer more EVERs than the amount set in ",(0,i.kt)("inlineCode",{parentName:"p"},"BasicConfiguration basicConfiguration")," of the contract."),(0,i.kt)("p",null,"Event sends callbacks about the status change to the contract that should receive tokens, see ",(0,i.kt)("inlineCode",{parentName:"p"},"notifyEventStatusChanged"),"."),(0,i.kt)("p",null,"There are 4 transaction statuses: ",(0,i.kt)("inlineCode",{parentName:"p"},"Initializing, Pending, Confirmed, Rejected"),"."),(0,i.kt)("p",null,"These statuses can also be viewed from the frontend to show users the progress of transactions. "),(0,i.kt)("p",null,"Currently, there are no fees for deposits and withdrawals. However, they could be introduced in the near future. Anyway, the fees will not be greater than the set maximum."),(0,i.kt)("p",null,"Please see the schematic image of how this type of transfer works at the contract level. The user only needs to perform actions 1 and 2, and then monitor the status of ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenTransferEthereumEvent.sol")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4954).Z,width:"1276",height:"1152"})),(0,i.kt)("p",null,"Please follow ",(0,i.kt)("a",{parentName:"p",href:"/docs/PR-292/develop/integrate/build-cross-chain/getting-started/everscale-evm"},"this page")," in order to go through the details of Everscale \u2013\nEVM transactions."))}u.isMDXComponent=!0},4954:function(e,t,n){t.Z=n.p+"assets/images/evm-everscale-9537fd452a27181452ef33cf8e98970a.png"}}]);