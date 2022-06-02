import React from "react";

import { MenuItem, Select as MUISelect } from "@mui/material";
import type { SxProps } from "@mui/material";
import type { Theme, SystemStyleObject } from "@mui/system";

import { SelectStyle } from "@/components/UI/Select/Select.styles";
import type { SelectType } from "@/components/UI/Select/Select.types";

const Select = (props: SelectType) => {
  const { options, sx = {}, ...rest } = props;

  const SelectStyles: SxProps<Theme> = (theme) => {
    const style = SelectStyle(theme);

    return { ...style, ...sx } as SystemStyleObject;
  };

  return (
    <MUISelect sx={SelectStyles} displayEmpty {...rest}>
      {options.map(({ label, value, MenuItemProps }, index) => (
        <MenuItem key={index} value={value} inlist={MenuItemProps}>
          {label}
        </MenuItem>
      ))}
    </MUISelect>
  );
};

export default Select;
