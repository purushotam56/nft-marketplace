import type { SxProps } from "@mui/material";
import { Theme } from "@mui/system";

export const ItemBox: SxProps = {
  ["@media (max-width:768px)"]: {
    m: 0,
    p: 0,
    mt: 3,
  },
  ["@media (min-width:768px)"]: {
    mt: 3,
  },
  [`&.MuiContainer-root`]: {
    // maxWidth: "88%",
    // width: "115vw",
    // width: '50%',
    ["@media (min-width:768px)"]: {
      maxWidth: "1080px",
    },
  },
};

export const MainImageBox: SxProps = {
  // height: "100%",
  // width: "100%",
  // // boxShadow: "inset 0px 0 90px #000000",
  // borderRadius: "20px",
};

export const ItemNavBoxStyle: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  // mt: 2,
  // mb: ,
};

export const ItemNavGrid: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const ItemDetailBackBtnStyle: SxProps = {
  fontSize: "12px",
  color: (theme: Theme) =>
    theme.palette.mode === "light" ? "primary.contrastText" : "primary.gray",
  fontFamily: "Play",
};

export const NavIcon: SxProps = { display: "flex", justifyContent: "flex-end" };

export const CarouselImageStyle: SxProps = {
  ml: 1,
  width: "20%",
  borderRadius: "10%",
};

export const GridBox: SxProps = {
  flexGrow: 1,
  height: "50%",
  width: "100%",
};
export const ItemGridStyle: SxProps = { height: "100%" };

export const ItemImageStyle: SxProps = {
  bgcolor: (theme: Theme) =>
    theme.palette.mode === "light" ? "primary.lighter" : "primary.gray",
  height: "70%",
};

export const ItemTableBox: SxProps = { mt: 3 };

export const iconStyle: SxProps = {
  color: (theme: Theme) =>
    theme.palette.mode === "light" ? "primary.contrastText" : "primary.gray",
};

export const NavBoxStyle: SxProps = {
  display: "flex",
  flexDirection: "row",
  cursor: "pointer",
};

export const LinkStyle: SxProps = {
  fontSize: "12px",
  color: (theme: Theme) =>
    theme.palette.mode === "light" ? "primary.contrastText" : "primary.gray",
  ml: 1,
  fontFamily: "Play",
};

export const TabStyle: SxProps = {
  bgcolor: "primary.main",
  minHeight: "60px",
  alignItems: "center",
  [`.MuiTabs-indicator`]: {
    display: "none",
  },
  [`.MuiTabs-scroller`]: {
    alignItems: "center",
  },
  [".MuiTabs-flexContainer"]: {
    alignItems: "center",
  },
};
export const CircleMapImage: SxProps = {
  width: "100px",
  border: "2px solid white",
  borderRadius: "50%",
  height: "100px",
};
export const ImageInfoTextStyle: SxProps = {
  color: "#ffff",
  fontFamily: "Teko",
  fontWeight: "400",
  lineHeight: "1em",

  ["@media (min-width:768px)"]: {
    fontSize: "1.5em",
  },
};

export const tableHeaderStyle: SxProps = {
  fontFamily: "Play",
  fontWeight: "700",
  fontSize: "14px",
  color: (theme: Theme) =>
    theme.palette.mode === "light" ? "primary.contrastText" : "primary.gray",
};

export const tableRowStyle: SxProps = {
  border: "none",
  fontFamily: "Play",
  fontWeight: "700",
};

export const TabsStyle: SxProps = {
  fontFamily: "Teko",
  color: (theme: Theme) =>
    theme.palette.mode === "light" ? "primary.contrastText" : "primary.gray",
  cursor: "pointer",
  fontSize: "20px",
  lineHeight: "37px",
  fontWeight: "500",
  bgcolor: "transparent",
  p: "0px 20px",
  border: "none",
  minHeight: "10px",
  borderRadius: "5px",
  ml: 3,
  alignItems: "center",
  [`&.Mui-selected`]: {
    // bgcolor: "white",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.contrastText" : "primary.gray",
    borderRadius: "20px",
  },
  [`&.Mui-disabled`]: {
    minHeight: "10px",
    opacity: "0.5",
    cursor: "not-allowed",
    height: "60%",
  },
};

