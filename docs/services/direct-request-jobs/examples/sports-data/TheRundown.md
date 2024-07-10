---
title: Retrieving TheRundown sports data using Chainlink
description: Code examples for writing TheRundown (sports betting) data to your smart contract using a Chainlink oracle request (custom data feed). 
---

# Retrieving TheRundown sports data using Chainlink

## Introduction

TheRundown is the leading platform for real-time odds, scores, betting data, stats, and unrivaled insights into the sports betting marketplace. Through their API, developers can access a vast array of data across various sports, including **football (NFL)**, **basketball (NBA)**, **baseball (MLB)**, **hockey (NHL)**, **cricket (IPL)**, **fighting (UFC)**, **soccer (MLS)**, and more. This data encompasses live scores, real-time odds, player statistics, team information, and historical data, among other aspects of sports analytics. By catering to the needs of sports enthusiasts, fantasy sports platforms, and professional analytics teams, TheRundown has established itself as an invaluable resource in the sports tech industry.

The following guide illustrates an easy example of how to retrieve a `uint256[]` (unsigned 256-bit integer array) value from TheRundown API, and write it to your blockchain smart contract using our highly-resilient Chainlink oracle infrastructure.

## Writing sports / betting data from TheRundown to your blockchain smart contract

Accessing TheRundown data from within your blockchain contract or Web3 application is as simple as:

