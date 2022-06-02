import { useMemo } from "react";

import { Contract } from "@ethersproject/contracts";
import { useWeb3React } from "@web3-react/core";

import {
  getNftContract,
  getStakingContract,
  getTokenContract,
} from "@/utils/contractHelpers";

import useActiveWeb3React from "./useActiveWeb3React";

export default function useContract<T extends Contract = Contract>(
  address: string,
  ABI: any,
): T | null {
  const { library, account, chainId } = useWeb3React();

  return useMemo(() => {
    if (!address || !ABI || !library || !chainId) {
      return null;
    }

    try {
      return new Contract(address, ABI, library.getSigner(account));
    } catch (error) {
      return null;
    }
  }, [address, ABI, library, chainId, account]) as T;
}

export function useStakingContract() {
  const { library } = useActiveWeb3React();
  return useMemo(() => getStakingContract(library?.getSigner()), [library]);
}

export function useTokenContract() {
  const { library } = useActiveWeb3React();
  return useMemo(() => getTokenContract(library?.getSigner()), [library]);
}

export function useNftContract() {
  const { library } = useActiveWeb3React();
  return useMemo(() => getNftContract(library?.getSigner()), [library]);
}
