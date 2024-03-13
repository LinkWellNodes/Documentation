---
title: Binance (BSC) Testnet Oracle Addresses
description: Connect your smart contract to the internet using our customizable Chainlink oracle data feeds running on the Binance Smart Chain (BSC) testnet network.  
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Binance Testnet Data Feeds

Binance Smart Chain's testnet is a test environment for BNB Smart Chain mainnet network, run by the BNB Chain development community. Testnet BNB is used to pay for transactions on the BNB Chain testnet. Testnet LINK is available at [faucets.chain.link](https://faucets.chain.link/bnb-chain-testnet). Testnet BNB is available at [testnet.bnbchain.org/faucet-smart](https://www.bnbchain.org/en/testnet-faucet).

The below documentation illustrates how to integrate a custom Chainlink data feed for your smart contract or dApp running on the Binance-Testnet network. All testnet data feeds are **free to use**, and do not require you to fund your contracts with the LINK token. If you run into any trouble, head on over to our [Discord server](https://discord.gg/Xs6SjqVPUA) for the fastest assistance, or feel free to contact us [here](https://linkwellnodes.io/#contact-us "Contact LinkWell Nodes").

### Select the type of data that you need:

<Tabs groupId="dataType" queryString>
<TabItem value="Uint256"> 

## Uint256 Retrieval

This job initiates an HTTP `GET`, `POST`, `PUT`, or `DELETE` request to the internet, optionally parses a JSON-based response body for a numeric value at the given path, multiplies this value by the given multiplier, and returns the resulting 256-bit unsigned integer (**uint256**) to your smart contract.

:::info 
This job writes a single **uint256** object to your contract, which can store any integer from `0` to `115792089237316195423570985008687907853269984665640564039457584007913129639935` (`(2 ^ 256) - 1`). 
:::

### Request metadata

| Oracle Address                             | Job ID                           | Request Fee              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://testnet.bscscan.com/address/0xd08FEb8203E76f836D74608595346ab6b0f768C9) | a8356f48569c434eaa4ac5fcb4db5cc0 | 0 LINK |

### Request parameters

This job requires the following parameters to be set within your contract's `request()` function:

| Parameter | Type | Value example | Description |
|-------------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **method** | `string` | 'POST' | The HTTP method to use in initiating your request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | 'https://myRequestURL.com/path?var1=abc&var2=xyz' | The URL to which to send your HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, you must pass an empty string (''). |
| **body** | `string` | 'My request body' | A body to send with the HTTP request (`POST`, `PUT` requests only). If no body is desired or applicable, you must pass an empty string (''). |
| **path** | `string` | 'data,0,val' | The [JSON Path](https://jsonpath.com/) at which to extract the result returned by the requested HTTP endpoint (JSON results only). To return the full result without parsing, you must pass an empty string (''). If the provided path cannot be found in the response, the request will not be fulfilled. |
| **multiplier** | `int256` | 10 ** 18 | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. If no multiplication is desired, enter 1. If the result cannot be multiplied (ie, it is not a number), the request will not be fulfilled. |
| **contact** | `string` | 'derek_linkwellnodes.io' | Enter your Discord handle, email address, or other contact info here. This is important for allowing prompt communication from us regarding outages or other technical issues that we may notice with your request. If you prefer to stay anonymous, you must pass an empty string (''). |

### Try it for yourself

Add the following sample code to your **consumer contract**.

#### 1. Add the constructor:

The constructor specifies important information about the request destination and payment for your request. **Important**: This information varies by chain, oracle, and job: 

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/uint256/uint256.sol#L23-L28
```

#### 2. Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information on each required parameter, reference the above '**Request parameters**' section:

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/uint256/uint256.sol#L31-L51
```

#### 3. Retrieve the response (example):

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/uint256/uint256.sol#L53-L61
```

### Need to send sensitive information?

:::danger 
Data entered into a smart contract is visible to the general public.
:::

If you need to send sensitive information along with your HTTP request (ie, an API key), you can instead store this information off-chain on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started, and specify within the notes that you'd like us to store your API key for you - once we receive your information, we'll provide you with a custom job ID that will send your sensitive data safely along with your request.

### Troubleshooting

Having trouble with your request? Check our [Custom Data Feeds FAQ](/knowledgebase/faq/Chainlink-Users#custom-data-feeds).

:::caution 
This job has a configured gas limit of **1,000,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the above '**Oracle Address**' for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). 
:::

### Still need more help?

Please reach out to us in [Discord](https://discord.gg/Xs6SjqVPUA) if you require additional assistance with this request.

### Simulating the above request logic

Let's walk through each step of the above **sample request**, to better understand how it all works together:

#### 1. **Send the HTTP request**:

The following `curl` command simulates the same HTTP request that our Chainlink node makes shortly after you trigger the `request()` function within your consumer contract:

```
curl 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR' \
 --request 'GET' \
 --header 'content-type: application/json' \
 --header 'set-cookie: sid=14A52'
```

#### 2. **Analyze the response**:

The following is a sample response body returned to our Chainlink node by the above HTTP request (abbreviated for clarity):

```
{
   "BTC":{
      "USD":30575.12,
      "EUR":27810.9
   },
   "ETH":{
      "USD":1875.87,
      "EUR":1706.29
   }
}
```

#### 3. **Apply the JSON path**:

After receiving the above sample response, our Chainlink node will attempt to filter the result by the provided `path` parameter value (`ETH,USD`). After applying the provided path, we get the following result:

```
1875.87
```

#### 4. **Apply the multiplier**:

After filtering the sample response by the provided JSON path, our Chainlink node will multiply the result by the provided `multiplier` parameter value (`10 ** 18`). After applying this multiplier, we get the following value, which is ultimately written to your smart contract as a `uint256` object by our Chainlink oracle:

```
1875870000000000000000
```
</TabItem>

<TabItem value="Uint256[]"> 

## Uint256[] Retrieval

This job initiates an HTTP `GET`, `POST`, `PUT`, or `DELETE` request to the internet, optionally parses a JSON-based response body for an array of numeric value at the given path, multiplies each element in the array by the given multiplier, and returns the resulting array of 256-bit unsigned integers (**uint256[]**) to your smart contract.

:::info 
This job writes a single **uint256[]** object to your contract, which can store an array of unsigned integers, each of whose values range from `0` to `115792089237316195423570985008687907853269984665640564039457584007913129639935` (`(2 ^ 256) - 1`). 
:::

### Request metadata

| Oracle Address                             | Job ID                           | Request Fee              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://testnet.bscscan.com/address/0xd08FEb8203E76f836D74608595346ab6b0f768C9) | e20c7567b2bb4e3690c615d03457b5d3 | 0 LINK |

### Request parameters

This job requires the following parameters to be set within your contract's `request()` function:

| Parameter | Type | Value example | Description |
|-------------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **method** | `string` | 'GET' | The HTTP method to use in initiating your request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | 'https://myRequestURL.com/path?var1=abc&var2=xyz' | The URL to which to send your HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, you must pass an empty string (''). |
| **body** | `string` | 'My request body' | A body to send with the HTTP request (`POST`, `PUT` requests only). If no body is desired or applicable, you must pass an empty string (''). |
| **path** | `string` | 'data,0,val;data,1,val;data,2,val' | A semicolon-delimited list of [JSON Paths](https://jsonpath.com/) at which to extract data from the result returned by the requested HTTP endpoint (JSON results only). If a single path is desired, enter the path without any semicolons. The target of this singular path must be an array of numbers. If multiple paths are specified, the target of each requested path must be a singular number. An array (`uint256[]`) will be returned containing the individual results of each path, with order preserved. If any of the provided path(s) cannot be found in the response, the request will not be fulfilled. To return the full result without any parsing (must be an array of numbers), you must pass an empty string (''). |
| **multiplier** | `int256` | 10 ** 18 | The number by which to multiply every element within the result array returned to the contract. This is important, as Solidity cannot handle decimal objects. If no multiplication is desired, enter 1. If the result cannot be multiplied (ie, all elements are not numbers), the request will not be fulfilled. |
| **contact** | `string` | 'derek_linkwellnodes.io' | Enter your Discord handle, email address, or other contact info here. This is important for allowing prompt communication from us regarding outages or other technical issues that we may notice with your request. If you prefer to stay anonymous, you must pass an empty string (''). |

### Try it for yourself

Add the following sample code to your **consumer contract**.

#### 1. Add the constructor:

The constructor specifies important information about the request destination and payment for your request. **Important**: This information varies by chain, oracle, and job: 

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/uint256-array/uint256-array.sol#L23-L28
```

#### 2. Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information on each required parameter, reference the above '**Request parameters**' section:

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/uint256-array/uint256-array.sol#L31-L51
```

#### 3. Retrieve the response (example):

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/uint256-array/uint256-array.sol#L53-L61
```

### Need to send sensitive information?

:::danger 
Data entered into a smart contract is visible to the general public.
:::

If you need to send sensitive information along with your HTTP request (ie, an API key), you can instead store this information off-chain on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started, and specify within the notes that you'd like us to store your API key for you - once we receive your information, we'll provide you with a custom job ID that will send your sensitive data safely along with your request.

### Troubleshooting

Having trouble with your request? Check our [Custom Data Feeds FAQ](/knowledgebase/faq/Chainlink-Users#custom-data-feeds).

:::caution 
This job has a configured gas limit of **1,000,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the above '**Oracle Address**' for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). 
:::

### Still need more help?

Please reach out to us in [Discord](https://discord.gg/Xs6SjqVPUA) if you require additional assistance with this request.

### Simulating the above request logic

Let's walk through each step of the above **sample request**, to better understand how it all works together:

#### 1. **Send the HTTP request**:

The following `curl` command simulates the same HTTP request that our Chainlink node makes shortly after you trigger the `request()` function within your consumer contract:

```
curl "https://httpbin.org/post" \
 --request 'POST' \
 --header 'content-type: application/json' \
 --header 'set-cookie: sid=14A52' \
 --data '{"data":[[12.43,54.47,98.34],[89.99,34.21,85.65],[412.43,983.89,473.31]]}'
```

#### 2. **Analyze the response**:

The following is a sample response body returned to our Chainlink node by the above HTTP request (abbreviated for clarity):

```
{
   "json":{
      "data":[
         [
            12.43,
            54.47,
            98.34
         ],
         [
            89.99,
            34.21,
            85.65
         ],
         [
            412.43,
            983.89,
            473.31
         ]
      ]
   }
}
```

#### 3. **Apply the JSON path**:

After receiving the above sample response, our Chainlink node will attempt to filter the result by the provided `path` parameter value (`json,data,0,2;json,data,1,0;json,data,2,1`), which contains 3 separate (`;`-delimited) JSON paths. After applying the provided path parameter, we get the following array:

```
[-54.47,89.89,983.89]
```

#### 4. **Apply the multiplier**:

After filtering the sample response by the provided JSON path, our Chainlink node will multiply every element in the result array by the provided `multiplier` parameter value (`10 ** 18`). After applying this multiplier, we get the following array, which is ultimately written to your smart contract as a `uint256[]` object by our Chainlink oracle:

```
[98340000000000000000,89990000000000000000,412430000000000000000]
```
</TabItem>

<TabItem value="Int256"> 

## Int256 Retrieval

This job initiates an HTTP `GET`, `POST`, `PUT`, or `DELETE` request to the internet, optionally parses a JSON-based response body for a numeric value at the given path, multiplies this value by the given multiplier, and returns the resulting 256-bit signed integer (**int256**) to your smart contract.

:::info  
This job writes a single **int256** object to your contract, which can store any integer from `-2 ^ 255` to ` (2 ^ 255) - 1`. 
:::

### Request metadata

| Oracle Address                             | Job ID                           | Request Fee              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://testnet.bscscan.com/address/0xd08FEb8203E76f836D74608595346ab6b0f768C9) | 7f221811c63d49dd98031f957bf9bce0 | 0 LINK |

### Request parameters

This job requires the following parameters to be set within your contract's `request()` function:

| Parameter | Type | Value example | Description |
|-------------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **method** | `string` | 'POST' | The HTTP method to use in initiating your request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | 'https://myRequestURL.com/path?var1=abc&var2=xyz' | The URL to which to send your HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, you must pass an empty string (''). |
| **body** | `string` | 'My request body' | A body to send with the HTTP request (`POST`, `PUT` requests only). If no body is desired or applicable, you must pass an empty string (''). |
| **path** | `string` | 'data,0,val' | The [JSON Path](https://jsonpath.com/) at which to extract the result returned by the requested HTTP endpoint (JSON results only). To return the full result without parsing, you must pass an empty string (''). If the provided path cannot be found in the response, the request will not be fulfilled. |
| **multiplier** | `int256` | 10 ** 18 | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. If no multiplication is desired, enter 1. If the result cannot be multiplied (ie, it is not a number), the request will not be fulfilled. |
| **contact** | `string` | 'derek_linkwellnodes.io' | Enter your Discord handle, email address, or other contact info here. This is important for allowing prompt communication from us regarding outages or other technical issues that we may notice with your request. If you prefer to stay anonymous, you must pass an empty string (''). |

### Try it for yourself

Add the following sample code to your **consumer contract**.

#### 1. Add the constructor:

The constructor specifies important information about the request destination and payment for your request. **Important**: This information varies by chain, oracle, and job: 

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/int256/int256.sol#L23-L28
```

#### 2. Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information on each required parameter, reference the above '**Request parameters**' section:

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/int256/int256.sol#L31-L51
```

#### 3. Retrieve the response (example):

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/int256/int256.sol#L53-L61
```

### Need to send sensitive information?

:::danger 
Data entered into a smart contract is visible to the general public.
:::

If you need to send sensitive information along with your HTTP request (ie, an API key), you can instead store this information off-chain on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started, and specify within the notes that you'd like us to store your API key for you - once we receive your information, we'll provide you with a custom job ID that will send your sensitive data safely along with your request.

### Troubleshooting

Having trouble with your request? Check our [Custom Data Feeds FAQ](/knowledgebase/faq/Chainlink-Users#custom-data-feeds).

:::caution 
This job has a configured gas limit of **1,000,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the above '**Oracle Address**' for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). 
:::

### Still need more help?

Please reach out to us in [Discord](https://discord.gg/Xs6SjqVPUA) if you require additional assistance with this request.

### Simulating the above request logic

Let's walk through each step of the above **sample request**, to better understand how it all works together:

#### 1. **Send the HTTP request**:

The following `curl` command simulates the same HTTP request that our Chainlink node makes shortly after you trigger the `request()` function within your consumer contract:

```
curl 'https://httpbin.org/post' \
 --request 'POST' \
 --header 'content-type: application/json' \
 --header 'set-cookie: sid=14A52' \
 --data '{"data":[[12.43,-54.47,98.34],[89.99,-34.21,-85.65],[-412.43,983.89,473.31]]}'
```

#### 2. **Analyze the response**:

The following is a sample response body returned to our Chainlink node by the above HTTP request (abbreviated for clarity):

```
{
   "json":{
      "data":[
         [
            12.43,
            -54.47,
            98.34
         ],
         [
            89.99,
            -34.21,
            -85.65
         ],
         [
            -412.43,
            983.89,
            473.31
         ]
      ]
   }
}
```

#### 3. **Apply the JSON path**:

After receiving the above sample response, our Chainlink node will attempt to filter the result by the provided `path` parameter value (`json,data,1,2`). After applying the provided path, we get the following result:

```
-85.65
```

#### 4. **Apply the multiplier**:

After filtering the sample response by the provided JSON path, our Chainlink node will multiply the result by the provided `multiplier` parameter value (`10 ** 18`). After applying this multiplier, we get the following value, which is ultimately written to your smart contract as a `int256` object by our Chainlink oracle:

```
-85650000000000000000
```

</TabItem>

<TabItem value="Int256[]">

## Int256[] Retrieval

This job initiates an HTTP `GET`, `POST`, `PUT`, or `DELETE` request to the internet, optionally parses a JSON-based response body for an array of numeric value at the given path, multiplies each element in the array by the given multiplier, and returns the resulting array of 256-bit signed integers (**int256[]**) to your smart contract.

:::info  
This job writes a single **int256[]** object to your contract, which can store an array of signed integers, each of whose values range from `-2 ^ 255` to ` (2 ^ 255) - 1`. 
:::

### Request metadata

| Oracle Address                             | Job ID                           | Request Fee              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://testnet.bscscan.com/address/0xd08FEb8203E76f836D74608595346ab6b0f768C9) | 356a0aced8f7425abd2ec17df9014359 | 0 LINK |

### Request parameters

This job requires the following parameters to be set within your contract's `request()` function:

| Parameter | Type | Value example | Description |
|-------------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **method** | `string` | 'GET' | The HTTP method to use in initiating your request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | 'https://myRequestURL.com/path?var1=abc&var2=xyz' | The URL to which to send your HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, you must pass an empty string (''). |
| **body** | `string` | 'My request body' | A body to send with the HTTP request (`POST`, `PUT` requests only). If no body is desired or applicable, you must pass an empty string (''). |
| **path** | `string` | 'data,0,val;data,1,val;data,2,val' | A semicolon-delimited list of [JSON Paths](https://jsonpath.com/) at which to extract data from the result returned by the requested HTTP endpoint (JSON results only). If a single path is desired, enter the path without any semicolons. The target of this singular path must be an array of numbers. If multiple paths are specified, the target of each requested path must be a singular number. An array (`int256[]`) will be returned containing the individual results of each path, with order preserved. If any of the provided path(s) cannot be found in the response, the request will not be fulfilled. To return the full result without any parsing (must be an array of numbers), you must pass an empty string (''). |
| **multiplier** | `int256` | 10 ** 18 | The number by which to multiply every element within the result array returned to the contract. This is important, as Solidity cannot handle decimal objects. If no multiplication is desired, enter 1. If the result cannot be multiplied (ie, all elements are not numbers), the request will not be fulfilled. |
| **contact** | `string` | 'derek_linkwellnodes.io' | Enter your Discord handle, email address, or other contact info here. This is important for allowing prompt communication from us regarding outages or other technical issues that we may notice with your request. If you prefer to stay anonymous, you must pass an empty string (''). |

### Try it for yourself

Add the following sample code to your **consumer contract**.

#### 1. Add the constructor:

The constructor specifies important information about the request destination and payment for your request. **Important**: This information varies by chain, oracle, and job: 

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/int256-array/int256-array.sol#L23-L28
```

#### 2. Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information on each required parameter, reference the above '**Request parameters**' section:

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/int256-array/int256-array.sol#L31-L51
```

#### 3. Retrieve the response (example):

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/int256-array/int256-array.sol#L53-L61
```

### Need to send sensitive information?

:::danger 
Data entered into a smart contract is visible to the general public.
:::

If you need to send sensitive information along with your HTTP request (ie, an API key), you can instead store this information off-chain on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started, and specify within the notes that you'd like us to store your API key for you - once we receive your information, we'll provide you with a custom job ID that will send your sensitive data safely along with your request.

### Troubleshooting

Having trouble with your request? Check our [Custom Data Feeds FAQ](/knowledgebase/faq/Chainlink-Users#custom-data-feeds).

:::caution 
This job has a configured gas limit of **1,000,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the above '**Oracle Address**' for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). 
:::

### Still need more help?

Please reach out to us in [Discord](https://discord.gg/Xs6SjqVPUA) if you require additional assistance with this request.

### Simulating the above request logic

Let's walk through each step of the above **sample request**, to better understand how it all works together:

#### 1. **Send the HTTP request**:

The following `curl` command simulates the same HTTP request that our Chainlink node makes shortly after you trigger the `request()` function within your consumer contract:

```
curl "https://httpbin.org/post" \
 --request 'POST' \
 --header 'content-type: application/json' \
 --header 'set-cookie: sid=14A52' \
 --data '{"data":[[12.43,-54.47,98.34],[89.99,-34.21,-85.65],[-412.43,983.89,473.31]]}'
```

#### 2. **Analyze the response**:

The following is a sample response body returned to our Chainlink node by the above HTTP request (abbreviated for clarity):

```
{
   "json":{
      "data":[
         [
            12.43,
            -54.47,
            98.34
         ],
         [
            89.99,
            -34.21,
            -85.65
         ],
         [
            -412.43,
            983.89,
            473.31
         ]
      ]
   }
}
```

#### 3. **Apply the JSON path**:

After receiving the above sample response, our Chainlink node will attempt to filter the result by the provided `path` parameter value (`json,data,0,1;json,data,1,0;json,data,2,1`), which contains 3 separate (`;`-delimited) JSON paths. After applying the provided path parameter, we get the following result:

```
[-54.47,89.89,983.89]
```

#### 4. **Apply the multiplier**:

After filtering the sample response by the provided JSON path, our Chainlink node will multiply every element in the result array by the provided `multiplier` parameter value (`10 ** 18`). After applying this multiplier, we get the following array, which is ultimately written to your smart contract as a `int256[]` object by our Chainlink oracle:

```
[-54470000000000000000,89990000000000000000,983890000000000000000]
```
</TabItem>

<TabItem value="Bool">

## Boolean Retrieval

This job initiates an HTTP `GET`, `POST`, `PUT`, or `DELETE` request to the internet, optionally parses a JSON-based response body for a boolean value at the given path, and returns the resulting object (**bool**) to your smart contract.

:::info  
This job writes a single **bool** object to your contract, which can store a `true` or `false` value. 
:::

### Request metadata

| Oracle Address                             | Job ID                           | Request Fee              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://testnet.bscscan.com/address/0xd08FEb8203E76f836D74608595346ab6b0f768C9) | 43309009a154495cb2ed794233e6ff56 | 0 LINK |

### Request parameters

This job requires the following parameters to be set within your contract's `request()` function:

| Parameter | Type | Value example | Description |
|-------------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **method** | `string` | 'GET' | The HTTP method to use in initiating your request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | 'https://myRequestURL.com/path?var1=abc&var2=xyz' | The URL to which to send your HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, you must pass an empty string (''). |
| **body** | `string` | 'My request body' | A body to send with the HTTP request (`POST`, `PUT` requests only). If no body is desired or applicable, you must pass an empty string (''). |
| **path** | `string` | 'data,0,val' | The [JSON Path](https://jsonpath.com/) at which to extract the result returned by the requested HTTP endpoint (JSON results only). To return the full result without parsing, you must pass an empty string (''). If the provided path cannot be found in the response, the request will not be fulfilled. |
| **contact** | `string` | 'derek_linkwellnodes.io' | Enter your Discord handle, email address, or other contact info here. This is important for allowing prompt communication from us regarding outages or other technical issues that we may notice with your request. If you prefer to stay anonymous, you must pass an empty string (''). |

### Try it for yourself

Add the following sample code to your **consumer contract**.

#### 1. Add the constructor:

The constructor specifies important information about the request destination and payment for your request. **Important**: This information varies by chain, oracle, and job: 

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/bool/bool.sol#L23-L28
```

#### 2. Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information on each required parameter, reference the above '**Request parameters**' section:

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/bool/bool.sol#L30-L50
```

#### 3. Retrieve the response (example):

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/bool/bool.sol#L52-L60
```

### Need to send sensitive information?

:::danger 
Data entered into a smart contract is visible to the general public.
:::

If you need to send sensitive information along with your HTTP request (ie, an API key), you can instead store this information off-chain on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started, and specify within the notes that you'd like us to store your API key for you - once we receive your information, we'll provide you with a custom job ID that will send your sensitive data safely along with your request.

### Troubleshooting

Having trouble with your request? Check our [Custom Data Feeds FAQ](/knowledgebase/faq/Chainlink-Users#custom-data-feeds).

:::caution 
This job has a configured gas limit of **1,000,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the above '**Oracle Address**' for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). 
:::

### Still need more help?

Please reach out to us in [Discord](https://discord.gg/Xs6SjqVPUA) if you require additional assistance with this request.

### Simulating the above request logic

Let's walk through each step of the above **sample request**, to better understand how it all works together:

#### 1. **Send the HTTP request**:

The following `curl` command simulates the same HTTP request that our Chainlink node makes shortly after you trigger the `request()` function within your consumer contract:

```
curl 'https://httpbin.org/post' \
 --request 'POST' \
 --header 'content-type: application/json' \
 --header 'set-cookie: sid=14A52' \
 --data '{"data":[{"coin":"BTC","isActive":false},{"coin":"ETH","isActive":false},{"coin":"LINK","isActive":true}]}'
```

#### 2. **Analyze the response**:

The following is a sample response body returned to our Chainlink node by the above HTTP request (abbreviated for clarity):

```
{
   "json":{
      "data":[
         {
            "coin":"BTC",
            "isActive":false
         },
         {
            "coin":"ETH",
            "isActive":false
         },
         {
            "coin":"LINK",
            "isActive":true
         }
      ]
   }
}
```

#### 3. **Apply the JSON path**:

After receiving the above sample response, our Chainlink node will attempt to filter the result by the provided `path` parameter value (`json,data,2,isActive`). After applying the provided path, we get the following result, which is ultimately written to your smart contract as a `bool` object by our Chainlink oracle:

```
true
```
</TabItem>

<TabItem value="Bool[]">

## Boolean[] Retrieval

This job initiates an HTTP `GET`, `POST`, `PUT`, or `DELETE` request to the internet, optionally parses a JSON-based response body for an array of boolean values at the given path, and returns the resulting array of booleans (**bool[]**) to your smart contract.

:::info  
This job writes a single **bool[]** object to your contract, which can store an array of `true` or `false` values. 
:::

### Request metadata

| Oracle Address                             | Job ID                           | Request Fee              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://testnet.bscscan.com/address/0xd08FEb8203E76f836D74608595346ab6b0f768C9) | 433ba6a76b374e2580dd43685a9de8c6 | 0 LINK |

### Request parameters

This job requires the following parameters to be set within your contract's `request()` function:

| Parameter | Type | Value example | Description |
|-------------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **method** | `string` | 'GET' | The HTTP method to use in initiating your request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | 'https://myRequestURL.com/path?var1=abc&var2=xyz' | The URL to which to send your HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, you must pass an empty string (''). |
| **body** | `string` | 'My request body' | A body to send with the HTTP request (`POST`, `PUT` requests only). If no body is desired or applicable, you must pass an empty string (''). |
| **path** | `string` | 'data,0,val;data,1,val;data,2,val' | A semicolon-delimited list of [JSON Paths](https://jsonpath.com/) at which to extract data from the result returned by the requested HTTP endpoint (JSON results only). If a single path is desired, enter the path without any semicolons. The target of this singular path must be an array of boolean values (`true` or `false`). If multiple paths are specified, the target of each requested path must be a singular boolean value. An array (`bool[]`) will be returned containing the individual results of each path, with order preserved. If any of the provided path(s) cannot be found in the response, the request will not be fulfilled. To return the full result without any parsing (must be an array of boolean values), you must pass an empty string (''). |
| **contact** | `string` | 'derek_linkwellnodes.io' | Enter your Discord handle, email address, or other contact info here. This is important for allowing prompt communication from us regarding outages or other technical issues that we may notice with your request. If you prefer to stay anonymous, you must pass an empty string (''). |

### Try it for yourself

Add the following sample code to your **consumer contract**.

#### 1. Add the constructor:

The constructor specifies important information about the request destination and payment for your request. **Important**: This information varies by chain, oracle, and job: 

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/bool-array/bool-array.sol#L23-L28
```

#### 2. Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information on each required parameter, reference the above '**Request parameters**' section:

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/bool-array/bool-array.sol#L30-L50
```

#### 3. Retrieve the response (example):

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/bool-array/bool-array.sol#L52-L60
```

### Need to send sensitive information?

:::danger 
Data entered into a smart contract is visible to the general public.
:::

If you need to send sensitive information along with your HTTP request (ie, an API key), you can instead store this information off-chain on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started, and specify within the notes that you'd like us to store your API key for you - once we receive your information, we'll provide you with a custom job ID that will send your sensitive data safely along with your request.

### Troubleshooting

Having trouble with your request? Check our [Custom Data Feeds FAQ](/knowledgebase/faq/Chainlink-Users#custom-data-feeds).

:::caution 
This job has a configured gas limit of **1,000,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the above '**Oracle Address**' for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). 
:::

### Still need more help?

Please reach out to us in [Discord](https://discord.gg/Xs6SjqVPUA) if you require additional assistance with this request.

### Simulating the above request logic

Let's walk through each step of the above **sample request**, to better understand how it all works together:

#### 1. **Send the HTTP request**:

The following `curl` command simulates the same HTTP request that our Chainlink node makes shortly after you trigger the `request()` function within your consumer contract:

```
curl "https://httpbin.org/post" \
 --request 'POST' \
 --header 'content-type: application/json' \
 --header 'set-cookie: sid=14A52' \
 req.add('body', '{"data":[[false,false,true],[false,true,true],[true,false,true]]}');
```

#### 2. **Analyze the response**:

The following is a sample response body returned to our Chainlink node by the above HTTP request (abbreviated for clarity):

```
{
   "json":{
      "data":[
         [
            false,
            false,
            true
         ],
         [
            false,
            true,
            true
         ],
         [
            true,
            false,
            true
         ]
      ]
   }
}
```

#### 3. **Apply the JSON path**:

After receiving the above sample response, our Chainlink node will attempt to filter the result by the provided `path` parameter value (`json,data,0,2;json,data,1,0;json,data,2,1`), which contains 3 separate (`;`-delimited) JSON paths. After applying the provided path parameter, we get the following array, which is ultimately written to your smart contract as a `bool[]` object by our Chainlink oracle:

```
[true,false,false]
```
</TabItem>

<TabItem value="String (Bytes)">

## String (Bytes) Retrieval

This job initiates an HTTP `GET`, `POST`, `PUT`, or `DELETE` request to the internet, optionally parses a JSON-based response body for a value at the given path, and returns the resulting dynamic bytes array (**bytes**) - which can also be represented as a **string** - to your consumer contract.

:::info 
This job writes a single **bytes** object to your contract, which can readily be converted into a **string** value. 
:::

### Request metadata

| Oracle Address                             | Job ID                           | Request Fee              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://testnet.bscscan.com/address/0xd08FEb8203E76f836D74608595346ab6b0f768C9) | 8ced832954544a3c98543c94a51d6a8d | 0 LINK |

### Request parameters

This job requires the following parameters to be set within your contract's `request()` function:

| Parameter | Type | Value example | Description |
|-------------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **method** | `string` | 'POST' | The HTTP method to use in initiating your request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | 'https://myRequestURL.com/path?var1=abc&var2=xyz' | The URL to which to send your HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, you must pass an empty string (''). |
| **body** | `string` | 'My request body' | A body to send with the HTTP request (`POST`, `PUT` requests only). If no body is desired or applicable, you must pass an empty string (''). |
| **path** | `string` | 'data,0,val' | The [JSON Path](https://jsonpath.com/) at which to extract the result returned by the requested HTTP endpoint (JSON results only). To return the full result without parsing, you must pass an empty string (''). If the provided path cannot be found in the response, the request will not be fulfilled. |
| **contact** | `string` | 'derek_linkwellnodes.io' | Enter your Discord handle, email address, or other contact info here. This is important for allowing prompt communication from us regarding outages or other technical issues that we may notice with your request. If you prefer to stay anonymous, you must pass an empty string (''). |

### Try it for yourself

Add the following sample code to your **consumer contract**.

#### 1. Add the constructor:

The constructor specifies important information about the request destination and payment for your request. **Important**: This information varies by chain, oracle, and job: 

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/string-bytes/string-bytes.sol#L23-L28
```

#### 2. Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information on each required parameter, reference the above '**Request parameters**' section:

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/string-bytes/string-bytes.sol#L30-L50
```

#### 3. Retrieve the response (example):

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/string-bytes/string-bytes.sol#L52-L65
```

### Need to send sensitive information?

:::danger 
Data entered into a smart contract is visible to the general public.
:::

If you need to send sensitive information along with your HTTP request (ie, an API key), you can instead store this information off-chain on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started, and specify within the notes that you'd like us to store your API key for you - once we receive your information, we'll provide you with a custom job ID that will send your sensitive data safely along with your request.

### Troubleshooting

Having trouble with your request? Check our [Custom Data Feeds FAQ](/knowledgebase/faq/Chainlink-Users#custom-data-feeds).

:::caution 
This job has a configured gas limit of **1,000,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the above '**Oracle Address**' for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing).  
::: 

### Still need more help?

Please reach out to us in [Discord](https://discord.gg/Xs6SjqVPUA) if you require additional assistance with this request.

### Simulating the above request logic

Let's walk through each step of the above **sample request**, to better understand how it all works together:

#### 1. **Send the HTTP request**:

The following `curl` command simulates the same HTTP request that our Chainlink node makes shortly after you trigger the `request()` function within your consumer contract:

```
curl 'https://httpbin.org/post' \
 --request 'POST' \
 --header 'content-type: application/json' \
 --header 'set-cookie: sid=14A52' \
 --data '{"data":[{"id":1,"name":"Bitcoin","price":20194.52},{"id":2,"name":"Ethereum","price":1850.46},{"id":3,"name":"Chainlink","price":18.36}]}'
```

#### 2. **Analyze the response**:

The following is a sample response body returned to our Chainlink node by the above HTTP request (abbreviated for clarity):

```
{
   "json":{
      "data":[
         {
            "id":1,
            "name":"Bitcoin",
            "price":20194.52
         },
         {
            "id":2,
            "name":"Ethereum",
            "price":1850.46
         },
         {
            "id":3,
            "name":"Chainlink",
            "price":18.36
         }
      ]
   }
}
```

#### 3. **Apply the JSON path**:

After receiving the above sample response, our Chainlink node will attempt to filter the result by the provided `path` parameter value (`json,data,0,name`). After applying the provided path, we get the following result, which is ultimately written to your smart contract as a `bytes` object (which can also be represented as a `string` object) by our Chainlink oracle:

```
"Bitcoin"
```

:::info  
Note that the double-quotes will not be present when retrieving the above response as a `string` object within your smart contract.
:::

</TabItem>

<TabItem value="String[] (Bytes[])">

## String[] (Bytes[]) Retrieval

This job initiates an HTTP `GET`, `POST`, `PUT`, or `DELETE` request to the internet, optionally parses a JSON-based response body for a value at the given path, and returns the resulting array of dynamic bytes arrays (**bytes[]**) - which can also be represented as a **string[]** - to your consumer contract.

:::info  
This job writes a single **bytes[]** object to your contract, which can readily be converted into a **string[]** value.
::: 

### Request metadata

| Oracle Address                             | Job ID                           | Request Fee              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://testnet.bscscan.com/address/0xd08FEb8203E76f836D74608595346ab6b0f768C9) | 07f761e26a284cb8b7ed67188dece6d4 | 0 LINK |

### Request parameters

This job requires the following parameters to be set within your contract's `request()` function:

| Parameter | Type | Value example | Description |
|-------------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **method** | `string` | 'POST' | The HTTP method to use in initiating your request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | 'https://myRequestURL.com/path?var1=abc&var2=xyz' | The URL to which to send your HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, you must pass an empty string (''). |
| **body** | `string` | 'My request body' | A body to send with the HTTP request (`POST`, `PUT` requests only). If no body is desired or applicable, you must pass an empty string (''). |
| **path** | `string` | 'data,0,val;data,1,val;data,2,val' | A semicolon-delimited list of [JSON Paths](https://jsonpath.com/) at which to extract data from the result returned by the requested HTTP endpoint (JSON results only). If a single path is desired, enter the path without any semicolons. If multiple paths are specified, an array (`bytes[]`) will be returned containing result of each requested path, with order preserved. If any of the provided path(s) cannot be found in the response, the request will not be fulfilled. To return the full result without any parsing (must be an array), you must pass an empty string (''). |
| **contact** | `string` | 'derek_linkwellnodes.io' | Enter your Discord handle, email address, or other contact info here. This is important for allowing prompt communication from us regarding outages or other technical issues that we may notice with your request. If you prefer to stay anonymous, you must pass an empty string (''). |

### Try it for yourself

Add the following sample code to your **consumer contract**.

#### 1. Add the constructor:

The constructor specifies important information about the request destination and payment for your request. **Important**: This information varies by chain, oracle, and job: 

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/string-bytes-array/string-bytes-array.sol#L23-L28
```

#### 2. Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information on each required parameter, reference the above '**Request parameters**' section:

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/string-bytes-array/string-bytes-array.sol#L30-L50
```

#### 3. Retrieve the response (example):

```sol reference
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/Binance-Testnet/string-bytes-array/string-bytes-array.sol#L52-L69
```

### Need to send sensitive information?

:::danger 
Data entered into a smart contract is visible to the general public.
:::

If you need to send sensitive information along with your HTTP request (ie, an API key), you can instead store this information off-chain on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started, and specify within the notes that you'd like us to store your API key for you - once we receive your information, we'll provide you with a custom job ID that will send your sensitive data safely along with your request.

### Troubleshooting

Having trouble with your request? Check our [Custom Data Feeds FAQ](/knowledgebase/faq/Chainlink-Users#custom-data-feeds).

:::caution 
This job has a configured gas limit of **1,000,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the above '**Oracle Address**' for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing).   
:::

### Still need more help?

Please reach out to us in [Discord](https://discord.gg/Xs6SjqVPUA) if you require additional assistance with this request.

### Simulating the above request logic

Let's walk through each step of the above **sample request**, to better understand how it all works together:

#### 1. **Send the HTTP request**:

The following `curl` command simulates the same HTTP request that our Chainlink node makes shortly after you trigger the `request()` function within your consumer contract:

```
curl "https://httpbin.org/post" \
 --request 'POST' \
 --header 'content-type: application/json' \
 --header 'set-cookie: sid=14A52' \
 --data '{"data":[["Coinbase","Binance","Kraken"],["Huobi","Crypto.com","KuCoin"],["Yobit","Gemini","OKX"]]}'
```

#### 2. **Analyze the response**:

The following is a sample response body returned to our Chainlink node by the above HTTP request (abbreviated for clarity):

```
{
   "json":{
      "data":[
         [
            "Coinbase",
            "Binance",
            "Kraken"
         ],
         [
            "Huobi",
            "Crypto.com",
            "KuCoin"
         ],
         [
            "Yobit",
            "Gemini",
            "OKX"
         ]
      ]
   }
}
```

#### 3. **Apply the JSON path**:

After receiving the above sample response, our Chainlink node will attempt to filter the result by the provided `path` parameter value (`json,data,0,2;json,data,1,0;json,data,2,1`), which contains 3 separate (`;`-delimited) JSON paths. After applying the provided path parameter, we get the following array, which is ultimately written to your smart contract as a `bytes[]` object (which can also be represented as a `string[]`) object by our Chainlink oracle:

```
["Kraken","Huobi","Gemini"]
```

:::info  
Note that the double-quotes will not be present when retrieving any of the above array elements as a `string` within your smart contract. 
:::

</TabItem>

<TabItem value="Other...">

## Need a custom data type delivered?

**We've got you covered:**

1. Fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) with the relevant details about your request. 
1. We'll assess your request and provide you with a custom job ID that works for you.

:::info  
Join our [Discord](https://discord.gg/Xs6SjqVPUA) to get the fastest service for your request!
:::

</TabItem>
</Tabs>