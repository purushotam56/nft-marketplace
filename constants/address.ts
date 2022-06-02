import { Address } from "@/types/address";

import { SupportedChainId } from "./chains";

export const NFT_ADDRESS: Address = {
  [SupportedChainId.ROPSTEN]: "0x9Fa1fbE571b4170ce3219d34d616ecd61Ff75A06",
};

export const TOKEN_ADDRESS: Address = {
  [SupportedChainId.ROPSTEN]: "0x411caE8A9e0FBecdd7cEE35188c4706fF3DA2598",
};

export const STAKING_ADDRESS: Address = {
  [SupportedChainId.ROPSTEN]: "0x375D32959D3a55Abd7d50Ed297D07EA2a25e3dab",
};

export const RENTAL_ADDRESS: Address = {
  [SupportedChainId.ROPSTEN]: "0xC6340bf1c3DeA84c9F6A7372F8bFD41Bd62992C6",
};
