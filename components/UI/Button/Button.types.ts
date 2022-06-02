import type { ButtonProps } from "@mui/material";

export type ButtonVariantType =
  | "filled"
  | "danger-filled"
  | "dark-filled"
  | "outlined"
  | "double-outlined";

export interface ButtonType extends Omit<ButtonProps, "size" | "variant"> {
  title?: string;
  icon?: string;
  iconSize?: number | string;
  variant?: ButtonVariantType;
}
