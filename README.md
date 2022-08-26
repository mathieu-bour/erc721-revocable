# ERC721Revocable

OpenZeppelin's ERC721 contract with an additional revocableMintTo which creates revocable ERC721 tokens.

Demo version of teh contract is available at [0xaBF6a1c0FBb9f606025874461178991B0A7Faa49](https://mumbai.polygonscan.com/address/0xaBF6a1c0FBb9f606025874461178991B0A7Faa49).

> Use case: allow new web3 users to mint NFTs without requiring them to own any cryptocurrency.

Basic flow:

1. Users pays using a traditional credit card payment gateway (Stripe, Braintree, etc.).
2. Payment gateway sends a webhook to an OpenZeppelin Relay or similar service.
3. Relay mints the NFT for the user using the `ERC721Revocable.revocableMintTo` function.
4. Until the release date, the owner is allowed to burn the token using the `ERC721Revocable.revoke` if the user wins a
   dispute or if the card is fraudulent, etc.).

This example is configured to deploy on the Mumbai Polygon Testnet.

