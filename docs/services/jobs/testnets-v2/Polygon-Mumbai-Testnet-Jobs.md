## Polygon Mumbai Testnet Jobs
Mumbai network is a testnet that approximates the Polygon Mainnet, and uses Ethereum's Goerli testnet as its Layer 1 protocol.

Please see below for our Chainlink direct request job offerings on the Polygon-Mumbai network. All testnet jobs are free to use, and do not require you to fund your contracts with the LINK token. If you run into any trouble, we are here to help! Head on over to our [Discord](https://discord.gg/AJ66pRz4), or feel free to contact us [**here**](https://linkwellnodes.io/Home.html#contact-us "Contact LinkWell Nodes")!

### Select the type of data that you need:

<!-- tabs:start -->
#### **Uint256**

## Uint256 Retrieval

This job initiates an HTTP `GET`, `POST`, `PUT`, or `DELETE` request to the internet, optionally parses a JSON-based response body for a numeric value at the given path, multiplies this value by the given multiplier, and returns the resulting unsigned 256-bit integer (**uint256**) to your consumer contract.

?> This job returns a single **uint256** object, which can store any integer from `0` to `115792089237316195423570985008687907853269984665640564039457584007913129639935`. 

### Job details

| Oracle Address                             | Job ID                           | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | a8356f48569c434eaa4ac5fcb4db5cc0 | 0 LINK |

### Request parameters

This job requires the following parameters to be set:

| Parameter | Type | Value example | Description |
|-------------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **method** | `string` | "GET" | The HTTP method to use in initiating your request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | "https://tinyurl.com/yz4jtj6u" | The URL to which to send your HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, you must pass an empty string (""). |
| **body** | `string` | "My request body" | A body to send with the HTTP request (`POST`, `PUT` requests only). If no body is desired or applicable, you must pass an empty string (""). |
| **path** | `string` | "RAW,ETH,USD,PRICE" | The [JSON Path](https://jsonpath.com/) at which to extract the result returned by the requested HTTP endpoint (JSON results only). To return the full result without parsing, pass an empty string (""). |
| **multiplier** | `int256` | 10 ** 18 | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. If no multiplication is desired, enter 1. |
| **contact** | `string` | "derek_linkwellnodes.io" | Enter your Discord handle here. This will allow communication from us regarding outages or other technical issues that we may notice with your request. If you prefer to stay anonymous, pass an empty string (""). |

### Implementing within your consumer contract

#### Add the constructor:

The constructor specifies important information about the request destination and payment (varies by chain, oracle, and job): 

[uint256_constructor_mmt](/Polygon-Mumbai/uint256/uint256.sol ':include :type=code :fragment=constructor')`

#### Add your request function (example):
The 'request' function specifies the parameters to be sent over with your Chainlink request. For detailed information, reference the above '**Request parameters**' section:

[uint256_request_mmt](/Polygon-Mumbai/uint256/uint256.sol ':include :type=code :fragment=request')

?> Need to send **sensitive information**?

Data sent by your consumer contract is visible to the general public.

If you need to send sensitive information along with your HTTP request (ie, an API key), you can instead store your sensitive data off-chain, on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started - once we receive your information, we'll provide you with a custom job ID that will send your sensitive data along with your request.


#### Retrieve the response (example):

[uint256_response_mmt](/Polygon-Mumbai/uint256/uint256.sol ':include :type=code :fragment=response')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/uint256/uint256.sol) of the above consumer contract.

### Simulating the above request

Let's simulate the above request example using a `curl` command:

Send the request:
```
curl --insecure --request GET --header "content-type: application/json" --header "set-cookie: sid=14A52" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"
```

Analyze the response:

### Troubleshooting

Having trouble with your request? Check our [Job Troubleshooting Guide](/faq/Chainlink-Users?id=job-troubleshooting).

!> This job has a configured gas limit of **500,000** for writing your resulting data on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the below 'Oracle Address' to see if any recent transactions failed due to an **'out of gas'** error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). 

### Still need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance in creating this request.


#### **Uint256, Uint256**


#### **Uint256[]**


#### **Int256**


#### **Bool**


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
| **method** | `string` | "POST" | The HTTP method to use in initiating your request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | "https://httpbin.org/post" | The URL to which to send your HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, you must pass an empty string (""). |
| **body** | `string` | '{"userId": 123, "address": "527 Madison Ave"}' | A body to send with the HTTP request (`POST`, `PUT` requests only). If no body is desired or applicable, you must pass an empty string (""). |
| **path** | `string` | "json,address" | The [JSON Path](https://jsonpath.com/) at which to extract the result returned by the requested HTTP endpoint (JSON results only). To return the full result without parsing, pass an empty string (""). |
| **contact** | `string` | "derek_linkwellnodes.io" | Enter your Discord handle here. This will allow communication from us regarding outages or other technical issues that we may notice with your request. If you prefer to stay anonymous, pass an empty string (""). |

### Implementing within your consumer contract

#### Add the constructor:

The constructor specifies important information about the request destination and payment (varies by chain, oracle, and job): 

[string-bytes_constructor_mmt](/Polygon-Mumbai/string-bytes/string-bytes.sol ':include :type=code :fragment=constructor')`

#### Add your request function (example):
The 'request' function specifies the parameters to be sent over with your Chainlink request. For detailed information, reference the above '**Request parameters**' section:

[string-bytes_request_mmt](/Polygon-Mumbai/string-bytes/string-bytes.sol ':include :type=code :fragment=request')

?> Need to send **sensitive information**?

Data sent by your consumer contract is visible to the general public.

If you need to send sensitive information along with your HTTP request (ie, an API key), you can instead store your sensitive data off-chain, on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started - once we receive your information, we'll provide you with a custom job ID that will send your sensitive data along with your request.


#### Retrieve the response (example):

[string-bytes_response_mmt](/Polygon-Mumbai/string-bytes/string-bytes.sol ':include :type=code :fragment=response')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/string-bytes/string-bytes.sol) of the above consumer contract.

### Troubleshooting

Having trouble with your request? Check our [Job Troubleshooting Guide](/faq/Chainlink-Users?id=job-troubleshooting).

!> This job has a configured gas limit of **500,000** for writing your resulting data on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the below 'Oracle Address' to see if any recent transactions failed due to an **'out of gas'** error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing).   

