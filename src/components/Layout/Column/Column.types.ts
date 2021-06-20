import { ReactNode } from 'react';

export interface IColumnProps {
  children: ReactNode;
  /**
   * Size setting for component.
   * @default quarter
   */
  size?: 'third' | 'half' | 'quarter';
  /**
   * The horizontal padding
   * @default s
   */
  paddingX?: 'xxs' | 'xs' | 's' | 'm' | 'l';
  /**
   * The vertical padding
   * @default s
   */
  paddingY?: 'xxs' | 'xs' | 's' | 'm' | 'l';
}
