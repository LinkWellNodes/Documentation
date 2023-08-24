# Retrieving CoinGecko data using Chainlink

## Introduction

CoinGecko is a prominent cryptocurrency data platform that offers a comprehensive API for users interested in cryptocurrency market data. The CoinGecko API provides real-time and historical data on cryptocurrency prices, market capitalization, trading volume, and other relevant metrics for a vast number of coins and tokens. Additionally, it offers details about exchanges, DeFi platforms, and other cryptocurrency-related entities. Its user-friendly interface and extensive dataset make it a preferred choice for developers, traders, and analysts who need up-to-date and reliable crypto market information for their projects, investment decisions, or research purposes.

The following guide illustrates an easy example of how to retrieve a `uint256` value from the CoinGecko API into your blockchain smart contract, using our highly-resilient Chainlink node infrastructure as an oracle for your data needs.

## Real-world example

Accessing CoinGecko data from within your blockchain contract or Web3 application is as simple as:

1. Creating an CoinGecko API key through the CoinGecko website.
1. Deploying the following Chainlink consumer contract onto the ERC-20 blockchain network of your choice. 

Below we'll walk you through the steps necessary to implement such a solution.

### 1. Create a CoinGecko API key

With the public CoinGecko API plan, you can simply [start using](https://www.coingecko.com/en/api/documentation) the API right away - No API keys or account are needed. 

CoinGecko's Public API has a rate limit of 10-30 calls/minute. If you need something more powerful, you can subscribe to CoinGecko's paid [API Plans](https://www.coingecko.com/en/api/pricing) to access their Pro API key.

### 2. Design your consumer contract

Add the following sample code to your **consumer contract**.

#### 2a. Add the constructor:

The constructor specifies important information about the request destination and payment for your request (varies by chain, oracle, and job): 

[uint256_constructor](/CoinGecko.sol ':include :type=code :fragment=constructor')`

?> You'll need to replace `ADD_CHAINLINK_TOKEN_ADDRESS_HERE`, `ADD_ORACLE_ADDRESS_HERE`, and `ADD_JOB_ID_HERE` with the values appropriate to the specific blockchain network and job that you'll be using. You can find these values within our [Direct Request Job Documentation](/services/direct-request-jobs/Jobs-and-Pricing).
Chainlink token addresses can be found [here](https://docs.chain.link/resources/link-token-contracts).

#### 2b. Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information on each required parameter, reference the above '**Request parameters**' section:

[uint256_request](/CoinGecko.sol ':include :type=code :fragment=request')

#### 2c. Retrieve the response (example):

[uint256_response](/CoinGecko.sol ':include :type=code :fragment=response')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/examples/coin-price-data/CoinGecko.sol) of the above consumer contract.

### Need to protect your API key?

!> Data entered into a smart contract is visible to the general public.

If you'd like to protect your API key from being broadcast on-chain, you can instead store this information off-chain on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started - once we receive your information, we'll provide you with a custom job ID that will send your API key along with your request.

## Simulating the above request

Let's walk through each step of the above **sample request**, to better understand how it all works together:

#### 1. **Send the HTTP request**:

The following `curl` command simulates the same HTTP request that our Chainlink node makes shortly after you trigger the `request()` function within your consumer contract:

```
curl -X 'GET' 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=chainlink&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en' -H 'accept: application/json'
```

#### 2. **Analyze the response**:

The following is a sample response body returned to our Chainlink node by the above HTTP request (abbreviated for clarity):

```
[
  {
    "id": "chainlink",
    "symbol": "link",
    "name": "Chainlink",
    "image": "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700",
    "current_price": 6.23,
    "market_cap": 3353294063,
    "market_cap_rank": 24,
    "fully_diluted_valuation": 6231730611,
    "total_volume": 241629643,
    "high_24h": 6.27,
    "low_24h": 5.91,
    "price_change_24h": -0.007133646681669603,
    "price_change_percentage_24h": -0.11442,
    "market_cap_change_24h": -2351360.858766079,
    "market_cap_change_percentage_24h": -0.07007,
    "circulating_supply": 538099971.2305644,
    "total_supply": 1000000000,
    "max_supply": 1000000000,
    "ath": 52.7,
    "ath_change_percentage": -88.17427,
    "ath_date": "2021-05-10T00:13:57.214Z",
    "atl": 0.148183,
    "atl_change_percentage": 4105.44005,
    "atl_date": "2017-11-29T00:00:00.000Z",
    "roi": null,
    "last_updated": "2023-08-23T12:50:04.197Z"
  }
]
```

#### 3. **Apply the JSON path**:

After receiving the above sample response, our Chainlink node will attempt to filter the result by the provided `path` parameter value (`0,current_price`). After applying the provided path, we get the following result:

```
6.23
```

#### 4. **Apply the multiplier**:

After filtering the sample response by the provided JSON path, our Chainlink node will multiply the result by the provided `multiplier` parameter value (`10 ** 18`). After applying this multiplier, we get the following value, which is ultimately written to your smart contract as a `uint256` object by our Chainlink oracle:

```
6230000000000000000
```

## Troubleshooting

Having trouble with your request? Check out our [Troubleshooting Guide](/knowledgebase/Chainlink-Users-FAQ?id=direct-request-job-troubleshooting) for direct request jobs.

!> This job has a configured gas limit of **500,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the above '**Oracle Address**' for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). 

## Still need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance with this request.
