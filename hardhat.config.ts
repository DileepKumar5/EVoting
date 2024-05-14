import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.9"  // Latest stable version, adjust as needed
      },
      {
        version: "0.7.3"  // Your current version
      }
    ]
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },

  },
};

export default config;
