"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[5607],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||s;return a?i.createElement(m,r(r({ref:t},u),{},{components:a})):i.createElement(m,r({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,r=new Array(s);r[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,r[1]=o;for(var c=2;c<s;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6147:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=a(7462),n=(a(7294),a(3905));const s={sidebar_position:2},r="Multisig",o={unversionedId:"ecosystem/explore/institutionals/multisig",id:"ecosystem/explore/institutionals/multisig",title:"Multisig",description:"What is multisignature wallet?",source:"@site/../../src/ecosystem/explore/institutionals/multisig.md",sourceDirName:"ecosystem/explore/institutionals",slug:"/ecosystem/explore/institutionals/multisig",permalink:"/docs/PR-308/ecosystem/explore/institutionals/multisig",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/ecosystem/explore/institutionals/multisig.md",tags:[],version:"current",lastUpdatedAt:1666263254,formattedLastUpdatedAt:"Oct 20, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/PR-308/ecosystem/explore/institutionals/tutorial"},next:{title:"Projects",permalink:"/docs/PR-308/ecosystem/explore/projects"}},l={},c=[{value:"What is multisignature wallet?",id:"what-is-multisignature-wallet",level:2},{value:"Use cases for a multisignature wallet",id:"use-cases-for-a-multisignature-wallet",level:2},{value:"Increasing security",id:"increasing-security",level:3},{value:"Two-factor authentication",id:"two-factor-authentication",level:3},{value:"Escrow transactions",id:"escrow-transactions",level:3},{value:"Decision making",id:"decision-making",level:3},{value:"Everscale multisignature wallets",id:"everscale-multisignature-wallets",level:2},{value:"EVERSPACE",id:"everspace",level:3},{value:"EVER Wallet",id:"ever-wallet",level:3},{value:"Ever Sufr",id:"ever-sufr",level:3}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"multisig"},"Multisig"),(0,n.kt)("h2",{id:"what-is-multisignature-wallet"},"What is multisignature wallet?"),(0,n.kt)("p",null,"As a simple analogy, we can imagine a secure deposit box that has two locks and two keys.",(0,n.kt)("br",{parentName:"p"}),"\n","One key is held by Alice and the other one is held by Bob.",(0,n.kt)("br",{parentName:"p"}),"\n","The only way they can open the box is by providing their both keys at the same time, so one cannot open the box without the consent of the other."),(0,n.kt)("p",null,"Basically speaking, the funds stored on a multi-signature address can only be accessed by using 2 or more signatures.",(0,n.kt)("br",{parentName:"p"}),"\n","Therefore, the use of a multisig wallet enables users to create an additional layer of security to their funds.  "),(0,n.kt)("h2",{id:"use-cases-for-a-multisignature-wallet"},"Use cases for a multisignature wallet"),(0,n.kt)("h3",{id:"increasing-security"},"Increasing security"),(0,n.kt)("p",null,"By using a multisig wallet, users are able to prevent the problems caused by the loss or theft of a private key. So even if one of the keys is compromised, the funds are still safe."),(0,n.kt)("p",null,"Imagine that Alice creates a 2-of-3 multisig address and then stores each private key into a different place or device (e.g. mobile phone, laptop, and tablet).",(0,n.kt)("br",{parentName:"p"}),"\n","Even if her mobile device is stolen, the thief won\u2019t be able to access her funds using only 1 of the 3 keys. Similarly, phishing attacks and malware infections are less likely to succeed because the hacker would most likely have access to a single device and key."),(0,n.kt)("p",null,"Malicious attacks aside, if Alice loses one of her private keys, she can still access her funds using the other 2 keys."),(0,n.kt)("h3",{id:"two-factor-authentication"},"Two-factor authentication"),(0,n.kt)("p",null,"By creating a multisig wallet that requires two keys, Alice is able to create a two-factor authentication mechanism to access her funds. For instance, she could have one private key stored in her laptop and the other one in her mobile device (or even on a piece of paper). This would ensure that only someone who has access to both keys is able to make a transaction.  "),(0,n.kt)("p",null,"Keep in mind, however, that using multisig technology as two-factor authentication can be dangerous \u2013 especially if it is set as a 2-of-2 multisig address. If one of the keys are lost, you won\u2019t be able to access your funds."),(0,n.kt)("h3",{id:"escrow-transactions"},"Escrow transactions"),(0,n.kt)("p",null,"Creating a 2-of-3 multisig wallet can allow for an escrow transaction between two parties (Alice and Bob) that includes a third party (Charlie) as a mutually trusted arbiter in case anything goes wrong."),(0,n.kt)("p",null,"Charlie, the arbiter, would only need to step in if there was a dispute, at which point he could use his key to create a signature that would be provided to either Alice or Bob, according to Charlie\u2019s judgment."),(0,n.kt)("h3",{id:"decision-making"},"Decision making"),(0,n.kt)("p",null,"A board of directors might use a multisig wallet to control access to a company\u2019s funds. For example, by setting up a 4-of-6 wallet where each board member holds one key, no individual board member is able to misuse the funds. Therefore, only decisions that are agreed upon by the majority can be executed."),(0,n.kt)("h2",{id:"everscale-multisignature-wallets"},"Everscale multisignature wallets"),(0,n.kt)("p",null,"Let's move on to choosing a multi-signature wallet."),(0,n.kt)("h3",{id:"everspace"},"EVERSPACE"),(0,n.kt)("p",null,"Native wallet for iOS and Android from ByteHub and ITGold teams. "),(0,n.kt)("p",null,"Very good design. Fast and responsive interface. Support for most types of multisig wallets. The ability to receive notifications of transactions for signature. Convenient transaction subscription mechanism."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://everspace.app/deeplink"},"Download link")),(0,n.kt)("h3",{id:"ever-wallet"},"EVER Wallet"),(0,n.kt)("p",null,"Everscale native wallet created by the Broxus team.",(0,n.kt)("br",{parentName:"p"}),"\n","Access on IOS, Android and as a Google Chrome browser extension."),(0,n.kt)("p",null,"It has several types of multisignature wallets, including those with the ability to add new custodians."),(0,n.kt)("p",null,"A distinctive feature of the wallet is the ability to connect it with Everscale's most popular ",(0,n.kt)("a",{parentName:"p",href:"/docs/PR-308/ecosystem/explore/projects"},"DeFi products"),": FlatQube (DEX), Octus Bridge, Everstart (launchpad), etc."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://l1.broxus.com"},"Download link")),(0,n.kt)("h3",{id:"ever-sufr"},"Ever Sufr"),(0,n.kt)("p",null,"One of the most popular Everscale wallets.",(0,n.kt)("br",{parentName:"p"}),"\n","Available on IOS, Android, Windows and MacOS."),(0,n.kt)("p",null,"Provides the ability to create a multisig wallet and add up to 32 custodians."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://ever.surf/download/"},"Download link")))}d.isMDXComponent=!0}}]);