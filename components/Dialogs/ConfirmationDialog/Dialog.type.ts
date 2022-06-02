type DialogContent = {
  dialogTitleText: string | JSX.Element;
  dialogType?: string;
  dialogActionText: string;
  displaySocialLogo: boolean;
  itemImage: {
    logo: boolean;
    type: string;
    title: string;
    size: string;
    district: string;
    mainImage: string;
  };
  information?: Record<string, unknown>;
  hash?: string;
};
export interface DialogType {
  handleOpen: () => void;
  open: boolean;
  dialogContent: DialogContent;
}
