import type { SxProps } from "@mui/material";

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
    fontSize: "3rem",
    fontWeight: "500",
    lineHeight: "1",
  },
  mediaSubTitle: {
    fontSize: "1rem",
    lineHeight: "1",
    color: "#0074FC",
  },
  priceStyle: {
    fontSize: "2.3rem",
    fontWeight: "500",
    lineHeight: "1",
    textAlign: "end",
  },
  priceSubStyle: {
    color: "#A29DB0",
    fontSize: "1.6rem",
    textAlign: "right",
    lineHeight: "1",
  },
  formLabel: {
    color: "#A29DB0",
    fontSize: "1rem",
    fontWeight: "700",
    marginBottom: "8px",
    textTransform: "uppercase",
    ".MuiSvgIcon-root": {
      marginLeft: "5px",
      fontSize: "1.1rem",
    },
  },
  formValue: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#3D3D3D",
    // marginBottom: "8px",
  },
  formSubValue: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: " #A29DB0",
    // marginBottom: "8px",
  },
};

export const CircleMapImage: SxProps = {
  width: "20px",
  border: "1px solid white",
  borderRadius: "50%",
  height: "20px",
};

export const ImageInfoTextStyle: SxProps = {
  color: "#ffff",
  fontFamily: "Teko",
  fontSize: ".4rem",
};

//Select Style

export const InputGroupStyle = {
  formControl: {
    marginBottom: "2vh",
  },

  inputGroup: {
    display: "flex",

    ".selectInput": {
      minWidth: "25%",
      borderRadius: "2rem 0 0 2rem",
      border: "1px solid #E4E1EB",

      ".MuiSelect-select": {
        p: 0,
        ml: 1,

        ".MuiBox-root": {
          fontFamily: "Play",
          fontWeight: "700",
          fontSize: "1.3rem",

          ".MuiSvgIcon-root": {
            marginRight: "5px",
          },

          span: {
            color: "#3D3D3D",
          },
        },
      },
    },
    ".selectInput1": {
      minWidth: "15vw",
      border: "1px solid #E4E1EB",

      ".MuiSelect-select": {
        paddingTop: "2vh",
        paddingBottom: "2vh",

        ".MuiBox-root": {
          fontFamily: "Play",
          fontWeight: "700",
          fontSize: "1.3rem",

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
        fontSize: "1.5rem",
        pr: 2,

        "&:before, &:after": {
          borderColor: "transparent",
        },

        ".MuiInputBase-input": {
          border: "0",
          outline: "0",
          textAlign: "right",
        },
      },
    },
  },

  hairLine: {
    margin: "3vh 0 3vh 0",
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
          marginRight: "1vh",
        },
      },
    },
  },
};
