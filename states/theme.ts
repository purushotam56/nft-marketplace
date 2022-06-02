import { PaletteMode } from "@mui/material";
import { atom } from "recoil";

import { isServer } from "@/utils/helper";

export const themeState = atom({
  key: "theme",
  default: isServer
    ? "light"
    : ((localStorage.getItem("theme") || "light") as PaletteMode),
});
