# Retrieving Alpha Vantage Stock Price data using Chainlink

## Introduction

Alpha Vantage is a renowned platform that offers an extensive collection of APIs tailored to stock market data, financial indicators, and more. The Alpha Vantage API provides users with real-time and historical stock price data, foreign exchange rates, cryptocurrency prices, and technical indicators. It caters to individual traders, financial professionals, and developers seeking to integrate financial data into their applications. With its rich dataset and easy-to-use interface, Alpha Vantage has become an essential tool for those who require accurate and timely financial information for decision-making, analysis, or application development.

The following guide illustrates an easy example of how to retrieve a `uint256` value from the Alpha Vantage API into your blockchain smart contract, using our highly-resilient Chainlink node infrastructure as an oracle for your data needs.

## Real-world example

Accessing Alpha Vantage data from within your blockchain contract or Web3 application is as simple as:

1. Creating an Alpha Vantage API key through the Alpha Vantage website.
1. Deploying the following Chainlink consumer contract onto the ERC-20 blockchain network of your choice. 

Below we'll walk you through the steps necessary to implement such a solution.

### 1. Create a Alpha Vantage API key

In order to retrieve data from the Alpha Vantage API, you'll need an API key. 

You may request an API key from Alpha Vantage [here](https://www.alphavantage.co/support/#api-key).

### 2. Design your consumer contract

Add the following sample code to your **consumer contract**.

#### 2a. Add the constructor:

The constructor specifies important information about the request destination and payment for your request. **Important**: This information varies by chain, oracle, and job: 

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/examples/stock-price-data/Alpha-Vantage.sol#L23-L32
```

:::info 
You'll need to replace `ADD_CHAINLINK_TOKEN_ADDRESS_HERE`, `ADD_ORACLE_ADDRESS_HERE`, and `ADD_JOB_ID_HERE` with the values appropriate to the specific blockchain network and job that you'll be using. You can find these values within our [Direct Request Job Documentation](/services/direct-request-jobs/Jobs-and-Pricing). Chainlink token addresses can be found [here](https://docs.chain.link/resources/link-token-contracts).
:::

#### 2b. Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information on each required parameter, reference the above '**Request parameters**' section:

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/examples/stock-price-data/Alpha-Vantage.sol#L34-L55
```

#### 2c. Retrieve the response (example):

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/examples/stock-price-data/Alpha-Vantage.sol#L57-L65
```

### Need to protect your API key?

:::danger 
Data entered into a smart contract is visible to the general public.
:::

If you'd like to protect your API key from being broadcast on-chain, you can instead store this information off-chain on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started - once we receive your information, we'll provide you with a custom job ID that will send your API key safely along with your request.

## Simulating the above request

Let's walk through each step of the above **sample request**, to better understand how it all works together:

#### 1. **Send the HTTP request**:

The following `curl` command simulates the same HTTP request that our Chainlink node makes shortly after you trigger the `request()` function within your consumer contract:

```
curl -k 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey={your_key}' \
 --request 'GET' \
 --header 'content-type: application/json' 
```

#### 2. **Analyze the response**:

The following is a sample response body returned to our Chainlink node by the above HTTP request (abbreviated for clarity):

```
{
    "Global Quote": {
        "01. symbol": "IBM",
        "02. open": "141.4200",
        "03. high": "142.3900",
        "04. low": "141.1100",
        "05. price": "142.2800",
        "06. volume": "2937781",
        "07. latest trading day": "2023-08-21",
        "08. previous close": "141.4100",
        "09. change": "0.8700",
        "10. change percent": "0.6152%"
    }
}
```

#### 3. **Apply the JSON path**:

After receiving the above sample response, our Chainlink node will attempt to filter the result by the provided `path` parameter value (`Global Quote,05. price`). After applying the provided path, we get the following result:

```
142.2800
```

#### 4. **Apply the multiplier**:

After filtering the sample response by the provided JSON path, our Chainlink node will multiply the result by the provided `multiplier` parameter value (`10 ** 18`). After applying this multiplier, we get the following value, which is ultimately written to your smart contract as a `uint256` object by our Chainlink oracle:

```
142280000000000000000
```

## Troubleshooting

Having trouble with your request? Check out our [Direct Request Troubleshooting Guide](/knowledgebase/Chainlink-Users-FAQ#direct-request-job-troubleshooting).

:::caution 
This job has a configured gas limit of **500,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the above '**Oracle Address**' for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). 
:::

## Still need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance with this request.
