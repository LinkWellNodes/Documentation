# Direct Request Guide

## Direct Request Model
As a developer new to the Chainlink ecosystem, we understand that you probably have a lot of questions: How does it work? Is it secure and decentralized? Can I automate it? This guide - along with our [User FAQ](/knowledgebase/Chainlink-Users-FAQ) - is an attempt at answering those questions. We'll start out by providing details about the basic direct request workflow, and then provide a diagram to help with visually understanding the process.

## Chainlink Data Feeds Architecture
Before diving into the request workflow to our Chainlink nodes, it's important to understand Chainlink's [basic request model](https://docs.chain.link/architecture-overview/architecture-request-model?parent=gettingStarted). We recommend reading through Chainlink's documentation on the process, but at a high level and when you are ready to make your first request, your smart contract starts off by making a request to our oracle contract, which then gets passed on to our off-chain Chainlink nodes.  After retrieving the response from an API endpoint, the Chainlink node returns the result to the oracle contract which then submits the result on-chain for you to use in your smart contract.  Please see below for a simple representation of the process.

![dr-workflow](/../media/DR-Request-Workflow.PNG)
### Basic Request Workflow Steps
The typical direct request workflow is as follows:
1. Fill out our [Getting Started](https://linkwellnodes.io/Getting-Started.html) form or join our [Discord](https://discord.com/invite/Xs6SjqVPUA), and let us know how we can help!
2. After discussing the details of your request, and once we understand your data needs, we may be able to simply point you to our [Public Job Listings](/services/direct-request-jobs/Jobs-and-Pricing) page.  If your request requires any kind of API authentication or advanced functionality, we are happy to support you in building out an external adapter.  
4. Deploy your smart contract application using an IDE such as Remix.
4. In your smart contract application, ensure that you modify your constructor to include our oracle address and job ID.  Feel free to review our full sample contracts for testnets [here](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/direct-request-jobs/testnets), or our sample contracts for mainnets [here](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/direct-request-jobs/mainnets), for reference.
5. Modify the request function, and ensure that you add the appropriate request parameters.  An example of this can be seen here with this [Arbitrum Job](https://linkwellnodes.io/Documentation.html?1#page=/services/direct-request-jobs/mainnets/Arbitrum-One-Mainnet-Jobs&topic=request-parameters).
6. For mainnet jobs, please also ensure that your smart contract is properly funded with enough LINK tokens to make the request.  This is not a requirement for testnets, as all of our testnet jobs are free to use!  As a side note, we recommend testing your requests out on one of our testnet nodes before making the request on mainnets.
7. Whether via manual intervention or automation, your request function when called simultaneously does two things - it 1). transfers the LINK token to the oracle contract as a form of payment for data received, and 2). upon token transfer, emits an OracleRequest event which gets picked up by our off-chain oracle node.
8. After detecting an event emitted by the oracle contract, the on-chain node uses the data emitted to perform a job.  This is typically an HTTP GET request to an API endpoint for data retrieval.
9. Once the data has been retrieved, parsed and converted to a blockchain compatible format, the off-chain node then submits the data back to the oracle contract.  
10. After a brief waiting period (typically less than a minute) which is highly dependent on the block time of the network, network congestion and the API endpoint response time, your data should be available in your smart contract! 

#### Direct Request Via Manual Function Execution
The following diagram demonstrates the request workflow when manually calling your smart contract's request function using an IDE such as [Remix](https://remix-project.org/#:~:text=JUMP%20INTO%20WEB3,teaching%20and%20experimenting%20with%20Ethereum.).  Please note that the below diagram represents two separate workflows. The workflow on the left (testnets) is virtually the same workflow as on the right (mainnets) with the exception of deploying your contract to a mainnet and funding it with LINK tokens before making a request.  Please see our [Public Mainnet Job Listings](/services/direct-request-jobs/mainnets/Mainnets) for our jobs and pricing!

![dr-workflow](/../media/CL_DR_Model.png) 
