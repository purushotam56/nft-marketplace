import { FC } from "react";
import * as React from "react";

import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

import { NoLandStyle } from "./noLand.styles";

const NoLand: FC = () => {
  const onOpensea = () => {
    window.open("https://opensea.io/collection/netvrkland", "_blank");
  };

  return (
    <Box>
      <Box className="align-items-center">
        <Typography
          variant="h2"
          sx={NoLandStyle.title_h2}
          className="d-flex align-items-center"
        >
          <ErrorOutlineOutlinedIcon /> You do not own any Netvrk land.
        </Typography>
        <Typography sx={NoLandStyle.sub_heading}>
          Head to OpenSea to purchase a parcel!
        </Typography>
        <Box
          sx={{ marginTop: "20px", display: "inline-block", cursor: "pointer" }}
        >
          <Image
            src="/images/opensea.png"
            height={107}
            width={302}
            onClick={onOpensea}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default NoLand;
