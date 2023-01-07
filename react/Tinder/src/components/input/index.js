import { TextField } from "@mui/material";
import React from "react";

export const TinderInput = ({
  isError,
  name,
  label,
  type,
  value,
  onChange,
  helperText,
  ...props
}) => {
  return (
    <TextField
      error={isError}
      margin="normal"
      required
      fullWidth
      name={name}
      label={label}
      type={type}
      id={name}
      value={value}
      onChange={onChange}
      helperText={helperText}
      {...props}
    />
  );
};
