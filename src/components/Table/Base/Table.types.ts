import { ReactNode } from 'react';

/**
 * Props for the Table (base) component.
 */
export interface TableProps {
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
   * Provides the component with an id attribute. May be used for accessibilty purposes.
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
