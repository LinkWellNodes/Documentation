## Polygon Mumbai Testnet Jobs
Mumbai network is a testnet that approximates the Polygon Mainnet, and uses Ethereum's Goerli testnet as its Layer 1 protocol.

Please see below for our Chainlink direct request job offerings on the Polygon-Mumbai network.  All testnet jobs are free to use, and do not require you to prefund your contracts with the LINK token.  If you run into any trouble, we are here to help!  Head on over to our [**Discord**](https://discord.gg/AJ66pRz4), or feel free to contact us [**here**](https://linkwellnodes.io/Home.html#contact-us "Contact LinkWell Nodes")!

<!-- tabs:start -->
#### **Uint256**

This job initiates an HTTP `GET`, `POST`, `PUT`, or `DELETE` request to any public API, parses a JSON-based response body, multiplies this result by the given multiplier, and returns an unsigned integer (**uint256**) to your consumer contract.

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | f4821ba2e8ae4ddba52ea6860887df96 | 0 LINK                |

### Request parameters

This job requires the following parameters to be set:

| Parameter | Type | Value example | Description |
|-------------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **contact** | `string` | "derek_linkwellnodes.io" | Enter your Discord handle here. This will ensure rapid communication from us surrounding outages and other technical issues that we may notice with your request. If you prefer to stay anonymous, pass an empty string (""). |
| **method** | `string` | "GET" | The HTTP method to use in initiating the request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | "https://tinyurl.com/yz4jtj6u" | The URL to which to send the HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, pass an empty string (""). To pass secret value(s) in your headers that you'd like to protect from being broadcast on-chain (ie, an API key), please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html). We'll send you a custom job ID and store your sensitive information securely off-chain. |
| **body** | `string` | "My request body" | A body to send with the HTTP request. If no body is desired or applicable (as in the case of `GET` and `DELETE` requests), pass an empty string (""). To pass secret value(s) in your body that you'd like to protect from being broadcast on-chain (ie, an API key), please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html). We'll send you a custom job ID and store your sensitive information securely off-chain. |
| **path** | `string` | "RAW,ETH,USD,VOLUME24HOUR" | The [JSON Path](https://jsonpath.com/) at which to extract the result returned by the requested HTTP endpoint. This path must point to a JSON type that corresponds to the response type your contract is looking for (ie, if your contract is expecting a uint256 result, this path must point to a number). To return the full JSON result without parsing, pass an empty string. |
| **multiplier** | `int256` | 10 ** 18 | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. If no multiplication is desired, enter 1. |

### Implementing within your consumer contract

#### Add the constructor:

The constructor within your consumer contract specifies important information about the request destination and payment (varies by chain, oracle, and job): 

[uint256_constructor_mmt](/Polygon-Mumbai/uint256/uint256.sol ':include :type=code :fragment=constructor')`

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request. For detailed information, reference the above '**Request parameters**' section:

[uint256_request_mmt](/Polygon-Mumbai/uint256/uint256.sol ':include :type=code :fragment=request')

#### Retrieve the response (example):

[uint256_request_mmt](/Polygon-Mumbai/uint256/uint256.sol ':include :type=code :fragment=response')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/get_uint256/get_uint256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/get_uint256/get_uint256.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.


#### **Uint256, Uint256**


#### **Uint256[]**


#### **Int256**


#### **Bool**


#### **Bytes**


#### **String**


#### **String, String**



#### **Bytes[]**


<!-- tabs:end -->