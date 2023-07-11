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

contract LinkWellUint256ArrConsumerContractExample is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

	address private oracleAddress;
    bytes32 private jobId;
    uint256 private fee;

/// [constructor]    
    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
        setOracleAddress(0x12A3d7759F745f4cb8EE8a647038c040cB8862A5);
        setJobId("e20c7567b2bb4e3690c615d03457b5d3");
        setFeeInHundredthsOfLink(0);     // 0 LINK
    }
/// [constructor]

/// [request]
    function request() public {
    
        Chainlink.Request memory req = buildOperatorRequest(jobId, this.fulfill.selector);
		     
        // DEFINE THE REQUEST (example)
        req.add('method', 'POST');
        req.add('url', 'https://httpbin.org/post');
        req.add('headers', '["accept", "application/json", "set-cookie", "sid=14A52"]');
        req.add('body', '{"data":[412.43,983.89,473.31]}');
        req.add('contact', 'derek_linkwellnodes.io');
        
        // The following CURL request simulates the above request parameters: 
        // curl --insecure --request POST --header "content-type: application/json" --header "set-cookie: sid=14A52" --data '{"data":[412.43,983.89,473.31]}' "https://httpbin.org/post"
        
        // PROCESS THE RESULT (example)
        req.add('path', 'json,data'); 
        req.addInt('multiplier', 10 ** 18);
        
        // Initiate the oracle request
        sendOperatorRequest(req, fee);
    }
/// [request]

/// [response]
    uint256[] public responseArr;

    event RequestFulfilled(bytes32 indexed requestId, uint256[] indexed responseArr);
    function fulfill(bytes32 requestId, uint256[] memory data) public recordChainlinkFulfillment(requestId) {
        // Process the oracle response
        emit RequestFulfilled(requestId, data);
        responseArr = data;     // example value: responseArr[0] = 412430000000000000000, responseArr[1] = 983890000000000000000, responseArr[2] = 473310000000000000000
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
