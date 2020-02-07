# Solidity

This chapter is about solidity tricks and contracts built within the company and where were they used.

The [cryptozombies.io](cryptozombies.io) tutorial is pretty fun to learn solidity with, it will give you a better idea of actual use cases for blockchain.

[Remix](https://remix.ethereum.org) - The easiest solidity IDE to start with.
http://remix.ethereum.org

Learn to run a [Geth](https://geth.ethereum.org/) node locally

[Ganache](https://truffleframework.com/ganache) is a locally running Ethereum blockchain which is a much faster option for testing and debugging that connecting to a public blockchain.

[Visual Studio Code](101/development_environments.md) is a development IDE with good support for solidity.

[Tips on Ethereum build environments](https://medium.com/@davekaj/solidity-tips-and-tricks-for-beginners-building-their-first-dapp-on-ethereum-fed32d6a19ac)

[More tips on Ethereum build environments](https://medium.com/coinmonks/what-we-learned-building-our-first-dapp-28b01f9fc244)

Implement the **crowdsale** example from the Ethereum.org website in Remix
https://www.ethereum.org/crowdsale

Work through the [ethernaut](https://ethernaut.openzeppelin.com/) tutorials to improve the security of your contracts.

Implement an ERC20 token and deploy it to a testnet (ropsten)

Check OpenZeppelin for libraries (and maybe tutorials) [here](https://blog.openzeppelin.com/guides/)

**Truffle** tutorials
  
  * [Tips on Ethereum build environments](https://medium.com/@davekaj/solidity-tips-and-tricks-for-beginners-building-their-first-dapp-on-ethereum-fed32d6a19ac)
  * [More tips on Ethereum build environments](https://medium.com/coinmonks/what-we-learned-building-our-first-dapp-28b01f9fc244)
  * https://www.udemy.com/blockchain-developer/learn/v4/content
  * [Assert, Require, Revert](https://medium.com/@kscarbrough1/writing-solidity-unit-tests-for-testing-assert-require-and-revert-conditions-using-truffle-2e182d91a40f)

Like it or not, every time that it is possible to avoid writing in Solidity, people have done so. JavaScript can be used for front-ends and contract testing. Likewise, any computation that can be moved from the blockchain to the front-end should be moved, to minimize costs.

## EIP
  * [erc725alliance](https://erc725alliance.org/) - ERC-725, Ethereum Identity Standard
  * [thesecuritytokenstandard](https://thesecuritytokenstandard.org/) - Standard for STO, EIP 1400, 1410, 1411


## Security and Specific actions

**VERY IMPORTANT about security** https://etherscan.io/solcbuginfo

**(Security) Transfer Ether to a contract**
  * https://ethereum.stackexchange.com/questions/28759/transfer-to-contract-fails
  * https://solidity.readthedocs.io/en/develop/units-and-global-variables.html?highlight=transfer#address-related
  * https://vomtom.at/solidity-send-vs-transfer/
  * https://medium.com/coinmonks/smart-contracts-how-to-transfer-ether-ba464ec005c6

**Articles about security**
  * https://blog.sigmaprime.io/solidity-security.html
  * https://solidity.readthedocs.io/en/latest/security-considerations.html
  * https://medium.com/loom-network/how-to-secure-your-smart-contracts-6-solidity-vulnerabilities-and-how-to-avoid-them-part-1-c33048d4d17d
  * https://consensys.github.io/smart-contract-best-practices/
  * https://consensys.github.io/smart-contract-best-practices/known_attacks/
  * https://vessenes.com/more-ethereum-attacks-race-to-empty-is-the-real-deal/
  * https://consensys.github.io/smart-contract-best-practices/security_notifications/
  * https://haseebq.com/the-authoritative-guide-to-blockchain-development/
  * https://ethereum.stackexchange.com/questions/28972/who-is-msg-sender-when-calling-a-contract-from-a-contract

## Useful tools for Solidity development
  * [ethereum-developer-tools-list](https://github.com/ConsenSys/ethereum-developer-tools-list)


## Web3J
When using web3j you need to compile the contracts using solc and we3j CLI. But junior solidity developers stumble upon a common issue.

I wrote [A Gentleman’s Introduction to Web3j from Java](https://www.techhq.io/8172/blockchain-development-a-gentlemans-introduction-to-web3j-from-java/) but that article misses one thing.

Let's consider the contract below

```solidity
pragma solidity ^0.5.10;

contract SimpleStorage {
    uint256 storedData;

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}
```
If you compile it using `solc <smart-contract>.sol –bin –abi –optimize -o <output-dir>/` it should be good. But if you use an external dependency like openzeppelin, you will get an error saying something like "File outside of allowed directories issue".

The solution is really simple, you only need to allow any folder on the solc command, so `solc <smart-contract>.sol --allow-paths *, –bin –abi –optimize -o <output-dir>/` will solve the problem.