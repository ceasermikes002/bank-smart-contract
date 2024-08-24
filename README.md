# Bank Smart Contract

## Overview

This project contains a simple bank smart contract written in Solidity that allows users to create accounts, deposit funds, withdraw funds, and transfer funds between accounts. The contract ensures that accounts are created and managed properly, and that transactions are only allowed if certain conditions are met.

## Features

- **Create an Account**: Users can create an account if they don't already have one.
- **Deposit Funds**: Users can deposit Ether into their account.
- **Withdraw Funds**: Users can withdraw Ether from their account, provided they have sufficient balance.
- **Transfer Funds**: Users can transfer Ether to another account, provided they have sufficient balance and both accounts exist.
- **Check Balance**: Users can check their account balance.

## Smart Contract

### Bank Contract

```solidity
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
```

## Setup

### Prerequisites

- Node.js
- Hardhat
- Ethers.js
- TypeScript

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/bank-smart-contract.git
    ```

2. Navigate to the project directory:

    ```bash
    cd bank-smart-contract
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Configuration

Create a `.env` file in the root directory and add the following environment variables:

```env
INFURA_PROJECT_ID=your_infura_project_id
SEPOLIA_PRIVATE_KEY=your_sepolia_private_key
```

Replace `your_infura_project_id` and `your_sepolia_private_key` with your actual Infura project ID and Sepolia private key.

### Compilation

Compile the smart contract using Hardhat:

```bash
npx hardhat compile
```

### Deployment

Deploy the smart contract to the Sepolia testnet using Hardhat Ignition:

```bash
npx hardhat ignition deploy ./ignition/modules/Deploy.ts --network sepolia
```

### Testing

Run the tests to ensure everything is working correctly:

```bash
npx hardhat test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to open issues or submit pull requests to improve the project. Please follow the standard GitHub flow for contributing.

## Contact

For any questions or feedback, please contact [michealceaser02@gmail.com](mailto:michealceaser02@gmail.com).

DEPLOYED ADDRESS:0x488Cdc396B5EdeC1c6da0Da00d1Ab2f5c9a63C03

```