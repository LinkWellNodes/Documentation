"use strict";(self.webpackChunklinkwell_nodes_documentation=self.webpackChunklinkwell_nodes_documentation||[]).push([[2139],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=s,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),s=(n(7294),n(3905));const a={title:"Chainlink Testnet Custom Data Feeds (Ethereum, Polygon, Arbitrum, Binance, Avalanche, Base, Optimism, Fantom, Gnosis, Celo, Scroll, Linea, zkSync)"},o="Testnet Data Feeds",i={unversionedId:"services/direct-request-jobs/testnets/Testnets",id:"services/direct-request-jobs/testnets/Testnets",title:"Chainlink Testnet Custom Data Feeds (Ethereum, Polygon, Arbitrum, Binance, Avalanche, Base, Optimism, Fantom, Gnosis, Celo, Scroll, Linea, zkSync)",description:"The following documentation allows you to retrieve any custom, real-world data from any internet-based API (using Chainlink's Any API functionality), and write it to your testnet blockchain smart contract or Web3 dApp.",source:"@site/docs/services/direct-request-jobs/testnets/Testnets.md",sourceDirName:"services/direct-request-jobs/testnets",slug:"/services/direct-request-jobs/testnets/",permalink:"/services/direct-request-jobs/testnets/",draft:!1,tags:[],version:"current",frontMatter:{title:"Chainlink Testnet Custom Data Feeds (Ethereum, Polygon, Arbitrum, Binance, Avalanche, Base, Optimism, Fantom, Gnosis, Celo, Scroll, Linea, zkSync)"},sidebar:"docsSidebar",previous:{title:"zkSync Era Mainnet Data Feeds",permalink:"/services/direct-request-jobs/mainnets/zkSync-Era-Mainnet-Jobs"},next:{title:"Arbitrum Sepolia Testnet Data Feeds",permalink:"/services/direct-request-jobs/testnets/Arbitrum-Sepolia-Testnet-Jobs"}},l={},c=[{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Need more help?",id:"need-more-help",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"testnet-data-feeds"},"Testnet Data Feeds"),(0,s.kt)("p",null,"The following documentation allows you to retrieve any custom, real-world data from any internet-based API (using Chainlink's ",(0,s.kt)("a",{parentName:"p",href:"https://docs.chain.link/any-api/introduction"},"Any API")," functionality), and write it to your testnet blockchain smart contract or Web3 dApp. "),(0,s.kt)("p",null,"Please use the links below to learn how to initiate an oracle request from your smart contract. If you run into any trouble, we are here to help! Head on over to our ",(0,s.kt)("a",{parentName:"p",href:"https://discord.gg/Xs6SjqVPUA"},"Discord server")," for the fastest service."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"The fee for all of our testnet data feeds is ",(0,s.kt)("strong",{parentName:"p"},"0 LINK")," (free).")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h2",{parentName:"li",id:"arbitrum-sepolia-testnet"},(0,s.kt)("a",{parentName:"h2",href:"/services/direct-request-jobs/testnets/Arbitrum-Sepolia-Testnet-Jobs"},"Arbitrum Sepolia Testnet"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h2",{parentName:"li",id:"avalanche-fuji-testnet"},(0,s.kt)("a",{parentName:"h2",href:"/services/direct-request-jobs/testnets/Avalanche-Fuji-Testnet-Jobs"},"Avalanche Fuji Testnet"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h2",{parentName:"li",id:"base-goerli-testnet"},(0,s.kt)("a",{parentName:"h2",href:"/services/direct-request-jobs/testnets/Base-Goerli-Testnet-Jobs"},"Base Goerli Testnet"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h2",{parentName:"li",id:"base-sepolia-testnet"},(0,s.kt)("a",{parentName:"h2",href:"/services/direct-request-jobs/testnets/Base-Sepolia-Testnet-Jobs"},"Base Sepolia Testnet"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h2",{parentName:"li",id:"binance-testnet"},(0,s.kt)("a",{parentName:"h2",href:"/services/direct-request-jobs/testnets/Binance-Testnet-Jobs"},"Binance Testnet"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h2",{parentName:"li",id:"celo-alfajores-testnet"},(0,s.kt)("a",{parentName:"h2",href:"/services/direct-request-jobs/testnets/Celo-Alfajores-Testnet-Jobs"},"Celo Alfajores Testnet"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h2",{parentName:"li",id:"ethereum-sepolia-testnet"},(0,s.kt)("a",{parentName:"h2",href:"/services/direct-request-jobs/testnets/Ethereum-Sepolia-Testnet-Jobs"},"Ethereum Sepolia Testnet"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h2",{parentName:"li",id:"fantom-testnet"},(0,s.kt)("a",{parentName:"h2",href:"/services/direct-request-jobs/testnets/Fantom-Testnet-Jobs"},"Fantom Testnet"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h2",{parentName:"li",id:"optimism-sepolia-testnet"},(0,s.kt)("a",{parentName:"h2",href:"/services/direct-request-jobs/testnets/Optimism-Sepolia-Testnet-Jobs"},"Optimism Sepolia Testnet"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h2",{parentName:"li",id:"polygon-mumbai-testnet"},(0,s.kt)("a",{parentName:"h2",href:"/services/direct-request-jobs/testnets/Polygon-Mumbai-Testnet-Jobs"},"Polygon Mumbai Testnet"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h2",{parentName:"li",id:"scroll-sepolia-testnet"},(0,s.kt)("a",{parentName:"h2",href:"/services/direct-request-jobs/testnets/Scroll-Sepolia-Testnet-Jobs"},"Scroll Sepolia Testnet"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h2",{parentName:"li",id:"zksync-goerli-testnet"},(0,s.kt)("a",{parentName:"h2",href:"/services/direct-request-jobs/testnets/zkSync-Goerli-Testnet-Jobs"},"zkSync Goerli Testnet"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h2",{parentName:"li",id:"polygon-zkevm-testnet"},(0,s.kt)("a",{parentName:"h2",href:"/services/direct-request-jobs/testnets/Polygon-zkEVM-Testnet-Jobs"},"Polygon zkEVM Testnet")))),(0,s.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,s.kt)("p",null,"Having technical difficulties with your request? Check our ",(0,s.kt)("a",{parentName:"p",href:"/knowledgebase/faq/Chainlink-Users#custom-data-feeds"},"Custom Data Feeds FAQ"),"."),(0,s.kt)("h3",{id:"need-more-help"},"Need more help?"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Join our ",(0,s.kt)("a",{parentName:"li",href:"https://discord.gg/Xs6SjqVPUA"},"Discord server")," for the fastest assistance with your request. We are happy to support custom data requests!"),(0,s.kt)("li",{parentName:"ul"},"Check out our ",(0,s.kt)("a",{parentName:"li",href:"/knowledgebase/faq/Chainlink-Users",title:"FAQ - Chainlink Data Consumers"},"User FAQ")," for common questions asked by our customers.")))}m.isMDXComponent=!0}}]);