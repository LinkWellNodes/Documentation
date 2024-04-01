//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

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
        _setChainlinkToken(0xdB7A504CF869484dd6aC5FaF925c8386CBF7573D);
        setOracleAddress(<oracle address>);
        setJobId("07f761e26a284cb8b7ed67188dece6d4");
        setFeeInHundredthsOfLink(12);     // 0.12 LINK
    }

    // Send a request to the Chainlink oracle
    function request() public {
    
        Chainlink.Request memory req = _buildOperatorRequest(jobId, this.fulfill.selector);
		     
        // DEFINE THE REQUEST PARAMETERS (example)
        req._add('method', 'POST');
        req._add('url', 'https://httpbin.org/post');
        req._add('headers', '["accept", "application/json"]');
        req._add('body', '{"data":[["Coinbase","Binance","Kraken"],["Huobi","Crypto.com","KuCoin"],["Yobit","Gemini","OKX"]]}');
        req._add('contact', '');     // PLEASE ENTER YOUR CONTACT INFO. this allows us to notify you in the event of any emergencies related to your request (ie, bugs, downtime, etc.). example values: 'derek_linkwellnodes.io' (Discord handle) OR 'derek@linkwellnodes.io' OR '+1-617-545-4721'
        
        // The following curl command simulates the above request parameters: 
        // curl 'https://httpbin.org/post' --request 'POST' --header 'content-type: application/json' --data '{"data":[["Coinbase","Binance","Kraken"],["Huobi","Crypto.com","KuCoin"],["Yobit","Gemini","OKX"]]}'
        
        // PROCESS THE RESULT (example)
        req._add('path', 'json,data,0,2;json,data,1,0;json,data,2,1');
        
        // Send the request to the Chainlink oracle
        _sendOperatorRequest(req, fee);
    }

    bytes[] public responseBytesArr;    

    // Receive the result from the Chainlink oracle
    event RequestFulfilled(bytes32 indexed requestId);
    function fulfill(bytes32 requestId, bytes[] memory bytesData) public recordChainlinkFulfillment(requestId) {
        // Process the oracle response
        // emit RequestFulfilled(requestId);    // (optional) emits this event in the on-chain transaction logs, allowing Web3 applications to listen for this transaction
        responseBytesArr = bytesData;           // example value: responseBytesArr[0] = "0x4b72616b656e", responseBytesArr[1] = "0x48756f6269", responseBytesArr[2] = "0x47656d696e69"
    }

    // Getter function demonstrating how to retrieve strings from the result object
    function getResponseString(uint256 i) public view onlyOwner returns (string memory) {
        return string(responseBytesArr[i]);     // example value: [0] = "Kraken", [1] = "Huobi", [2] = "Gemini"
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
