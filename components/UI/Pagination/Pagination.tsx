import React from "react";

import {
  ArrowBackIosNewOutlined as ArrowBackIosNewOutlinedIcon,
  ArrowForwardIosOutlined as ArrowForwardIosOutlinedIcon,
} from "@mui/icons-material";
import {
  PaginationItem,
  SxProps,
  Pagination as MUIPagination,
} from "@mui/material";
import type { SystemStyleObject, Theme } from "@mui/system";

import { PaginationStyle } from "@/components/UI/Pagination/Pagination.styles";
import type { PaginationType } from "@/components/UI/Pagination/Pagination.types";

const Pagination = (props: PaginationType) => {
  const { page, totalSize, limit = 10, sx = {}, ...rest } = props;

  const PaginationStyles: SxProps<Theme> = (theme) => {
    const style = PaginationStyle(theme);

    return { ...style, ...sx } as SystemStyleObject;
  };

  return (
    <MUIPagination
      {...rest}
      page={page}
      count={Math.ceil(totalSize / limit)}
      boundaryCount={2}
      siblingCount={2}
      shape="rounded"
      variant="outlined"
      sx={PaginationStyles}
      renderItem={(item) => (
        <PaginationItem
          {...item}
          components={{
            previous: ArrowBackIosNewOutlinedIcon,
            next: ArrowForwardIosOutlinedIcon,
          }}
        />
      )}
    />
  );
};

export default Pagination;
