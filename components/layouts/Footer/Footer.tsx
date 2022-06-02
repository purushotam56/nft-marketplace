import React, { FC } from "react";

import { Grid, Box, Link, Typography, useTheme } from "@mui/material";
import Image from "next/image";

import { FooterStyle } from "@/components/layouts/Footer/Footer.style";
import { HeaderStyle } from "@/components/layouts/Navbar/MainNavbar.style";

import FooterLinks from "./FooterLinks";

const Footer: FC = () => {
  const theme = useTheme();
  const footerLogo =
    theme.palette.mode == "light"
      ? "/images/logo-black.svg"
      : "/images/logo-white.svg";

  return (
    <Box sx={FooterStyle.footer}>
      <Box sx={FooterStyle.footerTop}>
        <Box sx={FooterStyle.footerTopContent}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box>
                <Box>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={HeaderStyle.LogoContainer}
                  >
                    <Image
                      src={footerLogo}
                      alt="logo"
                      width={220}
                      height={50}
                      layout="fixed"
                    />
                  </Typography>
                </Box>
                <Box sx={{ pl: { md: "68px" } }}>
                  <Box sx={FooterStyle.footerTextContainer}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={FooterStyle.contentText}
                    >
                      Netvrk is a metaverse, with powerful creation tools and
                      infrastructure to easily create, share, experience, and
                      monetize creations.
                    </Typography>
                  </Box>
                  <Box sx={FooterStyle.footerIconContainer}>
                    <Box component="span" sx={{ mr: 2 }}>
                      <Link href="#" underline="none">
                        <Image
                          src="/images/telegram.svg"
                          alt="logo"
                          width={28}
                          height={28}
                          layout="fixed"
                        />
                      </Link>
                    </Box>
                    <Box component="span" sx={{ mr: 2 }}>
                      <Link href="#" underline="none">
                        <Image
                          src="/images/twitter.svg"
                          alt="logo"
                          width={28}
                          height={28}
                          layout="fixed"
                        />
                      </Link>
                    </Box>
                    <Box component="span" sx={{ mr: 2 }}>
                      <Link href="#" underline="none">
                        <Image
                          src="/images/medium.svg"
                          alt="logo"
                          width={28}
                          height={28}
                          layout="fixed"
                        />
                      </Link>
                    </Box>
                    <Box component="span" sx={{ mr: 2 }}>
                      <Link href="#" underline="none">
                        <Image
                          src="/images/globe.svg"
                          alt="logo"
                          width={28}
                          height={28}
                          layout="fixed"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7} sx={FooterStyle.footerTopRight}>
              <FooterLinks />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={FooterStyle.footerBottom}>
        <Box sx={FooterStyle.copyRight}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={8}>
              <Typography component="span" sx={FooterStyle.copyRightText}>
                © Copyright Netvrk 2022. All rights reserved.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={FooterStyle.footerLegalLinks}>
                <Link
                  href="#"
                  underline="always"
                  sx={FooterStyle.copyRightText}
                >
                  Privacy Policy
                </Link>

                <Link
                  href="#"
                  underline="always"
                  sx={FooterStyle.copyRightText}
                >
                  Terms of use
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
