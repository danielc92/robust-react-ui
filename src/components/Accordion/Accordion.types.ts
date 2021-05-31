import { ReactNode } from "react";

export interface AccordionProps {
  children: ReactNode;
  activePanel: string;
  fullWidth?: boolean;
  onSelectPanelFunction: (panelId: string) => void;
}
export interface AccordionPanelProps {
  children: ReactNode;
  panelTitle: string;
  panelId: string;
  activePanel?: string;
  _onSelectPanelFunction?: (panelId: string) => void;
  _handleFocusPrevious?: (_index: number) => void;
  _handleFocusNext?: (_index: number) => void;
  _handleFocusFirst?: () => void;
  _handleFocusLast?: () => void;
  _index?: number;
}
