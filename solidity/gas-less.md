# Gas Less

On public mainnet, every transaction has a fee. Not all users have ETH to pay that fee, and it's not very user friendly either.

To remove that step and improve users experience, there are currently some \_gas less \_tools. But what does this means? Gas Less tools, are tools that can be wired to you current dapp and avoid the need of the final user to pay for a transaction.

By doing so, another account will be paying the transaction, meaning that, most likely, will be the system owner paying it.

To better understand the concept, please have further reading at [https://www.reddit.com/r/ethereum/comments/ae71l8/meta\_gasless\_transactions\_explained/](https://www.reddit.com/r/ethereum/comments/ae71l8/meta_gasless_transactions_explained/).

## Shipl

There are few people building their own tools, but currently there's one well know. Shipl \([https://shipl.co/](https://shipl.co/)\) is public and available to give a try. The tools simplifies the process of moving to a gas less dapp.

According to shipl getting started page, the following code is an example of what can be done.

```js
require('promise-to-callback')
const Shipl = require('shipl')
const Eth = require('ethjs');
const getJSON = require('async-get-json')
const abi = (await getJSON('https://bit.ly/2R5kk6r')).abi
    
const shipl = new Shipl({ 
  privateKey: 'becddd5ecb535af009590a3ba9c15ffe024f42f3abc1cc67271cdda76ed50b5d', 
  network: 'rinkeby', 
  appId: '2b9fd645-0591-4db9-885b-cc44ac349bf4'
})
const { identity, deviceKey } = await shipl.login()
const eth = new Eth(shipl.getWeb3Provider())
const dappContract = eth.contract(abi).at('0xabc59d9a5163d5ab600cccd9108bf532d8d9d7a5')
    
const txHash = await dappContract.register(10, { from: deviceKey })
await shipl.getInternalTransactionsData(abi, txHash)
// Click “▶ run” to try this code live and create your first meta-tx.
```



