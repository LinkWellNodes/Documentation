## Polygon Mumbai Testnet Jobs
Mumbai network is a testnet that approximates the Polygon Mainnet, and uses Ethereum's Goerli testnet as its Layer 1 protocol.

Please see below for our Chainlink direct request job offerings on the Polygon-Mumbai network. All testnet jobs are free to use, and do not require you to fund your contracts with the LINK token. If you run into any trouble, we are here to help! Head on over to our [Discord](https://discord.gg/AJ66pRz4), or feel free to contact us [here](https://linkwellnodes.io/Home.html#contact-us "Contact LinkWell Nodes")!

### Select the type of data that you need:

<!-- tabs:start -->
#### **Uint256**

## Uint256 Retrieval

This job initiates an HTTP `GET`, `POST`, `PUT`, or `DELETE` request to the internet, optionally parses a JSON-based response body for a numeric value at the given path, multiplies this value by the given multiplier, and returns the resulting 256-bit unsigned integer (**uint256**) to your consumer contract.

?> This job returns a single **uint256** object, which can store any integer from `0` to `115792089237316195423570985008687907853269984665640564039457584007913129639935` (`(2 ^ 256) - 1`). 

### Job details

| Oracle Address                             | Job ID                           | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | a8356f48569c434eaa4ac5fcb4db5cc0 | 0 LINK |

### Request parameters

This job requires the following parameters to be set:

| Parameter | Type | Value example | Description |
|-------------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **method** | `string` | 'POST' | The HTTP method to use in initiating your request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | 'https://myRequestURL.com/path?var1=abc&var2=xyz' | The URL to which to send your HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, you must pass an empty string (''). |
| **body** | `string` | 'My request body' | A body to send with the HTTP request (`POST`, `PUT` requests only). If no body is desired or applicable, you must pass an empty string (''). |
| **path** | `string` | 'data,0,val' | The [JSON Path](https://jsonpath.com/) at which to extract the result returned by the requested HTTP endpoint (JSON results only). To return the full result without parsing, pass an empty string (''). If the provided path cannot be found in the response, the request will not be fulfilled. |
| **multiplier** | `int256` | 10 ** 18 | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. If no multiplication is desired, enter 1. If the result cannot be multiplied (ie, it is not a number), the request will not be fulfilled. |
| **contact** | `string` | 'derek_linkwellnodes.io' | Enter your Discord handle here. This will allow communication from us regarding outages or other technical issues that we may notice with your request. If you prefer to stay anonymous, pass an empty string (''). |

### Implementing within your consumer contract

#### Add the constructor:

The constructor specifies important information about the request destination and payment for your request (varies by chain, oracle, and job): 

[uint256_constructor](/Polygon-Mumbai/uint256/uint256.sol ':include :type=code :fragment=constructor')`

#### Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information on each required parameter, reference the above '**Request parameters**' section:

[uint256_request](/Polygon-Mumbai/uint256/uint256.sol ':include :type=code :fragment=request')

#### Retrieve the response (example):

[uint256_response](/Polygon-Mumbai/uint256/uint256.sol ':include :type=code :fragment=response')

### Need to send sensitive information?

!> Data entered into a smart contract is visible to the general public.

If you need to send sensitive information along with your HTTP request (ie, an API key), you can instead store this information off-chain on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started - once we receive your information, we'll provide you with a custom job ID that will send your sensitive data along with your request.

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/uint256/uint256.sol) of the above consumer contract.

### Troubleshooting

Having trouble with your request? Check our [Job Troubleshooting Guide](/faq/Chainlink-Users?id=job-troubleshooting).

!> This job has a configured gas limit of **500,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the above '**Oracle Address**' for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). 

### Still need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance with this request.

## Simulating the above request

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
1913540000000000000000
```

#### **Uint256[]**

## Uint256[] Retrieval

This job initiates an HTTP `GET`, `POST`, `PUT`, or `DELETE` request to the internet, optionally parses a JSON-based response body for an array of numeric value at the given path, multiplies each element in the array by the given multiplier, and returns the resulting array of 256-bit unsigned integers (**uint256[]**) to your consumer contract.

?> This job returns a single **uint256[]** object, which can store an array of unsigned integers, each of whose values range from `0` to `115792089237316195423570985008687907853269984665640564039457584007913129639935` (`(2 ^ 256) - 1`). 

### Job details

| Oracle Address                             | Job ID                           | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | e20c7567b2bb4e3690c615d03457b5d3 | 0 LINK |

### Request parameters

This job requires the following parameters to be set:

| Parameter | Type | Value example | Description |
|-------------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **method** | `string` | 'GET' | The HTTP method to use in initiating your request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | 'https://myRequestURL.com/path?var1=abc&var2=xyz' | The URL to which to send your HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, you must pass an empty string (''). |
| **body** | `string` | 'My request body' | A body to send with the HTTP request (`POST`, `PUT` requests only). If no body is desired or applicable, you must pass an empty string (''). |
| **path** | `string` | 'data,0,val' | The [JSON Path](https://jsonpath.com/) at which to extract the result returned by the requested HTTP endpoint (JSON results only). To return the full result without parsing, pass an empty string (''). If the provided path cannot be found in the response, the request will not be fulfilled. |
| **multiplier** | `int256` | 10 ** 18 | The number by which to multiply every element within the result array returned to the contract. This is important, as Solidity cannot handle decimal objects. If no multiplication is desired, enter 1. If the result cannot be multiplied (ie, all elements are not numbers), the request will not be fulfilled. |
| **contact** | `string` | 'derek_linkwellnodes.io' | Enter your Discord handle here. This will allow communication from us regarding outages or other technical issues that we may notice with your request. If you prefer to stay anonymous, pass an empty string (''). |

### Implementing within your consumer contract

#### Add the constructor:

The constructor specifies important information about the request destination and payment for your request (varies by chain, oracle, and job): 

[uint256-array_constructor](/Polygon-Mumbai/uint256-array/uint256-array.sol ':include :type=code :fragment=constructor')`

#### Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information, reference the above '**Request parameters**' section:

[uint256-array_request](/Polygon-Mumbai/uint256-array/uint256-array.sol ':include :type=code :fragment=request')

#### Retrieve the response (example):

[uint256-array_response](/Polygon-Mumbai/uint256-array/uint256-array.sol ':include :type=code :fragment=response')

### Need to send sensitive information?

!> Data entered into a smart contract is visible to the general public.

If you need to send sensitive information along with your HTTP request (ie, an API key), you can instead store this information off-chain on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started - once we receive your information, we'll provide you with a custom job ID that will send your sensitive data along with your request.

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/uint256-array/uint256-array.sol) of the above consumer contract.

### Troubleshooting

Having trouble with your request? Check our [Job Troubleshooting Guide](/faq/Chainlink-Users?id=job-troubleshooting).

!> This job has a configured gas limit of **500,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the above '**Oracle Address**' for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). 

### Still need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance with this request.

## Simulating the above request

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

After receiving the above sample response, our Chainlink node will attempt to filter the result by the provided `path` parameter value (`json,data,2`). After applying the provided path, we get the following array:

```
[412.43,983.89,473.31]
```

#### 4. **Apply the multiplier**:

After filtering the sample response by the provided JSON path, our Chainlink node will multiply every element in the result array by the provided `multiplier` parameter value (`10 ** 18`). After applying this multiplier, we get the following array, which is ultimately written to your smart contract as a `uint256[]` object by our Chainlink oracle:

```
[412430000000000000000,983890000000000000000,473310000000000000000]
```

#### **Int256**

## Int256 Retrieval

This job initiates an HTTP `GET`, `POST`, `PUT`, or `DELETE` request to the internet, optionally parses a JSON-based response body for a numeric value at the given path, multiplies this value by the given multiplier, and returns the resulting 256-bit signed integer (**int256**) to your consumer contract.

?> This job returns a single **int256** object, which can store any integer from `-2 ^ 255` to ` (2 ^ 255) - 1`. 

### Job details

| Oracle Address                             | Job ID                           | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | 7f221811c63d49dd98031f957bf9bce0 | 0 LINK |

### Request parameters

This job requires the following parameters to be set:

| Parameter | Type | Value example | Description |
|-------------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **method** | `string` | 'POST' | The HTTP method to use in initiating your request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | 'https://myRequestURL.com/path?var1=abc&var2=xyz' | The URL to which to send your HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, you must pass an empty string (''). |
| **body** | `string` | 'My request body' | A body to send with the HTTP request (`POST`, `PUT` requests only). If no body is desired or applicable, you must pass an empty string (''). |
| **path** | `string` | 'data,0,val' | The [JSON Path](https://jsonpath.com/) at which to extract the result returned by the requested HTTP endpoint (JSON results only). To return the full result without parsing, pass an empty string (''). If the provided path cannot be found in the response, the request will not be fulfilled. |
| **multiplier** | `int256` | 10 ** 18 | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. If no multiplication is desired, enter 1. If the result cannot be multiplied (ie, it is not a number), the request will not be fulfilled. |
| **contact** | `string` | 'derek_linkwellnodes.io' | Enter your Discord handle here. This will allow communication from us regarding outages or other technical issues that we may notice with your request. If you prefer to stay anonymous, pass an empty string (''). |

### Implementing within your consumer contract

#### Add the constructor:

The constructor specifies important information about the request destination and payment for your request (varies by chain, oracle, and job): 

[int256_constructor](/Polygon-Mumbai/int256/int256.sol ':include :type=code :fragment=constructor')`

#### Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information on each required parameter, reference the above '**Request parameters**' section:

[int256_request](/Polygon-Mumbai/int256/int256.sol ':include :type=code :fragment=request')

#### Retrieve the response (example):

[int256_response](/Polygon-Mumbai/int256/int256.sol ':include :type=code :fragment=response')

### Need to send sensitive information?

!> Data entered into a smart contract is visible to the general public.

If you need to send sensitive information along with your HTTP request (ie, an API key), you can instead store this information off-chain on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started - once we receive your information, we'll provide you with a custom job ID that will send your sensitive data along with your request.

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/int256/int256.sol) of the above consumer contract.

### Troubleshooting

Having trouble with your request? Check our [Job Troubleshooting Guide](/faq/Chainlink-Users?id=job-troubleshooting).

!> This job has a configured gas limit of **500,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the above '**Oracle Address**' for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). 

### Still need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance with this request.

## Simulating the above request

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

#### **Int256[]**

## Int256[] Retrieval

This job initiates an HTTP `GET`, `POST`, `PUT`, or `DELETE` request to the internet, optionally parses a JSON-based response body for an array of numeric value at the given path, multiplies each element in the array by the given multiplier, and returns the resulting array of 256-bit signed integers (**int256[]**) to your consumer contract.

?> This job returns a single **int256[]** object, which can store an array of signed integers, each of whose values range from `-2 ^ 255` to ` (2 ^ 255) - 1`. 

### Job details

| Oracle Address                             | Job ID                           | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | 356a0aced8f7425abd2ec17df9014359 | 0 LINK |

### Request parameters

This job requires the following parameters to be set:

| Parameter | Type | Value example | Description |
|-------------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **method** | `string` | 'GET' | The HTTP method to use in initiating your request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | 'https://myRequestURL.com/path?var1=abc&var2=xyz' | The URL to which to send your HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, you must pass an empty string (''). |
| **body** | `string` | 'My request body' | A body to send with the HTTP request (`POST`, `PUT` requests only). If no body is desired or applicable, you must pass an empty string (''). |
| **path** | `string` | 'data,0,val' | The [JSON Path](https://jsonpath.com/) at which to extract the result returned by the requested HTTP endpoint (JSON results only). To return the full result without parsing, pass an empty string (''). If the provided path cannot be found in the response, the request will not be fulfilled. |
| **multiplier** | `int256` | 10 ** 18 | The number by which to multiply every element within the result array returned to the contract. This is important, as Solidity cannot handle decimal objects. If no multiplication is desired, enter 1. If the result cannot be multiplied (ie, all elements are not numbers), the request will not be fulfilled. |
| **contact** | `string` | 'derek_linkwellnodes.io' | Enter your Discord handle here. This will allow communication from us regarding outages or other technical issues that we may notice with your request. If you prefer to stay anonymous, pass an empty string (''). |

### Implementing within your consumer contract

#### Add the constructor:

The constructor specifies important information about the request destination and payment for your request (varies by chain, oracle, and job): 

[int256-array_constructor](/Polygon-Mumbai/int256-array/int256-array.sol ':include :type=code :fragment=constructor')`

#### Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information, reference the above '**Request parameters**' section:

[int256-array_request](/Polygon-Mumbai/int256-array/int256-array.sol ':include :type=code :fragment=request')

#### Retrieve the response (example):

[int256-array_response](/Polygon-Mumbai/int256-array/int256-array.sol ':include :type=code :fragment=response')

### Need to send sensitive information?

!> Data entered into a smart contract is visible to the general public.

If you need to send sensitive information along with your HTTP request (ie, an API key), you can instead store this information off-chain on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started - once we receive your information, we'll provide you with a custom job ID that will send your sensitive data along with your request.

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/int256-array/int256-array.sol) of the above consumer contract.

### Troubleshooting

Having trouble with your request? Check our [Job Troubleshooting Guide](/faq/Chainlink-Users?id=job-troubleshooting).

!> This job has a configured gas limit of **500,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the above '**Oracle Address**' for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). 

### Still need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance with this request.

## Simulating the above request

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

After receiving the above sample response, our Chainlink node will attempt to filter the result by the provided `path` parameter value (`json,data,2`). After applying the provided path, we get the following array:

```
[-412.43,983.89,473.31]
```

#### 4. **Apply the multiplier**:

After filtering the sample response by the provided JSON path, our Chainlink node will multiply every element in the result array by the provided `multiplier` parameter value (`10 ** 18`). After applying this multiplier, we get the following array, which is ultimately written to your smart contract as a `int256[]` object by our Chainlink oracle:

```
[-412430000000000000000,983890000000000000000,473310000000000000000]
```

#### **Bool**

## Boolean Retrieval

This job initiates an HTTP `GET`, `POST`, `PUT`, or `DELETE` request to the internet, optionally parses a JSON-based response body for a boolean value at the given path, and returns the resulting object (**bool**) to your consumer contract.

?> This job returns a single **bool** object, which can store a `true` or `false` value. 

### Job details

| Oracle Address                             | Job ID                           | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | 43309009a154495cb2ed794233e6ff56 | 0 LINK |

### Request parameters

This job requires the following parameters to be set:

| Parameter | Type | Value example | Description |
|-------------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **method** | `string` | 'GET' | The HTTP method to use in initiating your request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | 'https://myRequestURL.com/path?var1=abc&var2=xyz' | The URL to which to send your HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, you must pass an empty string (''). |
| **body** | `string` | 'My request body' | A body to send with the HTTP request (`POST`, `PUT` requests only). If no body is desired or applicable, you must pass an empty string (''). |
| **path** | `string` | 'data,0,val' | The [JSON Path](https://jsonpath.com/) at which to extract the result returned by the requested HTTP endpoint (JSON results only). To return the full result without parsing, pass an empty string (''). If the provided path cannot be found in the response, the request will not be fulfilled. |
| **contact** | `string` | 'derek_linkwellnodes.io' | Enter your Discord handle here. This will allow communication from us regarding outages or other technical issues that we may notice with your request. If you prefer to stay anonymous, pass an empty string (''). |

### Implementing within your consumer contract

#### Add the constructor:

The constructor specifies important information about the request destination and payment for your request (varies by chain, oracle, and job): 

[bool_constructor](/Polygon-Mumbai/bool/bool.sol ':include :type=code :fragment=constructor')`

#### Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information, reference the above '**Request parameters**' section:

[bool_request](/Polygon-Mumbai/bool/bool.sol ':include :type=code :fragment=request')

#### Retrieve the response (example):

[bool_response](/Polygon-Mumbai/bool/bool.sol ':include :type=code :fragment=response')

### Need to send sensitive information?

!> Data entered into a smart contract is visible to the general public.

If you need to send sensitive information along with your HTTP request (ie, an API key), you can instead store this information off-chain on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started - once we receive your information, we'll provide you with a custom job ID that will send your sensitive data along with your request.

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/bool/bool.sol) of the above consumer contract.

### Troubleshooting

Having trouble with your request? Check our [Job Troubleshooting Guide](/faq/Chainlink-Users?id=job-troubleshooting).

!> This job has a configured gas limit of **500,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the above '**Oracle Address**' for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). 

