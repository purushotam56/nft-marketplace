import React from "react";

import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

import { HeaderStyle } from "@/components/layouts/Navbar/MainNavbar.style";
import { PATHS } from "@/constants/url";

const menuItems = [PATHS.explore, PATHS.collection, PATHS.pools];

const MenuLinks = () => {
  return (
    <Stack direction={{ md: "row", xs: "column" }} spacing={{ md: 2, xs: 0 }}>
      {menuItems.map(({ id, path, label }) => (
        <Box key={id} sx={HeaderStyle.menuItem}>
          <Typography textAlign="center" sx={HeaderStyle.menuLink}>
            <Link href={path}>{label}</Link>
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default MenuLinks;
