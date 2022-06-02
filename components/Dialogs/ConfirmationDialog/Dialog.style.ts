import type { SxProps } from "@mui/material";
import { Theme } from "@mui/system";

export const dialogActionBox: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  width: "100%",
};

export const dialogContentContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const titleSx: SxProps = {
  display: "flex",
  alignItems: "center",
  fontSize: ".8rem",
};

export const checkCircleIcon: SxProps = { mr: 1 };

export const ItemImage: SxProps = { width: "400px" };
export const dialogActionBoxText: SxProps = {
  textAlign: "right",
  width: "63%",
  mr: 1,
  fontSize: "1.1rem",
  fontFamily: "Play",
};

export const SocialLogo: SxProps = {
  fontSize: "1.5rem",
  width: "1.5em",
  height: "1.5em",
  // mr: "1%",
};

export const viewItem: SxProps = {
  alignContent: "center",
  marginLeft: "auto",
  padding: "7px 30px",
  borderColor: "black !important",

  ".MuiTypography-root": {
    fontFamily: "Teko",
    fontSize: "1.8rem",
    lineHeight: "43px",
    fontWeight: "500",
    letterSpacing: "0.1em",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "#3D3D3D" : "primary.gray",
  },
};

export const viewIcon: SxProps = {
  mr: 1,
  [`&.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiSvgIcon-root`]: {
    fill: (theme: Theme) =>
      theme.palette.mode === "light" ? "#3D3D3D" : "primary.gray",
    fontSize: "32px",
  },
};

export const itemTitleText: SxProps = {
  fontFamily: "Teko",
  fontWeight: "500",
  letterSpacing: "0.08rem",
  fontSize: "44px",
  color: (theme: Theme) =>
    theme.palette.mode === "light" ? "#3D3D3D" : "primary.gray",
};

export const cicleMapStyle: SxProps = {
  height: "110px",
  width: "110px",
  border: "2px solid white",
  borderRadius: "50%",
};

export const parcelDetailsStyle: SxProps = {
  color: "white",
  fontFamily: "Teko",
  fontWeight: "400",
  fontSize: ".9rem",
  lineHeight: ".7rem",
  marginBottom: "3px",
  letterSpacing: "0.085rem",
};

export const netvrkLogoStyle: SxProps = { width: "40%", height: "10%" };
export const dialogStyle: SxProps = {
  maxWidth: "100%",
  ".MuiDialog-container": {
    "> .MuiDialog-paper": {
      maxWidth: "830px",
      minWidth: "830px",
      borderRadius: "10px",
    },
  },

  "& .MuiPaper-root": {
    borderRadius: "6px",

    "& .MuiCardMedia-media + .MuiBox-root": {
      borderRadius: "6px",
    },
  },
};

export const detailListHolder: SxProps = {
  margin: "20px 0",
};

export const detailList: SxProps = {
  display: "flex",
  alignItems: "start",
};
export const detailKey: SxProps = {
  fontFamily: "Play",
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "18px",
  color: "#A29DB0",
  width: "100%",
};
export const detailValue: SxProps = {
  fontFamily: "Play",
  fontSize: "22px",
  // pl: "2px",
  fontWeight: "700",
  //   fontSize: "1em",
  lineHeight: "22px",
  color: "#A29DB0",
  textAlign: "right",
};
