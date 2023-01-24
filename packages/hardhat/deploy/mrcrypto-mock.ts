import { ethers, network, setNetworkMapping } from "hardhat";

export const deployMrCryptoMock = async () => {
  const MrCryptoNFT_Factory = await ethers.getContractFactory("MrCryptoNFT");

  const MrCryptoNFT = await MrCryptoNFT_Factory.deploy(
    "Mr. Crypto",
    "MRC",
    "https://apinft.racksmafia.com/api/",
    "https://apinft.racksmafia.com/api/hidden.json",
  );

  setNetworkMapping(network.name, "MrCryptoMock", MrCryptoNFT.address);

  console.log(
    `\n MrCryptoMock ==> deployed to ${MrCryptoNFT.address} on ${network.name}\n`,
  );

  return { MrCryptoNFT };
};
