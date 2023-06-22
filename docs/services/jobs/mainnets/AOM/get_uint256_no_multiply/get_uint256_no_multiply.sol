// SPDX-License-Identifier: MIT

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * THIS EXAMPLE USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

contract getUint256 is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    uint256 public volume;
    bytes32 private jobId;
    uint256 private fee;
    event requestUint256Fulfilled(bytes32 indexed requestId, uint256 volume);

    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0xf97f4df75117a78c1A5a0DBb814Af92458539FB4);
        setChainlinkOracle(0xD8edDB284d25DbbC5189E488639D689DFE7AaB49);
        jobId = "65cfa14a158540e1a8a94f9a33163839";
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0.1 LINK (varies by network and job)
    }

    function requestUint256Data() public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfillUint256.selector
        );

        req.add(
            "get",
            "API_URL" // Example: https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD
        );
        req.add("path", "JSON_PATH"); // Example: RAW,ETH,USD,VOLUME24HOUR

        return sendChainlinkRequest(req, fee);
    }

    function fulfillUint256(
        bytes32 _requestId,
        uint256 _volume
    ) public recordChainlinkFulfillment(_requestId) {
        emit requestUint256Fulfilled(_requestId, _volume);
        volume = _volume;
    }

    /**
     * Allow withdraw of Link tokens from the contract
     */
    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}
