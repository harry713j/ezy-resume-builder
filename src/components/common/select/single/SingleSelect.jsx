import React from "react";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";

import "./singleSelect.scss";

const SingleSelect = React.forwardRef(function (
  { label, items, ...props },
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
    </FormControl>
  );
});

export default SingleSelect;
