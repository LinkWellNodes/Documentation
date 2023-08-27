// SPDX-License-Identifier: MIT

/**
 * Request testnet LINK and ETH here: https://faucets.chain.link/
 * Find information on LINK Token Contracts and get the latest ETH and LINK faucets here: https://docs.chain.link/docs/link-token-contracts/
 */

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
    
  constructor() ConfirmedOwner(msg.sender) {
    setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
    setChainlinkOracle(0xB9C47B9609174716CE536324d4FbEad9292c1d3a);
    jobId = "2e0a430bcd2b482d8462fdcc5224fba1";
    fee = ((0 * LINK_DIVISIBILITY) / 10); // 0 LINK (varies by network and job)
  }

  function requestBool()
    public
    onlyOwner
  {
    Chainlink.Request memory req = buildOperatorRequest(jobId, this.fulfillBool.selector);
    req.add("get", 'API_URL'); // Example: https://api.binance.us/api/v3/exchangeInfo?symbol=ETHUSD
    req.add("path", "JSON_PATH"); // Example: symbols,0,isSpotTradingAllowed
    sendOperatorRequest(req, fee);
  }

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