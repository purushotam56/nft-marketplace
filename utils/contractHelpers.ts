import { JsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import { Contract, ethers, Signer } from "ethers";

import NftABI from "@/contracts/abis/NFT.json";
import NftStakingABI from "@/contracts/abis/NFTStaking.json";
import NgryABI from "@/contracts/abis/NRGY.json";
import { NFT, NFTStaking, NRGY } from "@/contracts/types";

import {
  getNftAddress,
  getStakingAddress,
  getTokenAddress,
} from "./addressHelpers";
import { simpleRpcProvider } from "./providers";

// account is optional
const getContract = (
  abi: any,
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider,
) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new Contract(address, abi, signerOrProvider);
};

export const getStakingContract = (
  signer?: Signer | Web3Provider | JsonRpcProvider,
) => {
  return getContract(NftStakingABI, getStakingAddress(), signer) as NFTStaking;
};

export const getTokenContract = (
  signer?: Signer | Web3Provider | JsonRpcProvider,
) => {
  return getContract(NgryABI, getTokenAddress(), signer) as NRGY;
};

export const getNftContract = (
  signer?: Signer | Web3Provider | JsonRpcProvider,
) => {
  return getContract(NftABI, getNftAddress(), signer) as NFT;
};
