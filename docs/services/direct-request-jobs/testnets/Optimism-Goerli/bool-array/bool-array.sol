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

contract LinkWellBoolArrConsumerContractExample is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

	address private oracleAddress;
    bytes32 private jobId;
    uint256 private fee;
    
    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0xdc2CC710e42857672E7907CF474a69B63B93089f);
        setOracleAddress(0x14bc7F6Da6cA3E072793c185e01a76E62341CC61);
        setJobId("433ba6a76b374e2580dd43685a9de8c6");
        setFeeInHundredthsOfLink(0);     // 0 LINK
    }

    // Send a request to the Chainlink oracle
    function request() public {
    
        Chainlink.Request memory req = buildOperatorRequest(jobId, this.fulfill.selector);
		     
        // DEFINE THE REQUEST PARAMETERS (example)
        req.add('method', 'POST');
        req.add('url', 'https://httpbin.org/post');
        req.add('headers', '["accept", "application/json", "set-cookie", "sid=14A52"]');
        req.add('body', '{"data":[[false,false,true],[false,true,true],[true,false,true]]}');
        req.add('contact', 'derek_linkwellnodes.io');
        
        // The following curl command simulates the above request parameters: 
        // curl 'https://httpbin.org/post' --request 'POST' --header 'content-type: application/json' --header 'set-cookie: sid=14A52' req.add('body', '{"data":[[false,false,true],[false,true,true],[true,false,true]]}');
        
        // PROCESS THE RESULT (example)
        req.add('path', 'json,data,0,2;json,data,1,0;json,data,2,1');
        
        // Send the request to the Chainlink oracle
        sendOperatorRequest(req, fee);
    }

    bool[] public responseArr;

    // Receive the result from the Chainlink oracle
    event RequestFulfilled(bytes32 indexed requestId);
    function fulfill(bytes32 requestId, bool[] memory data) public recordChainlinkFulfillment(requestId) {
        // Process the oracle response
        // emit RequestFulfilled(requestId);    // (optional) emits this event in the on-chain transaction logs, allowing Web3 applications to listen for this transaction
        responseArr = data;      // example value: responseBytesArr[0] = true, responseBytesArr[1] = false, responseBytesArr[2] = false
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
