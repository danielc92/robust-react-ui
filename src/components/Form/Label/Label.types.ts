import { ReactNode } from 'react';

export interface FormLabelProps {
  children: ReactNode;
  htmlFor?: string;
  /**
   * Provides the component with an id attribute. May be used for accessibilty purposes.
   */
  id?: string;
  required?: boolean;
}
