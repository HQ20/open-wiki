# Blockchain Platforms

## Overview

(Ripped off from the Corda website)

The first wave of blockchain, which started with Bitcoin, brought technology that allowed parties to transact directly for the first time. This was achieved with three key technologies: a globally shared ledger, a mechanism for reaching consensus on the state of the ledger and immutability of the ledger and transactions. The limited ability to represent complex agreements and assets, however, led to the second wave of blockchain platforms such as Ethereum. These platforms focused on the complex business logic and brought about ‘smart contract' technology. This technology allowed complex business logic to be represented as well as any asset type or agreement.

The second wave of blockchain still left a number of critical requirements unfilled. These flaws prevent the second wave technologies from serious applications in business transactions. The third wave of blockchain technology claims to resolve the remaining issues with the blockchain systems for enterprise environments:

  * Privacy
  * Transaction finality
  * Legally identified parties
  * Ability to scale
  * Developer productivity and enterprise integration

### Privacy 
Ethereum and other second wave blockchain platforms were designed to run with a single shared ledger among all network participants. This allows any participant to view all transactions, including those of competitors. This is a structural flaw, as the system requires the ability to have a single, shared ledger to operate. This single requirement is sufficient to prevent the broad adoption of blockchain technology as it is unacceptable for competitive, and often for regulatory, reasons.

### Finality
Finality is critical to business transactions. At the time of completion of a transaction, all parties must have an assurance that the transaction is final without ambiguity and cannot be reversed. The mining mechanisms of legacy blockchains lack finality. As a miner propagates a block containing transactions there is a chance another conflicting block has also been created and so you must wait some time to see which block the majority of other miners have chosen to build on. But there is never a point where you have 100% certainty that another chain will emerge as the winner and transactions you thought were confirmed become unconfirmed and potentially replaced with others that conflict – double-spends.

### Identifiable Participants 
In business transactions, organizations must have assurance over the identity of counterparties in transactions. These entities may operate in regulated environments. The legacy platforms have no ability to provide assurance over the identity of participants of the network. Additionally, all parties to agreements or transactions must not have the ability to later claim they did not enter the agreement (non-repudiation).

### Scale
To replace existing systems any platform must eventually scale to billions of daily transactions. As an example, there are 2.5 billion transactions daily in global payments. If any blockchain platform is to replace existing business processes it must eventually scale to this level. It must do so in a system that lacks a central coordinator who can operate the system to ensure it remains performant, resilient and available.

### Productivity and Integration 
Enterprise organizations have a need to use proven technologies that are supported in their organizations. Technologies such as relational databases, message queues and the Java Virtual Machine (JVM) are components that have been proven in large scale deployments. Integration to the internal systems of the organizations is critical to supporting complex business processes. Corda selected these proven technologies to drive integration, enterprise certification and developer productivity.

## Assessment of blockchain platforms

https://medium.com/blackinsurance/enterprise-blockchain-platforms-a-comparison-d58f1227ce70 \\
https://blockchain-fabric.blogspot.com/2018/03/qualitative-comparison-of-hyperledger.html \\
https://www.horsesforsources.com/top-5-blockchain-platforms_031618

[[Ethereum]] - Also Quorum and Parity

[[EOS.IO]]

[[Hyperledger]]

[[Corda]]

[[NEO]]

[[Ripple]]

[[https://lisk.io/|Lisk]]

[[Cardano]]

[[https://docs.google.com/document/d/1p4ZW1a85vAlAOgTPKKyHd0jn4W2ihnzZbSl5Yrnbroo/edit#|Stellar]]

[[Tron]]

[[Cosmos]]

[[Polkadot]]

[[Rootstock]]

[[RChain]]