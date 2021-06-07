import { ReactNode } from 'react';

export interface AccordionPanelProps {
  children: ReactNode;
  panelTitle: string;
  panelId: string;
  activePanel?: string;
  onSelectPanelFunction?: (panelId: string) => void;
  handleFocusPrevious?: (_index: number) => void;
  handleFocusNext?: (_index: number) => void;
  handleFocusFirst?: () => void;
  handleFocusLast?: () => void;
  index?: number;
}
