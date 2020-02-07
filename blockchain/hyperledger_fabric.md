# Hyperledger Fabric Development
## Useful URL
  * https://hyperledger-fabric.readthedocs.io
  * [Hyperledger Composer Modeling Language](https://hyperledger.github.io/composer/v0.16/reference/cto_language)

## Useful tools for development
  * [hyperledger composer](https://hyperledger.github.io/composer/latest/)
  * [hyperledger explorer](https://www.hyperledger.org/projects/explorer)
  * [hyperledger cello](https://www.hyperledger.org/projects/cello)

## Documentation to build a frontend
  * [Transaction Processor Functions](https://hyperledger.github.io/composer/v0.19/reference/js_scripts)
  * [Querying and filtering business network data](https://hyperledger.github.io/composer/latest/business-network/query.html#using-filters)
  * [Where filter](https://loopback.io/doc/en/lb2/Where-filter.html)


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


## Hyperledger Fabric Environment
How we deploy Hyperledger fabric applications.
A simple pseudo-tutorial.

### The technologies

  * **Docker** well, it's docker.
  * **All those dependencies** from [install development environment](https:*hyperledger.github.io/composer/latest/installing/development-tools.html)

### Recommended extensions for VSCode
  * **Hyperledger Composer** to lint the code

### The environment

Nothing specific. Should follow our structure standard and use the *deploy.sh* script referenced above (in "Deploy the app") to deploy faster.