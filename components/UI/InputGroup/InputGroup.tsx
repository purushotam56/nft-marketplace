import React from "react";

import HelpIcon from "@mui/icons-material/Help";
import { Box, TextField } from "@mui/material";

import { InputGroupStyle } from "@/components/UI/InputGroup/InputGroup.styles";
import { InputGroupType } from "@/components/UI/InputGroup/InputGroup.types";
import Select from "@/components/UI/Select";

const InputGroup = (props: InputGroupType) => {
  const { label = "price", value = "", selected = "", options } = props;

  const [select, setSelect] = React.useState<string>(selected);

  const selectOption = [];
  options.forEach((element) => {
    const option = {
      label: (
        <Box display="flex" alignItems="center">
          {element.icon}
          <span>{element.text}</span>
        </Box>
      ),
      value: element.value,
    };
    selectOption.push(option);
  });

  return (
    <Box sx={InputGroupStyle.formControl}>
      <Box
        sx={InputGroupStyle.formLabel}
        className="font-play d-flex align-items-center"
      >
        {label} <HelpIcon />
      </Box>
      <Box sx={InputGroupStyle.inputGroup}>
        <Select
          className="selectInput"
          value={select}
          onChange={(event) => setSelect(event.target.value as string)}
          MenuProps={{ sx: InputGroupStyle.selectStyle }}
          options={selectOption}
        />
        <TextField className="textInput" variant="standard" value={value} />
      </Box>
    </Box>
  );
};

export default InputGroup;
