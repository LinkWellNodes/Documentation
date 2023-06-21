# Public Job Listings

## Mainnets
<!-- tabs:start -->

### **Ethereum**

<!-- tabs:start -->
#### **GET > UINT256**

This job returns an unsigned integer.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B | f99f6b5f80ca424c87b96ce4f845c798 | 1.3 LINK              |

---

?> **WARNING** Due to volatile and potentially high gas fees on the Ethereum network, gas caps will be set for submitting transactions on-chain.

#### **GET > Bytes**

#### **GET > String**

#### **GET > INT256**

#### **GET > UINT256[]**

#### **GET > UINT256,UINT256**

<!-- tabs:end -->
### **Polygon**

<!-- tabs:start -->
#### **GET > UINT256**

#### **GET > Bytes**

#### **GET > String**

#### **GET > INT256**

#### **GET > UINT256[]**

#### **GET > UINT256,UINT256**

<!-- tabs:end -->

### **Arbitrum**

<!-- tabs:start -->
#### **GET > UINT256**

#### **GET > Bytes**

#### **GET > String**

#### **GET > INT256**

#### **GET > UINT256[]**

#### **GET > UINT256,UINT256**

<!-- tabs:end -->

### **Avalanche**

<!-- tabs:start -->
#### **GET > UINT256**

#### **GET > Bytes**

#### **GET > String**

#### **GET > INT256**

#### **GET > UINT256[]**

#### **GET > UINT256,UINT256**

<!-- tabs:end -->
### **Binance**

<!-- tabs:start -->
#### **GET > UINT256**

#### **GET > Bytes**

#### **GET > String**

#### **GET > INT256**

#### **GET > UINT256[]**

#### **GET > UINT256,UINT256**

<!-- tabs:end -->
<!-- tabs:end -->



## Testnets
<!-- tabs:start -->

### **Sepolia**
Sepolia is a proof-of-stake testnet, and is the recommended default Ethereum testnet for application development.

<!-- tabs:start -->
#### **GET > Uint256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer **uint256**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B | f4821ba2e8ae4ddba52ea6860887df96 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > Int256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns a signed integer **int256**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B | 339ac1ad0a864ea7b94811de8a362a64 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > Bool**

HTTP GET to any public API which parses the response and returns a boolean **bool**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B | 2e0a430bcd2b482d8462fdcc5224fba1 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > Bytes**

HTTP GET to any public API which parses the response and returns arbitrary-length raw byte data **bytes**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B | 5b48fe6ac244436bb5ad689ab64ef28b | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > String**

HTTP GET to any public API which parses the response and returns a sequence of characters **string**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B | 1cc553d092584937bfe9be9a3dd4c1f6 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

#### **GET > Uint256 x 2**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns two unsigned integers of type **uint256**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B | fe82fb4d00794483a1cf5ed23bd5e1b7 | 0 LINK                |

