import { Theme } from "@mui/system";

import { SxStyles } from "@/types/types";

export const NoLandStyle: SxStyles = {
  title_h2: {
    fontFamily: "Teko",
    fontSize: "44px",
    fontWeight: "500",
    lineHeight: "1",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.darker" : "common.white",

    ".MuiSvgIcon-root": {
      fontSize: "44px",
      marginRight: "5px",
    },
  },

  sub_heading: {
    fontFamily: "Play",
    fontSize: "20px",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.darker" : "primary.gray",
  },
};
