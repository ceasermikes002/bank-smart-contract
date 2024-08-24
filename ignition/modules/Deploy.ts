import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BankModule = buildModule("BankModule", (m) => {
  // Deploy the Bank contract without any parameters
  const bank = m.contract("Bank");

  return { bank };
});

export default BankModule;
