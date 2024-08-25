import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Box,
  Chip,
  FormHelperText,
} from "@mui/material";
import { Clear } from "@mui/icons-material";
import "./multiSelect.scss";

const MultiSelect = React.forwardRef(function (
  { label, items, helperText = " ", value, onChange, ...props },
  ref
) {
  const handleDelete = (chipToDelete) => {
    onChange({
      target: {
        value: value.filter((v) => v !== chipToDelete),
      },
    });
  };
  return (
    <FormControl className="multiselect__container">
      <InputLabel className="multiselect__label" id="multi-select-chip-label">
        {label}
      </InputLabel>
      <Select
        ref={ref}
        label={label}
        multiple
        value={value || []}
        onChange={onChange}
        labelId="multi-select-chip-label"
        className="multi__select"
        input={<OutlinedInput id="multi-select-chip" label={label} />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip
                sx={{ backgroundColor: "#E4F6FF" }}
                key={value}
                label={value}
                onDelete={handleDelete(value)}
                deleteIcon={<Clear />}
              />
            ))}
          </Box>
        )}
        {...props}
      >
        {items.map((item) => (
          <MenuItem key={item} value={item} className="multiselect__item">
            {item}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
});
export default MultiSelect;