1. Purchasing an API key for the TheRundown through the [RapidAPI website](https://rapidapi.com/therundown/api/therundown/pricing).
1. Deploying the following Chainlink consumer contract onto the ERC-20 blockchain network of your choice. 

Below we'll walk you through the steps necessary to implement such a solution.

### 1. Create a TheRundown API key

In order to retrieve data from the TheRundown API, you'll need to purchase an API key from RapidAPI. 

You may request a API key for accessing TheRundown data here on through the [RapidAPI website](https://rapidapi.com/therundown/api/therundown/pricing).

### 2. Design your consumer contract

Add the following sample code to your **consumer contract**.

#### 2a. Add the constructor:

The constructor specifies important information about the request destination and payment for your request. **Important**: This information varies by chain, oracle, and job: 

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/examples/sports-data/TheRundown.sol#L23-L32
```

:::info 
You'll need to replace `ADD_CHAINLINK_TOKEN_ADDRESS_HERE`, `ADD_ORACLE_ADDRESS_HERE`, and `ADD_JOB_ID_HERE` with the values appropriate to the specific blockchain network and job that you'll be using. You can find these values within our [Direct Request Job Documentation](/services/direct-request-jobs/Jobs-and-Pricing). Chainlink token addresses can be found [here](https://docs.chain.link/resources/link-token-contracts).
:::

#### 2b. Add your request function (example):
The `request()` function defines the request parameters and sends a request to the Chainlink oracle. For detailed information on each required parameter, reference the above '**Request parameters**' section:

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/examples/sports-data/TheRundown.sol#L34-L55
```

#### 2c. Retrieve the response (example):

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/examples/sports-data/TheRundown.sol#L57-L65
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
curl -k -X GET -H "X-RapidAPI-Host: therundown-therundown-v1.p.rapidapi.com" -H "X-RapidAPI-Key: {your_api_key}" "https://therundown-therundown-v1.p.rapidapi.com/events/9a35b8986a76eaaea364be331cb453ec" 
```

#### 2. **Analyze the response**:

The following is a sample response body returned to our Chainlink node by the above HTTP request (abbreviated for clarity):

```
{
   "event_id":"9a35b8986a76eaaea364be331cb453ec",
   "sport_id":2,
   "event_date":"2020-02-02T23:30:00Z",
   "rotation_number_away":101,
   "rotation_number_home":102,
   "score":{
      "event_id":"9a35b8986a76eaaea364be331cb453ec",
      "event_status":"STATUS_FINAL",
      "winner_away":0,
      "winner_home":1,
      "score_away":20,
      "score_home":31,
      "score_away_by_period":[
         3,
         7,
         10,
         0
      ],
      "score_home_by_period":[
         7,
         3,
         0,
         21
      ],
      "venue_name":"Hard Rock Stadium",
      "venue_location":"Miami Gardens, FL",
      "game_clock":0,
      "display_clock":"0.00",
      "game_period":4,
      "broadcast":"FOX",
      "event_status_detail":"Final",
      "updated_at":"2020-02-03T03:13:48Z"
   },
   "teams":[
      {
         "team_id":2928,
         "team_normalized_id":91,
         "name":"San Francisco 49ers",
         "is_away":true,
         "is_home":false
      },
      {
         "team_id":2929,
         "team_normalized_id":74,
         "name":"Kansas City Chiefs",
         "is_away":false,
         "is_home":true
      }
   ],
   "teams_normalized":[
      {
         "team_id":91,
         "name":"San Francisco",
         "mascot":"49ers",
         "abbreviation":"SF",
         "conference_id":34,
         "division_id":14,
         "ranking":0,
         "record":"5-3",
         "is_away":true,
         "is_home":false,
         "conference":{
            "conference_id":34,
            "sport_id":2,
            "name":"National Football Conference"
         },
         "division":{
            "division_id":14,
            "conference_id":34,
            "sport_id":2,
            "name":"NFC West"
         }
      },
      {
         "team_id":74,
         "name":"Kansas City",
         "mascot":"Chiefs",
         "abbreviation":"KC",
         "conference_id":33,
         "division_id":10,
         "ranking":0,
         "record":"7-2",
         "is_away":false,
         "is_home":true,
         "conference":{
            "conference_id":33,
            "sport_id":2,
            "name":"American Football Conference"
         },
         "division":{
            "division_id":10,
            "conference_id":33,
            "sport_id":2,
            "name":"AFC West"
         }
      }
   ],
   "schedule":{
      "league_name":"National Football League",
      "conference_competition":false,
      "season_type":"Postseason",
      "season_year":2019,
      "week":5,
      "week_name":"Super Bowl",
      "week_detail":"Feb 3-9",
      "event_headline":"SUPER BOWL LIV",
      "event_name":"SUPER BOWL LIV - San Francisco at Kansas City - 2020-02-02",
      "attendance":"62417"
   },
   "lines":{
      "3":{
         "line_id":10405033,
         "moneyline":{
            "moneyline_away":0.0001,
            "moneyline_away_delta":0.0001,
            "moneyline_home":0.0001,
            "moneyline_home_delta":0.0001,
            "moneyline_draw":0.0001,
            "moneyline_draw_delta":0.0001,
            "line_id":10405033,
            "event_id":"9a35b8986a76eaaea364be331cb453ec",
            "sport_id":2,
            "affiliate_id":3,
            "date_updated":"2023-11-11T03:25:12Z",
            "format":"American"
         },
         "spread":{
            "point_spread_away":0.0001,
            "point_spread_home":0.0001,
            "point_spread_away_delta":0.0001,
            "point_spread_home_delta":0.0001,
            "point_spread_away_money":0.0001,
            "point_spread_away_money_delta":0.0001,
            "point_spread_home_money":0.0001,
            "point_spread_home_money_delta":0.0001,
            "line_id":10405033,
            "event_id":"9a35b8986a76eaaea364be331cb453ec",
            "sport_id":2,
            "affiliate_id":3,
            "date_updated":"2023-11-11T03:25:12Z",
            "format":"American"
         },
         "total":{
            "total_over":0.0001,
            "total_over_delta":0.0001,
            "total_under":0.0001,
            "total_under_delta":0.0001,
            "total_over_money":0.0001,
            "total_over_money_delta":0.0001,
            "total_under_money":0.0001,
            "total_under_money_delta":0.0001,
            "line_id":10405033,
            "event_id":"9a35b8986a76eaaea364be331cb453ec",
            "sport_id":2,
            "affiliate_id":3,
            "date_updated":"2023-11-11T03:25:12Z",
            "format":"American"
         },
         "affiliate":{
            "affiliate_id":3,
            "affiliate_name":"Pinnacle",
            "affiliate_url":"https://www.pinnacle.com/en/rtn"
         }
      }
   }
}
```

#### 3. **Apply the JSON path**:

After receiving the above sample response, our Chainlink node will attempt to filter the result by the provided complex `path` parameter value (`score,score_away;score,score_home`). After applying the provided path (which consists of two JSON paths), we get the following two results:

```
20, 31
```

#### 4. **Apply the multiplier**:

After filtering the sample response by the provided JSON path, our Chainlink node will multiply each result by the provided `multiplier` parameter value (`1`). After applying this multiplier, we get the following value, which is ultimately written to your smart contract as a `uint256[]` object by our Chainlink oracle:

```
[20, 31]
```

## Troubleshooting

Having trouble with your request? Check our [Chainlink Direct Requests FAQ](/knowledgebase/faq/Chainlink-Users#chainlink-direct-requests).

:::caution 
This job has a configured gas limit of **1,000,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, use the appropriate block explorer to navigate to the '**Oracle Address**' you entered into your consumer contract for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). 
:::

## Still need more help?

Please reach out to us in [Discord](https://discord.gg/Xs6SjqVPUA) if you require additional assistance with this request.