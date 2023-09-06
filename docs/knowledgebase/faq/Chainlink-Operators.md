import TOCInline from '@theme/TOCInline';

# Chainlink Node Operators FAQ

The following is a list of frequently-asked questions and answers collected from our experience supporting the `#nodes`, `#operator-requests`, and `#external-adapters` channels within the [Chainlink Official Discord server](https://discord.com/invite/chainlink).

The target audience for this FAQ is **Chainlink oracle operators**.

---

**On this page**:

<TOCInline
  toc={toc.filter((node) => node.level >= 2)}
  minHeadingLevel={1}
  maxHeadingLevel={4}
/>

---

## General Topics

### Can anyone run a Chainlink node?

Anyone can run a Chainlink node, as the code is open-source and easily deployable on almost any infrastructure. 

If you are looking to make money running a Chainlink node, we recommend reading our [write-up](#is-running-a-chainlink-node-profitable) on this topic.

If you are new to Chainlink, we suggest learning about the Chainlink ecosystem ([What is Chainlink?](https://blog.chain.link/what-is-chainlink/)), as well as practicing various methods for deploying Chainlink infrastructure ([Running a Chainlink Node](https://docs.chain.link/chainlink-nodes/v1/running-a-chainlink-node)). 

### Is running a Chainlink node profitable?

In order to earn LINK for serving data, you'll need to seek out customer(s) who are willing to pay for your services. In this way, running a Chainlink node is similar to running a traditional business, in that it requires a certain level of marketing, promotion, and lead generation efforts. This differs markedly from other blockchain node infrastructure - such as an Ethereum validator node - where you can earn passive income without any business development initiatives. 

You'll also need to factor in the costs of running a reliable mainnet infrastructure, which you can [learn more about here](#how-much-does-it-cost-to-run-a-chainlink-node).

Once you've mastered the core elements of running a reliable Chainlink node infrastructure (ie, automation, high-availability, disaster recovery, security, monitoring, etc.), typically the next step would be to become active in the Chainlink community. By helping others, participating in Chainlink events, and in general giving back to the community, you'll increase your reputation within the Chainlink ecosystem.

### How much does it cost to run a Chainlink node?

The infrastructure costs required to run a secure, reliable, mainnet Chainlink infrastructure can be daunting to many - and will typically be on the order of **$1,000 USD / month** per mainnet chain.

The expenses paid by a Chainlink node operator typically include: 

* **Infrastructure costs**: a typical mainnet Chainlink infrastructure includes triple-redundant Chainlink nodes, redundant blockchain full nodes, database read/write replicas, external adapters, multiple backups of all data, automatic disaster recovery mechanisms, and a reliable monitoring and alerting system. 

* **Blockchain transaction costs**: for every client request for data, node operators need to pay related gas to write the response on-chain. Gas costs vary significantly by chain, network congestion, and response size, and may range from anywhere between a few cents per transaction, to tens of hundreds of USD per transaction (rare).

* **Data subscription costs**: node operators often need to pay subscription fees to premium data feeds requested by their clients, which can be significant.

In order to recoup these costs, node operators need to leverage economies of scale - meaning that each infrastructure will need to serve multiple customers in order to break even.

In this way, as public node operators, LinkWell Nodes can afford to provide a more reliable oracle data infrastructure than any lone node operator can afford to maintain - resulting in a win-win for everyone! 

### Should I run my own Chainlink node?

The answer depends on your specific use case:

* **If you require testnet data**: Generally YES, it could be advisable to run your own Chainlink node - especially if you're interested in learning the ropes from a node operator's perspective, and [Chainlink Functions](/knowledgebase/Chainlink-Users-FAQ#should-i-use-chainlink-functions) won't suit your requirements. On testnets, the stakes are low, and you can easily take advantage of trial-and-error without fear of monetary loss. That being said, there are many existing Chainlink node operators who already run jobs on a multitude of testnets, all which you can use for free (ie, without having to spin up your own node infrastructure). The `#operator-requests` channel of the [Chainlink Official Discord server](https://discord.com/invite/chainlink) is the best way to get matched up with one of these node operators. Typically, you'll have a response within the hour.     

* **If you require mainnet data**: Generally NO, mainnet data consumers should not be running their own Chainlink node - not only from a decentralization standpoint (controlling all parts of the data pipeline is typically frowned upon in the trustless Web3 space), but from a cost perspective as well. See [here](#how-much-does-it-cost-to-run-a-chainlink-node) for information related to the costs of running a reliable mainnet Chainlink node infrastructure.

* **If you want to make money running a Chainlink node**: Please see our write-up on this topic [here](#is-running-a-chainlink-node-profitable).

### What are the system requirements for running a Chainlink node?

Chainlink provides official documentation on the hardware / software requirements of running a Chainlink node [here](https://docs.chain.link/chainlink-nodes/resources/requirements). 

### Do I need LINK to run a Chainlink node?

There is currently no minimum LINK requirement to run a node. You must, however, have the corresponding gas token for your target chain (ie, ETH), in order to fulfill job requests.

### Which Chainlink features are restricted to official Chainlink node operators?

Features such as OCR (Off-Chain Reporting), VRF (Verifiable Random Function), Functions, Proof of Reserves, and Automation (formerly 'Keepers') are currently restricted to official node operators only. 

However, community node operators may still leverage other job types such as Direct Request or Flux Monitor in order to serve client requests.

### Where can I find more information about becoming an official Chainlink node operator?

At this time, there isn't any public Chainlink documentation on the process of becoming an official node operator. 

However, in the past, Chainlink has hosted various 'Oracle Olympics', whereby typically one winner may be selected to become an official node operator. However there isn't currently any estimate on when (or whether) the next Oracle Olympics will occur.

### What chains does Chainlink support?

The chains that Chainlink supports can be viewed in the Chainlink documentation [here](https://docs.chain.link/chainlink-automation/supported-networks). Please note that this list of chains is subject to change over time as Chainlink adds or removes support for a given chain.

### What is the best way to deploy a Chainlink node?

While you can technically [build a Chainlink node from source](https://github.com/smartcontractkit/chainlink), the best practice is to deploy Chainlink nodes on a Unix-based OS using Docker (see [Chainlink Docker Image](https://hub.docker.com/r/smartcontract/chainlink/tags)), and running it as a non-root user. There are many options available for hosting your deployment, such as various cloud services (AWS, GCP, Azure, etc.), or your at-home machine (not recommended for mainnets). The software and hardware requirements for running a Chainlink node can be found [here](https://docs.chain.link/chainlink-nodes/resources/requirements). You may also choose to use certain deployment technologies (Terraform, AWS CloudFormation, Ansible, etc.) to automate your deployment. 

See [this page](https://docs.chain.link/chainlink-nodes/resources/best-security-practices#infrastructure-as-code-iac) for a few publicly-available IAC (Infrastructure as Code) deployment options. Chainlink also provides [AWS QuickStart](https://docs.chain.link/chainlink-nodes/resources/best-practices-aws) templates for deploying a basic Chainlink infrastructure via AWS CloudFormation.

### Can anyone start up an OCR (Off-Chain-Reporting) network?

The Off-Chain Reporting feature is currently unavailable to community node operators. There is currently no plan for releasing the OCR contracts to the general public. 

For the time being, community node operators can choose to provide their data via Flux Monitor or Direct Request jobs. 

### How do I configure my operator/oracle contract?

Once you have your Chainlink node up and running, the next step is to deploy your corresponding oracle / operator contract.

Please see [this guide](https://docs.chain.link/chainlink-nodes/v1/fulfilling-requests) for a tutorial on how to accomplish this.

### Can I run a Chainlink node on Windows?

If you must use Windows, Chainlink Labs strongly recommends using WSL (Windows Subsystem for Linux) for your deployment. That being said, we have seen many teams struggle through the various stages of deployment using WSL, and would recommend deploying your Chainlink infrastructure via a native Linux machine. This is especially true for production environments.

### How do Chainlink Functions affect community node operators?

Functions may eventually invalidate the current model that devs have used in the past to get data from community node operators, as the functionality that Functions provides will be far superior. However, at this time Functions are only available on a small [subnet of networks](https://docs.chain.link/chainlink-functions/supported-networks). 

Learn more about the benefits and limitations of Chainlink Functions [here](/knowledgebase/Chainlink-Users-FAQ#should-i-use-chainlink-functions). 

### How do I deploy multiple external adapters?

The process for deploying an external adapter is identical to deploying any other servlet; external adapters are just simple HTTP servers.

If you wish to deploy multiple adapters (servlets), there are many ways to do this - for a quick solution (ie, testnets or private use), you might consider batching the related build / launch commands for each adapter into a single shell script that runs on a single machine. For a more Production-grade deployment, you might consider using a well-known build / cluster orchestration tool - such as Kubernetes - to manage a fleet of instances, all of which might run your adapters / servlets behind a load balancer. 

### My job is stuck at the final 'submit_tx' task

Typically, when a Chainlink job is stuck at the final submit task, the issue is that you forgot to fund the Chainlink node address with the gas token for the chain you are running on. Please note that the Chainlink node address is different and separate from the oracle/operator contract that the node interacts with. The Chainlink node address can be found in the Chainlink GUI, or listed on the CLI via Chainlink's command-line interface. 

As an example, if you are deploying a Chainlink node on Polygon's Mumbai testnet, you would need to send the testnet MATIC token to your Chainlink node's wallet address. This is a requirement for completing jobs, as the Chainlink node requires the respective chain's native gas token for submitting response transactions on-chain.

### How do I run a Webhook job?

If you are receiving the error '`manual job runs only supported in dev mode - export CL_DEV=true to use`' or similar, you may be trying to access a feature that is currently unsupported in Chainlink production builds past 2.x.x.

As of Chainlink client version 2.x.x, the `CHAINLINK_DEV`, `FEATURE_EXTERNAL_INITIATORS`, and `FEATURE_WEBHOOK_V2` config flags have been deprecated, and Chainlink has migrated to the [TOML-based configuration format](https://docs.chain.link/chainlink-nodes/v1/node-config).

In order to access the features enabled by these flags (ie, running Webhook jobs manually via the Chainlink GUI interface), we'd recommend deploying the older [v1.4.1 Chainlink client](https://github.com/smartcontractkit/chainlink/releases/tag/v1.4.1). Alternatively, you may try building a development version of the more recent Chainlink code from scratch, which allows you to set various [insecure flags](https://docs.chain.link/chainlink-nodes/v1/node-config#insecure) within the Chainlink TOML config.

### Why is my oracle transaction failing due to an 'out of gas' error?

`Out of gas` exceptions may occur when a Chainlink node exceeds the allowable gas limit while attempting to write the appropriate data response to the consumer contract. There are several ways to mitigate this:

1. Try reducing the size of the data returned by the Chainlink node. For example, if you are attempting to return a very large JSON string (ie, over 200 chars), consider reducing the size of the JSON string, or only returning a subset of the JSON, using the [JSON Parse](https://docs.chain.link/chainlink-nodes/oracle-jobs/all-tasks#json-parse-task) job task.
1. If you have access to the oracle node's configuration settings, try increasing the `LimitDefault` value within [GasEstimator](https://docs.chain.link/chainlink-nodes/v1/node-config#limitdefault) config (this defaults to 500,000 gas, or '`500_000`'). **WARNING**: increasing your node's gas limit will allow your oracle to spend a large amount of gas per transaction, and is not recommended on mainnet chains! 

### What is the best way to monitor my Chainlink node?

For Chainlink documentation on basic monitoring requirements, please see the section on [Security and Operation Best Practices](https://docs.chain.link/chainlink-nodes/resources/best-security-practices#active-monitoring).

Selecting your Chainlink monitoring solution is a matter of preference, as there are many available options. A popular free and open source option is the Prometheus, Loki, and Grafana stack. Other options include AWS CloudWatch and/or Splunk Enterprise.

### Do I need to deploy my own blockchain full nodes in order to run a Chainlink node?

While there is no technical requirement to connect your Chainlink node(s) to your own blockchain full nodes, this approach is strongly recommended for mainnet environments, in order to maximize the availability, reliability, and security of your blockchain data feed. 

That being said, many node operators have chosen to use an open-source reverse proxy in front of their blockchain full node stack, in order to route blockchain traffic to a 3rd-party endpoint (such as Infura, QuickNodes, or Alchemy) in the event of a deployment failure.

### How do I transfer funds out of a Chainlink node?

In order to transfer funds out of your Chainlink node:
1. Log into your Docker container (assuming you are using Docker): `docker exec -it <CONTAINER_NAME> /bin/bash`
1. Log into the admin console within the Chainlink CLI: `chainlink admin login`
1. Create the transaction: `chainlink txs evm create <AMOUNT_TO_SEND>`

### What kind of maintenance does a Chainlink node require?

From time to time, Chainlink Labs will release a new version of Chainlink, and you may be required to upgrade your node. As such, it's recommended to have a well-rehearsed no-downtime playbook in place for upgrading your Chainlink node runtimes. 

In addition, you'll need to ensure your Chainlink node's wallet address is always sufficiently funded with the respective chain's native gas token (ie, ETH) so that it may continue to fulfill requests on-chain.

### Can I deploy multiple chains on one Chainlink node?

The multi-chain feature is currently in beta, and as such we don't recommended using it at this time.

### I can't access the Chainlink node GUI

If you can't access the GUI of your Chainlink node:

* Ensure your Chainlink node runtime is up and running ("docker inspect <container_name>" if running on Docker. if not, look for a Docker exit code, and search Google for the corresponding meaning).
* Search for any ERROR- or CRIT-level logs in your Chainlink container via the following command: `docker logs -f <CONTAINER_NAME>` (if running on Docker)
* If hosting your node on AWS, ensure the related security group can accept connections from your IP address on your Chainlink node's corresponding GUI port
* If hosting your node on AWS and fronting your Chainlink node with an ALB, ensure that the Chainlink node's security group can accept connections from the ALB on your Chainlink node's corresponding GUI port

### I'm trying to run the latest Chainlink 2.0.0 version in the new TOML format, but I keep getting error warnings on the TOML config and secrets files. How do I resolve this?

The new TOML format can admittedly be a bit unforgiving, and needs to be in the exact format shown in the [config file documentation](https://docs.chain.link/chainlink-nodes/v1/node-config) and the [secrets file documentation](https://docs.chain.link/chainlink-nodes/v1/secrets-config). 

Validation errors in the secrets file can often be due to:

* **Having a database password that isn't sufficiently complex**: To rule this out, consider adding the following under the [Database] section: `AllowSimplePasswords = true`.
* **Having a database password that uses reserved special chars**: To rule this out, consider using safer special characters such as `-_*` in your database password.

Additionally, Chainlink provides TOML validation commands that you can run in order to help identify issues in your TOML files. Please see below for some sample 'validate' commands. 

**Example 1**:

	docker run --platform linux/x86_64/v8 --name chainlink-config-validator -v ~/.chainlink:/chainlink -it --rm smartcontract/chainlink:2.0.0 -config /chainlink/config.toml -secrets /chainlink/secrets.toml node validate

**Example 2**:

	docker run --platform linux/x86_64/v8 --name chainlink-config-validator -v ~/.chainlink:/chainlink -it --rm smartcontract/chainlink:2.0.0 -config /chainlink/config.toml -secrets /chainlink/secrets.toml secrets validate

### I'm receiving a keystore authentication error while starting my node

When you run your Chainlink node using a password that's different from what the Chainlink database expects, you'll receive the following error:

```
error authenticating keystore: unable to decrypt encrypted key ring: could not decrypt key with given password
```

The most common scenario where this error occurs is while attempting to launch a Chainlink node against an existing Chainlink database which was previously initialized using a different Chainlink password and/or node. 

To get past this error, you'll need to either:

* Enter the correct password (ie, the password used by your original Chainlink node when connecting to your Chainlink database for the first time) into your TOML secrets config file, and restart your Chainlink node:
```
[Password]
Keystore = '<MY_PASSWORD_HERE>'
```

    You may find more information on configuring your TOML secrets config file in the Chainlink documentation [here](https://docs.chain.link/chainlink-nodes/v1/secrets-config#keystore).

* Wipe your database and restart your Chainlink node. You achieve this by either spinning up a fresh database instance, or by issue the following command using PSQL: `DROP DATABASE <CHAINLINK_DATABASE_NAME;` 

    **IMPORTANT DISCLAIMER**: by clearing your current database, you'll permanently lose access to the Chainlink node wallet (ie, keystore) contained in your current database, along with all associated funds therein. There is no way to recover these funds.

### I'm having file permission issues while starting my node

While starting your Chainlink node, you might receive one or more of the following error messages (or similar):

```
failed to read config file: /chainlink/config.toml: open /chainlink/config.toml: no such file or directory
failed to read config file: /chainlink/secrets.toml: open /chainlink/secrets.toml: no such file or directory
```

These types of errors are caused by your Chainlink container having insufficient access to the relevant files on your local filesystem.

To ensure proper permissions, please check the following:

1. Ensure the following line is added to your TOML config file (see official documentation [here](https://docs.chain.link/chainlink-nodes/v1/node-config#rootdir)):
```
RootDir = '~/.chainlink'
```

1. Ensure the correct filesystem permissions (700) are applied to your `config.toml` and `secrets.toml` files, including their parent directory, as prescribed [here](https://docs.chain.link/chainlink-nodes/v1/node-config#rootdir):
```
# <HOST_FILESYSTEM_DIR> should be the directory containing your config.toml and secrets.toml files
chmod -R 700 <HOST_FILESYSTEM_DIR>
```

1. If running your Chainlink container as a user other than `root` ([recommended](https://docs.chain.link/chainlink-nodes/resources/best-practices-aws#do-not-run-as-the-root-user)), you'll also need to ensure that the `config.toml` and `secrets.toml` files, as well as their parent directory, have the appropriate ownership permissions:
```
# <USER> should be the user running the Chainlink docker container, <GROUP> should be any group that <USER> belongs to, and <HOST_FILESYSTEM_DIR> should be the directory containing your config.toml and secrets.toml files
chown -R <USER>:<GROUP> <HOST_FILESYSTEM_DIR>
``` 

1. Ensure that the host directory containing your `config.toml` and `secrets.toml` files is mapped to your Chainlink docker container:
```
docker run -d \
    --restart unless-stopped \
    -p 6688:6688 \
    # Pay special attention to the below line. <HOST_FILESYSTEM_DIR> should be the host directory containing your config.toml and secrets.toml files (ie, /home/ec2-user/chainlink-home)
    -v <HOST_FILESYSTEM_DIR>:~/.chainlink \
    smartcontract/chainlink:2.0.0 \
    -config ~/.chainlink/config.toml \
    -secrets ~/.chainlink/secrets.toml \
    node start
```

If, after performing all of the above steps, you are still having the same issue, you might try running the above Docker command using `sudo` (`sudo docker run`...), to ascertain whether your issue is permission-related (NOTE that running your container using `sudo` is NOT a recommended approach for production purposes). 