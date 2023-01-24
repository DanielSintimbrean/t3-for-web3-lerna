import { extendEnvironment, HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-solhint";
import { env } from "./env";

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
      ...(env.PRIVATE_KEY && { accounts: [env.PRIVATE_KEY] }),
      chainId: 5,
    },
  },
};

extendEnvironment(async (hre) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { setNetworkMapping } = require("./constants/network-mapping/index.ts");
  hre.setNetworkMapping = setNetworkMapping;
});

export default config;
