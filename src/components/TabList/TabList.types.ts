import { ReactNode } from 'react';

// Generated with util/create-component.js

export interface TabListTab {
  tabId: string;
  buttonLabel: string;
  buttonId: string;
  tabContent: string | ReactNode;
}
export interface TabListProps {
  ariaLabel?: string;
  variant?: 'primary' | 'danger' | 'success' | 'secondary';
  tabs: Array<TabListTab>;
  fullWidth?: boolean;
}
