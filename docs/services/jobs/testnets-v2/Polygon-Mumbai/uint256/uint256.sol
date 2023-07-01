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
        jobId = "a8356f48569c434eaa4ac5fcb4db5cc0";
        fee = (0 * LINK_DIVISIBILITY) / 10; // 0 LINK
    }
/// [constructor]

/// [request]
    function request() public {
    
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfillBytes.selector);
        
        // DEFINE THE REQUEST
        req.add("contact", "derek_linkwellnodes.io");
        req.add("method", "GET");
        req.add("url", "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD");
        req.add("headers", '["content-type", "application/json", "set-cookie", "sid=14A52"]');
        req.add("body", "");
        
        // The following CURL request simulates the above request parameters: 
        // curl --insecure --request GET --header "content-type: application/json" --header "set-cookie: sid=14A52" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"
        
        // PROCESS THE RESULT
        req.add("path", "RAW,ETH,USD,VOLUME24HOUR"); 
        req.addInt("multiplier", 10 ** 18);

        // Initiate the oracle request        
        sendChainlinkRequest(req, fee);
    }
/// [request]

/// [response]
    uint256 public response;
    
    event RequestFulfilled(bytes32 indexed requestId, uint256 indexed response);
    function fulfillBytes(bytes32 requestId, uint256 data) public recordChainlinkFulfillment(requestId) {
    	// Process the oracle response
        emit RequestFulfilled(requestId, data);
        response = data;     // sample value: 319238425084960060000000 (319238.42508496 before "multiplier" is applied)
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
