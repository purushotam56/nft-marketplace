import { Theme } from "@mui/system";

import { SxStyles } from "@/types/types";

export const StakingStyle: SxStyles = {
  wrapper: {
    backgroundColor: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.border" : "common.black",
    position: "relative",
  },

  contentArea: {
    width: "calc(100% - 346px)",
    padding: "25px 10px 25px 30px",
    borderTopLeftRadius: "20px",
    backgroundColor: (theme: Theme) =>
      theme.palette.mode === "light" ? "common.white" : "primary.main",
    marginTop: "-30px",
    marginLeft: "0px",
    minHeight: "calc(100vh - 632px)",
    "@media only screen and (max-width: 600px)": {
      width: "100%",
      padding: "25px 20px 25px 20px",
    },
  },

  subHeader: {},

  title_h2: {
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.contrastText" : "common.white",
    fontSize: "24px",
  },

  filter_title: {
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.contrastText" : "primary.gray",
    fontSize: "14px",
    letterSpacing: "0.1em",
    marginTop: "10px",
    marginBottom: "7px",
    textTransform: "uppercase",
  },

  chipHolder: {
    "@media only screen and (max-width: 600px)": {
      overflowX: "auto",
      maxHeight: "50px",
      whiteSpace: "nowrap",
    },
    ".MuiChip-root": {
      display: "inline-flex",
      marginRight: "8px",
      marginBottom: "8px",
    },
  },

  clearFilter_btn: {
    display: "inline-flex",
    textTransform: "capitalize",
    fontSize: "14.51px",
    background: "transparent",
    boxShadow: "none",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.contrastText" : "primary.gray",
    fontWeight: "700",
    padding: "0.28rem 1rem",
    marginBottom: "8px",

    "&.mobileClearFilter-btn": {
      marginBottom: "8px",
      marginTop: "8px",
      display: "none",
      border: "none",
    },

    "@media only screen and (max-width: 600px)": {
      display: "none",

      "&.mobileClearFilter-btn": {
        marginBottom: "8px",
        marginTop: "8px",
        display: "flex",
      },
    },

    ".CCButton-text": {
      marginLeft: "7px",
    },
    ".MuiButton-startIcon": {
      height: "13px",
      width: "14px",

      "svg path": {
        fill: (theme: Theme) =>
          theme.palette.mode === "light"
            ? theme.palette.primary.contrastText
            : theme.palette.primary.gray,
      },
    },
  },

  filterIconHolder: {
    marginRight: "20px",
    "@media only screen and (max-width: 600px)": {
      marginRight: "0px",
    },

    "& .MuiButton-root": {
      borderWidth: "0px",
      padding: "0px",
      background: "transparent",

      "&:hover": {
        backgroundColor: "transparent",
      },

      "& .MuiButton-startIcon": {
        "& .MuiSvgIcon-root": {
          fontSize: "38px",
        },
      },
    },
  },

  listView: {
    marginRight: "10px",

    "@media only screen and (max-width: 600px)": {
      display: "none !important",
    },

    "svg rect": {
      fill: (theme: Theme) =>
        theme.palette.mode === "light"
          ? theme.palette.primary.border
          : theme.palette.primary.gray,
    },
    "&.selected": {
      "svg rect": {
        fill: (theme: Theme) =>
          theme.palette.mode === "light"
            ? theme.palette.primary.contrastText
            : theme.palette.common.white,
      },
    },
  },

  tileView: {
    "@media only screen and (max-width: 600px)": {
      display: "none !important",
    },

    "svg path": {
      fill: (theme: Theme) =>
        theme.palette.mode === "light"
          ? theme.palette.primary.border
          : theme.palette.primary.gray,
    },
    "&.selected": {
      "svg path": {
        fill: (theme: Theme) =>
          theme.palette.mode === "light"
            ? theme.palette.primary.contrastText
            : theme.palette.common.white,
      },
    },
  },

  cardHolder: {
    display: "flex",
    alignContent: "top",
    justifyContent: "space-around",
    marginTop: "22px",
    flexWrap: "wrap",

    "@media only screen and (max-width: 600px)": {
      ".tileview": {
        justifyContent: "center",
      },
    },

    "& > .MuiGrid-container ": {
      "& > div": {
        maxWidth: "300px !important",
        transition: "all 0.3s linear",
      },

      "&.listview": {
        "& > div": {
          maxWidth: "185px !important",
          transition: "all 0.3s linear",

          "@media only screen and (max-width: 600px)": {
            maxWidth: "170px !important",
            margin: "0px 0.15rem",
          },

          "& .MuiButton-root": {
            height: "29px",
            lineHeight: "29px",
            padding: "0 0.5rem",

            "& .MuiButton-startIcon svg": { height: "19px" },
            "& .MuiTypography-root": { fontSize: "20px", marginBottom: "-5px" },
          },
        },
      },
    },
  },

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
  },

  cardImage: {
    position: "relative",
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

  cardContent: {
    display: "flex",
    alignItems: "end",
    paddingBottom: "2px",

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

  cardTitle: {
    fontFamily: "Teko",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.darker" : "common.white",
    fontSize: "18px",
    lineHeight: "12.89px",
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
