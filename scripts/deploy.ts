import { ERC721Revocable__factory } from "../typings";
import { ethers, network, run } from "hardhat";

const WAIT_BLOCKS = 5;

async function main() {
  const [deployer] = await ethers.getSigners()
  const contract = await new ERC721Revocable__factory(deployer).deploy();
  await contract.deployed();
  console.log(`ERC721Revocable deployed to ${contract.address}`)

  if (network.name !== 'hardhat') {
    await contract.deployTransaction.wait(WAIT_BLOCKS);
    await run('verify:verify', { address: contract.address, constructorArguments: [] });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
