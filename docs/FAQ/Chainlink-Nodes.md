<!-- # Frequently Asked Questions
Please see below for a list of frequently asked questions and their answers.  This FAQ is broken up into three sections in alignment with the Chainlink Discord channels. -->

# Frequently Asked Questions - Chainlink Nodes

### Can anyone run a Chainlink node?

Anyone can run a Chainlink node, as the code is open-source and easily deployable on almost any infrastructure. 

If you are looking to make money running a Chainlink node, we recommend reading our [write-up](#is-running-a-chainlink-node-profitable) on this topic.

If you are new to Chainlink, we suggest learning about the [Chainlink ecosystem](https://blog.chain.link/what-is-chainlink/), as well as practicing various methods for [deploying Chainlink infrastructure](https://docs.chain.link/chainlink-nodes/v1/running-a-chainlink-node). 

### Is running a Chainlink node profitable?

In order to earn LINK for serving data, you'll need to seek out customer(s) who are willing to pay for your services. In this way, running a Chainlink node is akin to running a traditional business, in that it requires a certain level of business development, marketing expertise, and lead generation. This admittedly differs from other blockchain node ecosystems - such as running an Ethereum validator node - where you can earn passive income without any business development effort. 

You'll also need to factor in the costs of running a reliable mainnet infrastructure, which you can read more about [here](#how-much-does-it-cost-to-run-a-chainlink-node).

Once you've mastered the core elements of running a reliable Chainlink node infrastructure (ie, automation, high-availability, disaster recovery, security, monitoring, etc.), typically a great next step is become active in the Chainlink community! By helping others, participating in Chainlink events, and in general giving back to the community, you'll increase your reputation within the Chainlink community and team.

### How much does it cost to run a Chainlink node?

The infrastructure costs required to run a secure, reliable, production Chainlink infrastructure (ie, supporting mainnet data) can be daunting to many - and will typically be on the order of **$1000 USD / month** per mainnet chain. A typical mainnet Chainlink infrastructure includes triple-redundant Chainlink nodes, blockchain full nodes, database read/write replicates, multiple backups of all data, automatic disaster recovery mechanisms, and a reliable bespoke monitoring and alerting system. 

In order to recoup these costs, you'll need to leverage economies of scale; each infrastructure will need to serve multiple customers and jobs to offset your hosting fees.

### Should I run my own Chainlink node?

The answer depends on your specific situation:

* **If you require testnet data**: Generally YES, it can be advisable to run your own Chainlink node - especially if you're interested in learning the ropes from a node operator's perspective, and [Chainlink Functions](https://docs.chain.link/chainlink-functions) won't suit your requirements. On testnets, the stakes are low, and you can easily take advantage of trial-and-error without fear of monetary loss. That being said, many Chainlink node operators run nodes and jobs on a multitude of testnets, which you can take advantage of for free, without having to run your own node. The #operator-requests channel of the Chainlink Discord is the best way to be matched up with one of these node operators.     

* **If you require mainnet data**: Generally NO, mainnet data consumers should not be running their own Chainlink node - not only from a decentralization standpoint (controlling all parts of the data pipeline is typically frowned upon in the Web3 space), but from a cost perspective as well. See [here](#how-much-does-it-cost-to-run-a-chainlink-node) for information related to the costs of running a reliable mainnet Chainlink node infrastructure.

* **If you want to make money running a Chainlink node**: Please see our write-up on this topic [here](#is-running-a-chainlink-node-profitable).


### What are the requirements for running a Chainlink node?
Chainlink provides system requirements found in their [documentation](https://docs.chain.link/chainlink-nodes/resources/requirements/#software). While Chainlink provides these general guidelines for deploying Chainlink node infrastructure, please keep in mind that there are many factors involved. 

### Do I need LINK to run a node?
There is currently no minimum LINK requirement to run a node. You must, however, have the corresponding gas token for your target chain (ie, ETH), in order to fulfill job requests.

### As a new node operator, do I need to be whitelisted by Chainlink Labs, or am I able to support Chainlink price feeds?
Certain features (OCR, Functions, VRF, Proof of Reserves, Automation, etc.) are currently restricted to official node operators only. However, other features such as Direct Request type jobs can be hosted by any node operator, and if they find a willing customer, could in turn earn LINK using them.

### Where can I find more information about becoming an official Chainlink node operator?
At this time, there isn't any public Chainlink documentation or information on the process of becoming an official Chainlink node operator. From time to time, Chainlink hosts an 'Oracle Olympics', whereby one winner may be selected to become an official node operator, however there isn't currently any estimate on when the next Oracle Olympics will occur.

### What chains does Chainlink support?
The chains that Chainlink supports can be viewed in the Chainlink documentation under the [Link Token Contracts](https://docs.chain.link/resources/link-token-contracts) page. Please note that this list of chains is subject to change over time as Chainlink adds or removes support for a given chain.

### What is the best way to deploy a Chainlink node?
While you can technically [build a Chainlink node from source](https://github.com/smartcontractkit/chainlink), the best practice is to deploy Chainlink nodes on a Unix-based OS using Docker (see [Chainlink Docker Image](https://hub.docker.com/r/smartcontract/chainlink/tags)), and running it as a non-root user. There are many options available for hosting your deployment, such as various cloud services (AWS, GCP, Azure, etc.), or your at-home machine (not recommended for mainnets). The software and hardware requirements for running a Chainlink node can be found [here](https://docs.chain.link/chainlink-nodes/resources/requirements). You may also choose to use certain deployment technologies (Terraform, AWS CloudFormation, Ansible, etc.) to automate your deployment. 

See [this page](https://docs.chain.link/chainlink-nodes/resources/best-security-practices#infrastructure-as-code-iac) for a few publicly-available IAC (Infrastructure as Code) deployment options. Chainlink also provides [AWS QuickStart](https://docs.chain.link/chainlink-nodes/resources/best-practices-aws) templates for deploying a basic Chainlink infrastructure via AWS CloudFormation.

### Is there a public directory of all node / job listings?
While [market.link](https://market.link) was formerly the go-to location for public Chainlink node and job listings, the site has since been deprecated, and it is unclear if that feature will resurface in the future. You may, however, still leverage this website to gain insight into the many official node operator teams, and the respective chain(s) that they support. Besides this, we aren't currently aware of any centralized directory for Chainlink nodes / job offerings. 

That being said, many node operators (such as LinkWell Nodes) choose to host their own websites and documentation pages that display their Chainlink job offerings. You might do well to do a Google search for 'Chainlink node operator' to see what job offerings you might find!

### Can anyone start up an OCR network?
The OCR (Off-Chain Reporting) feature is currently unavailable to community node operators. There is currently no plan for releasing the OCR contracts to the general public. 

For the time being, community node operators can choose to provide their data via Flux Monitor or Direct Request jobs. 

### How do I configure my operator/oracle contract?
Once you have your Chainlink node up and running, the next step is to deploy your corresponding oracle / operator contract.

Please see [this guide](https://docs.chain.link/chainlink-nodes/v1/fulfilling-requests) for a tutorial on how to accomplish this.

### Where can I get Job IDs and Chainlink Oracles for my contract?
If you are a developer who simply requires data for your smart contract application, the best place to request a Job ID specific to your requirements is within the #operator-requests channel of the Chainlink Discord. An existing node operator will typically respond to your request by providing you with a corresponding Job ID and oracle contract address. Transactions on testnet chains are typically free of charge, meaning they do not require any LINK token.

If you are looking to run your own Chainlink node, we recommend familiarizing yourself with the [pros and cons](#should-i-run-my-own-chainlink-node) of becoming your own node operator. If you decide to go ahead, feel free to visit the section related to [creating a job](https://docs.chain.link/chainlink-nodes/v1/fulfilling-requests#add-a-job-to-the-node) within the Chainlink documentation.

### Can I run a Chainlink node on Windows?
If you must use Windows, Chainlink Labs strongly recommends using WSL (Windows Subsystem for Linux) for your deployment. That being said, we have seen many teams struggle through the various stages of deployment using WSL, and would recommend deploying your Chainlink infrastructure via a native Linux machine. This is especially true for production environments.

### How do Chainlink Functions affect community node operators?
Functions may eventually invalidate the current model that devs have used in the past to get data from community node operators, as the new method with Functions will be far superior. However, at this time Functions are only available on a small [subnet of networks](https://docs.chain.link/chainlink-functions/supported-networks).

### My job isn't completing and stuck at the final submit_tx task
Typically, when a Chainlink job is stuck at the final submit task, the issue is that you forgot to fund the Chainlink node address with the gas token for the chain you are running on. Please note that the Chainlink node address is different and separate from the oracle/operator contract that the node interacts with. The Chainlink node address can be found in the Chainlink GUI, or listed on the CLI via Chainlink's command-line interface. 

As an example, if you are deploying a Chainlink node on Polygon's Mumbai testnet, you would need to send the testnet MATIC token to your Chainlink node's wallet address. This is a requirement for completing jobs, as the Chainlink node requires the respective chain's native gas token for submitting response transactions on-chain.

### What is the best way to monitor my Chainlink node?
For Chainlink documentation on basic monitoring requirements, please see the section on [Security and Operation Best Practices](https://docs.chain.link/chainlink-nodes/resources/best-security-practices#active-monitoring).

Selecting your Chainlink monitoring solution is a matter of preference, as there are many available options. A popular free and open source option is the Prometheus, Loki, and Grafana stack. Other options include AWS CloudWatch and/or Splunk Enterprise.

### Do I need to deploy my own blockchain full nodes to run a Chainlink node?
While there is no technical requirement to connect your Chainlink node(s) to your own blockchain full nodes, this approach is strongly recommended for mainnet environments, in order to maximize the availability, reliability, and security of your blockchain data feed. 

That being said, many node operators have chosen to use an open-source reverse proxy in front of their blockchain full node stack, in order to route blockchain traffic to a 3rd-party endpoint (such as Infura, QuickNodes, or Alchemy) in the event of a deployment failure.

### How do I transfer funds out of the node?
In order to transfer funds out of your Chainlink node:
* 1) Log Into your Container docker exec -it <container_name> /bin/bash
* 2) Log Into the Admin Section of the CLI chainlink admin login
* 3) Create the transaction chainlink txs evm create <amount_to_send>

### What kind of maintenance does the node require?
From time to time, Chainlink Labs will release a new version of Chainlink, and you may be required to upgrade your node. As such, it's recommended to have a well-rehearsed no-downtime playbook in place for upgrading your Chainlink node runtimes. 

In addition, you'll need to ensure your Chainlink node's wallet address is always sufficiently funded with the respective chain's native gas token (ie, ETH) so that it may continue to fulfill requests on-chain.

### Can I deploy multiple chains on one Chainlink node?
The multi chain feature is currently in beta, and as such we don't recommended using it at this time.

### I can't access the Chainlink node GUI

If you can't access the GUI of your Chainlink node:

* Ensure your Chainlink node container is up and running ("docker inspect <container_name>"). If not, look for an exit code.
* Search for obvious ERROR- or CRIT-level logs in your Chainlink container via "docker logs -f <container_name>" (assuming you are running on Docker)
* If running on AWS, ensure the related security group can accept connections from your IP address on your Chainlink node's corresponding GUI port
* If running on AWS and fronting your Chainlink node with an ALB, ensure that the Chainlink node's security group can accept connections from the ALB on your Chainlink node's corresponding GUI port

### I'm trying to run the latest Chainlink 2.0.0 version in the new TOML format, but I keep getting error warnings on the TOML config and secrets files. How do I resolve this?
The new TOML format is a bit unforgiving. It needs to be in the exact format as shown in the [Config docs](https://docs.chain.link/chainlink-nodes/v1/node-config) and the [Secrets docs](https://docs.chain.link/chainlink-nodes/v1/secrets-config). Oftentimes when there are validation errors in the secrets file, it's due to having a database password that isn't sufficiently complex. To rule this out, you can consider adding the following under [Database] - AllowSimplePasswords = true.

Additionally, Chainlink provides TOML validation commands that you can run in order to help identify issues in your TOML files. Please see below for some sample commands for this. 

**Example 1**:

	docker run --platform linux/x86_64/v8 --name chainlink-config-validator -v ~/.chainlink:/chainlink -it --rm smartcontract/chainlink:2.0.0 -config /chainlink/config.toml -secrets /chainlink/secrets.toml node validate

**Example 2**:

	docker run --platform linux/x86_64/v8 --name chainlink-config-validator -v ~/.chainlink:/chainlink -it --rm smartcontract/chainlink:2.0.0 -config /chainlink/config.toml -secrets /chainlink/secrets.toml secrets validate
