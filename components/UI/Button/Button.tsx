import React from "react";

import {
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
} from "@mui/icons-material";
import { Button as MUIButton, Box, Typography } from "@mui/material";
import type { SxProps } from "@mui/material";
import { SystemStyleObject, Theme } from "@mui/system";
import clsx from "clsx";
import Image from "next/image";

import { ButtonStyle } from "@/components/UI/Button/Button.styles";
import type { ButtonType } from "@/components/UI/Button/Button.types";

const Button = (props: ButtonType) => {
  const {
    sx = {},
    title = undefined,
    icon = undefined,
    iconSize = undefined,
    variant = "filled",
    ...rest
  } = props;

  const ButtonStyles: SxProps<Theme> = (theme) => {
    const style = ButtonStyle(theme);

    return { ...style, ...sx } as SystemStyleObject;
  };

  return (
    <MUIButton
      className={clsx({
        "CCButton-filled": variant === "filled",
        "CCButton-danger-filled": variant === "danger-filled",
        "CCButton-dark-filled": variant === "dark-filled",
        "CCButton-outlined": variant === "outlined",
        "CCButton-double-outlined": variant === "double-outlined",
        "CCButton-icon-only": !title && icon,
        "CCButton-title-icon": title && icon,
      })}
      sx={ButtonStyles}
      {...rest}
    >
      {icon && <Image src={icon} width={iconSize} height={iconSize} />}
      {title && (
        <Box className="CCButton-text" component="span">
          {variant === "double-outlined" && (
            <Box component="span">
              <ChevronRightIcon />
              <ChevronRightIcon />
              <ChevronRightIcon />
              <ChevronRightIcon />
            </Box>
          )}
          <Typography>{title}</Typography>
          {variant === "double-outlined" && (
            <Box component="span">
              <ChevronLeftIcon />
              <ChevronLeftIcon />
              <ChevronLeftIcon />
              <ChevronLeftIcon />
            </Box>
          )}
        </Box>
      )}
    </MUIButton>
  );
};

export default Button;
