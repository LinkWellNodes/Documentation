# Direct Request Jobs

**Direct Request** jobs allow you to write any custom, real-world data received from any internet-based API ('any API') to your blockchain smart contracts. Our highly-redundant Chainlink node infrastructure ensures that your data is delivered safely, securely, and reliably every time.

Please use the links below to view our direct request job offerings. If you run into any trouble, we are here to help! Head on over to our [Discord](https://discord.gg/AJ66pRz4) for the fastest service.

### View our direct request job offerings:

* [Mainnets](/services/direct-request-jobs/mainnets/)
* [Testnets](/services/direct-request-jobs/testnets/)

# Pricing

Our goal is to provide **transparency** around the way our pricing works. 

To view our fees, please visit the [documentation page](/services/direct-request-jobs/mainnets/Polygon-Mainnet-Jobs) for the respective job.

## Fee lifecycle

When you make a request to a Chainlink oracle, you'll send a fee (denominated in `LINK` token) along with your request. This fee varies by the specific **network** and **data type**, and is set by the node operator. 

After retrieving your requested data, the node operator pays for the required `gas` to write the result onto the blockchain, in the currency of the respective chain's native gas token (ie, `ETH`).

:::info 
To ensure you send the appropriate amount of LINK with your request, please ensure that your consumer contract is funded with sufficient LINK token, and that the `fee` variable within your consumer contract matches the one specified within our documentation for the related job. 
:::

## Fee considerations

Our per-request pricing is outlined on our respective [job pages](#view-our-jobs), and is based on the following environmental factors: 

1. [Gas costs on the specified network](#1-gas-costs-on-the-specified-network)
1. [The data type and quantity returned](#2-the-data-type-and-quantity-returned)
1. [Our own infrastructure costs](#3-infrastructure-costs)
1. [The pricing of our fellow node operators](#4-the-pricing-of-our-fellow-node-operators) 

:::warning 
While we make every effort to keep our pricing consistent, as market conditions change, we may eventually need to re-evaluate. As such, it's recommended to keep your LINK payment configurable (ie, the `fee` object within your consumer contract), so that you can easily accommodate any such changes without having to re-deploy your contract. By default, all consumer contract examples present within our documentation provide an interface for updating fees (see: `setFeeInHundredthsOfLink()` method).
:::

#### 1. Gas costs on the specified network

Writing your requested data on-chain requires a [fulfillment transaction](https://docs.chain.link/architecture-overview/architecture-request-model?parent=anyApi#fulfillment), which requires us to spend gas. Depending on the network you have chosen for your data, these gas costs can vary significantly. To minimize your costs and ensure a more consistent pricing model, **we recommend against using the Ethereum mainnet** network for your requests.

Gas pricing example:

* A node operator writes a `uint256` object to a consumer contract deployed on MATIC mainnet, which costs **63,000 gas units** to fulfill. Assuming a MATIC token price of **1 USD**, and a network gas price of **150 Gwei**, this will cost the node operator **0.01 USD** in gas fees.
* A node operator writes a `uint256` object to a consumer contract deployed on Ethereum mainnet, which costs **63,000 gas units** to fulfill. Assuming an ETH token price of **2,000 USD**, and a network gas price of **30 Gwei**, this will cost the node operator **3.80 USD** in gas fees.

The above example is for illustrative purposes only; in the real world, gas price, gas token price, and Chainlink token prices all fluctuate dramatically, and factor heavily into our pricing model.  

#### 2. The data type and quantity returned

While a `uint256` object may cost us on the order of **60000 gas units** to fulfill on-chain, writing a `bytes[]` object may cost us **500,000 gas units** or more, depending on the content and length of the elements returned. As such, our job pricing may vary by object type and quantity. 

#### 3. Infrastructure costs

In maintaining a triple-redundant, highly-secure, zero-downtime environment for our customers, we incur heavy infrastructure costs. Fees sent along with your requests go toward offsetting these costs.

You can read more about the associated [costs of being a node operator](/knowledgebase/Chainlink-Operators-FAQ#how-much-does-it-cost-to-run-a-chainlink-node) on our FAQ page.

#### 4. The pricing of our fellow node operators 

In order to remain competitive, LinkWell Nodes needs to take into consideration the pricing model of our fellow node operators when establishing our target price point. 

### Have a question about our pricing?

Please reach out to us via our [contact form](https://linkwellnodes.io/Home.html#contact-us "Contact LinkWell Nodes") to discuss.

## External Adapters

#### Full-service external adapter hosting and development:

* We'll host your external adapter (EA) for free on our highly redundant infrastructure - all you'll pay is the typical per-transaction cost in LINK.
* If you need a custom adapter developed, we've got you covered, and can typically do this for free within 1-2 business days.

#### Situations in which you might need an external adapter:
* Private, low latency, and/or high throughput off-chain computation to save gas.
* Writing data to other blockchains (interoperability).

You can learn more about external adapters [here](https://docs.chain.link/chainlink-nodes/external-adapters/external-adapters), and find the list of Chainlink-provided external adapters [here](https://github.com/smartcontractkit/external-adapters-js/tree/main/packages/sources).

## Learn More

To learn more about how Chainlink's direct request model works, visit our [Direct Request Guide](/knowledgebase/Direct-Request-Guide). You can also read more about it in Chainlink's official [Any API](https://docs.chain.link/any-api/introduction) documentation.

## Troubleshooting

Having technical difficulties with your request? Check out our [Troubleshooting Guide](/knowledgebase/Chainlink-Users-FAQ#direct-request-job-troubleshooting#direct-request-job-troubleshooting) for direct request jobs.

## Need more help?
* Join our [Discord](https://discord.gg/AJ66pRz4) for the fastest assistance with your request. We are happy to support custom data requests as well!
* Check out our [Chainlink User FAQ](/knowledgebase/Chainlink-Users-FAQ "FAQ - Chainlink Data Consumers") for common questions asked by our customers.