export const TabsStyleSelect: SxProps = {
  fontFamily: "Teko",
  color: (theme: Theme) =>
    theme.palette.mode === "light" ? "primary.contrastText" : "primary.gray",
  cursor: "pointer",
  fontSize: "2rem",
  lineHeight: "37px",
  fontWeight: "500",
  bgcolor: "transparent",
  p: "0px 20px",
  border: "none",
  minHeight: "10px",
  borderRadius: "5px",
  // ml: 3,
  alignItems: "center",
  [`&.Mui-selected`]: {
    bgcolor: "white",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.contrastText" : "primary.gray",
    borderRadius: "20px",
  },
  [`&.Mui-disabled`]: {
    minHeight: "10px",
    opacity: "0.5",
    cursor: "not-allowed",
    height: "60%",
  },
};

export const tableIcon: SxProps = {
  position: "absolute",
  right: "5%",
  // mt: 1,
  color: (theme: Theme) =>
    theme.palette.mode === "light" ? "primary.contrastText" : "primary.gray",
};

export const tableRow: SxProps = {
  bgcolor: "primary.border",
  fontFamily: "Teko",
};

export const tableBody: SxProps = {
  bgcolor: (theme: Theme) =>
    theme.palette.mode === "light" ? "primary.lighter" : "primary.gray",
};

export const tableRowData: SxProps = {
  "&:last-child td, &:last-child th": { border: 0 },
  border: "none",
  fontFamily: "Play",
};

export const ItemInfoStyle = {
  sidebarRight: {
    // pt: "10px",
    pb: "5px",
    border: "1px solid primary.border",
    borderColor: "primary.border",
    backgroundColor: "primary.main",
    borderRadius: "10px",
    fontSize: "16px",
    fontFamily: "Play",
  },
  imageContainer: {
    p: "0px 20px",
  },
  textContainer: {
    p: "20px 20px 0",
  },
  buttonContainer: {
    p: "20px 20px",
  },
  parcelTitle: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "44px",
    lineHeight: "30px",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.darker" : "common.white",
    mt: "15px",
  },
  price: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "30px",
    lineHeight: "43px",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.darker" : "common.white",
    display: "flex",
    alignItems: "center",
  },
  itemContainer: {
    borderBottom: `1px solid`,
    borderColor: "primary.border",
  },
  item: {
    m: "22px 20px",
  },
  label: {
    textTransform: "uppercase",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "19px",
    fontFamily: "Play",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.contrastText" : "primary.gray",
    letterSpacing: "0.2em",
  },
  details: {
    fontSize: "19px",
    fontWeight: 700,
    lineHeight: "20px",
    fontFamily: "Play",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.darker" : "common.white",
    pr: "5px",
  },
  info: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "19px",
    fontFamily: "Play",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.contrastText" : "primary.gray",
  },
  saleText: {
    fontSize: "11px",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "secondary.lighter",
    fontFamily: "Play",
    textAlign: "center",
    mt: "5px",
    letterSpacing: "0.1em",
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
  },
  title: {
    color: "#0074FC",
    lineHeight: "19px",
    fontFamily: "Play",
  },
  parcelText: {
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.contrastText" : "primary.gray",
    lineHeight: "19px",
    fontFamily: "Play",
    paddingTop: "15px",
    paddingBottom: "20px",
  },
  OwnedByText: {
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.contrastText" : "primary.gray",
    fontFamily: "Play",
  },
  OwnedByValue: {
    color: "#0074FC",
    ml: "5px",
    fontFamily: "Play",
    display: "inline-block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "70%",
    textOverflow: "ellipsis",
  },
  accordion: {
    ".MuiAccordionSummary-root": {
      padding: "0 20px",
    },
    ".AccordionSummary-Container": {
      borderLeft: "none !important",
      borderRight: "none !important",
    },
    ".MuiAccordionDetails-root": {
      p: 0,
      backgroundColor: "transparent",
    },
  },
  buyNowBtn: {
    width: "100%",
    mb: "9px",
    padding: "9px 0px",
    ".MuiTypography-root": {
      fontFamily: "Teko",
      fontSize: "30px",
      lineHeight: "43px",
      letterSpacing: "0.1em",
    },
  },
  makeOfferBtn: {
    width: "100%",
    mb: "9px",
    padding: "9px 0px",
    ".MuiTypography-root": {
      fontFamily: "Teko",
      fontSize: "30px",
      lineHeight: "43px",
      letterSpacing: "0.1em",
    },
  },
  ItemImageStyle: {
    borderRadius: "15px",
    width: "100%",
    height: "300px",
  },
  editListingModal: {
    ".MuiDialog-paper": {
      width: "830px ",
    },
  },
  modalFooterButton: {
    ".MuiButton-root": {
      padding: "7px 34px",
      ".CCButton-text": {
        ".MuiTypography-root": {
          fontFamily: "Teko",
          fontSize: "30px",
          fontWeight: "500",
          transform: "translateY(1px)",
        },
      },
      ".MuiButton-startIcon": {
        ".MuiSvgIcon-root": {
          fontSize: "30px",
          fontWeight: "500",
        },
      },
    },
  },
  rotateIcon: { transform: "rotate(80deg)" },
};

