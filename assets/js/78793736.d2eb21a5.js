"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[2894],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(r),p=o,f=u["".concat(c,".").concat(p)]||u[p]||v[p]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7581:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return v}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),a=["components"],d={sidebar_position:2},c="How to work with Devnet",l={unversionedId:"develop/tools/everdev/guides/work-with-devnet",id:"develop/tools/everdev/guides/work-with-devnet",title:"How to work with Devnet",description:"Working with DevNet is similar to working with SE except you usually don't have any predeployed giver in DevNet.",source:"@site/../../src/develop/tools/everdev/guides/work-with-devnet.md",sourceDirName:"develop/tools/everdev/guides",slug:"/develop/tools/everdev/guides/work-with-devnet",permalink:"/develop/tools/everdev/guides/work-with-devnet",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tools/everdev/guides/work-with-devnet.md",tags:[],version:"current",lastUpdatedAt:1660241980,formattedLastUpdatedAt:"Aug 11, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to work with contracts",permalink:"/develop/tools/everdev/guides/work-with-contracts"},next:{title:"How to create controller",permalink:"/develop/tools/everdev/guides/create-controller"}},s={},v=[{value:"Deploying your own Giver",id:"deploying-your-own-giver",level:2},{value:"Generate Giver keys",id:"generate-giver-keys",level:3},{value:"Compile Giver code",id:"compile-giver-code",level:3},{value:"Calculate Giver address",id:"calculate-giver-address",level:3},{value:"Sponsor Giver with public faucet",id:"sponsor-giver-with-public-faucet",level:3},{value:"Deploy Giver contract",id:"deploy-giver-contract",level:3},{value:"Configure everdev to use your Giver",id:"configure-everdev-to-use-your-giver",level:2},{value:"Testing your new Giver",id:"testing-your-new-giver",level:2}],u={toc:v};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-work-with-devnet"},"How to work with Devnet"),(0,i.kt)("p",null,"Working with DevNet is similar to working with SE except you usually don't have any predeployed giver in DevNet.",(0,i.kt)("br",{parentName:"p"}),"\n","So you need to fund your contracts manually or deploy your own giver, which you will be able to use the same way as in SE.",(0,i.kt)("br",{parentName:"p"}),"\n","Deploying your own giver can be useful, if you need to deploy many contracts or need to frequently redeploy and test contracts after subsequent modification."),(0,i.kt)("h2",{id:"deploying-your-own-giver"},"Deploying your own Giver"),(0,i.kt)("p",null,"In order to deploy the Giver, do the following steps, like for an ordinary contract:"),(0,i.kt)("h3",{id:"generate-giver-keys"},"Generate Giver keys"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ everdev signer generate devnet_giver_keys\n$ everdev s l\nSigner             Public Key\n-----------------  ----------------------------------------------------------------\ntest (Default)     de101cde5c94540926fe862e965cf109b1b803989e7048657cf7c4caaa2a257d\ndevnet_giver_keys  5a343ccbd62c15e3df1076bc34957ad2717469d84e4d6b3ef26112db80ac8e1b\n")),(0,i.kt)("h3",{id:"compile-giver-code"},"Compile Giver code"),(0,i.kt)("p",null,"You can find compiled giver v2 contract with code ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/evernode-se/tree/master/contracts/giver_v2"},"here"),". You need to recompile code only if you want to change its code, so you can use compiled ",(0,i.kt)("inlineCode",{parentName:"p"},"GiverV2.tvc")," file and move to the next step."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Attention!"),"\nThe code in repo is not compatible with the latest Solidity compilers, so if you would like to compile it yourself, you would need to migrate code to the latest Solidity version first."),(0,i.kt)("p",null,"After modifying code, compile it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ everdev sol compile GiverV2.sol\n")),(0,i.kt)("p",null,"In a case of success, compiler will generate two files: compiled code (",(0,i.kt)("inlineCode",{parentName:"p"},"GiverV2.tvc"),") and ABI (",(0,i.kt)("inlineCode",{parentName:"p"},"GiverV2.abi.json"),"). You need these files for the next steps."),(0,i.kt)("h3",{id:"calculate-giver-address"},"Calculate Giver address"),(0,i.kt)("p",null,"In order to deploy contract, you need to know its address:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ everdev contract info -n dev -s devnet_giver_keys GiverV2.tvc\nConfiguration\n  Network: dev (net.ton.dev, net1.ton.dev, net5.ton.dev)\n  Signer:  devnet_giver_keys (public 5a343ccbd62c15e3df1076bc34957ad2717469d84e4d6b3ef26112db80ac8e1b)\nAddress:   0:93139197f2f58d674bee4ee71a42d8f1e7b6a3c3e041ded7a54d330bcc44f3b3 (calculated from TVC and signer public)\nCode Hash: ccbfc821853aa641af3813ebd477e26818b51e4ca23e5f6d34509215aa7123d9 (from TVC file)\nAccount:   Doesn't exist\n")),(0,i.kt)("h3",{id:"sponsor-giver-with-public-faucet"},"Sponsor Giver with public faucet"),(0,i.kt)("p",null,"In the next step, you need to sponsor your Giver's address, which you have obtained in the previous\nstep, with funds in order to be able to deploy a contract. The easiest way to do it on DevNet is to use  ",(0,i.kt)("a",{parentName:"p",href:"https://t.me/everdev_giver_bot"},"EverGiver[DevNet] Telegram bot"),". It can give you 111 rubies maximum per address. If you need more, or in the case of a different test network, you can contact the owner of a particular network (for DevNet it is EverX)."),(0,i.kt)("p",null,"In EverGiver Telegram bot type (change Giver's address to the address obtained at previous step):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/give 111 0:93139197f2f58d674bee4ee71a42d8f1e7b6a3c3e041ded7a54d330bcc44f3b3\n")),(0,i.kt)("p",null,"Wait for operation completion. Check address balance in ",(0,i.kt)("a",{parentName:"p",href:"https://net.ever.live"},"Blockchain Explorer"),"."),(0,i.kt)("h3",{id:"deploy-giver-contract"},"Deploy Giver contract"),(0,i.kt)("p",null,"For contract deployment you need to have compiled contract files (",(0,i.kt)("inlineCode",{parentName:"p"},"GiverV2.tvc")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GiverV2.abi.json"),") and giver keys. To deploy contract execute next command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ everdev contract deploy -n dev -s devnet_giver_keys GiverV2.tvc\nConfiguration\n  Network: dev (eri01.net.everos.dev, rbx01.net.everos.dev, gra01.net.everos.dev)\n  Signer:  devnet_giver_keys (public 5a343ccbd62c15e3df1076bc34957ad2717469d84e4d6b3ef26112db80ac8e1b)\nAddress:   0:93139197f2f58d674bee4ee71a42d8f1e7b6a3c3e041ded7a54d330bcc44f3b3 (calculated from TVC and signer public)\nDeploying...\nContract has deployed at address: 0:93139197f2f58d674bee4ee71a42d8f1e7b6a3c3e041ded7a54d330bcc44f3b3\n")),(0,i.kt)("p",null,"Done, now you have your own Giver, deployed to the DevNet! Let's configure ",(0,i.kt)("inlineCode",{parentName:"p"},"everdev")," to use your Giver by default."),(0,i.kt)("h2",{id:"configure-everdev-to-use-your-giver"},"Configure everdev to use your Giver"),(0,i.kt)("p",null,"For convenience, you might need to configure ",(0,i.kt)("inlineCode",{parentName:"p"},"everdev")," in order to use your Giver as default. To do it, execute the next command (change address to your Giver's address, obtained in previous steps):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ everdev network giver dev 0:93139197f2f58d674bee4ee71a42d8f1e7b6a3c3e041ded7a54d330bcc44f3b3 --signer devnet_giver_keys\n")),(0,i.kt)("p",null,"Check:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ everdev n l\nNetwork       Endpoints                                        Giver\n------------  -----------------------------------------------  ------------------------------------------------------------------\nse (Default)  http://localhost                                 0:b5e9240fc2d2f1ff8cbb1d1dee7fb7cae155e5f6320e585fcc685698994a19a5\n                                                                 GiverV2\ndev           eri01.net.everos.dev, rbx01.net.everos.dev, gra01.net.everos.dev          0:93139197f2f58d674bee4ee71a42d8f1e7b6a3c3e041ded7a54d330bcc44f3b3\n                                                                 GiverV2 signed by devnet_giver_keys\nmain          eri01.main.everos.dev, gra01.main.everos.dev, gra02.main.everos.dev ...\n")),(0,i.kt)("p",null,"If Giver is set, you will see you Giver's address and keypair name for the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," network."),(0,i.kt)("h2",{id:"testing-your-new-giver"},"Testing your new Giver"),(0,i.kt)("p",null,"For testing your new Giver, try to top up any address, for example, one of the contract's addresses, which you need to deploy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ everdev contract topup --network dev --address <address> --value 10000\nConfiguration\n  Network: dev (eri01.net.everos.dev, rbx01.net.everos.dev, gra01.net.everos.dev)\n  Signer:  test (public de101cde5c94540926fe862e965cf109b1b803989e7048657cf7c4caaa2a257d)\nAddress:   <address>\n0.00001 tokens (10000 nano) were sent to address <address>\n")))}p.isMDXComponent=!0}}]);