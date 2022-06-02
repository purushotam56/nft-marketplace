import React, { FC } from "react";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

import { TopCollectionStyle } from "@/components/Home/Home.styles";
import Button from "@/components/UI/Button";

export interface CollectionItemType {
  id: number;
  name: string;
  imageUrl: string;
  price?: string;
  volume?: string;
  variationType?: string;
  variationValue?: string;
}

export interface Collection {
  collectionItem: CollectionItemType;
  incNumber?: string;
}

const CollectionItem: FC<Collection> = ({ incNumber, collectionItem }) => {
  return (
    <Box className="d-flex" sx={TopCollectionStyle.dataBox}>
      <Box sx={TopCollectionStyle.numberBox}>
        <Typography
          variant="h1"
          component="div"
          gutterBottom
          sx={TopCollectionStyle.numberText}
        >
          {incNumber}
        </Typography>
      </Box>
      <Box sx={TopCollectionStyle.itemInfo}>
        <Grid container spacing={1} className="align-items-center">
          <Grid item xs={12} md={8}>
            <Box className="d-flex align-items-center">
              <Image src={collectionItem.imageUrl} height="53" width="53" />
              <Typography
                className="m-l"
                variant="h1"
                component="div"
                gutterBottom
                sx={TopCollectionStyle.itemTitle}
              >
                {collectionItem.name}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className="d-flex align-items-center justify-content-between">
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  className="price"
                  variant="h1"
                  component="div"
                  gutterBottom
                  sx={TopCollectionStyle.itemTitle}
                >
                  {collectionItem.price}
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  gutterBottom
                  sx={TopCollectionStyle.grayText}
                >
                  Floor
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  className="volume"
                  variant="h1"
                  component="div"
                  gutterBottom
                  sx={TopCollectionStyle.itemTitle}
                >
                  {collectionItem.volume}
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  gutterBottom
                  sx={TopCollectionStyle.grayText}
                >
                  Total Volume
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center", mr: "25px" }}>
                <Typography
                  className={
                    collectionItem.variationType == "up"
                      ? "green-text"
                      : "red-text"
                  }
                  variant="h1"
                  component="div"
                  gutterBottom
                  sx={TopCollectionStyle.itemTitle}
                >
                  {collectionItem.variationType == "up" ? (
                    <ArrowDropUpIcon sx={{ fontSize: 25 }} />
                  ) : (
                    <ArrowDropDownIcon sx={{ fontSize: 25 }} />
                  )}{" "}
                  {collectionItem.variationValue}
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  gutterBottom
                  sx={TopCollectionStyle.grayText}
                >
                  24h Vol %
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const TopCollections: FC = () => {
  const collection = {
    id: 1313,
    name: "Angry Ape Army",
    imageUrl: "/images/collections/angry_ape_army.png",
    price: "$8,309",
    volume: "$500,897",
    variationType: "up",
    variationValue: "245%",
  };

  return (
    <Box sx={{ mt: "100px" }}>
      <Box sx={TopCollectionStyle.titleBox}>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={TopCollectionStyle.primaryTitle}
        >
          TOP COLLECTIONS
        </Typography>
        <Typography
          variant="h6"
          component="div"
          gutterBottom
          sx={TopCollectionStyle.blueTitle}
        >
          TODAY
          <KeyboardArrowDownIcon fontSize="large" sx={{}} />
        </Typography>
      </Box>
      <CollectionItem incNumber="01" collectionItem={collection} />
      <CollectionItem incNumber="02" collectionItem={collection} />
      <CollectionItem incNumber="03" collectionItem={collection} />
      <CollectionItem incNumber="04" collectionItem={collection} />
      <Box className="d-flex" sx={{ justifyContent: "center" }}>
        <Link href="/collections">
          <a>
            <Button
              title="View All Collections"
              variant="outlined"
              sx={TopCollectionStyle.exploreBtn}
            />
          </a>
        </Link>
      </Box>
    </Box>
  );
};

export default TopCollections;
