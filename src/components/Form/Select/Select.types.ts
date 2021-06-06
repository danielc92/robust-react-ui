import React from 'react';

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
