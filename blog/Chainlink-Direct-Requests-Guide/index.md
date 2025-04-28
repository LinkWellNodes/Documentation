---
title: Chainlink Direct Requests (Any API) Guide
description: Chainlink's Any API explained, and a comparison to Chainlink Functions. What is a Chainlink oracle, and how does it work? 
date: "2025-04-26"
keywords: [chainlink, smart contracts, decentralized oracles, direct requests, anyapi, any api, direct request model, web3, blockchain, node operator]
authors: [Ken]
tags: [chainlink, smart contracts, decentralized oracles, web3, blockchain, node operator]
---

import TOCInline from '@theme/TOCInline';

<h2 class='lw-subtitle'>An in-depth guide to <lw-emphasis>Chainlink's Direct Request model</lw-emphasis>, including key terminology, and how to get started requesting data from us.</h2> 

![Chainlink Direct Requests (Any API)](/img/chainlink-blue-header_1400x802.webp "Chainlink Direct Requests (Any API)")

<!--truncate-->

---

**On this page**:

<TOCInline
  toc={toc.filter((node) => node.level >= 1)}
  minHeadingLevel={2}
  maxHeadingLevel={3}
/>

---

## Overview

Chainlink Direct Requests (also called [Basic Requests](https://docs.chain.link/architecture-overview/architecture-request-model?parent=gettingStarted), or [Any API](https://docs.chain.link/any-api/introduction)) are a type of oracle request that allows your blockchain smart contract to request data directly from a given Chainlink oracle team. 

As compared to [Chainlink Functions](https://docs.chain.link/chainlink-functions), Direct Requests are convenient for the end-user in the following 3 ways:

1. They support the greatest range of **data types**, **data sizes**, and **blockchain networks**.
1. They are often the **cheapest option** for the end-user (allowing for negotiation with the specific node operator based on volume and request size). 
1. They require the **least amount of technical effort** to implement. The oracle team simply provides you with a `request()` and `fulfill()` function to place into your smart contract, leaving you free to focus on the development of the rest of your smart contract application.

As Direct Requests place much of the burden of implementation on the oracle team that you've chosen, it's important to choose an oracle team that you trust.

:::info
### Looking to Request Data?

Get started writing on-demand data to your blockchain smart contract by viewing our <a href='/services/direct-request-jobs/mainnets'>direct request job IDs, oracle addresses, and smart contract examples</a>.
:::

## Direct Requests architecture

Before diving deeper into the direct request architecture, it's important to understand the [direct request (basic request)](https://docs.chain.link/architecture-overview/architecture-request-model?parent=gettingStarted) model for Chainlink oracle requests. 

**High-level request workflow**:

1. Your consumer contract (ie, `ChainlinkClient`) makes a request to our oracle contract, via the `request()` function.
1. Our Chainlink nodes receive the request, make an HTTP request to the appropriate API endpoint, and write the result back to your consumer contract, via execution of your `fulfill()` function.
1. Your Web3 application reads the data from your consumer contract.

<p align="center">
  <img src="/img/CL_DR_Model_Single_Chainlink_Oracle.webp" alt="Chainlink Basic Request Model" title="Chainlink Basic Request Model" />
  <center><small>Chainlink Direct Request workflow</small></center>
</p>

### Key terms

* **Consumer contract**: A smart contract deployed by you (the data requester / consumer) that orchestrates the sending / receiving of off-chain data to a Chainlink oracle. It contains logic to describe the data request, send the request, and receive the resulting data. Full examples of consumer contracts can be found in our [Direct Request Job Documentation](/services/direct-request-jobs/Jobs-and-Pricing).
* **Request function**: The function (method) within your consumer contract that initiates the request to the Chainlink oracle. The required data request parameters (ie, URL, headers, etc.) are usually defined here. Once this function is executed, the Chainlink oracle picks up the emitted event, and begins its work retrieving the requested data.
* **Fulfill function**: The function (method) within your consumer contract that receives the data requested from the Chainlink oracle. This function is triggered by the oracle itself, via the oracle contract - usually within 3-5 blocks of the `request()` function being triggered, depending on the blockchain. 
* **Oracle contract** (also known as an **operator contract**): A smart contract deployed by the Chainlink node operator that orchestrates the sending / receiving of off-chain data between the consumer contract and the oracle node. All communication between the consumer contract and the oracle node passes through this contract.
* **Oracle** (also known as a **Chainlink node**): An off-chain server that receives on-chain requests from the consumer contract (via the oracle contract), retrieves the requested data, and then delivers the result on-chain to the consumer contract, by execution of a blockchain transaction within the oracle contract.


### Process diagram
The following diagram demonstrates the direct request workflow.

**Key points**:

1. The diagram begins with a call to your consumer contract's request function, via an EVM-compatible IDE such as [Remix](https://remix-project.org/#:~:text=JUMP%20INTO%20WEB3,teaching%20and%20experimenting%20with%20Ethereum.), combined with a Web3 wallet provider such as [MetaMask](https://metamask.io). 
1. The left-hand workflow (**testnets**) is virtually the same as the right-hand workflow (**mainnets**) with the exception of needing to fund your consumer contract with LINK tokens before making a request.  

<p align="center">
  <img src="/img/CL_DR_Model.webp" alt="Chainlink Direct Request workflow (in-depth diagram)" title="Chainlink Direct Request workflow (in-depth diagram)" />
  <center><small>Chainlink Direct Request workflow (in-depth diagram)</small></center>
</p>

## Requesting data from LinkWell Nodes

The following section illustrates how to trigger an oracle request from within your smart contract (ie, a **direct request**), using the LinkWell Nodes oracle infrastructure. 

**Prepare your request**:

1. *(mainnet customers only)* Fill out our [Oracle request survey](https://linkwellnodes.io/Getting-Started.html) form, so that we can fulfill our compliance obligations and better understand your data needs.
1. Design your consumer contract, using our [Data Feeds Documentation](/services/direct-request-jobs/Jobs-and-Pricing) as a guide (code examples included).
1. Deploy your contract using an EVM-compatible IDE such as [Remix](https://remix.ethereum.org/).

:::info
For **mainnet** chains, please wait several hours after filling out our [Getting Started](https://linkwellnodes.io/Getting-Started.html) form to receive our mainnet contract info and custom job ID. Please also ensure that your consumer contract is properly funded with enough LINK tokens to make the request.
:::

**Execute your request**:

1. From your IDE (ie, Remix) trigger your contract's `request()` function (also called the `transferAndCall()` or `_sendOperatorRequest()` function).
1. Once triggered, your contract will emit an `OracleRequest` event, which will get picked up by one of our off-chain oracle nodes. On **mainnets**, the appropriate amount of LINK token will simultaneously be sent to the oracle contract as a form of payment.
1. After detecting the `OracleRequest` event, one of our oracle nodes will use the emitted data to perform the designated job. This typically involves an HTTP request to an API endpoint for data retrieval.
1. Once the data has been retrieved, parsed, and converted into a blockchain compatible format, our oracle node executes a blockchain transaction against the oracle contract, which in turn writes the data back to your consumer contract via its `fulfill()` function.

**Retrieve your result**:
  
1. As soon as the `fulfill()` function is called within your consumer contract, a `RequestFulfilled` event will be emitted. If desired, you can monitor for this event using an RPC connection and Web3 library (ie, web3.js), in order to trigger a response within your Web3 application.
1. Your data should now be available within your consumer contract for consumption by your Web3 application!

:::info 
### How soon will my data be delivered?
The end-to-end workflow from triggering your `request()` function to receiving your oracle response within the `fulfill()` function should take **~3-5** blocks. This typically occurs in less than a minute of waiting time, but depends highly on your chosen network's block time and congestion, as well as your chosen oracle team's security configuration.
<br/>
At LinkWell Nodes, we are able to offer a faster oracle response time (2 blocks minimum) on mainnets for a small increase in fee. Please reach out to us via our <a href='https://linkwellnodes.io/Getting-Started.html' target='_blank'>data feed request form</a>, and include the specific details of your requirements.
::: 

## Need more help?

Join our [Discord](https://discord.com/invite/Xs6SjqVPUA) server for immediate assistance!

> _LinkWell Nodes is a U.S.-based Chainlink community oracle, providing custom data feed capabilities and self-service oracle solutions across virtually all major mainnet and testnet blockchains supported by Chainlink._
>
> _Looking for a custom data feed? Head on over to our [documentation](/), or hop into the [LinkWell Nodes Discord server](https://discord.com/invite/Xs6SjqVPUA) and ask for help!_
>
> _Disclaimer: all views and opinions expressed in this article are strictly our own._

![LinkWell Nodes - U.S.-based Chainlink node operator](/img/lw-banner_1080x606.webp "LinkWell Nodes - U.S.-based Chainlink node operator")