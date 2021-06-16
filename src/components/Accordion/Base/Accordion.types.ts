import { ReactNode } from 'react';

export interface AccordionProps {
  children: ReactNode;
  activePanel: string;
  /**
   * Component will take up the full width available.
   */
  fullWidth?: boolean;
  onSelectPanelFunction: (panelId: string) => void;
}
