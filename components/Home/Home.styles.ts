import { Theme } from "@mui/system";

export const TopBannerStyle = {
  MainContainer: {
    backgroundImage: "url(/images/home-header.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "500px",
  },
  leftBox: {
    width: "260px",
    mt: "120px",
  },
  mainTitle: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "80px",
    lineHeight: "75.3%",
    color: "#FFFFFF",
    mb: 0,
  },
  subTitle: {
    fontFamily: "Play",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "22px",
    lineHeight: "100%",
    color: "#FFFFFF",
  },
  exploreBtn: {
    mt: "20px",
    ".MuiTypography-root": {
      fontFamily: "Teko",
      fontSize: "28px",
      fontWeight: "500",
      lineHeight: "40px",
      letterSpacing: "0.05em",
    },
  },
  rightBox: {
    float: "left",
    margin: "25px 0 0 0",
    display: { xs: "none", md: "block" },
  },
  overLayBox: {
    position: "relative",
    width: "560px",
    height: "560px",
    borderLeft: "24px solid",
    borderRight: "24px solid",
    borderColor: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.main" : "#000000",
    borderRadius: "10px",
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.25)",
  },
  collectionMainTitle: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "36px",
    lineHeight: "88.3%",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.darker" : "common.white",
    mb: 0,
  },
  collectionSubTitle: {
    fontFamily: "Play",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "120%",
    color: "blue.lighter",
  },
};

export const TopCollectionStyle = {
  titleBox: {
    width: "250px",
  },
  dataBox: {
    width: "100%",
    mb: "10px",
  },
  numberBox: {
    display: "flex",
    alignItems: "center",
    mr: "10px",
  },
  itemInfo: {
    borderRadius: "50px",
    p: "10px",
    background: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.main" : "#000000",
    display: "flex",
    alignItems: "center",
    width: "100%",
    border: (theme: Theme) => `1px solid ${theme.palette.primary.border}`,
  },
  primaryTitle: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "67px",
    lineHeight: "75.3%",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.darker" : "common.white",
    mb: 0,
  },
  blueTitle: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "67px",
    lineHeight: "75.3%",
    color: "#4FB0FF",
  },
  numberText: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "60px",
    lineHeight: "75.3%",
    color: "#CBC6D6",
    mb: 0,
  },
  itemTitle: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "26px",
    lineHeight: "20px",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.darker" : "common.white",
    mb: 0,
    "&.price, &.volume": {
      textAlign: "center",
    },
    "&.green-text": {
      textAlign: "center",
      color: "#00DA3D",
    },
    "&.red-text": {
      textAlign: "center",
      color: "#DA0000",
    },
    "&.m-l": {
      ml: "18px",
    },
  },
  grayText: {
    fontFamily: "Play",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "100%",
    color: "#A29DB0",
    textAlign: "center",
    mb: 0,
  },
  exploreBtn: {
    mt: "20px",
    ".MuiTypography-root": {
      fontFamily: "Play",
      fontStyle: "normal",
      fontSize: "18px",
      fontWeight: "400",
      lineHeight: "21px",
      color: "#999999",
      textTransform: "capitalize",
    },
    "&.CCButton-outlined, &.CCButton-outlined:hover": {
      background: "none",
      border: "1px solid #E4E1EB",
      p: "8px 30px",
    },
  },
};

export const TopLandsStyle = {
  titleBox: {
    width: "300px",
  },
  primaryTitle: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "67px",
    lineHeight: "75.3%",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.darker" : "common.white",
    mb: 0,
  },
  blueTitle: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "67px",
    lineHeight: "75.3%",
    color: "#4FB0FF",
    mb: 0,
  },
};

export const AssetsStyle = {
  MainContainer: {
    mt: "80px",
  },
  outerBox: {
    background: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.main" : "#000000",
    border: (theme: Theme) => `1px solid ${theme.palette.primary.border}`,
    padding: "12px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    width: "fit-content",
  },
  imageBox: {
    position: "relative",
    width: "175px",
    height: "175px",
    borderRadius: "50%",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "32px",
    lineHeight: "88.3%",
    color: "#FFFFFF",
    mb: 0,
  },
};

export const BscStyle = {
  MainContainer: {
    mt: "80px",
  },
  BoxContainer: {
    textAlign: "center",
    width: { xs: "300px", sm: "200px", md: "300px" },
  },
  title: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "40px",
    lineHeight: "88.3%",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.darker" : "common.white",
    textAlign: "center",
    textTransform: "uppercase",
    mb: "5px",
    mt: "15px",
  },
  description: {
    fontFamily: "Play",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "120%",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.darker" : "common.white",
    mb: 0,
  },
};

export const VideoStyle = {
  MainContainer: {
    mt: "80px",
    height: { md: "548px", sm: "300px", xs: "250px" },
    borderRadius: "15px",
    overflow: "hidden",
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  exploreBtn: {
    mt: "44px",
    ".MuiTypography-root": {
      fontFamily: "Teko",
      fontStyle: "normal",
      fontSize: "28px",
      fontWeight: "500",
      lineHeight: "40px",
      letterSpacing: "0.05em",
    },
  },
};

export const NewestNFTStyle = {
  titleBox: {
    width: "350px",
  },
  dataBox: {
    width: "100%",
    mb: "10px",
  },
  numberBox: {
    display: "flex",
    alignItems: "center",
    mr: "10px",
  },

  primaryTitle: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "67px",
    lineHeight: "75.3%",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.darker" : "common.white",
    mb: "18px",
  },

  blueTitle: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "67px",
    lineHeight: "75.3%",
    color: "#4FB0FF",
  },
  numberText: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "60px",
    lineHeight: "75.3%",
    color: "#CBC6D6",
    mb: 0,
  },
  itemTitle: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "26px",
    lineHeight: "20px",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.darker" : "common.white",
    mb: 0,
    "&.price, &.volume": {
      textAlign: "center",
    },
    "&.green-text": {
      textAlign: "center",
      color: "#00DA3D",
    },
    "&.red-text": {
      textAlign: "center",
      color: "#DA0000",
    },
    "&.m-l": {
      ml: "18px",
    },
  },
  grayText: {
    fontFamily: "Play",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "100%",
    color: "#A29DB0",
    textAlign: "center",
    mb: 0,
  },
  exploreBtn: {
    mt: "20px",
    ".MuiTypography-root": {
      fontFamily: "Play",
      fontStyle: "normal",
      fontSize: "18px",
      fontWeight: "400",
      lineHeight: "21px",
      color: "#999999",
      textTransform: "capitalize",
    },
    "&.CCButton-outlined, &.CCButton-outlined:hover": {
      background: "none",
      border: "1px solid #E4E1EB",
      p: "8px 30px",
    },
  },
};
