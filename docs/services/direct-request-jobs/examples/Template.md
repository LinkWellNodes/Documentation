# Chainlink Direct Requests

## Retrieving MySports data using Chainlink

The MySports API is orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Try it for yourself

Add the following sample code to your **consumer contract**.

#### 1. Add the constructor:

The constructor specifies important information about the request destination and payment for your request (varies by chain, oracle, and job): 

[uint256_constructor](/template.sol ':include :type=code :fragment=constructor')`

#### 2. Add your request function (example):
The 'request' function defines the request parameters and sends the request to the Chainlink oracle. For detailed information on each required parameter, reference the above '**Request parameters**' section:

[uint256_request](/template.sol ':include :type=code :fragment=request')

#### 3. Retrieve the response (example):

[uint256_response](/template.sol ':include :type=code :fragment=response')

### View the full source code

* View a [full example](https://github.com/LinkWellNodes/Documentation/blob/main/docs/services/direct-request-jobs/testnets/template.sol.sol) of the above consumer contract.

### Need to protect your API key?

!> Data entered into a smart contract is visible to the general public.

If you'd like to protect your API key from being broadcast on-chain, you can instead store this information off-chain on our secure infrastructure. Please fill out our [Request Survey](https://linkwellnodes.io/Getting-Started.html) to get started - once we receive your information, we'll provide you with a custom job ID that will send your API key along with your request.

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

### Troubleshooting

Having trouble with your request? Check out our [Troubleshooting Guide](/knowledgebase/Chainlink-Users-FAQ?id=direct-request-job-troubleshooting) for direct request jobs.

!> This job has a configured gas limit of **500,000** for writing your result on-chain. If your transaction isn't returning any value after more than 60 seconds of waiting, click the above '**Oracle Address**' for this job to see if any recent transaction(s) have failed due to an '**out of gas**' error. If so, you'll need to either A) Return a smaller response, B) Split your request into multiple oracle transactions, or C) Contact us to request a higher gas allowance for your specific use case (may result in higher job pricing). 

### Still need more help?

Please reach out to us in [Discord](https://discord.gg/AJ66pRz4) if you require additional assistance with this request.
