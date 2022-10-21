"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[9983],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),h=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=h(a),m=r,p=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return a?o.createElement(p,s(s({ref:t},c),{},{components:a})):o.createElement(p,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var h=2;h<n;h++)s[h]=a[h];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2505:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return h},toc:function(){return d}});var o=a(3117),r=a(102),n=(a(7294),a(3905)),s=["components"],i={sidebar_position:0},l="Comparison with Ethereum",h={unversionedId:"develop/from-another-platform/comparison-with-ethereum",id:"develop/from-another-platform/comparison-with-ethereum",title:"Comparison with Ethereum",description:"Is Everscale Eth 2.0? No, it is not. The Everscale is Eth 2.0, which Eth 1.0 should have been, but probably will never be due to its legacy issues.",source:"@site/../../src/develop/from-another-platform/comparison-with-ethereum.md",sourceDirName:"develop/from-another-platform",slug:"/develop/from-another-platform/comparison-with-ethereum",permalink:"/docs/PR-296/develop/from-another-platform/comparison-with-ethereum",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/from-another-platform/comparison-with-ethereum.md",tags:[],version:"current",lastUpdatedAt:1666367166,formattedLastUpdatedAt:"Oct 21, 2022",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"From another platform",permalink:"/docs/PR-296/develop/from-another-platform"},next:{title:"Build the Web Frontend",permalink:"/docs/PR-296/develop/web-frontend"}},c={},d=[{value:"Sharding",id:"sharding",level:2},{value:"How it actually works",id:"how-it-actually-works",level:3},{value:"Sharding in Everscale is not merely data sharding, but computation resources sharding",id:"sharding-in-everscale-is-not-merely-data-sharding-but-computation-resources-sharding",level:3},{value:"Large amount of data and its long tail issue",id:"large-amount-of-data-and-its-long-tail-issue",level:2},{value:"Distributed programming",id:"distributed-programming",level:2},{value:"References",id:"references",level:2}],u={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"comparison-with-ethereum"},"Comparison with Ethereum"),(0,n.kt)("p",null,"Is Everscale Eth 2.0? No, it is not. The Everscale is Eth 2.0, which Eth 1.0 should have been, but probably will never be due to its legacy issues.\xa0"),(0,n.kt)("p",null,"This article aims to show and explain that the Everscale blockchain is exactly what Eth 2.0 should have been."),(0,n.kt)("p",null,"Ethereum is a great blockchain network that gave birth to smart contracts, which, in turn, opened the world of decentralized applications. Unfortunately, it became hostage to it's own success. Namely, despite the fact that it was a revolution at the time of its inception, it subsequently went on a path of slow evolution, considerably hindering its advancement."),(0,n.kt)("p",null,"Everscale, on the other hand, due to it's later arrival and the time lag associated with it, was able to assess the mistakes made on the Ethereum network. Therefore, having this expert take, developers put the right decisions into Everscale blockchain architecture. This was possible, among others, due to the fact that, unlike many other blockchains, Everscale has never attempted to reduce costs for blockchain development."),(0,n.kt)("p",null,"In this article we discuss several issues associated with the Ethereum network and the solutions developed by Everscale in order to solve them.\xa0"),(0,n.kt)("h2",{id:"sharding"},"Sharding"),(0,n.kt)("p",null,"From the very beginning, Eth 2.0 planned to develop a genuine sharding, with cross-shared transactions and with hundreds of shards. Later, the number of shards was reduced to 32, and now this idea was completely abandoned (at least for the near future). Instead, the decision was made in favour of rollups."),(0,n.kt)("p",null,"The arguments explaining why rollups are not the right solution due to their centralisation and low security are a topic for a separate article. Generally speaking, they are no more than different networks, that rely on some security measures from L1. They are also extremely inconvenient for users."),(0,n.kt)("p",null,"It is very difficult to implement normal sharding in the Ethereum network due to its inherent synchronous architecture. As well, it is very difficult to make synchronous cross-chain transactions, and absolutely impossible to make it so that there is a large throughput. And if each shard exists independently, then this is not much better than rollups are."),(0,n.kt)("p",null,"In Everscale, the asynchronous architecture was envisioned from the very scratch. All contracts communicate with each other by sending messages. Therefore, all that is needed for sharding to work is to synchronize the message queues between shards. At the same time, since Everscale was developed by blockchain maximalists, they went even further. To be specific, they developed not just sharding itself, but endless sharding."),(0,n.kt)("h3",{id:"how-it-actually-works"},"How it actually works"),(0,n.kt)("p",null,"There are two global shards called workchains:"),(0,n.kt)("p",null,"Master-workchain for synchronization and governance, and the main workchain for smart contracts.\xa0"),(0,n.kt)("p",null,"The main workchain is partitioned into N shards, at least 16. Each shard has its own group of validators. This sub-group is responsible for executing transactions in its shard. At the same time, it constantly downloads blocks from all other shards of its workchain.\xa0"),(0,n.kt)("p",null,"A block in Everscale is not just a list of transactions that need to be completed in order to achieve changes in the state. Instead, a block is:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A list of messages for which we executed transactions and subsequently removed them from the incoming queue.\xa0"),(0,n.kt)("li",{parentName:"ul"},"New messages that entered the outgoing queue after message processing. "),(0,n.kt)("li",{parentName:"ul"},"Changes in smart contract states that resulted from message processing.")),(0,n.kt)("p",null,"That is, in order for the validator from shard X to maintain the current state of shard Y, it does not need to execute all the transactions that were in the block of shard Y. It simply downloads the block and rolls up the changes that have occurred in the message queue and smart contract states."),(0,n.kt)("h3",{id:"sharding-in-everscale-is-not-merely-data-sharding-but-computation-resources-sharding"},"Sharding in Everscale is not merely data sharding, but computation resources sharding"),(0,n.kt)("p",null,"In case there are too many transactions in the last N block of some particular shard, then we simply divide this shard into two. This is done in accordance to the address range of smart contracts, with some transactions going to one shard, and some to the another. The resulting shards, in turn, can also be divided into two more. "),(0,n.kt)("p",null,"In order for this to work, Everscale also decided to abandon the idea of \u200b\u200b\u200b\u200bradical decentralization. The number of validators in the network will be in the number of thousands, not hundreds of thousands like on Ethereum network. These validators are professional players with big stakes and expensive servers. Currently, the validator requirements are: 48 CPUs, 128 RAM and 1TB SDD + 1 GB network bandwidth."),(0,n.kt)("p",null,"Having such sharding capabilities, Everscale achieves a huge network bandwidth. Importantly, this is accomplished without any damages to customer satisfaction. That is to say, the customer does not have to switch between shards himself, or constantly transfer his money from one rollup to another. "),(0,n.kt)("p",null,"It is important to mention that there is also a big security issue arising. To be specific, as the number of shards increases, there are fewer instruments to watch over each one of them. Therefore, in the event of a high block mining rate, that may lead to the collusion of the validators of a single shard. This, in turn, could end with someone creating the original message that carries the money not belonging to the originator of the contract."),(0,n.kt)("p",null,"A new consensus mechanism that is currently under development answers this question."),(0,n.kt)("p",null,"The main idea is that due to the fact that in Everscale, validators only share computation among themselves, and everyone always has data for all shards, each issued block can be validated independently."),(0,n.kt)("p",null,"In general terms, it looks like this: (this describes the principle, not the exact algorithm): "),(0,n.kt)("p",null,"Each validator comes up with a random number and sends its hash to the other validators."),(0,n.kt)("p",null,"After all shards have created a block, but before the rest of the shards accept it, all validators must take the hash of this block, mix it with a random number, and if the remainder of dividing the resulting\nnumber by N is zero, then the validator must check this block, and send validators of -1 governance shard-chain a \u201cyes\u201d or \u201cno\u201d. "),(0,n.kt)("p",null,"If there is at least one not, then the check of this block by the rest of the validators starts. In the case of an invalid block, not only the validators who created this block will be terminated, but also those who said \u201cyes\u201d or remained silent."),(0,n.kt)("p",null,"Before creating the next block, everyone reveals their guessed number and guesses a new one. "),(0,n.kt)("p",null,"Thus, shard validators never know who and how many other validators will validate their block. It is a very nice and elegant solution."),(0,n.kt)("h2",{id:"large-amount-of-data-and-its-long-tail-issue"},"Large amount of data and its long tail issue"),(0,n.kt)("p",null,"The original idea of \u200b\u200bthe blockchain was that there is a chain of blocks from the very beginning (genesis) to the latest block. And there is always the possibility to synchronize from the genesis block to the latest one, to check that everything runs well.\xa0"),(0,n.kt)("p",null,"Already for a long time on the Ethereum network, full-nodes begin to synchronize with some kind of snapshot from the recent past, and not from the genesis block.\xa0"),(0,n.kt)("p",null,"Many Ethereum maximalists are still not ready to accept the fact that the idea of storing the entire history of blocks from scratch was wrong. They believe that the history of blocks will be stored forever, and, with this, they will come up with some kind of special protocols so that you can always check some particular piece of information from history."),(0,n.kt)("p",null,"However, it can be argued that even the Ethereum team has abandoned this idea. In the roadmap of Ethereum 2.0, there is the section called \u201cHistory expiry\u201d stating that full-nodes should not store the history of blocks for more than a year."),(0,n.kt)("p",null,"The history of blocks is critically important for rollups. That is, if a rollup operator disappears, then you need the entire history of its transactions on the blockchain in order to withdraw your money from it, on L1. This is one of the reasons demonstrating why rollups are a questionable solution. Starting with Eth 2.0, we can now only say that the history of the blocks is probably stored at least somewhere.\xa0"),(0,n.kt)("p",null,"It is assumed that the history will be stored by blockchain explorers. The team is also thinking about some new techniques for storing history, but so far there are none."),(0,n.kt)("p",null,"There is also an understanding that we can only choose from one of the following two options: high throughput or storage history."),(0,n.kt)("p",null,'To add, there is also a concept called "Log events". It was created to simplify the development of Web3 applications. However, due to the fact that full-nodes or blockchain providers (infura) are as well required to store an infinitely increasing amount of information, the requests to them are very slow. This, too, has already been de facto recognized as a mistake.'),(0,n.kt)("p",null,"\u201cToday, I would probably favour the eventual abolition of the LOG opcode from the EVM."),(0,n.kt)("p",null,"However, due to the large number of applications already delivered by Ethereum, it will be difficult for them to refuse this concept."),(0,n.kt)("p",null,"But that's only half the problem. There is also the issue of blockchain state growth. If someone recorded something on the blockchain, at least once, for example, he bought a memcoin for 0.001. Then, even if the price of the memcoin goes to zero, the validators will still be required to store the information about\nyour purchase forever. That is, you pay for the record once, but it will be stored forever. And here comes the interesting economics - blockchains are forced to limit the rate of recording transactions artificially so that the size of the blockchain state does not grow faster than data storage becomes cheaper. As a result, users are forced to compete with each other for the right to record data on the blockchain via an auction, and subsequently, transaction fees are increasing all the time."),(0,n.kt)("p",null,"This issue has also been de facto acknowledged by the Ethereum team, so that they introduced \"State expiry\u201d in the Ethereum 2.0 roadmap. But of course they can't completely solve this problem without breaking backwards compatibility. So far, it is proposed to remove contracts from the state that have not been accessed for N years (for example, 10), with the possibility of recovery."),(0,n.kt)("p",null,"Some other blockchains also explore ways to solve this issue. For example, in Near blockchain, the smart contract must lock N tokens each time it registers new information in the state. The issuer of the smart contract can set the conditions on it, so that the user can delete his information and receive the tokens back. This is definitely only a half-measure. Not all issuers of smart contracts set this condition, and even those who do, do not think about the mechanism of how to return tokens in case the cost of transactions changes in the future. Other blockchains simply remove smart contracts with fewer N tokens on the balance from the state."),(0,n.kt)("p",null,"Everscale, as a leading blockchain developer, never looks for easy and uncostly ways to solve blockchain issues. Therefore, the highlighted problem was resolved with the maximum efficiency and accuracy possible. In the Everscale blockchain, each contract is required to pay rent for storing its data in the state. This rent corresponds to the size of the data. When the money runs out, the contract is deleted with the possibility of recovery, and then deleted completely.\xa0"),(0,n.kt)("p",null,"Thanks to this, Everscale achieves absolutely controlled behaviour, when each smart contract decides for itself how long it will exist. Users do not have to compete with each other for the right to record data, and we get a huge throughput in terms of the number of transactions."),(0,n.kt)("h2",{id:"distributed-programming"},"Distributed programming"),(0,n.kt)("p",null,"There is a reasonable question. Let's consider that we have a contract with a token, for example, USDT. Then, a user with a larger account balance is more motivated to pay for storage, than, respectively, the user with a lesser balance. This way, wouldn't there arise situations when some users will be obliged to pay for storage on behalf of others, so that their contract is not deleted?"),(0,n.kt)("p",null,"In order to solve this problem, another truly genius idea was invented, called distributing programming.\xa0"),(0,n.kt)("p",null,"In Everscale, for each entity, balance or even trading pair, its own small smart contract is deployed. The owner of the respective smart contract decides on his own for how long to store the data and pays only for that.\xa0"),(0,n.kt)("p",null,"The mechanism describing how this works in detail is quite difficult and can be read in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/PR-296/develop/smart-contracts/distributed-programming"},"following article"),"."),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://vitalik.ca/general/2022/03/29/road.html"},"vitalik.ca/general/2022/03/29/road.html(The de-complexification of sharding)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://mitja.gitbook.io/papers/v/everscale-white-paper/readme/chapter-two-ever-kernel-ek/smft-soft-majority-fault-tolerance-consensus"},"https://mitja.gitbook.io/papers/v/everscale-white-paper/readme/chapter-two-ever-kernel-ek/smft-soft-majority-fault-tolerance-consensus")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=b1m_PTVxD-s&t=2975s"},"https://www.youtube.com/watch?v=b1m_PTVxD-s&t=2975s\n")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://vitalik.ca/general/2021/05/23/scaling.html"},'https://vitalik.ca/general/2021/05/23/scaling.html , "History retrievability"')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://vitalik.ca/general/2022/03/29/road.html"},"https://vitalik.ca/general/2022/03/29/road.html"),"\n)"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://mnill.github.io/everscale-for-solidity-dev/distributed_programming"},"https://mnill.github.io/everscale-for-solidity-dev/distributed_programming")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://aerial-ulna-579.notion.site/7a01d6c8ba644701834b105af87d3863"},"https://aerial-ulna-579.notion.site/7a01d6c8ba644701834b105af87d3863"))))}m.isMDXComponent=!0}}]);