import { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  /**
   * Size setting for component.
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
}
