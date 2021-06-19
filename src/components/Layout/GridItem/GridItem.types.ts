import { ReactNode } from 'react';

export interface GridItemProps {
  children?: ReactNode;
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
  /**
   * Used for custom positioning with 'fixed'.
   */
  config?: {
    rowStart: number;
    colStart: number;
    width: number;
    height: number;
  };
  /**
   * Colour theme.
   * @default primary
   */
  variant?: 'primary' | 'dark' | 'light' | 'success' | 'danger';
}
