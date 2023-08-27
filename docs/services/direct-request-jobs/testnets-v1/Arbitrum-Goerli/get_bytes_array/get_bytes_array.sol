// SPDX-License-Identifier: MIT

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * THIS EXAMPLE USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

contract getBytesArray is ChainlinkClient, ConfirmedOwner {
  using Chainlink for Chainlink.Request;

  bytes[] public bytesArray;

  bytes32 private jobId;
  uint256 private fee;
    
  constructor() ConfirmedOwner(msg.sender) {
    setChainlinkToken(0xd14838A68E8AFBAdE5efb411d5871ea0011AFd28);
    setChainlinkOracle(0xd08FEb8203E76f836D74608595346ab6b0f768C9);
    jobId = "332c0b46e57f49cd8c7d74cdbe5106ab";
    fee = ((0 * LINK_DIVISIBILITY) / 10); // 0 LINK (varies by network and job)
  }

  function requestBytesArray()
    public
    onlyOwner
  {
    Chainlink.Request memory req = buildOperatorRequest(jobId, this.fulfillBytesArray.selector);
    req.add("get", "API_URL"); // Example: https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD
    req.add("path", "JSON_PATH"); // Example: symbols,0,orderTypes
    sendOperatorRequest(req, fee);
  }

  event requestBytesFulfilledArray(bytes32 indexed requestId, bytes[] _bytesArray);

  function fulfillBytesArray(bytes32 requestId, bytes[] memory _bytesArray)
    public
    recordChainlinkFulfillment(requestId)
  {
    emit requestBytesFulfilledArray(requestId, _bytesArray);
    bytesArray = _bytesArray;
  }
}