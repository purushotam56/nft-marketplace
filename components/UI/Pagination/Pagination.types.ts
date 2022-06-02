import type { PaginationProps } from "@mui/material";

export interface PaginationType extends PaginationProps {
  page: number;
  totalSize: number;
  limit?: number;
}
