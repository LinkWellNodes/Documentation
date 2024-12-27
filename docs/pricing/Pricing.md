---
description: A guide to how our custom Chainlink oracle integration pricing works
---

import TOCInline from '@theme/TOCInline';

# Data Feed Pricing

Our goal is to provide **transparency** and **simplicity** around the way our pricing works.

For custom Chainlink oracle integrations, please see our pricing chart below.

| Chain                 | Base Fee                                            | Additonal Fees                 |
|-----------------------|-----------------------------------------------------|--------------------------------|
| EVM Compatible        | $1,500 / month                                      | Oracle gas fees                |
| Non-EVM Compatible    | [Contact Us](https://linkwellnodes.io/#contact-us)  | Oracle gas fees                |

For instance, if you deploy your smart contract on Polygon, the cost of oracle integration would be $1,500 per month, plus any gas fees associated with on-chain oracle updates. In this case, if the Polygon oracle generates $100 in monthly gas fees, the total monthly expense would amount to $1,600.

:::info
We accept payment across multiple currencies (ie, **ETH** or **fiat**). Additionally, we provide pricing discounts if paying 6 or 12 months in advance (non-refundable).
:::

---

**On this page**:

<TOCInline
  toc={toc.filter((node) => node.level >= 2)}
  minHeadingLevel={2}
  maxHeadingLevel={2}
/>

---

## What factors influence our pricing?

At LinkWell nodes, we pride ourselves in keeping our fees as low as possible for our clients, while also ensuring a redundant, reliable, and highly-secure oracle infrastructure.

Our pricing is based on the following factors:

1. [Gas costs on the specified network](#1-gas-costs-on-the-specified-network)
1. [The data type and quantity returned](#2-the-data-type-and-quantity-returned)
1. [Your request volume](#3-your-request-volume)
1. [Our own infrastructure costs](#4-infrastructure-costs)

### 1. Gas costs on the specified network

Writing your requested data on-chain requires a [fulfillment transaction](https://docs.chain.link/architecture-overview/architecture-request-model?parent=anyApi#fulfillment), which requires us (the oracle) to spend gas. Depending on the network you have chosen for your data, these gas costs can vary significantly. To minimize your costs and ensure a more consistent pricing model, **we recommend against using the Ethereum mainnet** network for your requests.

Gas pricing example:

* **Polygon network**: A node operator writes a `uint256` object to a consumer contract deployed on MATIC mainnet, which costs **63,000 gas units** to fulfill. Assuming a MATIC token price of **1 USD**, and a network gas price of **150 Gwei**, this will cost the node operator **0.01 USD** in gas fees.
* **Ethereum network**: A node operator writes a `uint256` object to a consumer contract deployed on Ethereum mainnet, which costs **63,000 gas units** to fulfill. Assuming an ETH token price of **2,000 USD**, and a network gas price of **30 Gwei**, this will cost the node operator **3.80 USD** in gas fees.

The above example is for illustrative purposes only; in the real world, gas price, gas token price, and Chainlink token prices all fluctuate dramatically, and factor heavily into our pricing model.  

### 2. The data type and quantity returned

While a `uint256` object may cost us on the order of **60,000 gas units** to fulfill on-chain, writing a `bytes[]` object may cost us **500,000 gas units** or more, depending on the content and length of the elements returned.

### 3. Your request volume

The more requests to our Chainlink oracle, the higher the oracle gas fees, which is a factor in the total monthly fee.

### 4. Infrastructure and maintenance costs

In maintaining a triple+ redundant, highly-secure, zero-downtime environment for our customers, we incur heavy infrastructure costs. The base fee + oracle gas costs go toward offsetting these costs.

You can read more about the associated [costs of being a node operator](/knowledgebase/faq/Chainlink-Operators#how-much-does-it-cost-to-run-a-chainlink-node) on our FAQ page.

## Have a question about our pricing?

Please don't hesitate to [contact us](https://linkwellnodes.io/#contact-us "Contact LinkWell Nodes") about your budget constraints. We're always happy to discuss!
