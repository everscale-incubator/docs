"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[9322],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),k=a,m=u["".concat(i,".").concat(k)]||u[k]||d[k]||l;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<l;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3678:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var o=n(3117),a=n(102),l=(n(7294),n(3905)),r=["components"],s={sidebar_position:0},i="Issue a Fungible Token using Locklift",c={unversionedId:"develop/tutorial/smart-digital-assets/issue-ft",id:"develop/tutorial/smart-digital-assets/issue-ft",title:"Issue a Fungible Token using Locklift",description:"Reference",source:"@site/../../src/develop/tutorial/smart-digital-assets/issue-ft.md",sourceDirName:"develop/tutorial/smart-digital-assets",slug:"/develop/tutorial/smart-digital-assets/issue-ft",permalink:"/docs/PR-297/develop/tutorial/smart-digital-assets/issue-ft",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tutorial/smart-digital-assets/issue-ft.md",tags:[],version:"current",lastUpdatedAt:1666972158,formattedLastUpdatedAt:"Oct 28, 2022",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Smart Digital Assets",permalink:"/docs/PR-297/develop/tutorial/smart-digital-assets"},next:{title:"Issue a Non-Fungible Token",permalink:"/docs/PR-297/develop/tutorial/smart-digital-assets/mint-nft"}},p={},d=[{value:"Reference",id:"reference",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Creating a project",id:"creating-a-project",level:3},{value:"Locklift config settings",id:"locklift-config-settings",level:3},{value:"Add Sandbox",id:"add-sandbox",level:3},{value:"Embedding the TIP-3 token repository",id:"embedding-the-tip-3-token-repository",level:3},{value:"Deploy account",id:"deploy-account",level:2},{value:"Deploy Token Root",id:"deploy-token-root",level:2},{value:"Deploy Token Wallet",id:"deploy-token-wallet",level:2},{value:"Transfer TIP-3 tokens",id:"transfer-tip-3-tokens",level:2}],u={toc:d};function k(e){var t=e.components,n=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"issue-a-fungible-token-using-locklift"},"Issue a Fungible Token using Locklift"),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/PR-297/standard/TIP-3"},"TIP-3 Core description"))),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"Before we begin, make sure that you already have the following installed:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"NodeJs")," - version 16 or later"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")," - version 19 or later")),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("p",null,"To begin with, let us recall the architecture of the ",(0,l.kt)("a",{parentName:"p",href:"/docs/PR-297/standard/TIP-3"},"TIP-3 token"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The information about the token is stored in the ",(0,l.kt)("strong",{parentName:"li"},"Token root")," contract."),(0,l.kt)("li",{parentName:"ul"},"Each holder has its own instance of ",(0,l.kt)("strong",{parentName:"li"},"Token Wallet"),". This contract is used to store tokens.",(0,l.kt)("br",{parentName:"li"}),"It also can send tokens to any smart contract or receive them from another Token Wallet.")),(0,l.kt)("p",null,"As an example, we will use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/broxus/tip3"},"TIP-3 token repository")," by Broxus.",(0,l.kt)("br",{parentName:"p"}),"\n","However, we will rewrite the scripts in this repository in Typescript for the new version of Locklift."),(0,l.kt)("h3",{id:"creating-a-project"},"Creating a project"),(0,l.kt)("p",null,"The first thing we need to do is to install ",(0,l.kt)("a",{parentName:"p",href:"https://www.notion.so/tools/locklift.md"},"Locklift")," and create a new project.\nLocklift is a development environment designed to help writing Everscale smart contracts."),(0,l.kt)("p",null,"Start by creating a folder.\nWe'll call it ",(0,l.kt)("inlineCode",{parentName:"p"},"tip-3"),", but you can choose any other name you like."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir tip-3\ncd tip-3\n")),(0,l.kt)("p",null,"Afterwards, create an NPM project."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm init\n")),(0,l.kt)("p",null,"Now, we need to install the Locklift locally. If you have a globally installed Locklift, you can skip this step."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev locklift\n")),(0,l.kt)("p",null,"To install Locklift globally, you can use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g locklift\n")),(0,l.kt)("p",null,"After that, initialize the project with this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx locklift init -f\n")),(0,l.kt)("p",null,"As a result of the initialization, a new Locklift project will be created, filled with samples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 contracts\n\u2502   \u2514\u2500\u2500 Sample.sol\n\u251c\u2500\u2500 locklift.config.ts\n\u251c\u2500\u2500 scripts\n\u2502   \u2514\u2500\u2500 1-deploy-sample.ts\n\u251c\u2500\u2500 giverSettings\n|   \u2514\u2500\u2500 index.ts\n\u2514\u2500\u2500 test\n    \u2514\u2500\u2500 sample-test.ts\n")),(0,l.kt)("h3",{id:"locklift-config-settings"},"Locklift config settings"),(0,l.kt)("p",null,"Since we will be using a sandbox, it is nedded to remove ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"LOCAL_NETWORK_ENDPOINT")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"locklift.config.ts")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'const LOCAL_NETWORK_ENDPOINT = "<http://localhost/graphql>";\n// to\nconst LOCAL_NETWORK_ENDPOINT = "<http://localhost/>;\n')),(0,l.kt)("h3",{id:"add-sandbox"},"Add Sandbox"),(0,l.kt)("p",null,"Let's add a Sandbox script to ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),", with which we will launch a local node."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},' "scripts": {\n    "test": "npx locklift test --network local",\n    "start-sandbox": "docker run -d -e USER_AGREEMENT=yes --rm --name local-node -p80:80 tonlabs/local-node:0.29.1",\n    "stop-sandbox": "docker kill local-node",\n    "reload-sandbox": "npx stop-sandbox && npx start-sandbox"\n  },\n')),(0,l.kt)("p",null,"You can start the sandbox with the ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn start-sandbox")," command, and stop it with ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn stop-sandbox")," command."),(0,l.kt)("h3",{id:"embedding-the-tip-3-token-repository"},"Embedding the TIP-3 token repository"),(0,l.kt)("p",null,"After the project is created, it is needed to import the TIP-3 token repository. It will be used for the work thank follows.",(0,l.kt)("br",{parentName:"p"}),"\n","To do this, please use the import method directly in Locklift."),(0,l.kt)("p",null,"Let's add the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/broxus/tip3"},"TIP-3 repository")," and Broxus contracts to the ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," dependencies:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'{\n...\n"devDependencies": {\n    "@broxus/tip3": "git+https://github.com/broxus/tip3.git",\n    "@broxus/contracts": "^1.1.0",\n    ...\n  },\n ...\n}\n')),(0,l.kt)("p",null,"Also, we need to tell Locklift that there are external contracts.\nTo do this, add the following lines to ",(0,l.kt)("inlineCode",{parentName:"p"},"locklift.config.ts/compiler"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'    externalContracts: {\n    "node_modules/@broxus/tip3/build": ["TokenRoot", "TokenWallet"],\n },\n  },\n')),(0,l.kt)("p",null,"Now, we can configure and compile our contracts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm i\nnpx locklift build\n")),(0,l.kt)("h2",{id:"deploy-account"},"Deploy account"),(0,l.kt)("p",null,"To deploy ",(0,l.kt)("a",{parentName:"p",href:"#deploy-token-root"},"Token Root"),", ",(0,l.kt)("a",{parentName:"p",href:"#deploy-token-wallet"},"Token Wallet")," and ",(0,l.kt)("a",{parentName:"p",href:"#transfer-tip-3-tokens"},"Token Transfer"),", you need a deployed account."),(0,l.kt)("p",null,"Let's write a simple script that will use Locklift to deploy an Account."),(0,l.kt)("p",null,"Take ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/broxus/tip3/blob/master/scripts/00-deploy-account.js"},"the script")," from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/broxus/tip3"},"Broxus repository")," and rewrite it for the typescript and the newer version of Locklift:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"async function main() {\n  const keyNumber = \"0\";\n  const balance = 300;\n\n  /* We get a pair of private and public keys,\n      which we get from the mnemonic phrase from the config\n\n    SimpleSigner {\n      keyPair: {\n        secretKey: 'bb2903d025a330681e78f3bcb248d7d89b861f3e8a480eb74438ec0299319f7a',\n        publicKey: 'e85f61aaef0ea43afc14e08e6bd46c3b996974c495a881baccc58760f6349300'\n      },\n      publicKey: 'e85f61aaef0ea43afc14e08e6bd46c3b996974c495a881baccc58760f6349300'\n    }\n\n  */\n  const signer = (await locklift.keystore.getSigner(keyNumber))!;\n\n  /* Get a accountFactory from contract name. You can provide your own implementation of account\n      if needed, there is only one constraint - custom contract\n    should include SendTransaction method */\n  let accountsFactory = locklift.factory.getAccountsFactory(\"Account\");\n\n  /* Deploy new Account.\n    @params value: Initial balance in EVERs, receoved from giver.\n  */\n  const { account: Account } = await accountsFactory.deployNewAccount({\n    publicKey: signer.publicKey,\n    initParams: {\n      _randomNonce: locklift.utils.getRandomNonce(),\n    },\n    constructorParams: {},\n    value: locklift.utils.toNano(10),\n  });\n  console.log(`Account deployed at: ${Account.address}`);\n}\nmain()\n  .then(() => process.exit(0))\n  .catch(e => {\n    console.log(e);\n    process.exit(1);\n  });\n")),(0,l.kt)("p",null,"Giver - is a contract that has a ",(0,l.kt)("inlineCode",{parentName:"p"},"sendTransaction")," method. The local-node already has a pre-installed contract with the initial amount of EVERs. For other networks, you can configure your giver in ",(0,l.kt)("inlineCode",{parentName:"p"},"locklift.config.ts"),"."),(0,l.kt)("p",null,"If you need a permanent address for testing, then set the ",(0,l.kt)("inlineCode",{parentName:"p"},"_randomNonce")," constant. By changing  ",(0,l.kt)("inlineCode",{parentName:"p"},"_randomNonce")," you change the byte code of the contract, and the final address."),(0,l.kt)("p",null,"Done. Now, using the following command we will deploy the account:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx locklift run -s ./scripts/00-deploy-account.ts -n local\n")),(0,l.kt)("h2",{id:"deploy-token-root"},"Deploy Token Root"),(0,l.kt)("p",null,"Token root contract stores the general information about the token, e.g. name, symbol, decimals, token wallet code and so on."),(0,l.kt)("p",null,"Let's write a script ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts/01-deploy-token.ts")," to deploy Token Root:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Address } from "locklift/.";\nimport { isValidEverAddress, isNumeric, zeroAddress, Migration } from "./utils";\nasync function main() {\nconst signer = (await locklift.keystore.getSigner("0"))!;\nconst initialSupplyTo = zeroAddress;\nconst rootOwner = "";\nconst name = "Onboarding Token";\nconst symbol = "ONT42";\nconst decimals = 6;\nconst disableMint = "false";\nconst disableBurnByRoot = "false";\nconst pauseBurn = "false";\nlet initialSupply = "0";\n/*\nReturns compilation artifacts based on the .sol file name\nor name from value config.extarnalContracts[pathToLib].\n*/\nconst TokenWallet = locklift.factory.getContractArtifacts("TokenWallet");\n/*\nDeploy the TIP-3 Token Root contract.\n@params deployWalletValue: Along with the deployment of the root token,\nthe wallet will be automatically deployed to the owner.\nThis is the amount of EVERs that will be sent to the wallet.\n*/\nconst { contract: tokenRoot } = await locklift.factory.deployContract({\ncontract: "TokenRoot",\npublicKey: signer.publicKey,\ninitParams: {\ndeployer_: new Address(zeroAddress),\nrandomNonce_: (Math.random() * 6400) | 0,\nrootOwner_: rootOwner,\nname_: name,\nsymbol_: symbol,\ndecimals_: decimals,\nwalletCode_: TokenWallet.code,\n},\nconstructorParams: {\ninitialSupplyTo: initialSupplyTo,\ninitialSupply: new BigNumber(initialSupply).shiftedBy(decimals).toFixed(),\ndeployWalletValue: locklift.utils.toNano(1),\nmintDisabled: disableMint,\nburnByRootDisabled: disableBurnByRoot,\nburnPaused: pauseBurn,\nremainingGasTo: new Address(myAccountAddress),\n},\nvalue: locklift.utils.toNano(5),\n});\nconsole.log(`${name}: ${tokenRoot.address}`);\n}\nmain()\n.then(() => process.exit(0))\n.catch(e => {\nconsole.log(e);\nprocess.exit(1);\n});\n')),(0,l.kt)("p",null,"You can then run the script using the following Locklift command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx locklift run -s ./scripts/01-deploy-token.ts -n local\n")),(0,l.kt)("p",null,"After running the script, your TIP-3 Token Root will be deployed, and in the terminal you will see token data:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"...\nRoot owner ...\nName ...\nSymbol ...\nDecimals ...\n...\n")),(0,l.kt)("h2",{id:"deploy-token-wallet"},"Deploy Token Wallet"),(0,l.kt)("p",null,"Let's write the script ",(0,l.kt)("inlineCode",{parentName:"p"},"/scripts/02-deploy-wallet.js")," for Token Wallet deployment."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Address, Contract } from "locklift/.";\nimport { AccountAbi } from "../build/factorySource";\nasync function main() {\n  const tokenRootAddress = "";\n  const myAccountAddress = "";\n\n  const signer = (await locklift.keystore.getSigner("0"))!;\n  const accountFactory = locklift.factory.getAccountsFactory("Account");\n\n  /*\n    Get Account contract instance: Account<AccountAbi>\n  */\n  const account = accountFactory.getAccount(myAccountAddress, signer.publicKey);\n\n  /*\n    Get instance of already deployed contract\n  */\n  const tokenRoot = locklift.factory.getDeployedContract(\n    "TokenRoot",\n    new Address(tokenRootAddress),\n  );\n\n  /*\n    Under the hood of runTarget, the Account sendTransaction method is called\n  */\n  await account.runTarget(\n    {\n      contract: tokenRoot,\n      value: locklift.utils.toNano(1),\n    },\n    tr =>\n      tr.methods.deployWallet({\n        answerId: 0,\n        walletOwner: account.address,\n        deployWalletValue: 0,\n      }),\n  );\n\n  /*\n    We call the get method on the contract.\n    @params answerId: If the function marked as responsible then\n      field answerId appears in the list of input parameters\n        of the function in *abi.json file. answerId is function id\n        that will be called.\n      In external calls, we did not notice that this affected anything.\n        But answerid is critical when you call these functions on-chain\n  */\n  const wallet = await tokenRoot.methods\n    .walletOf({\n      answerId: 0,\n      walletOwner: account.address,\n    })\n    .call({ responsible: true });\n  console.log(`Account deployed at: ${Account.address}`);\n  console.log(`TIP3 Wallet deployed at: ${wallet.value0.toString()}`);\n}\nmain()\n  .then(() => process.exit(0))\n  .catch(e => {\n    console.log(e);\n    process.exit(1);\n  });\n')),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md#addresstransfer"},"The TON Soidity Compiler")," allows you to specify different parameters (value,currencies, bounce or flag) of an outgoing internal message sent through an external function call."),(0,l.kt)("p",null,"Note that all external function calls are asynchronous. Thus, a function will be called after the end of the current transaction."),(0,l.kt)("p",null,"Note that if the value is not set, the default value will be 0.01 EVER, or 10^7 nanoever. This value is exactly 10_000 gas units in the workchain."),(0,l.kt)("p",null,"If the called function returns some value and is marked as ",(0,l.kt)("inlineCode",{parentName:"p"},"responsible"),", then a callback option must be set. This callback function will be called by another contract.",(0,l.kt)("br",{parentName:"p"}),"\n","The Remote function will pass its return values as function arguments for the callback function. That's why the types of return values of the called function must be equal to function arguments of the callback function.\nIf the function is marked as responsible, then field ",(0,l.kt)("inlineCode",{parentName:"p"},"answerId")," appears in the list of input parameters of the function in *abi.json file. ",(0,l.kt)("inlineCode",{parentName:"p"},"answerId")," is the function id that will be called."),(0,l.kt)("p",null,"Use this command and deploy the token wallet:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx locklift run -s ./scripts/02-deploy-wallet.js -n local\n")),(0,l.kt)("p",null,"After running the script, the Token Wallet will be deployed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"...\nPublic key number ...\nToken Root address ...\nTIP3 Wallet deployed at: ...\n...\n")),(0,l.kt)("h2",{id:"transfer-tip-3-tokens"},"Transfer TIP-3 tokens"),(0,l.kt)("p",null,"TIP-3 Token Wallet has two transfer methods:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Transfer")," - Transfer tokens and optionally deploy TokenWallet for recipient account address.\nTransfer tokens using another TokenWallet address. That wallet must be deployed previously.\nLet's do a token transfer using the previously deployed account.\nTo do this, add the following strings to ",(0,l.kt)("inlineCode",{parentName:"p"},"/scripts/03-transfer-tip3.ts"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { Address, Contract } from "locklift/.";\nimport { AccountAbi } from "../build/factorySource";\nconst EMPTY_TVM_CELL = "te6ccgEBAQEAAgAAAA==";\nasync function main() {\n  const tokenWalletAddress = "";\n  const myAccountAddress = "";\n  const aliceAccount = "";\n  const signer = (await locklift.keystore.getSigner("0"))!;\n\n  const accountFactory = locklift.factory.getAccountsFactory("Account");\n  const account = accountFactory.getAccount(myAccountAddress, signer.publicKey);\n\n  const tw = locklift.factory.getDeployedContract(\n    "TokenWallet",\n    new Address(tokenWalletAddress),\n  );\n\n  /*\n    Transfer with the deployment of a wallet for the recipient account.\n\n    Don\'t pay attention to notify and payload yet, we\'ll get back to them.\n  */\n  await account.runTarget(\n    {\n      contract: tw,\n      value: locklift.utils.toNano(6),\n    },\n    tw =>\n      tw.methods.transfer({\n        amount: 100,\n        recipient: aliceAccount,\n        deployWalletValue: locklift.utils.toNano(5),\n        remainingGasTo: account.address,\n        notify: true,\n        payload: EMPTY_TVM_CELL,\n      }),\n  );\n\n  const tokenRootAddress = await tw.methods\n    .root({\n      answerId: 0,\n    })\n    .call({ responsible: true });\n\n  const tokenRoot = locklift.factory.getDeployedContract(\n    "TokenRoot",\n    tokenRootAddress.value0,\n  );\n\n  /*\n    We recognize the newly created token wallet for Alice.\n    To send her more tokens.\n  */\n  const aliceTokenWallet = (await tokenRoot.methods\n    .walletOf({\n      answerId: 0,\n      walletOwner: aliceAccount,\n    })\n    .call({ responsible: true }))\n    .value0;\n   /*\n     \u0421hecking Alice\'s balance\n   */\n   const aliceTW: Contract<TokenWalletAbi> =\n    locklift.factory.getDeployedContract(\n      "TokenWallet",\n      aliceTokenWallet,\n    );\n\n    const  aliceBalance = (await tw.methods\n      .balance({\n        answerId: 0,\n      })\n      .call({ responsible: true })).value0;\n\n    /*\n       Transfer to deployed token wallet\n    */\n    await account.runTarget(\n      {\n        contract: tw,\n        value: locklift.utils.toNano(1),\n      },\n      tw =>\n        tw.methods.transferToWallet({\n          amount: 100,\n          recipientTokenWallet: aliceTokenWallet,\n          remainingGasTo: account.address,\n          notify: true,\n          payload: EMPTY_TVM_CELL,\n        }),\n    );\n\n}\nmain()\n  .then(() => process.exit(0))\n  .catch(e => {\n    console.log(e);\n    process.exit(1);\n  });\n')),(0,l.kt)("p",null,"Done. Now we can run the transfer using the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx locklift run -s ./scripts/03-transfer-tip3.ts -n local\n")),(0,l.kt)("p",null,"As a result, you will see the transfer process on the command line:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"...\nPublic key number ...\nToken Wallet address ...\nTransfer recipient ...\nTransfer amount ...\nInitiial balance (will send from your wallet) ...\n...\n")))}k.isMDXComponent=!0}}]);