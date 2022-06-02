import type { Theme, SystemStyleObject } from "@mui/system";

type CallbackStyle = (theme: Theme) => SystemStyleObject;

export interface SxStyles {
  [key: string]: SystemStyleObject | CallbackStyle;
}

export type TxStatus = "success" | "failed" | "progress";
