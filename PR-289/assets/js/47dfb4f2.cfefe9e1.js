"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[5412],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,u=d["".concat(i,".").concat(h)]||d[h]||m[h]||r;return a?n.createElement(u,s(s({ref:t},p),{},{components:a})):n.createElement(u,s({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6722:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),s=["components"],l={sidebar_position:2},i="Solidity Contracts Examples",c={unversionedId:"develop/solidity/samples",id:"develop/solidity/samples",title:"Solidity Contracts Examples",description:"This set of smart-contract samples illustrates standard functionality of smart-contracts developed in Solidity, starting with very basic and gradually evolving into code snippets, which may come handy in production smart-contracts.",source:"@site/../../src/develop/solidity/samples.md",sourceDirName:"develop/solidity",slug:"/develop/solidity/samples",permalink:"/docs/PR-289/develop/solidity/samples",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/solidity/samples.md",tags:[],version:"current",lastUpdatedAt:1665926171,formattedLastUpdatedAt:"Oct 16, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"TON Solidity Compiler",permalink:"/docs/PR-289/develop/solidity/compiler"},next:{title:"Developing with C++",permalink:"/docs/PR-289/develop/cpp-developing"}},p={},m=[{value:"1. Accumulator : persistent storage",id:"1-accumulator--persistent-storage",level:3},{value:"2. StorageClient: calling another contract",id:"2-storageclient-calling-another-contract",level:3},{value:"3. Borrower: EVER transfer",id:"3-borrower-ever-transfer",level:3},{value:"4. CurrencyExchange: callback implementation",id:"4-currencyexchange-callback-implementation",level:3},{value:"6. DataBase: exchange of different types of values",id:"6-database-exchange-of-different-types-of-values",level:3},{value:"7. Giver: simple giver contract",id:"7-giver-simple-giver-contract",level:3},{value:"8. Kamikaze: selfdestruct function",id:"8-kamikaze-selfdestruct-function",level:3},{value:"9. PiggyBank: Piggy bank with two clients",id:"9-piggybank-piggy-bank-with-two-clients",level:3},{value:"10. Wallet: Simple wallet",id:"10-wallet-simple-wallet",level:3},{value:"11. ContractDeployer: Deploy Contract from contract via <code>new</code>.",id:"11-contractdeployer-deploy-contract-from-contract-via-new",level:3},{value:"12. BadContract: Contract upgrade",id:"12-badcontract-contract-upgrade",level:3},{value:"13. BankCollector: Mapping methods",id:"13-bankcollector-mapping-methods",level:3},{value:"14. CustomReplayProtection: Custom replay protection",id:"14-customreplayprotection-custom-replay-protection",level:3},{value:"15. MessageSender: Message construction and parsing",id:"15-messagesender-message-construction-and-parsing",level:3},{value:"16. onBounceHandler: Working with bounced messages",id:"16-onbouncehandler-working-with-bounced-messages",level:3},{value:"17. low_level: Constructor message structure",id:"17-low_level-constructor-message-structure",level:3},{value:"18. Interfaces, OrderClient, OrderDatabase: Order Book",id:"18-interfaces-orderclient-orderdatabase-order-book",level:3},{value:"19. Casino, CasinoClient, CasinoOwner, CasinoInterfaces: Casino",id:"19-casino-casinoclient-casinoowner-casinointerfaces-casino",level:3},{value:"20. Bomber, Interface, Sink: Bomber",id:"20-bomber-interface-sink-bomber",level:3},{value:"21. Self_deploy: Self Deployer",id:"21-self_deploy-self-deployer",level:3},{value:"22. Sender, Sink: Sender",id:"22-sender-sink-sender",level:3},{value:"23. rawReserve, sender: Reserver",id:"23-rawreserve-sender-reserver",level:3},{value:"24. ISquareProvider, LengthProvider, SquareProvider, WidthProvider: Rectangle square",id:"24-isquareprovider-lengthprovider-squareprovider-widthprovider-rectangle-square",level:3},{value:"25. Config: Function arguments specification",id:"25-config-function-arguments-specification",level:3}],d={toc:m};function h(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"solidity-contracts-examples"},"Solidity Contracts Examples"),(0,r.kt)("p",null,"This set of smart-contract samples illustrates standard functionality of smart-contracts developed in Solidity, starting with very basic and gradually evolving into code snippets, which may come handy in production smart-contracts."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can find a list of all the contracts listed in this EverX (formerly TON Labs) ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/samples/blob/master/solidity/"},"repository"),".")),(0,r.kt)("h3",{id:"1-accumulator--persistent-storage"},"1. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/1_Accumulator.sol"},"Accumulator")," : persistent storage"),(0,r.kt)("p",null,"Smart-contracts deployed to the blockchain store their state variables in a persistent storage.\nCall ",(0,r.kt)("inlineCode",{parentName:"p"},"Accumulator.add(uint value)"),". It adds ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," to its state variable ",(0,r.kt)("inlineCode",{parentName:"p"},"sum"),".\nResulting state of the account can be examined by conventional means."),(0,r.kt)("h3",{id:"2-storageclient-calling-another-contract"},"2. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/2_StorageClient.sol"},"StorageClient"),": calling another ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/2_UintStorage.sol"},"contract")),(0,r.kt)("p",null,"Contracts can also call other remote contracts. Call ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageClient.store(Storage storageAddress)")," to\ninvoke a public function of another contract. The remote contract ",(0,r.kt)("inlineCode",{parentName:"p"},"UintStorage")," saves the integer\nvalue of the argument and the caller address in its state variables."),(0,r.kt)("h3",{id:"3-borrower-ever-transfer"},"3. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/3_Borrower.sol"},"Borrower"),": EVER transfer"),(0,r.kt)("p",null,"This sample demonstrates how currency transfer works. Call ",(0,r.kt)("inlineCode",{parentName:"p"},"Borrower.askForALoan(Loaner loanerAddress, uint amount)"),".\nThis requests ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," of currency from the contract deployed at the specified address.\nThe remote contract ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/3_Loaner.sol"},"LoanerContract"),"\ntransfers ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," of currency to the caller via ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.sender.transfer(amount)"),".\nEach contract has an internal transaction counter. The counter value increases with each transaction\nand is stored in the persistent memory."),(0,r.kt)("h3",{id:"4-currencyexchange-callback-implementation"},"4. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/4_CurrencyExchange.sol"},"CurrencyExchange"),": callback implementation"),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"CurrencyExchange.updateExchangeRate(address bankAddress, uint16 code)"),". This function allows\ninteracting with a remote contract by calling its function: ",(0,r.kt)("inlineCode",{parentName:"p"},"ICentralBank.GetExchangeRate(uint16 code)"),".\nThe remote contract ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/4_CentralBank.sol"},"CentralBank"),"\nobtains caller's address via ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.sender")," and performs a callback."),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/samples/blob/master/solidity/5_Bank.sol"},"Bank"),": loan interaction between Bank and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/samples/blob/master/solidity/5_BankClient.sol"},"BankClient"))),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"Bank.setAllowance(address bankClientAddress, uint amount)"),".\nBank stores information about loan allowances and current debts for different contracts. This data\nis recorded in the following state variable: ",(0,r.kt)("inlineCode",{parentName:"p"},"mapping(address => CreditInfo) clientDB;"),(0,r.kt)("br",{parentName:"p"}),"\n","A contract owner is supposed to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"setAllowance()")," function to specify limits."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/5_BankClient.sol"},"BankClient")," is a client\nthat can interact with Bank."),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"BankClient.getMyCredit(IBank bank)"),".\nThis function calls the remote contract Bank to receive allowed credit limit via Bank invoking the\ncallback function ",(0,r.kt)("inlineCode",{parentName:"p"},"setCreditLimit(uint limit)"),"."),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"BankClient.askForALoan(IBank bank, uint amount)"),'.\nThis function call the remote contract Bank to get an amount of credit. According to the current\ncredit info of the BankClient contract Bank will approve the credit via calling the callback\nfunction "receiveLoan(uint n_totalDebt)" or refuse the credit via calling the callback function\n',(0,r.kt)("inlineCode",{parentName:"p"},"refusalCallback(uint availableLimit)"),".\n",(0,r.kt)("strong",{parentName:"p"},"receiveLoan")," function also obtains balance of the contract via ",(0,r.kt)("strong",{parentName:"p"},"address(this).balance")," and\nbalance of the inbound message via ",(0,r.kt)("strong",{parentName:"p"},"msg.value")," and saves them in state variables.\n",(0,r.kt)("strong",{parentName:"p"},"refusalCallback")," function saves the argument (available credit limit) in the state variable."),(0,r.kt)("h3",{id:"6-database-exchange-of-different-types-of-values"},"6. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/6_DataBase.sol"},"DataBase"),": exchange of different types of values"),(0,r.kt)("p",null,"One of contract functions call allows sending to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/6_DataBaseClient.sol"},"DataBaseClient"),"\ndifferent values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"uint64 array;"),(0,r.kt)("li",{parentName:"ul"},"five uint arrays;"),(0,r.kt)("li",{parentName:"ul"},"five uint256;"),(0,r.kt)("li",{parentName:"ul"},"struct array.")),(0,r.kt)("h3",{id:"7-giver-simple-giver-contract"},"7. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/7_Giver.sol"},"Giver"),": simple giver contract"),(0,r.kt)("p",null,"This sample shows usage of different types of currency transactions and usage of a fallback function."),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"Giver.transferToAddress(address payable destination, uint amount)")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"Giver.do_tvm_transfer(address payable remote_addr, uint128 ton_value, bool bounce, uint16 sendrawmsg_flag)"),"\nto perform a currency transaction.\nCall ",(0,r.kt)("inlineCode",{parentName:"p"},"Giver.transferToCrashContract(address payable destination, uint amount)")," to implement a crash\nduring transaction. That will cause an exception in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/7_CrashContract.sol"},"CrashContract"),"\nand Giver's contract fallback function calling.\nCall ",(0,r.kt)("inlineCode",{parentName:"p"},"Giver.transferToAbstractContract(address payable destination, uint amount)")," with a\nnon-existent address AbstractContract will also call a fallback function of Giver."),(0,r.kt)("h3",{id:"8-kamikaze-selfdestruct-function"},"8. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/8_Kamikaze.sol"},"Kamikaze"),": selfdestruct function"),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"Kamikaze.sendAllMoney(address anotherContract)"),". This function destroys the contract and sends\nall its funds to the specified address of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/8_Heir.sol"},"Heir"),"\ncontract."),(0,r.kt)("h3",{id:"9-piggybank-piggy-bank-with-two-clients"},"9. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/9_PiggyBank.sol"},"PiggyBank"),": Piggy bank with two clients"),(0,r.kt)("p",null,"This sample consists of 3 contracts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/samples/blob/master/solidity/9_PiggyBank.sol"},"PiggyBank")," - piggy bank itself."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/samples/blob/master/solidity/9_PiggyBank_Owner.sol"},"PiggyBank_Owner")," - piggy bank's owner - valid user, who can add to piggy bank's deposit and withdraw."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/samples/blob/master/solidity/9_PiggyBank_Stranger.sol"},"PiggyBank_Stranger")," - stranger - invalid user, who can add to piggy bank but can not withdraw.")),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"PiggyBank_Owner.addToDeposit(PiggyBank bankAddress, uint amount)")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"PiggyBank_Stranger.addToDeposit(PiggyBank bankAddress, uint amount)")," to transfer EVERs from the\ncontract to PiggyBank."),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"PiggyBank_Owner.withdrawDeposit(PiggyBank bankAddress)")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"PiggyBank_Stranger.withdrawDeposit(PiggyBank bankAddress)"),"\nto try to withdraw the deposit from PiggyBank. Transfer would occur only for the owner."),(0,r.kt)("h3",{id:"10-wallet-simple-wallet"},"10. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/10_Wallet.sol"},"Wallet"),": Simple wallet"),(0,r.kt)("p",null,"Call ",(0,r.kt)("inlineCode",{parentName:"p"},"Wallet.sendTransaction(address payable dest, uint128 value, bool bounce)"),". This function\nallows transferring EVERs to the specified account."),(0,r.kt)("h3",{id:"11-contractdeployer-deploy-contract-from-contract-via-new"},"11. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/11_ContractDeployer.sol"},"ContractDeployer"),": Deploy Contract from contract via ",(0,r.kt)("inlineCode",{parentName:"h3"},"new"),"."),(0,r.kt)("p",null,"The way to get arguments for deploying is described ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/17_ContractProducer.md"},"How to deploy contract from contract"),"."),(0,r.kt)("h3",{id:"12-badcontract-contract-upgrade"},"12. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/12_BadContract.sol"},"BadContract"),": Contract upgrade"),(0,r.kt)("p",null,"Contract code could be changed via using ",(0,r.kt)("strong",{parentName:"p"},"tvm.setcode")," function. It could be useful for fixing\nerrors and functionality updating. In that example we have a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/12_BadContract.sol"},"BadContract")," (it is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/9_PiggyBank.sol"},"PiggyBank")," contract with added upgrade functionality) and new version of that contract ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/12_NewVersion.sol"},"NewVersion"),"."),(0,r.kt)("p",null,'Call "PiggyBank.setCode(TvmCell memory newcode)" with argument that contains code of ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/12_NewVersion.sol"},"NewVersion")," contract to change the code of the contract."),(0,r.kt)("h3",{id:"13-bankcollector-mapping-methods"},"13. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/13_BankCollector.sol"},"BankCollector"),": Mapping methods"),(0,r.kt)("p",null,"Developer can work with mappings using methods: ",(0,r.kt)("strong",{parentName:"p"},"fetch"),", ",(0,r.kt)("strong",{parentName:"p"},"min"),", ",(0,r.kt)("strong",{parentName:"p"},"next"),". This methods allow to\ncheck existence of the key, obtain lexicographically minimal key and lexicographically next key\nrespectively."),(0,r.kt)("h3",{id:"14-customreplayprotection-custom-replay-protection"},"14. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/14_CustomReplayProtection.sol"},"CustomReplayProtection"),": Custom replay protection"),(0,r.kt)("p",null,"Developer can redefine function ",(0,r.kt)("strong",{parentName:"p"},"afterSignatureCheck")," to create his own replay protection function\ninstead of default one."),(0,r.kt)("h3",{id:"15-messagesender-message-construction-and-parsing"},"15. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/15_MessageSender.sol"},"MessageSender"),": Message construction and parsing"),(0,r.kt)("p",null,"Developer can use TVM specific types to build message manually and special api function\n",(0,r.kt)("strong",{parentName:"p"},"tvm.sendrawmsg()")," to send it. Contract ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/15_MessageSender.sol"},"MessageSender")," performs such actions to build a message which will call the function of another contract ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/15_MessageReceiver.sol"},"MessageReceiver"),". ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/15_MessageReceiver.sol"},"MessageReceiver"),"\nalso shows how to parse a cell."),(0,r.kt)("h3",{id:"16-onbouncehandler-working-with-bounced-messages"},"16. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/16_onBounceHandler.sol"},"onBounceHandler"),": Working with bounced messages"),(0,r.kt)("p",null,"Developer can define ",(0,r.kt)("strong",{parentName:"p"},"onBounce")," function to work with bounced messages. If an error occurs while\nmessage transferring or handling it can be bounced back to the source contract. This sample\ndemonstrates how you can handle such bounced message."),(0,r.kt)("h3",{id:"17-low_level-constructor-message-structure"},"17. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/17_low_level.md"},"low_level"),": Constructor message structure"),(0,r.kt)("h3",{id:"18-interfaces-orderclient-orderdatabase-order-book"},"18. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/18_Interfaces.sol"},"Interfaces"),", ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/18_OrderClient.sol"},"OrderClient"),", ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/18_OrderDatabase.sol"},"OrderDatabase"),": Order Book"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/18_Interfaces.sol"},(0,r.kt)("strong",{parentName:"a"},"Interface.sol"))," - interface of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/18_OrderDatabase.sol"},"DataBase")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/18_OrderClient.sol"},"Client")," Contract."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/18_OrderClient.sol"},(0,r.kt)("strong",{parentName:"a"},"OrderClient.sol"))," - contract that can create new orders in OrderDatabase contract."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/18_OrderDatabase.sol"},(0,r.kt)("strong",{parentName:"a"},"OrderDtatabase.sol"))," - stores order information, creates an order, changes the database, etc."),(0,r.kt)("h3",{id:"19-casino-casinoclient-casinoowner-casinointerfaces-casino"},"19. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/19_Casino.sol"},"Casino"),", ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/19_CasinoClient.sol"},"CasinoClient"),", ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/19_CasinoOwner.sol"},"CasinoOwner"),", ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/19_CasinoInterfaces.sol"},"CasinoInterfaces"),": Casino"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/19_Casino.sol"},(0,r.kt)("strong",{parentName:"a"},"Casino"))," - Casino roulette smart contract."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/19_CasinoInterfaces.sol"},(0,r.kt)("strong",{parentName:"a"},"CasinoInterfaces.sol"))," - interface of the Casino contract."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/19_CasinoOwner.sol"},(0,r.kt)("strong",{parentName:"a"},"CasinoOwner.sol")),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/samples/blob/master/solidity/19_CasinoClient.sol"},(0,r.kt)("strong",{parentName:"a"},"CasinoClient.sol"))," - Casino owner smart contracts."),(0,r.kt)("h3",{id:"20-bomber-interface-sink-bomber"},"20. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/20_bomber.sol"},"Bomber"),", ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/20_interface.sol"},"Interface"),", ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/20_sink.sol"},"Sink"),": Bomber"),(0,r.kt)("h3",{id:"21-self_deploy-self-deployer"},"21. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/21_self_deploy.sol"},"Self_deploy"),": Self Deployer"),(0,r.kt)("p",null,"This sample shows how the contract can deploy another contract of the same type."),(0,r.kt)("h3",{id:"22-sender-sink-sender"},"22. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/22_sender.sol"},"Sender"),", ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/22_sink.sol"},"Sink"),": Sender"),(0,r.kt)("p",null,"Generates cell which contains message which calls another contract by internal outbound message.\nSaves received value in state variable."),(0,r.kt)("h3",{id:"23-rawreserve-sender-reserver"},"23. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/23_rawReserve.sol"},"rawReserve"),", ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/23_sender.sol"},"sender"),": Reserver"),(0,r.kt)("p",null,"A contract that reserves a certain amount of EVER from the remaining balance of the account: exactly,at most,or all but."),(0,r.kt)("h3",{id:"24-isquareprovider-lengthprovider-squareprovider-widthprovider-rectangle-square"},"24. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/24_ISquareProvider.sol"},"ISquareProvider"),", ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/24_LengthProvider.sol"},"LengthProvider"),", ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/24_SquareProvider.sol"},"SquareProvider"),", ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/24_WidthProvider.sol"},"WidthProvider"),": Rectangle square"),(0,r.kt)("h3",{id:"25-config-function-arguments-specification"},"25. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/tonlabs/samples/blob/master/solidity/25_Config.sol"},"Config"),": Function arguments specification"),(0,r.kt)("p",null,"Sometimes it can be not obvious in which way function arguments should be specified, especially if it is a large structure with different and complex fields. It is generally described in ",(0,r.kt)("a",{parentName:"p",href:"/docs/PR-289/arch/abi/2.1"},"abi doc"),". And this example was made to help users clear this moment."))}h.isMDXComponent=!0}}]);