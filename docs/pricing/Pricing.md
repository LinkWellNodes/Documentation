---
description: A guide to how our custom Chainlink oracle integration pricing works
---

import TOCInline from '@theme/TOCInline';

# Data Feed Pricing

## Quick Summary
- Base fee: <strike>$1,250</strike> **$750** / month
- Gas fee: Variable (minimum $250 upfront, refundable)
- Payment accepted in most major currencies: `ETH`, `USDC`, `USDT`, `POL`, `BNB`, `LINK`, `BTC`, or fiat
- Discounts available: 5% for 6-month prepay, 10% for 12-month prepay

## Pricing Table

| Chain                 | Base Fee                                            | Gas Fee                        | Sign Up                        |
|-----------------------|-----------------------------------------------------|--------------------------------|--------------------------------|
| EVM Compatible        | <strike>$1,250</strike> **$750** / month            | Variable (see below)           | [Get Started](https://linkwellnodes.io/Getting-Started.html)
| Non-EVM Compatible    | [Contact Us](https://linkwellnodes.io/#contact-us)  | Variable (see below)           | [Get Started](https://linkwellnodes.io/Getting-Started.html)

## Understanding Your Costs

### 1. Base Fee ($750/month)
- Includes deployment, monitoring, maintenance, and support
- See our [Service-Level Agreement (SLA)](/services/direct-request-jobs/Service-Level-Agreement) for service details
- Prepayment discounts available:

  - 6 months: 5% off (non-refundable)
  - 12 months: 10% off (non-refundable)

### 2. Gas Fee (Variable)
- Minimum upfront payment: $250 (refundable)
- Covers on-chain transaction costs for data updates
- Pay-as-you-go model: deducted from your balance
- Monitor your balance via private URL
- Service pauses if balance reaches zero (with advance notification)

:::info
### Understanding our fees
Operating a secure, reliable oracle infrastructure is extremely cost-prohibitive; oracle operators such as ourselves are able to reduce this cost by recycling the same infrastructure for many customers.
<br/>
You can read more about the [costs of being a node operator](/knowledgebase/faq/Chainlink-Operators#how-much-does-it-cost-to-run-a-chainlink-node) in our FAQ.
:::

## Cost Example: Polygon Network Deployment

### First Month
- Base fee: $750
- Initial gas deposit: $500
- Usage: 10,000 requests @ $0.01/request
- Gas spent: $100 (10,000 × $0.01)
- Total cost: **$850** ($750 + $100)
- Remaining gas balance: $400

### Second Month
- Base fee: $750
- Usage: 25,000 requests @ $0.01/request
- Gas spent: $250 (25,000 × $0.01)
- Total cost: **$1,000** ($750 + $250)
- Remaining gas balance: $150

## What Affects Gas Costs?

### 1. Network Choice
Example comparison for writing a `uint256`:

- **Polygon**: 

  - Gas consumed: 63,000
  - Token price: $1
  - Gas price: 150 Gwei
  - *Gas cost estimate*: ~**$0.01** per request

- **Ethereum**:

  - Gas consumed: 63,000
  - Token price: $2,000
  - Gas price: 30 Gwei
  - *Gas cost estimate*: ~**$3.80** per request

### 2. Data Type Costs
- Simple types (`uint256`): ~60,000 gas units
- Complex types (`bytes[]`): 500,000+ gas units
- Larger data = higher gas costs

### 3. Request Volume
- Higher request volume = higher total gas costs
- Consider batching requests when possible

## Ready to Get Started?
Ready to integrate our Chainlink oracle services? 

Fill out our [request form](https://linkwellnodes.io/Getting-Started.html) to get started. We'll review your requirements and get back to you within 24 hours!

## Need Help?

We're flexible and can accommodate your custom requirements and budget restraints. Please contact us through one of the following means:

1. Fill out our [request form](https://linkwellnodes.io/Getting-Started.html)
1. Join our [Discord server](https://discord.gg/Xs6SjqVPUA)
1. Book a consultation through [Calendly](https://calendly.com/linkwell-nodes)
1. Contact us through our [website](https://linkwellnodes.io/#contact-us)
