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

contract LinkWellStringBytesArrConsumerContractExample is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

	address private oracleAddress;
    bytes32 private jobId;
    uint256 private fee;

/// [constructor]    
    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06);
        setOracleAddress(0xd08FEb8203E76f836D74608595346ab6b0f768C9);
        setJobId("07f761e26a284cb8b7ed67188dece6d4");
        setFeeInHundredthsOfLink(0);     // 0 LINK
    }
/// [constructor]

/// [request]
    // Send a request to the Chainlink oracle
    function request() public {
    
        Chainlink.Request memory req = buildOperatorRequest(jobId, this.fulfill.selector);
		     
        // DEFINE THE REQUEST (example)
        req.add('method', 'POST');
        req.add('url', 'https://httpbin.org/post');
        req.add('headers', '["accept", "application/json", "set-cookie", "sid=14A52"]');
        req.add('body', '{"data":[["Coinbase","Binance","Kraken"],["Huobi","Crypto.com","KuCoin"],["Yobit","Gemini","OKX"]]}');
        req.add('contact', 'derek_linkwellnodes.io');
        
        // The following curl request simulates the above request parameters: 
        // curl 'https://httpbin.org/post' --request 'POST' --header 'content-type: application/json' --header 'set-cookie: sid=14A52' --data '{"data":[["Coinbase","Binance","Kraken"],["Huobi","Crypto.com","KuCoin"],["Yobit","Gemini","OKX"]]}'
        
        // PROCESS THE RESULT (example)
        req.add('path', 'json,data,0');
        
        // Send the request to the Chainlink oracle
        sendOperatorRequest(req, fee);
    }
/// [request]

/// [response]
    bytes[] public responseBytesArr;
    string[] public responseStringArr;

    // Receive the result from the Chainlink oracle
    event RequestFulfilled(bytes32 indexed requestId, bytes[] indexed responseBytesArr);
    function fulfill(bytes32 requestId, bytes[] memory bytesData) public recordChainlinkFulfillment(requestId) {
        // Process the oracle response
        emit RequestFulfilled(requestId, bytesData);
        responseBytesArr = bytesData;                                // example value: responseBytesArr[0] = "0x436f696e62617365", responseBytesArr[1] = "0x42696e616e6365", responseBytesArr[2] = "0x4b72616b656e"
        for (uint i = 0; i < responseBytesArr.length; i++) {
            responseStringArr.push(string(responseBytesArr[i]));     // example value: responseStringArr[0] = "Coinbase", responseStringArr[1] = "Binance", responseStringArr[2] = "Kraken"
        }
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
