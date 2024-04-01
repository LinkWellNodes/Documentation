// SPDX-License-Identifier: MIT

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * THIS EXAMPLE USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

pragma solidity ^0.8.17;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

contract postBytes is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    // variable bytes(arbitrary-length raw byte data) returned in a single oracle response
    bytes public data;
    bytes32 private jobId;
    uint256 private fee;

    
    constructor() ConfirmedOwner(msg.sender) {
        _setChainlinkToken(0x404460C6A5EdE2D891e8297795264fDe62ADBB75);
        _setChainlinkOracle(<oracle address>);
        jobId = "b3390c03bfc24b42a0b0ab8051471bbb";
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0.1 LINK (varies by network and job)
    }    

    function postBytes() public {
        Chainlink.Request memory req = _buildOperatorRequest(
            jobId,
            this.fulfillBytes.selector
        );        
        // THE URL TO WHICH TO SEND THIS REQUEST
        req._add("post", "API_URL"); // Example: https://myUrl.com        
        // REQUEST BODY | cannot be an empty string ("{}" is OK)
		req._add("requestData", "{}"); // Example: '{"fsyms": "LINK", "tsyms": "USD"}'
        req._add("path", "JSON_PATH"); // Example: "RAW,LINK,USD,LASTMARKET"
        _sendOperatorRequest(req, fee);
    }

    event RequestFulfilled(bytes32 indexed requestId);

    function fulfillBytes(
        bytes32 requestId,
        bytes memory bytesData
    ) public recordChainlinkFulfillment(requestId) {
        // emit RequestFulfilled(requestId);    // (optional) emits this event in the on-chain transaction logs, allowing Web3 applications to listen for this transaction
        data = string(bytesData);

    }

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(_chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}
