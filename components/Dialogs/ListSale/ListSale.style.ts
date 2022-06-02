import type { SxProps } from "@mui/material";

export const EditListingModal = {
  ".MuiDialog-paper": {
    width: "830px ",
  },
};
export const ModalFooterButton = {
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
};

export const DailogContentStyle = {
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
    marginBottom: "8px",
  },
};

export const PillsTabStyle = {
  pillsTab: {
    marginBottom: "10px",
    ".MuiButtonBase-root": {
      minHeight: 0,
    },
    ".MuiTabs-scroller": {
      ".MuiTabs-flexContainer": {
        ".MuiTab-root": {
          padding: "2% 2%",
          fontSize: "2.5rem",
          flex: "1 1 auto",
          flexGrow: "1",
          background: "#F3F1F8",
          minWidth: "50%",
          border: "1px solid #E4E1EB",
          color: "#A29DB0",
          flexDirection: "row",

          "&:first-child": {
            borderRadius: "10vh 0 0 10vh",
          },

          "&:nth-last-child(2)": {
            borderRadius: "0 10vh 10vh 0",
          },

          "&.Mui-selected": {
            color: "#ffffff",
            background:
              "linear-gradient(269.98deg, #A561FF 0.02%, #4FB0FF 99.98%);",
          },

          ".MuiSvgIcon-root": {
            fontSize: "2.5rem",
            marginRight: "1vw",
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

export const selectStyleMenuTimed = {
  selectStyle: {
    ".MuiMenu-list": {
      ".MuiMenuItem-root": {
        color: "#a29db0",
        "&.Mui-selected": {
          backgroundColor: "white",
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

export const mainContainer: SxProps = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  // display: "flex",
  // width: "100%",
  // alignItems: "center",
  // ".MuiFormControlLabel-root": {
  //   mr: "0px",
  // },
  // overflow: "hidden",
  // justifyContent: "space-between",
};

export const termsText: SxProps = {
  fontSize: "16px",
  fontFamily: "Play",
  lineHeight: "18px",
  width: "100%",
  textAlign: "left",
  color: "#A29DB0",
};

// export const tryAgainBtn: SxProps = {
//   width: "50%",
//   height: "60px",
//   fontSize: "1.5em",
//   "&.MuiModal-root-MuiDialog-root .MuiSvgIcon-root": {
//     fontSize: "1.8rem",
//   },
//   ".MuiTypography-root": {
//     fontFamily: "Teko",
//     fontWeight: "500",
//     fontSize: "1.8rem",
//   },
// };
export const tryAgainBtn: SxProps = {
  width: "250px",
  // ml: "15%",
  bgcolor: "#FF6767",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "500",
  fontFamily: "Teko",
  [`.MuiTypography-root`]: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.5rem",
    fontWeight: "500",
    fontFamily: "Teko",
    pt: "4%",
    pb: "4%",
  },
  ".MuiSvgIcon-root": {
    fontSize: "1.7rem",
  },
};

export const iconTagTransform: SxProps = {
  transform: "rotate(80deg)",
};

export const termsBox: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  width: " 100%",
};
