// SPDX-License-Identifier: MIT

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * THIS EXAMPLE USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

contract getString is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    string public id;

    bytes32 private jobId;
    uint256 private fee;

    event requestStringFulfilled(bytes32 indexed requestId, string id);

/// [constructor]    
    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0xf97f4df75117a78c1A5a0DBb814Af92458539FB4);
        setChainlinkOracle(0xD8edDB284d25DbbC5189E488639D689DFE7AaB49);
        jobId = "1cc553d092584937bfe9be9a3dd4c1f6";
        fee = ((15 * LINK_DIVISIBILITY) / 100); // 0.15 LINK (varies by network and job)
    }
/// [constructor]    

/// [request]
    function requestStringData() public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildOperatorRequest(
            jobId,
            this.fulfillString.selector
        );
        req.add(
            "get",
            "API_URL" // Example: https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10
        );
        req.add("path", "JSON_PATH"); // Example: 0,id
        // Sends the request
        return sendOperatorRequest(req, fee);
    }
/// [request]

    function fulfillString(
        bytes32 _requestId,
        string memory _id
    ) public recordChainlinkFulfillment(_requestId) {
        emit requestStringFulfilled(_requestId, _id);
        id = _id;
    }

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}