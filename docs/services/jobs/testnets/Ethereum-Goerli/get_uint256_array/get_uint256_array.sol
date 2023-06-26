// SPDX-License-Identifier: MIT

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * THIS EXAMPLE USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

contract getUint256Array is ChainlinkClient, ConfirmedOwner {
  using Chainlink for Chainlink.Request;

  uint256[] public uint256Array;
  bytes32 private jobId;
  uint256 private fee;

/// [constructor]    
  constructor() ConfirmedOwner(msg.sender) {
    setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
    setChainlinkOracle(0xB9C47B9609174716CE536324d4FbEad9292c1d3a);
    jobId = "9a2ba54374f34184bdc6390db3171994";
    fee = ((0 * LINK_DIVISIBILITY) / 10); // 0 LINK (varies by network and job)
  }
/// [constructor]

/// [request]
  function requestUint256Array()
    public
    onlyOwner
  {
    Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfillUint256Array.selector);
    req.add("get", "API_URL"); // Example: https://api.binance.us/api/v3/depth?symbol=ETHUSD
    req.add("path", "JSON_PATH"); // Example: bids,0
    sendChainlinkRequest(req, fee);
  }
/// [request]

  event RequestFulfilledArray(bytes32 indexed requestId, uint256[] _uint256Array);

  function fulfillUint256Array(bytes32 requestId, uint256[] memory _uint256Array)
    public
    recordChainlinkFulfillment(requestId)
  {
    emit RequestFulfilledArray(requestId, _uint256Array);
    uint256Array = _uint256Array;
  }
}