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

contract postBytes is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    // variable bytes(arbitrary-length raw byte data) returned in a single oracle response
    bytes public data;
    bytes32 private jobId;
    uint256 private fee;

    
    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setChainlinkOracle(0xB9C47B9609174716CE536324d4FbEad9292c1d3a);
        jobId = "b3390c03bfc24b42a0b0ab8051471bbb";
        fee = (0 * LINK_DIVISIBILITY) / 10; // 0 LINK (varies by network and job)
    }

    function postBytes() public {
        Chainlink.Request memory req = buildOperatorRequest(
            jobId,
            this.fulfillBytes.selector
        );       
        // THE URL TO WHICH TO SEND THIS REQUEST
        req.add("post", "API_URL"); // Example: https://myUrl.com     
        // REQUEST BODY | cannot be an empty string ("{}" is OK)
		req.add("requestData", "{}"); // Example: '{"fsyms": "LINK", "tsyms": "USD"}'
        req.add("path", "JSON_PATH"); // Example: "RAW,LINK,USD,LASTMARKET"
        sendOperatorRequest(req, fee);
    }

    event RequestFulfilled(bytes32 indexed requestId, bytes indexed data);

    function fulfillBytes(
        bytes32 requestId,
        bytes memory bytesData
    ) public recordChainlinkFulfillment(requestId) {
        emit RequestFulfilled(requestId, bytesData);
        data = string(bytesData);

    }

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}
