//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

/**
 * Request testnet LINK and ETH here: https://faucets.chain.link/
 * Find information on LINK Token Contracts and get the latest ETH and LINK faucets here: https://docs.chain.link/docs/link-token-contracts/
 */

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 */

contract LinkWellUint256ConsumerContractExample is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

	address private oracleAddress;
    bytes32 private jobId;
    uint256 private fee;
    
    constructor() ConfirmedOwner(msg.sender) {
    
    	// The Chainlink token address and Oracle address vary by network. 
    	// You may find the appropriate values for each network here: https://docs.linkwellnodes.io/services/direct-request-jobs/Jobs-and-Pricing
        setChainlinkToken(ADD_CHAINLINK_TOKEN_ADDRESS_HERE);
        setOracleAddress(ADD_ORACLE_ADDRESS_HERE);
        
        setJobId("ADD_JOB_ID_HERE");
        setFeeInHundredthsOfLink(10);     // 0.1 LINK
    }

    // Send a request to the Chainlink oracle
    function request() public {
    
        Chainlink.Request memory req = buildOperatorRequest(jobId, this.fulfill.selector);
        
        // DEFINE THE REQUEST PARAMETERS (example)
        req.add('method', 'GET');
        req.add('url', 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey={your_key}');
        req.add('headers', '["content-type", "application/json"]');
        req.add('body', '');
        req.add('contact', 'derek_linkwellnodes.io');
        
        // The following curl command simulates the above request parameters: 
        // curl -k 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey={your_key}' --request 'GET' --header 'content-type: application/json'
        
        // PROCESS THE RESULT (example)
        req.add('path', 'Global Quote,05. price');
        req.addInt('multiplier', 10 ** 18);

        // Send the request to the Chainlink oracle        
        sendOperatorRequest(req, fee);
    }

    uint256 public response;
    
    // Receive the result from the Chainlink oracle    
    event RequestFulfilled(bytes32 indexed requestId);
    function fulfill(bytes32 requestId, uint256 data) public recordChainlinkFulfillment(requestId) {
    	// Process the oracle response
        // emit RequestFulfilled(requestId);    // (optional) emits this event in the on-chain transaction logs, allowing Web3 applications to listen for this transaction
        response = data;     
    }

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

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}
