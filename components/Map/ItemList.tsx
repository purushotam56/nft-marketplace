import React from "react";

import { Box, Grid } from "@mui/material";

import NftCards from "../NftCards";

export interface ItemListType {
  onItemDetail(arg: string): void;
}

const ItemList = (props: ItemListType) => {
  const { onItemDetail } = props;

  const asset = {
    id: 1313,
    contractAddress: "aa",
    tokenId: 22,
    ownerAddress: "JohnDoe",
    ownerId: "cc",
    type: "Transports",
    property: {
      assetId: 33,
      coverUrl: "/images/Explorer/rect_image.jpg",
      description:
        "Transports offer travel utility in the metaverse, with the ability to hold multiple riders. Transport holders will have all future body kits unlocked..",
      id: 44,
      metadataUrl: "xyz.com",
      name: "Roadster #4810",
    },
    isStaked: true,
  };

  return (
    <Box sx={{ mx: "20px" }}>
      <Grid container columnSpacing={{ sm: 1 }} id="card-item-wrapper">
        <Grid item xs={12}>
          <NftCards
            variant="ethereum_card"
            id={12313}
            property={asset.property}
            nftPrice="$50"
            onDetail={() => onItemDetail("Mega_Land_91")}
          />
        </Grid>
        <Grid item xs={12}>
          <NftCards
            variant="ethereum_card"
            id={12313}
            property={asset.property}
            nftPrice="$50"
            onDetail={() => onItemDetail("Mega_Land_91")}
          />
        </Grid>
        <Grid item xs={12}>
          <NftCards
            variant="ethereum_card"
            id={12313}
            property={asset.property}
            nftPrice="$50"
            onDetail={() => onItemDetail("Mega_Land_91")}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemList;
