// SPDX-License-Identifier: MIT

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * THIS EXAMPLE USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

contract postBytes is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    // variable bytes(arbitrary-length raw byte data) returned in a single oracle response
    bytes public data;
    bytes32 private jobId;
    uint256 private fee;


/// [constructor]    
    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x514910771AF9Ca656af840dff83E8264EcF986CA);
        setChainlinkOracle(0x0168B5FcB54F662998B0620b9365Ae027192621f);
        jobId = "b3390c03bfc24b42a0b0ab8051471bbb";
        fee = ((14 * LINK_DIVISIBILITY) / 10); // 1.4 LINK (varies by network and job)
    }
/// [constructor]    

/// [request]
    function postBytes() public {
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfillBytes.selector
        );       
        // THE URL TO WHICH TO SEND THIS REQUEST
        req.add("post", "API_URL"); // Example: https://myUrl.com      
        // REQUEST BODY | cannot be an empty string ("{}" is OK)
		req.add("requestData", "{}"); // Example: '{"fsyms": "LINK", "tsyms": "USD"}'
        req.add("path", "JSON_PATH"); // Example: "RAW,LINK,USD,LASTMARKET"
        sendChainlinkRequest(req, fee);
    }
/// [request]

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