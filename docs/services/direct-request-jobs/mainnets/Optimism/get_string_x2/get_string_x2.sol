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

contract getStringx2 is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    string public str1;
    string public str2;

    bytes32 private jobId;
    uint256 private fee;

    event requestStringFulfilled(bytes32 indexed requestId, string str1, string str2);

/// [constructor]    
    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6);
        setChainlinkOracle(0xbF974f8faf696229854D70E5030CC6CA01A34c4B);
        jobId = "be46cb8070c14cb7ad058b29f127ec6b";
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
            "url1", 
            "API_URL" // Example: https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=1
        );
        req.add("path1", "JSON_PATH"); // Example: 0,id
        req.add(
            "url2", 
            "API_URL" // Example: https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=2
        );
        req.add("path2", "JSON_PATH"); // Example: 1,id        
        // Sends the request
        return sendOperatorRequest(req, fee);
    }
/// [request]

    function fulfillString(
        bytes32 _requestId,
        string memory _str1,
        string memory _str2
    ) public recordChainlinkFulfillment(_requestId) {
        emit requestStringFulfilled(_requestId, _str1, _str2);
        str1 = _str1;
        str2 = _str2;
    }

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}
