import { AccordionProps, SxProps } from "@mui/material";
import { Theme } from "@mui/system";

export interface AccordionType extends AccordionProps {
  label: string | JSX.Element;
  container?: boolean;
  item?: boolean;
  summarySx?: SxProps<Theme>;
  detailsSx?: SxProps<Theme>;
  icon?: JSX.Element | null | boolean;
}
