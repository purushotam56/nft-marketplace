import { Theme } from "@mui/system";

export const FooterStyle = {
  footer: {
    py: 0.4,
    height: "auto",
    width: "100%",
    borderTop: 1,
    borderColor: "primary.border",
    backgroundColor: "primary.main",
    bottom: 0,
    textAlign: { md: "left", xs: "center" },
  },
  footerTop: {
    minHeight: { md: "330px" },
  },
  footerTopRight: {
    display: { xs: "none", md: "flex" },
  },
  footerTopContent: {
    mx: "auto",
    mt: 4,
    maxWidth: { xs: "90%", lg: "78%", md: "85%" },
  },
  footerTextContainer: {
    maxWidth: { md: "245px", xs: "100%" },
  },
  contentText: {
    fontFamily: "Play",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "16px",
    color: (theme: Theme) =>
      theme.palette.mode === "light"
        ? "primary.darker"
        : "primary.headerTextColor",
  },
  footerIconContainer: {
    display: "block",
    mt: 2,
  },
  footerNavListBlock: {
    width: "100%",
    bgcolor: "none",
    textAlign: { md: "left" },
    mt: { xs: "20px" },
  },
  footerNavListItem: {
    fontFamily: "Play",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "35px",
    color: (theme: Theme) =>
      theme.palette.mode === "light"
        ? "primary.darker"
        : "primary.headerTextColor",
  },
  footerNavListItemHeader: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "29px",
    letterSpacing: "0.05em",
    color: "#A29DB0",
    bgcolor: "none",
    textTransform: "uppercase",
  },
  footerBottom: {
    height: "auto",
    minHeight: 65,
    borderTop: 1,
    borderColor: "primary.border",
  },
  copyRight: {
    width: "100%",
    mx: "auto",
    maxWidth: { xs: "90%", md: "78%" },
  },
  footerLegalLinks: {
    textAlign: { md: "right" },
  },
  copyRightText: {
    fontFamily: "Play",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "14px",
    color: "#A29DB0",
    ml: 2,
    textDecorationColor: "#A29DB0",
  },
};
