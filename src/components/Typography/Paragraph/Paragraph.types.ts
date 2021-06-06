import { ReactNode } from 'react';

export interface ParagraphProps {
  children: ReactNode;
  id?: string;
  bolded?: boolean;
  size?: 'small' | 'medium' | 'large';
}
