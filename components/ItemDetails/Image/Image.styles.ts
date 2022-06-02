import type { SxProps } from "@mui/material";

export const MainMapBox: SxProps = {
  position: "relative",
  display: "flex",
  alignContent: "top",
  justifyContent: "start",
  height: "100%",
  flexWrap: "wrap",
};

export const ImageBoxShadow: SxProps = {
  height: "100%",
  width: "100%",
  boxShadow: "inset 0px 0 4vw #000000",
  borderRadius: "20px",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const InnerSyleMainImage: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
};

export const FullMapViewBox: SxProps = {
  height: "100%",
  width: "100%",
  borderRadius: "5%",
};

export const FullMapInsideCard: SxProps = {
  ml: 1,
  width: "20%",
  borderRadius: "10%",
  height: "90%",
};

export const FullMapInsideCardBox: SxProps = {
  position: "relative",
  display: "flex",
  alignContent: "top",
  justifyContent: "start",
  height: "100%",
  flexWrap: "wrap",
};

export const FullMapInsideBox: SxProps = {
  textAlign: "center",
  width: "60%",
  display: "flex",
  alignItems: "center",
};

export const FullMapInsideBoxBG: SxProps = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  background: `linear-gradient(44.23deg, #4EB1FF 4.57%, #A660FF 97.09%), #000000`,
  opacity: "0.9",
};

export const FullMapBorder: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "90%",
  height: "90%",
  m: 1,
  border: `2px solid #FFFFFF`,
  borderRadius: "8px",
  boxSizing: "border-box",
};

export const FullMapBorderV: SxProps = {
  display: "flex",
  position: "absolute",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "77%",
  height: "90%",
  m: 1,
  background: `linear-gradient(44.23deg, #4EB1FF 4.57%, #A660FF 97.09%), #000000`,

  borderRadius: "8px",
  boxSizing: "border-box",
};

export const FullMapBorderH: SxProps = {
  display: "flex",
  position: "absolute",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "118%",
  height: "83%",
  m: 1,
  background: `linear-gradient(44.23deg, #4EB1FF 4.57%, #A660FF 97.09%), #000000`,

  borderRadius: "8px",
  boxSizing: "border-box",
};
export const FullMapImageText: SxProps = {
  lineHeight: "1em",
  letterSpacing: "0.1em",
  fontFamily: "Teko",
  fontWeight: "600",
  ["@media (max-width:768px)"]: {
    fontSize: "20px",
  },
  ["@media (min-width:768px)"]: {
    fontSize: "29px",
  },
  color: "white",
};

export const MoreImageBox: SxProps = { p: 1, display: "flex" };

export const MoreImageBoxInnerStyle: SxProps = {
  ml: 1,
  width: "20%",
  borderRadius: "10%",
};

export const MainImageBoxStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
  p: "3%",
};

export const ExtraImageBox: SxProps = {
  alignItems: "flex-end",
  mb: 1,
  display: "flex",
  justifyContent: "space-between",
  height: "20%",
};
