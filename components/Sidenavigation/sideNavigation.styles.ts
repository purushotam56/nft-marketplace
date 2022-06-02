import { Theme } from "@mui/system";

import { SxStyles } from "@/types/types";

export const SideNavigationStyle: SxStyles = {
  sideNav: {
    maxWidth: "359px",
    width: "359px",
    overflowX: "hidden",
    overflowY: "scroll",
    position: "relative",
    backgroundColor: (theme: Theme) =>
      theme.palette.mode === "light" ? "common.white" : "common.black",

    "&::-webkit-scrollbar": {
      width: "15px",
    },

    "&::-webkit-scrollbar-track": {
      backgroundColor: (theme: Theme) =>
        theme.palette.mode === "light" ? "primary.border" : "common.black",
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: (theme: Theme) =>
        theme.palette.mode === "light" ? "primary.main" : "secondary.gray",
      borderRadius: "10px",
      border: "3px solid",
      borderColor: (theme: Theme) =>
        theme.palette.mode === "light" ? "primary.border" : "common.black",
    },

    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: (theme: Theme) =>
        theme.palette.mode === "light" ? "primary.main" : "secondary.gray",
    },

    "@media only screen and (max-width: 600px)": {
      position: "fixed",
      width: "100%",
      maxWidth: "inherit",
      zIndex: "1",
      bottom: "0",
      overflow: "inherit",
    },
  },

  MobileTitle: {
    backgroundColor: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.main" : "primary.lighter",
    border: (theme: Theme) => `1px solid ${theme.palette.primary.border}`,
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.contrastText" : "common.white",
    fontFamily: "Teko",
    fontSize: "28px",
    padding: "11px 30px",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    fontWeight: "500",
    display: "none",
    "@media only screen and (max-width: 600px)": {
      display: "flex",
      position: "sticky",
      top: "0",
      zIndex: "2",
    },
  },

  ExpandIcon: { marginLeft: "auto", transform: "rotate(180deg)" },

  ExpandOpenIcon: {
    marginLeft: "auto",
    lineHeight: "1px",
  },

  sideNavContent: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  checkboxLabel: {
    fontSize: "16px",
    fontWeight: "400",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.contrastText" : "primary.gray",
  },

  priceSelect: {
    width: "100%",
    ".MuiSelect-select": {
      padding: "12px 14px",

      "> .MuiBox-root": {
        fontSize: "20px",
        lineHeight: "23px",
        fontWeight: "700",

        ".MuiSvgIcon-root": {
          fontSize: "20px",
        },
      },
    },
  },

  priceTextField: {
    ".MuiInputBase-root": {
      borderRadius: "50px",
      ".MuiInputBase-input": {
        padding: "12.5px 20px",
        fontFamily: "Play",
        fontSize: "20px",
        backgroundColor: (theme: Theme) =>
          theme.palette.mode === "light" ? "common.white" : "common.black",

        "+ .MuiOutlinedInput-notchedOutline": {
          borderColor: (theme: Theme) =>
            theme.palette.mode === "light"
              ? "primary.border"
              : "primary.border",
        },
      },
    },
  },
};
