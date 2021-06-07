import { ReactNode } from 'react';

export interface AccordionProps {
  children: ReactNode;
  activePanel: string;
  fullWidth?: boolean;
  onSelectPanelFunction: (panelId: string) => void;
}
