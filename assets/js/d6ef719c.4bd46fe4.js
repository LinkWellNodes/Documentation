"use strict";(self.webpackChunklinkwell_nodes_documentation=self.webpackChunklinkwell_nodes_documentation||[]).push([[2322],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3901:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(3743);const i={tableOfContentsInline:"tableOfContentsInline_prmo"};function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return r.createElement("div",{className:i.tableOfContentsInline},r.createElement(a.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null}))}},3743:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(7462),a=n(7294),i=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):r.push(a)})),r}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>s(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function u(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function p(e){const t=(0,a.useRef)(void 0),n=u();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let a=t;a<=n;a+=1)r.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),s=c(l,{anchorTopOffset:n.current}),u=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===u)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:r,isChild:i}=e;return t.length?a.createElement("ul",{className:i?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:r}))))):null}const m=a.memo(d);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:u,maxHeadingLevel:d,...f}=e;const g=(0,i.L)(),h=u??g.tableOfContents.minHeadingLevel,k=d??g.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>l({toc:o(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:h,maxHeadingLevel:k});return p((0,a.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:k}}),[s,c,h,k])),a.createElement(m,(0,r.Z)({toc:v,className:n,linkClassName:s},f))}},9613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),i=n(3901);const o={description:"A guide to how our custom Chainlink oracle integration pricing works"},l="Data Feed Pricing",s={unversionedId:"pricing/Pricing",id:"pricing/Pricing",title:"Data Feed Pricing",description:"A guide to how our custom Chainlink oracle integration pricing works",source:"@site/docs/pricing/Pricing.md",sourceDirName:"pricing",slug:"/pricing/",permalink:"/pricing/",draft:!1,tags:[],version:"current",frontMatter:{description:"A guide to how our custom Chainlink oracle integration pricing works"}},c={},u=[{value:"Fee descriptions",id:"fee-descriptions",level:3},{value:"Real-world pricing example",id:"real-world-pricing-example",level:3},{value:"What factors influence our pricing?",id:"what-factors-influence-our-pricing",level:2},{value:"1. Infrastructure and maintenance costs",id:"1-infrastructure-and-maintenance-costs",level:3},{value:"2. Gas costs on the specified network",id:"2-gas-costs-on-the-specified-network",level:3},{value:"3. The data type and quantity returned",id:"3-the-data-type-and-quantity-returned",level:3},{value:"4. Your request volume",id:"4-your-request-volume",level:3},{value:"Have a question about our pricing?",id:"have-a-question-about-our-pricing",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-feed-pricing"},"Data Feed Pricing"),(0,a.kt)("p",null,"Our goal is to provide ",(0,a.kt)("strong",{parentName:"p"},"transparency")," and ",(0,a.kt)("strong",{parentName:"p"},"simplicity")," around the way our pricing works."),(0,a.kt)("p",null,"For our Chainlink oracle integrations (",(0,a.kt)("a",{parentName:"p",href:"/services/direct-request-jobs/Jobs-and-Pricing"},"data feeds"),"), please see our pricing chart below:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Chain"),(0,a.kt)("th",{parentName:"tr",align:null},"Base Fee"),(0,a.kt)("th",{parentName:"tr",align:null},"Gas Fee"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EVM Compatible"),(0,a.kt)("td",{parentName:"tr",align:null},"$1,500 / month"),(0,a.kt)("td",{parentName:"tr",align:null},"Variable (see below)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Non-EVM Compatible"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://linkwellnodes.io/#contact-us"},"Contact Us")),(0,a.kt)("td",{parentName:"tr",align:null},"Variable (see below)")))),(0,a.kt)("h3",{id:"fee-descriptions"},"Fee descriptions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Base Fee"),": The base price of our services (includes deployment, monitoring, maintenance, and support). Please see our ",(0,a.kt)("a",{parentName:"li",href:"/services/direct-request-jobs/Service-Level-Agreement"},"Service-Level Agreement (SLA)")," for more details about the quality of our service. We provide discounts of ",(0,a.kt)("strong",{parentName:"li"},"5%")," and ",(0,a.kt)("strong",{parentName:"li"},"10%")," to the Base Fee those paying 6 or 12 months in advance (non-refundable)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Gas Fee"),": The cost of gas required to write all of your oracle updates on-chain (ie, the ",(0,a.kt)("inlineCode",{parentName:"li"},"fulfill()")," function) in a given month. This cost varies by chain, smart contract design, and gas token price. This fee is paid up-front (",(0,a.kt)("strong",{parentName:"li"},"minimum $250"),"), is refundable, and establishes a balance from which each of your requests will be deducted. If your balance reaches zero, your data feed will stop functioning. We will make every attempt to notify you before this happens, and will provide you with a private URL where you may check your remaining balance at any time."),(0,a.kt)("li",{parentName:"ul"},"Your total monthly payment will be the ",(0,a.kt)("strong",{parentName:"li"},"Base Fee")," + your ",(0,a.kt)("strong",{parentName:"li"},"Gas Fee"),". ")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We accept payment in your preferred currency (ie, ",(0,a.kt)("strong",{parentName:"p"},"ETH"),", ",(0,a.kt)("strong",{parentName:"p"},"USDC"),", ",(0,a.kt)("strong",{parentName:"p"},"fiat"),", etc.). ")),(0,a.kt)("h3",{id:"real-world-pricing-example"},"Real-world pricing example"),(0,a.kt)("p",null,"Your team decides to deploy their smart contract on Polygon (an EVM-compatible chain):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"First month"),": Your team pays the $1,500 base fee for the first month, and decides to contribute $500 initially towards your gas fees. Your smart contract makes 10,000 requests during the first month, costing an average of $0.01 in gas per request. Your total effective cost for the first month is thus ",(0,a.kt)("strong",{parentName:"li"},"$1,600")," ",(0,a.kt)("inlineCode",{parentName:"li"},"($1,500 + (10,000 * $0.01))"),". This brings your gas fee balance down to ",(0,a.kt)("strong",{parentName:"li"},"$400")," ",(0,a.kt)("inlineCode",{parentName:"li"},"($500 - $100)"),". "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Second month"),": During the second month, your user volume increases, and you make 25,000 requests, still costing an average of $0.01 in gas per request. Your total effective cost for the first month is thus ",(0,a.kt)("strong",{parentName:"li"},"$1,750")," ",(0,a.kt)("inlineCode",{parentName:"li"},"($1,500 + (25,000 * $0.01))"),". This brings your gas balance down to ",(0,a.kt)("strong",{parentName:"li"},"$150")," ",(0,a.kt)("inlineCode",{parentName:"li"},"($400 - $250)"),". At this point, we'd recommend that you make another contribution toward your gas fee balance, so that your feed doesn't go down unexpectedly in the third month, impacting your users.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"On this page"),":"),(0,a.kt)(i.Z,{toc:u.filter((e=>e.level>=2)),minHeadingLevel:2,maxHeadingLevel:2,mdxType:"TOCInline"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"what-factors-influence-our-pricing"},"What factors influence our pricing?"),(0,a.kt)("p",null,"At LinkWell nodes, we pride ourselves in keeping our fees as low as possible for our clients, while also ensuring a redundant, reliable, and highly-secure oracle infrastructure."),(0,a.kt)("p",null,"Our pricing is based on the following factors:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#1-infrastructure-costs"},"Infrastructure costs")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#2-gas-costs-on-the-specified-network"},"Gas costs on the specified network")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#3-the-data-type-and-quantity-returned"},"The data type and quantity returned")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#4-your-request-volume"},"Your request volume"))),(0,a.kt)("h3",{id:"1-infrastructure-and-maintenance-costs"},"1. Infrastructure and maintenance costs"),(0,a.kt)("p",null,"In maintaining a triple+ redundant, highly-secure, zero-downtime environment for our customers, we incur heavy infrastructure and personnel costs. The base fee goes toward offsetting these costs."),(0,a.kt)("h3",{id:"2-gas-costs-on-the-specified-network"},"2. Gas costs on the specified network"),(0,a.kt)("p",null,"Writing your requested data on-chain requires a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.chain.link/architecture-overview/architecture-request-model?parent=anyApi#fulfillment"},"fulfillment transaction"),", which requires us (the oracle) to spend gas. Depending on the network you have chosen for your data, these gas costs can vary significantly. To minimize your costs and ensure a more consistent pricing model, ",(0,a.kt)("strong",{parentName:"p"},"we recommend against using the Ethereum mainnet")," network for your requests."),(0,a.kt)("p",null,"Gas pricing example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Polygon network"),": A node operator writes a ",(0,a.kt)("inlineCode",{parentName:"li"},"uint256")," object to a consumer contract deployed on MATIC mainnet, which costs ",(0,a.kt)("strong",{parentName:"li"},"63,000 gas units")," to fulfill. Assuming a MATIC token price of ",(0,a.kt)("strong",{parentName:"li"},"1 USD"),", and a network gas price of ",(0,a.kt)("strong",{parentName:"li"},"150 Gwei"),", this will cost the node operator ",(0,a.kt)("strong",{parentName:"li"},"0.01 USD")," in gas fees."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ethereum network"),": A node operator writes a ",(0,a.kt)("inlineCode",{parentName:"li"},"uint256")," object to a consumer contract deployed on Ethereum mainnet, which costs ",(0,a.kt)("strong",{parentName:"li"},"63,000 gas units")," to fulfill. Assuming an ETH token price of ",(0,a.kt)("strong",{parentName:"li"},"2,000 USD"),", and a network gas price of ",(0,a.kt)("strong",{parentName:"li"},"30 Gwei"),", this will cost the node operator ",(0,a.kt)("strong",{parentName:"li"},"3.80 USD")," in gas fees.")),(0,a.kt)("p",null,"The above example is for illustrative purposes only; in the real world, gas price, gas token price, and Chainlink token prices all fluctuate dramatically, and factor heavily into our pricing model.  "),(0,a.kt)("h3",{id:"3-the-data-type-and-quantity-returned"},"3. The data type and quantity returned"),(0,a.kt)("p",null,"While a ",(0,a.kt)("inlineCode",{parentName:"p"},"uint256")," object may cost us on the order of ",(0,a.kt)("strong",{parentName:"p"},"60,000 gas units")," to fulfill on-chain, writing a ",(0,a.kt)("inlineCode",{parentName:"p"},"bytes[]")," object may cost us ",(0,a.kt)("strong",{parentName:"p"},"500,000 gas units")," or more, depending on the content and length of the elements returned."),(0,a.kt)("h3",{id:"4-your-request-volume"},"4. Your request volume"),(0,a.kt)("p",null,"The more requests to our Chainlink oracle, the higher the oracle gas fees, which is a factor in the total monthly fee."),(0,a.kt)("p",null,"You can read more about the associated ",(0,a.kt)("a",{parentName:"p",href:"/knowledgebase/faq/Chainlink-Operators#how-much-does-it-cost-to-run-a-chainlink-node"},"costs of being a node operator")," on our FAQ page."),(0,a.kt)("h2",{id:"have-a-question-about-our-pricing"},"Have a question about our pricing?"),(0,a.kt)("p",null,"Please don't hesitate to ",(0,a.kt)("a",{parentName:"p",href:"https://linkwellnodes.io/#contact-us",title:"Contact LinkWell Nodes"},"contact us")," about your budget constraints. We're always happy to discuss!"))}m.isMDXComponent=!0}}]);