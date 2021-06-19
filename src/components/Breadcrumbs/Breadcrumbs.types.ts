// Generated with util/create-component.js
export interface BreadcrumbProps {
  linkHref: string | null;
  linkText: string;
  isCurrent: boolean;
}
export interface BreadcrumbsProps {
  /**
   * An accessible label.
   */
  ariaLabel?: string;
  data: Array<BreadcrumbProps>;
  /**
   * Size setting for component.
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
}
