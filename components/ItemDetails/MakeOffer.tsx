import React from "react";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HelpIcon from "@mui/icons-material/Help";
import { Box, Grid, CircularProgress, Divider } from "@mui/material";

import CancelDialog from "@/components/Dialogs/CancelConfirmation";
import SuccessDialog from "@/components/Dialogs/ConfirmationDialog";
import FeeUI from "@/components/Dialogs/UI/FeeUI";
import { PopupTopSection } from "@/components/ItemDetails/editListing";
import {
  DailogContentStyle,
  ItemInfoStyle,
} from "@/components/ItemDetails/item.style";
import Button from "@/components/UI/Button";
import Checkbox from "@/components/UI/Checkbox";
import Dialog from "@/components/UI/Dialog";
import InputGroup from "@/components/UI/InputGroup";
import MakeOfferIcon from "public/images/make-offer.svg";

import CounterOffer from "./CounterOffer";

export interface MakeOfferType {
  open?: boolean;
  action?: "make" | "edit" | "view" | "counter";
  makeOfferDgClose(arg: boolean): void;
}

const MakeOffer = (props: MakeOfferType) => {
  const { open, makeOfferDgClose, action = "make" } = props;

  const successTitleText =
    action == "make"
      ? "SUCCESSFUL OFFER"
      : action == "edit"
      ? "SUCCESSFUL EDIT OFFER"
      : "SUCCESSFULLY ACCEPTED OFFER";
  const btnDefaultText =
    action == "make"
      ? "MAKE OFFER"
      : action == "edit"
      ? "SAVE CHANGES"
      : "ACCEPT OFFER";
  const btnDefaultIcon =
    action == "make"
      ? MakeOfferIcon
      : action == "edit"
      ? "/images/save.svg"
      : "/images/checkmark.svg";

  const [processOpen, setProcessOpen] = React.useState(false);
  const [buttonText, setButtonText] = React.useState(btnDefaultText);
  const [buttonIcon, setButtonIcon] = React.useState(btnDefaultIcon);
  const [buttonProgress, setButtonProgress] = React.useState(null);
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [openCancel, setOpenCancel] = React.useState(false);
  const [counterOfferOpen, setCounterOfferOpen] = React.useState(false);

  const handleButtonAction = (
    text: string,
    icon: string,
    progress: string | JSX.Element,
  ) => {
    text ? setButtonText(text) : "MAKE OFFER";
    icon ? setButtonIcon(icon) : setButtonIcon(null);
    progress ? setButtonProgress(progress) : setButtonProgress(null);
  };

  const handleProcessClose = () => {
    setProcessOpen(false);
  };
  const handleProcessOpen = () => {
    setProcessOpen(true);
    handleButtonAction(
      action == "edit" ? "saving" : "processing",
      null,
      <CircularProgress size={30} />,
    );

    setTimeout(() => {
      handleClose();
      setSuccessOpen(true);
    }, 2000);
  };

  const handleClose = () => {
    makeOfferDgClose(false);
    handleProcessClose();
    handleButtonAction(btnDefaultText, btnDefaultIcon, null);
  };

  const successDialogOpen = () => {
    setSuccessOpen(!successOpen);
  };

  const cancelDialogOpen = () => {
    handleClose();
    setOpenCancel(true);
  };

  const cancelDialogClose = () => {
    setOpenCancel(false);
  };

  const counterOfferDgOpen = () => {
    handleClose();
    setCounterOfferOpen(true);
  };

  const counterOfferDgClose = (arg: boolean): void => {
    setCounterOfferOpen(arg);
  };

  const successDialogContent = {
    dialogTitleText: successTitleText,
    dialogType: "success",
    dialogActionText: "Good luck on your offer! Share it with your friends:",
    displaySocialLogo: true,
    itemImage: {
      logo: true,
      type: "land",
      title: "Parcel #25",
      size: "MEGA",
      district: "BUSINESS",
      mainImage: "/images/land.png",
    },
    information: {
      "OFFER PRICE": "$1,000,000.00",
    },
  };

  return (
    <>
      <Dialog
        dialogTitle={
          action == "make" ? (
            "make offer"
          ) : action == "edit" ? (
            "edit Offer"
          ) : (
            <>
              VIEW ORDER FROM{" "}
              <Box component="span" sx={DailogContentStyle.parcelText}>
                BidMan3000
              </Box>
            </>
          )
        }
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        processOpen={processOpen}
        variant="primary"
        maxWidth="md"
        fullWidth={true}
        dialogActions={
          action == "make" ? (
            <Grid container spacing={0} sx={{ alignItems: "center" }}>
              <Grid item xs={12} md={8}>
                <Box>
                  <Checkbox label="By checking this box, I agree to Netvrk's Terms of Service" />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box>
                  <Button
                    title={buttonText}
                    icon={buttonIcon}
                    /*disabled={!!buttonProgress}*/
                    startIcon={buttonProgress}
                    sx={ItemInfoStyle.buyNowBtn}
                    onClick={handleProcessOpen}
                  />
                </Box>
              </Grid>
            </Grid>
          ) : action == "edit" ? (
            <Box
              className="d-flex justify-content-between w-100"
              sx={ItemInfoStyle.modalFooterButton}
            >
              <Button
                title="Cancel Listing"
                variant="danger-filled"
                icon="/images/trash.svg"
                iconSize="30"
                onClick={cancelDialogOpen}
              />
              <Button
                title={buttonText}
                variant="filled"
                icon={buttonIcon}
                /*disabled={!!buttonProgress}*/
                startIcon={buttonProgress}
                iconSize="30"
                onClick={handleProcessOpen}
              />
            </Box>
          ) : (
            <Box
              className="d-flex justify-content-between w-100"
              sx={ItemInfoStyle.modalFooterButton}
            >
              <Button
                title="Decline"
                variant="danger-filled"
                onClick={cancelDialogOpen}
              />
              <Button
                title="COUNTER"
                variant="outlined"
                onClick={counterOfferDgOpen}
                sx={{
                  marginLeft: "10px",
                  marginRight: "auto",
                  borderColor: "black !important",
                  background: "none !important",
                }}
              />
              <Button
                title={buttonText}
                variant="filled"
                icon={buttonIcon}
                /*disabled={!!buttonProgress}*/
                startIcon={buttonProgress}
                iconSize="30"
                onClick={handleProcessOpen}
              />
            </Box>
          )
        }
      >
        <PopupTopSection
          topRightText={
            action == "make"
              ? "current price"
              : action == "edit"
              ? "current offer price"
              : "Subtotal"
          }
        />
        {action == "view" ? (
          <>
            <FeeUI label="NETVRK FEES" value="2.5%" />
            <FeeUI label="CREATOR ROYALTY" value="10.0%" />
            <Divider />
            <FeeUI
              label="TOTAL EARNINGS"
              value="$2,000.00"
              subValue="(3 ETH)"
            />
          </>
        ) : (
          <>
            <InputGroup
              label="Price"
              value="$1,000,000.00"
              selected="usd"
              options={[
                { icon: <AttachMoneyIcon />, text: "USD", value: "usd" },
                { icon: <CurrencyRupeeIcon />, text: "INR", value: "inr" },
              ]}
            />
            <InputGroup
              label="Duration"
              value="01:43 PM (PST)"
              selected="Months"
              options={[
                {
                  icon: <CalendarTodayIcon />,
                  text: "6 Months",
                  value: "Months",
                },
                { icon: <CalendarTodayIcon />, text: "1 Year", value: "Year" },
              ]}
            />
            <Box sx={DailogContentStyle.hairLine}></Box>
            <Box className="d-flex justify-content-between">
              <Box
                sx={DailogContentStyle.formLabel}
                className="font-play d-flex align-items-center"
              >
                Fees <HelpIcon />
              </Box>
              <Box
                sx={DailogContentStyle.formValue}
                className="font-play d-flex align-items-center"
              >
                2.5%
              </Box>
            </Box>
          </>
        )}
      </Dialog>

      <SuccessDialog
        dialogContent={successDialogContent}
        open={successOpen}
        handleOpen={successDialogOpen}
      />
      <CancelDialog
        open={openCancel}
        handleOpen={cancelDialogOpen}
        handleCancelBack={cancelDialogClose}
        dialogContent={{
          dialogTitleText:
            action == "edit" ? (
              "EDIT OFFER"
            ) : (
              <>
                DECLINE OFFER FROM{" "}
                <Box component="span" sx={DailogContentStyle.parcelText}>
                  BidMan3000
                </Box>
              </>
            ),
          primaryText:
            action == "edit"
              ? "Your offer will be removed. Are you sure you want to cancel?"
              : "Are you sure you want to decline this offer?",
          secondaryText:
            action == "edit"
              ? "Yes, I want to cancel my offer."
              : "Yes, I want to decline this offer.",
          buttonText: action == "edit" ? "CANCEL OFFER" : "DECLINE OFFER",
          dialogType: "cancel",
          dialogActionType: action == "edit" ? "offer" : "decline_offer",
        }}
        handleCancel={cancelDialogOpen}
      />
      <CounterOffer
        open={counterOfferOpen}
        counterOfferDgClose={counterOfferDgClose}
      />
    </>
  );
};

export default MakeOffer;
