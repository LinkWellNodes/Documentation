import TOCInline from '@theme/TOCInline';

# Direct Request Pricing

Our goal is to provide **transparency** around the way our pricing works. 

To view our per-request fees, please visit the [documentation page](/services/direct-request-jobs/mainnets/Polygon-Mainnet-Jobs) for the respective job, and look for the **Request Fee**.

---

**On this page**:

<TOCInline
  toc={toc.filter((node) => node.level >= 2)}
  minHeadingLevel={2}
  maxHeadingLevel={2}
/>

---

## Fee lifecycle

When you make a request to a Chainlink oracle, you'll send a fee (denominated in `LINK` token) along with your request. This fee varies by the specific **network** and **data type**, and is set by the node operator. 

After retrieving your requested data, the node operator pays for the required `gas` to write the result onto the blockchain, in the currency of the respective chain's native gas token (ie, `ETH`).

:::info 
To ensure you send the appropriate amount of LINK with your request, please ensure that your consumer contract is funded with sufficient LINK token, and that the `fee` variable within your consumer contract matches the one specified within our documentation for the related job. 
:::

## How do we calculate our fees?

At LinkWell nodes, we pride ourselves in keeping our fees as low as possible for our clients, while also ensuring a reliable, secure, and scalable oracle infrastructure. 

Our per-request pricing is based on the following factors: 

1. [Gas costs on the specified network](#1-gas-costs-on-the-specified-network)
1. [The data type and quantity returned](#2-the-data-type-and-quantity-returned)
1. [Our own infrastructure costs](#3-infrastructure-costs)
1. [Our existing customer volume](#4-our-existing-customer-volume)
1. [The pricing of our fellow node operators](#5-the-pricing-of-our-fellow-node-operators)

:::info 
While we make every effort to keep our pricing consistent, as market conditions change, we may eventually need to re-evaluate. As such, it's recommended to keep your LINK payment configurable (ie, the `fee` object within your consumer contract), so that you can easily accommodate any such changes without having to re-deploy your contract. By default, all consumer contract examples present within our documentation provide an interface for updating fees (see: `setFeeInHundredthsOfLink()` method).
:::

### 1. Gas costs on the specified network

Writing your requested data on-chain requires a [fulfillment transaction](https://docs.chain.link/architecture-overview/architecture-request-model?parent=anyApi#fulfillment), which requires us to spend gas. Depending on the network you have chosen for your data, these gas costs can vary significantly. To minimize your costs and ensure a more consistent pricing model, **we recommend against using the Ethereum mainnet** network for your requests.

Gas pricing example:

* A node operator writes a `uint256` object to a consumer contract deployed on MATIC mainnet, which costs **63,000 gas units** to fulfill. Assuming a MATIC token price of **1 USD**, and a network gas price of **150 Gwei**, this will cost the node operator **0.01 USD** in gas fees.
* A node operator writes a `uint256` object to a consumer contract deployed on Ethereum mainnet, which costs **63,000 gas units** to fulfill. Assuming an ETH token price of **2,000 USD**, and a network gas price of **30 Gwei**, this will cost the node operator **3.80 USD** in gas fees.

The above example is for illustrative purposes only; in the real world, gas price, gas token price, and Chainlink token prices all fluctuate dramatically, and factor heavily into our pricing model.  

### 2. The data type and quantity returned

While a `uint256` object may cost us on the order of **60000 gas units** to fulfill on-chain, writing a `bytes[]` object may cost us **500,000 gas units** or more, depending on the content and length of the elements returned. As such, our job pricing may vary by object type and quantity. 

### 3. Infrastructure costs

In maintaining a triple-redundant, highly-secure, zero-downtime environment for our customers, we incur heavy infrastructure costs. Fees sent along with your requests go toward offsetting these costs.

You can read more about the associated [costs of being a node operator](/knowledgebase/Chainlink-Operators-FAQ#how-much-does-it-cost-to-run-a-chainlink-node) on our FAQ page.

### 4. Our existing customer volume

As public node operators, we benefit from economies of scale. In other words, the more clients we have running requests against our oracles, the more sophisticated, secure, and reliable the infrastructure that we can afford to maintain. As our number of clients increase, we expect to be able to drop our costs, while also being strategic about expanding our infrastructure. 

In this way, we can afford to provide a more reliable oracle data infrastructure than any lone node operator can afford to maintain, resulting in a win-win for everyone! 

### 5. The pricing of our fellow node operators 

In order to remain competitive, LinkWell Nodes needs to take into consideration the pricing model of our fellow node operators when establishing our target price point. 

## Have a question about our pricing?

Please [contact us](https://linkwellnodes.io/Home.html#contact-us "Contact LinkWell Nodes") to discuss.
