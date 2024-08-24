// import { expect } from "chai";
// import { ethers } from "hardhat";
// import chaiAsPromised from "chai-as-promised";

// // Use chai-as-promised for promise-based assertions
// chai.use(chaiAsPromised);

// describe("Bank Contract", function () {
//     let Bank: any;
//     let bank: any;
//     let owner: any;
//     let addr1: any;
//     let addr2: any;

//     beforeEach(async function () {
//         // Get the ContractFactory and Signers here.
//         Bank = await ethers.getContractFactory("Bank");
//         [owner, addr1, addr2] = await ethers.getSigners();

//         // Deploy a new instance of the contract before each test
//         bank = await Bank.deploy();
//         await bank.deployed();  // Ensure this line is correct
//     });

//     describe("Account Management", function () {
//         it("Should allow account creation", async function () {
//             await bank.connect(addr1).createAccount();
//             const accountExists = await bank.accountExists(addr1.address);
//             expect(accountExists).to.be.true;
//         });

//         it("Should not allow account creation twice", async function () {
//             await bank.connect(addr1).createAccount();
//             await expect(bank.connect(addr1).createAccount()).to.be.rejectedWith("Account already exists");
//         });
//     });

//     describe("Deposit and Withdraw", function () {
//         it("Should allow deposits", async function () {
//             await bank.connect(addr1).createAccount();
//             await bank.connect(addr1).deposit({ value: ethers.utils.parseEther("1.0") });
//             const balance = await bank.getBalance();
//             expect(balance).to.equal(ethers.utils.parseEther("1.0"));
//         });

//         it("Should allow withdrawals", async function () {
//             await bank.connect(addr1).createAccount();
//             await bank.connect(addr1).deposit({ value: ethers.utils.parseEther("2.0") });
//             await bank.connect(addr1).withdraw(ethers.utils.parseEther("1.0"));
//             const balance = await bank.getBalance();
//             expect(balance).to.equal(ethers.utils.parseEther("1.0"));
//         });

//         it("Should not allow withdrawals without sufficient balance", async function () {
//             await bank.connect(addr1).createAccount();
//             await expect(bank.connect(addr1).withdraw(ethers.utils.parseEther("1.0"))).to.be.rejectedWith("Insufficient balance");
//         });
//     });

//     describe("Transfer", function () {
//         it("Should allow transfers between accounts", async function () {
//             await bank.connect(addr1).createAccount();
//             await bank.connect(addr2).createAccount();
//             await bank.connect(addr1).deposit({ value: ethers.utils.parseEther("2.0") });
//             await bank.connect(addr1).transfer(addr2.address, ethers.utils.parseEther("1.0"));
//             const balanceAddr1 = await bank.getBalance();
//             const balanceAddr2 = await bank.connect(addr2).getBalance();
//             expect(balanceAddr1).to.equal(ethers.utils.parseEther("1.0"));
//             expect(balanceAddr2).to.equal(ethers.utils.parseEther("1.0"));
//         });

//         it("Should not allow transfers to non-existing accounts", async function () {
//             await bank.connect(addr1).createAccount();
//             await bank.connect(addr1).deposit({ value: ethers.utils.parseEther("1.0") });
//             await expect(bank.connect(addr1).transfer(addr2.address, ethers.utils.parseEther("1.0"))).to.be.rejectedWith("Recipient account does not exist");
//         });
//     });
// });
