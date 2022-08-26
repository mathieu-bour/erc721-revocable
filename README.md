# ERC721Revocable

![GitHub License](https://img.shields.io/github/license/mathieu-bour/erc721-revocable?style=for-the-badge)
![Codecov](https://img.shields.io/codecov/c/gh/mathieu-bour/erc721-revocable?style=for-the-badge&token=llXOqvsAmc)

OpenZeppelin's ERC721 contract with an additional revocableMintTo which creates revocable ERC721 tokens.

Demo version of the contract is available at [0xa98d37675aDd1c4B15942836Ecd210BedC48c058](https://mumbai.polygonscan.com/address/0xa98d37675aDd1c4B15942836Ecd210BedC48c058).

> Use case: allow new web3 users to mint NFTs without requiring them to own any cryptocurrency.

Basic flow:

1. User pays using a traditional credit card payment gateway (Stripe, Braintree, etc.).
2. Payment gateway sends a webhook to an OpenZeppelin Relay or similar service.
3. Relay mints the NFT for the user using the `ERC721Revocable.revocableMintTo` function.
4. Until the release date, the owner is allowed to burn the token using the `ERC721Revocable.revoke` if the user wins a
   dispute or if the card is fraudulent, etc.).

This example is configured to deploy on the Mumbai Polygon Testnet.
