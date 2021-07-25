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
