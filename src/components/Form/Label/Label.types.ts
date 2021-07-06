import { ReactNode } from 'react';

export interface IFormLabelProps {
  children: ReactNode;
  htmlFor?: string;
  /**
   * Provides the component with an id attribute. May be used for accessibility purposes.
   */
  id?: string;
  required?: boolean;
}
