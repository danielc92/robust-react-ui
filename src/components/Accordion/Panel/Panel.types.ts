import { ReactNode } from 'react';

export interface IAccordionPanelProps {
  children: ReactNode;
  panelTitle: string;
  /**
   * Provides the component with an id attribute. May be used for accessibility purposes.
   */
  panelId: string;
  activePanel?: string;
  onSelectPanelFunction?: (panelId: string) => void;
  handleFocusPrevious?: (_index: number) => void;
  handleFocusNext?: (_index: number) => void;
  handleFocusFirst?: () => void;
  handleFocusLast?: () => void;
  index?: number;
}
