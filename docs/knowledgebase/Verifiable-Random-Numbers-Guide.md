---
title: "Verifiable Random Numbers (VRN)"
description: "A guide to using LinkWell Nodes' Verifiable Random Numbers (VRN) service - a cryptographically secure and verifiable random number generation solution, similar to Chainlink's VRF."
---

import TOCInline from '@theme/TOCInline';

<h2 class='lw-subtitle'>A guide to generating <lw-emphasis>Verifiable Random Numbers (VRNs)</lw-emphasis> in your smart contract using LinkWell Nodes's cryptographically secure and verifiable random number generation (RNG) service.</h2>

![Custom Chainlink data feeds by LinkWell Nodes](/img/rng-dice.webp "Verifiable Random Numbers (VRN / VRF / RNG) by LinkWell Nodes")

---

**On this page**:

<TOCInline
  toc={toc.filter((node) => node.level >= 2)}
  minHeadingLevel={1}
  maxHeadingLevel={3}
/>

---

## Overview

LinkWell Nodes's **Verifiable Random Numbers (VRN)** service is a cryptographically-secure random number generator (RNG) that sends random numbers to your on-chain smart contract. 

Unlike traditional random number generators, VRN allows you to independently verify that the numbers provided were generated fairly, using a pre-committed secret seed.

:::info
### Is LinkWell's VRN the same as Chainlink's VRF?

No. VRN is a different service that provides a similar level of security and verifiability, but added ease of implementation, free testnet usage, and minimal-cost mainnet usage.
:::

## Features

- **Cryptographically Secure**: Seeds are generated randomly using a secure cryptographic hashing algorithm
- **Verifiable**: All random numbers can be independently verified using the seed
- **Tamper-Proof**: Seeds are revealed only after a delay, preventing manipulation
- **Range-Bound**: Request random numbers within any specified range
- **Gas Efficient**: Computation happens off-chain, minimizing gas costs

## Key concepts

1. **Seed Generation**
   - Our infrastructure generates a new cryptographically-secure random seed every **6 hours** (also known as an '**epoch**')
   - Each seed is hashed and stored securely on our SOC-2 compliant infrastructure
   - Seeds only become publicly available once their respective epoch has ended, to prevent manipulation

2. **Random Number Request**
   - Your smart contract's `request()` function requests a random number within the specified `minVal` and `maxVal` (inclusive)
   - Our oracle uses the current epoch's secret seed to generate your random number
   - Our oracle returns both the random number and the seed's one-way hash to your smart contract

3. **Verification**
   - Once the seed becomes publicly available, your random number(s) can be verified independently [on-chain](#option-2-on-chain-using-an-oracle-request) or [off-chain](#option-1-off-chain-using-our-website)

## Implementation guide

### **Step 1**: Deploy your VRN consumer contract

Deploy your own VRN consumer contract to start requesting verifiable random numbers:

- Visit our [Data Feeds](/services/direct-request-jobs/Jobs-and-Pricing) page and navigate to your desired **blockchain network** and **data type** to find the appropriate VRN consumer contract.

    **Example**: `Testnets` -> `Base Sepolia` -> `uint256` -> `A random number (VRN / RNG)`

### **Step 2**: Request a random number

Call the `request()` function within your deployed contract, with your desired range specified.

The oracle will respond by calling your contract's `fulfill()` function with:
- A request ID (`requestId`)
- Random number(s) within your specified range (`_randomNumber` or `_randomNumbers`)
- The one-way hash of the secret seed used to generate your number(s) (`hash`)

### **Step 3**: Verify the random number(s)

You have two options for verifying your random number(s).

:::tip
You must wait for respective seed's epoch to end (every 6 hours) before you can verify your random number(s). Epochs end at the following times each day:
<br/>
<ul>
<li><b>00:00:00 UTC</b></li>
<li><b>06:00:00 UTC</b></li>
<li><b>12:00:00 UTC</b></li>
<li><b>18:00:00 UTC</b></li>
</ul>
:::

#### Option 1 (off-chain): Using our website

1. Call the `getHash(requestId)` function, passing in the requestId in question

2. Visit our seed verification page, entering your chain ID and hash as URL parameters:
   ```
   https://linkwellnodes.io/VRN-Seed.html?chain=ENTER_CHAIN_ID_HERE&hash=ENTER_HASH_HERE
   ```
   - `chain`: The chain ID for your respective blockchain network can be found at [chainlist.org](https://chainlist.org/)
   - `hash`: The hash obtained from the `getHash(requestId)` call within your contract

3. If the seed is available, it will be shown on the page

4. Call `verifyResult(requestId, seed)` with the requestId and the retrieved seed
   - A return value of `true` confirms that the randomness was verified on-chain

#### Option 2 (on-chain): Using an oracle request

1. Ensure your contract has sufficient LINK token balance

2. Call `requestSeedFromOracle(requestId)` with your requestId
   - This will send LINK to our oracle as payment for this transaction
   - The required amount of LINK has been pre-specified within this function, and cannot be changed

3. Wait several blocks for our oracle to call `fulfillSeedFromOracle()`
   - If the seed is available, this will write the seed to your contract's storage

4. Call `verifyResult(requestId)`
   - A return value of `true` confirms that the randomness was verified on-chain

:::info
The logic used for verifying a given random number is as follows:
```solidity
randomNumber = uint256(keccak256(abi.encodePacked(
    seed,           // Secret seed for the related epoch
    address(this),  // Your contract address (prevents cross-contract replay attacks)
    requestId,      // Unique request ID (prevents replay attacks within your contract)
    index           // The 0-indexed index of the requested number (0 for requests for a single number)
))) % (maxVal - minVal + 1) + minVal;   // The requested lower and upper bounds of the random number(s) (inclusive)
```
:::

## Security

Our VRN service employs multiple security measures:

- Seeds are generated using **cryptographically-secure** hashing algorithms
- Seeds are encrypted and stored on our secure, **[SOC-2 compliant infrastructure](/services/direct-request-jobs/Service-Level-Agreement#data-security)** until their designated reveal time
- Seeds are rotated every **6 hours** to prevent manipulation
- All random number generation follows a **deterministic** and **verifiable** process
- All operations are verifiable on-chain

## Need more help?

Join our [Discord](https://discord.com/invite/Xs6SjqVPUA) server for immediate assistance!