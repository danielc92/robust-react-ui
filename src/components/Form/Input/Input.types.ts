import React from 'react';

export interface IFormInputProps {
  /**
   * Provides the component with an id attribute. May be used for accessibilty purposes.
   */
  id: string;
  /**
   * Maps to the name attribute
   */
  name: string;
  /**
   * Controlled value for the Input
   */
  value: string;
  /**
   * Placeholder text
   */
  placeholder: string;
  type?: 'color' | 'text' | 'password' | 'date';
  /**
   * Function triggered interally, used when onChange event is activated.
   */
  onChangeFunction: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * A function triggered when component loses focus.
   */
  onBlurFunction?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Component will take up the full width available.
   */
  fullWidth?: boolean;
  error?: boolean;
  errorMessage?: string;
  /**
   * Controls the disabled state.
   */
  disabled?: boolean;
}
