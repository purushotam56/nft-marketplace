import React from "react";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { Container, Typography, CircularProgress, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import SuccessDialog from "@/components/Dialogs/ConfirmationDialog";
import {
  ETHLinkBox,
  ETHLinkText,
} from "@/components/Dialogs/EditList/ListSale.style";
import FeeUI from "@/components/Dialogs/UI/FeeUI";
import SaleItemDetails from "@/components/Dialogs/UI/SaleItemDetails";
import SelectInput from "@/components/Dialogs/UI/SelectInput";
import Button from "@/components/UI/Button";
import Checkbox from "@/components/UI/Checkbox";
import Dialog from "@/components/UI/Dialog";
import ETHLogo from "public/images/ethLogo.svg";

// import EditListingPopup from "./ListingDialogContent";
import {
  EditListingModal,
  mainContainer,
  termsText,
  iconTagTransform,
  tryAgainBtn,
  InputGroupStyle,
  termsBox,
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
}
const SaleDialog = (props: SaleItemProps) => {
  const { handleOpen, open, SaleItem } = props;
  const ethLink =
    "https://etherscan.io/tx/0xdafbca0a4d1e9a7202f66570d8b6b56a49741a6ac88d28f4ba4997c44ddeb7e9";
  const dialogContent = {
    dialogTitleText: "SUCCESSFULLY LISTED FOR SALE",
    dialogType: "success",
    dialogActionText:
      "Congrats on your new listing! Share it with your friends:",
    displaySocialLogo: true,
    itemImage: SaleItem.ItemImage,
    information: {
      "FIXED PRICE": (
        <Box className="d-flex">
          <Image src={ETHLogo} height="25%" width="30%" />
          {SaleItem.princETH}
        </Box>
      ),
      "SALE ENDS": "Sep 15, 2022 01:43 PM (PST)",
    },
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

  const [openSuccess, setOpen] = React.useState(false);
  const [processOpen, setProcessOpen] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("LIST FOR SALE");
  const [buttonProgress, setButtonProgress] = React.useState(null);

  const SuccessDialogOpen = () => {
    setOpen(!openSuccess);
  };
  const handleButtonAction = (
    text: string,

    progress: string | JSX.Element,
  ) => {
    text ? setButtonText(text) : "LISTING";
    progress ? setButtonProgress(progress) : setButtonProgress(null);
  };

  const handleProcessClose = () => {
    setProcessOpen(false);
  };
  const handleProcessOpen = () => {
    setProcessOpen(true);
    handleButtonAction("LISTING", <CircularProgress size={30} />);
    setTimeout(() => {
      handleClose();
      SuccessDialogOpen();
    }, 2000);
  };

  const handleClose = () => {
    handleOpen();
    handleProcessClose();
    handleButtonAction("LIST FOR SALE", null);
  };
  return (
    <Container>
      <Dialog
        processOpen={processOpen}
        dialogTitle="LIST FOR SALE"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={EditListingModal}
        maxWidth={"md"}
        variant="primary"
        dialogActions={
          <Container sx={mainContainer}>
            <Box sx={termsBox}>
              {!buttonProgress ? (
                <Box className="d-flex align-items-center">
                  {" "}
                  <Checkbox label={""} disabled checked />{" "}
                  <Typography sx={termsText}>
                    By checking this box, I agree to Netvrk&apos;s Terms of
                    Service
                  </Typography>
                </Box>
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
                title={buttonText}
                disabled={!!buttonProgress}
                startIcon={
                  buttonProgress ? (
                    buttonProgress
                  ) : (
                    <LocalOfferOutlinedIcon sx={iconTagTransform} />
                  )
                }
                sx={tryAgainBtn}
                onClick={handleProcessOpen}
              />
              {/* <Button
              // variant="filled"
              icon={!buttonProgress && "/images/save.svg"}
              iconSize="25"
              title={buttonText}
              disabled={!!buttonProgress}
              startIcon={buttonProgress && buttonProgress}
              sx={btnProcessText}
              onClick={handleProcessOpen}
            /> */}
            </Box>
          </Container>
          // <Box sx={mainContainer}>
          //   {!buttonProgress ? (

          //   ) : (
          //     <Box sx={{ zIndex: "1", textDecoration: "under" }}>
          //       <Link href={ethLink}>
          //         <a target="_blank">
          //           <Typography
          //             sx={{ textDecoration: "underline", cursor: "pointer" }}
          //           >
          //             {" "}
          //             View transaction on Etherscan
          //           </Typography>
          //         </a>
          //       </Link>
          //     </Box>
          //   )}

          // </Box>
        }
      >
        {/* <EditListingPopup /> */}
        <SaleItemDetails {...SaleItem} />
        <SelectInput {...selectInputProps} />
        <SelectInput {...selectInputProps1} />
        <Box sx={InputGroupStyle.hairLine}></Box>
        <FeeUI label="FEES" value="2.5%" />
      </Dialog>
      <SuccessDialog
        dialogContent={dialogContent}
        open={openSuccess}
        handleOpen={SuccessDialogOpen}
      />
    </Container>
  );
};

export default SaleDialog;
