# Retrieving IPFS data using Chainlink

## Introduction

The InterPlanetary File System (IPFS) is a revolutionary peer-to-peer network protocol designed to make the web faster, safer, and more open. The IPFS API allows developers to interact with the IPFS network, enabling them to store and retrieve files, manage IPFS nodes, and handle other related tasks. This decentralized file system aims to replace the traditional centralized web hosting model, making content permanently available and resistant to censorship. By using the IPFS API, users can benefit from a distributed web where content is addressed by what it is (content-based addressing) rather than where it's stored (location-based addressing). This ensures data persistence, high availability, and a more resilient internet infrastructure.

The following guide illustrates an easy example of how to retrieve a `string-bytes` value from the IPFS API into your blockchain smart contract, using our highly-resilient Chainlink node infrastructure as an oracle for your data needs.

## Real-world example

Accessing IPFS data from within your blockchain contract or Web3 application is as simple as:

1. Creating an IPFS API key through the IPFS website.
1. Deploying the following Chainlink consumer contract onto the ERC-20 blockchain network of your choice. 

Below we'll walk you through the steps necessary to implement such a solution.

### 1. Create a IPFS API key

API keys are not required to use with IPFS.

### 2. Design your consumer contract

Add the following sample code to your **consumer contract**.

#### 2a. Add the constructor:

The constructor specifies important information about the request destination and payment for your request. **Important**: This information varies by chain, oracle, and job: 

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/examples/ipfs-data/IPFS.sol#L23-L32
```

:::tip 
You'll need to replace `ADD_CHAINLINK_TOKEN_ADDRESS_HERE`, `ADD_ORACLE_ADDRESS_HERE`, and `ADD_JOB_ID_HERE` with the values appropriate to the specific blockchain network and job that you'll be using. You can find these values within our [Direct Request Job Documentation](/services/direct-request-jobs/Jobs-and-Pricing). Chainlink token addresses can be found [here](https://docs.chain.link/resources/link-token-contracts).
:::

#### 2b. Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information on each required parameter, reference the above '**Request parameters**' section:

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/examples/ipfs-data/IPFS.sol#L34-L54
```

#### 2c. Retrieve the response (example):

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/examples/ipfs-data/IPFS.sol#L56-L64
```

### Need to protect your API key?

:::danger 
Data entered into a smart contract is visible to the general public.
:::

If you'd like to protect your API key from being broadcast on-chain, you can instead store this information off-chain on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started - once we receive your information, we'll provide you with a custom job ID that will send your API key safely along with your request.

## Simulating the above request

Let's walk through each step of the above **sample request**, to better understand how it all works together:

#### 1. **Send the HTTP request**:

The following `curl` command simulates the same HTTP request that our Chainlink node makes shortly after you trigger the `request()` function within your consumer contract:

```
curl -X 'GET' \
  'https://ipfs.io/ipfs/QmZgsvrA1o1C8BGCrx6mHTqR1Ui1XqbCrtbMVrRLHtuPVD?filename=big-api-response.json' \
  -H 'accept: application/json'
```

#### 2. **Analyze the response**:

The following is a sample response body returned to our Chainlink node by the above HTTP request (abbreviated for clarity):

```
{
  "image": "0x68747470733a2f2f697066732e696f2f697066732f516d5358416257356b716e3259777435444c336857354d736a654b4a4839724c654c6b51733362527579547871313f66696c656e616d653d73756e2d636861696e6c696e6b2e676966"
}
```

#### 3. **Apply the JSON path**:

After receiving the above sample response, our Chainlink node will attempt to filter the result by the provided `path` parameter value (`image`). After applying the provided path, we get the following result:

```
0x68747470733a2f2f697066732e696f2f697066732f516d5358416257356b716e3259777435444c336857354d736a654b4a4839724c654c6b51733362527579547871313f66696c656e616d653d73756e2d636861696e6c696e6b2e676966
```

## Troubleshooting

Having trouble with your request? Check out our [Direct Request Troubleshooting Guide](/knowledgebase/faq/Chainlink-Users#direct-request-job-troubleshooting).

:::caution 
This job has a configured gas limit of **500,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, use the appropriate block explorer to navigate to the '**Oracle Address**' you entered into your consumer contract for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). 
:::

## Still need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance with this request.
