// SPDX-License-Identifier: MIT
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

contract getString is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    string public id;

    bytes32 private jobId;
    uint256 private fee;

    event requestStringFulfilled(bytes32 indexed requestId, string id);

/// [constructor]    
    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setChainlinkOracle(0xB9C47B9609174716CE536324d4FbEad9292c1d3a);
        jobId = "1cc553d092584937bfe9be9a3dd4c1f6";
        fee = (0 * LINK_DIVISIBILITY) / 10; // 0 LINK (varies by network and job)
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
