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
   * An accessible label.
   */
  ariaLabel: string;
  /**
   * Provides the component with an id attribute. May be used for accessibilty purposes.
   */
  id?: string;
}
