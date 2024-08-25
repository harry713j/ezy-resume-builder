import React from "react";
import { IconButton, Tooltip } from "@mui/material";

function Iconbutton({ children, Icon, type = "button", color, ...props }) {
  return (
    <Tooltip placement="top" title={children}>
      <IconButton
        type={type}
        className="icon__button"
        sx={{
          "&.MuiIconButton-root": {
            "& svg": {
              fill: color,
            },
          },
        }}
        {...props}
      >
        <Icon />
      </IconButton>
    </Tooltip>
  );
}

export default Iconbutton;
