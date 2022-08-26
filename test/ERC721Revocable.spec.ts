import { expect } from 'chai';
import { ethers } from 'hardhat';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { ERC721Revocable, ERC721Revocable__factory } from '../typings';

describe('ERC721Revocable', () => {
  let contract: ERC721Revocable;
  let deployer: SignerWithAddress;
  let relay: SignerWithAddress;
  let accounts: SignerWithAddress[];

  beforeEach(async () => {
    [deployer, relay, ...accounts] = await ethers.getSigners();
    contract = await new ERC721Revocable__factory(deployer).deploy();
    await contract.deployed();
  });

  describe('mint', () => {
    it('should let users mint twice', async () => {
      await contract.connect(accounts[0]).mint();
      await contract.connect(accounts[1]).mint();

      expect(await contract.ownerOf(0)).to.eq(accounts[0].address);
      expect(await contract.ownerOf(1)).to.eq(accounts[1].address);
    });
  });

  describe('revoke', () => {
    it('should allow the owner to burn the revocable tokens', async () => {
      await contract.connect(relay).revocableMintTo(accounts[0].address, Math.floor(Date.now() / 1000) + 3600);
      expect(await contract.ownerOf(0)).to.eq(accounts[0].address);

      await contract.connect(deployer).revoke(0);
      await expect(contract.ownerOf(0)).to.be.revertedWith('ERC721: invalid token ID');
    });

    it('should revert if the release date is in the past', async () => {
      const release = Math.floor(Date.now() / 1000) - 3600; // now - 1h
      await contract.connect(relay).revocableMintTo(accounts[0].address, release);
      expect(await contract.ownerOf(0)).to.eq(accounts[0].address);

      await expect(contract.connect(deployer).revoke(0)).to.be.revertedWith('ERC721Revocable: token has been released');
    });
  });
});
