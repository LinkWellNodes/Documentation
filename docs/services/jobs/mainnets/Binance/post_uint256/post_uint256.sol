// SPDX-License-Identifier: MIT

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * THIS EXAMPLE USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

contract postUint256 is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    // variable bytes(arbitrary-length raw byte data) returned in a single oracle response
    uint256 public value;
    bytes32 private jobId;
    uint256 private fee;


    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x404460C6A5EdE2D891e8297795264fDe62ADBB75);
        setChainlinkOracle(0xd0EbC86a4f67654B654Feb0e615d7f5C139a6406);
        jobId = "b090204b16644030844a6e91932a7626";
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0.1 LINK (varies by network and job)
    }

    function requestUint256() public {
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfillUint256.selector
        );
        
        // The URL which to send this request
        req.add("post", "API_URL"); // Example: "https://min-api.cryptocompare.com/data/price"       
        // Request body | cannot be an empty string ("{}" is OK)
		req.add("requestData", '{ "FIELD1": "VALUE1", "FIELD2": "VALUE2" }'); // Example: {"fsym": "ETH", "tsyms": "USD"}
        // JSON PATH
        req.add("path", "JSON_PATH"); // Example: "USD"
        // The Uint256 Multiplier
        int256 timesAmount = 100;
        req.addInt("times", timesAmount);
        sendChainlinkRequest(req, fee);
    }

    function fulfillUint256(
        bytes32 requestId,
        uint256 uint256Data
    ) public recordChainlinkFulfillment(requestId) {
        value = uint256Data;

    }

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}
