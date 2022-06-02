import type { SxProps } from "@mui/material";
import type { Theme } from "@mui/system";

export const ChipStyle = (theme: Theme): SxProps => {
  const isLight = theme.palette.mode === "light";
  const { primary, blue } = theme.palette;

  return {
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.05em",
    color: isLight ? "primary.contrastText" : "common.white",
    backgroundColor: isLight ? "primary.main" : "blue.darker",
    borderRadius: "2rem",
    padding: "0.34rem 1rem",
    minWidth: 0,
    border: `1px solid ${isLight ? primary.border : blue.lighter}`,
    height: "auto",

    "& .MuiChip-label": {
      fontFamily: "Play",
      fontSize: "14.51px",
      fontWeight: "700",
      lineHeight: "14px",
      paddingLeft: 0,
    },

    "& .MuiSvgIcon-root": {
      color: isLight ? "primary.contrastText" : "blue.lighter",
      marginRight: 0,

      "&:hover": {
        color: isLight ? "primary.contrastText" : "blue.lighter",
      },
    },
  };
};
