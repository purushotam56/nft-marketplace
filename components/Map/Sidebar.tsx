import React from "react";

import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

import ItemInfo from "@/components/ItemDetails/ItemInformation";
import ItemList from "@/components/Map/ItemList";
import { MapStyle } from "@/components/Map/Map.styles";
import Button from "@/components/UI/Button";

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);
  const [state, setState] = React.useState("itemlist");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onItemDetail = (id: string) => {
    document.getElementById(id).dispatchEvent(new Event("click"));
    setState("itemdetail");
  };

  const toggleFilter = () => {
    setState(
      state == "itemlist" || state == "itemdetail" ? "itemfilter" : "itemlist",
    );
  };

  const asset = {
    id: 1313,
    contractAddress: "aa",
    tokenId: 22,
    ownerAddress: "JohnDoe",
    ownerId: "cc",
    type: "Transports",
    property: {
      assetId: 33,
      coverUrl: "/images/Explorer/rect_image.jpg",
      description:
        "Transports offer travel utility in the metaverse, with the ability to hold multiple riders. Transport holders will have all future body kits unlocked..",
      id: 44,
      metadataUrl: "xyz.com",
      name: "Roadster #4810",
    },
    collection: {
      contractAddress: "0x244FC4178fa685Af909c88b4D4CD7eB9127eDb0B",
      id: 1,
    },
    group: "Business_District_Standard",
    isStaked: true,
  };

  const backTitle = "< BACK TO RESULTS";

  return (
    <>
      <Box sx={MapStyle.drawerOpen} className="open-close-icon">
        <IconButton
          onClick={handleDrawerOpen}
          sx={{ padding: "8px 0px" }}
          id="drawerOpenIcon"
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
      <Drawer
        sx={MapStyle.drawer}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Box sx={MapStyle.drawerClose} className="open-close-icon">
          <IconButton onClick={handleDrawerClose} sx={{ padding: "8px 0px" }}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <Box sx={MapStyle.drawerSearchContainer}>
          <Grid container spacing={0} sx={{ alignItems: "center" }}>
            <Grid item xs={1}>
              <Button
                variant="outlined"
                sx={MapStyle.filterIcon}
                className={state === "itemfilter" ? "selected" : null}
                onClick={() => toggleFilter()}
                startIcon={
                  <svg
                    width="26"
                    height="30"
                    viewBox="0 0 26 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.125 3.25398C7.69402 3.25398 7.2807 3.42519 6.97595 3.72993C6.67121 4.03468 6.5 4.44801 6.5 4.87898C6.5 5.30996 6.67121 5.72328 6.97595 6.02803C7.2807 6.33278 7.69402 6.50398 8.125 6.50398C8.55598 6.50398 8.9693 6.33278 9.27405 6.02803C9.57879 5.72328 9.75 5.30996 9.75 4.87898C9.75 4.44801 9.57879 4.03468 9.27405 3.72993C8.9693 3.42519 8.55598 3.25398 8.125 3.25398ZM3.52625 3.25398C3.86198 2.30249 4.48458 1.47856 5.30822 0.895765C6.13187 0.312968 7.11602 0 8.125 0C9.13398 0 10.1181 0.312968 10.9418 0.895765C11.7654 1.47856 12.388 2.30249 12.7237 3.25398H24.375C24.806 3.25398 25.2193 3.42519 25.524 3.72993C25.8288 4.03468 26 4.44801 26 4.87898C26 5.30996 25.8288 5.72328 25.524 6.02803C25.2193 6.33278 24.806 6.50398 24.375 6.50398H12.7237C12.388 7.45547 11.7654 8.2794 10.9418 8.8622C10.1181 9.445 9.13398 9.75797 8.125 9.75797C7.11602 9.75797 6.13187 9.445 5.30822 8.8622C4.48458 8.2794 3.86198 7.45547 3.52625 6.50398H1.625C1.19402 6.50398 0.780698 6.33278 0.475952 6.02803C0.171205 5.72328 0 5.30996 0 4.87898C0 4.44801 0.171205 4.03468 0.475952 3.72993C0.780698 3.42519 1.19402 3.25398 1.625 3.25398H3.52625ZM17.875 13.004C17.444 13.004 17.0307 13.1752 16.726 13.4799C16.4212 13.7847 16.25 14.198 16.25 14.629C16.25 15.06 16.4212 15.4733 16.726 15.778C17.0307 16.0828 17.444 16.254 17.875 16.254C18.306 16.254 18.7193 16.0828 19.024 15.778C19.3288 15.4733 19.5 15.06 19.5 14.629C19.5 14.198 19.3288 13.7847 19.024 13.4799C18.7193 13.1752 18.306 13.004 17.875 13.004ZM13.2762 13.004C13.612 12.0525 14.2346 11.2286 15.0582 10.6458C15.8819 10.063 16.866 9.75 17.875 9.75C18.884 9.75 19.8681 10.063 20.6918 10.6458C21.5154 11.2286 22.138 12.0525 22.4737 13.004H24.375C24.806 13.004 25.2193 13.1752 25.524 13.4799C25.8288 13.7847 26 14.198 26 14.629C26 15.06 25.8288 15.4733 25.524 15.778C25.2193 16.0828 24.806 16.254 24.375 16.254H22.4737C22.138 17.2055 21.5154 18.0294 20.6918 18.6122C19.8681 19.195 18.884 19.508 17.875 19.508C16.866 19.508 15.8819 19.195 15.0582 18.6122C14.2346 18.0294 13.612 17.2055 13.2762 16.254H1.625C1.19402 16.254 0.780698 16.0828 0.475952 15.778C0.171205 15.4733 0 15.06 0 14.629C0 14.198 0.171205 13.7847 0.475952 13.4799C0.780698 13.1752 1.19402 13.004 1.625 13.004H13.2762ZM8.125 22.754C7.69402 22.754 7.2807 22.9252 6.97595 23.2299C6.67121 23.5347 6.5 23.948 6.5 24.379C6.5 24.81 6.67121 25.2233 6.97595 25.528C7.2807 25.8328 7.69402 26.004 8.125 26.004C8.55598 26.004 8.9693 25.8328 9.27405 25.528C9.57879 25.2233 9.75 24.81 9.75 24.379C9.75 23.948 9.57879 23.5347 9.27405 23.2299C8.9693 22.9252 8.55598 22.754 8.125 22.754ZM3.52625 22.754C3.86198 21.8025 4.48458 20.9786 5.30822 20.3958C6.13187 19.813 7.11602 19.5 8.125 19.5C9.13398 19.5 10.1181 19.813 10.9418 20.3958C11.7654 20.9786 12.388 21.8025 12.7237 22.754H24.375C24.806 22.754 25.2193 22.9252 25.524 23.2299C25.8288 23.5347 26 23.948 26 24.379C26 24.81 25.8288 25.2233 25.524 25.528C25.2193 25.8328 24.806 26.004 24.375 26.004H12.7237C12.388 26.9555 11.7654 27.7794 10.9418 28.3622C10.1181 28.945 9.13398 29.258 8.125 29.258C7.11602 29.258 6.13187 28.945 5.30822 28.3622C4.48458 27.7794 3.86198 26.9555 3.52625 26.004H1.625C1.19402 26.004 0.780698 25.8328 0.475952 25.528C0.171205 25.2233 0 24.81 0 24.379C0 23.948 0.171205 23.5347 0.475952 23.2299C0.780698 22.9252 1.19402 22.754 1.625 22.754H3.52625Z"
                      fill="white"
                    />
                  </svg>
                }
              />
            </Grid>
            <Grid item xs={11}>
              <Box sx={MapStyle.searchBox}>
                <Box sx={MapStyle.Search}>
                  <TextField
                    id="standard"
                    sx={MapStyle.StyledInputBase}
                    placeholder="Search Map..."
                    aria-label="search"
                  />
                  <Box sx={MapStyle.SearchIconWrapper}>
                    <img src="/images/search.svg" alt="Menu" />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={MapStyle.contentBox}>
          <Typography
            variant="h6"
            component="h6"
            sx={MapStyle.backLink}
            id="backUrl"
            className={state == "itemdetail" ? "" : "hidden"}
            onClick={() => setState("itemlist")}
          >
            {backTitle}
          </Typography>
          {state === "itemdetail" && (
            <ItemInfo showActivity={true} showImage={true} asset={asset} />
          )}

          {state === "itemlist" && <ItemList onItemDetail={onItemDetail} />}

          {state === "itemfilter" && <Box>Coming soon</Box>}
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
