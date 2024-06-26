// SPDX-License-Identifier: MIT

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * THIS EXAMPLE USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

pragma solidity ^0.8.17;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

contract getString is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    string public id;

    bytes32 private jobId;
    uint256 private fee;

    event requestStringFulfilled(bytes32 indexed requestId, string id);
    
    constructor() ConfirmedOwner(msg.sender) {
        _setChainlinkToken(0x514910771AF9Ca656af840dff83E8264EcF986CA);
        _setChainlinkOracle(<oracle address>);
        jobId = "1cc553d092584937bfe9be9a3dd4c1f6";
        fee = ((16 * LINK_DIVISIBILITY) / 10); // 1.6 LINK (varies by network and job)
    }    

    function requestStringData() public returns (bytes32 requestId) {
        Chainlink.Request memory req = _buildOperatorRequest(
            jobId,
            this.fulfillString.selector
        );
        req._add(
            "get",
            "API_URL" // Example: https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10
        );
        req._add("path", "JSON_PATH"); // Example: 0,id
        // Sends the request
        return _sendOperatorRequest(req, fee);
    }

    function fulfillString(
        bytes32 _requestId,
        string memory _id
    ) public recordChainlinkFulfillment(_requestId) {
        emit requestStringFulfilled(_requestId, _id);
        id = _id;
    }

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(_chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}
