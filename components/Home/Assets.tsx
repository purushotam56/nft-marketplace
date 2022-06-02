import React, { FC } from "react";

import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

import { AssetsStyle } from "@/components/Home/Home.styles";

export interface AssetType {
  imageUrl?: string;
  title?: string;
}

const AssetItem: FC<AssetType> = ({ imageUrl, title }) => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box sx={AssetsStyle.outerBox}>
        <Box sx={AssetsStyle.imageBox}>
          <Image src={imageUrl} layout="fill" objectFit="cover" />
          <Box sx={{ zIndex: 1 }}>
            <Typography
              variant="h1"
              component="div"
              gutterBottom
              sx={AssetsStyle.title}
            >
              {title}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const Assets: FC = () => {
  return (
    <Box>
      <Box sx={AssetsStyle.MainContainer}>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} md={2.4}>
            <AssetItem imageUrl="/images/assets/lands.png" title="LAND" />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <AssetItem
              imageUrl="/images/assets/transport.png"
              title="TRANSPORTS"
            />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <AssetItem imageUrl="/images/assets/avatars.png" title="AVATARS" />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <AssetItem
              imageUrl="/images/assets/champions.png"
              title="COMPANIONS"
            />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <AssetItem imageUrl="/images/assets/art.png" title="ART" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Assets;
