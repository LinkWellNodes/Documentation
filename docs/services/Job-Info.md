# Public Job Listings

## Mainnets

Please [**contact us**](https://linkwellnodes.io/Home.html#contact-us "Contact LinkWell Nodes") for mainnet job requests and pricing.

## Testnets
Please see below for our list of currently supported networks, along with their associated operator contracts and job IDs.  All testnet jobs are free to use, and do not require you to prefund your contracts with the LINK token.  If you run into any trouble, we are here to help!  Head on over to our [**Discord**](https://discord.gg/AJ66pRz4), or feel free to contact us [**here**](https://linkwellnodes.io/Home.html#contact-us "Contact LinkWell Nodes")!
<!-- tabs:start -->

### **Ethereum-Sepolia**
Sepolia is a proof-of-stake testnet, and is the recommended default Ethereum testnet for application development.

<!-- tabs:start -->
#### **GET > Uint256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer (**uint256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B | f4821ba2e8ae4ddba52ea6860887df96 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_uint256) for an example of a client contract.

#### **GET > Uint256 No Multiply**

HTTP GET to any public API which parses the response and returns an unsigned integer (**uint256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B | 65cfa14a158540e1a8a94f9a33163839 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_uint256_no_multiply) for an example of a client contract.

#### **GET > Int256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns a signed integer (**int256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B | 339ac1ad0a864ea7b94811de8a362a64 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_int256) for an example of a client contract.

#### **GET > Bool**

HTTP GET to any public API which parses the response and returns a boolean (**bool**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B | 2e0a430bcd2b482d8462fdcc5224fba1 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_bool) for an example of a client contract.

#### **GET > Bytes**

HTTP GET to any public API which parses the response and returns arbitrary-length raw byte data (**bytes**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B | 5b48fe6ac244436bb5ad689ab64ef28b | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_bytes) for an example of a client contract.

#### **GET > String**

HTTP GET to any public API which parses the response and returns a sequence of characters (**string**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B | 1cc553d092584937bfe9be9a3dd4c1f6 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_string) for an example of a client contract.

#### **GET > Uint256 x 2**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns two unsigned integers of type (**uint256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B | fe82fb4d00794483a1cf5ed23bd5e1b7 | 0 LINK                |

This job requires the following paramaters to be set:
* `url1`: The first URL to make the HTTP request to.
* `url2`: The second URL to make the HTTP request to.
* `path1`: The first [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `path2`: The second [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_uint256_x2) for an example of a client contract.

#### **GET > Uint256[]**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer array (**uint256[]**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B | 9a2ba54374f34184bdc6390db3171994 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_uint256_array) for an example of a client contract.

#### **GET > Bytes[]**

HTTP GET to any public API which parses the response and returns an arbitrary-length raw byte data array (**bytes[]**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B | 332c0b46e57f49cd8c7d74cdbe5106ab | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_bytes_array) for an example of a client contract.

#### **POST > Bytes**

HTTP POST to any public API which parses the response and returns arbitrary-length raw byte data (**bytes**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B | b3390c03bfc24b42a0b0ab8051471bbb | 0 LINK                |

This job requires the following paramaters to be set:
* `post`: The URL to make the HTTP request to.
* `requestData`: A statically-defined JSON payload to be sent to the defined URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Ethereum-Sepolia/post_bytes) for an example of a client contract.

#### **POST > Uint256**

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B](https://sepolia.etherscan.io/address/0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B) | b090204b16644030844a6e91932a7626 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **post** | Yes | String | `"https://min-api.cryptocompare.com/data/price"` | The URL to which to send the HTTP request for data                                                                                          |
| **requestData** | Yes | String | `'{"fsym": "ETH", "tsyms": "USD"}'` | A statically-defined JSON body to be sent to the defined URL. Must enter "{}" if no request body is to be sent |
| **path** | Yes | String | `"USD"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `100` | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X POST -H "content-type:application/json" "https://min-api.cryptocompare.com/data/price" --data '{ "fsym": "ETH", "tsyms": "USD"  }'`
* Sample response from the HTTP endpoint: `{"USD":1892.84}`
* Sample response from the Chainlink oracle: `189284`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[post_uint256_constructor_binance](#services/jobs/testnets/Ethereum-Sepolia/post_uint256/post_uint256.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[post_uint256_request_binance](#services/jobs/testnets/Ethereum-Sepolia/post_uint256/post_uint256.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/post_uint256/post_uint256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/post_uint256/post_uint256.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

<!-- tabs:end -->

### **Ethereum-Goerli**
Goerli is a proof-of-stake testnet, and is the recommended default Ethereum testnet for testing of validating and staking.

<!-- tabs:start -->
#### **GET > Uint256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer (**uint256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xB9C47B9609174716CE536324d4FbEad9292c1d3a | f4821ba2e8ae4ddba52ea6860887df96 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Ethereum-Goerli/get_uint256) for an example of a client contract.

#### **GET > Uint256 No Multiply**

HTTP GET to any public API which parses the response and returns an unsigned integer (**uint256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xB9C47B9609174716CE536324d4FbEad9292c1d3a | 65cfa14a158540e1a8a94f9a33163839 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Ethereum-Goerli/get_uint256_no_multiply) for an example of a client contract.

#### **GET > Int256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns a signed integer (**int256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xB9C47B9609174716CE536324d4FbEad9292c1d3a | 339ac1ad0a864ea7b94811de8a362a64 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Ethereum-Goerli/get_int256) for an example of a client contract.

#### **GET > Bool**

HTTP GET to any public API which parses the response and returns a boolean (**bool**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xB9C47B9609174716CE536324d4FbEad9292c1d3a | 2e0a430bcd2b482d8462fdcc5224fba1 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Ethereum-Goerli/get_bool) for an example of a client contract.

#### **GET > Bytes**

HTTP GET to any public API which parses the response and returns arbitrary-length raw byte data (**bytes**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xB9C47B9609174716CE536324d4FbEad9292c1d3a | 5b48fe6ac244436bb5ad689ab64ef28b | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Ethereum-Goerli/get_bytes) for an example of a client contract.

#### **GET > String**

HTTP GET to any public API which parses the response and returns a sequence of characters (**string**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xB9C47B9609174716CE536324d4FbEad9292c1d3a | 1cc553d092584937bfe9be9a3dd4c1f6 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Ethereum-Goerli/get_string) for an example of a client contract.

#### **GET > Uint256 x 2**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns two unsigned integers of type (**uint256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xB9C47B9609174716CE536324d4FbEad9292c1d3a | fe82fb4d00794483a1cf5ed23bd5e1b7 | 0 LINK                |

This job requires the following paramaters to be set:
* `url1`: The first URL to make the HTTP request to.
* `url2`: The second URL to make the HTTP request to.
* `path1`: The first [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `path2`: The second [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Ethereum-Goerli/get_uint256_x2) for an example of a client contract.

#### **GET > Uint256[]**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer array (**uint256[]**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xB9C47B9609174716CE536324d4FbEad9292c1d3a | 9a2ba54374f34184bdc6390db3171994 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Ethereum-Goerli/get_uint256_array) for an example of a client contract.

#### **GET > Bytes[]**

HTTP GET to any public API which parses the response and returns an arbitrary-length raw byte data array (**bytes[]**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xB9C47B9609174716CE536324d4FbEad9292c1d3a | 332c0b46e57f49cd8c7d74cdbe5106ab | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Ethereum-Goerli/get_bytes_array) for an example of a client contract.

#### **POST > Bytes**

HTTP POST to any public API which parses the response and returns arbitrary-length raw byte data (**bytes**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xB9C47B9609174716CE536324d4FbEad9292c1d3a | b3390c03bfc24b42a0b0ab8051471bbb | 0 LINK                |

This job requires the following paramaters to be set:
* `post`: The URL to make the HTTP request to.
* `requestData`: A statically-defined JSON payload to be sent to the defined URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Ethereum-Goerli/post_bytes) for an example of a client contract.

#### **POST > Uint256**

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xB9C47B9609174716CE536324d4FbEad9292c1d3a](https://goerli.etherscan.io/address/0xB9C47B9609174716CE536324d4FbEad9292c1d3a) | b090204b16644030844a6e91932a7626 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **post** | Yes | String | `"https://min-api.cryptocompare.com/data/price"` | The URL to which to send the HTTP request for data                                                                                          |
| **requestData** | Yes | String | `'{"fsym": "ETH", "tsyms": "USD"}'` | A statically-defined JSON body to be sent to the defined URL. Must enter "{}" if no request body is to be sent |
| **path** | Yes | String | `"USD"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `100` | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X POST -H "content-type:application/json" "https://min-api.cryptocompare.com/data/price" --data '{ "fsym": "ETH", "tsyms": "USD"  }'`
* Sample response from the HTTP endpoint: `{"USD":1892.84}`
* Sample response from the Chainlink oracle: `189284`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[post_uint256_constructor_binance](#services/jobs/testnets/Ethereum-Goerli/post_uint256/post_uint256.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[post_uint256_request_binance](#services/jobs/testnets/Ethereum-Goerli/post_uint256/post_uint256.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/post_uint256/post_uint256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/post_uint256/post_uint256.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

<!-- tabs:end -->

### **Polygon-Mumbai**
Mumbai network is a testnet that approximates the Polygon Mainnet, and uses Ethereum's Goerli testnet as its Layer 1 protocol.

<!-- tabs:start -->
#### **GET > Uint256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer (**uint256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x12A3d7759F745f4cb8EE8a647038c040cB8862A5 | f4821ba2e8ae4ddba52ea6860887df96 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Polygon-Mumbai/get_uint256) for an example of a client contract.

#### **GET > Uint256 No Multiply**

HTTP GET to any public API which parses the response and returns an unsigned integer (**uint256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x12A3d7759F745f4cb8EE8a647038c040cB8862A5 | 65cfa14a158540e1a8a94f9a33163839 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Polygon-Mumbai/get_uint256_no_multiply) for an example of a client contract.

#### **GET > Int256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns a signed integer (**int256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x12A3d7759F745f4cb8EE8a647038c040cB8862A5 | 339ac1ad0a864ea7b94811de8a362a64 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Polygon-Mumbai/get_int256) for an example of a client contract.

#### **GET > Bool**

HTTP GET to any public API which parses the response and returns a boolean (**bool**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x12A3d7759F745f4cb8EE8a647038c040cB8862A5 | 2e0a430bcd2b482d8462fdcc5224fba1 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Polygon-Mumbai/get_bool) for an example of a client contract.

#### **GET > Bytes**

HTTP GET to any public API which parses the response and returns arbitrary-length raw byte data (**bytes**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x12A3d7759F745f4cb8EE8a647038c040cB8862A5 | 5b48fe6ac244436bb5ad689ab64ef28b | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Polygon-Mumbai/get_bytes) for an example of a client contract.

#### **GET > String**

HTTP GET to any public API which parses the response and returns a sequence of characters (**string**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x12A3d7759F745f4cb8EE8a647038c040cB8862A5 | 1cc553d092584937bfe9be9a3dd4c1f6 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Polygon-Mumbai/get_string) for an example of a client contract.

#### **GET > Uint256 x 2**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns two unsigned integers of type (**uint256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x12A3d7759F745f4cb8EE8a647038c040cB8862A5 | fe82fb4d00794483a1cf5ed23bd5e1b7 | 0 LINK                |

This job requires the following paramaters to be set:
* `url1`: The first URL to make the HTTP request to.
* `url2`: The second URL to make the HTTP request to.
* `path1`: The first [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `path2`: The second [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Polygon-Mumbai/get_uint256_x2) for an example of a client contract.

#### **GET > Uint256[]**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer array (**uint256[]**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x12A3d7759F745f4cb8EE8a647038c040cB8862A5 | 9a2ba54374f34184bdc6390db3171994 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Polygon-Mumbai/get_uint256_array) for an example of a client contract.

#### **GET > Bytes[]**

HTTP GET to any public API which parses the response and returns an arbitrary-length raw byte data array (**bytes[]**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x12A3d7759F745f4cb8EE8a647038c040cB8862A5 | 332c0b46e57f49cd8c7d74cdbe5106ab | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Polygon-Mumbai/get_bytes_array) for an example of a client contract.

#### **POST > Bytes**

HTTP POST to any public API which parses the response and returns arbitrary-length raw byte data (**bytes**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x12A3d7759F745f4cb8EE8a647038c040cB8862A5 | b3390c03bfc24b42a0b0ab8051471bbb | 0 LINK                |

This job requires the following paramaters to be set:
* `post`: The URL to make the HTTP request to.
* `requestData`: A statically-defined JSON payload to be sent to the defined URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Polygon-Mumbai/post_bytes) for an example of a client contract.

#### **POST > Uint256**

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | b090204b16644030844a6e91932a7626 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **post** | Yes | String | `"https://min-api.cryptocompare.com/data/price"` | The URL to which to send the HTTP request for data                                                                                          |
| **requestData** | Yes | String | `'{"fsym": "ETH", "tsyms": "USD"}'` | A statically-defined JSON body to be sent to the defined URL. Must enter "{}" if no request body is to be sent |
| **path** | Yes | String | `"USD"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `100` | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X POST -H "content-type:application/json" "https://min-api.cryptocompare.com/data/price" --data '{ "fsym": "ETH", "tsyms": "USD"  }'`
* Sample response from the HTTP endpoint: `{"USD":1892.84}`
* Sample response from the Chainlink oracle: `189284`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[post_uint256_constructor_binance](#services/jobs/testnets/Polygon-Mumbai/post_uint256/post_uint256.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[post_uint256_request_binance](#services/jobs/testnets/Polygon-Mumbai/post_uint256/post_uint256.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/post_uint256/post_uint256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/post_uint256/post_uint256.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

<!-- tabs:end -->

### **Arbitrum-Goerli**
Arbitrum Goerli is the testnet of Layer 2 rollup chain Arbitrum One, and uses Ethereum's Goerli testnet network as its Layer 1 protocol.

<!-- tabs:start -->
#### **GET > Uint256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer (**uint256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | f4821ba2e8ae4ddba52ea6860887df96 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_uint256) for an example of a client contract.

#### **GET > Uint256 No Multiply**

HTTP GET to any public API which parses the response and returns an unsigned integer (**uint256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 65cfa14a158540e1a8a94f9a33163839 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_uint256_no_multiply) for an example of a client contract.

#### **GET > Int256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns a signed integer (**int256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 339ac1ad0a864ea7b94811de8a362a64 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_int256) for an example of a client contract.

#### **GET > Bool**

HTTP GET to any public API which parses the response and returns a boolean (**bool**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 2e0a430bcd2b482d8462fdcc5224fba1 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_bool) for an example of a client contract.

#### **GET > Bytes**

HTTP GET to any public API which parses the response and returns arbitrary-length raw byte data (**bytes**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 5b48fe6ac244436bb5ad689ab64ef28b | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_bytes) for an example of a client contract.

#### **GET > String**

HTTP GET to any public API which parses the response and returns a sequence of characters (**string**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 1cc553d092584937bfe9be9a3dd4c1f6 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_string) for an example of a client contract.

#### **GET > Uint256 x 2**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns two unsigned integers of type **uint256**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | fe82fb4d00794483a1cf5ed23bd5e1b7 | 0 LINK                |

This job requires the following paramaters to be set:
* `url1`: The first URL to make the HTTP request to.
* `url2`: The second URL to make the HTTP request to.
* `path1`: The first [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `path2`: The second [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_uint256_x2) for an example of a client contract.

#### **GET > Uint256[]**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer array (**uint256[]**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 9a2ba54374f34184bdc6390db3171994 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_uint256_array) for an example of a client contract.

#### **GET > Bytes[]**

HTTP GET to any public API which parses the response and returns an arbitrary-length raw byte data array (**bytes[]**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 332c0b46e57f49cd8c7d74cdbe5106ab | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_bytes_array) for an example of a client contract.

#### **POST > Bytes**

HTTP POST to any public API which parses the response and returns arbitrary-length raw byte data (**bytes**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | b3390c03bfc24b42a0b0ab8051471bbb | 0 LINK                |

This job requires the following paramaters to be set:
* `post`: The URL to make the HTTP request to.
* `requestData`: A statically-defined JSON payload to be sent to the defined URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Arbitrum-Goerli/post_bytes) for an example of a client contract.

#### **POST > Uint256**

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://testnet.arbiscan.io/address/0xd08FEb8203E76f836D74608595346ab6b0f768C9) | b090204b16644030844a6e91932a7626 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **post** | Yes | String | `"https://min-api.cryptocompare.com/data/price"` | The URL to which to send the HTTP request for data                                                                                          |
| **requestData** | Yes | String | `'{"fsym": "ETH", "tsyms": "USD"}'` | A statically-defined JSON body to be sent to the defined URL. Must enter "{}" if no request body is to be sent |
| **path** | Yes | String | `"USD"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `100` | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X POST -H "content-type:application/json" "https://min-api.cryptocompare.com/data/price" --data '{ "fsym": "ETH", "tsyms": "USD"  }'`
* Sample response from the HTTP endpoint: `{"USD":1892.84}`
* Sample response from the Chainlink oracle: `189284`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[post_uint256_constructor_binance](#services/jobs/testnets/Arbitrum-Goerli/post_uint256/post_uint256.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[post_uint256_request_binance](#services/jobs/testnets/Arbitrum-Goerli/post_uint256/post_uint256.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/post_uint256/post_uint256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/post_uint256/post_uint256.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

<!-- tabs:end -->

### **Avalanche-Fuji**

<!-- tabs:start -->
#### **GET > Uint256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer (**uint256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406 | f4821ba2e8ae4ddba52ea6860887df96 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Avalanche-Fuji/get_uint256) for an example of a client contract.

#### **GET > Uint256 No Multiply**

HTTP GET to any public API which parses the response and returns an unsigned integer (**uint256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406 | 65cfa14a158540e1a8a94f9a33163839 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Avalanche-Fuji/get_uint256_no_multiply) for an example of a client contract.

#### **GET > Int256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns a signed integer (**int256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406 | 339ac1ad0a864ea7b94811de8a362a64 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Avalanche-Fuji/get_int256) for an example of a client contract.

#### **GET > Bool**

HTTP GET to any public API which parses the response and returns a boolean (**bool**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406 | 2e0a430bcd2b482d8462fdcc5224fba1 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Avalanche-Fuji/get_bool) for an example of a client contract.

#### **GET > Bytes**

HTTP GET to any public API which parses the response and returns arbitrary-length raw byte data (**bytes**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406 | 5b48fe6ac244436bb5ad689ab64ef28b | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Avalanche-Fuji/get_bytes) for an example of a client contract.

#### **GET > String**

HTTP GET to any public API which parses the response and returns a sequence of characters (**string**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406 | 1cc553d092584937bfe9be9a3dd4c1f6 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Avalanche-Fuji/get_string) for an example of a client contract.

#### **GET > Uint256 x 2**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns two unsigned integers of type **uint256**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406 | fe82fb4d00794483a1cf5ed23bd5e1b7 | 0 LINK                |

This job requires the following paramaters to be set:
* `url1`: The first URL to make the HTTP request to.
* `url2`: The second URL to make the HTTP request to.
* `path1`: The first [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `path2`: The second [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Avalanche-Fuji/get_uint256_x2) for an example of a client contract.

#### **GET > Uint256[]**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer array (**uint256[]**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406 | 9a2ba54374f34184bdc6390db3171994 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Avalanche-Fuji/get_uint256_array) for an example of a client contract.

#### **GET > Bytes[]**

HTTP GET to any public API which parses the response and returns an arbitrary-length raw byte data array (**bytes[]**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406 | 332c0b46e57f49cd8c7d74cdbe5106ab | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Avalanche-Fuji/get_bytes_array) for an example of a client contract.

#### **POST > Bytes**

HTTP POST to any public API which parses the response and returns arbitrary-length raw byte data (**bytes**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406 | b3390c03bfc24b42a0b0ab8051471bbb | 0 LINK                |

This job requires the following paramaters to be set:
* `post`: The URL to make the HTTP request to.
* `requestData`: A statically-defined JSON payload to be sent to the defined URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Avalanche-Fuji/post_bytes) for an example of a client contract.

#### **POST > Uint256**

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406](https://testnet.snowtrace.io/address/0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406) | b090204b16644030844a6e91932a7626 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **post** | Yes | String | `"https://min-api.cryptocompare.com/data/price"` | The URL to which to send the HTTP request for data                                                                                          |
| **requestData** | Yes | String | `'{"fsym": "ETH", "tsyms": "USD"}'` | A statically-defined JSON body to be sent to the defined URL. Must enter "{}" if no request body is to be sent |
| **path** | Yes | String | `"USD"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `100` | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X POST -H "content-type:application/json" "https://min-api.cryptocompare.com/data/price" --data '{ "fsym": "ETH", "tsyms": "USD"  }'`
* Sample response from the HTTP endpoint: `{"USD":1892.84}`
* Sample response from the Chainlink oracle: `189284`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[post_uint256_constructor_](#services/jobs/testnets/Avalanche-Fuji/post_uint256/post_uint256.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[post_uint256_request_](#services/jobs/testnets/Avalanche-Fuji/post_uint256/post_uint256.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/post_uint256/post_uint256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/post_uint256/post_uint256.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

<!-- tabs:end -->

### **Binance-Testnet**
Binance Smart Chain's testnet is a test environment for BNB Smart Chain mainnet network, run by the BNB Chain development community.
<!-- tabs:start -->

#### **GET > Uint256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer (**uint256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | f4821ba2e8ae4ddba52ea6860887df96 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Binance-Testnet/get_uint256) for an example of a client contract.

#### **GET > Uint256 No Multiply**

HTTP GET to any public API which parses the response and returns an unsigned integer (**uint256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 65cfa14a158540e1a8a94f9a33163839 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Binance-Testnet/get_uint256_no_multiply) for an example of a client contract.

#### **GET > Int256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns a signed integer (**int256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 339ac1ad0a864ea7b94811de8a362a64 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Binance-Testnet/get_int256) for an example of a client contract.

#### **GET > Bool**

HTTP GET to any public API which parses the response and returns a boolean (**bool**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 2e0a430bcd2b482d8462fdcc5224fba1 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Binance-Testnet/get_bool) for an example of a client contract.

#### **GET > Bytes**

HTTP GET to any public API which parses the response and returns arbitrary-length raw byte data (**bytes**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 5b48fe6ac244436bb5ad689ab64ef28b | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Binance-Testnet/get_bytes) for an example of a client contract.

#### **GET > String**

HTTP GET to any public API which parses the response and returns a sequence of characters (**string**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 1cc553d092584937bfe9be9a3dd4c1f6 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Binance-Testnet/get_string) for an example of a client contract.

#### **GET > Uint256 x 2**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns two unsigned integers of type (**uint256**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | fe82fb4d00794483a1cf5ed23bd5e1b7 | 0 LINK                |

This job requires the following paramaters to be set:
* `url1`: The first URL to make the HTTP request to.
* `url2`: The second URL to make the HTTP request to.
* `path1`: The first [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `path2`: The second [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Binance-Testnet/get_uint256_x2) for an example of a client contract.

#### **GET > Uint256[]**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer array (**uint256[]**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 9a2ba54374f34184bdc6390db3171994 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Binance-Testnet/get_uint256_array) for an example of a client contract.

#### **GET > Bytes[]**

HTTP GET to any public API which parses the response and returns an arbitrary-length raw byte data array (**bytes[]**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 332c0b46e57f49cd8c7d74cdbe5106ab | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The URL to make the HTTP request to.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Binance-Testnet/get_bytes_array) for an example of a client contract.

#### **POST > Bytes**

HTTP POST to any public API which parses the response and returns arbitrary-length raw byte data (**bytes**).

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://testnet.bscscan.com/address/0xd08FEb8203E76f836D74608595346ab6b0f768C9) | b3390c03bfc24b42a0b0ab8051471bbb | 0 LINK                |

---
This job requires the following paramaters to be set:
* `post`: The URL to make the HTTP request to.
* `requestData`: A statically-defined JSON payload to be sent to the defined URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [**here**](https://github.com/LinkWellNodes/Documentation/tree/main/docs/services/jobs/testnets/Binance-Testnet/post_bytes) for an example of a client contract.

---
Example Job:
* `post`: 
* `requestData`: A statically-defined JSON payload to be sent to the defined URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.



#### **POST > Uint256**

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://testnet.bscscan.com/address/0xd08FEb8203E76f836D74608595346ab6b0f768C9) | b090204b16644030844a6e91932a7626 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **post** | Yes | String | `"https://min-api.cryptocompare.com/data/price"` | The URL to which to send the HTTP request for data                                                                                          |
| **requestData** | Yes | String | `'{"fsym": "ETH", "tsyms": "USD"}'` | A statically-defined JSON body to be sent to the defined URL. Must enter "{}" if no request body is to be sent |
| **path** | Yes | String | `"USD"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `100` | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X POST -H "content-type:application/json" "https://min-api.cryptocompare.com/data/price" --data '{ "fsym": "ETH", "tsyms": "USD"  }'`
* Sample response from the HTTP endpoint: `{"USD":1892.84}`
* Sample response from the Chainlink oracle: `189284`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction. 

[post_uint256_constructor_binance](#services/jobs/testnets/Binance-Testnet/post_uint256/post_uint256.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[post_uint256_request_binance](#services/jobs/testnets/Binance-Testnet/post_uint256/post_uint256.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/post_uint256/post_uint256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/post_uint256/post_uint256.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.
<!-- tabs:end -->
<!-- tabs:end -->

<!-- ## Custom Data Requests -->


## Troubleshooting
* For mainnets, ensure you are prefunding the correct and appropriate amount of LINK tokens into your contracts before making the request. 
* Double check that you are using the correct address and job ID for the job you are targeting via our job listings above.
* Confirm that the API endpoint you are making the HTTP request to is working via curl.  See below for a few sample curl commands!
* If your API requires an API key, please [**reach out**](https://linkwellnodes.io/Home.html#contact-us "Contact LinkWell Nodes") to us so that we can securely store and utilize your key via an [external adapter](https://github.com/smartcontractkit/external-adapters-js/tree/main/packages/sources).

<!-- HTTP GET:
```curl -X 'GET' 'https://min-api.cryptocompare.com/data/pricemultifull?fsym=ETH&tsyms=USD' -H 'accept: application/json'```

HTTP POST:
```curl -k -X POST -H "content-type:application/json" "https://min-api.cryptocompare.com/data/price" --data '{ "fsym": "ETH", "tsyms": "USD"  }'``` -->

## Support
* Feel free to join our [**Discord**](https://discord.gg/AJ66pRz4), or [**contact us**](https://linkwellnodes.io/Home.html#contact-us "Contact LinkWell Nodes") if you require support integrating our job into your contract.  We are happy to support custom data requests as well!
* Check out our [**Chainlink User FAQ**](/faq/Chainlink-Users "FAQ - Chainlink Data Consumers") for common question asked to us by our users.

