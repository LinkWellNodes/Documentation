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
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);		// set the Chainlink token contract address (varies by network!) 
        setChainlinkOracle(0x12A3d7759F745f4cb8EE8a647038c040cB8862A5);		// set the oracle contract address (varies by oracle and network!)
        jobId = "f4821ba2e8ae4ddba52ea6860887df96";							// set the oracle job ID (varies by oracle, network, and job type!)
        fee = (0 * LINK_DIVISIBILITY) / 10; 								// (0 LINK) set the fee to send to the Chainlink oracle for each request (varies by oracle, network, and job type!)
    }
/// [constructor]

/// [request]
    function request() public {
    
		Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfillBytes.selector);
		     
        // THE URL TO WHICH TO SEND THIS REQUEST
        req.add("method", "POST");
        req.add("url", "https://api.lagrangedao.org/datasets/0xa878795d2c93985444f1e2a077fa324d59c759b0/my_new_dataset/generate_metadata");
        req.add("contact", "derek_linkwellnodes.io");
        req.add("headers", '["Authorization", "${SECRET_01}", "my-header-02", "my value 2"]');
        req.add("body", "test request body");
        
        req.add("path", "");
        
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
        responseStr = string(response);		// sample value: hello world!
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
