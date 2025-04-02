---
description: A guide to how our custom Chainlink oracle integration pricing works
---

import TOCInline from '@theme/TOCInline';

# Data Feed Pricing

Our goal is to provide **transparency** and **simplicity** around the way our pricing works.

For our Chainlink oracle integrations ([data feeds](/services/direct-request-jobs/Jobs-and-Pricing)), please see our pricing chart below:

| Chain                 | Base Fee                                            | Gas Fee                        |
|-----------------------|-----------------------------------------------------|--------------------------------|
| EVM Compatible        | <strike>$1,500</strike> **$1,000** / month                                      | Variable (see below)           |
| Non-EVM Compatible    | [Contact Us](https://linkwellnodes.io/#contact-us)  | Variable (see below)           |

### Fee descriptions

- **Base Fee**: The base price of our services (includes deployment, monitoring, maintenance, and support). Please see our [Service-Level Agreement (SLA)](/services/direct-request-jobs/Service-Level-Agreement) for more details about the quality of our service. We provide discounts of **5%** and **10%** to the Base Fee those paying 6 or 12 months in advance (non-refundable).
- **Gas Fee**: The cost of gas required to write all of your oracle updates on-chain (ie, the `fulfill()` function) in a given month. This cost varies by chain, smart contract design, and gas token price. This fee is paid up-front (**minimum $250**), is refundable, and establishes a balance from which each of your requests will be deducted. If your balance reaches zero, your data feed will stop functioning. We will make every attempt to notify you before this happens, and will provide you with a private URL where you may check your remaining balance at any time.
- Your total monthly payment will be the **Base Fee** + your **Gas Fee**. 

:::info
We accept payment in your preferred currency (ie, **ETH**, **USDC**, **fiat**, etc.). 
:::

### Real-world pricing example

Your team decides to deploy their smart contract on Polygon (an EVM-compatible chain):

- **First month**: Your team pays the $1,000 base fee for the first month, and decides to contribute $500 initially towards your gas fees. Your smart contract makes 10,000 requests during the first month, costing an average of $0.01 in gas per request. Your total effective cost for the first month is thus **$1,100** `($1,000 + (10,000 * $0.01))`. This brings your gas fee balance down to **$400** `($500 - $100)`. 
- **Second month**: During the second month, your user volume increases, and you make 25,000 requests, still costing an average of $0.01 in gas per request. Your total effective cost for the second month is thus **$1,250** `($1,000 + (25,000 * $0.01))`. This brings your gas balance down to **$150** `($400 - $250)`. At this point, we'd recommend that you make another contribution toward your gas fee balance, so that your feed doesn't go down unexpectedly in the third month, impacting your users.

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

1. [Infrastructure costs](#1-infrastructure-costs)
1. [Gas costs on the specified network](#2-gas-costs-on-the-specified-network)
1. [The data type and quantity returned](#3-the-data-type-and-quantity-returned)
1. [Your request volume](#4-your-request-volume)

### 1. Infrastructure and maintenance costs

In maintaining a triple+ redundant, highly-secure, zero-downtime environment for our customers, we incur heavy infrastructure and personnel costs. The base fee goes toward offsetting these costs.

### 2. Gas costs on the specified network

Writing your requested data on-chain requires a [fulfillment transaction](https://docs.chain.link/architecture-overview/architecture-request-model?parent=anyApi#fulfillment), which requires us (the oracle) to spend gas. Depending on the network you have chosen for your data, these gas costs can vary significantly. To minimize your costs and ensure a more consistent pricing model, **we recommend against using the Ethereum mainnet** network for your requests.

Gas pricing example:

* **Polygon network**: A node operator writes a `uint256` object to a consumer contract deployed on MATIC mainnet, which costs **63,000 gas units** to fulfill. Assuming a MATIC token price of **1 USD**, and a network gas price of **150 Gwei**, this will cost the node operator **0.01 USD** in gas fees.
* **Ethereum network**: A node operator writes a `uint256` object to a consumer contract deployed on Ethereum mainnet, which costs **63,000 gas units** to fulfill. Assuming an ETH token price of **2,000 USD**, and a network gas price of **30 Gwei**, this will cost the node operator **3.80 USD** in gas fees.

The above example is for illustrative purposes only; in the real world, gas price, gas token price, and Chainlink token prices all fluctuate dramatically, and factor heavily into our pricing model.  

### 3. The data type and quantity returned

While a `uint256` object may cost us on the order of **60,000 gas units** to fulfill on-chain, writing a `bytes[]` object may cost us **500,000 gas units** or more, depending on the content and length of the elements returned.

### 4. Your request volume

The more requests to our Chainlink oracle, the higher the oracle gas fees, which is a factor in the total monthly fee.

You can read more about the associated [costs of being a node operator](/knowledgebase/faq/Chainlink-Operators#how-much-does-it-cost-to-run-a-chainlink-node) on our FAQ page.

## Have a question about our pricing?

Please don't hesitate to [contact us](https://linkwellnodes.io/#contact-us "Contact LinkWell Nodes") about your budget constraints. We're always happy to discuss!
