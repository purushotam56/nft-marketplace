export type DialogVariantType = "cancel" | "delete" | "discard";

type DialogContent = {
  dialogTitleText: string | JSX.Element;
  primaryText: string;
  secondaryText: string;
  buttonText: string;
  dialogType?: DialogVariantType;
  dialogActionType?: string;
};

export interface DialogType {
  handleOpen: any;
  handleCancelBack: any;
  open?: boolean;
  dialogContent: DialogContent;
  handleCancel(): void;
}
