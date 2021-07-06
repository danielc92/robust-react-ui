import { ReactNode } from 'react';

// Generated with util/create-component.js

export interface ITabListTabProps {
  /**
   * Provides the component with an id attribute. May be used for accessibility purposes.
   */
  tabId: string;
  buttonLabel: string;
  /**
   * Provides the component with an id attribute. May be used for accessibility purposes.
   */
  buttonId: string;
  tabContent: string | ReactNode;
}
export interface ITabListProps {
  /**
   * An accessible label.
   */
  ariaLabel?: string;
  /**
   * Provides component with a colour theme.
   * @default primary
   */
  variant?: 'primary' | 'danger' | 'success' | 'secondary';
  /**
   * Data supporting an array of tabs.
   */
  tabs: Array<ITabListTabProps>;
  /**
   * Component will take up the full width available.
   * @default false
   */
  fullWidth?: boolean;
}
