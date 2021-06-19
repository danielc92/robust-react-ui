import { ReactNode } from 'react';

export interface IContainerProps {
  children: ReactNode;
  /**
   * Size setting for component.
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
}
