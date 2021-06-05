import React, { ReactNode } from "react";

// Generated with util/create-component.js
export interface FormProps {
  children: ReactNode;
  onSubmitFunction: () => void;
  ariaDescribedBy?: string;
}

export interface FormFieldSetProps {
  children: ReactNode;
}
export interface CheckboxOptionProps {
  displayValue: string;
  keyValue: string;
  checked: boolean;
}
export interface FormCheckboxGroupProps {
  id: string;
  values: CheckboxOptionProps[];
  ariaLabelledBy: string;
  onSelectFunction: (keyValue: string, checkedValue: boolean) => void;
}

export interface FormLegendProps {
  id: string;
  children: ReactNode;
}
export interface FormSubmitProps {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "danger" | "success";
  value: string;
  id?: string;
}
export interface FormTextAreaProps {
  id: string;
  value: string;
  placeholder: string;
  onChangeFunction: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlurFunction?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  fullWidth?: boolean;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
}

export interface FormLabelProps {
  children: ReactNode;
  htmlFor?: string;
  id?: string;
  required?: boolean;
}

export interface FormSelectOptionProps {
  displayValue: string;
  keyValue: string;
}

export interface FormSelectProps {
  id: string;
  multiple?: boolean;
  selectedValue: string | string[];
  values: Array<FormSelectOptionProps>;
  onChangeFunction: (event: React.FocusEvent<HTMLSelectElement>) => void;
  onBlurFunction?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}

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
