import React, { FC } from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";

import { AssetType } from "@/types/asset";

import Image from "./Image";
import {
  ItemBox,
  ItemNavBoxStyle,
  ItemNavGrid,
  ItemDetailBackBtnStyle,
  ItemGridStyle,
  ItemImageStyle,
  ItemInfoStyle,
  GridBox,
  iconStyle,
  LinkStyle,
  NavBoxStyle,
  NavIcon,
  CircleMapImage,
  ImageInfoTextStyle,
  MainImageBox,
  ItemTableBox,
} from "./item.style";
// import ItemCarousel from "./ItemCarousel";
import ItemInfo from "./ItemInformation";
import ItemTableView from "./ItemTableView";

type Props = {
  asset: AssetType;
};

const ItemDetails: FC<Props> = ({ asset }) => {
  // console.log(asset);
  const NotMobile = useMediaQuery("(min-width:768px)");
  const ItemImage = {
    logo: asset.type.toLowerCase() === "land" ? true : false,
    type: asset.type.toLowerCase(),
    title: asset.property.name.toUpperCase(),
    size: asset.land && asset.land.type ? asset.land.type.toUpperCase() : "",
    district:
      asset.land && asset.land.group
        ? asset.land.group.split("_")[0]
          ? asset.land.group.split("_")[0].toUpperCase()
          : ""
        : "",
    mainImage: asset.property.coverUrl,
    moreImages: asset.type.toLowerCase() === "land" && [
      {
        src: "/images/lands/land1.png",
      },

      {
        src: "/images/lands/land2.png",
      },
      {
        src: "/images/lands/genesis.jpg",
      },
    ],
  };
  const pageVisited = [
    {
      link: "/explore",
      page: "NFT",
    },
    {
      link: "/explore",
      page: "NETVRK " + asset.type,
    },
    {
      link: "/explore",
      page:
        asset.land &&
        asset.land.type &&
        asset.land.type.toUpperCase() + " LAND",
    },
  ];

  return (
    <Container sx={ItemBox}>
      <Grid container sx={ItemNavBoxStyle}>
        <Grid item xs={8} sm={8} md={8} lg={8} sx={ItemNavGrid}>
          <Link href="/explore">
            <a>
              <Button sx={ItemDetailBackBtnStyle}>
                <ArrowBackIosIcon sx={ItemDetailBackBtnStyle} />
                Back TO EXPLORE
              </Button>
            </a>
          </Link>
          {NotMobile && (
            <Box sx={NavBoxStyle}>
              {pageVisited.map((page, index) => {
                return (
                  <Link key={page.page} href={page.link}>
                    <a>
                      <Typography sx={LinkStyle}>
                        {page.page}{" "}
                        {index + 1 !== pageVisited.length &&
                          pageVisited[index + 1].page &&
                          "/"}
                      </Typography>
                    </a>
                  </Link>
                );
              })}
            </Box>
          )}
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} sx={NavIcon}>
          <Box>
            <ShareIcon sx={iconStyle} />
            {/* <FavoriteBorderIcon sx={iconStyle} /> */}
          </Box>
        </Grid>
      </Grid>
      <Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box sx={GridBox}>
            <Grid container spacing={2} sx={ItemGridStyle}>
              <Grid item xs={12} sm={12} md={8} lg={8}>
                <Box sx={ItemImageStyle}>
                  <Image
                    ItemImage={ItemImage}
                    MainImageBoxStyle={MainImageBox}
                    cicleMapStyle={CircleMapImage}
                    parcelDetailsStyle={ImageInfoTextStyle}
                    netvrkLogoStyle={{ width: "80%", height: "15%" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Box sx={ItemInfoStyle}>
                  <ItemInfo asset={asset} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box sx={ItemTableBox}>
            <ItemTableView />
          </Box>
        </Grid>
      </Grid>
      {/* <Box>
        <ItemCarousel />
      </Box> */}
    </Container>
  );
};

export default ItemDetails;
