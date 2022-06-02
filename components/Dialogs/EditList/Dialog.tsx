import React from "react";

// import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Container, CircularProgress, Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import CancelDialog from "@/components/Dialogs/CancelConfirmation";
import SuccessDialog from "@/components/Dialogs/ConfirmationDialog";
import FeeUI from "@/components/Dialogs/UI/FeeUI";
import SaleItemDetails from "@/components/Dialogs/UI/SaleItemDetails";
import SelectInput from "@/components/Dialogs/UI/SelectInput";
import Button from "@/components/UI/Button";
import Dialog from "@/components/UI/Dialog";
import ETHLogo from "public/images/ethLogo.svg";

// import EditListingPopup from "./ListingDialogContent";
import {
  btnText,
  dialogContainer,
  ItemInfoStyle,
  dialogActionBox,
  InputGroupStyle,
  btnProcessText,
  ETHLinkBox,
  ETHLinkText,
} from "./ListSale.style";
export interface SaleItem {
  land: string;
  priceDollar: string;
  princETH: string;
  ItemImage: {
    logo: boolean;
    type: string;
    title: string;
    size: string;
    district: string;
    mainImage: string;
  };
}
export interface SaleItemProps {
  open?: boolean;
  handleOpen(): void;
  SaleItem: SaleItem;
  // byuItemDetails: byuItemDetails;
}

