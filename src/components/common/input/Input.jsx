import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Password, Visibility, VisibilityOff } from "@mui/icons-material";
import "./input.scss";

const Input = React.forwardRef(function (
  { label, type = "text", ...props },
  ref
) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <TextField
        ref={ref}
        type={showPassword ? "text" : type}
        label={label}
        className="input"
        variant="outlined"
        InputProps={
          type === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : {}
        }
        {...props}
      />
    </>
  );
});

export default Input;
