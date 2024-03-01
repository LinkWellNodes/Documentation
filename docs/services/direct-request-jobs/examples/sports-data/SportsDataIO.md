# Retrieving SportsDataIO sports data using Chainlink

## Introduction

SportsDataIO is a leading provider of sports data and sports betting services, offering accurate, timely, and comprehensive sports statistics and information to a wide range of clients. Through their API, developers can access a vast array of data across various sports, including the NFL, NBA, MLB, NHL, and more. This data encompasses live scores, player statistics, team information, and historical data, among other aspects of sports analytics. By catering to the needs of sports enthusiasts, fantasy sports platforms, and professional analytics teams, SportsDataIO has established itself as an invaluable resource in the sports tech industry.

The following guide illustrates an easy example of how to retrieve a `uint256` value from the SportsDataIO API, and write it to your blockchain smart contract using our highly-resilient Chainlink oracle infrastructure.

## Writing sports / betting data from SportsDataIO to your blockchain smart contract

Accessing SportsDataIO data from within your blockchain contract or Web3 application is as simple as:

1. Creating an SportsDataIO API key through the SportsDataIO website.
1. Deploying the following Chainlink consumer contract onto the ERC-20 blockchain network of your choice. 

Below we'll walk you through the steps necessary to implement such a solution.

### 1. Create a SportsDataIO API key

In order to retrieve data from the SportsDataIO API, you'll need an API key. 

You may request a free API key from SportsDataIO here: [SportsDataIO Developer Portal](https://sportsdata.io/cart/free-trial)

### 2. Design your consumer contract

Add the following sample code to your **consumer contract**.

#### 2a. Add the constructor:

The constructor specifies important information about the request destination and payment for your request. **Important**: This information varies by chain, oracle, and job: 

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/examples/sports-data/SportsDataIO.sol#L23-L32
```

:::info 
You'll need to replace `ADD_CHAINLINK_TOKEN_ADDRESS_HERE`, `ADD_ORACLE_ADDRESS_HERE`, and `ADD_JOB_ID_HERE` with the values appropriate to the specific blockchain network and job that you'll be using. You can find these values within our [Direct Request Job Documentation](/services/direct-request-jobs/Jobs-and-Pricing). Chainlink token addresses can be found [here](https://docs.chain.link/resources/link-token-contracts).
:::

#### 2b. Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information on each required parameter, reference the above '**Request parameters**' section:

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/examples/sports-data/SportsDataIO.sol#L34-L55
```

#### 2c. Retrieve the response (example):

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/examples/sports-data/SportsDataIO.sol#L57-L65
```

### Need to protect your API key?

:::danger 
Data entered into a smart contract is visible to the general public.
:::

If you'd like to protect your API key from being broadcast on-chain, you can instead store this information off-chain on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started - once we receive your information, we'll provide you with a custom job ID that will send your API key safely along with your request.

## Simulating the above request logic

Let's walk through each step of the above **sample request**, to better understand how it all works together:

#### 1. **Send the HTTP request**:

The following `curl` command simulates the same HTTP request that our Chainlink node makes shortly after you trigger the `request()` function within your consumer contract:

```
curl -k 'https://api.sportsdata.io/v3/mma/scores/json/Fighter/140000098?key={your key}' 
```

#### 2. **Analyze the response**:

The following is a sample response body returned to our Chainlink node by the above HTTP request (abbreviated for clarity):

```
{
  "FighterId": 140000098,
  "FirstName": "Francis",
  "LastName": "Ngannou",
  "Nickname": "The Predator",
  "WeightClass": "Scrambled",
  "BirthDate": "1986-09-05T00:00:00",
  "Height": 80.8,
  "Weight": 273.2,
  "Reach": 88.2,
  "Wins": 18,
  "Losses": 3,
  "Draws": 0,
  "NoContests": 0,
  "TechnicalKnockouts": 13,
  "TechnicalKnockoutLosses": 0,
  "Submissions": 5,
  "SubmissionLosses": 0,
  "TitleWins": 2,
  "TitleLosses": 1,
  "TitleDraws": 0,
  "CareerStats": {
    "FighterId": 140000098,
    "FirstName": "Francis",
    "LastName": "Ngannou",
    "SigStrikesLandedPerMinute": 2.6,
    "SigStrikeAccuracy": 43.9,
    "TakedownAverage": 0.9,
    "SubmissionAverage": 0.4,
    "KnockoutPercentage": 47.8,
    "TechnicalKnockoutPercentage": 47.8,
    "DecisionPercentage": 5.6
  }
}
```

#### 3. **Apply the JSON path**:

After receiving the above sample response, our Chainlink node will attempt to filter the result by the provided `path` parameter value (`Wins`). After applying the provided path, we get the following result:

```
18
```

#### 4. **Apply the multiplier**:

After filtering the sample response by the provided JSON path, our Chainlink node will multiply the result by the provided `multiplier` parameter value (`10 ** 18`). After applying this multiplier, we get the following value, which is ultimately written to your smart contract as a `uint256` object by our Chainlink oracle:

```
18000000000000000000
```

## Troubleshooting

Having trouble with your request? Check our [Custom Data Feeds FAQ](/knowledgebase/faq/Chainlink-Users#custom-data-feeds).

:::caution 
This job has a configured gas limit of **500,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, use the appropriate block explorer to navigate to the '**Oracle Address**' you entered into your consumer contract for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). 
:::

## Still need more help?

Please reach out to us in [Discord](https://discord.gg/Xs6SjqVPUA) if you require additional assistance with this request.