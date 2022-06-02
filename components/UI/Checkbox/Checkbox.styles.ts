import type { SxProps } from "@mui/material";
import type { Theme } from "@mui/system";

export const CheckboxStyle = (theme: Theme): SxProps => {
  const isLight = theme.palette.mode === "light";

  return {
    display: "inline-flex",
    alignItems: "center",
    color: isLight ? "primary.border" : "secondary.border",

    " + .MuiFormControlLabel-label": {
      color: isLight ? "primary.contrastText" : "primary.gray",
      fontFamily: "Play",
    },

    "&.Mui-checked": {
      color: isLight ? "blue.border" : "blue.main",

      "+ .MuiFormControlLabel-label": {
        fontWeight: "700",
        fontFamily: "Play",
        color: isLight ? "primary.darker" : "common.white",
      },

      ".MuiSvgIcon-root": {
        fontWeight: "700",
        fontFamily: "Play",
        color: isLight ? "blue.border" : "blue.main",
      },
    },
  };
};
