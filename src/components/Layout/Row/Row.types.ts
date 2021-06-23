import { ReactNode } from 'react';

export interface IRowProps {
  children: ReactNode;
  /**
   * Wrap columns when they overflow.
   * @default true
   */
  wrap?: boolean;

  /**
   * @default stretch
   */
  alignY?: 'top' | 'bottom' | 'middle' | 'stretch';

  /**
   * @default left
   */
  alignX?: 'left' | 'right' | 'even-between' | 'even-around';
}
