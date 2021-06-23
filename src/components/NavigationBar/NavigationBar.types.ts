// Generated with util/create-component.js

export interface INavigationDataProps {
  parentId: null | number;
  id: number;
  linkName: string;
  linkHref?: string;
  children?: INavigationDataProps[];
  hasSeparator?: boolean;
}
export interface INavigationBarProps {
  data: INavigationDataProps[];
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
