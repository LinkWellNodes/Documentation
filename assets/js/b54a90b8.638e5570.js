"use strict";(self.webpackChunklinkwell_nodes_documentation=self.webpackChunklinkwell_nodes_documentation||[]).push([[7727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3901:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(3743);const o={tableOfContentsInline:"tableOfContentsInline_prmo"};function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return a.createElement("div",{className:o.tableOfContentsInline},a.createElement(r.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null}))}},3743:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),r=n(7294),o=n(6668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>l(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function p(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,r.useRef)(void 0),n=p();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:i}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),l=c(s,{anchorTopOffset:n.current}),p=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===p)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:o}=e;return t.length?r.createElement("ul",{className:o?void 0:n},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const m=r.memo(d);function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:p,maxHeadingLevel:d,...h}=e;const k=(0,o.L)(),f=p??k.tableOfContents.minHeadingLevel,g=d??k.tableOfContents.maxHeadingLevel,y=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>s({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:f,maxHeadingLevel:g});return u((0,r.useMemo)((()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:f,maxHeadingLevel:g}}),[l,c,f,g])),r.createElement(m,(0,a.Z)({toc:y,className:n,linkClassName:l},h))}},1652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(3901);const i={title:"Requesting a Custom Any API Chainlink Data Feed: A 7 Step Guide For Web3 Developers",description:"In this article, we explore the 7 steps that Web3 developers can follow for integrating real-world data from Chainlink oracles into their smart contracts.",date:"2024-02-01",keywords:["chainlink","oracle","data feed","smart contract","web3","blockchain"],authors:["Ken"],tags:["chainlink","oracle","smart contract","web3","blockchain"]},s=void 0,l={permalink:"/blog/Requesting-A-Custom-Chainlink-Data-Feed-Using-Any-API",source:"@site/blog/Requesting-A-Custom-Chainlink-Data-Feed-Using-Any-API/index.md",title:"Requesting a Custom Any API Chainlink Data Feed: A 7 Step Guide For Web3 Developers",description:"In this article, we explore the 7 steps that Web3 developers can follow for integrating real-world data from Chainlink oracles into their smart contracts.",date:"2024-02-01T00:00:00.000Z",formattedDate:"February 1, 2024",tags:[{label:"chainlink",permalink:"/blog/tags/chainlink"},{label:"oracle",permalink:"/blog/tags/oracle"},{label:"smart contract",permalink:"/blog/tags/smart-contract"},{label:"web3",permalink:"/blog/tags/web-3"},{label:"blockchain",permalink:"/blog/tags/blockchain"}],readingTime:14.03,hasTruncateMarker:!0,authors:[{name:"Ken Reiners",title:"Co-Founder - LinkWell Nodes",url:"https://www.linkedin.com/in/ken-reiners-755806167/",imageURL:"/img/ken-reiners-100x100.webp",key:"Ken"}],frontMatter:{title:"Requesting a Custom Any API Chainlink Data Feed: A 7 Step Guide For Web3 Developers",description:"In this article, we explore the 7 steps that Web3 developers can follow for integrating real-world data from Chainlink oracles into their smart contracts.",date:"2024-02-01",keywords:["chainlink","oracle","data feed","smart contract","web3","blockchain"],authors:["Ken"],tags:["chainlink","oracle","smart contract","web3","blockchain"]},prevItem:{title:"Chainlink Direct Request Architectures Explained",permalink:"/blog/Chainlink-Basic-Request-Model-Architectures"},nextItem:{title:"Chainlink Any API: Direct Request vs. Functions",permalink:"/blog/Chainlink-Any-API-Direct-Requests-Vs-Functions"}},c={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites to making a Chainlink request",id:"prerequisites-to-making-a-chainlink-request",level:2},{value:"<strong>Step 1</strong>: Finding a suitable Chainlink node operator",id:"step-1-finding-a-suitable-chainlink-node-operator",level:2},{value:"<strong>Step 2</strong>: Communicating your data requirements",id:"step-2-communicating-your-data-requirements",level:2},{value:"<strong>Step 3</strong>: Developing and deploying your testnet smart contract",id:"step-3-developing-and-deploying-your-testnet-smart-contract",level:2},{value:"Key methods within your smart contract",id:"key-methods-within-your-smart-contract",level:3},{value:"Now, deploy it!",id:"now-deploy-it",level:3},{value:"<strong>Step 4</strong>: Testing your smart contract",id:"step-4-testing-your-smart-contract",level:2},{value:"<strong>Step 5</strong>: (optional) Optimizing your smart contract&#39;s request and fulfill functions",id:"step-5-optional-optimizing-your-smart-contracts-request-and-fulfill-functions",level:2},{value:"<strong>Step 6</strong>: Deploying your smart contract to mainnet",id:"step-6-deploying-your-smart-contract-to-mainnet",level:2},{value:"<strong>Step 7</strong>: Go live with your Web3 application",id:"step-7-go-live-with-your-web3-application",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{class:"lw-subtitle"},"7 steps for integrating real-world data from Chainlink oracles into your Web3 smart contract."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chainlink Any API Data Feed",src:n(91).Z,title:"Chainlink Any API Data Feed",width:"720",height:"235"}),(0,r.kt)("center",null,(0,r.kt)("small",null,"Credit: ",(0,r.kt)("a",{parentName:"p",href:"https://blog.chain.link/apis-smart-contracts-and-how-to-connect-them"},"https://blog.chain.link/apis-smart-contracts-and-how-to-connect-them")))),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"On this page"),":"),(0,r.kt)(o.Z,{toc:p.filter((e=>e.level>=1)),minHeadingLevel:2,maxHeadingLevel:2,mdxType:"TOCInline"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Smart contracts that integrate Chainlink data feeds are far more capable than those that don't."),(0,r.kt)("p",null,"Since its launch in 2017, Chainlink - the industry standard Web3 services platform - has curated an extensive array of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.chain.link/data-feeds"},"official data feeds"),", among a myriad of other powerful services, providing developers with a seamless integration of real-world information into their applications. However, the dynamic nature of Web3 applications often demands access to data beyond what official Chainlink feeds offer. This is where custom Chainlink ",(0,r.kt)("a",{parentName:"p",href:"https://docs.chain.link/any-api/introduction"},"Any API")," data feeds step in, catering to the unique requirements of diverse smart contract applications. The process for requesting a custom Any API Chainlink data feed, however, hasn't always been clearly defined."),(0,r.kt)("p",null,"That's why we've gone through great lengths to make the process as seamless as possible for Web3 developers looking to integrate Chainlink's Any API capabilities."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("h3",{parentName:"admonition",id:"looking-for-a-chainlink-oracle-oracle-address-or-job-id"},"Looking for a Chainlink oracle, oracle address, or job id?"),(0,r.kt)("p",{parentName:"admonition"},"View our ",(0,r.kt)("a",{parentName:"p",href:"/services/direct-request-jobs/Jobs-and-Pricing"},"Chainlink data feeds documentation"),", which has everything you need to get started requesting data from our reliable, distributed oracle infrastructure.")),(0,r.kt)("h2",{id:"prerequisites-to-making-a-chainlink-request"},"Prerequisites to making a Chainlink request"),(0,r.kt)("p",null,"There are three Web3 technologies that you'll need to have in place before making your first Chainlink request:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"A Web3 Wallet:")," Web3 wallets are required for not only storing your tokens, but also for deploying your smart contracts and signing messages. Examples include Ledger, Trezor, MetaMask, Coinbase Wallet, or Trust Wallet.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"An IDE:")," EVM-compatible Integrated development environments (IDE) like ",(0,r.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix")," are required for deploying and testing your smart contract. Advanced users may prefer Hardhat or Foundry, particularly for more complex deployments.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Solidity:")," Solidity is Ethereum's primary programming language for developing smart contracts. It will be helpful to have at least a basic understanding of Solidity before getting started."))),(0,r.kt)("p",null,"An additional crucial element that you'll need is a well-defined use case. What project are you working on? What specific on-chain data and APIs are integral to your objectives? And perhaps most importantly, what is your plan for utilizing the data once it's retrieved? The possibilities are endless, and the only true constraint here is the extent of your imagination."),(0,r.kt)("p",null,"If you don't already have a well-defined use case, here are a few custom data feed ideas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Weather Data:")," Retrieve daily and hourly weather forecasts, current conditions, and daily index data from data providers such as OpenWeather or AccuWeather.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sports Data:")," Retrieve live scores, player statistics, team information, and historical data from virtually any sports team from data providers include TheRundown or SportsDataIO.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DeFi Data:")," Real-time and historical cryptocurrency price data, market analysis, and other vital metrics across a multitude of exchanges from data providers such as CryptoCompare.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Real-World Asset Data:")," Physical and traditional assets such as cash, commodities, equities, bonds, credit, artwork, and intellectual property from professional data providers (e.g. Kelly Blue Book for cars), independent/expert appraisers, exchanges/OTC markets, or any customized aggregation of data sources.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"IoT Data:")," Supply chain tracking, accounting transparency, health wearables, consumption and pollution, parametric insurance that tracks rainfall, GPS sensors, and more."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Chainlink oracles can return data from anywhere on the internet.")," For more ideas, we recommend looking into Chainlink's blog on the ",(0,r.kt)("a",{parentName:"p",href:"https://blog.chain.link/smart-contract-use-cases/"},"77 different use cases enabled by Chainlink"),". Additional custom data feed examples that walk you through building a custom data feed can be found within our ",(0,r.kt)("a",{parentName:"p",href:"/services/direct-request-jobs/Any-API-Guide"},"website's documentation"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"If you are interested in the in-depth mechanics of how direct requests to Chainlink nodes work, feel free to check out our ",(0,r.kt)("a",{parentName:"em",href:"/knowledgebase/Direct-Request-Guide"},"direct request guide"),"."))),(0,r.kt)("p",null,"Without further ado, here are the 7 steps for requesting a custom Chainlink data feed."),(0,r.kt)("h2",{id:"step-1-finding-a-suitable-chainlink-node-operator"},(0,r.kt)("strong",{parentName:"h2"},"Step 1"),": Finding a suitable Chainlink node operator"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Check out our article on ",(0,r.kt)("a",{parentName:"p",href:"/blog/How-To-Find-A-Chainlink-Oracle"},"How to Find a Chainlink Oracle")," for detailed information on how to find a Chainlink oracle.")),(0,r.kt)("p",null,"Working with a knowledgeable and competent Chainlink node operator can greatly streamline the process of requesting and building a custom data feed, allowing you or your team to allocate resources more efficiently to your Web3 application. Furthermore, a node operator should possess the expertise to assist in crafting your smart contract code, conducting code reviews, and suggesting gas optimization strategies within your smart contract. This not only saves time, but can also preserve valuable funds with each data request to the Chainlink oracle."),(0,r.kt)("p",null,"Here's what you should look for when it comes to a Chainlink node operator:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Trustworthy and reliable.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A proven track record.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Strong communication skills.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Transparent and clearly-defined pricing.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Reliable, secure, and redundant infrastructure.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Knowledgeable in Solidity.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A well-defined process for requesting custom data feeds.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Continuous monitoring of each data feed request pipeline.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A clear service-level agreement (SLA) for their data feed performance."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"At LinkWell Nodes, we do our best to align with these characteristics and qualities."),"\n",(0,r.kt)("em",{parentName:"p"},"Our services include ",(0,r.kt)("a",{parentName:"em",href:"/services/direct-request-jobs/Jobs-and-Pricing"},"custom data feed capabilities and self-service oracle solutions")," across 14 mainnet and 13 testnet blockchains, as well as a wide array of ",(0,r.kt)("a",{parentName:"em",href:"/services/Development-Services"},"development services")," designed to cater to the diverse needs of your Web3 project."))),(0,r.kt)("h2",{id:"step-2-communicating-your-data-requirements"},(0,r.kt)("strong",{parentName:"h2"},"Step 2"),": Communicating your data requirements"),(0,r.kt)("p",null,"After selecting a Chainlink node operator, you'll want to succinctly convey to them the requirements of your Web3 project. It is beneficial to provide the following information to facilitate effective collaboration:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Blockchain network:")," The blockchain network you plan on deploying your application on.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Data type:")," The type of data you are requesting (i.e., uint256, string[], bool, etc.).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Desired frequency:")," The expected frequency of the request to the oracle (i.e. once a day, once a minute, etc.).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"External adapter requirements:")," External adapters exist to perform a variety of custom logic against diverse range of off-chain resources. These resources encompass premium data providers, authenticated web APIs, IoT sensors, bank payments, enterprise back-ends, other blockchain networks, and various other sources.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Urgency:")," How soon do you need your new data feed up & running?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Decentralization requirements:")," Would you find it acceptable to have one Chainlink node operations team managing your data feed using multiple redundant Chainlink nodes, or do you specifically require the involvement of multiple node operator teams?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Other Chainlink services:")," Do you require additional Chainlink services such as ",(0,r.kt)("a",{parentName:"p",href:"https://docs.chain.link/chainlink-automation"},"Automation")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.chain.link/vrf"},"VRF")," to be implemented within your smart contract?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"API endpoint:")," What HTTP URL do you need to request data from? Does it require an API key, a request body, or any headers? Sending a sample CURL command to the node operator should be sufficient here. Example below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'curl https://myApi.com/BTC/USD --request POST --header "X-Auth-Key: my-api-key-123" --data \'{"interval": 1, "count": 10}\'\n')))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To simplify the process of requesting data, we ask that you fill out our specialized ",(0,r.kt)("a",{parentName:"p",href:"https://linkwellnodes.io/Getting-Started.html"},"request form"),". Once we receive your submission, we'll make every effort to respond promptly and provide your custom data feed ASAP (typically within the day).")),(0,r.kt)("h2",{id:"step-3-developing-and-deploying-your-testnet-smart-contract"},(0,r.kt)("strong",{parentName:"h2"},"Step 3"),": Developing and deploying your testnet smart contract"),(0,r.kt)("p",null,"Although you may have already commenced the development of your smart contract before reaching out to a Chainlink node operator, you may need to modify it to suit your chosen oracle's requirements."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"At LinkWell Nodes, we provide ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Arbitrum-One/uint256/uint256.sol#L48-L56"},"comprehensive code samples")," to help you get started on your contract development. These examples serve as a valuable resource in kick-starting your smart contract development, or incorporating our data feeds into your existing smart contract."))),(0,r.kt)("h3",{id:"key-methods-within-your-smart-contract"},"Key methods within your smart contract"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"The constructor:")," Here you'll typically specify the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.chain.link/resources/link-token-contracts"},"Chainlink (LINK) token contract address")," for your respective chain, the oracle address, the job ID, and the per-request payment amount. Oracle addresses, job IDs, and payment amounts are provided by (or negotiated with) your chosen node operator."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'constructor() ConfirmedOwner(msg.sender) {\n    _setChainlinkToken(0x0Fd9e8d3aF1aaee056EB9e802c3A762a667b1904);\n    setOracleAddress(0xd36c6B1777c7f3Db1B3201bDD87081A9045B7b46);\n    setJobId("a8356f48569c434eaa4ac5fcb4db5cc0");\n    setFeeInHundredthsOfLink(0);     // 0 LINK\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"The request function:")," The request function (also called the transferAndCall() or _sendOperatorRequest() function) defines your request characteristics, and sends the request (and payment) to the Chainlink oracle."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"function request() public {\n\n    Chainlink.Request memory req = _buildOperatorRequest(jobId, this.fulfill.selector);\n    \n    // DEFINE THE REQUEST PARAMETERS (example)\n    req._add('method', 'GET');\n    req._add('url', 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR');\n    req._add('headers', '[\"content-type\", \"application/json\"]');\n    req._add('body', '');\n    req._add('contact', '');     // PLEASE ENTER YOUR CONTACT INFO. this allows us to notify you in the event of any emergencies related to your request (ie, bugs, downtime, etc.). example values: 'derek_linkwellnodes.io' (Discord handle) OR 'derek@linkwellnodes.io' OR '+1-617-545-4721'\n    \n    // The following curl command simulates the above request parameters: \n    // curl 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR' --request 'GET' --header 'content-type: application/json'\n    \n    // PROCESS THE RESULT (example)\n    req._add('path', 'ETH,USD');\n    req._addInt('multiplier', 10 ** 18);\n\n    // Send the request to the Chainlink oracle        \n    _sendOperatorRequest(req, fee);\n}\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"LinkWell Nodes implements a unique and innovative approach that allows for greater control over building your request, but requires a few additional parameters be set (as in the above example).")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Please refer to our ",(0,r.kt)("a",{parentName:"em",href:"/services/direct-request-jobs/Jobs-and-Pricing"},"oracle documentation")," when building your request - especially in regards to these required request parameters."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"The fulfill function:")," Once the data has been retrieved, parsed, and converted into a blockchain-compatible format, our oracle node executes a blockchain transaction against the oracle contract, which in turn writes the data back to your consumer contract via execution of your fulfill() function."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'uint256 public response;\n\n// Receive the result from the Chainlink oracle    \nevent RequestFulfilled(bytes32 indexed requestId);\nfunction fulfill(bytes32 requestId, uint256 data) public recordChainlinkFulfillment(requestId) {\n // Process the oracle response\n    // emit RequestFulfilled(requestId);    // (optional) emits this event in the on-chain transaction logs, allowing Web3 applications to listen for this transaction\n    response = data;     // example value: 1875870000000000000000 (1875.87 before "multiplier" is applied)\n}\n')))),(0,r.kt)("h3",{id:"now-deploy-it"},"Now, deploy it!"),(0,r.kt)("p",null,"Now that your smart contract's been drafted up, it's time to deploy it to the testnet of your choice, so that you can validate your request logic in a low-risk environment before deploying onto a mainnet. If you need guidance during this process, you can refer to a brief ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=vH8T3In6ZkE"},"YouTube tutorial on Remix")," by EatTheBlocks. We are happy to assist as well!"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"LinkWell Nodes offers free Chainlink oracle requests on all blockchain testnets, as part of our dedication to supporting the Chainlink community and assisting new Web3 developers.\nWe encourage Web3 developers to ",(0,r.kt)("a",{parentName:"em",href:"/services/direct-request-jobs/testnets"},"take advantage")," of this opportunity to submit their requests without any cost."))),(0,r.kt)("center",null,(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/vH8T3In6ZkE",frameborder:"0",allowfullscreen:!0})),(0,r.kt)("h2",{id:"step-4-testing-your-smart-contract"},(0,r.kt)("strong",{parentName:"h2"},"Step 4"),": Testing your smart contract"),(0,r.kt)("p",null,"Now comes the fun part - executing the request logic against the oracle specified in your constructor method."),(0,r.kt)("p",null,"Your first step is to deploy your smart contract code using the ",(0,r.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix IDE"),". After deploying the contract, the next step is to trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"transferAndCall()")," function (sometimes called the ",(0,r.kt)("inlineCode",{parentName:"p"},"request()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"_sendOperatorRequest()")," function, highlighted in purple below) within your consumer contract."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Remix Figure 1",src:n(9546).Z,width:"1788",height:"856"})),(0,r.kt)("p",null,"Once your data has successfully been retrieved and parsed, our oracle node executes a blockchain transaction against the oracle contract, which in turn writes the data back to your consumer contract via its ",(0,r.kt)("inlineCode",{parentName:"p"},"fulfill()")," function. Receiving your response may take up to 60 seconds - depending on your chosen blockchain's block time."),(0,r.kt)("p",null,"Clicking the response button highlighted in purple below should return the data from your request."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"If your contract hasn't received a response after waiting 2 minutes, you may have an issue with your request, response, or API endpoint. Please check out our relevant ",(0,r.kt)("a",{parentName:"em",href:"/knowledgebase/faq/Chainlink-Users#im-not-getting-a-response-back-to-my-consumer-contract"},"FAQ topic")," for more troubleshooting information.")," ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Remix Diagram 2",src:n(3747).Z,width:"1788",height:"856"})),(0,r.kt)("p",null,"Once the data has been returned, you are free to utilize that data within your smart contract for whatever purpose you need."),(0,r.kt)("h2",{id:"step-5-optional-optimizing-your-smart-contracts-request-and-fulfill-functions"},(0,r.kt)("strong",{parentName:"h2"},"Step 5"),": (optional) Optimizing your smart contract's request and fulfill functions"),(0,r.kt)("p",null,"This step is marked as optional, as it is geared towards advanced users and/or use cases."),(0,r.kt)("p",null,"Reducing the gas costs incurred by the Chainlink node operator in writing your result to your smart contract generally lowers the LINK they'll need to charge you per request. Therefore, it is typically advisable to optimize your ",(0,r.kt)("inlineCode",{parentName:"p"},"fulfill()")," function's gas usage, in order to increase the overall cost-effectiveness of your Chainlink requests."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Pro tip"),": If your transaction is failing due to an 'out of gas' error, you have several options: A) Provide a smaller response, B) Divide your request into multiple oracle transactions, or C) Reach out to the relevant oracle team to request an increased gas allowance for your specific use case (which may lead to higher per-request pricing).")),(0,r.kt)("p",null,"As previously mentioned, optimizing your smart contract's ",(0,r.kt)("inlineCode",{parentName:"p"},"request()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fulfill()")," functions is a service we offer as part of our ",(0,r.kt)("a",{parentName:"p",href:"/services/Development-Services"},"development services"),"."),(0,r.kt)("p",null,"One other key point - gas prices can be unpredictable, especially when deploying your application on the Ethereum network. In the event of a significant surge in gas prices, the costs incurred by the node operator will spike as well. This forces many node operators to price their data feeds at higher rate to balance out the losses incurred by these market spikes. Consulting with your node operator beforehand on their pricing model may lead to informative conversations here. Whenever possible, we strongly recommend deploying your Web3 application on a layer 2 network such as Arbitrum or Optimism."),(0,r.kt)("h2",{id:"step-6-deploying-your-smart-contract-to-mainnet"},(0,r.kt)("strong",{parentName:"h2"},"Step 6"),": Deploying your smart contract to mainnet"),(0,r.kt)("p",null,"In this step, we'll discuss the deployment of your smart contract to a mainnet blockchain."),(0,r.kt)("p",null,"One notable difference when transitioning from a testnet oracle request to a mainnet oracle request is that your mainnet requests that you send require a nominal fee in the form of the LINK token (usually around 0.1 LINK, depending on the blockchain network and data type). For this reason, it is necessary to fund your smart contract with LINK in order to accommodate the anticipated request volume for your Web3 application."),(0,r.kt)("p",null,"After deploying and funding your mainnet contract, we suggest executing your ",(0,r.kt)("inlineCode",{parentName:"p"},"request()")," function at least once to ensure your functionality is working as expected."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"At LinkWell Nodes, we strive for transparency and efficiency around our pricing model. For a comprehensive understanding of the factors that influence our data feed pricing, you can explore our ",(0,r.kt)("a",{parentName:"p",href:"/services/direct-request-jobs/Pricing"},"pricing page"),"."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Our commitment is to offer the most competitive pricing in the market.")," Deploying your contract initially onto a testnet and making a few requests to our oracles can help us significantly in gauging the lowest-possible pricing for your custom data feed.")),(0,r.kt)("h2",{id:"step-7-go-live-with-your-web3-application"},(0,r.kt)("strong",{parentName:"h2"},"Step 7"),": Go live with your Web3 application"),(0,r.kt)("p",null,"Congratulations on reaching this point!"),(0,r.kt)("p",null,"Now that your application's data pipeline is fully deployed, you'll need to find some users to interact with your newly-minted and Chainlink-secured Web3 application."),(0,r.kt)("p",null,"Here are some final recommendations for your Chainlink integration:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Implement Other Chainlink Services:")," Your smart contract development journey doesn't need to end with custom data feeds. Chainlink offers a diverse array of supplementary services that can further elevate the potential of your projects. Chainlink Automation, for example, can be an enhancement for automating the request() function to your custom data feed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Communication:")," Practice keeping an open line of communication with your chosen Chainlink node operator to ensure a rapid response in the event of any issues, downtime, or changes you might like them to make.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Monitoring:")," Ensure that your selected Chainlink node operator consistently monitors the request pipeline of your custom data feed. To this end, ask them what their alerting policy is for their mainnet data feeds (if any). This vigilance helps to keep your Web3 application safe in the event of any integration issues, such as your API endpoint failing to respond to your oracle's requests."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"At LinkWell Nodes, it is our mission to provide transparency, security, and ownership over all of your data delivery needs. Check out our ",(0,r.kt)("a",{parentName:"em",href:"/services/direct-request-jobs/Service-Level-Agreement"},"Service-Level Agreement (SLA)")," for more information here."))))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"With the proper knowledge and understanding in place, navigating the process of requesting, building, and integrating a Chainlink data feed should not only be seamless - it should be fun and exciting as well! We sincerely hope that this guide serves as a solid foundation for Web3 teams looking to integrate Chainlink's powerful Web3 services and capabilities into their smart contracts."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Looking for a way to get involved?")," Join a team and participate in a hackathon hosted by Chainlink. Hackathons are a great opportunity to enhance your Web3 knowledge, network among like-minded Web3 professionals, meet industry leaders, and even win some cool prizes!"),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"LinkWell Nodes is a U.S.-based Chainlink community oracle, providing custom data feed capabilities and self-service oracle solutions across virtually all major mainnet and testnet blockchains supported by Chainlink.")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Looking for a custom data feed? Head on over to our ",(0,r.kt)("a",{parentName:"em",href:"/"},"documentation"),", or hop into the ",(0,r.kt)("a",{parentName:"em",href:"https://discord.com/invite/Xs6SjqVPUA"},"LinkWell Nodes Discord server")," and ask for help!")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Disclaimer: all views and opinions expressed in this article are strictly our own."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"LinkWell Nodes - U.S.-based Chainlink node operator",src:n(4788).Z,title:"LinkWell Nodes - U.S.-based Chainlink node operator",width:"1080",height:"606"})))}m.isMDXComponent=!0},91:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Header-bc9891a313def6faadc04fe1c09ce64e.webp"},9546:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Remix_Diagram_1-d47668fbf53b510a9c6ea8d392e38701.webp"},3747:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Remix_Diagram_2-02cce566df7ef13d31f84e093c19b056.webp"},4788:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lw-banner_1080x606-c6d84e1ae6e43af8c26ee04d238969be.webp"}}]);