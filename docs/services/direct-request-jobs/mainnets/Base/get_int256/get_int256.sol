// SPDX-License-Identifier: MIT

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * THIS EXAMPLE USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

contract getInt256 is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    int256 public volume;
    bytes32 private jobId;
    uint256 private fee;
    event requestInt256Fulfilled(bytes32 indexed requestId, int256 volume);

/// [constructor]    
    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0xefEa85a7D80425F7641878089Ae976c00980987D);
        setChainlinkOracle(0xc287d52DFF95A6A49bdd2c3BB985c0E581b33d9c);
        jobId = "339ac1ad0a864ea7b94811de8a362a64";
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0.1 LINK (varies by network and job)
    }
/// [constructor]    

/// [request]
    function requestInt256Data() public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildOperatorRequest(
            jobId,
            this.fulfillInt256.selector
        );

        req.add(
            "get",
            "API_URL" // Example: https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD
        );
        req.add("path", "JSON_PATH"); // Example: RAW,ETH,USD,VOLUME24HOUR
        int256 timesAmount = 10 ** 18;
        req.addInt("times", timesAmount);
        return sendOperatorRequest(req, fee);
    }
/// [request]

    function fulfillInt256(
        bytes32 _requestId,
        int256 _volume
    ) public recordChainlinkFulfillment(_requestId) {
        emit requestInt256Fulfilled(_requestId, _volume);
        volume = _volume;
    }

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}
