"use strict";(self.webpackChunklinkwell_nodes_documentation=self.webpackChunklinkwell_nodes_documentation||[]).push([[5308],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4044:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Retrieving AccuWeather data using Chainlink",l={unversionedId:"services/direct-request-jobs/examples/weather-data/AccuWeather",id:"services/direct-request-jobs/examples/weather-data/AccuWeather",title:"Retrieving AccuWeather data using Chainlink",description:"Introduction",source:"@site/docs/services/direct-request-jobs/examples/weather-data/AccuWeather.md",sourceDirName:"services/direct-request-jobs/examples/weather-data",slug:"/services/direct-request-jobs/examples/weather-data/AccuWeather",permalink:"/services/direct-request-jobs/examples/weather-data/AccuWeather",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Oracle Request Examples",permalink:"/services/direct-request-jobs/Any-API-Guide"},next:{title:"Retrieving Alpha Vantage Stock Price data using Chainlink",permalink:"/services/direct-request-jobs/examples/stock-price-data/Alpha-Vantage"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Real-world example",id:"real-world-example",level:2},{value:"1. Create an AccuWeather API key",id:"1-create-an-accuweather-api-key",level:3},{value:"2. Design your consumer contract",id:"2-design-your-consumer-contract",level:3},{value:"2a. Add the constructor:",id:"2a-add-the-constructor",level:4},{value:"2b. Add your request function (example):",id:"2b-add-your-request-function-example",level:4},{value:"2c. Retrieve the response (example):",id:"2c-retrieve-the-response-example",level:4},{value:"Need to protect your API key?",id:"need-to-protect-your-api-key",level:3},{value:"Simulating the above request",id:"simulating-the-above-request",level:2},{value:"1. <strong>Send the HTTP request</strong>:",id:"1-send-the-http-request",level:4},{value:"2. <strong>Analyze the response</strong>:",id:"2-analyze-the-response",level:4},{value:"3. <strong>Apply the JSON path</strong>:",id:"3-apply-the-json-path",level:4},{value:"4. <strong>Apply the multiplier</strong>:",id:"4-apply-the-multiplier",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Still need more help?",id:"still-need-more-help",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"retrieving-accuweather-data-using-chainlink"},"Retrieving AccuWeather data using Chainlink"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"AccuWeather provides and supports many different weather APIs that provide up-to-date and highly accurate forecasts around the globe. With AccuWeather's utility APIs, users can retrieve unique identifiers and geographical coordinates for various locations.  AccuWeather offers two different types of APIs - the Core weather API and MinuteCast API. The Core weather API provides endpoints to get daily and hourly weather forecasts, current conditions, and daily index data. It also provides endpoints to search for locations all around the world, including cities and countries. Using the MinuteCast API, you can specify a specific location for a 120-minute precipitation forecasts."),(0,a.kt)("p",null,"The following guide illustrates an easy example of how to retrieve a ",(0,a.kt)("inlineCode",{parentName:"p"},"uint256")," value from the AccuWeather API, and write it to your blockchain smart contract using our highly-resilient Chainlink oracle infrastructure."),(0,a.kt)("h2",{id:"real-world-example"},"Real-world example"),(0,a.kt)("p",null,"Accessing AccuWeather data from within your blockchain contract or Web3 application is as simple as:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Creating an AccuWeather API key through the AccuWeather website."),(0,a.kt)("li",{parentName:"ol"},"Deploying the following Chainlink consumer contract onto the ERC-20 blockchain network of your choice. ")),(0,a.kt)("p",null,"Below we'll walk you through the steps necessary to implement such a solution."),(0,a.kt)("h3",{id:"1-create-an-accuweather-api-key"},"1. Create an AccuWeather API key"),(0,a.kt)("p",null,"In order to retrieve data from the AccuWeather API, you'll need an API key. "),(0,a.kt)("p",null,"You may request a free API key from AccuWeather here: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.accuweather.com/"},"AccuWeather Developer Portal")),(0,a.kt)("h3",{id:"2-design-your-consumer-contract"},"2. Design your consumer contract"),(0,a.kt)("p",null,"Add the following sample code to your ",(0,a.kt)("strong",{parentName:"p"},"consumer contract"),"."),(0,a.kt)("h4",{id:"2a-add-the-constructor"},"2a. Add the constructor:"),(0,a.kt)("p",null,"The constructor specifies important information about the request destination and payment for your request. ",(0,a.kt)("strong",{parentName:"p"},"Important"),": This information varies by chain, oracle, and job: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol",metastring:"reference",reference:!0},"https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/examples/weather-data/AccuWeather.sol#L23-L32\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You'll need to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD_CHAINLINK_TOKEN_ADDRESS_HERE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD_ORACLE_ADDRESS_HERE"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD_JOB_ID_HERE")," with the values appropriate to the specific blockchain network and job that you'll be using. You can find these values within our ",(0,a.kt)("a",{parentName:"p",href:"/services/direct-request-jobs/Jobs-and-Pricing"},"Direct Request Job Documentation"),". Chainlink token addresses can be found ",(0,a.kt)("a",{parentName:"p",href:"https://docs.chain.link/resources/link-token-contracts"},"here"),".")),(0,a.kt)("h4",{id:"2b-add-your-request-function-example"},"2b. Add your request function (example):"),(0,a.kt)("p",null,"The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information on each required parameter, reference the above '",(0,a.kt)("strong",{parentName:"p"},"Request parameters"),"' section:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol",metastring:"reference",reference:!0},"https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/examples/weather-data/AccuWeather.sol#L34-L55\n")),(0,a.kt)("h4",{id:"2c-retrieve-the-response-example"},"2c. Retrieve the response (example):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol",metastring:"reference",reference:!0},"https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/examples/weather-data/AccuWeather.sol#L57-L65\n")),(0,a.kt)("h3",{id:"need-to-protect-your-api-key"},"Need to protect your API key?"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Data entered into a smart contract is visible to the general public.")),(0,a.kt)("p",null,"If you'd like to protect your API key from being broadcast on-chain, you can instead store this information off-chain on our secure infrastructure. Please fill out our ",(0,a.kt)("a",{parentName:"p",href:"https://linkwellnodes.io/Getting-Started.html"},"Request Survey")," to get started - once we receive your information, we'll provide you with a custom job ID that will send your API key safely along with your request."),(0,a.kt)("h2",{id:"simulating-the-above-request"},"Simulating the above request"),(0,a.kt)("p",null,"Let's walk through each step of the above ",(0,a.kt)("strong",{parentName:"p"},"sample request"),", to better understand how it all works together:"),(0,a.kt)("h4",{id:"1-send-the-http-request"},"1. ",(0,a.kt)("strong",{parentName:"h4"},"Send the HTTP request"),":"),(0,a.kt)("p",null,"The following ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," command simulates the same HTTP request that our Chainlink node makes shortly after you trigger the ",(0,a.kt)("inlineCode",{parentName:"p"},"request()")," function within your consumer contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -k 'https://api.accuweather.com/currentconditions/v1/335315.json?apikey={your key}' \\\n --request 'GET' \\\n --header 'content-type: application/json'\n")),(0,a.kt)("h4",{id:"2-analyze-the-response"},"2. ",(0,a.kt)("strong",{parentName:"h4"},"Analyze the response"),":"),(0,a.kt)("p",null,"The following is a sample response body returned to our Chainlink node by the above HTTP request (abbreviated for clarity):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[\n  {\n    "LocalObservationDateTime": "2023-08-24T07:08:00-04:00",\n    "EpochTime": 1692875280,\n    "WeatherText": "Cloudy",\n    "WeatherIcon": 7,\n    "HasPrecipitation": false,\n    "PrecipitationType": null,\n    "IsDayTime": true,\n    "Temperature": {\n      "Metric": {\n        "Value": 19.6,\n        "Unit": "C",\n        "UnitType": 17\n      },\n      "Imperial": {\n        "Value": 67,\n        "Unit": "F",\n        "UnitType": 18\n      }\n    },\n    "MobileLink": "http://www.accuweather.com/en/us/fort-george-g-meade-md/20755/current-weather/8641_pc?lang=en-us",\n    "Link": "http://www.accuweather.com/en/us/fort-george-g-meade-md/20755/current-weather/8641_pc?lang=en-us"\n  }\n]\n')),(0,a.kt)("h4",{id:"3-apply-the-json-path"},"3. ",(0,a.kt)("strong",{parentName:"h4"},"Apply the JSON path"),":"),(0,a.kt)("p",null,"After receiving the above sample response, our Chainlink node will attempt to filter the result by the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," parameter value (",(0,a.kt)("inlineCode",{parentName:"p"},"0,Temperature,Imperial,Value"),"). After applying the provided path, we get the following result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"57\n")),(0,a.kt)("h4",{id:"4-apply-the-multiplier"},"4. ",(0,a.kt)("strong",{parentName:"h4"},"Apply the multiplier"),":"),(0,a.kt)("p",null,"After filtering the sample response by the provided JSON path, our Chainlink node will multiply the result by the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"multiplier")," parameter value (",(0,a.kt)("inlineCode",{parentName:"p"},"10 ** 18"),"). After applying this multiplier, we get the following value, which is ultimately written to your smart contract as a ",(0,a.kt)("inlineCode",{parentName:"p"},"uint256")," object by our Chainlink oracle:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"57000000000000000000\n")),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"Having trouble with your request? Check out our ",(0,a.kt)("a",{parentName:"p",href:"/knowledgebase/faq/Chainlink-Users#direct-request-jobs"},"Direct Request FAQ"),"."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This job has a configured gas limit of ",(0,a.kt)("strong",{parentName:"p"},"500,000")," for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, use the appropriate block explorer to navigate to the '",(0,a.kt)("strong",{parentName:"p"},"Oracle Address"),"' you entered into your consumer contract for this job to see if any recent transaction(s) have failed due to an '",(0,a.kt)("strong",{parentName:"p"},"out of gas"),"' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). ")),(0,a.kt)("h2",{id:"still-need-more-help"},"Still need more help?"),(0,a.kt)("p",null,"Please reach out to us in ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/AJ66pRz4"},"Discord")," if you require additional assistance with this request."))}h.isMDXComponent=!0}}]);