"use strict";(self.webpackChunklinkwell_nodes_documentation=self.webpackChunklinkwell_nodes_documentation||[]).push([[2386],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),u=i,m=p["".concat(s,".").concat(u)]||p[u]||h[u]||o;return t?a.createElement(m,r(r({ref:n},d),{},{components:t})):a.createElement(m,r({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3901:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294),i=t(3743);const o={tableOfContentsInline:"tableOfContentsInline_prmo"};function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return a.createElement("div",{className:o.tableOfContentsInline},a.createElement(i.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:r,className:"table-of-contents",linkClassName:null}))}},3743:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),i=t(7294),o=t(6668);function r(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):a.push(i)})),a}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function s(e){const n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>s(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,o.L)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function p(e){const n=(0,i.useRef)(void 0),t=d();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:o,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let i=n;i<=t;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),s=c(l,{anchorTopOffset:t.current}),d=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}function h(e){let{toc:n,className:t,linkClassName:a,isChild:o}=e;return n.length?i.createElement("ul",{className:o?void 0:t},n.map((e=>i.createElement("li",{key:e.id},i.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(h,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const u=i.memo(h);function m(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:h,...m}=e;const k=(0,o.L)(),f=d??k.tableOfContents.minHeadingLevel,g=h??k.tableOfContents.maxHeadingLevel,b=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>l({toc:r(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:f,maxHeadingLevel:g});return p((0,i.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:f,maxHeadingLevel:g}}),[s,c,f,g])),i.createElement(u,(0,a.Z)({toc:b,className:t,linkClassName:s},m))}},3686:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(7462),i=(t(7294),t(3905)),o=t(3901);const r={title:"Chainlink Node Operators: The Backbone of the Chainlink Network",description:"Exploring the Role of Chainlink Node Operators in Powering Decentralized Oracle Networks that Underpin Chainlink\u2019s Official Suite of Web3 Services",date:"2024-12-15",image:"/img/chainlink-node-operator/chainlink-node-operators.jpg",keywords:["chainlink oracle","chainlink node operator","smart contracts","web3","blockchain"],authors:["Ken"],tags:["chainlink node operator"]},l=void 0,s={permalink:"/blog/Chainlink-Node-Operator",source:"@site/blog/Chainlink-Node-Operator/index.md",title:"Chainlink Node Operators: The Backbone of the Chainlink Network",description:"Exploring the Role of Chainlink Node Operators in Powering Decentralized Oracle Networks that Underpin Chainlink\u2019s Official Suite of Web3 Services",date:"2024-12-15T00:00:00.000Z",formattedDate:"December 15, 2024",tags:[{label:"chainlink node operator",permalink:"/blog/tags/chainlink-node-operator"}],readingTime:11.71,hasTruncateMarker:!0,authors:[{name:"Ken Reiners",title:"Co-Founder - LinkWell Nodes",url:"https://www.linkedin.com/in/ken-reiners-755806167/",imageURL:"/img/ken-reiners-100x100.webp",key:"Ken"}],frontMatter:{title:"Chainlink Node Operators: The Backbone of the Chainlink Network",description:"Exploring the Role of Chainlink Node Operators in Powering Decentralized Oracle Networks that Underpin Chainlink\u2019s Official Suite of Web3 Services",date:"2024-12-15",image:"/img/chainlink-node-operator/chainlink-node-operators.jpg",keywords:["chainlink oracle","chainlink node operator","smart contracts","web3","blockchain"],authors:["Ken"],tags:["chainlink node operator"]},nextItem:{title:"Introducing A Custom Chainlink Price Feed Solution For Web3 Apps",permalink:"/blog/Custom-Chainlink-Price-Feed-Solution"}},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Who are Chainlink Node Operators?",id:"who-are-chainlink-node-operators",level:2},{value:"What Chainlink Node Operators Do",id:"what-chainlink-node-operators-do",level:2},{value:"How Chainlink Nodes Form Decentralized Oracle Networks (DONs)",id:"how-chainlink-nodes-form-decentralized-oracle-networks-dons",level:2},{value:"Who Should Become a Chainlink Node Operator",id:"who-should-become-a-chainlink-node-operator",level:2},{value:"Chainlink Node Operator Profitability",id:"chainlink-node-operator-profitability",level:2},{value:"Requirements for Running a Chainlink Oracle",id:"requirements-for-running-a-chainlink-oracle",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Chainlink Node Operator Resources",id:"chainlink-node-operator-resources",level:2}],p={toc:d},h="wrapper";function u(e){let{components:n,...r}=e;return(0,i.kt)(h,(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{class:"lw-subtitle"},"Exploring the role of Chainlink node operators in powering decentralized oracle networks that underpin Chainlink\u2019s official suite of Web3 services"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/chainlink-node-operator/chainlink-node-operator.webp",alt:"Chainlink Node Operator"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"On this page"),":"),(0,i.kt)(o.Z,{toc:d.filter((e=>e.level>=1)),minHeadingLevel:2,maxHeadingLevel:2,mdxType:"TOCInline"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Due to the inherent security properties of blockchains, smart contracts (on-chain) cannot directly access data from external systems (off-chain)."),(0,i.kt)("p",null,"This limitation, known as the ",(0,i.kt)("a",{parentName:"p",href:"https://chain.link/education-hub/oracle-problem"},"oracle problem"),", requires the use of oracles as middleware to facilitate the secure, bidirectional transfer of data between on-chain and off-chain environments. Chainlink node operators form the backbone of the Chainlink Network, powering decentralized oracle networks that enable secure and reliable access to external data. They manage the critical infrastructure that ensures smart contracts across blockchains can seamlessly interact with real-world data, enabling them to function effectively."),(0,i.kt)("p",null,"In this article, our goal is to provide a detailed view of Chainlink node operators, who they are, what they do, and more."),(0,i.kt)("center",null,(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/jD9903qyt6w",frameborder:"0",allowfullscreen:!0})),(0,i.kt)("h2",{id:"who-are-chainlink-node-operators"},"Who are Chainlink Node Operators?"),(0,i.kt)("p",null,"Chainlink node operators are globally-distributed teams specializing in running secure, reliable, and fault-tolerant infrastructure. They typically come from diverse professional backgrounds in the Web2 space - including system administration, network engineering, security, DevOps, monitoring, and others."),(0,i.kt)("p",null,"Chainlink node operators can be grouped into three primary categories: ",(0,i.kt)("strong",{parentName:"p"},"Enterprise Nodes"),", ",(0,i.kt)("strong",{parentName:"p"},"DevOps Nodes"),", and ",(0,i.kt)("strong",{parentName:"p"},"Community Nodes"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enterprise Nodes:")," These nodes are operated by established firms like T-Systems, Vodafone, or Swisscom, which have decades of experience managing back-end infrastructure for Web2 systems."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DevOps Nodes:")," Teams such as BlockDaemon and Infura fall into this category. They bring proven experience in providing blockchain infrastructure, including RPC nodes and PoS validators, making them vital contributors to decentralized networks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Community Nodes:")," Community Chainlink node operators emerge from within the Chainlink community itself. These teams typically begin by offering support, such as information-sharing or custom off-chain services, and progress to becoming trusted and reputable operators. Examples of teams in this category include LinkRiver and Matrixed.Link.")),(0,i.kt)("p",null,"Chainlink node operator teams typically consist of smaller organizations of 2-10 members in the case of community nodes, while DevOps or Enterprise Chainlink node operators are typically a branch of a larger organization.  "),(0,i.kt)("p",null,"Regardless of the category, Chainlink node operators all play a similar role - powering the Chainlink Network by leveraging their experience and expertise to facilitate the secure and reliable operation of Chainlink services."),(0,i.kt)("h2",{id:"what-chainlink-node-operators-do"},"What Chainlink Node Operators Do"),(0,i.kt)("p",null,"Within the ",(0,i.kt)("strong",{parentName:"p"},"Community Nodes")," category, there are two subgroups: ",(0,i.kt)("strong",{parentName:"p"},"official node operators")," and ",(0,i.kt)("strong",{parentName:"p"},"community node operators"),". Official Chainlink node operators have been security-reviewed and approved by Chainlink Labs to support their suite of Web3 services (such as Chainlink\u2019s official ",(0,i.kt)("a",{parentName:"p",href:"https://data.chain.link/feeds"},"price feeds"),")."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Chainlink Web3 Services",src:t(8586).Z,title:"Chainlink Web3 Services",width:"1920",height:"1080"}),(0,i.kt)("center",null,(0,i.kt)("small",null,"Credit: ",(0,i.kt)("a",{parentName:"p",href:"https://blog.chain.link/platform-for-verifiable-web"},"Chainlink")))),(0,i.kt)("p",null,"Community Chainlink node operators (such as LinkWell Nodes) play a slightly different role in the ecosystem. This niche of Chainlink oracle operator typically includes offering custom Chainlink oracle integrations for members of the community. While they don\u2019t formally participate in providing data for Chainlink\u2019s official suite of data feeds, they choose to instead focus on providing Web3 builders with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.linkwellnodes.io/"},"customized Chainlink data feeds")," that fit their specific project\u2019s need and price-point."),(0,i.kt)("p",null,"Regardless of the category of node operator, an operator\u2019s day-to-day activities are similar in many ways. Responsibilities typically include:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Infrastructure Management:")," Operating and maintaining Chainlink nodes, blockchain full nodes, external adapters, reverse proxies, security tools, monitoring tools, and more."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Supporting Chainlink Services:")," Providing oracle services for official offerings like CCIP, Functions, Data Feeds, Automation, and VRF (official node operators only), or the more legacy basic request model or FluxAggregator services (community node operators)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Data Sourcing and Delivery:")," Aggregating and delivering accurate data on-chain from diverse sources to ensure decentralization and reliability."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Monitoring and Alerting:")," Using open source or enterprise grade tooling for monitoring, alerting, observability, and advanced analytics."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Security and Reliability:")," Implementing robust security measures, conducting audits, and maintaining fault-tolerant systems."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Scalability and Optimization:")," Scaling and optimizing infrastructure for performance, reliability, and cost efficiency."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Community Engagement:")," Participating in Chainlink events, supporting the ecosystem, and collaborating with the community.")),(0,i.kt)("p",null,"Many Chainlink node operator teams contribute to more than just supporting the Chainlink network - choosing also to pursue additional initiatives within the ecosystem, such as DexTrac\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://prism.dextrac.com/chainlink"},"Prism")," analytics tool or LinkPool\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://stake.link/"},"staking platform"),". At LinkWell Nodes, we focus on developing ",(0,i.kt)("a",{parentName:"p",href:"https://docs.linkwellnodes.io/services/direct-request-jobs/Jobs-and-Pricing"},"custom Chainlink oracle solutions")," for Web3 teams that need specific off-chain data or computation."),(0,i.kt)("p",null,"Additionally, some teams choose to extend their expertise to support other projects, including offering validation services for established or emerging blockchain networks."),(0,i.kt)("h2",{id:"how-chainlink-nodes-form-decentralized-oracle-networks-dons"},"How Chainlink Nodes Form Decentralized Oracle Networks (DONs)"),(0,i.kt)("p",null,"While individual Chainlink oracles can directly handle requests (ie, using the\xa0",(0,i.kt)("a",{parentName:"p",href:"https://docs.linkwellnodes.io/blog/Chainlink-Basic-Request-Model-Architectures"},"Any API / basic request model"),"), Chainlink oracles achieve their full potential when working together in a decentralized oracle network. These networks provide off-chain computation and data aggregation from multiple oracles, eliminating single points of failure and ensuring secure and reliable data delivery to the blockchain."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Chainlink Decentralized Oracle Network",src:t(2386).Z,title:"Chainlink Decentralized Oracle Network",width:"1000",height:"563"}),(0,i.kt)("center",null,(0,i.kt)("small",null,"Credit: ",(0,i.kt)("a",{parentName:"p",href:"https://blog.chain.link/how-chainlink-is-helping-blockchain-cross-the-chasm/"},"Chainlink")))),(0,i.kt)("p",null,"At the heart of every decentralized oracle network is the\xa0",(0,i.kt)("strong",{parentName:"p"},"Chainlink oracle"),"\xa0- a runtime developed in Go by\xa0",(0,i.kt)("a",{parentName:"p",href:"https://chainlinklabs.com/"},"Chainlink Labs"),". The Chainlink network is an expandable ensemble of independent oracles. While anyone can run their own singular Chainlink oracle, decentralized oracle networks can impose their own rules regarding access and data aggregation."),(0,i.kt)("p",null,"Unlike typical blockchain environments, the Chainlink network does not employ a unified consensus mechanism, thereby allowing for greater flexibility (and decentralization) among its networks and Web services. These services, powered by decentralized oracle networks using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.chain.link/architecture-overview/off-chain-reporting"},"OCR")," protocol include CCIP, Functions, VRF, Automation, Data Feeds, Price Feeds, and Proof of Reserve, with more to come such as DECO."),(0,i.kt)("h2",{id:"who-should-become-a-chainlink-node-operator"},"Who Should Become a Chainlink Node Operator"),(0,i.kt)("p",null,"Becoming a Chainlink node operator is as straightforward as deploying a Chainlink node. From our experience, many Web3 teams opt to run their own Chainlink nodes to reduce the operational costs associated with using an official Chainlink service or a third-party Chainlink node operator like us, particularly in the case for accessing off-chain data. That being said, only a select few teams are recognized as official Chainlink node operators. In our view, to be considered a true Chainlink node operator, you must implement an enterprise-grade deployment that includes robust security measures, comprehensive monitoring, high availability, and the ability to provide reliable Chainlink services."),(0,i.kt)("p",null,"At the time of writing, there are 94 node operator teams supporting Chainlink\u2019s services, according to ",(0,i.kt)("a",{parentName:"p",href:"https://www.chainlinkecosystem.com/category/node-operator"},"Chainlink Ecosystem"),". DexTrac\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://prism.dextrac.com/chainlink/operators"},"Prism Analytics")," tool, however, lists 53 official Chainlink node operators. While we don\u2019t know what the exact number is at this time, we suspect that the true number of node operators may fall within the range of 53-94 teams. "),(0,i.kt)("p",null,"Additionally, while we can\u2019t speak for Chainlink Labs regarding their future needs or criteria for Chainlink node operators as they work toward becoming a global Web3 standard, we can offer a list of pros and cons based on our experiences and observations:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pros"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contributing to Chainlink\u2019s Mission:")," Becoming a Chainlink node operator allows you to play a direct role in advancing Chainlink\u2019s vision of a world powered by cryptographic truth, supporting the network and its community with oracle services."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Earning Potential:")," Node operators are compensated for delivering reliable, accurate, and secure off-chain data and computation, offering a clear financial incentive."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hands-On Access to Emerging Technology:")," Running a Chainlink oracle provides invaluable experience with cutting-edge blockchain innovations and the decentralized applications they support.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cons"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Startup and Maintenance Costs:")," Setting up and maintaining a Chainlink oracle involves investments in hardware, software, and ongoing operational expenses."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Technical Demands:")," Operating a node requires expertise in blockchain, smart contracts, DevOps, monitoring, networking, system administration, security, and more."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Time-Intensive Business Model:")," Running a Chainlink node is more than technical maintenance, as such is the case with running validators; it resembles managing a traditional business, requiring reputation, credibility, and active business development.")),(0,i.kt)("p",null,"Over the last several years, we've observed many enthusiastic individuals express interest in becoming Chainlink node operators. While many possessed the necessary technical skills, they often underestimated the level of business development and overall commitment required to succeed in this role, leading many to abandon their efforts. Becoming a successful Chainlink node operator demands significant time, effort, and dedication. If your primary motivation isn\u2019t rooted in supporting the community and/or advancing Chainlink\u2019s vision, it may be worth considering other opportunities."),(0,i.kt)("h2",{id:"chainlink-node-operator-profitability"},"Chainlink Node Operator Profitability"),(0,i.kt)("p",null,"Although we cannot provide official statements about the revenues or profitability of Chainlink node operators, we can offer insights based on our experience as a community node operator as well as analysis of data from Dune dashboards and other sources related to official Chainlink node operator profitability."),(0,i.kt)("p",null,"According to ",(0,i.kt)("a",{parentName:"p",href:"https://dune.com/linkpool/chainlink-revenue"},"LinkPool\u2019s Chainlink Revenue")," dashboard and at the time of writing, official Chainlink node operators have earned just over $400,000,000 in total revenue across all Chainlink services since mainnet launch. Broken up by service, the vast majority of Chainlink revenue has been from Chainlink feeds."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/chainlink-node-operator/linkpool-nop-revenue.webp",alt:"Chainlink Node Operator Revenue Via LinkPool's Dune Analytics"})),(0,i.kt)("p",null,"Additionally, an independent analyst, Eric Wallach, conducted fairly robust analysis of Chainlink node operator incomes, expenses, and overall profitability.  ",(0,i.kt)("a",{parentName:"p",href:"https://x.com/ejwallach/status/1635367652196769792"},"His analysis")," suggested that official Chainlink node operators, at the time of writing, earned roughly $628k (on average) in net income per year. He also provides detailed spreadsheets of his analysis which can be found ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1QnlvA2eQVGQAsN45FJ9a2DzgSQCyj0cD-22FF6kyaXk/edit?gid=1878917412#gid=1878917412"},"here"),"."),(0,i.kt)("p",null,"As a community Chainlink node operator, our revenue model differs from official Chainlink services. We specialize in providing custom oracle solutions to paying clients. Deploying a Chainlink node on a mainnet incurs monthly expenses ranging from $500 to $1,500, influenced by factors such as high-availability setups versus single oracles, and the choice between operating full RPC nodes or utilizing third-party RPC connections. We offer our custom Chainlink oracle services at a base rate of $500 per month, with fees increasing based on the specific requirements of each oracle integration."),(0,i.kt)("p",null,"By leveraging custom profitability tools alongside an enterprise-grade monitoring solution (Splunk) to aggregate all Chainlink logs, we gain detailed insights into our income and expenses, down to the individual transaction level."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/chainlink-node-operator/linkwell-txn-analytics.webp",alt:"LinkWell Nodes Transaction Analytics Dashboard Via Splunk"})),(0,i.kt)("p",null,"This chart provide several key metrics from actual paying clients that we\u2019ve supported within the last year, representing a small slice in time of our actual transaction analytics. The main dashboard panel to focus on here are the \u201cUSD Profit By Transaction\u201d panel, which indicates our profitability per transaction (amount paid minus gas costs)."),(0,i.kt)("p",null,"For these customers in particular, we averaged $1-$2 in profit per transaction. It\u2019s important to note, however, that our profit numbers varied drastically depending on the blockchain network we were supporting as well as the gas costs during the time of transaction. The profitability numbers also don\u2019t take into account our other expenses, including manpower, infrastructure, and more. Moving forward, we plan to release additional analytics and insights on Chainlink node operator profitability."),(0,i.kt)("h2",{id:"requirements-for-running-a-chainlink-oracle"},"Requirements for Running a Chainlink Oracle"),(0,i.kt)("p",null,"To deploy and operate a Chainlink oracle, the following ",(0,i.kt)("a",{parentName:"p",href:"https://docs.chain.link/chainlink-nodes/resources/requirements"},"minimum requirements")," must be met:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hardware"),": At least 2 CPU cores and 4 GB of RAM for basic operations; more resources are recommended for handling a higher volume of jobs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Operating System"),": Linux or MacOS; for Windows users, the Windows Subsystem for Linux (WSL) is necessary (not recommended for mainnet deployments)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Software Dependencies"),": Docker for containerization and PostgreSQL (version 12 or later) for database management."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Blockchain Node Access"),": Access to a blockchain node, either by running your own or using a service provider such as Alchemy or QuickNode, to interact with the blockchain network.")),(0,i.kt)("p",null,"Additionally, professional Chainlink node operators need several other components in order to function and operate effectively:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Monitoring Systems:")," Chainlink oracles, and the surrounding off-chain infrastructure, require real-time monitoring and alerting using tools such as the Grafana stack or Splunk."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Data Source Subscriptions:")," Subscriptions to high quality data providers are required for several Chainlink services such as Data Feeds, Price Feeds, and Proof of Reserve."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"On-chain Operator Contract:")," This on-chain contract is a critical component for Chainlink oracles running jobs that want to support the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.chain.link/architecture-overview/architecture-request-model"},"basic request model")," for off-chain data retrieval."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"External Adapters"),": ",(0,i.kt)("a",{parentName:"li",href:"https://blog.chain.link/build-and-use-external-adapters/"},"External adapters")," facilitate custom logic for requests as HTTP services that can be written in any programming language, handling tasks from authenticated data access to IoT processing and bank payments."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Jobs:")," Chainlink oracles require ",(0,i.kt)("a",{parentName:"li",href:"https://docs.chain.link/chainlink-nodes/oracle-jobs/jobs"},"jobs"),". These jobs, provided in the TOML specification, define the parameters (within the Chainlink node interface) of the Chainlink service that they intend to support."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Automation Tools:")," Tools such as Kubernetes, Ansible, Cloudformation, or Terraform are helpful for provisioning, deployment, configuration, and/or orchestration of Chainlink node infrastructure.")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Chainlink node operators play a critical role in the blockchain ecosystem by providing secure, reliable, and decentralized access to off-chain data and computation, enabling the seamless operation of smart contracts. Their efforts bridge the on-chain and off-chain worlds, supporting the functionality and scalability of decentralized Web3 applications."),(0,i.kt)("p",null,"Becoming a successful Chainlink node operator demands a combination of technical proficiency, business strategy, and a dedication to furthering Chainlink\u2019s vision. While the initial setup may pose challenges, it presents a rewarding opportunity for individuals passionate about driving Web3 innovation and supporting decentralized technologies. As Chainlink continues to expand, node operators will remain integral to its growth and the broader development of the internet of contracts."),(0,i.kt)("h2",{id:"chainlink-node-operator-resources"},"Chainlink Node Operator Resources"),(0,i.kt)("p",null,"If interested in diving in further on the topic of Chainlink node operators, we\u2019ve aggregated a list of resources below:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://docs.linkwellnodes.io/knowledgebase/faq/Chainlink-Operators"},"LinkWell Nodes Chainlink Node Operator FAQ"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://www.chainlinkecosystem.com/category/node-operator"},"Chainlink Ecosystem"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://prism.dextrac.com/chainlink/operators"},"DexTrac\u2019s Prism Tool"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://dune.com/linkpool"},"LinkPool\u2019s Dune Analytics Dashboards"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://docs.chain.link/chainlink-nodes"},"Chainlink Docs"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"LinkWell Nodes is a U.S.-based Chainlink community oracle, providing custom data feed capabilities and self-service oracle solutions across virtually all major mainnet and testnet blockchains supported by Chainlink."),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Looking for a custom data feed? Head on over to our ",(0,i.kt)("a",{parentName:"em",href:"/"},"documentation"),", or hop into the ",(0,i.kt)("a",{parentName:"em",href:"https://discord.com/invite/Xs6SjqVPUA"},"LinkWell Nodes Discord server")," and ask for help!")),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Disclaimer: all views and opinions expressed in this article are strictly our own."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"/img/lw-banner_1080x606.webp",src:t(4788).Z,width:"1080",height:"606"})))}u.isMDXComponent=!0},2386:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/chainlink-don-2072e4f665f5cfae607a2bb6f97fde3a.webp"},8586:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/chainlink-web3-services-1822355e6b06e823cb4d3d9477f59dc2.webp"},4788:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/lw-banner_1080x606-c6d84e1ae6e43af8c26ee04d238969be.webp"}}]);