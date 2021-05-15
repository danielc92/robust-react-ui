// Generated with util/create-component.js

export interface NavigationData {
  parentId: null | number;
  id: number;
  linkName: string;
  linkHref?: string;
  children?: NavigationData[];
}
export interface NavigationBarProps {
  data: NavigationData[];
  onEnterLinkHandler?: (href: string) => void;
  ariaLabel: string;
  id?: string;
}
