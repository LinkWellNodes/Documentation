---
description: A list of frequently-asked questions about LinkWell Nodes' services and offerings.
---

import TOCInline from '@theme/TOCInline';

# LinkWell Nodes FAQ

The following is a list of frequently-asked questions and answers related to LinkWell Nodes's diverse service offering.

---

**On this page**:

<TOCInline
  toc={toc.filter((node) => node.level >= 2)}
  minHeadingLevel={1}
  maxHeadingLevel={4}
/>

---

## General Services

### What services does LinkWell Nodes offer?

LinkWell Nodes provides a comprehensive suite of Web3 services, including:

- Chainlink oracle services and data feeds
- Direct Request Jobs for on-demand data retrieval
- Verifiable Random Number (VRN) services
- Smart contract development and integration
- External adapter development and hosting
- Infrastructure design and monitoring
- Premium support services
- Advisory services for Web3 projects

:::tip
### Looking for a Chainlink oracle? 

LinkWell Nodes offers professional Chainlink oracle services on all major EVM-based mainnet and testnet blockchains. To view a directory of our oracle addresses and job IDs, please feel free to view our [Chainlink data feeds documentation](/services/direct-request-jobs/Jobs-and-Pricing).
:::

### How can I get started with LinkWell Nodes' services?

You can get started by:
1. Visiting our [mainnet](/services/direct-request-jobs/mainnets) or [testnet](/services/direct-request-jobs/testnets) data feed documentation pages
1. Filling out our [data feed request form](https://linkwellnodes.io/Getting-Started.html) for custom requirements
1. Joining our [Discord server](https://discord.gg/Xs6SjqVPUA)
1. Booking a consultation through our [Calendly](https://calendly.com/linkwell-nodes)

## Blockchain Support

### Which blockchains do you support?

We support a wide range of blockchain networks:

#### Mainnet Networks
- [Arbitrum One](/services/direct-request-jobs/mainnets/Arbitrum-One-Mainnet-Jobs)
- [Avalanche C-Chain](/services/direct-request-jobs/mainnets/Avalanche-CChain-Mainnet-Jobs)
- [Base](/services/direct-request-jobs/mainnets/Base-Mainnet-Jobs)
- [Binance Chain](/services/direct-request-jobs/mainnets/Binance-Mainnet-Jobs)
- [Celo](/services/direct-request-jobs/mainnets/Celo-Mainnet-Jobs)
- [Ethereum](/services/direct-request-jobs/mainnets/Ethereum-Mainnet-Jobs)
- [Fantom](/services/direct-request-jobs/mainnets/Fantom-Mainnet-Jobs)
- [Gnosis Chain](/services/direct-request-jobs/mainnets/Gnosis-Chain-Mainnet-Jobs)
- [Linea](/services/direct-request-jobs/mainnets/Linea-Mainnet-Jobs)
- [Optimism](/services/direct-request-jobs/mainnets/Optimism-Mainnet-Jobs)
- [Polygon](/services/direct-request-jobs/mainnets/Polygon-Mainnet-Jobs)
- [Polygon zkEVM](/services/direct-request-jobs/mainnets/Polygon-zkEVM-Mainnet-Jobs)
- [Scroll](/services/direct-request-jobs/mainnets/Scroll-Mainnet-Jobs)
- [zkSync Era](/services/direct-request-jobs/mainnets/zkSync-Era-Mainnet-Jobs)

#### Testnet Networks
- [Arbitrum Sepolia](/services/direct-request-jobs/testnets/Arbitrum-Sepolia-Testnet-Jobs)
- [Avalanche Fuji](/services/direct-request-jobs/testnets/Avalanche-Fuji-Testnet-Jobs)
- [Base Sepolia](/services/direct-request-jobs/testnets/Base-Sepolia-Testnet-Jobs)
- [Binance Testnet](/services/direct-request-jobs/testnets/Binance-Testnet-Jobs)
- [Celo Alfajores](/services/direct-request-jobs/testnets/Celo-Alfajores-Testnet-Jobs)
- [Ethereum Sepolia](/services/direct-request-jobs/testnets/Ethereum-Sepolia-Testnet-Jobs)
- [Fantom Testnet](/services/direct-request-jobs/testnets/Fantom-Testnet-Jobs)
- [Optimism Sepolia](/services/direct-request-jobs/testnets/Optimism-Sepolia-Testnet-Jobs)
- [Polygon Amoy](/services/direct-request-jobs/testnets/Polygon-Amoy-Testnet-Jobs)
- [Scroll Sepolia](/services/direct-request-jobs/testnets/Scroll-Sepolia-Testnet-Jobs)
- [zkSync Sepolia](/services/direct-request-jobs/testnets/zkSync-Sepolia-Testnet-Jobs)
- [Polygon zkEVM Testnet](/services/direct-request-jobs/testnets/Polygon-zkEVM-Testnet-Jobs)

For specific chain support and pricing, please visit our [mainnet](/services/direct-request-jobs/mainnets) or [testnet](/services/direct-request-jobs/testnets) documentation pages.

:::info
All our testnet data feeds are completely free (**0 LINK** fee).
:::

### What types of data can your oracles retrieve?

Our oracles can retrieve and process various types of data:

#### Basic Blockchain Data Types
- `uint256`: Single unsigned integer values
- `uint256[]`: Arrays of unsigned integers
- `int256`: Single signed integer values
- `int256[]`: Arrays of signed integers
- `bool`: Boolean values (true/false)
- `bool[]`: Arrays of boolean values
- `string` / `bytes`: Text data
- `string[]` / `bytes[]`: Arrays of text data

#### Financial Data
- Cryptocurrency prices and market data
- Traditional market data (stocks, forex, commodities)
- DeFi protocol metrics
- Financial indices and indicators

#### Real-World Data
- Weather data
- Sports scores and statistics
- Geospatial data
- IoT sensor data
- Social media metrics

#### Custom Data
- API integrations
- Web scraping
- Database queries
- Custom computations
- Cross-chain data
- Verifiable Random Numbers (VRN)

:::tip
### Looking for a Chainlink oracle? 

LinkWell Nodes offers professional Chainlink oracle services on all major EVM-based mainnet and testnet blockchains. To view a directory of our oracle addresses and job IDs, please feel free to view our [Chainlink data feeds documentation](/services/direct-request-jobs/Jobs-and-Pricing).
:::

### How do you ensure data accuracy?

We maintain data accuracy through:
- Multiple data source verification
- Real-time data validation
- Automated error detection
- Fallback mechanisms
- Regular data source audits
- Custom data aggregation methods
- JSON path filtering for precise data extraction
- Gas limit monitoring to prevent failed transactions

### Can you handle custom data requirements?

Yes, we can:
- Develop custom external adapters for specific data needs
- Integrate with private APIs and data sources
- Create custom data processing pipelines
- Implement specific data validation rules
- Set up custom data update frequencies
- Handle complex data transformations
- Store sensitive information (like API keys) off-chain on our secure infrastructure
- Provide custom job IDs tailored to your specific requirements within 24 hours

## Price Feed Jobs

### What are Price Feed Jobs?

Price Feed Jobs are automated data delivery services that:
- Update your contract's data automatically without manual triggering
- Run at configurable time intervals (e.g., every 1 hour)
- Can trigger on value deviation thresholds (e.g., 1% price change)
- Support various data types and sources
- Require no gas fees from your contract for updates

:::tip
### Looking for a custom price feed?

We can update any of your contract's data at a set frequency, and/or deviation-based trigger condition. Fill out our [request survey](https://linkwellnodes.io/Getting-Started.html) to get this set up - we'll typically deliver your new feed to you in 24 hours or less!
:::

### What types of data can Price Feeds deliver?

Our Price Feeds can deliver any type of data that can be regularly monitored:
- Cryptocurrency prices and trading volumes
- Traditional market data (stocks, commodities, forex)
- Sports scores and statistics
- Weather data and forecasts
- Custom API data feeds
- Cross-chain data
- DeFi protocol metrics

### How quickly can you set up a custom Price Feed?

We can typically deliver new Price Feeds within 24 hours, which includes:
- Custom external adapter development
- Feed deployment and testing
- Integration support
- Monitoring setup

To get started, simply fill out our [price feed request form](https://linkwellnodes.io/Getting-Started.html).

### How reliable are your Price Feeds?

Our Price Feeds are built for maximum reliability:
- Triple+ redundant infrastructure
- Automated failover systems
- Real-time monitoring
- Multiple data source verification
- Deviation checks for data accuracy
- 24/7 operational monitoring
- Automated alerting systems

### What are the costs for Price Feeds?

Price Feed costs depend on several factors:
- Update frequency requirements
- Data source complexity
- Infrastructure requirements
- Monitoring needs
- Support level required

For detailed pricing information, please visit our [pricing page](/pricing) or fill out our [price feed request form](https://linkwellnodes.io/Getting-Started.html) for a custom quote.

## Direct Request Jobs

### What are Direct Request Jobs?

Direct Request Jobs are on-demand oracle services that:
- Initiate HTTP requests (`GET`, `POST`, `PUT`, `DELETE`) to any internet endpoint
- Parse JSON responses using JSON Path filtering
- Return the processed data to your smart contract
- Support various data types (uint256, int256, bool, string, etc.)
- Allow for custom data processing and transformation

### How do I implement a Direct Request Job in my smart contract?

To implement a Direct Request Job:
1. Add the constructor with the oracle address and job ID
1. Create a request function with the required parameters (method, URL, headers, body, path, contact)
1. Implement a callback function to receive and process the response
1. Fund your contract with sufficient LINK tokens for payment

For detailed implementation examples, please visit our [mainnet](/services/direct-request-jobs/mainnets) or [testnet](/services/direct-request-jobs/testnets) documentation pages.

### What are the gas limits for Direct Request Jobs?

Our Direct Request Jobs have a configured gas limit of **1,000,000** for writing results on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, you may need to:
- Return a smaller response
- Split your request into multiple oracle transactions
- Contact us to request a higher gas allowance for your specific use case

### How do I handle sensitive information in my requests?

:::danger 
Data entered into a smart contract is visible to the general public.
:::

If you need to send sensitive information (like API keys) with your HTTP request:
1. Fill out our [data feed request form](https://linkwellnodes.io/Getting-Started.html)
1. Specify in the notes that you'd like us to store your API key
1. We'll store your keys on our private, secure, SOC-2 compliant infrastructure using `256-bit` encryption, and provide you with a custom job ID that will trigger your API request safely and securely without your API keys ever touching the blockchain

## Verifiable Random Numbers (VRN)

### What are Verifiable Random Numbers (VRN)?

Verifiable Random Numbers are cryptographically secure random values that can be verified on-chain. Our VRN service:
- Generates truly random numbers using secure entropy sources
- Provides verification mechanisms to ensure randomness
- Supports both single random numbers and arrays of random numbers
- Offers both off-chain and on-chain verification options

### How do I verify a random number?

You have two options for verification:

**Option 1 (off-chain)**:
1. Call `getHash(requestId)` within your contract
1. Visit our verification page with your chain ID and hash
1. If the seed is available, it will be shown on the page
1. Call `verifyResult(requestId, seed)` with the requestId and retrieved seed

**Option 2 (on-chain)**:
1. Ensure your contract has sufficient LINK token balance
1. Call `requestSeedFromOracle(requestId)` with your requestId
1. Wait several blocks for our oracle to call `fulfillSeedFromOracle()`
1. Call `verifyResult(requestId)` to confirm verification

For more information, please visit our [Verifiable Random Numbers (VRN) guide](/knowledgebase/Verifiable-Random-Numbers-Guide#step-3-verify-the-random-numbers).

:::tip
### Looking to request verifiable random numbers (VRNs)? 

Visit our [data feed documentation](https://docs.linkwellnodes.io/services/direct-request-jobs/mainnets), and select your desired network (ie, "Arbitrum mainnet") and data type (ie, "Verifiable random numbers (VRN / RNG)").
:::

## Pricing and Costs

### What are your service fees?

We offer transparent and competitive pricing for all our services. For detailed pricing information, please visit our [pricing page](/pricing).

### How do gas fees work?

Gas fees are required for writing oracle updates on-chain and vary based on:
- The blockchain network used
- Smart contract design
- Gas token price
- Request volume
- Response size and complexity

For specific gas fee requirements and minimum deposits, please visit our [pricing page](/pricing).

### Do you offer any free services?

Yes, we offer several free services for mainnet customers:
- Basic assistance with implementation
- Basic smart contract development for integrating with our oracle infrastructure
- Basic external adapter development and hosting
- Free hosting of external adapters on our redundant infrastructure
- All testnet data feeds (0 LINK fee)

For a complete list of free services and premium features, please visit our [pricing page](/pricing).

## Technical Support

### What kind of support do you offer?

We offer multiple support tiers:
1. Basic Support (Free for mainnet customers)
1. Premium Support with dedicated channels
1. Advisory Services

For detailed information about our support tiers and pricing, please visit our [Development Services page](/services/Development-Services#customer-support).

### What is included in your premium support?

Premium support includes:
- Dedicated on-call support channel with 8-hour response SLA
- 24/7 monitoring of your data feed
- External adapter development support
- Smart contract implementation support
- One 30-minute meeting per month
- Faster response to custom job requests

For complete details about our premium support offerings, please visit our [Development Services page](/services/Development-Services#premium-support).

## Development Services

### What development services do you offer?

Our development services include:
- Smart contract development
- External adapter development and hosting
- AWS infrastructure design
- Monitoring infrastructure setup
- Chainlink node troubleshooting
- Direct Request (Any API) implementation
- Custom data processing pipelines
- Secure API key storage and management

To get started with any of the above services, please visit our [Development Services page](/services/Development-Services).

### How long does it take to develop an external adapter?

For mainnet customers:
- Basic external adapters: 1-2 business days (free)
- Advanced customization available
- Custom job IDs: 24 hours or less

For testnet customers:
- Custom development timelines available

For specific pricing and timelines, please visit our [pricing page](/pricing).

## Infrastructure and Security

### What makes your infrastructure reliable?

Our infrastructure features:
- Triple+ redundant systems
- Highly secure environment
- Zero-downtime architecture
- 24/7 monitoring
- Enterprise-grade security measures
- Secure storage for sensitive information

### Do you offer infrastructure monitoring?

Yes, we provide comprehensive monitoring through:
- AWS CloudWatch
- Splunk
- Custom monitoring solutions
- 24/7 alerting system
- Gas limit monitoring for failed transactions

## Payment and Billing

### What payment methods do you accept?

We accept various payment methods:
- Cryptocurrency (ETH, USDC, USDT, POL, BNB, BTC, LINK, etc.)
- Fiat currency (USD)
- Other payment methods can be discussed

### How often do you bill for services?

- Base fees are billed monthly
- Gas fees are paid upfront with a minimum deposit
- Development services are billed hourly
- Support services are billed based on the selected plan

## Additional Questions

### What if I need custom services not listed?

We're flexible and can accommodate your custom requirements. Please contact us through one of the following means:

1. Fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) for custom job IDs
1. Join our [Discord server](https://discord.gg/Xs6SjqVPUA)
1. Book a consultation through [Calendly](https://calendly.com/linkwell-nodes)
1. Contact us through our [website](https://linkwellnodes.io/#contact-us)

### How can I stay updated with your services?

You can stay updated by:

- Joining our [Discord server](https://discord.gg/Xs6SjqVPUA)
- Visiting our [website](https://linkwellnodes.io)
- Following us on [Twitter (X)](https://x.com/LinkWell_Nodes)