export const ItemCarouselStyle = {
  title_h2: {
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.darker" : "common.white",
    fontSize: "67px",
    fontWeight: 500,
    fontFamily: "Teko",
    textTransform: "uppercase",
    lineHeight: "65px",
    mb: "15px",
  },
  MainImageBox: {
    height: "100%",
    width: "100%",
    boxShadow: "inset 0px 0 90px #000000",
    borderRadius: "20px 20px 0 0",
  },
  arrowContainer: {
    display: {
      xs: "none",
      md: "flex",
    },
    textAlign: "right",
    alignItems: "center",
    justifyContent: "end",
  },
  buttonStyle: {
    padding: "10px 15px",
    boxShadow: "none",
    borderColor: "primary.border",
    ml: 1,
    "&.carouselBtn": {
      background: (theme: Theme) =>
        theme.palette.mode === "light"
          ? theme.palette.primary.main
          : "common.black",
    },
  },
  cardContainer: {
    pl: "10px",
    pt: "10px",
    pr: "10px",
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
    alignItems: "center",
    paddingBottom: "2px",

    ".MuiAvatar-root": {
      height: "24px",
      width: "24px",
      border: "1px solid #E4E1EB",
      padding: "2.5px",
    },

    "+ .MuiCardActions-root": {
      padding: "10px 8px",
      display: "flex",
      flexDirection: "column",

      ".MuiButton-root": {
        marginBottom: "7px",
        "&.danger": {
          backgroundColor: "#FF6767",
          boxShadow: "none",
          backgroundImage: "none",
        },
      },

      ".MuiButton-root + .MuiButton-root": {
        "&.stakebtn": {
          margin: "0",
          border: "1px solid transparent",
          background:
            "linear-gradient(black, black) padding-box, linear-gradient(to right, #6433ED, #9D3AFF) border-box",
          color: (theme: Theme) =>
            theme.palette.mode === "light" ? "primary.darker" : "white",

          ".MuiButton-startIcon svg path": {
            fill: (theme: Theme) =>
              theme.palette.mode === "light" ? "primary.darker" : "white",
          },
        },
      },
    },
  },

  cardTitle: {
    fontFamily: "Teko",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.darker" : "common.white",
    fontSize: "18px",
    lineHeight: "15.89px",
    marginLeft: "10px",
    fontWeight: "500",
  },

  cardSubTitle: {
    fontFamily: "Teko",
    color: "#4FB0FF",
    fontSize: "10px",
    lineHeight: "12px",
    marginLeft: "10px",
    fontWeight: "700",
  },
  priceContainer: {},
  price: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "17px",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.darker" : "common.white",
    textAlign: "right",
    display: "flex",
    justifyContent: "end",
  },
  exploreMoreContainer: {
    margin: "20px 40px 70px 40px",
    display: "flex",
    justifyContent: "center",
  },
  exploreMoreBtn: {
    padding: "10px 40px",
    ".MuiTypography-root": {
      fontFamily: "Play",
      fontSize: "18px",
      lineHeight: "21px",
      fontWeight: 400,
      fontStyle: "normal",
    },
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.gray" : "primary.contrastText",
  },
  CircleMapImage: {
    height: "50px",
    width: "50px",
    border: "2px solid white",
    borderRadius: "50%",
  },
  ImageInfoTextStyle: {
    color: "white",
    fontFamily: "Teko",
    fontWeight: "400",
    lineHeight: "10px",
    fontSize: "10px",
  },
};

