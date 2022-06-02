import React from "react";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Container, Typography, CircularProgress } from "@mui/material";

import SuccessDialog from "@/components/Dialogs/ConfirmationDialog";
import SaleItemDetails from "@/components/Dialogs/UI/SaleItemDetails";
import SelectInput from "@/components/Dialogs/UI/SelectInput";
import Button from "@/components/UI/Button";
import Checkbox from "@/components/UI/Checkbox";
import Dialog from "@/components/UI/Dialog";
import BidSvg from "public/images/Bid.svg";

import {
  EditListingModal,
  mainContainer,
  termsText,
  tryAgainBtn,
} from "./ListSale.style";
const MakeBid = (props) => {
  const dialogContent = {
    dialogTitleText: "SUCCESSFULLY LISTED FOR SALE",
    dialogType: "success",
    dialogActionText:
      "Congrats on your new listing! Share it with your friends:",
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
      "FIXED PRICE": "$1,000,000.00",
      "SALE ENDS": "Sep 15, 2022 01:43 PM (PST)",
    },
  };

  const saleItemDialogContent = {
    land: "NetVRk Land",
    priceDollar: "$1,000,000.00",
    princETH: "390 ETH",
    ItemImage: {
      logo: true,
      type: "land",
      title: "Parcel #25",
      size: "MEGA",
      district: "BUSINESS",
      mainImage: "/images/land.png",
    },
  };
  const selectInputProps = {
    selected: "usd",
    label: "BID PRICE",
    selectInput: [
      {
        label: "USD",
        value: "usd",
        icon: <AttachMoneyIcon />,
      },
      {
        label: "INR",
        value: "inr",
        icon: <CurrencyRupeeIcon />,
      },
    ],
    inputTextValue: "$1,000,000.00",
  };
  const { handleOpen, open } = props;
  const [openSuccess, setOpen] = React.useState(false);
  const [processOpen, setProcessOpen] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("MAKE BID");
  const [buttonProgress, setButtonProgress] = React.useState(null);

  const SuccessDialogOpen = () => {
    setOpen(!openSuccess);
  };
  const handleButtonAction = (
    text: string,

    progress: string | JSX.Element,
  ) => {
    text ? setButtonText(text) : "PROCESSING";
    progress ? setButtonProgress(progress) : setButtonProgress(null);
  };

  const handleProcessClose = () => {
    setProcessOpen(false);
  };
  const handleProcessOpen = () => {
    setProcessOpen(true);
    handleButtonAction("PROCESSING", <CircularProgress size={30} />);
    setTimeout(() => {
      handleClose();
      SuccessDialogOpen();
    }, 2000);
  };

  const handleClose = () => {
    handleOpen();
    handleProcessClose();
    handleButtonAction("MAKE BID", null);
  };
  return (
    <Container>
      <Dialog
        processOpen={processOpen}
        dialogTitle="MAKE BID"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={EditListingModal}
        maxWidth={"md"}
        variant="primary"
        dialogActions={
          <Container sx={mainContainer}>
            <Checkbox label={""} />
            <Typography sx={termsText}>
              By checking this box, I agree to Netvrk&apos;s Terms of Service
            </Typography>
            <Button
              title={buttonText}
              disabled={!!buttonProgress}
              startIcon={buttonProgress && buttonProgress}
              icon={!buttonProgress && BidSvg}
              sx={tryAgainBtn}
              onClick={handleProcessOpen}
            />
          </Container>
        }
      >
        <SaleItemDetails {...saleItemDialogContent} />
        <SelectInput {...selectInputProps} />
      </Dialog>
      <SuccessDialog
        dialogContent={dialogContent}
        open={openSuccess}
        handleOpen={SuccessDialogOpen}
      />
    </Container>
  );
};

export default MakeBid;
