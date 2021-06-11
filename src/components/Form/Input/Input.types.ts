import React from 'react';

export interface FormInputProps {
  /**
   * Provides the component with an id attribute. May be used for accessibilty purposes.
   */
  id: string;
  value: string;
  placeholder: string;
  type?: 'text' | 'password' | 'date';
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
