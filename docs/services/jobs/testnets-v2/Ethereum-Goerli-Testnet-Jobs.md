## Ethereum Goerli Testnet Jobs
Goerli is a proof-of-stake testnet, and is the recommended default Ethereum testnet for testing of validating and staking.

Please see below for our Chainlink direct request job offerings on the Ethereum-Goerli network. All testnet jobs are free to use, and do not require you to fund your contracts with the LINK token. If you run into any trouble, we are here to help! Head on over to our [Discord](https://discord.gg/AJ66pRz4), or feel free to contact us [here](https://linkwellnodes.io/Home.html#contact-us "Contact LinkWell Nodes")!

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
| **method** | `string` | 'POST' | The HTTP method to use in initiating your request for data (`GET`, `POST`, `PUT`, or `DELETE`). |
| **url** | `string` | 'https://myRequestURL.com/path?var1=abc&var2=xyz' | The URL to which to send your HTTP request for data. |
| **headers** | `string` | '["my-header-1", "header 1 value", "my-header-2", "header 2 value"]' | An array of headers to send with the HTTP request, represented as an even-numbered array of strings. If no headers are desired, you must pass an empty string (""). |
| **body** | `string` | 'My request body' | A body to send with the HTTP request (`POST`, `PUT` requests only). If no body is desired or applicable, you must pass an empty string (""). |
| **path** | `string` | 'data,0,val' | The [JSON Path](https://jsonpath.com/) at which to extract the result returned by the requested HTTP endpoint (JSON results only). To return the full result without parsing, pass an empty string (""). |
| **multiplier** | `int256` | 10 ** 18 | The number by which to multiply the result returned to the contract. This is important, as Solidity cannot handle decimal objects. If no multiplication is desired, enter 1. |
| **contact** | `string` | 'derek_linkwellnodes.io' | Enter your Discord handle here. This will allow communication from us regarding outages or other technical issues that we may notice with your request. If you prefer to stay anonymous, pass an empty string (""). |

### Implementing within your consumer contract

#### Add the constructor:

The constructor specifies important information about the request destination and payment (varies by chain, oracle, and job): 

[uint256_constructor_ethereum-goerli-testnet](/Ethereum-Goerli/uint256/uint256.sol ':include :type=code :fragment=constructor')`

#### Add your request function (example):
The 'request' function specifies the parameters to be sent over with your Chainlink request. For detailed information, reference the above '**Request parameters**' section:

[uint256_request_ethereum-goerli-testnet](/Ethereum-Goerli/uint256/uint256.sol ':include :type=code :fragment=request')

?> Need to send **sensitive information**?

Data sent by your consumer contract is visible to the general public.

If you need to send sensitive information along with your HTTP request (ie, an API key), you can instead store this information off-chain, on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started - once we receive your submission, we'll provide you with a custom job ID that will send your sensitive data along with your request.


#### Retrieve the response (example):

[uint256_response_ethereum-goerli-testnet](/Ethereum-Goerli/uint256/uint256.sol ':include :type=code :fragment=response')

### Simulating the above request

Let's simulate the above request example using a `curl` command:

Send the request:
```
curl --insecure --request GET --header "content-type: application/json" --header "set-cookie: sid=14A52" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"
```

Analyze the response:

### Troubleshooting

Having trouble with your request? Check our [Job Troubleshooting Guide](/faq/Chainlink-Users?id=job-troubleshooting).

!> This job has a configured gas limit of **500,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the above '**Oracle Address**' for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). 

### Still need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance in creating this request.

