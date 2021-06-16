import { ReactNode } from 'react';

export interface ColumnProps {
  children: ReactNode;
  /**
   * Size setting for component.
   * @default quarter
   */
  size?: 'third' | 'half' | 'quarter';
}
