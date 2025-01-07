---
title: "Introducing A Custom Chainlink Price Feed Solution For Web3 Apps"
description: "Introducing LinkWell Nodes' secure, reliable, and affordable custom Chainlink oracle price feed solution for on-chain smart contract updates."
date: "2024-05-30"
image: https://docs.linkwellnodes.io/img/.../img.png
keywords: [chainlink oracle, smart contracts, price feed, web3, blockchain]
authors: [Ken]
tags: [chainlink oracle, smart contracts,  price feed, web3, blockchain]

---

import TOCInline from '@theme/TOCInline';

<h2 class='lw-subtitle'>Introducing LinkWell Nodes' custom Chainlink price feed solution for Web3 updates, detailing benefits and implementation for real-world data integration.</h2>

<p align="center">
  <img src="/img/custom-price-feed/linkwell-custom-price-feed.webp" alt="LinkWell Nodes' Custom Price Feed Solution" />
</p>

<!--truncate-->

---

**On this page**:

<TOCInline
  toc={toc.filter((node) => node.level >= 1)}
  minHeadingLevel={2}
  maxHeadingLevel={2}
/>

---

## Introduction

DeFi and the greater Web3 space would not be where it is today without access to reliable, accurate, and secure price data.

Chainlink, the leading Web3 services platform renowned for its off-chain data, computation, and cross-chain connectivity, offers price feed data as one of its core service offering. These feeds, supported by independent Chainlink oracles operating within decentralized oracle networks (DONs), have been delivering highly secure and reliable price data to countless Web3 applications since their launch in 2019. Despite the robustness of Chainlink's protocols and the trust-minimized DONs that underpin these services, however, there is one limitation - the sheer number of potential price pairs and use cases far exceeds what Chainlink is currently supporting.

