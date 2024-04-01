// SPDX-License-Identifier: MIT

/**
 * THIS IS AN EXAMPLE CONTRACT WHICH USES HARDCODED VALUES FOR CLARITY.
 * THIS EXAMPLE USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

pragma solidity ^0.8.17;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

contract getBool is ChainlinkClient, ConfirmedOwner {
  using Chainlink for Chainlink.Request;

  bool public boolean;
  bytes32 private jobId;
  uint256 private fee;
  event requestBoolFulfilled(bytes32 indexed requestId,bool indexed boolean);
    
  constructor() ConfirmedOwner(msg.sender) {
    _setChainlinkToken(0xf97f4df75117a78c1A5a0DBb814Af92458539FB4);
    _setChainlinkOracle(<oracle address>);
    jobId = "2e0a430bcd2b482d8462fdcc5224fba1";
    fee = (1 * LINK_DIVISIBILITY) / 10; // 0.1 LINK (varies by network and job)
  }    

  function requestBool()
    public
    onlyOwner
  {
    Chainlink.Request memory req = _buildOperatorRequest(jobId, this.fulfillBool.selector);
    req._add("get", 'API_URL'); // Example: https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD
    req._add("path", "JSON_PATH"); // Example: symbols,0,isSpotTradingAllowed
    _sendOperatorRequest(req, fee);
  }

  function fulfillBool(bytes32 _requestId, bool _boolean)
    public
    recordChainlinkFulfillment(_requestId)
  {
    emit requestBoolFulfilled(_requestId, _boolean);
    boolean = _boolean;
  }

  function withdrawLink() public onlyOwner {
      LinkTokenInterface link = LinkTokenInterface(_chainlinkTokenAddress());
      require(
          link.transfer(msg.sender, link.balanceOf(address(this))),
          "Unable to transfer"
      );
  }

}