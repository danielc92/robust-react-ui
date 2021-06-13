import { ReactNode } from 'react';

// Generated with util/create-component.js
export interface LinkProps {
  children: ReactNode;
  /**
   * Size setting for component.
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  display?: 'inline' | 'block';
  href: string;
  /**
   * An accessible label.
   */
  ariaLabel?: string;
  /**
   * Indicate id of component used to describe this component.
   */
  ariaDescribedBy?: string;
}
