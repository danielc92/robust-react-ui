// Generated with util/create-component.js

export interface PaginationButtonProps {
  current: boolean;
  href: string;
  pageNumber: number;
}
export interface PaginationProps {
  rounded?: boolean;
  /**
   * An accessible name.
   */
  ariaLabel?: string;
  data: PaginationButtonProps[];
}
