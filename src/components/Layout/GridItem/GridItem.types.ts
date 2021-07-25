import { ReactNode } from 'react';

export interface IGridItemProps {
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
  /**
   * The tag name, defaults to DIV tag
   * @default div
   */
   tagName?: 'div' | 'aside' | 'main' | 'section';
   /**
    * An accessible label via id of another element.
    */
   ariaLabelledBy?: string;
   /**
    * An accessible label.
    */
   ariaLabel?: string;
   /**
    * Unique id for the component
    */
   id?: string;
}
