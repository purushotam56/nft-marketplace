import React from "react";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";

import Images from "./Image";
import { ItemCarouselStyle } from "./item.style";
import "react-multi-carousel/lib/styles.css";

const ItemCard = (props) => {
  const ImageData = {
    ...props.image,
  };
  return (
    <Box sx={ItemCarouselStyle.cardContainer}>
      <Card sx={ItemCarouselStyle.card}>
        <Box sx={ItemCarouselStyle.cardImage}>
          <Images
            ItemImage={ImageData}
            cicleMapStyle={ItemCarouselStyle.CircleMapImage}
            parcelDetailsStyle={ItemCarouselStyle.ImageInfoTextStyle}
            MainImageBoxStyle={ItemCarouselStyle.MainImageBox}
            netvrkLogoStyle={{ width: "40%", height: "10%" }}
          />
        </Box>
        <CardContent sx={ItemCarouselStyle.cardContent}>
          <Avatar alt="Pic" src="/images/logo-icon.svg" />
          <Grid container>
            <Grid item xs={6} md={6}>
              <Box component={"div"}>
                <Typography
                  variant="h4"
                  component="div"
                  sx={ItemCarouselStyle.cardTitle}
                >
                  Parcel #64
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={ItemCarouselStyle.cardSubTitle}
                >
                  Netvrk
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h5"
                component="span"
                sx={ItemCarouselStyle.price}
              >
                $342,189
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ItemCard;
