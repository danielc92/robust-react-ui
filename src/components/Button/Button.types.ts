import React from 'react';

// Generated with util/create-component.js
export interface ButtonProps {
  /**
   * Size setting for component.
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Provides component with a colour theme.
   * @default primary
   */
  variant?: 'primary' | 'danger' | 'success' | 'secondary';
  children: React.ReactNode;
  /**
   * Provides the component with an id attribute. May be used for accessibilty purposes.
   */
  id?: string;
  tabIndex?: number;
  ariaControls?: string;
  onClickFunction?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onKeyDownFunction?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}
