import TOCInline from '@theme/TOCInline';

# Chainlink User FAQ

The target audience for this FAQ is **consumers of Chainlink data** - in other words, those looking to integrate Chainlink in order to write real-world data into their blockchain smart contract.

The following is a list of frequently-asked questions and answers collected from our experience supporting the `#nodes`, `#operator-requests`, and `#external-adapters` channels within the [Chainlink Official Discord server](https://discord.com/invite/chainlink).

---

**On this page**:

<TOCInline
  toc={toc.filter((node) => node.level >= 2)}
  minHeadingLevel={1}
  maxHeadingLevel={4}
/>

---

## General Topics

### What chains does Chainlink support?

The chains that Chainlink supports can be viewed in the Chainlink documentation [here](https://docs.chain.link/resources/link-token-contracts). Please note that this list of chains is subject to change over time as Chainlink adds or removes support for a given chain.

### Should I run my own Chainlink node?

Please see the following answer in our Node Operator FAQ page [here](/knowledgebase/faq/Chainlink-Operators#should-i-run-my-own-chainlink-node).

### How do I find a specific price feed?

Contract addresses for official Chainlink price feeds across the various blockchain networks supported by Chainlink can be found [here](https://docs.chain.link/data-feeds/price-feeds/addresses).

If you can't find a price feed that works for you, we'd be happy to support your request. Please feel free to visit our [data feed documentation](/services/direct-request-jobs/Jobs-and-Pricing) to get started! You can also shop around for other node operators via the `#operator-requests` channel of the [Chainlink Official Discord server](https://discord.com/invite/chainlink).

### Where can I find all node and job listings?

While [market.link](https://market.link) was formerly the go-to directory for public Chainlink node and job listings, this feature has since been deprecated, and it is unclear if it will resurface in the future. Besides this, we aren't currently aware of any centralized directory for Chainlink nodes / job offerings. 

That being said, many node operators (such as ourselves) choose to host their own websites and documentation pages that display their own Chainlink job offerings. A decent approach is to perform a Google search for 'Chainlink node operator' to see what job offerings you might find!

To view a comprehensive list of Chainlink jobs offered by LinkWell Nodes, visit our [data feed documentation](/services/direct-request-jobs/Jobs-and-Pricing).

### Where can I find an Oracle Address and Job ID for my smart contract?

The best place to request a Job ID specific to your requirements is within the `#operator-requests` channel of the [Chainlink Official Discord server](https://discord.com/invite/chainlink). An existing node operator will typically respond to your request by providing you with a corresponding Job ID and oracle contract address. 

If you're looking to get started using LinkWell Nodes as your oracle data provider, please feel free to visit our [data feed documentation](/services/direct-request-jobs/Jobs-and-Pricing), which contains job IDs, oracle addresses, and smart contract code samples for initiating your first oracle request against our Chainlink oracle infrastructure.

:::info 
Have a question? Please feel free to join our [Discord](https://discord.com/invite/Xs6SjqVPUA) server for immediate assistance!
:::

## Direct Request Jobs

### What is a Direct Request job?

Please see our [Direct Request knowledgebase article](/knowledgebase/Direct-Request-Guide) for more information on how direct requests work, and how to get started. 

### My request transaction won't send

Please ensure that you have enough gas token present in the wallet that is initiating the request. For mainnet requests, please additionally ensure that you have the appropriate amount of LINK tokens present within your consumer contract before making the request. 

If you are using one of our jobs, see the `setFeeInHundredthsOfLink()` function call present within the constructor of your consumer contract for the minimum amount of LINK token that needs to be present within your consumer contract in order to initiate a `request()` call.
 
### I'm not getting a response back to my consumer contract

If you've waited over 60 seconds after successfully sending your request transaction, and aren't seeing any data returned to your smart contract:

1. Double-check that you are passing the correct values into the `setChainlinkToken()` and `setChainlinkOracle()` functions , and assigning the correct value to the `jobId` object. 

:::info
If you are using our oracle services, you may find the correct corresponding values in our job documentation [here](/services/direct-request-jobs/Jobs-and-Pricing).
:::

2. Confirm that the API endpoint to which you are making your HTTP request is working via `curl`.

:::info
If you are using our oracle services, a sample `curl` command is included within the documentation for each job [here](/services/direct-request-jobs/Jobs-and-Pricing).
:::

3. If you've included a JSON `path` var (ie, `req.add("path", "key1,0,key2)`), ensure that the response returned by your HTTP request is in JSON format, and that the provided path exists within it.

4. If you've included a `mulitiplier` var (ie, `req.addInt('multiplier', 10 ** 18)`), ensure that the response that you are trying to multiply is a number. If a JSON `path` was also included in the request, the multiplication operation occurs on the result of the JSON path filter.  

5. Confirm that the oracle you are using didn't run out of gas while writing your requested data on-chain. To check this, look up the address of your related oracle (ie, the address passed to your `setChainlinkOracle()` function) within the appropriate blockchain explorer, to check for any recent transactions that failed due to an **'out of gas'** error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact the corresponding oracle team to request a higher gas allowance for your specific use case (may result in higher job pricing).

:::info
If you are using our oracle services, you may find the oracle address that corresponds to your specific job within our job documentation [here](/services/direct-request-jobs/Jobs-and-Pricing), or reach out to us regarding higher gas limits for your specific use case via our [Discord server](https://discord.gg/AJ66pRz4).
::: 

## Chainlink Functions

### Should I use Chainlink Functions?

Currently, Chainlink Functions is in beta, and available only to whitelisted participants on a subset of mainnets. You can apply for access [here](https://chainlinkcommunity.typeform.com/requestaccess). 

Chainlink Functions is superior to the traditional 'Direct Request' model in many aspects, in that your request logic is executed by a DON (Decentralized Oracle Network), instead of by a single Chainlink Oracle - thereby eliminating any concerns around centralization and reliability - while keeping costs roughly the same as if executed by a single node. 

It is also superior to requesting data from a typical OCR (Off-Chain Reporting) network, in that you remain in control of your logic's deployment lifecycle, eliminating the need for any external adapter deployments or other coordination with your chosen node operator(s).

Conversely, in order to use Chainlink Functions, you'll need to write your request and response workflow in JavaScript (JS), which may be a limitation for some users.

To determine whether Chainlink Functions is right for you, weigh the various [limitations of Chainlink Functions](#limitations-of-chainlink-functions) in making your decision. 

### Limitations of Chainlink Functions

Despite the obvious [advantages](#should-i-use-chainlink-functions) of using Chainlink Functions, there are several limitations that need to be considered.

You should use Chainlink Functions only if ALL of the following apply:

* You are OK with your logic being executed multiple times per request (ie, this might not be ideal for placing a trade, or sending an email) 
* Your ERC-20 address has been whitelisted by Chainlink Labs for access to Chainlink Functions (may take up to 2 weeks in some cases)
* You don't need a mainnet deployment ASAP (Functions is currently in mainnet beta)
* Your use case is limited to the following [supported testnets](https://docs.chain.link/chainlink-functions/supported-networks)
* You are comfortable programming your request in **JavaScript**
* Your consumer contract's callback function will always require less than **300,000 gas**
* Your JavaScript code can execute in under **5 minutes**
* Your JavaScript code requires less than **128 megabytes** of memory to run
* The request sent by your JavaScript code is under **30kb**
* Your response you expect from Chainlink is under **256 bytes**
* Your JavaScript code makes at most **5 HTTP requests**, that each respond within **3 seconds**
* Your HTTP requests don't return a payload of more than **2 megabytes** (ie, a large image file)

To read more about service limits related to Chainlink Functions, you may view the official documentation [here](https://docs.chain.link/chainlink-functions/resources/service-limits).

### Should I use an external adapter, or Chainlink Functions?

Chainlink Functions are better than external adapters in many ways - namely, enabling you to maintain your own deployment lifecycle (ie, no contact with node operators), while being able to run your job against a decentralized network of oracle operators for a low fee. To learn more about the advantages of using Chainlink Functions, read our write-up about it [here](#should-i-use-chainlink-functions).

There are however, some use cases where using an external adapter does make sense - namely, if you're using a network that's not yet supported on Functions, you already have an external adapter developed and don't want to re-write it using JavaScript, or if you'd like your logic developed for you by a node operator. You can read more about the limitations of using Chainlink Functions [here](#limitations-of-chainlink-functions).

## External Adapters

### Do I need to run my own Chainlink node in order to use my external adapter?

If you already have an external adapter, you can choose to either connect it to your own Chainlink node, or reach out to an existing Chainlink node operator, who will typically host your adapter on their redundant infrastructure for free. 

To help you decide whether to run your Chainlink node, read our write-up about it [here](/knowledgebase/faq/Chainlink-Operators#should-i-run-my-own-chainlink-node).

### Are external adapters decentralized?

This depends on your app's requirements around decentralization and trust-minimization. Typically, just a single node operator hosts your adapter and returns your data to your application. Although a typical node operator will host your adapter on highly-redundant infrastructure, this may represent single point-of-failure (SPOF) for your application, as well as require a certain level of trust between you and the node operator.

In choosing where to host your external adapter, you may also choose to reach out to a DON (Decentralized Operator Network) - an aggregation network comprised of multiple node operators - to host your adapter. This represents a trust-minimized approach, wherein your adapter is hosted by multiple oracle teams, and aggregation is done at the protocol level before being returned to your contract. 

To get connected with the appropriate oracle operator(s) for your external adapter's use case, we suggest reaching out within the `#operator-requests` channel of the [Chainlink Official Discord server](https://discord.com/invite/chainlink). 

## Security

### Can I use a single data source for my data feed?

While using a single data source can be a sufficient approach for testnet applications, it represents a single point-of-failure (SPOF) for your application, and thus is typically not recommended for mainnet / production applications. 

To keep your Web3 application decentralized, we recommend requesting your data from multiple data sources, and performing some sort of aggregation (mean, median, mode, etc.) within your job / external adapter / function logic in order to determine the appropriate result. 

At LinkWell Nodes, we are certainly happy to help you set up a job that aggregates your decentralized production data. Please feel free to join our [Discord](https://discord.com/invite/Xs6SjqVPUA) server to get started!  

### Can I trust a single node operator?

Any time you make a direct request for data to a singular node, that node could possibly manipulate the data (ie, if they were a malicious actor). However, it's our view that any kind of profitable data manipulation by a singular node operator would quickly be identified, and the reputation of the node operator destroyed. 

At LinkWell Nodes, we know that our reputation - and our customers' happiness - is the key to our business model, and to our continued success. Leveraging our team's vast experience in the financial services, government, and security industries, we ensure that our infrastructure is hardened using world-class security techniques. Among other strategies, we accomplish this by following best practices provided not only by Chainlink - but by the financial services industry as a whole. In addition, we monitor all major aspects of our Chainlink infrastructure not only for uptime and reliability, but also for any anomalous and/or suspicious traffic, using enterprise-grade monitoring tools (primarily [Splunk](https://www.splunk.com/) in our case, along with several other proprietary systems that we cannot mention). 

For those in need of maximum decentralization, you might consider using a DON (Decentralized Oracle Network). As community-based node operators, the only type of DON for which we are able to provide support are the legacy [Flux Monitor](https://docs.chain.link/chainlink-nodes/oracle-jobs/all-jobs#flux-monitor-jobs) networks, which are highly expensive to the consumer, as the fees and support complexities typically scale directly with the number of node operators supporting the DON. The benefit of our [data feed offerings](/services/direct-request-jobs/Jobs-and-Pricing), however, is their relatively quick implementation time (time-to-market), and our ability to immediately provide support and resolution without involving other node operators.

### Do you have any security guarantees?

For information about our security and service guarantees, please visit our [Service-Level Agreement (SLA)](/services/direct-request-jobs/Service-Level-Agreement).
