import { ClientError } from "graphql-request";
import { useQuery, UseQueryResult } from "react-query";

import { RentedItem, StakedItem } from "@/types/stake";

import { getRents, getStakes, getUserNft } from "./stake";

export const enum StakeQueryKeys {
  GetUserNftKey = "get-user-nft",
  GetStakesKey = "get-stakes",
  GetRentsKey = "get-rents",
}

export function useQueryUserNft(
  address: string,
): UseQueryResult<string[], ClientError> {
  const result = useQuery<string[], ClientError>(
    [StakeQueryKeys.GetUserNftKey, address],
    () => getUserNft(address),
  );

  return result;
}

export function useQueryStakes(): UseQueryResult<StakedItem[], ClientError> {
  const result = useQuery<StakedItem[], ClientError>(
    StakeQueryKeys.GetStakesKey,
    () => getStakes(),
  );
  return result;
}

export function useQueryRents(): UseQueryResult<RentedItem[], ClientError> {
  const result = useQuery<RentedItem[], ClientError>(
    StakeQueryKeys.GetStakesKey,
    () => getRents(),
  );
  return result;
}
