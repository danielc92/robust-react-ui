import React, { ReactNode } from 'react';

export interface FormLabelProps {
  children: ReactNode;
  htmlFor?: string;
  id?: string;
  required?: boolean;
}
