"use strict";(self.webpackChunklinkwell_nodes_documentation=self.webpackChunklinkwell_nodes_documentation||[]).push([[5774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3901:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(3743);const o={tableOfContentsInline:"tableOfContentsInline_prmo"};function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return r.createElement("div",{className:o.tableOfContentsInline},r.createElement(a.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null}))}},3743:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(7462),a=n(7294),o=n(6668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):r.push(a)})),r}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function u(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>s(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function p(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function c(e){const t=(0,a.useRef)(void 0),n=p();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let a=t;a<=n;a+=1)r.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),s=u(l,{anchorTopOffset:n.current}),p=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===p)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function m(e){let{toc:t,className:n,linkClassName:r,isChild:o}=e;return t.length?a.createElement("ul",{className:o?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(m,{isChild:!0,toc:e.children,className:n,linkClassName:r}))))):null}const d=a.memo(m);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:u,minHeadingLevel:p,maxHeadingLevel:m,...f}=e;const k=(0,o.L)(),h=p??k.tableOfContents.minHeadingLevel,v=m??k.tableOfContents.maxHeadingLevel,y=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:h,maxHeadingLevel:v});return c((0,a.useMemo)((()=>{if(s&&u)return{linkClassName:s,linkActiveClassName:u,minHeadingLevel:h,maxHeadingLevel:v}}),[s,u,h,v])),a.createElement(d,(0,r.Z)({toc:y,className:n,linkClassName:s},f))}},38:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(3901);const i={title:"Chainlink Development Help",description:"Need help with your Chainlink smart contract? We provide custom data feeds, external adapter support, and Chainlink infrastructure / monitoring / security support."},l="Development and Support Services",s={unversionedId:"services/Development-Services",id:"services/Development-Services",title:"Chainlink Development Help",description:"Need help with your Chainlink smart contract? We provide custom data feeds, external adapter support, and Chainlink infrastructure / monitoring / security support.",source:"@site/docs/services/Development-Services.md",sourceDirName:"services",slug:"/services/Development-Services",permalink:"/services/Development-Services",draft:!1,tags:[],version:"current",frontMatter:{title:"Chainlink Development Help",description:"Need help with your Chainlink smart contract? We provide custom data feeds, external adapter support, and Chainlink infrastructure / monitoring / security support."},sidebar:"docsSidebar",previous:{title:"Service-Level Agreement (SLA)",permalink:"/services/direct-request-jobs/Service-Level-Agreement"},next:{title:"Chainlink Direct Requests (Any API)",permalink:"/knowledgebase/Direct-Request-Guide"}},u={},p=[{value:"Advisory calls",id:"advisory-calls",level:2},{value:"Customer support",id:"customer-support",level:2},{value:"Mainnet customers",id:"mainnet-customers",level:3},{value:"Testnet-only customers",id:"testnet-only-customers",level:3},{value:"Premium Support",id:"premium-support",level:3},{value:"Dedicated 24/7 support *",id:"dedicated-247-support-",level:4},{value:"Ad-hoc support",id:"ad-hoc-support",level:4},{value:"Smart contract development",id:"smart-contract-development",level:2},{value:"Mainnet customers",id:"mainnet-customers-1",level:3},{value:"Testnet-only customers",id:"testnet-only-customers-1",level:3},{value:"Miscellaneous smart contract support",id:"miscellaneous-smart-contract-support",level:3},{value:"External Adapter (EA) development",id:"external-adapter-ea-development",level:2},{value:"External adapter hosting and development",id:"external-adapter-hosting-and-development",level:3},{value:"Mainnet customers",id:"mainnet-customers-2",level:4},{value:"Testnet-only customers",id:"testnet-only-customers-2",level:4},{value:"External adapter use cases",id:"external-adapter-use-cases",level:3},{value:"Need something else?",id:"need-something-else",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"development-and-support-services"},"Development and Support Services"),(0,a.kt)("p",null,"LinkWell Nodes offers a variety of support services to assist you with all of your Web3 needs. Please don't hesitate to reach out if you have any questions!"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"On this page"),":"),(0,a.kt)(o.Z,{toc:p.filter((e=>e.level>=2)),minHeadingLevel:1,maxHeadingLevel:2,mdxType:"TOCInline"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"advisory-calls"},"Advisory calls"),(0,a.kt)("p",null,"Looking for a team of Web3 experts to advise you on your ",(0,a.kt)("strong",{parentName:"p"},"Chainlink"),", ",(0,a.kt)("strong",{parentName:"p"},"infrastructure"),", ",(0,a.kt)("strong",{parentName:"p"},"monitoring"),", or ",(0,a.kt)("strong",{parentName:"p"},"smart contract")," issues? "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://calendly.com/linkwell-nodes"},"Book a 30-minute video call")," with us to get the help you need. Please include the details of your request in the calendar invite. Our standard advisory rate is ",(0,a.kt)("strong",{parentName:"p"},"100 USD")," / half hour session (payment in cryptocurrency preferred). If we can't help you with your question, the call is free.")),(0,a.kt)("p",null,"Our team has over ",(0,a.kt)("strong",{parentName:"p"},"30 years")," of combined professional experience in the cybersecurity, enterprise software, financial services, and Web3 industries, and are confident we can assist you with your Web3 needs."),(0,a.kt)("p",null,"Our specialities include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AWS infrastructure design"),(0,a.kt)("li",{parentName:"ul"},"Monitoring infrastructure (AWS CloudWatch and Splunk)"),(0,a.kt)("li",{parentName:"ul"},"Smart contract development"),(0,a.kt)("li",{parentName:"ul"},"Chainlink node troubleshooting"),(0,a.kt)("li",{parentName:"ul"},"Chainlink Direct Request (Any API) issues"),(0,a.kt)("li",{parentName:"ul"},"External adapter design")),(0,a.kt)("h2",{id:"customer-support"},"Customer support"),(0,a.kt)("p",null,"Need help connecting to our Chainlink oracle services? LinkWell Nodes is happy to provide everything you need to get you up and running."),(0,a.kt)("h3",{id:"mainnet-customers"},"Mainnet customers"),(0,a.kt)("p",null,"For our customers looking to make paid requests to our oracle infrastructure on mainnet blockchain(s):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We provide ",(0,a.kt)("strong",{parentName:"li"},"free")," basic assistance with your implementation."),(0,a.kt)("li",{parentName:"ul"},"For enterprise-grade support, please check out our ",(0,a.kt)("a",{parentName:"li",href:"#premium-support"},"premium support")," options. ")),(0,a.kt)("h3",{id:"testnet-only-customers"},"Testnet-only customers"),(0,a.kt)("p",null,"For our customers looking to use our oracle infrastructure on testnet blockchain(s) only:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For personalized support, please check out our ",(0,a.kt)("a",{parentName:"li",href:"#premium-support"},"premium support")," options. "),(0,a.kt)("li",{parentName:"ul"},"We provide answers to many basic questions within our ",(0,a.kt)("a",{parentName:"li",href:"/knowledgebase/FAQ"},"Chainlink FAQ"),".")),(0,a.kt)("h3",{id:"premium-support"},"Premium Support"),(0,a.kt)("h4",{id:"dedicated-247-support-"},"Dedicated 24/7 support *"),(0,a.kt)("p",null,"For customers looking for an enterprise-grade support experience:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dedicated on-call support channel with an 8-hour response SLA (or your money back)"),(0,a.kt)("li",{parentName:"ul"},"24/7 monitoring of your data feed for issues "),(0,a.kt)("li",{parentName:"ul"},"External adapter development support"),(0,a.kt)("li",{parentName:"ul"},"Smart contract implementation support"),(0,a.kt)("li",{parentName:"ul"},"One 30-minute meeting per month"),(0,a.kt)("li",{parentName:"ul"},"Our monthly rate for this plan is ",(0,a.kt)("strong",{parentName:"li"},"250 USD")," (payment in cryptocurrency preferred)")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"*"," Recommended for ensuring the uptime of mainnet deployments")),(0,a.kt)("h4",{id:"ad-hoc-support"},"Ad-hoc support"),(0,a.kt)("p",null,"For customers seeking one-off answers to their implementation questions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We offer one-off ",(0,a.kt)("a",{parentName:"li",href:"#advisory-calls"},"support calls")," at our standard advisory rate of ",(0,a.kt)("strong",{parentName:"li"},"100 USD")," per half-hour session."),(0,a.kt)("li",{parentName:"ul"},"We also offer chat-based support through our ",(0,a.kt)("a",{parentName:"li",href:"https://discord.gg/Xs6SjqVPUA"},"Discord server"),", at a rate of ",(0,a.kt)("strong",{parentName:"li"},"150 USD")," per 24-hour period (payment in cryptocurrency preferred), centered around our working hours (EST timezone is typical for us). We will set up a private dedicated Discord channel with you to discuss all of your support needs. If your questions are outside our area of expertise, you'll get your money back.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Ready to get started?")," "),(0,a.kt)("p",{parentName:"admonition"},"Contact us on our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/Xs6SjqVPUA"},"Discord server")," to begin your support request.")),(0,a.kt)("h2",{id:"smart-contract-development"},"Smart contract development"),(0,a.kt)("p",null,"Need help building out your smart contract? LinkWell Nodes offers custom smart contract development services on anything from Chainlink implementations to gas optimizations."),(0,a.kt)("h3",{id:"mainnet-customers-1"},"Mainnet customers"),(0,a.kt)("p",null,"For our customers looking to make paid requests to our oracle infrastructure on mainnet blockchain(s):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We offer ",(0,a.kt)("strong",{parentName:"li"},"free")," basic smart contract development services for integrating your Web3 application with our Chainlink oracle infrastructure."),(0,a.kt)("li",{parentName:"ul"},"For more advanced customization, a development fee of ",(0,a.kt)("strong",{parentName:"li"},"150 USD / hour")," applies (minimum 1 hour, payment in cryptocurrency preferred).")),(0,a.kt)("h3",{id:"testnet-only-customers-1"},"Testnet-only customers"),(0,a.kt)("p",null,"For our customers looking to use our oracle infrastructure on testnet blockchain(s) only:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We offer ",(0,a.kt)("a",{parentName:"li",href:"/services/direct-request-jobs/testnets"},"smart contract templates")," for integrating your Web3 application with our Chainlink oracle infrastructure."),(0,a.kt)("li",{parentName:"ul"},"For smart contract support, a development fee of ",(0,a.kt)("strong",{parentName:"li"},"150 USD / hour")," applies (minimum 1 hour, payment in cryptocurrency preferred).")),(0,a.kt)("h3",{id:"miscellaneous-smart-contract-support"},"Miscellaneous smart contract support"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For support with miscellaneous smart contracts (ie, non-Chainlink related), a development fee of ",(0,a.kt)("strong",{parentName:"li"},"150 USD / hour")," applies (minimum 1 hour, payment in cryptocurrency preferred).")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Ready to get started?")," "),(0,a.kt)("p",{parentName:"admonition"},"Contact us on our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/Xs6SjqVPUA"},"Discord server")," to begin your smart contract development request.")),(0,a.kt)("h2",{id:"external-adapter-ea-development"},"External Adapter (EA) development"),(0,a.kt)("h3",{id:"external-adapter-hosting-and-development"},"External adapter hosting and development"),(0,a.kt)("h4",{id:"mainnet-customers-2"},"Mainnet customers"),(0,a.kt)("p",null,"For our customers looking to make paid requests to our oracle infrastructure on mainnet blockchain(s):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We'll host your external adapter for ",(0,a.kt)("strong",{parentName:"li"},"free")," on our highly redundant infrastructure - all you'll pay is the typical per-transaction cost for using our oracle services."),(0,a.kt)("li",{parentName:"ul"},"We'll develop your basic external adapter for ",(0,a.kt)("strong",{parentName:"li"},"free")," within 1-2 business days. "),(0,a.kt)("li",{parentName:"ul"},"For more advanced customization, a development fee of ",(0,a.kt)("strong",{parentName:"li"},"150 USD / hour")," applies (minimum 1 hour, payment in cryptocurrency preferred).")),(0,a.kt)("h4",{id:"testnet-only-customers-2"},"Testnet-only customers"),(0,a.kt)("p",null,"For our customers looking to use our oracle infrastructure on testnet blockchain(s) only:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An external adapter development fee of ",(0,a.kt)("strong",{parentName:"li"},"150 USD / hour")," applies (minimum 1 hour, payment in cryptocurrency preferred)."),(0,a.kt)("li",{parentName:"ul"},"Customers who have paid our development fee will be able to host their external adapter on our highly redundant infrastructure for ",(0,a.kt)("strong",{parentName:"li"},"free"),".")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Ready to get started?")," "),(0,a.kt)("p",{parentName:"admonition"},"Contact us on our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/Xs6SjqVPUA"},"Discord server")," to begin your external adapter request.")),(0,a.kt)("h3",{id:"external-adapter-use-cases"},"External adapter use cases"),(0,a.kt)("p",null,"You might need an external adapter if any of the following requirements pertain to you:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You need off-chain computation to save gas."),(0,a.kt)("li",{parentName:"ul"},"You need customized handling and/or parsing of your API endpoint's data before returning it on-chain."),(0,a.kt)("li",{parentName:"ul"},"You need to write data to other blockchains (interoperability).")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can read more about external adapters in Chainlink's official documentation ",(0,a.kt)("a",{parentName:"p",href:"https://docs.chain.link/chainlink-nodes/external-adapters/external-adapters"},"here"),".")),(0,a.kt)("h2",{id:"need-something-else"},"Need something else?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"We've got you covered.")),(0,a.kt)("p",null,"Join our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/Xs6SjqVPUA"},"Discord server")," for the fastest assistance, or feel free to contact us ",(0,a.kt)("a",{parentName:"p",href:"https://linkwellnodes.io/#contact-us",title:"Contact LinkWell Nodes"},"here")," with the relevant details of your request."))}d.isMDXComponent=!0}}]);