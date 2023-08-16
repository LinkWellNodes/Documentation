# Direct Request Guide

## Overview
Before diving into Chainlink's direct request architecture, it's important to understand the [basic request model](https://docs.chain.link/architecture-overview/architecture-request-model?parent=gettingStarted). 

**At a high level**:

1. Your consumer contract (ie, `ChainlinkClient`) makes a request to our oracle contract.
1. Our Chainlink nodes receive the request, make an HTTP request to the appropriate API endpoint, and write the result back to your consumer contract.
1. Your Web3 application reads the data from your consumer contract.

![dr-workflow](/../media/DR-Request-Workflow.png)

## Key Terms

* **Consumer contract**: A smart contract deployed by you (the data requester / consumer) that orchestrates the sending / receiving of off-chain data to a Chainlink oracle. It contains logic to describe the data request, send the request, and receive the resulting data. Full examples of consumer contracts can be found in our [Direct Request Job Documentation](/services/direct-request-jobs/Jobs-and-Pricing).
* **Oracle contract** (also known as an **operator contract**): A smart contract deployed by the Chainlink node operator that orchestrates the sending / receiving of off-chain data between the consumer contract and the oracle node. All communication between the consumer contract and the oracle node passes through this contract.
* **Oracle node** (also known as a **Chainlink node**): An off-chain service runtime that receives on-chain requests from the consumer contract (via the oracle contract), retrieves the requested data, and delivers the result on-chain to the consumer contract (via the oracle contract) by execution of a blockchain transaction.


## Workflow Diagram
The following diagram demonstrates the direct request workflow.

**At a high level**:

1. The diagram begins with a call to your consumer contract's request function, via a Solidity-based IDE such as [Remix](https://remix-project.org/#:~:text=JUMP%20INTO%20WEB3,teaching%20and%20experimenting%20with%20Ethereum.), combined with a Web3 wallet provider such as [MetaMask](https://metamask.io). 
1. The left-hand workflow (**testnets**) is virtually the same as the right-hand workflow (**mainnets**) with the exception of needing to fund your consumer contract with LINK tokens before making a request.  

![dr-workflow](/../media/CL_DR_Model.png) 

## Getting Started with Direct Requests

**Prepare your request**:

1. Fill out our [Getting Started](https://linkwellnodes.io/Getting-Started.html) form, so that we can better understand your data needs.
1. After discussing the details of your request, we may be able to simply point you to our [Direct Request Jobs](/services/direct-request-jobs/Jobs-and-Pricing) page. If your request requires any kind of authentication secrets or other advanced functionality, we are happy to support you in building out an [external adapter](/services/direct-request-jobs/Jobs-and-Pricing?id=external-adapters).  
1. Deploy your consumer contract using an IDE such as Remix. Consumer contract examples can be found within our [Direct Request Job Documentation](/services/direct-request-jobs/Jobs-and-Pricing) for each specific data type.
1. For **mainnet** chains, please also ensure that your consumer contract is properly funded with enough LINK tokens to make the request.

**Execute your request**:

1. Trigger the `transferAndCall()` function (also known as the `sendOperatorRequest()`, or `request()` function) within your consumer contract.
1. Once triggered, your contract will emit an `OracleRequest` event, which will get picked up by one of our off-chain oracle nodes. On **mainnets**, the appropriate amount of LINK token will simultaneously be sent to the oracle contract as a form of payment.
1. After detecting the `OracleRequest` event, one of our oracle nodes will uses the data emitted to perform the designated job. This is typically an HTTP request to an API endpoint for data retrieval.
1. Once the data has been retrieved, parsed, and converted into a blockchain compatible format, our oracle node executes a blockchain transaction against the oracle contract, which in turn writes the data back to your consumer contract via its `fulfill()` function.

**Retrieve your result**:
  
1. As soon as the `fulfill()` function is called within your consumer contract, a `RequestFulfilled` event will be emitted. This happens after a brief waiting period (typically less than a minute, depending on network block time and congestion).
1. Your data should now be available within your consumer contract! 

## Need more help?

Join our [Discord](https://discord.com/invite/Xs6SjqVPUA) server for immediate assistance!