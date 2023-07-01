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

contract LinkWellConsumerContractExample is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    bytes32 private jobId;
    uint256 private fee;


/// [constructor]    
    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB); 
        setChainlinkOracle(0x12A3d7759F745f4cb8EE8a647038c040cB8862A5);
        jobId = "8ced832954544a3c98543c94a51d6a8d";
        fee = (0 * LINK_DIVISIBILITY) / 10; // 0 LINK
    }
/// [constructor]

/// [request]
    function request() public {
    
		Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfillBytes.selector);
		     
        // DEFINE THE REQUEST
        req.add("method", "POST");
        req.add("url", "https://httpbin.org/post");
        req.add("headers", '["accept", "application/json", "set-cookie", "sid=14A52"]');
        req.add("body", '{"userId": 123, "address": "527 Madison Ave, New York, NY 10022"}');
        req.add("contact", "derek_linkwellnodes.io");
        
        // The following CURL request simulates the above request parameters: 
        // curl --insecure --request POST --header "content-type: application/json" --header "set-cookie: sid=14A52" --data '{"userId": 123, "address": "527 Madison Ave, New York, NY 10022"}' "https://httpbin.org/post"
        
        // PROCESS THE RESULT
        req.add("path", "json,address");
        
        // Initiate the oracle request
        sendChainlinkRequest(req, fee);
    }
/// [request]

/// [response]
    bytes public response;
    string public responseStr;

    event RequestFulfilled(bytes32 indexed requestId, bytes indexed response);
    function fulfillBytes(bytes32 requestId, bytes memory bytesData) public recordChainlinkFulfillment(requestId) {
        // Process the oracle response
        emit RequestFulfilled(requestId, bytesData);
        response = bytesData;
        responseStr = string(response);		// sample value: 527 Madison Ave, New York, NY 10022
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
