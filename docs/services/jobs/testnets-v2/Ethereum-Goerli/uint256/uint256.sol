//SPDX-License-Identifier: MIT
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

contract LinkWellUint256ConsumerContractExample is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    bytes32 private jobId;
    uint256 private fee;

/// [constructor]    
    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setChainlinkOracle(0xB9C47B9609174716CE536324d4FbEad9292c1d3a);
        jobId = "a8356f48569c434eaa4ac5fcb4db5cc0";
        fee = (0 * LINK_DIVISIBILITY) / 10;     // 0 LINK
    }
/// [constructor]

/// [request]
    function request() public {
    
        Chainlink.Request memory req = buildOperatorRequest(jobId, this.fulfill.selector);
        
        // DEFINE THE REQUEST (example)
        req.add("method", "GET");
        req.add("url", "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD");
        req.add("headers", '["content-type", "application/json", "set-cookie", "sid=14A52"]');
        req.add("body", "");
        req.add("contact", "derek_linkwellnodes.io");
        
        // The following CURL request simulates the above request parameters: 
        // curl --insecure --request GET --header "content-type: application/json" --header "set-cookie: sid=14A52" "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"
        
        // PROCESS THE RESULT (example)
        req.add("path", "RAW,ETH,USD,PRICE"); 
        req.addInt("multiplier", 10 ** 18);

        // Initiate the oracle request        
        sendOperatorRequest(req, fee);
    }
/// [request]

/// [response]
    uint256 public response;
    
    event RequestFulfilled(bytes32 indexed requestId, uint256 indexed response);
    function fulfill(bytes32 requestId, uint256 data) public recordChainlinkFulfillment(requestId) {
    	// Process the oracle response
        emit RequestFulfilled(requestId, data);
        response = data;     // example value: 1913540000000000000000 (1913.54 before "multiplier" is applied)
    }
/// [response]

/// [maintenance]
    // Update oracle address
    function setOracleAddress(address _oracleAddress) public onlyOwner {
        oracleAddress = _oracleAddress;
        setChainlinkOracle(_oracleAddress);
    }
    function getOracleAddress() public view onlyOwner returns (address) {
        return oracleAddress;
    }

    // Update jobId
    function setJobId(string memory _jobId) public onlyOwner {
        jobId = bytes32(bytes(_jobId));
    }
    function getJobId() public view onlyOwner returns (string memory) {
        return string(abi.encodePacked(jobId));
    }
    
    // Update fees
    function setFeeInJuels(uint256 _feeInJuels) public onlyOwner {
        fee = _feeInJuels;
    }
    function setFeeInHundredthsOfLink(uint256 _feeInHundredthsOfLink) public onlyOwner {
        setFeeInJuels((_feeInHundredthsOfLink * LINK_DIVISIBILITY) / 100);
    }
    function getFeeInHundredthsOfLink() public view onlyOwner returns (uint256) {
        return (fee * 100) / LINK_DIVISIBILITY;
    }
/// [maintenance]

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}