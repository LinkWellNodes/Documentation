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
        setChainlinkToken(0x5947BB275c521040051D82396192181b413227A3);
        setChainlinkOracle(0x720E94621237EE80948E1C14Cf62bb82ceb8b264);
        jobId = "b090204b16644030844a6e91932a7626";
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0.1 LINK (varies by network and job)
    }

    function requestBytes() public {
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfillBytes.selector
        );
        
        // THE URL TO WHICH TO SEND THIS REQUEST
        req.add("post", "API_URL"); // Example: https://myUrl.com
        
        // REQUEST BODY | cannot be an empty string ("{}" is OK)
		req.add("requestData", "{}"); // Example: {"name": "Linkwell", "date": "2023"}
        req.add("path", "JSON_PATH"); // Example: "org,info"
        int256 timesAmount = 10 ** 18;
        req.addInt("times", timesAmount);
        sendChainlinkRequest(req, fee);
    }

    event RequestFulfilled(bytes32 indexed requestId, bytes indexed value);

    function fulfillBytes(
        bytes32 requestId,
        bytes memory uint256Data
    ) public recordChainlinkFulfillment(requestId) {
        emit RequestFulfilled(requestId, uint256Data);
        value = string(uint256Data);

    }


    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}