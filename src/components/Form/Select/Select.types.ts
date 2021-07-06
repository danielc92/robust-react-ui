import React from 'react';

export interface IFormSelectOptionProps {
  displayValue: string;
  keyValue: string;
}

export interface IFormSelectProps {
  /**
   * Provides the component with an id attribute. May be used for accessibilty purposes.
   */
  id: string;
  multiple?: boolean;
  /**
   * Controlled selected value
   */
  selectedValue: string | string[];
  /**
   * An array of values, each with a display name and key value.
   */
  values: Array<IFormSelectOptionProps>;
  /**
   * Function triggered interally, used when onChange event is activated.
   */
  onChangeFunction: (event: React.FocusEvent<HTMLSelectElement>) => void;
  /**
   * A function triggered when component loses focus.
   */
  onBlurFunction?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  /**
   * Controls the disabled state.
   */
  disabled?: boolean;
}
