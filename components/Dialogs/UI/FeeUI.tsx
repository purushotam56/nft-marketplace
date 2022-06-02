import React from "react";

import { Box, Typography } from "@mui/material";

import { DailogContentStyle } from "@/components/Dialogs/UI//Dialog.style";

import HelpLabel from "./HelpLabel";

const FeeUI = (props) => {
  const { label, value, subValue } = props;
  return (
    <Box className="d-flex justify-content-between" sx={{ mb: "8px" }}>
      <Box
        sx={DailogContentStyle.formLabel}
        className="font-play d-flex align-items-center"
      >
        <HelpLabel label={label} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
        className="font-play d-flex"
      >
        <Typography sx={DailogContentStyle.formValue}>{value}</Typography>
        {subValue && (
          <Typography sx={DailogContentStyle.formSubValue}>
            {subValue}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default FeeUI;
