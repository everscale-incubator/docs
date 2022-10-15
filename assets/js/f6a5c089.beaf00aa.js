"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[4381],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return k}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)o=l[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)o=l[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(o),k=n,h=u["".concat(s,".").concat(k)]||u[k]||p[k]||l;return o?a.createElement(h,r(r({ref:t},d),{},{components:o})):a.createElement(h,r({ref:t},d))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var c=2;c<l;c++)r[c]=o[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9449:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=o(3117),n=o(102),l=(o(7294),o(3905)),r=["components"],i={sidebar_position:5,description:"Working with SMV contracts"},s="SMV Contracts",c={unversionedId:"develop/smart-contract/smv-contracts",id:"develop/smart-contract/smv-contracts",title:"SMV Contracts",description:"Working with SMV contracts",source:"@site/../../src/develop/smart-contract/smv-contracts.md",sourceDirName:"develop/smart-contract",slug:"/develop/smart-contract/smv-contracts",permalink:"/docs/develop/smart-contract/smv-contracts",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/smart-contract/smv-contracts.md",tags:[],version:"current",lastUpdatedAt:1660241980,formattedLastUpdatedAt:"Aug 11, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Working with SMV contracts"},sidebar:"tutorialSidebar",previous:{title:"Frontend App",permalink:"/docs/develop/smart-contract/frontend-app"},next:{title:"Debugging",permalink:"/docs/develop/smart-contract/debugging"}},d={},p=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. TONOS-CLI Installation",id:"2-tonos-cli-installation",level:2},{value:"2.1. Install TONOS-CLI and download contract files",id:"21-install-tonos-cli-and-download-contract-files",level:3},{value:"Linux",id:"linux",level:4},{value:"Mac OS",id:"mac-os",level:4},{value:"Windows",id:"windows",level:4},{value:"2.2. Set blockchain network",id:"22-set-blockchain-network",level:3},{value:"3. Installing clang for TVM",id:"3-installing-clang-for-tvm",level:2},{value:"4. Build contracts",id:"4-build-contracts",level:2},{value:"5. Deploying super root to the Blockchain",id:"5-deploying-super-root-to-the-blockchain",level:2},{value:"5.1. Generating seed phrase",id:"51-generating-seed-phrase",level:3},{value:"5.2. Generating super root address and deployment key pair",id:"52-generating-super-root-address-and-deployment-key-pair",level:3},{value:"5.2.1. (Optional) Check that a contract with the address generated on the previous step does not already exist in the blockchain",id:"521-optional-check-that-a-contract-with-the-address-generated-on-the-previous-step-does-not-already-exist-in-the-blockchain",level:4},{value:"5.2.2. Send a few tokens to the new address from another contract.",id:"522-send-a-few-tokens-to-the-new-address-from-another-contract",level:4},{value:"5.3. Place ProposalRoot and MultiBallot code into variables",id:"53-place-proposalroot-and-multiballot-code-into-variables",level:3},{value:"5.4. Deploy the SMV budget and stats contracts",id:"54-deploy-the-smv-budget-and-stats-contracts",level:3},{value:"5.4.1. Generate address of Budget and SMVStats",id:"541-generate-address-of-budget-and-smvstats",level:4},{value:"5.4.2. (Optional) You may check that <code>&lt;budget_address&gt;</code> and <code>&lt;stats_address&gt;</code> are not yet occupied:",id:"542-optional-you-may-check-that-budget_address-and-stats_address-are-not-yet-occupied",level:4},{value:"5.4.3. Send a few tokens to the new addresses from another contract.",id:"543-send-a-few-tokens-to-the-new-addresses-from-another-contract",level:4},{value:"5.4.4. Run deploy commands for Budget and SMVStats contracts",id:"544-run-deploy-commands-for-budget-and-smvstats-contracts",level:4},{value:"5.5. Deploy the super root contract to the blockchain",id:"55-deploy-the-super-root-contract-to-the-blockchain",level:3},{value:"5.5.1. Check the super root status again",id:"551-check-the-super-root-status-again",level:4},{value:"5.5.2. Check that the super root contract is fully initialized",id:"552-check-that-the-super-root-contract-is-fully-initialized",level:4},{value:"6. Super Root requests",id:"6-super-root-requests",level:2},{value:"6.1. Selecting blockchain network",id:"61-selecting-blockchain-network",level:3},{value:"6.2. Creating of proposal",id:"62-creating-of-proposal",level:3},{value:"6.3. Creating of multiballot",id:"63-creating-of-multiballot",level:3},{value:"6.3.1 Calculating multiballot address for specified public key",id:"631-calculating-multiballot-address-for-specified-public-key",level:4},{value:"6.3.2 Deploying MultiBallot from super root",id:"632-deploying-multiballot-from-super-root",level:4},{value:"7. It is recommended to use SMV DeBots for proposal/multiballot creation and voting.",id:"7-it-is-recommended-to-use-smv-debots-for-proposalmultiballot-creation-and-voting",level:2},{value:"7.1 Deploy SMV DeBot",id:"71-deploy-smv-debot",level:3},{value:"7.2 How to vote",id:"72-how-to-vote",level:3},{value:"7.2.1 Deploy MultiBallot",id:"721-deploy-multiballot",level:4},{value:"7.2.2 Vote",id:"722-vote",level:4},{value:"7.3 Other commands",id:"73-other-commands",level:3}],u={toc:p};function k(e){var t=e.components,o=(0,n.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"smv-contracts"},"SMV Contracts"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Referenced repository:",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/EverscaleGuild/everscale-contract-library/tree/main/governance/SMV"},"https://github.com/EverscaleGuild/everscale-contract-library/tree/main/governance/SMV"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Explore the ",(0,l.kt)("a",{parentName:"p",href:"../tools/"},(0,l.kt)("strong",{parentName:"a"},"tools section"))," of the Everscale documentation.  ")),(0,l.kt)("h2",{id:"1-introduction"},"1. Introduction"),(0,l.kt)("p",null,"You can use the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.everscale.network/develop/api-tools/tonos-cli"},"TONOS-CLI utility")," to deploy contracts and manage them.\nAvailable actions in TONOS-CLI include the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"setting the network that the utility should connect to "),(0,l.kt)("li",{parentName:"ul"},"creating seed phrases, private and public keys, which will be used for wallet management"),(0,l.kt)("li",{parentName:"ul"},"generating contract address"),(0,l.kt)("li",{parentName:"ul"},"deploying contract"),(0,l.kt)("li",{parentName:"ul"},"checking contract balance and status"),(0,l.kt)("li",{parentName:"ul"},"running getter contract methods"),(0,l.kt)("li",{parentName:"ul"},"executing contract methods"),(0,l.kt)("li",{parentName:"ul"},"run ",(0,l.kt)("a",{parentName:"li",href:"https://docs.everscale.network/develop/smart-contract/debots/getting-started/"},"debots"))),(0,l.kt)("h2",{id:"2-tonos-cli-installation"},"2. ",(0,l.kt)("a",{parentName:"h2",href:"https://docs.everscale.network/develop/api-tools/tonos-cli"},"TONOS-CLI")," Installation"),(0,l.kt)("h3",{id:"21-install-tonos-cli-and-download-contract-files"},"2.1. Install TONOS-CLI and download contract files"),(0,l.kt)("h4",{id:"linux"},"Linux"),(0,l.kt)("p",null,"Create a folder. Download the .tar.gz file from the latest release from here: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/tonos-cli/releases"},"https://github.com/tonlabs/tonos-cli/releases")," to this folder. Extract it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tar -xvf tonos-cli_v0.1.27_linux.tar.gz\n")),(0,l.kt)("p",null,"Download contract files (config.hpp, Budget.","*",", Contest.","*",", MultiBallot.","*",", ProposalRoot.","*",", SMVStats.","*",", SuperRoot.","*",") from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/governance/SMV"},"https://github.com/tonlabs/ton-labs-contracts/tree/master/governance/SMV"),". Place them into the folder containing the TONOS-CLI executable."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: Make sure you have downloaded the raw versions of the files. If you use wget or curl be aware that github can send you a redirection page instead of a file. Use appropriate tool flag to avoid it.")),(0,l.kt)("h4",{id:"mac-os"},"Mac OS"),(0,l.kt)("p",null,"Install Cargo: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/cargo#compiling-from-source"},"https://github.com/rust-lang/cargo#compiling-from-source")),(0,l.kt)("p",null,"Build TONOS-CLI tool from source:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"> git clone <https://github.com/tonlabs/tonos-cli.git>\n\n> cd tonos-cli\n\n> cargo build --release\n\n> cd target/release/\n")),(0,l.kt)("p",null,"Download contract files (config.hpp, Budget.","*",", Contest.","*",", MultiBallot.","*",", ProposalRoot.","*",", SMVStats.","*",", SuperRoot.","*",") from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/ton-labs-contracts/tree/master/governance/SMV"},"https://github.com/tonlabs/ton-labs-contracts/tree/master/governance/SMV"),". Place them into the tonos-cli/target/release/ utility folder."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: Make sure you have downloaded the raw versions of the files. If you use wget or curl be aware that github can send you a redirection page instead of a file. Use appropriate tool flag to avoid it.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: On Mac OS all calls of the TONOS-CLI utility should be performed from the tonos-cli/target/release/ folder.")),(0,l.kt)("h4",{id:"windows"},"Windows"),(0,l.kt)("p",null,"The workflow is the same as for Mac OS (see the section above). However, when using Windows command line, the following syntax should be used for all TONOS-CLI commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tonos-cli <command_name> <options>\n")),(0,l.kt)("p",null,"Simply omit the ",(0,l.kt)("inlineCode",{parentName:"p"},"./")," symbols before ",(0,l.kt)("inlineCode",{parentName:"p"},"tonos-cli"),"."),(0,l.kt)("h3",{id:"22-set-blockchain-network"},"2.2. Set blockchain network"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: By default TONOS-CLI connects to net.ton.dev network.")),(0,l.kt)("p",null,"Use the following command to switch to any other network"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./tonos-cli config --url <https://network_url>\n")),(0,l.kt)("p",null,"You need to do it only once before using the utility."),(0,l.kt)("p",null,"A .json configuration file will be created in the TONOS-CLI utility folder. The URL of the current network will be specified there. All subsequent calls of the utility will use this file to select the network to connect to."),(0,l.kt)("h2",{id:"3-installing-clang-for-tvm"},"3. Installing clang for TVM"),(0,l.kt)("p",null,"Install clang from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Compiler"},"https://github.com/tonlabs/TON-Compiler"),"."),(0,l.kt)("h2",{id:"4-build-contracts"},"4. Build contracts"),(0,l.kt)("p",null,"TON-Compiler clang must be in PATH, check with ",(0,l.kt)("inlineCode",{parentName:"p"},"clang --version"),":\n",(0,l.kt)("inlineCode",{parentName:"p"},"TON Labs clang for TVM. ... ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"clang++ -o Budget.tvc Budget.cpp\nclang++ -o MultiBallot.tvc MultiBallot.cpp\nclang++ -o ProposalRoot.tvc ProposalRoot.cpp\nclang++ -o SuperRoot.tvc SuperRoot.cpp\nclang++ -o SMVStats.tvc SMVStats.cpp\nclang++ -o Contest.tvc Contest.cpp\n")),(0,l.kt)("p",null,"It will generate both tvc and abi files.\nAlso you may use pre-compiled tvc/abi files from the same repository, or use the provided Makefile for compilation."),(0,l.kt)("h2",{id:"5-deploying-super-root-to-the-blockchain"},"5. Deploying super root to the Blockchain"),(0,l.kt)("h3",{id:"51-generating-seed-phrase"},"5.1. Generating seed phrase"),(0,l.kt)("p",null,"To generate your seed phrase enter the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./tonos-cli genphrase\n")),(0,l.kt)("p",null,"Terminal displays the generated seed phrase."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: The seed phrase (and the corresponding key) is used only in deploy procedure of SuperRoot and will be zeroed when the contract is fully initialized.")),(0,l.kt)("h3",{id:"52-generating-super-root-address-and-deployment-key-pair"},"5.2. Generating super root address and deployment key pair"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Use the following command:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'./tonos-cli getkeypair <deploy.keys.json> "<seed_phrase>"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"deploy.keys.json")," - the file the key pair will be written to.\nThe utility generates the file that contains the key pair produced from seed phrase. Use it to generate your address:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./tonos-cli genaddr SuperRoot.tvc SuperRoot.abi --setkey deploy.keys.json --wc <workchain_id>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"deploy.keys.json")," - the file the key pair is read from."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--wc <workchain_id>")," - (optional) ID of the workchain the contract will be deployed to (-1 for masterchain, 0 for basechain). By default this value is set to 0.\nThe utility displays the new super root address (Raw_address).")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: The super root address is required for any interactions with the contract.")),(0,l.kt)("p",null,"It is better to save super root address into variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"export TVM_SUPER_ROOT_ADDR=<super_root_address>\n")),(0,l.kt)("h4",{id:"521-optional-check-that-a-contract-with-the-address-generated-on-the-previous-step-does-not-already-exist-in-the-blockchain"},"5.2.1. (Optional) Check that a contract with the address generated on the previous step does not already exist in the blockchain"),(0,l.kt)("p",null,"Request status for the generated contract address from the blockchain:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./tonos-cli account <super_root_address>\n")),(0,l.kt)("h4",{id:"522-send-a-few-tokens-to-the-new-address-from-another-contract"},"5.2.2. Send a few tokens to the new address from another contract."),(0,l.kt)("p",null,"Create, and if necessary, confirm a transaction from some wallet.\nEnsure that contract address has been created in the blockchain and has Uninit status."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./tonos-cli account <super_root_address>\n")),(0,l.kt)("h3",{id:"53-place-proposalroot-and-multiballot-code-into-variables"},"5.3. Place ProposalRoot and MultiBallot code into variables"),(0,l.kt)("p",null,"ProposalRoot and MultiBallot code must be set into SuperRoot after initial deploy (setProposalRootCode, setMultiBallotCode), so we need to save ProposalRoot.tvc and MultiBallot.tvc code into variables:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tvm_linker decode --tvc ProposalRoot.tvc > code_proposal.txt\ntvm_linker decode --tvc MultiBallot.tvc > code_multiballot.txt\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: tvm_linker utility: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TVM-linker"},"https://github.com/tonlabs/TVM-linker"))),(0,l.kt)("p",null,"Edit code","_","proposal.txt and code","_","multiballot.txt to keep only ",(0,l.kt)("inlineCode",{parentName:"p"},"code: ")," section content.\nSave code","_","proposal.txt and code","_","multiballot.txt content into variables:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"export TVM_PROPOSAL_CODE=`cat code_proposal.txt`\nexport TVM_MULTIBALLOT_CODE=`cat code_multiballot.txt`\n")),(0,l.kt)("h3",{id:"54-deploy-the-smv-budget-and-stats-contracts"},"5.4. Deploy the SMV budget and stats contracts"),(0,l.kt)("h4",{id:"541-generate-address-of-budget-and-smvstats"},"5.4.1. Generate address of Budget and SMVStats"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./tonos-cli genaddr Budget.tvc Budget.abi --setkey deploy.keys.json --wc <workchain_id>\n./tonos-cli genaddr SMVStats.tvc SMVStats.abi --setkey deploy.keys.json --wc <workchain_id>\n")),(0,l.kt)("p",null,"It is better to save Budget and SMVStats address into variables:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"export TVM_BUDGET_ADDR=<budget_address>\nexport TVM_STATS_ADDR=<stats_address>\n")),(0,l.kt)("h4",{id:"542-optional-you-may-check-that-budget_address-and-stats_address-are-not-yet-occupied"},"5.4.2. (Optional) You may check that ",(0,l.kt)("inlineCode",{parentName:"h4"},"<budget_address>")," and ",(0,l.kt)("inlineCode",{parentName:"h4"},"<stats_address>")," are not yet occupied:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./tonos-cli account $TVM_BUDGET_ADDR\n./tonos-cli account $TVM_STATS_ADDR\n")),(0,l.kt)("h4",{id:"543-send-a-few-tokens-to-the-new-addresses-from-another-contract"},"5.4.3. Send a few tokens to the new addresses from another contract."),(0,l.kt)("p",null,"Create, and if necessary, confirm a transaction from some wallet.\nEnsure that contract addresses have been created in the blockchain and has Uninit status."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./tonos-cli account $TVM_BUDGET_ADDR\n./tonos-cli account $TVM_STATS_ADDR\n")),(0,l.kt)("h4",{id:"544-run-deploy-commands-for-budget-and-smvstats-contracts"},"5.4.4. Run deploy commands for Budget and SMVStats contracts"),(0,l.kt)("p",null,"You should provide calculated ",(0,l.kt)("inlineCode",{parentName:"p"},"<super_root_address>")," as a constructor parameter ",(0,l.kt)("inlineCode",{parentName:"p"},"SMV_root"),".\nSMVStats contract will registrate statistic records from this address.\nAnd Budget contract will process funds allocation requests (to an approved contest) from this address."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: Do not transfer big funds to Budget contract until SuperRoot is deployed and fully initialized.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./tonos-cli deploy Budget.tvc '{\"SMV_root\":\"'$TVM_SUPER_ROOT_ADDR'\"}' --abi Budget.abi --sign deploy.keys.json --wc <workchain_id>\n./tonos-cli deploy SMVStats.tvc '{\"SMV_root\":\"'$TVM_SUPER_ROOT_ADDR'\"}' --abi SMVStats.abi --sign deploy.keys.json --wc <workchain_id>\n")),(0,l.kt)("h3",{id:"55-deploy-the-super-root-contract-to-the-blockchain"},"5.5. Deploy the super root contract to the blockchain"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: full deployment of the super root is splitted into three commands because the network has size limit for one message (16k) and the contracts (SuperRoot.tvc + ProposalRoot.tvc + MultiBallot.tvc) break this limit.")),(0,l.kt)("p",null,"Use the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'./tonos-cli deploy SuperRoot.tvc \'{"budget":"\'$TVM_BUDGET_ADDR\'","stats":"\'$TVM_STATS_ADDR\'"}\' --abi SuperRoot.abi --sign deploy.keys.json --wc <workchain_id>\n')),(0,l.kt)("p",null,"Configuration parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"budget")," - address of Budget contract."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stats")," - address of SMVStats contract."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--wc <workchain_id>")," - (optional) ID of the workchain the wallet will be deployed to (-1 for masterchain, 0 for basechain). By default this value is set to 0.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./tonos-cli call <super_root_address> setProposalRootCode '{\"code\":\"'$TVM_PROPOSAL_CODE'\"}' --abi SuperRoot.abi --sign deploy.keys.json\n./tonos-cli call <super_root_address> setMultiBallotCode '{\"code\":\"'$TVM_MULTIBALLOT_CODE'\"}' --abi SuperRoot.abi --sign deploy.keys.json\n")),(0,l.kt)("h4",{id:"551-check-the-super-root-status-again"},"5.5.1. Check the super root status again"),(0,l.kt)("p",null,"Now it should be Active."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./tonos-cli account <super_root_address>\n")),(0,l.kt)("h4",{id:"552-check-that-the-super-root-contract-is-fully-initialized"},"5.5.2. Check that the super root contract is fully initialized"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./tonos-cli run <super_root_address> isFullyInitialized {} --abi SuperRoot.abi\n")),(0,l.kt)("h2",{id:"6-super-root-requests"},"6. Super Root requests"),(0,l.kt)("h3",{id:"61-selecting-blockchain-network"},"6.1. Selecting blockchain network"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: By default TONOS-CLI connects to net.ton.dev network.")),(0,l.kt)("p",null,"Use the following command to switch to any other network "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"./tonos-cli config --url <https://network_url>\n")),(0,l.kt)("p",null,"You need to do it only once before using the utility."),(0,l.kt)("p",null,"A .json configuration file will be created in the TONOS-CLI utility folder. The URL of the current network will be specified there. All subsequent calls of the utility will use this file to select the network to connect to."),(0,l.kt)("h3",{id:"62-creating-of-proposal"},"6.2. Creating of proposal"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: SuperRoot is not processing external commands after initialization. ")),(0,l.kt)("p",null,"You need to prepare and send internal message from another contract (Multisig wallet, for example) to create multiballot or proposal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bool_t createProposal(uint256 id, address depool, uint128 totalVotes,\n                      uint32 startime, uint32 endtime, bytes desc,\n                      bool_t superMajority, uint256 votePrice,\n                      bool_t finalMsgEnabled,\n                      cell finalMsg, uint256 finalMsgValue, uint256 finalMsgRequestValue,\n                      bool_t whiteListEnabled, dict_array<uint256> whitePubkeys);\n")),(0,l.kt)("p",null,"The internal call will return success flag with the rest of funds. The deployed proposal address may be known using ",(0,l.kt)("inlineCode",{parentName:"p"},"getProposalAddress")," getter."),(0,l.kt)("h3",{id:"63-creating-of-multiballot"},"6.3. Creating of multiballot"),(0,l.kt)("h4",{id:"631-calculating-multiballot-address-for-specified-public-key"},"6.3.1 Calculating multiballot address for specified public key"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'./tonos-cli run <super_root_address> getMultiBallotAddress \'{"pubkey":"0x<ballot public key>", "depool":"<depool address>"}\' --abi SuperRoot.abi\n')),(0,l.kt)("h4",{id:"632-deploying-multiballot-from-super-root"},"6.3.2 Deploying MultiBallot from super root"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: SuperRoot is not processing external commands after initialization. You need to prepare and send internal message from another contract (Multisig wallet, for example) to create multiballot or proposal.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"address createMultiBallot(uint256 pubkey, address depool, uint256 tonsToBallot);\n")),(0,l.kt)("p",null,"The internal call will return the deployed MultiBallot address with the rest of funds. The returned address should be equal to calculated by getWalletAddress."),(0,l.kt)("h2",{id:"7-it-is-recommended-to-use-smv-debots-for-proposalmultiballot-creation-and-voting"},"7. It is recommended to use SMV DeBots for proposal/multiballot creation and voting."),(0,l.kt)("h3",{id:"71-deploy-smv-debot"},"7.1 Deploy SMV DeBot"),(0,l.kt)("p",null,"DeBots should be deployed in the following order:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SMVStatDebot"),(0,l.kt)("li",{parentName:"ul"},"ProposalRootDebot"),(0,l.kt)("li",{parentName:"ul"},"MultiBallotDebot"),(0,l.kt)("li",{parentName:"ul"},"SuperRootDebot",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"Note: You can see ",(0,l.kt)("inlineCode",{parentName:"p"},"deployall.sh")," script file for more details.")))),(0,l.kt)("h3",{id:"72-how-to-vote"},"7.2 How to vote"),(0,l.kt)("h4",{id:"721-deploy-multiballot"},"7.2.1 Deploy MultiBallot"),(0,l.kt)("p",null,"To vote for proposals you need to have MultiBallot account(smart-contract). To deploy your  MultiBallot first of all you need seed phrase and keypair. You can use tonos-cli to generate it.",(0,l.kt)("br",{parentName:"p"}),"\n","Run command to generate seed phrase:\n",(0,l.kt)("inlineCode",{parentName:"p"},"./tonos-cli genphrase"),(0,l.kt)("br",{parentName:"p"}),"\n","Than you can create a key pair file from a seed phrase using the following command:\n",(0,l.kt)("inlineCode",{parentName:"p"},'./tonos-cli getkeypair <keyfile.json> "<seed_phrase>"'),"  "),(0,l.kt)("p",null,"Now you can start deploy MultiBallot from SMV DeBot. Select command ",(0,l.kt)("inlineCode",{parentName:"p"},"3) Deploy MultiBallot"),"."),(0,l.kt)("p",null,"Enter the address of the multisig wallet from which you want to pay for the deployment.  At second step you should enter your generated public key. And then enter the amount of tons you want to send to you MultiBallot as mainterance (1 ton will be fine). Select ",(0,l.kt)("inlineCode",{parentName:"p"},"1) Yes - let's deploy!")," and submit transaction with you  multisig  seed phrase or keypair file."),(0,l.kt)("p",null,"Now your  MultiBallot is deployed."),(0,l.kt)("p",null,"Select ",(0,l.kt)("inlineCode",{parentName:"p"},"1) Vote")," and enter your MultiBallot public key. Now you need to make deposit. Select ",(0,l.kt)("inlineCode",{parentName:"p"},"4) Add deposit from msig")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"5) Add deposit from depool")," and follow instructions. You allways can check you deposit with ",(0,l.kt)("inlineCode",{parentName:"p"},"3) Get total deposit")," command. You can withdraw you deposit with command ",(0,l.kt)("inlineCode",{parentName:"p"},"6) Withdraw deposit"),".   "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: you cannot withdraw your deposit until all proposals you voted for have been completed")),(0,l.kt)("h4",{id:"722-vote"},"7.2.2 Vote"),(0,l.kt)("p",null,"Select ",(0,l.kt)("inlineCode",{parentName:"p"},"1) Vote"),"command from SMV DeBot. Enter your MultiBallot public key and run ",(0,l.kt)("inlineCode",{parentName:"p"},"1) Vote")," command to see all proposals you can vote and then vote for them.",(0,l.kt)("br",{parentName:"p"}),"\n","If you know the specific proposal address you can vote for it with ",(0,l.kt)("inlineCode",{parentName:"p"},"2) Vote by proposal address")," command.  "),(0,l.kt)("h3",{id:"73-other-commands"},"7.3 Other commands"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To see information about budget transfers use command  ",(0,l.kt)("inlineCode",{parentName:"li"},"4) Show statistic"),"."),(0,l.kt)("li",{parentName:"ul"},"You can use command ",(0,l.kt)("inlineCode",{parentName:"li"},"2) Deploy proposal")," for deploy the proposal. "),(0,l.kt)("li",{parentName:"ul"},"Some additional information can be obtain from ",(0,l.kt)("inlineCode",{parentName:"li"},"5) Additional information")," command:")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"1) Get proposal ids")," - show the list of created proposals id."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"2) Get proposal address by id")," \u2013 get the proposal address by its id."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"3) Get multiballot address")," -  get the multiballot address by its public key"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"4) Show proposal info")," \u2013 show proposal info by the proposal address"))}k.isMDXComponent=!0}}]);