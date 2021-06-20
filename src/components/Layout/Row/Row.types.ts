import { ReactNode } from 'react';

export interface IRowProps {
  children: ReactNode;
  /**
   * Wrap columns when they overflow.
   * @default true
   */
  wrap?: boolean;
}
