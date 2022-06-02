import { ethers } from "ethers";

import { RPC, SupportedChainId } from "constants/chains";

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(
  RPC[SupportedChainId.ROPSTEN],
);

export default null;
