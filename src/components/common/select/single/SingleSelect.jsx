import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  FormHelperText,
} from "@mui/material";

import "./singleSelect.scss";

const SingleSelect = React.forwardRef(function (
  { label, items, helperText, ...props },
  ref
) {
  return (
    <FormControl className="select__container">
      <InputLabel className="select__label" id="select-label">
        {label}
      </InputLabel>
      <Select
        ref={ref}
        label={label}
        labelId="select-label"
        className="select"
        {...props}
      >
        {items.map((item) => (
          <MenuItem key={item} value={item} className="select__item">
            {item}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
});

export default SingleSelect;
