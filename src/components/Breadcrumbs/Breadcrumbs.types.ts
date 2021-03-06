// Generated with util/create-component.js
export interface IBreadcrumbProps {
  linkHref: string | null;
  linkText: string;
  isCurrent: boolean;
}
export interface IBreadcrumbsProps {
  /**
   * An accessible label.
   */
  ariaLabel?: string;
  /**
   * Data supporting an array of breadcrumbs
   */
  data: Array<IBreadcrumbProps>;
  /**
   * Size setting for component.
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
}
