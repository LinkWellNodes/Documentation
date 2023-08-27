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
    
  constructor() ConfirmedOwner(msg.sender) {
    setChainlinkToken(0xdc2CC710e42857672E7907CF474a69B63B93089f);
    setChainlinkOracle(0x14bc7F6Da6cA3E072793c185e01a76E62341CC61);
    jobId = "9a2ba54374f34184bdc6390db3171994";
    fee = ((0 * LINK_DIVISIBILITY) / 10); // 0 LINK (varies by network and job)
  }

  function requestUint256Array()
    public
    onlyOwner
  {
    Chainlink.Request memory req = buildOperatorRequest(jobId, this.fulfillUint256Array.selector);
    req.add("get", "API_URL"); // Example: https://api.binance.us/api/v3/depth?symbol=ETHUSD
    req.add("path", "JSON_PATH"); // Example: bids,0
    sendOperatorRequest(req, fee);
  }

  event RequestFulfilledArray(bytes32 indexed requestId, uint256[] _uint256Array);

  function fulfillUint256Array(bytes32 requestId, uint256[] memory _uint256Array)
    public
    recordChainlinkFulfillment(requestId)
  {
    emit RequestFulfilledArray(requestId, _uint256Array);
    uint256Array = _uint256Array;
  }
}