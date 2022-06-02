import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/system";

declare module "@mui/material/styles" {
  interface Palette {
    blue?: Palette["primary"];
  }
  interface PaletteOptions {
    blue?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    border?: string;
    lighter?: string;
    darker?: string;
    gray?: string;
    headerTextColor?: string;
    danger?: string;
  }
  interface SimplePaletteColorOptions {
    border?: string;
    lighter?: string;
    darker?: string;
    gray?: string;
    headerTextColor?: string;
    danger?: string;
  }
}

const commonOptions: Omit<ThemeOptions, "shadows"> = {
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
};

export const lightTheme = createTheme({
  ...commonOptions,
  palette: {
    mode: "light",
    primary: {
      main: "#F3F1F8",
      lighter: "#FAF9FD",
      border: "#E4E1EB",
      contrastText: "#A29DB0",
      darker: "#3D3D3D",
      gray: "#999999",
      danger: "#FF6767",
    },
    blue: {
      main: "#0074FC",
      lighter: "#4FB0FF",
      border: "#4FB0FF",
    },
  },
});

export const darkTheme = createTheme({
  ...commonOptions,
  palette: {
    mode: "dark",
    primary: {
      main: "#151317",
      lighter: "#1B1B1B",
      darker: "#0A0A0A",
      border: "#38333E",
      headerTextColor: "#D0C9DA",
      contrastText: "#fff",
      gray: "#888888",
      danger: "#FF6767",
    },
    secondary: {
      main: "#5A33BE",
      lighter: "#C397F7",
      border: "#625B6A",
      gray: "#504A58",
    },
    blue: {
      main: "#0074FC",
      lighter: "#0060D1",
      darker: "#002249",
    },
  },
});
