import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
// import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { Container, Typography } from "@mui/material";
// import Link from "next/link";

import SuccessDialog from "@/components/Dialogs/ConfirmationDialog";
import Button from "@/components/UI/Button";
import Dialog from "@/components/UI/Dialog";
import DeleteIcon from "public/images/delete.svg";

import {
  mainCoantiner,
  underlineText,
  // dialogContainer,
  // iconTagTransform,
  // dialogActionBox,
  // boxOverlay,
  dialogContentContainer,
  dialogStyle,
  titleSx,
  // btnText,
  cancelDialogText,
  cancelDialogTextSecondary,
  DiscardBtn,
} from "./Dialog.style";
import { DialogType } from "./Dialog.type";

function ContinueEdit(props) {
  const { handleCancelBack } = props;
  return (
    <Container sx={mainCoantiner}>
      <Typography sx={underlineText} onClick={handleCancelBack}>
        No, continue editing.
      </Typography>
    </Container>
  );
}
const CancelConfirmationDialog = (props: DialogType) => {
  const { handleCancelBack, open, dialogContent, handleOpen, handleCancel } =
    props;
  const [openCancelConfirmation, setopenCancelConfirmation] =
    React.useState(false);
  const cancelDialogContent = {
    dialogTitleText:
      dialogContent.dialogActionType == "offer"
        ? "OFFER REMOVED"
        : dialogContent.dialogActionType == "decline_offer"
        ? "OFFER DECLINED"
        : "LISTING REMOVED",
    dialogType: "error",
    dialogActionText:
      dialogContent.dialogActionType == "offer"
        ? "Your offer has been successfully removed"
        : dialogContent.dialogActionType == "decline_offer"
        ? "You have declined the offer made by BidMan3000"
        : "Your item has been successfully unlisted",
    displaySocialLogo: false,
    itemImage: {
      logo: true,
      type: "land",
      title: "Parcel #25",
      size: "MEGA",
      district: "BUSINESS",
      mainImage: "/images/land.png",
    },
  };
  const [processOpen, setProcessOpen] = React.useState(false);

  const CancelConfirmationDialogOpen = () => {
    setopenCancelConfirmation(!openCancelConfirmation);
  };

  const handleProcessClose = () => {
    setProcessOpen(false);
  };
  const handleProcessOpenBtn = () => {
    setProcessOpen(true);
    setTimeout(() => {
      handleClose();
      handleCancel();
    }, 2000);
  };

  const handleClose = () => {
    handleOpen();
    handleProcessClose();
  };
  return (
    <>
      <Dialog
        processOpen={processOpen}
        onClose={handleClose}
        open={open}
        titleSx={titleSx}
        dialogTitle={dialogContent.dialogTitleText}
        dialogActions={
          <ContinueEdit handleCancelBack={handleCancelBack} />
          // dialogContent.dialogType !== "cancel" ? (
          //   <Container sx={dialogContainer}>
          //     <Box sx={dialogActionBox}>
          //       <Button
          //         title={"CANCEL LISTING"}
          //         icon={DeleteIcon}
          //         iconSize="30%"
          //         variant="danger-filled"
          //         sx={btnText}
          //       />
          //     </Box>

          //     <Button
          //       title="SAVE CHANGES"
          //       startIcon={<LocalOfferOutlinedIcon sx={iconTagTransform} />}
          //       sx={btnText}
          //     />
          //     <Box sx={boxOverlay}></Box>
          //   </Container>
          // ) : (
          //   <ContinueEdit handleCancelBack={handleCancelBack} />
          // )
        }
        variant="primary"
        sx={dialogStyle}
      >
        <Container sx={dialogContentContainer}>
          <ErrorOutlineIcon />
          <Typography sx={cancelDialogText}>
            {dialogContent.primaryText}
          </Typography>
          <Typography sx={cancelDialogTextSecondary}>
            {dialogContent.secondaryText}
          </Typography>
          <Button
            title={dialogContent.buttonText}
            startIcon={dialogContent.dialogType != "cancel" && <CloseIcon />}
            icon={dialogContent.dialogType === "cancel" && DeleteIcon}
            variant="danger-filled"
            sx={DiscardBtn}
            onClick={handleProcessOpenBtn}
          />
          {/* {dialogContent.dialogType != "cancel" && (
            <ContinueEdit handleCancelBack={handleCancelBack} />
          )} */}
        </Container>
      </Dialog>
      <SuccessDialog
        dialogContent={cancelDialogContent}
        open={openCancelConfirmation}
        handleOpen={CancelConfirmationDialogOpen}
      />
    </>
  );
};

export default CancelConfirmationDialog;
