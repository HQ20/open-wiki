# Experiments

Here we present some of our successful (and less successful) attempts at grappling with new technology.

## Conditional Tokens
Conditional Tokens are Gnosis' implementation of the EIP-1155 standard. 
Conditional tokens can mostly be used in conditional prediction markets. There is active research on whether other use cases are possible.

Conditional tokens have been born out of the need for a token specification that would allow merging and splitting positions (funded partitions of a certain condition with final input from an outside oracle) so that one prediction market's probabilities would be influenced by another resolved prediction market's if the two were conditionally correlated. For example, one might be interested in the outcome of the prediction market **"Has Elon Musk died by 1 Jan 2060?"** if he betted on the prediciton market **"Will Elon Musk be the richest man on Earth by 1 Jan 2070?"** or might even bet on the first one, too.

Below there are a handsome of links to better document on conditional tokens. You can also play with the official demo code from Gnosis or try the live Sight version of conditional tokens.

  - Get to know more about the [EIP-1155 standard](https://eips.ethereum.org/EIPS/eip-1155)
  - See the conditional tokens [docs](https://gnosis-mercury.readthedocs.io/en/latest/index.html)
  - Tweak the official Gnosis [demo](https://gnosis.github.io/conditional-tokens/)
  - Try a live version [here](https://conditionaltokens.staging.gnosisdev.com/#/)

Conditional tokens seem to be industry-specific innovation (related to betting) since there are no other implemented use cases (at least, not for now), even though possible use cases vary from games with in-game assets like rewards and incentives, to grant systems with conditional payouts based on milestones being reached. 

## Subscription Model

> [!WARNING]
> *Still in development* (as of Dec 2, 2019).

The subcription model implements timely payments on the Ethereum blockchain. They strive to be the Stripe of blockchain. There are some EIP's that tried to implement the subscription function, including EIP-948 and EIP-1337. Daisy, a spin-off from Consensys's CoDeFi, stands out as one successful example of such an implementation. There is also an SDK to play with, making programmatic monthly payments on the Ethereum blockchain easy as chat.

  - One working application would be [daisy payments](https://www.daisypayments.com/).
  - Check out the [docs](https://docs.daisypayments.com/) for the **daisy sdk**.

There is certainly an eye to keep on Daisy. As the transition from the old web to web3 continues, it will be of particular interest to freelancers, clients, businesses and users, alike.