const SaleDialog = (props: SaleItemProps) => {
  const ethLink =
    "https://etherscan.io/tx/0xdafbca0a4d1e9a7202f66570d8b6b56a49741a6ac88d28f4ba4997c44ddeb7e9";
  const { handleOpen, open, SaleItem } = props;
  const [openSuccess, setOpen] = React.useState(false);
  const [processOpen, setProcessOpen] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("SAVE CHANGES");
  const [buttonProgress, setButtonProgress] = React.useState(null);

  const dialogContent = {
    dialogTitleText: "SUCCESSFULLY UPDATED",
    dialogType: "success",
    dialogActionText:
      "Congrats on editing your listing! Share it with your friends:",
    displaySocialLogo: true,
    itemImage: SaleItem.ItemImage,
    information: {
      "STARTING PRICE": (
        <Box className="d-flex">
          <Image src={ETHLogo} height="25%" width="30%" />
          {SaleItem.princETH}
        </Box>
      ),
      "SALE ENDS": "Sep 15, 2022 01:43 PM (PST)",
    },
  };
  const canceOfferContent = {
    dialogTitleText: "LISTING REMOVED",
    dialogType: "error",
    displaySocialLogo: false,
    dialogActionText: "Your item has been successfully unlisted",
    itemImage: SaleItem.ItemImage,
  };
  const [openCancleOffer, setOpenCancleOffer] = React.useState(false);
  const CancelOfferOpen = () => {
    setOpenCancleOffer(!openCancleOffer);
  };

  const CancelOfferBackOpen = () => {
    setOpenCancleOffer(!openCancleOffer);
    handleOpen();
  };
  const SuccessDialogOpen = () => {
    setOpen(!openSuccess);
  };
  const handleButtonAction = (text: string, progress: string | JSX.Element) => {
    text ? setButtonText(text) : "PROCESSING";
    progress ? setButtonProgress(progress) : setButtonProgress(null);
  };

  const handleProcessClose = () => {
    setProcessOpen(false);
  };
  const closeEditDialog = () => {
    handleOpen();
    handleProcessClose();
    handleButtonAction("SAVE CHANGES", null);
  };
  const handleProcessOpen = () => {
    setProcessOpen(true);
    handleButtonAction("PROCESSING", <CircularProgress size={30} />);
    setTimeout(() => {
      closeEditDialog();
      SuccessDialogOpen();
    }, 2000);
  };

  const handleClose = () => {
    closeEditDialog();
    DiscardOfferOpen();
  };

  const handleCancelOpen = () => {
    CancelModifyConfirmationDialogOpen();
  };
  const [openModifyCancelConfirmation, setopenModiyfCancelConfirmation] =
    React.useState(false);
  const CancelModifyConfirmationDialogOpen = () => {
    setopenModiyfCancelConfirmation(!openModifyCancelConfirmation);
  };
  const selectInputProps = {
    selected: "eth",
    label: "PRICE",
    selectInput: [
      {
        label: "ETH",
        value: "eth",
        icon: <Image src={ETHLogo} height="25%" width="30%" />,
      },
      // {
      //   label: "INR",
      //   value: "inr",
      //   icon: <CurrencyRupeeIcon />,
      // },
    ],
    inputTextValue: "$1,000,000.00",
  };
  const selectInputProps1 = {
    selected: "Months",
    label: "DURATION",
    selectInput: [
      {
        label: "6 Months",
        value: "Months",
        icon: <CalendarTodayIcon />,
      },
      {
        label: "1 Year",
        value: "Year",
        icon: <CalendarTodayIcon />,
      },
    ],
    inputTextValue: "01:43 PM (PST)",
  };

  const onCancelClick = () => {
    closeEditDialog();
    CancelOfferOpen();
  };
  //discard offer
  const handleDicardProcessOpen = () => {
    // DiscardModifyConfirmationDialogOpen();
  };
  const [openDiscarddialog, setOpenDiscarddialog] = React.useState(false);
  const DiscardOfferOpen = () => {
    setOpenDiscarddialog(!openDiscarddialog);
  };
  // handleOpen
  const DiscardOfferBackOpen = () => {
    DiscardOfferOpen();
    handleOpen();
  };
  return (
    <Container>
      <Dialog
        processOpen={processOpen}
        dialogTitle="EDIT LISTING"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={ItemInfoStyle.editListingModal}
        maxWidth={"md"}
        variant="primary"
        dialogActions={
          <Container sx={dialogContainer}>
            <Box sx={dialogActionBox}>
              {!buttonProgress ? (
                <Button
                  title="Cancel Listing"
                  variant="danger-filled"
                  icon="/images/trash.svg"
                  iconSize="30"
                  sx={btnText}
                  onClick={onCancelClick}
                />
              ) : (
                <Box sx={ETHLinkBox}>
                  <Link href={ethLink}>
                    <a target="_blank">
                      <Typography sx={ETHLinkText}>
                        {" "}
                        View transaction on Etherscan
                      </Typography>
                    </a>
                  </Link>
                </Box>
              )}
              <Button
                icon={!buttonProgress && "/images/save.svg"}
                iconSize="25"
                title={buttonText}
                disabled={!!buttonProgress}
                startIcon={buttonProgress && buttonProgress}
                sx={btnProcessText}
                onClick={handleProcessOpen}
              />
            </Box>
          </Container>
        }
      >
        <SaleItemDetails {...SaleItem} />
        <SelectInput {...selectInputProps} />
        <SelectInput {...selectInputProps1} />
        <Box sx={InputGroupStyle.hairLine}></Box>
        <FeeUI label="FEES" value="2.5%" />
        {/* <EditListingPopup /> */}
      </Dialog>
      <SuccessDialog
        dialogContent={dialogContent}
        open={openSuccess}
        handleOpen={SuccessDialogOpen}
      />
      <CancelDialog
        open={openCancleOffer}
        handleOpen={CancelOfferOpen}
        handleCancelBack={CancelOfferBackOpen}
        handleCancel={handleCancelOpen}
        dialogContent={{
          dialogTitleText: "EDIT OFFER",
          primaryText:
            "This listing will no longer be available for purchase on the Netvrk marketplace.",
          secondaryText: "Yes, I want to cancel this listing.",
          buttonText: "CANCEL LISTING",
          dialogType: "cancel",
        }}
      />
      <SuccessDialog
        dialogContent={canceOfferContent}
        open={openModifyCancelConfirmation}
        handleOpen={CancelModifyConfirmationDialogOpen}
      />
      <CancelDialog
        open={openDiscarddialog}
        handleOpen={DiscardOfferOpen}
        handleCancel={handleDicardProcessOpen}
        handleCancelBack={DiscardOfferBackOpen}
        dialogContent={{
          dialogTitleText: "EDIT OFFER",
          primaryText:
            "Changes will not be saved. Are you sure you want to continue?",
          secondaryText:
            "Yes, I want to discard any changes and use the original settings for this Offer.",
          buttonText: "DISCARD CHANGES",
          dialogType: "discard",
        }}
      />
    </Container>
  );
};

export default SaleDialog;
