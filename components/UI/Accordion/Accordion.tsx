import React from "react";

import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import type { SxProps } from "@mui/material";
import {
  Accordion as MUIAccordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import type { SystemStyleObject, Theme } from "@mui/system";
import clsx from "clsx";

import { AccordionStyle } from "@/components/UI/Accordion/Accordion.style";
import type { AccordionType } from "@/components/UI/Accordion/Accordion.types";

const Accordion = (props: AccordionType) => {
  const {
    children,
    label,
    container = false,
    item = false,
    sx = {},
    summarySx = {},
    detailsSx = {},
    icon = null,
    ...rest
  } = props;
  const isTitleString = typeof label === "string";

  const AccordionStyles: SxProps<Theme> = (theme) => {
    const style = AccordionStyle(theme);

    return { ...style, ...sx } as SystemStyleObject;
  };

  return (
    <MUIAccordion {...rest} sx={AccordionStyles} disableGutters>
      <AccordionSummary
        sx={summarySx}
        className={clsx({
          "AccordionSummary-Container": container,
          "AccordionSummary-Item": item,
        })}
        expandIcon={
          icon ?? <ExpandMoreIcon className="AccordionSummary-Expand-Icon" />
        }
      >
        {isTitleString ? (
          <Typography
            component="span"
            className={clsx("AccordionSummary-Label", {
              "AccordionSummary-Container-Label": container,
            })}
          >
            {label}
          </Typography>
        ) : (
          label
        )}
      </AccordionSummary>
      <AccordionDetails sx={detailsSx}>{children}</AccordionDetails>
    </MUIAccordion>
  );
};

export default Accordion;
