# Frequently Asked Questions (FAQ)

## Chainlink Data Consumers

The following is a list of frequently-asked questions and answers collected from our experience supporting the `#nodes`, `#operator-requests`, and `#external-adapters` channels within the [Chainlink Official Discord server](https://discord.com/invite/chainlink).

### What chains does Chainlink support?

The chains that Chainlink supports can be viewed in the Chainlink documentation [here](https://docs.chain.link/chainlink-automation/supported-networks). Please note that this list of chains is subject to change over time as Chainlink adds or removes support for a given chain.

### Is there a public directory of all node / job listings?

While [market.link](https://market.link) was formerly the go-to location for public Chainlink node and job listings, the site has since been deprecated, and it is unclear if that feature will resurface in the future. You may, however, still leverage this website to gain insight into the many official node operator teams, and the respective chain(s) that they support. Besides this, we aren't currently aware of any centralized directory for Chainlink nodes / job offerings. 

That being said, many node operators (such as LinkWell Nodes) choose to host their own websites and documentation pages that display their Chainlink job offerings. You might do well to do a Google search for 'Chainlink node operator' to see what job offerings you might find!

### Where can I get Job IDs and Chainlink Oracles for my consumer contract?

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