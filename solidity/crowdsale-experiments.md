# Crowdsale Experiments

![](/assets/corwdsale.jpeg)

from [How to participate in the NEXT.Exchange Token Crowdsale — a beginner's guide](https://medium.com/nextexchange/how-to-participate-in-the-next-exchange-token-crowdsale-a-beginners-guide-7fd95e938b90).

We've done ir for a while. Crowdsale are basicaly used to ICO's. In case you don't know what an ICO is, here \([Explain me like I’m five: What is ICO](https://medium.com/meetngreetme-ico/explain-me-like-im-five-what-is-ico-19f967669cad)\) is an explanation and here \([Launching an ICO in 2019](https://www.techhq.io/6855/launching-an-ico-in-2019/)\) is a overview o what's been happening.

Below are some examples we've been colleting over time. They were mostly done during some otherhackathon project, or experiments. There is a second section when it's possible to find escrow contracts which are sometimes tied to with crowdsales.

## Escrow Contracts

### StepEscrow.sol

This contract is like an _escrow_ contract but divided into steps. For each step, a percentage is taken.

Note: This contract is created using the library _openzeppelin-solidity_ without changes.

```js
pragma solidity ^0.4.23;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";

contract StepEscrow {
    using SafeMath for uint256;

    address private payer;
    address private payee;
    uint256 private steps;
    uint256 private deposits;

    event Deposited(address indexed payee, uint256 weiAmount);

    /**
    * @dev constructor.
    * @param _payer should be the payer
    * @param _steps how many steps the escrow have
    */
    constructor(address _payer, uint256 _steps) public {
        payer = _payer;
        steps = _steps;
    }

    /**
    * @dev modifier who allows only the payer to do actions
    * @param _who should be the payer
    */
    modifier onlyPayer(address _who) {
        require(_who == payer, "onlyPayer allowed!");
        _;
    }

    /**
    * @dev fallback payable function
    */
    function () public payable {}

    /**
    * @dev deposit method to not put any code inside the fallback method
    * for gas usage reasons
    */
    function deposit() public payable {
        deposits = msg.value;
    }

    /**
    * @dev return all the ammout deposited
    */
    function getDeposits() public view returns(uint256) {
        return deposits;
    }

    /**
    * @dev set the payee of the escrow contract
    * @param _payee the payee
    */
    function setPayee(address _payee) public {
        payee = _payee;
    }

    /**
    * @dev hit step function
    * @param _who should be the payer
    */
    function hit(address _who) public onlyPayer(_who) returns(bool success) {
        uint256 payment = deposits.div(steps);

        require(payment != 0, "payment can not be 0");
        require(address(this).balance >= payment, "balance should be higher than payment");

        steps = steps.sub(1);
        deposits = deposits.sub(payment);

        payee.transfer(payment);
        success = steps == 0;
    }

    /**
    * @dev cancel escrow, refunding payer
    */
    function cancel() public {
        require(deposits != 0, "deposits can not be 0");
        require(address(this).balance == deposits, "balance should be equal to deposits");

        payer.transfer(deposits);
    }
}
```



