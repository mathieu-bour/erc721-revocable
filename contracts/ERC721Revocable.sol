// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title ERC721Revocable
 * @author Mathieu "Windyy" Bour
 * @dev Basic revocable ERC721 tokens. Use case: allow new web3 users to mint NFTs without requiring them to own any cryptocurrency.
 */
contract ERC721Revocable is ERC721, Ownable {
  uint256 tracker = 0;
  mapping(uint256 => uint256) revocable;

  constructor() ERC721("Revocable", "REV") {}

  function mintTo(address account) public returns (uint256) {
    uint256 tokenId = tracker++;
    _mint(account, tokenId);
    return tokenId;
  }

  function mint() external returns (uint256) {
    return mintTo(_msgSender());
  }

  function revocableMintTo(address account, uint256 until) external {
    uint256 tokenId = mintTo(account);
    revocable[tokenId] = until;
  }

  function revoke(uint256 tokenId) external {
    require(block.timestamp < revocable[tokenId], "Revocable: too late to revoke this token");
    revocable[tokenId] = 0;
    _burn(tokenId);
  }
}
