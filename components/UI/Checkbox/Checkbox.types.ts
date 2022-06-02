import { CheckboxProps, FormControlLabelProps } from "@mui/material";

export interface CheckboxType extends CheckboxProps {
  label: string;
  labelProps?: Partial<FormControlLabelProps>;
  icon?: string;
  checkedIcon?: string;
}
