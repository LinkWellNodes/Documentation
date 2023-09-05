//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 */

contract LinkWellStringBytesArrConsumerContractExample is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

	address private oracleAddress;
    bytes32 private jobId;
    uint256 private fee;
    
    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x514910771AF9Ca656af840dff83E8264EcF986CA);
        setOracleAddress(0x0168B5FcB54F662998B0620b9365Ae027192621f);
        setJobId("07f761e26a284cb8b7ed67188dece6d4");
        setFeeInHundredthsOfLink(1.4);     // 1.4 LINK
    }

    // Send a request to the Chainlink oracle
    function request() public {
    
        Chainlink.Request memory req = buildOperatorRequest(jobId, this.fulfill.selector);
		     
        // DEFINE THE REQUEST PARAMETERS (example)
        req.add('method', 'POST');
        req.add('url', 'https://httpbin.org/post');
        req.add('headers', '["accept", "application/json"]');
        req.add('body', '{"data":[["Coinbase","Binance","Kraken"],["Huobi","Crypto.com","KuCoin"],["Yobit","Gemini","OKX"]]}');
        req.add('contact', 'derek_linkwellnodes.io');
        
        // The following curl command simulates the above request parameters: 
        // curl 'https://httpbin.org/post' --request 'POST' --header 'content-type: application/json' --data '{"data":[["Coinbase","Binance","Kraken"],["Huobi","Crypto.com","KuCoin"],["Yobit","Gemini","OKX"]]}'
        
        // PROCESS THE RESULT (example)
        req.add('path', 'json,data,0,2;json,data,1,0;json,data,2,1');
        
        // Send the request to the Chainlink oracle
        sendOperatorRequest(req, fee);
    }

    bytes[] public responseBytesArr;
    string[] public responseStringArr;

    // Receive the result from the Chainlink oracle
    event RequestFulfilled(bytes32 indexed requestId, bytes[] indexed responseBytesArr);
    function fulfill(bytes32 requestId, bytes[] memory bytesData) public recordChainlinkFulfillment(requestId) {
        // Process the oracle response
        emit RequestFulfilled(requestId, bytesData);
        responseBytesArr = bytesData;                                // example value: responseBytesArr[0] = "0x4b72616b656e", responseBytesArr[1] = "0x48756f6269", responseBytesArr[2] = "0x47656d696e69"
        for (uint i = 0; i < responseBytesArr.length; i++) {
            responseStringArr.push(string(responseBytesArr[i]));     // example value: responseStringArr[0] = "Kraken", responseStringArr[1] = "Huobi", responseStringArr[2] = "Gemini"
        }
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
