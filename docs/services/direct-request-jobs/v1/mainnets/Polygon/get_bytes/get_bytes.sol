//SPDX-License-Identifier: MIT

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

pragma solidity ^0.8.17;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

contract getBytes is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    // variable bytes(arbitrary-length raw byte data) returned in a single oracle response
    bytes public data;
    string public image_url;
    bytes32 private jobId;
    uint256 private fee;

    
    constructor() ConfirmedOwner(msg.sender) {
        _setChainlinkToken(0xb0897686c545045aFc77CF20eC7A532E3120E0F1);
        _setChainlinkOracle(<oracle address>);
        jobId = "5b48fe6ac244436bb5ad689ab64ef28b";
        fee = ((15 * LINK_DIVISIBILITY) / 100); // 0.15 LINK (varies by network and job)
    }    

    function requestBytes() public {
        Chainlink.Request memory req = _buildOperatorRequest(
            jobId,
            this.fulfillBytes.selector
        );
        req._add(
            "get",
            "API_URL" // Example: https://ipfs.io/ipfs/QmZgsvrA1o1C8BGCrx6mHTqR1Ui1XqbCrtbMVrRLHtuPVD?filename=big-api-response.json
        );
        req._add("path", "JSON_PATH"); // Example: image
        _sendOperatorRequest(req, fee);
    }

    event RequestFulfilled(bytes32 indexed requestId);

    function fulfillBytes(
        bytes32 requestId,
        bytes memory bytesData
    ) public recordChainlinkFulfillment(requestId) {
        // emit RequestFulfilled(requestId);    // (optional) emits this event in the on-chain transaction logs, allowing Web3 applications to listen for this transaction
        data = bytesData;
        image_url = string(data);
    }

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(_chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}
