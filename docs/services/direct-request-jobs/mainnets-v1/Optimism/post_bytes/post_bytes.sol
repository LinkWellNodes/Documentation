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

    
    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6);
        setChainlinkOracle(0xbF974f8faf696229854D70E5030CC6CA01A34c4B);
        jobId = "b3390c03bfc24b42a0b0ab8051471bbb";
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0.1 LINK (varies by network and job)
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

    event RequestFulfilled(bytes32 indexed requestId);

    function fulfillBytes(
        bytes32 requestId,
        bytes memory bytesData
    ) public recordChainlinkFulfillment(requestId) {
        // emit RequestFulfilled(requestId);		// (optional) emits this event in the on-chain transaction logs, allowing Web3 applications to listen for this transaction
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
