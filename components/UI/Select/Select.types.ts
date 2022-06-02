import { SelectProps } from "@mui/material";

interface Option {
  label: string | JSX.Element;
  value: string | number | null;
  MenuItemProps?: Record<string, unknown>;
}

export interface SelectType extends SelectProps {
  options: Array<Option>;
}
