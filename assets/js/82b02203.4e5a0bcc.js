"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[4154],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return n?r.createElement(m,i(i({ref:t},h),{},{components:n})):r.createElement(m,i({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3835:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"Blockchain",description:"How the blockchain works",sidebar_position:2},l="How the blockchain works on the block and queue level",c={unversionedId:"learn/blockchain",id:"learn/blockchain",title:"Blockchain",description:"How the blockchain works",source:"@site/../../src/learn/45-blockchain.md",sourceDirName:"learn",slug:"/learn/blockchain",permalink:"/docs/learn/blockchain",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/learn/45-blockchain.md",tags:[],version:"current",lastUpdatedAt:1665698878,formattedLastUpdatedAt:"Oct 13, 2022",sidebarPosition:2,frontMatter:{title:"Blockchain",description:"How the blockchain works",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/learn/introduction"},next:{title:"Data structures",permalink:"/docs/learn/data-structures"}},h={},d=[],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-the-blockchain-works-on-the-block-and-queue-level"},"How the blockchain works on the block and queue level"),(0,o.kt)("p",null,"This note is just for a general understanding of how the blockchain works, it\u2019s not 100% accurate, we are waiting for a description from the writers of the node. This may change after a new consensus."),(0,o.kt)("p",null,"There is a workchain ",(0,o.kt)("inlineCode",{parentName:"p"},"-1"),", this is the master chain, it is validated by the validators with the largest stake."),(0,o.kt)("p",null,"Contracts can be deployed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"-1")," workchain, but it is more expensive, and it was made mainly for governorship. (Probably in the future there will be no user contracts)"),(0,o.kt)("p",null,"There is a workchain ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", where contracts are mostly located. More workchains will be launched in the future."),(0,o.kt)("p",null,"Workchains are further divided into Processing threads. There is a workchain parameter that indicates the minimum number of processing threads, and currently it is ",(0,o.kt)("inlineCode",{parentName:"p"},"16")," for a ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," workchain."),(0,o.kt)("p",null,"Thread processing is an interesting concept. In ES, only computation is shared between the validators of the same workchain, but they all have the same storage. Let\u2019s look at what that means and how it works."),(0,o.kt)("p",null,"For example, we have 160 validators for the 0 workchain. They are randomly divided into 16 groups of 10 validators, and each gets its own Processing thread. All workchain contracts are also divided into 16 groups, simply by address ranges. (0.00 - 0:08, 0:08 - 0.18, etc.)."),(0,o.kt)("p",null,"Each group of validators executes transactions only for their group of smart contracts, and releases blocks of their processing thread."),(0,o.kt)("p",null,"But at the same time, they are constantly downloading blocks of other processing threads in order to see their outgoing and incoming message queues. At the same time, blocks are not a list of transactions that need to be rolled up, but a list of incoming messages + a state delta. So, when you download a block of another processing thread, you do not have to do computation in order to update your state. You\u2019re just rolling state changes."),(0,o.kt)("p",null,"How roughly works:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The Masterchain generates block 1."),(0,o.kt)("li",{parentName:"ol"},"All threads download the last master block."),(0,o.kt)("li",{parentName:"ol"},"Threads create their own block and register it in the master block."),(0,o.kt)("li",{parentName:"ol"},"The masterchain generates block 2, which contains the hashes of all blocks of threads that have registered in it."),(0,o.kt)("li",{parentName:"ol"},"All threads download masterblock 2."),(0,o.kt)("li",{parentName:"ol"},"All threads look at the hashes of the registered blocks of other threads, and download them all."),(0,o.kt)("li",{parentName:"ol"},"All threads generate a block."),(0,o.kt)("li",{parentName:"ol"},"This process gets repeated.")),(0,o.kt)("p",null,"Message delivery guarantees also work in this way. When you create a message, it is placed on that thread\u2019s outgoing queue:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Thread A generates a message for the contract that is in thread B, and creates a block with a new outgoing message in the outgoing queue."),(0,o.kt)("li",{parentName:"ol"},"Thread A is registered in the master block."),(0,o.kt)("li",{parentName:"ol"},"The masterchain generates a block."),(0,o.kt)("li",{parentName:"ol"},"Thread B downloads the master block, and downloads the block of thread A registered there."),(0,o.kt)("li",{parentName:"ol"},"Thread B sees the message in thread A and imports it into its inbound queue. (When a message is imported, it is immediately executed (transaction starts) If there is not enough gas for a transaction in the current block, then the message is simply not imported, and waits for its turn in another block. At the same time, there is a message import order, so that validators will not be able to ignore it forever)."),(0,o.kt)("li",{parentName:"ol"},"Thread B creates a block with a message in the incoming queue, and registers with the master."),(0,o.kt)("li",{parentName:"ol"},"Thread A downloads the block in which it sees its message in thread B\u2019s incoming queue and removes the message from its outgoing queue since it was delivered successfully."),(0,o.kt)("li",{parentName:"ol"},"Generally, thread A generates a block, then registers it in the master block. Then thread B downloads it, sees that thread A has removed it from its outgoing queue, and deletes it from its incoming one.")),(0,o.kt)("p",null,"In fact, sharding in this blockchain is the sharding of computational resources. And the data is the same for everyone, with the expectation that all validators have gigabit channels, and we rest only on computation."),(0,o.kt)("p",null,"If some processing thread is heavily loaded with the last N blocks, then it will split into two, and new processing threads can also split in turn. Then when the load drops, they all merge."))}p.isMDXComponent=!0}}]);