//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

/**
 * Request testnet LINK and ETH here: https://faucets.chain.link/
 * Find information on LINK Token Contracts and get the latest ETH and LINK faucets here: https://docs.chain.link/docs/link-token-contracts/
 */

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 */

contract LinkWellUint256ArrConsumerContractExample is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

	address private oracleAddress;
    bytes32 private jobId;
    uint256 private fee;
    
    constructor() ConfirmedOwner(msg.sender) {
    
        // The Chainlink token address and Oracle address vary by network. 
        // You may find the appropriate values for each network here: https://docs.linkwellnodes.io/services/direct-request-jobs/Jobs-and-Pricing
        _setChainlinkToken(ADD_CHAINLINK_TOKEN_ADDRESS_HERE);
        setOracleAddress(ADD_ORACLE_ADDRESS_HERE);
        
        setJobId("ADD_JOB_ID_HERE");
        setFeeInHundredthsOfLink(10);     // 0.1 LINK
    }

    // Send a request to the Chainlink oracle
    function request() public {
    
        Chainlink.Request memory req = _buildOperatorRequest(jobId, this.fulfill.selector);
        
        // DEFINE THE REQUEST PARAMETERS (example)
        req._add('method', 'GET');
        req._add('url', 'https://therundown-therundown-v1.p.rapidapi.com/events/9a35b8986a76eaaea364be331cb453ec');
        req._add('headers', '["X-RapidAPI-Host", "therundown-therundown-v1.p.rapidapi.com", "X-RapidAPI-Key", "{your_api_key}"]');
        req._add('body', '');
        req._add('contact', '');     // PLEASE ENTER YOUR CONTACT INFO. this allows us to notify you in the event of any emergencies related to your request (ie, bugs, downtime, etc.). example values: 'derek_linkwellnodes.io' (Discord handle) OR 'derek@linkwellnodes.io' OR '+1-617-545-4721'
        
        // The following curl command simulates the above request parameters: 
        // curl -k -X GET -H "X-RapidAPI-Host: therundown-therundown-v1.p.rapidapi.com" -H "X-RapidAPI-Key: {your_api_key}" "https://therundown-therundown-v1.p.rapidapi.com/events/9a35b8986a76eaaea364be331cb453ec"
        
        // PROCESS THE RESULT (example)
        req._add('path', 'score,score_away;score,score_home');
        req._addInt('multiplier', 1);

        // Send the request to the Chainlink oracle        
        _sendOperatorRequest(req, fee);
    }

    uint256[] public responseArr;

    // Receive the result from the Chainlink oracle
    event RequestFulfilled(bytes32 indexed requestId);
    function fulfill(bytes32 requestId, uint256[] memory data) public recordChainlinkFulfillment(requestId) {
        // Process the oracle response
        // emit RequestFulfilled(requestId);    // (optional) emits this event in the on-chain transaction logs, allowing Web3 applications to listen for this transaction
        responseArr = data;     // example value: responseArr[0] = 20, responseArr[1] = 31
    }

    // Update oracle address
    function setOracleAddress(address _oracleAddress) public onlyOwner {
        oracleAddress = _oracleAddress;
        _setChainlinkOracle(_oracleAddress);
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
        LinkTokenInterface link = LinkTokenInterface(_chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}
