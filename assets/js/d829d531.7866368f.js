"use strict";(self.webpackChunklinkwell_nodes_documentation=self.webpackChunklinkwell_nodes_documentation||[]).push([[8957],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=i,p=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return t?r.createElement(p,a(a({ref:n},d),{},{components:t})):r.createElement(p,a({ref:n},d))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3901:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(7294),i=t(3743);const o={tableOfContentsInline:"tableOfContentsInline_prmo"};function a(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return r.createElement("div",{className:o.tableOfContentsInline},r.createElement(i.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:a,className:"table-of-contents",linkClassName:null}))}},3743:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(7462),i=t(7294),o=t(6668);function a(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n}));const r=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):r.push(i)})),r}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[{...e,children:n}]:n}))}function c(e){const n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function s(e,n){let{anchorTopOffset:t}=n;const r=e.find((e=>c(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function d(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,o.L)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function u(e){const n=(0,i.useRef)(void 0),t=d();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:i,minHeadingLevel:o,maxHeadingLevel:a}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const r=[];for(let i=n;i<=t;i+=1)r.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:o,maxHeadingLevel:a}),c=s(l,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}function m(e){let{toc:n,className:t,linkClassName:r,isChild:o}=e;return n.length?i.createElement("ul",{className:o?void 0:t},n.map((e=>i.createElement("li",{key:e.id},i.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(m,{isChild:!0,toc:e.children,className:t,linkClassName:r}))))):null}const f=i.memo(m);function p(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:d,maxHeadingLevel:m,...p}=e;const h=(0,o.L)(),g=d??h.tableOfContents.minHeadingLevel,k=m??h.tableOfContents.maxHeadingLevel,v=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,i.useMemo)((()=>l({toc:a(n),minHeadingLevel:t,maxHeadingLevel:r})),[n,t,r])}({toc:n,minHeadingLevel:g,maxHeadingLevel:k});return u((0,i.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:g,maxHeadingLevel:k}}),[c,s,g,k])),i.createElement(f,(0,r.Z)({toc:v,className:t,linkClassName:c},p))}},6405:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));t(3901);const o={title:"Chainlink Node Operators: The Backbone of the Chainlink Network",description:"Exploring the Role of Chainlink Node Operators in Powering Decentralized Oracle Networks that Underpin Chainlink\u2019s Official Suite of Web3 Services",date:"2024-12-15",image:"https://docs.linkwellnodes.io/img/.../img.png",keywords:["chainlink oracle","chainlink node operator","smart contracts","web3","blockchain"],authors:["Ken"],tags:["chainlink node operator"]},a=void 0,l={permalink:"/blog/Chainlink-Node-Operator",source:"@site/blog/Chainlink-Node-Operator/index.md",title:"Chainlink Node Operators: The Backbone of the Chainlink Network",description:"Exploring the Role of Chainlink Node Operators in Powering Decentralized Oracle Networks that Underpin Chainlink\u2019s Official Suite of Web3 Services",date:"2024-12-15T00:00:00.000Z",formattedDate:"December 15, 2024",tags:[{label:"chainlink node operator",permalink:"/blog/tags/chainlink-node-operator"}],readingTime:11.745,hasTruncateMarker:!0,authors:[{name:"Ken Reiners",title:"Co-Founder - LinkWell Nodes",url:"https://www.linkedin.com/in/ken-reiners-755806167/",imageURL:"/img/ken-reiners-100x100.webp",key:"Ken"}],frontMatter:{title:"Chainlink Node Operators: The Backbone of the Chainlink Network",description:"Exploring the Role of Chainlink Node Operators in Powering Decentralized Oracle Networks that Underpin Chainlink\u2019s Official Suite of Web3 Services",date:"2024-12-15",image:"https://docs.linkwellnodes.io/img/.../img.png",keywords:["chainlink oracle","chainlink node operator","smart contracts","web3","blockchain"],authors:["Ken"],tags:["chainlink node operator"]},nextItem:{title:"Introducing A Custom Chainlink Price Feed Solution For Web3 Apps",permalink:"/blog/Custom-Chainlink-Price-Feed-Solution"}},c={authorsImageUrls:[void 0]},s=[],d={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{class:"lw-subtitle"},"Exploring the Role of Chainlink Node Operators in Powering Decentralized Oracle Networks that Underpin Chainlink\u2019s Official Suite of Web3 Services"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/chainlink-node-operator/chainlink-node-operator.webp",alt:"Chainlink Node Operator"})))}m.isMDXComponent=!0}}]);