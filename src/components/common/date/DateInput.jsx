import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "./dateInput.scss";

const DateInput = React.forwardRef(function (
  { label, helperText = " ", value, onChange, ...props },
  ref
) {
  const handleDateChange = (newValue) => {
    // console.log("date selected : ", newValue);

    const formattedDate = newValue ? newValue.toISOString() : null;
    onChange(formattedDate);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        ref={ref}
        value={value ? dayjs(value) : null}
        onChange={handleDateChange}
        label={label}
        format="LL"
        slotProps={{
          textField: {
            helperText: helperText,
          },
        }}
        className="date__picker"
        {...props}
      />
    </LocalizationProvider>
  );
});

export default DateInput;
