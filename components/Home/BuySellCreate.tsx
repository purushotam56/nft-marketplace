import React, { FC } from "react";

import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

import { BscStyle } from "@/components/Home/Home.styles";

const BuySellCreate: FC = () => {
  return (
    <Box>
      <Box sx={BscStyle.MainContainer}>
        <Grid container spacing={3} justifyContent="center">
          <Grid
            item
            xs={12}
            sm={4}
            className="d-flex"
            sx={{ justifyContent: "center" }}
          >
            <Box sx={BscStyle.BoxContainer}>
              <Image src="/images/buy.svg" height="100" width="100" />
              <Typography
                variant="h1"
                component="div"
                gutterBottom
                sx={BscStyle.title}
              >
                Buy
              </Typography>
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                sx={BscStyle.description}
              >
                Explore our marketplace for the latest and greatest NFTs to use
                in the Netvrk metaverse.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            className="d-flex"
            sx={{ justifyContent: "center" }}
          >
            <Box sx={BscStyle.BoxContainer}>
              <Image src="/images/sell.svg" height="100" width="100" />
              <Typography
                variant="h1"
                component="div"
                gutterBottom
                sx={BscStyle.title}
              >
                sell
              </Typography>
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                sx={BscStyle.description}
              >
                Explore our marketplace for the latest and greatest NFTs to use
                in the Netvrk metaverse.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            className="d-flex"
            sx={{ justifyContent: "center" }}
          >
            <Box sx={BscStyle.BoxContainer}>
              <Image src="/images/create.svg" height="100" width="100" />
              <Typography
                variant="h1"
                component="div"
                gutterBottom
                sx={BscStyle.title}
              >
                create
              </Typography>
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                sx={BscStyle.description}
              >
                Explore our marketplace for the latest and greatest NFTs to use
                in the Netvrk metaverse.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default BuySellCreate;
