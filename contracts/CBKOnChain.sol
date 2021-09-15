pragma solidity ^0.5.6;

import "./klaytn-contracts/ownership/Ownable.sol";
import "./interfaces/ICBKOnChain.sol";

contract CBKOnChain is Ownable, ICBKOnChain {

    mapping(uint256 => string) public cases;
    function setCase(uint256 id, string calldata _case) onlyOwner external {
        cases[id] = _case;
    }
}
