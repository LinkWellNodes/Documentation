// SPDX-License-Identifier: MIT

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * THIS EXAMPLE USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

contract getBool is ChainlinkClient, ConfirmedOwner {
  using Chainlink for Chainlink.Request;

  bool public boolean;
  bytes32 private jobId;
  uint256 private fee;
  event requestBoolFulfilled(bytes32 indexed requestId,bool indexed boolean);

/// [constructor]    
  constructor() ConfirmedOwner(msg.sender) {
    setChainlinkToken(0x514910771AF9Ca656af840dff83E8264EcF986CA);
    setChainlinkOracle(0x0168B5FcB54F662998B0620b9365Ae027192621f);
    jobId = "2e0a430bcd2b482d8462fdcc5224fba1";
    fee = ((14 * LINK_DIVISIBILITY) / 10); // 1.4 LINK (varies by network and job)
  }
/// [constructor]    

/// [request]
  function requestBool()
    public
    onlyOwner
  {
    Chainlink.Request memory req = buildOperatorRequest(jobId, this.fulfillBool.selector);
    req.add("get", 'API_URL'); // Example: https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD
    req.add("path", "JSON_PATH"); // Example: symbols,0,isSpotTradingAllowed
    sendOperatorRequest(req, fee);
  }
/// [request]

  function fulfillBool(bytes32 _requestId, bool _boolean)
    public
    recordChainlinkFulfillment(_requestId)
  {
    emit requestBoolFulfilled(_requestId, _boolean);
    boolean = _boolean;
  }

  function withdrawLink() public onlyOwner {
      LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
      require(
          link.transfer(msg.sender, link.balanceOf(address(this))),
          "Unable to transfer"
      );
  }

}