import { ReactNode } from 'react';

export interface ParagraphProps {
  children: ReactNode;
  id?: string;
  bolded?: boolean;
  /**
   * Size setting for component.
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
}
