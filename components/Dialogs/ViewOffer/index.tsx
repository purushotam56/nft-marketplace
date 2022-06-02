import React from "react";

import CheckIcon from "@mui/icons-material/Check";
import { Container, CircularProgress, Divider, Box } from "@mui/material";

import SuccessDialog from "@/components/Dialogs/ConfirmationDialog";
import Button from "@/components/UI/Button";
import Dialog from "@/components/UI/Dialog";

import { EditListingModal } from "../ListSale/ListSale.style";
import FeeUI from "../UI/FeeUI";
import SaleItemDetails from "../UI/SaleItemDetails";

const SaleDialog = (props) => {
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
  const dialogContent = {
    dialogTitleText: "SUCCESSFULLY ACCEPTED OFFER",
    dialogType: "success",
    dialogActionText: "Congrats on your sale! Share it with your friends:",
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
      "SALE PRICE": "$1,000,000.00",
      "TOTAL EARNING": "$2,000.00",
      "NEW OWNER": "BudMan3000",
    },
  };
  const { handleOpen, open } = props;
  const [openSuccess, setOpen] = React.useState(false);
  const [processOpen, setProcessOpen] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("ACCEPT OFFER");
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
    handleButtonAction("PROCESSING", <CircularProgress size={30} />);
    setTimeout(() => {
      handleClose();
      SuccessDialogOpen();
    }, 2000);
  };

  const handleClose = () => {
    handleOpen();
    handleProcessClose();
    handleButtonAction("ACCEPT OFFER", null);
  };
  return (
    <Container>
      <Dialog
        processOpen={processOpen}
        dialogTitle="VIEW OFFER FROM"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={EditListingModal}
        maxWidth={"md"}
        variant="primary"
        dialogActions={
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
              }}
            >
              <Button
                variant="danger-filled"
                title="DECLINE"
                sx={{
                  width: "90%",
                  mr: 2,
                  ".MuiTypography-root": {
                    fontFamily: "Teko",
                    fontWeight: "500",
                    fontSize: "1.8rem",
                  },
                }}
              />
              <Button
                variant="outlined"
                title="COUNTER"
                sx={{
                  width: "90%",

                  "&.CCButton-outlined": {
                    border: "1px solid black",
                  },
                  ".MuiTypography-root": {
                    fontFamily: "Teko",
                    fontWeight: "500",
                    fontSize: "1.8rem",
                  },
                }}
              />
            </Box>
            <Button
              title={buttonText}
              disabled={!!buttonProgress}
              startIcon={
                buttonProgress ? (
                  buttonProgress
                ) : (
                  <CheckIcon
                    sx={{
                      "&.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium": {
                        fontSize: "1.8rem",
                      },
                    }}
                  />
                )
              }
              sx={{
                fontSize: "16px",
                lineHeight: "18px",
                width: "40%",
                height: "60px",
                color: "#A29DB0",
                ".MuiTypography-root": {
                  fontFamily: "Teko",
                  fontWeight: "500",
                  fontSize: "1.8rem",
                },
                "&.MuiButton-startIcon": {
                  fontSize: "6.8rem",
                },
                "&.MuiModal-root-MuiDialog-root .MuiSvgIcon-root": {
                  fontSize: "1.8rem",
                },
              }}
              onClick={handleProcessOpen}
            />
          </Box>
        }
      >
        <SaleItemDetails {...saleItemDialogContent} />
        <FeeUI label="NETVRK FEES" value="2.5%" />
        <FeeUI label="CREATOR ROYALTY" value="10.0%" />
        <Divider />
        <FeeUI label="TOTAL EARNINGS" value="$2,000.00" subValue="(3 ETH)" />
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
