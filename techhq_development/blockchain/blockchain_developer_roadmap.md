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

# Quorum Developer Roadmap
*to be written*


# Hyperledger Fabric Developer Roadmap
In first place, please install [development tools](https://hyperledger.github.io/composer/latest/installing/development-tools.html) (no need to do Step 4 for now), using the right nodejs version + have docker, please + use VSCode (recommended) or Atom to use the right extension from hyperledger foundation.
## From the very beginning
If you don't know what hyperledger is, please have a look on the internet before reading this. We will not write again what is already written all over the internet.
So, going on and assuming you have an idea of what it is. Before going into run a node on run an entire network, let's first see how to write apps and the project structure. To make things even easier, let's first start with Hyperledger Composer. The composer can be used in two ways, either using the [online composer](https://composer-playground.mybluemix.net/) or running the composer using your [local docker](https://hub.docker.com/r/hyperledger/composer-playground/) instance (hint: go for the second option).

## Your first transaction
Now, assuming you have some composer running in front of you, it's time to understand the code. You have [three types of files](https://hyperledger.github.io/composer/latest/introduction/introduction), each one with different functions.
Now, it's time to follow a [tutorial](https://hyperledger.github.io/composer/latest/tutorials/playground-tutorial) on the hyperledger page. After running you will know the objective of each file. Maybe the modeling language is confusing you, so have a [look](https://hyperledger.github.io/composer/v0.16/reference/cto_language).


After that, try to do the needed changes to make possible change the name of a *Commodity*.

Before keep reading, think for a while about what you need.
If you do not have an answer, here it is, you only need to add a new transaction. For that, it's necessary some code on model.cto file plus some code on logic.js

If you don't know how to do, the answer is on our main experimental repository, then go for *hyperledger* folder and then *fabric* and *fabric-trader*.


## Run a peer (node)
Now that you have run and edited some code, let's run a peer, where the code will be deployed when working from an IDE.
Getting back to the installation of [development tools](https://hyperledger.github.io/composer/latest/installing/development-tools.html) page, it's time to run the *Step 4* and also *Starting and stopping Hyperledger Fabric* (Remember that you need docker to run it). Once you have done it, you should have a few containers running.


## Deploy the app
The peer is running but you don't see anything, because It's still necessary to deploy code. To do so, go to [developer tutorial using cli](https://hyperledger.github.io/composer/latest/tutorials/developer-tutorial.html) page and follow the tutorial. In the end, you will have a web app running.

Now summarizing this last step, it's necessary to generate a *.bna* file each time we want to deploy our code to the network. And it's not possible to deploy versions already deployed. So thinking of it, there is a script at our main experimental repository (then go for *hyperledger* folder and then *fabric* and *document-manager* and *scripts* and **deploy.sh**) to simplify. The *composer-rest-server* will always generate a rest api based on some configuration and the bna file.

# Pantheon Developer Roadmap
This is a small résumé from a webinar given by consensys. Bellow are cited some parts of the quickstart document they provided to participants.

## Requirements

### Hardware Requirements
  * Pantheon is supported on Mac OS, Linux, and Windows.
  * Your computer should have at least 4 GB RAM.
  * The tutorial runs a small test network that requires minimal disk space (less than 2GB).

### Software Requirements
  * Git or GitHub Desktop
  * Docker and Docker Compose
  * Postman IDE
  * The MetaMask plug-in installed on a supported web browser

### Get docker images
```bash
$ docker pull pegasyseng/pantheon
$ docker pull nginx:alpine
```

## Get the GitHub quickstart repository
In order to make the first approach easier, they provided a quickstart repository, which have a few useful scripts.
`git clone https://github.com/PegaSysEng/pantheon-quickstart.git`

## Test the network
Inside the *pantheon-quickstart* folder (cd pantheon-quickstart) run the command **./run.sh -p 32777**. The option -p is to set a port to the explorer. If this port is not set by parameter, it will be randomly assigned. The moment you start it, you should see the something similar in your command line
```bash
Creating network "pantheonquickstart_default" with the default driver
Creating pantheonquickstart_bootnode_1 ... done
Creating pantheonquickstart_minernode_1 ... done
Creating pantheonquickstart_rpcnode_1   ... done
Creating pantheonquickstart_node_1      ... done
Creating pantheonquickstart_node_2      ... done
Creating pantheonquickstart_node_3      ... done
Creating pantheonquickstart_node_4      ... done
Creating pantheonquickstart_explorer_1  ... done
             Name                           Command               State               Ports            
-------------------------------------------------------------------------------------------------------
pantheonquickstart_bootnode_1    /opt/pantheon/bootnode_sta ...   Up      30303/tcp, 8545/tcp, 8546/tcp
pantheonquickstart_explorer_1    nginx -g daemon off;             Up      0.0.0.0:32777->80/tcp        
pantheonquickstart_minernode_1   /opt/pantheon/node_start.s ...   Up      30303/tcp, 8545/tcp, 8546/tcp
pantheonquickstart_node_1        /opt/pantheon/node_start.s ...   Up      30303/tcp, 8545/tcp, 8546/tcp
pantheonquickstart_node_2        /opt/pantheon/node_start.s ...   Up      30303/tcp, 8545/tcp, 8546/tcp
pantheonquickstart_node_3        /opt/pantheon/node_start.s ...   Up      30303/tcp, 8545/tcp, 8546/tcp
pantheonquickstart_node_4        /opt/pantheon/node_start.s ...   Up      30303/tcp, 8545/tcp, 8546/tcp
pantheonquickstart_rpcnode_1     /opt/pantheon/node_start.s ...   Up      30303/tcp, 8545/tcp, 8546/tcp
****************************************************************
JSON-RPC HTTP service endpoint      : http:*localhost:32777/jsonrpc   *
JSON-RPC WebSocket service endpoint : ws:*localhost:32777/jsonws   *
Web block explorer address          : http:*localhost:32777   *                                                                             
****************************************************************
```

Here you can see that there are a few containers running now. The *miner* is the one mining (and he is mining fast, on purpose), there are four nodes, a bootnode, and *rpc* to connect metamask, for example, and the *explorer*, which is the one we will use first to see some information. Connect to [http://localhost:32777](http://localhost:32777) and you should see something like the image below.

![](../assets/snapshot39.png)

As you can see, you can search by block number, transaction hash or address. Or you can also click on the *best block* number and see some information about the most recent block.

## Interact
As in ethereum, you can use metamask to interact with the network. Let's use the RPC node to connect to the network using metamask. Use the information given above about the URL
```bash
JSON-RPC HTTP service endpoint      : http:*localhost:32777/jsonrpc   *
JSON-RPC WebSocket service endpoint : ws:*localhost:32777/jsonws   *
Web block explorer address          : http:*localhost:32777   *  
```
In this case, we will add a new network with the URL [http://localhost:32777/jsonrpc](http://localhost:32777/jsonrpc). If you don't know how to add networks to metamask, read [how to do it here](manage_metamask#connect_to_network).

Now, let's import an account. Let's use the private key provided during the webinar `0x8F2A55949038A9610F50FB23B5883AF3B4ECB3C3BB792CBCEFBD1542C692BE63`. If you don't know how to import accounts to metamask, see [here](manage_metamask#import_account)

## Deploy an app
Now, if you create a new account and send ether from the imported account to the new one you will generate a transaction, which can be seen by using *localhost:32777/tx/<hash of transaction>*. During the webinar they didn't show any usage of truffle but it's possible to do it.

A quick example would be to use truffle and generate a small repository and then migrate. For example, using `truffle init` and changing the file *truffle-config.js* to something like
```javascript
const HDWallet = require('truffle-hdwallet-provider');
const mnemonic = "0x8F2A55949038A9610F50FB23B5883AF3B4ECB3C3BB792CBCEFBD1542C692BE63";

module.exports = {
  networks: {
    local: {
      provider: () => new HDWallet(mnemonic, `http:*localhost:32777/jsonrpc`),
      network_id: "*",
      gas: 5500000,
      skipDryRun: true
    }
  }
}
```
and then run `truffle migrate`. Do not forget to install the dependency `yarn add truffle-hdwallet-provider`.