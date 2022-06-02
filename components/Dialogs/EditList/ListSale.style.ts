import type { SxProps } from "@mui/material";
// import { Theme } from "@mui/system";
//
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
  width: " 100%",
};

export const btnProcessText: SxProps = {
  bgcolor: "#FF6767",
  color: "white",
  display: "flex",
  // ml: "40%",
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

export const btnText: SxProps = {
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
export const ItemInfoStyle = {
  editListingModal: {
    ".MuiDialog-paper": {
      width: "830px ",
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
  hairLine: {
    margin: "3vh 0 3vh 0",
    height: "1px",
    border: "1px solid #E4E1EB",
  },
};

export const ETHLinkBox: SxProps = { zIndex: "1", textDecoration: "under" };

export const ETHLinkText: SxProps = {
  textDecoration: "underline",
  cursor: "pointer",
};
