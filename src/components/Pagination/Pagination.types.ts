// Generated with util/create-component.js

export interface IPaginationButtonProps {
  current: boolean;
  href: string;
  pageNumber: number;
}
export interface IPaginationProps {
  rounded?: boolean;
  /**
   * An accessible label.
   */
  ariaLabel?: string;
  data: IPaginationButtonProps[];
}
