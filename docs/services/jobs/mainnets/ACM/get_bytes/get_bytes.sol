// SPDX-License-Identifier: MIT

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * THIS EXAMPLE USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

pragma solidity ^0.8.7;

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
        setChainlinkToken(0x5947BB275c521040051D82396192181b413227A3);
        setChainlinkOracle(0x720E94621237EE80948E1C14Cf62bb82ceb8b264);
        jobId = "5b48fe6ac244436bb5ad689ab64ef28b";
        fee = ((15 * LINK_DIVISIBILITY) / 100); // 0.15 LINK (varies by network and job)
    }

    function requestBytes() public {
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfillBytes.selector
        );
        req.add(
            "get",
            "API_URL" // Example: https://ipfs.io/ipfs/QmZgsvrA1o1C8BGCrx6mHTqR1Ui1XqbCrtbMVrRLHtuPVD?filename=big-api-response.json
        );
        req.add("path", "JSON_PATH"); // Example: image
        sendChainlinkRequest(req, fee);
    }

    event RequestFulfilled(bytes32 indexed requestId, bytes indexed data);

    function fulfillBytes(
        bytes32 requestId,
        bytes memory bytesData
    ) public recordChainlinkFulfillment(requestId) {
        emit RequestFulfilled(requestId, bytesData);
        data = bytesData;
        image_url = string(data);
    }


    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}