# Stellar

> Stellar is a platform that connects banks, payments systems, and people. Integrate to move money quickly, reliably, and at almost no cost.

Stellar allows to create non-turing complete contracts. This mean that, there don't allow the developer to do everything, but they are still very versatile.

Accounts are managed using a public keys and a private key. An account to be valid needs to have at least 1 XLM \(lumen\).

Stellar have a public mainnet and a public testnet which is reset from time to time. It also as a transactions explorer, named Stellar Laboratory \([https://www.stellar.org/laboratory/](https://www.stellar.org/laboratory/)\) which allows any user to view transactions, balances, and more.

There is no programming language for contract or user permisions like in Ethereum or Hyperledger respectively. In stellar, the contracts are done using SDK's for some already existing programming languages, like Javascript, Go, Python, Ruby and more.

## Network

![](assets/stellar-network.png)

As shown in the image above \(and explained [here](https://www.stellar.org/developers/guides/get-started/index.html) more in-depth\) stellar uses 2 layers. The stellar core, which is a group of machines that create the network, and then, the Horizon server to do the connection between the stellar core and the wallets/apps.

Some more interesting links

* [https://www.stellar.org/developers/guides/get-started/](https://www.stellar.org/developers/guides/get-started/)
* [https://github.com/stellar/docker-stellar-core-horizon/issues/74](https://github.com/stellar/docker-stellar-core-horizon/issues/74)
* [https://www.stellar.org/developers/js-stellar-sdk/reference/examples.html](https://www.stellar.org/developers/js-stellar-sdk/reference/examples.html)
* [https://www.stellar.org/developers/guides/get-started/create-account.html](https://www.stellar.org/developers/guides/get-started/create-account.html)
* [https://stellar.github.io/js-stellar-sdk/TransactionBuilder.html](https://stellar.github.io/js-stellar-sdk/TransactionBuilder.html)
* [https://stellar.github.io/js-stellar-sdk/Operation.html\#.createAccount](https://stellar.github.io/js-stellar-sdk/Operation.html#.createAccount)
* [https://www.stellar.org/developers/guides/walkthroughs/custom-assets.html](https://www.stellar.org/developers/guides/walkthroughs/custom-assets.html)

## Example

The example below as two methods, one to issue a new asset and another one to fund any given account

```js
#!/usr/bin/env node
const meow = require('meow');
const fs = require('fs');
const StellarSDK = require('stellar-sdk');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });

// network config
StellarSDK.Network.useTestNetwork();
const server = new StellarSDK.Server('https://horizon-testnet.stellar.org');


const main = (masterScret) => {
  return new Promise(async (resolve, reject) => {
    let account;
    let transaction;

    const fee = await server.fetchBaseFee();
    const totalAmountOfTokens = 99999999999;
    const assetNameToken = 'MYASSET';
    const masterAccount = StellarSDK.Keypair.fromSecret(masterScret);

    try {
      const issuerAccount = StellarSDK.Keypair.random();
      const distributorAccount = StellarSDK.Keypair.random();
      const assetToGenerate = new StellarSDK.Asset(assetNameToken, issuerAccount.publicKey());

      console.log('setup issuer account ...');

      account = await server.loadAccount(masterAccount.publicKey())
      transaction = new StellarSDK.TransactionBuilder(account, opts = { fee })
        .addOperation(StellarSDK.Operation.createAccount({
          destination: issuerAccount.publicKey(),
          startingBalance: '350',
        }))
        .setTimeout(1000)
        .build();

      transaction.sign(masterAccount);
      await server.submitTransaction(transaction);

      console.log('Issuer account with PVK { ' + issuerAccount.secret() + ' } and PBK { ' + issuerAccount.publicKey() + ' }');

      console.log('setup distributor account ...');

      account = await server.loadAccount(masterAccount.publicKey())
      transaction = new StellarSDK.TransactionBuilder(account, opts = { fee })
        .addOperation(StellarSDK.Operation.createAccount({
          destination: distributorAccount.publicKey(),
          startingBalance: '350',
        }))
        .setTimeout(1000)
        .build();

      transaction.sign(masterAccount);
      await server.submitTransaction(transaction);

      console.log('Distributor account with PVK { ' + distributorAccount.secret() + ' } and PBK { ' + distributorAccount.publicKey() + ' }');

      console.log('setting up accounts ...');
      account = await server.loadAccount(distributorAccount.publicKey());

      transaction = new StellarSDK.TransactionBuilder(account, opts = { fee })
        .addOperation(StellarSDK.Operation.changeTrust({
          asset: assetToGenerate,
          limit: totalAmountOfTokens.toString(),
        }))
        .setTimeout(1000)
        .build();

      transaction.sign(distributorAccount);
      await server.submitTransaction(transaction);

      console.log('transfering all tokens from issuer to distributor ...');
      account = await server.loadAccount(issuerAccount.publicKey());

      transaction = new StellarSDK.TransactionBuilder(account, opts = { fee })
        .addOperation(StellarSDK.Operation.payment({
          destination: distributorAccount.publicKey(),
          asset: assetToGenerate,
          amount: totalAmountOfTokens.toString(),
        }))
        .setTimeout(1000)
        .build();

      transaction.sign(issuerAccount);
      await server.submitTransaction(transaction);

      console.log('limiting tokens ...');
      account = await server.loadAccount(issuerAccount.publicKey());

      transaction = new StellarSDK.TransactionBuilder(account, opts = { fee })
        .addOperation(StellarSDK.Operation.setOptions({
          masterWeight: 0,
          lowThreshold: 0,
          medThreshold: 0,
          highThreshold: 0,
        }))
        .setTimeout(1000)
        .build();

      transaction.sign(issuerAccount);
      await server.submitTransaction(transaction);

      const outputEnvFile = `MASTER_SECRET=${masterAccount.secret()}\r\nMASTER_PUBLIC=${masterAccount.publicKey()}\n\n`
                            + `ISSUER_SECRET=${issuerAccount.secret()}\r\nISSUER_PUBLIC=${issuerAccount.publicKey()}\n\n`
                            + `DISTRIBUTOR_SECRET=${distributorAccount.secret()}\r\nDISTRIBUTOR_PUBLIC=${distributorAccount.publicKey()}\n\n`;

      fs.writeFileSync('../.env', outputEnvFile);

      const outputStellarToml = `[[CURRENCIES]]\r\ncode="${assetNameToken}"\r\nissuer="${issuerAccount.publicKey()}"\r\ndisplay_decimals=2`;
      fs.writeFileSync('../stellar.toml', outputStellarToml);

      resolve();
    } catch (e) {
      if (e.response !== undefined) {
        reject(e.response.data.extras.result_codes);
      } else {
        reject(e);
      }
    }
  });
};

const fund = (userSecret) => {
  return new Promise(async (resolve, reject) => {
    let account;
    let transaction;

    const fee = await server.fetchBaseFee();
    const totalAmountOfTokens = 99999999999;
    const assetNameToken = 'MYASSET';

    try {
      const myAccount = StellarSDK.Keypair.fromSecret(userSecret);
      const issuerAccount = StellarSDK.Keypair.fromPublicKey(process.env.ISSUER_PUBLIC);
      const distributorAccount = StellarSDK.Keypair.fromSecret(process.env.DISTRIBUTOR_SECRET);
      const assetToGenerate = new StellarSDK.Asset(assetNameToken, issuerAccount.publicKey());

      console.log('open a selling offer ...');
      account = await server.loadAccount(distributorAccount.publicKey());

      transaction = new StellarSDK.TransactionBuilder(account, opts = { fee })
        .addOperation(StellarSDK.Operation.manageSellOffer({
          selling: assetToGenerate,
          buying: StellarSDK.Asset.native(),
          amount: '10000',
          price: '0.01',
        }))
        .setTimeout(1000)
        .build();

      transaction.sign(distributorAccount);
      await server.submitTransaction(transaction);

      console.log('add account trust ...');
      account = await server.loadAccount(myAccount.publicKey());

      transaction = new StellarSDK.TransactionBuilder(account, opts = { fee })
        .addOperation(StellarSDK.Operation.changeTrust({
          asset: assetToGenerate,
          limit: totalAmountOfTokens.toString(),
        }))
        .setTimeout(1000)
        .build();

      transaction.sign(myAccount);
      await server.submitTransaction(transaction);

      console.log('making an offer ...');
      account = await server.loadAccount(myAccount.publicKey());

      transaction = new StellarSDK.TransactionBuilder(account, opts = { fee })
        .addOperation(StellarSDK.Operation.manageBuyOffer({
          selling: StellarSDK.Asset.native(),
          buying: assetToGenerate,
          buyAmount: '10000',
          price: '0.01',
        }))
        .setTimeout(1000)
        .build();

      transaction.sign(myAccount);
      await server.submitTransaction(transaction);

      resolve();
    } catch (e) {
      if (e.response !== undefined) {
        reject(e.response.data.extras.result_codes);
      } else {
        reject(e);
      }
    }
  });
};

const cli = meow(`
  Usage
    $ deploy.js <command> <secret>

  Examples
    $ deploy.js init <master-secret>
    $ deploy.js fund <user-secret>
    🌈 unicorns 🌈
`);

if (cli.input.length === 2) {
  if (cli.input[0] === 'init') {
    main(cli.input[1]).then(() => {
      console.log('Success!');
    }).catch((reason) => console.error(reason));
  } else if (cli.input[0] === 'fund') {
    fund(cli.input[1]).then(() => {
      console.log('Success!');
    }).catch((reason) => console.error(reason));
  }
} else {
  console.error('Look for help! Maybe deploy.js --help!');
}
```