export const DailogContentStyle = {
  dailogTopBar: {
    backgroundColor: "#E4E1EB",
    margin: "-16px -24px 0",
    padding: "0 24px",
    fontSize: "14px",
    fontWeight: "700",
    color: "#A29DB0",

    "& .MuiTypography-root": {
      letterSpacing: "0.1em",
    },
  },

  NFTthumbnail: {
    height: "100px",
    width: "100px",

    "& .ImageBoxLogo": {
      height: "5px",
      "& img": {
        height: "5px !important",
      },
    },

    "& .ImageBoxText": {
      marginBottom: "0",

      "& .MuiTypography-root": {
        fontSize: "4px",
      },

      "& .MuiBox-root + .MuiBox-root": {
        height: "27px",
        width: "27px",
        border: "0.05em solid white",
      },
    },
  },

  media: {
    padding: "22px 0",
    borderBottom: "1px solid #E4E1EB",
    marginBottom: "10px",
  },

  mediaBody: {
    marginLeft: "10px",
  },
  mediaTitle: {
    fontSize: "2.75rem",
    fontWeight: "500",
    lineHeight: "1",
  },
  mediaSubTitle: {
    fontSize: "1rem",
    lineHeight: "1",
    color: "#0074FC",
  },
  priceStyle: {
    fontSize: "1.90rem",
    fontWeight: "500",
    lineHeight: "1",
  },
  priceSubStyle: {
    color: "#A29DB0",
    fontSize: "1.5rem",
    textAlign: "right",
    lineHeight: "1",
  },
  formLabel: {
    color: "#A29DB0",
    fontSize: "1.2rem",
    fontWeight: "700",
    marginBottom: "8px",
    textTransform: "uppercase",
    ".MuiSvgIcon-root": {
      marginLeft: "5px",
      fontSize: "1.1rem",
    },
  },
  formValue: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#3D3D3D",
    marginBottom: "8px",
  },
  hairLine: {
    margin: "50px 0 20px 0",
    height: "1px",
    border: "1px solid #E4E1EB",
  },
  parcelText: {
    color: (theme: Theme) => theme.palette.blue.main,
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "26px",
    lineHeight: "37px",
    letterSpacing: "0.02em",
  },
};

