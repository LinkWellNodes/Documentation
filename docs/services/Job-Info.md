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

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B](https://sepolia.etherscan.io/address/0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B) | f4821ba2e8ae4ddba52ea6860887df96 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/yz4jtj6u"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"RAW,ETH,USD,VOLUME24HOUR"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `10 ** 18` | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"`
* Sample response from the HTTP endpoint: `{"RAW":{"ETH":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"ETH","TOSYMBOL":"USD","FLAGS":"2052","PRICE":1878.15,"LASTUPDATE":1687648218,"MEDIAN":1878.7,"LASTVOLUME":0.18958184,"LASTVOLUMETO":355.9986749704,"LASTTRADEID":"458340262","VOLUMEDAY":82841.07502237387,"VOLUMEDAYTO":156245016.13863632,"VOLUME24HOUR":1211111.7212419`
* Sample response from the Chainlink oracle: `121111172124190010000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_constructor_est](#services/jobs/testnets/Ethereum-Sepolia/get_uint256/get_uint256.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_request_est](#services/jobs/testnets/Ethereum-Sepolia/get_uint256/get_uint256.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_uint256/get_uint256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_uint256/get_uint256.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Uint256 No Multiply**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer (**uint256**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B](https://sepolia.etherscan.io/address/0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B) | 65cfa14a158540e1a8a94f9a33163839 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/yz4jtj6u"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"RAW,ETH,USD,VOLUME24HOUR"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"`
* Sample response from the HTTP endpoint: `{"RAW":{"ETH":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"ETH","TOSYMBOL":"USD","FLAGS":"2052","PRICE":1878.15,"LASTUPDATE":1687648218,"MEDIAN":1878.7,"LASTVOLUME":0.18958184,"LASTVOLUMETO":355.9986749704,"LASTTRADEID":"458340262","VOLUMEDAY":82841.07502237387,"VOLUMEDAYTO":156245016.13863632,"VOLUME24HOUR":1211111.7212419`
* Sample response from the Chainlink oracle: `1211111.72124190010000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_no_multiply_constructor_est](#services/jobs/testnets/Ethereum-Sepolia/get_uint256_no_multiply/get_uint256_no_multiply.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_request_no_multiply_est](#services/jobs/testnets/Ethereum-Sepolia/get_uint256_no_multiply/get_uint256_no_multiply.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_uint256_no_multiply/get_uint256_no_multiply.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_uint256_no_multiply/get_uint256_no_multiply.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Int256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer (**int256**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B](https://sepolia.etherscan.io/address/0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B) | 339ac1ad0a864ea7b94811de8a362a64 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/yz4jtj6u"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"RAW,ETH,USD,VOLUME24HOUR"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `10 ** 18` | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"`
* Sample response from the HTTP endpoint: `{"RAW":{"ETH":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"ETH","TOSYMBOL":"USD","FLAGS":"2052","PRICE":1878.15,"LASTUPDATE":1687648218,"MEDIAN":1878.7,"LASTVOLUME":0.18958184,"LASTVOLUMETO":355.9986749704,"LASTTRADEID":"458340262","VOLUMEDAY":82841.07502237387,"VOLUMEDAYTO":156245016.13863632,"VOLUME24HOUR":1211111.7212419`
* Sample response from the Chainlink oracle: `1211111.72124190010000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_int256_constructor_est](#services/jobs/testnets/Ethereum-Sepolia/get_int256/get_int256.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_int256_request_est](#services/jobs/testnets/Ethereum-Sepolia/get_int256/get_int256.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_int256/get_int256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_int256/get_int256.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Bool**

HTTP GET to any public API which parses the response and returns a boolean (**bool**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B](https://sepolia.etherscan.io/address/0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B) | 2e0a430bcd2b482d8462fdcc5224fba1 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"symbols,0,isSpotTradingAllowed"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"`
* Sample response from the HTTP endpoint: `{"timezone":"UTC","serverTime":1687782213836,"rateLimits":[{"rateLimitType":"REQUEST_WEIGHT","interval":"MINUTE","intervalNum":1,"limit":1200},{"rateLimitType":"ORDERS","interval":"SECOND","intervalNum":10,"limit":100},{"rateLimitType":"ORDERS","interval":"DAY","intervalNum":1,"limit":200000},{"rateLimitType":"RAW_REQUESTS","interval":"MINUTE","intervalNum":5,"limit":6100}],"exchangeFilters":[],"symbols":[{"symbol":"ETHUSD","status":"TRADING","baseAsset":"ETH","baseAssetPrecision":8,"quoteAsset":"USD","quotePrecision":8,"quoteAssetPrecision":8,"baseCommissionPrecision":8,"quoteCommissionPrecision":8,"orderTypes":["LIMIT","LIMIT_MAKER","MARKET","STOP_LOSS_LIMIT","TAKE_PROFIT_LIMIT"],"icebergAllowed":true,"ocoAllowed":true,"quoteOrderQtyMarketAllowed":true,"allowTrailingStop":true,"cancelReplaceAllowed":true,"isSpotTradingAllowed":true,`
* Sample response from the Chainlink oracle: `true`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_bool_constructor_est](#services/jobs/testnets/Ethereum-Sepolia/get_bool/get_bool.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_bool_request_est](#services/jobs/testnets/Ethereum-Sepolia/get_bool/get_bool.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_bool/get_bool.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_bool/get_bool.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Bytes**

HTTP GET to any public API which parses the response and returns arbitrary-length raw byte data (**bytes**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B](https://sepolia.etherscan.io/address/0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B) | 5b48fe6ac244436bb5ad689ab64ef28b | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"See sample curl command below"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"image"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://ipfs.io/ipfs/QmZgsvrA1o1C8BGCrx6mHTqR1Ui1XqbCrtbMVrRLHtuPVD?filename=big-api-response.json"`
* Sample response from the HTTP endpoint: `{"image":"0x68747470733a2f2f697066732e696f2f697066732f516d5358416257356b716e3259777435444c336857354d736a654b4a4839724c654c6b51733362527579547871313f66696c656e616d653d73756e2d636861696e6c696e6b2e676966"}`
* Sample response from the Chainlink oracle: `https://ipfs.io/ipfs/QmSXAbW5kqn2Ywt5DL3hW5MsjeKJH9rLeLkQs3bRuyTxq1?filename=sun-chainlink.gif`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_bytes_constructor_est](#services/jobs/testnets/Ethereum-Sepolia/get_bytes/get_bytes.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_bytes_request_est](#services/jobs/testnets/Ethereum-Sepolia/get_bytes/get_bytes.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_bytes/get_bytes.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_bytes/get_bytes.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > String**

HTTP GET to any public API which parses the response and returns a sequence of characters (**string**).
### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B](https://sepolia.etherscan.io/address/0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B) | 1cc553d092584937bfe9be9a3dd4c1f6 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/2xw2us69"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"0,id"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10"`
* Sample response from the HTTP endpoint: `[{"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":30385,"m`
* Sample response from the Chainlink oracle: `bitcoin`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_string_constructor_est](#services/jobs/testnets/Ethereum-Sepolia/get_string/get_string.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_string_request_est](#services/jobs/testnets/Ethereum-Sepolia/get_string/get_string.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_string/get_string.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_string/get_string.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Uint256 x 2**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns two unsigned integers of type (**uint256**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B](https://sepolia.etherscan.io/address/0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B) | fe82fb4d00794483a1cf5ed23bd5e1b7 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **url1** | Yes | String | `"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC"` | The first URL to which to send the HTTP request for data                                                                                          |
| **url2** | Yes | String | `"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"` | The second URL to which to send the HTTP request for data                                                                                          |
| **path1** | Yes | String | `"BTC"` | The first [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **path2** | Yes | String | `"USD"` | The second [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `10 ** 18` | The number by which to multiply the results returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the first provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC"`
* Use the following curl command to test out the above request directly against the second provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"`
* Sample response from the first HTTP endpoint: `{"BTC":0.06201}`
* Sample response from the second HTTP endpoint: `{"USD":1886.15}`
* First sample response from the Chainlink oracle: `62010000000000000`
* Second sample response from the Chainlink oracle: `1886150000000000000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_x2_constructor_est](#services/jobs/testnets/Ethereum-Sepolia/get_uint256_x2/get_uint256_x2.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_x2_request_est](#services/jobs/testnets/Ethereum-Sepolia/get_uint256_x2/get_uint256_x2.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_uint256_x2/get_uint256_x2.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_uint256_x2/get_uint256_x2.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Uint256[]**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer array (**uint256[]**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B](https://sepolia.etherscan.io/address/0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B) | 9a2ba54374f34184bdc6390db3171994 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://api.binance.us/api/v3/depth?symbol=ETHUSD"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"bids,0"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.binance.us/api/v3/depth?symbol=ETHUSD"`
* Sample response from the HTTP endpoint: `{"lastUpdateId":3224229511,"bids":[["1838.71000000","0.01540000"],["1838.69000000","0.83100000"]`
* Sample response from the Chainlink oracle: `[1838, 0]`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_array_constructor_est](#services/jobs/testnets/Ethereum-Sepolia/get_uint256_array/get_uint256_array.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_array_request_est](#services/jobs/testnets/Ethereum-Sepolia/get_uint256_array/get_uint256_array.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_uint256_array/get_uint256_array.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_uint256_array/get_uint256_array.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Bytes[]**

HTTP GET to any public API which parses the response and returns an arbitrary-length raw byte data array (**bytes[]**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B](https://sepolia.etherscan.io/address/0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B) | 332c0b46e57f49cd8c7d74cdbe5106ab | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"symbols,0,orderTypes"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"`
* Sample response from the HTTP endpoint: `{"timezone":"UTC","serverTime":1687788634554,"rateLimits":[{"rateLimitType":"REQUEST_WEIGHT","interval":"MINUTE","intervalNum":1,"limit":1200},{"rateLimitType":"ORDERS","interval":"SECOND","intervalNum":10,"limit":100},{"rateLimitType":"ORDERS","interval":"DAY","intervalNum":1,"limit":200000},{"rateLimitType":"RAW_REQUESTS","interval":"MINUTE","intervalNum":5,"limit":6100}],"exchangeFilters":[],"symbols":[{"symbol":"ETHUSD","status":"TRADING","baseAsset":"ETH","baseAssetPrecision":8,"quoteAsset":"USD","quotePrecision":8,"quoteAssetPrecision":8,"baseCommissionPrecision":8,"quoteCommissionPrecision":8,"orderTypes":["LIMIT","LIMIT_MAKER","MARKET","STOP_LOSS_LIMIT","TAKE_PROFIT_LIMIT"]`
* Sample response from the Chainlink oracle: `[LIMIT, LIMIT_MAKER, MARKET, STOP_LOSS_LIMIT, TAKE_PROFIT_LIMIT]`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_bytes_array_constructor_est](#services/jobs/testnets/Ethereum-Sepolia/get_bytes_array/get_bytes_array.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_bytes_array_request_est](#services/jobs/testnets/Ethereum-Sepolia/get_bytes_array/get_bytes_array.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_bytes_array/get_bytes_array.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/get_bytes_array/get_bytes_array.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **POST > Bytes**

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B](https://sepolia.etherscan.io/address/0x0FaCf846af22BCE1C7f88D1d55A038F27747eD2B) | b3390c03bfc24b42a0b0ab8051471bbb | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **post** | Yes | String | `"https://min-api.cryptocompare.com/data/pricemultifull"` | The URL to which to send the HTTP request for data                                                                                          |
| **requestData** | Yes | String | `'{"fsyms": "LINK", "tsyms": "USD"}'` | A statically-defined JSON body to be sent to the defined URL. Must enter "{}" if no request body is to be sent |
| **path** | Yes | String | `"RAW,LINK,USD,LASTMARKET"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X POST -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull" --data '{ "fsyms": "LINK", "tsyms": "USD"  }'`
* Sample response from the HTTP endpoint: `{"RAW":{"LINK":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"LINK","TOSYMBOL":"USD","FLAGS":"516","PRICE":6.082,"LASTUPDATE":1687813049,"MEDIAN":6.0785,"LASTVOLUME":74.97,"LASTVOLUMETO":456.04251,"LASTTRADEID":"65483495","VOLUMEDAY":1083331.4428641663,"VOLUMEDAYTO":6646357.149629641,"VOLUME24HOUR":1203763.9424006,"VOLUME24HOURTO":7385168.951435876,"OPENDAY":6.161,"HIGHDAY":6.259,"LOWDAY":6.024,"OPEN24HOUR":6.088,"HIGH24HOUR":6.259,"LOW24HOUR":6.021,"LASTMARKET":"Coinbase"`
* Sample response from the Chainlink oracle: `Coinbase`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[post_bytes_constructor_est](#services/jobs/testnets/Ethereum-Sepolia/post_bytes/post_bytes.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[post_bytes_request_est](#services/jobs/testnets/Ethereum-Sepolia/post_bytes/post_bytes.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/post_bytes/post_bytes.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Sepolia/post_bytes/post_bytes.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

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

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xB9C47B9609174716CE536324d4FbEad9292c1d3a](https://goerli.etherscan.io/address/0xB9C47B9609174716CE536324d4FbEad9292c1d3a) | f4821ba2e8ae4ddba52ea6860887df96 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/yz4jtj6u"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"RAW,ETH,USD,VOLUME24HOUR"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `10 ** 18` | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"`
* Sample response from the HTTP endpoint: `{"RAW":{"ETH":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"ETH","TOSYMBOL":"USD","FLAGS":"2052","PRICE":1878.15,"LASTUPDATE":1687648218,"MEDIAN":1878.7,"LASTVOLUME":0.18958184,"LASTVOLUMETO":355.9986749704,"LASTTRADEID":"458340262","VOLUMEDAY":82841.07502237387,"VOLUMEDAYTO":156245016.13863632,"VOLUME24HOUR":1211111.7212419`
* Sample response from the Chainlink oracle: `121111172124190010000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_constructor_egt](#services/jobs/testnets/Ethereum-goerli/get_uint256/get_uint256.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_request_egt](#services/jobs/testnets/Ethereum-goerli/get_uint256/get_uint256.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/get_uint256/get_uint256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/get_uint256/get_uint256.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Uint256 No Multiply**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer (**uint256**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xB9C47B9609174716CE536324d4FbEad9292c1d3a](https://Goerli.etherscan.io/address/0xB9C47B9609174716CE536324d4FbEad9292c1d3a) | 65cfa14a158540e1a8a94f9a33163839 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/yz4jtj6u"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"RAW,ETH,USD,VOLUME24HOUR"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"`
* Sample response from the HTTP endpoint: `{"RAW":{"ETH":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"ETH","TOSYMBOL":"USD","FLAGS":"2052","PRICE":1878.15,"LASTUPDATE":1687648218,"MEDIAN":1878.7,"LASTVOLUME":0.18958184,"LASTVOLUMETO":355.9986749704,"LASTTRADEID":"458340262","VOLUMEDAY":82841.07502237387,"VOLUMEDAYTO":156245016.13863632,"VOLUME24HOUR":1211111.7212419`
* Sample response from the Chainlink oracle: `1211111.72124190010000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_no_multiply_constructor_egt](#services/jobs/testnets/Ethereum-Goerli/get_uint256_no_multiply/get_uint256_no_multiply.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_request_no_multiply_egt](#services/jobs/testnets/Ethereum-Goerli/get_uint256_no_multiply/get_uint256_no_multiply.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/get_uint256_no_multiply/get_uint256_no_multiply.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/get_uint256_no_multiply/get_uint256_no_multiply.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Int256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer (**int256**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xB9C47B9609174716CE536324d4FbEad9292c1d3a](https://Goerli.etherscan.io/address/0xB9C47B9609174716CE536324d4FbEad9292c1d3a) | 339ac1ad0a864ea7b94811de8a362a64 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/yz4jtj6u"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"RAW,ETH,USD,VOLUME24HOUR"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `10 ** 18` | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"`
* Sample response from the HTTP endpoint: `{"RAW":{"ETH":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"ETH","TOSYMBOL":"USD","FLAGS":"2052","PRICE":1878.15,"LASTUPDATE":1687648218,"MEDIAN":1878.7,"LASTVOLUME":0.18958184,"LASTVOLUMETO":355.9986749704,"LASTTRADEID":"458340262","VOLUMEDAY":82841.07502237387,"VOLUMEDAYTO":156245016.13863632,"VOLUME24HOUR":1211111.7212419`
* Sample response from the Chainlink oracle: `1211111.72124190010000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_int256_constructor_egt](#services/jobs/testnets/Ethereum-Goerli/get_int256/get_int256.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_int256_request_egt](#services/jobs/testnets/Ethereum-Goerli/get_int256/get_int256.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/get_int256/get_int256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/get_int256/get_int256.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Bool**

HTTP GET to any public API which parses the response and returns a boolean (**bool**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xB9C47B9609174716CE536324d4FbEad9292c1d3a](https://Goerli.etherscan.io/address/0xB9C47B9609174716CE536324d4FbEad9292c1d3a) | 2e0a430bcd2b482d8462fdcc5224fba1 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"symbols,0,isSpotTradingAllowed"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"`
* Sample response from the HTTP endpoint: `{"timezone":"UTC","serverTime":1687782213836,"rateLimits":[{"rateLimitType":"REQUEST_WEIGHT","interval":"MINUTE","intervalNum":1,"limit":1200},{"rateLimitType":"ORDERS","interval":"SECOND","intervalNum":10,"limit":100},{"rateLimitType":"ORDERS","interval":"DAY","intervalNum":1,"limit":200000},{"rateLimitType":"RAW_REQUESTS","interval":"MINUTE","intervalNum":5,"limit":6100}],"exchangeFilters":[],"symbols":[{"symbol":"ETHUSD","status":"TRADING","baseAsset":"ETH","baseAssetPrecision":8,"quoteAsset":"USD","quotePrecision":8,"quoteAssetPrecision":8,"baseCommissionPrecision":8,"quoteCommissionPrecision":8,"orderTypes":["LIMIT","LIMIT_MAKER","MARKET","STOP_LOSS_LIMIT","TAKE_PROFIT_LIMIT"],"icebergAllowed":true,"ocoAllowed":true,"quoteOrderQtyMarketAllowed":true,"allowTrailingStop":true,"cancelReplaceAllowed":true,"isSpotTradingAllowed":true,`
* Sample response from the Chainlink oracle: `true`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_bool_constructor_egt](#services/jobs/testnets/Ethereum-Goerli/get_bool/get_bool.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_bool_request_egt](#services/jobs/testnets/Ethereum-Goerli/get_bool/get_bool.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/get_bool/get_bool.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/get_bool/get_bool.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Bytes**

HTTP GET to any public API which parses the response and returns arbitrary-length raw byte data (**bytes**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xB9C47B9609174716CE536324d4FbEad9292c1d3a](https://Goerli.etherscan.io/address/0xB9C47B9609174716CE536324d4FbEad9292c1d3a) | 5b48fe6ac244436bb5ad689ab64ef28b | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"See sample curl command below"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"image"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://ipfs.io/ipfs/QmZgsvrA1o1C8BGCrx6mHTqR1Ui1XqbCrtbMVrRLHtuPVD?filename=big-api-response.json"`
* Sample response from the HTTP endpoint: `{"image":"0x68747470733a2f2f697066732e696f2f697066732f516d5358416257356b716e3259777435444c336857354d736a654b4a4839724c654c6b51733362527579547871313f66696c656e616d653d73756e2d636861696e6c696e6b2e676966"}`
* Sample response from the Chainlink oracle: `https://ipfs.io/ipfs/QmSXAbW5kqn2Ywt5DL3hW5MsjeKJH9rLeLkQs3bRuyTxq1?filename=sun-chainlink.gif`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_bytes_constructor_egt](#services/jobs/testnets/Ethereum-Goerli/get_bytes/get_bytes.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_bytes_request_egt](#services/jobs/testnets/Ethereum-Goerli/get_bytes/get_bytes.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/get_bytes/get_bytes.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/get_bytes/get_bytes.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > String**

HTTP GET to any public API which parses the response and returns a sequence of characters (**string**).
### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xB9C47B9609174716CE536324d4FbEad9292c1d3a](https://Goerli.etherscan.io/address/0xB9C47B9609174716CE536324d4FbEad9292c1d3a) | 1cc553d092584937bfe9be9a3dd4c1f6 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/2xw2us69"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"0,id"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10"`
* Sample response from the HTTP endpoint: `[{"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":30385,"m`
* Sample response from the Chainlink oracle: `bitcoin`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_string_constructor_egt](#services/jobs/testnets/Ethereum-Goerli/get_string/get_string.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_string_request_egt](#services/jobs/testnets/Ethereum-Goerli/get_string/get_string.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/get_string/get_string.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/get_string/get_string.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Uint256 x 2**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns two unsigned integers of type (**uint256**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xB9C47B9609174716CE536324d4FbEad9292c1d3a](https://Goerli.etherscan.io/address/0xB9C47B9609174716CE536324d4FbEad9292c1d3a) | fe82fb4d00794483a1cf5ed23bd5e1b7 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **url1** | Yes | String | `"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC"` | The first URL to which to send the HTTP request for data                                                                                          |
| **url2** | Yes | String | `"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"` | The second URL to which to send the HTTP request for data                                                                                          |
| **path1** | Yes | String | `"BTC"` | The first [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **path2** | Yes | String | `"USD"` | The second [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `10 ** 18` | The number by which to multiply the results returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the first provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC"`
* Use the following curl command to test out the above request directly against the second provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"`
* Sample response from the first HTTP endpoint: `{"BTC":0.06201}`
* Sample response from the second HTTP endpoint: `{"USD":1886.15}`
* First sample response from the Chainlink oracle: `62010000000000000`
* Second sample response from the Chainlink oracle: `1886150000000000000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_x2_constructor_egt](#services/jobs/testnets/Ethereum-Goerli/get_uint256_x2/get_uint256_x2.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_x2_request_egt](#services/jobs/testnets/Ethereum-Goerli/get_uint256_x2/get_uint256_x2.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/get_uint256_x2/get_uint256_x2.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/get_uint256_x2/get_uint256_x2.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Uint256[]**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer array (**uint256[]**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xB9C47B9609174716CE536324d4FbEad9292c1d3a](https://Goerli.etherscan.io/address/0xB9C47B9609174716CE536324d4FbEad9292c1d3a) | 9a2ba54374f34184bdc6390db3171994 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://api.binance.us/api/v3/depth?symbol=ETHUSD"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"bids,0"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.binance.us/api/v3/depth?symbol=ETHUSD"`
* Sample response from the HTTP endpoint: `{"lastUpdateId":3224229511,"bids":[["1838.71000000","0.01540000"],["1838.69000000","0.83100000"]`
* Sample response from the Chainlink oracle: `[1838, 0]`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_array_constructor_egt](#services/jobs/testnets/Ethereum-Goerli/get_uint256_array/get_uint256_array.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_array_request_egt](#services/jobs/testnets/Ethereum-Goerli/get_uint256_array/get_uint256_array.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/get_uint256_array/get_uint256_array.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/get_uint256_array/get_uint256_array.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Bytes[]**

HTTP GET to any public API which parses the response and returns an arbitrary-length raw byte data array (**bytes[]**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xB9C47B9609174716CE536324d4FbEad9292c1d3a](https://Goerli.etherscan.io/address/0xB9C47B9609174716CE536324d4FbEad9292c1d3a) | 332c0b46e57f49cd8c7d74cdbe5106ab | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"symbols,0,orderTypes"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"`
* Sample response from the HTTP endpoint: `{"timezone":"UTC","serverTime":1687788634554,"rateLimits":[{"rateLimitType":"REQUEST_WEIGHT","interval":"MINUTE","intervalNum":1,"limit":1200},{"rateLimitType":"ORDERS","interval":"SECOND","intervalNum":10,"limit":100},{"rateLimitType":"ORDERS","interval":"DAY","intervalNum":1,"limit":200000},{"rateLimitType":"RAW_REQUESTS","interval":"MINUTE","intervalNum":5,"limit":6100}],"exchangeFilters":[],"symbols":[{"symbol":"ETHUSD","status":"TRADING","baseAsset":"ETH","baseAssetPrecision":8,"quoteAsset":"USD","quotePrecision":8,"quoteAssetPrecision":8,"baseCommissionPrecision":8,"quoteCommissionPrecision":8,"orderTypes":["LIMIT","LIMIT_MAKER","MARKET","STOP_LOSS_LIMIT","TAKE_PROFIT_LIMIT"]`
* Sample response from the Chainlink oracle: `[LIMIT, LIMIT_MAKER, MARKET, STOP_LOSS_LIMIT, TAKE_PROFIT_LIMIT]`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_bytes_array_constructor_egt](#services/jobs/testnets/Ethereum-Goerli/get_bytes_array/get_bytes_array.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_bytes_array_request_egt](#services/jobs/testnets/Ethereum-Goerli/get_bytes_array/get_bytes_array.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/get_bytes_array/get_bytes_array.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/get_bytes_array/get_bytes_array.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **POST > Bytes**

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xB9C47B9609174716CE536324d4FbEad9292c1d3a](https://Goerli.etherscan.io/address/0xB9C47B9609174716CE536324d4FbEad9292c1d3a) | b3390c03bfc24b42a0b0ab8051471bbb | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **post** | Yes | String | `"https://min-api.cryptocompare.com/data/pricemultifull"` | The URL to which to send the HTTP request for data                                                                                          |
| **requestData** | Yes | String | `'{"fsyms": "LINK", "tsyms": "USD"}'` | A statically-defined JSON body to be sent to the defined URL. Must enter "{}" if no request body is to be sent |
| **path** | Yes | String | `"RAW,LINK,USD,LASTMARKET"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X POST -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull" --data '{ "fsyms": "LINK", "tsyms": "USD"  }'`
* Sample response from the HTTP endpoint: `{"RAW":{"LINK":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"LINK","TOSYMBOL":"USD","FLAGS":"516","PRICE":6.082,"LASTUPDATE":1687813049,"MEDIAN":6.0785,"LASTVOLUME":74.97,"LASTVOLUMETO":456.04251,"LASTTRADEID":"65483495","VOLUMEDAY":1083331.4428641663,"VOLUMEDAYTO":6646357.149629641,"VOLUME24HOUR":1203763.9424006,"VOLUME24HOURTO":7385168.951435876,"OPENDAY":6.161,"HIGHDAY":6.259,"LOWDAY":6.024,"OPEN24HOUR":6.088,"HIGH24HOUR":6.259,"LOW24HOUR":6.021,"LASTMARKET":"Coinbase"`
* Sample response from the Chainlink oracle: `Coinbase`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[post_bytes_constructor_egt](#services/jobs/testnets/Ethereum-Goerli/post_bytes/post_bytes.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[post_bytes_request_egt](#services/jobs/testnets/Ethereum-Goerli/post_bytes/post_bytes.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/post_bytes/post_bytes.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Ethereum-Goerli/post_bytes/post_bytes.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

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

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | f4821ba2e8ae4ddba52ea6860887df96 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/yz4jtj6u"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"RAW,ETH,USD,VOLUME24HOUR"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `10 ** 18` | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"`
* Sample response from the HTTP endpoint: `{"RAW":{"ETH":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"ETH","TOSYMBOL":"USD","FLAGS":"2052","PRICE":1878.15,"LASTUPDATE":1687648218,"MEDIAN":1878.7,"LASTVOLUME":0.18958184,"LASTVOLUMETO":355.9986749704,"LASTTRADEID":"458340262","VOLUMEDAY":82841.07502237387,"VOLUMEDAYTO":156245016.13863632,"VOLUME24HOUR":1211111.7212419`
* Sample response from the Chainlink oracle: `121111172124190010000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_constructor_mmt](#services/jobs/testnets/Polygon-Mumbai/get_uint256/get_uint256.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_request_mmt](#services/jobs/testnets/Polygon-Mumbai/get_uint256/get_uint256.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/get_uint256/get_uint256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/get_uint256/get_uint256.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Uint256 No Multiply**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer (**uint256**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | 65cfa14a158540e1a8a94f9a33163839 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/yz4jtj6u"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"RAW,ETH,USD,VOLUME24HOUR"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"`
* Sample response from the HTTP endpoint: `{"RAW":{"ETH":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"ETH","TOSYMBOL":"USD","FLAGS":"2052","PRICE":1878.15,"LASTUPDATE":1687648218,"MEDIAN":1878.7,"LASTVOLUME":0.18958184,"LASTVOLUMETO":355.9986749704,"LASTTRADEID":"458340262","VOLUMEDAY":82841.07502237387,"VOLUMEDAYTO":156245016.13863632,"VOLUME24HOUR":1211111.7212419`
* Sample response from the Chainlink oracle: `1211111.72124190010000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_no_multiply_constructor_mmt](#services/jobs/testnets/Polygon-Mumbai/get_uint256_no_multiply/get_uint256_no_multiply.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_request_no_multiply_mmt](#services/jobs/testnets/Polygon-Mumbai/get_uint256_no_multiply/get_uint256_no_multiply.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/get_uint256_no_multiply/get_uint256_no_multiply.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/get_uint256_no_multiply/get_uint256_no_multiply.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Int256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer (**int256**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | 339ac1ad0a864ea7b94811de8a362a64 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/yz4jtj6u"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"RAW,ETH,USD,VOLUME24HOUR"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `10 ** 18` | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"`
* Sample response from the HTTP endpoint: `{"RAW":{"ETH":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"ETH","TOSYMBOL":"USD","FLAGS":"2052","PRICE":1878.15,"LASTUPDATE":1687648218,"MEDIAN":1878.7,"LASTVOLUME":0.18958184,"LASTVOLUMETO":355.9986749704,"LASTTRADEID":"458340262","VOLUMEDAY":82841.07502237387,"VOLUMEDAYTO":156245016.13863632,"VOLUME24HOUR":1211111.7212419`
* Sample response from the Chainlink oracle: `1211111.72124190010000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_int256_constructor_mmt](#services/jobs/testnets/Polygon-Mumbai/get_int256/get_int256.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_int256_request_mmt](#services/jobs/testnets/Polygon-Mumbai/get_int256/get_int256.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/get_int256/get_int256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/get_int256/get_int256.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Bool**

HTTP GET to any public API which parses the response and returns a boolean (**bool**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | 2e0a430bcd2b482d8462fdcc5224fba1 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"symbols,0,isSpotTradingAllowed"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"`
* Sample response from the HTTP endpoint: `{"timezone":"UTC","serverTime":1687782213836,"rateLimits":[{"rateLimitType":"REQUEST_WEIGHT","interval":"MINUTE","intervalNum":1,"limit":1200},{"rateLimitType":"ORDERS","interval":"SECOND","intervalNum":10,"limit":100},{"rateLimitType":"ORDERS","interval":"DAY","intervalNum":1,"limit":200000},{"rateLimitType":"RAW_REQUESTS","interval":"MINUTE","intervalNum":5,"limit":6100}],"exchangeFilters":[],"symbols":[{"symbol":"ETHUSD","status":"TRADING","baseAsset":"ETH","baseAssetPrecision":8,"quoteAsset":"USD","quotePrecision":8,"quoteAssetPrecision":8,"baseCommissionPrecision":8,"quoteCommissionPrecision":8,"orderTypes":["LIMIT","LIMIT_MAKER","MARKET","STOP_LOSS_LIMIT","TAKE_PROFIT_LIMIT"],"icebergAllowed":true,"ocoAllowed":true,"quoteOrderQtyMarketAllowed":true,"allowTrailingStop":true,"cancelReplaceAllowed":true,"isSpotTradingAllowed":true,`
* Sample response from the Chainlink oracle: `true`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_bool_constructor_mmt](#services/jobs/testnets/Polygon-Mumbai/get_bool/get_bool.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_bool_request_mmt](#services/jobs/testnets/Polygon-Mumbai/get_bool/get_bool.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/get_bool/get_bool.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/get_bool/get_bool.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Bytes**

HTTP GET to any public API which parses the response and returns arbitrary-length raw byte data (**bytes**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | 5b48fe6ac244436bb5ad689ab64ef28b | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"See sample curl command below"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"image"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://ipfs.io/ipfs/QmZgsvrA1o1C8BGCrx6mHTqR1Ui1XqbCrtbMVrRLHtuPVD?filename=big-api-response.json"`
* Sample response from the HTTP endpoint: `{"image":"0x68747470733a2f2f697066732e696f2f697066732f516d5358416257356b716e3259777435444c336857354d736a654b4a4839724c654c6b51733362527579547871313f66696c656e616d653d73756e2d636861696e6c696e6b2e676966"}`
* Sample response from the Chainlink oracle: `https://ipfs.io/ipfs/QmSXAbW5kqn2Ywt5DL3hW5MsjeKJH9rLeLkQs3bRuyTxq1?filename=sun-chainlink.gif`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_bytes_constructor_mmt](#services/jobs/testnets/Polygon-Mumbai/get_bytes/get_bytes.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_bytes_request_mmt](#services/jobs/testnets/Polygon-Mumbai/get_bytes/get_bytes.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/get_bytes/get_bytes.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/get_bytes/get_bytes.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > String**

HTTP GET to any public API which parses the response and returns a sequence of characters (**string**).
### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | 1cc553d092584937bfe9be9a3dd4c1f6 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/2xw2us69"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"0,id"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10"`
* Sample response from the HTTP endpoint: `[{"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":30385,"m`
* Sample response from the Chainlink oracle: `bitcoin`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_string_constructor_mmt](#services/jobs/testnets/Polygon-Mumbai/get_string/get_string.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_string_request_mmt](#services/jobs/testnets/Polygon-Mumbai/get_string/get_string.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/get_string/get_string.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/get_string/get_string.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Uint256 x 2**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns two unsigned integers of type (**uint256**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | fe82fb4d00794483a1cf5ed23bd5e1b7 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **url1** | Yes | String | `"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC"` | The first URL to which to send the HTTP request for data                                                                                          |
| **url2** | Yes | String | `"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"` | The second URL to which to send the HTTP request for data                                                                                          |
| **path1** | Yes | String | `"BTC"` | The first [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **path2** | Yes | String | `"USD"` | The second [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `10 ** 18` | The number by which to multiply the results returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the first provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC"`
* Use the following curl command to test out the above request directly against the second provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"`
* Sample response from the first HTTP endpoint: `{"BTC":0.06201}`
* Sample response from the second HTTP endpoint: `{"USD":1886.15}`
* First sample response from the Chainlink oracle: `62010000000000000`
* Second sample response from the Chainlink oracle: `1886150000000000000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_x2_constructor_mmt](#services/jobs/testnets/Polygon-Mumbai/get_uint256_x2/get_uint256_x2.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_x2_request_mmt](#services/jobs/testnets/Polygon-Mumbai/get_uint256_x2/get_uint256_x2.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/get_uint256_x2/get_uint256_x2.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/get_uint256_x2/get_uint256_x2.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Uint256[]**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer array (**uint256[]**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | 9a2ba54374f34184bdc6390db3171994 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://api.binance.us/api/v3/depth?symbol=ETHUSD"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"bids,0"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.binance.us/api/v3/depth?symbol=ETHUSD"`
* Sample response from the HTTP endpoint: `{"lastUpdateId":3224229511,"bids":[["1838.71000000","0.01540000"],["1838.69000000","0.83100000"]`
* Sample response from the Chainlink oracle: `[1838, 0]`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_array_constructor_mmt](#services/jobs/testnets/Polygon-Mumbai/get_uint256_array/get_uint256_array.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_array_request_mmt](#services/jobs/testnets/Polygon-Mumbai/get_uint256_array/get_uint256_array.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/get_uint256_array/get_uint256_array.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/get_uint256_array/get_uint256_array.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Bytes[]**

HTTP GET to any public API which parses the response and returns an arbitrary-length raw byte data array (**bytes[]**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | 332c0b46e57f49cd8c7d74cdbe5106ab | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"symbols,0,orderTypes"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"`
* Sample response from the HTTP endpoint: `{"timezone":"UTC","serverTime":1687788634554,"rateLimits":[{"rateLimitType":"REQUEST_WEIGHT","interval":"MINUTE","intervalNum":1,"limit":1200},{"rateLimitType":"ORDERS","interval":"SECOND","intervalNum":10,"limit":100},{"rateLimitType":"ORDERS","interval":"DAY","intervalNum":1,"limit":200000},{"rateLimitType":"RAW_REQUESTS","interval":"MINUTE","intervalNum":5,"limit":6100}],"exchangeFilters":[],"symbols":[{"symbol":"ETHUSD","status":"TRADING","baseAsset":"ETH","baseAssetPrecision":8,"quoteAsset":"USD","quotePrecision":8,"quoteAssetPrecision":8,"baseCommissionPrecision":8,"quoteCommissionPrecision":8,"orderTypes":["LIMIT","LIMIT_MAKER","MARKET","STOP_LOSS_LIMIT","TAKE_PROFIT_LIMIT"]`
* Sample response from the Chainlink oracle: `[LIMIT, LIMIT_MAKER, MARKET, STOP_LOSS_LIMIT, TAKE_PROFIT_LIMIT]`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_bytes_array_constructor_mmt](#services/jobs/testnets/Polygon-Mumbai/get_bytes_array/get_bytes_array.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_bytes_array_request_mmt](#services/jobs/testnets/Polygon-Mumbai/get_bytes_array/get_bytes_array.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/get_bytes_array/get_bytes_array.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/get_bytes_array/get_bytes_array.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **POST > Bytes**

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0x12A3d7759F745f4cb8EE8a647038c040cB8862A5](https://mumbai.polygonscan.com/address/0x12a3d7759f745f4cb8ee8a647038c040cb8862a5) | b3390c03bfc24b42a0b0ab8051471bbb | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **post** | Yes | String | `"https://min-api.cryptocompare.com/data/pricemultifull"` | The URL to which to send the HTTP request for data                                                                                          |
| **requestData** | Yes | String | `'{"fsyms": "LINK", "tsyms": "USD"}'` | A statically-defined JSON body to be sent to the defined URL. Must enter "{}" if no request body is to be sent |
| **path** | Yes | String | `"RAW,LINK,USD,LASTMARKET"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X POST -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull" --data '{ "fsyms": "LINK", "tsyms": "USD"  }'`
* Sample response from the HTTP endpoint: `{"RAW":{"LINK":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"LINK","TOSYMBOL":"USD","FLAGS":"516","PRICE":6.082,"LASTUPDATE":1687813049,"MEDIAN":6.0785,"LASTVOLUME":74.97,"LASTVOLUMETO":456.04251,"LASTTRADEID":"65483495","VOLUMEDAY":1083331.4428641663,"VOLUMEDAYTO":6646357.149629641,"VOLUME24HOUR":1203763.9424006,"VOLUME24HOURTO":7385168.951435876,"OPENDAY":6.161,"HIGHDAY":6.259,"LOWDAY":6.024,"OPEN24HOUR":6.088,"HIGH24HOUR":6.259,"LOW24HOUR":6.021,"LASTMARKET":"Coinbase"`
* Sample response from the Chainlink oracle: `Coinbase`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[post_bytes_constructor_mmt](#services/jobs/testnets/Polygon-Mumbai/post_bytes/post_bytes.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[post_bytes_request_mmt](#services/jobs/testnets/Polygon-Mumbai/post_bytes/post_bytes.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/post_bytes/post_bytes.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Polygon-Mumbai/post_bytes/post_bytes.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

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

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://goerli.arbiscan.io/address/0xd08FEb8203E76f836D74608595346ab6b0f768C9) | f4821ba2e8ae4ddba52ea6860887df96 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/yz4jtj6u"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"RAW,ETH,USD,VOLUME24HOUR"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `10 ** 18` | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"`
* Sample response from the HTTP endpoint: `{"RAW":{"ETH":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"ETH","TOSYMBOL":"USD","FLAGS":"2052","PRICE":1878.15,"LASTUPDATE":1687648218,"MEDIAN":1878.7,"LASTVOLUME":0.18958184,"LASTVOLUMETO":355.9986749704,"LASTTRADEID":"458340262","VOLUMEDAY":82841.07502237387,"VOLUMEDAYTO":156245016.13863632,"VOLUME24HOUR":1211111.7212419`
* Sample response from the Chainlink oracle: `121111172124190010000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_constructor_agt](#services/jobs/testnets/Arbitrum-Goerli/get_uint256/get_uint256.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_request_agt](#services/jobs/testnets/Arbitrum-Goerli/get_uint256/get_uint256.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_uint256/get_uint256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_uint256/get_uint256.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Uint256 No Multiply**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer (**uint256**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://goerli.arbiscan.io/address/0xd08FEb8203E76f836D74608595346ab6b0f768C9) | 65cfa14a158540e1a8a94f9a33163839 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/yz4jtj6u"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"RAW,ETH,USD,VOLUME24HOUR"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"`
* Sample response from the HTTP endpoint: `{"RAW":{"ETH":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"ETH","TOSYMBOL":"USD","FLAGS":"2052","PRICE":1878.15,"LASTUPDATE":1687648218,"MEDIAN":1878.7,"LASTVOLUME":0.18958184,"LASTVOLUMETO":355.9986749704,"LASTTRADEID":"458340262","VOLUMEDAY":82841.07502237387,"VOLUMEDAYTO":156245016.13863632,"VOLUME24HOUR":1211111.7212419`
* Sample response from the Chainlink oracle: `1211111.72124190010000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_no_multiply_constructor_agt](#services/jobs/testnets/Arbitrum-Goerli/get_uint256_no_multiply/get_uint256_no_multiply.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_request_no_multiply_agt](#services/jobs/testnets/Arbitrum-Goerli/get_uint256_no_multiply/get_uint256_no_multiply.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_uint256_no_multiply/get_uint256_no_multiply.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_uint256_no_multiply/get_uint256_no_multiply.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Int256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer (**int256**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://goerli.arbiscan.io/address/0xd08FEb8203E76f836D74608595346ab6b0f768C9) | 339ac1ad0a864ea7b94811de8a362a64 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/yz4jtj6u"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"RAW,ETH,USD,VOLUME24HOUR"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `10 ** 18` | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"`
* Sample response from the HTTP endpoint: `{"RAW":{"ETH":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"ETH","TOSYMBOL":"USD","FLAGS":"2052","PRICE":1878.15,"LASTUPDATE":1687648218,"MEDIAN":1878.7,"LASTVOLUME":0.18958184,"LASTVOLUMETO":355.9986749704,"LASTTRADEID":"458340262","VOLUMEDAY":82841.07502237387,"VOLUMEDAYTO":156245016.13863632,"VOLUME24HOUR":1211111.7212419`
* Sample response from the Chainlink oracle: `1211111.72124190010000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_int256_constructor_agt](#services/jobs/testnets/Arbitrum-Goerli/get_int256/get_int256.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_int256_request_agt](#services/jobs/testnets/Arbitrum-Goerli/get_int256/get_int256.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_int256/get_int256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_int256/get_int256.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Bool**

HTTP GET to any public API which parses the response and returns a boolean (**bool**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://goerli.arbiscan.io/address/0xd08FEb8203E76f836D74608595346ab6b0f768C9) | 2e0a430bcd2b482d8462fdcc5224fba1 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"symbols,0,isSpotTradingAllowed"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"`
* Sample response from the HTTP endpoint: `{"timezone":"UTC","serverTime":1687782213836,"rateLimits":[{"rateLimitType":"REQUEST_WEIGHT","interval":"MINUTE","intervalNum":1,"limit":1200},{"rateLimitType":"ORDERS","interval":"SECOND","intervalNum":10,"limit":100},{"rateLimitType":"ORDERS","interval":"DAY","intervalNum":1,"limit":200000},{"rateLimitType":"RAW_REQUESTS","interval":"MINUTE","intervalNum":5,"limit":6100}],"exchangeFilters":[],"symbols":[{"symbol":"ETHUSD","status":"TRADING","baseAsset":"ETH","baseAssetPrecision":8,"quoteAsset":"USD","quotePrecision":8,"quoteAssetPrecision":8,"baseCommissionPrecision":8,"quoteCommissionPrecision":8,"orderTypes":["LIMIT","LIMIT_MAKER","MARKET","STOP_LOSS_LIMIT","TAKE_PROFIT_LIMIT"],"icebergAllowed":true,"ocoAllowed":true,"quoteOrderQtyMarketAllowed":true,"allowTrailingStop":true,"cancelReplaceAllowed":true,"isSpotTradingAllowed":true,`
* Sample response from the Chainlink oracle: `true`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_bool_constructor_agt](#services/jobs/testnets/Arbitrum-Goerli/get_bool/get_bool.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_bool_request_agt](#services/jobs/testnets/Arbitrum-Goerli/get_bool/get_bool.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_bool/get_bool.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_bool/get_bool.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Bytes**

HTTP GET to any public API which parses the response and returns arbitrary-length raw byte data (**bytes**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://goerli.arbiscan.io/address/0xd08FEb8203E76f836D74608595346ab6b0f768C9) | 5b48fe6ac244436bb5ad689ab64ef28b | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"See sample curl command below"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"image"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://ipfs.io/ipfs/QmZgsvrA1o1C8BGCrx6mHTqR1Ui1XqbCrtbMVrRLHtuPVD?filename=big-api-response.json"`
* Sample response from the HTTP endpoint: `{"image":"0x68747470733a2f2f697066732e696f2f697066732f516d5358416257356b716e3259777435444c336857354d736a654b4a4839724c654c6b51733362527579547871313f66696c656e616d653d73756e2d636861696e6c696e6b2e676966"}`
* Sample response from the Chainlink oracle: `https://ipfs.io/ipfs/QmSXAbW5kqn2Ywt5DL3hW5MsjeKJH9rLeLkQs3bRuyTxq1?filename=sun-chainlink.gif`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_bytes_constructor_agt](#services/jobs/testnets/Arbitrum-Goerli/get_bytes/get_bytes.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_bytes_request_agt](#services/jobs/testnets/Arbitrum-Goerli/get_bytes/get_bytes.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_bytes/get_bytes.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_bytes/get_bytes.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > String**

HTTP GET to any public API which parses the response and returns a sequence of characters (**string**).
### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://goerli.arbiscan.io/address/0xd08FEb8203E76f836D74608595346ab6b0f768C9) | 1cc553d092584937bfe9be9a3dd4c1f6 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/2xw2us69"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"0,id"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10"`
* Sample response from the HTTP endpoint: `[{"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":30385,"m`
* Sample response from the Chainlink oracle: `bitcoin`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_string_constructor_agt](#services/jobs/testnets/Arbitrum-Goerli/get_string/get_string.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_string_request_agt](#services/jobs/testnets/Arbitrum-Goerli/get_string/get_string.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_string/get_string.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_string/get_string.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Uint256 x 2**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns two unsigned integers of type (**uint256**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://goerli.arbiscan.io/address/0xd08FEb8203E76f836D74608595346ab6b0f768C9) | fe82fb4d00794483a1cf5ed23bd5e1b7 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **url1** | Yes | String | `"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC"` | The first URL to which to send the HTTP request for data                                                                                          |
| **url2** | Yes | String | `"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"` | The second URL to which to send the HTTP request for data                                                                                          |
| **path1** | Yes | String | `"BTC"` | The first [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **path2** | Yes | String | `"USD"` | The second [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `10 ** 18` | The number by which to multiply the results returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the first provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC"`
* Use the following curl command to test out the above request directly against the second provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"`
* Sample response from the first HTTP endpoint: `{"BTC":0.06201}`
* Sample response from the second HTTP endpoint: `{"USD":1886.15}`
* First sample response from the Chainlink oracle: `62010000000000000`
* Second sample response from the Chainlink oracle: `1886150000000000000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_x2_constructor_agt](#services/jobs/testnets/Arbitrum-Goerli/get_uint256_x2/get_uint256_x2.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_x2_request_agt](#services/jobs/testnets/Arbitrum-Goerli/get_uint256_x2/get_uint256_x2.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_uint256_x2/get_uint256_x2.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_uint256_x2/get_uint256_x2.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Uint256[]**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer array (**uint256[]**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://goerli.arbiscan.io/address/0xd08FEb8203E76f836D74608595346ab6b0f768C9) | 9a2ba54374f34184bdc6390db3171994 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://api.binance.us/api/v3/depth?symbol=ETHUSD"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"bids,0"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.binance.us/api/v3/depth?symbol=ETHUSD"`
* Sample response from the HTTP endpoint: `{"lastUpdateId":3224229511,"bids":[["1838.71000000","0.01540000"],["1838.69000000","0.83100000"]`
* Sample response from the Chainlink oracle: `[1838, 0]`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_array_constructor_agt](#services/jobs/testnets/Arbitrum-Goerli/get_uint256_array/get_uint256_array.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_array_request_agt](#services/jobs/testnets/Arbitrum-Goerli/get_uint256_array/get_uint256_array.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_uint256_array/get_uint256_array.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_uint256_array/get_uint256_array.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Bytes[]**

HTTP GET to any public API which parses the response and returns an arbitrary-length raw byte data array (**bytes[]**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://goerli.arbiscan.io/address/0xd08FEb8203E76f836D74608595346ab6b0f768C9) | 332c0b46e57f49cd8c7d74cdbe5106ab | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"symbols,0,orderTypes"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"`
* Sample response from the HTTP endpoint: `{"timezone":"UTC","serverTime":1687788634554,"rateLimits":[{"rateLimitType":"REQUEST_WEIGHT","interval":"MINUTE","intervalNum":1,"limit":1200},{"rateLimitType":"ORDERS","interval":"SECOND","intervalNum":10,"limit":100},{"rateLimitType":"ORDERS","interval":"DAY","intervalNum":1,"limit":200000},{"rateLimitType":"RAW_REQUESTS","interval":"MINUTE","intervalNum":5,"limit":6100}],"exchangeFilters":[],"symbols":[{"symbol":"ETHUSD","status":"TRADING","baseAsset":"ETH","baseAssetPrecision":8,"quoteAsset":"USD","quotePrecision":8,"quoteAssetPrecision":8,"baseCommissionPrecision":8,"quoteCommissionPrecision":8,"orderTypes":["LIMIT","LIMIT_MAKER","MARKET","STOP_LOSS_LIMIT","TAKE_PROFIT_LIMIT"]`
* Sample response from the Chainlink oracle: `[LIMIT, LIMIT_MAKER, MARKET, STOP_LOSS_LIMIT, TAKE_PROFIT_LIMIT]`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_bytes_array_constructor_agt](#services/jobs/testnets/Arbitrum-Goerli/get_bytes_array/get_bytes_array.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_bytes_array_request_agt](#services/jobs/testnets/Arbitrum-Goerli/get_bytes_array/get_bytes_array.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_bytes_array/get_bytes_array.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/get_bytes_array/get_bytes_array.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **POST > Bytes**

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://goerli.arbiscan.io/address/0xd08FEb8203E76f836D74608595346ab6b0f768C9) | b3390c03bfc24b42a0b0ab8051471bbb | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **post** | Yes | String | `"https://min-api.cryptocompare.com/data/pricemultifull"` | The URL to which to send the HTTP request for data                                                                                          |
| **requestData** | Yes | String | `'{"fsyms": "LINK", "tsyms": "USD"}'` | A statically-defined JSON body to be sent to the defined URL. Must enter "{}" if no request body is to be sent |
| **path** | Yes | String | `"RAW,LINK,USD,LASTMARKET"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X POST -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull" --data '{ "fsyms": "LINK", "tsyms": "USD"  }'`
* Sample response from the HTTP endpoint: `{"RAW":{"LINK":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"LINK","TOSYMBOL":"USD","FLAGS":"516","PRICE":6.082,"LASTUPDATE":1687813049,"MEDIAN":6.0785,"LASTVOLUME":74.97,"LASTVOLUMETO":456.04251,"LASTTRADEID":"65483495","VOLUMEDAY":1083331.4428641663,"VOLUMEDAYTO":6646357.149629641,"VOLUME24HOUR":1203763.9424006,"VOLUME24HOURTO":7385168.951435876,"OPENDAY":6.161,"HIGHDAY":6.259,"LOWDAY":6.024,"OPEN24HOUR":6.088,"HIGH24HOUR":6.259,"LOW24HOUR":6.021,"LASTMARKET":"Coinbase"`
* Sample response from the Chainlink oracle: `Coinbase`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[post_bytes_constructor_agt](#services/jobs/testnets/Arbitrum-Goerli/post_bytes/post_bytes.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[post_bytes_request_agt](#services/jobs/testnets/Arbitrum-Goerli/post_bytes/post_bytes.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/post_bytes/post_bytes.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Arbitrum-Goerli/post_bytes/post_bytes.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

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
Avalanche Fuji Testnet is the testnet for Avalance Mainnet (AVAX), which is a smart contract-capable blockchain platform focused on transaction speed, low costs, and eco-friendliness.

<!-- tabs:start -->
#### **GET > Uint256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer (**uint256**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406](https://testnet.snowtrace.io/address/0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406) | f4821ba2e8ae4ddba52ea6860887df96 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/yz4jtj6u"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"RAW,ETH,USD,VOLUME24HOUR"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `10 ** 18` | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"`
* Sample response from the HTTP endpoint: `{"RAW":{"ETH":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"ETH","TOSYMBOL":"USD","FLAGS":"2052","PRICE":1878.15,"LASTUPDATE":1687648218,"MEDIAN":1878.7,"LASTVOLUME":0.18958184,"LASTVOLUMETO":355.9986749704,"LASTTRADEID":"458340262","VOLUMEDAY":82841.07502237387,"VOLUMEDAYTO":156245016.13863632,"VOLUME24HOUR":1211111.7212419`
* Sample response from the Chainlink oracle: `121111172124190010000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_constructor_acft](#services/jobs/testnets/Avalanche-Fuji/get_uint256/get_uint256.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_request_acft](#services/jobs/testnets/Avalanche-Fuji/get_uint256/get_uint256.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/get_uint256/get_uint256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/get_uint256/get_uint256.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Uint256 No Multiply**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer (**uint256**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406](https://testnet.snowtrace.io/address/0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406) | 65cfa14a158540e1a8a94f9a33163839 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/yz4jtj6u"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"RAW,ETH,USD,VOLUME24HOUR"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"`
* Sample response from the HTTP endpoint: `{"RAW":{"ETH":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"ETH","TOSYMBOL":"USD","FLAGS":"2052","PRICE":1878.15,"LASTUPDATE":1687648218,"MEDIAN":1878.7,"LASTVOLUME":0.18958184,"LASTVOLUMETO":355.9986749704,"LASTTRADEID":"458340262","VOLUMEDAY":82841.07502237387,"VOLUMEDAYTO":156245016.13863632,"VOLUME24HOUR":1211111.7212419`
* Sample response from the Chainlink oracle: `1211111.72124190010000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_no_multiply_constructor_acft](#services/jobs/testnets/Avalanche-Fuji/get_uint256_no_multiply/get_uint256_no_multiply.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_request_no_multiply_acft](#services/jobs/testnets/Avalanche-Fuji/get_uint256_no_multiply/get_uint256_no_multiply.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/get_uint256_no_multiply/get_uint256_no_multiply.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/get_uint256_no_multiply/get_uint256_no_multiply.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Int256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer (**int256**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406](https://testnet.snowtrace.io/address/0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406) | 339ac1ad0a864ea7b94811de8a362a64 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/yz4jtj6u"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"RAW,ETH,USD,VOLUME24HOUR"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `10 ** 18` | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"`
* Sample response from the HTTP endpoint: `{"RAW":{"ETH":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"ETH","TOSYMBOL":"USD","FLAGS":"2052","PRICE":1878.15,"LASTUPDATE":1687648218,"MEDIAN":1878.7,"LASTVOLUME":0.18958184,"LASTVOLUMETO":355.9986749704,"LASTTRADEID":"458340262","VOLUMEDAY":82841.07502237387,"VOLUMEDAYTO":156245016.13863632,"VOLUME24HOUR":1211111.7212419`
* Sample response from the Chainlink oracle: `1211111.72124190010000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_int256_constructor_acft](#services/jobs/testnets/Avalanche-Fuji/get_int256/get_int256.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_int256_request_acft](#services/jobs/testnets/Avalanche-Fuji/get_int256/get_int256.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/get_int256/get_int256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/get_int256/get_int256.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Bool**

HTTP GET to any public API which parses the response and returns a boolean (**bool**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406](https://testnet.snowtrace.io/address/0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406) | 2e0a430bcd2b482d8462fdcc5224fba1 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"symbols,0,isSpotTradingAllowed"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"`
* Sample response from the HTTP endpoint: `{"timezone":"UTC","serverTime":1687782213836,"rateLimits":[{"rateLimitType":"REQUEST_WEIGHT","interval":"MINUTE","intervalNum":1,"limit":1200},{"rateLimitType":"ORDERS","interval":"SECOND","intervalNum":10,"limit":100},{"rateLimitType":"ORDERS","interval":"DAY","intervalNum":1,"limit":200000},{"rateLimitType":"RAW_REQUESTS","interval":"MINUTE","intervalNum":5,"limit":6100}],"exchangeFilters":[],"symbols":[{"symbol":"ETHUSD","status":"TRADING","baseAsset":"ETH","baseAssetPrecision":8,"quoteAsset":"USD","quotePrecision":8,"quoteAssetPrecision":8,"baseCommissionPrecision":8,"quoteCommissionPrecision":8,"orderTypes":["LIMIT","LIMIT_MAKER","MARKET","STOP_LOSS_LIMIT","TAKE_PROFIT_LIMIT"],"icebergAllowed":true,"ocoAllowed":true,"quoteOrderQtyMarketAllowed":true,"allowTrailingStop":true,"cancelReplaceAllowed":true,"isSpotTradingAllowed":true,`
* Sample response from the Chainlink oracle: `true`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_bool_constructor_acft](#services/jobs/testnets/Avalanche-Fuji/get_bool/get_bool.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_bool_request_acft](#services/jobs/testnets/Avalanche-Fuji/get_bool/get_bool.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/get_bool/get_bool.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/get_bool/get_bool.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Bytes**

HTTP GET to any public API which parses the response and returns arbitrary-length raw byte data (**bytes**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406](https://testnet.snowtrace.io/address/0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406) | 5b48fe6ac244436bb5ad689ab64ef28b | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"See sample curl command below"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"image"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://ipfs.io/ipfs/QmZgsvrA1o1C8BGCrx6mHTqR1Ui1XqbCrtbMVrRLHtuPVD?filename=big-api-response.json"`
* Sample response from the HTTP endpoint: `{"image":"0x68747470733a2f2f697066732e696f2f697066732f516d5358416257356b716e3259777435444c336857354d736a654b4a4839724c654c6b51733362527579547871313f66696c656e616d653d73756e2d636861696e6c696e6b2e676966"}`
* Sample response from the Chainlink oracle: `https://ipfs.io/ipfs/QmSXAbW5kqn2Ywt5DL3hW5MsjeKJH9rLeLkQs3bRuyTxq1?filename=sun-chainlink.gif`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_bytes_constructor_acft](#services/jobs/testnets/Avalanche-Fuji/get_bytes/get_bytes.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_bytes_request_acft](#services/jobs/testnets/Avalanche-Fuji/get_bytes/get_bytes.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/get_bytes/get_bytes.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/get_bytes/get_bytes.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > String**

HTTP GET to any public API which parses the response and returns a sequence of characters (**string**).
### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406](https://testnet.snowtrace.io/address/0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406) | 1cc553d092584937bfe9be9a3dd4c1f6 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/2xw2us69"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"0,id"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10"`
* Sample response from the HTTP endpoint: `[{"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":30385,"m`
* Sample response from the Chainlink oracle: `bitcoin`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_string_constructor_acft](#services/jobs/testnets/Avalanche-Fuji/get_string/get_string.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_string_request_acft](#services/jobs/testnets/Avalanche-Fuji/get_string/get_string.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/get_string/get_string.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/get_string/get_string.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Uint256 x 2**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns two unsigned integers of type (**uint256**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406](https://testnet.snowtrace.io/address/0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406) | fe82fb4d00794483a1cf5ed23bd5e1b7 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **url1** | Yes | String | `"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC"` | The first URL to which to send the HTTP request for data                                                                                          |
| **url2** | Yes | String | `"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"` | The second URL to which to send the HTTP request for data                                                                                          |
| **path1** | Yes | String | `"BTC"` | The first [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **path2** | Yes | String | `"USD"` | The second [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `10 ** 18` | The number by which to multiply the results returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the first provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC"`
* Use the following curl command to test out the above request directly against the second provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"`
* Sample response from the first HTTP endpoint: `{"BTC":0.06201}`
* Sample response from the second HTTP endpoint: `{"USD":1886.15}`
* First sample response from the Chainlink oracle: `62010000000000000`
* Second sample response from the Chainlink oracle: `1886150000000000000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_x2_constructor_acft](#services/jobs/testnets/Avalanche-Fuji/get_uint256_x2/get_uint256_x2.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_x2_request_acft](#services/jobs/testnets/Avalanche-Fuji/get_uint256_x2/get_uint256_x2.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/get_uint256_x2/get_uint256_x2.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/get_uint256_x2/get_uint256_x2.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Uint256[]**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer array (**uint256[]**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406](https://testnet.snowtrace.io/address/0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406) | 9a2ba54374f34184bdc6390db3171994 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://api.binance.us/api/v3/depth?symbol=ETHUSD"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"bids,0"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.binance.us/api/v3/depth?symbol=ETHUSD"`
* Sample response from the HTTP endpoint: `{"lastUpdateId":3224229511,"bids":[["1838.71000000","0.01540000"],["1838.69000000","0.83100000"]`
* Sample response from the Chainlink oracle: `[1838, 0]`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_array_constructor_acft](#services/jobs/testnets/Avalanche-Fuji/get_uint256_array/get_uint256_array.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_array_request_acft](#services/jobs/testnets/Avalanche-Fuji/get_uint256_array/get_uint256_array.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/get_uint256_array/get_uint256_array.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/get_uint256_array/get_uint256_array.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Bytes[]**

HTTP GET to any public API which parses the response and returns an arbitrary-length raw byte data array (**bytes[]**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406](https://testnet.snowtrace.io/address/0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406) | 332c0b46e57f49cd8c7d74cdbe5106ab | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"symbols,0,orderTypes"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"`
* Sample response from the HTTP endpoint: `{"timezone":"UTC","serverTime":1687788634554,"rateLimits":[{"rateLimitType":"REQUEST_WEIGHT","interval":"MINUTE","intervalNum":1,"limit":1200},{"rateLimitType":"ORDERS","interval":"SECOND","intervalNum":10,"limit":100},{"rateLimitType":"ORDERS","interval":"DAY","intervalNum":1,"limit":200000},{"rateLimitType":"RAW_REQUESTS","interval":"MINUTE","intervalNum":5,"limit":6100}],"exchangeFilters":[],"symbols":[{"symbol":"ETHUSD","status":"TRADING","baseAsset":"ETH","baseAssetPrecision":8,"quoteAsset":"USD","quotePrecision":8,"quoteAssetPrecision":8,"baseCommissionPrecision":8,"quoteCommissionPrecision":8,"orderTypes":["LIMIT","LIMIT_MAKER","MARKET","STOP_LOSS_LIMIT","TAKE_PROFIT_LIMIT"]`
* Sample response from the Chainlink oracle: `[LIMIT, LIMIT_MAKER, MARKET, STOP_LOSS_LIMIT, TAKE_PROFIT_LIMIT]`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_bytes_array_constructor_acft](#services/jobs/testnets/Avalanche-Fuji/get_bytes_array/get_bytes_array.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_bytes_array_request_acft](#services/jobs/testnets/Avalanche-Fuji/get_bytes_array/get_bytes_array.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/get_bytes_array/get_bytes_array.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/get_bytes_array/get_bytes_array.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **POST > Bytes**

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406](https://testnet.snowtrace.io/address/0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406) | b3390c03bfc24b42a0b0ab8051471bbb | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **post** | Yes | String | `"https://min-api.cryptocompare.com/data/pricemultifull"` | The URL to which to send the HTTP request for data                                                                                          |
| **requestData** | Yes | String | `'{"fsyms": "LINK", "tsyms": "USD"}'` | A statically-defined JSON body to be sent to the defined URL. Must enter "{}" if no request body is to be sent |
| **path** | Yes | String | `"RAW,LINK,USD,LASTMARKET"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X POST -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull" --data '{ "fsyms": "LINK", "tsyms": "USD"  }'`
* Sample response from the HTTP endpoint: `{"RAW":{"LINK":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"LINK","TOSYMBOL":"USD","FLAGS":"516","PRICE":6.082,"LASTUPDATE":1687813049,"MEDIAN":6.0785,"LASTVOLUME":74.97,"LASTVOLUMETO":456.04251,"LASTTRADEID":"65483495","VOLUMEDAY":1083331.4428641663,"VOLUMEDAYTO":6646357.149629641,"VOLUME24HOUR":1203763.9424006,"VOLUME24HOURTO":7385168.951435876,"OPENDAY":6.161,"HIGHDAY":6.259,"LOWDAY":6.024,"OPEN24HOUR":6.088,"HIGH24HOUR":6.259,"LOW24HOUR":6.021,"LASTMARKET":"Coinbase"`
* Sample response from the Chainlink oracle: `Coinbase`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[post_bytes_constructor_acft](#services/jobs/testnets/Avalanche-Fuji/post_bytes/post_bytes.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[post_bytes_request_acft](#services/jobs/testnets/Avalanche-Fuji/post_bytes/post_bytes.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/post_bytes/post_bytes.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Avalanche-Fuji/post_bytes/post_bytes.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

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

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://testnet.bscscan.com/address/0xd08feb8203e76f836d74608595346ab6b0f768c9) | f4821ba2e8ae4ddba52ea6860887df96 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/yz4jtj6u"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"RAW,ETH,USD,VOLUME24HOUR"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `10 ** 18` | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"`
* Sample response from the HTTP endpoint: `{"RAW":{"ETH":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"ETH","TOSYMBOL":"USD","FLAGS":"2052","PRICE":1878.15,"LASTUPDATE":1687648218,"MEDIAN":1878.7,"LASTVOLUME":0.18958184,"LASTVOLUMETO":355.9986749704,"LASTTRADEID":"458340262","VOLUMEDAY":82841.07502237387,"VOLUMEDAYTO":156245016.13863632,"VOLUME24HOUR":1211111.7212419`
* Sample response from the Chainlink oracle: `121111172124190010000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_constructor_btt](#services/jobs/testnets/Binance-Testnet/get_uint256/get_uint256.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_request_btt](#services/jobs/testnets/Binance-Testnet/get_uint256/get_uint256.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/get_uint256/get_uint256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/get_uint256/get_uint256.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Uint256 No Multiply**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer (**uint256**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://testnet.bscscan.com/address/0xd08feb8203e76f836d74608595346ab6b0f768c9) | 65cfa14a158540e1a8a94f9a33163839 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/yz4jtj6u"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"RAW,ETH,USD,VOLUME24HOUR"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"`
* Sample response from the HTTP endpoint: `{"RAW":{"ETH":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"ETH","TOSYMBOL":"USD","FLAGS":"2052","PRICE":1878.15,"LASTUPDATE":1687648218,"MEDIAN":1878.7,"LASTVOLUME":0.18958184,"LASTVOLUMETO":355.9986749704,"LASTTRADEID":"458340262","VOLUMEDAY":82841.07502237387,"VOLUMEDAYTO":156245016.13863632,"VOLUME24HOUR":1211111.7212419`
* Sample response from the Chainlink oracle: `1211111.72124190010000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_no_multiply_constructor_btt](#services/jobs/testnets/Binance-Testnet/get_uint256_no_multiply/get_uint256_no_multiply.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_request_no_multiply_btt](#services/jobs/testnets/Binance-Testnet/get_uint256_no_multiply/get_uint256_no_multiply.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/get_uint256_no_multiply/get_uint256_no_multiply.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/get_uint256_no_multiply/get_uint256_no_multiply.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Int256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer (**int256**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://testnet.bscscan.com/address/0xd08feb8203e76f836d74608595346ab6b0f768c9) | 339ac1ad0a864ea7b94811de8a362a64 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/yz4jtj6u"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"RAW,ETH,USD,VOLUME24HOUR"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `10 ** 18` | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"`
* Sample response from the HTTP endpoint: `{"RAW":{"ETH":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"ETH","TOSYMBOL":"USD","FLAGS":"2052","PRICE":1878.15,"LASTUPDATE":1687648218,"MEDIAN":1878.7,"LASTVOLUME":0.18958184,"LASTVOLUMETO":355.9986749704,"LASTTRADEID":"458340262","VOLUMEDAY":82841.07502237387,"VOLUMEDAYTO":156245016.13863632,"VOLUME24HOUR":1211111.7212419`
* Sample response from the Chainlink oracle: `1211111.72124190010000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_int256_constructor_btt](#services/jobs/testnets/Binance-Testnet/get_int256/get_int256.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_int256_request_btt](#services/jobs/testnets/Binance-Testnet/get_int256/get_int256.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/get_int256/get_int256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/get_int256/get_int256.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Bool**

HTTP GET to any public API which parses the response and returns a boolean (**bool**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://testnet.bscscan.com/address/0xd08feb8203e76f836d74608595346ab6b0f768c9) | 2e0a430bcd2b482d8462fdcc5224fba1 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"symbols,0,isSpotTradingAllowed"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"`
* Sample response from the HTTP endpoint: `{"timezone":"UTC","serverTime":1687782213836,"rateLimits":[{"rateLimitType":"REQUEST_WEIGHT","interval":"MINUTE","intervalNum":1,"limit":1200},{"rateLimitType":"ORDERS","interval":"SECOND","intervalNum":10,"limit":100},{"rateLimitType":"ORDERS","interval":"DAY","intervalNum":1,"limit":200000},{"rateLimitType":"RAW_REQUESTS","interval":"MINUTE","intervalNum":5,"limit":6100}],"exchangeFilters":[],"symbols":[{"symbol":"ETHUSD","status":"TRADING","baseAsset":"ETH","baseAssetPrecision":8,"quoteAsset":"USD","quotePrecision":8,"quoteAssetPrecision":8,"baseCommissionPrecision":8,"quoteCommissionPrecision":8,"orderTypes":["LIMIT","LIMIT_MAKER","MARKET","STOP_LOSS_LIMIT","TAKE_PROFIT_LIMIT"],"icebergAllowed":true,"ocoAllowed":true,"quoteOrderQtyMarketAllowed":true,"allowTrailingStop":true,"cancelReplaceAllowed":true,"isSpotTradingAllowed":true,`
* Sample response from the Chainlink oracle: `true`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_bool_constructor_btt](#services/jobs/testnets/Binance-Testnet/get_bool/get_bool.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_bool_request_btt](#services/jobs/testnets/Binance-Testnet/get_bool/get_bool.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/get_bool/get_bool.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/get_bool/get_bool.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Bytes**

HTTP GET to any public API which parses the response and returns arbitrary-length raw byte data (**bytes**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://testnet.bscscan.com/address/0xd08feb8203e76f836d74608595346ab6b0f768c9) | 5b48fe6ac244436bb5ad689ab64ef28b | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"See sample curl command below"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"image"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://ipfs.io/ipfs/QmZgsvrA1o1C8BGCrx6mHTqR1Ui1XqbCrtbMVrRLHtuPVD?filename=big-api-response.json"`
* Sample response from the HTTP endpoint: `{"image":"0x68747470733a2f2f697066732e696f2f697066732f516d5358416257356b716e3259777435444c336857354d736a654b4a4839724c654c6b51733362527579547871313f66696c656e616d653d73756e2d636861696e6c696e6b2e676966"}`
* Sample response from the Chainlink oracle: `https://ipfs.io/ipfs/QmSXAbW5kqn2Ywt5DL3hW5MsjeKJH9rLeLkQs3bRuyTxq1?filename=sun-chainlink.gif`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_bytes_constructor_btt](#services/jobs/testnets/Binance-Testnet/get_bytes/get_bytes.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_bytes_request_btt](#services/jobs/testnets/Binance-Testnet/get_bytes/get_bytes.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/get_bytes/get_bytes.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/get_bytes/get_bytes.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > String**

HTTP GET to any public API which parses the response and returns a sequence of characters (**string**).
### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://testnet.bscscan.com/address/0xd08feb8203e76f836d74608595346ab6b0f768c9) | 1cc553d092584937bfe9be9a3dd4c1f6 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://tinyurl.com/2xw2us69"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"0,id"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10"`
* Sample response from the HTTP endpoint: `[{"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":30385,"m`
* Sample response from the Chainlink oracle: `bitcoin`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_string_constructor_btt](#services/jobs/testnets/Binance-Testnet/get_string/get_string.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_string_request_btt](#services/jobs/testnets/Binance-Testnet/get_string/get_string.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/get_string/get_string.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/get_string/get_string.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Uint256 x 2**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns two unsigned integers of type (**uint256**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://testnet.bscscan.com/address/0xd08feb8203e76f836d74608595346ab6b0f768c9) | fe82fb4d00794483a1cf5ed23bd5e1b7 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **url1** | Yes | String | `"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC"` | The first URL to which to send the HTTP request for data                                                                                          |
| **url2** | Yes | String | `"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"` | The second URL to which to send the HTTP request for data                                                                                          |
| **path1** | Yes | String | `"BTC"` | The first [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **path2** | Yes | String | `"USD"` | The second [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **times** | Yes | int256 | `10 ** 18` | The number by which to multiply the results returned to the contract. This is important, as Solidity cannot handle decimal objects. |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the first provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC"`
* Use the following curl command to test out the above request directly against the second provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"`
* Sample response from the first HTTP endpoint: `{"BTC":0.06201}`
* Sample response from the second HTTP endpoint: `{"USD":1886.15}`
* First sample response from the Chainlink oracle: `62010000000000000`
* Second sample response from the Chainlink oracle: `1886150000000000000000`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_x2_constructor_btt](#services/jobs/testnets/Binance-Testnet/get_uint256_x2/get_uint256_x2.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_x2_request_btt](#services/jobs/testnets/Binance-Testnet/get_uint256_x2/get_uint256_x2.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/get_uint256_x2/get_uint256_x2.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/get_uint256_x2/get_uint256_x2.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Uint256[]**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer array (**uint256[]**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://testnet.bscscan.com/address/0xd08feb8203e76f836d74608595346ab6b0f768c9) | 9a2ba54374f34184bdc6390db3171994 | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://api.binance.us/api/v3/depth?symbol=ETHUSD"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"bids,0"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.binance.us/api/v3/depth?symbol=ETHUSD"`
* Sample response from the HTTP endpoint: `{"lastUpdateId":3224229511,"bids":[["1838.71000000","0.01540000"],["1838.69000000","0.83100000"]`
* Sample response from the Chainlink oracle: `[1838, 0]`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_uint256_array_constructor_btt](#services/jobs/testnets/Binance-Testnet/get_uint256_array/get_uint256_array.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_uint256_array_request_btt](#services/jobs/testnets/Binance-Testnet/get_uint256_array/get_uint256_array.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/get_uint256_array/get_uint256_array.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/get_uint256_array/get_uint256_array.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **GET > Bytes[]**

HTTP GET to any public API which parses the response and returns an arbitrary-length raw byte data array (**bytes[]**).

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://testnet.bscscan.com/address/0xd08feb8203e76f836d74608595346ab6b0f768c9) | 332c0b46e57f49cd8c7d74cdbe5106ab | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"symbols,0,orderTypes"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"`
* Sample response from the HTTP endpoint: `{"timezone":"UTC","serverTime":1687788634554,"rateLimits":[{"rateLimitType":"REQUEST_WEIGHT","interval":"MINUTE","intervalNum":1,"limit":1200},{"rateLimitType":"ORDERS","interval":"SECOND","intervalNum":10,"limit":100},{"rateLimitType":"ORDERS","interval":"DAY","intervalNum":1,"limit":200000},{"rateLimitType":"RAW_REQUESTS","interval":"MINUTE","intervalNum":5,"limit":6100}],"exchangeFilters":[],"symbols":[{"symbol":"ETHUSD","status":"TRADING","baseAsset":"ETH","baseAssetPrecision":8,"quoteAsset":"USD","quotePrecision":8,"quoteAssetPrecision":8,"baseCommissionPrecision":8,"quoteCommissionPrecision":8,"orderTypes":["LIMIT","LIMIT_MAKER","MARKET","STOP_LOSS_LIMIT","TAKE_PROFIT_LIMIT"]`
* Sample response from the Chainlink oracle: `[LIMIT, LIMIT_MAKER, MARKET, STOP_LOSS_LIMIT, TAKE_PROFIT_LIMIT]`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[get_bytes_array_constructor_btt](#services/jobs/testnets/Binance-Testnet/get_bytes_array/get_bytes_array.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[get_bytes_array_request_btt](#services/jobs/testnets/Binance-Testnet/get_bytes_array/get_bytes_array.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/get_bytes_array/get_bytes_array.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/get_bytes_array/get_bytes_array.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

#### **POST > Bytes**

### Job details

| Address                                    | JobID                            | Job Cost              |
|--------------------------------------------|----------------------------------|-----------------------|
| [0xd08FEb8203E76f836D74608595346ab6b0f768C9](https://testnet.bscscan.com/address/0xd08feb8203e76f836d74608595346ab6b0f768c9) | b3390c03bfc24b42a0b0ab8051471bbb | 0 LINK                |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **post** | Yes | String | `"https://min-api.cryptocompare.com/data/pricemultifull"` | The URL to which to send the HTTP request for data                                                                                          |
| **requestData** | Yes | String | `'{"fsyms": "LINK", "tsyms": "USD"}'` | A statically-defined JSON body to be sent to the defined URL. Must enter "{}" if no request body is to be sent |
| **path** | Yes | String | `"RAW,LINK,USD,LASTMARKET"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X POST -H "content-type:application/json" "https://min-api.cryptocompare.com/data/pricemultifull" --data '{ "fsyms": "LINK", "tsyms": "USD"  }'`
* Sample response from the HTTP endpoint: `{"RAW":{"LINK":{"USD":{"TYPE":"5","MARKET":"CCCAGG","FROMSYMBOL":"LINK","TOSYMBOL":"USD","FLAGS":"516","PRICE":6.082,"LASTUPDATE":1687813049,"MEDIAN":6.0785,"LASTVOLUME":74.97,"LASTVOLUMETO":456.04251,"LASTTRADEID":"65483495","VOLUMEDAY":1083331.4428641663,"VOLUMEDAYTO":6646357.149629641,"VOLUME24HOUR":1203763.9424006,"VOLUME24HOURTO":7385168.951435876,"OPENDAY":6.161,"HIGHDAY":6.259,"LOWDAY":6.024,"OPEN24HOUR":6.088,"HIGH24HOUR":6.259,"LOW24HOUR":6.021,"LASTMARKET":"Coinbase"`
* Sample response from the Chainlink oracle: `Coinbase`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

[post_bytes_constructor_btt](#services/jobs/testnets/Binance-Testnet/post_bytes/post_bytes.sol ':include :type=code :fragment=constructor')

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

[post_bytes_request_btt](#services/jobs/testnets/Binance-Testnet/post_bytes/post_bytes.sol ':include :type=code :fragment=request')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/post_bytes/post_bytes.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/jobs/testnets/Binance-Testnet/post_bytes/post_bytes.toml) that LinkWell's oracles use to fulfill the above request.

### Need assistance?

Please reach out to us in [**Discord**](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.
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

