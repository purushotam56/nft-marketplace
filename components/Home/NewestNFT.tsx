import React, { FC, useState, useEffect } from "react";

import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";

import { NewestNFTStyle } from "@/components/Home/Home.styles";
import NftCards from "@/components/NftCards";
import Button from "@/components/UI/Button";
import { getAssets } from "@/services/assets";
import { AssetType } from "@/types/asset";
type GET_DATA = {
  page?: number | undefined;
  currentListType?: "small";
  currentSortBy?: "recently";
};

type State = {
  assets: AssetType[];
};

const NewestNFT: FC = () => {
  const [{ assets }, setState] = useState<State>({
    assets: [],
  });
  const history = useRouter();
  const onItemDetail = (contract: string, tokenId: string) =>
    history.push(`/assets/${contract}/${tokenId}`);

  const getData = async ({ page = 1 }: GET_DATA) => {
    const ITEMS_PER_PAGE = 20;
    const res = await getAssets({
      page,
      pageSize: ITEMS_PER_PAGE,
    });

    setState({
      assets: res.data.items,
    });
  };
  useEffect(() => {
    (async () => {
      await getData({ page: 1 });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ mt: "100px" }}>
      <Box sx={NewestNFTStyle.titleBox}>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={NewestNFTStyle.primaryTitle}
        >
          NEWEST NFTS
        </Typography>
      </Box>

      <Grid container columnSpacing={{ sm: 3 }} className="tileview">
        {assets.map(({ id, collection, property, tokenId }) => (
          <Grid key={id} item xs={12} md={6} lg={3} xl={3}>
            <NftCards
              variant="normal_card"
              id={id}
              property={property}
              ethPrice="11.4"
              nftPrice="$810,390.00"
              onDetail={() =>
                onItemDetail(collection.contractAddress, tokenId.toString())
              }
            />
          </Grid>
        ))}
      </Grid>
      <Box className="d-flex" sx={{ justifyContent: "center" }}>
        <Link href="/explore">
          <a>
            <Button
              sx={NewestNFTStyle.exploreBtn}
              title="Explore more"
              variant="outlined"
            >
              Explore more
            </Button>
          </a>
        </Link>
      </Box>
    </Box>
  );
};

export default NewestNFT;
