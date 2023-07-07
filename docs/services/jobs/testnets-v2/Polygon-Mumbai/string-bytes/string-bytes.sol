//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

/**
 * Request testnet LINK and ETH here: https://faucets.chain.link/
 * Find information on LINK Token Contracts and get the latest ETH and LINK faucets here: https://docs.chain.link/docs/link-token-contracts/
 */

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

contract LinkWellStringBytesConsumerContractExample is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    bytes32 private jobId;
    uint256 private fee;

/// [constructor]    
    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB); 
        setChainlinkOracle(0x12A3d7759F745f4cb8EE8a647038c040cB8862A5);
        jobId = "8ced832954544a3c98543c94a51d6a8d";
        fee = (0 * LINK_DIVISIBILITY) / 10;     // 0 LINK
    }
/// [constructor]

/// [request]
    function request() public {
    
        Chainlink.Request memory req = buildOperatorRequest(jobId, this.fulfill.selector);
		     
        // DEFINE THE REQUEST (example)
        req.add("method", "POST");
        req.add("url", "https://httpbin.org/post");
        req.add("headers", '["accept", "application/json", "set-cookie", "sid=14A52"]');
        req.add("body", '{"data":[{"id":1,"name":"Bitcoin","price":20194.52},{"id":2,"name":"Ethereum","price":1850.46},{"id":3,"name":"Chainlink","price":18.36}]}');
        req.add("contact", "derek_linkwellnodes.io");
        
        // The following CURL request simulates the above request parameters: 
        // curl --insecure --request POST --header "content-type: application/json" --header "set-cookie: sid=14A52" --data '{"data":[{"id":1,"name":"Bitcoin","price":20194.52},{"id":2,"name":"Ethereum","price":1850.46},{"id":3,"name":"Chainlink","price":18.36}]}' "https://httpbin.org/post"
        
        // PROCESS THE RESULT (example)
        req.add("path", "json,data,0,name");
        
        // Initiate the oracle request
        sendOperatorRequest(req, fee);
    }
/// [request]

/// [response]
    bytes public responseBytes;
    string public responseString;

    event RequestFulfilled(bytes32 indexed requestId, bytes indexed responseBytes);
    function fulfill(bytes32 requestId, bytes memory bytesData) public recordChainlinkFulfillment(requestId) {
        // Process the oracle response
        emit RequestFulfilled(requestId, bytesData);
        responseBytes = bytesData;              // example value: 0x426974636f696e
        responseString = string(bytesData);     // example value: Bitcoin
    }
/// [response]


    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}
