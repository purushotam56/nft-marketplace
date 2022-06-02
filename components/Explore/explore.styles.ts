import { SxStyles } from "@/types/types";

export const ExploreStyle: SxStyles = {
  sortby: {
    margin: "0 30px",
    "@media only screen and (max-width: 600px)": {
      margin: "0 00px",
    },

    small: {
      marginRight: "10px",
      color: "#A29DB0",

      "@media only screen and (max-width: 600px)": {
        display: "none !important",
      },

      "+ .MuiInputBase-root": {
        backgroundColor: "transparent",

        "&.Mui-focused": {
          ".MuiOutlinedInput-notchedOutline": {
            borderWidth: "0px",
          },
        },
      },
    },

    ".MuiSelect-outlined": {
      padding: "8px 24px",
      backgroundColor: "#fff",
      borderRadius: "30px",
      fontFamily: "Play",
      fontWeight: "700",
      fontSize: "18px",
    },
  },
};
