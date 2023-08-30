import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

Binance is a decentralized blockchain platform that establishes a peer-to-peer network that securely executes and verifies application code.

<Tabs groupId="dataType" queryString>
<TabItem value="GET>Uint256"> 

#### **GET > Uint256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer (**uint256**).

### Job details

<!-- | Address                                    | JobID                            | Job Cost              | -->
<!-- |--------------------------------------------|----------------------------------|-----------------------| -->
<!-- | [0x20f6596bA2c39EFd9340F2aF0428D541f7C51954](https://bscscan.com/address/0x20f6596bA2c39EFd9340F2aF0428D541f7C51954) | f4821ba2e8ae4ddba52ea6860887df96 | 0.1 LINK                | -->
| Address and Job ID | Job Cost |
|-------------------|----------|
| Please complete our [**onboarding form**](https://linkwellnodes.io/Getting-Started.html) to reveal our mainnet **Addresses** and **Job IDs** | 0.1 LINK |

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

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_uint256/get_uint256.sol#L22-L27
```

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_uint256/get_uint256.sol#L29-L42
```

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_uint256/get_uint256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_uint256/get_uint256.toml) that LinkWell's oracles use to fulfill the above request.

### Need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

</TabItem>

<TabItem value=" GET>Uint256_No_Multiply"> 

#### **GET > Uint256 No Multiply**

HTTP GET to any public API which parses the response and returns an unsigned integer (**uint256**).

### Job details

<!-- | Address                                    | JobID                            | Job Cost              | -->
<!-- |--------------------------------------------|----------------------------------|-----------------------| -->
<!-- | [0x20f6596bA2c39EFd9340F2aF0428D541f7C51954](https://bscscan.com/address/0x20f6596bA2c39EFd9340F2aF0428D541f7C51954) | 65cfa14a158540e1a8a94f9a33163839 | 0.1 LINK                | -->
| Address and Job ID | Job Cost |
|-------------------|----------|
| Please complete our [**onboarding form**](https://linkwellnodes.io/Getting-Started.html) to reveal our mainnet **Addresses** and **Job IDs** | 0.1 LINK |

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

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_uint256_no_multiply/get_uint256_no_multiply.sol#L22-L27
```

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_uint256_no_multiply/get_uint256_no_multiply.sol#L29-L40
```

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_uint256_no_multiply/get_uint256_no_multiply.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_uint256_no_multiply/get_uint256_no_multiply.toml) that LinkWell's oracles use to fulfill the above request.

### Need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

</TabItem>

<TabItem value="GET>Int256"> 

#### **GET > Int256**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer (**int256**).

### Job details

<!-- | Address                                    | JobID                            | Job Cost              | -->
<!-- |--------------------------------------------|----------------------------------|-----------------------| -->
<!-- | [0x20f6596bA2c39EFd9340F2aF0428D541f7C51954](https://bscscan.com/address/0x20f6596bA2c39EFd9340F2aF0428D541f7C51954) | 339ac1ad0a864ea7b94811de8a362a64 | 0.1 LINK                | -->
| Address and Job ID | Job Cost |
|-------------------|----------|
| Please complete our [**onboarding form**](https://linkwellnodes.io/Getting-Started.html) to reveal our mainnet **Addresses** and **Job IDs** | 0.1 LINK |

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

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_int256/get_int256.sol#L22-L27
```

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_int256/get_int256.sol#L29-L43
```

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_int256/get_int256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_int256/get_int256.toml) that LinkWell's oracles use to fulfill the above request.

### Need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

</TabItem>

<TabItem value="GET>Bool"> 

#### **GET > Bool**

HTTP GET to any public API which parses the response and returns a boolean (**bool**).

### Job details

<!-- | Address                                    | JobID                            | Job Cost              | -->
<!-- |--------------------------------------------|----------------------------------|-----------------------| -->
<!-- | [0x20f6596bA2c39EFd9340F2aF0428D541f7C51954](https://bscscan.com/address/0x20f6596bA2c39EFd9340F2aF0428D541f7C51954) | 2e0a430bcd2b482d8462fdcc5224fba1 | 0.1 LINK                | -->
| Address and Job ID | Job Cost |
|-------------------|----------|
| Please complete our [**onboarding form**](https://linkwellnodes.io/Getting-Started.html) to reveal our mainnet **Addresses** and **Job IDs** | 0.1 LINK |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"symbols,0,isSpotTradingAllowed"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"`
* Sample response from the HTTP endpoint: `{"timezone":"UTC","serverTime":1693398098306,"rateLimits":[{"rateLimitType":"REQUEST_WEIGHT","interval":"MINUTE","intervalNum":1,"limit":1200},{"rateLimitType":"ORDERS","interval":"SECOND","intervalNum":10,"limit":100},{"rateLimitType":"ORDERS","interval":"DAY","intervalNum":1,"limit":200000},{"rateLimitType":"RAW_REQUESTS","interval":"MINUTE","intervalNum":5,"limit":6100}],"exchangeFilters":[],"symbols":[{"symbol":"ETHUSD","status":"BREAK","baseAsset":"ETH","baseAssetPrecision":8,"quoteAsset":"USD","quotePrecision":8,"quoteAssetPrecision":8,"baseCommissionPrecision":8,"quoteCommissionPrecision":8,"orderTypes":["LIMIT","LIMIT_MAKER","MARKET","STOP_LOSS_LIMIT","TAKE_PROFIT_LIMIT"],"icebergAllowed":true,"ocoAllowed":true,"quoteOrderQtyMarketAllowed":true,"allowTrailingStop":true,"cancelReplaceAllowed":true,"isSpotTradingAllowed":true,`
* Sample response from the Chainlink oracle: `true`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_bool/get_bool.sol#L22-L27
```

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_bool/get_bool.sol#L29-L37
```

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_bool/get_bool.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_bool/get_bool.toml) that LinkWell's oracles use to fulfill the above request.

### Need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

</TabItem>

<TabItem value="GET>Bytes"> 

#### **GET > Bytes**

HTTP GET to any public API which parses the response and returns arbitrary-length raw byte data (**bytes**).

### Job details

<!-- | Address                                    | JobID                            | Job Cost              | -->
<!-- |--------------------------------------------|----------------------------------|-----------------------| -->
<!-- | [0x20f6596bA2c39EFd9340F2aF0428D541f7C51954](https://bscscan.com/address/0x20f6596bA2c39EFd9340F2aF0428D541f7C51954) | 5b48fe6ac244436bb5ad689ab64ef28b | 0.1 LINK                | -->
| Address and Job ID | Job Cost |
|-------------------|----------|
| Please complete our [**onboarding form**](https://linkwellnodes.io/Getting-Started.html) to reveal our mainnet **Addresses** and **Job IDs** | 0.1 LINK |

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

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_bytes/get_bytes.sol#L24-L29
```

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_bytes/get_bytes.sol#L31-L42
```

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_bytes/get_bytes.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_bytes/get_bytes.toml) that LinkWell's oracles use to fulfill the above request.

### Need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

</TabItem>

<TabItem value="GET>String"> 

#### **GET > String**

HTTP GET to any public API which parses the response and returns a sequence of characters (**string**).

### Job details

<!-- | Address                                    | JobID                            | Job Cost              | -->
<!-- |--------------------------------------------|----------------------------------|-----------------------| -->
<!-- | [0x20f6596bA2c39EFd9340F2aF0428D541f7C51954](https://bscscan.com/address/0x20f6596bA2c39EFd9340F2aF0428D541f7C51954) | 1cc553d092584937bfe9be9a3dd4c1f6 | 0.1 LINK                | -->
| Address and Job ID | Job Cost |
|-------------------|----------|
| Please complete our [**onboarding form**](https://linkwellnodes.io/Getting-Started.html) to reveal our mainnet **Addresses** and **Job IDs** | 0.1 LINK |

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

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_string/get_string.sol#L24-L29
```

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_string/get_string.sol#L31-L43
```

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_string/get_string.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_string/get_string.toml) that LinkWell's oracles use to fulfill the above request.

### Need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

</TabItem>

<TabItem value="GET>String_x_2"> 

#### **GET > String x 2**

HTTP GET to any public API which parses the response and returns a sequence of characters (**string**).

### Job details

<!-- | Address                                    | JobID                            | Job Cost              | -->
<!-- |--------------------------------------------|----------------------------------|-----------------------| -->
<!-- | [0x20f6596bA2c39EFd9340F2aF0428D541f7C51954](https://bscscan.com/address/0x20f6596bA2c39EFd9340F2aF0428D541f7C51954) | be46cb8070c14cb7ad058b29f127ec6b | 0.1 LINK                | -->
| Address and Job ID | Job Cost |
|-------------------|----------|
| Please complete our [**onboarding form**](https://linkwellnodes.io/Getting-Started.html) to reveal our mainnet **Addresses** and **Job IDs** | 0.1 LINK |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **url1** | Yes | String | `"https://tinyurl.com/39u6msd7"` | The first URL to which to send the HTTP request for data                                                                                          |
| **url2** | Yes | String | `"https://tinyurl.com/mtusr8ew"` | The second URL to which to send the HTTP request for data                                                                                          |
| **path1** | Yes | String | `"0,id"` | The first [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |
| **path2** | Yes | String | `"1,id"` | The second [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the first provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=1"`
* Use the following curl command to test out the above request directly against the second provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=2"`
* Sample response from the first HTTP endpoint: `[{"id":"bitcoin"`
* Sample response from the second HTTP endpoint: `[{"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":30712,"market_cap":595456009382,"market_cap_rank":1,"fully_diluted_valuation":644120277894,"total_volume":15152753943,"high_24h":30715,"low_24h":30011,"price_change_24h":384.13,"price_change_percentage_24h":1.2666,"market_cap_change_24h":6400455297,"market_cap_change_percentage_24h":1.08656,"circulating_supply":19413418.0,"total_supply":21000000.0,"max_supply":21000000.0,"ath":69045,"ath_change_percentage":-55.51869,"ath_date":"2021-11-10T14:24:11.849Z","atl":67.81,"atl_change_percentage":45191.94972,"atl_date":"2013-07-06T00:00:00.000Z","roi":null,"last_updated":"2023-06-27T12:00:13.128Z"},{"id":"ethereum",`
* First sample response from the Chainlink oracle: `bitcoin`
* Second sample response from the Chainlink oracle: `ethereum`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_string_x2/get_string_x2.sol#L29-L34
```

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_string_x2/get_string_x2.sol#L36-L53
```

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_string_x2/get_string_x2.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_string_x2/get_string_x2.toml) that LinkWell's oracles use to fulfill the above request.

### Need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

</TabItem>

<TabItem value="GET>Uint256_x_2"> 

#### **GET > Uint256 x 2**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns two unsigned integers of type (**uint256**).

### Job details

<!-- | Address                                    | JobID                            | Job Cost              | -->
<!-- |--------------------------------------------|----------------------------------|-----------------------| -->
<!-- | [0x20f6596bA2c39EFd9340F2aF0428D541f7C51954](https://bscscan.com/address/0x20f6596bA2c39EFd9340F2aF0428D541f7C51954) | fe82fb4d00794483a1cf5ed23bd5e1b7 | 0.1 LINK                | -->
| Address and Job ID | Job Cost |
|-------------------|----------|
| Please complete our [**onboarding form**](https://linkwellnodes.io/Getting-Started.html) to reveal our mainnet **Addresses** and **Job IDs** | 0.1 LINK |

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

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_uint256_x2/get_uint256_x2.sol#L30-L35
```

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_uint256_x2/get_uint256_x2.sol#L37-L55
```

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_uint256_x2/get_uint256_x2.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_uint256_x2/get_uint256_x2.toml) that LinkWell's oracles use to fulfill the above request.

### Need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

</TabItem>

<TabItem value="GET>Uint256[]"> 

#### **GET > Uint256[]**

HTTP GET to any public API which parses the response, multiplies the result by a multiplier and returns an unsigned integer array (**uint256[]**).

### Job details

<!-- | Address                                    | JobID                            | Job Cost              | -->
<!-- |--------------------------------------------|----------------------------------|-----------------------| -->
<!-- | [0x20f6596bA2c39EFd9340F2aF0428D541f7C51954](https://bscscan.com/address/0x20f6596bA2c39EFd9340F2aF0428D541f7C51954) | 9a2ba54374f34184bdc6390db3171994 | 0.1 LINK                | -->
| Address and Job ID | Job Cost |
|-------------------|----------|
| Please complete our [**onboarding form**](https://linkwellnodes.io/Getting-Started.html) to reveal our mainnet **Addresses** and **Job IDs** | 0.1 LINK |

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

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_uint256_array/get_uint256_array.sol#L21-L26
```

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_uint256_array/get_uint256_array.sol#L28-L36
```

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_uint256_array/get_uint256_array.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_uint256_array/get_uint256_array.toml) that LinkWell's oracles use to fulfill the above request.

### Need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

</TabItem>

<TabItem value="GET>Bytes[]"> 

#### **GET > Bytes[]**

HTTP GET to any public API which parses the response and returns an arbitrary-length raw byte data array (**bytes[]**).

### Job details

<!-- | Address                                    | JobID                            | Job Cost              | -->
<!-- |--------------------------------------------|----------------------------------|-----------------------| -->
<!-- | [0x20f6596bA2c39EFd9340F2aF0428D541f7C51954](https://bscscan.com/address/0x20f6596bA2c39EFd9340F2aF0428D541f7C51954) | 332c0b46e57f49cd8c7d74cdbe5106ab | 0.1 LINK                | -->
| Address and Job ID | Job Cost |
|-------------------|----------|
| Please complete our [**onboarding form**](https://linkwellnodes.io/Getting-Started.html) to reveal our mainnet **Addresses** and **Job IDs** | 0.1 LINK |

### Request parameters

This job allows for the following parameters to be set:

| Parameter | Required? | Type | Value example | Description |
|-------------|--------|-------------|------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| **get** | Yes | String | `"https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"` | The URL to which to send the HTTP request for data                                                                                          |
| **path** | Yes | String | `"symbols,0,orderTypes"` | The [JSON Path](https://jsonpath.com/) from which to extract the result returned by the requested HTTP endpoint |

#### Simulating the request:

* Use the following curl command to test out the above request directly against the provided HTTP endpoint: `curl -k -X GET -H "content-type:application/json" "https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD"`
* Sample response from the HTTP endpoint: `{"timezone":"UTC","serverTime":1693398178157,"rateLimits":[{"rateLimitType":"REQUEST_WEIGHT","interval":"MINUTE","intervalNum":1,"limit":1200},{"rateLimitType":"ORDERS","interval":"SECOND","intervalNum":10,"limit":100},{"rateLimitType":"ORDERS","interval":"DAY","intervalNum":1,"limit":200000},{"rateLimitType":"RAW_REQUESTS","interval":"MINUTE","intervalNum":5,"limit":6100}],"exchangeFilters":[],"symbols":[{"symbol":"ETHUSD","status":"BREAK","baseAsset":"ETH","baseAssetPrecision":8,"quoteAsset":"USD","quotePrecision":8,"quoteAssetPrecision":8,"baseCommissionPrecision":8,"quoteCommissionPrecision":8,"orderTypes":["LIMIT","LIMIT_MAKER","MARKET","STOP_LOSS_LIMIT","TAKE_PROFIT_LIMIT"],`

### Implementing within your consumer contract

#### Add the constructor:
Your consumer contract's constructor sets the Chainlink token address, Chainlink oracle address, and per-request LINK payment to be sent over with each transaction.

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_bytes_array/get_bytes_array.sol#L22-L27
```

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_bytes_array/get_bytes_array.sol#L29-L37
```

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_bytes_array/get_bytes_array.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/get_bytes_array/get_bytes_array.toml) that LinkWell's oracles use to fulfill the above request.

### Need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

</TabItem>

<TabItem value="POST>Bytes"> 

#### **POST > Bytes**

### Job details

<!-- | Address                                    | JobID                            | Job Cost              | -->
<!-- |--------------------------------------------|----------------------------------|-----------------------| -->
<!-- | [0x20f6596bA2c39EFd9340F2aF0428D541f7C51954](https://bscscan.com/address/0x20f6596bA2c39EFd9340F2aF0428D541f7C51954) | b3390c03bfc24b42a0b0ab8051471bbb | 0.1 LINK                | -->
| Address and Job ID | Job Cost |
|-------------------|----------|
| Please complete our [**onboarding form**](https://linkwellnodes.io/Getting-Started.html) to reveal our mainnet **Addresses** and **Job IDs** | 0.1 LINK |

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

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/post_bytes/post_bytes.sol#L23-L28
```

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/post_bytes/post_bytes.sol#L30-L43
```

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/post_bytes/post_bytes.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/post_bytes/post_bytes.toml) that LinkWell's oracles use to fulfill the above request.

### Need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

</TabItem>

<TabItem value="POST>Uint256"> 

#### **POST > Uint256**

### Job details

<!-- | Address                                    | JobID                            | Job Cost              | -->
<!-- |--------------------------------------------|----------------------------------|-----------------------| -->
<!-- | [0x20f6596bA2c39EFd9340F2aF0428D541f7C51954](https://bscscan.com/address/0x20f6596bA2c39EFd9340F2aF0428D541f7C51954) | b090204b16644030844a6e91932a7626 | 0.1 LINK                | -->
| Address and Job ID | Job Cost |
|-------------------|----------|
| Please complete our [**onboarding form**](https://linkwellnodes.io/Getting-Started.html) to reveal our mainnet **Addresses** and **Job IDs** | 0.1 LINK |

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

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/post_uint256/post_uint256.sol#L23-L28
```

#### Add your request function (example):
The 'request function' within your consumer contract specifies the parameters to be sent over with your Chainlink request - the requirements for which are outlined in the above 'Request parameters' section:

```sol reference showLineNumbers
https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/post_uint256/post_uint256.sol#L30-L45
```

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/post_uint256/post_uint256.sol) of the above consumer contract.
* View the [actual oracle job](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/mainnets/Binance/post_uint256/post_uint256.toml) that LinkWell's oracles use to fulfill the above request.

### Need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance creating this request.

</TabItem>
</Tabs>
