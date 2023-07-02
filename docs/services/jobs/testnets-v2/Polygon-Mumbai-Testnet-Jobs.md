## Polygon Mumbai Testnet Jobs
Mumbai network is a testnet that approximates the Polygon Mainnet, and uses Ethereum's Goerli testnet as its Layer 1 protocol.

Please see below for our Chainlink direct request job offerings on the Polygon-Mumbai network.  All testnet jobs are free to use, and do not require you to fund your contracts with the LINK token. If you run into any trouble, we are here to help! Head on over to our [**Discord**](https://discord.gg/AJ66pRz4), or feel free to contact us [**here**](https://linkwellnodes.io/Home.html#contact-us "Contact LinkWell Nodes")!

<!-- tabs:start -->
#### **Uint256**

This job initiates an HTTP `GET`, `POST`, `PUT`, or `DELETE` request to any public API, parses a JSON-based response body, multiplies this result by the given multiplier, and returns an unsigned integer (**uint256**) to your consumer contract.

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | a8356f48569c434eaa4ac5fcb4db5cc0 | 0 LINK                |

### Request parameters

This job requires the following parameters to be set:

| Parameter | Type | Value example | Description |
|-------------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **method** | `string` | "GET" | The HTTP method to use in initiating your request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | "https://tinyurl.com/yz4jtj6u" | The URL to which to send your HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, you must pass an empty string (""). |
| **body** | `string` | "My request body" | A body to send with the HTTP request (`POST`, `PUT` requests only). If no body is applicable or desired, you must pass an empty string (""). |
| **path** | `string` | "RAW,ETH,USD,VOLUME24HOUR" | The [JSON Path](https://jsonpath.com/) at which to extract the result returned by the requested HTTP endpoint (JSON results only). To return the full result without parsing, pass an empty string (""). |
| **multiplier** | `int256` | 10 ** 18 | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. If no multiplication is desired, enter 1. |
| **contact** | `string` | "derek_linkwellnodes.io" | Enter your Discord handle here. This will allow communication from us regarding outages or other technical issues that we may notice with your request. If you prefer to stay anonymous, pass an empty string (""). |

### Implementing within your consumer contract

#### Add the constructor:

The constructor specifies important information about the request destination and payment (varies by chain, oracle, and job): 

[uint256_constructor_mmt](/Polygon-Mumbai/uint256/uint256.sol ':include :type=code :fragment=constructor')`

#### Add your request function (example):
The 'request' function specifies the parameters to be sent over with your Chainlink request. For detailed information, reference the above '**Request parameters**' section:

[uint256_request_mmt](/Polygon-Mumbai/uint256/uint256.sol ':include :type=code :fragment=request')

?> Need to send **sensitive data**?

Data sent by your consumer contract is visible to the general public.

If you need to send sensitive information along with your HTTP request (ie, an API key), you can instead store your sensitive details off-chain, on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started - once we receive your information, we'll provide you with a custom job ID that will allow your request to access your sensitive data. 


#### Retrieve the response (example):

[uint256_request_mmt](/Polygon-Mumbai/uint256/uint256.sol ':include :type=code :fragment=response')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/uint256/uint256.sol) of the above consumer contract.

### Need more help?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.


#### **Uint256, Uint256**


#### **Uint256[]**


#### **Int256**


#### **Bool**


#### **Bytes (String) **


#### **Bytes, Bytes (String, String)**


#### **Bytes[] (String[])**


<!-- tabs:end -->