import React, { FC, useState } from "react";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Stack,
  TextField,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Link from "@mui/material/Link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

import Button from "@/components/UI/Button";
import { PATHS } from "@/constants/url";
import { themeState } from "@/states/theme";
import DarkThemeIcon from "public/images/dark-theme.svg";
import Logo from "public/images/logo-icon.svg";
import WalletSvg from "public/images/wallet.svg";

import { HeaderStyle } from "./MainNavbar.style";
import MenuLinks from "./MenuLinks";
import UserMenu from "./UserMenu";
import WalletInfo from "./WalletInfo";

const MainNavbar: FC = () => {
  const history = useRouter();
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const [openWalletSidebar, setOpenWalletSidebar] = useState<boolean>(false);
  const [search, setSearch] = useState<string>(
    (history.query.search as string) ?? "",
  );
  const [theme, setTheme] = useRecoilState(themeState);
  const maxWidthValue = false;

  const toggleMenu = () => setMenuOpened(!menuOpened);

  const toggleWalletSidebar = () => {
    setOpenWalletSidebar(!openWalletSidebar);
  };

  const handleSearch = async (e) => {
    if (e.keyCode == 13) {
      const value = e.target.value;
      await history.replace(
        { query: { ...history.query, search: value } },
        undefined,
        { scroll: false },
      );
    }
  };

  const toggleTheme = () => {
    const mode = theme === "light" ? "dark" : "light";
    setTheme(mode);
    localStorage.setItem("theme", mode);
  };

  return (
    <Box sx={HeaderStyle.mainContainer}>
      <Box sx={HeaderStyle.subContainer}>
        <AppBar position="fixed" sx={HeaderStyle.appBar}>
          <Container maxWidth={maxWidthValue} sx={HeaderStyle.appBarInner}>
            <Toolbar disableGutters>
              <Box sx={HeaderStyle.LogoSection}>
                <Link href={PATHS.homePath} underline="none">
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={HeaderStyle.LogoContainer}
                  >
                    <Box component="img" sx={HeaderStyle.LogoBox} alt="Logo" />
                  </Typography>
                </Link>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={HeaderStyle.menuSectionXs}
              >
                <Image
                  src="/images/logo-icon.svg"
                  alt="logo"
                  width={42}
                  height={32}
                  layout="fixed"
                />
              </Typography>
              <Box sx={HeaderStyle.menuLinkContainer}>
                <MenuLinks />
              </Box>
              <Box sx={HeaderStyle.searchBox}>
                <Box sx={HeaderStyle.Search}>
                  <TextField
                    id="standard"
                    sx={HeaderStyle.StyledInputBase}
                    placeholder="Search for NFTs"
                    aria-label="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleSearch}
                  />
                  <Box sx={HeaderStyle.SearchIconWrapper}>
                    <img src="/images/search.svg" alt="Menu" />
                  </Box>
                </Box>
              </Box>
              <Box sx={HeaderStyle.menuSectionXs}>
                {menuOpened ? (
                  <Image
                    src="/images/close.svg"
                    onClick={toggleMenu}
                    width={27}
                    height={20}
                    alt="Close"
                  />
                ) : (
                  <Image
                    src="/images/hamburger.svg"
                    onClick={toggleMenu}
                    width={27}
                    height={20}
                    alt="Open"
                  />
                )}

                {menuOpened ? (
                  <Box sx={HeaderStyle.menuContentXs}>
                    <Stack spacing={2}>
                      <Box sx={HeaderStyle.Item}>
                        <Box sx={{ display: "flex", mr: 2 }}>
                          <UserMenu />
                        </Box>
                      </Box>
                      <Box sx={HeaderStyle.Item}>
                        <Box sx={{ display: "flex", mr: 2 }}>
                          <Button
                            title="BUY NTVRK"
                            icon={Logo}
                            sx={{ padding: "8px 12px" }}
                          />
                        </Box>
                      </Box>
                      <Box sx={HeaderStyle.Item}>
                        <MenuLinks />
                      </Box>
                    </Stack>
                  </Box>
                ) : null}
              </Box>

              <Box sx={HeaderStyle.menuRightContainer}>
                <Box sx={{ display: "flex", mr: 2, whiteSpace: "nowrap" }}>
                  <Button
                    title="BUY NTVRK"
                    icon={Logo}
                    sx={{ padding: "8px 12px" }}
                  />
                </Box>
                <Box sx={{ mr: 2 }}>
                  <Button icon={DarkThemeIcon} onClick={toggleTheme} />
                </Box>
                <Box sx={{ display: "flex", mr: 2 }}>
                  <UserMenu />
                </Box>
                <Box>
                  <Button icon={WalletSvg} onClick={toggleWalletSidebar} />
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Drawer
          variant="persistent"
          anchor="right"
          sx={HeaderStyle.drawer}
          open={openWalletSidebar}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto", pt: 1.6 }}>
            <WalletInfo />
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default MainNavbar;
