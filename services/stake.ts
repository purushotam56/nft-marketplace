import { request, gql } from "graphql-request";

import { RentedItem, StakedItem } from "@/types/stake";

import { GRAPHQL_URL } from "../config";

export const getUserNft = async (address: string): Promise<string[]> => {
  const query = gql`
    query userNft($id: ID!) {
      userNft(id: $id) {
        id
        user
        tokenIds
      }
    }
  `;

  const vars = { id: address ? address.toLowerCase() : "" };

  const { userNft } = await request(GRAPHQL_URL, query, vars);

  if (userNft && userNft.tokenIds) return userNft.tokenIds || [];

  return [];
};

export const getStakes = async (): Promise<StakedItem[]> => {
  const query = gql`
    {
      stakes(order_by: { createdAt: desc }) {
        id
        tokenId
        user
        status
      }
    }
  `;

  const { stakes } = await request(GRAPHQL_URL, query, null);

  return stakes;
};

export const getRents = async (): Promise<RentedItem[]> => {
  const query = gql`
    rents(order_by: {createdAt: desc}) {
      id
      tokenId
      tenant
      status
    }
  `;

  const { rents } = await request(GRAPHQL_URL, query, null);

  return rents;
};
