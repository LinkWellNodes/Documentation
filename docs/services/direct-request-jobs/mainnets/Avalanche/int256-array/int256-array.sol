//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 */

contract LinkWellInt256ArrConsumerContractExample is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

	address private oracleAddress;
    bytes32 private jobId;
    uint256 private fee;
    
    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x5947BB275c521040051D82396192181b413227A3);
        setOracleAddress(0x720E94621237EE80948E1C14Cf62bb82ceb8b264);
        setJobId("356a0aced8f7425abd2ec17df9014359");
        setFeeInHundredthsOfLink(0);     // 0 LINK
    }

    // Send a request to the Chainlink oracle
    function request() public {
    
        Chainlink.Request memory req = buildOperatorRequest(jobId, this.fulfill.selector);
		     
        // DEFINE THE REQUEST PARAMETERS (example)
        req.add('method', 'POST');
        req.add('url', 'https://httpbin.org/post');
        req.add('headers', '["accept", "application/json"]');
        req.add('body', '{"data":[[12.43,-54.47,98.34],[89.99,-34.21,-85.65],[-412.43,983.89,473.31]]}');
        req.add('contact', 'derek_linkwellnodes.io');
        
        // The following curl command simulates the above request parameters: 
        // curl 'https://httpbin.org/post' --request 'POST' --header 'content-type: application/json' --data '{"data":[[12.43,-54.47,98.34],[89.99,-34.21,-85.65],[-412.43,983.89,473.31]]}'
        
        // PROCESS THE RESULT (example)
        req.add('path', 'json,data,0,1;json,data,1,0;json,data,2,1'); 
        req.addInt('multiplier', 10 ** 18);
        
        // Send the request to the Chainlink oracle
        sendOperatorRequest(req, fee);
    }

    int256[] public responseArr;

    // Receive the result from the Chainlink oracle
    event RequestFulfilled(bytes32 indexed requestId, int256[] indexed responseArr);
    function fulfill(bytes32 requestId, int256[] memory data) public recordChainlinkFulfillment(requestId) {
        // Process the oracle response
        emit RequestFulfilled(requestId, data);
        responseArr = data;     // example value: responseArr[0] = -54470000000000000000, responseArr[1] = 89990000000000000000, responseArr[2] = 983890000000000000000
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
