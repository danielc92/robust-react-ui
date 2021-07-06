import { ReactNode } from 'react';

/**
 * IProps for the Table (base) component.
 */
export interface ITableProps {
  children: ReactNode;
  /**
   * Adds a striped background pattern to Rows.
   */
  striped?: boolean;
  /**
   * Center content of Cells.
   */
  centerCellContent?: boolean;
  /**
   * Provides the component with an id attribute. May be used for accessibility purposes.
   */
  id?: string;
  /**
   * An accessible label.
   */
  ariaLabel?: string;
  /**
   * Indicate id of component used to describe this component.
   */
  ariaDescribedBy?: string;
}
