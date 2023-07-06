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
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setChainlinkOracle(0x12A3d7759F745f4cb8EE8a647038c040cB8862A5);
        jobId = "fe82fb4d00794483a1cf5ed23bd5e1b7";
        fee = (0 * LINK_DIVISIBILITY) / 10; // 0 LINK (varies by network and job)
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
