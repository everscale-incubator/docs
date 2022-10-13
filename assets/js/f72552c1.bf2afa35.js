"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[6057],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,p=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(p,s(s({ref:t},h),{},{components:a})):n.createElement(p,s({ref:t},h))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3626:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),s=["components"],i={description:"Blockchain, everything is a contract, types of messages and gas",sidebar_position:3},l="Data structures",c={unversionedId:"develop/smart-contract/data-structures",id:"develop/smart-contract/data-structures",title:"Data structures",description:"Blockchain, everything is a contract, types of messages and gas",source:"@site/../../src/develop/smart-contract/05-data-structures.md",sourceDirName:"develop/smart-contract",slug:"/develop/smart-contract/data-structures",permalink:"/docs/develop/smart-contract/data-structures",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/smart-contract/05-data-structures.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Blockchain, everything is a contract, types of messages and gas",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Blockchain",permalink:"/docs/develop/smart-contract/blockchain"},next:{title:"Magic and overheads",permalink:"/docs/develop/smart-contract/solidity-compiler-overheads"}},h={},d=[{value:"TVM \u2014 Ton Virtual Machine.",id:"tvm--ton-virtual-machine",level:2},{value:"The TVM code is standard data",id:"the-tvm-code-is-standard-data",level:2},{value:"Messages and funds",id:"messages-and-funds",level:2},{value:"Excerpt from the  TON Solidity compiler documentation:",id:"excerpt-from-the--ton-solidity-compiler-documentation",level:3},{value:"BoC. Now for the hard part :-)",id:"boc-now-for-the-hard-part--",level:3}],u={toc:d};function m(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-structures"},"Data structures"),(0,r.kt)("h2",{id:"tvm--ton-virtual-machine"},"TVM \u2014 Ton Virtual Machine."),(0,r.kt)("p",null,"Realized 1 to 1 just like in Nikolai Durov\u2019s whitepaper: ",(0,r.kt)("a",{parentName:"p",href:"https://ton.org/tvm.pdf"},"https://ton.org/tvm.pdf")),(0,r.kt)("p",null,"What do you need to know about VM? It is just a virtual stacking machine, so when using it we are working with\ninformation that is on the stack. (Operations that occur there are of the following sort: Combine the two topmost\nnumbers in the stack, or swap the 2nd position in the stack with the 10th). What is important:"),(0,r.kt)("h2",{id:"the-tvm-code-is-standard-data"},"The TVM code is standard data"),(0,r.kt)("p",null,"The code is simply stored on the chain and can be shared via messages and rewritten. There is a  ",(0,r.kt)("inlineCode",{parentName:"p"},"tvm.setcode(code)"),"\noperation the will change your contract code for your subsequent transactions and even a ",(0,r.kt)("inlineCode",{parentName:"p"},"tvm.setCurrentCode(code)"),'\noperation that will apply the new code to the current transaction you are making. There are nuances to consider when\nupdating a contract, for more on that see the "How to upgrade contracts" section of this tutorial.'),(0,r.kt)("h2",{id:"messages-and-funds"},"Messages and funds"),(0,r.kt)("p",null,"In an asynchronous architecture, all communication between contracts occurs through sending messages."),(0,r.kt)("p",null,"The sequence is something like this (I am not going to delve into the questions of how exactly messages are delivered\nhere, there will be a separate chapter in the appendices that cover this):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The contract receives an ",(0,r.kt)("em",{parentName:"li"},"external message")," from the outside world, and if the contract agrees to pay for it, a\ntransaction is launched. As a result of the transaction launching, the contract can create any number of outgoing\ninternal messages. The outgoing message contains the address of the destination contract, the function that should be\ncalled there and what arguments are attached."),(0,r.kt)("li",{parentName:"ol"},"The destination contract receives an incoming internal message, and a transaction is started, as a result of which\noutgoing internal messages can be created.")),(0,r.kt)("p",null,"External messages are simple. 10k of gas credit are allocated to external messages and if a contract does not agree to\nsupply the gas to pay for the transaction, then the message will simply be discarded and the transaction will not start.\nBut with internal messages, everything is more complicated. When a contract receives an internal message, a transaction\nis started. Logically, in most cases the calling contract should pay for the gas for this transaction type, and not the\ncalled contract. But at the same time, it is obvious that the calling contract must control exactly how much gas it is\nwilling to pay. What further complicates things is that contracts can find themselves in different shards, and one shard\ncannot spend the money of another shard. Therefore, in ES, all outgoing messages are appended with value ( ever-s ).\nWhen a contract receives a message, the gas is paid out of the money attached to this message, and if the money in the\nmessage runs out and the contract does not want to continue paying, then the transaction will run out of gas. If, after\nthe transaction is completed, there is money left in the message, then it will be added to the contract\u2019s account (or\nthe contract can send the change back). All internal messages have to carry some amount of money with them. Even if the\ncontract agrees to pay for the message, the message must have enough coins to pay for the download of the contract and\nthe initial checks (until it gets to ",(0,r.kt)("inlineCode",{parentName:"p"},"tvm.accept()"),")."),(0,r.kt)("p",null,"When you create a message, you have to show a flag which will determine where the money that gets attached to the\nmessage will come from and how the creation of the message will be paid for. The money can come from the contract\naccount or be taken from money left over on the incoming message after the gas deduction."),(0,r.kt)("p",null,"From this document ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler"},"https://github.com/tonlabs/TON-Solidity-Compiler")," :"),(0,r.kt)("p",null,"Regular money transfer:"),(0,r.kt)("p",null,"value \u2014 this is the amount of money you want to transfer. (Essentially, this is just the amount of EVER we attach to an\ninternal message and it doesn\u2019t matter that this is a regular money transfer or a call of some kind of method of a smart\ncontract.)\nbounce \u2014 this is a flag that indicates whether we need to try to create a return message should an error occur during\nthe processing of the message or there is no contract deployed on the destination address. By default, the flag will be\ntrue. If it is false, then, if there is an error, the money will just remain on the address. flag \u2014 flags indicate how,\nfrom where and how much money is sent with a message. Read the description from the document below and I will provide\nfurther explanation."),(0,r.kt)("h3",{id:"excerpt-from-the--ton-solidity-compiler-documentation"},"Excerpt from the  TON Solidity compiler documentation:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Possible values of parameter\xa0flag: @"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"0"),"\xa0- message carries funds equal to the\xa0value\xa0parameter. Forward fee is subtracted from the\xa0value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"128"),"\xa0- message carries all the remaining balance of the current smart contract. Parameter\xa0value\xa0is ignored. The contract's balance will be equal to zero after the message processing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"64"),"\xa0- carries funds equal to the\xa0value\xa0parameter plus all the remaining value of the inbound message (that initiated the contract execution).\nParameter\xa0flag\xa0can also be modified:"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"flag + 1"),"\xa0- means that the sender wants to pay transfer fees separately from contract's balance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"flag + 2"),"\xa0- means that any errors arising while processing this message during the action phase should be ignored. But if the message has wrong format, then the transaction fails and\xa0+ 2\xa0has no effect."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"flag + 32"),"\xa0- means that the current account must be destroyed if its resulting balance is zero. For example,\xa0flag: 128 + 32\xa0is used to send all balance and destroy the contract."))),(0,r.kt)("p",null,"When messages are created, two things occur: payment for the creation of the actual message (payment for validators so\nthat they deliver the message), and payment of the value (funds) which will be attached to the message."),(0,r.kt)("p",null,"In most cases you will use the following flags: 0, 1, and 64."),(0,r.kt)("p",null,"0 and 1 you will use primarily when you start the transaction sequence yourself:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"0 \u2014 this flag communicates that the creation of the message will be paid from the value that you attached to the\nmessage, meaning that a little less than the total value you attached will be sent. The value itself will be paid from\nthe account of the contract (all of the money remaining with the message will be added to the account).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"1 \u2014 the same thing as with 0, only the creation of the message will be paid from the contract account separately and\nthe total amount attached to the message will be sent with it.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"64 \u2014 This flag is used when processing an incoming internal message (when another contract calls you). You will most\noften use this flag with the value: 0. This indicates that for an outgoing message you have to attach the entire value\nthat came with the incoming message, minus the spent gas. The creation of the outgoing message itself will also be\npaid for with the incoming money. This is a very important concept, in this paradigm other contracts do not spend\nmoney from your contract on calls. Below I will demonstrate a few simple examples."))),(0,r.kt)("p",null,"Here are some examples of using flags. Contract A gets an Ext message from its owner and begins a message sequence,\ncalling B and attaching 0.5 EVER to the message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"// Contract A\nfunction updateOwnerOnChildren(\n    address children,\n    uint256 new_pubkey\n) external {\n    require(msg.pubkey() == tvm.pubkey(), AErrors.error_message_sender_is_not_my_owner);\n    tvm.accept();\n    \n    // On the IB interface we call the setNewOnwer function\n    // By default the flag will be 0, we don't have to change it.\n    // So we send 0.5 ever and pay for the creation of the message \n    // from these 0.5 ever\n    IB(children).setNewOnwer{value : 0.5 ever}(new_pubkey);\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"// Contract B\nfunction setNewOnwer(\n    uint256 new_pubkey\n) external {\n    require(msg.sender == myRoot, BErrors.error_message_sender_is_not_my_root);\n\n    // Here we won't call tvm.accept() because we don't want \n    // the incoming message to be able to spend money on the smart contract account. \n    tvm.setPubkey(new_pubkey);\n\n    // We send the rest of the remaining value back to the sender.\n    // value - 0, bounce - false, flag - 64\n    msg.sender.transfer(0, false, 64);\n}\n")),(0,r.kt)("p",null,"This is the basic pattern according to which ES works. Even though the price of gas doesn\u2019t fluctuate, we don\u2019t\ncalculate down to the penny the exact amount you need to send to the contract so that you will have enough to cover the\ntransaction. We just send a a decent amount and then send the remainder back.  (We know that what we send will cover the\nfees because the price of gas won\u2019t rise). Doing this, we can create long chains, by putting the contract address that\ninitiated the whole chain in the call arguments and then returning the change to that address at the end."),(0,r.kt)("h3",{id:"boc-now-for-the-hard-part--"},"BoC. Now for the hard part :-)"),(0,r.kt)("p",null,"All data in ES is stored and sent in a structure called the BoC (Bag of cell). This is a confusing structure invented by\nNikolai Durov, and it\u2019s not very clear whether it was necessary in order to create the blockchain, or Nikolai\nover-engineered here. In general, all data stored in the contract (not the code, the code is separate, but also the BoC\nis stored in the contract :-)) is stored in one BoC, this is a given cell (TVMCell) with links to subcells. The TVMCell\nis a structure that has 1023 Bits of data and 4 references to its child cells. A cell reference is the HASH of that\ncell. With ES have have a singly connected graph, where each node can have 4 descendants. And we need to pack all smart\ncontract data or messages into a cell with sub cells. Thank God, by using Ton Solidty and knowing the interfaces of\ncontracts, you don\u2019t have to manually pack and unpack cells. The compiler will do everything for you. However, there are\nrare cases when you will have to do it yourself. In order to do this, there are special primitives in Solidity. When\nthis is necessary, you simply declare state variables in Solidity and read and write to them as usual. The compiler will\npack and unpack everything in the BoC for you."),(0,r.kt)("p",null,"Some BoC properties to understand. BoC is an acyclic graph. The link to a cell c is a hash of its data and its hash\nlinks to subcells. So we cannot create a cycle. (Because if we add a link from the parent cell to the child cell, then,\nby doing so, we recalculate all hashes from the changed cell to the root cell and the link to the parent cell changes).\nThe entire state of the contract is BoC. This is one cell with as many child cells as you like. Ton Solidity takes care\nof work with states for us, but you need to understand that, because of ES\u2019s tree structure, we normally don\u2019t write\ncontracts with a lot of data. In order to illustrate how it works, consider (schematically) how a dictionary could be\nimplemented in BoC."),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAKygvYfEJin9LJ0sC50epqmfoU3YqhBIqWhApo_HqkAoKp1Io4bDAx46YeA4VL8Jqu32POavfQaAQVb52iOm6QUYnBpa3B0MGuGMh7gCS4iP0gKSKlDIWEu20000",alt:null}),(0,r.kt)("p",null,"Each circle in the picture is a separate cell. To get the value by key 2, TVM needs to load a cell of depth 0, then depth 1 and then depth 2. We have to pay gas for each time a cell is loaded. And if we change the value by key two, we will need to recalculate all references from the cell with the value of the root cell because the cell reference is a hash (cell.data + cell.refs)."),(0,r.kt)("p",null,"So, links to all cells along the way will change and we will need to change them from bottom to top. So, the more elements our dictionary has, the deeper the cell will be and the more expensive it will be to work with. For a dictionary, the cost of gas will increase to O(log n) in a worst case scenario. (In reality, everything would be more complicated but O (log n) can be useful to look at as a worst case scenario)."),(0,r.kt)("p",null,"Now, if we are creating an ERC20 token, then the more owners this token has, the more expensive the gas will be to use this contract (the size of the owner-number map will grow). And although O(Log n) doesn\u2019t sound scary at all, and the cost of working with the map will increase very, very slowly after the first hundred elements, and then even slower after that, in ES there we have a storage fee that grows linearly."),(0,r.kt)("p",null,"If you have accounts in your ERC-20 token that contain pennies, then the fees for holding these accounts will greatly exceed the value of these accounts over the years. Therefore, in ES it is customary to make separate contracts for separate accounts, which themselves pay for their storage. We will look at how the ",(0,r.kt)("a",{parentName:"p",href:"../../standard/TIP-3"},"TIP-3")," standard (a distributed replacement for ERC-20) works in the next chapter."),(0,r.kt)("p",null,"Fun fact: this entire overcomplicated data storage scheme helps to scale the network, so that the validator can quickly execute smart contracts. Validators do not need to store the entire current state of the blockchain in Ram, because loading the smart contract state from the disk will be fast, since all smart contracts are small. Additionally, since all contracts are small, they are evenly distributed across all shards."))}m.isMDXComponent=!0}}]);