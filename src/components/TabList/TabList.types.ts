import { ReactNode } from "react";

// Generated with util/create-component.js

export interface TabListTab {
  tabId: string;
  buttonLabel: string;
  ariaControlsId: string;
  tabContent: string | ReactNode;
}
export interface TabListProps {
  ariaLabel?: string;
  tabs: Array<TabListTab>;
  fullWidth?: boolean;
}
