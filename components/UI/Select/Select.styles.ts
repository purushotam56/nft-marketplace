import type { SxProps } from "@mui/material";
import type { Theme } from "@mui/system";

export const SelectStyle = (theme: Theme): SxProps => {
  const isLight = theme.palette.mode === "light";
  const { primary } = theme.palette;

  return {
    backgroundColor: isLight ? "primary.main" : "common.black",
    borderRadius: "2rem",
    border: `1px solid ${primary.border}`,

    "& .MuiSelect-select": {
      color: "primary.contrastText",
    },

    "& .MuiSelect-icon": {
      fill: primary.contrastText,
    },

    "& .MuiOutlinedInput-notchedOutline": {
      border: 0,
    },
  };
};
