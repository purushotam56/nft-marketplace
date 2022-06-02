import type { SxProps } from "@mui/material";
import type { Theme } from "@mui/system";

export const PaginationStyle = (theme: Theme): SxProps => {
  const isLight = theme.palette.mode === "light";
  const { primary } = theme.palette;

  return {
    fontFamily: "Teko",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& .MuiPagination-ul": {
      border: `1px solid ${primary.border}`,
      borderRadius: "15px",
      overflow: "hidden",
      backgroundColor: isLight ? "common.white" : "common.black",

      "& button.MuiPaginationItem-root": {
        margin: "0px",
        borderRadius: 0,
        borderWidth: "0px 1px 0px 0px",
        borderColor: "primary.border",
        fontSize: 16,
        fontWeight: 400,
        fontFamily: "Play",
        color: isLight ? "primary.contrastText" : "common.white",
        height: "34px",
        minWidth: "30px",

        "&.Mui-selected": {
          fontWeight: 700,
          fontSize: 18,
          borderLeftWidth: "1px",
          backgroundColor: "primary.border",
        },

        "& .MuiPaginationItem-icon": {
          fontSize: "1.25rem",
        },
      },

      "& li:last-child": {
        "& button.MuiPaginationItem-root": {
          borderWidth: "0px",
        },
      },
    },
  };
};
