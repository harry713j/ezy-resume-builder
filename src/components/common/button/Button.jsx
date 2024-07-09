import React from "react";
import { Button as Btn } from "@mui/material";
import "./button.scss";

function Button({
  children,
  type = "button",
  variant = "contained",
  startIcon = undefined,
  endIcon = undefined,
  ...props
}) {
  return (
    <Btn
      type={type}
      className={
        variant === "contained"
          ? "button__contained"
          : variant === "outlined"
            ? "button__outlined"
            : "button__text"
      }
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    >
      {children}
    </Btn>
  );
}

export default Button;