### Still need more help?

Please reach out to us in [Discord](httpsiscord.gg/AJ66pRz4) if you require additional assistance in creating this request.


#### **String, String (Bytes, Bytes)**


#### **String[] (Bytes[])**

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
| **method** | `string` | "POST" | The HTTP method to use in initiating your request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | "https://httpbin.org/post" | The URL to which to send your HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, you must pass an empty string (""). |
| **body** | `string` | '["Coinbase","Binance","Kraken"]' | A body to send with the HTTP request (`POST`, `PUT` requests only). If no body is desired or applicable, you must pass an empty string (""). |
| **path** | `string` | "json,address" | The [JSON Path](https://jsonpath.com/) at which to extract the result returned by the requested HTTP endpoint (JSON results only). To return the full result without parsing, pass an empty string (""). |
| **contact** | `string` | "derek_linkwellnodes.io" | Enter your Discord handle here. This will allow communication from us regarding outages or other technical issues that we may notice with your request. If you prefer to stay anonymous, pass an empty string (""). |

### Implementing within your consumer contract

#### Add the constructor:

The constructor specifies important information about the request destination and payment (varies by chain, oracle, and job): 

[string-bytes-array_constructor_mmt](/Polygon-Mumbai/string-bytes-array/string-bytes-array.sol ':include :type=code :fragment=constructor')`

#### Add your request function (example):
The 'request' function specifies the parameters to be sent over with your Chainlink request. For detailed information, reference the above '**Request parameters**' section:

[string-bytes-array_request_mmt](/Polygon-Mumbai/string-bytes-array/string-bytes-array.sol ':include :type=code :fragment=request')

?> Need to send **sensitive information**?

Data sent by your consumer contract is visible to the general public.

If you need to send sensitive information along with your HTTP request (ie, an API key), you can instead store your sensitive data off-chain, on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started - once we receive your information, we'll provide you with a custom job ID that will send your sensitive data along with your request.


#### Retrieve the response (example):

[string-bytes-array_response_mmt](/Polygon-Mumbai/string-bytes-array/string-bytes-array.sol ':include :type=code :fragment=response')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/string-bytes-array/string-bytes-array.sol) of the above consumer contract.

### Troubleshooting

Having trouble with your request? Check our [Job Troubleshooting Guide](/faq/Chainlink-Users?id=job-troubleshooting).

!> This job has a configured gas limit of **500,000** for writing your resulting data on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the below 'Oracle Address' to see if any recent transactions failed due to an **'out of gas'** error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing).   

### Still need more help?

Please reach out to us in [Discord](httpsiscord.gg/AJ66pRz4) if you require additional assistance in creating this request.

<!-- tabs:end -->