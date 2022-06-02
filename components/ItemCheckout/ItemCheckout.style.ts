import { Theme } from "@mui/system";

export const CheckoutDialogStyle = {
  bottomSection: {
    mt: "20px",
  },
  totalTitle: {
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.contrastText" : "primary.gray",
    fontFamily: "Play",
    fontSize: "18px",
    fontWeight: 700,
  },
  price: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "30px",
    lineHeight: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    textAlign: "right",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.darker" : "common.white",
  },
  ethPrice: {
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.contrastText" : "primary.gray",
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "29px",
    fontStyle: "normal",
    ml: "20px",
    textTransform: "uppercase",
    fontFamily: "Teko",
    float: "right",
  },
};
