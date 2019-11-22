===== Ethereum =====

==== Enterprise Ethereum ====

https://entethalliance.org/

[[Private Ethereum Network]] - Before messing around with exotic Ethereum options such as [[Parity]] or [[Quorum]] it is a good idea to learn to deploy a vanilla Ethereum private network.

[[AWS Ethereum]] - Amazon has released CloudFormation templates to build an unmodified Ethereum network. Good for learning purposes, but the current Proof-of-Work consensus algorithm makes it inefficient for private or consortium settings. These cloudformation templates could be reused but I think that simpler (no autoscaling or launch configurations) and more complete (vpc, subnets, security groups) ones would be a better idea.

[[Parity]] - Counts with officially maintained docker images. Aura as a consensus algorithm doesn't provide instant finality. Doesn't have a built-in privacy layer.

[[Quorum]] - Docker images have to be built by the user from the scripts provided. Terraform scripts are provided to deploy a full network to AWS. So far the feeling is that the technology used is too complex for the level of support provided. Uses RAFT as a consensus algorithm which is good for consortium purposes, and constellation as a privacy layer.

==== Scalability Solutions ====

https://media.consensys.net/the-state-of-scaling-ethereum-b4d095dbafae

[[Ethereum Plasma]]

[[Ethereum Sharding]]

[[Ethereum Raiden]]

[[Ethereum Casper]]