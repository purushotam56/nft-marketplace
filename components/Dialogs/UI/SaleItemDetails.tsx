import React from "react";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

import ImageComponent from "@/components/ItemDetails/Image";
import ETHLogo from "public/images/ethLogo.svg";

import {
  DailogContentStyle,
  CircleMapImage,
  ImageInfoTextStyle,
} from "./Dialog.style";
import { SaleItemProps } from "./Type";

const SaleItemDetails = (props: SaleItemProps) => {
  const dialogContent = { ...props };

  return (
    <>
      <Box>
        <Box
          sx={DailogContentStyle.dailogTopBar}
          className="d-flex justify-content-between font-play"
        >
          <Box>
            <Typography>ITEM</Typography>
          </Box>
          <Box>
            <Typography>SUBTOTAL</Typography>
          </Box>
        </Box>
        <Box
          className="d-flex justify-content-between align-items-center"
          sx={DailogContentStyle.media}
        >
          <Box className="d-flex justify-content-between align-items-center">
            <Box sx={DailogContentStyle.NFTthumbnail}>
              <ImageComponent
                ItemImage={dialogContent.ItemImage}
                cicleMapStyle={CircleMapImage}
                parcelDetailsStyle={ImageInfoTextStyle}
                netvrkLogoStyle={{ width: "50%", height: "10%" }}
              />
            </Box>
            <Box sx={DailogContentStyle.mediaBody}>
              <Typography
                sx={DailogContentStyle.mediaSubTitle}
                className="font-play"
              >
                {dialogContent.land}
              </Typography>
              <Typography
                sx={DailogContentStyle.mediaTitle}
                className="font-teko"
              >
                {dialogContent.ItemImage.title}
              </Typography>
            </Box>
          </Box>
          <Box className="font-teko">
            <Typography variant="h4" sx={DailogContentStyle.priceStyle}>
              <Image src={ETHLogo} height="25%" width="30%" />
              {dialogContent.princETH}
            </Typography>
            <Typography sx={DailogContentStyle.priceSubStyle}>
              (${dialogContent.priceDollar})
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SaleItemDetails;
