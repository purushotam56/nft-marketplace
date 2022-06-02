import { Theme } from "@mui/system";

export const TooltipStyle = {
  BoxStyle: {
    position: "fixed",
    bgcolor: "black",
    borderRadius: "20px",
    top: "100px",
    left: "100px",
    display: "none",
    zIndex: 1000,
    p: 3,
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    overflow: "visible",
    width: "220px",
    /*height: "303px",*/
    "&::after": {
      width: "18px",
      height: "18px",
      position: "absolute",
      content: '"\\0020"',
      bottom: "-70px",
      left: "50%",
      transform: "translateX(-50%)",
      borderLeft: "10px solid transparent",
      borderRight: "10px solid transparent",
      borderTop: "70px solid #040404",
    },
  },
  StackItem: {
    display: "flex",
    color: "white",
  },
  KeyText: {
    bgcolor: "primary.darker",
    borderRadius: "5px",
    padding: "3px 10px",
    display: "flex",
    alignItems: "center",
  },
  location: {
    display: "inline-block",
    ml: 2,
  },
  locationIcon: {
    fontSize: "1.1rem",
    mr: "2px",
  },
  GrayTitle: {
    color: "#787878",
    mb: "1px",
  },
};

export const MapStyle = {
  drawer: {
    width: 350,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 350,
      boxSizing: "border-box",
      top: `var(--header-height)`,
      overflow: "inherit",
      backgroundColor: "primary.main",
      position: "absolute",
      maxHeight: `calc(100vh - var(--header-height))`,
    },
  },
  filterIcon: {
    border: 0,
    background: "none",
    padding: 0,
    "svg path": {
      fill: (theme: Theme) =>
        theme.palette.mode === "light"
          ? theme.palette.primary.darker
          : "common.white",
    },
    "&.selected": {
      "svg path": {
        fill: (theme: Theme) =>
          theme.palette.mode === "light"
            ? theme.palette.primary.contrastText
            : theme.palette.primary.gray,
      },
    },
  },
  searchBox: {
    flexGrow: 1,
    background: "linear-gradient(to right bottom, #70BDF7, #C397F7)",
    p: "1px",
    borderRadius: "34px",
    mx: "13px",
  },
  Search: (theme) => {
    return {
      position: "relative",
      borderRadius: "34px",
      backgroundColor: (theme: Theme) =>
        theme.palette.mode === "light" ? "common.white" : "common.black",
      "&:hover": {
        backgroundColor: (theme: Theme) =>
          theme.palette.mode === "light" ? "common.white" : "common.black",
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        //marginLeft: theme.spacing(3),
        width: "auto",
      },
    };
  },
  SearchIconWrapper: (theme) => {
    return {
      padding: theme.spacing(0, 1),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      top: 0,
      right: "10px",
    };
  },
  StyledInputBase: (theme) => {
    return {
      color: "inherit",
      width: "100%",
      "& .MuiInputBase-input": {
        padding: theme.spacing(1, `calc(1em + ${theme.spacing(4)})`, 1, 3),
        transition: theme.transitions.create("width"),
        fontFamily: "play",
        color: "#CBC6D6",
        fontSize: "14px",
        lineHeight: "16.2px",
        height: "23px",
        width: { md: "100%", sm: "25ch" },
        "& +Fieldset ": {
          border: "0px !important",
        },
      },
    };
  },
  contentBox: {
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "15px",
    },

    "&::-webkit-scrollbar-track": {
      backgroundColor: (theme: Theme) =>
        theme.palette.mode === "light" ? "primary.border" : "common.black",
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: (theme: Theme) =>
        theme.palette.mode === "light" ? "primary.main" : "secondary.gray",
      borderRadius: "10px",
      border: "3px solid",
      borderColor: (theme: Theme) =>
        theme.palette.mode === "light" ? "primary.border" : "common.black",
    },

    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: (theme: Theme) =>
        theme.palette.mode === "light" ? "primary.main" : "secondary.gray",
    },
  },
  drawerSearchContainer: {
    p: "0px 25px",
    mt: "20px",
    mb: "10px",
  },
  drawerOpen: {
    display: "flex",
    alignItems: "center",
    padding: "1px",
    justifyContent: "flex-end",
    position: "absolute",
    left: 0,
    top: "141px",
    background: (theme: Theme) =>
      theme.palette.mode === "light"
        ? theme.palette.primary.main
        : theme.palette.common.black,
    borderRadius: "0px 5px 5px 0px",

    ".open-close-icon svg path": {
      fill: (theme: Theme) =>
        theme.palette.mode === "light" ? "primary.darker" : "white",
    },

    "& :hover": {
      borderRadius: "inherit",
    },
  },
  drawerClose: {
    display: "flex",
    alignItems: "center",
    padding: "1px",
    justifyContent: "flex-end",
    position: "absolute",
    right: "-26px",
    top: "65px",
    background: (theme: Theme) =>
      theme.palette.mode === "light"
        ? theme.palette.primary.main
        : theme.palette.common.black,
    borderRadius: "0px 5px 5px 0px",

    ".open-close-icon svg path": {
      fill: (theme: Theme) =>
        theme.palette.mode === "light" ? "primary.darker" : "white",
    },

    "& :hover": {
      borderRadius: "inherit",
    },
  },
  backLink: {
    fontFamily: "Play",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "14px",
    letterSpacing: "0.1em",
    color: (theme: Theme) => theme.palette.blue.main,
    mx: "20px",
    cursor: "pointer",
    textTransform: "uppercase",
  },
};
