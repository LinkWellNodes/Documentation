# External Adapters

### Should I use external adapters, or Functions?
Functions are better than EAs in many ways - namely, enabling you to maintain your own deployment lifecycle (no contact with node operators), while being able to run your job against a distributed network of many oracles for a low fee. There are however, some use cases where EAs could still make sense (ie, if you're using a network not yet supported on functions, already have an EA developed and don't want to re-write using JS, if you need a mainnet job ASAP, etc.).

### I have built out an external adapter for my smart contract. Do I need to host my own Chainlink node in order to use it??
The short answer - no, although you can if you really want to. There are a couple different methods to accomplish this. You can host it yourself via GCP, AWS or as a long living process on docker, if you prefer.  Ideally, however, you can reach out in the ⁠Chainlink Discord ✅︲operator-requests channel for support from a node operator who already has infrastructure/processes in place to host it for you, and can set up the corresponding jobs needed for your application.  The benefits of this are many, but primarily for increasing decentralization, and also saving the time and effort of having to deploy and manage your own infrastructure

### Do I have to host the adapter on any server like GCP/AWS? Or do Chainlink node operators do this for me?
You can host an adapter via serverless functions/methods in GCP/AWS, but its better to run via docker. See the [Github docs](https://github.com/smartcontractkit/external-adapters-js) for more information.

### Are there multiple Chainlink nodes that will run my external adapters, or just a single node? And how are external adapters decentralized?
This depends on your app's requirements around decentralization and trust-minimization. You can have one node operator host your adapter and return data to your application, but that isn't entirely decentralized or trust-minimized.  This (decentralization and trust-minimization) is a huge benefit of [Chainlink Functions](https://docs.chain.link/chainlink-functions).

### What is the process to get the data from the Chainlink nodes into my contract, when multiple node operators are handling my adapter?
There are several ways to accomplish this.  Outside of [Chainlink Functions](https://docs.chain.link/chainlink-functions), you can in theory connect with multiple Chainlink node operations teams to host your adapter, and then do some sort of aggregation of that data whether that is in your smart contract from data returned from multiple Chainlink nodes, or via a DON that can run flux monitor or off-chain reporting (OCR) job types.  Check out the job types [here](https://docs.chain.link/chainlink-nodes/oracle-jobs/all-jobs#off-chain-reporting-jobs). 

### Can I use a single data source or Chailink node for my smart contract?
While this is fine for testing for your testnet applications, it is not recommended for production.  To use an example for pulling weather data - even if a decentralized network of oracles were to pull from that public weather API, you'd have a single, centralized point of failure (the API endpoint). If you had a few different sources for the weather API (AccuWeather, NOAA, Weather.com, etc.), and the oracle network were to pull from these disparate APIs, you would be on the path towards a more decentralized data feed.

### I'm looking for a specific price feed for my contract, how do I find it?
Price feed contract addresses for price pairs across the various Chainlink supported mainnets and testnets can be found [here](https://docs.chain.link/data-feeds/price-feeds/addresses).  If you can't find the price feed that you need for your application, then you can request support via the Chainlink Discord #operator-requests channel, or you can reach out to us here! We are happy to provide support as needed!

### How can I find a node operator to host my adapter or my job?
As a community based Chainlink node operations team, we are happy to provide assistance to you or your application!  We already run production grade Chainlink node infrastructure and can provide support for hosting your adapter (or in some cases helping you build it), setting up jobs, or providing custom deployment models via decentralized oracle networks (DONs) if you require maximum levels of trust-minimization and decentralization for your application.

### Where can I find sports or weather data for my application?
We host several adapters that are able to provide this data.  Please see our jobs / pricing documentation located here.  If there are other data types that you need for your application however, feel free to reach out to us!  Please see our contacts page for additional information.