This job requires the following paramaters to be set:
* `url1`: The first API URL.
* `url2`: The second API URL.
* `path1`: The first [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `path2`: The second [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

#### **GET > Uint256[]**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer **uint256** array.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B | 9a2ba54374f34184bdc6390db3171994 | 0 LINK                |

* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

#### **GET > Bytes[]**

HTTP GET to any public API which parses the response and returns an arbitrary-length raw byte data **bytes** array.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B | 332c0b46e57f49cd8c7d74cdbe5106ab | 0 LINK                |

* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

#### **POST > Bytes**

HTTP POST to any public API which parses the response and returns arbitrary-length raw byte data **bytes**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B | b3390c03bfc24b42a0b0ab8051471bbb | 0 LINK                |

* `post`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

<!-- tabs:end -->

### **Goerli**
Goerli is a proof-of-stake testnet, and is the recommended default Ethereum testnet for testing of validating and staking.

<!-- tabs:start -->
#### **GET > Uint256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer **uint256**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xB9C47B9609174716CE536324d4FbEad9292c1d3a | f4821ba2e8ae4ddba52ea6860887df96 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > Int256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns a signed integer **int256**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xB9C47B9609174716CE536324d4FbEad9292c1d3a | 339ac1ad0a864ea7b94811de8a362a64 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > Bool**

HTTP GET to any public API which parses the response and returns a boolean **bool**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xB9C47B9609174716CE536324d4FbEad9292c1d3a | 2e0a430bcd2b482d8462fdcc5224fba1 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > Bytes**

HTTP GET to any public API which parses the response and returns arbitrary-length raw byte data **bytes**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xB9C47B9609174716CE536324d4FbEad9292c1d3a | 5b48fe6ac244436bb5ad689ab64ef28b | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > String**

HTTP GET to any public API which parses the response and returns a sequence of characters **string**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xB9C47B9609174716CE536324d4FbEad9292c1d3a | 1cc553d092584937bfe9be9a3dd4c1f6 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

#### **GET > Uint256 x 2**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns two unsigned integers of type **uint256**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xB9C47B9609174716CE536324d4FbEad9292c1d3a | fe82fb4d00794483a1cf5ed23bd5e1b7 | 0 LINK                |

This job requires the following paramaters to be set:
* `url1`: The first API URL.
* `url2`: The second API URL.
* `path1`: The first [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `path2`: The second [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

#### **GET > Uint256[]**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer **uint256** array.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xB9C47B9609174716CE536324d4FbEad9292c1d3a | 9a2ba54374f34184bdc6390db3171994 | 0 LINK                |

* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

#### **GET > Bytes[]**

HTTP GET to any public API which parses the response and returns an arbitrary-length raw byte data **bytes** array.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xB9C47B9609174716CE536324d4FbEad9292c1d3a | 332c0b46e57f49cd8c7d74cdbe5106ab | 0 LINK                |

* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

#### **POST > Bytes**

HTTP POST to any public API which parses the response and returns arbitrary-length raw byte data **bytes**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xB9C47B9609174716CE536324d4FbEad9292c1d3a | b3390c03bfc24b42a0b0ab8051471bbb | 0 LINK                |

* `post`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

<!-- tabs:end -->

### **Polygon**
Mumbai Testnet replicates the Polygon Mainnet, and uses Ethereum's Goerli testnet as its Layer 1 protocol.

<!-- tabs:start -->
#### **GET > Uint256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer **uint256**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x12A3d7759F745f4cb8EE8a647038c040cB8862A5 | f4821ba2e8ae4ddba52ea6860887df96 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > Int256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns a signed integer **int256**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x12A3d7759F745f4cb8EE8a647038c040cB8862A5 | 339ac1ad0a864ea7b94811de8a362a64 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > Bool**

HTTP GET to any public API which parses the response and returns a boolean **bool**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x12A3d7759F745f4cb8EE8a647038c040cB8862A5 | 2e0a430bcd2b482d8462fdcc5224fba1 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > Bytes**

HTTP GET to any public API which parses the response and returns arbitrary-length raw byte data **bytes**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x12A3d7759F745f4cb8EE8a647038c040cB8862A5 | 5b48fe6ac244436bb5ad689ab64ef28b | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > String**

HTTP GET to any public API which parses the response and returns a sequence of characters **string**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x12A3d7759F745f4cb8EE8a647038c040cB8862A5 | 1cc553d092584937bfe9be9a3dd4c1f6 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

#### **GET > Uint256 x 2**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns two unsigned integers of type **uint256**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x12A3d7759F745f4cb8EE8a647038c040cB8862A5 | fe82fb4d00794483a1cf5ed23bd5e1b7 | 0 LINK                |

This job requires the following paramaters to be set:
* `url1`: The first API URL.
* `url2`: The second API URL.
* `path1`: The first [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `path2`: The second [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

#### **GET > Uint256[]**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer **uint256** array.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x12A3d7759F745f4cb8EE8a647038c040cB8862A5 | 9a2ba54374f34184bdc6390db3171994 | 0 LINK                |

* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

#### **GET > Bytes[]**

HTTP GET to any public API which parses the response and returns an arbitrary-length raw byte data **bytes** array.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x12A3d7759F745f4cb8EE8a647038c040cB8862A5 | 332c0b46e57f49cd8c7d74cdbe5106ab | 0 LINK                |

* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

#### **POST > Bytes**

HTTP POST to any public API which parses the response and returns arbitrary-length raw byte data **bytes**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0x12A3d7759F745f4cb8EE8a647038c040cB8862A5 | b3390c03bfc24b42a0b0ab8051471bbb | 0 LINK                |

* `post`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

<!-- tabs:end -->

### **Arbitrum**
Arbitrum Goerli is the testnet of Layer 2 rollup chain Arbitrum One, and uses Ethereum's Goerli testnet network as its Layer 1 protocol.

<!-- tabs:start -->
#### **GET > Uint256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer **uint256**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | f4821ba2e8ae4ddba52ea6860887df96 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > Int256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns a signed integer **int256**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 339ac1ad0a864ea7b94811de8a362a64 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > Bool**

HTTP GET to any public API which parses the response and returns a boolean **bool**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 2e0a430bcd2b482d8462fdcc5224fba1 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > Bytes**

HTTP GET to any public API which parses the response and returns arbitrary-length raw byte data **bytes**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 5b48fe6ac244436bb5ad689ab64ef28b | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > String**

HTTP GET to any public API which parses the response and returns a sequence of characters **string**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 1cc553d092584937bfe9be9a3dd4c1f6 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

#### **GET > Uint256 x 2**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns two unsigned integers of type **uint256**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | fe82fb4d00794483a1cf5ed23bd5e1b7 | 0 LINK                |

This job requires the following paramaters to be set:
* `url1`: The first API URL.
* `url2`: The second API URL.
* `path1`: The first [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `path2`: The second [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

#### **GET > Uint256[]**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer **uint256** array.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 9a2ba54374f34184bdc6390db3171994 | 0 LINK                |

* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

#### **GET > Bytes[]**

HTTP GET to any public API which parses the response and returns an arbitrary-length raw byte data **bytes** array.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 332c0b46e57f49cd8c7d74cdbe5106ab | 0 LINK                |

* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

#### **POST > Bytes**

HTTP POST to any public API which parses the response and returns arbitrary-length raw byte data **bytes**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | b3390c03bfc24b42a0b0ab8051471bbb | 0 LINK                |

* `post`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

<!-- tabs:end -->

### **Avalanche**

<!-- tabs:start -->
#### **GET > Uint256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer **uint256**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406 | f4821ba2e8ae4ddba52ea6860887df96 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > Int256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns a signed integer **int256**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406 | 339ac1ad0a864ea7b94811de8a362a64 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > Bool**

HTTP GET to any public API which parses the response and returns a boolean **bool**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406 | 2e0a430bcd2b482d8462fdcc5224fba1 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > Bytes**

HTTP GET to any public API which parses the response and returns arbitrary-length raw byte data **bytes**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406 | 5b48fe6ac244436bb5ad689ab64ef28b | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > String**

HTTP GET to any public API which parses the response and returns a sequence of characters **string**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406 | 1cc553d092584937bfe9be9a3dd4c1f6 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

#### **GET > Uint256 x 2**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns two unsigned integers of type **uint256**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406 | fe82fb4d00794483a1cf5ed23bd5e1b7 | 0 LINK                |

This job requires the following paramaters to be set:
* `url1`: The first API URL.
* `url2`: The second API URL.
* `path1`: The first [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `path2`: The second [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

#### **GET > Uint256[]**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer **uint256** array.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406 | 9a2ba54374f34184bdc6390db3171994 | 0 LINK                |

* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

#### **GET > Bytes[]**

HTTP GET to any public API which parses the response and returns an arbitrary-length raw byte data **bytes** array.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406 | 332c0b46e57f49cd8c7d74cdbe5106ab | 0 LINK                |

* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

#### **POST > Bytes**

HTTP POST to any public API which parses the response and returns arbitrary-length raw byte data **bytes**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406 | b3390c03bfc24b42a0b0ab8051471bbb | 0 LINK                |

* `post`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

<!-- tabs:end -->

### **Binance**
Binance Smart Chain's testnet is a test environment for BNB Smart Chain mainnet network, run by the BNB Chain development community.

<!-- tabs:start -->
#### **GET > Uint256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer **uint256**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | f4821ba2e8ae4ddba52ea6860887df96 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > Int256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns a signed integer **int256**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 339ac1ad0a864ea7b94811de8a362a64 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > Bool**

HTTP GET to any public API which parses the response and returns a boolean **bool**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 2e0a430bcd2b482d8462fdcc5224fba1 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > Bytes**

HTTP GET to any public API which parses the response and returns arbitrary-length raw byte data **bytes**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 5b48fe6ac244436bb5ad689ab64ef28b | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

Please see our supporting documentation [here] for an example of a client contract.

#### **GET > String**

HTTP GET to any public API which parses the response and returns a sequence of characters **string**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 1cc553d092584937bfe9be9a3dd4c1f6 | 0 LINK                |

This job requires the following paramaters to be set:
* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

#### **GET > Uint256 x 2**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns two unsigned integers of type **uint256**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | fe82fb4d00794483a1cf5ed23bd5e1b7 | 0 LINK                |

This job requires the following paramaters to be set:
* `url1`: The first API URL.
* `url2`: The second API URL.
* `path1`: The first [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `path2`: The second [JSON Path](https://jsonpath.com/) with comma (,) delimited string.
* `times`: Multiplies the provided input.

#### **GET > Uint256[]**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer **uint256** array.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 9a2ba54374f34184bdc6390db3171994 | 0 LINK                |

* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

#### **GET > Bytes[]**

HTTP GET to any public API which parses the response and returns an arbitrary-length raw byte data **bytes** array.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | 332c0b46e57f49cd8c7d74cdbe5106ab | 0 LINK                |

* `get`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

#### **POST > Bytes**

HTTP POST to any public API which parses the response and returns arbitrary-length raw byte data **bytes**.

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| 0xd08FEb8203E76f836D74608595346ab6b0f768C9 | b3390c03bfc24b42a0b0ab8051471bbb | 0 LINK                |

* `post`: The API URL.
* `path`: The [JSON Path](https://jsonpath.com/) with comma (,) delimited string.

<!-- tabs:end -->

<!-- tabs:end -->