At [LinkWell Nodes](https://docs.linkwellnodes.io/about), we've stepped up to extend the reach of this vital technology. Our custom Chainlink price feed solution is designed to bridge the gaps of Chainlink's official price feeds, providing reliable, accurate, and secure data for even the most specialized or emerging use cases. Whether it’s a niche markets, unique asset classes, or bespoke economic indicators, our custom price feed solution ensures that your DeFi project has the data that it needs.

In this article, we'll explore how Chainlink's price feeds work, how ours differ, what the benefits are, and how to get started.

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/-pJqlI61ZKc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>

## How Chainlink's official price feeds work

Chainlink Price Feeds, as listed via their [data feeds page](https://data.chain.link/feeds), are powered by decentralized oracle networks that deliver accurate, up to date asset price data to smart contracts across various blockchain platforms and price pairs. They utilize a network of independent, security-reviewed node operators who gather data from multiple premium data providers. 

This multi-source approach ensures comprehensive market coverage and protects against single points of failure and data manipulation. Once collected, the data is aggregated to form a consensus price, which is then securely transmitted on-chain to an aggregation contract.

![Chainlink Price Feed DON](/img/custom-price-feed/chainlink-price-feed.webp "Official Chainlink Price Feed Decentralized Oracle Network")<center><small>Credit: [blog.chain.link](https://blog.chain.link/chainlink-price-feeds-secure-defi/)</small></center>

The cost of using Chainlink Price Feeds is typically covered by the smart contract developers or the project/teams that utilize these feeds within their applications. These users pay for, or sponsor, the network fees associated with retrieving data from the oracles. The payment is generally made in the form of LINK tokens, which are used to compensate the node operators for their services in retrieving, aggregating, and delivering the data.

While this model provides the most robust security and reliability assurances among Web3 price feed solutions - and we strongly recommend using Chainlink's price feeds when suitable - emerging Web3 projects needing a price feed not currently supported by Chainlink face challenges with getting their data on-chain. As noted earlier, initiating and sponsoring a new price feed involves expenses. Security budgets for newer teams are frequently constrained, which can lead to concerns about the affordability of funding new feeds or push them to consider alternative oracle providers - a course of action we advise against for a number of reasons.

This is where our custom price feed solution comes into play, which we will introduce in the following sections.

## LinkWell Nodes' custom price feeds solution

As innovators in the Chainlink oracle space with extensive experience working alongside various Web3 teams, we identified a growing need for a price feed solution that could be seamlessly integrated to supply accurate pricing data for any asset.

Our custom price feed solution operates in a similar manner to Chainlink's official price feeds - data is aggregated from various data providers and "pushed" on-chain when certain conditions are met, such as a heartbeat timer or a deviation threshold is crossed. Additionally, our solution can accomodate any number of data sources required, providing decentralization at the data source layer.

<p align="center">
  <img src="/img/custom-price-feed/linkwell-custom-price-feed.webp" alt="LinkWell Nodes' Custom Price Feed Solution" />
</p>

There are two key differences from Chainlink's official price feeds, however, that are worth mentioning:

1. Price updates are pushed directly to your smart contract, whereas Chainlink's price feeds push updates to a publicly available on-chain aggregation contract.

2. Given the specialized design and unique logic needed for this price feed solution, it operates exclusively through a singular oracle network provided by us at LinkWell Nodes.

The sole requirement to integrate our price feed solution into your contract is to provide a contract address, function name, and function signature that includes input variables. Below is an example:

``` solidity
    uint256 public oracleResult;
    // Receive the result from the Chainlink oracle
    // Only the oracle can call this function
    function fulfill(uint256 _data) external onlyOracle {
        oracleResult = _data;
    }
```

Once configured, our price feeds can be adjusted at any time to modify the deviation threshold or heartbeat timer - the two primary methods for facilitating on-chain updates.

> _In need of a trust-minimized solution? We provide a custom price feed capability that can support a DON architecture using multiple independent Chainlink oracles. If you'd like to speak directly with Chainlink Labs regarding your data feed requirements, feel free to contact them [here](https://chain.link/contact?ref_id=datafeeds) for further assistance._

## Benefits of our custom Chainlink price feeds

Our custom price feed solution offers a number of benefits to include:

1. **Any Price Pair**: Our Chainlink price feed solution can accommodate any price feed your Web3 application requires, provided our infrastructure can access the data over the internet. Additionally, our solution is versatile, supporting not only price updates but any integer-based value as well, such as for proof of reserve.

2. **Secure and Reliable**: Our Chainlink oracles are distributed across various geographically distinct data centers, ensuring high uptime and reliability. Additionally, we offer robust security assurances and a [Service Level Agreement](https://docs.linkwellnodes.io/services/direct-request-jobs/Service-Level-Agreement) (SLA) for ensuring the reliability and security of your data.

3. **Affordable**: A key advantage of our custom price feed updates is the reduced gas costs for submitting updates on-chain, which enables us to pass these savings onto our users. Additionally, we operate Chainlink oracles on testnets where we offer to trial or test the solution at no cost to you.

4. **Flexible Payments**: On top of affordability, we also provide various payment methods - an upfront payment subscription model that can accept payment across multiple currencies, or the traditional model of paying for each request in the form of the LINK token.

5. **Rapid Deployment**: From the moment you reach out to us, we can have this solution up and running within a day. This can be particularly valuable for teams in need of an immediate price feed solution.

6. **Full-Service Support**: We are happy to support the price feed integration process every step of the way. Additionally, we carefully monitor our infrastructure along with the custom price feed for any issues or anomalous activity.

## How to get started

We've gone through great lengths to make the integration process as seamless as possible - all you have to do is reach out! We can be contacted via [Discord](https://discord.com/invite/Xs6SjqVPUA), [Twitter](https://x.com/LinkWell_Nodes), [Email](mailto:hello@linkwellnodes.io?subject=Website%20inquiry), or simply fill out our [request survey form](https://linkwellnodes.io/Getting-Started.html) to get started.

Should you choose to contact us, all we request that you send us is the network you wish to deploy on, your data requirements (ie price pair, data sources, etc.), update frequencies needed for your Web3 application's use case, and the timeline in which you require the price feed.

## Conclusion

In an ideal scenario, Chainlink's price feeds, powered by their trust-minimized decentralized oracle networks, would support every conceivable price pair or use case needed by Web3 applications.

Although this could become a reality in the future - a future we eagerly anticipate - we hope that our custom price feed solution can help fill in the gaps by offering tailored data services that adapt to specific needs not yet covered by Chainlink's existing offerings. 
As passionate developers and members of the Chainlink community ourselves, nothing brings us more satisfaction than bringing a Web3 application to life with the data it needs to not only thrive and succeed.

Happy building!

> _LinkWell Nodes is a U.S.-based Chainlink community oracle, providing custom data feed capabilities and self-service oracle solutions across virtually all major mainnet and testnet blockchains supported by Chainlink._
>
> _Looking for a custom data feed? Head on over to our [documentation](/), or hop into the [LinkWell Nodes Discord server](https://discord.com/invite/Xs6SjqVPUA) and ask for help!_
>
> _Disclaimer: all views and opinions expressed in this article are strictly our own._

![LinkWell Nodes - U.S.-based Chainlink node operator](/img/lw-banner_1080x606.webp "LinkWell Nodes - U.S.-based Chainlink node operator")