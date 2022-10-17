"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1478],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9779:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),o=["components"],s={sidebar_position:2},l="Multisig",u={unversionedId:"community/explore/institutionals/multisig",id:"community/explore/institutionals/multisig",title:"Multisig",description:"What is multisignature wallet?",source:"@site/../../src/community/explore/institutionals/multisig.md",sourceDirName:"community/explore/institutionals",slug:"/community/explore/institutionals/multisig",permalink:"/docs/PR-289/community/explore/institutionals/multisig",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/community/explore/institutionals/multisig.md",tags:[],version:"current",lastUpdatedAt:1665926171,formattedLastUpdatedAt:"Oct 16, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/PR-289/community/explore/institutionals/tutorial"},next:{title:"Ecosystem",permalink:"/docs/PR-289/community/explore/ecosystem"}},c={},d=[{value:"What is multisignature wallet?",id:"what-is-multisignature-wallet",level:2},{value:"Use cases for a multisignature wallet",id:"use-cases-for-a-multisignature-wallet",level:2},{value:"Increasing security",id:"increasing-security",level:3},{value:"Two-factor authentication",id:"two-factor-authentication",level:3},{value:"Escrow transactions",id:"escrow-transactions",level:3},{value:"Decision making",id:"decision-making",level:3},{value:"Everscale multisignature wallets",id:"everscale-multisignature-wallets",level:2},{value:"EVERSPACE",id:"everspace",level:3},{value:"EVER Wallet",id:"ever-wallet",level:3},{value:"Ever Sufr",id:"ever-sufr",level:3}],p={toc:d};function m(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"multisig"},"Multisig"),(0,r.kt)("h2",{id:"what-is-multisignature-wallet"},"What is multisignature wallet?"),(0,r.kt)("p",null,"As a simple analogy, we can imagine a secure deposit box that has two locks and two keys.",(0,r.kt)("br",{parentName:"p"}),"\n","One key is held by Alice and the other one is held by Bob.",(0,r.kt)("br",{parentName:"p"}),"\n","The only way they can open the box is by providing their both keys at the same time, so one cannot open the box without the consent of the other."),(0,r.kt)("p",null,"Basically speaking, the funds stored on a multi-signature address can only be accessed by using 2 or more signatures.",(0,r.kt)("br",{parentName:"p"}),"\n","Therefore, the use of a multisig wallet enables users to create an additional layer of security to their funds.  "),(0,r.kt)("h2",{id:"use-cases-for-a-multisignature-wallet"},"Use cases for a multisignature wallet"),(0,r.kt)("h3",{id:"increasing-security"},"Increasing security"),(0,r.kt)("p",null,"By using a multisig wallet, users are able to prevent the problems caused by the loss or theft of a private key. So even if one of the keys is compromised, the funds are still safe."),(0,r.kt)("p",null,"Imagine that Alice creates a 2-of-3 multisig address and then stores each private key into a different place or device (e.g. mobile phone, laptop, and tablet).",(0,r.kt)("br",{parentName:"p"}),"\n","Even if her mobile device is stolen, the thief won\u2019t be able to access her funds using only 1 of the 3 keys. Similarly, phishing attacks and malware infections are less likely to succeed because the hacker would most likely have access to a single device and key."),(0,r.kt)("p",null,"Malicious attacks aside, if Alice loses one of her private keys, she can still access her funds using the other 2 keys."),(0,r.kt)("h3",{id:"two-factor-authentication"},"Two-factor authentication"),(0,r.kt)("p",null,"By creating a multisig wallet that requires two keys, Alice is able to create a two-factor authentication mechanism to access her funds. For instance, she could have one private key stored in her laptop and the other one in her mobile device (or even on a piece of paper). This would ensure that only someone who has access to both keys is able to make a transaction.  "),(0,r.kt)("p",null,"Keep in mind, however, that using multisig technology as two-factor authentication can be dangerous \u2013 especially if it is set as a 2-of-2 multisig address. If one of the keys are lost, you won\u2019t be able to access your funds."),(0,r.kt)("h3",{id:"escrow-transactions"},"Escrow transactions"),(0,r.kt)("p",null,"Creating a 2-of-3 multisig wallet can allow for an escrow transaction between two parties (Alice and Bob) that includes a third party (Charlie) as a mutually trusted arbiter in case anything goes wrong."),(0,r.kt)("p",null,"Charlie, the arbiter, would only need to step in if there was a dispute, at which point he could use his key to create a signature that would be provided to either Alice or Bob, according to Charlie\u2019s judgment."),(0,r.kt)("h3",{id:"decision-making"},"Decision making"),(0,r.kt)("p",null,"A board of directors might use a multisig wallet to control access to a company\u2019s funds. For example, by setting up a 4-of-6 wallet where each board member holds one key, no individual board member is able to misuse the funds. Therefore, only decisions that are agreed upon by the majority can be executed."),(0,r.kt)("h2",{id:"everscale-multisignature-wallets"},"Everscale multisignature wallets"),(0,r.kt)("p",null,"Let's move on to choosing a multi-signature wallet."),(0,r.kt)("h3",{id:"everspace"},"EVERSPACE"),(0,r.kt)("p",null,"Native wallet for iOS and Android from ByteHub and ITGold teams. "),(0,r.kt)("p",null,"Very good design. Fast and responsive interface. Support for most types of multisig wallets. The ability to receive notifications of transactions for signature. Convenient transaction subscription mechanism."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://everspace.app/deeplink"},"Download link")),(0,r.kt)("h3",{id:"ever-wallet"},"EVER Wallet"),(0,r.kt)("p",null,"Everscale native wallet created by the Broxus team.",(0,r.kt)("br",{parentName:"p"}),"\n","Access on IOS, Android and as a Google Chrome browser extension."),(0,r.kt)("p",null,"It has several types of multisignature wallets, including those with the ability to add new custodians."),(0,r.kt)("p",null,"A distinctive feature of the wallet is the ability to connect it with Everscale's most popular ",(0,r.kt)("a",{parentName:"p",href:"/docs/PR-289/community/explore/ecosystem"},"DeFi products"),": FlatQube (DEX), Octus Bridge, Everstart (launchpad), etc."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://l1.broxus.com"},"Download link")),(0,r.kt)("h3",{id:"ever-sufr"},"Ever Sufr"),(0,r.kt)("p",null,"One of the most popular Everscale wallets.",(0,r.kt)("br",{parentName:"p"}),"\n","Available on IOS, Android, Windows and MacOS."),(0,r.kt)("p",null,"Provides the ability to create a multisig wallet and add up to 32 custodians."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ever.surf/download/"},"Download link")))}m.isMDXComponent=!0}}]);