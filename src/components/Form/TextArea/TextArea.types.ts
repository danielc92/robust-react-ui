import React from 'react';

export interface FormTextAreaProps {
  /**
   * Provides the component with an id attribute. May be used for accessibilty purposes.
   */
  id: string;
  value: string;
  placeholder: string;
  onChangeFunction: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * A function triggered when component loses focus.
   */
  onBlurFunction?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  fullWidth?: boolean;
  error?: boolean;
  errorMessage?: string;
  /**
   * Controls the disabled state.
   */
  disabled?: boolean;
}
