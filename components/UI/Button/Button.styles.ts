import type { SxProps } from "@mui/material";
import type { Theme } from "@mui/system";

const opacityCSS = (isReverse) => {
  const arr = [0.2, 0.55, 0.75, 1];
  const opacityArr = isReverse ? arr.reverse() : arr;

  return opacityArr.reduce((acc, val, index) => {
    acc[`& svg:nth-child(${index + 1})`] = { opacity: val };
    return acc;
  }, {});
};

const doubleOutlineStyles = (secondary): SxProps => ({
  "&.CCButton-double-outlined": {
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1,
      margin: "7px",
      padding: "2px",
      borderRadius: "inherit",
      background: "linear-gradient(90deg, #70BDF7 -0.35%, #C397F7 100%)",
      WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
    },

    "&::after": {
      content: "''",
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1,
      margin: 0,
      padding: "1px",
      borderRadius: "inherit",
      background: "linear-gradient(90deg, #70BDF7 -0.35%, #C397F7 100%)",
      WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
    },

    "& .CCButton-text": {
      padding: "1rem 0",
      justifyContent: "space-between",

      "& .MuiBox-root": {
        display: "flex",

        "& svg": {
          display: "inline-block !important",
          fill: secondary.lighter,
        },

        "&:first-child": {
          ...opacityCSS(false),
          "& svg:not(:last-child)": {
            marginRight: "-15px",
          },
        },

        "&:last-child": {
          ...opacityCSS(true),
          "& svg:not(:first-child)": {
            marginLeft: "-15px",
          },
        },
      },
    },
  },
});

export const ButtonStyle = (theme: Theme): SxProps => {
  const isLight = theme.palette.mode === "light";
  const { common, primary, secondary } = theme.palette;

  const styles = (): SxProps => {
    if (!isLight) {
      return {
        border: "1px solid transparent",
        color: "common.white",
        background: "rgb(0 0 0 / 50%)",

        "&:hover": {
          background: "rgb(0 0 0 / 50%)",
        },

        "&.CCButton-danger-filled, &.CCButton-danger-filled:hover": {
          color: "common.white",
          background: primary.danger,
          border: 0,
        },

        "&.CCButton-filled, &.CCButton-filled:hover": {
          background:
            "linear-gradient(0deg, #26187E 13.44%, #5D33C9 48.19%, #8A5CFF 88.97%) padding-box, linear-gradient(0deg, #6433ED 0%, #C082FF 100%) border-box",
        },

        "&.CCButton-dark-filled, &.CCButton-dark-filled:hover": {
          background:
            "linear-gradient(0deg, #282828 13.44%, #444444 48.19%, #6C6C6C 88.97%) padding-box, linear-gradient(0deg, #2E2E2E 0%, #747474 100%) border-box",
        },

        "&.CCButton-outlined, &.CCButton-outlined:hover": {
          background:
            "linear-gradient(black, black) padding-box, linear-gradient(0deg, #6433ED 0%, #C082FF 100%) border-box",
        },
      };
    }

    return {
      background: common.white,
      color: "common.black",
      border: `1px solid ${primary.border}`,
      boxShadow: "none",

      "&:hover": {
        background: common.white,
      },

      "&.CCButton-filled, &.CCButton-filled:hover": {
        color: "common.white",
        background: "linear-gradient(90deg, #4DB1FF 0%, #A65FFF 100%)",
        border: `1px solid ${common.white}`,
      },

      "&.CCButton-danger-filled, &.CCButton-danger-filled:hover": {
        color: "common.white",
        background: primary.danger,
        border: 0,
      },

      "&.CCButton-outlined, &.CCButton-outlined:hover": {
        color: "primary.darker",
        border: `1px solid transparent`,
        background:
          "linear-gradient(white, white) padding-box, linear-gradient(to right, #6433ED, #9D3AFF) border-box",
      },
    };
  };

  return {
    fontFamily: "Teko",
    fontSize: 23,
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.05em",
    borderRadius: "2rem",
    padding: "0 1rem",
    minWidth: 0,
    backgroundClip: "padding-box",
    ...styles(),
    ...(!isLight ? doubleOutlineStyles(secondary) : {}),

    "& .CCButton-text": {
      display: "flex",
      alignItems: "center",

      ".MuiBox-root svg": {
        display: "none",
      },
    },

    "&.CCButton-icon-only": {
      padding: "9px",
    },

    "&.CCButton-title-icon": {
      "& .CCButton-text": {
        marginLeft: "6px",
      },
    },
  } as SxProps;
};
