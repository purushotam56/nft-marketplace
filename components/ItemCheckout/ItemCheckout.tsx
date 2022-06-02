import React from "react";

import { Box, Grid, Typography, CircularProgress } from "@mui/material";
import Image from "next/image";

import { CheckoutDialogStyle } from "@/components/ItemCheckout/ItemCheckout.style";
import { ItemInfoStyle } from "@/components/ItemDetails/item.style";
import Button from "@/components/UI/Button";
import Checkbox from "@/components/UI/Checkbox";
import Dialog from "@/components/UI/Dialog";
import ETHLogo from "public/images/ethLogo.svg";
import WalletImg from "public/images/wallet.svg";

import SuccessDialog from "../Dialogs/ConfirmationDialog/Dialog";
import SaleItemDetails from "../Dialogs/UI/SaleItemDetails";
export interface SaleItemProps {
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
export interface byuItemDetails {
  totalETH: string;
  totalDollar: string;
}
export interface CheckoutType {
  open?: boolean;
  checkoutDgClose(arg: boolean): void;
  SaleItemProps: SaleItemProps;
  byuItemDetails: byuItemDetails;
  tryAgainFunc: any;
}

const ItemCheckout = (props: CheckoutType) => {
  const { open, checkoutDgClose, SaleItemProps, byuItemDetails, tryAgainFunc } =
    props;

  const [processOpen, setProcessOpen] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("BUY NOW");
  const [buttonIcon, setButtonIcon] = React.useState(WalletImg);
  const [buttonProgress, setButtonProgress] = React.useState(null);
  const [openSuccess, setOpenSuccess] = React.useState(false);

  const handleButtonAction = (
    text: string,
    icon: string,
    progress: string | JSX.Element,
  ) => {
    text ? setButtonText(text) : "BUY NOW";
    icon ? setButtonIcon(icon) : setButtonIcon(null);
    progress ? setButtonProgress(progress) : setButtonProgress(null);
  };

  const handleProcessClose = () => {
    setProcessOpen(false);
  };

  const SuccessDialogOpen = () => {
    setOpenSuccess(!openSuccess);
  };
  const handleProcessOpen = () => {
    setProcessOpen(true);
    handleButtonAction("processing", null, <CircularProgress size={30} />);

    setTimeout(() => {
      handleClose();
      SuccessDialogOpen();
    }, 2000);
  };

  const handleClose = () => {
    checkoutDgClose(false);
    handleProcessClose();
    handleButtonAction("BUY NOW", WalletImg, null);
  };

  React.useEffect(() => {
    tryAgainFunc.current = handleProcessOpen;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //Successfull Prop
  const dialogContent = {
    dialogTitleText: "SUCCESSFUL TRANSACTION",
    dialogType: "success",
    dialogActionText:
      "Congrats on your new purchase! Share it with your friends:",
    displaySocialLogo: true,
    itemImage: SaleItemProps.ItemImage,
    information: {
      "PURCHASE PRICE": (
        <Box className="d-flex">
          <Image src={ETHLogo} height="25%" width="30%" />
          {byuItemDetails.totalETH}
        </Box>
      ),
    },
  };
  return (
    <>
      <Dialog
        dialogTitle="complete checkout"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        processOpen={processOpen}
        variant="primary"
        maxWidth="md"
        fullWidth={true}
        dialogActions={
          <Grid container spacing={0} className="align-items-center">
            <Grid item xs={12} md={8}>
              <Box>
                <Checkbox
                  checked
                  disabled
                  label="By checking this box, I agree to Netvrk's Terms of Service"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box>
                <Button
                  title={buttonText}
                  icon={buttonIcon}
                  disabled={!!buttonProgress}
                  startIcon={buttonProgress}
                  sx={ItemInfoStyle.buyNowBtn}
                  onClick={handleProcessOpen}
                />
              </Box>
            </Grid>
          </Grid>
        }
      >
        {/* <PopupTopSection topRightText="subtotal" /> */}
        <SaleItemDetails {...SaleItemProps} />
        <Grid container spacing={0} sx={CheckoutDialogStyle.bottomSection}>
          <Grid item xs={12} md={6}>
            <Typography sx={CheckoutDialogStyle.totalTitle}>TOTAL</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h5"
                component="div"
                sx={CheckoutDialogStyle.price}
              >
                <Image src={ETHLogo} height="25%" width="30%" />
                {byuItemDetails.totalETH}
              </Typography>
              <Typography component="span" sx={CheckoutDialogStyle.ethPrice}>
                (${byuItemDetails.totalDollar})
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Dialog>
      <SuccessDialog
        dialogContent={dialogContent}
        open={openSuccess}
        handleOpen={SuccessDialogOpen}
      />
    </>
  );
};

export default ItemCheckout;
