# Retrieving AccuWeather data using Chainlink

## Introduction

AccuWeather provides and supports many different weather APIs that provide up-to-date and highly accurate temperature, precipitation, and other forecasts for locations around the globe. With AccuWeather's utility APIs, users can retrieve unique geographical identifiers for various locations that may then be used in requesting their corresponding weather information. 

AccuWeather offers several different APIs within their [documentation](https://developer.accuweather.com/apis). Among others, these include:

- [Locations API](https://developer.accuweather.com/accuweather-locations-api/apis) - allows you to retrieve a location key that can be used to retrieve current or forecasted data for a specific latitude and longitude (using the Forecast or Current Conditions API). 

- [Forecast API](https://developer.accuweather.com/accuweather-forecast-api/apis) - allows you to retrieve the weather forecast for a specific location.

- [Current Conditions API](https://developer.accuweather.com/accuweather-current-conditions-api/apis) - allows you to retrieve the current weather conditions for a specific location.

- [MinuteCast API](https://developer.accuweather.com/minutecast-api/apis) - allows you to retrieve a 120-minute precipitation forecast given a latitude and longitude coordinate.

The following guide illustrates an easy example of how to retrieve a `uint256` value from AccuWeather's **Current Conditions API**, and write it to your blockchain smart contract or Web3 application using our highly-resilient Chainlink oracle infrastructure.

## Real-world example (retrieve current temperature from AccuWeather API to your smart contract application)

Accessing AccuWeather data from within your blockchain contract or Web3 application is as simple as:

1. Creating an AccuWeather API key through the AccuWeather website.
1. Determining the **location key** for your target latitude / longitude.
1. Deploying the following Chainlink consumer contract onto the ERC-20 blockchain network of your choice. 

Below we'll walk you through the steps necessary to implement this solution.

### 1. Create an AccuWeather API key

In order to retrieve data from the AccuWeather API, you'll need an API key. 

You may request a free API key from AccuWeather here: [AccuWeather Developer Portal](https://developer.accuweather.com/). Once you're signed up, you'll need to navigate to your 'My Apps' dashboard, and create a new app. After creating it, you'll be able to view your API key from within your 'My Apps' dashboard.

### 2. Determine the location key for your target coordinate

Before making a request to the **Current Conditions API** or **Forecast API**, you'll need to determine the corresponding `locationKey` for your target location.

To do so, you'll need to make a request to the [geoposition endpoint](https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/geoposition/search) within AccuWeather's Locations API.

Follow the steps below for instructions on how to request your `locationKey`:

#### 2a: Request the location key from AccuWeather's geoposition endpoint:

The following curl command simulates an HTTP request against the [geoposition endpoint](https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/geoposition/search) (for the purposes of this example, we'll be using a latitude of `38.569723`, and a longitude of `-103.229807`:
```
curl -k 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey={your key}&q=38.569723,-103.229807' \
 --request 'GET'
```

#### 2b: Find the location key within the result:

The following JSON (abbreviated for clarity) represents an excerpt from the response. The location key is the value of the "key" attribute below:

```
{
   "Version":1,
   "Key":"332243",
   "Type":"City",
   "Rank":85,
   "LocalizedName":"Haswell",
   "EnglishName":"Haswell",
   "PrimaryPostalCode":"81045",
   ...
}
```

Save this location key. You'll be using this in the next step when making your AccuWeather conditions request from within your smart contract.

:::info
If the `locationKey` is not known at the time of your oracle request, you have two options:
1. Make two separate oracle requests from within your smart contract: the first one to the Location API for the `locationKey`, and a second one to the weather API of your choice, once the `locationKey` has been obtained.
1. Ask the Chainlink oracle team of your choice to implement both requests on their end, so that you may bundle your logic into a single oracle request. This will save on gas costs, but typically require the node operator team to design an external adapter (at LinkWell Nodes, we are willing to do this!). 
:::


### 3. Design your consumer contract

Add the following sample code to your **consumer contract**.

#### 3a. Add the constructor:

The constructor specifies important information about the request destination and payment for your request. **Important**: This information varies by chain, oracle, and job: 

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/examples/weather-data/AccuWeather.sol#L23-L32
```

:::tip 
You'll need to replace `ADD_CHAINLINK_TOKEN_ADDRESS_HERE`, `ADD_ORACLE_ADDRESS_HERE`, and `ADD_JOB_ID_HERE` with the values appropriate to the specific blockchain network and job that you'll be using. You can find these values within our [Direct Request Job Documentation](/services/direct-request-jobs/Jobs-and-Pricing). Chainlink token addresses can be found [here](https://docs.chain.link/resources/link-token-contracts).
:::

#### 3b. Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information on each required parameter, reference the above '**Request parameters**' section:

:::info
In the following request, we will enter the `locationKey` determined in the above steps into the AccuWeather request URL.
:::

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/examples/weather-data/AccuWeather.sol#L34-L55
```

#### 3c. Retrieve the response (example):

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/examples/weather-data/AccuWeather.sol#L57-L65
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
curl -k 'http://dataservice.accuweather.com/currentconditions/v1/{location_key}?apikey={your key}' \
 --request 'GET' \
```

#### 2. **Analyze the response**:

The following is a sample response body returned to our Chainlink node by the above HTTP request (abbreviated for clarity):

```
[
   {
      "LocalObservationDateTime":"2024-01-25T20:28:00-07:00",
      "EpochTime":1706239680,
      "WeatherText":"Cloudy",
      "WeatherIcon":7,
      "HasPrecipitation":false,
      "PrecipitationType":null,
      "IsDayTime":false,
      "Temperature":{
         "Metric":{
            "Value":1.5,
            "Unit":"C",
            "UnitType":17
         },
         "Imperial":{
            "Value":35.0,
            "Unit":"F",
            "UnitType":18
         }
      },
      "MobileLink":"http://www.accuweather.com/en/us/haswell-co/81045/current-weather/332243?lang=en-us",
      "Link":"http://www.accuweather.com/en/us/haswell-co/81045/current-weather/332243?lang=en-us"
   }
]
```

#### 3. **Apply the JSON path**:

After receiving the above sample response, our Chainlink node will attempt to filter the result by the provided `path` parameter value (`0,Temperature,Imperial,Value`). After applying the provided path, we get the following result:

```
35.0
```

#### 4. **Apply the multiplier**:

After filtering the sample response by the provided JSON path, our Chainlink node will multiply the result by the provided `multiplier` parameter value (`10 ** 18`). After applying this multiplier, we get the following value, which is ultimately written to your smart contract as a `uint256` object by our Chainlink oracle:

```
35000000000000000000
```

## Troubleshooting

Having trouble with your request? Check out our [Direct Request FAQ](/knowledgebase/faq/Chainlink-Users#direct-request-jobs).

:::caution 
This job has a configured gas limit of **500,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, use the appropriate block explorer to navigate to the '**Oracle Address**' you entered into your consumer contract for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). 
:::

## Still need more help?

Please reach out to us in [Discord](https://discord.gg/Xs6SjqVPUA) if you require additional assistance with this request.
