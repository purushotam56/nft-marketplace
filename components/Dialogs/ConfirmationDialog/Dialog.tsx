import React from "react";

import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkIcon from "@mui/icons-material/Link";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";

import Image from "@/components/ItemDetails/Image";
import Button from "@/components/UI/Button";
import Dialog from "@/components/UI/Dialog";

import {
  checkCircleIcon,
  cicleMapStyle,
  detailKey,
  detailListHolder,
  detailList,
  detailValue,
  dialogActionBox,
  dialogActionBoxText,
  dialogContentContainer,
  dialogStyle,
  ItemImage,
  itemTitleText,
  netvrkLogoStyle,
  parcelDetailsStyle,
  SocialLogo,
  titleSx,
  viewIcon,
  viewItem,
} from "./Dialog.style";
import { DialogType } from "./Dialog.type";

const SuccessDialog = (props: DialogType) => {
  const { handleOpen, open, dialogContent } = props;

  return (
    <Dialog
      onClose={handleOpen}
      open={open}
      titleSx={titleSx}
      dialogTitle={
        <>
          {dialogContent.dialogType === "success" ? (
            <CheckCircleIcon sx={checkCircleIcon} />
          ) : (
            <CancelIcon sx={checkCircleIcon} />
          )}
          {dialogContent.dialogTitleText}
        </>
      }
      dialogActions={
        <Grid container sx={dialogActionBox}>
          <Grid item xs={8} sm={8} md={8} lg={8}>
            <Box sx={dialogActionBox}>
              <Typography sx={dialogActionBoxText}>
                {dialogContent.dialogActionText}
              </Typography>
              {dialogContent.displaySocialLogo && (
                <>
                  <TwitterIcon sx={SocialLogo} />
                  <FacebookIcon sx={SocialLogo} />
                  <TelegramIcon sx={SocialLogo} />
                  <LinkIcon sx={SocialLogo} />
                </>
              )}
            </Box>
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <Button
              variant="outlined"
              title="View Item"
              sx={viewItem}
              onClick={handleOpen}
              startIcon={<RemoveRedEyeOutlinedIcon sx={viewIcon} />}
            ></Button>
          </Grid>
        </Grid>
      }
      variant={
        dialogContent.dialogType === "success"
          ? "success"
          : dialogContent.dialogType === "error"
          ? "error"
          : "primary"
      }
      sx={dialogStyle}
    >
      <Container sx={dialogContentContainer}>
        {dialogContent.itemImage.title && (
          <>
            <Typography variant="h5" sx={itemTitleText}>
              {dialogContent.itemImage.title}
            </Typography>
          </>
        )}
        <Box sx={ItemImage}>
          <Grid>
            <Box>
              <Image
                ItemImage={dialogContent.itemImage}
                cicleMapStyle={cicleMapStyle}
                parcelDetailsStyle={parcelDetailsStyle}
                netvrkLogoStyle={netvrkLogoStyle}
              />
            </Box>
          </Grid>
          <List sx={detailListHolder}>
            {dialogContent.information &&
              Object.keys(dialogContent.information).map((key) => {
                return (
                  <ListItem key={key} sx={detailList}>
                    <>
                      <Box sx={detailKey}>{key}</Box>
                      <Box sx={detailValue}>
                        {dialogContent.information[key]}
                      </Box>
                    </>
                  </ListItem>
                );
              })}
          </List>
        </Box>
      </Container>
    </Dialog>
  );
};

export default SuccessDialog;
