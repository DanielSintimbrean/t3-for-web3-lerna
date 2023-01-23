import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-solhint";
import "./constants/network-mapping";
import {env} from "./env";
import "fs";
import "path";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  typechain: {
    outDir: "types/contracts",
    alwaysGenerateOverloads: true,
    dontOverrideCompile: false,
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: env.GOERLI_RPC_URL,
      ...(env.PRIVATE_KEY && {accounts: [env.PRIVATE_KEY]}),
      chainId: 5,
    },
  },
};

export default config;
