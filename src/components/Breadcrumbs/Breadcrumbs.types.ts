// Generated with util/create-component.js
export interface Breadcrumb {
  linkHref: string | null;
  linkText: string;
  isCurrent: boolean;
}
export interface BreadcrumbsProps {
  ariaLabel?: string;
  data: Array<Breadcrumb>;
  size?: 'small' | 'medium' | 'large';
}
