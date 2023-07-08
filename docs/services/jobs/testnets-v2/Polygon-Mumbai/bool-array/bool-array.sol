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

contract LinkWellBoolArrConsumerContractExample is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    bytes32 private jobId;
    uint256 private fee;

/// [constructor]    
    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB); 
        setChainlinkOracle(0x12A3d7759F745f4cb8EE8a647038c040cB8862A5);
        jobId = "433ba6a76b374e2580dd43685a9de8c6";
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
        req.add("body", '{"data":[true,false,true]}');
        req.add("contact", "derek_linkwellnodes.io");
        
        // The following CURL request simulates the above request parameters: 
        // curl --insecure --request POST --header "content-type: application/json" --header "set-cookie: sid=14A52" --data '{"data":[true,false,true]}' "https://httpbin.org/post"
        
        // PROCESS THE RESULT (example)
        req.add("path", "json,data");
        
        // Initiate the oracle request
        sendOperatorRequest(req, fee);
    }
/// [request]

/// [response]
    bool[] public responseArr;

    event RequestFulfilled(bytes32 indexed requestId, bool[] indexed responseArr);
    function fulfill(bytes32 requestId, bool[] memory data) public recordChainlinkFulfillment(requestId) {
        // Process the oracle response
        emit RequestFulfilled(requestId, data);
        responseArr = data;      // example value: responseBytesArr[0] = true, responseBytesArr[1] = false, responseBytesArr[2] = true
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
