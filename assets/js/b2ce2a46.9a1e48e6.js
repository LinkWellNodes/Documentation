"use strict";(self.webpackChunklinkwell_nodes_documentation=self.webpackChunklinkwell_nodes_documentation||[]).push([[4694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=u(n),p=o,m=h["".concat(s,".").concat(p)]||h[p]||c[p]||a;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=n(7462),o=(n(7294),n(3905));const a={title:"Introduction",date:"2023-09-02",authors:["Ken","Derek"],tags:["Chainlink","Splunk","AWS","oracles","web3"]},r="LinkWell Nodes",l={permalink:"/blog/Introduction",source:"@site/blog/Introduction/index.md",title:"Introduction",description:"LinkWell Nodes is a U.S.-based Chainlink oracle. Our mission is to support Web3 developers in building a world powered by cryptographic truth.",date:"2023-09-02T00:00:00.000Z",formattedDate:"September 2, 2023",tags:[{label:"Chainlink",permalink:"/blog/tags/chainlink"},{label:"Splunk",permalink:"/blog/tags/splunk"},{label:"AWS",permalink:"/blog/tags/aws"},{label:"oracles",permalink:"/blog/tags/oracles"},{label:"web3",permalink:"/blog/tags/web-3"}],readingTime:9.265,hasTruncateMarker:!0,authors:[{name:"Ken Reiners",title:"Co-Founder - LinkWell Nodes",url:"https://www.linkedin.com/in/ken-reiners-755806167/",imageURL:"/img/ken-reiners-100x100.webp",key:"Ken"},{name:"Derek Ricciuto",title:"Co-Founder - LinkWell Nodes",url:"https://www.linkedin.com/in/derek-ricciuto",imageURL:"/img/derek-ricciuto-100x100.webp",key:"Derek"}],frontMatter:{title:"Introduction",date:"2023-09-02",authors:["Ken","Derek"],tags:["Chainlink","Splunk","AWS","oracles","web3"]},prevItem:{title:"Chainlink Any API: Direct Request vs. Functions",permalink:"/blog/Chainlink-Any-API-Direct-Requests-Vs-Functions"},nextItem:{title:"Welcome",permalink:"/blog/Welcome"}},s={authorsImageUrls:[void 0,void 0]},u=[{value:"Our Story",id:"our-story",level:2},{value:"Our Mission",id:"our-mission",level:2},{value:"What We Have In Store",id:"what-we-have-in-store",level:2},{value:"Chainlink Deployment Model In AWS",id:"chainlink-deployment-model-in-aws",level:2},{value:"Splunk Integration",id:"splunk-integration",level:2}],d={toc:u},h="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"LinkWell Nodes is a U.S.-based Chainlink oracle. Our mission is to support Web3 developers in building a world powered by cryptographic truth."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"LinkWell Nodes - U.S.-based Chainlink node operator",src:n(5845).Z,title:"LinkWell Nodes - U.S.-based Chainlink node operator",width:"1080",height:"485"})),(0,o.kt)("p",null,"It's hard to believe how far Chainlink has come in the span of just five years. From their first white paper in 2017 in which Chainlink proposed a solution to the oracle problem, a problem once thought unsolvable, but refers to the inherent inability of blockchains to access external data, to their recent announcement on their collaboration with SWIFT and 12+ financial institutions, Chainlink has slowly but surely been fulfilling their destiny of becoming a global standard."),(0,o.kt)("p",null,"From the start, Chainlink has kept their nose to the grindstone, caring little for media attention or community hype for the first several years, and instead focusing their efforts on researching, developing and building. Last year's SmartCon felt like an inflection point for Chainlink after former Google CEO Eric Schmidt's Fireside chat with Chainlink CEO Sergey Nazarov in which Eric pressured Sergey to just come out and announce Chainlink's true plan\u200a-\u200afor Chainlink to have a presence in virtually every aspect of Web3."),(0,o.kt)("p",null,"And after enabling $7 trillion in transaction value, integrating with over 1,700 Web3 projects and the development of CCIP (which is launching soon), it's safe to say that their plan for total world domination (just kidding, kind of) has slowly but surely been coming to fruition."),(0,o.kt)("p",null,"At LinkWell Nodes, we liken ourselves to Chainlink in a sense. While perhaps not on such a large or epic scale, we too have been keeping our nose to the grindstone, researching, developing and building. And after over a year of hard work and dedication building out our Chainlink node infrastructure, we decided it was time to step out of the shadows and formally announce what we've been working on, and what we have in store."),(0,o.kt)("p",null,"But before we do, you may be wondering, where did these LinkWell Nodes guys come from? What are they all about, and who are they? Well, hold on to your tendies, as it's time for a short bedtime story."),(0,o.kt)("h2",{id:"our-story"},"Our Story"),(0,o.kt)("p",null,"LinkWell Nodes' story began shortly after the 2022 Chainlink Oracle Olympics\u200a-\u200aa global competition of 30 professional teams vying for the right to become the next official Chainlink node operator. As individual participants during the competition, we (Ken and Derek\u200a-\u200aLinkWell Nodes' co-founders) ended up tying for third place\u200a-\u200apassing every challenge that Chainlink threw at us, but just barely missing out on the bonus points which cinched the victory for the winning team\u200a-\u200aNorthWest Nodes."),(0,o.kt)("p",null,"Ken likes to blame his wife for being pregnant and giving birth to his second daughter during the last two days of the competition, but all jokes aside, Ken and Derek decided to join forces, and shortly after, LinkWell Nodes was formed."),(0,o.kt)("p",null,"As a freshly minted Chainlink node operations team, we immediately went back to the drawing board with an initial vision of designing and engineering the most sophisticated and elegant Chainlink node deployment model that we could possibly devise, with scalability, redundancy, and security at the forefront. With Ken's area of expertise in cybersecurity and Splunk (an enterprise grade monitoring platform), and Derek's area of expertise as a full-stack developer, and our combined expertise with AWS and Chainlink node operations, the path forward was clear."),(0,o.kt)("p",null,"After over a year of aggressive engineering efforts in the infrastructure, monitoring, and cybersecurity space with our three favorite technologies\u200a-\u200aAWS, Splunk, and Chainlink, we think that we were able to succeed in fulfilling that vision."),(0,o.kt)("p",null,"Furthermore, we designed our Chainlink infrastructure stack to be easily deployable and reusable, while keeping members of the Chainlink community desiring to spin up their own nodes as quickly and easily as possible, in mind. As a part of our mission to support the Chainlink community, we may be open sourcing some or all of our stack, but more on that later."),(0,o.kt)("h2",{id:"our-mission"},"Our Mission"),(0,o.kt)("p",null,"Led by truth over trust. Driven to innovate, build and create. Our mission is to support Chainlink in enabling developers, startups and enterprises unlock the true value of Web3."),(0,o.kt)("p",null,"Ultimately, we want to help Chainlink fulfill its mission by doing whatever we can to support the Chainlink community. As community-based Chainlink node operators, we are limited to what services we can provide, but that isn't stopping us from going above and beyond the call of duty."),(0,o.kt)("p",null,"After spinning up 5 mainnet chains, 6 testnet chains, over 130 direct request jobs and robust documentation to boot, LinkWell Nodes' present objective is to deliver secure, reliable, on-chain data to the general public, all while continuing to innovate on the back-end and supporting the community on the front-end."),(0,o.kt)("p",null,"LinkWell Nodes has its eyes set on eventually becoming an official node operator, but more importantly, being recognized as one of the most reliable, communicative, and supportive Node Operator teams present in the Chainlink (and broader Web3) ecosystem."),(0,o.kt)("p",null,"While we recognize that Functions, recently released, is a superior method in many ways to the traditional direct request model, it is still in beta, and currently comes with a few limitations. You can check out our FAQ in order to understand our stance on Functions a bit more in-depth, but at this time, we think there is still a desire and need for traditional direct request support."),(0,o.kt)("p",null,"That's why we have devoted significant efforts in building out (what we believe) is the most comprehensive set of Chainlink node job offerings and documentation in the public sphere today. Our aim with this effort is to set a new standard for Chainlink community support, and to provide Web3 developers with their off-chain data needs as effortlessly and seamlessly as possible."),(0,o.kt)("h2",{id:"what-we-have-in-store"},"What We Have In Store"),(0,o.kt)("p",null,"Fortunately, we aren't putting all of our eggs in the direct request basket. We've also recognized how challenging it can be for newer Chainlink node operators who don't have as much knowledge or experience as we do with deploying, operating and maintaining Chainlink nodes."),(0,o.kt)("p",null,"After noticing the same questions arise over and over again in some of the more popular Chainlink Discord channels, we started building out an FAQ that we hope can act as the start of a knowledge base within our public documentation for both aspiring Chainlink node operators and consumers alike. As an aside, we have our own Discord channel as well if you'd like to pop in and join our small but growing community, or if you are a developer in need of support!"),(0,o.kt)("h2",{id:"chainlink-deployment-model-in-aws"},"Chainlink Deployment Model In AWS"),(0,o.kt)("p",null,"Additionally, as alluded to earlier, we may have plans in place to open source our Chainlink infrastructure stack for other members of the community to use. We aren't providing any guarantees or timelines on a public release at this time, but if there is enough demand and excitement for this release, we will be happy to move forward with it.\nTo summarize what that release would look like, however, it would be similar to the AWS Quickstart in that after some basic AWS account setup, a new user would simply fill out an AWS Cloudformation template, hit the deploy button, and be up and running with Chainlink node infrastructure in the time it takes to sip your morning coffee."),(0,o.kt)("p",null,"One of the major design choices we made with our Chainlink infrastructure deployment model was to make the actual deployment as simple and flexible as possible, with multiple deployment architectures in AWS. Looking to simply spin up a testnet Chainlink node in a public subnet with a 3rd party RPC connection for fast and easy access? We support that."),(0,o.kt)("p",null,"What about a highly-available and secure architecture with Chainlink nodes, external adapters and full nodes, and with auto-scaling and load balancing built in? We support that as well across all 5 mainnet chains and 6 testnet chains, all via Infrastructure as Code (IAC), with support for more chains to come in the future. What about monitoring and alerting? Out of the box, we include automatic Cloudwatch monitoring and alerting."),(0,o.kt)("h2",{id:"splunk-integration"},"Splunk Integration"),(0,o.kt)("p",null,'But one of the features we are most excited to share is our deep integration with Splunk. While our Splunk integration deserves a separate blog or two on its own (stay posted for that), Splunk is one of the most, if not the most powerful enterprise grade monitoring, alerting and analytics tool on the market today. For the ninth time running, Splunk was named a "Leader" in Gartner\'s 2022 Magic Quadrant (MQ) for Security Information and Event Management (SIEM).'),(0,o.kt)("p",null,"Tireless efforts were made to not only automatically deploy and configure Splunk within our Cloudformation templates at the flip of a switch, but to also automatically forward all Chainlink infrastructure logs directly into Splunk upon instance boot, if desired to do so."),(0,o.kt)("p",null,"As we were able to engineer this solution from the ground up, the infrastructure logs and metrics coming from Chainlink nodes, databases, full nodes and external adapters, to name some of the major ones, get fired off to Splunk where they are stored, parsed and configured to populate a robust suite of Chainlink monitoring dashboards and alerts that are wrapped up in our custom built Splunk application."),(0,o.kt)("p",null,"We didn't just stop at Chainlink infrastructure logs either, as we have monitoring in place at the AWS account level. Cloudtrail API calls, config changes, IAM actions, VPN activity and more are all forwarded and logged in Splunk. And yes, we have dashboards and alerts for this activity too."),(0,o.kt)("p",null,"As self-proclaimed trendsetters and innovators with the perfect skill sets and background to bring our Chainlink infrastructure and Splunk monitoring capability to life, we don't mention any of this in a boastful manner, but mostly because we are passionate and excited to share what we've developed, and what we have to offer, with the greater Chainlink community."),(0,o.kt)("p",null,"That being said, it's important to note that due to the exhaustive and at times cumbersome nature of configuring and maintaining Splunk, if there were enough interest and demand, we are considering offering Splunk, along with several other very useful of powerful features that we haven't mentioned yet, as a set of premium but optional capabilities under a subscription based model."),(0,o.kt)("p",null,"In a perfect world we'd open source everything, but for the time being we aren't quite there yet, so even a small subscription fee would help our ambitious development efforts towards supporting the Chainlink community. But we can cross that bridge when we get there."),(0,o.kt)("p",null,"Lastly, we recognize that there will likely be an endless need for Chainlink educators and content creators. Whether that be educational content geared towards Chainlink node operations, or content geared towards supporting Web3 developers interested in using Chainlink services, we are here to help."),(0,o.kt)("p",null,"With what feels like a bull market just around the corner coupled with Chainlink's seemingly unstoppable momentum, there couldn't be a more exciting time to be a part of the Chainlink community, and one can't help but wonder what the next 5 years will have in store!"),(0,o.kt)("p",null,"If you are interested in staying tuned, feel free to join our Discord, or follow us on Twitter @LinkWell_Nodes."),(0,o.kt)("p",null,"Thanks for reading!"))}c.isMDXComponent=!0},5845:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/lw-banner_1080x485_Docs-Home-06a666d421b6cdc713b6eb8ce0b6a12f.webp"}}]);