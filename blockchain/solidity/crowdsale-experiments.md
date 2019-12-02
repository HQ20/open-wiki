# Crowdsale Experiments

![](../assets/crowdsale.jpeg)

from [How to participate in the NEXT.Exchange Token Crowdsale — a beginner's guide](https://medium.com/nextexchange/how-to-participate-in-the-next-exchange-token-crowdsale-a-beginners-guide-7fd95e938b90).

We've done it for a while. Crowdsale are basically used to ICO's. In case you don't know what an ICO is, here \([Explain me like I’m five: What is ICO](https://medium.com/meetngreetme-ico/explain-me-like-im-five-what-is-ico-19f967669cad)\) is an explanation and here \([Launching an ICO in 2019](https://www.techhq.io/6855/launching-an-ico-in-2019/)\) is a overview o what's been happening.

Below are some examples we've been collecting over time. They were mostly done during some other hackathon project, or experiments. There is a second section when it's possible to find escrow contracts which are sometimes tied to with crowdsales.

## Escrow Contracts

### StepEscrow.sol

This contract is like an _escrow_ contract but divided into steps. For each step, a percentage is taken.

**Note**: This contract is created using the library _openzeppelin-solidity_ without changes.

See the contract [here](solidity/escrow_contracts/step_escrow.md)

# EscrowThreeWay.sol

This contract is like an _escrow_ contract between two parts, but the difference is that the money is taken for both side and the total amount is sent just to one side.

**Note**: This contract is created using the library _openzeppelin-solidity_ with only one change in _ERC20.sol_ which allows using _transferFrom_ without any limit.

See the contract [here](solidity/escrow_contracts/escrowthreeway.md)
