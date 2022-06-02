import React from "react";

import {
  CheckBoxOutlineBlankOutlined as CheckBoxOutlineBlankOutlinedIcon,
  CheckBoxOutlined as CheckBoxOutlinedIcon,
} from "@mui/icons-material";
import type { SxProps } from "@mui/material";
import { Checkbox as MUICheckbox, FormControlLabel } from "@mui/material";
import type { SystemStyleObject, Theme } from "@mui/system";

import { CheckboxStyle } from "@/components/UI/Checkbox/Checkbox.styles";
import { CheckboxType } from "@/components/UI/Checkbox/Checkbox.types";

const Checkbox = (props: CheckboxType) => {
  const { label, labelProps = {}, sx = {}, ...rest } = props;

  const CheckboxStyles: SxProps<Theme> = (theme) => {
    const style = CheckboxStyle(theme);

    return { ...style, ...sx } as SystemStyleObject;
  };

  return (
    <FormControlLabel
      {...labelProps}
      label={label}
      control={
        <MUICheckbox
          icon={<CheckBoxOutlineBlankOutlinedIcon />}
          checkedIcon={<CheckBoxOutlinedIcon />}
          sx={CheckboxStyles}
          {...rest}
        />
      }
    />
  );
};

export default Checkbox;
