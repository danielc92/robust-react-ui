import React from 'react';

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
