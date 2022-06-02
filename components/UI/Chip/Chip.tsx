import React from "react";

import { Close as CloseIcon } from "@mui/icons-material";
import type { SxProps } from "@mui/material";
import { Chip as MUIChip } from "@mui/material";
import type { SystemStyleObject, Theme } from "@mui/system";

import { ChipStyle } from "@/components/UI/Chip/Chip.styles";
import type { ChipType } from "@/components/UI/Chip/Chip.types";

const Chip = (props: ChipType) => {
  const { sx = {}, ...rest } = props;

  const ChipStyles: SxProps<Theme> = (theme) => {
    const style = ChipStyle(theme);

    return { ...style, ...sx } as SystemStyleObject;
  };

  return <MUIChip sx={ChipStyles} deleteIcon={<CloseIcon />} {...rest} />;
};

export default Chip;
