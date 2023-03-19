# Backup / Restore the Chainlink Node Wallet / Keys

The Chainlink node contains several keys (`ETH`, `OCR`, `P2P`) that may be important to recover in the event that you wish to utilize the same keys for a different node stack. The following guide covers how to back up and restore these keys, without needing to export / import the entire database (along with all configurations and job definitions that might come with it).

NOTE: if you'd like to back up / restore all jobs, configurations, run history, and keys, please instead see [Backup / Restore Chainlink Database](/guides/Backup-Restore-Chainlink-Database.md). 

# Backup instructions

Using your favorite SSH tool, export your Chainlink node's private keystores.

### Step 1: Recreate the Chainlink .password file (containing the node's wallet password)

1. SSH into the machine running your Chainlink node
1. Run the following command:

```
# Run the Chainlink bootstrap script with the following arguments (these should match the parameters entered in your CloudFormation template for this stack). 
# NOTE that the final argument '1' signifies that we simply want to re-create all Chainlink configuration files (.password, .env, .api), without performing all other bootstrap steps (ie, re-deploying the Docker container, pgAdmin4, etc.)
/lw/chainlink/deploy/cl-bootstrap.ksh ${BlockchainNetworkAbbrev} ${S3DeployBucketName} ${AWS::Region} 1

# Example: 
# /lw/chainlink/deploy/cl-bootstrap.ksh EKT my-deploy-bucket us-west-2 1
```

### Step 2: Sign into the Chainlink node's administrative CLI (command-line interface)

Run the following commands to gain access to the node's admin CLI:

```
# Start a bash shell within the Chainlink container
docker exec -it chainlink /bin/bash

# Log into the admin user
chainlink admin login

# Enter admin user (CLGUIEmail param within this stack's CloudFormation template)
hello@linkwellnodes.io

# Enter admin password (PGAdminPassword param within this stack's CloudFormation template) 
```

### Step 3: List existing public keys

List all existing public key names, so that we can export them in the next step:

1. Run the following commands:

```
# List the ETH public key
chainlink keys eth list

# List the OCR public key
chainlink keys ocr list

# List the P2P public key
chainlink keys p2p list
```

### Step 4: Export the key files

Export each private key to a JSON keystore file located in the Chainlink docker container's home directory (`/lw/chainlink/home`)

```
# Export ETH private keys
chainlink keys eth export -p /chainlink/.password -o /chainlink/eth-keystore.json <ETH PUBLIC KEY>

# Export OCR private keys
chainlink keys ocr export -p /chainlink/.password -o /chainlink/ocr-keystore.json <OCR PUBLIC KEY>

# Export P2P private keys
chainlink keys p2p export -p /chainlink/.password -o /chainlink/p2p-keystore.json <P2P PUBLIC KEY>
```

### Step 5: Copy the keys to another computer

As a final step, use your favorite SSH tool to copy the private key JSON files to a separate secure storage location (preferably on a different computer). As an easy first step, you can use software like 7zip to create a password-protected archive for these files.

### Step 6: !!! IMPORTANT !!! Remove all sensitive files

For security reasons, remember to delete the private key and config files that you've created on the local EC2 instance:

```
# Remove all keystore files
rm -f /lw/chainlink/home/*keystore.json

# Remove sensitive config files
rm -f /lw/chainlink/home/.env
rm -f /lw/chainlink/home/.password
rm -f /lw/chainlink/home/.api
```

# Restore instructions

Using your favorite SSH tool, import your existing private keystores into your Chainlink node.

### Step 1: Copy your existing keystore files to the Chainlink EC2 machine

1. Using an SSH tool, copy your existing keystore files (`eth-keystore.json`, `ocr-keystore.json`, and `p2p-keystore.json`) to the target Chainlink EC2 machine at `/lw/chainlink/home/`. 
1. Set the copied files' permissions appropriately:

```
# Elevate the keystore privileges appropriately, so that they may be accessed by the running Chainlink docker instance
chmod 744 /lw/chainlink/home/*keystore.json
```

### Step 2: Recreate the Chainlink .password file (containing the node's wallet password)

1. SSH into the machine running your Chainlink node
1. Run the following command:

```
# Run the Chainlink bootstrap script with the following arguments (these should match the parameters entered in your CloudFormation template for this stack). 
# NOTE that the final argument '1' signifies that we simply want to re-create all Chainlink configuration files (.password, .env, .api), without performing all other bootstrap steps (ie, re-deploying the Docker container, pgAdmin4, etc.)
/lw/chainlink/deploy/cl-bootstrap.ksh ${BlockchainNetworkAbbrev} ${S3DeployBucketName} ${AWS::Region} 1

# Example: 
# /lw/chainlink/deploy/cl-bootstrap.ksh EKT my-deploy-bucket us-west-2 1
```

### Step 3: Sign into the Chainlink node's administrative CLI (command-line interface)

Run the following commands to gain access to the node's admin CLI:

```
# Start a bash shell within the Chainlink container
docker exec -it chainlink /bin/bash

# Log into the admin user
chainlink admin login

# Enter admin user (CLGUIEmail param within this stack's CloudFormation template)
hello@linkwellnodes.io

# Enter admin password (PGAdminPassword param within this stack's CloudFormation template) 
```

### Step 4: List existing public keys

List all existing public key names, so that we can export them in the next step:

1. Run the following commands:

```
# List the ETH public key
chainlink keys eth list

# List the OCR public key
chainlink keys ocr list

# List the P2P public key
chainlink keys p2p list
```

### Step 5: Delete the existing Chainlink keys

Run the following commands:

```
# Delete the ETH key
chainlink keys eth delete <ETH Address> --hard
# Type 'yes' on the next step to confirm the deletion

# Delete the OCR key
chainlink keys ocr delete <OCR ID> --hard
# Type 'yes' on the next step to confirm the deletion

# Delete the P2P key
chainlink keys p2p delete <P2P ID> --hard
# Type 'yes' on the next step to confirm the deletion
```

### Step 6: Import the backed keystore files

Import each private key from the JSON keystore files you've placed within the Chainlink docker container's home directory.

```
# Import ETH private keys
chainlink keys eth import -p /chainlink/.password /chainlink/eth-keystore.json

# Export OCR private keys
chainlink keys ocr import -p /chainlink/.password /chainlink/ocr-keystore.json

# Export P2P private keys
chainlink keys p2p import -p /chainlink/.password /chainlink/p2p-keystore.json
```

### Step 7: !!! IMPORTANT !!! Remove all sensitive files

For security reasons, remember to delete the private key and config files that you've created on the local EC2 instance:

```
# Remove all keystore files
rm -f /lw/chainlink/home/*keystore.json

# Remove sensitive config files
rm -f /lw/chainlink/home/.env
rm -f /lw/chainlink/home/.password
rm -f /lw/chainlink/home/.api
```