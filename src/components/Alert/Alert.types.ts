import { ReactNode } from 'react';

// Generated with util/create-component.js
export interface IAlertProps {
  children: ReactNode;
  /**
   * Provides component with a colour theme.
   * @default primary
   */
  variant?: 'primary' | 'success' | 'danger';
  /**
   * Component will take up the full width available.
   */
  fullWidth?: boolean;
  /**
   * Controls the visibility of the Alert component
   */
  visible?: boolean;
  /**
   * Function triggered when the close button is activated
   */
  onCloseActionFunction?: (visibleState: boolean) => void;
}
