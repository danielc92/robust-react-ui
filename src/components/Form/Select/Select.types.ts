import React from 'react';

export interface FormSelectOptionProps {
  displayValue: string;
  keyValue: string;
}

export interface FormSelectProps {
  /**
   * Provides the component with an id attribute. May be used for accessibilty purposes.
   */
  id: string;
  multiple?: boolean;
  selectedValue: string | string[];
  values: Array<FormSelectOptionProps>;
  onChangeFunction: (event: React.FocusEvent<HTMLSelectElement>) => void;
  onBlurFunction?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  /**
   * Controls the disabled state.
   */
  disabled?: boolean;
}
