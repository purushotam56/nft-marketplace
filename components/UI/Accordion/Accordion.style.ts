import type { SxProps } from "@mui/material";
import type { Theme } from "@mui/system";

export const AccordionStyle = (theme: Theme): SxProps => {
  const isLight = theme.palette.mode === "light";
  const { primary, common } = theme.palette;

  return {
    boxShadow: "none",
    backgroundColor: "inherit",
    backgroundImage: "inherit",

    "& .MuiAccordionSummary-root": {
      padding: "0 30px",

      "&.AccordionSummary-Container": {
        backgroundColor: isLight ? "primary.main" : "primary.lighter",
        border: `1px solid ${primary.border}`,

        "& .AccordionSummary-Container-Label": {
          fontSize: "28px",
          fontFamily: "Teko",
          fontWeight: "500",
          lineHeight: "40px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: isLight ? "primary.contrastText" : "common.white",
        },
      },

      "&.AccordionSummary-Item": {
        backgroundColor: isLight ? "primary.lighter" : "primary.darker",
      },

      "& .AccordionSummary-Label": {
        fontSize: "16px",
        fontFamily: "Play",
        fontWeight: "700",
        lineHeight: "19px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: isLight ? "primary.contrastText" : "primary.gray",
      },
    },

    "& .MuiAccordionDetails-root": {
      padding: 0,
      backgroundColor: isLight ? "primary.lighter" : "primary.darker",
    },

    "& .AccordionSummary-Expand-Icon": {
      fill: isLight ? `${common.contrastText}` : `${primary.gray}`,
    },

    "& .Mui-expanded > .AccordionSummary-Expand-Icon": {
      fill: isLight ? `${common.contrastText}` : `${common.white}`,
    },
  };
};
