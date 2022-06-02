export const ALCHEMY_KEY = process.env.NEXT_PUBLIC_ALCHEMY_KEY;

export const CHAIN_ID: number =
  parseInt(process.env.NEXT_PUBLIC_CHAIN_ID ?? "1", 10) || 1;

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  `https://j2gu7zw5aj.execute-api.us-east-1.amazonaws.com/dev`;

export const GRAPHQL_URL =
  process.env.NEXT_PUBLIC_GRAPHQL_URL ||
  `https://thegraph.com/hosted-service/subgraph/netvrk/staking-rental-ropsten`;
