import { ReactNode } from 'react';

// Generated with util/create-component.js

export interface TabListTab {
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
   * An accessible name.
   */
  ariaLabel?: string;
  variant?: 'primary' | 'danger' | 'success' | 'secondary';
  tabs: Array<TabListTab>;
  fullWidth?: boolean;
}
