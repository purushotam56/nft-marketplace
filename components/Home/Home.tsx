import React, { FC } from "react";

import { Container } from "@mui/material";
import { Box } from "@mui/system";

import Assets from "@/components/Home/Assets";
import BuySellCreate from "@/components/Home/BuySellCreate";
import NetvrkVideo from "@/components/Home/NetvrkVideo";
import NewestNFT from "@/components/Home/NewestNFT";
import TopBanner from "@/components/Home/TopBanner";
import TopCollections from "@/components/Home/TopCollections";
import TopLands from "@/components/Home/TopLands";

const HomePage: FC = () => {
  return (
    <Box>
      <TopBanner />
      <Container maxWidth={false} sx={{ maxWidth: "1080px" }}>
        <TopCollections />
        <TopLands />
        <Assets />
        <NewestNFT />
        <BuySellCreate />
        <NetvrkVideo />
      </Container>
    </Box>
  );
};

export default HomePage;
