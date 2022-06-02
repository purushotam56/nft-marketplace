import React, { FC } from "react";

import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

import { TopBannerStyle } from "@/components/Home/Home.styles";
import Button from "@/components/UI/Button";

const TopBanner: FC = () => {
  return (
    <Box sx={TopBannerStyle.MainContainer}>
      <Container maxWidth={false} sx={{ maxWidth: "1080px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <Box sx={TopBannerStyle.leftBox}>
              <Typography
                variant="h1"
                component="div"
                gutterBottom
                sx={TopBannerStyle.mainTitle}
              >
                Enter the Metaverse
              </Typography>
              <Typography
                variant="h1"
                component="div"
                gutterBottom
                sx={TopBannerStyle.subTitle}
              >
                Buy, sell, and create NFTs for experiencing the Netvrk
                Metaverse.
              </Typography>
              <Link href="/explore">
                <a>
                  <Button title="EXPLORE" sx={TopBannerStyle.exploreBtn} />
                </a>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Box sx={TopBannerStyle.rightBox}>
              <Box sx={TopBannerStyle.overLayBox}>
                <Image
                  src="/images/army_evolution.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Box sx={{ mt: "23px" }}>
                <Box sx={{ float: "left" }}>
                  <Image
                    src="/images/collections/angry_ape_army.png"
                    height="53"
                    width="53"
                  />
                </Box>
                <Box sx={{ float: "left", ml: "21px" }}>
                  <Typography
                    variant="h1"
                    component="div"
                    gutterBottom
                    sx={TopBannerStyle.collectionMainTitle}
                  >
                    Angry Ape Army Evolution #8842
                  </Typography>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    sx={TopBannerStyle.collectionSubTitle}
                  >
                    IFD055
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TopBanner;
