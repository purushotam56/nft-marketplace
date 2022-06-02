import { ALCHEMY_KEY } from "@/config/index";

/**
 * List of all the networks supported
 */
export enum SupportedChainId {
  MAINNET = 1,
  ROPSTEN = 3,
}

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
  SupportedChainId,
).filter((id) => typeof id === "number") as SupportedChainId[];

export const SUPPORTED_GAS_ESTIMATE_CHAIN_IDS = [SupportedChainId.MAINNET];

export const RPC = {
  [SupportedChainId.MAINNET]: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
  [SupportedChainId.ROPSTEN]: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_KEY}`,
};
