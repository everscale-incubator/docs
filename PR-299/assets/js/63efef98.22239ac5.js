"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[6093],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},891:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:4},l="EVM \u2192 Everscale Transactions Using The Credit Processor Contract",c={unversionedId:"develop/integrate/build-cross-chain/getting-started/credit-processor",id:"develop/integrate/build-cross-chain/getting-started/credit-processor",title:"EVM \u2192 Everscale Transactions Using The Credit Processor Contract",description:"Credit Process is a special smart contract that exchanges part of the tokens for EVERs to pay for gas, and automatically completes transactions on the Everscale network. It is quite complex, and in order to use it in complex cases, it is advisable to independently study it. This tutorial does not cover all possible cases.",source:"@site/../../src/develop/integrate/build-cross-chain/getting-started/credit-processor.md",sourceDirName:"develop/integrate/build-cross-chain/getting-started",slug:"/develop/integrate/build-cross-chain/getting-started/credit-processor",permalink:"/docs/PR-299/develop/integrate/build-cross-chain/getting-started/credit-processor",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/integrate/build-cross-chain/getting-started/credit-processor.md",tags:[],version:"current",lastUpdatedAt:1663727551,formattedLastUpdatedAt:"Sep 21, 2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Everscale \u2192 EVM Transactions",permalink:"/docs/PR-299/develop/integrate/build-cross-chain/getting-started/everscale-evm"},next:{title:"Contracts",permalink:"/docs/PR-299/develop/integrate/build-cross-chain/getting-started/contracts"}},d={},p=[],u={toc:p};function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"evm--everscale-transactions-using-the-credit-processor-contract"},"EVM \u2192 Everscale Transactions Using The Credit Processor Contract"),(0,r.kt)("p",null,"Credit Process is a special smart contract that exchanges part of the tokens for EVERs to pay for gas, and automatically completes transactions on the Everscale network. It is quite complex, and in order to use it in complex cases, it is advisable to independently study it. This tutorial does not cover all possible cases. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The transaction pipeline is as follows:")),(0,r.kt)("p",null,"Before proceeding, please be informed that this guide will examine transactions of liquid tokens with the exception of WEVER. For WEVER, the swap will be skipped and there will simply be the uwrap.       "),(0,r.kt)("p",null,"The beginning is the same as for a regular transaction. Values for ",(0,r.kt)("inlineCode",{parentName:"p"},"deposit type = credit")," are taken ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/broxus/bridge-assets/master/main.json"},"from the list"),"."),(0,r.kt)("p",null,"The Vault in EVM will most likely be the same, but there will be other values for ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereumConfigurationAddress"),"."),(0,r.kt)("p",null,"The credit processor has its own implementation of the configuration contract. It issues tokens to the processor and not to the user, and sends the processor a callback ",(0,r.kt)("inlineCode",{parentName:"p"},"onEventConfirmed"),"."),(0,r.kt)("p",null,"All limits should be checked and the amount determined. It is important to mention that transactions are possible only with tokens for which there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"TOKEN/WEVER")," pair with sufficient liquidity on FlatQube."),(0,r.kt)("p",null,"Next, it is needed to decide on the scenarios and parameters that will be transferred to the processor."),(0,r.kt)("p",null,"To call the deposit, the following is used ",(0,r.kt)("inlineCode",{parentName:"p"},"depositToFactory function(uint128 amount, int8 wid, uint256 user, uint256 creditor, uint256 recipient, uint128 tokenAmount, uint128 tonAmount, uint8 swapType, uint128 slippageNumerator, uint128 slippageDenominator, bytes memory level3)"),", where: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Amount")," - how many tokens are transferred to Everscale and how much the credit the processor will receive for the exchange\\release. ERC20 decimals!       "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"User")," - is the control address. It can process a stuck transaction if, for example, tokens could not be\nexchanged for gas, because at the moment the price went beyond the limits of the slippage set. ")),(0,r.kt)("p",null,"It can also cancel the transaction and unwrap. Pay the debt manually and pick up all the tokens.",(0,r.kt)("br",{parentName:"p"}),"\n","With correctly selected transaction parameters, it is used extremely rarely.",(0,r.kt)("br",{parentName:"p"}),"\n","Usually, this is just the user's wallet address, and if the user transfers tokens to himself, then it coincides with the recipient.",(0,r.kt)("br",{parentName:"p"}),"\n","In case tokens are transferred to a Strategy, it is better to specify the user's wallet address, even if it is not initialized."),(0,r.kt)("p",null,"Creditor - the address of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CreditFactory.sol")," contract, which will create the ",(0,r.kt)("inlineCode",{parentName:"p"},"CreditProcessor.sol")," contract itself.",(0,r.kt)("br",{parentName:"p"}),"\n","By default, you can use Broxus factory.",(0,r.kt)("br",{parentName:"p"}),"\n","The address of the current Factory and the number of tokens that will need to be returned are to be taken ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broxus/bridge-assets/blob/master/credit.json"},"from here"),"."),(0,r.kt)("p",null,"Any account can deploy a contract via the Factory. The admin of the Factory can try to push the stuck ",(0,r.kt)("inlineCode",{parentName:"p"},"CreditProcessor"),", and change the slippage, but with all parameters set correctly, this should not affect the result."),(0,r.kt)("p",null,"There is no binding to the ",(0,r.kt)("inlineCode",{parentName:"p"},"CreditFactory.sol")," contract code, so you can create your own Factory, but ",(0,r.kt)("inlineCode",{parentName:"p"},"CreditProcessor.sol")," cannot be changed, or deploy your own Factory."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Recipient")," - the address that will receive tokens + native EVERs. In a normal scenario, this is just the user's wallet address, but it can also be a smart contract. There are two options depending on the logic:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If all tokens on the account balance are exchanged for EVERs, then the Credit Processor will trigger the receiving contract ",(0,r.kt)("inlineCode",{parentName:"li"},"onReceiveTONsFromBridgeCallback(EventData)")," where all EVERs will be transferred. ",(0,r.kt)("inlineCode",{parentName:"li"},"onbounce: EventData.user != EventData.recipient"),". That is, if the receiving contract is not the same as the user's, then it must be set up in advance or the tokens will be returned."),(0,r.kt)("li",{parentName:"ol"},"If we have to swap Tokens + EVERs, then the contract will simply transfer tokens to this address along with EVERs, and the contract/wallet will receive a call to ",(0,r.kt)("inlineCode",{parentName:"li"},"onAcceptTokensTransfer"),". The data of the transfer will also be in the payload.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tonAmount")," is the minimum amount of EVERs together with the tokens that should be received by the recipient, TIP 3 WEVER decimals = 9. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tokenAmount")," is the minimum amount of tokens that should be received by the recipient. Already in **TIP 3 decimals`!"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"swapType")," \u2013 that's according to what algorithm the contract will try to make the transaction. Generally,\nby correctly combining ",(0,r.kt)("inlineCode",{parentName:"li"},"swapType / tokenAmount /tonAmount"),", you can come up with different use cases of the Credit Processor. After receiving the tokens, the Processor asks the DEX how many tokens it will cost to buy WEVER (tonAmount + debt) + Slippage. That is, if the debt is 6, the number of tokens is 4, and the slippage is 10%, then it will be 11.")),(0,r.kt)("p",null,"The DEX returns ",(0,r.kt)("inlineCode",{parentName:"p"},"expectedSpentAmount")," and if it is ",(0,r.kt)("inlineCode",{parentName:"p"},"\u2264 amount tokenAmount"),", then it will continue to try\nto make an exchange according to ",(0,r.kt)("inlineCode",{parentName:"p"},"swapType"),", and if ",(0,r.kt)("inlineCode",{parentName:"p"},"expectedSpentAmount")," is > ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," -\n",(0,r.kt)("inlineCode",{parentName:"p"},"tokenAmount"),", the contract will end up in the ",(0,r.kt)("inlineCode",{parentName:"p"},"SwapFailed")," status and will wait for further actions from\nthe user or lender."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"0 - the contract will try to exchange tokens for WEVER for an amount equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"expectedSpentAmount"),", but no more than amount - ",(0,r.kt)("inlineCode",{parentName:"li"},"tokenAmoun"),"."),(0,r.kt)("li",{parentName:"ol"},"1 - The contract will change to EVERs the exact amount - ",(0,r.kt)("inlineCode",{parentName:"li"},"tokenAmount"),".")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"slippageNumerator/slippageDenominator")," are the parameters of slippage during the exchange."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"level3")," is the payload. It must be a valid TvmCell. If a non-valid cell is passed, then an empty cell te6ccgEBAQEAAgAAAA will come to Everscale. ")),(0,r.kt)("p",null,"Accordingly, before the transfer, we need to calculate which parameters to transfer to ",(0,r.kt)("inlineCode",{parentName:"p"},"depositToFactory"),", and these calculations strongly depend on what kind of use case we have.        "),(0,r.kt)("p",null,"Let's see how to make the calculations when we want to transfer tokens, and change some of them for\ngas using ",(0,r.kt)("inlineCode",{parentName:"p"},"swapType 0"),":"),(0,r.kt)("p",null,"Upload ",(0,r.kt)("inlineCode",{parentName:"p"},"creditBody")," + Factory fee, this is ",(0,r.kt)("inlineCode",{parentName:"p"},"dept"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"creditBody")," and we take it ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broxus/bridge-assets/blob/master/credit.json"},"from the same place")," as the address of the factory."),(0,r.kt)("p",null,"The fee is taken from the contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const {fee: factoryFee} = (\n    await factoryContract.methods\n        .getDetails({\n            answerId: 0,\n        })\n        .call()\n).value0;\n")),(0,r.kt)("p",null,"The user enters the amount of tokens that is to be transferred, and either enters how much ",(0,r.kt)("inlineCode",{parentName:"p"},"tonAmount")," he/she wants to receive, or the application displays how much is needed for it to process the transfer."),(0,r.kt)("p",null,"Then, we calculate how many tokens ",(0,r.kt)("inlineCode",{parentName:"p"},"tonAmount")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"dept")," will cost. However, please note that the price of Token/Ever pair may change. In the contract below, there will be 1% slippage. However, the count will be like for 10%. Why is this the case? "),(0,r.kt)("p",null,"The Credit Processor will not be completed successfully without meeting the requirements for ",(0,r.kt)("inlineCode",{parentName:"p"},"tonAmount")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenAmount"),".",(0,r.kt)("br",{parentName:"p"}),"\n","At the same time, before the exchange, it checks how much it will cost to buy (",(0,r.kt)("inlineCode",{parentName:"p"},"dept")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"tonAmount"),") * ",(0,r.kt)("inlineCode",{parentName:"p"},"slippage"),", and buys exactly this amount of tokens. If the value of this amount is greater than the ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenAmount"),", then it will fail and wait for further actions from the user or Factory, because it cannot fulfill the requirements."),(0,r.kt)("p",null,"If we just count ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenAmount")," = ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," - ((",(0,r.kt)("inlineCode",{parentName:"p"},"dept")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"tonAmount"),") * 1.01), and transfer such an amount to the contract, then this transfer will fail if the price of EVER increases by at least a bit during the transfer."),(0,r.kt)("p",null,"Therefore, we transfer tokenAmount = amount - ((",(0,r.kt)("inlineCode",{parentName:"p"},"dept")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"tonAmount"),") * 1.1) to the contract, and show this number to the user as the number of tokens that is guaranteed to be received. The slippage set for the contract is not 10% but 1%. The contract will try to exchange with 1% slippage. It can make several attempts, and the transaction will be completed successfully if the price has diverged by no more than 10%. It is done to minimize the likelihood of manual actions in case of price volatility. "),(0,r.kt)("p",null,"In case that everything runs well and the market is calm, then we will get more ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenAmount")," than indicated in ",(0,r.kt)("inlineCode",{parentName:"p"},"deposit To Factory"),". Additionally, you can show to the user how many tokens he/she will receive if the price does not change."),(0,r.kt)("p",null,"(",(0,r.kt)("inlineCode",{parentName:"p"},"dept")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"tonAmount"),") * ",(0,r.kt)("inlineCode",{parentName:"p"},"slippage")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const tonAmount = new BigNumber(0); \nconst dept = new BigNumber(CREDIT_BODY).plus(fee);\nconst defaultNumerator = '1';\nconst maximumNumerator = '10';\nconst denumenator = '100';\n\nconst minEvers = tonAmount.plus(dept);\nconst minEversWithSlippage = minEvers\n        .times(denumenator)\n        .div(new BigNumber(denumenator).minus(maximumNumerator))\n        .dp(0, BigNumber.ROUND_UP);\n\nconst dexRootContract = new rpc.Contract(DexAbi.Root, DexRootAddress);\nconst pairAddress = (await dexRootContract.methods\n                                                  .getExpectedPairAddress({\n                                                      answerId: 0,\n                                                      left_root: new Address(fromToken),\n                                                      right_root: new Address(WEVERAddress),\n                                                  })\n                                                  .call({})).value0;\n                                                            \nconst pairContract = new rpc.Contract(DexAbi.Pair, pairAddress);\nconst isActive = (await pairContract.methods\n                                                  .isActive({\n                                                      answerId: 0,\n                                                  })\n                                                  .call()).value0;\nif (!isActive)\n    throw new Error('Pair not active);\n\nconst expectedAmount = (await pairContract.methods\n                            .expectedSpendAmount({\n                                answerId: 0,\n                                receive_amount: minEversWithSlippage.toFixed(),\n                                receive_token_root: WEVERRootAddress,\n                            })\n                            .call()\n                    ).expected_amoun\n")),(0,r.kt)("p",null,"In the example above, we saw expectedAmount. This is the maximum amount of tokens that will cost to exchange for ",(0,r.kt)("inlineCode",{parentName:"p"},"dept")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"tonAmounts"),". Note that this is in decimals already on Everscale in order to see how many tokens this is in EVM."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const minTransferAmount = new BigNumber(expectedAmount)\n                        .plus(1)\n                        .shiftedBy(evm_decimals - tip3_decimals)\n                        .dp(0, BigNumber.ROUND_DOWN);\n")),(0,r.kt)("p",null,"Accordingly, the parameters for ",(0,r.kt)("inlineCode",{parentName:"p"},"depositToFactory"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const user  = '0:0000000000000000000000000000000000000000000000000000000000000000';\n\n\nconst minTokensToRecieve = \n        amount.shiftedBy(tip3_decimals - evm_decimals) // tip3 decimals\n        .minus(necessaryAmountForSwap);\n\ndepositToFactory(\n    amount.toFixed(),\n    user.split(':')[0], // wid\n    user.split(':')[1], // address\n    `0x${CreditFactoryAddress.toString().split(':')[1]}`, // creditor\n    user.split(':')[1], //recipient\n    minTokensToRecieve.toFixed(),\n    tonAmount.toFixed(),\n    '0', // swap type\n    defaultNumerator,\n    defaultDenominator,\n    `0x${Buffer.from('te6ccgEBAQEAAgAAAA==', 'base64').toString('hex')}`,\n)\n")),(0,r.kt)("p",null,"After a successful deposit, wait for the Credit Processor contract, and monitor its status. To do this, we  need to get the transaction recipe from Web3 for transaction data (the address of the Credit Processor contract depends on them). Please see how to do it in the frontend demo via following ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mnill/octus-bridge-integration-sample"},"this link"),"."),(0,r.kt)("p",null,"It can also be accessed on the open-source frontend of the bridge via following ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broxus/octusbridge-frontend"},"this link"),":"),(0,r.kt)("p",null,"It works as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const eventABI = '';\n\nconst decodedLogs = decodeLogs(txReceipt?.logs || []);\nconst depositLog =\n    txReceipt.logs[\n        decodedLogs.findIndex(\n            (log: any) => log !== undefined && log.name === 'FactoryDeposit',\n        )\n    ];\n\nconst eventData = mapEthBytesIntoTonCell(\n    Buffer.from(pipeline.eventABI, 'base64').toString(),\n    depositLog.data,\n); \n\nconst eventVoteData = {\n    eventBlock: txReceipt.blockHash,\n    eventBlockNumber: txReceipt.blockNumber.toString(),\n  eventTransaction: txReceipt.transactionHash,\n  eventData: eventData,\n  eventIndex: depositLog.logIndex.toString(),\n}\n\nconst factoryContract = new rpc.Contract(TokenAbi.CreditFactory, CreditFactoryAddress);\n\nconst creditProcessorAddress = await factoryContract.methods\n                    .getCreditProcessorAddress({\n                        answerId: 0,\n                        eventVoteData,\n                        configuration: EthereumEventConfigurationAddress,\n                    })\n                    .call()\n\nconst creditProcessorContract = new rpc.Contract(TokenAbi.CreditProcessor, creditProcessorAddress);\n\nconst currentState = (await creditProcessorContract.methods\n                        .getDetails({\n                            answerId: 0,\n                        })\n                        .call()).value0.state;\n")),(0,r.kt)("p",null,"If everything runs well, then wait for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Processed")," status."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What you need to pay attention to:")),(0,r.kt)("p",null,"In case of more complicated cases than just transferring tokens across the bridge, it is needed to study the Credit Processor contract in detail in order to understand the mechanics of Tokens transferring. "),(0,r.kt)("p",null,"It is not recommended exchanging a large amount of tokens for EVER on a credit processor (",(0,r.kt)("inlineCode",{parentName:"p"},"minTonAmount"),"), sooner or later you will be sandwiched. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please always remember about different decimals for the same tokens in different networks.")),(0,r.kt)("p",null,"The approximate scheme of the Credit Processor contract below does not include all possible scenarios\nwhere it could fail. It is given only for general understanding."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4418).Z,width:"1906",height:"6097"})),(0,r.kt)("p",null,"This is the main part of this guide. It doesn't look so scary. But in reality, of course, there is quite a lot of\ncode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Some transactions may end up in a waiting queue. It can happen for several reasons:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Firstly, there may not be enough liquidity in the Vault. When your transaction is initiated, someone could have sent a transaction a little earlier than you or with a larger amount of gas and take the liquidity before you."),(0,r.kt)("li",{parentName:"ul"},"Your withdrawal has exceeded the limit for a single transaction, or the daily limit has been exceeded. In this case, the transaction will not just get into the queue, but will also have to wait until your withdrawal is confirmed by governance or guardian."),(0,r.kt)("li",{parentName:"ul"},"At the same time, if you withdraw money to the account of a smart contract and not a wallet, and, for example, check at the end of the transaction that your balance has increased by a certain amount, you are not immune from getting into the queue, because any wallet can complete the transfer, not just the one to which it is intended."),(0,r.kt)("li",{parentName:"ul"},"To get out of the queue, you will need to make another transaction.")),(0,r.kt)("p",null,"You can also assign a reward to the one who comes and completes your withdrawal in the form of tokens."),(0,r.kt)("p",null,"If you want to integrate the bridge into your website, then it is already very difficult to get into a queue using the UI, but you can always send the user to the frontend of the bridge tosolve any issues that may have arisen. "),(0,r.kt)("p",null,"When withdrawing tokens from Everscale, the Event contract does not automatically send the change. In order to get the remaining gas, you need to call Close method from the wallet that transferred tokens. Carefully, ",(0,r.kt)("strong",{parentName:"p"},"DO NOT")," call this method in the \u201c",(0,r.kt)("inlineCode",{parentName:"p"},"Initializing"),"\u201d state. Otherwise, the transaction may fail. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The contract ",(0,r.kt)("inlineCode",{parentName:"li"},"EverscaleConfiguration.sol")," is not permanent, and can be replaced by another. So check the ",(0,r.kt)("inlineCode",{parentName:"li"},"endTimestamp")," parameter if the bridge is integrated into the frontend, and take the configuration address from Proxy.sol if you transfer from the contract. Also, check that the proxy is not on pause.",(0,r.kt)("br",{parentName:"li"}),"After going through the technical aspects of transactions please follow ",(0,r.kt)("a",{parentName:"li",href:"/docs/PR-299/develop/integrate/build-cross-chain/getting-started/transactions-mechanism"},"this page")," to see the pros and cons of the Octus Bridge.")))}h.isMDXComponent=!0},4418:function(e,t,n){t.Z=n.p+"assets/images/eve-everscale-credit-processor.drawio-83046c996e3b9722dac668041d131fe8.png"}}]);