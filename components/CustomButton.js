/** @jsx jsx */ /** @jsxRuntime classic */
import React from "react";
import { jsx } from "@emotion/react";
import { Button } from "@material-ui/core";

export default function CustomButton({
  variant = "outlined",
  color = "primary",
  label,
}) {
  return (
    <>
      <Button color={color} variant={variant}>
        {label}
      </Button>
    </>
  );
}