export const PillsTabStyle = {
  pillsTab: {
    width: "100%",
    marginBottom: "10px",

    ".MuiTabs-scroller": {
      ".MuiTabs-flexContainer": {
        ".MuiTab-root": {
          padding: "25px 30px",
          fontSize: "2.4rem",
          flex: "1 1 auto",
          flexGrow: "1",
          background: "#F3F1F8",
          minWidth: "50%",
          border: "1px solid #E4E1EB",
          color: "#A29DB0",
          flexDirection: "row",

          "&:first-child": {
            borderRadius: "60px 0 0 60px",
          },

          "&:nth-last-child(2)": {
            borderRadius: "0 60px 60px 0",
          },

          "&.Mui-selected": {
            color: "#ffffff",
            background:
              "linear-gradient(269.98deg, #A561FF 0.02%, #4FB0FF 99.98%);",
          },

          ".MuiSvgIcon-root": {
            fontSize: "2.4rem",
            marginRight: "10px",
          },
        },
      },
      ".MuiTabs-indicator": {
        display: "none",
      },
    },
  },
};

export const InputGroupStyle = {
  formControl: {
    marginBottom: "20px",
  },

  inputGroup: {
    display: "flex",

    ".selectInput": {
      minWidth: "185px",
      borderRadius: "2rem 0 0 2rem",
      border: "1px solid #E4E1EB",

      ".MuiSelect-select": {
        paddingTop: "12px",
        paddingBottom: "12px",

        ".MuiBox-root": {
          fontFamily: "Play",
          fontWeight: "700",
          fontSize: "24px",

          ".MuiSvgIcon-root": {
            marginRight: "5px",
          },

          span: {
            color: "#3D3D3D",
          },
        },
      },
    },
    ".textInput": {
      width: "100%",
      borderRadius: "0",
      border: "0",

      ".MuiInputBase-formControl.MuiInputBase-root": {
        border: "1px solid #E4E1EB",
        borderLeft: "0px",
        outline: "0",
        borderRadius: " 0 2rem 2rem 0",
        fontFamily: "Play",
        fontWeight: "700",
        fontSize: "24px",

        "&:before, &:after": {
          borderColor: "transparent",
        },

        ".MuiInputBase-input": {
          border: "0",
          outline: "0",
          padding: "12px 24px",
          height: "24px",
          textAlign: "right",
        },
      },
    },
  },

  hairLine: {
    margin: "50px 0 20px 0",
    height: "1px",
    border: "1px solid #E4E1EB",
  },
};

export const selectStyleMenu = {
  selectStyle: {
    ".MuiMenu-list": {
      ".MuiMenuItem-root": {
        color: "#a29db0",
        "&.Mui-selected": {
          backgroundColor: "#f3f1f8",
          color: "#000000",
          fontWeight: "700",
        },
        ".MuiSvgIcon-root": {
          marginRight: "10px",
        },
      },
    },
  },
};
export const CheckoutDialogStyle = {
  topSection: {
    background: (theme: Theme) => theme.palette.primary.border,
    p: "5px 35px",
  },
  middleSection: {
    p: "0 35px",
    mt: "20px",
  },
  middleLeftSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
  },
  bottomSection: {
    borderTop: "1px solid #E4E1EB",
    p: "25px 35px",
    mt: "20px",
  },
  threadTitle: {
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.contrastText" : "primary.gray",
    fontFamily: "Play",
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: "0.1em",
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
  title: {
    color: (theme: Theme) => theme.palette.blue.main,
    lineHeight: "19px",
    fontFamily: "Play",
  },
  parcelTitle: {
    fontFamily: "Teko",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "44px",
    lineHeight: "30px",
    color: (theme: Theme) =>
      theme.palette.mode === "light" ? "primary.darker" : "common.white",
    mt: "15px",
  },
  CircleMapImage: {
    width: "40px",
    border: "2px solid white",
    borderRadius: "50%",
    height: "40px",
  },
  ImageInfoTextStyle: {
    color: "common.white",
    fontFamily: "Teko",
    fontWeight: "400",
    lineHeight: "1em",
    fontSize: "0.6em",
  },
  ItemImageContainer: {
    display: "inline-block",
    height: "150px",
  },
  ItemInfoContainer: {
    width: "50%",
    display: "inline-block",
    ml: "20px",
  },
};
