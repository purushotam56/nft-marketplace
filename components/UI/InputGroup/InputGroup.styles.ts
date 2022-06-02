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
