// Generated with util/create-component.js
export interface Breadcrumb {
  linkHref: string | null;
  linkText: string;
  isCurrent: boolean;
}
export interface BreadcrumbsProps {
  /**
   * An accessible name.
   */
  ariaLabel?: string;
  data: Array<Breadcrumb>;
  /**
   * Size setting for component.
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
}
