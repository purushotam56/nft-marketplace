import { DialogProps, SxProps } from "@mui/material";
import { Theme } from "@mui/system";

export type DialogVariantType = "primary" | "success" | "error";

export interface DialogType extends DialogProps {
  dialogTitle: string | JSX.Element;
  dialogActions: string | JSX.Element;
  titleSx?: SxProps<Theme>;
  contentSx?: SxProps<Theme>;
  actionSx?: SxProps<Theme>;
  onClose?: any;
  variant?: DialogVariantType;
  processOpen?: any;
}
