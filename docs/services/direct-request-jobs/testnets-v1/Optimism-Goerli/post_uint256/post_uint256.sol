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

contract postUint256 is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    // variable bytes(arbitrary-length raw byte data) returned in a single oracle response
    uint256 public value;
    bytes32 private jobId;
    uint256 private fee;


/// [constructor]    
    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0xdc2CC710e42857672E7907CF474a69B63B93089f);
        setChainlinkOracle(0x14bc7F6Da6cA3E072793c185e01a76E62341CC61);
        jobId = "b090204b16644030844a6e91932a7626";
        fee = (0 * LINK_DIVISIBILITY) / 10; // 0 LINK (varies by network and job)
    }
/// [constructor]

/// [request]
    function postUint256() public {
        Chainlink.Request memory req = buildOperatorRequest(
            jobId,
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
        sendOperatorRequest(req, fee);
    }
/// [request]

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