import { ReactNode } from 'react';

// Generated with util/create-component.js

export interface TabListTabProps {
  /**
   * Provides the component with an id attribute. May be used for accessibilty purposes.
   */
  tabId: string;
  buttonLabel: string;
  /**
   * Provides the component with an id attribute. May be used for accessibilty purposes.
   */
  buttonId: string;
  tabContent: string | ReactNode;
}
export interface TabListProps {
  /**
   * An accessible label.
   */
  ariaLabel?: string;
  /**
   * Provides component with a colour theme.
   * @default primary
   */
  variant?: 'primary' | 'danger' | 'success' | 'secondary';
  tabs: Array<TabListTabProps>;
  /**
   * Component will take up the full width available.
   */
  fullWidth?: boolean;
}
