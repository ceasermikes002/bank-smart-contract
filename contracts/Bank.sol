// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Bank {
    mapping(address => uint256) private balances;
    mapping(address => bool) private accountExists;

    function createAccount() external {
        require(!accountExists[msg.sender], "Account already exists");
        accountExists[msg.sender] = true;
    }

    function deposit() external payable {
        require(accountExists[msg.sender], "Account does not exist");
        balances[msg.sender] += msg.value;
    }

    function withdraw(uint256 _amount) external {
        require(accountExists[msg.sender], "Account does not exist");
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        balances[msg.sender] -= _amount;
        payable(msg.sender).transfer(_amount);
    }

    function transfer(address _to, uint256 _amount) external {
        require(accountExists[msg.sender], "Account does not exist");
        require(accountExists[_to], "Recipient account does not exist");
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    }

    function getBalance() external view returns (uint256) {
        require(accountExists[msg.sender], "Account does not exist");
        return balances[msg.sender];
    }
}
