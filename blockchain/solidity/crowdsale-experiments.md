# Crowdsale Experiments

![](../../assets/crowdsale.jpeg)

from [How to participate in the NEXT.Exchange Token Crowdsale — a beginner's guide](https://medium.com/nextexchange/how-to-participate-in-the-next-exchange-token-crowdsale-a-beginners-guide-7fd95e938b90).

We've done it for a while. Crowdsale are basically used to ICO's. In case you don't know what an ICO is, here \([Explain me like I’m five: What is ICO](https://medium.com/meetngreetme-ico/explain-me-like-im-five-what-is-ico-19f967669cad)\) is an explanation and here \([Launching an ICO in 2019](https://www.techhq.io/6855/launching-an-ico-in-2019/)\) is a overview o what's been happening.

Below are some examples we've been collecting over time. They were mostly done during some other hackathon project, or experiments. There is a second section when it's possible to find escrow contracts which are sometimes tied to with crowdsales.

## Escrow Contracts

## StepEscrow.sol

This contract is like an _escrow_ contract but divided into steps. For each step, a percentage is taken.

**Note**: This contract is created using the library _openzeppelin-solidity_ without changes.

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

Used in experimental repository.


## EscrowThreeWay.sol

This contract is like an _escrow_ contract between two parts, but the difference is that the money is taken for both side and the total amount is sent just to one side.

**Note**: This contract is created using the library _openzeppelin-solidity_ with only one change in _ERC20.sol_ which allows using _transferFrom_ without any limit.

```js
pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol";

contract Escrow {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    struct Cases {
        bool isOpen;
        address from;
        address to;
        uint256 amount;
    }

    Cases[] private cases;
    uint256 private totalCases;
    address private escrowWallet;
    // The token being sold
    IERC20 private _token;

    constructor(address _escrowWallet, IERC20 _erc20) public {
        escrowWallet = _escrowWallet;
        _token = _erc20;
        totalCases = 0;
    }

    function escrow(address _to, uint256 _value) public {
        cases.push(Cases(true, msg.sender, _to, _value));
        _token.transferFrom(msg.sender, escrowWallet, _value / 2);
        _token.transferFrom(_to, escrowWallet, _value / 2);
        totalCases = totalCases.add(1);
    }

    function getTotalCases() public view returns(uint256) {
        return totalCases;
    }

    function revertTo(uint256 _caseId, bool _returnTo) public {
        require(cases[_caseId].isOpen == true, "");
        if(_returnTo == true) {
            _token.transferFrom(escrowWallet, cases[_caseId].to, cases[_caseId].amount);
        } else {
            _token.transferFrom(escrowWallet, cases[_caseId].from, cases[_caseId].amount);
        }
        cases[_caseId].isOpen = false;
    }
}
```

Used in [https://github.com/HQ20/strea](https://github.com/HQ20/strea)
