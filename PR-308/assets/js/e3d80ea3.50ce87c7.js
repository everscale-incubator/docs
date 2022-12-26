"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[6715],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=d(a),u=r,g=m["".concat(p,".").concat(u)]||m[u]||k[u]||l;return a?n.createElement(g,i(i({ref:e},s),{},{components:a})):n.createElement(g,i({ref:e},s))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},819:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={title:"4.2. JSON Metadata",sidebar_position:2,slug:"/standard/TIP-4.2"},i="Non-Fungible Token JSON Metadata (TIP-4.2)",o={unversionedId:"standard/TIP-4/2",id:"standard/TIP-4/2",title:"4.2. JSON Metadata",description:"Requires: TIP-6.1",source:"@site/../../src/standard/TIP-4/2.md",sourceDirName:"standard/TIP-4",slug:"/standard/TIP-4.2",permalink:"/docs/PR-308/standard/TIP-4.2",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/standard/TIP-4/2.md",tags:[],version:"current",lastUpdatedAt:1656494730,formattedLastUpdatedAt:"Jun 29, 2022",sidebarPosition:2,frontMatter:{title:"4.2. JSON Metadata",sidebar_position:2,slug:"/standard/TIP-4.2"},sidebar:"tutorialSidebar",previous:{title:"4.1. Non-Fungible Token",permalink:"/docs/PR-308/standard/TIP-4.1"},next:{title:"4.3. On-chain indexes",permalink:"/docs/PR-308/standard/TIP-4.3"}},p={},d=[{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Specification",id:"specification",level:2},{value:"JSON metadata",id:"json-metadata",level:2},{value:"TIP4_2JSON_Metadata.getJson()",id:"tip4_2json_metadatagetjson",level:3},{value:"Empty JSON metadata",id:"empty-json-metadata",level:2},{value:"JSON metadata type",id:"json-metadata-type",level:2},{value:"JSON metadata type: &quot;Basic NFT&quot;",id:"json-metadata-type-basic-nft",level:2},{value:"Example",id:"example",level:3},{value:"JSON metadata type: <code>metaverse.region</code>",id:"json-metadata-type-metaverseregion",level:2},{value:"Region metadata",id:"region-metadata",level:3},{value:"Region shape types",id:"region-shape-types",level:3},{value:"Cuboid",id:"cuboid",level:4},{value:"Cuboid object specification",id:"cuboid-object-specification",level:5},{value:"Example usage",id:"example-usage",level:5},{value:"Cylinder",id:"cylinder",level:4},{value:"Cylinder object specification",id:"cylinder-object-specification",level:5},{value:"Example usage",id:"example-usage-1",level:5},{value:"Sphere",id:"sphere",level:4},{value:"Spherical object specification",id:"spherical-object-specification",level:5},{value:"Example usage",id:"example-usage-2",level:5},{value:"2D polygon",id:"2d-polygon",level:4},{value:"2D polygon object specification",id:"2d-polygon-object-specification",level:5},{value:"Shared models",id:"shared-models",level:4},{value:"XYZ",id:"xyz",level:5},{value:"Standard conventions",id:"standard-conventions",level:4},{value:"How to add the new JSON metadata type?",id:"how-to-add-the-new-json-metadata-type",level:2},{value:"References",id:"references",level:2}],s={toc:d};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"non-fungible-token-json-metadata-tip-42"},"Non-Fungible Token JSON Metadata (TIP-4.2)"),(0,r.kt)("p",null,"Requires: ",(0,r.kt)("a",{parentName:"p",href:"/docs/PR-308/standard/TIP-6.1"},"TIP-6.1")),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"Token-specific metadata is stored as a string in smart contract. To facilitate an off-chain working with metadata, it is JSON object. The below metadata structure allows the marketplaces to read and display the details about the assets which your NFTs represent."),(0,r.kt)("p",null,"This standard provides optional JSON fields and contract interface. "),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"A standard fields facilitate displaying of NFT data for: wallets, explorers, marketplaces, etc."),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("p",null,"The keywords \u201cMUST\u201d, \u201cMUST NOT\u201d, \u201cREQUIRED\u201d, \u201cSHALL\u201d, \u201cSHALL NOT\u201d, \u201cSHOULD\u201d, \u201cSHOULD NOT\u201d, \u201cRECOMMENDED\u201d, \u201cMAY\u201d, and \u201cOPTIONAL\u201d in this document are to be interpreted as described in ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc2119"},"RFC 2119")),(0,r.kt)("h2",{id:"json-metadata"},"JSON metadata"),(0,r.kt)("p",null,"Return the metadata as JSON"),(0,r.kt)("p",null,"Every TIP4.2 compliant contract must implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"TIP4_2JSON_Metadata")," interface and ",(0,r.kt)("a",{parentName:"p",href:"/docs/PR-308/standard/TIP-6.1"},"TIP-6.1")," interfaces"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ton-solidity >= 0.58.0;\n\ninterface TIP4_2JSON_Metadata {\n\n    /// @notice metadata in JSON format\n    /// @return json The JSON string with metadata\n    function getJson() external view responsible returns (string json);\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE")," The ",(0,r.kt)("a",{parentName:"p",href:"/docs/PR-308/standard/TIP-6.1"},"TIP-6.1")," identifier for this interface is ",(0,r.kt)("inlineCode",{parentName:"p"},"0x24D7D5F5"),"."),(0,r.kt)("h3",{id:"tip4_2json_metadatagetjson"},"TIP4_2JSON_Metadata.getJson()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function getJson() external view responsible returns (string json);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"json")," (",(0,r.kt)("inlineCode",{parentName:"li"},"string"),") -  The JSON string with metadata")),(0,r.kt)("p",null,"The function return metadata as a JSON string."),(0,r.kt)("h2",{id:"empty-json-metadata"},"Empty JSON metadata"),(0,r.kt)("p",null,"Empty JSON metadata is represented as a blank JSON object or an empty string."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")),(0,r.kt)("h2",{id:"json-metadata-type"},"JSON metadata type"),(0,r.kt)("p",null,'Not empty JSON must have "type" field '),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"type":"string"}\n')),(0,r.kt)("p",null,'Application that read JSON metadata use "type" field for parsing standard or custom JSON fields.'),(0,r.kt)("h2",{id:"json-metadata-type-basic-nft"},'JSON metadata type: "Basic NFT"'),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Basic NFT")," use for links to files stores in web. JSON fields contain information about item, files and preview info."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Basic NFT")," describes fields that must be in JSON"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"Basic NFT"'),(0,r.kt)("td",{parentName:"tr",align:null},"Constant name for this type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Description of the object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"preview")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Object preview")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"preview.source")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Link to object. Contains protocol and data source. Delimiter is ",(0,r.kt)("strong",{parentName:"td"},":"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"preview.mimetype")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types"},"Mime type")," of object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"files")),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of objects.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"file.source")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Link to object. Contains protocol and data source. Delimiter is ",(0,r.kt)("strong",{parentName:"td"},":"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"file.mimetype")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types"},"Mime type")," of object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"external_url")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"URL to website")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n    "type": "Basic NFT",\n    "name": "Sample Name",\n    "description": "Hello world!",\n    "preview": {\n        "source": "https://everscale.network/images/Backgrounds/Main/main-hero.png",\n        "mimetype": "image/png"\n    },\n    "files": [\n        {\n            "source": "https://everscale.network/images/Backgrounds/Main/main-hero.png",\n            "mimetype": "image/png"\n        }\n    ],\n    "external_url": "https://everscale.network"\n}\n')),(0,r.kt)("p",null,"You can extend ",(0,r.kt)("inlineCode",{parentName:"p"},"Basic NFT")," type for your custom fields."),(0,r.kt)("h2",{id:"json-metadata-type-metaverseregion"},"JSON metadata type: ",(0,r.kt)("inlineCode",{parentName:"h2"},"metaverse.region")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"metaverse.region")," JSON object stores the unique reference to a specific region (bundle of regions) inside a metaverse."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"NFT type"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"metaverse.region"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"version")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Model version (for future compatibility)"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"meta")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#region-metadata"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"Region metadata"),(0,r.kt)("td",{parentName:"tr",align:"right"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"regions")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#region-shape-types"},"array","<","object",">")),(0,r.kt)("td",{parentName:"tr",align:null},"Region parameters (multi-component regions allowed)"),(0,r.kt)("td",{parentName:"tr",align:"right"})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "metaverse.region",\n    "version": "1.0",\n    "meta": {\n        "server": {\n            "type": "minecraft",\n            "url": "http://10.10.10.10:25565",\n            "pubkey": "c843d424bba89625d64fb592975180023e46b499388856fa832e287484adc4aa"\n        },\n        "signature": "cc9d3377f78d33a3d2d412d173f2b6e9e6dd06af19749d95032ea7c78eb07d873ddfe0b241a190900422732207dbbdc987b1bbcfd74d56404f0ab0d65d4f930e"\n    },\n    "regions": [\n        {\n            "shape": "cuboid",\n            "params": {\n                "position1": {\n                    "x": "0",\n                    "y": "-50",\n                    "z": "0"\n                },\n                "position2": {\n                    "x": "16",\n                    "y": "200",\n                    "z": "16"\n                }\n            }\n        }\n    ]\n}\n')),(0,r.kt)("h3",{id:"region-metadata"},"Region metadata"),(0,r.kt)("p",null,"This section must contain at least a minimum of the required information about the metaverse server where the region is located."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Example value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"server.type")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of metaverse that has issued the NFT token"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"minecraft"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"server.url")),(0,r.kt)("td",{parentName:"tr",align:null},"uri (optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"Address where the server is located. Typically, the URL, from which the server actual metadata like name, description, etc. can be extracted."),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"10.10.10.10:25565"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"server.pubkey")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Public key issued by the compatible NFT adapter used to sign the NFT content data"),(0,r.kt)("td",{parentName:"tr",align:"right"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"signature")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"HEX representation of the signature, generated using ed25519 algorithm based on the contents of ",(0,r.kt)("inlineCode",{parentName:"td"},"regions")," array content (without the object name) and server private key.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Before generation, the base JSON array must be compacted (i.e. all the whitespace and line breaks must be removed). In the example above, it will look as follows:",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},'[{"shape":"cuboid","params":{"position1":{"x":"0","y":"-50","z":"0"},"position2":{"x":"16","y":"200","z":"16"}}}]')),(0,r.kt)("td",{parentName:"tr",align:"right"})))),(0,r.kt)("h3",{id:"region-shape-types"},"Region shape types"),(0,r.kt)("p",null,"The reference implementation is inspired by Minecraft's Worldedit primitive region models."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Reference model"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"cuboid")),(0,r.kt)("td",{parentName:"tr",align:null},"Box-shaped region"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/EngineHub/WorldEdit/blob/b8a9c0070c72bbdd0d2c77fa8c537c01b0f73f85/worldedit-core/src/main/java/com/sk89q/worldedit/regions/selector/CuboidRegionSelector.java"},"Link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"cylinder")),(0,r.kt)("td",{parentName:"tr",align:null},"Cylinder-shaped region"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/EngineHub/WorldEdit/blob/b8a9c0070c72bbdd0d2c77fa8c537c01b0f73f85/worldedit-core/src/main/java/com/sk89q/worldedit/regions/selector/CylinderRegionSelector.java"},"Link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"sphere")),(0,r.kt)("td",{parentName:"tr",align:null},"Spheric-shaped region"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/EngineHub/WorldEdit/blob/b8a9c0070c72bbdd0d2c77fa8c537c01b0f73f85/worldedit-core/src/main/java/com/sk89q/worldedit/regions/selector/SphereRegionSelector.java"},"Link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"polygon2d")),(0,r.kt)("td",{parentName:"tr",align:null},"2D-polygonal-shaped region"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/EngineHub/WorldEdit/blob/b8a9c0070c72bbdd0d2c77fa8c537c01b0f73f85/worldedit-core/src/main/java/com/sk89q/worldedit/regions/Polygonal2DRegion.java#L39"},"Link"))))),(0,r.kt)("h4",{id:"cuboid"},"Cuboid"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cuboid")," is the simplest and the most popular shape of a region typically used in most metaverses."),(0,r.kt)("p",null,"It is defined by X, Y and Z coordinates of two points in the space (the order is insignificant), one of which is considered as the start (bottom, minimum) and the other one as the end (top, maximum) of the region."),(0,r.kt)("h5",{id:"cuboid-object-specification"},"Cuboid object specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"shape")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of shape"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"cuboid"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"params.position1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#xyz"},"xyz")),(0,r.kt)("td",{parentName:"tr",align:null},"First vertex of the cuboid"),(0,r.kt)("td",{parentName:"tr",align:"right"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"params.position2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#xyz"},"xyz")),(0,r.kt)("td",{parentName:"tr",align:null},"Second vertex of the cuboid"),(0,r.kt)("td",{parentName:"tr",align:"right"})))),(0,r.kt)("h5",{id:"example-usage"},"Example usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "metaverse.region",\n    "version": "1.0",\n    "meta": {},\n    "regions": [\n        {\n            "shape": "cuboid",\n            "params": {\n                "position1": {\n                    "x": "0",\n                    "y": "-50",\n                    "z": "0"\n                },\n                "position2": {\n                    "x": "16",\n                    "y": "200",\n                    "z": "16"\n                }\n            }\n        }\n    ]\n}\n')),(0,r.kt)("h4",{id:"cylinder"},"Cylinder"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cylinders")," are commonly used in central areas of large objects (lize plazas, fountains, etc)."),(0,r.kt)("p",null,"They are defined by coordinates of basic central point, radius, and height."),(0,r.kt)("h5",{id:"cylinder-object-specification"},"Cylinder object specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"shape")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of shape"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"cylinder"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"params.center")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#xyz"},"xyz")),(0,r.kt)("td",{parentName:"tr",align:null},"Basic central point of the cylinder"),(0,r.kt)("td",{parentName:"tr",align:"right"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"params.radius")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Radius of the cylinder (number in string format for maximum compatibility)"),(0,r.kt)("td",{parentName:"tr",align:"right"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"params.height")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Height of the cylinder (number in string format for maximum compatibility)",(0,r.kt)("br",null),(0,r.kt)("br",null),"For the avoidance of doubt, the Y coordinate of the opposite cylinder's side is calculated as ",(0,r.kt)("inlineCode",{parentName:"td"},"Y_basic + height")),(0,r.kt)("td",{parentName:"tr",align:"right"})))),(0,r.kt)("h5",{id:"example-usage-1"},"Example usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "metaverse.region",\n    "version": "1.0",\n    "meta": {},\n    "regions": [\n        {\n            "shape": "cylinder",\n            "params": {\n                "center": {\n                    "x": "0",\n                    "y": "-50",\n                    "z": "0"\n                },\n                "radius": "16",\n                "height": "100"\n            }\n        }\n    ]\n}\n')),(0,r.kt)("h4",{id:"sphere"},"Sphere"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Spheres")," are typically used as parts of complex objects like sculptures, buildings, etc."),(0,r.kt)("p",null,"Sphere is described by coordinates of central point and radius."),(0,r.kt)("h5",{id:"spherical-object-specification"},"Spherical object specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"shape")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of shape"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"sphere"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"params.center")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#xyz"},"xyz")),(0,r.kt)("td",{parentName:"tr",align:null},"Basic central point of the sphere"),(0,r.kt)("td",{parentName:"tr",align:"right"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"params.radius")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Radius of the sphere (number in string format for maximum compatibility)"),(0,r.kt)("td",{parentName:"tr",align:"right"})))),(0,r.kt)("h5",{id:"example-usage-2"},"Example usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "metaverse.region",\n    "version": "1.0",\n    "meta": {},\n    "regions": [\n        {\n            "shape": "sphere",\n            "params": {\n                "center": {\n                    "x": "0",\n                    "y": "-50",\n                    "z": "0"\n                },\n                "radius": "16"\n            }\n        }\n    ]\n}\n')),(0,r.kt)("h4",{id:"2d-polygon"},"2D polygon"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Polygons")," can represent an arbitrary set of vertices."),(0,r.kt)("p",null,"2D polygons assume that all vertices lay on the same plane. The whole object can be extended in height."),(0,r.kt)("h5",{id:"2d-polygon-object-specification"},"2D polygon object specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"shape")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of shape"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"polygon2d"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"params.points")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#xyz"},"list","<","xyz",">")),(0,r.kt)("td",{parentName:"tr",align:null},"Coordinates of polygon vetices"),(0,r.kt)("td",{parentName:"tr",align:"right"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"params.height")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Height of the object (number in string format for maximum compatibility).",(0,r.kt)("br",null),(0,r.kt)("br",null),"For the avoidance of doubt, the Y coordinate of the opposite object's side is calculated as ",(0,r.kt)("inlineCode",{parentName:"td"},"Y_basic + height"),", where ",(0,r.kt)("inlineCode",{parentName:"td"},"Y_basic")," is the ",(0,r.kt)("inlineCode",{parentName:"td"},"Y")," coordinate of the first vertex in the array above."),(0,r.kt)("td",{parentName:"tr",align:"right"})))),(0,r.kt)("h4",{id:"shared-models"},"Shared models"),(0,r.kt)("h5",{id:"xyz"},"XYZ"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"x")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"X coordinate"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"y")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Y coordinate"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"z")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Z coordinate"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0")))),(0,r.kt)("h4",{id:"standard-conventions"},"Standard conventions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Numbers and coordinates interpretation depends on the specific metaverse defined in the ",(0,r.kt)("inlineCode",{parentName:"li"},"meta")," section of the NFT. For this standard purpose, the following convention is applied:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"X")," axis is a horizontal one pointing East;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Y")," axis is a vertical one pointing up;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Z")," is the orthogonal axis pointing south;",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("img",{src:"https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/51/Coordinates.png/revision/latest/scale-to-width-down/200?cb=20200729013357"})))),(0,r.kt)("li",{parentName:"ul"},"Numbers are stored as strings to ensure maximum compatibility;"),(0,r.kt)("li",{parentName:"ul"},"Numbers must not use scientific notation.")),(0,r.kt)("h2",{id:"how-to-add-the-new-json-metadata-type"},"How to add the new JSON metadata type?"),(0,r.kt)("p",null,"For added new metadata type of ",(0,r.kt)("a",{parentName:"p",href:"/docs/PR-308/standard/TIP-4.2"},"TIP-4.2")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create product that use new JSON type."),(0,r.kt)("li",{parentName:"ul"},"Send PR for change the docs."),(0,r.kt)("li",{parentName:"ul"},"Explain why it will be in Standard.")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-721"},"Ethereum EIP-721")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.metaplex.com/token-metadata/specification"},"Solana v1.2.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ton-blockchain/TIPs/issues/62"},"TON NFT"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ton-blockchain/TIPs/issues/64"},"TON DATA")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitlab.com/tezos/tzip/-/blob/master/proposals/tzip-12/tzip-12.md"},"Tezos TZIP12")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.binance.org/smart-chain/developer/nft-metadata-standard.html"},"BNS BEP721"))))}m.isMDXComponent=!0}}]);