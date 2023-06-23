// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

/**
 * Request testnet LINK and ETH here: https://faucets.chain.link/
 * Find information on LINK Token Contracts and get the latest ETH and LINK faucets here: https://docs.chain.link/docs/link-token-contracts/
 */

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * THIS EXAMPLE USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

contract getUint256 is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    uint256 public volume;
    bytes32 private jobId;
    uint256 private fee;
    event requestUint256Fulfilled(bytes32 indexed requestId, uint256 volume);

    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setChainlinkOracle(0xB9C47B9609174716CE536324d4FbEad9292c1d3a);
        jobId = "f4821ba2e8ae4ddba52ea6860887df96";
        fee = (0 * LINK_DIVISIBILITY) / 10; // 0.1 LINK (varies by network and job)
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

        int256 timesAmount = 10 ** 18;
        req.addInt("times", timesAmount);
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
