# EscrowThreeWay.sol

Este contracto é um escrow entre duas partes, sendo o saldo extraido de ambas as partes ao mesmo tempo e no final sendo devolvido apenas a uma.

Nota: Este contracto é criado utilizando a biblioteca _openzeppelin-solidity_ com uma alteração em _ERC20.sol_ de forma a poder usar _transferFrom_ sem qualquer limite.

```solidity
pragma solidity ^0.4.24;

import "../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol";

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



