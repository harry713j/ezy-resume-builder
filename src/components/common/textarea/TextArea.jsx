import React from "react";
import { TextField } from "@mui/material";

import "./textarea.scss";

const TextArea = React.forwardRef(function ({ label, ...props }, ref) {
  return (
    <>
      <TextField
        ref={ref}
        label={label}
        className="textarea"
        variant="outlined"
        multiline
        rows={4}
        {...props}
      />
    </>
  );
});

export default TextArea;
