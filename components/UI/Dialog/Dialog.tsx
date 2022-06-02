import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog as MUIDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  SxProps,
  Backdrop,
  Box,
} from "@mui/material";
import { SystemStyleObject, Theme } from "@mui/system";

import { DialogStyle } from "@/components/UI/Dialog/Dialog.style";
import type { DialogType } from "@/components/UI/Dialog/Dialog.types";

const Dialog = (props: DialogType) => {
  const {
    children,
    dialogTitle,
    dialogActions,
    processOpen,
    onClose,
    variant = "primary",
    sx = {},
    titleSx = {},
    contentSx = {},
    actionSx = {},
    ...rest
  } = props;

  const DialogStyles: SxProps<Theme> = (theme) => {
    const style = DialogStyle(theme, variant);

    return { ...style, ...sx } as SystemStyleObject;
  };

  return (
    <MUIDialog {...rest} sx={DialogStyles}>
      <DialogTitle id="customized-dialog-title" sx={titleSx}>
        {dialogTitle}
        <IconButton
          onClick={onClose}
          aria-label="close"
          className="MuiDialog-close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={contentSx}>
        {children}
        <Backdrop open={!processOpen ? false : true}>
          <Box>
            <img src="/images/netvrk-loading.gif" width="150" alt="Menu" />
          </Box>
        </Backdrop>
      </DialogContent>
      <DialogActions sx={actionSx}>{dialogActions}</DialogActions>
    </MUIDialog>
  );
};

export default Dialog;
