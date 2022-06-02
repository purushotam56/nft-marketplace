import type { SxProps } from "@mui/material";

export const mainContainer: SxProps = {
  display: "flex",
  width: "100%",
  alignItems: "center",
  ".MuiFormControlLabel-root": {
    mr: "0px",
  },
  overflow: "hidden",
};

export const termsText: SxProps = {
  fontSize: "16px",
  fontFamily: "Teko",
  lineHeight: "18px",
  width: "100%",
  color: "#A29DB0",
};

export const refreshIcon: SxProps = {
  fontSize: "50px",
  "&.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium": {
    fontSize: "2.5vw",
  },
};

export const tryAgainBtn: SxProps = {
  width: "80%",
  height: "60px",
  fontSize: "1.5em",
  "&.MuiModal-root-MuiDialog-root .MuiSvgIcon-root": {
    fontSize: "1.5em",
  },
  ".MuiTypography-root": {
    fontFamily: "Teko",
    fontWeight: "500",
    fontSize: "1.5em",
  },
};

export const dialogContainer: SxProps = {
  ".MuiDialogContent-root": {
    p: "0px",
  },
  "& .MuiPaper-root": {
    maxWidth: "100vw",
  },
};

export const tableHeader: SxProps = {
  bgcolor: "#E4E1EB",
};

export const tableCell: SxProps = {
  fontFamily: "Play",
  color: "#A29DB0",
  size: "14px",
};

export const dialogContentContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "60vw",
  pt: 6,
  pb: 6,
  maxWidth: "100%",
  "& .MuiPaper-root": {
    maxWidth: "100%",
  },
};

export const diloagMainText: SxProps = {
  fontFamily: "Teko",
  fontWeight: "500",
  fontSize: "44px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const tryAgainText: SxProps = {
  fontFamily: "Play",
  fontWeight: "400",
  color: "#0074FC",
  fontSize: "18px",
};
