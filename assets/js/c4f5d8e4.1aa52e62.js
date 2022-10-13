(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[4195],{2201:function(e){e.exports=[{title:"About",items:[{label:"Event Calendar",href:"https://everscale-org.github.io/Calendar/"},{label:"Jobs and Vacancy",href:"https://github.com/everscale-org/job/issues"},{label:"White Paper",href:"https://mitja.gitbook.io/everscale-white-paper/"},{label:"Lite Paper",href:"https://mitja.gitbook.io/everscale-lite-paper/"},{label:"Weekly Meetup",href:"https://www.youtube.com/c/Everscale_community/search?query=Weekly%20Meetup"},{label:"Visual Brand Identity",href:"https://gramkit.org/en/branding"},{label:"Subgovernances",href:"https://gov.gramkit.org/"}]},{title:"Community",items:[{label:"Grants",href:"https://everscale.network/developers/grants"},{label:"Bounties",href:"https://github.com/EverscaleGuild/bounties/issues"},{label:"Smart Contracts Chat",href:"https://t.me/EverscaleSmartContracts"},{label:"Everscale Validators Channel",href:"https://t.me/ever_validators"},{label:"Incubator Chat",href:"https://t.me/EverscaleIncubator"},{label:"DeBots Chat",href:"https://t.me/everscaledebots"},{label:"SDK Chat",href:"https://t.me/ever_sdk"},{label:"Stack Overflow",href:"https://stackoverflow.com/questions/tagged/everscale"}]},{title:"Workshop",items:[{label:"EverDev Tutorial",to:"/develop/tutorial/everdev-sc/"},{label:"Smart contract architecture",href:"https://youtu.be/XKMnroPWXek"},{label:"Smart contract development",href:"https://youtu.be/YBIaFeaksMY"},{label:"Developer Course",href:"https://www.youtube.com/playlist?list=PLPj4C8ti8UaSPAP6afsy0wQ53lihBT5l1"},{label:"Development of DeBots",href:"https://youtu.be/vFAatJO6cBM"},{label:"Voice Chat",href:"https://t.me/EverVoice"}]},{title:"More",items:[{label:"Sample smart-contracts",href:"https://github.com/tonlabs/samples"},{label:"Sample SDK",href:"https://github.com/tonlabs/sdk-samples"},{label:"JS Application Kit",href:"https://tonlabs.gitbook.io/appkit-js/"},{label:"Solidity API",href:"https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md"},{label:"ABI Specification",href:"/arch/abi/"},{label:"NFT",href:"https://github.com/tonlabs/True-NFT"},{label:"CLI",href:"https://github.com/tonlabs/tonos-cli"},{label:"SDK",href:"https://tonlabs.gitbook.io/ton-sdk/"}]}]},9420:function(e,t,a){e.exports={main:a(7347),redirect:a(192),footer:a(2201),navbar:a(3567)}},7347:function(e){e.exports={first:[{title:"Welcome to Everscale!",link:"/gs/welcome/"}],feature:[{title:"\ud83e\uddf0 Start Building",description:"Get started building scalable and decentralized App",link:"/develop/"},{title:"\ud83c\udfd7\ufe0f Learn Everscale Architecture",description:"Get a high-level understanding of Everscale architecture",link:"/arch/"},{title:"\ud83e\ude99 Learn Everscale Standards (TIPs)",description:"Description of the Everscale blockchain standards like ERC-20, ERC-721 etc",link:"/standard/"},{title:"\ud83e\uddd1\u200d\ud83d\udcbb Integrate Network or Token",description:"Follow our extensive integration guides to ensure a seamless user experience",link:"/develop/integrate/"},{title:"\ud83d\uddf3\ufe0f Run a Validator Node",description:"Validate transactions, secure the network, and earn rewards",link:"/validate/"},{title:"\ud83c\udf93 Understand and use cases",description:"Get familiar with the terminology and core concepts of Everscale",link:"/concept/overview/"}]}},3567:function(e){e.exports=[{label:"Getting Started",to:"/gs/"},{label:"Concept",to:"/concept/"},{label:"Build",to:"/develop/"},{label:"Validate",to:"/validate/"},{label:"Community",to:"/community/"},{label:"Changelog",to:"/changelog/"},{label:"Blog",href:"https://blog.everscale.network/",position:"right"},{label:"Status",href:"https://everos.dev/status",position:"right"},{href:"https://github.com/everscale-org/docs/",label:"GitHub",position:"right"}]},192:function(e){e.exports={redirects:[{to:"/community/explore/wallets",from:"/learn/everscale-overview/exchangewallets"},{to:"/develop/tools/everdev/command-line-interface/cpp",from:"/develop/tools/everdev/command-line-interface/c"}],createRedirects:function(e){if(e.includes("/develop/tools"))return[e.replace("/develop/tools","/develop/api-tools")]}}},2198:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var l=a(7294);function r(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}function o(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(l&&(l+=" "),l+=t);return l}var s=a(440),i=a(9960),n=a(2263),c="heroBanner_qdFl",h="buttons_AeoN",u=a(3117),m="features_xdhU",p="feature_eSJM",d=a(9420);function b(e){var t=e.title,a=e.description,r=e.link;return l.createElement("div",{className:o("col col--4",p)},l.createElement(i.Z,{className:"navbar__link",to:r},l.createElement("div",{className:"card"},l.createElement("div",{className:"card__header"},l.createElement("h3",null,t)),l.createElement("div",{className:"card__body"},l.createElement("p",null,a)))))}function f(){return l.createElement("section",{className:m},l.createElement("div",{className:"container"},l.createElement("div",{className:"row cards__container"},d.main.feature.map((function(e,t){return l.createElement(b,(0,u.Z)({key:t},e))})))))}function v(){var e=(0,n.Z)().siteConfig;return l.createElement("header",{className:o("hero hero--primary",c)},l.createElement("div",{className:"container"},l.createElement("h1",{className:"hero__title"},e.title),l.createElement("p",{className:"hero__subtitle"},e.tagline),d.main.first.map((function(e,t){return l.createElement("div",{className:h},l.createElement(i.Z,{className:"button button--secondary button--lg",to:e.link},e.title))}))))}function g(){var e=(0,n.Z)().siteConfig;return l.createElement(s.Z,{title:""+e.title,description:"Required development information for Everscale system"},l.createElement(v,null),l.createElement("main",null,l.createElement(f,null)))}}}]);