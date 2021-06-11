import { ReactNode } from 'react';

// Generated with util/create-component.js
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
   * An accessible name.
   */
  ariaLabel?: string;
  ariaDescribedBy?: string;
}
