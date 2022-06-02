import { FC } from "react";

import { Container } from "@mui/material";

import Dialog from "@/components/UI/Dialog";
import { TxStatus } from "@/types/types";

import SuccessDialog from "../ConfirmationDialog/Dialog";
import { TransactionDialogStyle } from "./TransactionDialog.style";

type Props = {
  open: boolean;
  onClose: () => void;
  status: TxStatus;
  hash?: string;
};

const TransactionDialog: FC<Props> = ({
  open,
  onClose,
  status,
  hash,
}: Props) => {
  const successDialogContent = {
    dialogTitleText: "TRANSACTION SUCCEED",
    dialogType: "success",
    displaySocialLogo: false,
    dialogActionText: "Transaction succeed.",
    itemImage: {
      logo: true,
      type: "land",
      title: "Parcel #25",
      size: "MEGA",
      district: "BUSINESS",
      mainImage: "/images/land.png",
    },
    hash,
  };

  const cancelDialogContent = {
    dialogTitleText: "TRANSACTION FAILED",
    dialogType: "error",
    displaySocialLogo: false,
    dialogActionText: "Transaction failed. Please check your wallet.",
    itemImage: {
      logo: true,
      type: "land",
      title: "Parcel #25",
      size: "MEGA",
      district: "BUSINESS",
      mainImage: "/images/land.png",
    },
    hash,
  };

  return (
    <>
      {open && (
        <Container>
          <Dialog
            processOpen={status === "progress"}
            dialogTitle="Transaction in progress"
            onClose={onClose}
            open={status === "progress"}
            dialogActions={<>Transaction is in progress...</>}
            sx={TransactionDialogStyle}
          />
          <SuccessDialog
            dialogContent={successDialogContent}
            open={status === "success"}
            handleOpen={onClose}
          />
          <SuccessDialog
            dialogContent={cancelDialogContent}
            open={status === "failed"}
            handleOpen={onClose}
          />
        </Container>
      )}
    </>
  );
};

export default TransactionDialog;
