import { ReactNode } from 'react';

export interface IColumnProps {
  children: ReactNode;
  /**
   * Size setting for component.
   * @default quarter
   */
  size?: 'third' | 'half' | 'quarter';
}
