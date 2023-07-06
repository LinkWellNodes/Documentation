// SPDX-License-Identifier: MIT

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * THIS EXAMPLE USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

contract getUint256x2 is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    bytes32 private jobId;
    uint256 private fee;

    // multiple params returned in a single oracle response
    uint256 public value1;
    uint256 public value2;

    event requestUint256x2Fulfilled(
        bytes32 indexed requestId,
        uint256 value1,
        uint256 value2
    );

/// [constructor]    
    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0xf97f4df75117a78c1A5a0DBb814Af92458539FB4);
        setChainlinkOracle(0xD8edDB284d25DbbC5189E488639D689DFE7AaB49);
        jobId = "fe82fb4d00794483a1cf5ed23bd5e1b7";
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0.1 LINK (varies by network and job)
    }
/// [constructor]    

/// [request]
    function requestUint256x2() public {
        Chainlink.Request memory req = buildOperatorRequest(
            jobId,
            this.fulfillUint256x2.selector
        );
        req.add(
            "url1", 
            "API_URL" // Example: https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC
        );
        req.add("path1", "JSON_PATH"); // Example: BTC
        req.add(
            "url2", 
            "API_URL" // Example: https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD
        );
        req.add("path2", "JSON_PATH"); // Example: USD
        int256 timesAmount = 10 ** 18;
        req.addInt("times", timesAmount);
        sendOperatorRequest(req, fee); 
    }
/// [request]

    function fulfillUint256x2(
        bytes32 requestId,
        uint256 value1Response,
        uint256 value2Response
    ) public recordChainlinkFulfillment(requestId) {
        emit requestUint256x2Fulfilled(
            requestId,
            value1Response,
            value2Response
        );
        value1 = value1Response;
        value2 = value2Response;
    }

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}
