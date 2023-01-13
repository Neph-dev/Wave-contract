// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";


contract WavePortal {
    uint256 totalWaves;

    function waves() public {
        totalWaves+=1;
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("you have a total of %d waves", totalWaves);
        return totalWaves;
    }
}