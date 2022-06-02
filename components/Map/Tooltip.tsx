import React from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Typography, Stack } from "@mui/material";

import Button from "@/components/UI/Button";
import UserSvg from "public/images/user.svg";

import { TooltipStyle } from "./Map.styles";

const Tooltip = () => {
  return (
    <Box
      id="new-land-tooltip"
      sx={TooltipStyle.BoxStyle}
      className="new-land-tooltip"
    >
      <Stack spacing={3}>
        <Box sx={TooltipStyle.StackItem}>
          <Box>
            <Box component="span" sx={{ display: "inline-block" }}>
              The Key
            </Box>
            <Box component="span" sx={TooltipStyle.location}>
              <Typography sx={TooltipStyle.KeyText}>
                <LocationOnIcon sx={TooltipStyle.locationIcon} /> 29,11
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={TooltipStyle.StackItem}>
          <Box>
            <Typography sx={TooltipStyle.GrayTitle}>OWNER</Typography>
            <Box component="span" sx={{ display: "inline-block" }}>
              <Button icon={UserSvg} iconSize="15" />
            </Box>
            <Box component="span" sx={{ display: "inline-block", ml: 1 }}>
              <Typography variant="body1" id="new-land-tooltip__land">
                {" "}
                AddMe
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={TooltipStyle.StackItem}>
          <Box>
            <Typography id="new-land-tooltip__land" sx={TooltipStyle.GrayTitle}>
              PRICE
            </Typography>
            <Typography component="span">250,000</Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Tooltip;
