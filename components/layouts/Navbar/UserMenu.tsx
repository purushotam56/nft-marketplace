import React, { useState } from "react";

import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import Button from "@/components/UI/Button";
import UserSvg from "public/images/user.svg";

const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = [
    {
      id: "profile",
      // FIXME: Temporary navigate to staking page
      path: "/staking",
      label: "Profile",
    },
    {
      id: "logout",
      path: "/logout",
      label: "Logout",
    },
  ];

  return (
    <>
      <Link variant="body2" onClick={handleOpenUserMenu}>
        <Button icon={UserSvg} />
      </Link>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map(({ id, path, label }) => (
          <MenuItem key={id} onClick={handleCloseUserMenu}>
            <Link href={path} underline="none">
              <Typography
                textAlign="center"
                sx={{ color: "primary.contrastText" }}
              >
                {label}
              </Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default UserMenu;