### Still need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance with this request.

## Simulating the above request

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

#### **Bool[]**

## Boolean[]Retrieval

This job initiates an HTTP `GET`, `POST`, `PUT`, or `DELETE` request to the internet, optionally parses a JSON-based response body for an array of boolean values at the given path, and returns the resulting array of booleans (**bool[]**) to your consumer contract.

?> This job returns a single **bool[]** object, which can store an array of `true` or `false` values. 

### Job details

| Oracle Address                             | Job ID                           | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | 433ba6a76b374e2580dd43685a9de8c6 | 0 LINK |

### Request parameters

This job requires the following parameters to be set:

| Parameter | Type | Value example | Description |
|-------------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **method** | `string` | 'GET' | The HTTP method to use in initiating your request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | 'https://myRequestURL.com/path?var1=abc&var2=xyz' | The URL to which to send your HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, you must pass an empty string (''). |
| **body** | `string` | 'My request body' | A body to send with the HTTP request (`POST`, `PUT` requests only). If no body is desired or applicable, you must pass an empty string (''). |
| **path** | `string` | 'data,0,val' | The [JSON Path](https://jsonpath.com/) at which to extract the result returned by the requested HTTP endpoint (JSON results only). To return the full result without parsing, pass an empty string (''). If the provided path cannot be found in the response, the request will not be fulfilled. |
| **contact** | `string` | 'derek_linkwellnodes.io' | Enter your Discord handle here. This will allow communication from us regarding outages or other technical issues that we may notice with your request. If you prefer to stay anonymous, pass an empty string (''). |

### Implementing within your consumer contract

#### Add the constructor:

The constructor specifies important information about the request destination and payment for your request (varies by chain, oracle, and job): 

[bool-array_constructor](/Polygon-Mumbai/bool-array/bool-array.sol ':include :type=code :fragment=constructor')`

#### Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information, reference the above '**Request parameters**' section:

[bool-array_request](/Polygon-Mumbai/bool-array/bool-array.sol ':include :type=code :fragment=request')

#### Retrieve the response (example):

[bool-array_response](/Polygon-Mumbai/bool-array/bool-array.sol ':include :type=code :fragment=response')

### Need to send sensitive information?

!> Data entered into a smart contract is visible to the general public.

If you need to send sensitive information along with your HTTP request (ie, an API key), you can instead store this information off-chain on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started - once we receive your information, we'll provide you with a custom job ID that will send your sensitive data along with your request.

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/bool-array/bool-array.sol) of the above consumer contract.

### Troubleshooting

Having trouble with your request? Check our [Job Troubleshooting Guide](/faq/Chainlink-Users?id=job-troubleshooting).

!> This job has a configured gas limit of **500,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the above '**Oracle Address**' for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). 

### Still need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance with this request.

## Simulating the above request

Let's walk through each step of the above **sample request**, to better understand how it all works together:

#### 1. **Send the HTTP request**:

The following `curl` command simulates the same HTTP request that our Chainlink node makes shortly after you trigger the `request()` function within your consumer contract:

```
curl "https://httpbin.org/post" \
 --request 'POST' \
 --header 'content-type: application/json' \
 --header 'set-cookie: sid=14A52' \
 --data '{"data":[[false,false,true],[true,false,true],[false,false,false]]}'
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
            true,
            false,
            true
         ],
         [
            false,
            false,
            false
         ]
      ]
   }
}
```

#### 3. **Apply the JSON path**:

After receiving the above sample response, our Chainlink node will attempt to filter the result by the provided `path` parameter value (`json,data,1`). After applying the provided path, we get the following array, which is ultimately written to your smart contract as a `bool[]` object by our Chainlink oracle:

```
[true,false,true]
```

#### **String (Bytes) **

## String (Bytes) Retrieval

This job initiates an HTTP `GET`, `POST`, `PUT`, or `DELETE` request to the internet, optionally parses a JSON-based response body for a value at the given path, and returns the resulting dynamic bytes array (**bytes**) - which can also be represented as a **string** - to your consumer contract.

?> This job returns a single **bytes** object, which can readily be converted into a **string** value. 

### Job details

| Oracle Address                             | Job ID                           | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | 8ced832954544a3c98543c94a51d6a8d | 0 LINK |

### Request parameters

This job requires the following parameters to be set:

| Parameter | Type | Value example | Description |
|-------------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **method** | `string` | 'POST' | The HTTP method to use in initiating your request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | 'https://myRequestURL.com/path?var1=abc&var2=xyz' | The URL to which to send your HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, you must pass an empty string (''). |
| **body** | `string` | 'My request body' | A body to send with the HTTP request (`POST`, `PUT` requests only). If no body is desired or applicable, you must pass an empty string (''). |
| **path** | `string` | 'data,0,val' | The [JSON Path](https://jsonpath.com/) at which to extract the result returned by the requested HTTP endpoint (JSON results only). To return the full result without parsing, pass an empty string (''). If the provided path cannot be found in the response, the request will not be fulfilled. |
| **contact** | `string` | 'derek_linkwellnodes.io' | Enter your Discord handle here. This will allow communication from us regarding outages or other technical issues that we may notice with your request. If you prefer to stay anonymous, pass an empty string (''). |

### Implementing within your consumer contract

#### Add the constructor:

The constructor specifies important information about the request destination and payment for your request (varies by chain, oracle, and job): 

[string-bytes_constructor](/Polygon-Mumbai/string-bytes/string-bytes.sol ':include :type=code :fragment=constructor')`

#### Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information, reference the above '**Request parameters**' section:

[string-bytes_request](/Polygon-Mumbai/string-bytes/string-bytes.sol ':include :type=code :fragment=request')

#### Retrieve the response (example):

[string-bytes_response](/Polygon-Mumbai/string-bytes/string-bytes.sol ':include :type=code :fragment=response')

### Need to send sensitive information?

!> Data entered into a smart contract is visible to the general public.

If you need to send sensitive information along with your HTTP request (ie, an API key), you can instead store this information off-chain on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started - once we receive your information, we'll provide you with a custom job ID that will send your sensitive data along with your request.

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/string-bytes/string-bytes.sol) of the above consumer contract.

### Troubleshooting

Having trouble with your request? Check our [Job Troubleshooting Guide](/faq/Chainlink-Users?id=job-troubleshooting).

!> This job has a configured gas limit of **500,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the above '**Oracle Address**' for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing).   

### Still need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance with this request.

## Simulating the above request

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

?> Note that the double-quotes will not be present when retrieving the above response as a `string` object within your smart contract.

#### **String[] (Bytes[])**

## String[] (Bytes[]) Retrieval

This job initiates an HTTP `GET`, `POST`, `PUT`, or `DELETE` request to the internet, optionally parses a JSON-based response body for a value at the given path, and returns the resulting array of dynamic bytes arrays (**bytes[]**) - which can also be represented as a **string[]** - to your consumer contract.

