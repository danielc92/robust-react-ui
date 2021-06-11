// Generated with util/create-component.js

export interface NavigationData {
  parentId: null | number;
  id: number;
  linkName: string;
  linkHref?: string;
  children?: NavigationData[];
  hasSeparator?: boolean;
}
export interface NavigationBarProps {
  data: NavigationData[];
  onEnterLinkFunction?: (href: string) => void;
  /**
   * An accessible name.
   */
  ariaLabel: string;
  id?: string;
}
