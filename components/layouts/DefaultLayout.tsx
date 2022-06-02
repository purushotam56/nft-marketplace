import React, { FC } from "react";

import Box from "@mui/material/Box";

import Footer from "./Footer/Footer";
import MainNavbar from "./Navbar/MainNavbar";

const DefaultLayout: FC = ({ children }) => {
  return (
    <Box
      minHeight="100vh"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <MainNavbar />
      <Box sx={{ flex: 1 }}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default DefaultLayout;
