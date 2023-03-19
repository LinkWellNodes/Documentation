# Chainlink Full Infrastructure Deployment (AWS)

This repository enables anyone to deploy the end-to-end stack of Chainlink infrastructure components required to become a node operator.

The stack includes:

* AWS Account and VPC networking setup
* Monitoring and alerts through CloudWatch
* All required supporting hardware, including:
	* Blockchain full node (optional)
	* Chainlink node
	* Database
	* External adapters (optional)
* Enterprise-grade monitoring through Splunk (optional) 
	* Chainlink/Full Node/External Adapter Logs
	* Host and Docker container metrics
	* AWS account monitoring (Cloudwatch Logs, Cloudtrail, Config and more)
	* Advanced gas and transaction analytics
	* Robust monitoring and alerting through a custom built Chainlink application
* VPN deployment (optional)
	* Secure VPN access to all EC2 instances

Other features include:

* Elastic infrastructure (optional autoscaling groups, load balancers) 
* Single-VPC model with robust per-chain tagging (saves greatly on transfer costs as compared to an egress VPC ('hub-and-spoke') design pattern, for teams wishing to support multiple blockchains)
* Custom health check scripts for automatic request routing between blockchain full nodes
* Several deployment, maintenance, and backup guides
* Storage of sensitive env vars and credentials in SSM Parameter Store 
* Automatic deletion of sensitive Chainlink configuration files from the EC2 host
* Automatic periodic backup / restore of blockchain node data to S3

A fully-featured set of Chainlink infrastructure deployment resources, in the form of AWS Cloudformation templates, machine bootstrap scripts.

# Supported networks

This infrastructure stack supports the deployment of the following networks:

* AVAX C-Chain Mainnet (ACM)
* AVAX C-Chain Fuji Testnet (ACFT)
* Arbitrum One Mainnet (AOM)
* Arbitrum Goerli Testnet (AGT)
* BSC Mainnet (BM)
* BSC Testnet (BTT)
* ETH Mainnet (EM)
* ETH Goerli Testnet (EGT)
* ETH Sepolia Testnet (EST)
* MATIC Mainnet (MM)
* MATIC Mumbai Testnet (MMT)

# Architecture

# Port information

| Network abbrev | CL   |         |               |      |     | Geth node |      |           |           |               | Heimdall/Bor node |                |      |      |                |           | EA node       |
| -------------- | ---- | ------- | ------------- | ---- | --- | --------- | ---- | --------- | --------- | ------------- | ----------------- | -------------- | ---- | ---- | -------------- | --------- | ------------- |
|                | GUI  | pgAdmin | Healthchecker | P2P  | SSH | HTTP      | WS   | P2P (ETH) | P2P (BSC) | Healthchecker | SSH               | GUI (Heimdall) | RPC  | WS   | P2P (Heimdall) | P2P (Bor) | Healthchecker | SSH | getData |
| current        | 6688 | 40000   | TBA           | 7070 | 22  | 8545      | 8546 | 30303     | 30311     | 50000         | 22                | 1317           | 8545 | 8546 | 26656          | 30303     | 50000         | 22 | # |
| ACM            | 5000 | 5001    | 4000          | 5002 | 22  | 5003      | 5004 | 5005      | 5006      | 4000          | 22                | 5007           | 5008 | 5009 | 5010           | 5011      | 4000          | 22 | 5050 |
| ACFT           | 5100 | 5101    | 4000          | 5102 | 22  | 5103      | 5104 | 5105      | 5106      | 4000          | 22                | 5107           | 5108 | 5109 | 5110           | 5111      | 4000          | 22 | 5150 |
| AM             | 5200 | 5201    | 4000          | 5202 | 22  | 5203      | 5204 | 5205      | 5206      | 4000          | 22                | 5207           | 5208 | 5209 | 5210           | 5211      | 4000          | 22 | 5250 |
| ART            | 5300 | 5301    | 4000          | 5302 | 22  | 5303      | 5304 | 5305      | 5306      | 4000          | 22                | 5307           | 5308 | 5309 | 5310           | 5311      | 4000          | 22 | 5350 |
| BM             | 5400 | 5401    | 4000          | 5402 | 22  | 5403      | 5404 | 5405      | 5406      | 4000          | 22                | 5407           | 5408 | 5409 | 5410           | 5411      | 4000          | 22 | 5450 |
| BTT            | 5500 | 5501    | 4000          | 5502 | 22  | 5503      | 5504 | 5505      | 5506      | 4000          | 22                | 5507           | 5508 | 5509 | 5510           | 5511      | 4000          | 22 | 5550 |
| EM             | 5600 | 5601    | 4000          | 5602 | 22  | 5603      | 5604 | 5605      | 5606      | 4000          | 22                | 5607           | 5608 | 5609 | 5610           | 5611      | 4000          | 22 | 5650 |
| EGT            | 5700 | 5701    | 4000          | 5702 | 22  | 5703      | 5704 | 5705      | 5706      | 4000          | 22                | 5707           | 5708 | 5709 | 5710           | 5711      | 4000          | 22 | 5750 |
| MM             | 5800 | 5801    | 4000          | 5802 | 22  | 5803      | 5804 | 5805      | 5806      | 4000          | 22                | 5807           | 5808 | 5809 | 5810           | 5811      | 4000          | 22 | 5850 |
| MMT            | 5900 | 5901    | 4000          | 5902 | 22  | 5903      | 5904 | 5905      | 5906      | 4000          | 22                | 5907           | 5908 | 5909 | 5910           | 5911      | 4000          | 22 | 5950 |
