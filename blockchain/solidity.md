# Solidity

This chapter is about solidity tricks and contracts built within the company and where were they used.


## Web3J
When using web3j you need to compile the contracts uaing solc and we3j CLI. But there's a common problem between newsolidity developers.

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