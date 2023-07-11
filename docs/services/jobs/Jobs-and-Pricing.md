# Public Job Listings

Please use the links below to view our currently-supported networks, along with their associated operator contracts, Job IDs, and sample contracts. 

If you run into any trouble, we are here to help! Head on over to our [Discord](https://discord.gg/AJ66pRz4) for the fastest service.

### View our job offerings:

* [Mainnets](/services/jobs/mainnets/Mainnets)
* [Testnets](/services/jobs/testnets/Testnets)

# Pricing

At LinkWell nodes, it's our goal to provide **transparency** around the way our pricing model works. 

## How oracle fees work

When you make a request to a Chainlink oracle, a fee (denominated in `LINK`) is sent along with your request. This fee varies by the specific **network** and **data type**, and is set by the node operator. 

After retrieving your requested data, the oracle writes the result onto the blockchain, which involves an on-chain transaction. This transaction costs **gas**, which is for paid by the node operator in the currency of the respective chain's native gas token (ie, `ETH`).

?> To ensure you send the appropriate amount of LINK with your request, please ensure that your consumer contract is funded with sufficient LINK token, and that the `fee` variable within your consumer contract matches the one specified within our documentation for the related job. 

## Fee considerations

Our per-request pricing is enumerated on our respective [job pages](#view-our-job-offerings), and is based on the following environmental factors: 

- [Gas costs on the specified network](#gas-costs-on-the-specified-network)
- [The data type and quantity returned](#the-data-type-and-quantity-returned)
- [Our own infrastructure costs](#infrastructure-costs)
- [The pricing of our fellow node operators](#the-pricing-of-our-fellow-node-operators) 

!> While we make every effort to keep our pricing consistent, as market conditions change, we may eventually need to re-evaluate. As such, it's recommended to keep your LINK payment configurable (ie, the `fee` object within your consumer contract), so that you can easily accommodate any such changes without having to re-deploy your contract.   


### Gas costs on the specified network

Writing your requested data on-chain requires a [fulfillment transaction](https://docs.chain.link/architecture-overview/architecture-request-model?parent=anyApi#fulfillment), which requires us to spend gas. Depending on the network you have chosen for your data, these gas costs can vary significantly. To minimize your costs and ensure a more consistent pricing model, **we recommend against using the Ethereum mainnet** network for your requests.

Gas pricing example:

* A node operator writes a `uint256` object to a consumer contract deployed on MATIC mainnet, which costs **63,000 gas units** to fulfill. Assuming a MATIC token price of **1 USD**, and a network gas price of **150 Gwei**, this will cost the node operator **0.01 USD** in gas fees.
* A node operator writes a `uint256` object to a consumer contract deployed on Ethereum mainnet, which costs **63,000 gas units** to fulfill. Assuming an ETH token price of **2,000 USD**, and a network gas price of **30 Gwei**, this will cost the node operator **3.80 USD** in gas fees.

The above example is for illustrative purposes only; in the real world, gas price, gas token price, and Chainlink token prices all fluctuate dramatically, and factor heavily into our pricing model.  

### The data type and quantity returned

While a `uint256` object may cost us on the order of **60000 gas units** to fulfill on-chain, writing a `bytes[]` object may cost us **500,000 gas units** or more, depending on the content and length of the elements returned. As such, our job pricing may vary by object type and quantity. 

### Infrastructure costs

In maintaining a triple-redundant, highly-secure, zero-downtime environment for our customers, we incur heavy infrastructure costs. Fees sent along with your requests go toward offsetting these costs.

You can read more about the associated [costs of being a node operator](/faq/Chainlink-Operators?id=how-much-does-it-cost-to-run-a-chainlink-node) on our FAQ page.

### The pricing of our fellow node operators 

In order to remain competitive, LinkWell Nodes needs to take into consideration the pricing model of our fellow node operators when establishing our target price point. 

### Have more questions about our pricing?

Feel free to reach out to us via our [contact form](https://linkwellnodes.io/Home.html#contact-us "Contact LinkWell Nodes") for more helpful information.

## External Adapters

#### Full-service external adapter hosting and development:

* We'll host your external adapter (EA) for free on our highly redundant infrastructure - all you'll pay is the typical per-transaction cost in LINK!
* If you need a custom adapter developed, we've got you covered, and can do this for free within 1-2 business days.

#### Situations in which you might need an external adapter:
* API Authentication (keep private API password keys private via our securely hosted infrastructure).
* Private, low latency, and/or high throughput off-chain computation to save gas.
* Writing data to other blockchains (interoperability).

You can learn more about external adapters [here](https://docs.chain.link/chainlink-nodes/external-adapters/external-adapters), and find the list of Chainlink-provided external adapters [here](https://github.com/smartcontractkit/external-adapters-js/tree/main/packages/sources).

## Troubleshooting

Having trouble making your request? Check our [Job Troubleshooting Guide](/faq/Chainlink-Users?id=job-troubleshooting).

## Support
* Feel free to join our [Discord](https://discord.gg/AJ66pRz4) if you require support integrating our job into your contract.  We are happy to support custom data requests as well!
* Check out our [Chainlink User FAQ](/faq/Chainlink-Users "FAQ - Chainlink Data Consumers") for common questions asked to us by our users.