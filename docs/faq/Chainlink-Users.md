# Frequently Asked Questions (FAQ)

## Chainlink Data Consumers

The following is a list of frequently-asked questions and answers collected from our experience supporting the `#nodes`, `#operator-requests`, and `#external-adapters` channels within the [Chainlink Official Discord server](https://discord.com/invite/chainlink).

The target audience for this FAQ is **consumers of Chainlink** - in other words, those looking to retrieve real-world data from the blockchain using the Chainlink ecosystem.

### What chains does Chainlink support?

The chains that Chainlink supports can be viewed in the Chainlink documentation [here](https://docs.chain.link/chainlink-automation/supported-networks). Please note that this list of chains is subject to change over time as Chainlink adds or removes support for a given chain.

### Where can I find all node and job listings?

While [market.link](https://market.link) was formerly the go-to directory for public Chainlink node and job listings, this feature has since been deprecated, and it is unclear if it will resurface in the future. You may, however, still leverage this website to gain insights into the many official node operator teams, as well as the respective network(s) that they support. Besides this, we aren't currently aware of any centralized directory for Chainlink nodes / job offerings. 

That being said, many node operators (such as ourselves) choose to host their own websites and documentation pages that display their Chainlink job offerings. A decent approach is to perform a Google search for 'Chainlink node operator' to see what job offerings you might find!

### Where can I find Job IDs and Chainlink Oracles for my consumer contract?

If you are a developer who simply requires data for your smart contract application, the best place to request a Job ID specific to your requirements is within the #operator-requests channel of the Chainlink Discord. An existing node operator will typically respond to your request by providing you with a corresponding Job ID and oracle contract address. Transactions on testnet chains are typically free of charge, meaning they do not require any LINK token.

If you are looking to run your own Chainlink node, we recommend familiarizing yourself with the [pros and cons](#should-i-run-my-own-chainlink-node) of becoming your own node operator. If you decide to go ahead, feel free to visit the section related to [creating a job](https://docs.chain.link/chainlink-nodes/v1/fulfilling-requests#add-a-job-to-the-node) within the Chainlink documentation.

### Should I run my own Chainlink node?

Please see the following answer in our Node Operator FAQ page [here](/faq/Chainlink-Operators#should-i-run-my-own-chainlink-node).

### Should I use Chainlink Functions?

Currently, Chainlink Functions is in limited beta, and available only to whitelisted participants on a small subset of testnets. You can apply for access [here](https://chainlinkcommunity.typeform.com/requestaccess). 

In general, Chainlink Functions is superior to the traditional 'Direct Request' model, in that your request logic is executed by a DON (Decentralized Oracle Network), instead of by a single Chainlink Oracle - thereby eliminating any concerns around centralization and reliability - while keeping costs roughly the same as if executed by a single node. 

It is also superior to requesting data from a typical OCR (Off-Chain Reporting) network, in that you remain in control of your logic's deployment lifecycle, eliminating the need for any external adapter deployments or other coordination with your chosen node operator(s).

To determine whether Chainlink Functions is right for you, weigh the various [limitations of Chainlink Functions](#limitations-of-chainlink-functions) in making your decision. 

### Limitations of Chainlink Functions

Despite the obvious [advantages](#should-i-use-chainlink-functions) of using Chainlink Functions, there are several limitations that need to be considered.

You should use Chainlink Functions only if ALL of the following apply:

* Your ERC-20 address has been whitelisted by Chainlink Labs for access to Chainlink Functions (may take up to 2 weeks in some cases)
* You don't need a mainnet deployment (Functions is currently in beta)
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

### Do I need to run my own Chainlink node in order to use my external adapter?

If you already have an external adapter, you can choose to either connect it to your own Chainlink node, or reach out to an existing Chainlink node operator, who will typically host your adapter on their redundant infrastructure for free. 

To help you decide whether to run your Chainlink node, read our write-up about it [here](/faq/Chainlink-Operators#should-i-run-my-own-chainlink-node).

### Are external adapters decentralized?

This depends on your app's requirements around decentralization and trust-minimization. Typically, just a single node operator hosts your adapter and returns your data to your application. Although a typical node operator will host your adapter on highly-redundant infrastructure, this may represent single point-of-failure (SPOF) for your application, as well as require a certain level of trust between you and the node operator.

In choosing where to host your external adapter, you may also choose to reach out to a DON (Decentralized Operator Network) - an aggregation network comprised of multiple node operators - to host your adapter. This represents a trust-minimized approach, wherein your adapter is hosted by multiple oracle teams, and aggregation is done at the protocol level before being returned to your contract. 

To get connected with the appropriate oracle operator(s) for your external adapter's use case, we suggest reaching out within the `#operator-requests` channel of the [Chainlink Official Discord server](https://discord.com/invite/chainlink). 

### Can I use a single data source or Chailink node for my smart contract?

While using a single data source can be a sufficient approach for testnet applications, it represents a single point-of-failure (SPOF) for your application, and thus is not recommended for mainnet / production purposes. 

To keep your Web3 application decentralized, we recommend requesting your data from multiple data sources, and performing some sort of aggregation (mean, median, mode, etc.) within your job / external adapter / function logic in order to determine the appropriate result.  

### How do I find a specific price feed for my contract?

Price feed contract addresses for various currency pairs across Chainlink's list of supported networks can be found [here](https://docs.chain.link/data-feeds/price-feeds/addresses).

If you're having trouble finding the appropriate price feed for your application, you can request support for this via the `#operator-requests` channel of the [Chainlink Official Discord server](https://discord.com/invite/chainlink) - a node operator (such as ourselves) will almost certainly be willing to help you with your request!

### How can I find a node operator to host my external adapter or job?

To get connected to the appropriate Chainlink node operator for your use case, you can reach out within the `#operator-requests` channel of the [Chainlink Official Discord server](https://discord.com/invite/chainlink) - a node operator (such as ourselves) will almost certainly be willing to help you with your request!