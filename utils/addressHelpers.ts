import { getAddress as getValidAddress } from "@ethersproject/address";

import {
  NFT_ADDRESS,
  STAKING_ADDRESS,
  TOKEN_ADDRESS,
} from "@/constants/address";
import { SupportedChainId } from "@/constants/chains";
import { Address } from "types/address";

import { CHAIN_ID } from "../config";

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
  try {
    return getValidAddress(value);
  } catch {
    return false;
  }
}

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenAddress(address: string, chars = 4): string {
  const parsed = isAddress(address);
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
}

export const getAddress = (address: Address): string => {
  const chainId = CHAIN_ID as SupportedChainId;
  return address[chainId]
    ? address[chainId]
    : address[SupportedChainId.ROPSTEN];
};

export const getStakingAddress = () => {
  return getAddress(STAKING_ADDRESS);
};

export const getTokenAddress = () => {
  return getAddress(TOKEN_ADDRESS);
};

export const getNftAddress = () => {
  return getAddress(NFT_ADDRESS);
};
