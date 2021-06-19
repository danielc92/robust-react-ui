// Generated with util/create-component.js

export interface NavigationDataProps {
  parentId: null | number;
  id: number;
  linkName: string;
  linkHref?: string;
  children?: NavigationDataProps[];
  hasSeparator?: boolean;
}
export interface NavigationBarProps {
  data: NavigationDataProps[];
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
