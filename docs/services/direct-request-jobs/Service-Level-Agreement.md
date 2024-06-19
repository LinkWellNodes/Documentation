import TOCInline from '@theme/TOCInline';

# Service-Level Agreement (SLA)

LinkWell Nodes strives to be transparent about the level and quality of service we provide to our customers. Below you'll find information on the uptime, reliability, and security we practice within our Chainlink data feeds. 

---

**On this page**:

<TOCInline
  toc={toc.filter((node) => node.level >= 2)}
  minHeadingLevel={2}
  maxHeadingLevel={2}
/>

---

## Mainnet uptime

* We guarantee the uptime of all of our mainnet data feeds to be greater than or equal to **99.99%**, as averaged throughout the calendar year.

## Testnet uptime

* To reduce costs for our customers, our testnet data feeds may experience occasional interruptions as we roll out periodic updates and continuously improve our services. These updates should last fewer than **5 minutes**, and occur no more than once per day. If you are experiencing an unexpected issue in our testnet data feeds that exceeds this timeframe, please reach out to us via our [Discord server](https://discord.gg/Xs6SjqVPUA).

## Data security

* All data at rest is protected with **256-bit** encryption (or better).
* All data that leaves our internal network is **end-to-end encrypted**, including all in-transit data.
* All infrastructure access points are secured by **2-factor authentication** (or better).
* All infrastructure access and traffic is monitored and logged **24/7** for security.
* All physical access points to our datacenters are protected by security personnel and advanced intrusion detection technology. All physical access is permissioned, logged, and monitored. 

## Data accuracy

* LinkWell Nodes cannot guarantee - and is not responsible for - the accuracy of any 3rd-party data provider. As such, we strongly recommend leveraging multiple data sources within your data feed, and performing an aggregation on the result. We are happy to provide assistance with this sort of implementation.

## Questions?

Please don't hesitate to [reach out](https://linkwellnodes.io/#contact-us "Contact LinkWell Nodes") - we're always happy to have a confidential conversation about your requirements.