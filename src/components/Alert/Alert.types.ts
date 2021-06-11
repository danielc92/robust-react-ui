import { ReactNode } from 'react';

// Generated with util/create-component.js
export interface AlertProps {
  children: ReactNode;
  /**
   * Provides component with a colour theme.
   * @default primary
   */
  variant?: 'primary' | 'success' | 'danger';
  fullWidth?: boolean;
  visible?: boolean;
  onCloseActionFunction?: (visibleState: boolean) => void;
}
