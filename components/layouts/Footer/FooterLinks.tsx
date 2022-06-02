import React from "react";

import {
  Grid,
  List,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import Link from "next/link";

import { FooterStyle } from "@/components/layouts/Footer/Footer.style";
import { PATHS } from "@/constants/url";

const FooterLinks = [
  {
    headerLabel: "Marketplace",
    links: [PATHS.explore, PATHS.collection, PATHS.land, PATHS.create],
  },
  {
    headerLabel: "My Account",
    links: [PATHS.profile, PATHS.favorites, PATHS.watchlist, PATHS.settings],
  },
  {
    headerLabel: "Resources",
    links: [
      PATHS.help,
      PATHS.partner,
      PATHS.blog,
      PATHS.docs,
      PATHS.news,
      PATHS.faq,
    ],
  },
  {
    headerLabel: "Company",
    links: [PATHS.about, PATHS.career],
  },
];

const MenuLinks = () => {
  return (
    <Grid container spacing={0}>
      {FooterLinks.map(({ headerLabel, links }) => (
        <Grid item md={3} xs={12} key={headerLabel}>
          <List
            key={headerLabel}
            sx={FooterStyle.footerNavListBlock}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                disableGutters
                disableSticky
                component="div"
                id="nested-list-subheader"
                sx={FooterStyle.footerNavListItemHeader}
              >
                {headerLabel}
              </ListSubheader>
            }
          >
            {links.map(({ id, path, label }) => (
              <Typography key={id} sx={{ cursor: "pointer" }}>
                <Link href={path}>
                  <ListItemText
                    primary={label}
                    disableTypography
                    sx={FooterStyle.footerNavListItem}
                  />
                </Link>
              </Typography>
            ))}
          </List>
        </Grid>
      ))}
    </Grid>
  );
};

export default MenuLinks;
