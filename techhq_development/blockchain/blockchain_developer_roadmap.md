# Ethereum Developer Roadmap

## From the beginning

geth is probably the first thing that everyone coming into the ethereum world tries. geth stands for go-ethereum and it's only an application to run an ethereum node, from the mainnet until your testnet.

In this roadmap it's not supposed that you will test geth, the idea is only to show how this works.

When you run the geth command there are few parameters which have to be filled. Also, before starting the network, it's necessary to have a genesis.json file. See here why this is important.

After starting the network with a valid genesis file, it's possible to run the network. From now, the geth node will be synchronizing data with other nodes, and if specified, it will also mine new blocks.

Now, the ethereum wallet (or mist, but in this case, let's consider ethereum wallet) also connects to the ethereum network, depending on if there is any instance of geth currently running or not. By default, if there is no geth running, ethereum wallet will connect to the main network, and if there is an instance running it will connect to geth. That means, if you have a geth node running a private testnet, then ethereum wallet will connect to your private testnet.

This is a good starting point. With this is possible to start trying smart contracts. But this is not how things work (unless you want to build a private ethereum network) by the time that I'm writing this, so let's move on to the next chapter. 

## Truffe suite

The truffle suite has brought a pattern when there was no pattern and made a lot of things much easier to do.

So now, when using truffle, there will be a folder for contacts, migrations, tests and the JSON file for contracts already compiled. If it already looks nice, wait for a second, it's not only this. You may be asking, "but what migrations". Well, there is a migration file for every contract. The migration file is only a simple javascript file that tells truffle what to do with that contract. 

Let's imagine the following contract

```javascript
pragma solidity ^0.4.18;

contract SimpleStorage {
  uint storedData;

  function set(uint x) public {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}
```

For this contract, you can have the following migration

```javascript
var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
};
```

If you contract has parameters `$ params` you only have to change one line on the migration file `$ change`. 

**IMPORTANT NOTE**: on this migration folder, there is a contract called *Migration*, it should not be deleted.

The ganache application is also very useful to keep track of transactions. There is a ganache-cli and a ganache app with an awesome UI. It is a great application because it does not need any configuration, just start the application and you have *10 accounts* with *$100* ether each (both values can be edited). Note that it's 10 accounts, not 10 nodes!

To finish this part, tests are always important, and truffle suite also brought this. On truffle website is possible to find some test example, so, test your contracts. It is way faster than restart your web app everytime you want to test a new feature and it's probably bugged!

## open-zeppelin

If you have built smart contracts, depending on the size of your application, you may have realized that building everything by yourself, it's not that easy, also, since it will be in the blockchain forever, do you fell save about deploy that contract? What if it has a bug?

Thinking on that, a team built open-zeppelin, a well complete and tested set of reusable contracts that implement some standards like ERC20 and ERC721, which makes the development a lot easier and faster.

Don't reinvent the wheel and use it. But before start building with it, read a little about it and read the code on the contracts, to know what's happening in every method your application call.

## zepplinOS

Think open-zeppelin was enough? The team that builds it didn't though the same. They realized that every time you build a contract you will be deploying all those contracts again. So imagine, a thousand people deployed a thousand contracts on the main network ... and it keeps growing. Yeap, the network size will go high very fast.

To fix this, they decided to build zepplinOS. All those contracts that were deployed with open-zeppelin, don't need to be deployed for every contract. Instead, they are deployed once and everyone can use it. In the case of the main network, these contracts are already deployed, which means, they are able to use.

But zepplinOS is more than that. Visit their website and check out. They also let you create your own set of contracts and deploy once, just like they did with open-zeppelin. And also, they made possible to migrate contracts, which means, you can change contracts. And no, you can't still change contracts, they just did a trick to make it work.

## web3.js

After all of it about contracts and solidity, it's time to build a web app. The easiest way is using nodejs for two reasons. First, nodejs is easy, second, they have the most mature package to integrate with solidity.

So, all you need is to build a normal frontend application, have your metamask installed and connected to one of your accounts in your private testnet (ganache for example). Considering this, now it's time to add web3.js to package.json and start interacting. Look for tutorials on the internet.

## Truffle box

The truffle team also realized that build app and connect them to ethereum can be easier than what it actually was, so they built a few truffle boxes to show how it can be done.

My favorite is the truffle-box react, but only because it uses react and it makes it very modular and easy to manipulate. Without react, we can also be modular but way less funny and easy (in my opinion). Different than the other truffle boxes, react does not have a tutorial associated with it.
