import { Theme } from "@mui/system";

import { SxStyles } from "@/types/types";
export const NftCardsStyle: SxStyles = {
  card: {
    backgroundColor: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.main" : "common.black",
    backgroundImage: "none",
    border: "1px solid",
    borderColor: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.main" : "common.black",
    boxShadow: "none",
    borderRadius: "10px",
    marginBottom: "30px",
    cursor: "pointer",
  },

  cardImage: {
    position: "relative",
    backgroundColor: "#000000",
  },

  cardSmallLogo: {
    lineHeight: "0",
  },
  cardCaption: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    top: "0",
    padding: "5px 8px",
  },

  cardCaptionText: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    margin: "0",
    alignItems: "end",
  },

  EthariumPriceNow: {
    padding: "0px 10px",
    lineHeight: "28px",
    position: "absolute",
    right: "0",
    bottom: "32px",
    fontSize: "22px",
    color: "#ffffff",
    fontWeight: "700",
    borderRadius: "40px 0px 0px 40px",
    backgroundColor: "#5A33BE",
    boxShadow:
      "0px 0px 20px rgba(0, 0, 0, 0.25), inset 0px 0px 20px rgba(0, 0, 0, 0.4)",

    span: {
      marginRight: "3px !important",
    },
  },

  EthariumPriceLast: {
    padding: "0px 10px",
    position: "absolute",
    right: "0",
    bottom: "10px",
    fontSize: "14px",
    color: "#ffffff",
    fontWeight: "700",
    backgroundColor: "#0074FC",
    borderRadius: "40px 0px 0px 40px",
    boxShadow:
      "0px 0px 20px rgba(0, 0, 0, 0.25), inset 0px 0px 20px rgba(0, 0, 0, 0.4)",

    span: {
      marginRight: "3px !important",
      marginLeft: "3px !important",
    },
  },

  cardContent: {
    display: "flex",
    alignItems: "end",
    padding: "10px !important",

    "&.smallViewCard": {
      padding: "10px 10px 2px",
    },

    ".MuiAvatar-root": {
      height: "25px",
      width: "25px",
      border: "1px solid #E4E1EB",
      padding: "3px",
      backgroundColor: "#ffffff",
    },

    "+ .MuiCardActions-root": {
      padding: "10px 8px",
      display: "flex",
      flexDirection: "column",

      ".MuiButton-root": {
        marginBottom: "7px",
      },
    },
  },

  searchCardTitle: {
    fontSize: "26px",
    fontFamily: "Teko",
    fontWeight: "500",
  },

  searchCardOwner: {
    fontSize: "10px",
    fontFamily: "Play",
    fontWeight: "400",
    color: "#0074FC",
    span: {
      color: "#787878",
    },
  },

  searchCardTime: {
    fontSize: "10px",
    fontFamily: "Play",
    fontWeight: "400",
    color: "#FF60EF",
    textAlign: "right",
  },

  cardTitle: {
    fontFamily: "Teko",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.darker" : "common.white",
    fontSize: "18px",
    lineHeight: "1",
    marginLeft: "5px",
    fontWeight: "500",
  },

  cardSubTitle: {
    fontFamily: "Teko",
    color: "#4FB0FF",
    fontSize: "10px",
    lineHeight: "9px",
    marginLeft: "5px",
    fontWeight: "700",
  },

  ethprice: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "1",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.darker" : "common.white",
    textAlign: "right",
    display: "inline-block",

    "&.smallViewCard": {
      fontSize: "18px",
    },

    "& img": {
      width: "14px !important",
      height: "14px !important",
    },
  },

  price: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "10px",
    lineHeight: "1",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.contrastText" : "primary.gray",
    textAlign: "right",
    display: "flex",
    justifyContent: "end",
  },

  stakeButton: {
    width: "100%",
    height: "43.8px",

    ".MuiButton-startIcon svg": {
      fontSize: "23px",
    },

    ".MuiTypography-root": {
      fontFamily: "Teko",
      fontSize: "22px",
      fontWeight: "500",
      transform: "translateY(1px)",
    },
  },
};
