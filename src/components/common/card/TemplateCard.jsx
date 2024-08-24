import React from "react";
import { Card, CardMedia, CardContent } from "@mui/material";
import { Button } from "../../index.js";
import { selectTemplate } from "../../../store/slices/userDetailsSlice.js";
import "./templatecard.scss";

function TemplateCard({ template, navigate, dispatch }) {
  return (
    <Card className="card">
      <CardMedia
        className="card__media"
        component="img"
        image={template?.image}
        alt={template?.name}
      />
      <CardContent className="card__content">
        <Button
          onClick={() => {
            dispatch(selectTemplate(template?.name));
            navigate("/user-details/personal-info");
          }}
        >
          select template
        </Button>
      </CardContent>
    </Card>
  );
}

export default TemplateCard;
