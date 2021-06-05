import React from "react";

export interface FormInputProps {
  id: string;
  value: string;
  placeholder: string;
  type?: "text" | "password" | "date";
  onChangeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurFunction?: (event: React.FocusEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
}
