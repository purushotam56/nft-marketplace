import React from "react";

import { Box, TextField } from "@mui/material";

import Select from "@/components/UI/Select";

import {
  InputGroupStyle,
  DailogContentStyle,
  selectStyleMenu,
} from "./Dialog.style";
import HelpLabel from "./HelpLabel";
import { SelectInputProps } from "./Type";
const SelectInput = (props: SelectInputProps) => {
  const selectOptions = [];
  props.selectInput.forEach((data) => {
    selectOptions.push({
      label: (
        <Box display="flex" alignItems="center">
          {data.icon}
          <span>{data.label}</span>
        </Box>
      ),
      value: data.value,
    });
  });
  const [select, setSelect] = React.useState<string>(props.selected);
  const [inputValue, setInputValue] = React.useState(props.inputTextValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <Box sx={InputGroupStyle.formControl}>
      <Box
        sx={DailogContentStyle.formLabel}
        className="font-play d-flex align-items-center"
      >
        <HelpLabel label={props.label} />
      </Box>
      <Box sx={InputGroupStyle.inputGroup}>
        <Select
          className="selectInput"
          value={select}
          onChange={(event) => setSelect(event.target.value as string)}
          MenuProps={{ sx: selectStyleMenu.selectStyle }}
          options={selectOptions}
        />
        {/* <TextField  id="standard-basic" label="Standard" variant="standard" /> */}
        <TextField
          className="textInput"
          variant="standard"
          value={inputValue}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default SelectInput;
