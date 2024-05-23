---
title: "Build and Deploy a Chainlinked Smart Contract on Base"
description: "How to write, compile, and deploy your first smart contract on Base Sepolia that connects to a Chainlink oracle for real-world data."
date: "2024-05-22"
image: https://docs.linkwellnodes.io/img/.../img.png
keywords: [chainlink oracle, smart contracts, price feed, web3, blockchain]
authors: [Ken]
tags: [chainlink oracle, smart contracts,  price feed, web3, blockchain]
---

import TOCInline from '@theme/TOCInline';

<h2 class='lw-subtitle'>How to write, compile, and deploy your first smart contract on Base Sepolia that connects to a Chainlink oracle for real-world data.</h2>

![IMG TEXT](/img/link-electric.webp "PLACEHOLDER")<center><small>Credit: PLACEHOLDER</small></center>

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

In this tutorial, we'll guide you through the step-by-step process of building and deploying a smart contract on the Base Sepolia testnet and make an on-demand request to a Chainlink oracle for near real-time price data.

Without access to real-world data, many dApps simply wouldn't exist. Fortunately, [Chainlink](https://chain.link/), the leading Web3 services platform for cross-chain connectivity, compute, and data, provides numerous services for retrieving price or other external data from anywhere on the internet.

[Coinbase's Base Sepolia network](https://sepolia.basescan.org/) is a Layer 2 testnet blockchain on Ethereum, offering scalability, security, and low transaction costs through Optimistic Rollup technology. Integrated with Coinbase's ecosystem, it provides easy access to a large user base and seamless tool integration, making it ideal for building decentralized applications.

Feel free to follow along as we walk you through the process.

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/pWGLtjG-F5c" frameborder="0" allowfullscreen></iframe></center>

## Prerequisites

Before diving in, we'll give a quick primer on the four different Web3 technologies that you'll be interacting with in this tutorial:

* **A Web3 Wallet**: Web3 wallets are required for not only storing your tokens, but also for deploying your smart contracts and signing messages. Examples include [MetaMask](https://metamask.io/) and [Coinbase Wallet](https://www.coinbase.com/wallet).

* **An IDE**: EVM-compatible Integrated development environments (IDE) like [Remix](https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null) are required for deploying and testing your smart contract. Advanced users may prefer a development framework such as  [Foundry](https://docs.chain.link/quickstarts/foundry-chainlink-toolkit), particularly for more complex deployments.

* **Solidity**: [Solidity](https://docs.soliditylang.org/en/v0.8.25/) is Ethereum's primary programming language for developing smart contracts. It will be helpful to have at least a basic understanding of Solidity before getting started.

* **Chainlink**: Chainlink oracles are services that typically operate within decentralized oracle networks (DON), connecting smart contracts to real-world data and external systems. They act as bridges, allowing blockchain applications to access cross-chain connectivity, off-chain compute, and external information such as weather data, stock prices, and sports scores, which are not natively available on the blockchain.

> _Chainlink oracles can return data from anywhere on the internet. For more ideas, we recommend looking into Chainlink's blog on the [77 different use cases enabled by Chainlink](https://blog.chain.link/smart-contract-use-cases/). Additional examples that walk you through making an on-demand request can be found within our [website's documentation](https://docs.linkwellnodes.io/services/direct-request-jobs/Any-API-Guide)._

## Setting up and funding MetaMask

To deploy smart contracts on-chain, you'll first need a wallet and ETH. ETH is the token used to pay for the network's work in adding the contract to the blockchain and storing its data. Your wallet holds the ETH needed for these transactions. Install MetaMask, set it up for the Base Sepolia testnet, and add free testnet ETH to your wallet.

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/-HTubEJ61zU" frameborder="0" allowfullscreen></iframe></center>

1. [Download and install MetaMask](https://support.metamask.io/getting-started/getting-started-with-metamask/#how-to-install-metamask) within your browser.

<p align="center">
  <img src="/img/deploy_sc_base/mm_extension.webp" alt="Download Metamask to Your Browser From Chrome Web Store" />
</p>

2. Once installed, open the MetaMask extension in your browser and proceed through the setup process. A key point to note here is the 12-word seed phrase - a unique recovery key that allows you to restore access to your wallet and funds. Write this down on paper and store it safely.

3. You'll need to add the Base Sepolia testnet network to MetaMask. A detailed guide on how to do this can be found [here](https://docs.base.org/docs/using-base/#metamask). To add Base Sepolia as a custom network to MetaMask:

* Open the network selection dropdown menu by clicking the dropdown button at the top of the extension (default is Ethereum Mainnet).
* Click the Add network button.
* Click Add a network manually.
* In the Add a network manually dialog that appears, enter the following information for the Base Sepolia testnet:

<p align="center">
  <img src="/img/deploy_sc_base/mm_base_sepolia_network.webp" alt="Configure Metamask to Connect to Base Sepolia" />
</p>

* Tap the Save button to save Base Sepolia as a network.
* You can now switch to the Base Sepolia network in Metamask.

> _To add other networks to MetaMask, simply navigate to [Chainlist](https://Chainlist.org), connect your wallet, search for your desired network, and click **Add to Metamask**._

4. Fund your MetaMask wallet with testnet ETH. Testnet ETH is available from one of the [BASE Network Faucets](https://docs.base.org/docs/tools/network-faucets/).

<p align="center">
  <img src="/img/deploy_sc_base/superchain_faucet.webp" alt="Connect to a Facuet to Receive Testnet ETH" />
</p>

## Writing, compiling, and deploying your smart contract

In the following steps, you'll write, compile, and deploy a smart contract that fetches price data (of type **uint256**) from the CryptoCompare data provider. The sample code shows how to create a basic smart contract that makes on-demand requests to a Chainlink oracle for the price of ETH in USD from CryptoCompare.

``` solidity
    // Send a request to the Chainlink oracle
    function request() public {
    
        Chainlink.Request memory req = _buildOperatorRequest(jobId, this.fulfill.selector);
        
        // DEFINE THE REQUEST PARAMETERS (example)
        req._add('method', 'GET');
        req._add('url', 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=USD');
        req._add('headers', '["content-type", "application/json", "set-cookie", "sid=14A52"]');
        req._add('body', '');
        req._add('contact', '');     // PLEASE ENTER YOUR CONTACT INFO. this allows us to notify you in the event of any emergencies related to your request (ie, bugs, downtime, etc.). example values: 'derek_linkwellnodes.io' (Discord handle) OR 'derek@linkwellnodes.io' OR '+1-617-545-4721'
        
        // The following curl command simulates the above request parameters: 
        // curl 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR' --request 'GET' --header 'content-type: application/json' --header 'set-cookie: sid=14A52'
        
        // PROCESS THE RESULT (example)
        req._add('path', 'ETH,USD');
        req._addInt('multiplier', 10 ** 18);

        // Send the request to the Chainlink oracle        
        _sendOperatorRequest(req, fee);
    }
```

1. The first step is to navigate to [Remix](https://remix.ethereum.org/) and deploy the sample contract. For ease of use, you can navigate to [this link](https://remix.ethereum.org/#activate=github&url=https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Base-Sepolia/uint256/uint256.sol&lang=en&optimize=false&runs=200&evmVersion=null). This will open the contents of the sample contract code and allow you to edit it if you desire.

> _Please pay special note to the constructor function. It specifies important information about the request destination, payment for your request, and is preconfigured to point to [LinkWell Nodes Base Sepolia testnet oracle](https://docs.linkwellnodes.io/services/direct-request-jobs/testnets/Base-Sepolia-Testnet-Jobs?dataType=Uint256)._

2. Use the default compiler settings for this contract. Click the **Compile uint256.sol** button to convert the Solidity code into bytecode that the Ethereum Virtual Machine can understand.

<p align="center">
  <img src="/img/deploy_sc_base/remix_solidity_compiler.webp" alt="Open the Sample Github Code and Click Compile" />
</p>

3. Now it's time to deploy the contract. Navigate to the **Deploy and run transactions** button on the left.

4. The next step is to configure the Remix environment to connect to your MetaMask wallet, which is currently connected to the Base Sepolia testnet.

<p align="center">
  <img src="/img/deploy_sc_base/remix_connect_to_metamask.webp" alt="Connect Remix to Your Metamask Wallet" />
</p>

Under **Environment**, click **Injected Provider - Metamask**. This will open up a MetaMask window that provides a few prompts to connect to Remix.

5. Next, you'll click the orange deploy button. This deploys the smart contract to the Base Sepolia testnet.

<p align="center">
  <img src="/img/deploy_sc_base/remix_smart_contract_deploy.webp" alt="Deploy the Smart Contract to Base Sepolia" />
</p>

6. Deploying the contract opens a MetaMask prompt which requests that you confirm the transaction. Once confirmed after a short period, your contract will be officially deployed!

<p align="center">
  <img src="/img/deploy_sc_base/mm_confirm_txn_contract_deploy.webp" alt="IMG DESCRIPTION" />
</p>

> _When you deploy a contract to an EVM-compatible chain, your Solidity code is compiled into bytecode and sent in a transaction to the network. Nodes verify the transaction, consuming gas (paid in ETH), and the contract is assigned a unique address on the blockchain. This process makes the contract publicly accessible and secure within the decentralized network._

7. Just like your MetaMask wallet, your new contract will have its own unique address as well. You can view the contract within the [Base Sepolia block explorer](https://sepolia.basescan.org/) by pasting the contract address in the search bar.

## Executing an on-demand request in your smart contract to a Chainlink oracle

You've deployed your first smart contract. Congrats!

In Remix, open up the contract that you just deployed, and you should see a number of different functions that are highlighted in blue and orange. The blue function buttons represent view or pure functions, which are read-only and do not modify the blockchain state. These functions do not require gas fees to execute. Orange function buttons represent functions that modify the blockchain state, such as those that change variables or send transactions. These functions require gas fees to execute.

1. Feel free to review the **getJobId** and **getOracleAddress** functions, which should display the oracle address and job ID that you specified in the constructor. Additionally, click the **response** button, which should initially show **0**, since you haven't made an on-demand oracle request yet.

<p align="center">
  <img src="/img/deploy_sc_base/contract_view_functions.webp" alt="Explore the Smart Contracts View Functions" />
</p>

2. Next, click the orange **request** button. This initiates an on-demand request to the specified Chainlink oracle, and will open up another MetaMask prompt that will require you to confirm the transaction. At a high level, the Chainlink oracle will reach out to the CryptoCompare endpoint and return a **uint256** object (the price of ETH in USD).

<p align="center">
  <img src="/img/deploy_sc_base/oracle_request_function.webp" alt="Execute the Request Function" />
</p>

> _If interested in diving deeper into the step by step process of making an on-demand request to a Chainlink oracle, please refer to our [developer documentation direct requests](https://docs.linkwellnodes.io/knowledgebase/Direct-Request-Guide)._

3. Pending the request was successfully completed and after a short period, the response variable should now be updated with the latest price of Ethereum, denominated in USD.

<p align="center">
  <img src="/img/deploy_sc_base/response_variable_udpated.webp" alt="View the Updated Response Variable" />
</p>

Take note that the CryptoCompare url specified in the request function provides a JSON response of **3833.23**. Due to the fact that decimals do not work in Solidity, the **3833.23** value is multiplied by 10 ** 18 in order to remove the decimals before writing the value on chain.

Now that the latest Ethereum price is stored in a variable in your contract, you can execute additional logic based on this updated value, such as:

* **Executing Trades**: Automatically buy or sell assets based on predefined price conditions.
* **Issuing Stablecoins**: Adjust the supply of a stablecoin to maintain its peg relative to Ethereum's price.
* **Updating DeFi Protocols**: Adjust interest rates or collateral requirements in decentralized finance applications.
* **Triggering Payments**: Send payments or rewards when Ethereum reaches certain price milestones.

> _Making an on-demand request to a Chainink oracle is one of several options for updating variables within your smart contract. If interested in learning more about Chainlink's various services, head on over to their [developer documentation](https://docs.chain.link/) to find out more._

## Conclusion

In conclusion, deploying your first smart contract on the Base Sepolia testnet and connecting it to a Chainlink oracle for on-demand data updates is a powerful way to integrate real-world information into your decentralized application. By following this tutorial, you've learned how to set up a Web3 wallet along with your development environment, write and compile a smart contract, and leverage one of many oracle services that Chainlink provides. We hope that this tutorial provides a strong foundation for creating dynamic and responsive Web3 applications, ultimately enabling you to harness the full potential of blockchain technology.

> _LinkWell Nodes is a U.S.-based Chainlink community oracle, providing custom data feed capabilities and self-service oracle solutions across virtually all major mainnet and testnet blockchains supported by Chainlink._
>
> _Looking for a custom data feed? Head on over to our [documentation](/), or hop into the [LinkWell Nodes Discord server](https://discord.com/invite/Xs6SjqVPUA) and ask for help!_
>
> _Disclaimer: all views and opinions expressed in this article are strictly our own._

![LinkWell Nodes - U.S.-based Chainlink node operator](/img/lw-banner_1080x606.webp "LinkWell Nodes - U.S.-based Chainlink node operator")