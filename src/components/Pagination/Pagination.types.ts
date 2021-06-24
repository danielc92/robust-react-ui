// Generated with util/create-component.js

export interface IPaginationButtonProps {
  current: boolean;
  href: string;
  pageNumber: number;
}
export interface IPaginationProps {
  /**
   * Enables a rounded button theme.
   */
  rounded?: boolean;
  /**
   * An accessible label.
   */
  ariaLabel?: string;
  /**
   * Data supporting an array of pagination buttons
   */
  data: IPaginationButtonProps[];
}
