import { Theme } from "@mui/system";

const drawerWidth = 346;

export const HeaderStyle = {
  mainContainer: {
    backgroundColor: "primary.main",
  },
  subContainer: {
    flexGrow: 1,
    borderTop: 1,
    borderBottom: 1,
    borderColor: "primary.border",
    height: 70,
  },
  LogoSection: {
    backgroundImage: (theme: Theme) =>
      theme.palette.mode === "light"
        ? "url(/images/menu-left.svg)"
        : "url(/images/menu-left-dark.svg)",
    backgroundRepeat: "no-repeat",
    height: 69,
    alignItems: "center",
    backgroundSize: "contain",
    backgroundPosition: "right",
    pr: "15px",
    display: { xs: "none", md: "flex" },
  },
  LogoContainer: {
    mr: 2,
  },
  LogoContainerXs: {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
  },
  LogoBox: (theme) => {
    return {
      alignItems: "center",
      display: "flex",
      content: {
        md: "url(/images/logo-menu.svg)",
        lg:
          theme.palette.mode === "light"
            ? "url(/images/logo-black.svg)"
            : "url(/images/logo-white.svg)",
      },
    };
  },
  appBar: {
    py: 0.4,
    boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.3)",
    backgroundColor: "primary.main",
    backgroundImage: "none",
    zIndex: (theme) => theme.zIndex.drawer + 1,
  },
  appBarInner: {
    height: "100%",
    borderBottom: (theme) => `1px solid ${theme.palette.primary.border}`,
    borderTop: (theme) => `1px solid ${theme.palette.primary.border}`,
  },
  menuSectionXs: {
    flexGrow: 0,
    alignItems: "center",
    display: { xs: "flex", md: "none" },
  },
  menuLinkContainer: {
    flexGrow: 1,
    ml: "32px",
    display: { xs: "none", md: "flex" },
  },
  menuItem: (theme) => {
    return {
      boxShadow: "none",
      backgroundColor: "inherit",
      borderRadius: "unset",
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    };
  },
  menuLink: {
    //my: 2,
    color: (theme: Theme) =>
      theme.palette.mode === "light"
        ? "primary.darker"
        : "primary.headerTextColor",
    display: "flex",
    fontFamily: "Teko",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "29px",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    //mr:3
  },
  searchBox: {
    flexGrow: 1,
    background: "linear-gradient(to right bottom, #70BDF7, #C397F7)",
    p: "1px",
    borderRadius: "34px",
    mx: "23px",
  },
  menuRightContainer: {
    flexGrow: 0,
    backgroundImage: (theme: Theme) =>
      theme.palette.mode === "light"
        ? "url(/images/menu-right.svg)"
        : "url(/images/menu-right-dark.svg)",
    backgroundRepeat: "no-repeat",
    height: "100%",
    alignItems: "center",
    backgroundSize: "contain",
    backgroundPosition: "left",
    pl: "30px",
    display: { xs: "none", md: "flex" },
  },
  menuContentXs: {
    position: "fixed",
    top: "76px",
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1,
    /*border: "1px solid",*/
    p: 1,
    bgcolor: "background.paper",
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
  Item: (theme) => {
    return {
      backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      boxShadow: "none",
    };
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
      width: drawerWidth,
      boxSizing: "border-box",
    },
    [`& .MuiPaper-root`]: {
      height: "100%",
    },
  },
};
