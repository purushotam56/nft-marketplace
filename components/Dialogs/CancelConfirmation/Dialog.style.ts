import type { SxProps } from "@mui/material";
// import { Theme } from "@mui/system";

export const mainCoantiner: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
};
export const underlineText: SxProps = {
  textDecoration: "underline",
  cursor: "pointer",
};

export const dialogContainer: SxProps = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
};
export const dialogActionBox: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
};

export const dialogContentContainer: SxProps = {
  display: "flex",
  mt: "1%",
  width: "80%",
  flexDirection: "column",
  alignItems: "center",
};

export const iconTagTransform: SxProps = { transform: "rotate(80deg)" };
export const titleSx: SxProps = {
  display: "flex",
  alignItems: "center",
};

export const boxOverlay: SxProps = {
  bgcolor: "#FAF9FD",
  position: "absolute",
  height: "15%",
  width: "90%",
  opacity: 0.9,
};
export const btnText: SxProps = {
  bgcolor: "#FF6767",
  color: "white",
  padding: "12px 30px",
  fontSize: "1.5rem",
  display: "flex",
  alignItems: "center",
  fontWeight: "500",
  fontFamily: "Teko",
  [`.MuiTypography-root`]: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.5rem",
    fontWeight: "500",
    fontFamily: "Teko",
  },
  ".MuiSvgIcon-root": {
    fontSize: "2rem",
  },
};

export const cancelDialogText: SxProps = {
  fontWeight: "500",
  fontFamily: "Teko",
  lineHeight: "1em",
  fontSize: "2rem",
  color: "#3D3D3D",
  mt: "2%",
  textAlign: "center",
  mb: "2%",
};

export const cancelDialogTextSecondary: SxProps = {
  fontFamily: "Play",
  fontWeight: "400",
  fontSize: "1.2rem",
  textAlign: "center",
  color: "#A29DB0",
};
export const dialogStyle: SxProps = {
  maxWidth: "100%",
  ".MuiDialog-container": {
    "> .MuiDialog-paper": {
      maxWidth: "830px",
      minWidth: "830px",
      borderRadius: "10px",

      ".MuiDialogContent-root": {
        //minHeight: "650px",
        "> .MuiContainer-root": {
          minHeight: "340px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: "1",
          ".MuiSvgIcon-root": {
            fontSize: "33px",
          },
        },
      },
    },
  },
};

export const DiscardBtn: SxProps = {
  padding: "12px 30px",
  // width: "0%",
  [`.MuiTypography-root`]: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.5rem",
    // width: "100%",
    fontWeight: "500",
    fontFamily: "Teko",
    letterSpacing: "0.09rem",
  },
  ".MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium": {
    fontSize: "1.5rem",
  },
  ".MuiSvgIcon-root": {
    fontSize: "1.5rem",
  },
  mt: "5%",
  mb: "5%",
};
