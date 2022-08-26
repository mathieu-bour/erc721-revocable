/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ERC721Revocable,
  ERC721RevocableInterface,
} from "../../contracts/ERC721Revocable";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "mintTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "until",
        type: "uint256",
      },
    ],
    name: "revocableMintTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "revoke",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260006007553480156200001657600080fd5b5060408051808201825260098152685265766f6361626c6560b81b6020808301918252835180850190945260038452622922ab60e91b9084015281519192916200006391600091620000f2565b50805162000079906001906020840190620000f2565b50505062000096620000906200009c60201b60201c565b620000a0565b620001d5565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620001009062000198565b90600052602060002090601f0160209004810192826200012457600085556200016f565b82601f106200013f57805160ff19168380011785556200016f565b828001600101855582156200016f579182015b828111156200016f57825182559160200191906001019062000152565b506200017d92915062000181565b5090565b5b808211156200017d576000815560010162000182565b600181811c90821680620001ad57607f821691505b60208210811415620001cf57634e487b7160e01b600052602260045260246000fd5b50919050565b6115fd80620001e56000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063715018a6116100ad578063b88d4fde11610071578063b88d4fde1461026a578063c87b56dd1461027d578063d75695b214610290578063e985e9c5146102a3578063f2fde38b146102df57600080fd5b8063715018a614610223578063755edd171461022b5780638da5cb5b1461023e57806395d89b411461024f578063a22cb4651461025757600080fd5b806320c5429b116100f457806320c5429b146101c457806323b872dd146101d757806342842e0e146101ea5780636352211e146101fd57806370a082311461021057600080fd5b806301ffc9a71461013157806306fdde0314610159578063081812fc1461016e578063095ea7b3146101995780631249c58b146101ae575b600080fd5b61014461013f366004611110565b6102f2565b60405190151581526020015b60405180910390f35b610161610344565b6040516101509190611185565b61018161017c366004611198565b6103d6565b6040516001600160a01b039091168152602001610150565b6101ac6101a73660046111cd565b6103fd565b005b6101b6610518565b604051908152602001610150565b6101ac6101d2366004611198565b610528565b6101ac6101e53660046111f7565b6105b1565b6101ac6101f83660046111f7565b6105e2565b61018161020b366004611198565b6105fd565b6101b661021e366004611233565b61065d565b6101ac6106e3565b6101b6610239366004611233565b6106f7565b6006546001600160a01b0316610181565b61016161071b565b6101ac61026536600461124e565b61072a565b6101ac6102783660046112a0565b610739565b61016161028b366004611198565b610771565b6101ac61029e3660046111cd565b6107e5565b6101446102b136600461137c565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6101ac6102ed366004611233565b610806565b60006001600160e01b031982166380ac58cd60e01b148061032357506001600160e01b03198216635b5e139f60e01b145b8061033e57506301ffc9a760e01b6001600160e01b03198316145b92915050565b606060008054610353906113af565b80601f016020809104026020016040519081016040528092919081815260200182805461037f906113af565b80156103cc5780601f106103a1576101008083540402835291602001916103cc565b820191906000526020600020905b8154815290600101906020018083116103af57829003601f168201915b5050505050905090565b60006103e18261087c565b506000908152600460205260409020546001600160a01b031690565b6000610408826105fd565b9050806001600160a01b0316836001600160a01b0316141561047b5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b0382161480610497575061049781336102b1565b6105095760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610472565b61051383836108db565b505050565b6000610523336106f7565b905090565b60008181526008602052604090205442106105965760405162461bcd60e51b815260206004820152602860248201527f5265766f6361626c653a20746f6f206c61746520746f207265766f6b6520746860448201526734b9903a37b5b2b760c11b6064820152608401610472565b6000818152600860205260408120556105ae81610949565b50565b6105bb33826109e4565b6105d75760405162461bcd60e51b8152600401610472906113ea565b610513838383610a63565b61051383838360405180602001604052806000815250610739565b6000818152600260205260408120546001600160a01b03168061033e5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610472565b60006001600160a01b0382166106c75760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610472565b506001600160a01b031660009081526003602052604090205490565b6106eb610bff565b6106f56000610c59565b565b600780546000918291908261070b8361144e565b91905055905061033e8382610cab565b606060018054610353906113af565b610735338383610ded565b5050565b61074333836109e4565b61075f5760405162461bcd60e51b8152600401610472906113ea565b61076b84848484610ebc565b50505050565b606061077c8261087c565b600061079360408051602081019091526000815290565b905060008151116107b357604051806020016040528060008152506107de565b806107bd84610eef565b6040516020016107ce929190611469565b6040516020818303038152906040525b9392505050565b60006107f0836106f7565b6000908152600860205260409020919091555050565b61080e610bff565b6001600160a01b0381166108735760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610472565b6105ae81610c59565b6000818152600260205260409020546001600160a01b03166105ae5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610472565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610910826105fd565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610954826105fd565b90506109616000836108db565b6001600160a01b038116600090815260036020526040812080546001929061098a908490611498565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6000806109f0836105fd565b9050806001600160a01b0316846001600160a01b03161480610a3757506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610a5b5750836001600160a01b0316610a50846103d6565b6001600160a01b0316145b949350505050565b826001600160a01b0316610a76826105fd565b6001600160a01b031614610ada5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610472565b6001600160a01b038216610b3c5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610472565b610b476000826108db565b6001600160a01b0383166000908152600360205260408120805460019290610b70908490611498565b90915550506001600160a01b0382166000908152600360205260408120805460019290610b9e9084906114af565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6006546001600160a01b031633146106f55760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610472565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216610d015760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610472565b6000818152600260205260409020546001600160a01b031615610d665760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610472565b6001600160a01b0382166000908152600360205260408120805460019290610d8f9084906114af565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b816001600160a01b0316836001600160a01b03161415610e4f5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610472565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610ec7848484610a63565b610ed384848484610fed565b61076b5760405162461bcd60e51b8152600401610472906114c7565b606081610f135750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610f3d5780610f278161144e565b9150610f369050600a8361152f565b9150610f17565b60008167ffffffffffffffff811115610f5857610f5861128a565b6040519080825280601f01601f191660200182016040528015610f82576020820181803683370190505b5090505b8415610a5b57610f97600183611498565b9150610fa4600a86611543565b610faf9060306114af565b60f81b818381518110610fc457610fc4611557565b60200101906001600160f81b031916908160001a905350610fe6600a8661152f565b9450610f86565b60006001600160a01b0384163b156110ef57604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061103190339089908890889060040161156d565b602060405180830381600087803b15801561104b57600080fd5b505af192505050801561107b575060408051601f3d908101601f19168201909252611078918101906115aa565b60015b6110d5573d8080156110a9576040519150601f19603f3d011682016040523d82523d6000602084013e6110ae565b606091505b5080516110cd5760405162461bcd60e51b8152600401610472906114c7565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610a5b565b506001949350505050565b6001600160e01b0319811681146105ae57600080fd5b60006020828403121561112257600080fd5b81356107de816110fa565b60005b83811015611148578181015183820152602001611130565b8381111561076b5750506000910152565b6000815180845261117181602086016020860161112d565b601f01601f19169290920160200192915050565b6020815260006107de6020830184611159565b6000602082840312156111aa57600080fd5b5035919050565b80356001600160a01b03811681146111c857600080fd5b919050565b600080604083850312156111e057600080fd5b6111e9836111b1565b946020939093013593505050565b60008060006060848603121561120c57600080fd5b611215846111b1565b9250611223602085016111b1565b9150604084013590509250925092565b60006020828403121561124557600080fd5b6107de826111b1565b6000806040838503121561126157600080fd5b61126a836111b1565b91506020830135801515811461127f57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156112b657600080fd5b6112bf856111b1565b93506112cd602086016111b1565b925060408501359150606085013567ffffffffffffffff808211156112f157600080fd5b818701915087601f83011261130557600080fd5b8135818111156113175761131761128a565b604051601f8201601f19908116603f0116810190838211818310171561133f5761133f61128a565b816040528281528a602084870101111561135857600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561138f57600080fd5b611398836111b1565b91506113a6602084016111b1565b90509250929050565b600181811c908216806113c357607f821691505b602082108114156113e457634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b600060001982141561146257611462611438565b5060010190565b6000835161147b81846020880161112d565b83519083019061148f81836020880161112d565b01949350505050565b6000828210156114aa576114aa611438565b500390565b600082198211156114c2576114c2611438565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b634e487b7160e01b600052601260045260246000fd5b60008261153e5761153e611519565b500490565b60008261155257611552611519565b500690565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906115a090830184611159565b9695505050505050565b6000602082840312156115bc57600080fd5b81516107de816110fa56fea26469706673582212200e660ee2a4fd5c13bc93f8f512adf9a26dae2dd6c3844a7807aa9a0581fad84a64736f6c63430008090033";

type ERC721RevocableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721RevocableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Revocable__factory extends ContractFactory {
  constructor(...args: ERC721RevocableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721Revocable> {
    return super.deploy(overrides || {}) as Promise<ERC721Revocable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721Revocable {
    return super.attach(address) as ERC721Revocable;
  }
  override connect(signer: Signer): ERC721Revocable__factory {
    return super.connect(signer) as ERC721Revocable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721RevocableInterface {
    return new utils.Interface(_abi) as ERC721RevocableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Revocable {
    return new Contract(address, _abi, signerOrProvider) as ERC721Revocable;
  }
}