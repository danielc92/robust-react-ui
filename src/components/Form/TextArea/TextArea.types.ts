import React from 'react';

export interface IFormTextAreaProps {
  /**
   * Provides the component with an id attribute. May be used for accessibility purposes.
   */
  id: string;
  /**
   * Maps to the name attribute
   */
  name: string;
  /**
   * Controlled value for the TextArea
   */
  value: string;
  /**
   * Placeholder text
   */
  placeholder: string;
  /**
   * Function triggered interally, used when onChange event is activated.
   */
  onChangeFunction: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * A function triggered when component loses focus.
   */
  onBlurFunction?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  rows?: number;
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
