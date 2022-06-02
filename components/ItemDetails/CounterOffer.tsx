import React from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Box, CircularProgress, Divider, Typography } from "@mui/material";

import SuccessDialog from "@/components/Dialogs/ConfirmationDialog";
import FeeUI from "@/components/Dialogs/UI/FeeUI";
import { PopupTopSection } from "@/components/ItemDetails/editListing";
import {
  DailogContentStyle,
  ItemInfoStyle,
} from "@/components/ItemDetails/item.style";
import Button from "@/components/UI/Button";
import Dialog from "@/components/UI/Dialog";
import InputGroup from "@/components/UI/InputGroup";

export interface CounterOfferType {
  open?: boolean;
  counterOfferDgClose(arg: boolean): void;
}

const CounterOffer = (props: CounterOfferType) => {
  const { open, counterOfferDgClose } = props;

  const btnDefaultText = "COUNTER OFFER";
  const btnDefaultIcon = "/images/checkmark.svg";

  const [processOpen, setProcessOpen] = React.useState(false);
  const [buttonText, setButtonText] = React.useState(btnDefaultText);
  const [buttonIcon, setButtonIcon] = React.useState(btnDefaultIcon);
  const [buttonProgress, setButtonProgress] = React.useState(null);
  const [successOpen, setSuccessOpen] = React.useState(false);

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
    handleButtonAction("countering", null, <CircularProgress size={30} />);

    setTimeout(() => {
      handleClose();
      setSuccessOpen(true);
    }, 2000);
  };

  const handleClose = () => {
    counterOfferDgClose(false);
    handleProcessClose();
    handleButtonAction(btnDefaultText, btnDefaultIcon, null);
  };

  const successDialogOpen = () => {
    setSuccessOpen(!successOpen);
  };

  const successDialogContent = {
    dialogTitleText: (
      <>
        COUNTER OFFER SENT TO{" "}
        <Box component="span" sx={DailogContentStyle.parcelText}>
          BidMan3000
        </Box>
      </>
    ),
    dialogType: "primary",
    dialogActionText:
      "We will notify you if BidMan3000 accepts your counter offer",
    displaySocialLogo: false,
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
          <>
            COUNTER OFFER FROM{" "}
            <Box component="span" sx={DailogContentStyle.parcelText}>
              BidMan3000
            </Box>
          </>
        }
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        processOpen={processOpen}
        variant="primary"
        maxWidth="md"
        fullWidth={true}
        dialogActions={
          <Box
            className="d-flex justify-content-between w-100"
            sx={ItemInfoStyle.modalFooterButton}
          >
            <Typography
              sx={{ fontSize: "24px", textDecoratsion: "underline" }}
              className="d-flex align-items-center"
              onClick={handleClose}
            >
              {" "}
              <ArrowBackIosIcon />
              Back{" "}
            </Typography>
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
        }
      >
        <PopupTopSection topRightText="Subtotal" />
        <InputGroup
          label="COUNTER OFFER PRICE"
          value="$1,000,000.00"
          selected="usd"
          options={[
            { icon: <AttachMoneyIcon />, text: "USD", value: "usd" },
            { icon: <CurrencyRupeeIcon />, text: "INR", value: "inr" },
          ]}
        />
        <InputGroup
          label="COUNTER OFFER DURATION"
          value="01:43 PM (PST)"
          selected="Months"
          options={[
            { icon: <CalendarTodayIcon />, text: "6 Months", value: "Months" },
            { icon: <CalendarTodayIcon />, text: "1 Year", value: "Year" },
          ]}
        />
        <Box sx={DailogContentStyle.hairLine}></Box>
        <FeeUI label="NETVRK FEES" value="2.5%" />
        <FeeUI label="CREATOR ROYALTY" value="10.0%" />
        <Divider />
        <FeeUI
          label="COUNTER OFFER TOTAL EARNINGS"
          value="$4,000.00"
          subValue="(3 ETH)"
        />
      </Dialog>

      <SuccessDialog
        dialogContent={successDialogContent}
        open={successOpen}
        handleOpen={successDialogOpen}
      />
    </>
  );
};

export default CounterOffer;
