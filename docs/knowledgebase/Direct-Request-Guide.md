---
description: A quick run-through of how the Chainlink Direct Request model works.
---

# Chainlink Direct Requests (Any API)

Chainlink Direct Requests (also called [Basic Requests](https://docs.chain.link/architecture-overview/architecture-request-model?parent=gettingStarted), which power Chainlink's [Any API](https://docs.chain.link/any-api/introduction) functionality) are a type of Chainlink request pattern that allows your blockchain smart contract to request data directly from a given Chainlink oracle. 

Chainlink Direct Requests can be convenient for the end-user, as they can support the greatest range of requested data types (and data sizes), while requiring the least amount of technical effort to implement: the oracle team simply provides you with a `request` and `receive` function to place into your smart contract, leaving you free to focus on the development of the rest of your smart contract application. 

As direct requests place much of the burden of implementation on the oracle team that you've chosen, it's important to choose an oracle team that you trust.

:::info
**LinkWell Nodes** is a full-service Chainlink oracle solution that provides secure, reliable, direct request data feeds in exchange for a fee. We offer free external adapter hosting services, as well as free development services for any efforts required to get your smart contract application up and running.

You can read more about our direct request (Any API) data offerings [here](/services/direct-request-jobs/Jobs-and-Pricing), as well as our security guarantees [here](/services/direct-request-jobs/Service-Level-Agreement).
:::

## Overview

Before diving into Chainlink's direct request architecture, it's important to understand the [Basic Request Model](https://docs.chain.link/architecture-overview/architecture-request-model?parent=gettingStarted) for Chainlink requests. 

**High-level workflow**:

1. Your consumer contract (ie, `ChainlinkClient`) makes a request to our oracle contract.
1. Our Chainlink nodes receive the request, make an HTTP request to the appropriate API endpoint, and write the result back to your consumer contract.
1. Your Web3 application reads the data from your consumer contract.

![dr-workflow](/img/DR-Request-Workflow.webp)

## Key Terms

* **Consumer contract**: A smart contract deployed by you (the data requester / consumer) that orchestrates the sending / receiving of off-chain data to a Chainlink oracle. It contains logic to describe the data request, send the request, and receive the resulting data. Full examples of consumer contracts can be found in our [Direct Request Job Documentation](/services/direct-request-jobs/Jobs-and-Pricing).
* **Oracle contract** (also known as an **operator contract**): A smart contract deployed by the Chainlink node operator that orchestrates the sending / receiving of off-chain data between the consumer contract and the oracle node. All communication between the consumer contract and the oracle node passes through this contract.
* **Oracle node** (also known as a **Chainlink node**): An off-chain service runtime that receives on-chain requests from the consumer contract (via the oracle contract), retrieves the requested data, and delivers the result on-chain to the consumer contract (via the oracle contract) by execution of a blockchain transaction.


## Process Diagram
The following diagram demonstrates the direct request workflow.

**Key points**:

1. The diagram begins with a call to your consumer contract's request function, via an EVM-compatible IDE such as [Remix](https://remix-project.org/#:~:text=JUMP%20INTO%20WEB3,teaching%20and%20experimenting%20with%20Ethereum.), combined with a Web3 wallet provider such as [MetaMask](https://metamask.io). 
1. The left-hand workflow (**testnets**) is virtually the same as the right-hand workflow (**mainnets**) with the exception of needing to fund your consumer contract with LINK tokens before making a request.  

![dr-workflow](/img/CL_DR_Model.webp) 

## Requesting Data from LinkWell Nodes

The following information details how to initiate a request for data from the LinkWell Nodes oracle infrastructure. 

**Prepare your request**:

1. Fill out our [Getting Started](https://linkwellnodes.io/Getting-Started.html) form, so that we can better understand your data needs.
1. Begin designing your consumer contract, using our [Direct Request Documentation](/services/direct-request-jobs/Jobs-and-Pricing) as a guide (code examples included).
1. Deploy your consumer contract using an EVM-compatible IDE such as [Remix](https://remix.ethereum.org/).

:::info
For **mainnet** chains, please wait up to 24 hours after filling out our 'Getting Started' form to receive our mainnet contract info and custom job ID. Please also ensure that your consumer contract is properly funded with enough LINK tokens to make the request.
:::

**Execute your request**:

1. Trigger the `transferAndCall()` function (sometimes called the `request()` or `sendOperatorRequest()` function) within your consumer contract.
1. Once triggered, your contract will emit an `OracleRequest` event, which will get picked up by one of our off-chain oracle nodes. On **mainnets**, the appropriate amount of LINK token will simultaneously be sent to the oracle contract as a form of payment.
1. After detecting the `OracleRequest` event, one of our oracle nodes will use the emitted data to perform the designated job. This typically involves an HTTP request to an API endpoint for data retrieval.
1. Once the data has been retrieved, parsed, and converted into a blockchain compatible format, our oracle node executes a blockchain transaction against the oracle contract, which in turn writes the data back to your consumer contract via its `fulfill()` function.

**Retrieve your result**:
  
1. As soon as the `fulfill()` function is called within your consumer contract, a `RequestFulfilled` event will be emitted. This happens after a brief waiting period (typically less than a minute, depending on network block time and congestion).
1. Your data should now be available within your consumer contract! 

## Need more help?

Join our [Discord](https://discord.com/invite/Xs6SjqVPUA) server for immediate assistance!