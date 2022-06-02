import type { SxProps } from "@mui/material";
import type { Theme } from "@mui/system";

import type { DialogVariantType } from "@/components/UI/Dialog/Dialog.types";

export const DialogStyle = (
  theme: Theme,
  variant: DialogVariantType,
): SxProps => {
  const isLight = theme.palette.mode === "light";
  const { primary, common } = theme.palette;

  let headerBackground = isLight ? primary.main : primary.lighter;
  let footerBackground = isLight ? primary.lighter : primary.darker;
  let svgFillColor = isLight ? common.contrastText : primary.gray;
  if (variant == "success") {
    footerBackground =
      headerBackground = `linear-gradient(90deg, #4DB1FF 0%, #A65FFF 100%)`;
    svgFillColor = common.white;
  } else if (variant == "error") {
    footerBackground =
      headerBackground = `linear-gradient(0deg, #FF6767, #FF6767), linear-gradient(90deg, #4DB1FF 0%, #A65FFF 100%)`;
    svgFillColor = common.white;
  }

  return {
    "& .MuiPaper-root": {
      borderRadius: "10px",
    },

    "& .MuiDialogTitle-root": {
      background: headerBackground,
      padding: "12px 24px",
      fontFamily: "Teko",
      color:
        isLight && variant == "primary"
          ? "primary.contrastText"
          : "common.white",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "26px",
      lineHeight: "37px",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
    },

    "& .MuiDialogContent-root": {
      border: `1px solid ${primary.border}`,
    },

    "& .MuiDialogActions-root": {
      background: footerBackground,
      padding: "20px 24px",
      color:
        isLight && variant == "primary"
          ? "primary.contrastText"
          : "common.white",
    },
    "& .MuiDialog-close": {
      position: "absolute",
      right: 8,
      top: 8,
      color: isLight ? "primary.contrastText" : "common.white",
      zIndex: 1,
    },
    "& .MuiSvgIcon-root": {
      fill: svgFillColor,
    },
    "& .MuiBackdrop-root": {
      position: "absolute",
      background: "#fff",
      opacity: "0.8 !important",
    },
  };
};
