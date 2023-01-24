import * as hre from "hardhat";

async function main() {
  await hre.run("compile");

  hre.hardhatArguments.network = "goerli";

  await hre.run("run", {
    script: "./scripts/deploy.ts",
  });

  const network = hre.network;
  console.log("Network:", network.name, "ID", network.config.chainId);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
