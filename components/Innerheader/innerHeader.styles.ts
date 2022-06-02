import { SxStyles } from "@/types/types";

export const InnerHeaderStyle: SxStyles = {
  innerHeader: {
    height: "174px",
    width: "100%",
    backgroundImage: "url(/images/innerHeader.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    paddingLeft: "360px",

    "@media only screen and (max-width: 600px)": {
      paddingLeft: "0px",
    },

    h2: {
      letterSpacing: "0px",
      fontWeight: "400",
      "@media only screen and (max-width: 600px)": {
        width: "100%",
        fontSize: "80px",
        textAlign: "center",
      },
    },
  },

  innerUserHeader: {
    width: "100%",
    // backgroundImage: "url(/images/collection-header.png)",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    // backgroundSize: "cover",
    padding: "30px 30px 40px",
    position: "relative",
    zIndex: "0",
    overflow: "hidden",
  },

  InnerHeaderBgImage: {
    position: "absolute",
    left: "0",
    top: "0",
    zIndex: "-1",

    img: {
      width: "100%",
      height: "100%",
    },
  },

  leftHeaderSection: {
    minWidth: "315px",
    textAlign: "center",
  },
  profileIconBanner: {
    height: "152px",
    width: "152px",
    background: "#F9F9F9",
    border: "7px solid #FFFFFF",
    boxShadow: "inset 0px 0px 20px rgba(0, 0, 0, 0.45)",
    borderRadius: "150px",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    margin: "0 auto",
  },
  profileCountHolder: {
    backgroundColor: "rgba(0,0,0,0.5)",
    border: "1px solid #A29DB0",
    borderRadius: "50px",
    color: "#ffffff",
    margin: "20px auto 0",
    padding: "0 10px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "fit-content",

    "& .MuiListItem-root": {
      display: "inline-flex",
      width: "70px",
      textTransform: "uppercase",
      textAlign: "center",
      height: "63px",
      padding: "0px 5px",
      borderLeft: "1px solid #A29DB0",

      ":first-child": {
        borderLeft: "0px solid #A29DB0",
      },

      "& .MuiListItemText-root": {
        margin: "0",
        "& .MuiListItemText-primary": {
          fontFamily: "Teko",
          fontSize: "26px",
          fontWeight: "500",
          lineHeight: "1",
        },
        "& .MuiListItemText-secondary": {
          fontFamily: "Play",
          fontSize: "10px",
          fontWeight: "400",
          lineHeight: "1",
          color: "#ffffff",
          minHeight: "20px",
        },
      },
    },
  },
  rightHeaderSection: {
    paddingTop: "10px",
    paddingLeft: "30px",

    h2: {
      lineHeight: "70px",
      paddingLeft: "30px",
    },
    h4: {
      paddingLeft: "30px",
      fontFamily: "Play",
      fontWeight: "700",
      fontSize: "18px",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      span: {
        color: "#4FB0FF",
        display: "contents",
      },
    },
    "& .MuiTypography-body1": {
      paddingLeft: "30px",
      fontFamily: "Play",
      fontWeight: "400",
      fontSize: "16px",
      color: "#ffffff",
      maxWidth: "68%",
      margin: "10px 0",
      lineHeight: "1.2",
    },
  },

  rightHeaderSocialLinks: {
    paddingLeft: "30px",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",

    "& .MuiSvgIcon-root": {
      marginRight: "10px",
      color: "#4FB0FF",
      cursor: "pointer",
    },
  },
  socialImageIcon: {
    marginRight: "10px",
    display: "inline-flex",
    cursor: "pointer",
  },
};
