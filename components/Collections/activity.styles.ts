import { Theme } from "@mui/system";

import { SxStyles } from "@/types/types";

export const ActivityStyle: SxStyles = {
  activityTable: {
    margin: "20px 0 30px",
    boxShadow: "none",
    borderRadius: "0px",
    backgroundColor: (theme: Theme) =>
      theme.palette.mode === "light" ? "common.white" : "primary.darker",
    backgroundImage: "none",

    "& .MuiTableHead-root": {
      "& .MuiTableRow-root": {
        backgroundColor: (theme: Theme) =>
          theme.palette.mode === "light" ? "primary.main" : "primary.darker",
        borderRadius: "15px",
        "& .MuiTableCell-root": {
          borderBottom: "0",

          ":first-child": {
            borderBottomLeftRadius: "15px",
            borderTopLeftRadius: "15px",
            borderBottom: "0",
          },
          ":last-child": {
            borderBottomRightRadius: "15px",
            borderTopRightRadius: "15px",
            borderBottom: "0",
          },
        },
      },
    },

    "& .MuiTableBody-root": {
      backgroundColor: (theme: Theme) =>
        theme.palette.mode === "light" ? "common.white" : "primary.main",

      "& .MuiTableCell-root": {
        fontSize: "18px",

        "& .image-rounded > span": {
          borderRadius: "5px",
          marginRight: "10px !important",
        },

        "& .MuiLink-root": {
          color: "#4FB0FF",
        },
      },
    },
  },
};
