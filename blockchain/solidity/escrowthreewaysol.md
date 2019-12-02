# Escrow Three Way

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

