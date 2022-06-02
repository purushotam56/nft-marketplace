import { useState, useEffect } from "react";

import { getAssetMetadata } from "@/services/assets";
import { getStakes, getUserNft } from "@/services/stake";
import { AssetType, AssetStatus } from "@/types/asset";

import useActiveWeb3React from "./useActiveWeb3React";

const useGetLands = () => {
  const { account } = useActiveWeb3React();
  const [assets, setAssets] = useState<AssetType[]>([]);

  useEffect(() => {
    if (!account) return;

    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  const fetch = async () => {
    try {
      const stakes = await getStakes();
      const userNft = await getUserNft(account);

      const stakedTokens: { id: string; status: AssetStatus }[] = stakes
        .filter(
          (item) =>
            item.user === account.toLowerCase() && item.status === "active",
        )
        .map((item) => ({ id: item.tokenId, status: item.status }));

      const ownedTokens: { id: string; status: AssetStatus }[] = userNft.map(
        (id) => ({
          id,
          status: "none" as AssetStatus,
        }),
      );

      const assets = await Promise.all(
        [...ownedTokens, ...stakedTokens].map(async (item) => {
          const metadata = await getAssetMetadata({
            id: `${parseInt(item.id)}`,
          });
          return {
            id: parseInt(item.id),
            contractAddress: "",
            tokenId: item.id,
            ownerAddress: account,
            ownerId: account,
            type: "LAND",
            property: {
              coverUrl: metadata.image,
              description: metadata.description,
              id: parseInt(item.id),
              metadataUrl: "",
              name: metadata.name,
            },
            status: item.status,
          };
        }),
      );
      setAssets(assets);
    } catch (e) {
      console.log(e);
    }
  };

  const update = (id, asset) => {
    setAssets(
      assets.map((item) => (item.id === id ? { ...item, ...asset } : item)),
    );
  };

  return { assets, update };
};

export default useGetLands;
