import React from 'react';

// Generated with util/create-component.js
export interface IButtonProps {
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
  /**
   * Creates equal padding vertically and horizontally
   * @default false
   */
  square?: boolean;
  /**
   * An accessible label.
   */
  ariaLabel?: string;

  ariaControls?: string;
  /**
   * A function to be triggered on mouse click event.
   */
  onClickFunction?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  /**
   * A function to be triggered on keydown event.
   */
  onKeyDownFunction?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}
