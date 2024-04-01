// SPDX-License-Identifier: MIT

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * THIS EXAMPLE USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

pragma solidity ^0.8.17;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

contract getUint256 is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    uint256 public volume;
    bytes32 private jobId;
    uint256 private fee;
    event requestUint256Fulfilled(bytes32 indexed requestId, uint256 volume);
    
    constructor() ConfirmedOwner(msg.sender) {
        _setChainlinkToken(0x88038752750D7717a19F2A681eF75e65Fb714f1E);
        _setChainlinkOracle(<oracle address>);
        jobId = "65cfa14a158540e1a8a94f9a33163839";
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0.1 LINK (varies by network and job)
    }    

    function requestUint256Data() public returns (bytes32 requestId) {
        Chainlink.Request memory req = _buildOperatorRequest(
            jobId,
            this.fulfillUint256.selector
        );
        req._add(
            "get",
            "API_URL" // Example: https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD
        );
        req._add("path", "JSON_PATH"); // Example: RAW,ETH,USD,VOLUME24HOUR
        return _sendOperatorRequest(req, fee);
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
        LinkTokenInterface link = LinkTokenInterface(_chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}
