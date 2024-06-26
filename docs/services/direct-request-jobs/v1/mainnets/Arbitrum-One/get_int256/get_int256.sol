// SPDX-License-Identifier: MIT

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * THIS EXAMPLE USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

pragma solidity ^0.8.17;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

contract getInt256 is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    int256 public volume;
    bytes32 private jobId;
    uint256 private fee;
    event requestInt256Fulfilled(bytes32 indexed requestId, int256 volume);
    
    constructor() ConfirmedOwner(msg.sender) {
        _setChainlinkToken(0xf97f4df75117a78c1A5a0DBb814Af92458539FB4);
        _setChainlinkOracle(<oracle address>);
        jobId = "339ac1ad0a864ea7b94811de8a362a64";
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0.1 LINK (varies by network and job)
    }    

    function requestInt256Data() public returns (bytes32 requestId) {
        Chainlink.Request memory req = _buildOperatorRequest(
            jobId,
            this.fulfillInt256.selector
        );

        req._add(
            "get",
            "API_URL" // Example: https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD
        );
        req._add("path", "JSON_PATH"); // Example: RAW,ETH,USD,VOLUME24HOUR
        int256 timesAmount = 10 ** 18;
        req._addInt("times", timesAmount);
        return _sendOperatorRequest(req, fee);
    }

    function fulfillInt256(
        bytes32 _requestId,
        int256 _volume
    ) public recordChainlinkFulfillment(_requestId) {
        emit requestInt256Fulfilled(_requestId, _volume);
        volume = _volume;
    }

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(_chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}
