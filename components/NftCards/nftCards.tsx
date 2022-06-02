import React, { Fragment } from "react";

import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Typography, Box, CardActions } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Image from "next/image";

import Button from "@/components/UI/Button";

import { NftCardsStyle } from "./nftCards.styles";
import { NftCardsType } from "./nftCards.types";

const NftCards = (props: NftCardsType) => {
  const {
    id,
    variant,
    property,
    ethPrice,
    nftPrice,
    isSmallListType,
    onDetail,
    onStake,
    onUnstake,
    // onListForRent,
    status,
  } = props;

  const handleStake = (e: React.MouseEvent) => {
    e.stopPropagation();

    onStake();
  };

  const handleUnstake = (e: React.MouseEvent) => {
    e.stopPropagation();

    onUnstake();
  };

  return (
    <Card sx={NftCardsStyle.card} key={id} onClick={onDetail}>
      <Box sx={NftCardsStyle.cardImage}>
        <CardMedia component="img" image={property.coverUrl} alt="image" />
        {["normal_card", "button_card"].includes(variant) && (
          <Box sx={NftCardsStyle.cardCaption}>
            <Box sx={NftCardsStyle.cardSmallLogo}>
              <Image
                src="/images/explorer/netvrk_card_logo.png"
                alt="Maplogo"
                width={35}
                height={8}
                layout="fixed"
              />
            </Box>

            <Grid container sx={NftCardsStyle.cardCaptionText}>
              <Grid item xs={4}>
                <Typography
                  sx={{
                    fontSize: "9px",
                    color: "white",
                    fontFamily: "Teko",
                    letterSpacing: "0.1em",
                    fontWeight: "400",
                  }}
                >
                  PARCEL#64 DISTRICT:BUSINESS SIZE:MEGA
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Image
                    src="/images/explorer/mini-map.png"
                    alt="MiniMap"
                    width={isSmallListType ? 42 : 66}
                    height={isSmallListType ? 42 : 66}
                    layout="fixed"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
        {variant === "ethereum_card" && (
          <Fragment>
            <Box sx={NftCardsStyle.EthariumPriceNow}>
              <Image
                src="/images/Ethereum_Icon.svg"
                alt="Ethereum_Icon"
                width={11}
                height={13}
                layout="fixed"
              />
              175
            </Box>
            <Box sx={NftCardsStyle.EthariumPriceLast}>
              Last
              <Image
                src="/images/Ethereum_Icon.svg"
                alt="Ethereum_Icon"
                width={7}
                height={9}
                layout="fixed"
              />
              99
            </Box>
          </Fragment>
        )}
      </Box>
      <CardContent
        sx={NftCardsStyle.cardContent}
        className={isSmallListType ? "smallViewCard" : "largeViewCard"}
      >
        {["normal_card", "button_card"].includes(variant) && (
          <Grid container>
            <Grid item xs={12} md={variant === "normal_card" ? 8 : 12}>
              <Box className="d-flex align-items-end">
                <Avatar alt="Pic" src="/images/logo-icon.svg" />
                <Box component="div">
                  <Typography
                    variant="h4"
                    component="div"
                    sx={NftCardsStyle.cardTitle}
                  >
                    {property.name}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={NftCardsStyle.cardSubTitle}
                  >
                    {property.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            {variant === "normal_card" && (
              <Grid
                item
                xs={12}
                md={4}
                sx={{ textAlign: "right", lineHeight: "1" }}
              >
                <Typography
                  variant="h5"
                  component="span"
                  sx={NftCardsStyle.ethprice}
                  className={
                    isSmallListType ? "smallViewCard" : "largeViewCard"
                  }
                >
                  <Image src="/images/eth_price.png" height={16} width={16} />{" "}
                  {ethPrice}
                </Typography>
                <Typography
                  variant="h6"
                  component="span"
                  sx={NftCardsStyle.price}
                >
                  {nftPrice}
                </Typography>
              </Grid>
            )}
          </Grid>
        )}
        {variant === "ethereum_card" && (
          <Box sx={NftCardsStyle.searchCardContent}>
            <Typography sx={NftCardsStyle.searchCardTitle} variant="h3">
              Beach Front Parcel #20398
            </Typography>
            <Grid container>
              <Grid item md={7} sx={NftCardsStyle.searchCardOwner}>
                <span>Owner</span> NetVRk Properties
              </Grid>
              <Grid item md={5} sx={NftCardsStyle.searchCardTime}>
                24 MINUTES LEFT
              </Grid>
            </Grid>
          </Box>
        )}
      </CardContent>
      {variant === "button_card" && (
        <Fragment>
          {status === "none" ? (
            <CardActions>
              <Button
                color="primary"
                startIcon={<LockOutlinedIcon />}
                title="STAKE"
                sx={NftCardsStyle.stakeButton}
                onClick={handleStake}
              />
            </CardActions>
          ) : status === "active" ? (
            <CardActions>
              <Button
                variant="danger-filled"
                startIcon={<LockOpenOutlinedIcon />}
                title="UNSTAKE"
                sx={NftCardsStyle.stakeButton}
                onClick={handleUnstake}
              />
              {/* <Button
                variant="outlined"
                startIcon={
                  <Image
                    src="/images/list-rent.svg"
                    alt="Maplogo"
                    width={isSmallListType ? 18 : 20}
                    height={isSmallListType ? 18 : 20}
                    layout="fixed"
                  />
                }
                title="List for Rent"
                sx={NftCardsStyle.stakeButton}
                onClick={onListForRent}
              /> */}
            </CardActions>
          ) : (
            <></>
          )}
        </Fragment>
      )}
    </Card>
  );
};

export default NftCards;
