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

contract LinkWellUint256ConsumerContractExample is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

	address private oracleAddress;
    bytes32 private jobId;
    
    constructor() ConfirmedOwner(msg.sender) {
        _setChainlinkToken(0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846);
        setOracleAddress(<oracle address>);
        setJobId("a8356f48569c434eaa4ac5fcb4db5cc0");
    }

    // Send a request to the Chainlink oracle
    function request() public {
    
        Chainlink.Request memory req = _buildOperatorRequest(jobId, this.fulfill.selector);
        
        // DEFINE THE REQUEST PARAMETERS (example)
        req._add('method', 'GET');
        req._add('url', 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR');
        req._add('headers', '["content-type", "application/json", "set-cookie", "sid=14A52"]');
        req._add('body', '');
        req._add('contact', '');     // PLEASE ENTER YOUR CONTACT INFO. this allows us to notify you in the event of any emergencies related to your request (ie, bugs, downtime, etc.). example values: 'derek_linkwellnodes.io' (Discord handle) OR 'derek@linkwellnodes.io' OR '+1-617-545-4721'
        
        // The following curl command simulates the above request parameters: 
        // curl 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR' --request 'GET' --header 'content-type: application/json' --header 'set-cookie: sid=14A52'
        
        // PROCESS THE RESULT (example)
        req._add('path', 'ETH,USD');
        req._addInt('multiplier', 10 ** 18);

        // Send the request to the Chainlink oracle        
        _sendOperatorRequest(req, 0);
    }

    uint256 public response;
    
    // Receive the result from the Chainlink oracle    
    event RequestFulfilled(bytes32 indexed requestId);
    function fulfill(bytes32 requestId, uint256 data) public recordChainlinkFulfillment(requestId) {
    	// Process the oracle response
        // emit RequestFulfilled(requestId);    // (optional) emits this event in the on-chain transaction logs, allowing Web3 applications to listen for this transaction
        response = data;     // example value: 1875870000000000000000 (1875.87 before "multiplier" is applied)
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

    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(_chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }
}