?> This job returns a single **bytes[]** object, which can readily be converted into a **string[]** value. 

### Job details

| Oracle Address                             | Job ID                           | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | 07f761e26a284cb8b7ed67188dece6d4 | 0 LINK |

### Request parameters

This job requires the following parameters to be set:

| Parameter | Type | Value example | Description |
|-------------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **method** | `string` | 'POST' | The HTTP method to use in initiating your request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | 'https://myRequestURL.com/path?var1=abc&var2=xyz' | The URL to which to send your HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, you must pass an empty string (''). |
| **body** | `string` | 'My request body' | A body to send with the HTTP request (`POST`, `PUT` requests only). If no body is desired or applicable, you must pass an empty string (''). |
| **path** | `string` | 'data,0,val' | The [JSON Path](https://jsonpath.com/) at which to extract the result returned by the requested HTTP endpoint (JSON results only). To return the full result without parsing, pass an empty string (''). If the provided path cannot be found in the response, the request will not be fulfilled. |
| **contact** | `string` | 'derek_linkwellnodes.io' | Enter your Discord handle here. This will allow communication from us regarding outages or other technical issues that we may notice with your request. If you prefer to stay anonymous, pass an empty string (''). |

### Implementing within your consumer contract

#### Add the constructor:

The constructor specifies important information about the request destination and payment for your request (varies by chain, oracle, and job): 

[string-bytes-array_constructor](/Polygon-Mumbai/string-bytes-array/string-bytes-array.sol ':include :type=code :fragment=constructor')`

#### Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information, reference the above '**Request parameters**' section:

[string-bytes-array_request](/Polygon-Mumbai/string-bytes-array/string-bytes-array.sol ':include :type=code :fragment=request')

#### Retrieve the response (example):

[string-bytes-array_response](/Polygon-Mumbai/string-bytes-array/string-bytes-array.sol ':include :type=code :fragment=response')

### Need to send sensitive information?

!> Data entered into a smart contract is visible to the general public.

If you need to send sensitive information along with your HTTP request (ie, an API key), you can instead store this information off-chain on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started - once we receive your information, we'll provide you with a custom job ID that will send your sensitive data along with your request.

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/string-bytes-array/string-bytes-array.sol) of the above consumer contract.

### Troubleshooting

Having trouble with your request? Check our [Job Troubleshooting Guide](/faq/Chainlink-Users?id=job-troubleshooting).

!> This job has a configured gas limit of **500,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the above '**Oracle Address**' for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing).   

### Still need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance with this request.

## Simulating the above request

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

After receiving the above sample response, our Chainlink node will attempt to filter the result by the provided `path` parameter value (`json,data,0`). After applying the provided path, we get the following array, which is ultimately written to your smart contract as a `bytes[]` object (which can also be represented as a `string[]`) object by our Chainlink oracle:

```
["Coinbase","Binance","Kraken"]
```

?> Note that the double-quotes will not be present when retrieving any of the above array elements as a `string` within your smart contract. 

<!-- tabs:end -->